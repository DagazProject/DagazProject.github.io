(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "shatra-extension") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(m) {
      if (!_.isUndefined(m.failed)) return;
      var pos    = null;
      var action = null;
      var piece  = null;
      _.each(m.actions, function (a) {
          if ((a[0] !== null) && (a[1] !== null)) {
               if (pos === null) {
                   pos = a[0][0];
                   piece = board.getPiece(pos);
                   if ((m.actions.length == 1) && 
                       design.inZone(1, board.player, pos) &&
                       design.inZone(1, board.player, a[1][0])) {
                       m.failed = true;
                   }
               }
               if (a[2] !== null) {
                   piece = a[2][0];
               }
               action = a;
               if (design.inZone(1, board.player, a[1][0]) &&
                  !design.inZone(1, board.player, pos)) {
                   if (piece.type == 0) {
                       m.failed = true;
                   } else {
                       if (piece.type != 1) {
                           _.chain(design.allPositions())
                            .filter(function(p) {
                                 return design.inZone(1, board.player, p);
                             })
                            .each(function(p) {
                                 var piece = board.getPiece(p);
                                 if ((piece !== null) && (piece.getValue(0) === null)) {
                                     m.failed = true;
                                 }
                             });                   
                       }
                   }
               }
          }
      });
      if ((piece !== null) && (action !== null)) {
          action[2] = [ piece.setValue(0, 1) ];
      }
  });
  CheckInvariants(board);
}

})();
