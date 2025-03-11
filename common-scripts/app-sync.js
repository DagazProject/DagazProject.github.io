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
var lastPosition = null;
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
  if (_.isUndefined(this.params.WAIT_FRAME)) {
      this.params.WAIT_FRAME = 100;
  }
  if (_.isUndefined(this.params.SHOW_TARGETS)) {
      this.params.SHOW_TARGETS = true;
  }
  if (_.isUndefined(this.params.SHOW_ATTACKING)) {
      this.params.SHOW_ATTACKING = true;
  }
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

App.prototype.gameOver = function(text, player) {
  if (onceGameOver) {
      if (!_.isUndefined(Dagaz.Controller.clearGame)) {
          Dagaz.Controller.clearGame();
      }
      _.delay(alert, 1000, [text]);
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

App.prototype.getStops = function() {
  if (_.isUndefined(this.stops)) {
      if (_.isUndefined(this.list)) {
          this.stops = [];
      } else {
          this.stops = this.list.getStops();
      }
  }
  return this.stops;
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

App.prototype.clearPositions = function() {
  delete this.starts;
  delete this.stops;
  delete this.targets;
}

App.prototype.setPosition = function(pos) {
  this.move = this.list.setPosition(pos);
  this.clearPositions();
  if (this.params.SHOW_TARGETS) {
      this.view.markPositions(Dagaz.View.markType.TARGET, this.getTargets());
  }
  if (this.params.SHOW_ATTACKING && Dagaz.Model.showCaptures) {
      this.view.markPositions(Dagaz.View.markType.ATTACKING, this.list.getCaptures());
  }
  this.state = STATE.EXEC;
  Canvas.style.cursor = "default";
  this.view.markPositions(Dagaz.View.markType.CURRENT, [ pos ]);
}

App.prototype.mouseLocate = function(view, pos) {
  if (this.currPos != pos) {
      if ((this.state == STATE.IDLE) && !_.isUndefined(this.list)) {
          if (isDrag) {
              if (_.intersection(this.getStops(), pos).length > 0) {
                  Canvas.style.cursor = "pointer";
              } else {
                  Canvas.style.cursor = "move";
              }
          } else {
              if (_.intersection(this.getStarts(), pos).length > 0) {
                  Canvas.style.cursor = "pointer";
              } else {
                  Canvas.style.cursor = "default";
              }
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

App.prototype.mouseDown = function(view, pos) {
  this.view.markPositions(Dagaz.View.markType.GOAL, []);
  if ((this.state == STATE.IDLE) && !_.isUndefined(this.list)) {
      var positions = _.intersection(this.getTargets(), pos);
      if (positions.length == 0) {
          positions = _.intersection(this.getStops(), pos);
      }
      if (positions.length == 0) {
          positions = _.intersection(this.getStarts(), pos);
      }
      if (positions.length > 0) {
          Canvas.style.cursor = "move";
          this.setPosition(positions[0]);
          lastPosition = positions[0];
          isDrag = true;
      }
  }
}

App.prototype.mouseUp = function(view, pos) {
  if ((this.state == STATE.IDLE) && !_.isUndefined(this.list)) {
      var positions = _.intersection(this.getTargets(), pos);
      if (positions.length > 0) {
          this.setPosition(positions[0]);
      }
  }
  Canvas.style.cursor = "default";
  isDrag = false;
}

App.prototype.mouseWheel = function(view, delta) {}

App.prototype.getAI = function() {
  if (_.isUndefined(this.ai)) {
      this.ai = null;
      this.ai = Dagaz.AI.findBot("random",  this.params, this.ai);
      this.ai = Dagaz.AI.findBot("common",  this.params, this.ai);
      this.ai = Dagaz.AI.findBot("smart",   this.params, this.ai);
      this.ai = Dagaz.AI.findBot("opening", this.params, this.ai);
  }
  return this.ai;
}

App.prototype.getBoard = function() {
  if (_.isUndefined(this.board)) {
      this.board  = Dagaz.Model.getInitBoard();
  }
  return this.board;
}

App.prototype.getContext = function(player) {
  if (Dagaz.AI.isFriend(1, player) && !this.design.isPuzzle()) return null;
  if (_.isUndefined(this.context)) {
      this.context = [];
  }
  if (_.isUndefined(this.context[player])) {
      this.context[player] = Dagaz.AI.createContext(this.design);
  }
  return this.context[player];
}

App.prototype.exec = function() {
  this.view.draw(this.canvas);
  if (this.state == STATE.STOP) {
      this.state = STATE.IDLE;
      return;
  }
  if (this.state == STATE.IDLE) {
      var board    = this.getBoard().copy();
      board.move   = this.board.move;
      board.player = this.design.nextPlayer(board.player);
      var ctx      = this.getContext(board.player);
      var ai       = this.getAI();
      if (_.isUndefined(this.mixin) && (ctx !== null) && (ai !== null)) {
          ai.setContext(ctx, board);
          var result = ai.getMove(ctx);
          if (result && result.done) {
              this.mixin = result.move;
          }
      }
      if (_.isUndefined(this.list)) {
          this.list = Dagaz.Model.getMoveList(this.board);
          if (!_.isUndefined(Dagaz.Model.getSetup)) {
              console.log("Setup: " + Dagaz.Model.getSetup(this.design, this.board));
          }
          if (this.list.isEmpty()) {
              this.state = STATE.DONE;
              Canvas.style.cursor = "default";
              if (!_.isUndefined(Dagaz.Controller.play)) {
                  Dagaz.Controller.play(Dagaz.Sounds.lose);
              }
              this.gameOver(player + " lose", -this.board.player);
              return;
          }
      }
  }
  if (this.state == STATE.EXEC) {
      this.state = STATE.IDLE;
      isDrag = false;
      if (!_.isUndefined(this.list) && !this.move.isPass() && this.list.isDone()) {
          var moves = this.list.getMoves();
          delete this.list;
          if (moves.length > 0) {
              this.move = moves[0];
              console.log("Debug: " + this.move.toString());
          }
          if (!_.isUndefined(this.mixin)) {
              this.move = Dagaz.Model.join(this.design, this.getBoard(), this.move, this.mixin);
              delete this.mixin;
          }
          this.view.markPositions(Dagaz.View.markType.TARGET, []);
          this.view.markPositions(Dagaz.View.markType.CURRENT, []);
          lastPosition = null;
          if (Dagaz.Model.showMoves) {
              console.log(this.move.toString());
          }
          if (!_.isUndefined(Dagaz.Controller.play)) {
              var sound = Dagaz.Sounds.move;
              if (!_.isUndefined(this.move.sound)) {
                  sound = this.move.sound;
              }
              Dagaz.Controller.play(sound);
          }
          this.board = this.board.apply(this.move);
          if (!_.isUndefined(this.move.captured)) {
              this.view.protected = this.move.protected;
              this.move.capturePiece(this.move.captured);
          }
          this.move.applyAll(this.view);
          this.state = STATE.WAIT;
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
          }
     }
  }
}

Dagaz.Model.InitGame();
Dagaz.Controller.app = Dagaz.Controller.createApp(Canvas);

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
