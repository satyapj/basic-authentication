const express = require('express');
const router = express.Router();

const cors = require('cors');

const { verfiyToken } = require('../middlewares');

router.all('*', cors(), verfiyToken);
router.get('/', index);

module.exports = router;

function index(req, res) {
  // const { accessToken } = req;
  res.json({ message: 'API is getting ready...' });
}
