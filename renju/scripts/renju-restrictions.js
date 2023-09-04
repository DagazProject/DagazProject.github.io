(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "renju-restrictions") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var cnt = _.chain(board.pieces).compact().size().value();
  if (cnt < 3) {
      _.chain(board.moves)
       .filter(function(move) {
           return move.actions.length > 0;
        })
       .each(function(move) {
           var pos = move.actions[0][1][0];
           if (!design.inZone(cnt, board.player, pos)) {
               move.failed = true;
           }
        });
  }
  CheckInvariants(board);
}

})();
