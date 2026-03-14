(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "adiuh-checkers-moves") {
      checkVersion(design, name, value);
  }
}

var inMyZone = function(design, player, pos) {
  if (pos <  Dagaz.Model.BOARD_SIZE / 2) {
      return player == 2;
  } else {
      return player == 1;
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var f = true;
  _.each(board.moves, function(move) {
      if (move.mode == 0) f = false;
  });
  if (f) {
      _.each(design.allPositions(), function(src) {
          if (!inMyZone(design, board.player, src)) return;
          var piece = board.getPiece(src);
          if (piece === null) return;
          if (piece.player != board.player) return;
          if (piece.type > 0) return;
          var v = piece.getValue(0);
          if (v === null) return;
          var c = v.charAt(0);
          if (board.player == 1) {
              if (c % 2 == 1) return;
          } else {
              if (c % 2 == 0) return;
          }
          _.each([0, 1], function(dir) {
              var dst = design.navigate(board.player, src, dir);
              if (dst === null) return;
              if (board.getPiece(dst) !== null) return;
              var m = Dagaz.Model.createMove(1);
              m.movePiece(src, dst, piece);
              board.moves.push(m);
          });
      });
  }
  CheckInvariants(board);
}

})();
