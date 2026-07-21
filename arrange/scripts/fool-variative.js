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
  var f = false;
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
           if (m.actions.length > 0) {
               f = true;
           }
           moves.push(m);
      }
  });
  _.each(moves, function(move) {
      if (move.actions == 0) {
          move.sound = 12;
          move.dropPiece(115, Dagaz.Model.createPiece(0, 1));          
          if (f) {
              move.failed = true;
          }
      }
      board.moves.push(move);
  });
  CheckInvariants(board);
}

})();
