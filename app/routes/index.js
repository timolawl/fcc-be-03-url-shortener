'use strict';

module.exports = function(app, db) {
    var url;

    app.route('/')
        .get(function(req, res) {
            res.sendFile(process.cwd() + '/public/index.html');
        });

    app.get(/^\/new\/https?:\/\/[a-zA-Z.-]+/, function(req, res) {
        url = req.url.slice(5); // removes the '/new/'
    });

    app.get(/^\d{4}$/, function(req, res) {
        
    });

};
