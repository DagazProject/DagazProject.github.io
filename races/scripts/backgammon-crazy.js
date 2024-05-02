(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "backgammon-crazy") {
      checkVersion(design, name, value);
  }
}

var isDouble = function(design, board, type) {
  var pos = design.navigate(board.player, 0, 0);
  while (pos !== null) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.player == board.player)) {
          if (piece.type == type) return true;
      }
      pos = design.navigate(board.player, pos, 0);
  }
  return false;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (board.turn == 20) {
          move.goTo(4);
          return;
      }
      if (board.turn == 26) {
          move.goTo(10);
          return;
      }
      if ((board.turn == 3) && (move.mode == 0)) {
          var dice = move.actions[0][2][0];          
          if (isDouble(design, board, dice.type)) {
              move.goTo(15);
              return;
          }
      }
      if ((board.turn == 9) && (move.mode == 0)) {
          var dice = move.actions[0][2][0];          
          if (isDouble(design, board, dice.type)) {
              move.goTo(21);
              return;
          }
      }
  });
  CheckInvariants(board);
}

})();
