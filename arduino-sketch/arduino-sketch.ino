#include <ZumoMotors.h>

/* Module Constants */
#define CHAR_FORWARD 'W'
#define CHAR_BACKWARD 'S'
#define CHAR_LEFT 'A'
#define CHAR_RIGHT 'D'
#define CHAR_STOP 'Q'

#define NO_SPEED 0
#define MAX_SPEED 300
#define TURN_SPEED 150


/* Module Variables */
ZumoMotors motors;

/* Module Code */

void setup()
{
  /* Initialise serial for receiving comms from Raspberry Pi */
  Serial.begin(9600);

  motors.setSpeeds(NO_SPEED, NO_SPEED);
}

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
      }
    }

  }
}
