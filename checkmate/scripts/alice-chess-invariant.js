(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "alice-chess-invariant") {
      checkVersion(design, name, value);
  }
}

Dagaz.Model.findPiece = function(design, board, player, type) {
  var positions = design.allPositions();
  for (var i = 0; i < positions.length; i++) {
       var piece = board.getPiece(positions[i]);
       if ((piece !== null) && (piece.player == player)) {
           if ((piece.type == type) || (piece.type == type + 1)) {
               return positions[i];
           }
       }
  }
  return null;
}

var getPiece = function(board, action) {
  if (action[0] === null) return null;
  if (action[1] === null) return null;
  return board.getPiece(action[0][0]);
}

var changePieces = function(design, board, move) {
  _.each(move.actions, function(action) {
      var piece = null;
      if (action[0] !== null) {
          piece = board.getPiece(action[0][0]);
      } else {
          piece = board.getPiece(action[1][0]);
      }
      var pieces = [];
      if (action[2] !== null) {
          _.each(action[2], function(piece) {
               pieces.push(piece.setValue(0, true));
          });
      } else {
          pieces.push(piece.setValue(0, true));
      }
      action[2] = pieces;
  });
}

var isMoved = function(pos, move) {
  for (var i = 0; i < move.actions.length; i++) {
       var a = move.actions[i];
       if ((a[0] !== null) && (a[1] !== null)) {
           if (a[1][0] == pos) return true;
       }
  }
  return false;
}

var checkDirection = function(design, board, player, pos, dir, leapers, riders, status) {
  var king = design.getPieceType("King");
  var p = design.navigate(player, pos, dir);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if ((piece !== null) && (((piece.type % 2) == status) || (piece.type == king))) {
      if (piece.player == player) return false;
      if (piece.type % 2 != status) return false;     
      return (_.indexOf(leapers, +piece.type) >= 0) || (_.indexOf(riders, +piece.type) >= 0);
  }
  while ((piece === null) || (piece.type % 2 != status)) {
      p = design.navigate(player, p, dir);
      if (p === null) return false;
      piece = board.getPiece(p);
  }
  if (piece.player == player) return false;
  if (piece.type % 2 != status) return false;
  return _.indexOf(riders, +piece.type) >= 0;
}

var checkLeap = function(design, board, player, pos, o, d, knight, status) {
  var p = design.navigate(player, pos, o);
  if (p === null) return false;
  p = design.navigate(player, p, d);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece === null) return false;
  if (piece.player == player) return false;
  if (piece.type % 2 != status) return false;
  return (piece.type == knight) || (piece.type == knight + 1);
}

Dagaz.Model.checkPositions = function(design, board, player, positions, status) {
  var king   = design.getPieceType("King");
  var pawn   = design.getPieceType("Pawn");
  var rook   = design.getPieceType("Rook");
  var knight = design.getPieceType("Knight");
  var bishop = design.getPieceType("Bishop");
  var queen  = design.getPieceType("Queen");
  var n  = design.getDirection("n");  var w  = design.getDirection("w");
  var s  = design.getDirection("s");  var e  = design.getDirection("e");
  var nw = design.getDirection("nw"); var sw = design.getDirection("sw");
  var ne = design.getDirection("ne"); var se = design.getDirection("se");
  for (var i = 0; i < positions.length; i++) {
       var pos = positions[i];
       if (checkDirection(design, board, player, pos, n,  [king, king + 1], [rook, rook + 1, queen, queen + 1], status)) return true;
       if (checkDirection(design, board, player, pos, s,  [king, king + 1], [rook, rook + 1, queen, queen + 1], status)) return true;
       if (checkDirection(design, board, player, pos, w,  [king, king + 1], [rook, rook + 1, queen, queen + 1], status)) return true;
       if (checkDirection(design, board, player, pos, e,  [king, king + 1], [rook, rook + 1, queen, queen + 1], status)) return true;
       if (checkDirection(design, board, player, pos, nw, [king, king + 1, pawn, pawn + 1], [bishop, bishop + 1, queen, queen + 1], status)) return true;
       if (checkDirection(design, board, player, pos, ne, [king, king + 1, pawn, pawn + 1], [bishop, bishop + 1, queen, queen + 1], status)) return true;
       if (checkDirection(design, board, player, pos, sw, [king, king + 1], [bishop, bishop + 1, queen, queen + 1], status)) return true;
       if (checkDirection(design, board, player, pos, se, [king, king + 1], [bishop, bishop + 1, queen, queen + 1], status)) return true;
       if (checkLeap(design, board, player, pos, n, nw, knight, status)) return true;
       if (checkLeap(design, board, player, pos, n, ne, knight, status)) return true;
       if (checkLeap(design, board, player, pos, s, sw, knight, status)) return true;
       if (checkLeap(design, board, player, pos, s, se, knight, status)) return true;
       if (checkLeap(design, board, player, pos, w, nw, knight, status)) return true;
       if (checkLeap(design, board, player, pos, w, sw, knight, status)) return true;
       if (checkLeap(design, board, player, pos, e, ne, knight, status)) return true;
       if (checkLeap(design, board, player, pos, e, se, knight, status)) return true;
  }
  return false;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var king = design.getPieceType("King");
  board.generate(design);
  if (board.moves.length == 0) {
      var pos = Dagaz.Model.findPiece(design, board, board.player, king);
      if (pos === null) return 1;
      var piece = board.getPiece(pos);
      if (piece === null) return 1;
      if (Dagaz.Model.checkPositions(design, board, board.player, [pos], piece.type % 2)) {
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
  var king   = design.getPieceType("King");
  var rook   = design.getPieceType("Rook");
  _.each(board.moves, function(move) {
      var b = board.apply(move);
      var list = [];
      var pos  = Dagaz.Model.findPiece(design, b, board.player, king);
      if (pos === null) {
          move.failed = true;
          return;
      }
      list.push(pos);
      var piece = b.getPiece(pos);
      if (piece === null) return;
      var status = +piece.type % 2;
      var f = isMoved(pos, move);
      if (move.actions.length == 2) {
          var k = getPiece(board, move.actions[0]);
          var r = getPiece(board, move.actions[1]);
          if ((k !== null) && (k.type == king) &&
              (r !== null) && (r.type == rook)) {
              if (k.getValue(0) || r.getValue(0)) {
                  move.failed = true;
              }
              list.push(move.actions[0][0][0]);
              list.push(move.actions[1][1][0]);
          }
      }
      if (Dagaz.Model.checkPositions(design, b, board.player, list, status)) {
          move.failed = true;
          return;
      }
      if (f && Dagaz.Model.checkPositions(design, b, board.player, list, 1 - status)) {
          move.failed = true;
          return;
      }
      changePieces(design, board, move);
  });
  CheckInvariants(board);
}

})();
