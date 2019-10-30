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
        $user = $jwt->user;
        $id = $user->id;
        $hash = md5($user->created_at);
        $user->activated = true;
        $this->get("user/active/{$id}/{$hash}")
            ->seeStatusCode(200)
            ->seeJson($user->toArray());
    }

    public function testActiveFail()
    {
        $jwt = Jwt::generate();
        $id = $jwt->user->id;
        $hash = md5($jwt->user->created_at);
        $this->get("user/active/{$id}/{$hash}")
            ->seeStatusCode(410)
            ->seeJson([ 'error' => 'usuário já está ativo.' ]);

        $this->get("user/active/1/abc")
            ->seeStatusCode(404);
    }

    public function testSendEmail()
    {
        $jwt = Jwt::generateInactive();
        $this->get('/user/active/mail', $jwt->token)
            ->seeStatusCode(200)
            ->seeJson([ 'message' => 'email enviado com sucesso.' ]);
    }

    public function testSendEmailFail()
    {
        $jwt = Jwt::generate();
        $this->get('/user/active/mail', $jwt->token)
            ->seeStatusCode(410)
            ->seeJson([ 'error' => 'usuário já está ativo.']);
    }
}
