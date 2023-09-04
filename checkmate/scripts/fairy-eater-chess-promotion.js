(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "fairy-eater-chess-promotion") {
     checkVersion(design, name, value);
  }
}

Dagaz.Model.moveToString = function(move) {
  var r = "";
  _.each(move.actions, function(a) {
      if (a[1] === null) return;
      if (r != "") {
          r = r + " ";
      }
      if (a[0] != null) {
          r = r + Dagaz.Model.posToString(a[0][0]);
          if (a[1] !== null) {
              r = r + '-';
          }
      }
      if (a[1] !== null) {
          r = r + Dagaz.Model.posToString(a[1][0]);
      }
      if ((a[2] !== null) && ((a[0] != null) || (a[1] !== null))) {
          r = r + " " + a[2][0].getType();
      }
  });
  return r;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var pawn   = design.getPieceType("Pawn");
  _.each(board.moves, function(move) {
      if (move.isSimpleMove()) {
          var pos = move.actions[0][0][0];        
          var piece = board.getPiece(pos);
          if (piece === null) return;
          if ((piece.type != pawn) && (piece.type != +pawn + 1)) return;
          if (!design.inZone(0, piece.player, move.actions[0][1][0])) return;
          piece = move.actions[0][2][0];
          var pieces = [];
          pieces.push(piece.promote(design.getPieceType("Ghost")));
          pieces.push(piece.promote(design.getPieceType("Shield")));
          pieces.push(piece.promote(design.getPieceType("Chaos")));
          pieces.push(piece.promote(design.getPieceType("Reaper")));
          pieces.push(piece.promote(design.getPieceType("Knightrider")));
          move.actions[0][2] = pieces;
      }
  });
  CheckInvariants(board);
}

})();
