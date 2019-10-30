import React, { Component } from 'react'

import { Col, Alert, Button, Spinner } from 'react-bootstrap'
import { sendActiveEmail } from '../../utils/auth'

import If from '../common/if'

export default class ResendEmail extends Component {
    state = {
        isLoading: false,
        sended: false
    }

    render() {
        const { isLoading, sended } = this.state
        return (
            <Col xs={12}>
                <If test={ !sended }>
                    <Alert variant='warning'>
                        <h3>Usuário Inativo!</h3>
                        <p>É necessário entrar em seu email para confirmar o cadastro, 
                        caso não tenha recebido verifique a caixa de spam ou tente 
                        reenviar clicando no botão abaixo.</p>
                        <If test={ !isLoading }>
                            <Button variant='warning' onClick={this.sendEmail}>
                                Reenviar link de ativação
                            </Button>  
                        </If>
                        <If test={ isLoading }>
                            <Spinner animation="border" role="status">
                                <span className="sr-only">Loading...</span>
                            </Spinner>
                        </If>
                    </Alert>
                </If>
                <If test={ sended }>
                    <Alert variant='success'>
                        <h3>Reenviado com sucesso!</h3>
                        <p>É necessário entrar em seu email para confirmar o cadastro, 
                        caso não tenha recebido verifique a caixa de spam.</p>
                    </Alert>
                </If>
            </Col>
        )
    }

    sendEmail = async() => {
        this.setState({ isLoading: true })
        await sendActiveEmail();
        this.setState({ isLoading: false, sended: true })
    }
}