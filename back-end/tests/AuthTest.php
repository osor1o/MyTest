<?php


use Laravel\Lumen\Testing\DatabaseMigrations;
use Laravel\Lumen\Testing\DatabaseTransactions;

require_once __DIR__.'/Jwt.php';

class AuthTest extends TestCase
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

    public function testAuthWithUsername()
    {
        Jwt::generate($this->data);
        $data = [
            'username' => $this->data['username'],
            'password' => $this->data['password']
        ];
        $this->post('auth', $data)
            ->seeStatusCode(201)
            ->seeJsonStructure([ 'token' ]);
    }

    public function testAuthWithEmail()
    {
        Jwt::generate();
        $data = [
            'username' => $this->data['email'],
            'password' => $this->data['password']
        ];
        $this->post('auth', $data)
            ->seeStatusCode(201)
            ->seeJsonStructure([ 'token' ]);
    }

    public function testUserNameInvalid()
    {
        $this->post('auth', $this->data)
            ->seeStatusCode(401)
            ->seeJson([ 'error' => 'Email ou senha inválido.' ]);
    }

    public function testRequiredFields()
    {
        $this->post('auth')
            ->seeStatusCode(422)
            ->seeJson([
                'username' => [ 'campo obrigatório.' ],
                'password' => [ 'campo obrigatório.' ]
            ]);
    }
}
