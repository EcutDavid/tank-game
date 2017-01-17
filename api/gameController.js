const {
  BOARD_WIDTH,
  BOARD_HEIGHT,
  TANK_WIDTH,
  TANK_HEIGHT,
  BULLET_RADIUS,
  TANK_SPEED
} = require('./constants');
const _ = require('lodash');
const Bullet = require('./bullet');
const Tank = require('./tank');
const uuid = require('uuid');

class GameController {
  constructor() {
    this.bulletTable = {};
    this.tanks = [new Tank(true), new Tank(false)];
    this.user1 = { dir: 180, userID: undefined, isMoving: false };
    this.user2 = { dir: 180, userID: undefined, isMoving: false };
  }

  getGameInfo() {
    return {
      tankList: this.tanks,
      bulletList: _.values(this.bulletTable),
      userInfo: {
        user1: {hasPlayer: !!this.user1.userID},
        user2: {hasPlayer: !!this.user2.userID}
      }
    };
  }

  addBullet(bulletInfo) {
    this.bulletTable[uuid.v4()] = new Bullet(bulletInfo);
  }

  checkIsUsersReady() {
    return this.user1.userID && this.user2.userID;
  }

  setUser(id, isUser1) {
    if (isUser1) {
      return this.user1.userID = id;
    }
    this.user2.userID = id;
  }

  removeUser(id) {
    [this.user1, this.user2].forEach(d => {
      if (d.userID === id) {
        d.userID = undefined;
      }
    });
  }

  update() {
    // if (this.checkIsUsersReady()) {
      _.values(this.bulletTable).forEach(d => {
        d.posX += d.speedX / 10;
        d.posY += d.speedY / 10;
      });
    // }

    // delete bullets out of screen
    Object.keys(this.bulletTable).forEach(key => {
      const d = this.bulletTable[key];
      let shouldDelete = false;
      if ((d.posY < -BULLET_RADIUS) || (d.posX < -BULLET_RADIUS)) {
        shouldDelete = true;
      }
      if ((d.posY > (BOARD_HEIGHT + BULLET_RADIUS)) || (d.posY > (BOARD_WIDTH + BULLET_RADIUS))) {
        shouldDelete = true;
      }
      if (shouldDelete) {
        delete this.bulletTable[key];
      }
    });

    this.tanks.forEach(d => {
      if (d.isMoving) {
        d.posY += Math.cos(Math.PI / 180 * d.dir) * TANK_SPEED;
        d.posX += Math.sin(Math.PI / 180 * d.dir) * TANK_SPEED;
      }
    });
  }
}

module.exports = new GameController();
