import React from 'react'
import { Text, StyleSheet } from 'react-native'

export default props => (
    <Text style={ style.p } { ...props }>{props.children}</Text>
)

const style = StyleSheet.create({
    p: {
        fontSize: 15,
        width: '100%',
        marginVertical: 5
    }
})