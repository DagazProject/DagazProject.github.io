(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "qmorris-extension") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.mode == 4) {
          var pos = move.actions[0][0][0];
          var piece = board.getPiece(pos);
          pos = design.navigate(board.player, pos, 8);
          if ((piece !== null) && (pos !== null)) {
              piece = piece.promote(+piece.type + Dagaz.Model.PIECE_CNT);
              move.actions[0][2] = [piece];
              move.dropPiece(pos, piece);
          }
      }
  });
  CheckInvariants(board);
}

})();
