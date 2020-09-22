const jwt = require('jsonwebtoken');
const { accessTokenSecret } = require('../config');

function newAccessToken(payload) {
  return jwt.sign(payload, accessTokenSecret);
}

function verfiyToken(req, res, next) {
  try {
    if (!req.headers.authorization) {
      throw new Error('Invalid or missing authorization header.');
    }
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, accessTokenSecret);
    req.accessToken = token;
    next();
  } catch (error) {
    res.status(403).send(error.message);
  }
}



module.exports = {
  newAccessToken,
  verfiyToken
}