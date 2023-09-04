(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "evoluchess-goal") {
     checkVersion(design, name, value);
  }
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var f = board.reserve[0][player]; 
  var e = board.reserve[0][design.nextPlayer(player)];
  _.each(_.range(64), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.type > 0) return;
      if (piece.player != player) {
          e++;
      } else {
          f++;
      }
  });
  if (e < 1) return 1;
  if (f < 1) return -1;
  return checkGoals(design, board, player);
}

})();
