(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "ko-shogi-priest") {
      checkVersion(design, name, value);
  }
}

var sign = function(x) {
  if (x > 0) {
      return 1;
  } else if (x < 0) {
      return -1;
  } else {
      return 0;
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if ((move.actions.length > 0) && (move.actions[0][0] !== null) && (move.actions[0][1] !== null)) {
           var pos   = move.actions[0][0];
           var piece = board.getPiece(pos);
           if ((piece !== null) && (piece.player == board.player) && (piece.type == 8)) { // Twelve-mile fog
               var action = null;
               _.each(move.actions, function(a) {
                   if ((a[0] !== null) && (a[1] !== null)) {
                       var dx = Dagaz.Model.getX(a[1][0]) - Dagaz.Model.getX(a[0][0]);
                       var dy = Dagaz.Model.getY(a[1][0]) - Dagaz.Model.getY(a[0][0]);
                       if ((Math.abs(dx) == 2) || (Math.abs(dy) == 2)) {
                           action = a;
                       }
                   }
               });
               if (action !== null) {
                   pos = action[1][0];
                   var promoted = null;
                   _.each(design.allPositions(), function(p) {
                        var enemy = board.getPiece(p);
                        if (enemy === null) return;
                        if (enemy.type != 6) return; // Immaculate light
                        var dx = Dagaz.Model.getX(p) - Dagaz.Model.getX(pos);
                        var dy = Dagaz.Model.getY(p) - Dagaz.Model.getY(pos);
                        if ((dx == 0) || (dy == 0) || (Math.abs(dx) == Math.abs(dy))) {
                            if (Math.max(Math.abs(dx), Math.abs(dy)) <= 5) {
                                var sx = sign(dx);
                                var sy = sign(dy);
                                var dir = design.findDirection(pos, pos + Dagaz.Model.WIDTH * sy + sx);
                                if (dir !== null) {
                                    var q = design.navigate(1, pos, dir);
                                    while (q !== null) {
                                        if (q == p) {
                                            promoted = piece.promote(9);
                                            break;
                                        }
                                        if (board.getPiece(q) !== null) break;
                                        q = design.navigate(1, q, dir);
                                    }
                                }
                            }
                        }
                   });
                   if (promoted !== null) {
                        _.each(move.actions, function(a) {
                             if ((a[0] === null) && (a[1] !== null)) {
                                  a[2] = [ promoted ];
                             }
                        });
                        action[2] = [ promoted ];
                   }
               }
           }
           if ((piece !== null) && (piece.player == board.player) && (piece.type == 6)) { // Immaculate light
               var action = null;
               _.each(move.actions, function(a) {
                   if ((a[0] !== null) && (a[1] !== null)) {
                       var dx = Dagaz.Model.getX(a[1][0]) - Dagaz.Model.getX(a[0][0]);
                       var dy = Dagaz.Model.getY(a[1][0]) - Dagaz.Model.getY(a[0][0]);
                       if ((Math.abs(dx) == 2) || (Math.abs(dy) == 2)) {
                           action = a;
                       }
                   }
               });
               if (action !== null) {
                   pos = action[1][0];
                   _.each(design.allPositions(), function(p) {
                        var enemy = board.getPiece(p);
                        if (enemy === null) return;
                        if (enemy.type != 8) return; // Twelve-mile fog
                        var dx = Dagaz.Model.getX(p) - Dagaz.Model.getX(pos);
                        var dy = Dagaz.Model.getY(p) - Dagaz.Model.getY(pos);
                        if ((dx == 0) || (dy == 0) || (Math.abs(dx) == Math.abs(dy))) {
                            if (Math.max(Math.abs(dx), Math.abs(dy)) <= 5) {
                                var sx = sign(dx);
                                var sy = sign(dy);
                                var dir = design.findDirection(pos, pos + Dagaz.Model.WIDTH * sy + sx);
                                if (dir !== null) {
                                    var q = design.navigate(1, pos, dir);
                                    while (q !== null) {
                                        if (q == p) {
                                            move.movePiece(p, p, enemy.promote(9)); // Taoist Priest
                                            break;
                                        }
                                        if (board.getPiece(q) !== null) break;
                                        q = design.navigate(1, q, dir);
                                    }
                                }
                            }
                        }
                   });
               }
           }
      }
  });
  CheckInvariants(board);
}

})();
