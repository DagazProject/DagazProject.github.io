(function() {

var onceFlag = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "morris-invariant") {
     if (value == "once") onceFlag = true;
  } else {
     checkVersion(design, name, value);
  }
}

var calcCaptured = function(board, player) {
  var r = 0;
  while (!_.isUndefined(board.move) && !_.isUndefined(board.parent) && (board.parent !== null)) {
      if (board.player == player) {
          if (Dagaz.Model.isCapture(board.move)) {
              r--;
          } else {
              if (onceFlag) {
                  if (board.move.mode > 0) r++;
              } else {
                  r += board.move.mode;
              }
              break;
          }
      }
      board = board.parent;
  }
  return r;
}

var calcPieces = function(design, board, player) {
  var r = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.player == player)) r++;
  });
  return r;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var disableCaptures = true;
  if (!_.isUndefined(board.move) && !_.isUndefined(board.parent) && (board.parent !== null)) {
      if ((board.move.mode > 0) || Dagaz.Model.isCapture(board.move)) {
          var captured = calcCaptured(board, board.player);
          var count = calcPieces(design, board, board.player);
          if ((captured > 0) && (count > 0)) {
              _.each(board.moves, function(move) {
                  move.failed = true;
              });
              if (board.moves.length > 0) {
                  board.moves.push(Dagaz.Model.createMove(0));
              }
          }
      } else {
          if (board.move.isPass()) {
              _.each(board.moves, function(move) {
                  if (!Dagaz.Model.isCapture(move)) {
                      move.failed = true;
                  }
              });
              disableCaptures = false;
          }
      }
      if (disableCaptures) {
          _.each(board.moves, function(move) {
              if (Dagaz.Model.isCapture(move)) {
                  move.failed = true;
              }
          });
      }
  }
  CheckInvariants(board);
}

})();
