(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "fighting-chess-invariant") {
      checkVersion(design, name, value);
  }
}

var changePieces = function(design, board, move) {
  _.each(move.actions, function(action) {
      if (action[0] === null) return;
      var piece = board.getPiece(action[0][0]);
      if (piece === null) return;
      if ((piece.type != 1) && (piece.type != 5)) return;
      piece = piece.setValue(0, true);
      action[2] = [ piece ];
  });
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.actions.length == 2) {
          _.each(move.actions, function(a) {
              if (a[0] === null) return;
              var piece = board.getPiece(a[0][0]);
              if (piece === null) return;
              if (piece.getValue(0) !== null) {
                  move.failed = true;
              }
          });
      }
      changePieces(design, board, move);
  });
  CheckInvariants(board);
}

})();
