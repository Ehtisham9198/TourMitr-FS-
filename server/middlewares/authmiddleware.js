const JWT = require('jsonwebtoken');

const requireSignIn = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: 'Authorization token is required' });

    const decode = JWT.verify(token, process.env.JWT_SECRET);
    req.user = decode;
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token expired', expiredAt: error.expiredAt });
    }
    console.log(error);
    res.status(403).json({ message: 'Authentication failed' });
  }
};

module.exports = { requireSignIn };
