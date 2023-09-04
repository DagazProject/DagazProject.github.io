(function() {

Dagaz.AI.inProgress = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "hoppel-poppel-invariant") {
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
  var knight = design.getPieceType("Knibis");
  var bishop = design.getPieceType("Biskni");
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
       if (checkDirection(design, board, player, pos, nw, [king, pawn], [knight, queen])) return true;
       if (checkDirection(design, board, player, pos, ne, [king, pawn], [knight, queen])) return true;
       if (checkDirection(design, board, player, pos, sw, [king], [knight, queen])) return true;
       if (checkDirection(design, board, player, pos, se, [king], [knight, queen])) return true;
       if (checkLeap(design, board, player, pos, n, nw, bishop)) return true;
       if (checkLeap(design, board, player, pos, n, ne, bishop)) return true;
       if (checkLeap(design, board, player, pos, s, sw, bishop)) return true;
       if (checkLeap(design, board, player, pos, s, se, bishop)) return true;
       if (checkLeap(design, board, player, pos, w, nw, bishop)) return true;
       if (checkLeap(design, board, player, pos, w, sw, bishop)) return true;
       if (checkLeap(design, board, player, pos, e, ne, bishop)) return true;
       if (checkLeap(design, board, player, pos, e, se, bishop)) return true;
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

var getPiece = function(board, action) {
  if (action[0] === null) return null;
  if (action[1] === null) return null;
  return board.getPiece(action[0][0]);
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
