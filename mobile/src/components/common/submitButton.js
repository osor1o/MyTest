import React from 'react'

import Loading from './loading'
import Button from './button'

export default (props) => (
    (props.isLoading)
    ? <Loading isLoading={props.isLoading} />
    : <Button { ...props } />
)