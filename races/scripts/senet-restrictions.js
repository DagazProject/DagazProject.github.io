(function() {

Dagaz.Model.passForcedDraw = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "senet-restrictions") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (!_.isUndefined(move.failed) || (move.mode == 0)) return;
      if (move.isSimpleMove()) {
          if (design.inZone(8, board.player, move.actions[0][0][0])) return;
          var pos = design.navigate(board.player, move.actions[0][0][0], 0);
          var stop = null; var prev = null; var piece = null;
          while (pos !== null) {
              piece = board.getPiece(pos);
              if (design.inZone(2, board.player, pos) && (stop === null)) {
                  if (piece === null) {
                      var piece = move.actions[0][2][0].setValue(0, 1);
                      move.actions[0][2] = [piece];
                      move.actions[0][1] = [pos];
                      move.capturePiece(0);
                      move.capturePiece(1);
                      move.capturePiece(2);
                      move.capturePiece(3);
                      move.goTo(board.turn - 4);
                      return;
                  } else {
                      stop = pos;
                      break;
                  }
              }
              if ((piece !== null) && (piece.player != board.player)) {
                  if ((stop === null) && (prev !== null)) {
                     stop = prev;
                  }
                  prev = pos;
              } else {
                  prev = null;
              }
              if (pos == move.actions[0][1][0]) break;
              pos = design.navigate(board.player, pos, 0);
          }
          if (piece !== null) {
              var f = true;
              if (stop === null) {
                  if (design.inZone(2, board.player, pos)) {
                      stop = pos;
                  } else {
                      var p = design.navigate(board.player, pos, 0);
                      if (p !== null) {
                          piece = board.getPiece(p);
                          if ((piece !== null) && (piece.player != board.player)) {
                              stop = pos;
                              f = false;
                          }
                      }
                  }
              }
              if (f && (prev !== null)) {
                  pos = design.navigate(board.player, pos, 0);
                  if (pos !== null) {
                      piece = board.getPiece(pos);
                      if ((piece !== null) && (piece.player != board.player)) {
                          pos = design.navigate(board.player, pos, 0);
                          if (pos !== null) {
                              piece = board.getPiece(pos);
                              if ((piece === null) || (piece.player == board.player)) return;
                          }
                      }
                  }
              }
          }
          if (stop !== null) {
              var dir = 0;
              pos = move.actions[0][0][0];
              for (var i = 0; i < move.mode; i++) {
                   var prev = pos;
                   pos = design.navigate(board.player, pos, dir);
                   if (pos == stop) {
                       dir = 1;
                       pos = design.navigate(board.player, prev, dir);
                   }
                   if (pos === null) {
                       move.failed = true;
                       return;
                   }
              }
              move.mode = 6;
              move.actions[0][1] = [pos];
              piece = board.getPiece(pos);
              if ((piece !== null) && (piece.player == board.player)) {
                   move.failed = true;
                   return;
              }
          }
      }
  });
  CheckInvariants(board);
}

})();
