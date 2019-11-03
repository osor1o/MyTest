import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import PublicNavigation from './publicNavigation'
import PrivateNavigation from './privateNavigation'

import { init, getToken } from './actions'

class App extends Component {
    async componentDidMount() {
        await this.props.init()
        console.log(await getToken())
    }

    render() {
        const { isAuthenticated } = this.props.auth
        return (isAuthenticated) ? <PrivateNavigation /> : <PublicNavigation />
    }
}

const mapStateToProps = state => ({ auth: state.auth })
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)