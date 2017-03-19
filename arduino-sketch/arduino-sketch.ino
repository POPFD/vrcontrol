/**
 * @file arduino-sketch.ino
 * @author Jack Allister - b3042098
 * @date 14 March 2017
 * @brief Arduino motor controller for ZumoMotors
 *
 * Waits for serial commands to set the motors to go
 * in a certain direction.
 */

#include <ZumoMotors.h>

/* Module Constants */
#define CHAR_FORWARD 'W'
#define CHAR_BACKWARD 'S'
#define CHAR_LEFT 'A'
#define CHAR_RIGHT 'D'
#define CHAR_STOP 'Q'

#define NO_SPEED 0
#define MAX_SPEED 200
#define TURN_SPEED 185


/* Module Variables */
ZumoMotors motors;

/* Module Code */

/**
 * @brief Runs once at boot of arduino.
 *
 * Responsible for setting up the peripherals,
 * Initialises serial port at set BAUD rate as well as setting motors to 0.
 */
void setup()
{
  /* Initialise serial for receiving comms from Raspberry Pi */
  Serial.begin(9600);

  motors.setSpeeds(NO_SPEED, NO_SPEED);
}


/**
 * @brief System loop that is ran continuously.
 *
 * Loop keeps parsing serial, until one of the specific commands are sent
 * via hardware serial. Once set, commands move a motors in a set direction.
 */
void loop()
{

  /* Wait till data available on serial */
  if (Serial.available() != 0)
  {
    char recvByte = toupper(Serial.read());

    /* Parse movement command */
    switch (recvByte)
    {
      case CHAR_FORWARD:
      {
        motors.setSpeeds(MAX_SPEED, MAX_SPEED);
        break;
      }

      case CHAR_BACKWARD:
      {
        motors.setSpeeds(-MAX_SPEED, -MAX_SPEED);
        break;
      }

      case CHAR_LEFT:
      {
        motors.setSpeeds(-TURN_SPEED, TURN_SPEED);
        break;
      }

      case CHAR_RIGHT:
      {
        motors.setSpeeds(TURN_SPEED, -TURN_SPEED);
        break;
      }

      case CHAR_STOP:
      {
        motors.setSpeeds(NO_SPEED, NO_SPEED);
        break;
      }
    }

  }
}
