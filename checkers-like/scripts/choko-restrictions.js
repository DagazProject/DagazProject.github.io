(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "choko-restrictions") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var player = board.getValue(0);
  if (player === null) {
      player = 1;
  }
  var isDrop = false;
  if (!_.isUndefined(board.move)) {
      _.each(board.moves, function(move) {
          if (move.failed) return;
          if (move.isDropMove()) {
              isDrop = true;
          }
      });
  }
  if (isDrop) {
      _.each(board.moves, function(move) {
          if (!move.isDropMove() && board.move.isDropMove()) {
              if (board.player == player) {
                  move.setValue(0, design.nextPlayer(player));
              } else {
                  move.failed = true;
              }
          }
      });
  }
  CheckInvariants(board);
}

})();
