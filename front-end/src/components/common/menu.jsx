import React from 'react'

import { NavLink, withRouter } from 'react-router-dom'
import { isAuthenticated } from '../../utils/auth'

import If from './if'
import { Nav } from 'react-bootstrap'

const Menu = props =>  (
    <Nav className="mr-auto">
        <If test={ isAuthenticated() }>
            <NavLink to="/perfil" className="nav-link">Perfil</NavLink>
            <NavLink to="/sair" className="nav-link">Sair</NavLink>
        </If>
        <If test={ !isAuthenticated() }>
            <NavLink exact to="/" className="nav-link">Home</NavLink>
            <NavLink to="/entrar" className="nav-link">Entrar</NavLink>
            <NavLink to="/criarconta" className="nav-link">Criar Conta</NavLink>
        </If>
    </Nav>
)

export default withRouter(props => <Menu {...props}/>)