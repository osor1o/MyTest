import React from 'react'

import keyToLabel from '../../utils/keyToTabel'
import { Alert } from 'react-bootstrap'
import If from './if'

export default ({ data, status }) => (
    <If test={ data }>
        <Alert variant='danger'>{ renderMessage(data, status) }</Alert>
    </If>
)

function renderMessage(data = '', status) {
    if(status === 422) {
        return renderMutipleMenssages(data)
    }
    return data.error || data
}

function renderMutipleMenssages(data) {
    const keys = Object.keys(data)
    return (
        <>
            { keys.map((key) => {
                return (
                    <div key={key}>
                        <b>{keyToLabel(key)}</b>
                        <ul style={{ margin: '0' }}>
                            {data[key].map((value, i) => <li key={i}>{value}</li>)}
                        </ul>
                    </div>
                )
            }) }
        </>
    )
}