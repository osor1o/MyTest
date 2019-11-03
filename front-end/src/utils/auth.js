import React from 'react'
import { Redirect } from 'react-router-dom'

import axios from 'axios'
import { BASE_URL } from './defaultValues'

const localStorage = window.localStorage

export function isAuthenticated() {
    const token = getToken();
    return Boolean(token);
};

export function getToken() {
    return localStorage.getItem('token');
}

export function setToken(token) {
    localStorage.setItem('token', token);
}

function removeToken() {
    localStorage.removeItem('token');
}

export async function signIn(data) {
    try {
        const response = await axios.post(`${BASE_URL}/auth`, data)
        const { token } = response.data
        setToken(token)
        return true
    } catch (e) {
        removeToken()
        return false
    }
}

export function logOut()
{
    removeToken()
    return <Redirect to="/" />
}

export async function sendActiveEmail() {
    try {
        const token = getToken()
        const headers = { Authorization: `Bearer ${ token }` }
        await axios.get(`${BASE_URL}/user/active/mail`, { headers })
        return true
    } catch(e) {
        return false
    }
}

export function parseJwt() {
    const token = getToken()
    const base64Fields = token.split('.')[1];
    const nomalizebase64 = base64Fields.replace(/-/g, '+').replace(/_/g, '/')
    const jsonPayload = decodeURIComponent(atob(nomalizebase64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    }).join(''))
    return JSON.parse(jsonPayload)
};