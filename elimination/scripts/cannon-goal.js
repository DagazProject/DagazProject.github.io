(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "cannon-goal") {
     checkVersion(design, name, value);
  }
}

var eval = Dagaz.AI.eval;

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var r = 1;
  _.each(move.actions, function(a) {
      if (a[0] !== null) {
          if (a[1] === null) {
              r++;
          } else {
              var piece = board.getPiece(a[1][0]);
              if ((piece != null) && (piece.player != board.player)) {
                  r++;
              }
          }
      }
  });
  return r;
}

Dagaz.AI.eval = function(design, params, board, player) {
  var r = eval(design, params, board, player);
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.type == 0)) {
          var v = 0;
          _.each(design.allDirections(), function(dir) {
               var p = design.navigate(piece.player, pos, dir);
               if (p === null) {
                   v--;
                   return;
               }
               var neighbor = board.getPiece(p);
               if (neighbor !== null) {
                   if ((neighbor.type == 1) && (neighbor.player != piece.player)) {
                        v += 1000;
                        return;
                   }
                   if (neighbor.player == piece.player) {
                        v++;
                   } else {
                        v--;
                   }
               }
          });
          if (piece.player != player) {
              v = -v;
          }
          r += v;
      }
  });
  return r;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var enemies = 0;
  var friends = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.type == 1)) {
          if (piece.player != player) {
              enemies++;
          } else {
              friends++;
          }
      }
  });
  if ((enemies < 1) && (board.reserve[1][design.nextPlayer(player)] == 0)) {
      return 1;
  }
  if ((friends < 1) && (board.reserve[1][player] == 0)) {
      return -1;
  }
  return checkGoals(design, board, player);
}

})();
