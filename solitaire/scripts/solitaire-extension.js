(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "solitaire-extension") {
     checkVersion(design, name, value);
  }
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var positions = _.filter(design.allPositions(), function(pos) {
      return board.getPiece(pos) !== null;
  });
  if ((positions.length == 1) && design.inZone(0, board.player, positions[0])) {
      return 1;
  } else {
      return checkGoals(design, board, player); 
  }
}

})();
