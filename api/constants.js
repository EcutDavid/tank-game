const BOARD_WIDTH = 400;
const BOARD_HEIGHT = 400;
const TANK_WIDTH = 10;
const TANK_HEIGHT = 60;
const PADDLE_MARGIN_X = 10;
const BULLET_RADIUS = 10;
const TANK_SPEED = 11;

const CLIENT_SIDE_DEFAULT = {
  board: {
    width: BOARD_WIDTH,
    height: BOARD_HEIGHT
  },
  paddle: {
    width: TANK_WIDTH,
    height: TANK_HEIGHT
  },
  ball: {
    radius: BULLET_RADIUS
  }
};

module.exports = {
  BOARD_WIDTH,
  BOARD_HEIGHT,
  TANK_WIDTH,
  TANK_HEIGHT,
  PADDLE_MARGIN_X,
  BULLET_RADIUS,
  CLIENT_SIDE_DEFAULT,
  TANK_SPEED
};
