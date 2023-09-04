(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "janggi-extension") {
     checkVersion(design, name, value);
  }
}

Dagaz.Model.go = function(url, turn) {
  var app = Dagaz.Controller.app;
  var board = app.board;
  var t = +turn;
  if (turn == 8) {
      if (_.indexOf([4, 5, 6, 7, 9], +board.turn) >= 0) t++;
  } else {
      if (board.turn == 5) t++;
  }
  window.location = url + "?turn=" + t;
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
  return checkGoals(design, board, player);
}

Dagaz.AI.eval = function(design, params, board, player) {
  var r = 0;
  var cannon  = design.getPieceType("Cannon");
  positions = _.filter(design.allPositions(), function(pos) {
      return board.getPiece(pos) !== null;
  });
  _.each(positions, function(pos) {
      var piece = board.getPiece(pos);
      var v = design.price[piece.type];
      if ((piece.type == cannon) && (positions.length > 16)) {
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

var checkFortress = function(design, board, player, pos, dir, fortress, soldier, chariot, cannon) {
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
      if ((piece !== null) && (piece.player != player) && (piece.type == cannon)) return true;
  } else {
      p = design.navigate(player, p, dir);
      if (p === null) return false;
      if (!design.inZone(fortress, player, pos)) return false;
      piece = board.getPiece(p);
      if ((piece !== null) && (piece.player != player) && (piece.type == chariot)) return true;
  }
  return false;
}

var checkDirection = function(design, board, player, pos, dir, soldier, chariot, cannon) {
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
  if (piece.type == cannon) return false;
  p = design.navigate(player, p, dir);
  if (p === null) return false;
  piece = board.getPiece(p);
  while (piece == null) {
      p = design.navigate(player, p, dir);
      if (p === null) return false;
      piece = board.getPiece(p);
  }
  return (piece.player != player) && (piece.type == cannon);
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

var checkElephant = function(design, board, player, pos, d, o, elephant) {
  var p = design.navigate(player, pos, d);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece !== null) return false;
  p = design.navigate(player, p, d);
  if (p === null) return false;
  piece = board.getPiece(p);
  if (piece !== null) return false;
  p = design.navigate(player, p, o);
  if (p === null) return false;
  piece = board.getPiece(p);
  if (piece === null) return false;
  return (piece.player != player) && (piece.type == elephant);
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design   = board.game.design;
  var soldier  = design.getPieceType("Soldier");
  var horse    = design.getPieceType("Horse");
  var elephant = design.getPieceType("Elephant");
  var chariot  = design.getPieceType("Chariot");
  var cannon   = design.getPieceType("Cannon");
  var n  = design.getDirection("n");  var w  = design.getDirection("w");
  var s  = design.getDirection("s");  var e  = design.getDirection("e");
  var nw = design.getDirection("nw"); var sw = design.getDirection("sw");
  var ne = design.getDirection("ne"); var se = design.getDirection("se");
  var fortress = design.getZone("fortress");
  _.each(board.moves, function(move) {
      var b = board.apply(move);
      var pos = findGeneral(design, b, board.player);
      if ((pos === null) ||
          checkDirection(design, b, board.player, pos, n, soldier, chariot, cannon) ||
          checkDirection(design, b, board.player, pos, w, soldier, chariot, cannon) ||
          checkDirection(design, b, board.player, pos, e, soldier, chariot, cannon) ||
          checkDirection(design, b, board.player, pos, s, null, chariot, cannon) ||
          checkFortress(design, b, board.player, pos, nw, fortress, soldier, chariot, cannon) ||
          checkFortress(design, b, board.player, pos, ne, fortress, soldier, chariot, cannon) ||
          checkFortress(design, b, board.player, pos, sw, fortress, null, chariot, cannon) ||
          checkFortress(design, b, board.player, pos, se, fortress, null, chariot, cannon) ||
          checkHorse(design,     b, board.player, pos, nw, n, horse) ||
          checkHorse(design,     b, board.player, pos, nw, w, horse) ||
          checkHorse(design,     b, board.player, pos, ne, n, horse) ||
          checkHorse(design,     b, board.player, pos, ne, e, horse) ||
          checkHorse(design,     b, board.player, pos, se, s, horse) ||
          checkHorse(design,     b, board.player, pos, se, e, horse) ||
          checkHorse(design,     b, board.player, pos, sw, s, horse) ||
          checkHorse(design,     b, board.player, pos, sw, w, horse) ||
          checkElephant(design,  b, board.player, pos, nw, n, elephant) ||
          checkElephant(design,  b, board.player, pos, nw, w, elephant) ||
          checkElephant(design,  b, board.player, pos, ne, n, elephant) ||
          checkElephant(design,  b, board.player, pos, ne, e, elephant) ||
          checkElephant(design,  b, board.player, pos, se, s, elephant) ||
          checkElephant(design,  b, board.player, pos, se, e, elephant) ||
          checkElephant(design,  b, board.player, pos, sw, s, elephant) ||
          checkElephant(design,  b, board.player, pos, sw, w, elephant)) {
          move.failed = true;
      }
  });
  CheckInvariants(board);
}

})();
