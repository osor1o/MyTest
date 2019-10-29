const localStorage = window.localStorage

export function isAuthenticated() {
    const token = localStorage.getItem('token');
    return Boolean(token);
};

export function setToken(token) {
    localStorage.setItem('token', token);
}

export function removeToken() {
    localStorage.removeItem('token');
}