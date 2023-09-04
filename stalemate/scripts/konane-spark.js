(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "konane-spark") {
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
      if (!move.failed && (move.actions.length == 2) && (move.actions[0][0] !== null) && (move.actions[0][1] === null) && (move.actions[1][0] !== null) && (move.actions[1][1] !== null) && (move.actions[1][0][0] == move.actions[1][1][0])) {
          var pos = move.actions[0][0][0];
          if (board.getPiece(pos) !== null) {
              if (_.indexOf(ko, pos) < 0) {
                 ko.push(pos);
              }
          }
      }
  });
  if (ko.length > 0) {
      if (!_.isUndefined(Dagaz.Controller.play)) {
          Dagaz.Controller.play(10);
      }
      board.ko = ko;
  }
  CheckInvariants(board);
}

})();
