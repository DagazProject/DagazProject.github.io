(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "sahkku-extension") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (!move.isSimpleMove()) return;
      var piece = board.getPiece(move.actions[0][0][0]);
      if (piece === null) return;
      if (piece.type != 5) return;
      var pos = design.navigate(board.player, move.actions[0][1][0], 6);
      while (pos !== null) {
          piece = board.getPiece(pos);
          if (piece !== null) {
              if (piece.type == 4) {
                  if (piece.player != board.player) {
                      piece = piece.changeOwner(board.player);
                      move.movePiece(pos, pos, piece);
                      move.sound = 11;
                  }
              } else {
                  move.capturePiece(pos);
              }
          }
          pos = design.navigate(board.player, pos, 6);
      }
  });
  CheckInvariants(board);
}

})();
