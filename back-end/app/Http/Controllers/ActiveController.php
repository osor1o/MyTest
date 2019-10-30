<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\AccountActivationCode;
use App\User;

class ActiveController extends Controller
{
    public function activate(Request $request, $id, $hash)
    {
        $user = User::findOrFail($id);
        $userHash = md5($user->created_at);
        if($user->activated) {
            return response()->json([ 'error' => 'usuário já está ativo.'], 410);
        }
        if($hash === $userHash) {
            $user->activated = true;
            $user->save();
            return response()->json($user, 200);
        }
        return response(null, 404);
    }

    public function send(Request $request)
    {
        $user = $request->auth;
        if ($user->activated) {
            return response()->json([ 'error' => 'usuário já está ativo.'], 410 );
        }
        if(env('APP_ENV') !== 'testing') {
            Mail::to($user->email)->send(new AccountActivationCode($user));
        }
        return response()->json([ 'message' => 'email enviado com sucesso.' ], 200);
    }
}
