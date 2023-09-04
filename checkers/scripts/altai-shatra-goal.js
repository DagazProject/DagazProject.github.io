(function() {

Dagaz.AI.AI_FRAME      = 2000;
Dagaz.AI.MIN_DEEP      = 1;
Dagaz.AI.MAX_DEEP      = 2;

var MAX_FORCED_FACTOR  = 1;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "altai-shatra-goal") {
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
              if ((piece.type == 0) && design.inZone(3, board.player, a[1][0])) r += 1000;
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

var getDirs = function(type) {
  return [0, 1, 2, 3, 4, 5, 6, 7];
}

Dagaz.AI.isForced = function(design, board, move) {
  if (_.isUndefined(move.isForced)) {
      move.isForced = false;
      var b = board.apply(move);
      var c = 0;
      _.each(design.allPositions(), function(pos) {
          var piece = b.getPiece(pos);
          if ((piece !== null) && (piece.type != 1) && (piece.player == b.player)) {
              _.each(getDirs(+piece.type), function(dir) {
                   var piece = b.getPiece(pos);
                   var p = design.navigate(b.player, pos, dir);
                   if (+piece.type >= 2) {
                       while (p !== null) {
                           if (b.getPiece(p) !== null) break;
                           p = design.navigate(b.player, p, dir);
                       }
                   }
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

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var kings = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.player != player)) {
          if (piece.type == 1) {
              kings++;
          }
      }
  });
  if (kings == 0) {
      return 1;
  } else {
      return checkGoals(design, board, player);
  }
}

})();
