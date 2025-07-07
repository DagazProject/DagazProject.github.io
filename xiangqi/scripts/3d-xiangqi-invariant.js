(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "3d-xiangqi-invariant") {
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
      }
      if (a[1] !== null) {
          r = r + Dagaz.Model.posToString(a[1][0]);
      }
  });
  return r;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  board.generate(design);
  if (board.moves.length == 0) return 1;
  return checkGoals(design, board, player);
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

var getX = function(pos) {
  return pos % 5;
}

var getY = function(pos) {
  pos = (pos/5) | 0;
  return pos % 10;
}

var getZ = function(pos) {
  pos = (pos/50) | 0;
  return pos % 5;
}

var getPos = function(x, y, z) {
  return z*50 + y*5 + x;
}

var checkGenerals = function(design, board, player) {
  var pos = [];
  _.each(design.allPositions(), function(p) {
      var piece = board.getPiece(p);
      if (piece === null) return;
      if (piece.type == 7) pos.push({
          x: getX(p),
          y: getY(p),
          z: getZ(p),
      });
  });
  if (pos.length != 2) return false;
  if (pos[0].x == pos[1].x) {
      const x = pos[0].x;
      for (let y = Math.min(pos[0].y, pos[1].y)+1; y < Math.max(pos[0].y, pos[1].y); y++) {
          for (let z = Math.min(pos[0].z, pos[1].z); z <= Math.max(pos[0].z, pos[1].z); z++) {
              const p = getPos(x, y, z);
              const piece = board.getPiece(p);
              if ((piece !== null) && (piece.type != 7)) return false;
          }
      }
      return true;
  } else if (pos[0].z == pos[1].z) {
      const z = pos[0].z;
      for (let y = Math.min(pos[0].y, pos[1].y)+1; y < Math.max(pos[0].y, pos[1].y); y++) {
          for (let x = Math.min(pos[0].x, pos[1].x); x <= Math.max(pos[0].x, pos[1].x); x++) {
              const p = getPos(x, y, z);
              const piece = board.getPiece(p);
              if ((piece !== null) && (piece.type != 7)) return false;
          }
      }
      return true;
  } else return false;
}

var checkDirection = function(design, board, player, pos, dir, soldier, chariot, general, cannon) {
  var p = design.navigate(player, pos, dir);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if ((piece !== null) && (piece.type == soldier) && (piece.player != player)) return true;
  while (piece == null) {
      p = design.navigate(player, p, dir);
      if (p === null) return false;
      piece = board.getPiece(p);
  }
  if ((piece.player != player) && ((piece.type == chariot) || (piece.type == general))) return true;
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

var checkGlide = function(design, board, player, pos, d, o, unicorn) {
  var p = design.navigate(player, pos, d);
  if (p === null) return false;
  p = design.navigate(player, p, o);
  if (p === null) return false;
  var piece = board.getPiece(p);
  while (piece == null) {
      p = design.navigate(player, p, d);
      if (p === null) return false;
      p = design.navigate(player, p, o);
      if (p === null) return false;
      piece = board.getPiece(p);
  }
  return (piece.player != player) && (piece.type == unicorn);
}

var checkStep = function(design, board, player, pos, d, o, soldier) {
  var p = design.navigate(player, pos, d);
  if (p === null) return false;
  p = design.navigate(player, p, o);
  if (p === null) return false;
  piece = board.getPiece(p);
  if (piece == null) return false;
  return (piece.player != player) && (piece.type == horse);
}

var checkHorse = function(design, board, player, pos, d, o, soldier) {
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

var checkHorse2 = function(design, board, player, pos, d, o, horse) {
  var p = design.navigate(player, pos, d);
  if (p === null) return false;
  p = design.navigate(player, p, o);
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
  var design  = board.game.design;
  var general = design.getPieceType("General");
  var soldier = design.getPieceType("Soldier");
  var horse   = design.getPieceType("Horse");
  var chariot = design.getPieceType("Chariot");
  var cannon  = design.getPieceType("Cannon");
  var unicorn = design.getPieceType("Unicorn");
  var u  = design.getDirection("u");  var d  = design.getDirection("d");
  var n  = design.getDirection("n");  var w  = design.getDirection("w");
  var s  = design.getDirection("s");  var e  = design.getDirection("e");
  var nw = design.getDirection("nw"); var sw = design.getDirection("sw");
  var ne = design.getDirection("ne"); var se = design.getDirection("se");
  _.each(board.moves, function(move) {
      if (Dagaz.AI.inProgress) return;
      var b = board.apply(move);
      var pos = findGeneral(design, b, board.player);
      if ((pos === null) ||
          checkDirection(design, b, board.player, pos, u, soldier, chariot, general, cannon) ||
          checkDirection(design, b, board.player, pos, d, soldier, chariot, general, cannon) ||
          checkDirection(design, b, board.player, pos, n, soldier, chariot, general, cannon) ||
          checkDirection(design, b, board.player, pos, w, soldier, chariot, general, cannon) ||
          checkDirection(design, b, board.player, pos, e, soldier, chariot, general, cannon) ||
          checkDirection(design, b, board.player, pos, s, null, chariot, general, cannon) ||
          checkGenerals(design, board, board.player) ||
          checkStep(design, b, board.player, pos, e, u, soldier) ||
          checkStep(design, b, board.player, pos, w, u, soldier) ||
          checkStep(design, b, board.player, pos, e, d, soldier) ||
          checkStep(design, b, board.player, pos, w, d, soldier) ||
          checkHorse2(design, b, board.player, pos, u, n, horse) ||
          checkHorse2(design, b, board.player, pos, u, e, horse) ||
          checkHorse2(design, b, board.player, pos, u, w, horse) ||
          checkHorse2(design, b, board.player, pos, u, s, horse) ||
          checkHorse2(design, b, board.player, pos, d, n, horse) ||
          checkHorse2(design, b, board.player, pos, d, e, horse) ||
          checkHorse2(design, b, board.player, pos, d, w, horse) ||
          checkHorse2(design, b, board.player, pos, d, s, horse) ||
          checkHorse2(design, b, board.player, pos, n, u, horse) ||
          checkHorse2(design, b, board.player, pos, e, u, horse) ||
          checkHorse2(design, b, board.player, pos, w, u, horse) ||
          checkHorse2(design, b, board.player, pos, s, u, horse) ||
          checkHorse2(design, b, board.player, pos, n, d, horse) ||
          checkHorse2(design, b, board.player, pos, e, d, horse) ||
          checkHorse2(design, b, board.player, pos, w, d, horse) ||
          checkHorse2(design, b, board.player, pos, s, d, horse) ||
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
