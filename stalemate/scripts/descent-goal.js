(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "descent-goal") {
      checkVersion(design, name, value);
  }
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var group = []; var weight = [];
  _.each(design.allPositions(), function(pos) {
      if (design.inZone(0, 2, pos) && (board.getPiece(pos) === null)) {
          group.push(pos);
          weight[pos] = 0;
      }
  });
  for (var i = 0; i < group.length; i++) {
      _.each(design.allDirections(), function(dir) {
           var pos = design.navigate(board.player, group[i], dir);
           if ((pos !== null) && (_.indexOf(group, pos) < 0) && (board.getPiece(pos) === null)) {
                group.push(pos);
                weight[pos] = weight[group[i]] + 1;
           }
      });
  }
  if (move.isDropMove()) {
      var pos = move.actions[0][1][0];
      if (!_.isUndefined(weight[pos])) {
          if (weight[pos] == 0) {
              return 1000;
          } else {
              return 100 - weight[pos];
          }
      }
  }
  return -1;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var f = false;
  _.each(design.allPositions(), function(pos) {
      if (design.inZone(0, 2, pos)) {
          var piece = board.getPiece(pos);
          if ((piece !== null) && (piece.player == 2)) f = true;
      }
  });
  if (f) {
      if (player == 1) {
          return -1;
      } else {
          return 1;
      }
  }
  return checkGoals(design, board, player);
}

})();
