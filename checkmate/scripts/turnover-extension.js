(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "turnover-extension") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (!move.isSimpleMove() || !_.isUndefined(move.failed)) return;
      if (move.mode == 6) {
          var pos = move.actions[0][1][0];
          var piece = board.getPiece(pos);
          var e = true;
          if (piece !== null) {
              e = false;
          }
          var f = true;
          var p = design.navigate(board.player, pos, 9);
          if (p !== null) {
              var piece = board.getPiece(p);
              if (piece !== null) {
                  f = false;
                  if (piece.player != board.player) {
                      if (e) {
                          move.movePiece(p, p, piece.changeOwner(board.player));
                      } else {
                          move.capturePiece(p);
                      }
                  }
              }
          }
          p = design.navigate(board.player, p, 9);
          if (p !== null) {
              var piece = board.getPiece(p);
              if (piece !== null) {
                  if (piece.player != board.player) {
                      if (e && !f) {
                          move.movePiece(p, p, piece.changeOwner(board.player));
                      } else {
                          move.capturePiece(p);
                      }
                  }
              }
          }
      }
      if ((move.mode == 4) || (move.mode == 5)) {
          var pos = move.actions[0][1][0];
          var piece = board.getPiece(pos);
          var e = true;
          if (piece !== null) {
              e = false;
          }
          _.each([8, 9], function(dir) {
              var p = design.navigate(board.player, pos, dir);
              if (p === null) return;
              var piece = board.getPiece(p);
              if (piece === null) return;
              if (piece.player == board.player) return;
              if (e) {
                  move.movePiece(p, p, piece.changeOwner(board.player));
              } else {
                  move.capturePiece(p);
              }
          });
      }
      if ((move.mode == 0) || (move.mode == 1) || (move.mode == 3)) {
           var pos = move.actions[0][1][0];
           var notEmpty = (board.getPiece(pos) !== null);
           pos = design.navigate(board.player, pos, 8);
           var piece = board.getPiece(pos);
           var f = true;
           if (piece !== null) {
               if (piece.player != board.player) {
                   if (notEmpty) {
                       move.capturePiece(pos);
                   } else {
                       move.movePiece(pos, pos, piece.changeOwner(board.player));
                   }
               }
               f = false;
           }
           pos = design.navigate(board.player, pos, 8);
           if (pos === null) return;
           piece = board.getPiece(pos);
           if (piece !== null) {
               if (piece.player != board.player) {
                   if (notEmpty || f) {
                       move.capturePiece(pos);
                   } else {
                       move.movePiece(pos, pos, piece.changeOwner(board.player));
                   }
               }
           }
      }
      if (move.mode == 2) {
           var pos = move.actions[0][1][0];
           var isEmpty = (board.getPiece(pos) === null);
           pos = design.navigate(board.player, pos, 8);
           var e = true;
           if (board.getPiece(pos) === null) {
               e = false;
           }
           while (pos !== null) {
               var piece = board.getPiece(pos);
               if (piece !== null) {
                   if (piece.player != board.player) {
                       if (isEmpty && e) {
                           move.movePiece(pos, pos, piece.changeOwner(board.player));
                       } else {
                           move.capturePiece(pos);
                       }
                   }
               }
               pos = design.navigate(board.player, pos, 8);
           }
      }
  });
  CheckInvariants(board);
}

})();
