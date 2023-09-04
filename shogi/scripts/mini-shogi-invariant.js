(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "mini-shogi-invariant") {
      checkVersion(design, name, value);
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

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var king   = design.getPieceType("King");
  var gold   = design.getPieceType("Gold");
  var silver = design.getPieceType("Silver");
  var sp     = design.getPieceType("SilverP");
  var bishop = design.getPieceType("Bishop");
  var bp     = design.getPieceType("BishopP");
  var rook   = design.getPieceType("Rook");
  var rp     = design.getPieceType("RookP");
  var pawn   = design.getPieceType("Pawn");
  var pp     = design.getPieceType("PawnP");
  var n  = design.getDirection("n");  var w  = design.getDirection("w");
  var s  = design.getDirection("s");  var e  = design.getDirection("e");
  var nw = design.getDirection("nw"); var sw = design.getDirection("sw");
  var ne = design.getDirection("ne"); var se = design.getDirection("se");
  _.each(board.moves, function(m) {
      var b = board.apply(m);
      var pos = findPiece(design, b, board.player, king);
      if (pos === null) {
          m.failed = true;
          return;
      }
      if (isAttacked(design, b, board.player, pos, n, [king, gold, silver, sp, bp, pawn, pp], [rook, rp]) ||
          isAttacked(design, b, board.player, pos, s, [king, gold, sp, bp, pp], [rook, rp]) ||
          isAttacked(design, b, board.player, pos, w, [king, gold, sp, bp, pp], [rook, rp]) ||
          isAttacked(design, b, board.player, pos, e, [king, gold, sp, bp, pp], [rook, rp]) ||
          isAttacked(design, b, board.player, pos, nw, [king, gold, silver, sp, rp, pp], [bishop, bp]) ||
          isAttacked(design, b, board.player, pos, ne, [king, gold, silver, sp, rp, pp], [bishop, bp]) ||
          isAttacked(design, b, board.player, pos, sw, [king, silver, rp], [bishop, bp]) ||
          isAttacked(design, b, board.player, pos, se, [king, silver, rp], [bishop, bp])) {
          m.failed = true;
          return;
      }
      if (m.isSimpleMove()) {
          var pos = m.actions[0][0][0];
          var piece = board.getPiece(pos);
          if ((piece !== null) && (piece.type == pawn) && !design.inZone(0, board.player, pos)) {
               pos = m.actions[0][1][0];
               var p = design.navigate(board.player, pos, n);
               if (p === null) {
                   m.failed = true;
                   return;
               }
               while (p !== null) {
                   var target = board.getPiece(p);
                   if ((target !== null) && (target.player == board.player) && (target.type == pawn)) {
                       m.failed = true;
                       return;
                   }
                   p = design.navigate(board.player, p, n);
               }
               p = design.navigate(board.player, pos, s);
               while (p !== null) {
                   var target = board.getPiece(p);
                   if ((target !== null) && (target.player == board.player) && (target.type == pawn)) {
                       m.failed = true;
                       return;
                   }
                   p = design.navigate(board.player, p, s);
               }
          }
      }
  });
  CheckInvariants(board);
}

})();
