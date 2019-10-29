<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class ActiveController extends Controller
{
    public function index(Request $request, $id, $hash)
    {
        $user = User::findOrFail($id);
        $userHash = md5($user->created_at);
        if(!$user->activated && $hash === $userHash) {
            $user->activated = true;
            $user->save();
            return response()->json($user, 200);
        }
        return response()->json([ "error" => "página não encontrada." ], 404);
    }
}
