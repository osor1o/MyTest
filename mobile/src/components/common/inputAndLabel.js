import React from 'react'

import { StyleSheet } from 'react-native'
import { Item, Input, Label, Text } from 'native-base'
import keyToLabel from '../../utils/keyToLabel'
import If from './if'

export default props => {
    const { last, input, secureTextEntry } = props
    const { touched, error } = props.meta
    const isInvalid = Boolean(touched && error)
    const label = props.label || keyToLabel(props.input.name)
    return (
        <>
            <Item floatingLabel last={ last } error={isInvalid}>
                <Label>{ label }</Label>
                <Input {...input} secureTextEntry={ secureTextEntry } />
            </Item>
            <If test={isInvalid}>
                <Text style={style.errorText}>{error}</Text>
            </If>
        </>
    )
}

const style = StyleSheet.create({
    errorText: {
        color: 'red',
        textAlign: 'right'
    }
})