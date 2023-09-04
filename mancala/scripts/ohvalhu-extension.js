(function() {

Dagaz.Model.WIN_CNT = 128;
Dagaz.Model.SIZE    = 17;

Dagaz.View.DX       = 0;
Dagaz.View.DY       = 0;
Dagaz.View.MX       = 25;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "ohvalhu-extension") {
      checkVersion(design, name, value);
  }
}

var calcSeeds = function(design, board, player) {
  var r = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (+piece.type == 0) && (piece.player == player)) {
          var v = Math.abs(+piece.getValue(0));
          if (v !== null) r += v;
      }
  });
  return r;
}

Dagaz.Model.continue = function(design, board, text) {
  var x1 = calcSeeds(design, board, 1); 
  var x2 = calcSeeds(design, board, 2);
  var t = 0;
  if (x2 < x1) {
      t = 1;
  }
  if ((x1 < 8) || (x2 < 8)) return null;
  var str = "?setup=";
  var c = (x2 / 8) | 0;
  if (c > 8) c = 8;
  x2 -= c * 8;
  for (var i = 0; i < 8 - c; i++) {
     str = str + "2:2=1;";
  }
  for (var i = 0; i < c; i++) {
     str = str + "0:2=8;";
  }
  c = (x1 / 8) | 0;
  if (c > 8) c = 8;
  x1 -= c * 8;
  for (var i = 0; i < c; i++) {
     str = str + "0:1=8;";
  }
  for (var i = 0; i < 8 - c; i++) {
     str = str + "2:1=1;";
  }
  if (x2 > 0) {
      str = str + "0:2=" + x2 + ";";
  }
  if (x1 > 0) {
      str = str + "0:1=" + x1 + ";";
  }
  str = str + ";&turn=" + t;
  return str;
}

var addReserve = function(x, y) {
  var r = Math.abs(x) + y;
  if (x < 0) {
      return -r;
  } else {
      return r;
  }
}

