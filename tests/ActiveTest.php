<?php


use Laravel\Lumen\Testing\DatabaseMigrations;
use Laravel\Lumen\Testing\DatabaseTransactions;

require_once __DIR__.'/Jwt.php';

class ActiveTest extends TestCase
{
    use DatabaseTransactions;

    public function testActive()
    {
        $jwt = Jwt::generateInactive();
        $id = $jwt->user->id;
        $hash = md5($jwt->user->created_at);
        $this->get("activate/{$id}/{$hash}", $jwt->token)
            ->seeStatusCode(200)
            ->seeJson([
                'id' => $jwt->user->id,
                'username' => $jwt->user->username,
                'email' => $jwt->user->email,
                'activated' => true
            ]);
    }

    public function testActiveFail()
    {
        $jwt = Jwt::generate();
        $id = $jwt->user->id;
        $hash = md5($jwt->user->created_at);
        $this->get("activate/{$id}/{$hash}", $jwt->token)
            ->seeStatusCode(404)
            ->seeJson([ 'error' => 'página não encontrada.' ]);
    }
}
