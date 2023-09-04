(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "martian-goal") {
      checkVersion(design, name, value);
  }
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var r = 1;
  if (move.isSimpleMove()) {
      var pos = move.actions[0][1][0];
      var piece = board.getPiece(pos);
      if (piece !== null) {
          r += design.price[piece.type];
      }
  }
  return r;
}

Dagaz.AI.eval = function(design, params, board, player) {
  var a = board.getValue(1); if (a === null) a = 0;
  var b = board.getValue(0); if (b === null) b = 0;
  var r = a - b;
  if (player % 2 == 0) {
      return -r;
  } else {
      return r;
  }
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  board.generate(design);
  if (board.moves.length == 0) {
      var a = board.getValue(1); if (a === null) a = 0;
      var b = board.getValue(0); if (b === null) b = 0;
      if (a == b) return 0;
      if (player % 2 == 1) {
          if (a > b) {
              return 1;
          } else {
              return -1;
          }
      } else {
          if (b > a) {
              return 1;
          } else {
              return -1;
          }
      }
  }
  return checkGoals(design, board, player);
}

})();
