(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "momentum-extension") {
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
  _.each(board.moves, function(move) {
      if (move.isSimpleMove()) {
          var pos = move.actions[0][0][0];
          var piece = board.getPiece(pos);
          if (+piece.type == 2) return;
          pos = design.navigate(board.player, move.actions[0][1][0], move.mode);
          var last = null;
          while (pos !== null) {
              if (board.getPiece(pos) !== null) break;
              last = pos;
              pos = design.navigate(board.player, pos, move.mode);
          }
          if (last !== null) {
              move.sound = 10;
              if ((+piece.type == 0) && design.inZone(0, piece.player, last)) {
                  piece = piece.promote(4);
              }
              move.movePiece(move.actions[0][1][0], last, piece, 2);
          }         
      }
  });
  CheckInvariants(board);
}

})();
