(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "yonin-shogi-invariant") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var king = design.getPieceType("King");
  var f = true;
  _.each(design.allPositions(), function(pos) {
      if (f) {
         if (design.inZone(0, board.player, pos)) {
             var piece = board.getPiece(pos);
             if ((piece !== null) && (piece.player == board.player) && (piece.type == king)) f = false;
         }
      }
  });
  if (f) {
      _.each(board.moves, function(move) {
         if ((move.actions.length == 0) || (move.actions[0][0] === null)) {
             move.failed = true;
             return;
         }
         var pos = move.actions[0][0][0];
         if (design.inZone(0, board.player, pos)) {
             move.failed = true;
             return;
         }
         var piece = board.getPiece(pos);
         if ((piece === null) || (piece.type != king)) {
             move.failed = true;
         }
      });
  }
  CheckInvariants(board);
}

})();
