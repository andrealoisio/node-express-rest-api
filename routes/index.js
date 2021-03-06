var express = require('express');
const { verifyJWT } = require('../util/verifyJWT');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({mensagem: "OK"});
});

router.get('/ping', function(req, res, next) {
  res.send('pong')
});

router.get('/authenticated-ping', verifyJWT, function(req, res, next) {
  res.send('pong')
});

router.get('/logout', function(req, res, next) {
  res.json({ auth: false, token: null });
});



module.exports = router;
