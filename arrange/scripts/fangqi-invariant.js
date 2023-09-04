(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "fangqi-invariant") {
     checkVersion(design, name, value);
  }
}

var isCapturing = function(move) {
  if (move.actions.length < 2) return false;
  if ((move.actions[0][0] === null) || (move.actions[0][1] !== null)) return false;
  if ((move.actions[1][0] === null) || (move.actions[1][1] === null)) return false;
  return (move.actions[0][0][0] == move.actions[1][0][0]) &&
         (move.actions[1][0][0] == move.actions[1][1][0]);
}

Dagaz.Model.calcAvail = function(design, board, player) {
  var r = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.player == player) && (Dagaz.Model.calcForms(board, player, pos, null) == 0)) r++;
  });
  return r;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var alt = board.getValue(design.nextPlayer(board.player));
  if (alt === null) alt = 0;
  var req = board.getValue(board.player);
  if (req === null) req = 0;
  var avail = Dagaz.Model.calcAvail(design, board, board.player);
  if ((avail > 0) && (alt > 0) && !_.isUndefined(board.move) && 
      (isCapturing(board.move) || (req == 0))) {
      board.moves = [ Dagaz.Model.createMove(1) ];
      CheckInvariants(board);
      return;
  }
  avail = Dagaz.Model.calcAvail(design, board, design.nextPlayer(board.player));
  if ((req > 0) && (avail > 0)) {
      _.each(board.moves, function(move) {
          if (isCapturing(move)) {
              var pos = move.actions[0][0][0];
              var piece = board.getPiece(pos);
              if (Dagaz.Model.calcForms(board, piece.player, pos, null) == 0) {
                  var delta = -1;
                  if (avail == 1) {
                      delta = -req;
                  }
                  move.addValue(board.player, delta);
              } else {
                  move.failed = true;
              }
          } else {
              move.failed = true;
          }
      });
  } else {
      _.each(board.moves, function(move) {
          if (isCapturing(move)) move.failed = true;
          if (req > 0) {
              move.addValue(board.player, -req);
          }
      });
  }
  CheckInvariants(board);
}

})();
