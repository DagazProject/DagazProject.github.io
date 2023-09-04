(function() {

Dagaz.View.CLEAR_KO = true;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "alak-extension") {
     checkVersion(design, name, value);
  }
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  return move.actions.length;
}

var getPlayerDir = function(design, board, pos, dir) {
  var p = design.navigate(1, pos, dir);
  while (p !== null) {
      var piece = board.getPiece(p);
      if (piece !== null) return piece.player;
      p = design.navigate(1, p, dir);
  }
  return null;
}

var getPlayer = function(design, board, pos) {
  var piece = board.getPiece(pos);
  if (piece !== null) return piece.player;
  var e = getPlayerDir(design, board, pos, 0);
  var w = getPlayerDir(design, board, pos, 1);
  if (e === null) return w;
  if (w === null) return e;
  if (e != w) return null;
  return e;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  board.generate(design);
  if (board.moves.length == 0) {
      var f = 0; var e = 0;
      _.each(design.allPositions(), function(pos) {
          var p = getPlayer(design, board, pos);
          if (p === null) return;
          if (p == player) {
              f++;
          } else {
              e++;
          }
      });
      if (f > e) return 1;
      if (f < e) return -1;
      return 0;
  }
  return checkGoals(design, board, player);
}

var checkCapturing = function(design, board, player, pos, dir, move) {
  var capturing = [];
  var p = design.navigate(player, pos, dir);
  while (p !== null) {
      var piece = board.getPiece(p);
      if (piece === null) return;
      if (piece.player == player) break;
      capturing.push(p);
      p = design.navigate(player, p, dir);
  }
  _.each(capturing, function(p) {
      move.capturePiece(p);
  });
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.isDropMove()) {
          var pos = move.actions[0][1][0];
          checkCapturing(design, board, board.player, pos, 0, move);
          checkCapturing(design, board, board.player, pos, 1, move);
      }
  });
  CheckInvariants(board);
}

})();
