(function (raspi) {

    raspi.moveZumo = function (direction, callback) {
        if (direction) {
            // Use cylon.js library here
            var result = "Sending direction command to zumo arduino";

            callback(null, result);
        } else {
            // Error occurred no direction was present
            var err = "Could not talk to zumo arduino";
            
            callback(err, null);
        }
    };

    raspi.getVideoFeed = function (callback) {
        
    };

})(module.exports);