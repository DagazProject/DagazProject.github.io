(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "tibetian-checkers-fly") {
     checkVersion(design, name, value);
  }
}

var isReachable = function(board, src, dst) {
  var r = false;
  _.each(board.moves, function(move) {
      if (r) return;
      var f = true;
      _.each(move.actions, function(a) {
          if (a[0] === null) return;
          if (a[1] === null) return;
          if (f) {
              if (a[0][0] != src) return;
              f = false;
          }
          if (a[1][0] == dst) {
              r = true;
          }
      });
  });
  return r;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var positions = [];
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.player != board.player) return;
      positions.push(pos);
  });
  if (positions.length < 14) {
      _.each(positions, function(pos) {
          var piece = board.getPiece(pos);
          if (piece === null) return;
          _.each(design.allPositions(), function(p) {
               if (board.getPiece(p) !== null) return;
               if (isReachable(board, pos, p)) return;
               var move = Dagaz.Model.createMove(1);
               move.movePiece(pos, p, piece);
               board.moves.push(move);
          });
      });
  }
  CheckInvariants(board);
}

})();
