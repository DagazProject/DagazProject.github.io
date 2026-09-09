(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "amoeba-hole") {
      checkVersion(design, name, value);
  }
}

if (!_.isUndefined(Dagaz.Controller.addSound)) {
    Dagaz.Controller.addSound(10, "../sounds/slide.ogg", true);
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  for (var pos = 0; pos < 49; pos++) {
       var piece = board.getPiece(pos);
       if (piece === null) continue;
       if (piece.type != 0) continue;
       _.each([0, 1, 2, 3], function(dir) {
           var p = design.navigate(1, pos, dir);
           if (p === null) return;
           var t = board.getPiece(p);
           if (t !== null) {
               if (t.type == 0) return;
           }
           var m = Dagaz.Model.createMove(1, 10);
           m.movePiece(pos, p, piece);
           if (t !== null) {
               m.movePiece(p, pos, t.changeOwner(design.nextPlayer(t.player)));
           }
           var q = pos;
           while ((p !== null) && (q !== null)) {
               p = design.navigate(1, p, 8);
               q = design.navigate(1, q, 8);
               if ((p === null) || (q === null)) break;
               t = board.getPiece(p);
               if (t !== null) {
                   m.movePiece(p, q, t);
               }
           }
           board.moves.push(m);
       });
  }
  CheckInvariants(board);
}

})();
