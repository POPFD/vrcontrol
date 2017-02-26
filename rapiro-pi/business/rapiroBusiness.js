(function (rapiro) {

    rapiro.moveBody = function (direction, callback) {
        if (direction) {
            // Use cylon.js library here
            var result = "Sending direction command to rapiro's body";
            
            callback(null, result);
        } else {
            var err = "Could not talk to rapiro";

            // Error occurred no direction was present
            callback(err, null);
        }       
    };

    rapiro.rotateHead = function (direction, callback) {
            if (direction) {
            // Use cylon.js library here
            var result = "Sending direction command to rapiro's head";

            callback(null, result);
        } else {
            var err = "Could not talk to rapiro";
            
            // Error occurred no direction was present
            callback(err, null);
        } 
    };

})(module.exports);