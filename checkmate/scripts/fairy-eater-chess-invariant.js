(function() {

Dagaz.AI.inProgress = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "fairy-eater-chess-invariant") {
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

var checkLeap = function(design, board, player, pos, o, d, leapers, riders) {
  var p = design.navigate(player, pos, o);
  if (p === null) return false;
  p = design.navigate(player, p, d);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece === null) {
      while (piece === null) {
          p = design.navigate(player, p, o);
          if (p === null) return false;
          p = design.navigate(player, p, d);
          if (p === null) return false;
          piece = board.getPiece(p);
      }
      if (piece.player == player) return false;
      return _.indexOf(riders, +piece.type) >= 0;
  }
  return (piece.player != player) && (_.indexOf(leapers, +piece.type) >= 0);
}

Dagaz.Model.checkPositions = function(design, board, player, positions) {
  var king   = design.getPieceType("King");
  var pawn   = design.getPieceType("Pawn");
  var shield = design.getPieceType("Shield");
  var ghost  = design.getPieceType("Ghost");
  var chaos  = design.getPieceType("Chaos");
  var reaper = design.getPieceType("Reaper");
  var rider  = design.getPieceType("Knightrider");
  var n  = design.getDirection("n");  var w  = design.getDirection("w");
  var s  = design.getDirection("s");  var e  = design.getDirection("e");
  var nw = design.getDirection("nw"); var sw = design.getDirection("sw");
  var ne = design.getDirection("ne"); var se = design.getDirection("se");
  for (var i = 0; i < positions.length; i++) {
       var pos = positions[i];
       if (checkDirection(design, board, player, pos, n,  [king, shield], [reaper])) return true;
       if (checkDirection(design, board, player, pos, s,  [king, shield], [reaper])) return true;
       if (checkDirection(design, board, player, pos, w,  [king], [shield, reaper])) return true;
       if (checkDirection(design, board, player, pos, e,  [king], [shield, reaper])) return true;
       if (checkDirection(design, board, player, pos, nw, [king, pawn], [chaos])) return true;
       if (checkDirection(design, board, player, pos, ne, [king, pawn], [chaos])) return true;
       if (checkDirection(design, board, player, pos, sw, [king], [chaos])) return true;
       if (checkDirection(design, board, player, pos, se, [king], [chaos])) return true;
       if (checkLeap(design, board, player, pos, n, n, [ghost], [ghost])) return true;
       if (checkLeap(design, board, player, pos, e, e, [ghost], [ghost])) return true;
       if (checkLeap(design, board, player, pos, w, w, [ghost], [ghost])) return true;
       if (checkLeap(design, board, player, pos, s, s, [ghost], [ghost])) return true;
       if (checkLeap(design, board, player, pos, nw, nw, [ghost], [ghost])) return true;
       if (checkLeap(design, board, player, pos, ne, ne, [ghost], [ghost])) return true;
       if (checkLeap(design, board, player, pos, sw, sw, [ghost], [ghost])) return true;
       if (checkLeap(design, board, player, pos, se, se, [ghost], [ghost])) return true;
       if (checkLeap(design, board, player, pos, n, nw, [chaos, reaper, rider], [rider])) return true;
       if (checkLeap(design, board, player, pos, n, ne, [chaos, reaper, rider], [rider])) return true;
       if (checkLeap(design, board, player, pos, s, sw, [chaos, reaper, rider], [rider])) return true;
       if (checkLeap(design, board, player, pos, s, se, [chaos, reaper, rider], [rider])) return true;
       if (checkLeap(design, board, player, pos, w, nw, [chaos, reaper, rider], [rider])) return true;
       if (checkLeap(design, board, player, pos, w, sw, [chaos, reaper, rider], [rider])) return true;
       if (checkLeap(design, board, player, pos, e, ne, [chaos, reaper, rider], [rider])) return true;
       if (checkLeap(design, board, player, pos, e, se, [chaos, reaper, rider], [rider])) return true;
  }
  return false;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var king   = design.getPieceType("King");
      _.each(board.moves, function(move) {
          var b = board.apply(move);
          var list = [];
          var pos  = Dagaz.Model.findPiece(design, b, board.player, king);
          if (pos !== null) {
              list.push(pos);
          }
          if (Dagaz.Model.checkPositions(design, b, board.player, list)) {
              move.failed = true;
              return;
          }
      });
  CheckInvariants(board);
}

})();
