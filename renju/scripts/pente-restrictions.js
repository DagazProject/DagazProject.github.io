(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "pente-restrictions") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var cnt = _.chain(board.pieces).compact().size().value();
  if (cnt == 0) {
      _.chain(board.moves)
       .filter(function(move) {
           return move.actions.length > 0;
        })
       .each(function(move) {
           var pos = move.actions[0][1][0];
           if (!design.inZone(0, board.player, pos)) {
               move.failed = true;
           }
        });
  }
  if (cnt == 2) {
      _.chain(board.moves)
       .filter(function(move) {
           return move.actions.length > 0;
        })
       .each(function(move) {
           var pos = move.actions[0][1][0];
           if (design.inZone(1, board.player, pos)) {
               move.failed = true;
           }
        });
  }
  _.each(board.moves, function(move) {
        if (move.isDropMove()) {
            var pos = move.actions[0][1][0];
            if (design.inZone(2, board.player, pos)) {
                move.failed = true;
            }
        }
  });
  CheckInvariants(board);
}

})();
