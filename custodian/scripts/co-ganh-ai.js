(function() {

var price = [
     0,  0, 10,  0,  0,
     0, 20,  5, 20,  0,
    10,  5, 20,  5, 10,
     0, 20,  5, 20,  0,
     0,  0, 10,  0,  0 ];

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var r = 1;
  _.each(move.actions, function(a) {
      if (a[0] === null) return;
      if (a[1] === null) return;
      if (a[0] != a[1]) return;
      r++;
  });
  return r;
}

Dagaz.AI.eval = function(ai, design, board, player) {
  var r = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      var v = price[pos];
      if (piece.player == player) {
          r += v;
      } else {
          r -= v;
      }
  });
  return r;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var enemies = 0; var friends = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
          if (piece.player != player) {
              enemies++;
          } else {
              friends++;
          }
      }
  });
  if (enemies < 1) return 1;
  if (friends < 1) return -1;
  return checkGoals(design, board, player);
}

})();
