var express = require('express');
var procedures = require('../procedures/viewer.proc');

var router = express.Router();

router.route('/')
    .get(function(req, res) {
        procedures.all().then(function(videos) {
            res.send(videos);
        }, function(err) {
            console.log(err);
            res.status(500).send(err);
        });
    });

router.route('/:id')
    .get(function(req, res) {
        procedures.read(req.params.id).then(function(video) {
            res.send(video);
        }, function(err) {
            console.log(err);
            res.status(500).send(err);
        });
    })
    .delete(function(req, res) {
        procedures.destroy(req.params.id).then(function(video) {
            res.sendStatus(204);
        }, function(err) {
            console.log(err);
            res.status(500).send(err);
        });
    })
    .put(function(req, res) {
        procedures.update(req.params.id, req.body.title, req.body.imageUrl, req.body.videoUrl, req.body.category).then(function(video) {
            res.send(video);
        }, function(err) {
            console.log(err);
            res.status(500).send(err);
        });
    })

module.exports = router;