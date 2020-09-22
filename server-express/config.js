const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
}