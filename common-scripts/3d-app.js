(function() {

const STATE = {
    INIT: 0,
    IDLE: 1,
    WAIT: 2,
    BUZY: 3,
    EXEC: 4,
    DONE: 5,
    STOP: 6
};

const WAIT_FRAME = 100;

var dropIndex    = 0;
var once         = false;
let onceDraw     = true;
var onceGameOver = true;

function App(canvas) {
  this.design = Dagaz.Model.getDesign();
  this.canvas = canvas;
  this.view   = Dagaz.View.getView();
  this.state  = STATE.INIT;
  this.params = [];
}

Dagaz.Controller.createApp = function(canvas) {
  if (_.isUndefined(Dagaz.Controller.app)) {
      Dagaz.Controller.app = new App(canvas);
  }
  return Dagaz.Controller.app;
}

Dagaz.Controller.open = function(url) {
  const link = document.createElement('a');
  link.href = url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.click();
}

Dagaz.Controller.go = function(url) {
  const link = document.createElement('a');
  link.href = url;
  link.rel = 'noopener noreferrer';
  link.click();
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

Dagaz.Controller.switchSound = function() {
  Dagaz.Controller.soundOff = Dagaz.Controller.soundOff ? false : true;
  console.log('Dagaz.Controller.soundOff = ' + Dagaz.Controller.soundOff);
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
      this.view.clearControls();
      _.delay(gameOver, 2000, text, this, player);
      onceGameOver = false;
  }
}

App.prototype.getDrops = function() {
  if (_.isUndefined(this.list) || (Dagaz.Model.showDrops == 0)) {
      this.drops = [];
  } else {
      if (_.isUndefined(this.drops) || (this.drops.length == 0)) {
          this.drops = this.list.getDrops();
      }
  }
  return this.drops;
}

App.prototype.clearPositions = function() {
  delete this.drops;
  this.view.clearDrops();
}

App.prototype.setPosition = function(pos) {
  this.move = this.list.setPosition(pos);
  this.clearPositions();
  this.state = STATE.EXEC;
  Canvas.style.cursor = "default";
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

App.prototype.click = function(pos, name) {
  this.setPosition(pos);
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

App.prototype.isReady = function() {
  return this.state == STATE.IDLE;
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

App.prototype.setBoard = function(board, isForced) {
  if (this.isReady() || isForced) {
      this.board = board;
      this.view.reInit(board);
      delete this.list;
  }
}

App.prototype.exec = function() {
  this.view.configure();
  if (!_.isUndefined(Dagaz.Model.load) && (Dagaz.Controller.persistense == "session")) {
      var board = Dagaz.Model.getInitBoard();
      Dagaz.Model.load(board);
      delete Dagaz.Model.load;
  }
  if (onceDraw) {
      this.view.draw(this.canvas);
      onceDraw = false;
  }
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
      } else {
         if (_.isUndefined(this.list)) {
             Dagaz.AI.advisorStamp = null;
             var player = this.design.playerNames[this.board.player];
             console.log("Player: " + player);
             if (!_.isUndefined(Dagaz.Model.getSetup)) {
                 console.log("Setup: " + Dagaz.Model.getSetup(this.design, this.board));
             }
             if (!Dagaz.Controller.noDropIndex) {
                 dropIndex = 0;
             }
             this.list = Dagaz.Model.getMoveList(this.board);
             var drops = this.getDrops();
             if (this.drops.length > 0) {
                 this.view.setDrops(this.drops);
             }
             var ko = [];
             if (!_.isUndefined(this.board.ko)) {
                 ko = this.board.ko;
             }
             this.view.markPositions(Dagaz.View.markType.KO, ko);
         }
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
          Canvas.style.cursor = "default";
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
              this.move = result.move;
              this.state = STATE.EXEC;
          }
      }
  }
  if (this.state == STATE.EXEC) {
      delete Dagaz.AI.advisorStamp;
      this.state = STATE.IDLE;
      if (!_.isUndefined(this.list) && this.list.isDone()) {
          var moves = this.list.filterDrops(this.list.getMoves(), dropIndex);
          if ((moves.length == 1) && (moves[0].isDropMove())) this.move = moves[0];
      }
      if (!this.move.isPass()) {
          if (Dagaz.Model.showMoves) {
              console.log(this.move.toString());
          }
          this.move.applyAll(this.view);
          this.state = STATE.IDLE;
      }
      if (!_.isUndefined(this.list)) {
          if (this.list.isDone() || (Dagaz.Model.completePartial && !this.move.isPass())) {
              var moves = this.list.filterDrops(this.list.getMoves(), dropIndex);
              delete this.list;
              this.view.clearDrops();
              var m = this.move;
              this.boardApply(m);
              Dagaz.Model.Done(this.design, this.board);
              console.log("Debug: " + m.toString());
              this.state = STATE.IDLE;
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
              this.done();
          }
      }
  }
}

Dagaz.Model.InitGame();
Dagaz.Controller.app = Dagaz.Controller.createApp(Canvas);

if (!_.isUndefined(Dagaz.Controller.getSessionManager)) {
  Dagaz.Controller.getSessionManager(Dagaz.Controller.app);
}

App.prototype.run = function() {
  var timestamp = Date.now();
  this.exec();
  var delta = Date.now() - timestamp;
  _.delay(function() {
     Dagaz.Controller.app.run();
  }, (delta > WAIT_FRAME) ? 0 : WAIT_FRAME - delta);
}

Dagaz.Controller.app.view.init(Dagaz.Controller.app.canvas, Dagaz.Controller.app);
Dagaz.Controller.app.run();

})();
