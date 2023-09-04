(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "short-assize-restriction") {
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

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var pos = Dagaz.Model.findPiece(design, board, board.player, 3);
  if (pos !== null) {
      var isBlack = design.inZone(2, board.player, pos);
      _.each(board.moves, function(move) {
          if (move.isDropMove()) {
              var pos   = move.actions[0][1][0];
              var piece = move.actions[0][2][0];
              if (piece.type == 3) {
                  if (design.inZone(2, board.player, pos)) {
                      if (isBlack) move.failed = true;
                  } else {
                      if (!isBlack) move.failed = true;
                  }
              }
          }
      });
  }
  CheckInvariants(board);
}

})();
