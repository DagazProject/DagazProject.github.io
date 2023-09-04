(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "caissa-invariant") {
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

var checkDirection = function(design, board, player, pos, dir, riders) {
  var hole = design.getPieceType("Hole");
  var p = design.navigate(player, pos, dir);
  if (p === null) return false;
  var piece = board.getPiece(p);
  while ((piece === null) || (piece.type == hole)) {
      p = design.navigate(player, p, dir);
      if (p === null) return false;
      piece = board.getPiece(p);
  }
  if (piece.player == player) return false;
  return _.indexOf(riders, +piece.type) >= 0;
}

var checkLeap = function(design, board, player, pos, o, d, leaper) {
  var p = design.navigate(player, pos, o);
  if (p === null) return false;
  p = design.navigate(player, p, d);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece === null) return false;
  return (piece.player != player) && (piece.type == leaper);
}

var isAttacked = function(design, board, pos, player) {
  var design = Dagaz.Model.design;
  var queen  = design.getPieceType("Queen");
  var rook   = design.getPieceType("Rook");
  var bishop = design.getPieceType("Bishop");
  var knight = design.getPieceType("Knight");
  var n  = design.getDirection("n");  var w  = design.getDirection("w");
  var s  = design.getDirection("s");  var e  = design.getDirection("e");
  var nw = design.getDirection("nw"); var sw = design.getDirection("sw");
  var ne = design.getDirection("ne"); var se = design.getDirection("se");
  if (checkDirection(design, board, player, pos, n,  [rook, queen])) return true;
  if (checkDirection(design, board, player, pos, s,  [rook, queen])) return true;
  if (checkDirection(design, board, player, pos, w,  [rook, queen])) return true;
  if (checkDirection(design, board, player, pos, e,  [rook, queen])) return true;
  if (checkDirection(design, board, player, pos, nw, [bishop, queen])) return true;
  if (checkDirection(design, board, player, pos, ne, [bishop, queen])) return true;
  if (checkDirection(design, board, player, pos, sw, [bishop, queen])) return true;
  if (checkDirection(design, board, player, pos, se, [bishop, queen])) return true;
  if (checkLeap(design, board, player, pos, n, nw, knight)) return true;
  if (checkLeap(design, board, player, pos, n, ne, knight)) return true;
  if (checkLeap(design, board, player, pos, s, sw, knight)) return true;
  if (checkLeap(design, board, player, pos, s, se, knight)) return true;
  if (checkLeap(design, board, player, pos, w, nw, knight)) return true;
  if (checkLeap(design, board, player, pos, w, sw, knight)) return true;
  if (checkLeap(design, board, player, pos, e, ne, knight)) return true;
  if (checkLeap(design, board, player, pos, e, se, knight)) return true;
  return false;
}

var noCoherence = function(design, board) {
  var hole  = design.getPieceType("Hole");
  var group = [];
  for (var pos = 0; pos < design.positions.length; pos++) {
       var piece = board.getPiece(pos);
       if ((piece === null) || (piece.type != hole)) {
           if ((group.length > 0) && (_.indexOf(group, pos) < 0)) return true;
           group.push(pos);
           for (var i = 0; i < group.length; i++) {
                _.each(design.allDirections(), function(dir) {
                     var pos = design.navigate(board.player, group[i], dir);
                     if ((pos !== null) && (_.indexOf(group, pos) < 0)) {
                          var piece = board.getPiece(pos);
                          if ((piece === null) || (piece.type != hole)) {
                              group.push(pos);
                          }
                     }
                });
           }
       }
  }
  return false;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var queen  = design.getPieceType("Queen");
  _.each(board.moves, function(move) {
      if ((move.actions.length > 0) && (move.actions[0][0] !== null) && (move.actions[0][1] !== null)) {
          var pos = move.actions[0][0][0];
          var piece = board.getPiece(pos);
          if ((piece !== null) && (piece.type == queen) && (move.mode == 1)) {
               if (isAttacked(design, board, pos, board.player)) {
                   move.failed = true;
                   return;
               }
          }
          var b = board.apply(move);
          pos = findPiece(design, b, board.player, queen);
          if ((pos === null) || isAttacked(design, b, pos, board.player)) {
              move.failed = true;
              return;
          }
          if (noCoherence(design, b)) {
              move.failed = true;
          }
      }
  });
  CheckInvariants(board);
}

})();
