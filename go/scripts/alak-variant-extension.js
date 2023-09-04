(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "alak-variant-extension") {
     checkVersion(design, name, value);
  }
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var enemies = 0; var friends = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
          if (piece.player != player) {
              enemies++;
          } else {
              friends++;
          }
      }
  });
  if (enemies < 2) return 1;
  if (friends < 2) return -1;
  return checkGoals(design, board, player);
}

var checkCapturing = function(design, board, player, pos, empty, dir, move) {
  var capturing = [];
  var p = design.navigate(player, pos, dir);
  while (p !== null) {
      if (p == empty) return;
      var piece = board.getPiece(p);
      if (piece === null) return;
      if (piece.player == player) break;
      capturing.push(p);
      p = design.navigate(player, p, dir);
  }
  _.each(capturing, function(p) {
      move.capturePiece(p);
  });
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.isSimpleMove()) {
          var empty = move.actions[0][0][0];
          var pos = move.actions[0][1][0];
          checkCapturing(design, board, board.player, pos, empty, 0, move);
          checkCapturing(design, board, board.player, pos, empty, 1, move);
      }
  });
  CheckInvariants(board);
}

})();
