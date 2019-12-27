<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user_array = array(

        	array(
        		'name' => 'Admin',
        		'email' => 'admin@tkhanepani.com',
        		'password' => Hash::make('admin123'),
        		'role' => 'admin'

        	),

        	array(
        		'name' => 'Admin1',
        		'email' => 'admin1@tkhanepani.com',
        		'password' => Hash::make('admin1123'),
        		'role' => 'admin'

        	),
        	array(
        		'name' => 'Customer',
        		'email' => 'customer@tkhanepani.com',
        		'password' => Hash::make('customer123'),
        		'role' => 'customer'

        	)



        );
        DB::table('users')->insert($user_array);	
    }
}
