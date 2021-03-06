var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');

/* GET users listing. */
router.post('/', function (req, res, next) {
    if (req.body.user === 'andrealoisio' && req.body.password === 'password123@') {
        const id = 1; 
        const token = jwt.sign({ id }, process.env.SECRET, {
            expiresIn: 300 // expires in 5min
        });
        return res.json({ auth: true, token: token });
    }

    res.status(500).json({ message: 'Invalid credentials.' });
});

module.exports = router;
