import React, { Component } from 'react'

import { Redirect } from 'react-router-dom'
import { isAuthenticated, getToken, parseJwt, logOut } from '../../utils/auth'
import { BASE_URL } from '../../utils/defaultValues'

import { Row, Col, Spinner, ListGroup, Image } from 'react-bootstrap'
import axios from 'axios'

import If from '../common/if'
import Avatar from '../../assets/img/avatar.png'
import ResendEmail from './ResendEmail'

export default class Profile extends Component {

    state = {
        title: 'Perfil',
        isLoading: true,
        active: true,
        data: {}
    }

    async componentDidMount() {
        document.title = this.state.title
        try {
            const { sub } = parseJwt()
            const token = getToken()
            const headers = { Authorization: `Bearer ${ token }` }
            const response = await axios.get(`${BASE_URL}/user/${sub}`, { headers })
            const { data } = response
            this.setState({ data })
        } catch(e) {
            const { status } = e.response
            if(status === 409) {
                this.setState({ active: false })
            } else {
                logOut()
            }
        } finally {
            this.setState({ isLoading: false })
        }
    }

    render() {
        const { isLoading, active } = this.state
        const { username, email, name } = this.state.data
        return (
            <Row className="justify-content-between">
                <If test={ !isLoading }>
                    <Col xs={12}>
                        <h2>Perfil</h2>
                    </Col>
                    <If test={ active }>
                        
                        <Col md={3} sm={12} className="text-center mt-3">
                            <Image src={Avatar} roundedCircle width="150px" height="150px" />
                        </Col>
                        <Col md={9} sm={12} className="mt-3">
                            <ListGroup>
                                <ListGroup.Item>
                                    <b>Nome Completo</b>: { name }
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <b>Email</b>: { email }
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <b>Nome de Usuário:</b>: { username }
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </If>
                    <If test={ !active }>
                        <ResendEmail />
                    </If>
                </If>
                <If test={ isLoading }>
                    <Col xs={12} className="text-center">
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    </Col>
                </If>
                <If test={ !isAuthenticated() }>
                    <Redirect to='/' />
                </If>
            </Row>
        )
    }
}