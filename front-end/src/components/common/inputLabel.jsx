import React from 'react'
import If from './if'

export default props => (
    <div>
        <label htmlFor={ props.name }>{ props.label }</label>
        <input type="text" id={ props.name } {...props} />
        <If text={props.validation && props.validation !== ""}>
            <span>{ props.validation }</span>
        </If>
    </div>
)