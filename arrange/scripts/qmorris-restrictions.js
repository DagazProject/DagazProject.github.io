(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "qmorris-restrictions") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.mode == 5) {
          var pos = move.actions[0][0][0];
          var piece = board.getPiece(pos);
          if (piece !== null) {
              pos = design.navigate(board.player, move.actions[0][1][0], 9);
              while (pos !== null) {
                  pos = design.navigate(board.player, pos, 8);
                  if (pos !== null) {
                      var x = board.getPiece(pos);
                      if ((x !== null) && (x.type == piece.type) && (x.player == piece.player)) move.failed = true;
                  }
              }
          }
      }
  });
  CheckInvariants(board);
}

})();
