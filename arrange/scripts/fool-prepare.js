(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "fool-prepare") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  for (var pos = 0; pos < 20; pos++) {
       var piece = board.getPiece(pos);
       if (piece === null) continue;
       var m = Dagaz.Model.createMove(0);
       m.movePiece(pos, pos + 20, piece);
       board.moves.push(m);
  }
  for (var pos = 20; pos < 40; pos++) {
       var piece = board.getPiece(pos);
       if (piece === null) continue;
       var m = Dagaz.Model.createMove(0);
       m.movePiece(pos, pos - 20, piece);
       board.moves.push(m);
  }
  CheckInvariants(board);
}

})();
