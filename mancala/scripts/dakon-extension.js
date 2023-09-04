(function() {

Dagaz.Model.WIN_CNT = 49;
Dagaz.Model.SIZE    = 15;
Dagaz.Model.HALF    = 7;

Dagaz.View.DX       = 0;
Dagaz.View.DY       = 0;
Dagaz.View.MX       = 25;

var isMikul    = false;
var isMatiBela = false;
var isSimulate = false;
var isSimple   = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "dakon-extension") {
      if (value == "mikul")     isMikul    = true;
      if (value == "mati-bela") isMatiBela = true;
      if (value == "simulate")  isSimulate = true;
      if (value == "simple")    isSimple   = true;
  } else {
      checkVersion(design, name, value);
  }
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
  var noCapturing = false;
  if (_.isUndefined(board.noInitial) && isSimulate) {
      noCapturing = (board.parent === null);
  }
  _.each(board.moves, function(move) {
      var isPool = false;
      var isPoolChanged = false;
      var fr  = 0;
      var dir = 0;
      if (move.mode != 0) {
          dir = 6;
      }
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
               positions.push(pos);
               if (pos === null) {
                   move.failed = true;
                   return;
               }
               if (ix >= Dagaz.Model.SIZE) {
                   ix = 0;
               }
               piece = board.getPiece(pos);
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
          if (noCapturing) {
              var start = _.random(0, Dagaz.Model.HALF - 1);
              var ps = _.indexOf(positions, start);
              if (ps < 0) {
                  while (pos != start) {
                     pos = design.navigate(board.player, pos, dir);
                     if ((pos === null) || !design.inZone(0, 2, pos)) {
                         move.failed = true;
                         return;
                     }
                     positions.push(pos);
                     ix++;
                     var piece = board.getPiece(pos);
                     if (piece === null) {
                         result.push(0);
                     } else {
                         result.push(Math.abs(+piece.getValue(0)));
                     }
                  }
              } else {
                  pos = positions[ps];
                  ix = ps;
              }
              result[ix] -= Dagaz.Model.HALF;
              for (var i = 0; i < Dagaz.Model.HALF; i++) {
                   pos = design.navigate(2, pos, dir);
                   if (pos === null) {
                       move.failed = true;
                       return;
                   }
                   if (design.inZone(1, 2, pos)) {
                       var piece = Dagaz.Model.createPiece(0, 2).setValue(0, 1);
                       move.dropPiece(pos, piece);
                       continue;
                   }
                   ix++;
                   if (ix >= Dagaz.Model.SIZE) {
                       ix = 0;
                   }
                   var piece = board.getPiece(pos);
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
          } else {
              if ((!isSimple && (result[ix] > 1)) || isPool) {
                  result[ix] = -result[ix];
              } else {
                  if (!isPool) {
                      if (design.inZone(0, board.player, pos) && (result[ix] == 1)) {
                          pos = design.navigate(board.player, pos, 4);
                          if (pos !== null) {
                              piece = board.getPiece(pos);
                              if ((piece !== null) || (result.length == Dagaz.Model.SIZE) || (_.indexOf(positions, pos) >= 0)) {
                                  captured.push(pos);
                                  if (isMatiBela) {
                                      fr++;
                                      result[ix] = 0;
                                  }
                              }
                          }
                      } else {
                          var p = design.navigate(board.player, pos, dir);
                          var q = design.navigate(board.player, pos, 6);
                          if (isMikul && (p !== null) && (q !== null) && (result.length > 1)) {
                              var piece = board.getPiece(p);
                              if ((piece !== null) && (Math.abs(+piece.getValue(0)) == Math.abs(result[ix - 1]))) {
                                  captured.push(p);
                                  captured.push(q);
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
