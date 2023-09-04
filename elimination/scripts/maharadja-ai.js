(function() {

var MAXVALUE = 1000000;

function Ai(params, parent) {
  this.params = params;
  this.parent = parent;
}

var findBot = Dagaz.AI.findBot;

Dagaz.AI.findBot = function(type, params, parent) {
  if ((type == "common") || (type == "1")) {
      return new Ai(params, parent);
  } else {
      return findBot(type, params, parent);
  }
}

var dump = function(design, cover) {
  _.each(design.allPositions(), function(pos) {
      var s = null;
      _.each(cover[pos], function(p) {
          if (s === null) {
              s = Dagaz.Model.posToString(pos) + " <-- ";
          } else {
              s = s + ", ";
          }
          s = s + Dagaz.Model.posToString(p);
      });
      if (s !== null) {
          console.log("Cover: " + s);
      }
  });
}

Dagaz.AI.eval = function(design, params, board, player) {
  var r = 0;
  var cover = board.getCover(design);
  _.each(design.allPositions(), function(pos) {
      var defended = _.filter(cover[pos], function(p) {
          var piece = board.getPiece(p);
          if (piece === null) return false;
          return piece.player == player;
      });
      if (defended.length > 0) r++;
  });
  return r;
}

var isSafe = function(design, board, move, player) {
  var r = true;
  var cover = board.getCover(design);
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.player == player)) {
          if (cover[pos].length > 0) {
              var defended = _.filter(cover[pos], function(p) {
                  var piece = board.getPiece(p);
                  if (piece === null) return false;
                  return piece.player == player;
              });
              if (defended.length == 0) {
                  r = false;
              }
          }
      }
  });
  return r;
}

var isLoss = function(ctx, board, player) {
  board.moves = Dagaz.AI.generate(ctx, board);
  for (var i = 0; i < board.moves.length; i++) {
       var b = board.apply(board.moves[i]);
       b.moves = Dagaz.AI.generate(ctx, b);
       if (b.moves.length == 0) return true;
  }
  return false;
}

var isGoal = function(board, move) {
  if (move.isSimpleMove()) {
      var pos = move.actions[0][1][0];
      return board.getPiece(pos) !== null;
  }
  return false;
}

Ai.prototype.setContext = function(ctx, board) {
  if (this.parent) {
      this.parent.setContext(ctx, board);
  }
  delete ctx.best;
  ctx.board = board;
  ctx.timestamp = Date.now();
}

Ai.prototype.getMove = function(ctx) {
  ctx.board.moves = Dagaz.AI.generate(ctx, ctx.board);
  if (ctx.board.moves.length == 0) {
      return { done: true, ai: "nothing" };
  }
  var mx = -MAXVALUE;
  for (var ix = 0; ix < ctx.board.moves.length; ix++) {
       var move = ctx.board.moves[ix];
       if (isGoal(ctx.board, move)) {
           console.log("Best Move: " + move.toString());
           ctx.best = move;
           break;
       }
       var b = ctx.board.apply(move);
       if (!isSafe(ctx.design, b, move, ctx.board.player)) continue;
       var eval = Dagaz.AI.eval(ctx.design, this.params, b, ctx.board.player);
       if ((mx < eval) && !isLoss(ctx, b, ctx.board.player)) {
           console.log("Move: " + move.toString() + ", eval = " + eval);
           mx = eval;
           ctx.best = move;
       }
  }
  if (!_.isUndefined(ctx.best)) {
      return {
           done: true,
           move: ctx.best,
           time: Date.now() - ctx.timestamp,
           ai:  "common"
      };
  }
  if (this.parent) {
      return this.parent.getMove(ctx);
  }
}

})();
