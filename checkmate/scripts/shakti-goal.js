(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "shakti-goal") {
      checkVersion(design, name, value);
  }
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var enemies = 0; var friends = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.type == 1)) {
          if (piece.player == player) {
              friends++;
          } else {
              enemies++;
          }
      }
  });
  if (friends == 0) return -1;
  if (enemies == 0) return 1;
  return checkGoals(design, board, player);
}

})();
