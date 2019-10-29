import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    componentDidMount() {
        document.title = "Perfil"
    }

    render() {
        return (
            <>
                <h2>Home Page</h2>
                <Link to="criarconta">Criar Conta</Link>
                <hr/>
                <Link to="entrar">Entrar</Link>
            </>
        )
    }
}