(function() {

var STATE = {
    INIT: 0,
    IDLE: 1,
    WAIT: 2,
    BUZY: 3,
    EXEC: 4,
    DONE: 5,
    STOP: 6
};

var isDrag = false;
var passForced = 0;
var once = false;
var onceGameOver = true;

function App(canvas, params) {
  this.design = Dagaz.Model.getDesign();
  this.canvas = canvas;
  this.view   = Dagaz.View.getView();
  this.state  = STATE.INIT;
  if (params) {
      this.params = params;
  } else {
      this.params = [];
  }
  if (_.isUndefined(this.params.AI_WAIT)) {
      this.params.AI_WAIT = 3000;
  }
  if (_.isUndefined(this.params.WAIT_FRAME)) {
      this.params.WAIT_FRAME = 100;
  }
  if (_.isUndefined(this.params.SHOW_TARGETS)) {
      this.params.SHOW_TARGETS = true;
  }
}

Dagaz.Controller.createApp = function(canvas) {
  if (_.isUndefined(Dagaz.Controller.app)) {
      Dagaz.Controller.app = new App(canvas);
  }
  return Dagaz.Controller.app;
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
      var str = window.location.toString();
      if (Dagaz.Model.progressiveUrl !== null) {
          str = Dagaz.Model.progressiveUrl;
      }
      str = Dagaz.Model.continue(self.design, self.board, str, player);
      if (str !== null) {
          window.location = str;
      }
  }
}

App.prototype.gameOver = function(text, result) {
  Dagaz.Controller.Done(this.board);
  this.view.markPositions(Dagaz.View.markType.KO, []);
  if (onceGameOver) {
      _.delay(gameOver, 1000, text, this, result);
      onceGameOver = false;
  }
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
          this.gameOver(this.doneMessage, this.doneResult);
      }
  }
}

App.prototype.clearPositions = function() {
  delete this.starts;
  delete this.stops;
  delete this.targets;
  delete this.drops;
  this.view.clearDrops();
}

App.prototype.setPosition = function(pos) {
  this.list.setPosition(pos);
  var moves = this.list.getMoves();
  if (this.list.canDone()  && (moves.length > 0)) {
      this.move = moves[0];
      this.state = STATE.EXEC;
      Canvas.style.cursor = "default";
      return;
  }
  if (this.list.getLevel() > 0) {
      if (this.params.SHOW_TARGETS) {
          var targets = this.list.getPositions();
          this.view.markPositions(Dagaz.View.markType.TARGET, targets);
      }
  }
  if (this.params.SHOW_ATTACKING) {
      var attacking = this.list.getAttacking();
      this.view.markPositions(Dagaz.View.markType.ATTACKING, attacking);
  }
}

App.prototype.mouseLocate = function(view, pos) {
  if (this.currPos != pos) {
      if ((this.state == STATE.IDLE) && !_.isUndefined(this.list) && !isDrag) {
          if (_.isUndefined(this.positions)) {
              this.positions = this.list.getPositions();
          }
          if (_.indexOf(this.positions, pos) >= 0) {
              Canvas.style.cursor = "pointer";
          } else {
              Canvas.style.cursor = "default";
          }
      }
      this.view.markPositions(Dagaz.View.markType.GOAL, []);
      if (!isDrag && !_.isUndefined(this.board)) {
          var piece = this.board.getPiece(pos);
          if (piece !== null) {
              var types = Dagaz.Model.getPieceTypes(piece, this.board);
              if (Dagaz.Model.showGoals) {
                  var positions = this.design.getGoalPositions(this.board.player, types);
                  this.view.markPositions(Dagaz.View.markType.GOAL, positions);
              }
          }
      }
  }
  this.currPos = pos;
}

App.prototype.boardApply = function(move) {
  this.board = this.board.apply(move);
  if (!_.isUndefined(this.view.sync)) {
      this.view.sync(this.board);
  }
  if (!_.isUndefined(Dagaz.Controller.addState)) {
      Dagaz.Controller.addState(move, this.board);
  }
}

App.prototype.mouseDown = function(view, pos) {
  if ((this.state == STATE.IDLE) && !_.isUndefined(this.list)) {
      if (this.list && this.positions && (_.indexOf(this.positions, pos) >= 0)) {
          Canvas.style.cursor = "move";
          this.setPosition(pos);
          isDrag = true;
      }
  }
  this.view.markPositions(Dagaz.View.markType.GOAL, []);
}

App.prototype.mouseUp = function(view, pos) {
  if ((this.state == STATE.IDLE) && !_.isUndefined(this.list)) {
      this.setPosition(pos);
//    this.view.markPositions(Dagaz.View.markType.TARGET, []);
      Canvas.style.cursor = "default";
  }
  isDrag = false;
}

App.prototype.mouseWheel = function(view, delta) {}

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
      Dagaz.Model.Done(this.design, this.board);
  }
  return this.board;
}

