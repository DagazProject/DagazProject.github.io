(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "tibetian-checkers-check") {
     checkVersion(design, name, value);
  }
}

var isSimpleCapture = function(move) {
  if (move.actions.length != 2) return false;
  if (move.actions[0][0] === null) return false;
  if (move.actions[0][1] !== null) return false;
  if (move.actions[1][0] === null) return false;
  if (move.actions[1][1] === null) return false;
  return true;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var cnt = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.player != board.player) return;
      cnt++;
  });
  if ((cnt < 14) && (cnt > 3)) {
      _.each(board.moves, function(move) {
            if (!isSimpleCapture(move)) return;
            move.failed = true;
      });
  }
  CheckInvariants(board);
}

})();
