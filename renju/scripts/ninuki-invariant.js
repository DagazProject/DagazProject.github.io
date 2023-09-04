(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "ninuki-invariant") {
      checkVersion(design, name, value);
  }
}

var getValue = function(board, player, pos, ix) {
  if (pos === null) return 0;
  var piece = board.getPiece(pos);
  if ((piece === null) || (piece.player != player)) return 0;
  var r = +piece.getValue(ix);
  if (r === null) return 0;
  return r;
}

var getLine = function(design, board, player, pos, dir, ix) {
  var r = 1;
  var p = design.navigate(player, pos, dir);
  r += getValue(board, player, p, ix);
  if (r == 3) {
      var q = design.navigate(0, pos, dir);
      var v = getValue(board, player, q, ix);
      if (v == 2) return -1;
  }
  if (p === null) return 0;
  var piece = board.getPiece(p);
  while (piece !== null) {
      p = design.navigate(player, p, dir);
      if (p === null) return 0;
      piece = board.getPiece(p);
  }
  if (r >= 3) return r;
  p = design.navigate(player, p, dir);
  if (p === null) return r;
  piece = board.getPiece(p);
  if ((piece === null) || (piece.player != player)) return r;
  var vl = +piece.getValue(ix);
  if (vl === null) return r;
  return r + vl;
}

var addKo = function(board, move) {
  if ((move.actions.length > 0) && (move.actions[0][1] !== null)) {
       pos = move.actions[0][1][0];
       if (_.isUndefined(board.ko)) {
           board.ko = [];
       }
       if (_.indexOf(board.ko, pos) < 0) {
           board.ko.push(pos);
       }
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var dirs   = [];
  dirs.push(design.getDirection("n")); dirs.push(design.getDirection("ne"));
  dirs.push(design.getDirection("e")); dirs.push(design.getDirection("se"));
  dirs.push(design.getDirection("s")); dirs.push(design.getDirection("sw"));
  dirs.push(design.getDirection("w")); dirs.push(design.getDirection("nw"));
  _.each(board.moves, function(move) {
      if (board.player == 1) {
          _.each(move.actions, function(a) {
               if ((a[1] !== null) && (a[2] !== null)) {
                   var piece = a[2][0];
                   for (var ix = 0; ix < 4; ix++) {
                        if (+piece.getValue(ix) > 5) {
                            addKo(board, move);
                            move.failed = true;
                        }
                   }
               }
          });
          if (_.isUndefined(move.failed)) {
              var pos = move.actions[0][1][0];
              var cnt = 0; var mx = 0;
              _.each(dirs, function(dir) {
                  var ix = _.indexOf(dirs, dir);
                  if (ix > 3) ix -= 4;
                  if (ix < 0) {
                      addKo(board, move);
                      move.failed = true;
                  }
                  var l = getLine(design, board, board.player, pos, dir, ix);
                  if (l < 0) {
                      cnt = 0;
                      return;
                  }
                  if (l >= 3) {
                      cnt++;
                      if (mx < l) mx = l;
                  }
              });
              if ((cnt == 2) && (mx == 3)) {
                  addKo(board, move);
                  move.failed = true;
              }
              if (cnt > 2) {
                  addKo(board, move);
                  move.failed = true;
              }
          }
      }
  });
  CheckInvariants(board);
}

})();
