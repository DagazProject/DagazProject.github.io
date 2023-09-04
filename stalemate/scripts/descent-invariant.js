(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "descent-invariant") {
     checkVersion(design, name, value);
  }
}

if (!_.isUndefined(Dagaz.Controller.addSound)) {
    Dagaz.Controller.addSound(0, "../sounds/step.ogg");
    Dagaz.Controller.addSound(6, "../sounds/step.ogg");
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  if (board.player == 2) {
      _.each(board.moves, function(move) {
          if (move.isDropMove()) {
              var pos = move.actions[0][1][0];
              var f = false;
              _.each(design.allDirections(), function(dir) {
                  var p = design.navigate(board.player, pos, dir);
                  if (p !== null) {
                      var piece = board.getPiece(p);
                      if ((piece !== null) && (piece.player == board.player)) f = true;
                  }
              });
              if (!f) {
                  move.failed = true;
              }
          }
      });
  }
  CheckInvariants(board);
}

})();
