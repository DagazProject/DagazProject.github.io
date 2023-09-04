(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "taacoca-invariant") {
      checkVersion(design, name, value);
  }
}

var isBadAction = function(board, move, action) {
  if ((action[0] === null) || (action[1] === null)) return true;
  var piece = board.getPiece(action[1][0]);
  if ((piece === null) || (piece.player != board.player)) return false;
  var r = true;
  _.each(move.actions, function(a) {
      if ((a[0] !== null) && (a[0][0] == action[1][0])) r = false;
  });
  return r;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      _.each(move.actions, function(action) {
          if (isBadAction(board, move, action)) {
              move.failed = true;
          }
      });
  });
  CheckInvariants(board);
}

})();
