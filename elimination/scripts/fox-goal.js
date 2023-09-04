(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "fox-goal") {
      checkVersion(design, name, value);
  }
}

if (!_.isUndefined(Dagaz.Controller.play)) {
    Dagaz.Controller.addSound(0, "../sounds/on.wav", true);
    Dagaz.Controller.addSound(1, "../sounds/shoot.wav", true);
    Dagaz.Controller.addSound(2,  "../sounds/tadam.wav", true);
    Dagaz.Controller.addSound(3, "../sounds/loss.wav", true);
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var cnt = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.type == 10)) cnt++;
  });
  if (cnt == 8) {
      return 1;
  }
  return checkGoals(design, board, player);
}

})();
