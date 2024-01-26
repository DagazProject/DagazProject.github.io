(function() {

Dagaz.Model.CENTR  = 24;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "brandubh-berserk") {
      checkVersion(design, name, value);
  }
}

var redo = function(board, move) {
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
           board.setPiece(a[1][0], board.getPiece(a[0][0]));
           p = a[0][0]; q = a[1][0];
           if (piece !== null) {
               if (x === null) x = piece;
           }
       }
       board.setPiece(a[0][0], null);
       if (f) {
           var enemy = Dagaz.Model.createPiece(0, (board.player == 1) ? 2 : 1);
           for (var j = i; j >= 0; j--) {
                var a = move.actions[j];
                if (a[0] === null) continue;
                if (a[1] === null) {
                    board.setPiece(a[0][0], enemy);
                } else {
                    board.setPiece(a[0][0], board.getPiece(a[1][0]));
                    board.setPiece(a[1][0], null);
                }
           }
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

var undo = function(board, move) {
  var enemy = Dagaz.Model.createPiece(0, (board.player == 1) ? 2 : 1);
  for (var i = move.actions.length - 1; i >= 0; i--) {
       var a = move.actions[i];
       if (a[0] === null) continue;
       if (a[1] === null) {
           board.setPiece(a[0][0], enemy);
       } else {
           board.setPiece(a[0][0], board.getPiece(a[1][0]));
           board.setPiece(a[1][0], null);
       }
  }
}

var isBadDirection = function(design, r, dir) {
  var p = design.navigate(1, r.to, dir);
  if (p == r.from) return true;
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
           m.movePiece(a[0][0], a[1][0], a[2], a[3]);
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
       var r = redo(board, move);
       if (r === null) continue;
       var rn = getRn(move);
       _.each(design.allDirections(), function(dir) {
           if (isBadDirection(design, r, dir)) return;
           var p = design.navigate(1, r.to, dir);
           if ((p !== null) && (board.getPiece(p) === null)) {
               var m = copy(move); var f = false;
               m.movePiece(r.to, p, r.piece, rn + 1);
               _.each(design.allDirections(), function(d) {
                   var q = design.navigate(1, p, d);
                   if (q === null) return;
                   var piece = board.getPiece(q);
                   if (piece === null) return;
                   if (piece.player == board.player) return;
                   var t = design.navigate(1, q, d);
                   if (t === null) return;
                   piece = board.getPiece(t);
                   if (piece !== null) {
                       if (piece.player != board.player) return;
                   } else {
                       if (q != Dagaz.Model.CENTR) return;
                   }
                   m.capturePiece(q, rn + 1);
                   f = true;
               });
               if (f) board.moves.push(m);
           }
       });
       undo(board, move);
  }
  CheckInvariants(board);
}

})();
