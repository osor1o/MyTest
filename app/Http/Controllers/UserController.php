<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('user-validate-middleware', [
            'only' => [ 'store' ]
        ]);
    }

    public function store(Request $request)
    {
        $user = new User($request->input());
        $user->save();
        return response()->json($user, 201);
    }

    public function show($id)
    {
        $user = User::findOrFail($id);
        return response()->json($user, 200);
    }
}
