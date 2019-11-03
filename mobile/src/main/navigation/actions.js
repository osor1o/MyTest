import { BASE_URL } from '../../utils/defaultValues'
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'
import { decode as atob } from 'base-64'

export async function login(token) {
    await setToken(token)
    return { type: 'LOGIN' }
}

export async function logout() {
    await removeToken()
    return { type: 'LOGOUT' }
}

export async function init() {
    const token = await getToken()
    return (Boolean(token)) ? login(token) : logout()
}

export async function getToken() {
    return await AsyncStorage.getItem('token')
}

async function setToken(token) {
    await AsyncStorage.setItem('token', token)
}

async function removeToken() {
   await AsyncStorage.removeItem('token');
}

export async function signIn(data) {
    try {
        const response = await axios.post(`${BASE_URL}/auth`, data)
        const { token } = response.data
        return await login(token)
    } catch (e) {
        return await logout()
    }
}

export async function signUp(data) {
    try {
        await axios.post(`${BASE_URL}/user`, data)
        const action = await signIn(data)
        await sendActiveEmail()
        return action
    } catch(e) {
        throw e
    }
}

export async function sendActiveEmail() {
    try {
        const token = await getToken()
        const headers = { Authorization: `Bearer ${ token }` }
        await axios.get(`${BASE_URL}/user/active/mail`, { headers })
        return true
    } catch(e) {
        return false
    }
}

export async function parseJwt() {
    const token = await getToken()
    const base64Fields = token.split('.')[1];
    const nomalizebase64 = base64Fields.replace(/-/g, '+').replace(/_/g, '/')
    const jsonPayload = decodeURIComponent(atob(nomalizebase64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    }).join(''))
    return JSON.parse(jsonPayload)
}