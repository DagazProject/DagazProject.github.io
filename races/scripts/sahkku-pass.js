(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "sahkku-pass") {
      checkVersion(design, name, value);
  }
}

var findPiece = function(design, board, type) {
  for (var pos = 3; pos < design.positions.length; pos++) {
       var piece = board.getPiece(pos);
       if ((piece !== null) && (piece.type == type)) return pos;
  }
  return null;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.mode != 5) return;
      var pos = move.actions[0][0][0];
      var piece = board.getPiece(pos);
      if (piece !== null) {
          var v = piece.getValue(0);
          if ((v !== null) && (v == 0)) {
              for (var p = 0; p < 3; p++) {
                   if (p != pos) {
                       piece = board.getPiece(p);
                       if (piece !== null) move.movePiece(p, p, piece.setValue(0, null));
                   }
              }
              var king = findPiece(design, board, 4);
              if (king !== null) {
                  p = design.navigate(board.player, king, 5);
                  while (p !== null) {
                      piece = board.getPiece(p);
                      if ((piece !== null) && (piece.player != board.player)) {
                          move.capturePiece(p);
                      }
                      p = design.navigate(board.player, p, 5);
                  }
              }
              _.each(design.allPositions(), function(p) {
                  var piece = board.getPiece(p);
                  if ((piece !== null) && (piece.type == 6)) move.capturePiece(p);
              });
              return;
          }
      }
      move.failed = true;
  });
  CheckInvariants(board);
}

})();
