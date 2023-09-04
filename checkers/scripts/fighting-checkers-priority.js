(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "fighting-checkers-priority") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var moves = [];
  _.each(board.moves, function(move) {
      if (!_.isUndefined(move.failed)) return;
      var f = false;
      _.each(move.actions, function(a) {
          if ((a[0] !== null) && (a[1] === null)) f = true;
      });
      if (f) moves.push(move);
  });
  if (moves.length > 0) {
      board.moves = moves;
  }
  CheckInvariants(board);
}

})();
