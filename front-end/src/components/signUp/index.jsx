import React, { Component } from 'react'

import axios from 'axios'

import InputLabel from '../common/inputLabel'
import Alert from '../common/alert'
import Loading from '../common/loading'

export default class SignUp extends Component
{
    state = {
        title: 'Criar Conta',
        alert: false,
        isLoading: false,
        disabled: false,
        data: {
            name: '',
            email: '',
            username: '',
            password: '',
            password_confirmation: ''
        }
    }

    componentDidMount() {
        document.title = this.state.title
    }

    render() {
        const { isLoading } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>{ this.state.title }</h2>

                <Alert text="Confirmação de senha inválida" />
                {this.renderInput('name', 'Nome Completo')}
                {this.renderInput('email', 'Email', 'email')}
                {this.renderInput('username', 'Nome de Usuário')}
                {this.renderInput('password', 'Senha', 'password')}
                {this.renderInput('password_confirmation', 'Confirmar Senha', 'password')}
                {(isLoading) ? <Loading /> : <button type="submit">Cadastrar</button>}
            </form>
        )
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.post(' http://geekmcz.com/user')
            .then((response) => console.log(response.data))
            .catch((response) => console.log(response))
    }

    renderInput(name, label, type = "text") {
        const { disabled } = this.state
        const value = this.state.data[name]
        return (
            <InputLabel
                name={ name } label={ label } value={ value } type={ type }
                onChange={this.handleChange} disabled={ disabled }
            />
        )
    }

    handleChange = (e) => {
        const { data } = this.state
        data[e.target.name] = e.target.value
        this.setState({ data })
    }
}