(function() {

Dagaz.AI.inProgress = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "dragonfly-hex-invariant") {
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

var checkPawn = function(design, board, player, pos, dir) {
  var p = design.navigate(player, pos, dir);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece === null) return false;
  if (piece.player == player) return false;
  if (piece.type > 0) return false;
  if (design.inZone(2, piece.player, p)) {
      var c = 0;
      for (var q = Dagaz.Model.WIDTH * Dagaz.Model.HEIGHT; q < design.positions.length; q++) {
           var x = board.getPiece(q);
           if ((x !== null) && (x.player != piece.player)) c++;
      }
      if (c == 0) return false;
  }
  return true;
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
  var n   = design.getDirection("n");   var w   = design.getDirection("w");
  var s   = design.getDirection("s");   var e   = design.getDirection("e");
  var nw  = design.getDirection("nw");  var sw  = design.getDirection("sw");
  var ne  = design.getDirection("ne");  var se  = design.getDirection("se");
  var nnw = design.getDirection("nnw"); var ssw = design.getDirection("ssw");
  var nne = design.getDirection("nne"); var sse = design.getDirection("sse");
  for (var i = 0; i < positions.length; i++) {
       var pos = positions[i];
       if (checkDirection(design, board, player, pos, n,  [king], [rook])) return true;
       if (checkDirection(design, board, player, pos, s,  [king], [rook])) return true;
       if (checkDirection(design, board, player, pos, w,  [king], [bishop])) return true;
       if (checkDirection(design, board, player, pos, e,  [king], [bishop])) return true;
       if (checkDirection(design, board, player, pos, nw, [king, pawn], [rook])) return true;
       if (checkDirection(design, board, player, pos, ne, [king, pawn], [rook])) return true;
       if (checkDirection(design, board, player, pos, sw, [king], [rook])) return true;
       if (checkDirection(design, board, player, pos, se, [king], [rook])) return true;
       if (checkDirection(design, board, player, pos, nnw, [king], [bishop])) return true;
       if (checkDirection(design, board, player, pos, nne, [king], [bishop])) return true;
       if (checkDirection(design, board, player, pos, ssw, [king], [bishop])) return true;
       if (checkDirection(design, board, player, pos, sse, [king], [bishop])) return true;
       if (checkLeap(design, board, player, pos, e, ne, knight)) return true;
       if (checkLeap(design, board, player, pos, e, se, knight)) return true;
       if (checkLeap(design, board, player, pos, w, nw, knight)) return true;
       if (checkLeap(design, board, player, pos, w, sw, knight)) return true;
       if (checkLeap(design, board, player, pos, nnw, n, knight)) return true;
       if (checkLeap(design, board, player, pos, nnw, nw, knight)) return true;
       if (checkLeap(design, board, player, pos, nne, n, knight)) return true;
       if (checkLeap(design, board, player, pos, nne, ne, knight)) return true;
       if (checkLeap(design, board, player, pos, ssw, s, knight)) return true;
       if (checkLeap(design, board, player, pos, ssw, sw, knight)) return true;
       if (checkLeap(design, board, player, pos, sse, s, knight)) return true;
       if (checkLeap(design, board, player, pos, sse, se, knight)) return true;
       if (checkPawn(design, board, player, pos, nw)) return true;
       if (checkPawn(design, board, player, pos, ne)) return true;
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
