(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "virus-wars-invariant") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      var f = true;
      if ((move.actions.length == 1) && (move.actions[0][0] === null) && (move.actions[0][1] !== null)) {
          var pos = move.actions[0][1][0];
          _.each(design.allDirections(), function(dir) {
              if (f) {
                  var p = design.navigate(board.player, pos, dir);
                  if (p !== null) {
                      var piece = board.getPiece(p);
                      if ((piece !== null) && (piece.player == board.player)) {
                          f = false;
                      }
                  }
              }
          });
      }
      if (f) {
          move.failed = true;
      }
  });
  CheckInvariants(board);
}

})();
