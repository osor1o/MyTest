import React, { Component } from 'react'

export default class Profile extends Component {
    componentDidMount() {
        document.title = "Perfil"
    }

    render() {
        return (
            <h2>Profile</h2>
        )
    }
}