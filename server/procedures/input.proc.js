var db = require('../config/db');

exports.create = function(title, image, video, category) {
    return db.row('NewVideo', [title, image, video, category]);
}