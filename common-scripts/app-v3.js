(function() {

var WAIT_FRAME      = 100;
var GAME_OVER_DELAY = 1000;
var AI_WAIT         = 3000;

var STATE = {
    INIT: 0,
    IDLE: 1,
    WAIT: 2,
    BUZY: 3,
    EXEC: 4,
    DONE: 5,
    STOP: 6
};

var isPressed = false;
var isOnce    = false;
var onceGameOver = true;

function App(canvas) {
  this.canvas = canvas;
  this.state  = STATE.INIT;
  this.design = Dagaz.Model.getDesign();
  this.view   = Dagaz.View.getView();
  this.params = [];
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
  if (Dagaz.Model.progressive) {
      if (Dagaz.Model.silent && (player != 0)) return;
      if (Dagaz.Controller.loseRefresh && (player < 0)) {
          window.location = window.location.toString();
          return;
      }
      if (Dagaz.Model.progressiveUrl !== null) {
          window.location = Dagaz.Model.progressiveUrl;
          return;
      }
      var str = Dagaz.Model.continue(self.design, self.board, window.location.toString(), player);
      if (str !== null) {
          window.location = str;
      }
  }
}

App.prototype.gameOver = function(text, player) {
  Dagaz.Controller.Done(this.board);
  this.view.markPositions(Dagaz.View.markType.KO, []);
  if (onceGameOver) {
      _.delay(gameOver, GAME_OVER_DELAY, text, this, player);
      onceGameOver = false;
  }
  if (this.board && Dagaz.Model.showLose) {
      var captured = [];
      _.each(this.design.allPositions(), function(pos) {
         var piece = this.board.getPiece(pos);
         if (piece !== null) {
             if ((player == 0) || 
                 ((player < 0) && (piece.player == -player)) ||
                 ((player > 0) && (piece.player != player))) {
                 captured.push(pos);
             }
         }
      }, this);
      this.view.markPositions(Dagaz.View.markType.ATTACKING, captured);
  }
}

Dagaz.Controller.createApp = function(canvas) {
  if (_.isUndefined(Dagaz.Controller.app)) {
      Dagaz.Controller.app = new App(canvas);
  }
  return Dagaz.Controller.app;
}

var sendStat = function(goal, player) {
  if (player != 1) {
      goal = -goal;
  }
}

App.prototype.done = function() {
  if (this.state != STATE.DONE) {
      this.state = STATE.STOP;
  } else {
      if (this.doneMessage) {
          this.gameOver(this.doneMessage, this.winPlayer);
      }
  }
}

App.prototype.getTargets = function() {
  if (_.isUndefined(this.list)) return [];
      else return _.union(this.list.getStarts(), this.list.getStops());
}

App.prototype.clearPositions = function() {
  delete this.starts;
  delete this.stops;
  delete this.targets;
  delete this.drops;
  this.view.clearDrops();
}

App.prototype.setPosition = function(pos) {
  this.move = this.list.setPosition(pos);
  this.view.markPositions(Dagaz.View.markType.TARGET, this.list.getStops());
  this.view.markPositions(Dagaz.View.markType.CURRENT, this.list.getCurrent());
  this.canvas.style.cursor = "default";
  this.state = STATE.EXEC;
}

App.prototype.mouseLocate = function(view, positions) {
  if (positions.length != 1) return;
  var pos = positions[0];
  if ((_.isUndefined(this.currPos)) || (this.currPos != pos)) {
      if ((this.state == STATE.IDLE) && !_.isUndefined(this.list)) {
          if (_.intersection(this.getTargets(), positions).length > 0) {
              Canvas.style.cursor = "pointer";
          } else {
              Canvas.style.cursor = "default";
          }
      }
      if (isPressed && !_.isUndefined(this.list)) {
          this.list.markPosition(pos);
          this.view.markPositions(Dagaz.View.markType.TARGET, this.list.getStops());
          this.view.markPositions(Dagaz.View.markType.CURRENT, this.list.getCurrent());
      }
  }
  this.currPos = pos;
}

App.prototype.mouseUp = function(view, positions) {
  isPressed = false;
}

App.prototype.mouseDown = function(view, pos) {
  if ((this.state == STATE.IDLE) && !_.isUndefined(this.list)) {
      var positions = _.intersection(this.getTargets(), pos);
      if (positions.length > 0) {
          this.setPosition(positions[0]);
      }
  }
  isPressed = true;
}

App.prototype.mouseWheel = function(view, delta) {}

App.prototype.boardApply = function(move) {
  this.board = this.board.apply(move);
  if (!_.isUndefined(this.view.sync)) {
      this.view.sync(this.board);
  }
  if (!_.isUndefined(Dagaz.Controller.addState)) {
      Dagaz.Controller.addState(move, this.board);
  }
}

App.prototype.getAI = function() {
  if (_.isUndefined(this.ai)) {
      this.ai = null;
      if (this.design.isPuzzle()) {
          this.ai = Dagaz.AI.findBot("solver",  this.params, this.ai);
      } else {
          this.ai = Dagaz.AI.findBot("random",  this.params, this.ai);
          this.ai = Dagaz.AI.findBot("common",  this.params, this.ai);
          this.ai = Dagaz.AI.findBot("smart",   this.params, this.ai);
          this.ai = Dagaz.AI.findBot("opening", this.params, this.ai);
      }
  }
  return this.ai;
}

App.prototype.getBoard = function() {
  if (_.isUndefined(this.board)) {
      this.board = Dagaz.Model.getInitBoard();
      if (!_.isUndefined(Dagaz.Controller.addState)) {
          Dagaz.Controller.addState(Dagaz.Model.createMove(), this.board);
      }
  }
  return this.board;
}

App.prototype.getContext = function(player, forced) {
  if (_.isUndefined(forced) && Dagaz.AI.isFriend(1, player) && !this.design.isPuzzle()) return null;
  if (_.isUndefined(this.context)) {
      this.context = [];
  }
  if (_.isUndefined(this.context[player])) {
      this.context[player] = Dagaz.AI.createContext(this.design);
  }
  return this.context[player];
}

App.prototype.isReady = function() {
  return this.state == STATE.IDLE;
}

App.prototype.setBoard = function(board, isForced) {
  if (this.isReady() || isForced) {
      this.board = board;
      this.view.reInit(board);
      delete this.list;
      this.clearPositions();
      this.view.markPositions(Dagaz.View.markType.TARGET, []);
  }
}

App.prototype.setMove = function(move) {
  if (this.state == STATE.IDLE) {
      delete this.list;
      this.move = move;
      this.state = STATE.EXEC;
  }
}

App.prototype.exec = function() {
  this.view.configure();
  if (!_.isUndefined(Dagaz.Model.load) && (Dagaz.Controller.persistense == "session")) {
      var board = Dagaz.Model.getInitBoard();
      Dagaz.Model.load(board);
      delete Dagaz.Model.load;
  }
  this.view.draw(this.canvas);
  if (this.state == STATE.STOP) {
      this.state = STATE.IDLE;
      return;
  }
  if (this.state == STATE.IDLE) {
      var ctx = this.getContext(this.getBoard().player);
      var ai  = this.getAI();
      if ((ctx !== null) && (ai !== null)) {
          ai.setContext(ctx, this.board);
          this.state = STATE.BUZY;
          Canvas.style.cursor = "wait";
          this.timestamp = Date.now();
          isOnce = true;
      } else {
         if (!_.isUndefined(Dagaz.AI.advisorStamp) && !_.isUndefined(Dagaz.Controller.pushState) && (ai !== null) && (Dagaz.Model.advisorWait !== null)) {
             var timestamp = Date.now();
             if (Dagaz.AI.advisorStamp === null) {
                 Dagaz.AI.advisorStamp = timestamp + Dagaz.Model.advisorWait;
             }
             if (Dagaz.Controller.noRedo() && (Dagaz.AI.advisorStamp < timestamp)) {
                 var ctx = this.getContext(this.board.player, true);
                 if (ctx !== null) {
                     ai.setContext(ctx, this.board);
                     var result = ai.getMove(ctx);
                     if (result && result.done) {
                         delete Dagaz.AI.advisorStamp;
                         var board = this.board.apply(result.move);
                         Dagaz.Controller.pushState(result.move, board);
                         if (!_.isUndefined(Dagaz.Sounds.hint)) {
                             Dagaz.Controller.play(Dagaz.Sounds.hint);
                         }
                     }
                 }
             }
         }
         if (_.isUndefined(this.list)) {
             Dagaz.AI.advisorStamp = null;
             var player = this.design.playerNames[this.board.player];
             console.log("Player: " + player);
             if (!_.isUndefined(Dagaz.Model.getSetup)) {
                 console.log("Setup: " + Dagaz.Model.getSetup(this.design, this.board));
             }
             this.list = Dagaz.Model.getMoveList(this.board);
             var ko = [];
             if (!_.isUndefined(this.board.ko)) {
                 ko = this.board.ko;
             }
             this.view.markPositions(Dagaz.View.markType.KO, ko);
             if (this.list.isEmpty()) {
                 this.state = STATE.DONE;
                 Canvas.style.cursor = "default";
                 sendStat(-1, this.board.player);
                 if (!_.isUndefined(Dagaz.Controller.play)) {
                     Dagaz.Controller.play(Dagaz.Sounds.lose);
                 }
                 this.gameOver(player + " lose", -this.board.player);
                 return;
             }
         }
      }
  }
  if (this.state == STATE.BUZY) {
      var ctx = this.getContext(this.board.player);
      var player = this.design.playerNames[this.board.player];
      var result = this.getAI().getMove(ctx);
      if (isOnce) {
          console.log("Player: " + player);
          if (!_.isUndefined(Dagaz.Model.getSetup)) {
              console.log("Setup: " + Dagaz.Model.getSetup(this.design, this.board));
          }
          isOnce = false;
      }
      if (result) {
          if (_.isUndefined(result.move)) {
              this.state = STATE.DONE;
              Canvas.style.cursor = "default";
              sendStat(1, this.board.player);
              if (!_.isUndefined(Dagaz.Controller.play)) {
                  Dagaz.Controller.play(Dagaz.Sounds.win);
              }
              this.gameOver(player + " lose", -this.board.player);
              return;
          }
          if (result.done || (Date.now() - this.timestamp >= AI_WAIT)) {
              this.move  = result.move;
              this.state = STATE.EXEC;
          }
      }
  }
  if (this.state == STATE.EXEC) {
      delete Dagaz.AI.advisorStamp;
      this.state = STATE.IDLE;
      if (!this.move.isPass()) {
          this.view.markPositions(Dagaz.View.markType.TARGET, []);
          this.view.markPositions(Dagaz.View.markType.CURRENT, []);
          if (Dagaz.Model.showMoves) {
              console.log(this.move.toString());
          }
          this.move.applyAll(this.view);
          this.boardApply(this.move);
          delete this.list;
          this.state = STATE.WAIT;
          if (!_.isUndefined(Dagaz.Controller.play)) {
              var sound = Dagaz.Sounds.move;
              if (!_.isUndefined(this.move.sound)) {
                  sound = this.move.sound;
              }
              Dagaz.Controller.play(sound, this.board.player);
          }
      }
      if (this.board.parent !== null) {
          var g = this.board.checkGoals(this.design, this.board.parent.player);
          if (g !== null) {
              var player = this.design.playerNames[this.board.parent.player];
              this.state = STATE.DONE;
              Canvas.style.cursor = "default";
              if (g > 0) {
                  if (!_.isUndefined(Dagaz.Controller.play)) {
                      if (this.board.parent.player == 1) {
                         Dagaz.Controller.play(Dagaz.Sounds.win);
                      } else {
                         Dagaz.Controller.play(Dagaz.Sounds.lose);
                      }
                  }
                  this.doneMessage = player + " won";
                  this.winPlayer   = this.board.parent.player;
              } else if (g < 0) {
                  if (!_.isUndefined(Dagaz.Controller.play)) {
                      if (this.board.parent.player != 1) {
                         Dagaz.Controller.play(Dagaz.Sounds.win);
                      } else {
                         Dagaz.Controller.play(Dagaz.Sounds.lose);
                      }
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
              sendStat(g, this.board.parent.player);
          }
      }
  }
}

Dagaz.Model.InitGame();
Dagaz.Controller.createApp(Canvas);

if (!_.isUndefined(Dagaz.Controller.getSessionManager)) {
  Dagaz.Controller.getSessionManager(Dagaz.Controller.app);
}
if (!_.isUndefined(Dagaz.Controller.play)) {
  Dagaz.Controller.play(Dagaz.Sounds.start);
}

App.prototype.run = function() {
  var timestamp = Date.now();
  this.exec();
  var delta = Date.now() - timestamp;
  _.delay(function() {
     Dagaz.Controller.app.run();
  }, (delta > WAIT_FRAME) ? 0 : WAIT_FRAME - delta);
}

Dagaz.View.getView().init(Canvas, Dagaz.Controller.app);
Dagaz.Controller.app.run();

})();
