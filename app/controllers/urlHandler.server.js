'use strict';

function urlHandler (db) {
    var urls = db.collection('urls');
    urls.createIndex({ 'createdAt': 1 }, { expireAfterSeconds: 15552000 }); // expire links after 180 days.

    function generatePathName() {
        var urlProjection = { '_id': false };
        var pathName = Math.floor(Math.random() * 1000); // 4 digit path number

        urls.findOne({ 'short_url': pathName }, urlProjection, function (err, result) {
            if (err) throw err;

            if (result) return generatePathName(); // if the number is already used, generate another and check again.
            else return pathName; // if number is not used, return this value.
        });
    }


    this.getURL = function (req, res) {
        var url = req.url.slice(5); // removes the '/new/'
        var urlProjection = { '_id': false };

        urls.findOne({ 'original_url': url }, urlProjection, function (err, result) {
            if (err) throw err;

            if (result) res.json(result);
            else {
                urls.insert({ 'original_url': url, 'short_url': 'https://timolawl-url-shortener.herokuapp.com/' + generatePathName(), 'createdAt': new Date() }, function (err) {
                    if (err) throw err;

                    urls.findOne({ 'original_url': url }, urlProjection, function (err, doc) {
                        if (err) throw err;

                        res.json(doc);
                    });
                });
            }
        });
    };

    this.redirectURL = function (req, res) {
        var shortUrl = req.url.slice(1); // removes the '/'
        var urlProjection = { '_id': false };

        urls.findOne({ 'short_url': shortUrl }, urlProjection, function (err, result) {
            if (err) throw err;

            if (result) { // matching entry found. commense redirect
                res.sendFile(result.original_url);
            }
            else res.json({ "error": "This URL is not in the database, or has expired (over 180 days since creation)." });
        });
    };

}
