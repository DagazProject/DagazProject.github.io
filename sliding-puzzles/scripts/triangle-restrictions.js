(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "triangle-restrictions") {
      checkVersion(design, name, value);
  }
}

var calcDirection = function(design, player, pos, dir) {
  if (dir === null) return null;
  if (design.inZone(0, player, pos)) {
      if (dir == 9) return 0;
      if (dir == 5) return 1;
      if (dir == 8) return 4;
      if (dir == 7) return 4;
  } else {
      if (dir == 9) return 6;
      if (dir == 5) return 6;
      if (dir == 8) return 0;
      if (dir == 7) return 1;
  }
  if (dir == 2) return 0;
  if (dir == 3) return 1;
  return null;
}

var notFound = function(pos, move) {
  for (var i = 0; i < move.actions.length; i++) {
       if ((move.actions[i][0] !== null) && (move.actions[i][0][0] == pos)) return false;
  }
  return true;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      _.each(move.actions, function(a) {
          if ((a[0] !== null) && (a[1] !== null)) {
               var dir = design.findDirection(a[0][0], a[1][0]);
               dir = calcDirection(design, board.player, a[0][0], dir);
               if (dir !== null) {
                   var p = design.navigate(board.player, a[0][0], dir);
                   if ((p !== null) && (board.getPiece(p) !== null) && notFound(p, move)) {
                       move.failed = true;
                   }
               }
          }
      });
  });
  CheckInvariants(board);
}

})();
