(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "jasir-goal") {
     checkVersion(design, name, value);
  }
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var ea = 0; var eg = 0; var es = 0;
  var fa = 0; var fg = 0; var fs = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
          if (piece.player != player) {
              ea++;
              if (design.inZone(0, piece.player, pos)) es++;
              if (design.inZone(1, piece.player, pos)) {
                  eg++;
                  es++;
              }
          } else {
              fa++;
              if (design.inZone(0, piece.player, pos)) fs++;
              if (design.inZone(1, piece.player, pos)) {
                  fg++;
                  fs++;
              }
          }
      }
  });
  if ((ea == eg) || (fa == fg)) {
      if (es == fs) return 0;
      if (fs > es) {
          return 1;
      } else {
          return -1;
      }
  }
  return checkGoals(design, board, player);
}

})();
