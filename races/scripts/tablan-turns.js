(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "tablan-turns") {
     checkVersion(design, name, value);
  }
}

var clearDices = function(design, board, move) {
  for (var pos = 0; pos < 4; pos++) {
       if (board.getPiece(pos) !== null) {
           move.capturePiece(pos);
       }
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.mode == 0) return;
      if (_.indexOf([1, 13], board.turn) >= 0) {
          clearDices(design, board, move);
          move.goTo(8);
          return;
      }
      if (board.turn == 7) {
          clearDices(design, board, move);
          move.goTo(2);
          return;
      }
      if (_.indexOf([2, 8, 12], move.mode) >= 0) {
          if (_.indexOf([0, 12], board.turn) >= 0) {
              clearDices(design, board, move);
              move.goTo(8);
              return;
          }
          if (board.turn == 6) {
              clearDices(design, board, move);
              move.goTo(2);
              return;
          }
      }
  });
  CheckInvariants(board);
}

})();
