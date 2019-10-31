export default function (key) {
    switch(key) {
        case('name'):
            return 'Nome Completo'
        case('username'):
            return 'Nome de Usuário'
        case('email'):
            return 'Email'
        case('password'):
            return 'Senha'
        case('password_confirmation'):
            return 'Confirmar Senha'
        default:
            return key;
    }
}