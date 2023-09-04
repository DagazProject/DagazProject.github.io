(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "altai-shatra-pawns") {
     checkVersion(design, name, value);
  }
}

var prefix = function(move, rn) {
  var r = Dagaz.Model.createMove(move.mode);
  _.each(move.actions, function(a) {
      if (a[3] > rn) return;
      r.actions.push(a);
  });
  return r;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var moves = [];
  _.each(board.moves, function(move) {
      var start = null;
      _.each(move.actions, function(a) {
          if ((a[0] === null) || (a[1] === null)) return;
          if (start === null) {
              start = a[0][0];
              var piece = board.getPiece(start);
              if ((piece === null) || (piece.type != 0)) return;
          }
          if (design.inZone(1, board.player, a[1][0]) || design.inZone(2, board.player, a[1][0])) {
              move.failed = true;
              if (a[3] > 1) {
                  var m = prefix(move, a[3] - 1);
                  if (!m.isPass()) {
                      moves.push(m);
                  }
              }
          }
      });
  });
  _.each(moves, function(move) {
      board.moves.push(move);
  });
  CheckInvariants(board);
}

})();
