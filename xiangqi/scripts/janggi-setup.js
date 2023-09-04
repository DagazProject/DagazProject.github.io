(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "janggi-setup") {
     checkVersion(design, name, value);
  }
}

var checkDir = function(design, board, pos, dir, type) {
  var p = design.navigate(board.player, pos, dir);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece === null) return false;
  return piece.type == type;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design   = board.game.design;
  var w = design.getDirection("w"); var e = design.getDirection("e");
  _.each(board.moves, function(move) {
      if (move.isDropMove()) {
          var pos   = move.actions[0][1][0];
          var piece = move.actions[0][2][0];
          if (checkDir(design, board, pos, w, +piece.type) ||
              checkDir(design, board, pos, e, +piece.type)) {
              move.failed = true;
          }
      }
  });
  CheckInvariants(board);
}

})();
