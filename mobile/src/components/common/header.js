import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { logout } from '../../main/navigation/actions'

import { Header as NativeHeader, Left, Right, Body, Button, Icon, Title } from 'native-base';
import If from './if'

const bgColor = '#f8f9fa'
const statusBgColor = '#ccc'
const fontColor = '#222'

 class Header extends Component {
    render() {
        const { profile } = this.props
        return (
            <NativeHeader
                androidStatusBarColor={ statusBgColor }
                iosBarStyle='dark-content'
                style={{ backgroundColor: bgColor }}
            >
                <Left>
                    <If test={!profile}>
                        <Button transparent onPress={() => this.props.navigation.openDrawer()}>
                            <Icon name='menu' style={{ color: fontColor }} />
                        </Button>
                    </If>
                    <If test={profile}>
                        <Button transparent onPress={() => this.props.refresh()}>
                            <Icon name='refresh' style={{ color: fontColor }} />
                        </Button>
                    </If>
                </Left>
                <Body>
                    <Title style={{ color: fontColor }}>
                        { this.props.title || 'My Test' }
                    </Title>
                </Body>
                <If test={profile}>
                    <Right>
                        <Button transparent onPress={() => this.props.logout()}>
                            <Icon name='exit' style={{ color: fontColor }} />
                        </Button>
                    </Right>
                </If>
            </NativeHeader>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch)
export default connect(null, mapDispatchToProps)(Header)