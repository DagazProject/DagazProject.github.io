(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "shakti-invariant") {
      checkVersion(design, name, value);
  }
}

Dagaz.Model.findPiece = function(design, board, player, type) {
  var positions = design.allPositions();
  for (var i = 0; i < positions.length; i++) {
       var piece = board.getPiece(positions[i]);
       if ((piece !== null) && (piece.type == type) && (piece.player == player)) {
           return positions[i];
       }
  }
  return null;
}

var isChecked = function(design, board, player, pos) {
  if (pos === null) return false;
  var r = false;
  _.each(design.allDirections(), function(dir) {
      if (!r) {
          var p = design.navigate(player, pos, dir);
          while (p !== null) {
              var piece = board.getPiece(p);
              if ((piece !== null) && (piece.type != 0)) {
                  if ((piece.type == 2) && (piece.player != player)) r = true;
              }
              p = design.navigate(player, p, dir);
          }
      }
  });
  return r;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var pos = Dagaz.Model.findPiece(design, board, board.player, 1);
  if (isChecked(design, board, board.player, pos)) {
      _.each(board.moves, function(move) {
          if (move.mode == 1) {
              move.failed = true;
          }
      });
  }
  CheckInvariants(board);
}

})();
