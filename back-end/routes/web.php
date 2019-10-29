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

$router->post('/auth', 'AuthController@authenticate');

$router->post('/user', [
    'middleware' => [ 'user-validate-middleware' ],
    'uses' => 'UserController@store'
]);

$router->group([ 'middleware' => 'jwt' ], function() use ($router) {
    $router->put('active/{id}/{hash}', 'ActiveController@activate');
    $router->post('active', 'ActivateController@send');
    $router->get('/user/{id}', [
        'middleware' => [ 'active-middleware' ],
        'uses' => 'UserController@show'
    ]);
});
