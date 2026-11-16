(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name  != "ghost-extension") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      var f = false;
      if (!move.isSimpleMove()) return;
      var pos = move.actions[0][0][0];
      var p = design.navigate(board.player, pos, 8);
      if (p !== null) {
          var piece = board.getPiece(p);
          if ((piece !== null) && (piece.type >= 10)) {
              move.movePiece(p, p, piece.promote(+piece.type - 4));
              f = true;
          }
      }
      pos = move.actions[0][1][0];
      var p = design.navigate(board.player, pos, 8);
      if (p === null) return;
      piece = board.getPiece(p);
      console.log(piece);
      if ((piece !== null) && (piece.type >= 6) && (piece.type < 10)) {
          move.movePiece(p, p, piece.promote(+piece.type + 4));
          f = true;
      }
      if (f) {
          console.log(move);
      }
  });
  CheckInvariants(board);
}

})();
