var Cylon = require('cylon');

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

  commands: {
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
    }
  },

  work: function(my) {
    every((1).seconds(), function() {
      /* Need to keep the robot active so empty loop */
    });
  }
}).start();

module.exports = Cylon;
