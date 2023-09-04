(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "suff-extension") {
      checkVersion(design, name, value);
  }
}

var findTarget = function(src, dst) {
  var dx = Math.abs(Dagaz.Model.getX(src) - Dagaz.Model.getX(dst));
  var dy = Math.abs(Dagaz.Model.getY(src) - Dagaz.Model.getY(dst));
  if ((dx == 1) || (dy == 1)) return null;
  var x  = ((Dagaz.Model.getX(src) + Dagaz.Model.getX(dst)) / 2) | 0;
  var y  = ((Dagaz.Model.getY(src) + Dagaz.Model.getY(dst)) / 2) | 0;
  return y * Dagaz.Model.WIDTH + x;
}

var isDiagonal = function(src, dst) {
  var dx = Math.abs(Dagaz.Model.getX(src) - Dagaz.Model.getX(dst));
  var dy = Math.abs(Dagaz.Model.getY(src) - Dagaz.Model.getY(dst));
  return (dx != 0) && (dy != 0);
}

var capture = function(design, board, move, actions) {
   var pos = design.navigate(board.player, 0, 8);
   while ((pos !== null) && (actions.length > 0)) {
       if (board.getPiece(pos) === null) {
           var a = actions.shift();
           move.movePiece(a.pos, pos, null, a.part)
       }
       pos = design.navigate(board.player, pos, 8);
   }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      var pos = move.actions[0][0][0];
      var piece = board.getPiece(pos);
      if ((move.mode == 1) && (piece !== null)) {
          var isLarge  = (piece.type == 1);
          var captured = [];
          var actions  = [];
          _.each(move.actions, function(a) {             
              var target = findTarget(a[0][0], a[1][0]);
              if (target !== null) {
                  var enemy  = board.getPiece(target);
                  if ((enemy !== null) && (enemy.player != piece.player) && design.inZone(0, board.player, target)) {
                      if (isLarge || isDiagonal(a[0][0], a[1][0])) {
                          if (design.inZone(3, board.player, target) || 
                              design.inZone(3, design.nextPlayer(board.player), target)) {
                              move.failed = true;
                              return;
                          }
                          if (_.indexOf(captured, target) >= 0) {
                              move.failed = true;
                          }
                          captured.push(target);
                          actions.push({
                              pos: target,
                              part: a[3]
                          });
                      }
                  }
              }
          });
          capture(design, board, move, actions);
      }
  });
  CheckInvariants(board);
}

})();
