const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.userData = decoded;
    console.log('in user auth');
    next();
  } catch(error) {
    return res.status(401).json({
      message: 'Not a valid JWT Token'
    });
  }
};