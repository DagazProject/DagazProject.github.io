(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "fool-goal") {
     checkVersion(design, name, value);
  }
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  if (board.getPiece(96) === null) {
      var c = [0, 0, 0];
      for (var pos = 0; pos < 80; pos++) {
           var piece = board.getPiece(pos);
           if (piece === null) continue;
           c[piece.player - 1]++;
      }
      console.log(c);
      if (c[0] == 0) {
          if (player == 1) return 1;
              else return -1;
      }
      if ((c[1] == 0) || (c[2] == 0)) {
          if (player == 1) return -1;
              else return 1;
      }
  }
  return checkGoals(design, board, player);
}

})();
