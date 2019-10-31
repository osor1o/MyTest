import React, { Component } from 'react'

import { Redirect } from 'react-router-dom'
import { signIn, isAuthenticated } from '../../utils/auth'

import { Field, reduxForm } from 'redux-form'
import { required } from '../../utils/validation'

import If from '../common/if'
import { Row, Col, Form } from 'react-bootstrap'
import LabelAndInput from '../common/inputAndLabel'
import SubmitButton from '../common/submitButton'
import AlertResponseError from '../common/alertResponseError'

class SignIn extends Component
{
    state = {
        title: 'Entrar',
        alert: false,
        isLoading: false
    }

    componentDidMount() {
        document.title = this.state.title
    }

    render() {
        const { isLoading, error } = this.state
        const { handleSubmit } = this.props
        return (
            <Row>
                <If test={ isAuthenticated() }>
                    <Redirect to='/perfil' />
                </If>
                <Col xs={12}>
                    <h2>{ this.state.title }</h2>
                </Col>
                <Col xs={12}>
                    <AlertResponseError {...error} />
                </Col>
                <Col xs={12}>
                    <Form onSubmit={handleSubmit(this.submit)}>
                        <Field
                            name='username' label="Nome de Usuário ou Email" type='text' component={LabelAndInput} disabled={isLoading} 
                            validate={ required } />
                        <Field
                            name='password' type='password' component={LabelAndInput} disabled={isLoading}
                            validate={ required } />
                        <SubmitButton text="Cadastrar" isLoading={isLoading} />
                    </Form>
                </Col>
            </Row>
        )
    }

    submit = async(data) => {
        this.setState({ isLoading: true })
        if(!await signIn(data)) {
            const data = 'Usuário ou senha inválido.'
            const error = { data }
            this.setState({ error })
        }
        this.setState({ isLoading: false })
    }
}

export default reduxForm({
    form: 'signIn'
})(SignIn)