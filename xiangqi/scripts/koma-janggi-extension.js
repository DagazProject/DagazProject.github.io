(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "koma-janggi-extension") {
     checkVersion(design, name, value);
  }
}

var isOpposite = function(design, board, general) {
  var pos = null;
  var player = null;
  _.each(design.allPositions(), function(p) {
      var piece = board.getPiece(p);
      if ((piece !== null) && (piece.player != board.player) && (piece.type == general)) {
          pos = p;
          player = piece.player;
      }
  });
  if (pos !== null) {
      var n = design.getDirection("n");
      var p = design.navigate(player, pos, n);
      while (p !== null) {
          var piece = board.getPiece(p);
          if (piece !== null) {
              if (piece.type == general) {
                  return true;
              }
              break;
          }
          p = design.navigate(player, p, n);
      }
  }
  return false;
}

var isDraw = function(design, board, general) {
  if (board.parent === null) return false;
  if (isOpposite(design, board, general)) {
      return isOpposite(design, board.parent, general);
  }
  return false;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var general = design.getPieceType("General");
  if (isDraw(design, board, general)) {
      return 0;
  }
  board.generate(design);
  if (board.moves.length == 0) {
      if (board.player == player) {
          return -1;
      } else {
          return 1;
      }
  }  
  return checkGoals(design, board, player);
}

Dagaz.AI.eval = function(design, params, board, player) {
  var r = 0;
  positions = _.filter(design.allPositions(), function(pos) {
      return board.getPiece(pos) !== null;
  });
  _.each(positions, function(pos) {
      var piece = board.getPiece(pos);
      var v = design.price[piece.type];
      if (piece.player != player) {
         v = -v;
      }
      r += v;
  });
  return r;
}

var findGeneral = function(design, board, player) {
  var general   = design.getPieceType("General");
  var fortress  = design.getZone("palace");
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

var checkFortress = function(design, board, player, pos, dir, fortress, soldier, chariot) {
  if (!design.inZone(fortress, player, pos)) return false;
  var p = design.navigate(player, pos, dir);
  if (p === null) return false;
  if (!design.inZone(fortress, player, p)) return false;
  var piece = board.getPiece(p);
  if (piece !== null) {
      if ((piece.player != player) && ((piece.type == soldier) || (piece.type == chariot))) return true;
      p = design.navigate(player, p, dir);
      if (p === null) return false;
      if (!design.inZone(fortress, player, pos)) return false;
      piece = board.getPiece(p);
  } else {
      p = design.navigate(player, p, dir);
      if (p === null) return false;
      if (!design.inZone(fortress, player, pos)) return false;
      piece = board.getPiece(p);
      if ((piece !== null) && (piece.player != player) && (piece.type == chariot)) return true;
  }
  return false;
}

var checkDirection = function(design, board, player, pos, dir, soldier, chariot) {
  var p = design.navigate(player, pos, dir);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if ((piece !== null) && (piece.type == soldier) && (piece.player != player)) return true;
  while (piece == null) {
      p = design.navigate(player, p, dir);
      if (p === null) return false;
      piece = board.getPiece(p);
  }
  if ((piece.player != player) && (piece.type == chariot)) return true;
  p = design.navigate(player, p, dir);
  if (p === null) return false;
  piece = board.getPiece(p);
  while (piece == null) {
      p = design.navigate(player, p, dir);
      if (p === null) return false;
      piece = board.getPiece(p);
  }
  return false;
}

var checkHorse = function(design, board, player, pos, d, o, horse) {
  var p = design.navigate(player, pos, d);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece !== null) return false;
  p = design.navigate(player, p, o);
  if (p === null) return false;
  piece = board.getPiece(p);
  if (piece == null) return false;
  return (piece.player != player) && (piece.type == horse);
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design   = board.game.design;
  var soldier  = design.getPieceType("Soldier");
  var horse    = design.getPieceType("Horse");
  var chariot  = design.getPieceType("Chariot");
  var n  = design.getDirection("n");  var w  = design.getDirection("w");
  var s  = design.getDirection("s");  var e  = design.getDirection("e");
  var nw = design.getDirection("nw"); var sw = design.getDirection("sw");
  var ne = design.getDirection("ne"); var se = design.getDirection("se");
  var fortress = design.getZone("fortress");
  _.each(board.moves, function(move) {
      var b = board.apply(move);
      var pos = findGeneral(design, b, board.player);     
      if ((pos === null) ||
          checkDirection(design, b, board.player, pos, n, soldier, chariot) ||
          checkDirection(design, b, board.player, pos, w, soldier, chariot) ||
          checkDirection(design, b, board.player, pos, e, soldier, chariot) ||
          checkDirection(design, b, board.player, pos, s, null, chariot) ||
          checkFortress(design, b, board.player, pos, nw, fortress, soldier, chariot) ||
          checkFortress(design, b, board.player, pos, ne, fortress, soldier, chariot) ||
          checkFortress(design, b, board.player, pos, sw, fortress, null, chariot) ||
          checkFortress(design, b, board.player, pos, se, fortress, null, chariot) ||
          checkHorse(design,     b, board.player, pos, nw, n, horse) ||
          checkHorse(design,     b, board.player, pos, nw, w, horse) ||
          checkHorse(design,     b, board.player, pos, ne, n, horse) ||
          checkHorse(design,     b, board.player, pos, ne, e, horse) ||
          checkHorse(design,     b, board.player, pos, se, s, horse) ||
          checkHorse(design,     b, board.player, pos, se, e, horse) ||
          checkHorse(design,     b, board.player, pos, sw, s, horse) ||
          checkHorse(design,     b, board.player, pos, sw, w, horse)) {
          move.failed = true;
      }
  });
  CheckInvariants(board);
}

})();
