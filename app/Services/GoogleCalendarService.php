<?php

namespace App\Services;

use App\Models\GoogleCalendarToken;
use App\Models\Task;
use App\Models\User;
use Carbon\Carbon;
use Google\Client as GoogleClient;
use Google\Service\Calendar;
use Google\Service\Calendar\Event;
use Google\Service\Calendar\EventDateTime;
use Google\Service\Calendar\Channel;
use Illuminate\Support\Facades\Log;

class GoogleCalendarService
{
    private GoogleClient $client;

    public function __construct()
    {
        $this->client = new GoogleClient();
        $this->client->setClientId(config('services.google.client_id'));
        $this->client->setClientSecret(config('services.google.client_secret'));
        $this->client->setRedirectUri(config('services.google.redirect'));
        $this->client->addScope(Calendar::CALENDAR);
        $this->client->setAccessType('offline');
        $this->client->setPrompt('consent');
    }

    public function getAuthUrl(): string
    {
        return $this->client->createAuthUrl();
    }

    public function exchangeCode(string $code): array
    {
        $token = $this->client->fetchAccessTokenWithAuthCode($code);

        if (isset($token['error'])) {
            throw new \Exception('Google OAuth error: ' . $token['error_description'] ?? $token['error']);
        }

        return $token;
    }

    public function saveToken(User $user, array $tokenData): GoogleCalendarToken
    {
        $expiresAt = isset($tokenData['expires_in'])
            ? Carbon::now()->addSeconds($tokenData['expires_in'])
            : null;

        return GoogleCalendarToken::updateOrCreate(
            ['user_id' => $user->id],
            [
                'access_token' => $tokenData['access_token'],
                'refresh_token' => $tokenData['refresh_token'] ?? null,
                'expires_at' => $expiresAt,
                'calendar_id' => 'primary',
            ]
        );
    }

    public function getClientForUser(User $user): ?GoogleClient
    {
        $tokenRecord = GoogleCalendarToken::where('user_id', $user->id)->first();

        if (!$tokenRecord) {
            return null;
        }

        $tokenArray = [
            'access_token' => $tokenRecord->access_token,
            'refresh_token' => $tokenRecord->refresh_token,
        ];

        if ($tokenRecord->expires_at) {
            $tokenArray['expires_in'] = max(0, Carbon::now()->diffInSeconds($tokenRecord->expires_at, false));
        }

        $this->client->setAccessToken($tokenArray);

        if ($this->client->isAccessTokenExpired()) {
            if (!$tokenRecord->refresh_token) {
                return null;
            }

            $newToken = $this->client->fetchAccessTokenWithRefreshToken($tokenRecord->refresh_token);

            if (isset($newToken['error'])) {
                Log::error('Google token refresh failed', ['user_id' => $user->id, 'error' => $newToken]);
                return null;
            }

            $tokenRecord->update([
                'access_token' => $newToken['access_token'],
                'expires_at' => Carbon::now()->addSeconds($newToken['expires_in'] ?? 3600),
            ]);
        }

        return $this->client;
    }

    public function getEvents(User $user, string $timeMin, string $timeMax): array
    {
        $client = $this->getClientForUser($user);

        if (!$client) {
            return [];
        }

        $tokenRecord = GoogleCalendarToken::where('user_id', $user->id)->first();
        $service = new Calendar($client);

        try {
            $events = $service->events->listEvents($tokenRecord->calendar_id, [
                'timeMin' => $timeMin,
                'timeMax' => $timeMax,
                'singleEvents' => true,
                'orderBy' => 'startTime',
                'maxResults' => 250,
            ]);

            $result = [];
            foreach ($events->getItems() as $event) {
                $start = $event->getStart();
                $end = $event->getEnd();

                $result[] = [
                    'id' => $event->getId(),
                    'title' => $event->getSummary() ?? '(No title)',
                    'description' => $event->getDescription(),
                    'start' => $start->getDateTime() ?? $start->getDate(),
                    'end' => $end->getDateTime() ?? $end->getDate(),
                    'all_day' => !$start->getDateTime(),
                    'html_link' => $event->getHtmlLink(),
                    'source' => 'google',
                    'status' => $event->getStatus(),
                ];
            }

            return $result;
        } catch (\Exception $e) {
            Log::error('Google Calendar getEvents failed', [
                'user_id' => $user->id,
                'error' => $e->getMessage(),
            ]);
            return [];
        }
    }

