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

var once = false;
var targets = [];
var dropIndex = 0;
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
  if (!_.isUndefined(Dagaz.Controller.clearGame)) {
      Dagaz.Controller.clearGame();
  }
  alert(text);
}

App.prototype.gameOver = function(text, player) {
  Dagaz.Controller.Done(this.board);
  if (onceGameOver) {
      _.delay(gameOver, 1000, text, this, player);
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

App.prototype.done = function() {
  if (this.state != STATE.DONE) {
      this.state = STATE.STOP;
  } else {
      if (this.doneMessage) {
          this.gameOver(this.doneMessage, this.winPlayer);
      }
  }
}

App.prototype.getStarts = function() {
  if (_.isUndefined(this.starts)) {
      if (_.isUndefined(this.list)) {
          this.starts = [];
      } else {
          this.starts = this.list.getStarts();
      }
  }
  return this.starts;
}

App.prototype.getTargets = function() {
  if (_.isUndefined(this.targets)) {
      if (_.isUndefined(this.list)) {
          this.targets = [];
      } else {
          this.targets = this.list.getTargets();
      }
  }
  return this.targets;
}

App.prototype.getDrops = function() {
  if (_.isUndefined(this.list)) {
      return [];
  } else {
      return this.list.getDrops();
  }
}

App.prototype.clearPositions = function() {
  delete this.starts;
  delete this.targets;
}

App.prototype.showTargets = function() {
  if (_.isUndefined(this.list)) return;
  targets = [];
  var moves = this.list.getMoves();
  if (this.list.isComplex()) {
      if (moves.length > 0) {
          if (dropIndex >= moves.length) dropIndex = 0;
          _.each(moves[dropIndex].actions, function(a) {
              if (a[0] !== null) return;
              if (a[1] === null) return;
              targets.push(a[1][0]);
          });
      }
  } else {
      targets = this.list.getTargets();
  }
  this.view.markPositions(Dagaz.View.markType.TARGET, targets);
}

App.prototype.moveExec = function() {
  if (!_.isUndefined(this.list) && this.isPosChanged) {
      var moves = this.list.getMoves();
      if (dropIndex < moves.length) {
          console.log("Debug: " + moves[dropIndex].toString());
          this.boardApply(moves[dropIndex]);
          this.view.clearDrops();
          delete this.list;
          delete this.currPos;
          delete this.currTile;
          this.view.markPositions(Dagaz.View.markType.TARGET, []);
          this.view.markPositions(Dagaz.View.markType.ATTACKING, []);
          Canvas.style.cursor = "default";
          this.clearPositions();
          this.state = STATE.IDLE;
          targets = [];
          if (!_.isUndefined(Dagaz.Controller.play)) {
              var sound = Dagaz.Sounds.move;
              if (!_.isUndefined(moves[dropIndex].sound)) {
                  sound = moves[dropIndex].sound;
              }
              Dagaz.Controller.play(sound, this.board.player);
          }
      }
  }
}

App.prototype.mouseWheel = function(view, delta) { 
  if (_.isUndefined(this.list)) return;
  dropIndex += delta;
  if (dropIndex < 0) dropIndex = 0;
  this.showTargets();
}

App.prototype.mouseLocate = function(view, pos) {
  if ((this.state == STATE.IDLE) && !_.isUndefined(this.list) && (pos.length > 0)) {
      Canvas.style.cursor = "default";
      if (_.intersection(this.getStarts(), pos).length > 0) {
          Canvas.style.cursor = "pointer";
      }
      if (_.indexOf(targets, +pos[0]) >= 0) {
          Canvas.style.cursor = "pointer";
      }
      if (_.isUndefined(this.currPos) || (this.currPos != pos[0])) {
          if (!_.isUndefined(this.currTile)) {
              this.isPosChanged = true;
              this.list.setPosition(pos[0]);
              this.showTargets();
          }
          this.currPos = pos[0];
      }
  }
}

App.prototype.mouseDown = function(view, pos) {
  this.view.markPositions(Dagaz.View.markType.GOAL, []);
  if (pos.length != 1) return;
  if ((this.state == STATE.IDLE) && !_.isUndefined(this.list)) {
      this.currPos = +pos[0];
      if (this.list.isComplex() && (_.indexOf(targets, +pos[0]) >= 0)) {
          this.isPosChanged = true;
          this.moveExec();
          return;        
      }
      if (_.indexOf(this.getStarts(), +pos[0]) >= 0) {
          this.list.setPosition(this.currPos);
          if ((this.list.src === null) && (Dagaz.Model.passTurn == 3)) {
              console.log("Debug: Pass");
              var m = Dagaz.Model.createMove(0);
              this.boardApply(m);
              this.view.clearDrops();
              delete this.list;
              delete this.currPos;
              delete this.currTile;
              this.view.markPositions(Dagaz.View.markType.TARGET, []);
              this.view.markPositions(Dagaz.View.markType.ATTACKING, []);
              Canvas.style.cursor = "default";
              this.clearPositions();
              this.state = STATE.IDLE;
              targets = [];
              if (!_.isUndefined(Dagaz.Controller.play)) {
                  var sound = Dagaz.Sounds.move;
                  if (!_.isUndefined(m.sound)) {
                      sound = m.sound;
                  }
                  Dagaz.Controller.play(sound, this.board.player);
              }
              return;
          }
          if (this.list.isComplex()) {
              this.currTile = Dagaz.Model.getTiles(this.board, this.currPos);
              this.view.markPositions(Dagaz.View.markType.ATTACKING, this.currTile);
              this.isPosChanged = false;
          }
          this.showTargets();
      }
      if (!this.list.isComplex() && (_.indexOf(targets, +pos[0]) >= 0)) {
          this.list.setPosition(+pos[0]);
          var moves = this.list.getMoves();
          if (moves.length == 1) {
              this.move = this.list.getMoves()[0];
              this.clearPositions();
              this.state = STATE.EXEC;
              Canvas.style.cursor = "default";
              targets = [];
          }
      }
  }
}

App.prototype.mouseUp = function(view, pos) { 
  if (pos.length != 1) return;
  if ((this.state == STATE.IDLE) && !_.isUndefined(this.list)) {
      if (this.list.isComplex() && (_.indexOf(targets, +pos[0]) >= 0)) {
          this.moveExec();
          return;        
      }
  }
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
      this.boardApply(move);
      Dagaz.Model.Done(this.design, this.board);
      this.move = move;
      this.state = STATE.EXEC;
  }
}

Dagaz.AI.callback = function(result) {
  var app = Dagaz.Controller.app;
  console.log('Advisor: ' + result);
  var move = null;
  _.each(app.board.moves, function(m) {
      var x = m.toString() + ' ';
      if (x.startsWith(result + ' ')) {
          move = m;
      }
  });
  if (move === null) return;
  var board = app.board.apply(move);
  Dagaz.Controller.pushState(move, board);
  if (!_.isUndefined(Dagaz.Sounds) && !_.isUndefined(Dagaz.Sounds.hint)) {
      Dagaz.Controller.play(Dagaz.Sounds.hint);
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
          if (!_.isUndefined(Dagaz.Controller.AI_DELAY)) {
              Dagaz.Controller.delayTimestamp = Date.now();
          }
          Canvas.style.cursor = "wait";
          this.timestamp = Date.now();
          once = true;
          return;
      }
      if (_.isUndefined(this.list)) {
          var player = this.design.playerNames[this.board.player];
          console.log("Player: " + player);
          if (!_.isUndefined(Dagaz.Model.getSetup)) {
              console.log("Setup: " + Dagaz.Model.getSetup(this.design, this.board));
          }
          this.list = Dagaz.Model.getMoveList(this.board);
          if (this.list.isEmpty()) {
              this.state = STATE.DONE;
              Canvas.style.cursor = "default";
              if (!_.isUndefined(Dagaz.Controller.play)) {
                  Dagaz.Controller.play(Dagaz.Sounds.lose);
              }
              this.gameOver(player + " lose", -this.board.player);
              return;
          }
          delete this.currTile;
      }
  }
  if (this.state == STATE.BUZY) {
      if (!_.isUndefined(Dagaz.Controller.delayTimestamp)) {
          if (Date.now() - Dagaz.Controller.delayTimestamp < Dagaz.Controller.AI_DELAY) return;
          delete Dagaz.Controller.delayTimestamp;
      }
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
              if (result.done) {
                  this.state = STATE.DONE;
                  Canvas.style.cursor = "default";
                  if (!_.isUndefined(Dagaz.Controller.play)) {
                      Dagaz.Controller.play(Dagaz.Sounds.win);
                  }
                  this.gameOver(player + " lose", -this.board.player);
              }
              return;
          }
          if (result.done || (Date.now() - this.timestamp >= this.params.AI_WAIT)) {
              this.boardApply(result.move);
              Dagaz.Model.Done(this.design, this.board);
              if (result.move.isPass()) {
                  if (Dagaz.Model.passForcedDraw && (passForced >= this.design.getPlayersCount())) {
                      this.state = STATE.DONE;
                      Canvas.style.cursor = "default";
                      if (!_.isUndefined(Dagaz.Controller.play)) {
                          Dagaz.Controller.play(Dagaz.Sounds.draw);
                      }
                      this.gameOver("Draw", 0);
                  } else {
                      this.state = STATE.IDLE;
                      delete this.list;
                      this.view.clearDrops();
                      passForced++;
                      return;
                  }
              } else {
                  passForced = 0;
              }
              this.move = result.move;
              this.state = STATE.EXEC;
          }
      }
  }
  if (this.state == STATE.EXEC) {
      delete Dagaz.AI.advisorStamp;
      this.state = STATE.IDLE;
      if (!this.move.isPass()) {
          if (Dagaz.View.CLEAR_KO) {
              this.view.markPositions(Dagaz.View.markType.KO, []);
          }
          this.view.markPositions(Dagaz.View.markType.TARGET, []);
          this.view.markPositions(Dagaz.View.markType.CURRENT, []);
          if (Dagaz.Model.showMoves) {
              console.log(this.move.toString());
          }
          this.move.applyAll(this.view);
          if (!_.isUndefined(this.list)) {
              this.view.markPositions(Dagaz.View.markType.CURRENT, [ this.move.getTarget() ]);
          }
          this.state = STATE.WAIT;
      }
      if (!_.isUndefined(this.list)) {
          if (!this.move.isPass()) {
              this.view.markPositions(Dagaz.View.markType.CURRENT, []);
              delete this.list;
              this.view.clearDrops();
              var m = this.move;
              this.boardApply(m);
              Dagaz.Model.Done(this.design, this.board);
              console.log("Debug: " + m.toString());
          }
      }
      if (!this.move.isPass()) {
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
          var message = '';
          if (_.isObject(g)) {
              message = g.message;
              g = g.result;
          }
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
                  this.doneMessage = player + " won" + message;
                  this.winPlayer   = this.board.parent.player;
              } else if (g < 0) {
                  if (!_.isUndefined(Dagaz.Controller.play)) {
                      if (this.board.parent.player != 1) {
                         Dagaz.Controller.play(Dagaz.Sounds.win);
                      } else {
                         Dagaz.Controller.play(Dagaz.Sounds.lose);
                      }
                  }
                  this.doneMessage = player + " lose" + message;
                  this.winPlayer   = -this.board.parent.player;
              } else {
                  if (!_.isUndefined(Dagaz.Controller.play)) {
                      Dagaz.Controller.play(Dagaz.Sounds.draw);
                  }
                  this.doneMessage = "Draw" + message;
                  this.winPlayer   = 0;
              }
          }
     }
  }
}

Dagaz.Model.InitGame();
Dagaz.Controller.app = Dagaz.Controller.createApp(Canvas);
Dagaz.Controller.app.view.init(Dagaz.Controller.app.canvas, Dagaz.Controller.app);

if (!_.isUndefined(Dagaz.Controller.getSessionManager)) {
  Dagaz.Controller.getSessionManager(Dagaz.Controller.app);
}

setInterval(function() {
  Dagaz.Controller.app.exec();
}, 100);

})();
