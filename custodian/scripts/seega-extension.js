(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "seega-extension") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.isSimpleMove()) {
          var pos = move.actions[0][1][0];
          _.each(design.allDirections(), function(dir) {
              var p = design.navigate(board.player, pos, dir);
              if ((p !== null) && !design.inZone(0, board.player, p)) {
                  var piece = board.getPiece(p);
                  if ((piece !== null) && (piece.player != board.player)) {
                      var q = design.navigate(board.player, p, dir);
                      if (q !== null) {
                          piece = board.getPiece(q);
                          if ((piece !== null) && (piece.player == board.player)) {
                              move.capturePiece(p);
                          }
                      }
                  }
              }
          });
      }
  });
  CheckInvariants(board);
}

})();
