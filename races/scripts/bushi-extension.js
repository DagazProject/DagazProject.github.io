(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "bushi-extension") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.mode != 1) return;
      var f = false;
      var actions = [];
      _.each(move.actions, function(a) {
          if (a[0] === null) return;
          if (a[1] !== null) {
              actions.push(a);
          } else {
              f = true;
          }
      });
      if (f) {
          move.mode = 3;
          move.actions = actions;
          move.goTo(board.turn);
      }
  });
  CheckInvariants(board);
}

})();
