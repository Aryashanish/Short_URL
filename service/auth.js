const jwt = require("jsonwebtoken");
const secretKey = "Pass@123";

function setUser(user) {
    const payload = {
        _id: user._id,
        email: user.email,
        role: user.role,
    };
    return jwt.sign(payload,secretKey);
}

function getUser(token) {
    try {
        return jwt.verify(token, secretKey);
    } catch (err) {
        return null;
    }
}

module.exports = {
    setUser,
    getUser,
}