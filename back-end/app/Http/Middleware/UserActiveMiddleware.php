<?php

namespace App\Http\Middleware;

use Closure;
use Exception;

class UserActiveMiddleware
{
    public function handle($request, Closure $next, $guard = null)
    {
        if(!$request->auth->activated) {
            return response()->json([ 'error' => 'usuário pendente de ativação.' ], 409);
        }
        return $next($request);
    }
}