(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "botk-extension") {
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
  });
  return r;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      var pos = null;
      for (var i = 0; i < move.actions.length; i++) {
           if ((move.actions[i][0] !== null) && (move.actions[i][1] !== null)) {
               pos = move.actions[i][0][0];
               break;
           }
      }
      if (pos === null) return;
      var piece = board.getPiece(pos);
      if (piece.type < 5) {
          move.dropPiece(pos, piece.promote(+piece.type + 1));
      }
  });
  CheckInvariants(board);
}

})();
