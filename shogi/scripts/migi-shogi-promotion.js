(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "migi-shogi-promotion") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.actions[0][1] === null) return;
      if (move.actions[0][2] === null) return;
      var pos = move.actions[0][1][0];
      var piece = move.actions[0][2][0];
      var f = false;
      if (piece.type == 6 || piece.type == 8) {
          if (design.inZone(1, board.player, pos)) f = true;          
      }
      if (piece.type == 5) {
          if (design.inZone(2, board.player, pos)) f = true;          
      }
      if (f) {
          move.actions[0][2] = [piece.changeOwner(+piece.player + 2)];
      }
  });
  CheckInvariants(board);
}

})();
