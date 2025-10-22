<?php

namespace Database\Seeders;

use App\Models\Supply;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SupplySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
         $supplies = [ ['id'=> 1],
            ['name' => 'ABC Trading'],
         ['contact_info' => '09667867788']
         ];

        Supply::insert($supplies);
    }
}
