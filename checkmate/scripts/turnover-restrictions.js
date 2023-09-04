(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "turnover-restrictions") {
     checkVersion(design, name, value);
  }
}

var isQueen = function(design, board, pos, dir) {
  pos = design.navigate(board.player, pos, dir);
  if (pos !== null) {
     if (board.getPiece(pos) === null) return false;
  }
  return true;
}

var isCastle = function(design, board, pos) {
  while (pos !== null) {
     if (board.getPiece(pos) === null) return false;
     pos = design.navigate(board.player, pos, 8);
  }
  return true;
}

var notKnight = function(design, board, pos) {
  pos = design.navigate(board.player, pos, 8);
  if (pos === null) return true;
  if (board.getPiece(pos) === null) return true;
  pos = design.navigate(board.player, pos, 8);
  if (pos === null) return true;
  return board.getPiece(pos) !== null;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (!move.isSimpleMove()) return;
      if (move.mode == 6) {
          if (isQueen(design, board, move.actions[0][0][0], 9)) {
              move.sound = 13;
          }
          var pos = design.navigate(board.player, move.actions[0][0][0], 9);
          if ((pos !== null) && (board.getPiece(pos) !== null)) {
              move.failed = true;
              return;
          }
          pos = move.actions[0][1][0];
          var piece = board.getPiece(pos);
          if (piece !== null) {
              if (piece.player == board.player) {
                  move.failed = true;
                  return;
              }
          }
          var f = true;
          var p = design.navigate(board.player, pos, 9);
          if (p !== null) {
              var piece = board.getPiece(p);
              if (piece !== null) {
                  f = false;
              }
          }
          p = design.navigate(board.player, p, 9);
          if (p !== null) {
              var piece = board.getPiece(p);
              if (piece !== null) {
                  if (f && (piece.player == board.player)) {
                      move.failed = true;
                      return;
                  }
              }
          }
      }
      if ((move.mode == 5) && !isQueen(design, board, move.actions[0][0][0], 8)) {
          move.failed = true;
          return;
      }
      if ((move.mode == 4) || (move.mode == 5)) {
          if (isQueen(design, board, move.actions[0][0][0], 8)) {
              move.sound = 13;
          }
          var pos = design.navigate(board.player, move.actions[0][0][0], 9);
          if ((pos !== null) && (board.getPiece(pos) !== null)) {
              move.failed = true;
              return;
          }
          pos = move.actions[0][1][0];
          var piece = board.getPiece(pos);
          if (piece !== null) {
              if (piece.player == board.player) {
                  move.failed = true;
                  return;
              }
          }
      }
      if ((move.mode == 3) && (notKnight(design, board, move.actions[0][0][0]))) {
           move.failed = true;
           return;
      }
      if ((move.mode == 0) || (move.mode == 1) || (move.mode == 3)) {
           if (isCastle(design, board, move.actions[0][0][0])) {
               move.sound = 15;
           } else if (move.mode == 1) {
               move.failed = true;
               return;
           }
           var pos = move.actions[0][1][0];        
           var piece = board.getPiece(pos);
           if (piece !== null) {
               if ((move.mode != 3) || (piece.player == board.player)) {
                   move.failed = true;
                   return;
               }
           }
           if ((move.mode != 3) && !notKnight(design, board, move.actions[0][0][0])) {
               move.failed = true;
               return;
           }
           pos = design.navigate(board.player, pos, 8);
           if (pos === null) {
               move.failed = true;
               return;
           }
           var f = true;
           piece = board.getPiece(pos);
           if (piece !== null) {
               f = false;
           }
           pos = design.navigate(board.player, pos, 8);
           if (pos === null) {
               move.failed = true;
               return;
           }
           piece = board.getPiece(pos);
           if (piece !== null) {
               if ((move.mode == 3) && (piece.player != board.player)) {
                   f = false;
               }
               if (f) {
                   move.failed = true;
                   return;
               }
           }
      }
      if (move.mode == 2) {
           if (!notKnight(design, board, move.actions[0][0][0])) {
               move.failed = true;
               return;
           }
           var isEmpty = true;
           var pos = move.actions[0][1][0];
           var piece = board.getPiece(pos);
           if (piece !== null) {
               if (piece.player == board.player) {
                   move.failed = true;
                   return;
               }
               isEmpty = false;
           }
           pos = design.navigate(board.player, pos, 8);
           var f = (board.getPiece(pos) === null);
           while (pos !== null) {
               var piece = board.getPiece(pos);
               if (piece !== null) {
                   if (f && (piece.player == board.player)) {
                       move.failed = true;
                       return;
                   }
                   isEmpty = false;
               }
               pos = design.navigate(board.player, pos, 8);
           }
           if (isEmpty) {
               move.failed = true;
           }
      }
  });
  CheckInvariants(board);
}

})();
