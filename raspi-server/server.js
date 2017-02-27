let express = require("express");
let bodyParser = require("body-parser");
const app = express();
const path = require('path');
const indexRoute = require("./raspi-client/routes/index")

// Set payload to 50mb
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

});

// Just in case for unit test mocking
module.exports = server;
