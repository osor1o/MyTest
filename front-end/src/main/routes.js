import React from 'react'

import { Route, Switch, Redirect } from 'react-router-dom'
import PrivateRoute from './privateRoute'
import { logOut } from '../utils/auth'

import Home from '../components/home'
import SignIn from '../components/signIn'
import SignUp from '../components/signUp'
import ActiveAccount from '../components/activeAccount'
import Profile from '../components/profile'

export default () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/entrar' component={SignIn} title="Entrar" />
        <Route path='/criarconta' component={SignUp} />
        <Route path='/ativacao/:id/:hash' component={ActiveAccount}  />
        <PrivateRoute path='/perfil' component={Profile} />
        <Route path='/sair' component={logOut} />
        <Redirect path="*" to="/" />
    </Switch>
)