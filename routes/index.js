var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.json('index', { title: 'Express' });
  res.json({mensagem: "OK"});
});

router.get('/ping', function(req, res, next) {
  // res.json('index', { title: 'Express' });
  res.send('pong')
});

module.exports = router;
