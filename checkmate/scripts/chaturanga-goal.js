(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "chaturanga-goal") {
      checkVersion(design, name, value);
  }
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var design = Dagaz.Model.design;
  var king   = design.getPieceType("Raja");
  var nf     = true;
  var ne     = true;
  var kings  = [];
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
          if (piece.type == king) {
              kings.push(piece.player);
          } else {
              if (piece.player == player) {
                  nf = false;
              } else {
                  ne = false;
              }
          }
      }
  });
  if (nf) return -1;
  if (ne) return 1;
  if (_.indexOf(kings, player) < 0) return -1;
  if (kings.length < 2) return 1;
  return checkGoals(design, board, player);
}

})();
