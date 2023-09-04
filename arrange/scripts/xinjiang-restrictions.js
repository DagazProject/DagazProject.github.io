(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "xinjiang-restrictions") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var cnt = _.chain(board.pieces).compact().size().value();
  if (cnt == 0) {
      _.each(board.moves, function(move) {
           if (move.isDropMove()) {
               var pos = move.actions[0][1][0];
               if (!design.inZone(cnt, board.player, pos)) {
                   move.failed = true;
               }
           }
      });
  }
  CheckInvariants(board);
}

})();
