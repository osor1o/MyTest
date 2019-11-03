import React, { Component } from 'react'

import { Content, Container, Form } from 'native-base'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'

import Header from '../common/header'
import AlertResponseError from '../common/alertResponseError'
import InputAndLabel from '../common/inputAndLabel'
import SubmitButton from '../common/submitButton'

import { signIn } from '../../main/navigation/actions'
import { required } from '../../utils/validation'

class SignIn extends Component {
    state = {
        isLoading: false
    }

    render() {
        const { isLoading, error } = this.state
        return (
            <Container>
                <Header {...this.props} title="Entrar" />
                <Content padder>
                    <AlertResponseError {...error} />
                    <Form>
                        <Field name='username' label='Nome de Usuário ou Email' component={InputAndLabel}
                            validate={ required } />
                        <Field name='password' component={InputAndLabel}
                            validate={ required } last />
                    </Form>
                    <SubmitButton
                        isLoading={isLoading}
                        onPress={this.props.handleSubmit(this.submit)}
                        text="Entrar"
                    />
                </Content>
            </Container>
        )
    }

    submit = async (data) => {
        this.setState({ isLoading: true })
        const { type: result } = await this.props.signIn(data)
        if(result === 'LOGOUT') {
            const data = 'Usuário ou senha inválido.'
            const error = { data }
            this.setState({ error })
            this.setState({ isLoading: false })
        }
    }
}

SignIn = reduxForm({ form: 'signIn' })(SignIn)

const mapDispatchToProps = dispatch => bindActionCreators({ signIn }, dispatch)
export default connect(null, mapDispatchToProps)(SignIn)