(function() {

Dagaz.AI.AI_FRAME     = 1000;
Dagaz.AI.MAX_DEEP     = 8;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "gonu-extension") {
     checkVersion(design, name, value);
  }
}

Dagaz.AI.eval = function(design, params, board, player) {
  var r = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
          var v = 1;
          if (piece.player != player) {
              v = -v;
          }
          r += v;
      }
  });
  return r;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var enemies = 0;
  var friends = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
          if (piece.player != player) {
              enemies++;
          } else {
              friends++;
          }
      }
  });
  if (enemies < 2) {
      return 1;
  }
  if (friends < 2) {
      return -1;
  }
  return checkGoals(design, board, player);
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  return move.actions.length;
}

var checkNear = function(design, board, player, pos, dir, move) {
  var enemy = design.navigate(player, pos, dir);
  if (enemy === null) return;
  var piece = board.getPiece(enemy);
  if ((piece === null) || (piece.player == player)) return;
  var p = design.navigate(player, enemy, dir);
  while (p !== null) {
      if (board.getPiece(p) !== null) return;
      p = design.navigate(player, p, dir);
  }
  p = design.navigate(0, pos, dir);
  if (p === null) return;
  piece = board.getPiece(p);
  if ((piece === null) || (piece.player != player)) return;
  var p = design.navigate(0, p, dir);
  while (p !== null) {
      if (board.getPiece(p) !== null) return;
      p = design.navigate(0, p, dir);
  }
  move.capturePiece(enemy);
}

var checkFar = function(design, board, player, pos, dir, move) {
  var p = design.navigate(0, pos, dir);
  while (p !== null) {
      if (board.getPiece(p) !== null) return;
      p = design.navigate(0, p, dir);
  }
  p = design.navigate(player, pos, dir);
  if (p === null) return;
  piece = board.getPiece(p);
  if ((piece === null) || (piece.player != player)) return;
  var enemy = design.navigate(player, p, dir);
  if (enemy === null) return;
  var piece = board.getPiece(enemy);
  if ((piece === null) || (piece.player == player)) return;
  var p = design.navigate(player, enemy, dir);
  while (p !== null) {
      if (board.getPiece(p) !== null) return;
      p = design.navigate(player, p, dir);
  }
  move.capturePiece(enemy);
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      var b = board.apply(move);
       var pos = move.actions[0][1][0];
       _.each(design.allDirections(), function(dir) {
           checkNear(design, b, board.player, pos, dir, move);
           checkFar(design, b, board.player, pos, dir, move);
       });
  });
  CheckInvariants(board);
}

})();
