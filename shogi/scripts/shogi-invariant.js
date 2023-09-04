(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "shogi-invariant") {
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

var isDefined = function(board, pos, target) {
  var r = false;
  _.each(board.moves, function(move) {
      if (!r && (move.actions.length > 0) && (move.actions[0][0] !== null) && (move.actions[0][1] !== null)) {
          if ((move.actions[0][0][0] != pos) && (move.actions[0][1][0] == target)) r = true;
      }
  });
  return r;
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

var isKnightAttacked = function(design, board, player, pos, o, d, leapers) {
  var p = design.navigate(player, pos, o);
  if (p === null) return false;
  p = design.navigate(player, p, d);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece === null) return false;
  if (piece.player == player) return false;
  return _.indexOf(leapers, +piece.type) >= 0;
}

var stalemated = function(design, board, player, opponent, pos) {
  var r = true;
  var n  = design.getDirection("n");  var w  = design.getDirection("w");
  var s  = design.getDirection("s");  var e  = design.getDirection("e");
  var nw = design.getDirection("nw"); var sw = design.getDirection("sw");
  var ne = design.getDirection("ne"); var se = design.getDirection("se");
  _.each(design.allDirections(), function(dir) {
      if (r) {
          var p = design.navigate(player, pos, dir);
          if (p !== null) {
              var piece = board.getPiece(p);
              if ((piece === null) || (piece.player != player)) {
                   var notAttacked = true;
                   if (isAttacked(design, board, opponent, p, n, [design.getPieceType("Gold"), design.getPieceType("PawnP"), design.getPieceType("SilverP"), design.getPieceType("KnightP"), design.getPieceType("LanceP"), design.getPieceType("Silver"), design.getPieceType("Pawn"), design.getPieceType("BishopP")], [design.getPieceType("Rook"), design.getPieceType("RookP"), design.getPieceType("Lance")]) ||
                       isAttacked(design, board, opponent, p, s, [design.getPieceType("Gold"), design.getPieceType("PawnP"), design.getPieceType("SilverP"), design.getPieceType("KnightP"), design.getPieceType("LanceP"), design.getPieceType("BishopP")], [design.getPieceType("Rook"), design.getPieceType("RookP")]) ||
                       isAttacked(design, board, opponent, p, w, [design.getPieceType("Gold"), design.getPieceType("PawnP"), design.getPieceType("SilverP"), design.getPieceType("KnightP"), design.getPieceType("LanceP"), design.getPieceType("BishopP")], [design.getPieceType("Rook"), design.getPieceType("RookP")]) ||
                       isAttacked(design, board, opponent, p, e, [design.getPieceType("Gold"), design.getPieceType("PawnP"), design.getPieceType("SilverP"), design.getPieceType("KnightP"), design.getPieceType("LanceP"), design.getPieceType("BishopP")], [design.getPieceType("Rook"), design.getPieceType("RookP")]) ||
                       isAttacked(design, board, opponent, p, nw, [design.getPieceType("Gold"), design.getPieceType("PawnP"), design.getPieceType("SilverP"), design.getPieceType("KnightP"), design.getPieceType("LanceP"), design.getPieceType("Silver"), design.getPieceType("RookP")], [design.getPieceType("Bishop"), design.getPieceType("BishopP")]) ||
                       isAttacked(design, board, opponent, p, ne, [design.getPieceType("Gold"), design.getPieceType("PawnP"), design.getPieceType("SilverP"), design.getPieceType("KnightP"), design.getPieceType("LanceP"), design.getPieceType("Silver"), design.getPieceType("RookP")], [design.getPieceType("Bishop"), design.getPieceType("BishopP")]) ||
                       isAttacked(design, board, opponent, p, sw, [design.getPieceType("Silver"), design.getPieceType("RookP")], [design.getPieceType("Bishop"), design.getPieceType("BishopP")]) ||
                       isAttacked(design, board, opponent, p, se, [design.getPieceType("Silver"), design.getPieceType("RookP")], [design.getPieceType("Bishop"), design.getPieceType("BishopP")])) {
                       notAttacked = false;
                   }
                   if (isKnightAttacked(design, board, opponent, p, n, nw, [design.getPieceType("Knight")]) ||
                       isKnightAttacked(design, board, opponent, p, n, ne, [design.getPieceType("Knight")])) {
                       notAttacked = false;
                   }
                   if (notAttacked) r = false;
              }
          }
      }
  });
  return r;
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
          var pos = move.actions[0][0][0];
          var target = move.actions[0][1][0];
          var piece = board.getPiece(pos);
          var b = board.apply(move);
          var king = findPiece(design, b, board.player, design.getPieceType("King"));
          if (king === null) {
              move.failed = true;
              return;
          }
          if (isAttacked(design, b, board.player, king, n, [design.getPieceType("King"), design.getPieceType("Gold"), design.getPieceType("PawnP"), design.getPieceType("SilverP"), design.getPieceType("KnightP"), design.getPieceType("LanceP"), design.getPieceType("Silver"), design.getPieceType("Pawn"), design.getPieceType("BishopP")], [design.getPieceType("Rook"), design.getPieceType("RookP"), design.getPieceType("Lance")]) ||
              isAttacked(design, b, board.player, king, s, [design.getPieceType("King"), design.getPieceType("Gold"), design.getPieceType("PawnP"), design.getPieceType("SilverP"), design.getPieceType("KnightP"), design.getPieceType("LanceP"), design.getPieceType("BishopP")], [design.getPieceType("Rook"), design.getPieceType("RookP")]) ||
              isAttacked(design, b, board.player, king, w, [design.getPieceType("King"), design.getPieceType("Gold"), design.getPieceType("PawnP"), design.getPieceType("SilverP"), design.getPieceType("KnightP"), design.getPieceType("LanceP"), design.getPieceType("BishopP")], [design.getPieceType("Rook"), design.getPieceType("RookP")]) ||
              isAttacked(design, b, board.player, king, e, [design.getPieceType("King"), design.getPieceType("Gold"), design.getPieceType("PawnP"), design.getPieceType("SilverP"), design.getPieceType("KnightP"), design.getPieceType("LanceP"), design.getPieceType("BishopP")], [design.getPieceType("Rook"), design.getPieceType("RookP")]) ||
              isAttacked(design, b, board.player, king, nw, [design.getPieceType("King"), design.getPieceType("Gold"), design.getPieceType("PawnP"), design.getPieceType("SilverP"), design.getPieceType("KnightP"), design.getPieceType("LanceP"), design.getPieceType("Silver"), design.getPieceType("RookP")], [design.getPieceType("Bishop"), design.getPieceType("BishopP")]) ||
              isAttacked(design, b, board.player, king, ne, [design.getPieceType("King"), design.getPieceType("Gold"), design.getPieceType("PawnP"), design.getPieceType("SilverP"), design.getPieceType("KnightP"), design.getPieceType("LanceP"), design.getPieceType("Silver"), design.getPieceType("RookP")], [design.getPieceType("Bishop"), design.getPieceType("BishopP")]) ||
              isAttacked(design, b, board.player, king, sw, [design.getPieceType("King"), design.getPieceType("Silver"), design.getPieceType("RookP")], [design.getPieceType("Bishop"), design.getPieceType("BishopP")]) ||
              isAttacked(design, b, board.player, king, se, [design.getPieceType("King"), design.getPieceType("Silver"), design.getPieceType("RookP")], [design.getPieceType("Bishop"), design.getPieceType("BishopP")])) {
              move.failed = true;
              return;
          }
          if (isKnightAttacked(design, b, board.player, king, n, nw, [design.getPieceType("Knight")]) ||
              isKnightAttacked(design, b, board.player, king, n, ne, [design.getPieceType("Knight")])) {
              move.failed = true;
              return;
          }
          var isPawnDrop = false;
          if ((piece !== null) && !design.inZone(0, board.player, pos)) {
               if (piece.type == design.getPieceType("Pawn")) {
                   var p = design.navigate(board.player, target, n);
                   if (p !== null) {
                       var piece = board.getPiece(p);
                       if ((piece !== null) && (piece.player != board.player) && (piece.type == design.getPieceType("King"))) {
                           if (isDefined(board, pos, target)) {
                               var notAttacked = true;
                               if (isAttacked(design, b, piece.player, target, n, [design.getPieceType("Gold"), design.getPieceType("PawnP"), design.getPieceType("SilverP"), design.getPieceType("KnightP"), design.getPieceType("LanceP"), design.getPieceType("Silver"), design.getPieceType("Pawn"), design.getPieceType("BishopP")], [design.getPieceType("Rook"), design.getPieceType("RookP"), design.getPieceType("Lance")]) ||
                                   isAttacked(design, b, piece.player, target, s, [design.getPieceType("Gold"), design.getPieceType("PawnP"), design.getPieceType("SilverP"), design.getPieceType("KnightP"), design.getPieceType("LanceP"), design.getPieceType("BishopP")], [design.getPieceType("Rook"), design.getPieceType("RookP")]) ||
                                   isAttacked(design, b, piece.player, target, w, [design.getPieceType("Gold"), design.getPieceType("PawnP"), design.getPieceType("SilverP"), design.getPieceType("KnightP"), design.getPieceType("LanceP"), design.getPieceType("BishopP")], [design.getPieceType("Rook"), design.getPieceType("RookP")]) ||
                                   isAttacked(design, b, piece.player, target, e, [design.getPieceType("Gold"), design.getPieceType("PawnP"), design.getPieceType("SilverP"), design.getPieceType("KnightP"), design.getPieceType("LanceP"), design.getPieceType("BishopP")], [design.getPieceType("Rook"), design.getPieceType("RookP")]) ||
                                   isAttacked(design, b, piece.player, target, nw, [design.getPieceType("Gold"), design.getPieceType("PawnP"), design.getPieceType("SilverP"), design.getPieceType("KnightP"), design.getPieceType("LanceP"), design.getPieceType("Silver"), design.getPieceType("RookP")], [design.getPieceType("Bishop"), design.getPieceType("BishopP")]) ||
                                   isAttacked(design, b, piece.player, target, ne, [design.getPieceType("Gold"), design.getPieceType("PawnP"), design.getPieceType("SilverP"), design.getPieceType("KnightP"), design.getPieceType("LanceP"), design.getPieceType("Silver"), design.getPieceType("RookP")], [design.getPieceType("Bishop"), design.getPieceType("BishopP")]) ||
                                   isAttacked(design, b, piece.player, target, sw, [design.getPieceType("Silver"), design.getPieceType("RookP")], [design.getPieceType("Bishop"), design.getPieceType("BishopP")]) ||
                                   isAttacked(design, b, piece.player, target, se, [design.getPieceType("Silver"), design.getPieceType("RookP")], [design.getPieceType("Bishop"), design.getPieceType("BishopP")])) {
                                   notAttacked = false;
                               }
                               if (isKnightAttacked(design, b, piece.player, target, n, nw, [design.getPieceType("Knight")]) ||
                                   isKnightAttacked(design, b, piece.player, target, n, ne, [design.getPieceType("Knight")])) {
                                   notAttacked = false;
                               }
                               if (notAttacked && stalemated(design, b, piece.player, board.player, p)) {
                                   move.failed = true;
                               }
                           }
                       }
                   }
               }
          }
      }
  });
  CheckInvariants(board);
}

})();
