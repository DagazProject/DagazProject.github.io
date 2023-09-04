(function() {

var checkVersion = Dagaz.Model.checkVersion;
var ko = false;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "ko-sync") {
     if (value == "true") {
         ko = true;
     }
  } else {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  if (!_.isUndefined(board.move)) {
      _.each(board.moves, function(move) {
          if (move.isSimpleMove()) {
              var s = move.actions[0][0][0];
              var d = move.actions[0][1][0];
              var f = true;
              _.each(board.move.actions, function(a) {
                  if ((a[0] !== null) && (a[1] !== null)) {
                      if ((a[0][0] !== s) && (a[0][0] !== d)) f = false;
                      if ((a[1][0] !== s) && (a[1][0] !== d)) f = false;
                  }
              });
              if (f) {
                  move.failed = true;
              }
          }
      });
  }
  CheckInvariants(board);
}

})();
