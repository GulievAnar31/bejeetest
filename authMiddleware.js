const jwt = require('jsonwebtoken');
const User = require('./user');

module.exports = async function authMiddleware(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: Missing token' });
  }

  try {
    const decoded = jwt.verify(token, '+');
    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(401).json({ error: 'Unauthorized: Invalid token' });
    }
    next();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to authenticate token' });
  }
};
