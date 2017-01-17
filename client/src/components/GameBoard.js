import React from 'react';

import 'styles/gameBoard.scss';
//var tankData=[];
let tankx=50;
let tanky=50;

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = { boardInfo: undefined, gameInfo: undefined };
  }

  componentWillMount() {
    // This is kinda of hacky, plase don't rely on attach listener in this way in prod
    this.props.socket.on('rule', boardInfo => {
      this.setState({boardInfo});
    });

    setInterval(() => {
      this.props.socket.emit('emitBullet', {posX: 100, posY: 100, tankID: 1});
    }, 5000);

    this.props.socket.on('update', gameInfo => {
      this.setState({gameInfo});
    });
  }

  render() {
    const { boardInfo, gameInfo } = this.state;

    return (boardInfo && gameInfo) ? (
        <svg
            className='game-board'
            width="500"
            height="500"
        >
            <rect
              x="50"
              y="50"
              width="50"
              height="50"
              fill="#f80"
              />
            <rect
               x="100"
               y="65"
               width="30"
               height="20"
               transform="rotate(0 75 75)"
               fill="#f80"
             />
           {
             gameInfo.bulletList && gameInfo.bulletList.map((bullet, i) => (
               <rect
                 x={bullet.posX}
                 y={bullet.posY}
                 width="20"
                 height="20"
                 fill="#f80"
                 key={i}
               />
             ))
           }
        </svg>
    ) : (
      <span />
    );
  }


//            <rect
//              x="100"
//              y="300"
//              width="52"
//              height="40"
//            />
//
//          {
//              [
//                  {
//                      "dirAngle": 0,
//                      "posX"    : 50,
//                      "posY"    : 100,
//                      "HP"      : 10,
//                      "tankID"  : 'freadsd'
//                  }
//              ].map((d,i) => (
//
//              ))
//          }



//            <circle
//                cx="110"
//                cy="100"
//                r="20"
//            />
//        </svg>

//  render() {
//    const { boardInfo, gameInfo } = this.state;
//    return (boardInfo && gameInfo) ? (
//      <svg
//        className='game-board'
//        width={boardInfo.board.width}
//        height={boardInfo.board.height}
//      >
//        <circle
//          cx={gameInfo.ball.posX}
//          cy={gameInfo.ball.posY}
//          r= {boardInfo.ball.radius}
//        />
//      </svg>
//    ) : (
//      <span />
//    );
//  }

}
