(function() {

Dagaz.AI.AI_FRAME = 1000;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "mu-torere-extension") {
      checkVersion(design, name, value);
  }
}

if (!_.isUndefined(Dagaz.Controller.addSound)) {
    Dagaz.Controller.addSound(0, "../sounds/slide.ogg");
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.isSimpleMove()) {
          if (design.inZone(0, board.player, move.actions[0][1][0])) {
              var pos = move.actions[0][0][0];
              var f = true;
              _.each(design.allDirections(), function(dir) {
                  var p = design.navigate(board.player, pos, dir);
                  if (p !== null) {
                      var piece = board.getPiece(p);
                      if ((piece !== null) && (piece.player != board.player)) f = false;
                  }
              });
              if (f) {
                  move.failed = true;
              }
          }
      }
  });
  CheckInvariants(board);
}

})();
