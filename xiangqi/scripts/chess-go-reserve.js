(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "chess-go-reserve") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.mode != 1) return;
      var piece = move.actions[0][2][0];
      if (piece.type == 4) {
          move.setReserve(5, board.player, 0);
      }
      if (piece.type == 5) {
          move.setReserve(4, board.player, 0);
      }
  });
  CheckInvariants(board);
}

})();
