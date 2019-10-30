import React, { Component } from 'react'

import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { signIn, sendActiveEmail, isAuthenticated } from '../../utils/auth'
import { BASE_URL } from '../../utils/defaultValues'

import { Row, Col, Form, Button, Spinner } from 'react-bootstrap'

import If from '../common/if'

export default class SignUp extends Component
{
    state = {
        title: 'Criar Conta',
        alert: false,
        isLoading: false,
        data: {
            name: '',
            email: '',
            username: '',
            password: '',
            password_confirmation: ''
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
            <Row>
                <Col xs={12}>
                    <h2>{ this.state.title }</h2>
                </Col>
                <Col xs={12}>
                    <Form onSubmit={this.handleSubmit}>
                        <If test={ isAuthenticated() }>
                            <Redirect to='/perfil' />
                        </If>
                        {this.renderInput('name', 'Nome Completo')}
                        {this.renderInput('email', 'Email', 'email')}
                        {this.renderInput('username', 'Nome de Usuário')}
                        {this.renderInput('password', 'Senha', 'password')}
                        {this.renderInput('password_confirmation', 'Confirmar Senha', 'password')}
                        {(isLoading)
                            ? <Spinner animation="border" role="status"><span className="sr-only">Loading...</span></Spinner>
                            : <Button type="submit">Cadastrar</Button>}
                    </Form>
                </Col>
            </Row>
        )
    }

    async handleSubmit(e) {
        try {
            e.preventDefault()
            this.setState({ isLoading: true })
            const { data } = this.state;
            await axios.post(`${BASE_URL}/user`, data)
            await signIn(data)
            await sendActiveEmail()
        } catch(e) {
            console.log(e.response.data);
        } finally {
            this.setState({ isLoading: false })
        }
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

    handleChange(e) {
        const { data } = this.state
        data[e.target.name] = e.target.value
        this.setState({ data })
    }
}