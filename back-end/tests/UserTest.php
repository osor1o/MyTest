<?php

use Laravel\Lumen\Testing\DatabaseMigrations;
use Laravel\Lumen\Testing\DatabaseTransactions;

require_once __DIR__.'/Jwt.php';

class UserTest extends TestCase
{
    use DatabaseTransactions;

    private $data;

    public function setUp(): void
    {
        parent::setUp();
        $this->data = [
            "name" => "Joaquim da Silva",
            "username" => "joaquim",
            "email" => "joaquim@teste.com",
            "password" => "Secret123",
            "password_confirmation" => "Secret123"
        ];
    }

    public function testCreateAccount()
    {
        $user = $this->data;
        unset($user['password']);
        unset($user['password_confirmation']);
        $response = $this->post('/user', $this->data)
            ->seeStatusCode(201)
            ->seeJson($user)
            ->response;
        return json_decode($response->getContent());
    }

    public function testShowUser()
    {
        $jwt = Jwt::generate();
        $this->get("user/{$jwt->user->id}", $jwt->token)
            ->seeStatusCode(200)
            ->seeJson([
                "id" => $jwt->user->id,
                "username" => $jwt->user->username,
                "email" => $jwt->user->email,
                "name" => $jwt->user->name
            ]);
    }

    public function testShowUserNotFound()
    {
        $jwt = Jwt::generate();
        $this->get("user/joaquim", $jwt->token)
            ->seeStatusCode(404);
    }

    public function testShowUserInactive()
    {
        $jwt = Jwt::generateInactive();
        $this->get("user/1", $jwt->token)
            ->seeStatusCode(409)
            ->seeJson([ 'error' => 'usuário pendente de ativação.' ]);
    }

    public function testRequiredFields()
    {
        $this->post('/user')
            ->seeStatusCode(422)
            ->seeJson([
                "name" => [ "campo obrigatório." ],
                "username" => [ "campo obrigatório." ],
                "email" => [ "campo obrigatório." ],
                "password" =>[ "campo obrigatório." ]
            ]);
    }

    public function testEmailAndUsernameDuplicated()
    {
        $this->testCreateAccount();
        $this->post('/user', $this->data)
            ->seeStatusCode(422)
            ->seeJson([
                "email" => [ "em uso por outro usuário." ],
                "username" => [ "em uso por outro usuário." ]
            ]);
    }

    public function testInvalidEmail()
    {
        $this->data['email'] = "invalid_email";
        $this->post('/user', $this->data)
            ->seeStatusCode(422)
            ->seeJson([
                "email" => [ "email inválido." ]
            ]);
    }

    public function testInvalidName()
    {
        $this->data['name'] = 'joaquim1 barros';
        $this->post('/user', $this->data)
            ->seeStatusCode(422)
            ->seeJson([
                "name" => [ "nome completo e apenas com letras." ]
            ]);
    }

    public function testInvalidPassword()
    {
        $this->data['password'] = 'secret123';
        $this->post('/user', $this->data)
            ->seeStatusCode(422)
            ->seeJson([
                "password" => [
                    "deve conter pelo menos uma letra minúscula, uma letra maiúscula e números.",
                    "não estão iguais."
                ]
            ]);

        $this->data['password'] = 'secre';
        $this->post('/user', $this->data)
            ->seeStatusCode(422)
            ->seeJson([
                "password" => [
                    "deve conter pelo menos 6 caracteres.",
                    "deve conter pelo menos uma letra minúscula, uma letra maiúscula e números.",
                    "não estão iguais."
                ]
            ]);
    }
}
