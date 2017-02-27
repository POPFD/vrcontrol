let express = require("express");
let bodyParser = require("body-parser");
const app = express();
const path = require('path');
const indexRoute = require("./routes/index")

// Set view engine
app.set('views', path.join(__dirname, 'views'));

// Set payload to 50mb
app.use(bodyParser.json({ limit: "50mb" }));   
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// Set root directory (sets root to /)
app.use('/', indexRoute);

// Add service endpoints to server (can be found in services folder)
const raspiService = require("./services/raspiApi")(app);

// Set up server
const server = app.listen(8001, function () {
    var port = server.address().port;

    console.log("Raspi Server started on port: " + port);

});

// Just in case for unit test mocking
module.exports = server;
