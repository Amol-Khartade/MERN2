const jwt = require('jsonwebtoken');

const authenticateUser = (req, res, next) => {
  const token = req.headers.authorization;
  console.log('Token:', token);

  if (!token) {
    return res.status(401).json({ message: 'Authentication failed. Token not found.' });
  }

  try {
    const secretKey = process.env.JWT_SECRET;
    const decodedToken = jwt.verify(token.replace('Bearer ', ''), secretKey);
    req.userId = decodedToken.userId;
    next();
  } catch (error) {
    console.error('Token Verification Error:', error);
    return res.status(401).json({ message: 'Authentication failed. Invalid token.' });
  }
};

module.exports = authenticateUser;
