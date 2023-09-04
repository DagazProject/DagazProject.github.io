(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "jacquet-extension") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var f = false;
  _.each(board.moves, function(move) {
      if (move.mode < 1) return;
      if (move.mode > 6) return;
      if (!_.isUndefined(move.failed)) return;
      if (move.actions[0][1] == null) return;
      var pos = move.actions[0][1][0];
      if (!design.inZone(3, board.player, pos)) return;
      f = true;
  });
  if (f) {
      _.each(board.moves, function(move) {
          if (move.mode < 1) return;
          if (move.mode > 6) return;
          if (!_.isUndefined(move.failed)) return;
          if (move.actions[0][1] == null) return;
          var pos = move.actions[0][1][0];
          if (design.inZone(3, board.player, pos)) return;
          move.failed = true;
      });
  }
  CheckInvariants(board);
}

})();
