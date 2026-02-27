<?php

namespace App\Http\Controllers;

use App\Models\Assignee;
use App\Models\BoardList;
use App\Models\Task;
use App\Models\User;
use App\Models\Workspace;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class SlackCommandController extends Controller
{
    /**
     * Verify Slack request signature
     */
    private function verifySlackSignature(Request $request): bool
    {
        $signingSecret = config('services.slack.signing_secret');

        if (!$signingSecret) {
            // If not configured, skip verification (development mode)
            return true;
        }

        $timestamp = $request->header('X-Slack-Request-Timestamp');
        $slackSignature = $request->header('X-Slack-Signature');

        if (!$timestamp || !$slackSignature) {
            return false;
        }

        // Prevent replay attacks (5 min window)
        if (abs(time() - $timestamp) > 300) {
            return false;
        }

        $sigBaseString = 'v0:' . $timestamp . ':' . $request->getContent();
        $computedSig = 'v0=' . hash_hmac('sha256', $sigBaseString, $signingSecret);

        return hash_equals($computedSig, $slackSignature);
    }

    /**
     * Handle Slack slash command: /protask
     * Usage:
     *   /protask create Task title [due:YYYY-MM-DD] [@username]
     *   /protask list [workspace_name]
     *   /protask help
     */
    public function command(Request $request)
    {
        if (!$this->verifySlackSignature($request)) {
            return response()->json(['text' => ':lock: Invalid request signature.'], 403);
        }

        $command = $request->input('command', '/protask');
        $text = trim($request->input('text', ''));
        $userId = $request->input('user_id');
        $userName = $request->input('user_name');
        $responseUrl = $request->input('response_url');

        if (empty($text) || $text === 'help') {
            return response()->json($this->helpResponse($command));
        }

        $parts = explode(' ', $text, 2);
        $subCommand = strtolower($parts[0]);
        $args = $parts[1] ?? '';

        return match ($subCommand) {
            'create', 'add'  => $this->handleCreate($args, $userName),
            'list'           => $this->handleList($args),
            default          => response()->json($this->helpResponse($command)),
        };
    }

    /**
     * Handle task creation from Slack
     * Syntax: create Task title [due:2024-01-15] [project:ProjectName]
     */
    private function handleCreate(string $args, string $slackUserName)
    {
        if (empty($args)) {
            return response()->json([
                'text' => ':warning: Please provide a task title. Example: `/protask create Fix login bug due:2024-01-15`',
            ]);
        }

        // Parse special tokens from the args
        $dueDate = null;
        $projectName = null;
        $assigneeEmail = null;

        // Extract due:YYYY-MM-DD
        if (preg_match('/\bdue:([\d]{4}-[\d]{2}-[\d]{2})\b/', $args, $matches)) {
            $dueDate = Carbon::parse($matches[1])->toDateTimeString();
            $args = str_replace($matches[0], '', $args);
        }

        // Extract project:ProjectName (multi-word in quotes: project:"My Project")
        if (preg_match('/\bproject:"([^"]+)"\b/', $args, $matches)) {
            $projectName = trim($matches[1]);
            $args = str_replace($matches[0], '', $args);
        } elseif (preg_match('/\bproject:(\S+)\b/', $args, $matches)) {
            $projectName = trim($matches[1]);
            $args = str_replace($matches[0], '', $args);
        }

        // Extract @email or @username
        if (preg_match('/@([\w.@+-]+)/', $args, $matches)) {
            $assigneeEmail = $matches[1];
            $args = str_replace($matches[0], '', $args);
        }

        $title = trim(preg_replace('/\s+/', ' ', $args));

        if (empty($title)) {
            return response()->json(['text' => ':warning: Task title cannot be empty.']);
        }

        // Find default list (first workspace's first project's first list)
        $list = null;

        if ($projectName) {
            $project = \App\Models\Project::where('title', 'like', '%' . $projectName . '%')->first();
            if ($project) {
                $list = BoardList::where('project_id', $project->id)->orderBy('order')->first();
            }
        }

        if (!$list) {
            $list = BoardList::orderBy('id')->first();
        }

        if (!$list) {
            return response()->json([
                'text' => ':x: No board list found. Please create a project with lists in ProTask first.',
            ]);
        }

        // Find system user (use first admin as creator)
        $creator = User::whereHas('role', fn($q) => $q->where('slug', 'admin'))->first()
            ?? User::first();

        if (!$creator) {
            return response()->json(['text' => ':x: No users found in ProTask.']);
        }

        // Create the task
        $task = Task::create([
            'title'      => $title,
            'list_id'    => $list->id,
            'project_id' => $list->project_id,
            'user_id'    => $creator->id,
            'due_date'   => $dueDate,
            'order'      => Task::where('list_id', $list->id)->max('order') + 1,
        ]);

        // Assign user if found
        $assignee = null;
        if ($assigneeEmail) {
            $assignee = User::where('email', 'like', '%' . $assigneeEmail . '%')
                ->orWhere('first_name', 'like', '%' . $assigneeEmail . '%')
                ->first();

            if ($assignee) {
                Assignee::create(['task_id' => $task->id, 'user_id' => $assignee->id]);
            }
        }

        $taskUrl = url('/p/board/' . $task->project_id . '/?task=' . $task->id);
        $project = $list->project ?? $task->project;

        $text = ":white_check_mark: Task created successfully!\n" .
            "*<{$taskUrl}|{$title}>*\n" .
            "Project: *{$project->title}* | List: *{$list->title}*";

        if ($dueDate) {
            $text .= "\nDue: *" . Carbon::parse($dueDate)->format('M j, Y') . "*";
        }
        if ($assignee) {
            $text .= "\nAssigned to: *{$assignee->name}*";
        }
        $text .= "\n_Created via Slack by @{$slackUserName}_";

        Log::info('Task created via Slack', ['task_id' => $task->id, 'slack_user' => $slackUserName]);

        return response()->json([
            'response_type' => 'in_channel',
            'text'          => $text,
        ]);
    }

    /**
     * Handle /protask list command
     */
    private function handleList(string $args)
    {
        $tasks = Task::where('is_done', 0)
            ->where('is_archive', 0)
            ->orderBy('due_date')
            ->limit(10)
            ->get();

        if ($tasks->isEmpty()) {
            return response()->json(['text' => ':tada: No open tasks found.']);
        }

        $lines = [":clipboard: *Recent Open Tasks:*"];
        foreach ($tasks as $task) {
            $url = url('/p/board/' . $task->project_id . '/?task=' . $task->id);
            $due = $task->due_date ? ' — due ' . Carbon::parse($task->due_date)->format('M j') : '';
            $lines[] = "• <{$url}|{$task->title}>{$due}";
        }

        return response()->json([
            'text' => implode("\n", $lines),
        ]);
    }

    /**
     * Help response
     */
    private function helpResponse(string $command): array
    {
        return [
            'text' => implode("\n", [
                ":wave: *ProTask Slack Commands:*",
                "",
                "`{$command} create <title>` — Create a new task",
                "`{$command} create <title> due:YYYY-MM-DD` — With due date",
                "`{$command} create <title> project:ProjectName` — In specific project",
                "`{$command} create <title> @username` — Assign to user",
                "`{$command} list` — Show 10 recent open tasks",
                "",
                "*Example:*",
                "`{$command} create Fix login bug due:2024-01-15 project:WebApp`",
            ]),
        ];
    }
}
