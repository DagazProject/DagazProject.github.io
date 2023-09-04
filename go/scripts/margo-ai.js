(function() {

Dagaz.AI.AI_FRAME     = 1000;
Dagaz.AI.NOISE_FACTOR = 100;

Dagaz.Model.WIDTH  = 9;
Dagaz.Model.HEIGHT = 9;

var price =
  [   0, 100, 100, 100, 100, 100, 100, 100,   0,
    100, 150, 200, 200, 200, 200, 200, 150, 100,
    100, 200, 400, 400, 400, 400, 400, 200, 100,
    100, 200, 400, 500, 500, 500, 400, 200, 100,
    100, 200, 400, 500, 700, 500, 400, 200, 100,
    100, 200, 400, 500, 500, 500, 400, 200, 100,
    100, 200, 400, 400, 400, 400, 400, 200, 100,
    100, 150, 200, 200, 200, 200, 200, 150, 100,
      0, 100, 100, 100, 100, 100, 100, 100,   0 ];

function Ai(parent) {
  this.parent = parent;
}

var findBot = Dagaz.AI.findBot;

Dagaz.AI.findBot = function(type, params, parent) {
  if ((type == "fast") || (type == "opening")) {
      return new Ai(parent);
  } else {
      return findBot(type, params, parent);
  }
}

Dagaz.AI.getPrice = function(design, piece, pos) {
  if (pos > 80) return 0;
  return price[pos];
}

var getPattern = function(board, x, y) {
  if ((x < 0) || (x >= Dagaz.Model.WIDTH))  return " ";
  if ((y < 0) || (y >= Dagaz.Model.HEIGHT)) return " ";
  var pos = y * Dagaz.Model.WIDTH + x;
  var piece = board.getPiece(pos);
  if (piece === null) return "0";
  var v = +piece.getValue(0);
  if (piece.player == board.player) {
      if (v === null) return "x";
      if (v == 1) return "a";
      if (v == 2) return "b";
      if (v == 3) return "c";
      if (v == 4) return "d";
      return "x";
  } else {
      if (v === null) return "X";
      if (v == 1) return "A";
      if (v == 2) return "B";
      if (v == 3) return "C";
      if (v == 4) return "D";
      return "X";
  }
}

var findPattern = function(pattern) {
  for (var i = 0; i < Dagaz.AI.Patterns.length; i++) {
      var result = pattern.match(Dagaz.AI.Patterns[i].re);
      if (result) {
          return Dagaz.AI.Patterns[i].price;
      }
  }
  return null;
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var r = 0;
  var cnt = _.chain(board.pieces).compact().size().value();
  if (cnt == 0) {
      var pos = move.actions[0][1][0];
      if (pos == 40) {
          return 1;
      }
      return -1;
  }
  if ((move.actions.length > 0) && (move.actions[0][1] !== null)) {
      var p   = "";
      var f   = true;
      var pos = move.actions[0][1][0];
      var x   = Dagaz.Model.getX(pos);
      var y   = Dagaz.Model.getY(pos);
      for (var j = y - 2; j <= y + 2; j++) {
          for (var i = x - 2; i <= x + 2; i++) {
              var c = getPattern(board, i, j);
              if ((c !== " ") && (c !== "0")) f = false;
              p = p + c;
          }
      }
      if (f) return -1;
      v = findPattern(p);
      if (v !== null) r = v;
  }
  return r;
}

Dagaz.AI.see = function(design, board, move) {
  if (move.actions.length > 0) {
      var pos = move.actions[0][1][0];
      for (var dir = 0; dir < design.dirs.length; dir++) {
           var p = design.navigate(board.player, pos, dir);
           if (p !== null) {
               var piece = board.getPiece(p);
               if (piece !== null) {
                   var v = piece.getValue(0);
                   if ((v !== null) && (v == 1)) return true;
               }
           }
      }
  }
  return false;
}

var getEval = function(groups, player) {
  var d = null; var e = 0;
  _.each(groups, function(g) {
      if (g.player != player) return;
      if ((d === null) || (d > g.dame)) {
           d = g.dame;
           e = g.price;
      }
  });
  if (d === null) return 0;
  return e + 1000 * d;
}

Dagaz.AI.eval = function(design, params, board, player) {
  var done = []; var groups = [];
  _.each(design.allPositions(), function(pos) {
      if (_.indexOf(done, pos) >= 0) return;
      var piece = board.getPiece(pos);
      if (piece === null) return;
      var e = null; var d = []; var c = 0;
      var group = [ pos ];
      for (var i = 0; i < group.length; i++) {
          if ((e === null) || (e > price[group[i]])) {
               e = price[group[i]];
          }
          _.each(design.allDirections(), function(dir) {
               var p = design.navigate(player, group[i], dir);
               if (p === null) return;
               if (_.indexOf(done, p) >= 0) return;
               var x = board.getPiece(p);
               if (x === null) {
                   if (_.indexOf(d, p) < 0) d.push(p);
                   return;
               }
               if (x.player != piece.player) return;
               group.push(p);
               done.push(p);
               c++;
          });
      }
      groups.push({
          player: piece.player,
          dame:   d.length,
          price:  e,
          count:  c
      });
  });
  return getEval(groups, player) - 
         getEval(groups, design.nextPlayer(player));
}

var isAtari = function(design, board, pos, player) {
  var r = false;
  _.each(design.allDirections(), function(dir) {
      var p = design.navigate(player, pos, dir);
      if (p === null) return;
      var piece = board.getPiece(p);
      if (piece === null) return;
      if (piece.player != player) return;
      var v = piece.getValue(0);
      if (v === null) return;
      if (v == 1) r = true;
  });
  return r;
}

var checkAdjust = function(design, board, player, pos, a, b) {
  var p = design.navigate(player, pos, a);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if ((piece !== null) && (piece.player != player)) return true;
  p = design.navigate(player, p, b);
  if (p === null) return false;
  var piece = board.getPiece(p);
  return (piece !== null) && (piece.player != player);
}

var isDoubleAtari = function(design, board, pos) {
  var piece = board.getPiece(pos);
  if (piece === null) return false;
  var v = piece.getValue(0);
  if (v === null) return false;
  if (v > 1) return false;
  for (var dir = 0; dir < design.dirs.length; dir++) {
       var p = design.navigate(board.player, pos, dir);
       if (p === null) continue;
       if (board.getPiece(p) === null) return true;
  }
  return false;
}

var isDeathAtari = function(design, board, pos) {
  if (!design.inZone(0, board.player, pos)) return false;
  var piece = board.getPiece(pos);
  if (piece === null) return false;
  var v = piece.getValue(0);
  if (v === null) return false;
  if (v > 1) return false;
  for (var dir = 0; dir < design.dirs.length; dir++) {
       var p = design.navigate(board.player, pos, dir);
       if (p === null) continue;
       if (board.getPiece(p) !== null) continue;
       p = design.navigate(board.player, p, dir);
       if (p === null) return true;
  }
  return false;
}

Ai.prototype.setContext = function(ctx, board) {
  if (this.parent) {
      this.parent.setContext(ctx, board);
  }
  ctx.board = board;
  ctx.timestamp = Date.now();
}

Ai.prototype.getMove = function(ctx) {
  ctx.board.moves = Dagaz.AI.generate(ctx, ctx.board);
  if (ctx.board.moves.length > 0) {
      for (var i = 0; i < ctx.board.moves.length; i++) {
           var m = ctx.board.moves[i];
           if (m.actions.length > 0) {
               var pos = m.actions[0][1][0];
               if (isAtari(ctx.design, ctx.board, pos, ctx.design.nextPlayer(ctx.board.player))) {
                   return {
                      done: true,
                      move: m,
                      time: Date.now() - ctx.timestamp,
                      ai:  "fast"
                   };
               }
           }
      }
      for (var i = 0; i < ctx.board.moves.length; i++) {
           var m = ctx.board.moves[i];
           if (m.actions.length > 0) {
               var pos = m.actions[0][1][0];
               if (isAtari(ctx.design, ctx.board, pos, ctx.board.player)) {
                   return {
                      done: true,
                      move: m,
                      time: Date.now() - ctx.timestamp,
                      ai:  "fast"
                   };
               }
           }
      }
  }
  var best = null;
  _.each(ctx.board.moves, function(move) {
      var b = ctx.board.apply(move);
      var cnt = 0;
      _.each(ctx.design.allPositions(), function(pos) {
          var piece = b.getPiece(pos);
          if (piece === null) return;
          if (piece.player == ctx.board.player) return;
          if (isDeathAtari(ctx.design, b, pos)) {
              best = move;
              return;
          }
          if (isDoubleAtari(ctx.design, b, pos)) cnt++;
      });
      if (cnt > 1) {
          best = move;
          return;
      }
  });
  if (best !== null) {
      return {
         done: true,
         move: best,
         time: Date.now() - ctx.timestamp,
         ai:  "best"
      };
  }
  if ((ctx.board.parent !== null) && (ctx.board.parent.parent === null)) {
      var moves = [];
      _.each(ctx.board.moves, function(move) {
          if (!move.isDropMove()) return;
          var pos = move.actions[0][1][0];
          if (checkAdjust(ctx.design, ctx.board, ctx.board.player, pos, 0, 3) || // w, n
              checkAdjust(ctx.design, ctx.board, ctx.board.player, pos, 3, 1) || // n, e
              checkAdjust(ctx.design, ctx.board, ctx.board.player, pos, 1, 2) || // n, s
              checkAdjust(ctx.design, ctx.board, ctx.board.player, pos, 2, 0)) { // s, w
              moves.push(move);
          }
      });
      if (moves.length > 0) {
          ctx.board.moves = moves;
      }
  }
  if (this.parent) {
      return this.parent.getMove(ctx);
  }
}

})();
