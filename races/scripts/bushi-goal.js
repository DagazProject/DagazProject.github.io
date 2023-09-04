(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "bushi-goal") {
     checkVersion(design, name, value);
  }
}

var price = 
  [   0, 100, 100, 100, 100, 100, 100, 100, 100, 100,
     80,  90,  90,  90,  90,  90,  90,  90,  90,  80,
     80,  80,  80,  80,  80,  80,  80,  80,  80,  80,
     70,  70,  70,  70,  70,  70,  70,  70,  70,  70,
     60,  60,  60,  60,  60,  60,  60,  60,  60,  60,
     50,  50,  50,  50,  50,  50,  50,  50,  50,  50,
     40,  40,  40,  40,  40,  40,  40,  40,  40,  40,
     30,  30,  30,  30,  30,  30,  30,  30,  30,  30,
     10,  20,  20,  20,  20,  20,  20,  20,  20,  10,
      0,  10,  10,  10,  10,  10,  10,  10,  10,   0 ];

Dagaz.AI.getPrice = function(player, pos) {
  if (pos >= 100) return 0;
  if (player == 1) {
      return price[pos];
  } else {
      return price[99 - pos];
  }
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var r = 1;
  var start = null; var end = null;
  _.each(move.actions, function(a) {
      if (a[0] === null) return;
      if (start === null) start = a[0][0];
      if (a[1] !== null) end = a[1][0];
  });
  if (start === null) return -1;
  if (end === null) return 1000;
  r += Dagaz.AI.getPrice(board.player, end) - Dagaz.AI.getPrice(board.player, start);
  if (move.mode == 3) r += 100;
  return r;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var e = 0; var f = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.player == player) {
          f++;
      } else {
          e++;
      }
  });
  if (f < 1) return 1;
  if (e < 1) return -1;
  return checkGoals(design, board, player);
}

})();
