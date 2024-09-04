(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "dragon-eyes-goal") {
      checkVersion(design, name, value);
  }
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  board.generate(design);
  var c = 0;
  for (var i = 0; i < board.moves.length; i++) {
      if (board.moves[i].mode < 2) c++;
  }
  if (c == 0) {
      var e = 0; var f = 0;
      _.each(design.allPositions(), function(pos) {
          if (design.isKilledPos(pos)) return;
          if (!design.inZone(0, 1, pos)) return;
          var piece = board.getPiece(pos);
          if (piece !== null) {
              if (piece.player != player) {
                  e++;
              } else {
                  f++;
              }
          }
      });
      if (f < e) return -1;
      if (f == e) return 0;
      if (board.moves.length == 0) {
          if (f > e) return 1;
          return 0;
      }
  }
  return checkGoals(design, board, player);
}

})();
