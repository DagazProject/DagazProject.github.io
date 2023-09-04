(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "visavis-restriction") {
      checkVersion(design, name, value);
  }
}

Dagaz.Model.findPieces = function(design, board, player, type) {
  var r = [];
  var positions = design.allPositions();
  for (var i = 0; i < positions.length; i++) {
       var piece = board.getPiece(positions[i]);
       if ((piece !== null) && (piece.type == type) && (piece.player == player)) {
           r.push(positions[i]);
       }
  }
  return r;
}

var getAvail = function(design, board, isBlack) {
  var r = [];
  _.each(design.allPositions(), function(pos) {
      if (!design.inZone(3, board.player, pos)) return;
      if (isBlack == design.inZone(2, board.player, pos)) return;
      if (board.getPiece(pos) !== null) return;
      r.push(pos);
  });
  return r;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var bishops = Dagaz.Model.findPieces(design, board, board.player, 3);
  if (!inProgress && (bishops.length == 1)) {
      var isBlack = design.inZone(2, board.player, bishops[0]);
      var avail = getAvail(design, board, isBlack);
      _.each(board.moves, function(move) {
          if (move.isDropMove()) {
              var pos   = move.actions[0][1][0];
              var piece = move.actions[0][2][0];
              if (piece.type == 3) {
                  if (design.inZone(2, board.player, pos) == isBlack) {
                      move.failed = true;
                  }
              } else if ((avail.length < 2) && (design.inZone(2, board.player, pos) != isBlack)) {
                  move.failed = true;
              }
          }
      });
  }
  CheckInvariants(board);
}

})();
