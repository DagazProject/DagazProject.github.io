(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "fighting-chess-pass") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      var pos = 64 + board.turn;
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (move.mode == 0) {
          move.capturePiece(pos);
      }
      pos = 64 + design.nextTurn(board);      
      move.dropPiece(pos, piece.changeOwner(design.nextPlayer(board.player)));
      if ((move.actions[0][0] !== null) && (move.actions[0][1] !== null)) {
          move.setLast(move.actions[0][0][0], move.actions[0][1][0]);
      }
  });
  CheckInvariants(board);
}

})();
