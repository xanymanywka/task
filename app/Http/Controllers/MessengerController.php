<?php

namespace App\Http\Controllers;

use App\Models\Conversation;
use App\Models\Message;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class MessengerController extends Controller
{
    /**
     * Show messenger page with conversations list
     */
    public function index(Request $request)
    {
        $userId = Auth::id();

        $conversations = Conversation::whereHas('participants', fn($q) => $q->where('user_id', $userId))
            ->with([
                'participants:id,first_name,last_name,photo',
                'messages' => fn($q) => $q->latest()->limit(1),
                'messages.user:id,first_name,last_name',
            ])
            ->get()
            ->map(function ($conv) use ($userId) {
                $lastMsg = $conv->messages->first();
                return [
                    'id'           => $conv->id,
                    'type'         => $conv->type,
                    'name'         => $conv->displayNameFor($userId),
                    'participants' => $conv->participants->where('id', '!=', $userId)->values(),
                    'last_message' => $lastMsg ? [
                        'body'       => $lastMsg->body,
                        'created_at' => $lastMsg->created_at,
                        'user_name'  => $lastMsg->user->name ?? '',
                    ] : null,
                    'unread_count' => $conv->unreadCountFor($userId),
                ];
            })
            ->sortByDesc(fn($c) => $c['last_message']['created_at'] ?? null)
            ->values();

        $users = User::where('id', '!=', $userId)
            ->select('id', 'first_name', 'last_name', 'photo')
            ->get()
            ->map(fn($u) => ['id' => $u->id, 'name' => $u->name, 'photo' => $u->photo]);

        $activeConversationId = $request->query('conversation');
        $activeConversation = null;
        $messages = [];

        if ($activeConversationId) {
            $conv = Conversation::whereHas('participants', fn($q) => $q->where('user_id', $userId))
                ->with('participants:id,first_name,last_name,photo')
                ->findOrFail($activeConversationId);

            // Mark as read
            $conv->participants()->updateExistingPivot($userId, ['last_read_at' => now()]);

            $messages = Message::where('conversation_id', $conv->id)
                ->with('user:id,first_name,last_name,photo')
                ->orderBy('created_at')
                ->get()
                ->map(fn($m) => [
                    'id'         => $m->id,
                    'body'       => $m->body,
                    'user_id'    => $m->user_id,
                    'user_name'  => $m->user->name ?? '',
                    'user_photo' => $m->user->photo ?? null,
                    'created_at' => $m->created_at,
                    'is_mine'    => $m->user_id === $userId,
                ]);

            $activeConversation = [
                'id'           => $conv->id,
                'type'         => $conv->type,
                'name'         => $conv->displayNameFor($userId),
                'participants' => $conv->participants->where('id', '!=', $userId)->values(),
            ];
        }

        return Inertia::render('Messenger/Index', [
            'conversations'       => $conversations,
            'users'               => $users,
            'active_conversation' => $activeConversation,
            'messages'            => $messages,
        ]);
    }

    /**
     * Start or get direct conversation with a user
     */
    public function startDirect(Request $request)
    {
        $request->validate(['user_id' => 'required|exists:users,id']);

        $userId    = Auth::id();
        $otherUser = (int) $request->user_id;

        if ($userId === $otherUser) {
            return back()->withErrors(['user_id' => 'Cannot start conversation with yourself.']);
        }

        // Find existing direct conversation between these two users
        $existing = Conversation::where('type', 'direct')
            ->whereHas('participants', fn($q) => $q->where('user_id', $userId))
            ->whereHas('participants', fn($q) => $q->where('user_id', $otherUser))
            ->first();

        if ($existing) {
            return redirect()->route('messenger.index', ['conversation' => $existing->id]);
        }

        $conv = Conversation::create(['type' => 'direct', 'created_by' => $userId]);
        $conv->participants()->attach([$userId, $otherUser]);

        return redirect()->route('messenger.index', ['conversation' => $conv->id]);
    }

    /**
     * Create a group conversation
     */
    public function createGroup(Request $request)
    {
        $request->validate([
            'name'       => 'required|string|max:100',
            'user_ids'   => 'required|array|min:1',
            'user_ids.*' => 'exists:users,id',
        ]);

        $userId  = Auth::id();
        $members = array_unique(array_merge([$userId], $request->user_ids));

        $conv = Conversation::create([
            'type'       => 'group',
            'name'       => $request->name,
            'created_by' => $userId,
        ]);
        $conv->participants()->attach($members);

        return redirect()->route('messenger.index', ['conversation' => $conv->id]);
    }

    /**
     * Fetch messages for a conversation (polling)
     */
    public function messages(Request $request, Conversation $conversation)
    {
        $userId = Auth::id();

        // Ensure user is a participant
        if (!$conversation->participants()->where('user_id', $userId)->exists()) {
            return response()->json([], 403);
        }

        $after = $request->query('after'); // message ID for incremental fetch

        $query = Message::where('conversation_id', $conversation->id)
            ->with('user:id,first_name,last_name,photo')
            ->orderBy('created_at');

        if ($after) {
            $query->where('id', '>', $after);
        }

        $messages = $query->get()->map(fn($m) => [
            'id'         => $m->id,
            'body'       => $m->body,
            'user_id'    => $m->user_id,
            'user_name'  => $m->user->name ?? '',
            'user_photo' => $m->user->photo ?? null,
            'created_at' => $m->created_at,
            'is_mine'    => $m->user_id === $userId,
        ]);

        // Mark read
        $conversation->participants()->updateExistingPivot($userId, ['last_read_at' => now()]);

        return response()->json($messages);
    }

    /**
     * Send a message
     */
    public function send(Request $request, Conversation $conversation)
    {
        $request->validate(['body' => 'required|string|max:5000']);

        $userId = Auth::id();

        if (!$conversation->participants()->where('user_id', $userId)->exists()) {
            return response()->json(['error' => 'Forbidden'], 403);
        }

        $message = Message::create([
            'conversation_id' => $conversation->id,
            'user_id'         => $userId,
            'body'            => $request->body,
        ]);

        $user = Auth::user();

        return response()->json([
            'id'         => $message->id,
            'body'       => $message->body,
            'user_id'    => $message->user_id,
            'user_name'  => $user->name,
            'user_photo' => $user->photo ?? null,
            'created_at' => $message->created_at,
            'is_mine'    => true,
        ]);
    }

    /**
     * Get unread counts for all conversations (for header badge)
     */
    public function unreadCount()
    {
        $userId = Auth::id();

        $total = Conversation::whereHas('participants', fn($q) => $q->where('user_id', $userId))
            ->get()
            ->sum(fn($c) => $c->unreadCountFor($userId));

        return response()->json(['total' => $total]);
    }
}
