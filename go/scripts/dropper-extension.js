(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "dropper-extension") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (!move.isSimpleMove()) return;
      var pos = move.actions[0][0][0];
      var piece = Dagaz.Model.createPiece(0, board.player);
      move.dropPiece(pos, piece);
      var avail = [];
      _.each(design.allPositions(), function(p) {
          if (board.getPiece(p) !== null) return;
          var f = true;
          _.each(design.allDirections(), function(d) {
              var q = design.navigate(1, p, d);
              if (q === null) return;
              if (q == pos) {
                  f = false;
                  return;
              }
              if (board.getPiece(q) === null) return;
              f = false;
          });
          if (f) avail.push(p);
      });
      if (avail.length == 0) {
          if (board.turn == 1) {
              move.goTo(3);
          } else {
              move.goTo(1);
          }
      }
  });
  CheckInvariants(board);
}

})();
