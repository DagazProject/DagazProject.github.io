(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "gomoku-igo-restriction") {
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

var showBoard = Dagaz.View.showBoard;

Dagaz.View.showBoard = function(board, ctx) {
  var design = Dagaz.Controller.app.design;
  var view = Dagaz.Controller.app.view;
  ctx.save();
  _.each(board.lines, function(line) {
      var a = view.pos[line.a];
      var b = view.pos[line.b];
      if (line.p == 1) {
          ctx.strokeStyle = "#FF0000";
      } else {
          ctx.strokeStyle = "#0000FF";
      }
      ctx.beginPath();
      ctx.moveTo(a.x + a.dx / 2, a.y + a.dy / 2);
      ctx.lineTo(b.x + b.dx / 2, b.y + b.dy / 2);
      ctx.stroke();
  });
  ctx.restore();
  if (!_.isUndefined(showBoard)) {
      showBoard(board, ctx);
  }
}

var showPiece = Dagaz.View.showPiece;

Dagaz.View.showPiece = function(view, ctx, frame, pos, piece, model, x, y) {
  showPiece(view, ctx, frame, pos, piece, model, x, y);
  var board = Dagaz.Controller.app.board;
  if (!board || !board.ko) return;
  if (_.indexOf(board.ko, pos) < 0) return;
  ctx.save();
  ctx.strokeStyle = "#00FF00";
  ctx.beginPath();
  ctx.arc(x + frame.dx / 2 + 1, y + frame.dy / 2 + 1, 21, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.restore();
}

var isSurround = function(design, board, player, pos, dirs) {
  var dame = 0;
  var group = [pos];
  for (var i = 0; i < group.length; i++) {
       _.each(dirs, function(dir) {
            var p = design.navigate(player, group[i], dir);
            if (p === null) return;
            if (_.indexOf(group, p) >= 0) return;
            var piece = board.getPiece(p);
            if (piece === null) {
                dame++;
                return;
            }
            if (piece.player != player) return;
            group.push(p);
       });
  }
  return dame == 0;
}

var calcLine = function(design, board, player, pos, dir) {
  var c = 0; var o = pos;
  var p = design.navigate(player, pos, dir);
  while (p !== null) {
      var piece = board.getPiece(p);
      if (piece === null) return {cnt: c, pos: o};
      if (piece.player != player) return {cnt: c, pos: o};
      o = p; c++;
      p = design.navigate(player, p, dir);
  }
  return {cnt: c, pos: o};
}

var isLine = function(design, board, player, pos, d, o) {
  var a = calcLine(design, board, player, pos, d);
  var b = calcLine(design, board, player, pos, o);
  if (a.cnt + b.cnt == 4) {
      var f = true;
      _.each(board.lines, function(line) {
          if (!f) return;
          if ((line.a == a.pos) && (line.b == b.pos)) f = false;
          if ((line.a == b.pos) && (line.b == a.pos)) f = false;
      });
      if (f) {
          board.lines.push({
              p: player,
              a: a.pos,
              b: b.pos
          });
      }
  }
  return a.cnt + b.cnt >= 4;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var ko = []; board.lines = [];
  _.each(board.moves, function(move) {
      if (!move.isDropMove()) return;
      var pos = move.actions[0][1][0];
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (!_.isUndefined(board.move) && board.move.isDropMove()) {
          if (board.move.actions[0][1][0] === pos) {
              move.failed = true;
              return;
          }
      }
      if (!isSurround(design, board, piece.player, pos, [1, 3, 4, 7]) &&
          !isSurround(design, board, piece.player, pos, [0, 2, 5, 6])) {
          move.failed = true;
          return;
      }
      if (isLine(design, board, piece.player, pos, 0, 6) ||
          isLine(design, board, piece.player, pos, 1, 7) ||
          isLine(design, board, piece.player, pos, 2, 5) ||
          isLine(design, board, piece.player, pos, 3, 4)) {
          move.failed = true;
          return;
      }
      ko.push(pos);
  });
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      isLine(design, board, piece.player, pos, 0, 6);
      isLine(design, board, piece.player, pos, 1, 7);
      isLine(design, board, piece.player, pos, 2, 5);
      isLine(design, board, piece.player, pos, 3, 4);
  });
  if (ko.length > 0) {
      board.ko = ko;
  }
  CheckInvariants(board);
}

})();
