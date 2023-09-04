(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "archimedes-extension") {
     checkVersion(design, name, value);
  }
}

if (!_.isUndefined(Dagaz.Controller.addSound)) {
    Dagaz.Controller.addSound(0,  "../sounds/slide.ogg", true);
    Dagaz.Controller.addSound(2,  "../sounds/tadam.wav", true);
    Dagaz.Controller.addSound(3, "../sounds/loss.wav", true);
    Dagaz.Controller.addSound(10, "../sounds/shoot.wav", true);
}

var isAttackedBy = function(design, board, pos, player, dir) {
  var p = design.navigate(player, pos, dir);
  while (p !== null) {
      var piece = board.getPiece(p);
      if (piece !== null) {
          return piece.player != player;
      }
      p = design.navigate(player, p, dir);
  }
  return false;
}

var isAttacked = function(design, board, pos, player) {
  var cnt = 0;
  _.each(design.allDirections(), function(dir) {
      if (isAttackedBy(design, board, pos, player, dir)) {
          cnt++;
      }
  });
  return cnt >= 3;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.chain(board.moves)
   .filter(function(move) {
       return move.actions.length == 1;
    })
   .each(function(move) {
       var c = [];
       var b = board.apply(move);
       _.each(design.allPositions(), function(pos) {
           var piece = b.getPiece(pos);
           if (piece != null) {
               if (isAttacked(design, b, pos, piece.player)) {
                   c.push(pos);
               }
           }
       });
       var t = move.actions[0][1][0];
       if (_.indexOf(c, t) >= 0) {
           move.failed = true;
       } else {
           if (b.checkGoals(design, board.player) !== null ) {
               b.generateInternal(b, false);
               _.chain(b.moves)
                .filter(function(m) {
                    return m.actions.length > 0;
                 })
                .each(function(m) {
                    var r = b.apply(m);
                    if (isAttacked(design, r, t, board.player)) {
                        move.failed = true;
                    }
                 });
           }
       }
       if (_.isUndefined(move.failed)) {
           _.each(c, function(pos) {
                move.capturePiece(pos);
                move.sound = 10;
           });
       }
    });
  CheckInvariants(board);
}

})();
