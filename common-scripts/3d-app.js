(function() {

Dagaz.Controller.viewOff = false;

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

let dropIndex    = 0;
let once         = false;
let onceDraw     = true;
let onceGameOver = true;
let isAnimating  = false;

function App(canvas) {
  this.design = Dagaz.Model.getDesign();
  this.canvas = canvas;
  this.view   = Dagaz.View.getView();
  this.state  = STATE.INIT;
  this.params = [];
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
  localStorage.removeItem('dagaz.camera');
  window.location = str;
}

Dagaz.Controller.shuffleGame = function(cnt) {
  var app = Dagaz.Controller.app;
  if (!confirm("Restart Game?")) return;
  if (!_.isUndefined(Dagaz.Controller.clearGame)) {
      Dagaz.Controller.clearGame();
  }
  var str = window.location.toString();
  var result = str.match(/^([^?]+(\?t=\d+&r=[^&]+)?)/);
  if (result) {
      str = result[1];
  }
  localStorage.removeItem('dagaz.camera');
  if (_.isUndefined(cnt)) cnt = 30;
  var board = app.board;
  for (let i = 0; i < cnt; i++) {
      board.generate(app.design);
      if (board.moves.length == 0) break;
      const ix = _.random(0, board.moves.length - 1);
      const move = board.moves[ix];
      board = board.apply(move);
  }
  var s = Dagaz.Model.getSetup(app.design, board);
  window.location = str + s;
}

Dagaz.Controller.loadGame = function(setup) {
  if (!confirm("Restart Game?")) return;
  if (!_.isUndefined(Dagaz.Controller.clearGame)) {
      Dagaz.Controller.clearGame();
  }
  var str = window.location.toString();
  var result = str.match(/^([^?]+(\?t=\d+&r=[^&]+)?)/);
  if (result) {
      str = result[1];
  }
  window.location = str + setup;
}

Dagaz.Controller.switchSound = function() {
  Dagaz.Controller.soundOff = Dagaz.Controller.soundOff ? false : true;
  console.log('Dagaz.Controller.soundOff = ' + Dagaz.Controller.soundOff);
}

Dagaz.Controller.switchView = function() {
  Dagaz.Controller.viewOff = Dagaz.Controller.viewOff ? false : true;
  console.log('Dagaz.Controller.viewOff = ' + Dagaz.Controller.viewOff);
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
  delete this.starts;
  delete this.stops;
  delete this.targets;
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
      this.board.generate(Dagaz.Model.design);
  }
  if (!_.isUndefined(Dagaz.Controller.addState)) {
      Dagaz.Controller.addState(move, this.board);
  }
  if (Dagaz.Model.showMoves) {
      console.log(move.toString());
  }
  this.state = STATE.IDLE;
}

App.prototype.mouseLocate = function(view, pos) {
  if (isAnimating) return;
  if ((this.state == STATE.IDLE) && !_.isUndefined(this.list)) {
       if (pos !== null) {
           Canvas.style.cursor = "pointer";
       } else {
           Canvas.style.cursor = "default";
       }
  }
}

App.prototype.click = function(pos, name) {
  if (isAnimating) return;
  if (_.indexOf(this.getDrops(), +pos) >= 0) {
      this.setPosition(pos);
      return;
  }
  if (_.indexOf(this.getStarts(), +pos) >= 0) {
      this.setPosition(pos);
      const targets = this.getTargets();
      this.view.markPositions(Dagaz.View.markType.TARGET, targets);
      const starts = this.getStarts();
      this.view.setHots(_.union(starts, targets));
  }
  if (_.indexOf(this.getTargets(), +pos) >= 0) {
      this.view.markPositions(Dagaz.View.markType.TARGET, []);
      this.setPosition(pos);
      this.clearPositions();
  }
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

App.prototype.setHots = function() {
  this.view.markPositions(Dagaz.View.markType.TARGET, []);
  this.list = Dagaz.Model.getMoveList(this.board);
  if (!this.list) return;
  const drops = this.getDrops();
  if (drops.length > 0) {
      this.view.setDrops(drops);
  }
  const starts = _.union(drops, this.getStarts());
  this.view.setHots(starts);
}

App.prototype.setBoard = function(board, isForced) {
  if (this.isReady() || isForced) {
      this.board = board;
      this.view.reInit(board);
      this.setHots();
      delete this.list;
      this.clearPositions();
      this.view.markPositions(Dagaz.View.markType.TARGET, []);
  }
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

App.prototype.checkCaptures = function(move) {
  let f = false;
  const a = [];
  for (let i = 0; i < move.actions.length; i++) {
       const m = move.actions[i];
       if ((m[0] !== null) && (m[1] !== null) && (m[0][0] != m[1][0])) {
           const piece = this.board.getPiece(m[1][0]);
           if (piece !== null) {
               f = true;
               a.push([ [m[1][0]], null, null, m[3]]);
               m[3] = m[3] + 1;
           }
       }
       a.push(m);
  }
  if (f) {
      move.actions = a;
  }
}

App.prototype.animate = function(f) {
  isAnimating = f;
  this.state = STATE.IDLE;
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
  if (onceDraw || isAnimating) {
      this.view.draw(this.canvas);
      onceDraw = false;
  }
  if (this.state == STATE.STOP) {
      this.state = STATE.IDLE;
      return;
  }
  if (isAnimating) return;
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
                     if (result && result.done && result.move) {
                         console.log("Advisor: " + result.move);
                         var board = this.board.apply(result.move);
                         Dagaz.Controller.pushState(result.move, board);
                         if (!_.isUndefined(Dagaz.Sounds) && !_.isUndefined(Dagaz.Sounds.hint)) {
                             Dagaz.Controller.play(Dagaz.Sounds.hint);
                         }
                     }
                     delete Dagaz.AI.advisorStamp;
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
             if (!Dagaz.Controller.noDropIndex) {
                 dropIndex = 0;
             }
             this.setHots();
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
              if (!_.isUndefined(Dagaz.Controller.play) && !Dagaz.Controller.customSound) {
                  var sound = Dagaz.Sounds.move;
                  if (!_.isUndefined(this.move.sound)) {
                     sound = this.move.sound;
                  }
                  Dagaz.Controller.play(sound, this.board.player);
              }
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
          this.checkCaptures(this.move);
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
              if (!_.isUndefined(Dagaz.Controller.play) && !Dagaz.Controller.customSound) {
                  var sound = Dagaz.Sounds.move;
                  if (!_.isUndefined(this.move.sound)) {
                      sound = this.move.sound;
                  }
                  Dagaz.Controller.play(sound, this.board.player);
              }
              delete this.move;
              this.state = STATE.IDLE;
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
