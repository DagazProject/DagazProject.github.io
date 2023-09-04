(function() {

var strictMode = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "kauri-extension") {
     if (value == "strict") strictMode = true;
  } else {
     checkVersion(design, name, value);
  }
}

var toReserve = function(design, board, player, move, cnt) {
  var pos = design.navigate(player, 0, 2);
  if ((cnt > 0) && (pos !== null)) {
      piece = board.getPiece(pos);
      if (piece === null) {
          piece = Dagaz.Model.createPiece(0, player);
          piece = piece.setValue(0, cnt).setValue(1, 0);
          move.dropPiece(pos, piece);
      } else {
          cnt += +piece.getValue(0);
          piece = piece.setValue(0, cnt).setValue(1, 0);
          move.movePiece(pos, pos, piece);
      }
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      var fr  = 0; var er = 0;
      var dir = move.mode;
      if (move.isSimpleMove()) {
          var pos = move.actions[0][0][0];
          var piece = board.getPiece(pos);
          var cnt = +piece.getValue(0);
          var kcn = +piece.getValue(1);
          if ((cnt === null) || (kcn === null) || (kcn == 0)) {
              move.failed = true;
              return;
          }
          if (strictMode && (cnt == 0)) {
              move.failed = true;
              return;
          }
          var result = [0];
          var kauri  = [0];
          var ix = 1;
          for (var i = 0; i < cnt + kcn; i++, ix++) {
               pos = design.navigate(board.player, pos, dir);
               if (pos === null) {
                   move.failed = true;
                   return;
               }
               if (ix >= 12) {
                   ix = 0;
               }
               piece = board.getPiece(pos);
               if (!design.inZone(0, board.player, pos) && (piece !== null)) {
                   if ((i >= cnt) && (+piece.getValue(1) == 0)) {
                       if (ix < result.length) {
                           fr += result[ix];
                           result[ix] = 0;
                           kauri[ix]++;
                       } else {
                           fr += +piece.getValue(0);
                           result.push(0);
                           kauri.push(1);
                       }
                       continue;
                   }
                   if ((i < cnt) && (+piece.getValue(0) == 0)) {
                       er++;
                       if (ix >= result.length) {
                           result.push(0);
                           kauri.push(+piece.getValue(1));
                       }
                       continue;
                   }                   
               }
               if (ix < result.length) {
                   if (i < cnt) {
                       result[ix]++;
                   } else {
                       kauri[ix]++;
                   }
               } else {
                   if (piece === null) {
                       if (i < cnt) {
                           result.push(1);
                           kauri.push(0);
                       } else {
                           result.push(0);
                           kauri.push(1);
                       }
                   } else {
                       if (i < cnt) {
                           result.push(+piece.getValue(0) + 1);
                           kauri.push(+piece.getValue(1));
                       } else {
                           result.push(+piece.getValue(0));
                           kauri.push(+piece.getValue(1) + 1);
                       }
                   }
               }
          }
          var pos = move.actions[0][0][0];
          for (var ix = 0; ix < result.length; ix++) {
               var player = board.player;
               if (!design.inZone(0, board.player, pos)) {
                   player = design.nextPlayer(player);
               }
               var piece = Dagaz.Model.createPiece(0, player).setValue(0, result[ix]).setValue(1, kauri[ix]);
               if (result[ix] + kauri[ix] == 0) {
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
          toReserve(design, board, design.nextPlayer(board.player), move, er);
      }
  });
  CheckInvariants(board);
}

})();
