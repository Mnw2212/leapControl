var Leap = require('leapjs');
console.log("worked");
// var controller = new Leap.Controller();
// console.log("controller defined");
// controller.setBackground(true);
// controller.connect();
// controller.on()

var controller = Leap.loop({enableGestures: true}, function(frame){
  // console.log(frame);
  // console.log("\n");
  if(frame.valid){
    if(frame.hands[0]){
      console.log(frame.hands[0].fingers);
  }
}
});
