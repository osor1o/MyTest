import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import { HashRouter } from 'react-router-dom'

import Routes from './routes'
import Header from '../components/common/header'
import Content from '../components/common/content'

export default props => (
    <HashRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <Content>
            <Routes />
        </Content>
    </HashRouter>
)