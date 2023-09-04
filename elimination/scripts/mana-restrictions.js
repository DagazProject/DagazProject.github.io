(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "mana-restrictions") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.mode < 3) {
          var pos = move.actions[0][0][0];
          if (!design.inZone(move.mode, board.player, pos)) {
              move.failed = true;
          }
      }
  });
  CheckInvariants(board);
}

})();
