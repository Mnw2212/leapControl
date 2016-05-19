'use strict';
const leapjs = require('leapjs');
const robotjs = require('robotjs');
robotjs.setMouseDelay(0);

class leapControl {
    constructor() {
        // const pause = false;
    }
    static setPause() {
        this.pause = true;
        console.log(this.pause);
    }

    static unsetPause() {
        this.pause = false;
        console.log(this.pause);
    }

    static onSwipe(gesture) {
        if (!this.pause) {
            var isHorizontal = Math.abs(gesture.direction[0]) > Math.abs(gesture.direction[1]);
            //Classify as right-left
            var swipeDirection;
            if (isHorizontal) {
                if (gesture.direction[0] > 0) {
                    console.log('right swipe');
                    swipeDirection = "right";
                    robotjs.keyTap('right');
                    // this.setPause();
                    // setTimeout(this.unsetPause(), 2000);
                } else {
                    console.log('left swipe');
                    swipeDirection = "left";
                    robotjs.keyTap('left');
                }
                // this.setPause();
                // setTimeout(this.unsetPause(), 2000);
                // if (swipeDirection === "right") {
                //     robotjs.keyTap('right');
                // } else if (swipeDirection === 'left') {
                //     robotjs.keyTap('left');
                // }
            }
            return 0;
        }
    }

    // onTap(gesture) {
    //     // const position = gesture.position;
    //     // const xpos = position[0];
    //     // const ypos = position[1];
    //     robotjs.mouseClick();
    //     return 0;
    // }


    // cursorMove(frame) {
    //     //     var finger = frame.hands[0].fingers[0];
    //     //
    //     //     var mouse = robot.getMousePos();
    //     //     robotjs.moveMouseSmooth(mouse.x + xPosLeap, mouse.y + yPosLeap);
    //     //     return 0;
    // }
}

const leapConnect = function() {
    var controller = new leapjs.Controller({
        enableGestures: true
    });
    controller.connect();
    controller.setBackground(true);
    return controller;
};


const start = function(controller) {
    if (controller.connected) {
        let play = true;
        controller.on("gesture", function(gesture) {
            if (play) {
                switch (gesture.type) {
                    case "onKeyTap":
                        leapControl.onTap(gesture);
                        break;

                    case "swipe":
                        // console.log('inside swipe');
                        play = false;
                        leapControl.onSwipe(gesture);
                        setTimeout(() => {
                            play = true;
                            // console.log('inside timeout');
                        }, 300);
                        break;
                }
            }
        });

        // controller.on("frame", function(frame) {
        //     // leapControl.cursorMove(frame);
        // });
    }
};

const leapDisconnect = function(controller) {
    controller.disconnect();
};

let controller = leapConnect();
start(controller);
