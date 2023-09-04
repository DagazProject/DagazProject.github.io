(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "bolotoudou-restrictions") {
     checkVersion(design, name, value);
  }
}

Dagaz.Model.isLine = function(design, board, player, pos, dir, empty) {
  var p = design.navigate(player, pos, dir);
  if (p === null) return false;
  if (!_.isUndefined(empty) && (p == empty)) return false;
  var piece = board.getPiece(p);
  if (piece === null) return false;
  if (piece.player != player) return false;
  p = design.navigate(player, p, dir);
  if (p === null) return false;
  if (!_.isUndefined(empty) && (p == empty)) return false;
  piece = board.getPiece(p);
  if (piece === null) return false;
  return piece.player == player;
}

Dagaz.Model.isMiddle = function(design, board, player, pos, dir, empty) {
  var p = design.navigate(player, pos, dir);
  if (p === null) return false;
  if (!_.isUndefined(empty) && (p == empty)) return false;
  var piece = board.getPiece(p);
  if (piece === null) return false;
  if (piece.player != player) return false;
  p = design.navigate(0, pos, dir);
  if (p === null) return false;
  if (!_.isUndefined(empty) && (p == empty)) return false;
  piece = board.getPiece(p);
  if (piece === null) return false;
  return piece.player == player;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var n = design.getDirection("n"); var w = design.getDirection("w");
  var s = design.getDirection("s"); var e = design.getDirection("e");
  _.each(board.moves, function(move) {
      if (move.isDropMove()) {
          var pos = move.actions[0][1][0];
          if (Dagaz.Model.isLine(design,   board, board.player, pos, n) ||
              Dagaz.Model.isLine(design,   board, board.player, pos, w) ||
              Dagaz.Model.isLine(design,   board, board.player, pos, s) ||
              Dagaz.Model.isLine(design,   board, board.player, pos, e) ||
              Dagaz.Model.isMiddle(design, board, board.player, pos, n) ||
              Dagaz.Model.isMiddle(design, board, board.player, pos, w)) {
              move.failed = true;
          }
      }
  });
  CheckInvariants(board);
}

})();
