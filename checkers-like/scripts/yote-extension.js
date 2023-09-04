(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "yote-extension") {
     checkVersion(design, name, value);
  }
}

var isDanger = function(design, board, pos, dir, empty) {
  var p = design.navigate(board.player, pos, dir);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if ((piece === null) || (piece.player == board.player)) return false;
  p = design.navigate(0, pos, dir);
  if (p === null) return false;
  if (!_.isUndefined(empty) && (p == empty)) return true;
  return board.getPiece(p) === null;
}

var isTarget = function(design, board, pos, dir) {
  var p = design.navigate(board.player, pos, dir);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if ((piece === null) || (piece.player == board.player)) return false;
  p = design.navigate(board.player, p, dir);
  if (p === null) return false;
  return board.getPiece(p) === null;
}

var isHelp = function(design, board, pos, dir, empty) {
  var p = design.navigate(board.player, pos, dir);
  if (p === null) return false;
  if (!_.isUndefined(empty) && (p == empty)) return false;
  var piece = board.getPiece(p);
  if ((piece === null) || (piece.player != board.player)) return false;
  p = design.navigate(board.player, p, dir);
  if (p === null) return false;
  piece = board.getPiece(p);
  if (piece === null) return false;
  return piece.player != board.player;
}

var isSafe = function(design, board, pos, dir) {
  var p = design.navigate(board.player, pos, dir);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if ((piece === null) || (piece.player != board.player)) return false;
  p = design.navigate(board.player, p, dir);
  if (p === null) return false;
  return board.getPiece(p) === null;
}

var isEnemy = function(design, board, pos, dir) {
  var p = design.navigate(board.player, pos, dir);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if ((piece === null) || (piece.player == board.player)) return false;
  p = design.navigate(board.player, p, dir);
  if (p === null) return false;
  piece = board.getPiece(p);
  if (piece === null) return false;
  return piece.player == board.player;
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var r = 0;
  _.each(move.actions, function(a) {
      if ((a[0] !== null) && (a[1] === null)) {
          var v = 10;
          var pos = a[0][0];
          for (var dir = 0; dir < design.dirs.length; dir++) {
              if (isHelp(design, board, pos, dir)) return -1;
              if (isSafe(design, board, pos, dir)) r += 10;
              if (isEnemy(design, board, pos, dir)) r += 5;
          }
          r += v;
      }
      if ((a[0] === null) && (a[1] !== null)) {
          var pos = a[1][0];
          for (var dir = 0; dir < design.dirs.length; dir++) {
              if (isDanger(design, board, pos, dir)) return -1;
              if (isTarget(design, board, pos, dir)) r += 10;
              if (isHelp(design, board, pos, dir)) r += 5;
          }
      }
  });
  if ((move.actions.length == 1) && (move.actions[0][0] !== null) && (move.actions[0][1] !== null)) {
      var empty = move.actions[0][0][0];
      var pos   = move.actions[0][1][0];
      for (var dir = 0; dir < design.dirs.length; dir++) {
          if (isDanger(design, board, pos, dir, empty)) return -1;
          if (isTarget(design, board, pos, dir)) r += 10;
          if (isHelp(design, board, pos, dir, empty)) r += 5;
      }
  }
  return r;
}

var isCapture = function(move) {
  if (move.actions.length != 2) return false;
  if (move.actions[0][0] === null) return false;
  if (move.actions[0][1] !== null) return false;
  if (move.actions[1][0] === null) return false;
  if (move.actions[1][1] === null) return false;
  return (move.actions[0][0][0] == move.actions[1][0][0]) &&
         (move.actions[1][0][0] == move.actions[1][1][0]);
}

var calcCaptured = function(board, player) {
  var r = 0;
  while (!_.isUndefined(board.move) && !_.isUndefined(board.parent) && (board.parent !== null)) {
      if (board.player == player) {
          if (isCapture(board.move)) {
              r--;
          } else {
              _.each(board.move.actions, function(a) {
                 if ((a[0] !== null) && (a[1] === null)) {
                     r++;
                 }
              });
              break;
          }
      }
      board = board.parent;
  }
  return r;
}

var calcPieces = function(design, board, player) {
  var r = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.player == player)) r++;
  });
  return r;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var disableCaptures = true;
  if (!_.isUndefined(board.move) && !_.isUndefined(board.parent) && (board.parent !== null)) {
      if ((board.move.actions.length > 1) || isCapture(board.move)) {
          var captured = calcCaptured(board, board.player);
          var count = calcPieces(design, board, board.player);
          if ((captured > 0) && (count > 0)) {
              _.each(board.moves, function(move) {
                  move.failed = true;
              });
              if (board.moves.length > 0) {
                  board.moves.push(Dagaz.Model.createMove(0));
              }
          }
      } else {
          if (board.move.isPass()) {
              _.each(board.moves, function(move) {
                  if (!isCapture(move)) {
                      move.failed = true;
                  }
              });
              disableCaptures = false;
          }
      }
      if (disableCaptures) {
          _.each(board.moves, function(move) {
              if (isCapture(move)) {
                  move.failed = true;
              }
          });
      }
  }
  CheckInvariants(board);
}

})();
