(function() {

var stackSize = 3;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "klondike-extension") {
     stackSize = +value;
  } else {
     checkVersion(design, name, value);
  }
}

var badColors = function(a, b) {
  return (a % 2) + (b % 2) != 1;
}

var moveTail = function(design, board, from, to, move) {
  var p = design.navigate(board.player, from, 0);
  var q = design.navigate(board.player, to, 0);
  if ((p === null) || (q === null) || (board.getPiece(q) !== null)) {
      move.failed = true;
      return;
  }
  var piece = board.getPiece(p);
  while (piece !== null) {
      move.movePiece(p, q, piece);
      p = design.navigate(board.player, p, 0);
      q = design.navigate(board.player, q, 0);
      if ((p === null) || (q === null) || (board.getPiece(q) !== null)) {
          move.failed = true;
          return;
      }
      piece = board.getPiece(p);
  }
}

Dagaz.View.showPiece = function(view, ctx, frame, pos, piece, model, x, y) {
  if (model.type >= 26) {
      var stack = model.getValue(0);
      if ((stack === null) || (stack.length == 0)) return;
      if (model.type == 27) {
          var r = stack[stack.length - 1];
          piece = view.piece[r.toString()];
      }
      if (model.type == 28) {
          var ix = stack.length - stackSize;
          if (ix < 0) ix = 0;
          var offset = 0;
          for (;ix < stack.length; ix++) {
              var r = stack[ix];
              piece = view.piece[r.toString()];
              ctx.drawImage(piece.h, x + offset, y, piece.dx, piece.dy);
              offset += 15;
          }
          return;
      }
  }
  ctx.drawImage(piece.h, x, y, piece.dx, piece.dy);
}

var copy = function(a) {
  var r = [];
  if (a !== null) {
      _.each(a, function(x) {
           r.push(x);
      });
  }
  return r;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.mode == 5) {
          var pos = move.actions[0][0][0];
          var s = board.getPiece(pos);
          var ss = copy(s.getValue(0));
          if (ss.length == 0) {
              move.failed = true;
              return;
          }
          var piece = ss.pop();
          if ((piece.type == 1) && (piece.player + 2 != move.actions[0][1][0])) {
              move.failed = true;
              return;
          }
          move.dropPiece(pos, s.setValue(0, ss));
          s = board.getPiece(move.actions[0][1][0]);
          if (s !== null) {
              ss = copy(s.getValue(0));
              if (ss.length == 0) {
                  if (piece.type !== 1) {
                      move.failed = true;
                      return;
                  }
              } else {
                  var q = ss[ss.length - 1];
                  if ((piece.type != +q.type + 2) || (piece.player != q.player)) {
                      move.failed = true;
                      return;
                  }
              }
              ss.push(piece);             
              move.actions[0][2] = [s.setValue(0, ss)];
          }
      }
      if (move.mode == 4) {
          var pos = move.actions[0][0][0];
          var s = board.getPiece(pos);
          var ss = copy(s.getValue(0));
          if (ss.length == 0) {
              move.failed = true;
              return;
          }
          var piece = ss.pop();
          if (piece.type == 1) {
              move.failed = true;
              return;
          }
          move.dropPiece(pos, s.setValue(0, ss));
          var p = design.navigate(board.player, move.actions[0][1][0], 1);
          if (p === null) {
              if (piece.type != 25) {
                  move.failed = true;
                  return;
              }
          } else {
              var t = board.getPiece(p);
              if ((t === null) || (+piece.type + 2 != t.type) || badColors(piece.player, t.player)) {
                  move.failed = true;
                  return;
              }
          }
          move.actions[0][2] = [piece];
      }
      if (move.mode == 3) {
          var t = design.navigate(board.player, move.actions[0][0][0], 2);
          if ((t !== null) && (board.getPiece(t) !== null)) {
              move.failed = true;
              return;
          }
          var p = board.getPiece(move.actions[0][0][0]);
          var s = board.getPiece(move.actions[0][1][0]);
          if ((p !== null) && (s !== null)) {
              if ((p.type == 1) && (p.player + 2 != move.actions[0][1][0])) {
                  move.failed = true;
                  return;
              }
              var ss = copy(s.getValue(0));
              if (ss.length == 0) {
                  if (p.type !== 1) {
                      move.failed = true;
                      return;
                  }
              } else {
                  var q = ss[ss.length - 1];
                  if ((p.type != +q.type + 2) || (p.player != q.player)) {
                      move.failed = true;
                      return;
                  }
              }
              ss.push(p);             
              move.actions[0][2] = [s.setValue(0, ss)];
          }
      }
      if (move.mode == 2) {
          var p = board.getPiece(0);
          var s = board.getPiece(1);
          if ((p !== null) && (s !== null)) {
              var ps = copy(p.getValue(0));
              if (ps === null) {
                  move.failed = true;
                  return;
              }
              var ss = copy(s.getValue(0));
              if (ps.length > 0) {
                  for (var i = 0; i < stackSize; i++) {
                       if (ps.length > 0) {
                           var piece = ps.pop();
                           ss.push(piece);
                       }
                  }
              } else {
                  while (ss.length > 0) {
                     var piece = ss.pop();
                     ps.push(piece);
                  }
              }
              p = p.setValue(0, ps);
              move.actions[0][2] = [p];
              s = s.setValue(0, ss);
              move.movePiece(1, 1, s);
          }
      }
      if (move.mode == 0) {
          var p = design.navigate(board.player, move.actions[0][0][0], 0);
          if ((p !== null) && (board.getPiece(p) !== null)) {
              move.failed = true;
          }
      }
      if (move.mode == 1) {
          var pos = move.actions[0][0][0];
          var piece = board.getPiece(pos);
          if (piece !== null) {
              var p = design.navigate(board.player, move.actions[0][1][0], 1);
              if (p === null) {
                  if (piece.type != 25) {
                      move.failed = true;
                      return;
                  }
              } else {
                  var t = board.getPiece(p);
                  if ((t === null) || (+piece.type + 2 != t.type) || badColors(piece.player, t.player)) {
                      move.failed = true;
                      return;
                  }
              }
              moveTail(design, board, move.actions[0][0][0], move.actions[0][1][0], move);
          }
      }
  });
  CheckInvariants(board);
}

})();
