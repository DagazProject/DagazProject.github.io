(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "ur-restrictions") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.mode < 1) return;
      if (move.mode > 4) return;
      if (!_.isUndefined(move.failed)) return;
      var pos = move.actions[0][0][0];
      var p = design.navigate(board.player, pos, 0);
      if ((p !== null) && (board.getPiece(p) !== null)) {
          move.failed = true;
          return;
      }
      var piece = move.actions[0][2][0];
      pos = move.actions[0][1][0];
      var target = board.getPiece(pos);
      if (target !== null) {
          p = design.navigate(board.player, pos, 0);
          if (p !== null) {
              if (design.inZone(2, board.player, pos) && (target.player != board.player)) {
                  move.failed = true;
                  return;
              }
              while (p !== null) {
                  if (board.getPiece(p) === null) break;
                  p = design.navigate(board.player, p, 0);
              }
              if (p === null) {
                  move.failed = true;
                  return;
              }
              move.actions[0][1] = [p];
          } else {
              if ((target.player == board.player) || (piece.type != target.type)) {
                  move.failed = true;
                  return;
              }
              if (design.inZone(3, board.player, pos) && (target.type == 3)) {
                  move.failed = true;
                  return;
              }
          }
      }
      if (design.inZone(0, board.player, pos)) {
          move.capturePiece(pos);
      }
  });
  CheckInvariants(board);
}

})();
