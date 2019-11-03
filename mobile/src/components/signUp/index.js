import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { required, email, password, minLength, confirmPassword, username, name } from '../../utils/validation'

import { Content, Container, Form } from 'native-base'

import Header from '../common/header'
import AlertResponseError from '../common/alertResponseError'
import InputAndLabel from '../common/inputAndLabel'
import SubmitButton from '../common/submitButton'

import { signUp, sendActiveEmail } from '../../main/navigation/actions'

class SignUp extends Component {
    state = {
        isLoading: false
    }

    render() {
        const { isLoading, error } = this.state
        return (
            <Container>
                <Header {...this.props} title='Criar Conta' />
                <Content padder>
                    <AlertResponseError {...error} />
                    <Form>
                        <Field name='name' component={InputAndLabel} disabled={isLoading}
                            // validate={[ required, name ]}
                             />
                        <Field name='email' component={InputAndLabel} disabled={isLoading}
                            // validate={[ required, email ]} 
                            />
                        <Field name='username' component={InputAndLabel} disabled={isLoading}
                            // validate={[ required, username ]} 
                            />
                        <Field name='password' component={InputAndLabel} disabled={isLoading}
                            // validate={[ required, password, minLength(6), confirmPassword ]}
                             />
                        <Field name='password_confirmation' component={InputAndLabel} disabled={isLoading}
                            // validate={ required } last 
                            />
                        <SubmitButton
                            isLoading={isLoading}
                            onPress={this.props.handleSubmit(this.submit)}
                            text="Cadastrar"
                        />
                    </Form>
                </Content>
            </Container>
        )
    }

    submit = async(data) => {
        try {
            this.setState({ isLoading: true })
            await this.props.signUp(data)
        } catch(e) {
            const { data, status } = e.response
            const error = { data, status }
            this.setState({ error })
            this.setState({ isLoading: false })
        }
    }
}

SignUp = reduxForm({ form: 'signUp' })(SignUp)

const mapDispatchToProps = dispatch => bindActionCreators({ signUp }, dispatch)
export default connect(null, mapDispatchToProps)(SignUp)