/**
 * @file server.js
 * @author Damon Jones
 * @date 27 Feb 2017
 * @brief Main code for our NodeJS Raspberry PI server
 *
 * Responsible for initialising our express server up.
 */

let express = require("express");
let bodyParser = require("body-parser");
const app = express();
const path = require('path');
const indexRoute = require("./raspi-client/routes/index");
const cmd = require("node-cmd");

// Set payload limit to 50mb
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// Set routes
app.use(express.static(__dirname + '/raspi-client'));
const index = require("./raspi-client/routes/index")(app, __dirname);

// Add service endpoints to server (can be found in services folder)
const raspiService = require("./services/raspiApi")(app);

// Set up server
const server = app.listen(8001, function () {
    var port = server.address().port;

    console.log("Raspi Server started on port: " + port);

    cmd.run('sudo mjpg_streamer -o "output_http.so -p 9001 -w ./mjpg-streamer/www" -i "input_raspicam.so -x 1280 -y 720 -fps 15"');

    console.log("Running camera stream on port: 9001");

});

// Just in case for unit test mocking
module.exports = server;
