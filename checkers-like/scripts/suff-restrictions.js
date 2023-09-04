(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "suff-restrictions") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.mode <= 1) {
          var pos = move.actions[0][0][0];
          if (!design.inZone(1, board.player, pos) && !design.inZone(2, board.player, pos)) {
              move.failed = true;
              return;
          }
          var inGoal = design.inZone(3, board.player, pos);
          _.each(move.actions, function(a) {
              var pos = a[1][0];
              if (!design.inZone(1, board.player, pos) ||
                  (inGoal && !design.inZone(3, board.player, pos)) ||
                  design.inZone(3, design.nextPlayer(board.player), pos)) {
                  move.failed = true;
                  return;
              }
              inGoal = design.inZone(3, board.player, pos);
          });
      } else {
          if (design.inZone(2, board.player, move.actions[0][0][0]) && 
              design.inZone(2, board.player, move.actions[0][1][0])) {
              move.failed = true;
              return;
          }
      }
  });
  CheckInvariants(board);
}

})();
