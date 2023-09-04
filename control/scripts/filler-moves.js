(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "filler-moves") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var src = null; var positions = [];
  _.each(design.allPositions(), function(pos) {
      if (!design.inZone(1, board.player, pos)) return;
      if (board.getPiece(pos) !== null) {
          src = pos;
      } else {
          positions.push(pos);
      }
  });
  if (src !== null) {
      _.each(positions, function(dst) {
          var move = Dagaz.Model.createMove(0);
          move.movePiece(src, dst, board.getPiece(src));
          board.moves.push(move);
      });
  }
  CheckInvariants(board);
}

})();
