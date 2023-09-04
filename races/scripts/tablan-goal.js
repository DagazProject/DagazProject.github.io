(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "tablan-goal") {
     checkVersion(design, name, value);
  }
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  if (move.mode == 1) return 10;
  if (move.isSimpleMove()) {
      var pos = move.actions[0][1][0];
      if (board.getPiece(pos) !== null) return 100;
  }
  return move.mode;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var tf = 0; var te = 0; var cf = 0; var ce = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (design.inZone(0, piece.player, pos)) {
          if (piece.player == player) {
              tf++;
          } else {
              te++;
          }
      } else {
          if (piece.player == player) {
             cf++;
          } else {
             ce++;
          }
      }
  });
  if ((cf == 0) || (ce == 0)) {
      if (tf >= te) {
          return 1;
      } else {
          return -1;
      }
  }
  return checkGoals(design, board, player);
}

})();
