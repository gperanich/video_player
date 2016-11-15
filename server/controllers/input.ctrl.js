var express = require('express');
var procedures = require('../procedures/input.proc');

var router = express.Router();

router.route('/')
    .post(function(req, res) {
        console.log(req.body);
        procedures.create(req.body.title, req.body.image, req.body.video, req.body.category).then(function(video) {
            res.semd(video);
        }, function(err) {
            console.log(err);
            res.status(500).send(err);
        })
    })

module.exports = router;