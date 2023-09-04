(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "madrasi-invariant") {
      checkVersion(design, name, value);
  }
}

Dagaz.Model.findPiece = function(design, board, player, type) {
  var positions = design.allPositions();
  for (var i = 0; i < positions.length; i++) {
       var piece = board.getPiece(positions[i]);
       if ((piece !== null) && (piece.type == type) && (piece.player == player)) {
           return positions[i];
       }
  }
  return null;
}

var checkStep = function(design, board, pos, piece, d) {
  var p = design.navigate(piece.player, pos, d);
  if (p === null) return false;
  var t = board.getPiece(p);
  if (t === null) return false;
  if (t.player == piece.player) return false;
  return t.type == piece.type;
}

var checkJump = function(design, board, pos, piece, o, d) {
  var p = design.navigate(piece.player, pos, o);
  if (p === null) return false;
  p = design.navigate(piece.player, p, d);
  if (p === null) return false;
  var t = board.getPiece(p);
  if (t === null) return false;
  if (t.player == piece.player) return false;
  return t.type == piece.type;
}

var checkSlide = function(design, board, pos, piece, d) {
  var p = design.navigate(piece.player, pos, d);
  if (p === null) return false;
  var t = board.getPiece(p);
  while (t === null) {
      p = design.navigate(piece.player, p, d);
      if (p === null) return false;
      t = board.getPiece(p);
  }
  if (t.player == piece.player) return false;
  return t.type == piece.type;
}

var checkDirection = function(design, board, player, pos, dir, leapers, riders) {
  var p = design.navigate(player, pos, dir);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece !== null) {
      if (piece.player == player) return false;
      return (_.indexOf(leapers, +piece.type) >= 0) || (_.indexOf(riders, +piece.type) >= 0);
  }
  while (piece === null) {
      p = design.navigate(player, p, dir);
      if (p === null) return false;
      piece = board.getPiece(p);
  }
  if (piece.player == player) return false;
  return _.indexOf(riders, +piece.type) >= 0;
}

var checkLeap = function(design, board, player, pos, o, d, knight) {
  var p = design.navigate(player, pos, o);
  if (p === null) return false;
  p = design.navigate(player, p, d);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece === null) return false;
  return (piece.player != player) && (piece.type == knight);
}

Dagaz.Model.checkPositions = function(design, board, player, positions) {
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
       if (checkDirection(design, board, player, pos, n,  [king], [rook, queen])) return true;
       if (checkDirection(design, board, player, pos, s,  [king], [rook, queen])) return true;
       if (checkDirection(design, board, player, pos, w,  [king], [rook, queen])) return true;
       if (checkDirection(design, board, player, pos, e,  [king], [rook, queen])) return true;
       if (checkDirection(design, board, player, pos, nw, [king, pawn], [bishop, queen])) return true;
       if (checkDirection(design, board, player, pos, ne, [king, pawn], [bishop, queen])) return true;
       if (checkDirection(design, board, player, pos, sw, [king], [bishop, queen])) return true;
       if (checkDirection(design, board, player, pos, se, [king], [bishop, queen])) return true;
       if (checkLeap(design, board, player, pos, n, nw, knight)) return true;
       if (checkLeap(design, board, player, pos, n, ne, knight)) return true;
       if (checkLeap(design, board, player, pos, s, sw, knight)) return true;
       if (checkLeap(design, board, player, pos, s, se, knight)) return true;
       if (checkLeap(design, board, player, pos, w, nw, knight)) return true;
       if (checkLeap(design, board, player, pos, w, sw, knight)) return true;
       if (checkLeap(design, board, player, pos, e, ne, knight)) return true;
       if (checkLeap(design, board, player, pos, e, se, knight)) return true;
  }
  return false;
}

