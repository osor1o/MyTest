import React, { Component } from 'react'

export default class SignIn extends Component
{
    componentDidMount() {
        document.title = "Ativação"
        // const { id, hash } = this.props.match.params
    }
    render() {
        
        return (
            <h2>Ativação</h2>
        )
    }
}