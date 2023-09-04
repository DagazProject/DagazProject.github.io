(function() {

Dagaz.AI.AI_FRAME = 1000;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "three-man-goal") {
     checkVersion(design, name, value);
  }
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  if (!_.isUndefined(board.move)) {
      if (board.move.mode > 0) {
          if (board.player == player) {
              return -1;
          } else {
              return 1;
          }
      }
  }
  return checkGoals(design, board, player);
}

})();
