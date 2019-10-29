<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\AccountActivationCode;
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
        DB::beginTransaction();
        try {
            $user = $this->storeUser($request);
            $this->sendEmail($user);
            DB::commit();
            return response()->json($user, 201);
        } catch(Excetion $e) {
            DB::rollBack();
            return response()->json([ 'error' => 'Não foi possível finalizar o cadastro.' ], 400);
        }
    }

    private function storeUser(Request $request)
    {
        $data = $request->only([ 'username', 'email', 'name', 'password' ]);
        $user = new User($data);
        $user->save();
        return $user;   
    }

    private function sendEmail($user)
    {
        if (env('APP_ENV') !== 'testing') {
            Mail::to($user->email)->send(new AccountActivationCode($user));
        }
    }
}
