<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('settings')->truncate();
        DB::table('settings')->insert(['name' => 'Pro Task', 'slug' => 'app_name', 'type' => 'text', 'value' => 'Pro Task']);
        DB::table('settings')->insert(['name' => 'Enable Registration', 'slug' => 'enable_registration', 'type' => 'text', 'value' => '1']);
        DB::table('settings')->insert(['name' => 'Enable Pre-made Board', 'slug' => 'enable_pre_made_board', 'type' => 'text', 'value' => '1']);
        DB::table('settings')->insert(['name' => 'Default Language', 'slug' => 'default_language', 'type' => 'text', 'value' => 'en']);
        DB::table('settings')->insert(['name' => 'Pre-made Board Lists', 'slug' => 'pre_made_board_list', 'type' => 'text', 'value' => json_encode(['Stories','To Do', 'In Progress', 'Done'])]);

        DB::table('settings')->insert([
            'name' => 'Allowed Upload Types', 'slug' => 'allowed_file_types', 'type' => 'json',
            'value' => json_encode([
                'pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'txt', 'csv',
                'jpg', 'jpeg', 'png', 'gif', 'webp', 'svg',
                'mp3', 'wav',
                'mp4', 'webm',
                'zip', 'rar', '7z'])
        ]);
    }
}
