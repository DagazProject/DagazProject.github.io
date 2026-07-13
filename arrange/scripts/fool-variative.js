(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "fool-variative") {
      checkVersion(design, name, value);
  }
}

function getCnt(n) {
  if (n == 2) {
      return 2;
  } else if (n == 3) {
      return 6;
  } else {
      return 14;
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var moves = [];
  _.each(board.moves, function(move) {
      if (move.mode != 0) return;
      if (move.actions.length < 2) return;
      var cnt = getCnt(move.actions.length);
      for (var mask = 1; mask < cnt; mask++) {
           var m = Dagaz.Model.createMove(0, 10);
           for (var i = 0; i < move.actions.length; i++) {
                if ((i & mask) == 0) continue;
                m.actions.push(move.actions[i]);
           }
           moves.push(m);
      }
  });
  _.each(moves, function(move) {
      board.moves.push(move);
  });
  CheckInvariants(board);
}

})();
