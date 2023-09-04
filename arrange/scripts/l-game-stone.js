(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "l-game-stone") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  if ((board.turn == 1) || (board.turn == 3)) {
      var s = []; var d = [];
      _.each(design.allPositions(), function(pos) {
          var piece = board.getPiece(pos);
          if (piece === null) {
              d.push(pos);
              return;
          }
          if (piece.type != 0) return;
          s.push(pos);
      });
      _.each(s, function(p) {
          var piece = board.getPiece(p);
          if (piece === null) return;
          _.each(d, function(q) {
               var m = Dagaz.Model.createMove(0, 10);
               m.movePiece(p, q, piece);
               board.moves.push(m);
          });
      });
  }
  CheckInvariants(board);
}

})();
