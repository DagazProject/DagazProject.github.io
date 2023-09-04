(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "konane-extension") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var positions = [];
  _.each(design.allPositions(), function(pos) {
      if (board.getPiece(pos) === null) {
          positions.push(pos);
      }
  });
  _.chain(board.moves)
   .filter(function(move) {
        var r = false;
        _.chain(move.actions)
         .filter(function(action) {
             return (action[0] !== null) && (action[1] !== null);
          })
         .each(function(action) {
             if (action[0][0] == action[1][0]) r = true;
          })
        return r;
    })
   .each(function(move) {
        _.chain(move.actions)
         .filter(function(action) {
             return (action[0] !== null) && (action[1] === null);
          })
         .each(function(action) {
             var pos = action[0][0];
             if (positions.length == 0) {
                 if (!design.inZone(0, board.player, pos)) {
                     move.failed = true;
                 }
                 return;
             }
             if (positions.length == 1) {
                 var r = true;
                 _.each(design.allDirections(), function(dir) {
                      var p = design.navigate(board.player, pos, dir);
                      if ((p !== null) && (board.getPiece(p) === null)) {
                          r = false;
                      }
                 });
                 if (r) {
                      move.failed = true;
                 }
                 return;
             }
             move.failed = true;
          });
    });
  CheckInvariants(board);
}

})();
