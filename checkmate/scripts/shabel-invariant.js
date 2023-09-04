(function() {

Dagaz.AI.AI_FRAME      = 2000;
Dagaz.AI.getForcedMove = Dagaz.AI.getChessForcedMove;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "shabel-invariant") {
      checkVersion(design, name, value);
  }
}

if (!_.isUndefined(Dagaz.Controller.addSound)) {
    Dagaz.Controller.addSound(10, "../sounds/wind.wav");
}

var canEatMan = function(design, board, pos, dir) {
  var p = design.navigate(board.player, pos, dir);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece === null) return false;
  if (piece.player == board.player) return false;
  p = design.navigate(board.player, p, dir);
  if (p === null) return false;
  return board.getPiece(p) === null;
}

var canEatDama = function(design, board, pos, dir) {
  var p = design.navigate(board.player, pos, dir);
  while (p !== null) {
      if (board.getPiece(p) !== null) break;
      p = design.navigate(board.player, p, dir);
  }
  var piece = board.getPiece(p);
  if (piece === null) return false;
  if (piece.player == board.player) return false;
  p = design.navigate(board.player, p, dir);
  if (p === null) return false;
  return board.getPiece(p) === null;
}

var canEat = function(design, board, player, pos) {
  var piece = board.getPiece(pos);
  if (piece === null) return false;
  for (var ix = 0; ix < Dagaz.Model.DIRS.length; ix++) {
      if (piece.type == Dagaz.Model.MAN) {
          if (canEatMan(design, board, pos, Dagaz.Model.DIRS[ix])) return true;
      } else {
          if (canEatDama(design, board, pos, Dagaz.Model.DIRS[ix])) return true;
      }
  }
  return false;
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

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var king = design.getPieceType("King");
  if (findPiece(design, board, player, king) === null) return -1;
  board.generate(design);
  if (board.moves.length == 0) {
      for (var pos = 0; pos < 64; pos++) {
           var piece = board.getPiece(pos);
           if ((piece !== null) && (piece.player == board.player) && (piece.type < 2)) {
               if (canEat(design, board, piece.player, pos)) return 1;
           }
      }
  }
  return checkGoals(design, board, player);
}

var notSafe = function(design, board, player, king) {
  var pos = findPiece(design, board, player, king);
  if (pos === null) return true;
  board.generateInternal(board, false);
  var r = false;
  _.chain(board.moves)
   .filter(function(move) {
       return move.actions.length > 0;
    })
   .each(function(move) {
       _.chain(move.actions)
        .filter(function(action) {
             return (action[0] !== null) && (action[1] !== null);
         })
        .each(function(action) {
             if (action[1][0] == pos) {
                 r = true;
             }
         });
    });
  return r;
}

var noMen = function(design, board, player) {
  for (var pos = 0; pos < design.positions.length; pos++) {
     var piece = board.getPiece(pos);
     if (piece === null) continue;
     if (piece.player == player) continue;
     if ((piece.type != Dagaz.Model.MAN) && (piece.type != Dagaz.Model.MAN + 1))  continue;
     if (canEat(design, board, piece.player, pos)) return false;
  }
  return true;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var king   = design.getPieceType("King");
  _.chain(board.moves)
   .filter(function(move) {
       return move.actions.length > 0;
    })
   .each(function(move) {
       var b = board.apply(move);
       if (noMen(design, b, board.player)) return;
       if (notSafe(design, b, board.player, king)) {
           move.failed = true;
       }
    });
  CheckInvariants(board);
}

})();
