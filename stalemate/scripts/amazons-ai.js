(function() {

function Ai(params, parent) {
  this.params = params;
  this.parent = parent;
}

var findBot = Dagaz.AI.findBot;

Dagaz.AI.findBot = function(type, params, parent) {
  if (type == "common") {
      return new Ai(params, parent);
  } else {
      return findBot(type, params, parent);
  }
}

Dagaz.AI.eval = function(design, params, board, player) {
  var r = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.type == 0)) {
         _.each(design.allDirections(), function(dir) {
              var p = design.navigate(player, pos, dir);
              while (p !== null) {
                  if (board.getPiece(p) !== null) break;
                  if (piece.player == player) {
                      r++;
                  } else {
                      r--;
                  }
                  p = design.navigate(player, p, dir);
              }
         });
      }
  });
  return r;
}

Ai.prototype.setContext = function(ctx, board) {
  if (this.parent) {
      this.parent.setContext(ctx, board);
  }
  ctx.board     = board;
  ctx.timestamp = Date.now();
}

Ai.prototype.getMove = function(ctx) {
  ctx.board.moves = Dagaz.AI.generate(ctx, ctx.board);
  if (ctx.board.moves.length == 0) {
      return { done: true, ai: "nothing" };
  }
  if (ctx.board.moves.length == 1) {
      var r = {
           done: true,
           move: ctx.board.moves[0],
           time: Date.now() - ctx.timestamp,
           ai:  "once"
      };
      return r;
  }
  var best = null; var move = null;
  _.each(ctx.board.moves, function(m) {
      var b = ctx.board.apply(m);
      var e = Dagaz.AI.eval(ctx.design, this.params, b, ctx.board.player) * 10;
      e += _.random(0, 9);
      if ((best === null) || (best < e)) {
          best = e;
          move = m;
      }
  });
  if (move !== null) {
      console.log("Move: " + move + "; Eval = " + best);
      return {
           done: true,
           move: move,
           time: Date.now() - ctx.timestamp,
           ai:  "heuristic"
      };
  }
  if (this.parent) {
      return this.parent.getMove(ctx);
  }
}

})();
