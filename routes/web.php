<?php
/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

use Illuminate\Http\RedirectResponse;

$router->post('/user', 'UserController@store');
$router->post('/auth', 'AuthController@authenticate');

$router->group(['middleware' => 'jwt'],
    function() use ($router) {
        $router->get('/user/{id}', 'UserController@show');
    }
);

/*
    [] post - /auth
    [ok] perfil (informações do usuário);
    [ok] criarconta (cadastro do usuáro);
    [] get - /activate/{key} (página que informa que o usuário foi ativado e o direciona para a página
    de perfil);
*/