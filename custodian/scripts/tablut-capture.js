(function() {

Dagaz.Model.CROSS = [22, 38, 42, 58];
Dagaz.Model.CENTR = 40;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "tablut-capture") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (!move.isSimpleMove()) return;
      if (_.indexOf(Dagaz.Model.CROSS, move.actions[0][1][0]) < 0) return;
      var piece = board.getPiece(Dagaz.Model.CENTR);
      if (piece === null) return;
      var cnt = 0; var target = null;
      _.each(design.allDirections(), function(dir) {
          var p = design.navigate(1, Dagaz.Model.CENTR, dir);
          if (p === null) return;
          var x = board.getPiece(p);
          if (x === null) return;
          if (x.player == board.player) {
              cnt++;
          } else {
              target = p;
          }
      });
      if (target === null) return;
      if (cnt != 3) return;
      move.capturePiece(target);

  });
  CheckInvariants(board);
}

})();
