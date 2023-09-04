(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "ttc-goal") {
      checkVersion(design, name, value);
  }
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  if (board.parent !== null) {
      var c = 0;
      _.each(design.allPositions(), function(pos) {
          var player = board.parent.player;
          if (design.inZone(2, player, pos)) return;
          var piece = board.getPiece(pos);
          if ((piece === null) || (piece.player != player)) return;
          if ((piece.type == 5) || (piece.type == 11)) c++;
      });
      if (c == 0) return -1;
  }
  return checkGoals(design, board, player);
}

})();
