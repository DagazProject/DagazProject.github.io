(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "passive-chess-extension") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = board.game.design;
  _.each(board.moves, function(move) {
      if (move.isSimpleMove()) {
          var pos = move.actions[0][1][0];
          for (var i = 0; i < 6; i++) {
              if (design.inZone(i, board.player, pos)) {
                  var piece = Dagaz.Model.createPiece(i, board.player);
                  move.actions[0][2] = [ piece ];
                  break;
              }
          }
      }
  });
  CheckInvariants(board);
}

})();
