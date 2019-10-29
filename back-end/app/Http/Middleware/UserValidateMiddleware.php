<?php

namespace App\Http\Middleware;

use Closure;
use App\Http\Controllers\Controller;

class UserValidateMiddleware extends Controller
{
    private $message = [
        'required' => 'campo obrigatório.',
        'email' => 'email inválido.',
        'unique' => 'em uso por outro usuário.',
        'name.regex' => 'apenas letras.',
        'password.regex' => 'deve conter pelo menos uma letra minúscula, uma letra maiúscula e números.',
        'min' => 'deve conter pelo menos :min caracteres.',
        'confirmed' => 'não estão iguais.'
    ];
    
    public function handle($request, Closure $next)
    {
        $this->validate($request, [
            'username' => 'required|unique:User',
            'email' => 'required|email|unique:User',
            'name' => [ 'required', 'regex:/^[a-záàâãéèêíïóôõöúçñ ]+$/i' ],
            'password' => [ 'min:6', 'required', 'regex:/[0-9]/', 'regex:/[A-Z]/', 'regex:/[a-z]/', 'confirmed' ]
        ], $this->message);
        return $next($request);
    }
}
