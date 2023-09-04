(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "gog-goal") {
     checkVersion(design, name, value);
  }
}

Dagaz.AI.eval = function(design, params, board, player) {
  var r = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
          var v = design.price[piece.type];
          if (piece.type == 14) {
              for (var p = pos; p !== null; p = design.navigate(piece.player, p, 3)) {
                   v -= 10;
              }
          }
          if (piece.player != player) {
              v = -v;
          }
          r += v;
      }
  });
  return r;
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var r = 1;
  _.each(move.actions, function(a) {
      if ((a[0] !== null) && (a[1] !== null)) {
          var piece = board.getPiece(a[1][0]);
          if (piece !== null) {
              r += design.price[piece.type];
          }
      }
  });
  return r;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var r = 0; var c = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.type == 14) && (piece.player != player)) {
          if (design.inZone(1, player, pos)) {
              r = -1;
          }
          c++;
      }
  });
  if (c == 0) return 1;
  if (r < 0) return -1;
  return checkGoals(design, board, player);
}

})();
