(function() {

Dagaz.AI.AI_FRAME      = 2000;
Dagaz.AI.MIN_DEEP      = 6;

var MAX_FORCED_FACTOR  = 2;

var strictMode = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "checkers-10x10-extension") {
     checkVersion(design, name, value);
  }
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var r = 1;
  _.each(move.actions, function(a) {
      if (a[0] !== null) {
          if (a[1] !== null) {
              if (design.inZone(0, board.player, a[1][0])) r += 1000;
          } else {
              var piece = board.getPiece(a[0][0]);
              if (piece !== null) {
                  r += design.price[piece.type];
              }
          }
      }
  });
  return r;
}

Dagaz.AI.isForced = function(design, board, move) {
  if (_.isUndefined(move.isForced)) {
      move.isForced = false;
      var b = board.apply(move);
      var c = 0;
      _.each(design.allPositions(), function(pos) {
          var piece = b.getPiece(pos);
          if ((piece !== null) && (piece.type == 0) && (piece.player == b.player)) {
              _.each(design.allDirections(), function(dir) {
                   var p = design.navigate(b.player, pos, dir);
                   if (p !== null) {
                       piece = b.getPiece(p);
                       if ((piece !== null) && (piece.type == 0) && (piece.player != b.player)) {
                            p = design.navigate(b.player, p, dir);
                            if ((p !== null) && (b.getPiece(p) === null)) c++;
                       }
                   }
              });
          }
      });
      if ((c > 0) && (c <= MAX_FORCED_FACTOR)) {
          move.isForced = true;
      }
  }
  return move.isForced;
}

Dagaz.AI.getEval = function(design, board) {
  if (_.isUndefined(board.eval)) {
      board.eval = 0;
      _.each(design.allPositions(), function(pos) {
          var piece = board.getPiece(pos);
          if (piece !== null) {
              var v = design.price[piece.type];
              var bonus = 6;
              if (_.indexOf([70, 50, 30, 69, 49, 29, 19, 81, 99, 1], +pos) >= 0) {
                  bonus -= 3;
              }
              if (_.indexOf([90, 10, 89, 9], +pos) >= 0) {
                  bonus -= 4;
              }
              if (_.indexOf([79, 59, 39, 21, 41, 61, 92, 94, 96, 3, 5, 7], +pos) >= 0) {
                  bonus -= 2;
              }
              if ((piece.type == 1) && (_.indexOf([90, 81, 72, 63, 54, 45, 36, 27, 18, 9], +pos) >= 0)) {
                  bonus += 2;
              }
              v += bonus;
              if (!Dagaz.AI.isFriend(board.player, piece.player)) {
                  v = -v;
              }
              board.eval += v;
          }
      });
  }
  return board.eval;
}

Dagaz.AI.eval = function(design, params, board, player) {
  var r = Dagaz.AI.getEval(design, board);
  if (!Dagaz.AI.isFriend(player, board.player)) {
      r = -r;
  }
  return r;
}

})();
