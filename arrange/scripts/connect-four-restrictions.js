(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "connect-four-restrictions") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var s = design.getDirection("s");
  _.each(board.moves, function(move) {
      if (move.isDropMove()) {
          var pos = design.navigate(board.player, move.actions[0][1][0], s);
          if ((pos !== null) && (board.getPiece(pos) === null)) {
              move.failed = true;
          }
      }
  });
  CheckInvariants(board);
}

})();
