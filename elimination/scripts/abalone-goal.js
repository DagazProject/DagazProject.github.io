(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "abalone-goal") {
     checkVersion(design, name, value);
  }
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  if (move.actions.length > 1) {
      var a = move.actions[move.actions.length - 1];
      if ((a[0] !== null) && (a[1] !== null)) {
          if (board.getPiece(a[1][0]) !== null) return 100;
      }
  }
  return 1;
}

var penalty = function(design, board, player, pos, dir) {
  var c = 1; var d = 0;
  var p = design.navigate(0, pos, dir);
  while (p !== null) {
      var piece = board.getPiece(p);
      if (piece !== null) {
          if (piece.player != player) return 0;
          if (c > 1) return 0;
          c++;
      }
      p = design.navigate(0, p, dir);
      d++;
  }
  p = design.navigate(player, pos, dir);
  while ((p !== null) && (c >= 0)) {
      var piece = board.getPiece(p);
      if (piece === null) break;
      if (piece.player == player) break;
      p = design.navigate(player, p, dir);
      c--;      
  }
  if (c >= 0) return 0;
  if (d > 0) d++;
  return 100 - (d * 10);
}

Dagaz.AI.eval = function(design, params, board, player) {
  var r = 0;
  _.each(design.allPositions(), function(pos) {
      if (design.inZone(0, player, pos)) return;
      var piece = board.getPiece(pos);
      if (piece !== null) {
          var v = 1000;
          _.each(design.allDirections(), function(dir) {
              v -= penalty(design, board, piece.player, pos, dir);
          });
          if (piece.player != player) v = -v;
          r += v;
      }
  });
  return r;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var enemies = 0; var friends = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.type == 1)) {
          if (piece.player != player) {
              enemies++;
          } else {
              friends++;
          }
      }
  });
  if (enemies > 5) {
      return -1;
  }
  if (friends > 5) {
      return 1;
  }
  return checkGoals(design, board, player);
}

})();
