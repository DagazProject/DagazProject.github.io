(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "fangyuan-tiaoqi-goal") {
     checkVersion(design, name, value);
  }
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var f = true; var e = true;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (!design.inZone(0, piece.player, pos)) {
          if (piece.player == player) {
              f = false;
          } else{
              e = false;
          }
      }
  });
  if (f && e) return 0;
  if (e) return -1;
  return checkGoals(design, board, player);
}

})();
