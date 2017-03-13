var Cylon = require('cylon');

/* Module variables */
var hasChanged = false;
var currLeftSpeed = 0;
var currRightSpeed = 0;

/* Module code */
Cylon.robot({
  name: 'ZumoMotors',

  connections: {
    arduino: { adaptor: 'firmata', port: '/dev/ttyACM0' }
  },

  devices: {
    pwmL: { driver: 'direct-pin', pin: 10 },
    pwmR: { driver: 'direct-pin', pin: 9 },
    dirL: { driver: 'direct-pin', pin: 8 },
    dirR: { driver: 'direct-pin', pin: 7 }
  },

  setLeftSpeed: function(speed) {
    var reverse = 0;

    /* Set reverse variable if speed is a negative */
    if (speed < 0) {
      speed = -speed;
      reverse = 1;
    }

    /* Stop from exceeding max speed */
    if (speed > 400)
      speed = 400;

    /* Set the speed/PWM for right motor */
    this.pwmL.analogWrite(speed * 51 / 80);

    /* Sets the direction pin for forward/backward */
    this.dirL.digitalWrite(reverse);
  },

  setRightSpeed: function(speed) {
    var reverse = 0;

    /* Set reverse variable if speed is a negative */
    if (speed < 0) {
      speed = -speed;
      reverse = 1;
    }

    /* Stop from exceeding max speed */
    if (speed > 400)
      speed = 400;

    /* Set the speed/PWM for right motor */
    this.pwmR.analogWrite(speed * 51 / 80);

    /* Sets the direction pin for forward/backward */
    this.dirR.digitalWrite(reverse);
  },

  work: function(my) {

    /* Every 100ms check if speeds have changed */
    setInterval(function() {
      console.log("Has Changed: " + hasChanged);
      /* If speeds have changed */
      if (hasChanged == true) {
        my.setLeftSpeed(currLeftSpeed);
        my.setRightSpeed(currRightSpeed);

        hasChanged = false;
        console.log("Set speeds: " + currLeftSpeed + "," + currRightSpeed);
      }
    }, 100);
  }
}).start();

/* Module exports */
module.exports.setLeftSpeed = function(speed) {
  currLeftSpeed = speed;
  hasChanged = true;
};

module.exports.setLeftSpeed = function(speed) {
  currRightSpeed = speed;
  hasChanged = true;
};

module.exports.setSpeeds = function(leftSpeed, rightSpeed) {
  currLeftSpeed = leftSpeed;
  currRightSpeed = rightSpeed;
  hasChanged = true;
};
