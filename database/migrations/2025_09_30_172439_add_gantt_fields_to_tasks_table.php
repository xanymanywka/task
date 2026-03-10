<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('tasks', function (Blueprint $table) {
            $table->timestamp('start_date')->nullable()->after('due_date');
            $table->timestamp('end_date')->nullable()->after('start_date');
            $table->unsignedSmallInteger('progress_percentage')->default(0)->after('end_date');
            $table->string('priority', 20)->nullable()->after('progress_percentage'); // low, medium, high, critical
            $table->json('dependencies')->nullable()->after('priority'); // array of task IDs
        });
    }

    public function down(): void
    {
        Schema::table('tasks', function (Blueprint $table) {
            $table->dropColumn(['start_date', 'end_date', 'progress_percentage', 'priority', 'dependencies']);
        });
    }
};
