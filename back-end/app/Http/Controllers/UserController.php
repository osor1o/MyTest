<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
use App\User;

class UserController extends Controller
{
    public function show($id)
    {
        $user = User::findOrFail($id);
        return response()->json($user, 200);
    }

    public function store(Request $request)
    {
        $data = $request->only([ 'username', 'email', 'name', 'password' ]);
        $user = new User($data);
        $user->save();
        return response()->json($user, 201);
    }
}
