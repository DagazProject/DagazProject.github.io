(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "longgammon-head") {
      checkVersion(design, name, value);
  }
}

var notFirst = function(design, board, player) {
  for (var b = board; b.parent !== null; b = b.parent)  {
       if (_.indexOf([1, 2, 3, 4, 5, 6], b.move.mode) >= 0) {
           if (b.parent.player != board.player) return true;
       }
  }
  return false;
}

var fromHead = function(design, board) {
  for (var b = board; b.parent !== null; b = b.parent)  {
       if (b.parent.player != board.player) break;
       if (_.indexOf([1, 2, 3, 4, 5, 6], b.move.mode) >= 0) {
           var pos = b.move.actions[0][0][0];
           if (design.inZone(5, board.player, pos)) {
               return notFirst(design, board, board.player);
           }
       }
  }
  return false;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  if (fromHead(design, board)) {
      _.each(board.moves, function(move) {
       if (_.indexOf([1, 2, 3, 4, 5, 6], move.mode) >= 0) {
              var pos = move.actions[0][0][0];
              if (design.inZone(5, board.player, pos)) {
                  move.failed = true;
              }
          }
      });
  }
  CheckInvariants(board);
}

})();
