(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "fool-restriction") {
      checkVersion(design, name, value);
  }
}

function getPlayer(turn) {
  if (turn == 0) {
      return 2;
  } else if (turn== 3) {
      return 3;
  } else if (turn== 6) {
      return 1;
  } else {
      return 0;
  }
}

function getCnt(board, player) {
  var r = 0;
  for (var p = 0; p < 80; p++) {
       var piece = board.getPiece(p);
       if (piece === null) continue;
       if (piece.player != player) continue;
       r++;
  }
  for (var p = 80; p < 88; p++) {
       if (board.getPiece(p) === null) continue;
       if (board.getPiece(+p + 8) !== null) continue;
       r--;
  }
  return r;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.mode != 0) return;
      var player = getPlayer(board.turn);
      if (player == 0) return;
      var cnt = getCnt(board, player);
      console.log('cnt = ' + cnt);
      if (move.actions.length > cnt) {
          move.failed = true;
      }
  });
  CheckInvariants(board);
}

})();
