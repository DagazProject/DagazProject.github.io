(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "wojiaoqi-extension") {
     checkVersion(design, name, value);
  }
}

Dagaz.Model.moveToString = function(move) {
  var r = "";
  _.each(move.actions, function(a) {
      if (a[1] === null) return;
      if (r != "") {
          r = r + " ";
      }
      if (a[0] != null) {
          r = r + Dagaz.Model.posToString(a[0][0]);
          if (a[1] !== null) {
              r = r + ' - ';
          }
      }
      if (a[1] !== null) {
          r = r + Dagaz.Model.posToString(a[1][0]);
      }
  });
  return r;
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var r = 1;
  if (move.actions.length > 0) {
      var pos = move.actions[0][1][0];
      var piece = board.getPiece(pos);
      if (piece !== null) {
          r += design.price[piece.type];
      }
  }
  return r;
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

var checkOpposite = function(design, board, player, pos, dir, general) {
  var p = design.navigate(player, pos, dir);
  if (p === null) return false;
  var piece = board.getPiece(p);
  while (piece == null) {
      p = design.navigate(player, p, dir);
      if (p === null) return false;
      piece = board.getPiece(p);
  }
  if (piece.player == player) return false;
  return piece.type == general;
}

var checkDirection = function(design, board, player, pos, dir, soldier, chariot, cannon) {
  var p = design.navigate(player, pos, dir);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if ((piece !== null) && (piece.type == soldier) && (piece.player != player)) return true;
  if (!chariot) return false;
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

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  board.generate(design);
  if (board.moves.length == 0) return 1;
  return checkGoals(design, board, player);
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design  = board.game.design;
  var general = design.getPieceType("General");
  var soldier = design.getPieceType("Soldier");
  var dun     = design.getPieceType("Dun");
  var horse   = design.getPieceType("Horse");
  var chariot = design.getPieceType("Chariot");
  var cannon  = design.getPieceType("Cannon");
  var n  = design.getDirection("n");  var w  = design.getDirection("w");
  var s  = design.getDirection("s");  var e  = design.getDirection("e");
  var nw = design.getDirection("nw"); var sw = design.getDirection("sw");
  var ne = design.getDirection("ne"); var se = design.getDirection("se");
  var nn = design.getDirection("nn");
  _.each(board.moves, function(move) {
          var b = board.apply(move);
          var pos = findGeneral(design, b, board.player);
          if ((pos === null) ||
              checkOpposite(design, b, board.player, pos, nn, general) ||
              checkDirection(design, b, board.player, pos, n, soldier, chariot, cannon) ||
              checkDirection(design, b, board.player, pos, w, soldier, chariot, cannon) ||
              checkDirection(design, b, board.player, pos, e, soldier, chariot, cannon) ||
              checkDirection(design, b, board.player, pos, s, soldier, chariot, cannon) ||
              checkDirection(design, b, board.player, pos, nw, dun) ||
              checkDirection(design, b, board.player, pos, sw, dun) ||
              checkDirection(design, b, board.player, pos, ne, dun) ||
              checkDirection(design, b, board.player, pos, se, dun) ||
              checkHorse(design, b, board.player, pos, nw, n, horse) ||
              checkHorse(design, b, board.player, pos, nw, w, horse) ||
              checkHorse(design, b, board.player, pos, ne, n, horse) ||
              checkHorse(design, b, board.player, pos, ne, e, horse) ||
              checkHorse(design, b, board.player, pos, se, s, horse) ||
              checkHorse(design, b, board.player, pos, se, e, horse) ||
              checkHorse(design, b, board.player, pos, sw, s, horse) ||
              checkHorse(design, b, board.player, pos, sw, w, horse)) {
              move.failed = true;
          }
      });
  CheckInvariants(board);
}

})();
