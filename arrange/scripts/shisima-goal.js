(function() {

Dagaz.AI.AI_FRAME = 1000;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "shisima-goal") {
     checkVersion(design, name, value);
  }
}

if (!_.isUndefined(Dagaz.Controller.addSound)) {
    Dagaz.Controller.addSound(0, "../sounds/slide.ogg", true);
    Dagaz.Controller.addSound(2,  "../sounds/tadam.wav", true);
    Dagaz.Controller.addSound(3, "../sounds/loss.wav", true);
}

var isLine = function(design, board, player, pos, dir) {
  var p = design.navigate(player, pos, dir);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if (piece === null) return false;
  if (piece.player != player) return false;
  p = design.navigate(player, p, dir);
  if (p === null) return false;
  piece = board.getPiece(p);
  if (piece === null) return false;
  return piece.player == player;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var start = design.getDirection("ne");
  for (var pos = 0; pos < design.positions.length; pos++) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
          for (var dir = start; dir < design.dirs.length; dir++) {
               if (isLine(design, board, piece.player, pos, dir)) {
                   if (piece.player == player) {
                       return 1;
                   } else {
                       return -1;
                   }
               }
          }
      }
  }
  return checkGoals(design, board, player);
}

})();
