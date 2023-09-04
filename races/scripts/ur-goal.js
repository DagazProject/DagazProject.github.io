(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "ur-goal") {
     checkVersion(design, name, value);
  }
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  if (move.mode == 0) return 1;
  if (move.mode > 4)  return 1;
  var r = 100;
  var pos = move.actions[0][1][0];
  if (design.inZone(0, board.player, pos)) {
      if (!design.inZone(3, board.player, move.actions[0][0][0])) {
          r += 1000;
      } else {
          r += 300;
      }
  }
  if (design.inZone(5, board.player, pos)) r += 500;
  if (design.inZone(3, board.player, pos)) r += 400;
  var piece = board.getPiece(pos);
  if (piece !== null) {
      if (piece.type == 3) {
          r += 400;
      } else {
          r += 200;
      }
  }
  if (design.inZone(2, board.player, pos)) r += 100;
  var p = design.navigate(board.player, pos, 1);
  if (p !== null) {
      piece = board.getPiece(p);
      if ((piece !== null) && (piece.player != board.player)) r += 50;
      if (design.navigate(board.player, pos, 0) === null) r += 30;
  }
  if (design.navigate(board.player, pos, 0) !== null) r += 10;
  pos = move.actions[0][0][0];
  piece = board.getPiece(pos);
  if ((piece !== null) && (move.actions[0][2] !== null)) {
      if (move.actions[0][2][0].type != piece.type) r -= 10;
  }
  return r;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var e = 0; var f = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.type > 1)) {
          if (piece.player == player) {
              f++;
          } else {
              e++;
          }
      }
  });
  if (e < 1) return -1;
  if (f < 1) return 1;
  return checkGoals(design, board, player);
}

})();
