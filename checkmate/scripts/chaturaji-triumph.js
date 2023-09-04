(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "chaturaji-triumph") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.mode != 2) return;
      var pos = move.actions[0][1][0];
      if (!design.inZone(2, board.player, pos)) return;
      var f = true;
      _.each(design.allPositions(), function(p) {
          if (p == pos) return;
          if (!design.inZone(2, board.player, p)) return;
          var piece = board.getPiece(p);
          if ((piece === null) || (piece.type != 6)) f = false;
      });
      if (f) {
          _.each(design.allPositions(), function(p) {
               if (!design.inZone(2, board.player, p)) return;
               move.capturePiece(p);
          });
          move.addValue(board.player - 1, 8);
      }
  });
  CheckInvariants(board);
}

})();
