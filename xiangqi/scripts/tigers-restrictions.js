(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "tigers-restrictions") {
     checkVersion(design, name, value);
  }
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var f = 0; var e = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.type == 7)) {
          if (piece.player == player) {
              f++;
          } else {
              e++;
          }
      }
  });
  if (e == 0) return 1;
  if (f == 0) return -1;
  return checkGoals(design, board, player);
}

})();
