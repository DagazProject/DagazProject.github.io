(function() {

Dagaz.Model.SIZE    = 14;
Dagaz.View.DX       = 0;
Dagaz.View.DY       = 0;
Dagaz.View.MX       = 28;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "hawalis-extension") {
      checkVersion(design, name, value);
  }
}

var toReserve = function(design, board, player, move, cnt) {
  var pos = design.navigate(player, 0, 1);
  if ((cnt > 0) && (pos !== null)) {
      piece = board.getPiece(pos);
      if (piece === null) {
          piece = Dagaz.Model.createPiece(0, player);
          piece = piece.setValue(0, cnt);
          move.dropPiece(pos, piece);
      } else {
          cnt += +piece.getValue(0);
          piece = piece.setValue(0, cnt);
          move.movePiece(pos, pos, piece);
      }
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;  
  _.each(board.moves, function(move) {
      var fr = 0;
      if (move.isSimpleMove()) {
          var isPart = false;
          var pos = move.actions[0][0][0];
          if (design.inZone(0, board.player, pos)) {
              move.failed = true;
              return;
          }
          var piece = board.getPiece(pos);
          var cnt = Math.abs(+piece.getValue(0));
          var once = false;
          if (cnt == 1) {
              move.mode = 1;
              once = true;
          }
          var result = [];
          result.push(0);
          for (var ix = 1; cnt > 0; cnt--, ix++) {
               pos = design.navigate(board.player, pos, 0);
               if (pos === null) {
                   move.failed = true;
                   return;
               }
               if (once) {
                   var x = board.getPiece(pos);
                   if ((x !== null) && (x.type == 0)) {
                       move.failed = true;
                       return;
                   }
                   once = false;
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
          if (result[ix] > 1) {
              result[ix] = -result[ix];
          } else {
              pos = design.navigate(board.player, pos, 3);
              while (pos !== null) {
                  var piece = board.getPiece(pos);
                  if (piece === null) break;
                  cnt = piece.getValue(0);
                  if (cnt === null) break;
                  fr += +cnt;
                  move.capturePiece(pos);
                  pos = design.navigate(board.player, pos, 3);
              }
          }
          var pos = move.actions[0][0][0];
          for (var ix = 0; ix < result.length; ix++) {
               var player = board.player;
               var piece = Dagaz.Model.createPiece(0, player).setValue(0, result[ix]);
               if (result[ix] < 0) isPart = true;
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
               pos = design.navigate(board.player, pos, 0);
          }
          toReserve(design, board, board.player, move, fr);
          if (isPart && (Dagaz.Model.checkGoals(design, board, board.player) === null)) move.goTo(board.turn);
      }
  });
  var ko = [];
  _.each(design.allPositions(), function(pos) {
      if (design.inZone(0, board.player, pos)) return;
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
