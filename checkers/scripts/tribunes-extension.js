(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "tribunes-extension") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      var actions  = [];
      var captured = null;
      var initial  = null;
      _.each(move.actions, function(a) {
          if ((a[0] !== null) && (a[1] === null)) {
              var pos   = a[0][0];
              var piece = board.getPiece(pos);
              if (piece === null) return;
              if (+piece.type % 3 > 0) {
                  captured = pos;
              } else {
                  actions.push(a);
              }
          } else {
              if ((a[0] !== null) && (a[2] !== null)) {
                  if (initial === null) {
                      initial = board.getPiece(a[0][0]);
                  }
                  var m = +initial.type % 3;
                  if ((m > 0) && (initial.type != a[2][0].type)) {
                      var piece = a[2][0];
                      piece = piece.promote(+piece.type + m);
                      a[2]  = [ piece ];
                  }
              }
              actions.push(a);
              if (captured !== null) {
                  var part  = a[3];
                  var piece = board.getPiece(captured);
                  var m     = +piece.type;
                  if (m >= 3) {
                      m -= 3;
                  }         
                  piece = piece.promote(m - 1);
                  actions.push([ [captured], [captured], [piece], part]);
                  captured = null;
              }
          }
      });
      move.actions = actions;
  });
  CheckInvariants(board);
}

})();
