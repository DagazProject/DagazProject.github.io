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
var determinated = null;
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

App.prototype.syncCaptures = function(move) {
  var m = Dagaz.Model.createMove(move.mode);
  _.each(move.actions, function(a) {
      if ((a[0] !== null) && (a[1] === null)) {
          m.actions.push(a);
      }
  });
  m.applyAll(this.view);
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
          if (this.move && this.move.isPass() && (lastPosition == positions[0])) {
              if (this.list && this.list.canPass()) {
                  var moves = this.list.getMoves();
                  if (moves.length == 1) {
                      this.board = this.board.apply(moves[0]);
                      this.syncCaptures(moves[0]);
                      this.state = STATE.IDLE;
                      delete this.list;
                      lastPosition = null;
                      this.view.markPositions(Dagaz.View.markType.ATTACKING, []);
                      this.view.markPositions(Dagaz.View.markType.CURRENT, []);
                      this.view.markPositions(Dagaz.View.markType.TARGET, []);
                      return;
                  }
              }
          }
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

App.prototype.getAI = function(player) {
  if (_.isUndefined(this.ai)) {
      this.ai = [];
  }
  if (_.isUndefined(this.ai[player])) {
      this.ai[player] = null;
      if (this.design.isPuzzle()) {
          this.ai[player] = Dagaz.AI.findBot("solver",  this.params, this.ai[player]);
      } else {
          this.ai[player] = Dagaz.AI.findBot("random",  this.params, this.ai[player]);
          this.ai[player] = Dagaz.AI.findBot(player,    this.params, this.ai[player]);
      }
  }
  return this.ai[player];
}

App.prototype.getBoard = function() {
  if (_.isUndefined(this.board)) {
      this.board  = Dagaz.Model.getInitBoard();
  }
  return this.board;
}

App.prototype.getContext = function(player) {
  if (_.isUndefined(this.context)) {
      this.context = [];
  }
  if (_.isUndefined(this.context[player])) {
      this.context[player] = Dagaz.AI.createContext(this.design);
  }
  return this.context[player];
}

App.prototype.determinate = function(move) {
  var moves = move.determinate();
  determinated = null;
  if (moves.length > 1) {
      move = moves[1];
      determinated = move;
  }
  return move;
}

App.prototype.exec = function() {
  this.view.draw(this.canvas);
  if (this.state == STATE.STOP) {
      this.state = STATE.IDLE;
      return;
  }
  if (this.state == STATE.IDLE) {
      var ctx = this.getContext(this.getBoard().player);
      var ai  = this.getAI(this.getBoard().player);
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
             this.list = Dagaz.Model.getMoveList(this.board);
             if (this.list.isPassForced()) {
                  if (passForced >= this.design.getPlayersCount()) {
/*                    this.state = STATE.DONE;
                      Canvas.style.cursor = "default";
                      this.gameOver("Draw", 0); */
                  } else {
                      this.board = this.board.apply(Dagaz.Model.createMove());
                      this.state = STATE.IDLE;
                      delete this.list;
                      passForced++;
                  }
                  return;
             }
             passForced = 0;
             if (this.list.isEmpty()) {
                 this.state = STATE.DONE;
                 Canvas.style.cursor = "default";
                 this.gameOver(player + " lose", -this.board.player);
                 return;
             }
         }
      }
  }
  if (this.state == STATE.BUZY) {
      var ctx = this.getContext(this.board.player);
      var player = this.design.playerNames[this.board.player];
      var result = this.getAI(this.board.player).getMove(ctx);
      if (once) {
          console.log("Player: " + player);
          if (!_.isUndefined(Dagaz.Model.getSetup)) {
              console.log("Setup: " + Dagaz.Model.getSetup(this.design, this.board));
          }
          once = false;
      }
      if (result) {
          if (_.isUndefined(result.move)) {
              return;
          }
          if (result.done || (Date.now() - this.timestamp >= this.params.AI_WAIT)) {
              this.board = this.board.apply(result.move);
              if (result.move.isPass()) {
                  if (passForced >= this.design.getPlayersCount()) {
                      this.state = STATE.DONE;
                      Canvas.style.cursor = "default";
                      this.gameOver("Draw", 0);
                  } else {
                      this.state = STATE.IDLE;
                      delete this.list;
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
      this.state = STATE.IDLE;
      isDrag = false;
      if (!this.move.isPass()) {
          this.view.markPositions(Dagaz.View.markType.TARGET, []);
          this.view.markPositions(Dagaz.View.markType.CURRENT, []);
          lastPosition = null;
          if (Dagaz.Model.showMoves) {
              console.log(this.move.toString());
          }
          this.move = this.determinate(this.move);
          this.move.applyAll(this.view);
          if (!_.isUndefined(this.list)) {
              this.view.markPositions(Dagaz.View.markType.CURRENT, [ this.move.getTarget() ]);
          }
          this.state = STATE.WAIT;
      }
      if (!_.isUndefined(this.list)) {
          if (this.list.isDone()) {
              this.view.markPositions(Dagaz.View.markType.CURRENT, []);
              var moves = this.list.getMoves();
              delete this.list;
              if ((moves.length > 0) || (determinated !== null)) {
                  var m = moves[0];
                  if (determinated !== null) {
                      m.clarify(determinated);
                      determinated = null;
                  }
                  this.board = this.board.apply(m);
                  console.log("Debug: " + m.toString());
              }
          }
      }
      if (this.board.parent !== null) {
          var g = this.board.checkGoals(this.design, this.board.parent.player);
          if (g !== null) {
              var player = this.design.playerNames[this.board.parent.player];
              this.state = STATE.DONE;
              Canvas.style.cursor = "default";
              if (g > 0) {
                  this.doneMessage = player + " won";
                  this.winPlayer   = this.board.parent.player;
              } else if (g < 0) {
                  this.doneMessage = player + " lose";
                  this.winPlayer   = -this.board.parent.player;
              } else {
                  this.doneMessage = "Draw";
                  this.winPlayer   = 0;
              }
          }
     }
  }
}

Dagaz.Model.InitGame();
var app = Dagaz.Controller.createApp(Canvas);

App.prototype.run = function() {
  var timestamp = Date.now();
  this.exec();
  var delta = Date.now() - timestamp;
  _.delay(function() {
     app.run();
  }, (delta > this.params.WAIT_FRAME) ? 0 : this.params.WAIT_FRAME - delta);
}

app.view.init(app.canvas, app);
app.run();

})();
