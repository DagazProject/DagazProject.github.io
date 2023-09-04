(function() {

Dagaz.Model.WIN_CNT = 27;
Dagaz.Model.SIZE    = 18;
Dagaz.Model.HALF    = 9;

Dagaz.View.DX       = 0;
Dagaz.View.DY       = 0;
Dagaz.View.MX       = 25;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "selus-extension") {
      checkVersion(design, name, value);
  }
}

var toReserve = function(design, board, player, move, cnt) {
  var pos = design.navigate(player, 0, 1);
  if ((cnt != 0) && (pos !== null)) {
      piece = board.getPiece(pos);
      if (piece === null) {
          piece = Dagaz.Model.createPiece(0, player);
          piece = piece.setValue(0, cnt);
          move.dropPiece(pos, piece);
      } else {
          cnt += Math.abs(+piece.getValue(0));
          piece = piece.setValue(0, cnt);
          move.movePiece(pos, pos, piece);
      }
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var noCapturing = (board.getValue(1) === null) || (board.getValue(2) === null);
  _.each(board.moves, function(move) {
      var fr  = 0;
      var dir = 0;
      if (move.isSimpleMove()) {
          var pos = move.actions[0][0][0];
          if (design.inZone(1, board.player, pos)) {
              move.failed = true;
              return;
          }
          var piece = board.getPiece(pos);
          var cnt = +piece.getValue(0);
          cnt = Math.abs(cnt);
          var result = [];
          result.push(0);
          for (var ix = 1; cnt > 0; cnt--, ix++) {
               pos = design.navigate(board.player, pos, dir);
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
          if (noCapturing && (result[ix] == 1)) {
              if (board.getValue(board.player) === null) {
                  move.setValue(board.player, 1);
              }
          }
          if (result[ix] != 1)  {
              if (noCapturing || (result[ix] != 4)) {
                  result[ix] = -result[ix];
              }
          } 
          var pos = move.actions[0][0][0];
          for (var ix = 0; ix < result.length; ix++) {
               var player  = board.player;
               var piece = board.getPiece(pos);
               var isCapturing = (ix == result.length - 1) && (piece !== null) && (piece.type == 1);
               if (isCapturing) {
                   if (!design.inZone(2, board.player, pos)) {
                       fr = 2;
                       result[ix] = piece.getValue(0) - 1;
                   } else {
                       result[ix] = Math.abs(result[ix]);
                   }
                   var enemy = design.nextPlayer(board.player);
                   if (design.inZone(2, enemy, pos)) {
                       move.setValue(0, enemy);
                   }
               }
               if ((piece === null) || (piece.type == 2)) {
                   piece = Dagaz.Model.createPiece(0, board.player);
               }
               var isWegue = !isCapturing && (ix == result.length - 1) && (result[ix] == 4);
               if (!design.inZone(0, board.player, pos) && (result[ix] > 0) && !isWegue) {
                   player = design.nextPlayer(board.player);
               }
               if (piece.type == 1) {
                   player = piece.player;
               }
               if (piece.player != player) {
                   piece = piece.changeOwner(player);
               }
               if (isWegue) {
                   piece = piece.promote(1);
               }
               piece = piece.setValue(0, result[ix]);
               if (result[ix] == 0) {
                   if (ix > 0) {
                       move.capturePiece(pos);
                       if (ix == 1) {
                           move.actions[0][2] = [ Dagaz.Model.createPiece(2, board.player) ];
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
               pos = design.navigate(board.player, pos, dir);
          }
          toReserve(design, board, board.player, move, fr);
      }
  });
  var ko = [];
  _.each(design.allPositions(), function(pos) {
      if (design.inZone(1, board.player, pos)) return;
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.player == board.player)) {
          var value = +piece.getValue(0);
          if ((value !== null) && (value < 0)) {
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
