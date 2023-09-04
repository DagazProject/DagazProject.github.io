(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "mastermind-extension") {
     checkVersion(design, name, value);
  }
}

Dagaz.Model.setup = function(board) {
  for (var pos = 0; pos < 4; pos++) {
       var piece = Dagaz.Model.createPiece(_.random(0, 5), 2);
       board.setPiece(pos, piece);
  }
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  if (board.getValue(0) !== null) return 1;
  return checkGoals(design, board, player);
}

var isCompleted = function(design, board, pos) {
  var p = design.navigate(board.player, pos, 1);
  if (p === null) p = pos;
  while (p !== null) {
      if (board.getPiece(p) === null) return false;
      p = design.navigate(board.player, p, 2);
  }
  return true;
}

var getStat = function(design, board, pos) {
  var p = design.navigate(board.player, pos, 1);
  if (p === null) p = pos; 
  var k = 0; var a = []; b = [];
  for (var q = 0; q < 4; q++) {
       var x = board.getPiece(p);
       var y = board.getPiece(q);
       if ((x === null) || (y === null)) return null;
       if (x.type == y.type) {
           k++;
       } else {
           a.push(x.type);
           b.push(y.type);
       }
       p = design.navigate(board.player, p, 2);
  }
  var u = [];
  for (var i = 0; i < a.length; i++) {
       var ix = _.indexOf(b, a[i]);
       if ((ix >= 0) && (_.indexOf(u, ix) < 0)) {
           u.push(ix);
       }
  }
  return {
     bulls: k,
     cows:  u.length
  };
}

var showStat = function(design, board, pos, stat, move) {
  var p = design.navigate(1, pos, 1);
  if (p === null) p = pos; 
  if (stat.bulls == 4) {
      move.setValue(0, 1);
      for (var q = 0; q < 4; q++) {
           var piece = board.getPiece(q);
           if (piece !== null) {
               move.dropPiece(q, piece.changeOwner(1));
           }
      }
  }
  p = design.navigate(1, p, 3);
  while (p !== null) {
      if (stat.bulls > 0) {
          stat.bulls--;
          move.dropPiece(p, Dagaz.Model.createPiece(7, 1));
      } else if (stat.cows > 0) {
          stat.cows--;
          move.dropPiece(p, Dagaz.Model.createPiece(6, 1));
      } else break;
      p = design.navigate(1, p, 3);
  }
}

var isDone = function(design, board) {
  for (var pos = 4; pos < 8; pos++) {
      if (board.getPiece(pos) === null) return false;
  }
  return true;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (!move.isDropMove()) return;
      var pos = move.actions[0][1][0];
      var b = board.apply(move);
      if (isCompleted(design, b, pos)) {
          var s = getStat(design, b, pos);
          if (s === null) return;
          showStat(design, board, pos, s, move);
      }
      if (isDone(design, b)) {
          for (var p = 0; p < 4; p++) {
               var piece = board.getPiece(p);
               if (piece !== null) {
                   move.dropPiece(p, piece.changeOwner(1));
               }
          }
      }
  });
  CheckInvariants(board);
}

})();
