import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default props => (
    <View style={style.container}>
        <Text style={style.font30}>signin</Text>
    </View>
)

const style = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        fontSize: 50
    },
    font30: {
        fontSize: 30
    }
})