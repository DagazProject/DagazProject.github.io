(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "mahjong-goal") {
     checkVersion(design, name, value);
  }
}

if (!_.isUndefined(Dagaz.Controller.addSound)) {
    Dagaz.Controller.addSound(0, "../sounds/card.wav", true);
    Dagaz.Controller.addSound(2,  "../sounds/win.wav", true);
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var cnt = 0;
  _.each(design.allPositions(), function(pos) {
      if (design.inZone(0, 1, pos) && (board.getPiece(pos) !== null)) {
          cnt++;
      }
  });
  if (cnt == 0) return 1;
  return checkGoals(design, board, player);
}

})();
