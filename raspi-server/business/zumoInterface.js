var SerialPort = require('serialport')

const COM_PORT = '/dev/ttyACM0';
const BAUD_RATE = 9600;

const CHAR_FORWARD = 'W';
const CHAR_BACKWARD = 'S';
const CHAR_LEFT = 'A';
const CHAR_RIGHT = 'D';
const CHAR_STOP = 'Q';

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
      return console.log('Error moving forward: ', err.message);
    } else {
      return console.log('Moving forward');
    }
  });
};

module.exports.moveBackward = function() {
  port.write(CHAR_BACKWARD, function(err) {
    if (err) {
      return console.log('Error moving backward: ', err.message);
    } else {
      return console.log('Moving backward');
    }
  });
};

module.exports.moveLeft = function() {
  port.write(CHAR_LEFT, function(err) {
    if (err) {
      return console.log('Error turning left: ', err.message);
    } else {
      return console.log('Turning left');
    }
  });
};

module.exports.moveRight = function() {
  port.write(CHAR_RIGHT, function(err) {
    if (err) {
      return console.log('Error turning right: ', err.message);
    } else {
      return console.log('Turning right');
    }
  });
};

module.exports.stopMovement = function() {
  port.write(CHAR_STOP, function(err) {
    if (err) {
      return console.log('Error stopping robot: ', err.message);
    } else {
      return console.log('Stopping robot');
    }
  });
};
