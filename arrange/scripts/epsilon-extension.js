(function() {

Dagaz.View.STEP_CNT = 4;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "epsilon-extension") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = board.game.design;  
  for (var pos = 0; pos < 64; pos ++) {
       var piece = board.getPiece(pos);
       if (piece === null) continue;
       if (piece.player != board.player) continue;
       var group = [pos]; var targets = [];
       var trace = [];
       for (var i = 0; i < group.length; i++) {
            _.each(design.allDirections(), function(dir) {
                var p = design.navigate(1, group[i], dir);
                if ((p === null) || (_.indexOf(targets, p) >= 0)) return;
                var t = board.getPiece(p);
                if (t === null) return;
                targets.push(p);
                p = design.navigate(1, p, dir);
                if ((p === null) || (_.indexOf(group, p) >= 0)) return;
                if (board.getPiece(p) !== null) return;
                trace[p] = group[i];
                group.push(p);
            });
       }
       for (var i = 1; i < group.length; i++) {
            var target = group[i];
            var move = Dagaz.Model.createMove(0);
            hints = [];
            var p = group[i];
            while (p) {
                var q = trace[p];
                if (q) {
                    hints.push(q);
                    if (q == pos) break;
                }
                p = q;
            }
            move.hints = [];
            while (hints.length > 0) {
                var q = hints.pop();
                move.hints.push(q);
            }
            move.movePiece(pos, group[i], piece);
            board.moves.push(move);
       }
  }
  CheckInvariants(board);
}

})();
