const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', index);

module.exports = router;

function index(req, res, next) {
  res.render('index', { title: 'Express' });
}