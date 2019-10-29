import React, {  } from 'react'

import { BrowserRouter } from 'react-router-dom'

import Routes from './routes'
import Header from '../components/common/header'
import Content from '../components/common/content'
import Footer from '../components/common/footer'

export default props => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <Content>
            <Routes />
        </Content>
        <Footer />
    </BrowserRouter>
)