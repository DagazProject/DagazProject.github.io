(function() {

Dagaz.View.SHIFT_X = 1;
Dagaz.View.SHIFT_Y = 1;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "jasir-extension") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.isSimpleMove()) {
          var piece = board.getPiece(move.actions[0][0][0]);
          var enemy = board.getPiece(move.actions[0][1][0]);
          if ((piece !== null) && (enemy !== null)) {
              if (enemy.type > 0) {
                  var pos = design.navigate(board.player, 25, 1);
                  while ((pos !== null) && (board.getPiece(pos) !== null)) {
                      pos = design.navigate(board.player, pos, 1);
                  }
                  if (pos !== null) {
                      move.movePiece(move.actions[0][1][0], pos, enemy.promote(0));
                  }
              }
              move.actions[0][2] = [ piece.promote(1) ];
          }
      }
  });
  CheckInvariants(board);
}

})();
