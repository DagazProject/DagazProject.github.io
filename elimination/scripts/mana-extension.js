(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "mana-extension") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var f = (board.turn >= 13);
  _.each(board.moves, function(move) {
      if (_.isUndefined(move.failed)) {
          var action = null;
          var pos = move.actions[0][0][0];
          var piece = board.getPiece(pos);
          var except = [pos];
          _.each(move.actions, function(a) {
               if ((a[0] !== null) && (a[1] !== null)) {
                    action = a;
                    var target = board.getPiece(a[1][0]);
                    if ((target !== null) && (target.type < 2)) {
                        var p = design.navigate(board.player, a[1][0], 5);
                        while ((p !== null) && (board.getPiece(p) !== null)) {
                            p = design.navigate(board.player, p, 5);
                        }
                        if (target.type == 1) {
                            target = target.promote(0);
                            except.push(a[1][0]);
                        }
                        if (p !== null) {
                            move.movePiece(a[1][0], p, target, a[3]);
                        }
                    }
               }
          });
          if ((action !== null) && (piece !== null)) {
               if ((move.mode > 2) && !f) return;
               except.push(action[1][0]);
               if ((piece.type == 0) || (piece.type == 2)) {
                    piece = piece.promote(+piece.type + 1);
                    action[2] = [piece];
               }
               _.each(design.allPositions(), function(pos) {
                    if (_.indexOf(except, pos) >= 0) return;
                    var piece = board.getPiece(pos);
                    if (piece === null) return;
                    if ((piece.type == 1) || (piece.type == 3)) {
                        piece = piece.promote(+piece.type - 1);
                        move.movePiece(pos, pos, piece, action[3]);
                    }
               });
          }
      }
  });
  CheckInvariants(board);
}

})();
