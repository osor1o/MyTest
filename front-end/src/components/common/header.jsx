import React from 'react'

import { Navbar } from 'react-bootstrap'
import Menu from './menu'

export default props => (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">My Test</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Menu />
        </Navbar.Collapse>
    </Navbar>
)