import React from 'react'

import { Content, Container, H1, Text } from 'native-base'
import Header from '../common/header'

export default props => (
    <Container>
        <Header {...props} />
        <Content padder>
            <H1>Bem Vindo!</H1>
            <Text>Aplicação de teste para locadados, navegue pelo menu, cadastre-se e ative sua conta</Text>
        </Content>
    </Container>
)