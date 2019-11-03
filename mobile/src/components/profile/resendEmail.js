import React, { Component } from 'react'

import { sendActiveEmail } from '../../main/navigation/actions'

import { StyleSheet } from 'react-native'
import { View, Card, CardItem, Text, Body } from 'native-base'
import SubmitButton from '../common/submitButton'
import If from '../common/if'

export default class ResendEmail extends Component {
    state = {
        isLoading: false,
        sended: false
    }

    render() {
        const { isLoading, sended } = this.state
        return (
            <View>
                <If test={ !sended }>
                    <Card style={style.cardSend}>
                        <CardItem header style={style.cardItemSend}>
                            <Text>Usuário Inativo!</Text>
                        </CardItem>
                        <CardItem style={style.cardItemSend}>
                            <Body>
                                <Text>
                                É necessário entrar em seu email para confirmar o cadastro, 
                                caso não tenha recebido verifique a caixa de spam ou tente 
                                reenviar clicando no botão abaixo.
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem header style={style.cardItemSend}>
                            <SubmitButton
                                style={style.sendButton}
                                text="Reenviar link de ativação"
                                isLoading={ isLoading }
                                onPress={this.sendEmail}
                            />
                        </CardItem>
                        
                    </Card>
                </If>
                <If test={ sended }>
                    <Card style={style.cardSended}>
                        <CardItem header style={style.cardSendedItemSended}>
                            <Text>Reenviado com sucesso!</Text>
                        </CardItem>
                        <CardItem style={style.cardSendedItemSended}>
                            <Body>
                                <Text>
                                É necessário entrar em seu email para confirmar o cadastro, 
                                caso não tenha recebido verifique a caixa de spam.
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                </If>
            </View>
        )
    }

    sendEmail = async() => {
        this.setState({ isLoading: true })
        await sendActiveEmail();
        this.setState({ isLoading: false, sended: true })
    }
}

const style = StyleSheet.create({
    cardSend: {
        backgroundColor: '#fff3cd',
        borderColor: '#ffeeba'
    },
    cardItemSend: {
        color: '#856404',
        backgroundColor: '#fff3cd'
    },
    sendButton: {
        backgroundColor: '#ffc107',
        marginVertical: 0
    },
    cardSended: {
        backgroundColor: '#d4edda',
        borderColor: '#c3e6cb'
    },
    cardSendedItemSended: {
        color: '#155724',
        backgroundColor: '#d4edda'
    }
})