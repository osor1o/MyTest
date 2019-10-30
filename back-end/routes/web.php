<?php

$router->post('/auth', 'AuthController@authenticate');

$router->post('/user', [ 'uses' => 'UserController@store',
    'middleware' => [ 'user-validate-middleware' ]
]);
$router->get('/user/active/{id}/{hash}', 'ActiveController@activate');

$router->group([ 'middleware' => 'jwt' ], function() use ($router) {

    $router->get('/user/{id}', [ 'uses' => 'UserController@show',
        'middleware' => [ 'user-active-middleware' ],
    ]);
    $router->get('/user/active/mail', 'ActiveController@send');

});
