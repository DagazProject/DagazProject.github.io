(function() {

var inProgress = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "retrograde-invariant") {
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

var checkDirection = function(design, board, player, pos, dir, leapers, riders, attackers) {
  var p = design.navigate(player, pos, dir);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece !== null) {
      if ((attackers !== null) && (_.indexOf(attackers, p) < 0)) return false;
      if (piece.player == player) return false;
      return (_.indexOf(leapers, +piece.type) >= 0) || (_.indexOf(riders, +piece.type) >= 0);
  }
  while (piece === null) {
      p = design.navigate(player, p, dir);
      if (p === null) return false;
      piece = board.getPiece(p);
  }
  if ((attackers !== null) && (_.indexOf(attackers, p) < 0)) return false;
  if (piece.player == player) return false;
  return _.indexOf(riders, +piece.type) >= 0;
}

var checkLeap = function(design, board, player, pos, o, d, knight, attackers) {
  var p = design.navigate(player, pos, o);
  if (p === null) return false;
  p = design.navigate(player, p, d);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece === null) return false;
  if ((attackers !== null) && (_.indexOf(attackers, p) < 0)) return false;
  return (piece.player != player) && (piece.type == knight);
}

Dagaz.Model.checkPositions = function(design, board, player, positions, attackers) {
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
       if (checkDirection(design, board, player, pos, n,  [king], [rook, queen], attackers)) return true;
       if (checkDirection(design, board, player, pos, s,  [king], [rook, queen], attackers)) return true;
       if (checkDirection(design, board, player, pos, w,  [king], [rook, queen], attackers)) return true;
       if (checkDirection(design, board, player, pos, e,  [king], [rook, queen], attackers)) return true;
       if (checkDirection(design, board, player, pos, nw, [king, pawn], [bishop, queen], attackers)) return true;
       if (checkDirection(design, board, player, pos, ne, [king, pawn], [bishop, queen], attackers)) return true;
       if (checkDirection(design, board, player, pos, sw, [king], [bishop, queen], attackers)) return true;
       if (checkDirection(design, board, player, pos, se, [king], [bishop, queen], attackers)) return true;
       if (checkLeap(design, board, player, pos, n, nw, knight, attackers)) return true;
       if (checkLeap(design, board, player, pos, n, ne, knight, attackers)) return true;
       if (checkLeap(design, board, player, pos, s, sw, knight, attackers)) return true;
       if (checkLeap(design, board, player, pos, s, se, knight, attackers)) return true;
       if (checkLeap(design, board, player, pos, w, nw, knight, attackers)) return true;
       if (checkLeap(design, board, player, pos, w, sw, knight, attackers)) return true;
       if (checkLeap(design, board, player, pos, e, ne, knight, attackers)) return true;
       if (checkLeap(design, board, player, pos, e, se, knight, attackers)) return true;
  }
  return false;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  if (inProgress) return;
  var design = Dagaz.Model.design;
  var king   = design.getPieceType("King");
  _.each(board.moves, function(move) {
      var b = board.apply(move);
      if (move.mode >= 3) {
          var pos = Dagaz.Model.findPiece(design, b, board.player, king);
          if (pos === null) return;
          if (Dagaz.Model.checkPositions(design, b, board.player, [pos], null)) {
              move.failed = true;
          }
          return;
      }
      var pos = Dagaz.Model.findPiece(design, b, design.nextPlayer(board.player), king);
      if (pos === null) return;
      var attackers = [];
      _.each(move.actions, function(a) {
          if ((a[0] !== null) && (a[1] !== null)) {
               attackers.push(a[1][0]);
          }
      });
      if (Dagaz.Model.checkPositions(design, b, design.nextPlayer(board.player), [pos], attackers)) {
          move.failed = true;
          return;
      }
      if (Dagaz.Model.checkPositions(design, b, design.nextPlayer(board.player), [pos], null)) {
          inProgress = true;
          b.generate(design);
          var f = true;
          _.each(b.moves, function(m) {
              if (!f) return;
              if (m.mode < 3) return;
              var t = b.apply(m);
              if (!Dagaz.Model.checkPositions(design, t, design.nextPlayer(board.player), [pos], null)) {
                  f = false;
              }
          });
          if (f) {
              move.failed = true;
          }
          inProgress = false;
      }
  });
  CheckInvariants(board);
}

})();
