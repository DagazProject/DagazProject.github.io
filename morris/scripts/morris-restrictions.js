(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "morris-restrictions") {
     checkVersion(design, name, value);
  }
}

Dagaz.Model.isCapture = function(move) {
  if (move.actions.length != 2) return false;
  if (move.actions[0][0] === null) return false;
  if (move.actions[0][1] !== null) return false;
  if (move.actions[1][0] === null) return false;
  if (move.actions[1][1] === null) return false;
  return (move.actions[0][0][0] == move.actions[1][0][0]) &&
         (move.actions[1][0][0] == move.actions[1][1][0]);
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var dropsFound = false;
  _.each(board.moves, function(move) {
      if (move.isDropMove()) {
          dropsFound = true;
      }
  });
  if (dropsFound) {
      _.each(board.moves, function(move) {
          if (move.isSimpleMove()) {
              move.failed = true;
          }
      });
  } else {
      var cnt = 0;
      _.each(design.allPositions(), function(pos) {
          var piece = board.getPiece(pos);
          if ((piece !== null) && (piece.player == board.player)) {
              cnt++;
          }
      });
      if (cnt > 3) {
          _.each(board.moves, function(move) {
              if (move.mode == 1) {
                  move.failed = true;
              }
          });
      } else {
          _.each(board.moves, function(move) {
              if ((move.mode != 1) && !Dagaz.Model.isCapture(move)) {
                  move.failed = true;
              }
          });
      }
  }
  CheckInvariants(board);
}

})();
