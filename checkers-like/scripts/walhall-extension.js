(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "walhall-extension") {
      checkVersion(design, name, value);
  }
}

Dagaz.AI.eval = function(design, params, board, player) {
  var r = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
          var v = design.price[piece.type] + ((pos / 8) | 0);
          if (!Dagaz.AI.isFriend(player, piece.player)) {
              v = -v;
          }
          r += v;
      }
  });
  return r;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var all = 0;
  var goal = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.player == 2)) {
          if (piece.type == 2) {
              goal++;
          }
          all++;
      }
  });
  if (goal >= 4) {
      if (player == 2) {
          return 1;
      } else {
          return -1;
      }
  }
  if (all < 4) {
      if (player == 1) {
          return 1;
      } else {
          return -1;
      }
  }
  return checkGoals(design, board, player);
}

var isDefendedDir = function(design, board, pos, dir, type) {
  var pos = design.navigate(board.player, pos, dir);
  if (pos === null) return false;
  var piece = board.getPiece(pos);
  if (piece === null) return false;
  return piece.type == type;
}

var isDefended = function(design, board, pos) {
  return isDefendedDir(design, board, pos, design.getDirection("n"), design.getPieceType("ValkyrieA")) || isDefendedDir(design, board, pos, design.getDirection("nw"), design.getPieceType("ValkyrieR")) ||
         isDefendedDir(design, board, pos, design.getDirection("s"), design.getPieceType("ValkyrieA")) || isDefendedDir(design, board, pos, design.getDirection("se"), design.getPieceType("ValkyrieR")) ||
         isDefendedDir(design, board, pos, design.getDirection("w"), design.getPieceType("ValkyrieA")) || isDefendedDir(design, board, pos, design.getDirection("sw"), design.getPieceType("ValkyrieR")) ||
         isDefendedDir(design, board, pos, design.getDirection("e"), design.getPieceType("ValkyrieA")) || isDefendedDir(design, board, pos, design.getDirection("ne"), design.getPieceType("ValkyrieR"));
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.chain(board.moves)
   .filter(function(move) {
        if (move.actions.length != 1) return false;
        return (move.actions[0][0] !== null) && (move.actions[0][1] !== null);
    })
   .each(function(move) {
        var from  = move.actions[0][0][0];
        var to    = move.actions[0][1][0];
        var dir   = design.findDirection(from, to);
        var piece = board.getPiece(from);
        if ((dir !== null) && (piece !== null) && (+piece.type <= 2)) {
             var pos = design.navigate(0, from, dir);
             while (pos !== null) {
//               if (isDefended(design, board, pos)) break;
                 var p = board.getPiece(pos);
                 if ((p === null) || (p.player == piece.player)) break;
                 move.capturePiece(pos);
//               pos = design.navigate(0, pos, dir);
                 return;
             }
             pos = design.navigate(board.player, to, dir);
             if (pos !== null) {
//               if (isDefended(design, board, pos)) break;
                 var p = board.getPiece(pos);
                 if ((p === null) || (p.player == piece.player)) return;
                 move.capturePiece(pos);
//               pos = design.navigate(board.player, pos, dir);
             }
        }
    });
  CheckInvariants(board);
}

})();
