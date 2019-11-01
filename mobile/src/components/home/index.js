import React from 'react'

import P from '../common/p'
import H2 from '../common/h2'
import { Content, Container } from 'native-base'
import Header from '../common/header'

export default props => (
    <Container>
        <Header {...props} />
        <Content padder>
            <H2>Bem Vindo!</H2>
            <P>Aplicação de teste para locadados, navegue pelo menu, cadastre-se e ative sua conta</P>
        </Content>
    </Container>
)