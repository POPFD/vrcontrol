/**
 * @file client.js
 * @author Jack Allister - b3042098
 * @date 25 Feb 2017
 * @brief Node client for parsing hand gestures from LEAP motion.
 *
 * Sends a HTTP post to the Raspberry PI server, the commands are either
 * move forward, backwards or stop.
 */
var request = require('request');
var Cylon = require('cylon');

/* URL to send post requests to */
var serverURL = 'http://192.168.43.244:8001';
var serverRoute = '/api/move-zumo';

/**
 * @brief Function for sending a POST request with our JSON data
 * to the Raspberry PI server.
 *
 * If there is no error and correct status code returned data
 * is printed to console.
 *
 */
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

/**
 * @brief Responsible calculating what gesture/movement is shown
 * from the LEAP motion device.
 *
 * @param fingers - Array of information for each finger from the LEAP.
 */
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

/**
 * @brief Robot interface for LEAP motion using cylon.
 * This defines a new robot, initialises it then runs the code.
 *
 */
Cylon.robot({
  connections: {
    leapmotion: { adapter: 'leapmotion' }
  },

  devices: {
    leapmotion: { driver: 'leapmotion' }
  },

  /**
   * @brief Function declaration for cylon robot 'work' code.
   *
   * @param my - Instance of the robot class
   */
  work: function (my) {

    /**
     * @brief Callback for when a hand is detected via the LEAP motion.
     *
     * @param hand - Object that hold information relating found hand.
     */
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
