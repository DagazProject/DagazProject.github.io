(function() {

var DELAY_INTERVAL = 100;
var stop = false;

var CMD_NAMES   = {
    "ArrowUp":    { player: 0, dx:  0, dy: -1 },
    "ArrowRight": { player: 0, dx:  1, dy:  0 },
    "ArrowDown":  { player: 0, dx:  0, dy:  1 },
    "ArrowLeft":  { player: 0, dx: -1, dy:  0 },
    "Up":         { player: 0, dx:  0, dy: -1 },
    "Right":      { player: 0, dx:  1, dy:  0 },
    "Down":       { player: 0, dx:  0, dy:  1 },
    "Left":       { player: 0, dx: -1, dy:  0 },
    "a":          { player: 1, dx: -1, dy:  0 },
    "w":          { player: 1, dx:  0, dy: -1 },
    "s":          { player: 1, dx:  0, dy:  1 },
    "d":          { player: 1, dx:  1, dy:  0 }
};

function Controller() {}

Controller.prototype.run = function() {
  var model = MySnake.model;
  var view  = MySnake.view;
  if (view.isReady()) {
      model.tick(this);
      view.drawAll();
  }
  if (!stop) {
      _.delay(function() {
         MySnake.controller.run();
      }, DELAY_INTERVAL);
  }
}

Controller.prototype.die = function(player) {
  alert("You lose!");	
  stop = true;
}

window.onkeyup = function(event) {
  var model = MySnake.model;
  var cmd = CMD_NAMES[event.key];
  if (_.isUndefined(event.key)) {
      cmd = CMD_NAMES[event.keyIdentifier];
  }
  if (!_.isUndefined(cmd)) {
      model.send(cmd.player, cmd.dx, cmd.dy);
  }
}

MySnake.controller = new Controller();
MySnake.controller.run();

})();
