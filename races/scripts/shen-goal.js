(function() {

Dagaz.Model.passForcedDraw = false;

var start = [8, 9];
var bonus = [18, 19, 22, 23, 36, 37, 56, 57, 66];
var penalty = [26, 27, 46, 47];

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "shen-goal") {
     checkVersion(design, name, value);
  }
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var r = 10;
  if ((move.mode >= 1) && (move.mode <= 5)) {
       var pos = move.actions[0][0][0];
       if (_.indexOf(start, pos) >= 0) r += 5;
       pos = move.actions[0][1][0];
       if (_.indexOf(bonus, pos) >= 0) r += 10;
       if (_.indexOf(penalty, pos) >= 0) r -= 9;
  }
  return r;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var e = 0; var f = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
          if ((piece.player != player) && (piece.type == 2)) {
              e++;
          } else {
              f++;
          }
      }
  });
  if (e < 1) return 1;
  if (f < 1) return -1;
  return checkGoals(design, board, player);
}

})();
