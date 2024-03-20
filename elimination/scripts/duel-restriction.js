(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "duel-restriction") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      var positions = [];
      var dir = null; var cnt = 0;
      _.each(move.actions, function(a) {
          if (a[0] === null) return;
          if (a[1] === null) return;
          var d = design.findDirection(a[0][0], a[1][0]);
          if (d === null) return;
          if ((dir === null) || (dir != d)) {
              dir = d;
              cnt++;
          }
          if (positions.length == 0) positions.push(a[0][0]);
          if (_.indexOf(positions, a[1][0]) >= 0) move.failed = true;
          positions.push(a[1][0]);
      });
      if (cnt > 2) {
          move.failed = true;
      }
  });
  CheckInvariants(board);
}

})();
