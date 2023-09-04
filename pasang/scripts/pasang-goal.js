(function() {

Dagaz.AI.NOISE_FACTOR = 2;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "pasang-goal") {
      checkVersion(design, name, value);
  }
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var r = 0;
  _.each(move.actions, function(a) {
      if ((a[0] !== null) && (a[1] === null)) {
          var piece = board.getPiece(a[0][0]);
          if (piece !== null) {
              r += +piece.type;
          }
      }
  });
  return r;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var cnt = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.type > 0)) cnt++;
  });
  if (cnt == 0) {
      var x = board.getValue(1);
      var y = board.getValue(2);
      console.log("Score: player-1 = " + x + ", player-2 = " + y);
      if ((x !== null) && (y !== null)) {
          if (x == y) return 0;
          if (x > y) {
              if (player == 1) {
                  return 1;
              } else {
                  return -1;
              }
          } else {
              if (player == 1) {
                  return -1;
              } else {
                  return 1;
              }
          }
      }
  }
  return checkGoals(design, board, player);
}

})();
