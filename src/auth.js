function login(username, password) {
    if (checkCredentials(username, password)) {
        return { success: true, token: 'abc123' };
    }
    return { success: false };
}

function checkCredentials(username, password) {
    return username && password;

function validatePassword(password) {
    return password.length >= 8;
}

module.exports = { login };
console.log('Debug: auth module loaded');  // отладочный код
