(function (raspi) {
    var zumoInterface = require('../business/zumoInterface');
    const forward = "forward";
    const backward = "backward";
    const left = "left";
    const right = "right";
    const stop = "stop";
    const invalidCommand = "Command not recognised available commands are: 'forward', 'backward', 'left', 'right', 'stop'."

    raspi.moveZumo = function (direction, callback) {
        // Get current time 
        let datetime = new Date(new Date().getTime()).toLocaleTimeString();

        if (direction) {
            let result = invalidCommand;

            // Check direction
            if (direction === forward) {
                // Call zumo interface to send command
                zumoInterface.moveForward(function (err) {
                    if (err) {                        
                        callback(err, null);
                    } else {
                        result = "Moving zumo forwards";
                        callback(null, result);
                    }
                });                
            } else if (direction === backward) {
                // Call zumo interface to send command
                zumoInterface.moveBackward(function (err) {
                    if (err) {
                        callback(err, null);
                    } else {
                        result = "Moving zumo backwards";
                        callback(null, result);
                    }
                });                     
            } else if (direction === left) {
                // Call zumo interface to send command
                zumoInterface.moveLeft(function (err) {
                    if (err) {
                        callback(err, null);
                    } else {
                        result = "Turning zumo to the left";
                        callback(null, result);
                    }
                });                      
            } else if (direction === right) {
                // Call zumo interface to send command
                zumoInterface.moveRight(function (err) {
                    if (err) {
                        callback(err, null);
                    } else {
                        result = "Turning zumo to the right";
                        callback(null, result);
                    }
                });                         
            } else if (direction === stop) {
                // Call zumo interface to send command
                zumoInterface.stopMovement(function (err) {
                    if (err) {
                        callback(err, null);
                    } else {
                        result = "Stopping zumo";
                        callback(null, result);
                    }
                });             
            }            
            
            var logMessage = `${datetime} - ${result}`;
            console.log(logMessage);
        } else {
            // Error occurred no direction was present
            var err = "Direction parameter was not supplied";

            callback(err, null);

            var logMessage = `${datetime} - ${err}`;
            console.log(logMessage);
        }
    };
})(module.exports); 
