var express = require('express');
var input = require('./controllers/input.ctrl');
var viewer = require('./controllers/viewer.ctrl');

var router = express.Router();

router.use('/input', input);
router.use('/viewer', viewer);

module.exports = router;