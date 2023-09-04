(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "altai-shatra-captures") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var positions = [];
  _.each(board.moves, function(move) {
      if (!_.isUndefined(move.failed)) return;
      if (move.actions.length != 2) return;
      _.each(move.actions, function(a) {
          if ((a[0] === null) || (a[1] === null)) return;
          if (_.isUndefined(positions[ a[0][0] ])) {
              positions[ a[0][0] ] = [];
          }
          positions[ a[0][0] ].push(a[1][0]);
      });
  });
  _.each(board.moves, function(move) {
      if (!_.isUndefined(move.failed)) return;
      if (!move.isSimpleMove()) return;
      var pos = move.actions[0][0][0];
      if (_.isUndefined(positions[pos])) return;
      if (_.indexOf(positions[pos], move.actions[0][1][0]) >= 0) {
          move.failed = true;
      }
  });
  CheckInvariants(board);
}

})();
