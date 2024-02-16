(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "cyvasse-setup") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var moves = [];
  for (var from = 216; from < 270; from++) {
       var piece = board.getPiece(from);
       if (piece === null) continue;
       if (piece.player != board.player) continue;
       if (piece.type != 0) continue;
       for (var to = 108; to < 216; to++) {
            if (!design.inZone(1, board.player, to)) continue;
            if (board.getPiece(to) !== null) continue;
            var move = Dagaz.Model.createMove(0);
            move.movePiece(from, to, piece);
            board.moves.push(move);
       }
       break;
  }
  if (moves.length == 0) {
      for (var from = 216; from < 270; from++) {
           var piece = board.getPiece(from);
           if (piece === null) continue;
           if (piece.player != board.player) continue;
           if (piece.type == 0) continue;
           for (var to = 108; to < 216; to++) {
                if (!design.inZone(0, board.player, to)) continue;
                if (board.getPiece(to) !== null) continue;
                var move = Dagaz.Model.createMove(0);
                move.movePiece(from, to, piece);
                board.moves.push(move);
           }
      }
  }
  if (moves.length > 0) {
      board.moves = moves;
  }
  CheckInvariants(board);
}

})();
