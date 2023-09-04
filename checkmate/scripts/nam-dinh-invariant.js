(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "nam-dinh-invariant") {
      checkVersion(design, name, value);
  }
}

var findPiece = function(design, board, player, type) {
  var positions = design.allPositions();
  for (var i = 0; i < positions.length; i++) {
       var piece = board.getPiece(positions[i]);
       if ((piece !== null) && (piece.type == type) && (piece.player == player)) {
           return positions[i];
       }
  }
  return null;
}

var notSafe = function(design, board, player, king) {
  var pos = findPiece(design, board, player, king);
  if (pos === null) return true;
  var r = false;
  _.each(design.allDirections(), function(dir) {
      var p = design.navigate(player, pos, dir);
      if ((p !== null) && !r) {
          var enemy = board.getPiece(p);
          if ((enemy !== null) && (enemy.player != player)) {
              p = design.navigate(player, p, dir);
              if (p !== null) {
                  enemy = board.getPiece(p);
                  if ((enemy !== null) && (enemy.player != player) && (enemy.type == king)) {
                      r = true;
                  }
              }
          }
      }
  });
  return r;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var king   = design.getPieceType("King");
  _.chain(board.moves)
   .filter(function(move) {
       return move.actions.length > 0;
    })
   .each(function(move) {
       var b = board.apply(move);
       if (notSafe(design, b, board.player, king)) {
           move.failed = true;
       }
    });
  CheckInvariants(board);
}

})();
