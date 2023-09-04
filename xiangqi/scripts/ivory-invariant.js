(function() {

Dagaz.AI.inProgress = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "ivory-invariant") {
      checkVersion(design, name, value);
  }
}

if (!_.isUndefined(Dagaz.Controller.addSound)) {
    Dagaz.Controller.addSound(0, "../sounds/slide.ogg", true);
    Dagaz.Controller.addSound(2,  "../sounds/tadam.wav", true);
    Dagaz.Controller.addSound(3, "../sounds/loss.wav", true);
}

var findGeneral = function(design, board, player) {
  var positions = design.allPositions();
  for (var i = 0; i < positions.length; i++) {
       var piece = board.getPiece(positions[i]);
       if ((piece !== null) && (piece.type == 6) && (piece.player == player)) {
           return positions[i];
       }
  }
  return null;
}

var checkOpposition = function(design, board, player, pos) {
  var p = design.navigate(player, pos, 7);
  while (p !== null) {
      var piece = board.getPiece(p);
      if (piece !== null) {
          if (piece.type != 6) return false;
          if (piece.player == player) return false;
          p = design.navigate(piece.player, p, 8);
          return p !== null;
      }
      p = design.navigate(player, p, 7);
  }
  return false;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  if (!Dagaz.AI.inProgress) {
      Dagaz.AI.inProgress = true;
      _.each(board.moves, function(move) {
          var b = board.apply(move);
          var p = findGeneral(design, b, board.player);
          if (p === null) return false;
          if (checkOpposition(design, b, board.player, p)) {
              move.failed = true;
              return;
          }
          b.generate(design);
          for (var i = 0; i < b.moves.length; i++) {
               if (b.moves[i].isSimpleMove()) {
                   var pos = b.moves[i].actions[0][1][0];
                   if (pos == p) {
                       move.failed = true;
                       return;
                   }
               }
          }
      });
      Dagaz.AI.inProgress = false;
  }
  CheckInvariants(board);
}

})();
