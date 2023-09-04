(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "cheskers-promotion") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var man    = design.getPieceType("Man");
  _.each(board.moves, function(move) {
      var pos = null;
      _.each(move.actions, function(a) {
          if ((a[0] !== null) && (a[1] !== null) && (a[2] !== null)) {
               if (pos === null) {
                   pos = a[0][0];
               }
               var piece = board.getPiece(pos);
               if ((piece !== null) && (piece.type == man) && (a[2][0].type != man)) {
                   var pieces = [];
                   pieces.push(piece.promote(design.getPieceType("Bishop")));
                   pieces.push(piece.promote(design.getPieceType("Camel")));
                   pieces.push(piece.promote(design.getPieceType("King")));
                   a[2] = pieces;
               }
          }
      });
  });
  CheckInvariants(board);
}

})();
