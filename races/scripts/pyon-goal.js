(function() {

Dagaz.AI.AI_FRAME = 2000;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "pyon-goal") {
     checkVersion(design, name, value);
  }
}

if (!_.isUndefined(Dagaz.Controller.addSound)) {
    Dagaz.Controller.addSound(0, "../sounds/slide.ogg", true);
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  board.generate();
  if (board.moves.length == 0) {
      if (board.player == player) {
          return 1;
      } else {
          return -1;
      }
  }
  var enemies = 0;
  var friends = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && !design.inZone(0, piece.player, pos)) {
          if (piece.player == player) {
              friends++;
          } else {
              enemies++;
          }
      }
  });
  if (enemies < 1) {
      return -1;
  }
  if (friends < 1) {
      return 1;
  }
  return checkGoals(design, board, player);
}

})();
