import React from 'react'
import { Link } from 'react-router-dom'
import If from './if'
import { isAuthenticated } from '../../main/auth'

export default props => (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="entrar">Entrar</Link></li>
            <li><Link to="criarconta">Criar Conta</Link></li>
            <If test={isAuthenticated()}>
                <li><Link to="perfil">Perfil</Link></li>
            </If>
        </ul>
    </nav>
)