var toReserve = function(design, board, player, move, cnt) {
  var pos = design.navigate(player, 0, 2);
  if ((cnt != 0) && (pos !== null)) {
      piece = board.getPiece(pos);
      if (piece === null) {
          piece = Dagaz.Model.createPiece(0, player);
          piece = piece.setValue(0, cnt);
          move.dropPiece(pos, piece);
      } else {
          cnt = addReserve(cnt, Math.abs(+piece.getValue(0)));
          piece = piece.setValue(0, cnt);
          move.movePiece(pos, pos, piece);
      }
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      var isPool = false;
      var isPoolChanged = false;
      var fr  = 0;
      var dir = 0;
      if (move.isSimpleMove()) {
          var pos = move.actions[0][0][0];
          if (design.inZone(1, board.player, pos)) {
              move.failed = true;
              return;
          }
          var piece = board.getPiece(pos);
          var cnt = Math.abs(+piece.getValue(0));
          var positions = [];
          var result = [];
          result.push(0);
          positions.push(pos);
          for (var ix = 1; cnt > 0; cnt--, ix++) {
               pos = design.navigate(board.player, pos, dir);
               if (pos === null) {
                   move.failed = true;
                   return;
               }
               piece = board.getPiece(pos);
               while ((piece !== null) && (+piece.type == 2)) {
                   pos = design.navigate(board.player, pos, dir);
                   if (pos === null) {
                       move.failed = true;
                       return;
                   }
                   piece = board.getPiece(pos);
               }
               if (ix >= Dagaz.Model.SIZE) {
                   ix = 0;
               }
               positions.push(pos);
               if (ix < result.length) {
                   result[ix]++;
               } else {
                   if (piece === null) {
                       result.push(1);
                   } else {
                       result.push(Math.abs(+piece.getValue(0)) + 1);
                   }
               }
          }
          ix--;
          var captured = [];
          isPool = design.inZone(1, board.player, pos);
          if ((result[ix] > 1) || isPool) {
               result[ix] = -result[ix];
          } else {
               if (!isPool) {
                   if (design.inZone(0, board.player, pos) && (result[ix] == 1)) {
                       pos = design.navigate(board.player, pos, 4);
                       if (pos !== null) {
                           piece = board.getPiece(pos);
                           if ((piece !== null) || (result.length == Dagaz.Model.SIZE) || (_.indexOf(positions, pos) >= 0)) {
                               if ((piece === null) || (piece.type == 0)) {
                                   captured.push(pos);
                                   fr++;
                                   result[ix] = 0;
                               }
                           }
                       }
                   }
               }
          }
          var pos = move.actions[0][0][0];
          for (var ix = 0; ix < result.length; ix++) {
               if (_.indexOf(captured, pos) >= 0) {
                   fr += result[ix];
                   result[ix] = 0;
                   captured = _.without(captured, pos);                   
               }
               pos = design.navigate(board.player, pos, dir);
               piece = board.getPiece(pos);
               while ((piece !== null) && (+piece.type == 2)) {
                   pos = design.navigate(board.player, pos, dir);
                   if (pos === null) {
                       move.failed = true;
                       return;
                   }
                   piece = board.getPiece(pos);
               }
          }
          _.each(captured, function(pos) {
               piece = board.getPiece(pos);
               if (piece !== null) {
                   fr += Math.abs(+piece.getValue(0));
                   move.capturePiece(pos);
               }
          });
          var pos = move.actions[0][0][0];
          for (var ix = 0; ix < result.length; ix++) {
               if (design.inZone(1, board.player, pos)) {
                   result[ix] = addReserve(result[ix], fr);
                   fr = 0;
               }
               var player = board.player;
               if (!design.inZone(0, board.player, pos) && !design.inZone(1, board.player, pos) && (result[ix] > 0)) {
                   player = design.nextPlayer(player);
               }
               var piece = Dagaz.Model.createPiece(0, player).setValue(0, result[ix]);
               if (result[ix] == 0) {
                   if (ix > 0) {
                       move.capturePiece(pos);
                       if (ix == 1) {
                           move.actions[0][2] = [ Dagaz.Model.createPiece(1, board.player) ];
                       }
                   }
               } else {
                   if (piece !== null) {
                       if (ix == 1) {
                           move.actions[0][2] = [ piece ];
                       } else {
                           if ((ix > 0) && (board.getPiece(pos) !== null)) {
                               move.movePiece(pos, pos, piece);
                           } else {
                               move.dropPiece(pos, piece);
                           }
                       }
                   }
               }
               if (design.inZone(1, board.player, pos)) {
                   isPoolChanged = true;
               }
               pos = design.navigate(board.player, pos, dir);
               piece = board.getPiece(pos);
               while ((piece !== null) && (+piece.type == 2)) {
                   pos = design.navigate(board.player, pos, dir);
                   piece = board.getPiece(pos);
               }
          }
          if (!isPool && !isPoolChanged && (fr == 0)) {
               _.each(design.allPositions(), function(pos) {
                    if (design.inZone(1, board.player, pos)) {
                        var piece = board.getPiece(pos);
                        if (piece !== null) {
                            var value = +piece.getValue(0);
                            if (value < 0) {
                                piece = piece.setValue(0, -value);
                                move.movePiece(pos, pos, piece);
                            }
                        }
                    }
               });
          }
          toReserve(design, board, board.player, move, fr);
      }
  });
  var ko = [];
  _.each(design.allPositions(), function(pos) {
      if (design.inZone(1, board.player, pos)) return;
      var piece = board.getPiece(pos);
      if (piece !== null) {
          var value = +piece.getValue(0);
          if ((value !== null) && (value < -1)) {
              ko.push(pos);
          }
      }
  });
  if (ko.length > 0) {
      board.ko = ko;
  }
  CheckInvariants(board);
}

})();
