/**
 * @file raspiBusiness.js
 * @author Damon Jones
 * @date 27 Feb 2017
 * @brief Module for parsing Zumo movement commands received via HTTP requests.
 *
 */

/**
 * @brief Responsible for parsing direction commands.
 * Interacts with the zumo interface module to move the robot.
 *
 */
(function (raspi) {
    var zumoInterface = require('../business/zumoInterface');
    const FORWARD = "forward";
    const BACKWARD = "backward";
    const LEFT = "left";
    const RIGHT = "right";
    const STOP = "stop";
    const INVALID_COMMAND = "Command not recognised available commands are: 'forward', 'backward', 'left', 'right', 'stop'."
    const NO_PARAMETER = "Direction parameter was not supplied";

    /**
     * @brief Moves the zumo in a certain direction then calls the callback.
     * Callback gives information on whether movement was a success.
     *
     * @param direction - Direction to move the robot.
     * @param callback - The callback to receive status on function return.
     */
    raspi.moveZumo = function (direction, callback) {
        // Get current time
        let datetime = new Date(new Date().getTime()).toLocaleTimeString();
        let result;

        if (direction) {
            switch (direction) {
                case FORWARD:
                    // Call zumo interface to send command
                    zumoInterface.moveForward(function (err) {
                        if (err) {
                            callback(err, null);
                        } else {
                            result = "Moving zumo forwards";
                            console.log(`${datetime} - ${result}`);

                            callback(null, result);
                        }
                    });
                    break;
                case BACKWARD:
                    // Call zumo interface to send command
                    zumoInterface.moveBackward(function (err) {
                        if (err) {
                            callback(err, null);
                        } else {
                            result = "Moving zumo backwards";
                            console.log(`${datetime} - ${result}`);

                            callback(null, result);
                        }
                    });
                    break;
                case LEFT:
                    // Call zumo interface to send command
                    zumoInterface.moveLeft(function (err) {
                        if (err) {
                            callback(err, null);
                        } else {
                            result = "Turning zumo to the left";
                            console.log(`${datetime} - ${result}`);

                            callback(null, result);
                        }
                    });
                    break;
                case RIGHT:
                    // Call zumo interface to send command
                    zumoInterface.moveRight(function (err) {
                        if (err) {
                            callback(err, null);
                        } else {
                            result = "Turning zumo to the right";
                            console.log(`${datetime} - ${result}`);

                            callback(null, result);
                        }
                    });
                    break;
                case STOP:
                    // Call zumo interface to send command
                    zumoInterface.stopMovement(function (err) {
                        if (err) {
                            callback(err, null);
                        } else {
                            result = "Stopping zumo";
                            console.log(`${datetime} - ${result}`);

                            callback(null, result);
                        }
                    });
                    break;
                default:
                    console.log(`${datetime} - ${INVALID_COMMAND}`);

                    callback(INVALID_COMMAND, null);
            }
        } else {
            // Error occurred no direction was present
            console.log(`${datetime} - ${NO_PARAMETER}`);

            callback(NO_PARAMETER, null);
        }
    };
})(module.exports);
