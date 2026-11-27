(function() {

Dagaz.View.HINT_STEPS = 3;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "ginseng-lotus") {
     checkVersion(design, name, value);
  }
}

Dagaz.Model.findPiece = function(design, board, player, type) {
  var positions = design.allPositions();
  for (var i = 0; i < positions.length; i++) {
       var piece = board.getPiece(positions[i]);
       if ((piece !== null) && (piece.type == type) && (piece.player == player)) {
           return positions[i];
       }
  }
  return null;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = board.game.design;  
  var pos = Dagaz.Model.findPiece(design, board, board.player, 0);
  if (pos !== null) {
      var piece = board.getPiece(pos);
      if (piece !== null) {
          var group = [pos];
          var level = []; level[pos] = 0;
          for (var i = 0; i < group.length; i++) {
              _.each([0, 2, 5, 6], function(dir) {
                   var p = design.navigate(1, group[i], dir);
                   if ((p === null) || (board.getPiece(p) === null)) return
                   p = design.navigate(1, p, dir);
                   if ((p === null) || (_.indexOf(group, p) >= 0)) return;
                   if (board.getPiece(p) !== null) return;
                   level[p] = level[ group[i] ] + 1;
                   group.push(p);
              });
          }
          for (var i = 1; i < group.length; i++) {
              var target = group[i];
              var move = Dagaz.Model.createMove(0);
              move.hints = [];
              while (target != pos) {
                  var best = null; 
                  var v = level[target];
                  _.each([0, 2, 5, 6], function(dir) {
                      var p = design.navigate(1, target, dir);
                      if ((p === null) || (board.getPiece(p) === null)) return
                      p = design.navigate(1, p, dir);
                      if ((p === null) || _.isUndefined(level[p])) return;
                      if (level[p] >= v) return;
                      best = p;
                      v = level[p];
                  });
                  if (best === null) break;
                  target = best;
                  move.hints.unshift(target);
              }
              move.hints.shift();
              move.movePiece(pos, group[i], piece);
              board.moves.push(move);
          }
      }
  }
  CheckInvariants(board);
}

})();
