(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "makneeb-extension") {
      checkVersion(design, name, value);
  }
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  return move.actions.length;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var n = design.getDirection("n"); var s = design.getDirection("s");
  var w = design.getDirection("w"); var e = design.getDirection("e");
  _.each(board.moves, function(m) {
      if ((m.actions.length == 1) && (m.actions[0][0] !== null) && (m.actions[0][1] !== null)) {
           var from = m.actions[0][0][0];
           var pos  = m.actions[0][1][0];
           _.each([n, s, w, e], function(d) {
                 var captured = [];
                 var p = design.navigate(board.player, pos, d);
                 while (p !== null) {
                     if (p == from) break;
                     var piece = board.getPiece(p);
                     if (piece === null) return;
                     if (piece.player == board.player) {
                         _.each(captured, function(p) {
                             m.capturePiece(p);
                         });
                         return;
                     } else {
                         captured.push(p);
                     }
                     p = design.navigate(board.player, p, d);
                 }
           });
           var all = [];
           var b = board.apply(m);
           _.each([0, 7, 56, 63], function(p) {
               if (_.indexOf(all, p) < 0) {
                   var group = [ p ];
                   for (var i = 0; i < group.length; i++) {
                        var pos = group[i];
                        var piece = b.getPiece(pos);
                        if ((piece === null) || (piece.player == board.player)) return;
                        _.each([n, s, w, e], function(d) {
                             var p = design.navigate(board.player, pos, d);
                             if ((p !== null) && (_.indexOf(all, p) < 0)) {
                                 var piece = b.getPiece(p);
                                 if ((piece === null) || (piece.player != board.player)) {
                                     group.push(p);
                                     all.push(p);
                                 }
                             }
                        });
                   }
                   _.each(group, function(p) {
                        m.capturePiece(p);
                   });
               }
           });
      }
  });
  CheckInvariants(board);
}

})();
