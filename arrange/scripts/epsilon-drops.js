(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "epsilon-drops") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = board.game.design;  
  for (var pos = 64; pos < design.positions.length; pos ++) {
       var piece = board.getPiece(pos);
       if (piece === null) continue;
       if (piece.player != board.player) continue;
       for (var target = 0; target < 64; target++) {
            if (board.getPiece(target) !== null) continue;
            var move = Dagaz.Model.createMove(0);
            move.movePiece(pos, target, piece);
            board.moves.push(move);
       }
  }
  CheckInvariants(board);
}

})();
