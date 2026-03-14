(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "klin-zha-join") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.mode != 1) return;
      if (!move.isSimpleMove()) return;
      var dst = move.actions[0][1][0];
      var piece = board.getPiece(dst);
      if (piece === null) return;
      if (piece.player != board.player) return;
      if (piece.type > 0) return;
      piece = board.getPiece(move.actions[0][0][0]);
      move.actions[0][2] = [piece.promote(+piece.type + 1)];
      if (board.player == 1) {
          move.dropPiece(Dagaz.Model.stringToPos('Y5'), piece);
      } else {
          move.dropPiece(Dagaz.Model.stringToPos('G5'), piece);
      }
  });
  CheckInvariants(board);
}

})();
