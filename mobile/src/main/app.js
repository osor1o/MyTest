import React from 'react'

import Navigation from './navigation'

import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise'
import reducers from './reducers'

const store = applyMiddleware(promise)(createStore)(reducers)

export default props => (
    <Provider store={store}>
        <Navigation />
    </Provider>
)