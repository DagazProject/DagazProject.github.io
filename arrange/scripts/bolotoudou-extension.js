(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "bolotoudou-extension") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var n = design.getDirection("n"); var w = design.getDirection("w");
  var s = design.getDirection("s"); var e = design.getDirection("e");
  _.each(board.moves, function(move) {
      if (move.isSimpleMove()) {
          var empty = move.actions[0][0][0];
          var pos   = move.actions[0][1][0];
          if (Dagaz.Model.isLine(design,   board, board.player, pos, n, empty) ||
              Dagaz.Model.isLine(design,   board, board.player, pos, w, empty) ||
              Dagaz.Model.isLine(design,   board, board.player, pos, s, empty) ||
              Dagaz.Model.isLine(design,   board, board.player, pos, e, empty) ||
              Dagaz.Model.isMiddle(design, board, board.player, pos, n, empty) ||
              Dagaz.Model.isMiddle(design, board, board.player, pos, w, empty)) {
              move.mode = 2;
          }
      }
  });
  CheckInvariants(board);
}

})();
