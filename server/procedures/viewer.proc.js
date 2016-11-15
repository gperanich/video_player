var db = require('../config/db');

exports.all = function() {
    return db.rows('GetVideos');
}
exports.read = function(id) {
    return db.row('GetVideo', [id]);
}
exports.update = function(id, title, imageUrl, videoUrl, category) {
    return db.empty('UpdateVideo', [id, title, imageUrl, videoUrl, category]);
}
exports.destroy = function(id) {
    return db.empty('DeleteVideo', [id]);
}