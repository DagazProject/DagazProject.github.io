(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "chimera-restriction") {
     checkVersion(design, name, value);
  }
}

var findGroupIx = function(board, move, groups) {
  var g = []; var r = -1;
  for (var i = 0; i < move.actions.length; i++) {
       var a = move.actions[i];
       if (a[0] === null) continue;
       var piece = board.getPiece(a[0][0]);
       if (piece === null) continue;
       var v = piece.getValue(0);
       if (v === null) continue;
       for (var j = 0; j < groups.length; j++) {
           if (_.indexOf(groups[j], +v) >= 0) {
               r = j;
               break;
           }
       }
       if (_.indexOf(g, +v) < 0) g.push(+v);
  }
  if (r < 0) {
     r = groups.length;
     groups.push(g);
  } else {
     groups[r] = _.union(groups[r], g);
  }
  return r;
}

var checkIntersections = function(groups) { 
  var r = [];
  if (groups.length == 1) return r;
  for (var i = 0; i < groups.length; i++) {
      for (var j = i + 1; j < groups.length; j++) {
           if (_.intersection(groups[i], groups[j]).length > 0) {
               r.push(i);
               r.push(j);
           }
      }
  }
  return r;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var all = [];
  for (var m = 0; m < 6; m++) {
       var moves  = [];
       var groups = [];
       for (var i = 0; i < board.moves.length; i++) {
            if (board.moves[i].mode != m) continue;
            var ix = findGroupIx(board, board.moves[i], groups);
            if (ix >= moves.length) {
                moves[ix] = Dagaz.Model.createMove(m);
            }
            _.each(board.moves[i].actions, function(a) {
                moves[ix].actions.push(a);
            });
       }
       var ixs = checkIntersections(groups);
       for (var i = 0; i < moves.length; i++) {
            if (_.indexOf(ixs, i) >= 0) continue;
            all.push(moves[i]);
       }
  }
  board.moves = all;
  CheckInvariants(board);
}

})();
