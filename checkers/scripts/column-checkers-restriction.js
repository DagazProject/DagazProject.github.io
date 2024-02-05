(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "column-checkers-restriction") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      var forbidden = [];
      _.each(move.actions, function(a) {
          if (a[0] === null) return;
          if (a[1] === null) {
              var piece = board.getPiece(a[0][0]);
              if (piece === null) return;
              var v = piece.getValue(0);
              if (v !== null) {
                  forbidden.push(+a[0][0]);
              }
          } else {
/*            if (_.indexOf(forbidden, +a[1][0]) >= 0) {
                  move.failed = true;
                  return;
              }*/
              var d = a[1][0] - a[0][0];
              var s = (d % (Dagaz.Model.WIDTH - 1)) == 0 ? Dagaz.Model.WIDTH - 1 : Dagaz.Model.WIDTH + 1;
              if (d < 0) s = -s;
              for (pos = a[0][0] + s; ; pos += s) {
                   var ix = _.indexOf(forbidden, +pos);
                   if ((ix >= 0) && (ix < forbidden.length - 1)) {
                       move.failed = true;
                       return;
                   }
                   if (pos == a[1][0]) break;
              }
          }
      });
  });
  CheckInvariants(board);
}

})();
