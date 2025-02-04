(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "durer-extension") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(design.allPositions(), function(pos) {
      if (design.inZone(0, board.player, pos)) return;
      var piece = board.getPiece(pos);
      if (piece === null) return;
      var v = +piece.type;
      if ((v % 4) == 1) {
          v++;
      } else if ((v % 4) == 2) {
          v--;
      }
      var y = (v / 4) | 0;
      var x = v % 4;
      if (x > 1) x += 8;
      var p = (y * 12) + x;
      var m = Dagaz.Model.createMove(0);
      m.movePiece(pos, p, piece);
      board.moves.push(m);
  });
  CheckInvariants(board);
}

})();
