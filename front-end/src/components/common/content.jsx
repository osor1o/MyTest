import React from 'react'

import { Container } from 'react-bootstrap'

export default props => (
    <Container className='mt-3 mb-3'>
        { props.children }
    </Container>
)