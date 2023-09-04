(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "choko-extension") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var player = board.getValue(1);
  if (player === null) {
      player = 0;
  }
  var ko = [];
  _.each(board.moves, function(move) {
      if (move.failed) return;
      if (player > 0) {
          if ((player != board.player) || (move.mode == 0)) {
              move.failed = true;
              return;
          }
          ko.push(move.actions[0][0][0]);
          move.setValue(1, 0);
      } else {
          if (move.mode == 1) {
              move.failed = true;
              return;
          }
          if (move.actions.length == 2) {
              _.each(move.actions, function(a) {
                  if ((a[0] !== null) && (a[1] === null)) {
                      move.setValue(1, board.player);
                  }
              });
          }
      }
  });
  if (ko.length > 0) {
      board.ko = ko;
  }
  CheckInvariants(board);
}

})();
