(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "puluc-restriction") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var mode = 0;
  _.each(design.allPositions(), function(pos) {
      if (design.inZone(0, 1, pos)) {
          var piece = board.getPiece(pos);
          if (piece !== null) {
              mode += +piece.type;
          }
      }
  });
  if (mode == 0) {
      mode = 5;
  }
  var moves  = [];
  _.each(board.moves, function(move) {
      if (move.isSimpleMove() && (move.mode == mode)) {
          moves.push(move);
          var pos = design.navigate(1, move.actions[0][0][0], 0);
          if ((pos !== null) && (board.getPiece(pos) !== null)) {
              move.failed = true;
              return;
          }
          _.each(design.allPositions(), function(pos) {
              if (design.inZone(0, 1, pos)) {
                  move.capturePiece(pos);
              }
         });
      }
  });
  if (moves.length > 0) {
      board.moves = moves;
  }
  CheckInvariants(board);
}

})();
