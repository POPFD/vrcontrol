let express = require("express");
let bodyParser = require("body-parser");
const app = express();

// Set payload to 50mb might need to change depending on video file stream size
app.use(bodyParser.json({ limit: "50mb" }));   
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// Set root directory (sets root to /)
app.use(express.static(__dirname));

// Add service endpoints to server (can be found in services folder)
const rapiroService = require("./services/rapiroApi")(app);
const resourcesService = require("./services/resourcesApi")(app);

// Set up server
const server = app.listen(8001, function () {
    var port = server.address().port;

    console.log("Rapiro Pi Server started on port: " + port);

});

// Just in case for unit test mocking
module.exports = server;
