(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "abyss-goal") {
      checkVersion(design, name, value);
  }
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var design = Dagaz.Model.design;
  var king   = design.getPieceType("King");
  var kf = 0; var ke = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
          if (piece.type == king) {
              if (piece.player == player) {
                  kf++;
              } else {
                  ke++;
              }
          }
      }
  });
  if (kf < 1) return -1;
  if (ke < 1) return 1;
  return checkGoals(design, board, player);
}

})();
