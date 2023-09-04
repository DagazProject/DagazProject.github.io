(function() {

var promote = [];

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "tenjiku-shogi-promotion") {
      promote[ 0] = 51; // Knight -> Side-Soldier!
      promote[ 1] = 53; // Iron-General -> Vertical-Soldier!
      promote[ 2] = 38; // Pawn -> Gold-General!
      promote[ 3] = 22; // Bishop -> Dragon-Horse!
      promote[ 5] = 20; // Rook -> Dragon-King!
      promote[ 7] = 57; // Queen -> Free-Eagle
      promote[11] = 45; // Horned-Falcon -> Bishop-General!
      promote[13] = 47; // Soaring-Eagle -> Rook-General!
      promote[17] = 58; // Lion -> Lion-Hawk
      promote[19] = 14; // Dragon-King -> Soaring-Eagle!
      promote[21] = 12; // Dragon-Horse -> Horned-Falcon!
      promote[23] = 18; // Kirin -> Lion!
      promote[24] =  8; // Phoenix -> Queen!
      promote[25] = 15; // Reverse-Chariot -> Whale
      promote[26] = 10; // Side-Mover -> Free-Boar
      promote[28] =  9; // Vertical-Mover -> Flying-Ox
      promote[31] = 16; // Lance -> White-Horse
      promote[34] = 30; // Blind-Tiger -> Flying-Stag
      promote[35] = 33; // Drunk-Elephant -> Prince
      promote[36] =  4; // Ferocious-Leopard -> Bishop!
      promote[37] =  6; // Gold-General -> Rook!
      promote[39] = 29; // Silver-General -> Vertical-Mover!
      promote[40] = 27; // Copper-General -> Side-Mover!
      promote[41] = 59; // Chariot-Soldier -> Heavenly-Tetrarch
      promote[43] = 60; // Dog -> Multi-General
      promote[44] = 48; // Bishop-General -> Vice-General
      promote[46] = 49; // Rook-General -> Great-General
      promote[50] = 55; // Side-Soldier -> Water-Buffalo!
      promote[52] = 42; // Vertical-Soldier -> Chariot-Soldier!
      promote[54] = 56; // Water-Buffalo -> Fire-Demon
  } else {
      checkVersion(design, name, value);
  }
}

var isPrefix = function(board, move) {
  for (var i = 0; i < board.moves.length; i++) {
       var m = board.moves[i];
       if (move.actions.length >= m.actions.length) continue;
       var r = true;
       for (var j = 0; j < move.actions.length; j++) {
            if ((move.actions[j][3] != m.actions[j][3]) ||
               ((move.actions[j][0] !== null) && (m.actions[j][0] === null)) ||
               ((move.actions[j][0] === null) && (m.actions[j][0] !== null)) ||
               ((move.actions[j][1] !== null) && (m.actions[j][1] === null)) ||
               ((move.actions[j][1] === null) && (m.actions[j][1] !== null)) ||
               (_.intersection(move.actions[j][0], m.actions[j][0]).length == 0) ||
               (_.intersection(move.actions[j][1], m.actions[j][1]).length == 0)) {
                r = false;
                break;
            }
       }
       if (r) return true;
  }
  return false;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var none   = design.getPieceType("None");
  var n      = design.getDirection("n");
  _.chain(board.moves)
   .filter(function(move) {
        return move.actions.length > 0;
    })
   .each(function(move) {
        var pos = null;
        var ix  = null;
        for (var i = 0; i < move.actions.length; i++) {
             if ((move.actions[i][0] !== null) && (move.actions[i][1] !== null)) {
                 if (pos === null) {
                     pos = move.actions[i][0][0];
                 }
                 ix = i;
             }
        }
        if ((pos !== null) && (ix !== null)) {
            if ((move.actions[ix][2] !== null) && (move.actions[ix][2][0].type == none)) return;
            var isForced = false;
            var target   = move.actions[ix][1][0];
            var piece    = board.getPiece(pos);
            var enemy    = board.getPiece(target);
            if ((piece !== null) && promote[piece.type]) {
                if (piece.type == 0) {
                    var p = design.navigate(board.player, target, n);
                    if (p !== null) {
                        p = design.navigate(board.player, p, n);
                        if (p === null) {
                            isForced = true;
                        }
                    }
                }
                if ((piece.type == 2) || (piece.type == 31) || (piece.type == 1)) {
                    var p = design.navigate(board.player, target, n);
                    if (p === null) {
                        isForced = true;
                    }
                }
                if ((design.inZone(0, board.player, target) && !design.inZone(0, board.player, pos)) ||
                    (design.inZone(0, board.player, pos) && (enemy !== null) && (enemy.player != board.player)) || isForced) {
                    var promoted = piece.promote(promote[piece.type]);
                    if (piece.type == 54) {
                        promoted = promoted.setValue(0, 1);
                    }
                    var action    = [];
                    action[0]     = move.actions[ix][0];
                    action[1]     = move.actions[ix][1];
                    action[2]     = isForced ? [ promoted ] : [ piece, promoted ];
                    if (isPrefix(board, move)) {
                        action[0] = move.actions[ix][1];
                        action[3] = move.actions[ix][3] + 1;
                        move.actions.push(action);
                    } else {
                        action[3] = move.actions[ix][3];
                        move.actions[ix] = action;
                    }
                }
            }
        }
    });
  var demon = null;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.player != board.player) && (piece.type == 56) && (piece.getValue(0) == 1)) {
          demon = pos;
      }
  });
  if (demon !== null) {
      _.each(board.moves, function(move) {
          var start  = null;
          var target = null;
          var pn = 1;
          _.each(move.actions, function(a) {
              if ((a[0] !== null) && (a[1] !== null)) {
                  if (start === null) {
                      start = a[0][0];
                  }
                  target = a[1][0];
                  pn = a[3];
              }
              if ((a[0] !== null) && (a[1] === null) && (_.indexOf(a[0], demon) >= 0)) {
                  demon = null;
              }
          });
          if ((demon !== null) && (target !== null) && (target != demon)) {
              var piece = board.getPiece(demon);
              if (piece !== null) {
                  piece = piece.setValue(0, 0);
                  move.movePiece(demon, demon, piece, pn);
                  _.each(design.allDirections(), function(dir) {
                      var pos = design.navigate(board.player, demon, dir);
                      if ((pos !== null) && (pos != start)) {
                          var p = board.getPiece(pos);
                          if ((p !== null) && (p.player == board.player)) {
                              move.capturePiece(pos, pn);
                          }
                          if (pos == target) {
                              move.capturePiece(pos, pn);
                          }
                      }
                  });
              }
          }
      });
  }
  CheckInvariants(board);
}

})();
