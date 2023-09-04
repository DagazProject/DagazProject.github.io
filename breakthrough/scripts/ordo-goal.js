(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "ordo-goal") {
     checkVersion(design, name, value);
  }
}

var sign = function(x) {
  if (x > 0) return 1;
  if (x < 0) return -1;
  return 0;
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  if (move.isSimpleMove()) {
      var pos = move.actions[0][1][0];
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.player != board.player)) {
          var r = 10;
          _.each(design.allDirections(), function(dir) {
               var p = design.navigate(piece.player, pos, dir);
               if (p !== null) {
                   var neighbor = board.getPiece(p);
                   if (neighbor !== null) {
                       r++;
                   }
               } else {
                   r--;
               }
          });
          return r;
      }
  }
  if ((move.actions.length > 0) && (move.actions[0][0] !== null) && (move.actions[0][1] !== null)) {
      var pos = move.actions[0][0][0];
      var target = move.actions[0][1][0];
      var x   = Dagaz.Model.getX(pos);
      var y   = Dagaz.Model.getY(pos);
      var dx  = sign(Dagaz.Model.getX(target) - x);
      var dy  = sign(Dagaz.Model.getY(target) - y);
      var dir = design.findDirection(pos, pos + (dy * Dagaz.Model.WIDTH) + dx);
      if (dir !== null) {
          if (board.player == 1) {
              if ((dir == design.getDirection("n")) ||
                  (dir == design.getDirection("nw")) ||
                  (dir == design.getDirection("ne"))) {
                  return 1;
              }
          } else {
              if ((dir == design.getDirection("s")) ||
                  (dir == design.getDirection("sw")) ||
                  (dir == design.getDirection("se"))) {
                  return 1;
              }
          }
      }
  }
  return -1;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var enemies = 0;
  var friends = 0;
  var winner  = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
          if (piece.player != player) {
              enemies++;
          } else {
              friends++;
          }
          if (design.inZone(0, piece.player, pos)) {
              winner = piece.player;
          }
      }
  });
  if (enemies < 2) {
      return 1;
  }
  if (friends < 2) {
      return -1;
  }
  if (winner > 0) {
      if (player == winner) {
          return 1;
      } else {
          return -1;
      }
  }
  return checkGoals(design, board, player);
}

})();
