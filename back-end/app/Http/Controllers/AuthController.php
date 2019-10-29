<?php

namespace App\Http\Controllers;

use Validator;
use App\User;
use Firebase\JWT\JWT;
use Illuminate\Http\Request;
use Firebase\JWT\ExpiredException;
use Illuminate\Support\Facades\Hash;
use Laravel\Lumen\Routing\Controller as BaseController;

class AuthController extends BaseController 
{
    private $request;
    private $message = [
        "required" => "campo obrigatório.",
    ];
    
    public function __construct(Request $request)
    {
        $this->request = $request;
    }
    
    static public function generateJwt(User $user)
    {
        $payload = [
            'iss' => 'lumen-jwt',
            'sub' => $user->id,
            'iat' => time(),
            'exp' => time() + 60*60
        ];
        return JWT::encode($payload, env('JWT_SECRET'));
    } 
    
    public function authenticate(User $user)
    {
        $this->validate($this->request, [
            'username' => 'required',
            'password' => 'required'
        ], $this->message);
        
        $data = $this->request->only(['username', 'password']);
        $password = md5($data['password']);

        $user = User::where([ 'email' => $data['username'] ])
            ->orWhere([ 'username' => $data['username'] ])
            ->first();

        if ($user && md5($data['password']) === $user->password)
            return response()->json([ 'token' => $this->generateJwt($user) ], 201);

        return response()->json([ 'error' => 'Email ou senha inválido.' ], 401);
    }
}