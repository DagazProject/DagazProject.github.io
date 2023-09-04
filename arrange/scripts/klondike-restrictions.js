(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "klondike-restrictions") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var positions = [];
  _.each(board.moves, function(move) {    
      if (_.isUndefined(move.failed) && (move.mode == 3)) {
          positions.push(move.actions[0][0][0]);
      }
  });
  if (positions.length > 0) {
      _.each(board.moves, function(move) {
          if (move.mode == 3) return;
          _.each(move.actions, function(a) {
               if ((a[0] !== null) && (a[1] !== null) && (_.indexOf(positions, a[0][0]) >= 0)) {
                   move.failed = true;
               }
          });
      });
  }
  CheckInvariants(board);
}

})();
