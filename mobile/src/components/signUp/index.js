import React from 'react'

import H2 from '../common/h2'
import { Content, Container } from 'native-base'
import Header from '../common/header'

export default props => (
    <Container>
        <Header {...props} />
        <Content padder>
            <H2>Criar Conta</H2>
        </Content>
    </Container>
)