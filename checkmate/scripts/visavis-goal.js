(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "visavis-goal") {
      checkVersion(design, name, value);
  }
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var king = design.getPieceType("King");
  var w = Dagaz.Model.findPiece(design, board, 1, king);
  if (w !== null) {
      var b = null;
      _.each(design.allDirections(), function(dir) {
          var p = design.navigate(1, w, dir);
          if (p === null) return;
          var piece = board.getPiece(p);
          if (piece === null) return;
          if (piece.type != king) return;
          b = p;
      });
      if (b !== null) {
          var g = 0;
          if (b < 32) {
              if (w < 32) g = 1;
          } else {
              if (w >= 32) g = -1;
          }
          if (player == 1) {
              return g;
          } else {
              return -g;
          }
      }
  }
  return checkGoals(design, board, player);
}

})();
