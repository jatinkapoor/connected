const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    console.log("in auth validation");
    const token = req.headers.authorization.split(' ')[1];
    console.log(token);
    const decoded = jwt.verify(token, "secret");
    req.userData = decoded;
    console.log('in user auth');
    next();
  } catch(error) {
    return res.status(401).json({
      message: 'Not a valid JWT Token'
    });
  }
};
