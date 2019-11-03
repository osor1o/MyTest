import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { init } from './actions'

import PublicNavigation from './publicNavigation'
import Profile from '../../components/profile'
import Loading from '../../components/common/loading'

class App extends Component {
    state = {
        isLoading: true
    }

    async componentDidMount() {
        await this.props.init()
        this.setState({ isLoading: false })
    }

    render() {
        if(this.state.isLoading) {
            return <Loading isLoading={true} />
        }
        return (this.props.auth.isAuthenticated) ? <Profile /> : <PublicNavigation />
    }
}

const mapStateToProps = state => ({ auth: state.auth })
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)