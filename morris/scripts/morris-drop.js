(function() {

Dagaz.Model.START_POS = 29;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "morris-drop") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var cnt = board.getValue(0);
  if (cnt === null) cnt = 0;
  if (cnt == 0) {
      var moves = [];
      for (var src = Dagaz.Model.START_POS; src < design.positions.length; src++) {
           var piece = board.getPiece(src);
           if (piece === null) continue;
           if (piece.player != board.player) continue;
           for (var dst = 0; dst < Dagaz.Model.START_POS; dst++) {
                if (board.getPiece(dst) !== null) continue;
                var m = Dagaz.Model.createMove(0);
                m.movePiece(src, dst, piece);
                moves.push(m);
           }
      }
      if (moves.length > 0) {
          board.moves = moves;
      }
  }
  CheckInvariants(board);
}

})();
