(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "altai-shatra-drop") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (!move.isSimpleMove()) return;
      var pos = move.actions[0][0][0];
      var piece = board.getPiece(pos);
      if ((piece === null) || (piece.type != 0)) return;
      if (!design.inZone(1, board.player, pos)) return;
      var p = design.navigate(board.player, pos, 9);
      while (p !== null) {
          piece = board.getPiece(p);
          if ((piece !== null) && (piece.type == 0) && (piece.player == board.player)) {
              move.failed = true;
              return;
          }
          p = design.navigate(board.player, p, 9);
      }
  });
  CheckInvariants(board);
}

})();
