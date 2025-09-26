(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "hidari-shogi-drops") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.mode != 1) return;
      var pos = move.actions[0][0][0];
      _.each([3, 4], function(dir) {
          var p = design.navigate(board.player, pos, dir);
          if (p === null) return;
          if (board.getPiece(p) === null) return;
          move.capturePiece(p);
      });
  });
  CheckInvariants(board);
}

})();
