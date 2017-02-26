let express = require("express");
const app = express();
let bodyParser = require("body-parser");

// Set payload to 50mb might need to change depending on video file stream size
app.use(bodyParser.json({ limit: "50mb" }));   
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// set root directory (sets root to /)
app.use(express.static(__dirname));

// Add service endpoints to server (can be found in services folder)


// Set up server
var server = app.listen(8001, function () {
    var port = server.address().port;

    console.log("Rapiro Pi Server started on port: " + port);

});
