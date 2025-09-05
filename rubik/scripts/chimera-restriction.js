(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "chimera-restriction") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  for (var i = 0; i < board.moves.length; i++) {
       var move = board.moves[i];
       if (move.failed) continue;
       var ids = [];
       _.each(move.actions, function(a) {
          if (a[0] === null) return;
          var pos = a[0][0];
          var piece = board.getPiece(pos);
          if (piece === null) return;
          var v = piece.getValue(0);
          if (v === null) return;
          ids.push(+v);
       });
       for (var j = 0; j < ids.length; j++) {
            var id = ids[j];
            for (var k = 0; k < board.moves.length; k++) {
                 var m = board.moves[k];
                 if (k == i) continue;
                 if (move.mode != m.mode) continue;
                 var f = false;
                 _.each(m.actions, function(a) {
                     if (a[0] === null) return;
                     var pos = a[0][0];
                     var piece = board.getPiece(pos);
                     if (piece === null) return;
                     var v = piece.getValue(0);
                     if (v === null) return;
                     if (v != id) return;
                     f = true;
                 });
                 if (f) {
                     _.each(m.actions, function(a) {
                         move.actions.push(a);
                     });
                     m.failed = true;
                 }
            }
       }
  }
  CheckInvariants(board);
}

})();
