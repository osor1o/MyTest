import React from 'react'


import {  StyleSheet, Dimensions, Image } from 'react-native'

export default ({ uri }) => (
    <Image
        resizeMode={'cover'}
        source={{ uri }}
        style={style.avatar}
    />
)

const win = Dimensions.get('window');

const style = StyleSheet.create({
    avatar: {
        alignSelf: 'center',
        width: win.width * 0.4,
        height: win.width * 0.4,
        borderRadius: 100
    }
});