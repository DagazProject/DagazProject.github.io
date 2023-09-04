(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "hex-kyoto-invariant") {
      checkVersion(design, name, value);
  }
}

var heuristic = Dagaz.AI.heuristic;

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var n      = design.getDirection("n");
  var pawn   = design.getPieceType("Pawn");
  var lance  = design.getPieceType("Lance");
  var knight = design.getPieceType("Knight");
  if (move.isSimpleMove()) {
      var piece = board.getPiece(move.actions[0][0][0]);
      if (move.actions[0][2] !== null) {
          piece = move.actions[0][2][0];
      }
      if ((piece !== null) && ((piece.type == pawn) || (piece.type == lance) || (piece.type == knight))) {
          var pos = move.actions[0][1][0];
          pos = design.navigate(board.player, pos, n);
          if (pos === null) return -1;
          if (piece.type == knight) {
              pos = design.navigate(board.player, pos, n);
              if (pos === null) return -1;
          }
      }
  }
  if (!_.isUndefined(heuristic)) {
      return heuristic(ai, design, board, move);
  } else {
      return 1;
  }
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var friends = 0;
  var enemies = 0;
  var king    = design.getPieceType("King");
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.type == king)) {
          if (piece.player == player) {
              friends++;
          } else {
              enemies++;
          }
      }
  });
  if (enemies == 0) {
      return 1;
  }
  if (friends == 0) {
      return -1;
  }
  return checkGoals(design, board, player);
}

var findPiece = function(design, board, player, type) {
  for (var p = 0; p < design.positions.length; p++) {
       var piece = board.getPiece(p);
       if ((piece !== null) && (piece.type == type) && (piece.player == player)) {
           return p;
       }
  }
  return null;
}

var isKnightAttacked = function(design, board, player, pos, o, d, leapers) {
  var p = design.navigate(player, pos, o);
  if (p === null) return false;
  p = design.navigate(player, p, o);
  if (p === null) return false;
  p = design.navigate(player, p, d);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece === null) return false;
  if (piece.player == player) return false;
  return _.indexOf(leapers, +piece.type) >= 0;
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

var isDiagonalAttacked = function(design, board, player, pos, o, d, leapers, riders) {
  var p = design.navigate(player, pos, o);
  if (p === null) return false;
  p = design.navigate(player, p, d);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece !== null) {
      if (piece.player == player) return false;
      if (_.indexOf(leapers, +piece.type) >= 0) return true;
      if (_.indexOf(riders, +piece.type) >= 0) return true;
      return false;
  }
  p = design.navigate(player, p, o);
  if (p === null) return false;
  p = design.navigate(player, p, d);
  while (p !== null) {
      piece = board.getPiece(p);
      if (piece !== null) {
          if (piece.player == player) return false;
          return _.indexOf(riders, +piece.type) >= 0;
      }
      p = design.navigate(player, p, o);
      if (p === null) return false;
      p = design.navigate(player, p, d);
  }
  return false;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var king   = design.getPieceType("King");
  var bishop = design.getPieceType("Bishop");
  var tokin  = design.getPieceType("Tokin");
  var gold   = design.getPieceType("Gold");
  var rook   = design.getPieceType("Rook");
  var silver = design.getPieceType("Silver");
  var lance  = design.getPieceType("Lance");
  var knight = design.getPieceType("Knight");
  var pawn   = design.getPieceType("Pawn");
  var n  = design.getDirection("n");  var s  = design.getDirection("s");  
  var nw = design.getDirection("nw"); var sw = design.getDirection("sw");
  var ne = design.getDirection("ne"); var se = design.getDirection("se");
  _.each(board.moves, function(m) {
      var b = board.apply(m);
      var pos = findPiece(design, b, board.player, king);
      if (pos === null) {
          m.failed = true;
          return;
      }
      if (isAttacked(design, b, board.player, pos, n,  [king, gold, tokin, silver, pawn], [rook, lance]) ||
          isAttacked(design, b, board.player, pos, s,  [king, gold, tokin], [rook]) ||
          isAttacked(design, b, board.player, pos, nw, [king, gold, tokin], [rook]) ||
          isAttacked(design, b, board.player, pos, ne, [king, gold, tokin], [rook]) ||
          isAttacked(design, b, board.player, pos, sw, [king, gold, tokin], [rook]) ||
          isAttacked(design, b, board.player, pos, se, [king, gold, tokin], [rook])) {
          m.failed = true;
          return;
      }
      if (isDiagonalAttacked(design, b, board.player, pos, n,  nw, [king, gold, tokin, silver], [bishop]) ||
          isDiagonalAttacked(design, b, board.player, pos, n,  ne, [king, gold, tokin, silver], [bishop]) ||
          isDiagonalAttacked(design, b, board.player, pos, s,  sw, [king, silver], [bishop]) ||
          isDiagonalAttacked(design, b, board.player, pos, s,  se, [king, silver], [bishop]) ||
          isDiagonalAttacked(design, b, board.player, pos, nw, sw, [king, silver], [bishop]) ||
          isDiagonalAttacked(design, b, board.player, pos, se, ne, [king, silver], [bishop])) {
          m.failed = true;
          return;
      }
      if (isKnightAttacked(design, b, board.player, pos, n, nw, [knight]) ||
          isKnightAttacked(design, b, board.player, pos, n, ne, [knight])) {
          m.failed = true;
          return;
      }
  });
  CheckInvariants(board);
}

})();
