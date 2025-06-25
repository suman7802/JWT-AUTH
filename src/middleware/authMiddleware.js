const jwt = require('jsonwebtoken');

/**
 * Protect routes using JWT
 */
exports.protect = async (req, res, next) => {
  const auth = req.headers.authorization;

  if (auth && auth.startsWith('Bearer ')) {
    try {
      const token = auth.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // attach user data (from decoded token) on req.context.user
      req.context.user = {
        id: decoded.id,
        name: decoded.name,
      };

      // go for next step using next()
      return next();
    } catch (err) {
      return res.status(401).json({
        success: false,
        message: 'Token invalid',
      });
    }
  }

  res.status(401).json({ message: 'No token provided' });
};
