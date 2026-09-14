(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "amoeba-pass") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var f = 98; var e = 99;
  if (board.player != 1) {
      f = 99; 
      e = 98;
  }
  var t = board.getPiece(e);
  var p = board.getPiece(f);
  if ((board.turn == 1) || (board.turn == 3)) {
      _.each(board.moves, function(move) {
          if (p !== null) {
              move.capturePiece(f);
          }
      });
      var m = Dagaz.Model.createMove(2);
      m.movePiece(f, f, p);
      m.capturePiece(f);
      board.moves.push(m);
  } else {
      p = Dagaz.Model.createPiece(6, board.player);
      _.each(board.moves, function(move) {
          move.dropPiece(f, p);
          if (t !== null) {
              move.capturePiece(e);
          }
      });
  }
  CheckInvariants(board);
}

})();
