import React, { Component } from 'react'
import { Header as NativeHeader, Left, Body, Button, Icon, Title } from 'native-base';

const bgColor = '#f8f9fa'
const fontColor = '#222'

export default class Header extends Component {
    render() {
        return (
            <NativeHeader
                androidStatusBarColor={ bgColor }
                iosBarStyle='dark-content'
                style={{ backgroundColor: bgColor }}
            >
                <Left>
                    <Button transparent onPress={() => this.props.navigation.openDrawer()}>
                        <Icon name='menu' style={{ color: fontColor }} />
                    </Button>
                </Left>
                <Body>
                    <Title style={{ color: fontColor }}>MyTest</Title>
                </Body>
            </NativeHeader>
        )
    }
}