(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "cyvasse-step") {
      checkVersion(design, name, value);
  }
}

Dagaz.Model.isDefended = function(design, board, pos) {
  if (board.getPiece(pos) !== null) return false;
  var r = false;
  _.each([4, 5], function(dir) {
      var p = design.navigate(board.player, pos, dir);
      if (p === null) return;
      var piece = board.getPiece(p);
      if (piece === null) return;
      if (piece.player == board.player) return;
      if (piece.type == 2) r = true;
  });
  return r;
}

var isMoveExists = function(board, from, to) {
  for (var i = 0; i < board.moves.length; i++) {
       var move = board.moves[i];
       for (var j = 0; j < move.actions.length; j++) {
            var a = move.actions[j];
            if ((a[0] !== null) && (a[1] !== null) && (a[0][0] == from) && (a[1][0] == to)) return true;
       }
  }
  return false;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  for (var from = 108; from < 216; from++) {
       var piece = board.getPiece(from);
       if (piece === null) continue;
       if (piece.player != board.player) continue;
       if (piece.type != 0) continue;
       var to = [];
       _.each(design.allDirections(), function(dir) {
           var pos = design.navigate(1, from, dir);
           if (pos === null) return;
           var piece = board.getPiece(pos);
           if (piece === null) return;
           if (piece.player != board.player) return;
           if (piece.type != 9) return;
           to.push(pos);
       });
       var n = to.length;
       for (var ix = 0; ix < n; ix++) {
            _.each(design.allDirections(), function(dir) {
                var pos = design.navigate(1, to[ix], dir);
                if (pos === null) return;
                if (_.indexOf(to, pos) >= 0) return;
                if (board.getPiece(pos) !== null) return;
                if (piece.type == 10) return;
                to.push(pos);
            });
       }
       _.each(to, function(pos) {
              if (board.getPiece(pos) !== null) return;
              if (isMoveExists(board, from, pos)) return;
              var move = Dagaz.Model.createMove(1);
              move.movePiece(from, pos, piece);
              board.moves.push(move);
       });
  }
  for (var from = 108; from < 216; from++) {
       var piece = board.getPiece(from);
       if (piece === null) continue;
       if (piece.player != board.player) continue;
       if (_.indexOf([3, 4, 6], +piece.type) < 0) continue;
       var to = [];
       _.each(design.allDirections(), function(dir) {
           var pos = design.navigate(1, from, dir);
           if (pos === null) return;
           var piece = board.getPiece(pos);
           if (piece !== null) {
               if (piece.type == 10) return;
               if (piece.type < 13) {
                   if (piece.player != board.player) return;
               }
           }
           to.push(pos);
       });
       var n = to.length;
       for (var ix = 0; ix < n; ix++) {
           if (Dagaz.Model.isDefended(design, board, to[ix])) continue;
           _.each(design.allDirections(), function(dir) {
                var pos = design.navigate(1, to[ix], dir);
                if (pos === null) return;
                if (_.indexOf(to, pos) >= 0) return;
                var piece = board.getPiece(pos);
                if (piece !== null) {
                    if (piece.type == 10) return;
                    if (piece.type < 13) {
                        if (piece.player != board.player) return;
                    }
                }
                to.push(pos);
           });
       }
       if (piece.type == 3) {
           var m = to.length;
           for (var ix = n; ix < m; ix++) {
                if (Dagaz.Model.isDefended(design, board, to[ix]))  continue;
                _.each(design.allDirections(), function(dir) {
                     var pos = design.navigate(1, to[ix], dir);
                     if (pos === null) return;
                     if (_.indexOf(to, pos) >= 0) return;
                     var piece = board.getPiece(pos);
                     if (piece !== null) {
                         if (piece.type == 10) return;
                         if (piece.type < 13) {
                             if (piece.player != board.player) return;
                         }
                     }
                     to.push(pos);
                });
           }
       }
       _.each(to, function(pos) {
              if (isMoveExists(board, from, pos)) return;
              var x = board.getPiece(pos);
              if (x !== null) {
                  if (x.type < 11) return;
              }
              var move = Dagaz.Model.createMove(1);
              move.movePiece(from, pos, piece);
              board.moves.push(move);
       });
  }
  for (var from = 108; from < 216; from++) {
       var piece = board.getPiece(from);
       if (piece === null) continue;
       if (piece.player != board.player) continue;
       if (piece.type != 8) continue;
       var to = [];
       _.each(design.allDirections(), function(dir) {
           var pos = design.navigate(1, from, dir);
           if (pos === null) return;
           to.push(pos);
       });
       var n = to.length;
       for (var ix = 0; ix < n; ix++) {
           if (Dagaz.Model.isDefended(design, board, to[ix])) continue;
           _.each(design.allDirections(), function(dir) {
                var pos = design.navigate(1, to[ix], dir);
                if (pos === null) return;
                if (_.indexOf(to, pos) >= 0) return;
                to.push(pos);
           });
       }
       var m = to.length;
       for (var ix = n; ix < m; ix++) {
           if (Dagaz.Model.isDefended(design, board, to[ix])) continue;
           _.each(design.allDirections(), function(dir) {
                var pos = design.navigate(1, to[ix], dir);
                if (pos === null) return;
                if (_.indexOf(to, pos) >= 0) return;
                to.push(pos);
           });
       }
       var k = to.length;
       for (var ix = m; ix < k; ix++) {
           if (Dagaz.Model.isDefended(design, board, to[ix])) continue;
           _.each(design.allDirections(), function(dir) {
                var pos = design.navigate(1, to[ix], dir);
                if (pos === null) return;
                if (_.indexOf(to, pos) >= 0) return;
                to.push(pos);
           });
       }
       _.each(to, function(pos) {
              if (board.getPiece(pos) !== null) return;
              if (isMoveExists(board, from, pos)) return;
              var move = Dagaz.Model.createMove(1);
              move.movePiece(from, pos, piece);
              board.moves.push(move);
       });
  }
  CheckInvariants(board);
}

})();
