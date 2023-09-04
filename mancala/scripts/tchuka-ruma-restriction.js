(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "tchuka-ruma-restriction") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  if (board.parent !== null) {
      var f = true;
      var ko = [];
      _.each(design.allPositions(), function(pos) {
          var piece = board.getPiece(pos);
          if (piece !== null) {
              var value = +piece.getValue(0);
              if ((value !== null) && (value < 0)) {
                  if (design.inZone(0, 1, pos)) {
                      if (value < 0) {
                          ko.push(pos);
                      }
                  } else {
                      f = false;
                  }
              }
          }
      });
      if (f) {
          _.each(board.moves, function(move) {
               if ((move.actions.length > 0) && (move.actions[0][0] !== null) && (move.actions[0][1] !== null)) {
                   var pos = move.actions[0][0][0];
                   if (_.indexOf(ko, pos) < 0) {
                       move.failed = true;
                   }
               }
          });
      }
  }
  CheckInvariants(board);
}

})();
