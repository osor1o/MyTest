import React from 'react'
import { Button, Text } from 'native-base'

export default ({ text, color, onPress, align, style }) => (
    <Button 
        onPress={ onPress }
        style={{ 
            justifyContent: align || 'center',
            backgroundColor: color || '#007bff',
            marginVertical: 20,
            ...style
        }}
    >
        <Text >{ text }</Text>
    </Button>
)