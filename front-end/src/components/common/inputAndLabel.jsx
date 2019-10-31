import React from 'react'

import keyToLabel from '../../utils/keyToTabel'
import { Form } from 'react-bootstrap'

export default props => {
    const { touched, error } = props.meta
    const isInvalid = touched && error
    const label = props.label || keyToLabel(props.input.name)
    return (
        <Form.Group controlId={props.input.name}>
            <Form.Label>{ label }</Form.Label>
            <Form.Control disabled={props.disabled} placeholder={label}
                {...props.input} type={props.type || 'text'} isInvalid={isInvalid} />
            <Form.Control.Feedback type='invalid'>{error}</Form.Control.Feedback>
        </Form.Group>
    )
}