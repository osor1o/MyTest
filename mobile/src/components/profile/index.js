import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { parseJwt, getToken, logout } from '../../main/navigation/actions'

import { BASE_URL } from '../../utils/defaultValues'
import axios from 'axios'

import { Container, Content, List, ListItem, Text, Left, Body } from 'native-base'
import Header from '../common/header'
import Gravatar from '../common/gravatar'
import Loading from '../common/loading'
import If from '../common/if'
import ResendEmail from './resendEmail'


class Profile extends Component {
    state = {
        isLoading: true,
        active: true,
        data: {}
    }

    async componentDidMount() {
        this.refresh()
    }
    
    render() {
        const { isLoading, active } = this.state
        const { username, email, name, gravatar } = this.state.data
        return (
            <Container>
                <Header {...this.props} title="Perfil" profile refresh={this.refresh} />
                <Content padder>
                    <If test={ !isLoading }>
                        <If test={ active }>
                            <Gravatar uri={ gravatar } />
                            <List>
                                <ListItem>
                                    <Text>Nome Completo: { name }</Text>
                                </ListItem>
                                <ListItem>
                                    <Text>Email: { email }</Text>
                                </ListItem>
                                <ListItem>
                                    <Text>Nome de Usuário: { username }</Text>
                                </ListItem>
                            </List>
                        </If>
                        <If test={ !active }>
                            <ResendEmail />
                        </If>
                    </If>
                    <Loading isLoading={isLoading} />
                </Content>
            </Container>
        )
    }

    refresh = async () => {
        this.setState({ isLoading: true })
        try {
            const { sub } = await parseJwt()
            const token = await getToken()
            const headers = { Authorization: `Bearer ${ token }` }
            const response = await axios.get(`${BASE_URL}/user/${sub}`, { headers })
            const { data } = response
            this.setState({ data, isLoading: false, active: true })
        } catch(e) {
            const { status } = e.response
            if(status === 409) {
                this.setState({ active: false, isLoading: false })
            } else {
                this.props.logout()
            }
        }
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch)
export default connect(null, mapDispatchToProps)(Profile)