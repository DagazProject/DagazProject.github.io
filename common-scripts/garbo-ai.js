(function() {

function Ai(parent) {
  this.parent = parent;
}

var once       = true;
var inProgress = false;
var resultMove = null;
var player     = null;

var findBot = Dagaz.AI.findBot;

Dagaz.AI.findBot = function(type, params, parent) {
  if ((type == "external") || (type == "common") || (type == "1") /*|| (type == "2")*/) {
      return new Ai(parent);
  } else {
      return findBot(type, params, parent);
  }
}

Ai.prototype.setContext = function(ctx, board) {
  if (this.parent) {
      this.parent.setContext(ctx, board);
  }
  ctx.timestamp = Date.now();
  ctx.board  = board;
  inProgress = false;
  resultMove = null;
  player     = board.player;
  if (once) {
      Dagaz.AI.ResetGame();
      once = false;
  }
}

var garbo = function(bestMove, value, timeTaken, ply) {
  resultMove = Dagaz.AI.FormatMove(bestMove);  
  inProgress = false;
  console.log('Garbo: ' + resultMove + ', value = ' + value + ', time = ' + timeTaken + ', ply = ' + ply);
  if (resultMove == 'O-O-O') {
      if (player == 1) {
          resultMove = 'e1-c1';
      }
      if (player == 2) {
          resultMove = 'e8-c8';
      }
  }
  if (resultMove == 'O-O') {
      if (player == 1) {
          resultMove = 'e1-g1';
      }
      if (player == 2) {
          resultMove = 'e8-g8';
      }
  }
  if (Dagaz.AI.callback) {
      Dagaz.AI.callback(resultMove);
  }
}

function debugPlyCallback(bestMove, value, time, ply) {
    console.log(Dagaz.AI.FormatMove(bestMove) + ', v = ' + value + ', t = ' + time + ', ply = ' + ply);
}

Ai.prototype.getMove = function(ctx) {
  var moves = Dagaz.AI.generate(ctx, ctx.board);
  if (moves.length == 0) {
      return { done: true, ai: "nothing" };
  }
  if (moves.length == 1) {
      return {
           done: true,
           move: moves[0],
           time: Date.now() - ctx.timestamp,
           ai:  "once"
      };
  }
  if (resultMove !== null) {
      var bestMove = null;
      _.each(moves, function(move) {
          var x = move.toString() + ' ';
          if (x.startsWith(resultMove + ' ')) {
              bestMove = move;
          }
      });
      if (bestMove !== null) {
          return {
              done: true,
              move: bestMove,
              time: Date.now() - ctx.timestamp,
              ai:  "garbo"
         };
      }
      if (this.parent) {
          return this.parent.getMove(ctx);
      }
  }
  if (inProgress) {
      return {
           done: false,
           time: Date.now() - ctx.timestamp,
           ai:  "garbo"
      };
  }
  var setup = Dagaz.Model.getSetup(ctx.design, ctx.board);
  var result = setup.match(/[?&]setup=(.*)/);
  if (result) {
      inProgress = true;
      var fen = result[1];
      setTimeout(function () {
            Dagaz.AI.InitializeFromFen(fen);
            Dagaz.AI.Search(garbo, 10, debugPlyCallback);
        }, 100);
      return {
           done: false,
           time: Date.now() - ctx.timestamp,
           ai:  "garbo"
      };
  }
  if (this.parent) {
      return this.parent.getMove(ctx);
  }
}

})();
