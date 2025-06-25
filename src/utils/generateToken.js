const jwt = require('jsonwebtoken');

/**
 * Generate JWT
 * @param {string} userId
 * @param {string} name
 * @returns {string} token
 *
 * @description hi focks, how are you doing.
 */
const generateToken = (userId, name) => {
  const token = jwt.sign({ id: userId, name: name }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  return token;
};

module.exports = generateToken;
