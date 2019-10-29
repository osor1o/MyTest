<?php

use Laravel\Lumen\Testing\DatabaseMigrations;
use Laravel\Lumen\Testing\DatabaseTransactions;

use App\Http\Controllers\AuthController;
use App\User;

abstract class Jwt
{
    private static $data = [
        "name" => "Joaquim da Silva",
        "username" => "joaquim",
        "email" => "joaquim@teste.com",
        "password" => "Secret123"
    ];

    static public function generate()
    {
        $user = new User(Jwt::$data);
        $user->activated = true;
        $user->save();
        return (object) [
            'token' => ['Authorization' => 'Bearer '.AuthController::generateJwt($user) ],
            'user' => $user
        ];
    }

    static public function generateInactive()
    {
        $user = new User(Jwt::$data);
        $user->save();
        return (object) [
            'token' => ['Authorization' => 'Bearer '.AuthController::generateJwt($user) ],
            'user' => $user
        ];
    }
}
