const jwt = require('jsonwebtoken');

const secretKey = 'your_secret_key'; 

function sign(payload) {
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
}

function verify(token) {
  return jwt.verify(token, secretKey);
}

module.exports = { sign, verify };