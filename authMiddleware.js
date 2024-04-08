const jwt = require('jsonwebtoken');
const User = require('./user');

module.exports = async function authMiddleware(req, res, next) {
  console.log(req.headers)
  const authHeader = req.headers.authorization;

  // if (!authHeader) {
  //   return res.status(401).json({ error: 'Unauthorized: Missing token' });
  // }

  // // Разделите строку заголовка Authorization на части по пробелу
  // const [bearer, token] = authHeader.split(' ');

  // if (bearer !== 'Bearer' || !token) {
  //   return res.status(401).json({ error: 'Unauthorized: Malformed token' });
  // }

  // try {
  //   const decoded = jwt.verify(token, '+');
  //   const user = await User.findById(decoded.userId);

  //   if (!user) {
  //     return res.status(401).json({ error: 'Unauthorized: Invalid token' });
  //   }
  //   next();
  // } catch (err) {
  //   console.error(err);
  //   res.status(500).json({ error: 'Failed to authenticate token' });
  // }
};
