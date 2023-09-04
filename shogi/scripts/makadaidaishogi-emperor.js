(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "makadaidaishogi-emperor") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design  = Dagaz.Model.design;
  var emperor = null;
  for (var pos = 0; pos < design.positions.length; pos++) {
       var piece = board.getPiece(pos);
       if ((piece !== null) && (piece.player == board.player) && (piece.type == 77)) {
           emperor = pos;
           break;
       }
  }
  if (emperor !== null) {
       var piece = board.getPiece(emperor);
       _.each(design.allPositions(), function(pos) {
           var target = board.getPiece(pos);
           if ((target !== null) && (target.player == board.player)) return;
           var move = Dagaz.Model.createMove(0);
           move.movePiece(emperor, pos, piece);
           board.moves.push(move);
       });
  }
  CheckInvariants(board);
}

})();
