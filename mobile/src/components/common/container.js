import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'

export default ({ children }) => (
    <ScrollView style={ style.container }>
        { children }
    </ScrollView>
)

const style = StyleSheet.create({
    container: {
        paddingHorizontal: '5%'
    }
})