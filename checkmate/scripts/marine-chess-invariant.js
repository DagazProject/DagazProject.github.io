(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "marine-chess-invariant") {
      checkVersion(design, name, value);
  }
}

var findPiece = function(design, board, player, type) {
  var positions = design.allPositions();
  for (var i = 0; i < positions.length; i++) {
       var piece = board.getPiece(positions[i]);
       if ((piece !== null) && (piece.type == type) && (piece.player == player)) {
           return positions[i];
       }
  }
  return null;
}

var checkDirection = function(design, board, player, pos, dir, mdir, leapers, riders) {
  var p = design.navigate(player, pos, mdir);
  if (p === null) return false;
  if (board.getPiece(p) !== null) return false;
  p = design.navigate(player, pos, dir);
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

var checkLeap = function(design, board, player, pos, o, mo, d, md, knight) {
  var p = design.navigate(player, pos, mo);
  if (p === null) return false;
  p = design.navigate(player, p, md);
  if (p === null) return false;
  if (board.getPiece(p) !== null) return false;
  p = design.navigate(player, pos, o);
  if (p === null) return false;
  p = design.navigate(player, p, d);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece === null) return false;
  return (piece.player != player) && (piece.type == knight);
}

var checkPositions = function(design, board, player, positions) {
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
       if (checkDirection(design, board, player, pos, n,  s,  [king], [rook, queen])) return true;
       if (checkDirection(design, board, player, pos, s,  n,  [king], [rook, queen])) return true;
       if (checkDirection(design, board, player, pos, w,  e,  [king], [rook, queen])) return true;
       if (checkDirection(design, board, player, pos, e,  w,  [king], [rook, queen])) return true;
       if (checkDirection(design, board, player, pos, nw, se, [king, pawn], [bishop, queen])) return true;
       if (checkDirection(design, board, player, pos, ne, sw, [king, pawn], [bishop, queen])) return true;
       if (checkDirection(design, board, player, pos, sw, ne, [king], [bishop, queen])) return true;
       if (checkDirection(design, board, player, pos, se, nw, [king], [bishop, queen])) return true;
       if (checkLeap(design, board, player, pos, n, s, nw, se, knight)) return true;
       if (checkLeap(design, board, player, pos, n, s, ne, sw, knight)) return true;
       if (checkLeap(design, board, player, pos, s, n, sw, ne, knight)) return true;
       if (checkLeap(design, board, player, pos, s, n, se, nw, knight)) return true;
       if (checkLeap(design, board, player, pos, w, e, nw, se, knight)) return true;
       if (checkLeap(design, board, player, pos, w, e, sw, ne, knight)) return true;
       if (checkLeap(design, board, player, pos, e, w, ne, sw, knight)) return true;
       if (checkLeap(design, board, player, pos, e, w, se, nw, knight)) return true;
  }
  return false;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var king = design.getPieceType("King");
  board.generate(design);
  if (board.moves.length == 0) {
      var pos = findPiece(design, board, board.player, king);
      if (pos === null) return 1;
      if (checkPositions(design, board, board.player, [pos])) {
          return 1;
      } else {
          return 0;
      }
  }
  return checkGoals(design, board, player);
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
  var king   = design.getPieceType("King");
  var rook   = design.getPieceType("Rook");
  _.each(board.moves, function(move) {
      var b = board.apply(move);
      var list = [];
      var pos  = findPiece(design, b, board.player, king);
      if (pos !== null) {
          list.push(pos);
      }
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
      if (checkPositions(design, b, board.player, list)) {
          move.failed = true;
          return;
      }
      changePieces(design, board, move);
  });
  CheckInvariants(board);
}

})();
