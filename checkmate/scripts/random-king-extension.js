(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "random-king-extension") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var king   = design.getPieceType("King");
  var rook   = design.getPieceType("Rook");
  var cnt = 0; rooks = [];
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.player == board.player) return;
      if (piece.type == rook) {
          rooks.push(pos);
          return;
      }
      if (piece.type != king) return;
      cnt++;
  });
  if ((cnt == 0) && (rooks.length == 2)) {
      _.each(board.moves, function(move) {
          var pos = move.actions[0][1][0];
          var piece = board.getPiece(pos);
          if (piece === null) return;
          if (piece.type != rook) return;
          var p = null;
          for (var i = 0; i < rooks.length; i++) {
              if (rooks[i] != pos) p = rooks[i];
          }
          if (p === null) return;
          piece = board.getPiece(p);
          if (piece === null) return;
          move.movePiece(p, p, piece.promote(king));
      });
  }
  CheckInvariants(board);
}

})();
