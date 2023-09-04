(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "klondike-goal") {
     checkVersion(design, name, value);
  }
}

if (!_.isUndefined(Dagaz.Controller.addSound)) {
    Dagaz.Controller.addSound(0, "../sounds/card.ogg", true);
    Dagaz.Controller.addSound(1, "../sounds/card.wav", true);
    Dagaz.Controller.addSound(2,  "../sounds/win.wav", true);
    Dagaz.Controller.addSound(3,  "../sounds/win.wav", true);
}

var countStack = function(board, pos) {
  var piece = board.getPiece(pos);
  if (piece === null) return 0;
  var stack = piece.getValue(0);
  if (stack === null) return 0;
  return stack.length;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var cnt = 0;
  for (var pos = 7; pos < design.positions.length; pos++) {
      if (board.getPiece(pos) !== null) {
          cnt++;
          break;
      }
  }
  if (cnt == 0) {
      cnt += countStack(board, 0);
      cnt += countStack(board, 1);
  }
  if (cnt == 0) return 1;
  return checkGoals(design, board, player);
}

})();
