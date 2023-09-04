(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "margo-extension") {
     checkVersion(design, name, value);
  }
}

var go = Dagaz.Controller.go;

Dagaz.Controller.go = function(url) {
  var design = Dagaz.Model.design;
  var board = Dagaz.Controller.app.board;
  url = url + "?setup="; 
  var prev = null; var cnt = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      var s = "";
      if (piece !== null) {
          var type = piece.player - 1;
          s = s + type + ":1";
      }
      if ((prev === null) || (prev != s)) {
          if (prev !== null) {
              url = url + prev;
              if (cnt > 0) {
                  url = url + "+" + cnt;
              }
              url = url + ";";
          }
          prev = s;
          cnt = 0;
      } else {
          cnt++;
      }
  });
  url = url + prev;
  if (cnt > 0) {
      url = url + "+" + cnt;
  }
  url = url + ";";
  go(url);
}

var isLocked = function(design, board, player, pos, dir) {
  var dirs = [];
  if (dir == 0) dirs = [4, 6];
  if (dir == 1) dirs = [4, 8];
  if (dir == 2) dirs = [6, 10];
  if (dir == 3) dirs = [8, 10];
  if (dirs.length == 0) return false;
  var r = true;
  _.each(dirs, function(d) {
      if (!r) return;
      var p = design.navigate(1, pos, d);
      if (p === null) return;
      var piece = board.getPiece(p);
      if ((piece === null) || (piece.player == player)) r = false;     
  });
  return r;
}

var isZombie = function(design, board, pos, captured) {
  var r = false;
  _.each([4, 6, 8, 10], function(dir) {
      if (r) return;
      var p = design.navigate(1, pos, dir);
      if (p === null) return;
      if (_.indexOf(captured, p) >= 0) return;
      if (board.getPiece(p) !== null) {
          r = true;
      }
  });
  return r;
}

var getDame = function(design, board, player, group) {
  var r = 0;
  for (var i = 0; i < group.length; i++) {
      _.each(design.allDirections(), function(dir) {
          var p = design.navigate(1, group[i], dir);
          if (p === null) return;
          if (_.indexOf(group, p) >= 0) return;
          if (isLocked(design, board, player, group[i], dir)) return;
          var piece = board.getPiece(p);
          if (piece === null) {
              if (design.inZone(0, 1, p)) r++;
              return;
          }
          if (piece.player != player) return;
          group.push(p);
      });
  }
  return r;
}

var setDame = function(board, group, dame, move) {
  _.each(group, function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      move.movePiece(pos, pos, piece.setValue(0, dame));
  });
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (!move.isDropMove()) return;
      var pos = move.actions[0][1][0];
      var e = []; var g = [pos];
      _.each(design.allDirections(), function(dir) {
          var p = design.navigate(1, pos, dir);
          if (p === null) return;
          var piece = board.getPiece(p);
          if (piece === null) return;
          if (piece.player == board.player) {
              g.push(p);
          } else {
              e.push(p);
          }
      });
      var d = getDame(design, board, board.player, g);
      var done = [];
      board.setPiece(pos, move.actions[0][2][0]);
      _.each(e, function(q) {
          if (_.indexOf(done, q) >= 0) return;
          var piece = board.getPiece(q);
          if (piece === null) return;
          var group = [q];
          var dame = getDame(design, board, piece.player, group);
          done = _.union(done, group);
          if (dame == 0) {
              var captured = []; var zombie = [];
              group = _.sortBy(group, function(x) {
                  return x;
              });
              while (group.length > 0) {
                  var q = group.pop();
                  if (isZombie(design, board, q, captured)) {
                      zombie.push(q);
                  } else {
                      captured.push(q);
                  }
              }
              _.each(captured, function(q) {
                  if ((_.indexOf(e, q) >= 0) && design.inZone(0, 1, q)) {
                      d++;
                  }
                  move.capturePiece(q);
              });
              group = zombie;
          }
          setDame(board, group, dame, move);
      });
      board.setPiece(pos, null);
      if (d == 0) {
          move.failed = true;
      }
      g.shift();
      setDame(board, g, d, move);
      var piece = move.actions[0][2][0];
      move.actions[0][2] = [ piece.setValue(0, d) ];
  });
  CheckInvariants(board);
}

})();
