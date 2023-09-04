(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "wa-shogi-invariant") {
      checkVersion(design, name, value);
  }
}

var findKing = function(design, board, player, type) {
  for (var p = 0; p < design.positions.length; p++) {
       var piece = board.getPiece(p);
       if ((piece !== null) && (piece.player == player) && (piece.type == 0)) {
           return p;
       }
  }
  return null;
}

var isAttacked = function(design, board, player, pos, dir, leapers, riders) {
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

var isRangeAttacked = function(design, board, player, pos, dir,  n, leapers) {
  var p = design.navigate(player, pos, dir);
  if ((p === null) || (board.getPiece(p) !== null)) return false;
  if (n > 2) {
      p = design.navigate(player, p, dir);
      if ((p === null) || (board.getPiece(p) !== null)) return false;
  }
  p = design.navigate(player, p, dir);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece === null) return false;
  if (piece.player == player) return false;
  return _.indexOf(leapers, +piece.type) >= 0;
}

var isJumpAttacked = function(design, board, player, pos, o, d, leapers) {
  var p = design.navigate(player, pos, o);
  if (p === null) return false;
  p = design.navigate(player, p, d);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece === null) return false;
  if (piece.player == player) return false;
  return _.indexOf(leapers, +piece.type) >= 0;
}

var isKingAttacked = function(design, board, player, king) {
  var n  = design.getDirection("n");  var w  = design.getDirection("w");
  var s  = design.getDirection("s");  var e  = design.getDirection("e");
  var nw = design.getDirection("nw"); var sw = design.getDirection("sw");
  var ne = design.getDirection("ne"); var se = design.getDirection("se");
  return isAttacked(design, board, player, king,  n, [0, 1, 2, 3, 4, 5, 6, 8, 9, 11, 14, 15, 16, 17, 20, 21, 24, 25, 29, 30], [12, 13, 18, 19, 22, 23, 26, 27]) ||
         isAttacked(design, board, player, king,  s, [0, 2, 3, 6, 10, 11, 13, 14, 15, 20, 21, 22, 24, 29, 30], [18, 19, 23, 26, 27]) ||
         isAttacked(design, board, player, king,  w, [0, 2, 3, 7, 10, 18, 19, 23, 24, 25, 26, 29, 30], [14, 15, 27]) ||
         isAttacked(design, board, player, king,  e, [0, 2, 3, 7, 10, 18, 19, 23, 24, 25, 26, 29, 30], [14, 15, 27]) ||
         isAttacked(design, board, player, king, nw, [0, 2, 3, 4, 5, 6, 7, 10, 11, 18, 19, 20, 21, 22, 24, 25, 26, 29, 30], [16, 17, 23]) ||
         isAttacked(design, board, player, king, ne, [0, 2, 3, 4, 5, 6, 7, 10, 11, 18, 19, 20, 21, 22, 24, 25, 26, 29, 30], [16, 17, 23]) ||
         isAttacked(design, board, player, king, sw, [0, 4, 5, 8, 9, 18, 19, 20, 21, 22, 24, 25, 29], [16, 17, 23]) ||
         isAttacked(design, board, player, king, se, [0, 4, 5, 8, 9, 18, 19, 20, 21, 22, 24, 25, 29], [16, 17, 23]) ||
         isRangeAttacked(design, board, player, king,  s,  2, [13]) ||
         isRangeAttacked(design, board, player, king, nw,  2, [18, 19]) ||
         isRangeAttacked(design, board, player, king, ne,  2, [18, 19]) ||
         isRangeAttacked(design, board, player, king, nw,  3, [18, 19]) ||
         isRangeAttacked(design, board, player, king, ne,  3, [18, 19]) ||
         isJumpAttacked(design, board, player, king,  n,  n, [20, 21]) ||
         isJumpAttacked(design, board, player, king,  s,  s, [20, 21]) ||
         isJumpAttacked(design, board, player, king, nw, nw, [20, 21]) ||
         isJumpAttacked(design, board, player, king, ne, ne, [20, 21]) ||
         isJumpAttacked(design, board, player, king, sw, sw, [20, 21]) ||
         isJumpAttacked(design, board, player, king, se, se, [20, 21]) ||
         isJumpAttacked(design, board, player, king,  n, nw, [28]) ||
         isJumpAttacked(design, board, player, king,  n, ne, [28]) ||
         isJumpAttacked(design, board, player, king,  s, sw, [28]) ||
         isJumpAttacked(design, board, player, king,  s, se, [28]);
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var design = Dagaz.Model.design;
  board.generate(design);
  if (board.moves.length == 0) {
      var king = findKing(design, board, board.player);
      if (king === null) return 1;
      if (isKingAttacked(design, board, board.player, king)) {
          return 1;
      } else {
          return 0;
      }
  }
  return checkGoals(design, board, player);
}


var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var n  = design.getDirection("n");  var w  = design.getDirection("w");
  var s  = design.getDirection("s");  var e  = design.getDirection("e");
  var nw = design.getDirection("nw"); var sw = design.getDirection("sw");
  var ne = design.getDirection("ne"); var se = design.getDirection("se");
  _.each(board.moves, function(move) {
      if ((move.actions.length > 0) && (move.actions[0][0] !== null)) {
          var b = board.apply(move);
          var king = findKing(design, b, board.player);
          if (king === null) {
              move.failed = true;
              return;
          }
          if (isKingAttacked(design, board.apply(move), board.player, king)) {
              move.failed = true;
          }
      }
  });
  CheckInvariants(board);
}

})();
