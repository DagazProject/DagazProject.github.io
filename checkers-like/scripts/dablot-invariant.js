(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "dablot-invariant") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  if (_.chain(board.moves)
       .filter(function(move) {
           return _.isUndefined(move.failed);
        })
       .filter(function(move) {
           return move.actions.length > 1;
        })
       .filter(function(move) {
           var piece = null;
           _.chain(move.actions)
            .filter(function(action) {
                 return action[3] == 1;
             })
            .filter(function(action) {
                 return (action[0] !== null) && (action[1] !== null);
             })
            .each(function(action) {
                 piece = board.getPiece(action[0][0]);
             });
             if (piece === null) return false;
             return +piece.type > 1;
        }).value().length >= 1) {
        _.chain(board.moves)
         .filter(function(move) {
             return move.actions.length == 1;
          })
         .each(function(move) {
             move.failed = true;
          });
  }
  CheckInvariants(board);
}

})();
