(function() {

Dagaz.Model.BOARD_SIZE = 20 * 20;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "gess-restrictions") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      _.each(move.actions, function(a) {
          if ((a[0] !== null) && (a[1] !== null)) {
              var pos = a[0][0] - Dagaz.Model.BOARD_SIZE;
              var piece = board.getPiece(pos);
              if ((piece !== null) && (piece.player != board.player)) {
                  move.failed = true;
                  return;
              }
              _.each(design.allDirections(), function(dir) {
                  var p = design.navigate(board.player, pos, dir);
                  if (p !== null) {
                      var piece = board.getPiece(p);
                      if ((piece !== null) && (piece.player != board.player)) {
                          move.failed = true;
                          return;
                      }
                  }
              });
              pos = a[1][0] - Dagaz.Model.BOARD_SIZE;
              piece = board.getPiece(pos);
              if (piece === null) {
                  move.failed = true;
              }
          }
      });
  });
  var moves = [];
  _.each(board.moves, function(move) {
      if (_.isUndefined(move.failed)) {
          moves.push(move);
      }
  });
  board.moves = moves;
  CheckInvariants(board);
}

})();
