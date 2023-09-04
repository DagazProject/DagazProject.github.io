(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "tawula-restrictions") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var moves  = [];
  _.each(board.moves, function(move) {
      if (!move.isSimpleMove()) return;
      var pos = design.navigate(board.player, move.actions[0][1][0], 8);
      if ((pos !== null) && design.inZone(11, board.player, pos)) {
          var piece = board.getPiece(pos);
          if ((piece !== null) && (piece.player == board.player)) {
              move.failed = true;
              return;
          }
      }
      pos = move.actions[0][0][0];
      if (!design.inZone(10, board.player, pos)) return;
      moves.push(move);
  });
  if (moves.length > 0) {
      board.moves = moves;
  }
  CheckInvariants(board);
}

})();
