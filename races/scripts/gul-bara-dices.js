(function() {

var isFuzzy = true;
var isBonus = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "gul-bara-dices") {
      if (value == "bonus") isBonus = true;
  } else {
      checkVersion(design, name, value);
  }
}

var isPermited = function(design, board, move, value, alt) {
  if (move.mode == value) return true;
  if (alt === null) return false;
  return (value > alt) && (move.mode == alt);
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var inHome = true;
  if (isFuzzy) {
      _.each(design.allPositions(), function(pos) {
          if (!inHome) return;
          var piece = board.getPiece(pos);
          if ((piece === null) || (piece.type > 0) || (piece.player != board.player)) return;
          if (!design.inZone(0, piece.player, pos)) inHome = false;
      });
  }
  var alt = null;
  if (inHome && isFuzzy) {
      var pos = design.navigate(board.player, 0, 6);
      for (var ix = 1; pos !== null; ix++) {
           var piece = board.getPiece(pos);
           if ((piece !== null) && (piece.player == board.player)) {
               alt = ix;
           }
           pos = design.navigate(board.player, pos, 6);
      }
  }
  var cnt = 0;
  var pos = design.navigate(board.player, 0, 0);
  while (pos !== null) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.player == board.player)) {
          console.log(piece);
          var v = piece.getValue(0);
          if (v !== null) {
              if (v > 1) cnt++;
          }
          cnt++;
      }
      pos = design.navigate(board.player, pos, 0);
  }
  _.each(board.moves, function(move) {
      if ((move.mode > 0) && (move.mode < 7)) {
          for (var pos = design.navigate(board.player, 0, 0); pos !== null; pos = design.navigate(board.player, pos, 0)) {
               var piece = board.getPiece(pos);
               if ((piece !== null) && isPermited(design, board, move, design.price[piece.type], alt)) {
                   var v = piece.getValue(0);
                   if ((v !== null) && (v > 1)) {
                        piece = piece.setValue(0, v - 1);
                        move.movePiece(pos, pos, piece);
                   } else {
                        if (isBonus && ((board.turn == 5) || (board.turn == 11))) {
                            if (piece.type < 7) {
                                var dice = Dagaz.Model.createPiece(design.price[piece.type] + 6, board.player).setValue(0, 2);
                                _.each(design.allPositions(), function(pos) {
                                    if (!design.inZone(1, board.player, pos)) return;
                                    move.dropPiece(pos, dice);
                                });
                                if (board.turn == 5) {
                                    move.goTo(2);
                                } else {
                                    move.goTo(8);
                                }
                            } else {
                                if (board.turn == 5) {
                                    move.goTo(0);
                                } else {
                                    move.goTo(6);
                                }
                            }
                        } else {
                            if ((cnt == 1) && (board.getPiece(0) !== null)) {
                                var v = board.getPiece(0).type;
                                if (v < 6) {
                                    move.dropPiece(0, Dagaz.Model.createPiece(+v + 1, board.player));
                                    if (board.player == 1) {
                                        move.dropPiece(445, Dagaz.Model.createPiece(+v + 1, board.player).setValue(0, 2));
                                        move.dropPiece(446, Dagaz.Model.createPiece(+v + 1, board.player).setValue(0, 2));
                                        move.goTo(2);
                                    } else {
                                        move.dropPiece(443, Dagaz.Model.createPiece(+v + 1, board.player).setValue(0, 2));
                                        move.dropPiece(444, Dagaz.Model.createPiece(+v + 1, board.player).setValue(0, 2));
                                        move.goTo(8);
                                    }
                                } else {
                                    move.capturePiece(0);
                                    move.capturePiece(pos);
                                }
                            } else {
                                move.capturePiece(pos);
                            }
                        }
                   }
                   return;
               }
          }
          move.failed = true;
      }
  });
  CheckInvariants(board);
}

})();
