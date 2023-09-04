(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "gate-extension") {
     checkVersion(design, name, value);
  }
}

var checkPiece = function(dir, piece) {
  if ((dir == 1) || (dir == 2)) {
      return piece === null;
  } else {
      return piece !== null;
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var moves  = [];
  _.each(board.moves, function(move) {
      var m = Dagaz.Model.createMove(move.mode);
      var positions = [];
      _.each(move.actions, function(a) {
          if ((a[0] !== null) && (a[1] !== null)) {
               var pos = a[0][0]; var dst = a[1][0];
               if (positions.length == 0) {
                   positions.push(pos);
               }
               if (_.indexOf(positions, dst) >= 0) {
                   move.failed = true;
                   return;
               }
               positions.push(dst);
               var dir = design.findDirection(pos, dst);
               if (dir !== null) {
                   m.actions.push(a);
                   var p = design.navigate(1, pos, dir + 4);
                   if (p !== null) {
                       var piece = board.getPiece(p);
                       if (checkPiece(dir, piece)) {
                           if (piece === null) {
                               piece = Dagaz.Model.createPiece(p + 1, board.player);
                               m.dropPiece(p, piece, a[3]);
                           } else {
                               m.capturePiece(p, a[3]);
                           }
                       } else {
                           m.failed = true;
                       }
                   }
               }
          }
      });
      if (_.isUndefined(m.failed) && !m.isPass()) {
          moves.push(m);
      }
  });
  board.moves = moves;
  CheckInvariants(board);
}

})();
