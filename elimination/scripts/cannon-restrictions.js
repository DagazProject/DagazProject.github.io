(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "cannon-restrictions") {
     checkVersion(design, name, value);
  }
}

if (!_.isUndefined(Dagaz.Controller.addSound)) {
    Dagaz.Controller.addSound(2,  "../sounds/tadam.wav", true);
    Dagaz.Controller.addSound(3, "../sounds/loss.wav", true);
    Dagaz.Controller.addSound(10, "../sounds/shoot.wav", true);
    Dagaz.Controller.addSound(11, "../sounds/gong.wav", true);
    Dagaz.Controller.addSound(12, "../sounds/step.ogg", true);
    Dagaz.Controller.addSound(13, "../sounds/slide.ogg", true);
}

var isCannon = function(design, board, player, pos, dir) {
  var a = 0; var b = 0;
  var p = design.navigate(player, pos, dir);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece !== null) {
      if (piece.player == player) return false;
      p = design.navigate(player, p, dir);
      if (p === null) return false;
      var piece = board.getPiece(p);
      b++;
  }
  while (piece === null) {
      p = design.navigate(player, p, dir);
      if (p === null) return false;
      piece = board.getPiece(p);
      a++;
  }
  if ((a < 1) || (a + b > 2)) return false;
  if ((piece.player != player) || (+piece.type > 0)) return false;
  p = design.navigate(player, p, dir);
  if (p === null) return false;
  piece = board.getPiece(p);
  if ((piece === null) || (piece.player != player) || (+piece.type > 0)) return false;
  p = design.navigate(player, p, dir);
  if (p === null) return false;
  piece = board.getPiece(p);
  if (piece === null) return false;
  return (piece.player == player) && (piece.type == 0);
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = board.game.design;
  var dropFound = false;
  _.each(board.moves, function(move) {
      if (move.isDropMove()) {
          dropFound = true;
      }
  });
  _.each(board.moves, function(move) {
      if (dropFound && !move.isDropMove()) {
          move.failed = true;
          return;
      }
      if (move.mode == 1) {
          var pos = move.actions[0][0][0];
          var enemyFound = false;
          _.each(design.allDirections(), function(dir) {
              var p = design.navigate(board.player, pos, dir);
              if (p !== null) {
                  var piece = board.getPiece(p);
                  if ((piece !== null) && (piece.player != board.player)) {
                      enemyFound = true;
                  }
              }
          });
          if (!enemyFound) {
              move.failed = true;
          }
      }
      if (move.mode == 3) {
          var pos = move.actions[0][0][0];
          var cannonFound = false;
          _.each(design.allDirections(), function(dir) {
              if (isCannon(design, board, board.player, pos, dir)) {
                  cannonFound = true;
              }
          });
          if (!cannonFound) {
              move.failed = true;
          }
      }
  });
  CheckInvariants(board);
}

})();
