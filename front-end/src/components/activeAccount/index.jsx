import React, { Component } from 'react'

import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import { BASE_URL } from '../../utils/defaultValues'
import { Row, Col, Alert, Button, Spinner } from 'react-bootstrap'

import If from '../common/if'

export default class SignIn extends Component
{
    state = {
        isLoading: true,
        title: 'Ativação',
        isValidHash: true
    }

    async componentDidMount() {
        document.title = this.state.title
        this.setState({ isLoading: true })
        try {
            const { id, hash } = this.props.match.params
            await axios.get(`${BASE_URL}/user/active/${id}/${hash}`)
            this.setState({ isValidHash: true })
        } catch(e) {
            this.setState({ isValidHash: false })
        } finally {
            this.setState({ isLoading: false })
        }
    }
    render() {
        const { isLoading, isValidHash } = this.state
        return (
            <Row>
                <Col xs={12}>
                    <h2>{ this.state.title }</h2>
                </Col>
                <If test={ !isLoading }>
                    <Col xs={12}>
                        <Alert variant='success'>
                            <h3>Usuário Ativado!</h3>
                            <p>Seu usuário foi ativado com sucesso, todos os recursos agora estão disponíveis.</p>
                            <Link to='/'>
                                <Button variant='success'>Continue navegando</Button>
                            </Link>
                        </Alert>
                    </Col>
                </If>
                <If test={ isLoading }>
                    <Col xs={12} className="text-center">
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    </Col>
                </If>
                <If test={ !isValidHash }>
                    <Redirect to='/' />
                </If>
            </Row>
        )
    }
}