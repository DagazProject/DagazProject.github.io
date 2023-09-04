(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "hex-pie") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = board.game.design;
  var positions = [];
  _.each(design.allPositions(), function(pos) {
      if (board.getPiece(pos) === null) return;
      positions.push(pos);
  });
  if ((positions.length == 1) && (board.turn == 1)) {
      var p = positions[0];
      var x = Dagaz.Model.getX(p);
      var y = Dagaz.Model.getY(p);
      var q = x * Dagaz.Model.WIDTH + y;
      var move = Dagaz.Model.createMove(0);
      if (p != q) {
          move.capturePiece(p);
      }
      move.dropPiece(q, Dagaz.Model.createPiece(0, board.player));
      board.moves.push(move);
  }
  CheckInvariants(board);
}

})();
