(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "shen-respawn") {
     checkVersion(design, name, value);
  }
}

var getStart = function(design, player) {
  var r = null;
  _.each(design.allPositions(), function(pos) {
      if (design.inZone(0, player, pos)) r = pos;
  });
  return r;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if ((move.mode >= 1) && (move.mode <= 5)) {
           var pos = move.actions[0][0][0];
           var f = false;
           for (var i = 0; i < move.mode; i++) {
                pos = design.navigate(board.player, pos, 0);
                if (pos === null) break;
                if (design.inZone(2, board.player, pos)) {
                    f = true;
                }
           }
           if (f) {
                var pos = getStart(design, board.player);
                if (pos !== null) {
                    var p = design.navigate(board.player, pos, 3);
                    while (p !== null) {
                        if (board.getPiece(p) !== null) break;
                        p = design.navigate(board.player, p, 3);
                    }
                    if ((p !== null) && (board.getPiece(pos) === null)) {
                        move.movePiece(p, pos, board.getPiece(p));
                    }
                }
           }
      }
  });
  CheckInvariants(board);
}

})();
