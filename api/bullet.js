const {
  BOARD_WIDTH,
  BOARD_HEIGHT
} = require('./constants');

class Ball {
  constructor(bulletInfo) {
    this.reset(bulletInfo);
  }

  reset(bulletInfo) {
    this.posX = bulletInfo ? bulletInfo.posX : BOARD_WIDTH / 2;
    this.posY = bulletInfo ? bulletInfo.posY : BOARD_HEIGHT / 2;
    this.speedX = (4 + Math.random() * 4) * (Math.random() > 0.5 ? 1 : -1);
    this.speedY = (4 + Math.random() * 4) * (Math.random() > 0.5 ? 1 : -1);
  }
}

module.exports = Ball;
