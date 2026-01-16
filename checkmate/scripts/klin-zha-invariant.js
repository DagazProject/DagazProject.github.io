(function() {

var isInternal = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "klin-zha-invariant") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.actions.length < 1) return;
      if (move.actions[0][0] === null) return;
      if (move.actions[0][1] === null) return;
      var pos = move.actions[0][0][0];
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (_.indexOf([0, 2, 4, 6, 8, 10, 12], +piece.type) < 0) return;
      pos = move.actions[0][1][0];
      _.each(design.allDirections(), function(dir) {
          var p = design.navigate(1, pos, dir);
          if (p === null) return;
          var x = board.getPiece(p);
          if (x === null) return;
          if (x.type < 13) return;
          move.failed = true;
      });
      if (isInternal) return;
      if (!_.isUndefined(move.failed)) return;
      var b = board.apply(move);
      if (board.player == 1) {
          b.turn = 21;
      } else {
          b.turn = 20;
      }
      b.player = design.currPlayer(b.turn);
      isInternal = true;
      b.generateInternal(b, false);
      isInternal = false;
      _.each(b.moves, function(m) {
          if (!m.isSimpleMove()) return;
          if (pos != m.actions[0][1][0]) return;
          move.failed = true;
      });
  });
  CheckInvariants(board);
}

})();
