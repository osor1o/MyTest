<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class ActiveController extends Controller
{
    public function activate(Request $request, $id, $hash)
    {
        $user = User::findOrFail($id);
        $userHash = md5($user->created_at);
        $id = $request->auth->id;
        $allowToActive = !$user->activated && $hash === $userHash && $id === $user->id;
        if($allowToActive) {
            $user->activated = true;
            $user->save();
            return response()->json($user, 200);
        }
        return response()->json([ "error" => "página não encontrada." ], 404);
    }

    public function send(Request $request)
    {
        $user = $request->auth;
        if ($user->activate) {
            return response(null, 410);
        }
        Mail::to($user->email)->send(new AccountActivationCode($user));
        return response(null, 200);
    }
}
