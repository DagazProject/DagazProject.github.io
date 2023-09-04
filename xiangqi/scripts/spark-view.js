(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "spark-view") {
      checkVersion(design, name, value);
  }
}

if (!_.isUndefined(Dagaz.Controller.addSound)) {
    Dagaz.Controller.addSound(10, "../sounds/magic.wav");
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var ko = [];
  _.each(board.moves, function(move) {
      if (move.isDropMove() && !move.failed) {
          var pos = move.actions[0][1][0];
          if (_.indexOf(ko, pos) < 0) {
              ko.push(pos);
          }
      }
  });
  if (ko.length > 0) {
      board.ko = ko;
      if (!_.isUndefined(Dagaz.Controller.play) && (board.parent === null)) {
          Dagaz.Controller.play(10);
      }
  }
  CheckInvariants(board);
}

})();
