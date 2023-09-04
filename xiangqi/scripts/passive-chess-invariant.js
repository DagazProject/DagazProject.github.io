(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "passive-chess-invariant") {
     checkVersion(design, name, value);
  }
}

var findPieces = function(design, board, player, type) {
  var r = [];
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.type == type) && (piece.player == player)) {
          r.push(pos);
      }
  });
  return r;
}

var checkDirection = function(design, board, player, positions, dir, leaper, chariot, cannon) {
  var r = false;
  _.each(positions, function(pos) {
      if (r) return;
      var p = design.navigate(player, pos, dir);
      if (p === null) return;
      var piece = board.getPiece(p);
      if ((piece !== null) && (piece.type == leaper) && (piece.player != player)) {
          r = true;
          return;
      }
      if (_.isUndefined(chariot)) return;
      while (piece == null) {
          p = design.navigate(player, p, dir);
          if (p === null) return;
          piece = board.getPiece(p);
      }
      if ((piece.player != player) && (piece.type == chariot)) {
          r = true;
          return;
      }
      if (_.isUndefined(cannon)) return;
      p = design.navigate(player, p, dir);
      if (p === null) return;
      piece = board.getPiece(p);
      while (piece == null) {
          p = design.navigate(player, p, dir);
          if (p === null) return;
          piece = board.getPiece(p);
      }
      if ((piece.player != player) && (piece.type == cannon)) {
          r = true;
      }
  });
  return r;
}

var checkJump = function(design, board, player, positions, d, o, type) {
  var r = false;
  _.each(positions, function(pos) {
      if (r) return;
      var p = design.navigate(player, pos, d);
      if (p === null) return;
      var piece = board.getPiece(p);
      if (piece !== null) return;
      p = design.navigate(player, p, o);
      if (p === null) return;
      piece = board.getPiece(p);
      if (piece == null) return;
      if ((piece.player != player) && (piece.type == type)) {
          r = true;
      }
  });
  return r;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design   = board.game.design;
  var general  = design.getPieceType("General");
  var mandarin = design.getPieceType("Mandarin");
  var horse    = design.getPieceType("Horse");
  var elephant = design.getPieceType("Elephant");
  var chariot  = design.getPieceType("Chariot");
  var cannon   = design.getPieceType("Cannon");
  var n  = design.getDirection("n");  var w  = design.getDirection("w");
  var s  = design.getDirection("s");  var e  = design.getDirection("e");
  var nw = design.getDirection("nw"); var sw = design.getDirection("sw");
  var ne = design.getDirection("ne"); var se = design.getDirection("se");
  _.each(board.moves, function(move) {
      var b = board.apply(move);
      var generals = findPieces(design, b, board.player, general);
      if ((generals.length == 0) ||
          checkDirection(design, b, board.player, generals, n, general, chariot, cannon) ||
          checkDirection(design, b, board.player, generals, e, general, chariot, cannon) ||
          checkDirection(design, b, board.player, generals, w, general, chariot, cannon) ||
          checkDirection(design, b, board.player, generals, s, general, chariot, cannon) ||
          checkDirection(design, b, board.player, generals, nw, mandarin) ||
          checkDirection(design, b, board.player, generals, ne, mandarin) ||
          checkDirection(design, b, board.player, generals, sw, mandarin) ||
          checkDirection(design, b, board.player, generals, se, mandarin) ||
          checkJump(design, b, board.player, generals, nw, n, horse)      ||
          checkJump(design, b, board.player, generals, nw, w, horse)      ||
          checkJump(design, b, board.player, generals, ne, n, horse)      ||
          checkJump(design, b, board.player, generals, ne, e, horse)      ||
          checkJump(design, b, board.player, generals, se, s, horse)      ||
          checkJump(design, b, board.player, generals, se, e, horse)      ||
          checkJump(design, b, board.player, generals, sw, s, horse)      ||
          checkJump(design, b, board.player, generals, sw, w, horse)      ||
          checkJump(design, b, board.player, generals, nw, nw, elephant)  ||
          checkJump(design, b, board.player, generals, nw, nw, elephant)  ||
          checkJump(design, b, board.player, generals, sw, sw, elephant)  ||
          checkJump(design, b, board.player, generals, se, se, elephant)) {
          move.failed = true;
      }
  });
  CheckInvariants(board);
}

})();
