(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "lion-extension") {
      checkVersion(design, name, value);
  }
}

var isLion = function(piece) {
  if (piece === null) return false;
  return (piece.type == 14) || (piece.type == 15);
}

var lionCaptured = function(board, move) {
  if (move.isSimpleMove()) {
      var pos = move.actions[0][0][0];
      var piece = board.getPiece(pos);
      if ((piece !== null) && !isLion(piece)) {
          pos = move.actions[0][1][0];
          piece = board.getPiece(pos);
          if ((piece !== null) && isLion(piece)) return pos;
      }
  }
  return null;
}

var badCapturing = function(board, move) {
  var pos = move.actions[0][1][0];
  var piece = board.getPiece(pos);
  if ((piece !== null) && (piece.type > 1)) return null;
  if ((move.actions.length > 1) && (move.actions[1][0] !== null) && (move.actions[1][1] !== null)) {
      pos = move.actions[1][1][0];
      piece = board.getPiece(pos);
      if (isLion(piece)) return pos;
  }
  return null;
}

var checkDirection = function(design, board, player, pos, dir, leapers, riders) {
  var p = design.navigate(player, pos, dir);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece !== null) {
      if (piece.player == player) return false;
      if (_.indexOf(leapers, +piece.type) >= 0) return true;
      if (_.indexOf(riders, +piece.type) >= 0) return true;
      return false;
  }
  p = design.navigate(player, p, dir);
  while (p !== null) {
      piece = board.getPiece(p);
      if (piece !== null) {
          if (piece.player == player) return false;
          return _.indexOf(riders, +piece.type) >= 0;
      }
      p = design.navigate(player, p, dir);
  }
  return false;
}

var checkJump = function(design, board, player, pos, o, d, leapers) {
  var p = design.navigate(player, pos, o);
  if (p === null) return false;
  p = design.navigate(player, p, d);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece === null) return false;
  if (piece.player == player) return false;
  return _.indexOf(leapers, +piece.type) >= 0;
}

var isAttacked = function(design, board, player, pos) {
  var n  = design.getDirection("n");  var w  = design.getDirection("w");
  var s  = design.getDirection("s");  var e  = design.getDirection("e");
  var nw = design.getDirection("nw"); var sw = design.getDirection("sw");
  var ne = design.getDirection("ne"); var se = design.getDirection("se");
  return checkDirection(design, board, player, pos,  n, [0, 1, 7, 10, 14, 15, 18, 19, 21, 23, 24, 29, 30, 32, 33, 34, 35, 36, 37], [4, 5, 6, 8, 11, 12, 13, 16, 17, 22, 25, 26, 27, 28]) ||
         checkDirection(design, board, player, pos,  e, [7, 14, 15, 18, 19, 21, 25, 26, 27, 29, 30, 31, 32, 34, 35], [4, 5, 6, 9, 10, 11, 16, 17, 23, 24]) ||
         checkDirection(design, board, player, pos,  w, [7, 14, 15, 18, 19, 21, 25, 26, 27, 29, 30, 31, 32, 34, 35], [4, 5, 6, 9, 10, 11, 16, 17, 23, 24]) ||
         checkDirection(design, board, player, pos,  s, [1, 14, 15, 18, 19, 21, 23, 24, 29, 30, 31, 33, 34, 35, 37], [4, 5, 6, 8, 9, 10, 11, 12, 13, 16, 17, 22, 25, 26, 27]) ||
         checkDirection(design, board, player, pos, nw, [7, 11, 14, 15, 16, 17, 20, 27, 31, 32, 33, 34, 35, 36, 37], [2, 3, 6, 8, 9, 10, 13, 18, 19]) ||
         checkDirection(design, board, player, pos, ne, [7, 11, 14, 15, 16, 17, 20, 27, 31, 32, 33, 34, 35, 36, 37], [2, 3, 6, 8, 9, 10, 13, 18, 19]) ||
         checkDirection(design, board, player, pos, sw, [7, 14, 15, 16, 17, 20, 27, 31, 32, 33, 36], [2, 3, 6, 8, 9, 10, 11, 12, 18, 19]) ||
         checkDirection(design, board, player, pos, se, [7, 14, 15, 16, 17, 20, 27, 31, 32, 33, 36], [2, 3, 6, 8, 9, 10, 11, 12, 18, 19]) ||
         checkJump(design, board, player, pos,  n, nw, [14, 15]) ||
         checkJump(design, board, player, pos,  n, ne, [14, 15]) ||
         checkJump(design, board, player, pos,  s, sw, [14, 15]) ||
         checkJump(design, board, player, pos,  s, se, [14, 15]) ||
         checkJump(design, board, player, pos,  w, nw, [14, 15]) ||
         checkJump(design, board, player, pos,  e, ne, [14, 15]) ||
         checkJump(design, board, player, pos,  w, sw, [14, 15]) ||
         checkJump(design, board, player, pos,  e, se, [14, 15]) ||
         checkJump(design, board, player, pos,  n,  n, [10, 14, 15, 20]) ||
         checkJump(design, board, player, pos,  e,  e, [14, 15, 20]) ||
         checkJump(design, board, player, pos,  w,  w, [14, 15, 20]) ||
         checkJump(design, board, player, pos,  s,  s, [14, 15, 20]) ||
         checkJump(design, board, player, pos, nw, nw, [11, 14, 15, 21]) ||
         checkJump(design, board, player, pos, ne, ne, [11, 14, 15, 21]) ||
         checkJump(design, board, player, pos, sw, sw, [14, 15, 21]) ||
         checkJump(design, board, player, pos, se, se, [14, 15, 21]);
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if ((move.actions.length > 0) && (move.actions[0][0] !== null) && (move.actions[0][1] !== null)) {
          var pos = null;
          var piece = board.getPiece(move.actions[0][0][0]);
          if (piece !== null) {
              if (isLion(piece)) {
                  pos = badCapturing(board, move);
              } else {
                  pos = lionCaptured(board, move);
                  if ((board.parent !== null) && !_.isUndefined(board.move)) {
                      var prev = lionCaptured(board.parent, board.move);
                      if ((prev === null) || (prev == pos)) {
                          pos = null;
                      }
                  }
              }
          }
          if (pos !== null) {
              if (isAttacked(design, board.apply(move), board.player, pos)) {
                  move.failed = true;
              }
          }
      }
  });
  CheckInvariants(board);
}

})();
