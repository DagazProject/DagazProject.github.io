(function() {

var size = 84;
var dirs = [2, 4, 5, 8];

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "lines-extension") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = board.game.design;  
  for (var pos = 3; pos < size; pos++) {
       var piece = board.getPiece(pos);
       if (piece !== null) {
           var group = [pos];
           var level = []; level[pos] = 0;
           for (var i = 0; i < group.length; i++) {
                _.each(dirs, function(dir) {
                    var p = design.navigate(1, group[i], dir);
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
                    _.each(dirs, function(dir) {
                        var p = design.navigate(1, target, dir);
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
                move.mode = 0;
                move.sound = 1;
                board.moves.push(move);
           }
       }
  }
  CheckInvariants(board);
}

})();
