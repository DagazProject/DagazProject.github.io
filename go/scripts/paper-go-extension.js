(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "paper-go-extension") {
     checkVersion(design, name, value);
  }
}

if (!_.isUndefined(Dagaz.Controller.addSound)) {
    Dagaz.Controller.addSound(0, "../sounds/step.ogg");
}

var expand = function(design, board, player, group, dame) {
   for (var i = 0; i < group.length; i++) {
        var pos = group[i];
        _.each(design.allDirections(), function(dir) {
            var p = design.navigate(player, pos, dir);
            if (p !== null) {
                var piece = board.getPiece(p);
                if (piece !== null) {
                    if (piece.type == 0) {
                        if ((piece.player == player) && (_.indexOf(group, p) < 0)) {
                            group.push(p);
                        }
                    }
                } else {
                    if (_.indexOf(dame, p) < 0) dame.push(p);
                }
            }
        });
   }
}

var capture = function(move, board, group) {
   _.each(group, function(pos) {
        var piece = board.getPiece(pos);
        if (piece !== null) {
            piece = piece.promote(1);
            move.movePiece(pos, pos, piece);
        }
   });
}

var change = function(move, board, group, dame) {
   _.each(group, function(pos) {
        var piece = board.getPiece(pos);
        if (piece !== null) {
            piece = piece.setValue(0, dame);
            move.movePiece(pos, pos, piece);
        }
   });
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if ((move.actions.length == 1) && (move.actions[0][1] !== null) && (move.actions[0][2] !== null)) {
           var pos  = move.actions[0][1][0];
           var captured = []; var group = []; 
           var enemies  = []; var dame  = [ pos ];
           _.each(design.allDirections(), function(dir) {
               var p = design.navigate(board.player, pos, dir);
               if ((p !== null) && (_.indexOf(enemies, p) < 0)) {
                   var piece = board.getPiece(p);
                   if (piece !== null) {
                       if (piece.type == 0) {
                           if (piece.getValue(0) === null) {
                               move.failed = true;
                               return;
                           }
                           var value = +piece.getValue(0);
                           if (piece.player == board.player) {
                               group.push(p);
                           } else {
                               if (value <= 1) {
                                   captured.push(p);
                                   expand(design, board, piece.player, captured, []);
                                   _.each(captured, function(q) {
                                        enemies.push(q);
                                   });
                               } else {
                                   var g = [ p ];
                                   expand(design, board, piece.player, g, []);
                                   _.each(g, function(q) {
                                        enemies.push(q);
                                   });
                                   change(move, board, g, value - 1);
                               }
                           }
                       }
                   } else {
                       dame.push(p);
                   }
               }
           });
           expand(design, board, board.player, group, dame);
           if (captured.length > 0) {
               capture(move, board, captured);
               var friends = [];
               _.each(captured, function(e) {
                   _.each(design.allDirections(), function(dir) {
                       var p = design.navigate(board.player, e, dir);
                       if ((p !== null) && (_.indexOf(group, p) < 0) && (_.indexOf(friends, p) < 0)) {
                            var g = [ p ]; var d = [];
                            expand(design, board, board.player, g, d);
                            _.each(g, function(q) {
                                friends.push(q);
                                var piece = board.getPiece(q);
                                if ((piece !== null) && (piece.player == board.player)) {
                                     piece = piece.setValue(0, d.length);
                                     move.movePiece(q, q, piece);
                                }
                            });
                       }
                   });
               });
           } else {
               if (dame.length <= 1) {
                   move.failed = true;
                   return;
               }
           }
           change(move, board, group, dame.length - 1);
           var piece = move.actions[0][2][0].setValue(0, dame.length - 1);
           move.actions[0][2] = [ piece ];
      }
  });
  CheckInvariants(board);
}

})();
