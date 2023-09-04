(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "progressive-chess-turns") {
      checkVersion(design, name, value);
  }
}

var getNextPlayer = function(design, board) {
  var c = 1; var n = 1; 
  var r = board.player;
  var player = board.player;
  while (board.parent !== null) {
      board = board.parent;
      if (board.player != player) {
          player = board.player;
          n++;
          break;
      }
      c++;
  }
  while (board.parent !== null) {
      board = board.parent;
      if (board.player != player) {
          player = board.player;
          n++;
      }
  } 
  if (c >= n) {
      r = design.nextPlayer(r);
  }
  return r;
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

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var king   = design.getPieceType("King");
  var player = getNextPlayer(design, board);
  _.each(board.moves, function(move) {
      var b = board.apply(move);
      var pos = Dagaz.Model.findPiece(design, b, board.player, king);
      if (pos === null) return;
      if (Dagaz.Model.checkPositions(design, b, board.player, [pos])) {
          move.failed = true;
          return;
      }
      pos = Dagaz.Model.findPiece(design, b, b.player, king);
      if (pos !== null) {
          if (Dagaz.Model.checkPositions(design, b, b.player, [pos])) return;
      }
      if (player == board.player) {
          move.goTo(player - 1);
      }
  });
  CheckInvariants(board);
}

})();
