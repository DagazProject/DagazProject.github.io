(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "animal-checkers-restrictions") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var f = false;
  _.each(board.moves, function(move) {
      if (!move.isSimpleMove()) return;
      var pos = move.actions[0][0][0];
      if (!design.inZone(0, board.player, pos)) return;
      f = true;
  });
  if (f) {
      _.each(board.moves, function(move) {
          if (!move.isSimpleMove()) return;
          var pos = move.actions[0][0][0];
          if (design.inZone(0, board.player, pos)) return;
          move.failed = true;
      });
  }
  CheckInvariants(board);
}

})();
