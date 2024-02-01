(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "tafl-berserk") {
      checkVersion(design, name, value);
  }
}

var redo = function(board, move, log) {
  var f = false; 
  var p = null; var q = null; var x = null;
  for (var i = 0; i < move.actions.length; i++) {
       var a = move.actions[i];
       if (a[0] === null) continue;
       var piece = board.getPiece(a[0][0]);
       if (a[1] === null) {
           if (piece !== null) {
               if (piece.type > 0) f = true;
           }
       } else {
           log.push({
              pos: a[1][0],
              piece: board.getPiece(a[1][0])
           });
           board.setPiece(a[1][0], board.getPiece(a[0][0]));
           p = a[0][0]; q = a[1][0];
           if (piece !== null) {
               if (x === null) x = piece;
           }
       }
       log.push({
           pos: a[0][0],
           piece: board.getPiece(a[0][0])
       });
       board.setPiece(a[0][0], null);
       if (f) {
           return null;
       }
  }
  if (p === null) return null;
  return {
       from: p,
       to: q,
       piece: x
  };
}

var undo = function(board, log) {
  for (var i = log.length - 1; i >= 0; i--) {
       board.setPiece(log[i].pos, log[i].piece);
  }
}

var isBadDirection = function(design, r, dir) {
  var p = design.navigate(1, r.to, dir);
  while (p !== null) {
      if (p == r.from) return true;
      p = design.navigate(1, p, dir);
  }
  return false;
}

var copy = function(move) {
  var m = Dagaz.Model.createMove(move.mode);
  for (var i = 0; i < move.actions.length; i++) {
       var a = move.actions[i];
       if (a[0] === null) continue;
       if (a[1] === null) {
           m.capturePiece(a[0][0], a[3]);
       } else {
           m.movePiece(a[0][0], a[1][0], a[2][0], a[3]);
       }
  }
  return m;
}

var getRn = function(move) {
  var n = 0;
  for (var i = 0; i < move.actions.length; i++) {
       var a = move.actions[i];
       if (n < a[3]) n = a[3];
  }
  return n;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  for (var i = 0; i < board.moves.length; i++) {
       var move = board.moves[i];
       if (move.isSimpleMove()) continue;
       var log = [];
       var r = redo(board, move, log);
       if (r === null) continue;
       var rn = getRn(move);
       _.each(design.allDirections(), function(dir) {
           if (isBadDirection(design, r, dir)) return;
           var p = design.navigate(1, r.to, dir);
           while (p !== null) {
               if (board.getPiece(p) !== null) break;
               var m = copy(move); var f = false;
               m.movePiece(r.to, p, r.piece, rn + 1);
               _.each(design.allDirections(), function(d) {
                   var q = design.navigate(1, p, d);
                   if (q === null) return;
                   if (q == r.to) return;
                   var piece = board.getPiece(q);
                   if (piece === null) return;
                   if (piece.player == board.player) return;
                   if (piece.type == 1) {
                       if ((q == Dagaz.Model.CENTR) || (_.indexOf(Dagaz.Model.NEIGB, q) >= 0)) {
                           var c = 0;
                           _.each(design.allDirections(), function(dir) {
                               var x = design.navigate(1, q, dir);
                               if (x === null) return;
                               if (x == p) {
                                   c++;
                                   return;
                               }
                               var piece = board.getPiece(x);
                               if (piece !== null) {
                                   if (piece.player == board.player) c++;
                               } else {
                                   if (x == Dagaz.Model.CENTR) c++;
                               }
                           });
                           if (c < 4) return;
                       }
                   }
                   var t = design.navigate(1, q, d);
                   if (t === null) return;
                   var target = board.getPiece(t);
                   if (target !== null) {
                       if (target.player != board.player) return;
                   } else {
                       if (t != Dagaz.Model.CENTR) return;
                   }
                   if (piece.type == 0) {
                       m.capturePiece(q, rn + 1);
                   } else {
                       m.movePiece(q, q, piece.promote(2), rn + 1);
                   }
                   f = true;
               });
               if (f) {
                   board.moves.push(m);
               }
               p = design.navigate(1, p, dir);
           }
       });
       undo(board, log);
  }
  CheckInvariants(board);
}

})();
