<?php

namespace App\Http\Controllers;

use App\Models\GoogleCalendarToken;
use App\Models\Task;
use App\Services\GoogleCalendarService;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class GoogleCalendarController extends Controller
{
    public function __construct(private GoogleCalendarService $service) {}

    /**
     * Redirect user to Google OAuth consent screen
     */
    public function redirect(): \Illuminate\Http\RedirectResponse
    {
        return redirect($this->service->getAuthUrl());
    }

    /**
     * Handle OAuth callback from Google
     */
    public function callback(Request $request): \Illuminate\Http\RedirectResponse
    {
        if ($request->has('error')) {
            return redirect()->route('profile.settings')
                ->with('error', 'Google Calendar connection was denied.');
        }

        $code = $request->get('code');

        try {
            $tokenData = $this->service->exchangeCode($code);
            $tokenRecord = $this->service->saveToken(Auth::user(), $tokenData);

            // Subscribe to webhook for bidirectional sync (best-effort, non-blocking)
            try {
                $this->service->subscribeToWebhook(Auth::user());
            } catch (\Exception $e) {
                Log::warning('Could not subscribe to Google Calendar webhook', ['error' => $e->getMessage()]);
            }

            return redirect()->route('profile.settings')
                ->with('success', 'Google Calendar connected successfully!');
        } catch (\Exception $e) {
            Log::error('Google Calendar OAuth callback failed', ['error' => $e->getMessage()]);
            return redirect()->route('profile.settings')
                ->with('error', 'Failed to connect Google Calendar. Please try again.');
        }
    }

    /**
     * Disconnect Google Calendar
     */
    public function disconnect(): JsonResponse
    {
        $user = Auth::user();

        try {
            $this->service->stopWebhook($user);
        } catch (\Exception $e) {
            Log::warning('Could not stop Google Calendar webhook', ['error' => $e->getMessage()]);
        }

        GoogleCalendarToken::where('user_id', $user->id)->delete();

        return response()->json(['message' => 'Google Calendar disconnected.']);
    }

    /**
     * Get connection status
     */
    public function status(): JsonResponse
    {
        $token = GoogleCalendarToken::where('user_id', Auth::id())->first();

        return response()->json([
            'connected' => (bool) $token,
            'calendar_id' => $token?->calendar_id,
        ]);
    }

    /**
     * Fetch Google Calendar events for a date range
     */
    public function events(Request $request): JsonResponse
    {
        $request->validate([
            'start' => 'required|date',
            'end' => 'required|date|after:start',
        ]);

        if (!$this->service->isConnected(Auth::user())) {
            return response()->json(['events' => [], 'connected' => false]);
        }

        $timeMin = Carbon::parse($request->start)->startOfDay()->toRfc3339String();
        $timeMax = Carbon::parse($request->end)->endOfDay()->toRfc3339String();

        $events = $this->service->getEvents(Auth::user(), $timeMin, $timeMax);

        return response()->json(['events' => $events, 'connected' => true]);
    }

    /**
     * Manually add a task to Google Calendar
     */
    public function syncTask(Request $request, $taskId): JsonResponse
    {
        $task = Task::findOrFail($taskId);

        // Only task creator or assignee can sync
        $this->authorize('view', $task);

        if (!$this->service->isConnected(Auth::user())) {
            return response()->json(['error' => 'Google Calendar not connected.'], 422);
        }

        if (!$task->due_date) {
            return response()->json(['error' => 'Task has no due date.'], 422);
        }

        // Already synced — update instead
        if ($task->google_event_id) {
            $updated = $this->service->updateEvent(Auth::user(), $task);
            return response()->json([
                'success' => $updated,
                'google_event_id' => $task->google_event_id,
                'message' => $updated ? 'Event updated in Google Calendar.' : 'Failed to update event.',
            ]);
        }

        $googleEventId = $this->service->createEvent(Auth::user(), $task);

        if (!$googleEventId) {
            return response()->json(['error' => 'Failed to create event in Google Calendar.'], 500);
        }

        $task->update(['google_event_id' => $googleEventId]);

        return response()->json([
            'success' => true,
            'google_event_id' => $googleEventId,
            'message' => 'Task added to Google Calendar.',
        ]);
    }

    /**
     * Remove a task from Google Calendar
     */
    public function unsyncTask(Request $request, $taskId): JsonResponse
    {
        $task = Task::findOrFail($taskId);
        $this->authorize('view', $task);

        if (!$task->google_event_id) {
            return response()->json(['message' => 'Task is not synced with Google Calendar.']);
        }

        $this->service->deleteEvent(Auth::user(), $task->google_event_id);
        $task->update(['google_event_id' => null]);

        return response()->json(['success' => true, 'message' => 'Task removed from Google Calendar.']);
    }

    /**
     * Webhook: receive push notifications from Google Calendar
     * Called when events change in Google Calendar → sync back to ProTask
     */
    public function webhook(Request $request): \Illuminate\Http\Response
    {
        // Google sends channel verification headers
        $channelId = $request->header('X-Goog-Channel-ID');
        $resourceState = $request->header('X-Goog-Resource-State');

        if ($resourceState === 'sync') {
            // Initial sync verification, just acknowledge
            return response('', 200);
        }

        if (!$channelId) {
            return response('', 400);
        }

        $token = GoogleCalendarToken::where('channel_id', $channelId)->first();

        if (!$token) {
            return response('', 404);
        }

        $user = $token->user;

        // Fetch recent changes and sync back to ProTask tasks
        try {
            $timeMin = Carbon::now()->subMinutes(5)->toRfc3339String();
            $timeMax = Carbon::now()->addYear()->toRfc3339String();

            $events = $this->service->getEvents($user, $timeMin, $timeMax);

            foreach ($events as $event) {
                $task = Task::where('google_event_id', $event['id'])->first();

                if (!$task) {
                    continue;
                }

                $newDate = $event['all_day']
                    ? Carbon::parse($event['start'])->startOfDay()
                    : Carbon::parse($event['start']);

                $updates = [];

                if ($task->due_date && !Carbon::parse($task->due_date)->eq($newDate)) {
                    $updates['due_date'] = $newDate;
                }

                if ($task->title !== $event['title']) {
                    $updates['title'] = $event['title'];
                }

                if (!empty($updates)) {
                    $task->update($updates);
                    Log::info('Task synced from Google Calendar webhook', [
                        'task_id' => $task->id,
                        'updates' => $updates,
                    ]);
                }
            }
        } catch (\Exception $e) {
            Log::error('Google Calendar webhook processing failed', ['error' => $e->getMessage()]);
        }

        return response('', 200);
    }
}
