var leapjs = require('leapjs');
var robotjs = require('robotjs');
robotjs.setMouseDelay(0);

function onSwipe(gesture){
  // console.log("swipe worked");
  var isHorizontal = Math.abs(gesture.direction[0]) > Math.abs(gesture.direction[1]);
  //Classify as right-left
  var swipeDirection;
  if(isHorizontal){
    if(gesture.direction[0] > 0){
      console.log('right swipe');
        swipeDirection = "right";
    } else {
        console.log('left swipe');
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
}

function onTap(gesture) {
  console.log("tap worked");
  robotjs.mouseClick();
  return 0;
}


function cursorMove(frame) {
//     var finger = frame.hands[0].fingers[0];
//
//     var mouse = robot.getMousePos();
//     robotjs.moveMouseSmooth(mouse.x + xPosLeap, mouse.y + yPosLeap);
//     return 0;
}


var leapConnect = function(){
  var controller = new leapjs.Controller({enableGestures: true});
  controller.connect();
  controller.setBackground(true);
  return controller;
};


var start = function(controller) {
  // console.log("started");
  if(controller.connected){
  //   console.log("connected");
    controller.on("frame",function(frame){
      console.log("gesture running");
    });
  }
};
  //     console.log(frame);
  //     var gestureList = frame.gestures;
  //     switch (gestureList.type){
  //       case "keyTap":
  //         console.log("Key Tap Gesture");
  //         break;
  //
  //       case "swipe":{
  //         // onSwipe(gesture);
  //         if (frame.hands.length === 1)
  //         {
  //           // Get the hand
  //           hand = frame.hands[0];
  //
  //           // Check if the hand has any fingers
  //           fingers = hand.fingers;
  //
  //           gestureList = frame.gestures;
  //
  //           if (fingers.length >= 4 && gestureList.length > 0)
  //           {
  //               allSwipe = true;
  //
  //               for (var gesture in gestureList){
  //                   if (gesture.type != Gesture.GestureType.TYPESWIPE || gesture.State != Gesture.GestureState.STATESTART)
  //                   {
  //                       allSwipe = false;
  //                       break;
  //                   }
  //               }
  //
  //               if (!allSwipe)
  //                   return;
  //
  //               console.log("recognized");
  //              // do something
  //           }
  //       }
  //         break;
        // }

  // };
  // );

    // controller.on("frame",function(frame){
    //   // console.log("frame running");
    //   cursorMove(frame);
    // });
  // }
// };

var leapDisconnect = function(controller){
  controller.disconnect();
  return 0;
};



var controller = leapConnect();
console.log(controller.connected);
start(controller);
console.log("is start over ?, it shouldnt be");
