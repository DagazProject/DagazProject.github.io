(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "zertz-goal") {
     checkVersion(design, name, value);
  }
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var be = 0; var ge = 0; var we = 0;
  var bf = 0; var gf = 0; var wf = 0;
  for (var pos = 0; pos < design.positions.length; pos++) {
      var piece = board.getPiece(pos);
      if (piece === null) continue;
      if (design.inZone(2, piece.player, pos)) {
          if (piece.player == player) {
              bf++;
          } else {
              be++;
          }
      }
      if (design.inZone(3, piece.player, pos)) {
          if (piece.player == player) {
              gf++;
          } else {
              ge++;
          }
      }
      if (design.inZone(4, piece.player, pos)) {
          if (piece.player == player) {
              wf++;
          } else {
              we++;
          }
      }
  }
  if ((be == 3) && (ge == 3) && (we == 3)) return -1;
  if (be == 6) return -1;
  if (ge == 5) return -1;
  if (we == 4) return -1;
  if ((bf == 3) && (gf == 3) && (wf == 3)) return 1;
  if (bf == 6) return 1;
  if (gf == 5) return 1;
  if (wf == 4) return 1;
  return checkGoals(design, board, player);
}

})();
