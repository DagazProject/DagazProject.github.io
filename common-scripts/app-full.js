(function() {

var STATE = {
    INIT: 0,
    IDLE: 1,
    EXEC: 2,
    WAIT: 3,
    STOP: 4
};

Dagaz.Controller.WAIT_FRAME = 100;

var mouseX          = 0;
var mouseY          = 0;
var mousePressed    = false;
var onceGameOver    = true;
var isAuto          = false;

function App() {
  this.state  = STATE.INIT;
  this.states = [];
}

Dagaz.Controller.newGame = function() {
  if (!confirm("Restart Game?")) return;
  if (!_.isUndefined(Dagaz.Controller.clearGame)) {
      Dagaz.Controller.clearGame();
  }
  var str = window.location.toString();
  var result = str.match(/^([^?]+(\?t=\d+&r=[^&]+)?)/);
  if (result) {
      str = result[1];
  }
  window.location = str;
}

var gameOver = function(text, self, player) {
  if (!Dagaz.Model.silent || (player != 0)) {
      if (!_.isUndefined(Dagaz.Controller.clearGame)) {
          Dagaz.Controller.clearGame();
      }
      alert(text);
  }
}

App.prototype.gameOver = function(text, player) {
  Dagaz.Controller.Done(this.board);
  if (onceGameOver) {
      _.delay(gameOver, 1000, text, this, player);
      onceGameOver = false;
  }
}

App.prototype.findMove = function(move) {
  if (_.isUndefined(this.board) || _.isUndefined(this.board.moves)) return move;
  for (var i =0; i < this.board.moves.length; i++) {
       if (this.board.moves[i].toString() == move.toString()) return this.board.moves[i];
  }
  return move;
}

var moveCallback = function(app, code, event, x, y, pos) {
  var p = Dagaz.Model.stringToPos(pos.name, app.design);
  if (!onceGameOver) return;
  if (!_.isUndefined(app.start) && (_.indexOf(app.start, p) >= 0)) {
      canvas.style.cursor = "pointer";
  } else {
      canvas.style.cursor = "default";
  }
}

var mouseMove = function(event) {
  var app = Dagaz.Controller.app;
  var canvasRect = canvas.getBoundingClientRect();
  mouseX = event.clientX - canvasRect.left;
  mouseY = event.clientY - canvasRect.top;
  if (!_.isUndefined(app.view)) {
      app.view.send(Dagaz.Controller.Event.MOUSE_MOVE, event, mouseX, mouseY, moveCallback);
  }
}

var mouseUp = function(event) {}

var mouseCallback = function(app, code, event, x, y, pos) {
  var p = Dagaz.Model.stringToPos(pos.name, app.design);
  if (_.isUndefined(app.list)) return true;
  app.move = app.findMove(app.list.setPosition(p));
  var targets = _.map(app.list.getTargets(), function(p) {
      return Dagaz.Model.posToString(p, app.design);
  });
  if (!_.isUndefined(app.view)) {
      app.view.send(Dagaz.Controller.Event.MARK_TARGETS, targets);
  }
  if (!app.move.isPass()) {
       app.state = STATE.EXEC;
  }
  return true;
}

var mouseDown = function(event) { 
  var app = Dagaz.Controller.app;
  if (!app.isReady()) return;
  if (!_.isUndefined(app.view)) {
      app.view.send(Dagaz.Controller.Event.MOUSE_LKM_DOWN, event, mouseX, mouseY, mouseCallback);
  }
}

App.prototype.isReady = function() {
  return this.state == STATE.IDLE;
}

App.prototype.getAI = function() {
  if (_.isUndefined(this.ai)) {
      this.ai = null;
      if (this.design.isPuzzle()) {
          this.ai = Dagaz.AI.findBot("solver",  [], this.ai);
      } else {
          this.ai = Dagaz.AI.findBot("random",  [], this.ai);
          this.ai = Dagaz.AI.findBot("common",  [], this.ai);
          this.ai = Dagaz.AI.findBot("smart",   [], this.ai);
          this.ai = Dagaz.AI.findBot("opening", [], this.ai);
      }
  }
  return this.ai;
}

App.prototype.getContext = function(player) {
  if (!isAuto && Dagaz.AI.isFriend(1, player)) return null;
  if (_.isUndefined(this.context)) {
      this.context = [];
  }
  if (_.isUndefined(this.context[player])) {
      this.context[player] = Dagaz.AI.createContext(this.design);
  }
  return this.context[player];
}

var init = function(app) {
  app.design = Dagaz.Model.getDesign();
  Dagaz.Model.BuildDesign(app.design);
  app.view = Dagaz.View.getView(app.design);
  app.view.setController(Dagaz.Controller.app);
  Dagaz.View.configure(app.view);
  app.board = Dagaz.Model.getInitBoard();  
  Dagaz.Model.setup(app.board);
  app.view.setup(app.board);
  app.state = STATE.IDLE;
  return false;
}

var idle = function(app) {
  var ai = app.getAI();
  if (ai !== null) {
      var ctx = app.getContext(app.board.player);
      if (ctx !== null) {
          if (!_.isUndefined(Dagaz.Model.getSetup)) {
              console.log("Setup: " + Dagaz.Model.getSetup(app.design, app.board));
          }
          ai.setContext(ctx, app.board);
          canvas.style.cursor = "wait";
          var result = ai.getMove(ctx);
          canvas.style.cursor = "default";
          if (result && result.done) {
              var player = app.design.playerNames[app.board.player];
              console.log("Player: " + player);
              app.move = result.move;
              app.state = STATE.EXEC;
              return;
          }
      }
  }
  if (_.isUndefined(app.list)) {
      app.list  = Dagaz.Model.getMoveList(app.board);
      app.start = app.list.getStarts();
      if (!_.isUndefined(Dagaz.Model.getSetup)) {
          console.log("Setup: " + Dagaz.Model.getSetup(app.design, app.board));
      }
      var player = app.design.playerNames[app.board.player];
      console.log("Player: " + player);
  }
  return false;
}

App.prototype.done = function() {
  var app = Dagaz.Controller.app;
  this.board = this.board.apply(this.move);
  if (Dagaz.Controller.turnChanged && !_.isUndefined(app.view)) {
      this.view.send(Dagaz.Controller.Event.TURN_CHANGED, this.board.turn);
  }
  delete this.move;
  var g = this.board.checkGoals(this.design, this.board.parent.player);
  if (g !== null) {
      var player = this.design.playerNames[this.board.parent.player];
      this.state = STATE.DONE;
      canvas.style.cursor  = "default";
      if (g > 0) {
          if (!_.isUndefined(Dagaz.Controller.play)) {
              Dagaz.Controller.play(Dagaz.Sounds.win);
          }
          this.doneMessage = player + " won";
          this.winPlayer   = this.board.parent.player;
      } else if (g < 0) {
          if (!_.isUndefined(Dagaz.Controller.play)) {
              Dagaz.Controller.play(Dagaz.Sounds.lose);
          }
          this.doneMessage = player + " lose";
          this.winPlayer   = -this.board.parent.player;
      } else {
          if (!_.isUndefined(Dagaz.Controller.play)) {
              Dagaz.Controller.play(Dagaz.Sounds.draw);
          }
          this.doneMessage = "Draw";
          this.winPlayer   = 0;
      }
      this.gameOver(this.doneMessage, this.winPlayer);
  } else {
      this.state = STATE.IDLE;
  }
}

var exec = function(app) {
  if (!_.isUndefined(app.move)) {
      console.log("Move: " + app.move.toString());
      if (!_.isUndefined(Dagaz.Controller.play)) {
          var sound = Dagaz.Sounds.move;
          if (!_.isUndefined(app.move.sound)) {
              sound = app.move.sound;
          }
          Dagaz.Controller.play(sound, app.board.player);
      }
      app.view.apply(app.move);
      delete app.list;
      app.state = STATE.WAIT;
  }
  return false;
}

var wait = function(app) {
  return false;
}

var stop = function(app) {
  return true;
}

Dagaz.Controller.app = new App();
Dagaz.Controller.app.states[STATE.INIT] = init;
Dagaz.Controller.app.states[STATE.IDLE] = idle;
Dagaz.Controller.app.states[STATE.EXEC] = exec;
Dagaz.Controller.app.states[STATE.WAIT] = wait;
Dagaz.Controller.app.states[STATE.STOP] = stop;

canvas.onmousemove = mouseMove;
canvas.onmouseup   = mouseUp;
canvas.onmousedown = mouseDown;

App.prototype.exec = function() {
  if (!_.isUndefined(this.view) && this.view.isLoaded()) {
      this.view.draw();
  }
  if (_.isUndefined(this.states[this.state])) return false;
  return this.states[this.state](this);
}

App.prototype.run = function() {
  _.delay(function() {
     if (!Dagaz.Controller.app.exec()) {
         Dagaz.Controller.app.run();
     }
  }, Dagaz.Controller.WAIT_FRAME);
}

Dagaz.Controller.app.run();

})();
