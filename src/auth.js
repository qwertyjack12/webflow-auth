// Authentication module
function login(username, password) {
    // TODO: Implement
}

function checkCredentials(username, password) {  // опечатка в названии
    return username && password;
}

module.exports = { login };
console.log('Debug: auth module loaded');  // отладочный код
