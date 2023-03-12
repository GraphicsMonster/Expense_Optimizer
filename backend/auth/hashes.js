const bcrypt = require('bcrypt')

async function hashPassword(password) {
    return bcrypt.hash(password, 10);
}

async function comparePassword(plaintextPassword, hash) {
    return bcrypt.compare(plaintextPassword, hash);
}

module.exports = {hashPassword, comparePassword}