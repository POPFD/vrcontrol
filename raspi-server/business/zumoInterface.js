/**
 * @file zumoInterface.js
 * @author Jack Allister - b3042098
 * @date 14 Mar 2017
 * @brief Zumo NodeJS interface.
 *
 * Uses serialport module to send data to the arduino.
 * The data sent is movement commands for forward, backward, left, right & stop.
 */

const COM_PORT = '/dev/ttyACM0';
const BAUD_RATE = 9600;
const CHAR_FORWARD = 'W';
const CHAR_BACKWARD = 'S';
const CHAR_LEFT = 'A';
const CHAR_RIGHT = 'D';
const CHAR_STOP = 'Q';

var SerialPort = require('serialport');
var port = new SerialPort(COM_PORT, { baudRate: BAUD_RATE });


port.on('open',
  /**
   * @var port.onOpen
   * @brief On serial port open success, prints to console.
   *
   */
  function() {
    console.log('Zumo connected on: ' + COM_PORT);
  }
);


port.on('error',
  /**
   * @var port.onError
   * @brief On serial port error, print error message to console.
   *
   */
  function(err) {
    console.log('Error: ', err.message);
  }
);

/**
 * @brief Function export for moving forward.
 * Attempts to send forward command over serial.
 *
 * @param callback - Callback function to display send status.
 */
module.exports.moveForward = function (callback) {
    port.write(CHAR_FORWARD, function(err) {
        if (err) {
            var message = `Error moving zumo forwards: ${err.message}`;
            callback(err);
        } else {
            callback(null);
        }
    });
};

/**
 * @brief Function export for moving backward.
 * Attempts to send backward command over serial.
 *
 * @param callback - Callback function to display send status.
 */
module.exports.moveBackward = function (callback) {
    port.write(CHAR_BACKWARD, function (err) {
        if (err) {
            var message = `Error moving zumo backwards: ${err.message}`;
            callback(err);
        } else {
            callback(null);
        }
    });
};

/**
 * @brief Function export for moving left.
 * Attempts to send left command over serial.
 *
 * @param callback - Callback function to display send status.
 */
module.exports.moveLeft = function (callback) {
    port.write(CHAR_LEFT, function (err) {
        if (err) {
            var message = `Error turning zumo to the left: ${err.message}`;
            callback(err);
        } else {
            callback(null);
        }
    });
};

/**
 * @brief Function export for moving right.
 * Attempts to send right command over serial.
 *
 * @param callback - Callback function to display send status.
 */
module.exports.moveRight = function (callback) {
    port.write(CHAR_RIGHT, function(err) {
        if (err) {
            var message = `Error turning zumo to the right: ${err.message}`;
            callback(err);
        } else {
            callback(null);
        }
    });
};

/**
 * @brief Function export for stopping movement.
 * Attempts to send stop command over serial.
 *
 * @param callback - Callback function to display send status.
 */
module.exports.stopMovement = function (callback) {
    port.write(CHAR_STOP, function(err) {
        if (err) {
            var message = `Error stopping the zumo: ${err.message}`;
            callback(err);
        } else {
            callback(null);
        }
    });
};
