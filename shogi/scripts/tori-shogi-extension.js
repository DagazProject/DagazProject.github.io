(function() {

var checkVersion = Dagaz.Model.checkVersion;

var unprom = [];

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "tori-shogi-extension") {
     unprom[2]  =  1; // FalconP -> Falcon
     unprom[8]  =  7; // SwallowP -> Swallow
  } else {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var sr = design.getDirection("sr");
  _.each(board.moves, function(move) {
      if (move.isSimpleMove()) {
          var pos = move.actions[0][1][0];
          var piece = board.getPiece(pos);
          if (piece !== null) {
              if (!_.isUndefined(unprom[+piece.type])) {
                   piece = piece.promote(unprom[+piece.type]);
              }
              piece = piece.changeOwner(board.player);
              var p = design.navigate(board.player, pos, sr);
              while (p !== null) {
                  if (board.getPiece(p) === null) {
                      move.movePiece(pos, p, piece);
                      return;
                  }
                  p = design.navigate(board.player, p, sr);
              }
          }
      }
  });
  CheckInvariants(board);
}

})();
