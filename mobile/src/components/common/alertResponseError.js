
import React from 'react'

import keyToLabel from '../../utils/keyToLabel'
import If from './if'
import { StyleSheet } from 'react-native'
import { View, Text, Card, Body, CardItem } from 'native-base'

export default ({ data, status }) => (
    <If test={ data }>
        <Card style={style.card}>
            { renderMessage(data, status) }
        </Card>
    </If>
)

function renderMessage(data = '', status) {
    if(status === 422) {
        return renderMutipleMenssages(data)
    }
    return (
        <CardItem style={style.card}>
            <Text>
                {data.error || data}
            </Text>
        </CardItem>
    ) 
}

function renderMutipleMenssages(data) {
    const keys = Object.keys(data)
    return (
        <>
            { keys.map((key) => {
                return (
                    <View key={key+'.header'}>
                        <CardItem header style={style.card}>
                            <Text>{keyToLabel(key)}</Text>
                        </CardItem>
                        {data[key].map((value, i) => (
                            <CardItem key={i+'.item'} style={{...style.card}}>
                                    <Text>- {value}</Text>
                            </CardItem>
                        ))}
                    </View>
                )
            }) }
        </>
    )
}

const style = StyleSheet.create({
    card: {
        backgroundColor: '#f8d7da',
        borderColor: '#f5c6cb',
        color: '#721c24'
    }
})