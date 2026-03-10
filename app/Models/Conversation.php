<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Conversation extends Model
{
    protected $fillable = ['type', 'name', 'created_by'];

    public function creator(): BelongsTo
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function participants(): BelongsToMany
    {
        return $this->belongsToMany(User::class, 'conversation_participants')
            ->withPivot('last_read_at')
            ->withTimestamps();
    }

    public function messages(): HasMany
    {
        return $this->hasMany(Message::class);
    }

    public function latestMessage(): HasMany
    {
        return $this->hasMany(Message::class)->latest()->limit(1);
    }

    /**
     * Get unread count for a specific user
     */
    public function unreadCountFor(int $userId): int
    {
        $participant = $this->participants()
            ->where('user_id', $userId)
            ->first();

        if (!$participant) return 0;

        $lastRead = $participant->pivot->last_read_at;

        $query = $this->messages()->where('user_id', '!=', $userId);

        if ($lastRead) {
            $query->where('created_at', '>', $lastRead);
        }

        return $query->count();
    }

    /**
     * Get display name for direct conversations from the perspective of $userId
     */
    public function displayNameFor(int $userId): string
    {
        if ($this->type === 'group') {
            return $this->name ?? 'Group Chat';
        }

        $other = $this->participants()
            ->where('user_id', '!=', $userId)
            ->first();

        return $other ? $other->name : 'Unknown';
    }
}
