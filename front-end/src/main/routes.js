import React from 'react'

import { Route, Switch } from 'react-router-dom'
import PrivateRoute from './privateRoute'

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
        <PrivateRoute path='/ativacao/:id/:hash' component={ActiveAccount}  />
        <PrivateRoute path='/perfil' component={Profile} />
    </Switch>
)