export const required = value => 
    value ? undefined : 'Campo Obrigatório.'

export const minLength = min => value =>
    value && value.length < min ? `Mínimo de ${min} caracteres.` : undefined

export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Endereço de email inválido.'
    : undefined

export const username = value =>
    value && !/^[a-z0-9]+$/gi.test(value)
    ? 'deve conter apenas letra e numero sem espaços.'
    : undefined

export const name = value =>
    value && !/^[a-záàâãéèêíïóôõöúçñ ]+ [a-záàâãéèêíïóôõöúçñ ]+$/i.test(value)
    ? 'nome completo e apenas com letras.'
    : undefined

export const password = value =>
    !/[0-9]/.test(value) || !/[A-Z]/.test(value) || !/[a-z]/.test(value)
    ? 'deve conter pelo menos uma letra minúscula, uma letra maiúscula e números'
    : undefined

export const confirmPassword = (value, allValues) =>
    (value !== allValues.password_confirmation) ? 'a senha e confirmação não estão iguais.' : undefined