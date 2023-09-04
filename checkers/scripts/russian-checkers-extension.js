(function() {

Dagaz.AI.AI_FRAME      = 2000;
Dagaz.AI.MIN_DEEP      = 6;

var MAX_FORCED_FACTOR  = 2;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "russian-checkers-extension") {
     checkVersion(design, name, value);
  }
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var r = 1;
  var piece = null;
  _.each(move.actions, function(a) {
      if (a[0] !== null) {
          if (piece === null) {
              piece = board.getPiece(a[0][0]);
          }
          if (a[1] !== null) {
              if ((piece.type == 0) && design.inZone(0, board.player, a[1][0])) r += 1000;
          } else {
              var target = board.getPiece(a[0][0]);
              if (target !== null) {
                  r += design.price[target.type];
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
              if (_.indexOf([1, 23, 24, 39, 40, 62], +pos) >= 0) {
                  bonus -= 3;
              }
              if (_.indexOf([7, 8, 55, 56], +pos) >= 0) {
                  bonus -= 4;
              }
              if (_.indexOf([3, 5, 17, 46, 58, 60], +pos) >= 0) {
                  bonus -= 2;
              }
              if (design.inZone(1, board.player, pos)) {
                  bonus += 4;
              } 
              if ((piece.type == 1) && (_.indexOf([7, 14, 21, 28, 35, 42, 49, 56], +pos) >= 0)) {
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
