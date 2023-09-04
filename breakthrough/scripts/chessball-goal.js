(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "chessball-goal") {
     checkVersion(design, name, value);
  }
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var ball = null;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.type == 0)) {
          ball = pos;
      }
  });
  if (ball !== null) {
      if (design.inZone(0, 1, ball)) {
          if (player == 1) {
              return 1;
          } else {
              return -1;
          }
      }
      if (design.inZone(0, 2, ball)) {
          if (player == 2) {
              return 1;
          } else {
              return -1;
          }
      }
  }
  return checkGoals(design, board, player);
}

})();
