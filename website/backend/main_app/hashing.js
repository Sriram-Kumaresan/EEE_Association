const bcrypt = require('bcrypt');

async function hashPassword(password){
    try {
        const saltRounds = 12;
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword
    } catch (error) {
        console.error(error)
    }
}

async function compareHash(hashedPassword,user_password){
    try {
        const isPasswordMatch = await bcrypt.compare(user_password, hashedPassword);
        return isPasswordMatch
    } catch (error) {
        console.error(error)
    }
}

module.exports={
    hashPassword,
    compareHash
}