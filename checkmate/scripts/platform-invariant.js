(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "platform-invariant") {
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

var noDown = function(design, board, player, pos) {
  if (pos === null) return true;
  var down = design.getDirection("down");
  var p = design.navigate(player, pos, down);
  if (p === null) return true;
  var piece = board.getPiece(p);
  return piece === null;
}

var checkDirection = function(design, board, player, pos, dir, leapers, riders) {
  var p = design.navigate(player, pos, dir);
  if (noDown(design, board, player, p)) return false;
  var piece = board.getPiece(p);
  if (piece !== null) {
      if (piece.player == player) return false;
      return (_.indexOf(leapers, +piece.type) >= 0) || (_.indexOf(riders, +piece.type) >= 0);
  }
  while (piece === null) {
      p = design.navigate(player, p, dir);
      if (noDown(design, board, player, p)) return false;
      piece = board.getPiece(p);
  }
  if (piece.player == player) return false;
  return _.indexOf(riders, +piece.type) >= 0;
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

var checkLeap = function(design, board, player, pos, o, d, knight) {
  var p = design.navigate(player, pos, o);
  if (p === null) return false;
  p = design.navigate(player, p, d);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece === null) return false;
  return (piece.player != player) && (piece.type == knight);
}

var getPiece = function(board, action) {
  if (action[0] === null) return null;
  if (action[1] === null) return null;
  return board.getPiece(action[0][0]);
}

var changePieces = function(design, board, move) {
  _.each(move.actions, function(action) {
      if (action[0] == null) return;
      if (action[1] == null) return;
      var piece = board.getPiece(action[0][0]);
      if (piece !== null) {
          piece = piece.setValue(0, true);
      }
  });
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var design = Dagaz.Model.design;
  var king   = design.getPieceType("King");
  board.generate(design);
  if (board.moves.length == 0) {
      var pos = Dagaz.Model.findPiece(design, board, board.player, king);
      if (pos === null) return 1;
      if (Dagaz.Model.checkPositions(design, board, board.player, [pos])) {
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
              if (noDown(design, board, board.player, move.actions[0][1][0]) ||
                  noDown(design, board, board.player, move.actions[1][1][0])) {
                  move.failed = true;
                  return;
              }
              list.push(move.actions[0][0][0]);
              list.push(move.actions[1][1][0]);
          }
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
