const crypto = require('crypto');
const base64url = require('base64url');
const ENC= 'e84e6be2300cbb32640ecd009a58dfc2';
const IV = "b388db98fe191b7c";

const ALGO = "aes-256-cbc"

function encryptString(text) {
    let cipher = crypto.createCipheriv(ALGO, ENC, IV);
    let encrypted = cipher.update(text, 'utf8', 'base64');
    encrypted += cipher.final('base64');
    return base64url.encode(encrypted);
}

function decryptString(text) {
    text = base64url.decode(text);
    let decipher = crypto.createDecipheriv(ALGO, ENC, IV);
    let decrypted = decipher.update(text, 'base64', 'utf8');
    return (decrypted + decipher.final('utf8'));
}

module.exports={
    encryptString,
    decryptString
}