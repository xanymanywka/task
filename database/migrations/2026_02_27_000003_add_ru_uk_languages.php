<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        $existing = DB::table('languages')->whereIn('code', ['ru', 'uk'])->pluck('code')->toArray();

        if (!in_array('ru', $existing)) {
            DB::table('languages')->insert(['name' => 'Russian', 'code' => 'ru']);
        }
        if (!in_array('uk', $existing)) {
            DB::table('languages')->insert(['name' => 'Ukrainian', 'code' => 'uk']);
        }
    }

    public function down(): void
    {
        DB::table('languages')->whereIn('code', ['ru', 'uk'])->delete();
    }
};
