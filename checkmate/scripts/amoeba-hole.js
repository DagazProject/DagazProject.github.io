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
       if (piece.type != 1) continue;
       var p = design.navigate(1, pos, 8);
       if (p === null) continue;
       if (board.getPiece(p) !== null) continue;
       _.each([0, 1, 2, 3], function(dir) {
           var p = design.navigate(1, pos, dir);
           if (p === null) return;
           var t = board.getPiece(p);
           if (t !== null) {
               if (t.type != 0) return;
           }
           var m = Dagaz.Model.createMove(1, 10);
           m.movePiece(pos, p, piece.changeOwner(design.nextPlayer(piece.player)));
           if (t !== null) {
               m.movePiece(p, pos, t);
           }
           board.moves.push(m);
       });
  }
  CheckInvariants(board);
}

})();