App.prototype.getContext = function(player) {
  if ((player == 1) && !this.design.isPuzzle()) return null;
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
         once = true;
      } else {
         if (_.isUndefined(this.list)) {
             var player = this.design.playerNames[this.board.player];
             console.log("Player: " + player);
             if (!_.isUndefined(Dagaz.Model.getSetup)) {
                 console.log("Setup: " + Dagaz.Model.getSetup(this.design, this.board));
             }
             this.list  = Dagaz.Model.getMoveList(this.board);
             var ko = [];
             if (!_.isUndefined(this.board.ko)) {
                 ko = this.board.ko;
             }
             this.view.markPositions(Dagaz.View.markType.KO, ko);
             if (!_.isUndefined(this.move)) {
                 this.list.setLastMove(this.move);
             }
             if ((this.list.getMoves().length == 1) && this.list.getMoves()[0].isPass()) {
                  if (passForced >= this.design.getPlayersCount()) {
                      this.state = STATE.DONE;
                      Canvas.style.cursor = "default";
                      sendStat(0, this.board.player);
                      if (!_.isUndefined(Dagaz.Controller.play)) {
                          Dagaz.Controller.play(Dagaz.Sounds.draw);
                      }
                      this.gameOver("Draw", 0);
                  } else {
                      this.boardApply(this.list.getMoves()[0]);
                      this.state = STATE.IDLE;
                      delete this.list;
                      passForced++;
                  }
                  return;
             }
             passForced = 0;
             if (this.list.getMoves().length == 0) {
                 this.state = STATE.DONE;
                 Canvas.style.cursor = "default";
                 sendStat(-1, this.board.player);
                 if (!_.isUndefined(Dagaz.Controller.play)) {
                     Dagaz.Controller.play(Dagaz.Sounds.lose);
                 }
                 this.gameOver(player + " lose", -1);
                 return;
             }
         }
      }
  }
  if (this.state == STATE.BUZY) {
      var ctx = this.getContext(this.board.player);
      var player = this.design.playerNames[this.board.player];
      var result = this.getAI().getMove(ctx);
      if (once) {
          console.log("Player: " + player);
          if (!_.isUndefined(Dagaz.Model.getSetup)) {
              console.log("Setup: " + Dagaz.Model.getSetup(this.design, this.board));
          }
          once = false;
      }
      if (result) {
          if (_.isUndefined(result.move)) {
              this.state = STATE.DONE;
              Canvas.style.cursor = "default";
              sendStat(1, this.board.player);
              if (!_.isUndefined(Dagaz.Controller.play)) {
                  Dagaz.Controller.play(Dagaz.Sounds.win);
              }
              this.gameOver(player + " lose", -1);
              return;
          }
          if (result.done || (Date.now() - this.timestamp >= this.params.AI_WAIT)) {
              if (result.move.isPass()) {
                  if (passForced >= this.design.getPlayersCount()) {
                      this.state = STATE.DONE;
                      Canvas.style.cursor = "default";
                      sendStat(0, this.board.player);
                      if (!_.isUndefined(Dagaz.Controller.play)) {
                          Dagaz.Controller.play(Dagaz.Sounds.draw);
                      }
                      this.gameOver("Draw", 0);
                  } else {
                      this.boardApply(result.move);
                      this.state = STATE.IDLE;
                      delete this.list;
                      passForced++;
                      return;
                  }
              } else {
                  passForced = 0;
              }
              this.move  = result.move;
              this.state = STATE.EXEC;
          }
      }
  }
  if (this.state == STATE.EXEC) {
      this.view.markPositions(Dagaz.View.markType.TARGET, []);
      if (Dagaz.View.CLEAR_KO) {
          this.view.markPositions(Dagaz.View.markType.KO, []);
      }
      if (!_.isUndefined(this.list)) {
          this.list.done();
          this.view.markPositions(Dagaz.View.markType.ATTACKING, []);
          delete this.list;
      }
      if (Dagaz.Model.showMoves) {
          console.log(this.move.toString());
      }
      this.move.applyAll(this.view);
      this.boardApply(this.move);
      if (!_.isUndefined(this.positions)) {
          delete this.positions;
      }
      var g = this.board.checkGoals(this.design, this.board.parent.player);
      if (g !== null) {
          var player = this.design.playerNames[this.board.parent.player];
          this.state = STATE.DONE;
          Canvas.style.cursor = "default";
          if (g > 0) {
              if (!_.isUndefined(Dagaz.Controller.play)) {
                  if (this.design.isPuzzle() || (this.board.parent.player == 1)) {
                      Dagaz.Controller.play(Dagaz.Sounds.win);
                  } else {
                      Dagaz.Controller.play(Dagaz.Sounds.lose);
                  }
              }
              this.doneMessage = player + " won";
              this.doneResult  = 1;
              if (!_.isUndefined(Dagaz.Controller.play)) {
                  Dagaz.Controller.play(Dagaz.Sounds.win);
              }
          } else if (g < 0) {
              if (!_.isUndefined(Dagaz.Controller.play)) {
                  if (this.board.parent.player != 1) {
                     Dagaz.Controller.play(Dagaz.Sounds.win);
                  } else {
                     Dagaz.Controller.play(Dagaz.Sounds.lose);
                  }
              }
              this.doneMessage = player + " lose";
              this.doneResult  = -1;
          } else {
              if (!_.isUndefined(Dagaz.Controller.play)) {
                  Dagaz.Controller.play(Dagaz.Sounds.draw);
              }
              this.doneMessage = "Draw";
              this.doneResult  = 0;
          }
          sendStat(g, this.board.parent.player);
      } else {
          this.state = STATE.WAIT;
          if (!_.isUndefined(Dagaz.Controller.play)) {
              var sound = Dagaz.Sounds.move;
              if (!_.isUndefined(this.move.sound)) {
                  sound = this.move.sound;
              }
              Dagaz.Controller.play(sound);
          }
      }
  }
}

Dagaz.Model.InitGame();
Dagaz.Controller.app = Dagaz.Controller.createApp(Canvas);

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
  }, (delta > this.params.WAIT_FRAME) ? 0 : this.params.WAIT_FRAME - delta);
}

Dagaz.Controller.app.view.init(Dagaz.Controller.app.canvas, Dagaz.Controller.app);
Dagaz.Controller.app.run();

})();
