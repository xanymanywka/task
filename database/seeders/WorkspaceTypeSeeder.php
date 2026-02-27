<?php

namespace Database\Seeders;

use App\Models\WorkspaceType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class WorkspaceTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('workspace_types')->truncate();
        WorkspaceType::factory(7)->create();
    }
}
