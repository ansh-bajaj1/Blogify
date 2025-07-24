const JWT = require('jsonwebtoken');
const { findOneAndUpdate } = require('../models/user');

const secret = "Ansh@123";

function createTokenForUser(user){
    const payload = {
        id: user._id,
        email: user.email,
        profileImageUrl: user.profileImageUrl,
        fullName: user.fullName,
        role: user.role,
    };
    const token = JWT.sign(payload, secret);
    return token;
}

function validateToken(token){
    const payload = JWT.verify(token, secret);
    return payload;
};

module.exports = {
    createTokenForUser,
    validateToken,
};