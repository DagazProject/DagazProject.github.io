(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "banqi-extension") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = board.game.design;
  var player = board.getValue(board.player);
  if (player === null) {
      _.each(board.moves, function(move) {
          if (move.isSimpleMove()) {
              var pos = move.actions[0][0][0];
              var piece = board.getPiece(pos);
              move.setValue(board.player, piece.player);
              move.setValue(design.nextPlayer(board.player), design.nextPlayer(piece.player));
          }
      });
  } else {
      _.each(board.moves, function(move) {
          if ((move.actions.length > 0) && (move.actions[0][0] !== null) && (move.actions[0][1] !== null) && (move.actions[0][0][0] != move.actions[0][1][0])) {
               var pos = move.actions[0][0][0];
               var piece = board.getPiece(pos);
               if ((piece === null) || (piece.player != player)) {
                   move.failed = true;
               }
          }
      });
  }
  CheckInvariants(board);
}

})();
