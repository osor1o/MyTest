import React, { Component } from 'react'

import { Redirect } from 'react-router-dom'
import { isAuthenticated } from '../../utils/auth'

import If from '../common/if'
import { Row, Col } from 'react-bootstrap'

export default class Home extends Component {
    componentDidMount() {
        document.title = "Home"
    }

    render() {
        return (
            <Row>
                <Col xs={12}>
                    <h2>Bem Vindo!</h2>
                </Col>
                <Col xs={12}>
                    <p>Aplicação de teste para locadados, cadastre-se e ative sua conta</p>
                </Col>
                <If test={ isAuthenticated() }>
                    <Redirect to='/perfil' />
                </If>
            </Row>
        )
    }
}