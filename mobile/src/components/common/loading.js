import React from 'react'

import { Spinner } from 'native-base'
import If from './if'

export default ({ isLoading }) => (
    <If test={ isLoading }>
        <Spinner color='#222' />
    </If>
)