(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "swappers-goal") {
      checkVersion(design, name, value);
  }
}

if (!_.isUndefined(Dagaz.Controller.addSound)) {
    Dagaz.Controller.addSound(Dagaz.Sounds.move, "../sounds/slide.ogg");
    Dagaz.Controller.addSound(Dagaz.Sounds.win,  "../sounds/win.wav");
}

Dagaz.Model.checkGoals = function(design, board, player) {
  var result = 1;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
          if (!design.inZone(+piece.type, board.player, pos)) {
              result = null;
          }
      }
  });
  return result;
}

})();
