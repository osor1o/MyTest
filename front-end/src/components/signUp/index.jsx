import React, { Component } from 'react'

import { Redirect } from 'react-router-dom'
import { BASE_URL } from '../../utils/defaultValues'
import axios from 'axios'
import { signIn, sendActiveEmail, isAuthenticated } from '../../utils/auth'

import { Field, reduxForm } from 'redux-form'
import { required, email, password, minLength, confirmPassword, username, name } from '../../utils/validation'

import If from '../common/if'
import { Row, Col, Form } from 'react-bootstrap'
import LabelAndInput from '../common/inputAndLabel'
import SubmitButton from '../common/submitButton'
import AlertResponseError from '../common/alertResponseError'

class SignUp extends Component {
    state = {
        title: 'Criar Conta',
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
                            name='name' type='text' component={LabelAndInput} disabled={isLoading} 
                            validate={[ required, name ]} />
                        <Field
                            name='email' type='email' component={LabelAndInput} disabled={isLoading}
                            validate={[ required, email ]} />
                        <Field
                            name='username' type='text' component={LabelAndInput} disabled={isLoading} 
                            validate={[ required, username ]} />
                        <Field
                            name='password' type='password' component={LabelAndInput} disabled={isLoading}
                            validate={[ required, password, minLength(6), confirmPassword ]} />
                        <Field
                            name='password_confirmation' type='password' component={LabelAndInput} disabled={isLoading} 
                            validate={ required } />
                        <SubmitButton text="Cadastrar" isLoading={isLoading} />
                    </Form>
                </Col>
            </Row>
        )
    }

    submit = async (data) => {
        try {
            this.setState({ isLoading: true })
            await axios.post(`${BASE_URL}/user`, data)
            await signIn(data)
            await sendActiveEmail()
        } catch(e) {
            const { data, status } = e.response
            const error = { data, status }
            this.setState({ error })
        } finally {
            this.setState({ isLoading: false })
        }
    }
}

export default reduxForm({
    form: 'signUp'
})(SignUp)