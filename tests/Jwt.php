<?php

use Laravel\Lumen\Testing\DatabaseMigrations;
use Laravel\Lumen\Testing\DatabaseTransactions;

use App\Http\Controllers\AuthController;
use App\User;

abstract class Jwt
{
    static public function generate($data)
    {
        $user = new User($data);
        $user->save();
        return (object) [
            'token' => ['Authorization' => 'Bearer '.AuthController::generateJwt($user) ],
            'user' => $user
        ];
    }
}
