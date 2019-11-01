import React from 'react'
import { Text, StyleSheet } from 'react-native'

export default props => (
    <Text style={style.h2} {...props}>{props.children}</Text>
)

const style = StyleSheet.create({
    h2: {
        fontSize: 25,
        width: '100%',
        marginVertical: 5
    }
})