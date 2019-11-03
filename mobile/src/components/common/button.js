import React from 'react'
import { Button, Text } from 'native-base'

export default ({ text, color, onPress, align }) => (
    <Button 
        onPress={ onPress }
        style={{ 
            justifyContent: align || 'center',
            backgroundColor: color || '#007bff',
            marginVertical: 20
        }}
    >
        <Text >{ text }</Text>
    </Button>
)