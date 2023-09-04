(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "bushi-goal") {
     checkVersion(design, name, value);
  }
}

var price = [
  [   0, 100, 100, 100, 100, 100, 100, 100, 100,   0,
     80,  90,  90,  90,  90,  90,  90,  90,  90,  80,
     80,  80,  80,  80,  80,  80,  80,  80,  80,  80,
     70,  70,  70,  70,  70,  70,  70,  70,  70,  70,
     60,  60,  60,  60,  60,  60,  60,  60,  60,  60,
     50,  50,  50,  50,  50,  50,  50,  50,  50,  50,
     40,  40,  40,  40,  40,  40,  40,  40,  40,  40,
     30,  30,  30,  30,  30,  30,  30,  30,  30,  30,
     10,  20,  20,  20,  20,  20,  20,  20,  20,  10,
      0,  10,  10,  10,  10,  10,  10,  10,  10,   0 ],
  [   0,  10,  30,  40,  50,  60,  70,  80,  80,   0,
     10,  20,  30,  40,  50,  60,  70,  80,  90, 100,
     10,  20,  30,  40,  50,  60,  70,  80,  90, 100,
     10,  20,  30,  40,  50,  60,  70,  80,  90, 100,
     10,  20,  30,  40,  50,  60,  70,  80,  90, 100,
     10,  20,  30,  40,  50,  60,  70,  80,  90, 100,
     10,  20,  30,  40,  50,  60,  70,  80,  90, 100,
     10,  20,  30,  40,  50,  60,  70,  80,  90, 100,
     10,  20,  30,  40,  50,  60,  70,  80,  90, 100,
      0,  10,  30,  40,  50,  60,  70,  80,  80,   0 ],
  [   0,  10,  10,  10,  10,  10,  10,  10,  10,   0,
     10,  20,  20,  20,  20,  20,  20,  20,  20,  10,
     30,  30,  30,  30,  30,  30,  30,  30,  30,  30,
     40,  40,  40,  40,  40,  40,  40,  40,  40,  40,
     50,  50,  50,  50,  50,  50,  50,  50,  50,  50,
     60,  60,  60,  60,  60,  60,  60,  60,  60,  60,
     70,  70,  70,  70,  70,  70,  70,  70,  70,  70,
     80,  80,  80,  80,  80,  80,  80,  80,  80,  80,
     80,  90,  90,  90,  90,  90,  90,  90,  90,  80,
      0, 100, 100, 100, 100, 100, 100, 100, 100,   0 ],
  [   0,  80,  80,  70,  60,  50,  40,  30,  10,   0,
    100,  90,  80,  70,  60,  50,  40,  30,  20,  10,
    100,  90,  80,  70,  60,  50,  40,  30,  20,  10,
    100,  90,  80,  70,  60,  50,  40,  30,  20,  10,
    100,  90,  80,  70,  60,  50,  40,  30,  20,  10,
    100,  90,  80,  70,  60,  50,  40,  30,  20,  10,
    100,  90,  80,  70,  60,  50,  40,  30,  20,  10,
    100,  90,  80,  70,  60,  50,  40,  30,  20,  10,
    100,  90,  80,  70,  60,  50,  40,  30,  20,  10,
      0,  80,  80,  70,  60,  50,  40,  30,  10,   0 ],
];

Dagaz.AI.getPrice = function(player, pos) {
  if (pos >= 100) return 0;
  return price[player - 1][pos];
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
  var c = [0, 0];
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      c[(piece.player - 1) % 2]++;
  });
  if (c[(player - 1) % 2] < 1) return 1;
  if (c[player % 2] < 1) return -1;
  return checkGoals(design, board, player);
}

})();
