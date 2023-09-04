(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "ohojichi-restrictions") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var isForced = false;
  var isBanned = false;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.player != board.player) && (+piece.getValue(0) < 0)) isBanned = true;
  });
  _.each(board.moves, function(move) {
      if (isBanned) {
          move.failed = true;
          return;
      }
      if (move.isSimpleMove() && (move.mode == 1)) {
          var cnt = 4;
          var value = board.getValue(board.player);
          if ((value !== null) && (value == move.actions[0][1][0])) {
              move.failed = true;
              return;
          }
          var pos = move.actions[0][0][0];
          var piece = board.getPiece(pos);
          if ((piece === null) || (+piece.getValue(0) >= 0)) {
              move.failed = true;
              return;
          }
          var p = design.navigate(board.player, pos, 1);
          while (p !== null) {
              if (p == pos) break;
              piece = board.getPiece(p);
              if ((piece === null) || (+piece.getValue(0) != 4)) break;
              move.capturePiece(p);
              cnt += 4;
              p = design.navigate(board.player, p, 1);
          }
          pos = move.actions[0][1][0];
          piece = board.getPiece(pos);
          if (piece !== null) {
              cnt += +piece.getValue(0);
          }
          piece = Dagaz.Model.createPiece(0, design.nextPlayer(board.player));
          piece = piece.setValue(0, cnt);
          move.actions[0][2] = [ piece ];
          move.setValue(board.player, pos);
          isForced = true;
      }
  });
  if (isForced) {
      _.each(board.moves, function(move) {
          if (move.mode == 0) move.failed = true;
      });
  }
  CheckInvariants(board);
}

})();
