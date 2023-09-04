(function() {

var isInternal = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "annan-shogi-invariant") {
      checkVersion(design, name, value);
  }
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

var checkDirection = function(design, board, player, pos, dir, leapers, riders) {
  var n = design.getDirection("n");
  var p = design.navigate(player, pos, dir);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece !== null) {
      if (piece.player == player) return false;
      var q = design.navigate(player, p, n);
      if (q !== null) {
          var x = board.getPiece(q);
          if ((x !== null) && (x.player != player)) piece = x;
      }
      return (_.indexOf(leapers, +piece.type) >= 0) || (_.indexOf(riders, +piece.type) >= 0);
  }
  while (piece === null) {
      p = design.navigate(player, p, dir);
      if (p === null) return false;
      piece = board.getPiece(p);
  }
  if (piece.player == player) return false;
  var q = design.navigate(player, p, n);
  if (q !== null) {
      var x = board.getPiece(q);
      if ((x !== null) && (x.player != player)) piece = x;
  }
  return _.indexOf(riders, +piece.type) >= 0;
}

var checkLeap = function(design, board, player, pos, o, d, knight) {
  var n = design.getDirection("n");
  var p = design.navigate(player, pos, o);
  if (p === null) return false;
  p = design.navigate(player, p, d);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece === null) return false;
  if (piece.player == player) return false;
  var q = design.navigate(player, p, n);
  if (q !== null) {
      var x = board.getPiece(q);
      if ((x !== null) && (x.player != player)) piece = x;
  }
  return piece.type == knight;
}

var isAttacked = function(design, board, pos, player) {
  var king   = design.getPieceType("King");   var gold    = design.getPieceType("Gold");
  var silver = design.getPieceType("Silver"); var silverP = design.getPieceType("SilverP");
  var lance  = design.getPieceType("Lance");  var lanceP  = design.getPieceType("LanceP");
  var pawn   = design.getPieceType("Pawn");   var pawnP   = design.getPieceType("PawnP");
  var knight = design.getPieceType("Knight"); var knightP = design.getPieceType("KnightP"); 
  var rook   = design.getPieceType("Rook");   var rookP   = design.getPieceType("RookP");
  var bishop = design.getPieceType("Bishop"); var bishopP = design.getPieceType("BishopP");
  var n  = design.getDirection("n");  var w  = design.getDirection("w");
  var s  = design.getDirection("s");  var e  = design.getDirection("e");
  var nw = design.getDirection("nw"); var sw = design.getDirection("sw");
  var ne = design.getDirection("ne"); var se = design.getDirection("se");
  return checkDirection(design, board, player, pos, n,  [king, gold, silver, silverP, lanceP, pawn, pawnP, knightP, bishopP], [rook, rookP, lance]) ||
         checkDirection(design, board, player, pos, e,  [king, gold, silverP, lanceP, pawnP, knightP, bishopP], [rook, rookP]) ||
         checkDirection(design, board, player, pos, w,  [king, gold, silverP, lanceP, pawnP, knightP, bishopP], [rook, rookP]) ||
         checkDirection(design, board, player, pos, s,  [king, gold, silverP, lanceP, pawnP, knightP, bishopP], [rook, rookP]) ||
         checkDirection(design, board, player, pos, nw, [king, gold, silver, silverP, lanceP, pawnP, knightP, rookP], [bishop, bishopP]) ||
         checkDirection(design, board, player, pos, ne, [king, gold, silver, silverP, lanceP, pawnP, knightP, rookP], [bishop, bishopP]) ||
         checkDirection(design, board, player, pos, sw, [king, silver, rookP], [bishop, bishopP]) ||
         checkDirection(design, board, player, pos, se, [king, silver, rookP], [bishop, bishopP]) ||
         checkLeap(design, board, player, pos, n, nw, knight) ||
         checkLeap(design, board, player, pos, n, ne, knight);
}

var pawnFound = function(design, board, player, pos, dir, except) {
  var p = design.navigate(player, pos, dir);
  while (p !== null) {
      if (p != except) {
          var piece = board.getPiece(p);
          if ((piece !== null) && (piece.player == player) && (piece.type == design.getPieceType("Pawn"))) {
              return true;
          }
      }
      p = design.navigate(player, p, dir);
  }
  return false;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var n = design.getDirection("n");
  var s = design.getDirection("s");
  _.each(board.moves, function(move) {
      if (!_.isUndefined(move.failed)) return;
      if ((move.actions.length > 0) && (move.actions[0][0] !== null)) {
          var pos = move.actions[0][0][0];
          var target = move.actions[0][1][0];
          var piece = board.getPiece(pos);
          if (piece.type == design.getPieceType("Pawn")) {
              if (pawnFound(design, board, board.player, target, n, pos) || pawnFound(design, board, board.player, target, s, pos)) {
                  move.failed = true;
                  return;
              }
          }
      }
      var b = board.apply(move);
      var king = findPiece(design, b, board.player, design.getPieceType("King"));
      if (king === null) return;
      if (isAttacked(design, b, king, board.player)) {
          move.failed = true;
      }
  });
  CheckInvariants(board);
}

})();
