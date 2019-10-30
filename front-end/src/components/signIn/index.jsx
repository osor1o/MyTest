import React, { Component } from 'react'

import { Redirect } from 'react-router-dom'
import { signIn, isAuthenticated } from '../../utils/auth'
import { Form, Button, Spinner } from 'react-bootstrap'

import If from '../common/if'


export default class SignIn extends Component
{
    state = {
        title: 'Entrar',
        alert: false,
        isLoading: false,
        data: {
            username: '',
            password: ''
        }
    }

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        document.title = this.state.title
    }
    render() {
        const { isLoading } = this.state
        return (
            <Form onSubmit={this.handleSubmit}>
                <If test={ isAuthenticated() }>
                    <Redirect to='/perfil' />
                </If>
                <h2>Entrar</h2>
                {this.renderInput('username', 'Nome de Usuário ou Email')}
                {this.renderInput('password', 'Senha', 'password')}
                {(isLoading)
                ? <Spinner animation="border" role="status"><span className="sr-only">Loading...</span></Spinner>
                : <Button type="submit">Cadastrar</Button>}
            </Form>
        )
    }

    renderInput(name, label, type = "text") {
        const { isLoading } = this.state
        const value = this.state.data[name]
        return (
            <Form.Group controlId={name}>
                <Form.Label>{ label }</Form.Label>
                <Form.Control
                    name={ name } value={ value } type={ type }
                    onChange={this.handleChange} disabled={ isLoading }
                />
            </Form.Group>
        )
    }

    async handleSubmit(e) {
        try {
            e.preventDefault()
            this.setState({ isLoading: true })
            const { data } = this.state
            await signIn(data)
        } catch(e) {
            console.log(e.response.data);
        } finally {
            this.setState({ isLoading: false })
        }
    }

    handleChange(e) {
        const { data } = this.state
        data[e.target.name] = e.target.value
        this.setState({ data })
    }
}