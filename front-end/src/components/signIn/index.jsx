import React, { Component } from 'react'

export default class SignIn extends Component
{
    componentDidMount() {
        document.title = "Entrar"
    }
    render() {
        return (
            <h2>Sign In</h2>
        )
    }
}