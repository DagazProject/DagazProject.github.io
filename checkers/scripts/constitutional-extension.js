(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "constitutional-extension") {
      checkVersion(design, name, value);
  }
}

var isAttackedDir = function(design, board, player, pos, dir, opp) {
  var p = design.navigate(player, pos, opp);
  if (p === null) return false;
  if (board.getPiece(p) !== null) return false;
  p = design.navigate(player, pos, dir);
  while (p !== null) {
      var piece = board.getPiece(p);
      if (piece !== null) {
          if (piece.player == player) return false;
          return piece.type == 1;
      }
      p = design.navigate(player, p, dir);
  }
  return false;
}

var isAttacked = function(design, board, player, pos, step) {
  if (step == Dagaz.Model.WIDTH - 1) {
      return isAttackedDir(design, board, player, pos, 0, 3) ||
             isAttackedDir(design, board, player, pos, 3, 0);
  } else {
      return isAttackedDir(design, board, player, pos, 1, 2) ||
             isAttackedDir(design, board, player, pos, 2, 1);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var moves = [];
  _.each(board.moves, function(move) {
      if (move.actions.length == 1) {
          var start = move.actions[0][0][0];
          var piece = board.getPiece(start);
          if (piece === null) return;
          if (piece.type == 1) {
              var stop = move.actions[0][1][0];
              var d = Math.abs(stop - start);
              var step = Dagaz.Model.WIDTH - 1;
              if ((d % (Dagaz.Model.WIDTH + 1)) == 0) {
                  step = Dagaz.Model.WIDTH + 1;
              }
              if (stop < start) {
                  step = -step;
              }
              if (!isAttacked(design, board, board.player, stop, Math.abs(step))) {
                  for (var pos = start + step; pos != stop; pos += step) {
                       if (isAttacked(design, board, board.player, pos, Math.abs(step))) return;
                  }
              }
          }
      }
      moves.push(move);
  });
  board.moves = moves;
  CheckInvariants(board);
}

})();
