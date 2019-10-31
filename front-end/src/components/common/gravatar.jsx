import React, { Component } from 'react'

import { Image, Spinner } from 'react-bootstrap'
import avatarOfError from '../../assets/img/avatar.png'

export default class Gravatar extends Component {
    
    state = {
        spinner: true,
        avatar: false,
        error: false
    }

    render() {
        const avatar = this.setDisplay(this.state.avatar)
        const spinner = this.setDisplay(this.state.spinner)
        const src = (!this.state.error) ? this.props.src || avatarOfError : avatarOfError
        return (
            <>
                <Image 
                    src={src}
                    roundedCircle
                    width="150px"
                    height="150px"
                    onLoad={this.handleImageLoaded.bind(this)}
                    onError={this.handleImageErrored.bind(this)}
                    className={avatar}
                />
                <Spinner animation="border" role="status" className={spinner}>
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </>
        )
    }

    setDisplay(value) {
        return (value) ? "d-inline" : "d-none"
    }
    
    handleImageLoaded() {
        this.setState({ spinner: false, avatar: true });
    }
    
    handleImageErrored() {
        this.setState({ error: true });
    }
}