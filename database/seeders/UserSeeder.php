<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('users')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');
        User::factory()->createMany([
            ['email' => 'john.due.helo@mail.com', 'password' => 's6J5WQR9ZlpvG7', 'role_id' => 1],
            ['email' => 'sabbir@example.com', 'password' => 'SY7Ta85KTV2e0n', 'role_id' => 2]
        ]);
        User::factory(100)->create();
    }
}
