var Cylon = require('cylon');

Cylon.robot({
  connections: {
    leapmotion: {adapter: 'leapmotion'}
  },

  devices: {
    leapmotion: {driver: 'leapmotion'}
  },

  work: function(my) {

    my.leapmotion.on('frame', function(frame) {
      //console.log(frame);
    });

    my.leapmotion.on('hand', function(hand) {
      console.log(hand);
    });

    my.leapmotion.on('gesture', function(gest) {
      //console.log(gest);
    });
  }
}).start();
