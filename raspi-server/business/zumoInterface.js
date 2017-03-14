const COM_PORT = '/dev/ttyACM0';
const BAUD_RATE = 9600;
const CHAR_FORWARD = 'W';
const CHAR_BACKWARD = 'S';
const CHAR_LEFT = 'A';
const CHAR_RIGHT = 'D';
const CHAR_STOP = 'Q';

var SerialPort = require('serialport')
var port = new SerialPort(COM_PORT, { baudRate: BAUD_RATE });

port.on('open', function() {
    console.log('Zumo connected on: ' + COM_PORT);
});

port.on('error', function(err) {
    console.log('Error: ', err.message);
});

module.exports.moveForward = function() {
    port.write(CHAR_FORWARD, function(err) {
        if (err) {
            return `Error moving zumo forwards: ${err.message}`;
        } else {
            return null;
        }
    });
};

module.exports.moveBackward = function() {
    port.write(CHAR_BACKWARD, function(err) {
        if (err) {
            return `Error moving zumo backwards: ${err.message}`;
        } else {
            return null;
        }
    });
};

module.exports.moveLeft = function () {
    port.write(CHAR_LEFT, function (err) {
        if (err) {
            return `Error turning zumo to the left: ${err.message}`;
        } else {
            return null;
        }
    });
};

module.exports.moveRight = function() {
    port.write(CHAR_RIGHT, function(err) {
        if (err) {
            return `Error turning zumo to the right: ${err.message}`;
        } else {
            return null;
        }
    });
};

module.exports.stopMovement = function() {
    port.write(CHAR_STOP, function(err) {
        if (err) {
            return `Error stopping the zumo: ${err.message}`;
        } else {
            return null;
        }
    });
};