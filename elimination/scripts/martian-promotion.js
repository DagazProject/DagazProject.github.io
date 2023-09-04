(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "martian-promotion") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.mode == 1) {
          var t = move.actions[0][2][0].type;
          _.each(design.allPositions(), function(pos) {
              var piece = board.getPiece(pos);
              if (piece === null) return;
              if (piece.player != board.player) return;
              if (piece.type == t) {
                  move.failed = true;
              }
          });
      }
  });
  CheckInvariants(board);
}

})();