    public function createEvent(User $user, Task $task): ?string
    {
        $client = $this->getClientForUser($user);

        if (!$client || !$task->due_date) {
            return null;
        }

        $tokenRecord = GoogleCalendarToken::where('user_id', $user->id)->first();
        $service = new Calendar($client);

        $dueDate = Carbon::parse($task->due_date);

        $event = new Event([
            'summary' => $task->title,
            'description' => strip_tags($task->description ?? ''),
            'source' => [
                'title' => 'ProTask',
                'url' => url('/'),
            ],
        ]);

        if ($dueDate->format('H:i:s') === '00:00:00') {
            $event->setStart(new EventDateTime(['date' => $dueDate->format('Y-m-d')]));
            $event->setEnd(new EventDateTime(['date' => $dueDate->addDay()->format('Y-m-d')]));
        } else {
            $event->setStart(new EventDateTime(['dateTime' => $dueDate->toRfc3339String()]));
            $event->setEnd(new EventDateTime(['dateTime' => $dueDate->addHour()->toRfc3339String()]));
        }

        try {
            $createdEvent = $service->events->insert($tokenRecord->calendar_id, $event);
            return $createdEvent->getId();
        } catch (\Exception $e) {
            Log::error('Google Calendar createEvent failed', [
                'task_id' => $task->id,
                'error' => $e->getMessage(),
            ]);
            return null;
        }
    }

    public function updateEvent(User $user, Task $task): bool
    {
        if (!$task->google_event_id || !$task->due_date) {
            return false;
        }

        $client = $this->getClientForUser($user);

        if (!$client) {
            return false;
        }

        $tokenRecord = GoogleCalendarToken::where('user_id', $user->id)->first();
        $service = new Calendar($client);
        $dueDate = Carbon::parse($task->due_date);

        try {
            $event = $service->events->get($tokenRecord->calendar_id, $task->google_event_id);
            $event->setSummary($task->title);
            $event->setDescription(strip_tags($task->description ?? ''));

            if ($dueDate->format('H:i:s') === '00:00:00') {
                $event->setStart(new EventDateTime(['date' => $dueDate->format('Y-m-d')]));
                $event->setEnd(new EventDateTime(['date' => $dueDate->addDay()->format('Y-m-d')]));
            } else {
                $event->setStart(new EventDateTime(['dateTime' => $dueDate->toRfc3339String()]));
                $event->setEnd(new EventDateTime(['dateTime' => $dueDate->addHour()->toRfc3339String()]));
            }

            $service->events->update($tokenRecord->calendar_id, $task->google_event_id, $event);
            return true;
        } catch (\Exception $e) {
            Log::error('Google Calendar updateEvent failed', [
                'task_id' => $task->id,
                'google_event_id' => $task->google_event_id,
                'error' => $e->getMessage(),
            ]);
            return false;
        }
    }

    public function deleteEvent(User $user, string $googleEventId): bool
    {
        $client = $this->getClientForUser($user);

        if (!$client) {
            return false;
        }

        $tokenRecord = GoogleCalendarToken::where('user_id', $user->id)->first();
        $service = new Calendar($client);

        try {
            $service->events->delete($tokenRecord->calendar_id, $googleEventId);
            return true;
        } catch (\Exception $e) {
            Log::error('Google Calendar deleteEvent failed', [
                'google_event_id' => $googleEventId,
                'error' => $e->getMessage(),
            ]);
            return false;
        }
    }

    public function subscribeToWebhook(User $user): bool
    {
        $client = $this->getClientForUser($user);

        if (!$client) {
            return false;
        }

        $tokenRecord = GoogleCalendarToken::where('user_id', $user->id)->first();
        $service = new Calendar($client);

        $channelId = 'protask-' . $user->id . '-' . uniqid();
        $expiration = Carbon::now()->addDays(7)->timestamp * 1000;

        $channel = new Channel([
            'id' => $channelId,
            'type' => 'web_hook',
            'address' => route('google.calendar.webhook'),
            'expiration' => $expiration,
            'token' => 'user_id=' . $user->id,
        ]);

        try {
            $response = $service->events->watch($tokenRecord->calendar_id, $channel);
            $tokenRecord->update([
                'channel_id' => $response->getId(),
                'channel_resource_id' => $response->getResourceId(),
                'channel_expiration' => Carbon::createFromTimestampMs($response->getExpiration()),
            ]);
            return true;
        } catch (\Exception $e) {
            Log::error('Google Calendar subscribeToWebhook failed', [
                'user_id' => $user->id,
                'error' => $e->getMessage(),
            ]);
            return false;
        }
    }

    public function stopWebhook(User $user): void
    {
        $tokenRecord = GoogleCalendarToken::where('user_id', $user->id)->first();

        if (!$tokenRecord || !$tokenRecord->channel_id) {
            return;
        }

        $client = $this->getClientForUser($user);

        if (!$client) {
            return;
        }

        $service = new Calendar($client);
        $channel = new Channel([
            'id' => $tokenRecord->channel_id,
            'resourceId' => $tokenRecord->channel_resource_id,
        ]);

        try {
            $service->channels->stop($channel);
        } catch (\Exception $e) {
            Log::warning('Google Calendar stopWebhook failed', ['error' => $e->getMessage()]);
        }
    }

    public function isConnected(User $user): bool
    {
        return GoogleCalendarToken::where('user_id', $user->id)->exists();
    }
}
