(function() {

var oneStepMode = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "swap-chess-restrictions") {
      if (value == "step") oneStepMode = true;
  } else {
      checkVersion(design, name, value);
  }
}

if (!_.isUndefined(Dagaz.Controller.play)) {
    Dagaz.Controller.addSound(Dagaz.Sounds.win,  "../sounds/win.wav");
}

Dagaz.Model.checkGoals = function(design, board, player) {
  var design = Dagaz.Model.design;
  var r = 1;
  _.each(design.allPositions(), function(pos) {
      if (r !== null) {
          var piece = board.getPiece(pos);
          if (piece !== null) {
              if (!design.inZone(0, piece.player, pos)) {
                  r = null;
              }
          }
      }
  });
  return r;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.isSimpleMove()) {
          var pos = move.actions[0][0][0];
          var piece = board.getPiece(pos);
          if (piece !== null) {
              var player = piece.player;
              pos = move.actions[0][1][0];
              _.each(design.allDirections(), function(dir) {
                  var p = design.navigate(board.player, pos, dir);
                  while (p !== null) {
                      var piece = board.getPiece(p);
                      if (piece !== null) {
                          if (piece.player != player) {
                              move.failed = true;
                          }
                          return;
                      }
                      if (oneStepMode) return;
                      p = design.navigate(board.player, p, dir);
                  }
              });
          }


      }
  });
  CheckInvariants(board);
}

})();
