(function (raspi) {

    var zumoMotors = require('../business/zumoMotors');

    const forward = "forward";
    const backward = "backward";
    const left = "left";
    const right = "right";
    const stop = "stop";
    const invalidCommand = "Command not recognised available commands are: 'forward', 'backward', 'left', 'right', 'stop'."
    const speed = 200;

    raspi.moveZumo = function (direction, callback) {
        // Get current time 
        let datetime = new Date(new Date().getTime()).toLocaleTimeString();

        if (direction) {
            var result = invalidCommand;

            // Check direction
            if (direction === forward) {
                // Call zumo motors library 
                zumoMotors.setSpeeds(speed, speed);

                result = "Moving zumo forwards";
            } else if (direction === backward) {
                // Call zumo motors library 

                result = "Moving zumo backwards";
            } else if (direction === left) {
                // Call zumo motors library 

                result = "Turning zumo to the left";
            } else if (direction === right) {
                // Call zumo motors library 

                result = "Turning zumo to the right";
            } else if (direction === stop) {
                // Call zumo motors library 

                result = "Stopping zumo";
            }

            callback(null, result);
            
            var logMessage = `${datetime} - ${result}`;
            console.log(logMessage);
        } else {
            // Error occurred no direction was present
            var err = "Direction parameter was not supplied";

            callback(err, null);

            var logMessage = `${datetime} - ${result}`;
            console.log(logMessage);
        }
    };

    raspi.getVideoFeed = function (callback) {

    };

})(module.exports); 
