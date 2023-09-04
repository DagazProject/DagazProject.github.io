(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "senet-homes") {
      checkVersion(design, name, value);
  }
}

var reborn = function(design, board, pos, move) {
  var p = design.navigate(board.player, pos, 2);
  while ((p !== null) && (board.getPiece(p) !== null)) {
      p = design.navigate(board.player, p, 1);
  }
  if (p !== null) {
      move.actions[0][1] = [p];
  } else {
      move.failed = true;
  }
}
var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var moves = [];
  _.each(board.moves, function(move) {
      if (!_.isUndefined(move.failed) || (move.mode == 0)) return;
      if (move.isSimpleMove()) {
          var pos = move.actions[0][0][0];
          var piece = board.getPiece(pos);
          if (design.inZone(2, board.player, pos)) {
              var p = move.actions[0][1][0];
              if (board.getPiece(p) !== null) {
                  pos = design.navigate(board.player, pos, 0);
                  if (pos !== null) {
                      if (board.getPiece(pos) !== null) {
                          reborn(design, board, pos, move);
                      } else {
                          move.actions[0][1] = [pos];
                      }
                  }
              }
              move.mode = 7;
          }
          if ((piece !== null) && (piece.getValue(0) !== null)) {
              piece = piece.setValue(0, null);
              move.actions[0][2] = [piece];
              moves.push(move);
              return;
          }
          if (design.inZone(3, board.player, pos)) {
              if (move.mode != 4) reborn(design, board, pos, move);
              move.mode = 7;
              return;
          }
          if (design.inZone(4, board.player, pos)) {
              if (move.mode == 3) {
                  move.mode = 7;
              } else {
                  move.failed = true;
              }
              return;
          }
          if (design.inZone(5, board.player, pos)) {
              if (move.mode == 2) {
                  move.mode = 7;
              } else {
                  move.failed = true;
              }
              return;
          }
          if (design.inZone(6, board.player, pos)) {
              if (move.mode == 1) {
                  move.mode = 7;
              } else {
                  move.failed = true;
              }
              return;
          }
      }
  });
  if (moves.length > 0) {
      board.moves = moves;
  }
  CheckInvariants(board);
}

})();
