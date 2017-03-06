var Cylon = require('cylon');

Cylon.robot({
  connections: {
    leapmotion: { adapter: 'leapmotion' }
  },

  devices: {
    leapmotion: { driver: 'leapmotion' }
  },

  work: function (my) {

    my.leapmotion.on('hand', function (hand) {

      var fingersExtended = 0;

      for (var i = 0; i < 5; i++) {

        process.stdout.write(hand.fingers[i].extended + ', ');

        if (hand.fingers[i].extended == true)
          fingersExtended++;
      }

      process.stdout.write(fingersExtended + '\n');
    });

  }
}).start();
