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

function login(username, password) {
    if (checkCredentals(username, password)) {
        return { success: true, token: 'abc123' };
    }
    return { success: false };
}

module.exports = { login };
