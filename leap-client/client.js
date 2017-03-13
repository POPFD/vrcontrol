var request = require('request');
var Cylon = require('cylon');

/* URL to send post requests to */
var serverURL = 'http://localhost:8001';
var serverRoute = '/api/raspi/motor-movement';

function sendPOST(postData) {
  request.post(
    serverURL + serverRoute,
    { json: postData},
    function(error, response, body) {

      if (!error && response.statusCode == 200) {
        console.log(body);
      }
    }
  )
}

function calcMovement(fingers) {

  var INDEX_FINGER = 1;
  var MIDDLE_FINGER = 2;


  var postData = {direction: 'stop'}

  if ((fingers[INDEX_FINGER].extended == true) &&
    (fingers[MIDDLE_FINGER].extended == true)) {
    /* Signal to go forwards */
    postData.direction = 'forward';
  }
  else if ((fingers[INDEX_FINGER].extended == true) &&
    (fingers[MIDDLE_FINGER].extended == false)) {
    /* Signal to go backwards */
    postData.direction = 'backward';
  }

  if (calcMovement.lastDirection != postData.direction)
  {
    console.log(postData);
    sendPOST(postData);

    calcMovement.lastDirection = postData.direction;
  }
}


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
        //process.stdout.write(hand.fingers[i].extended + ', ');

        if (hand.fingers[i].extended == true)
          fingersExtended++;
      }

      calcMovement(hand.fingers);
      //process.stdout.write(fingersExtended + '\n');
    });

  }
}).start();
