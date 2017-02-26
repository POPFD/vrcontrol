module.exports = function (rapiro) {

    rapiro.move = function (direction, callback) {
        if (direction) {
            var result = "Command sent";
            // Use cylon.js library here
            callback(null, result);
        } else {
            var err = "Could not talk to rapiro";
            // Error occurred no direction was present
            callback(err, null);
        }       
    };

};