(function() {

Dagaz.AI.AI_FRAME      = 3000;
Dagaz.AI.getForcedMove = Dagaz.AI.getChessForcedMove;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "yitongqi-extension") {
     checkVersion(design, name, value);
  }
}

Dagaz.AI.eval = function(design, params, board, player) {
  var r = 0;
  var soldier = design.getPieceType("Soldier");
  var cannon  = design.getPieceType("Cannon");
  var enemy   = design.getZone("enemy");
  positions = _.filter(design.allPositions(), function(pos) {
      return board.getPiece(pos) !== null;
  });
  _.each(positions, function(pos) {
      var piece = board.getPiece(pos);
      var v = design.price[piece.type];
      if ((piece.type == cannon) && (positions.length > 16)) {
          v++;
      }
      if ((piece.type == soldier) && design.inZone(enemy, piece.player, pos)) {
          v++;
      }
      if (piece.player != player) {
         v = -v;
      }
      r += v;
  });
  return r;
}

var findGeneral = function(design, board, player) {
  var general   = design.getPieceType("General");
  var fortress  = design.getZone("fortress");
  if (fortress !== null) {
      var positions = design.zones[fortress][player];
      for (var i = 0; i < positions.length; i++) {
           var piece = board.getPiece(positions[i]);
           if ((piece !== null) && (piece.type == general) && (piece.player == player)) {
               return positions[i];
           }
      }
  }
  return null;
}

var checkDirection = function(design, board, player, pos, dir, soldier, chariot, general, cannon, manchu) {
  var p = design.navigate(player, pos, dir);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if ((piece !== null) && (piece.type == soldier) && (piece.player != player)) return true;
  while (piece == null) {
      p = design.navigate(player, p, dir);
      if (p === null) return false;
      piece = board.getPiece(p);
  }
  if ((piece.player != player) && ((piece.type == chariot) || (piece.type == general) || (piece.type == manchu))) return true;
  p = design.navigate(player, p, dir);
  if (p === null) return false;
  piece = board.getPiece(p);
  while (piece == null) {
      p = design.navigate(player, p, dir);
      if (p === null) return false;
      piece = board.getPiece(p);
  }
  return (piece.player != player) && ((piece.type == cannon) || (piece.type == manchu));
}

var checkHorse = function(design, board, player, pos, d, o, horse, manchu) {
  var p = design.navigate(player, pos, d);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece !== null) return false;
  p = design.navigate(player, p, o);
  if (p === null) return false;
  piece = board.getPiece(p);
  if (piece == null) return false;
  return (piece.player != player) && ((piece.type == horse) || (piece.type == manchu));
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design  = board.game.design;
  var general = design.getPieceType("General");
  var soldier = design.getPieceType("Soldier");
  var horse   = design.getPieceType("Horse");
  var chariot = design.getPieceType("Chariot");
  var cannon  = design.getPieceType("Cannon");
  var manchu  = design.getPieceType("Manchu");
  var n  = design.getDirection("n");  var w  = design.getDirection("w");
  var s  = design.getDirection("s");  var e  = design.getDirection("e");
  var nw = design.getDirection("nw"); var sw = design.getDirection("sw");
  var ne = design.getDirection("ne"); var se = design.getDirection("se");
  _.each(board.moves, function(move) {
      var b = board.apply(move);
      var pos = findGeneral(design, b, board.player);
      if ((pos === null) ||
          checkDirection(design, b, board.player, pos, n, soldier, chariot, general, cannon, manchu) ||
          checkDirection(design, b, board.player, pos, w, soldier, chariot, general, cannon, manchu) ||
          checkDirection(design, b, board.player, pos, e, soldier, chariot, general, cannon, manchu) ||
          checkDirection(design, b, board.player, pos, s, null, chariot, general, cannon, manchu) ||
          checkHorse(design, b, board.player, pos, nw, n, horse, manchu) ||
          checkHorse(design, b, board.player, pos, nw, w, horse, manchu) ||
          checkHorse(design, b, board.player, pos, ne, n, horse, manchu) ||
          checkHorse(design, b, board.player, pos, ne, e, horse, manchu) ||
          checkHorse(design, b, board.player, pos, se, s, horse, manchu) ||
          checkHorse(design, b, board.player, pos, se, e, horse, manchu) ||
          checkHorse(design, b, board.player, pos, sw, s, horse, manchu) ||
          checkHorse(design, b, board.player, pos, sw, w, horse, manchu)) {
          move.failed = true;
      }
  });
  CheckInvariants(board);
}

})();
