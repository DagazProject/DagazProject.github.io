(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "altai-shatra-restrictions") {
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
  var isFound = false;
  _.each(design.allPositions(), function(pos) {
      if (!design.inZone(1, board.player, pos)) return;
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.player != board.player) return;
      if (piece.type > 0) return;
      isFound = true;
  });
  var moves = [];
  if (isFound) {
      _.each(board.moves, function(move) {
          if (!_.isUndefined(move.failed)) return;
          _.each(move.actions, function(a) {
              if ((a[0] === null) || (a[1] === null)) return;
              if (!design.inZone(1, board.player, a[1][0])) return;
              move.failed = true;
              if (a[3] > 1) {
                  var m = prefix(move, a[3] - 1);
                  if (!m.isPass()) {
                      moves.push(m);
                  }
              }
          });
      });
  }
  _.each(moves, function(move) {
      board.moves.push(move);
  });
  CheckInvariants(board);
}

})();
