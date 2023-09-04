(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "gonnect-goal") {
     checkVersion(design, name, value);
  }
}

var checkChain = function(design, board, player, start, stop) {
  var r = false;
  var group = [];
  _.each(design.allPositions(), function(pos) {
      if (design.inZone(start, player, pos)) {
          var piece = board.getPiece(pos);
          if ((piece !== null) && (piece.player == player)) {
              group.push(pos);
          }
      }
  });
  for (var i = 0; i < group.length; i++) {
      _.each(design.allDirections(), function(dir) {
           var pos = design.navigate(player, group[i], dir);
           if ((pos !== null) && (_.indexOf(group, pos) < 0)) {
               var piece = board.getPiece(pos);
               if ((piece !== null) && (piece.player == player)) {
                    if (design.inZone(stop, player, pos)) {
                        r = true;
                    }
                    group.push(pos);
               }
           }
      });
  }
  return r;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  if (checkChain(design, board, player, 0, 2) || checkChain(design, board, player, 1, 3)) return 1;
  return checkGoals(design, board, player);
}

})();
