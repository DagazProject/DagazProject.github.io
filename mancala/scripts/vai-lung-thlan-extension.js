(function() {

Dagaz.Model.WIN_CNT = 30;

Dagaz.View.DX       = 0;
Dagaz.View.DY       = 0;
Dagaz.View.MX       = 25;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "vai-lung-thlan-extension") {
      checkVersion(design, name, value);
  }
}

var toReserve = function(design, board, player, move, cnt) {
  var pos = design.navigate(player, 0, 2);
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
      var fr  = 0;
      var dir = move.mode;
      if (move.isSimpleMove()) {
          var pos = move.actions[0][0][0];
          var piece = board.getPiece(pos);
          var cnt = +piece.getValue(0);
          var result = [];
          result.push(0);
          for (var ix = 1; cnt > 0; cnt--, ix++) {
               pos = design.navigate(board.player, pos, dir);
               if (pos === null) {
                   move.failed = true;
                   return;
               }
               if (ix >= 12) {
                   ix = 0;
               }
               piece = board.getPiece(pos);
               if (ix < result.length) {
                   result[ix]++;
               } else {
                   if (piece === null) {
                       result.push(1);
                   } else {
                       result.push(+piece.getValue(0) + 1);
                   }
               }
          }
          ix--;
          while ((pos !== null) && (result[ix] == 1)) {
               fr += result[ix];
               result[ix] = 0;
               pos = design.navigate(0, pos, dir);
               ix--;
          }
          var pos = move.actions[0][0][0];
          for (var ix = 0; ix < result.length; ix++) {
               var player = board.player;
               if (!design.inZone(0, board.player, pos)) {
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
               pos = design.navigate(board.player, pos, dir);
          }
          toReserve(design, board, board.player, move, fr);
      }
  });
  CheckInvariants(board);
}

})();
