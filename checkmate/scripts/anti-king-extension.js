(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "anti-king-extension") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var anti   = design.getPieceType("AntiKing");
  _.each(board.moves, function(move) {
      if (move.isSimpleMove()) {
          var pos = move.actions[0][1][0];
          var piece = board.getPiece(pos);
          if ((piece !== null) && (piece.type == anti)) {
              move.failed = true;
              return;
          }
          if (move.mode == 1) {
              pos = move.actions[0][0][0];
              piece = board.getPiece(pos);
              if (piece.getValue(0)) {
                  move.failed = true;
              }
          }
      }
  });
  CheckInvariants(board);
}

})();
