<?php

namespace App\Http\Middleware;

use Closure;
use Exception;
use App\User;
use Firebase\JWT\JWT;
use Firebase\JWT\ExpiredException;

class JwtMiddleware
{
    public function handle($request, Closure $next, $guard = null)
    {
        $token = $request->header('Authorization');
        $token = str_replace('Bearer ', '', $token);

        if(!$token) {
            return response()->json([ 'error' => 'Token não encontrado.' ], 401);
        }

        try {
            $credentials = JWT::decode($token, env('JWT_SECRET'), ['HS256']);
        } catch(ExpiredException $e) {
            return response()->json([ 'error' => 'Token expirado.' ], 401);
        } catch(Exception $e) {
            return response()->json([ 'error' => 'Token inválido.' ], 401);
        }

        $user = User::find($credentials->sub);
        
        $request->auth = $user;
        return $next($request);
    }
}