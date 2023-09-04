(function() {

var checkDirection = true;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "neutral-king-invariant") {
      checkVersion(design, name, value);
  }
}

var findKing = function(design, board) {
  var positions = design.allPositions();
  for (var i = 0; i < positions.length; i++) {
       var piece = board.getPiece(positions[i]);
       if ((piece !== null) && (piece.player == 3)) {
           return positions[i];
       }
  }
  return null;
}

var checkDirection = function(design, board, player, pos, dir, leapers, riders, owner) {
  var p = design.navigate(1, pos, dir);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece !== null) {
      if (!_.isUndefined(player)) {
          if (piece.player != player) return false;
      }
      if (!_.isUndefined(owner) && (piece.type == 0)) {
          if (piece.player == owner) return false;
      }
      return (_.indexOf(leapers, +piece.type) >= 0) || (_.indexOf(riders, +piece.type) >= 0);
  }
  while (piece === null) {
      p = design.navigate(1, p, dir);
      if (p === null) return false;
      piece = board.getPiece(p);
  }
  if (!_.isUndefined(player)) {
      if (piece.player != player) return false;
  }
  return _.indexOf(riders, +piece.type) >= 0;
}

var checkLeap = function(design, board, player, pos, o, d, knight) {
  var p = design.navigate(1, pos, o);
  if (p === null) return false;
  p = design.navigate(1, p, d);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece === null) return false;
  if (!_.isUndefined(player)) {
      if (piece.player != player) return false;
  }
  return (piece.type == knight);
}

var isAttacked = function(design, board, pos, player) {
  var pawn   = design.getPieceType("Pawn");
  var rook   = design.getPieceType("Rook");
  var knight = design.getPieceType("Knight");
  var bishop = design.getPieceType("Bishop");
  var n  = design.getDirection("n");  var w  = design.getDirection("w");
  var s  = design.getDirection("s");  var e  = design.getDirection("e");
  var nw = design.getDirection("nw"); var sw = design.getDirection("sw");
  var ne = design.getDirection("ne"); var se = design.getDirection("se");
  if (checkDirection(design, board, player, pos, n, [], [rook])) return true;
  if (checkDirection(design, board, player, pos, s,  [], [rook])) return true;
  if (checkDirection(design, board, player, pos, w,  [], [rook])) return true;
  if (checkDirection(design, board, player, pos, e,  [], [rook])) return true;
  if (checkDirection(design, board, player, pos, nw, [pawn], [bishop], 1)) return true;
  if (checkDirection(design, board, player, pos, ne, [pawn], [bishop], 1)) return true;
  if (checkDirection(design, board, player, pos, sw, [pawn], [bishop], 2)) return true;
  if (checkDirection(design, board, player, pos, se, [pawn], [bishop], 2)) return true;
  if (checkLeap(design, board, player, pos, n, nw, knight)) return true;
  if (checkLeap(design, board, player, pos, n, ne, knight)) return true;
  if (checkLeap(design, board, player, pos, s, sw, knight)) return true;
  if (checkLeap(design, board, player, pos, s, se, knight)) return true;
  if (checkLeap(design, board, player, pos, w, nw, knight)) return true;
  if (checkLeap(design, board, player, pos, w, sw, knight)) return true;
  if (checkLeap(design, board, player, pos, e, ne, knight)) return true;
  if (checkLeap(design, board, player, pos, e, se, knight)) return true;
  return false;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  board.generate(design);
  if (board.moves.length == 0) {
      var pos = findKing(design, board);
      if (pos === null) return 1;
      if (isAttacked(design, board, pos)) {
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
  _.each(board.moves, function(move) {
      if (move.isSimpleMove()) {
          var pos = move.actions[0][0][0];
          var piece = board.getPiece(pos);
          if (piece !== null) {
              var b = board.apply(move);
              if (piece.player == 3) {
                  if (checkDirection && !isAttacked(design, board, pos) && (move.mode == 3)) {
                      move.failed = true;
                      return;
                  }
                  pos = move.actions[0][1][0];
                  if (isAttacked(design, b, pos)) {
                      move.failed = true;
                  }
              } else {
                  var pos = findKing(design, b);
                  if ((pos !== null) && isAttacked(design, b, pos, b.player)) {
                      move.failed = true;
                  }
              }
          }
      }
  });
  CheckInvariants(board);
}

})();
