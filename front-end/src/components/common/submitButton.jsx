import React from 'react'

import { Button, Spinner } from 'react-bootstrap'

export default ({ isLoading, text }) => (
    (isLoading)
    ? <Spinner animation="border" role="status"><span className="sr-only">Loading...</span></Spinner>
    : <Button type="submit">{ text }</Button>
)