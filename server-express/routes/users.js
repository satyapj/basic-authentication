const express = require('express');
const router = express.Router();

const cors = require('cors');

const { newAccessToken } = require('../middlewares');

router.all('*', cors());
router.get('/', index);
// router.options('/login', cors()); // allow cors for pre-flight requeest
router.post('/login', cors(), loginPost);

module.exports = router;

function index(req, res, next) {
  res.json('respond with a resource');
}

function loginPost(req, res) {
  const payload = {
    name: 'John doe',
    exp: Math.floor(Date.now() / 1000) + (60 * 60)
  }
  const token = newAccessToken(payload);
  res.json({ reqbody: req.body, token });
}
