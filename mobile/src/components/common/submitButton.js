import React from 'react'

import { Spinner } from 'native-base'
import Button from './button'

export default (props) => (
    (props.isLoading)
    ? <Spinner color='#222' />
    : <Button { ...props } />
)