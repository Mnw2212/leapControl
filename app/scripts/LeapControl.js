const leapjs = require('leapjs');
const robotjs = require('robotjs');

robotjs.setMouseDelay(0);
// map leap to the screen

module.exports = {

  onSwipe: function(gesture){
    var isHorizontal = Math.abs(gesture.direction[0]) > Math.abs(gesture.direction[1]);
    //Classify as right-left
    if(isHorizontal){
      if(gesture.direction[0] > 0){
          swipeDirection = "right";
      } else {
          swipeDirection = "left";
      }
    }
    if(swipeDirection === "right"){
      robotjs.keyTap('right');
    }
    else if (swipeDirection === 'left') {
      robotjs.keyTap('left');
    }
    return 0;
  },

  onTap : function(gesture) {
    // const position = gesture.position;
    // const xpos = position[0];
    // const ypos = position[1];
    robotjs.mouseClick();
    return 0;
  },

  cursorMove: function (frame) {
    var finger = frame.hands[0].fingers[0];

    var mouse = robot.getMousePos();
    robotjs.moveMouseSmooth(mouse.x + xPosLeap, mouse.y + yPosLeap);
    return 0;
  }
};
