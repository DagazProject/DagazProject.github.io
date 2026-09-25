(function() {

var is3d = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name = "resurrection-bishop") {
      is3d = value == "3d";
  } else {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.mode != 1) return;
      if (!move.isSimpleMove()) return;
      var pos = move.actions[0][0][0];
      var bishop = board.getPiece(pos);
      if (bishop === null) return;
      pos = move.actions[0][1][0];
      if (board.getPiece(pos) !== null) return;
      var p = design.navigate(board.player, pos, 8);
      if (p === null) return;
      var piece = board.getPiece(p);
      if (piece === null) return;
      if (piece.player != board.player) return;
      move.capturePiece(p);
      if (piece.type > 5) {
          piece = piece.promote(+piece.type - 5);
      }
      move.actions[0][2] = [piece];
      pos = move.actions[0][0][0];
      move.dropPiece(pos, bishop);
      move.sound = 16;
  });
  CheckInvariants(board);
}

})();
