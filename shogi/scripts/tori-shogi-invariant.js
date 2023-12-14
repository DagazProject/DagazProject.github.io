(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "tori-shogi-invariant") {
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
  return isAttacked(design, board, player, king,  n, [0, 1, 2, 3, 7], [5, 6]) ||
         isAttacked(design, board, player, king,  s, [0, 3], [2]) ||
         isAttacked(design, board, player, king,  w, [0, 1, 2], []) ||
         isAttacked(design, board, player, king,  e, [0, 1, 2], []) ||
         isAttacked(design, board, player, king, nw, [0, 1, 3], [2]) ||
         isAttacked(design, board, player, king, ne, [0, 1, 3], [2]) ||
         isAttacked(design, board, player, king, sw, [0, 1, 2, 3, 4, 5], [6]) ||
         isAttacked(design, board, player, king, se, [0, 1, 2, 3, 4, 6], [5]) ||
         isRangeAttacked(design, board, player, king, sw,  2, [2]) ||
         isRangeAttacked(design, board, player, king, se,  2, [2]) ||
         isJumpAttacked(design, board, player, king,  n,  n, [4]) ||
         isJumpAttacked(design, board, player, king,  s,  s, [8]) ||
         isJumpAttacked(design, board, player, king, nw, nw, [8]) ||
         isJumpAttacked(design, board, player, king, ne, ne, [8]);
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
