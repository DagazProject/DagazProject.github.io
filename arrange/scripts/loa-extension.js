(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "loa-extension") {
     checkVersion(design, name, value);
  }
}

if (!_.isUndefined(Dagaz.Controller.addSound)) {
    Dagaz.Controller.addSound(0, "../sounds/slide.ogg", true);
}

var expand= function(design, board, group) {
  if (group.length > 0) {
      var owner = board.getPiece(group[0]).player;
      for (var i = 0; i < group.length; i++) {
           var pos = group[i];
           _.each(design.allDirections(), function(dir) {
               var p = design.navigate(board.player, pos, dir);
               if (p !== null) {
                   var piece = board.getPiece(p);
                   if ((piece !== null) && (piece.player == owner) && (_.indexOf(group, p) < 0)) {
                       group.push(p);
                   }
               }
           });
      }
  }
}

var coherence = function(design, board, positions) {
  var group = [];
  for (var i = 0; i < positions.length; i++) {
       if (group.length == 0) {
           group.push(positions[i]);
           expand(design, board, group);
       } else {
           if (_.indexOf(group, positions[i]) < 0) return false;
       }
  }
  return true;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var friends = _.filter(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return false;
      return piece.player == player;
  });
  if (coherence(design, board, friends)) {
      return 1;
  }
  var enemies = _.filter(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return false;
      return piece.player != player;
  });
  if (coherence(design, board, enemies)) {
      return -1;
  } else {
      return checkGoals(design, board, player);
  }
}

var getX = function(pos) {
  return pos % 8;
}

var getY = function(pos) {
  return (pos / 8) | 0;
}

var getDirection = function(design, dx, dy) {
  if (dx == 0) return design.getDirection("n");
  if (dy == 0) return design.getDirection("e");
  if (dx * dy > 0) return design.getDirection("nw");
  return design.getDirection("ne");
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.chain(board.moves)
   .filter(function(move) {
       return move.actions.length == 1;
    })
   .each(function(move) {
       var f  = move.actions[0][0][0];
       var t  = move.actions[0][1][0];
       var dx = getX(t) - getX(f);
       var dy = getY(t) - getY(f);
       var d  = Math.max(Math.abs(dx), Math.abs(dy));
       if (d <= 0) move.failed = true;
       var dir = getDirection(design, dx, dy);
       var c = 1;
       var p = design.navigate(board.player, f, dir);
       while (p !== null) {
           if (board.getPiece(p) !== null) {
               c++;
           }
           p = design.navigate(board.player, p, dir);
       }
       p = design.navigate(0, f, dir);
       while (p !== null) {
           if (board.getPiece(p) !== null) {
               c++;
           }
           p = design.navigate(0, p, dir);
       }
       if (d != c) move.failed = true;
    });
  CheckInvariants(board);
}

})();