var changePieces = function(design, board, move) {
  _.each(move.actions, function(action) {
      var piece = null;
      if (action[0] !== null) {
          piece = board.getPiece(action[0][0]);
      } else {
          piece = board.getPiece(action[1][0]);
      }
      if (action[2] !== null) {
          piece = action[2][0];
      }
      if (piece !== null) {
          piece = piece.setValue(0, true);
      }
      action[2] = [ piece ];
  });
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var paralyzed = [];
  var n  = design.getDirection("n");  var w  = design.getDirection("w");
  var s  = design.getDirection("s");  var e  = design.getDirection("e");
  var nw = design.getDirection("nw"); var sw = design.getDirection("sw");
  var ne = design.getDirection("ne"); var se = design.getDirection("se");
  var pawn   = design.getPieceType("Pawn");   var rook   = design.getPieceType("Rook");
  var knight = design.getPieceType("Knight"); var bishop = design.getPieceType("Bishop");
  var queen  = design.getPieceType("Queen");  var king   = design.getPieceType("King");
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.type == pawn) {
          if (checkStep(design, board, pos, piece, nw) ||
              checkStep(design, board, pos, piece, ne)) {
              paralyzed.push(pos);
          }
      }
      if (piece.type == rook) {
          if (checkSlide(design, board, pos, piece, n) ||
              checkSlide(design, board, pos, piece, e) ||
              checkSlide(design, board, pos, piece, w) ||
              checkSlide(design, board, pos, piece, s)) {
              paralyzed.push(pos);
          }
      }
      if (piece.type == knight) {
          if (checkJump(design, board, pos, piece, n, nw) ||
              checkJump(design, board, pos, piece, n, ne) ||
              checkJump(design, board, pos, piece, s, sw) ||
              checkJump(design, board, pos, piece, s, se) ||
              checkJump(design, board, pos, piece, w, nw) ||
              checkJump(design, board, pos, piece, w, sw) ||
              checkJump(design, board, pos, piece, e, ne) ||
              checkJump(design, board, pos, piece, e, se)) {
              paralyzed.push(pos);
          }
      }
      if (piece.type == bishop) {
          if (checkSlide(design, board, pos, piece, nw) ||
              checkSlide(design, board, pos, piece, ne) ||
              checkSlide(design, board, pos, piece, sw) ||
              checkSlide(design, board, pos, piece, se)) {
              paralyzed.push(pos);
          }
      }
      if (piece.type == queen) {
          if (checkSlide(design, board, pos, piece, n) ||
              checkSlide(design, board, pos, piece, e) ||
              checkSlide(design, board, pos, piece, w) ||
              checkSlide(design, board, pos, piece, s) ||
              checkSlide(design, board, pos, piece, nw) ||
              checkSlide(design, board, pos, piece, ne) ||
              checkSlide(design, board, pos, piece, sw) ||
              checkSlide(design, board, pos, piece, se)) {
              paralyzed.push(pos);
          }
      }
      if (piece.type == king) {
          if (checkStep(design, board, pos, piece, n) ||
              checkStep(design, board, pos, piece, e) ||
              checkStep(design, board, pos, piece, w) ||
              checkStep(design, board, pos, piece, s) ||
              checkStep(design, board, pos, piece, nw) ||
              checkStep(design, board, pos, piece, ne) ||
              checkStep(design, board, pos, piece, sw) ||
              checkStep(design, board, pos, piece, se)) {
              paralyzed.push(pos);
          }
      }
  });
  _.each(board.moves, function(move) {
      for (var i = 0; i < move.actions.length; i++) {
           var a = move.actions[i];
           if ((a[0] !== null) && (a[1] !== null) && (_.indexOf(paralyzed, +a[0][0]) >= 0)) {
               move.failed = true;
               return;
           }
      }
      var b = board.apply(move);
      var list = [];
      var pos  = Dagaz.Model.findPiece(design, b, board.player, king);
      if (pos !== null) list.push(pos);
      if (move.actions.length == 2) {
          var k = board.getPiece(move.actions[0][0][0]);
          var r = board.getPiece(move.actions[1][0][0]);
          if (k.getValue(0) || r.getValue(0)) {
              move.failed = true;
              return;
          }
          list.push(move.actions[0][0][0]);
          list.push(move.actions[1][1][0]);
      }
      if (Dagaz.Model.checkPositions(design, b, board.player, list)) {
          move.failed = true;
          return;
      }
      changePieces(design, board, move);
  });
  CheckInvariants(board);
}

})();
