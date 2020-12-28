'use strict';

const createServer = async () => {

    var express = require('express');
    const bodyParser = require('body-parser');
    const routes = require('./routes');

    var app = express();
    var PORT = 3000;

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    app.use('/api', routes());

    app.listen(PORT, function (err) {
        if (err) console.log(err);
        console.log("Server listening: ", "http://localhost:" + PORT + "/api");
    });

}

module.exports = createServer;