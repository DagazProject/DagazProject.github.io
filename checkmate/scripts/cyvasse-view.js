(function() {

var getEngage = function(t) {
   if (t == 7) return 4;
   else if (t == 6) return 3;
   else if (_.indexOf([5, 8], t) >= 0) return 2;
   else return 1;
}

var isWater = function(board, pos) {
  var piece = board.getPiece(pos - 108);
  if (piece === null) return false;
  return piece.type == 11;
}

var isFocused = function(pos) {
  if (_.isUndefined(Dagaz.Controller.app.currPos)) return false;
  if (Dagaz.Controller.app.currPos == pos) return true;
  return _.indexOf(Dagaz.Controller.app.currPos, +pos) >= 0;
}

var noTower = function(from, engage) {
  for (var i = 0; i < engage.length; i++) {
       if (engage[i].is_tower && (engage[i].from == from)) return false;
  }
  return true;
}

var getEngages = function(design, board) {
  var r = [];
  _.each(_.range(108, 216), function(pos) {
      if (design.isKilledPos(pos)) return;
      if (isWater(board, pos)) return;
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (piece.type > 9) return;
      _.each(design.allDirections(), function(dir) {
          var n = 1;
          var e = getEngage(+piece.type);
          if (e < 1) return;
          var p = design.navigate(piece.player, pos, dir);
          if (piece.type == 7) {
              if (p === null) return;
              var target = board.getPiece(p);
              if ((target !== null) &&(target.type == 10)) return;
              p = design.navigate(piece.player, p, dir);
              e--;
              n++;
          }
          for (; e > 0; e--, n++) {
              if (p === null) break;
              var target = board.getPiece(p);
              if ((target !== null) && (target.player != piece.player)) {
                  if (target.type <= 9) {
                      r.push({
                          is_tower: (n == 1) && (target.type == 9),
                          player: piece.player,
                          from: pos,
                          to: p
                      });
                  }
                  break;
              }
              if ((target !== null) &&(target.type == 10)) break;
              p = design.navigate(piece.player, p, dir);
          }
      });
  });
  return _.filter(r, function(e) {
     return e.is_tower || noTower(e.from, r);
  });
}

var isEngaged = function(design, board, player, pos, engage) {
  var piece = board.getPiece(pos);
  if (piece === null) return false;
  if (piece.player == player) return false;
  if (piece.type > 9) return false;
  var cnt = design.price[piece.type];
  if (cnt == 0) return true;
  var n = 0;
  for (var i = 0; i < engage.length; i++) {
      if (engage[i].to == pos) n++;
  }
  return n >= cnt;
}

var isSpears = function(design, board, player, pos, dir) {
  if (_.indexOf((board.player == 1) ? [4, 5] : [0, 1], +dir) < 0) return false;
  var p = design.navigate(player, pos, dir);
  if (p == null) return false;
  var piece = board.getPiece(p);
  if (piece === null) return false;
  if (piece.player == player) return false;
  return piece.type == 2;
}

var getCaptures = function(design, board, engage) {
  var r = [];
  _.each(_.range(108, 216), function(pos) {
      if (design.isKilledPos(pos)) return;
      var piece = board.getPiece(pos);
      if (piece === null) return;
      if (_.indexOf([0, 1], +piece.type) >= 0) {
          _.each(design.allDirections(), function(dir) {
               var p = design.navigate(piece.player, pos, dir);
               if (p === null) return;
               if (isEngaged(design, board, piece.player, p, engage)) {
                   r.push({
                      from: pos,
                      to: p
                   });
               }
          });
      }
      if (piece.type == 2) {
          _.each((board.player == 1) ? [4, 5] : [0, 1], function(dir) {
               var p = design.navigate(piece.player, pos, dir);
               if (p === null) return;
               if (isEngaged(design, board, piece.player, p, engage)) {
                   r.push({
                      from: pos,
                      to: p
                   });
               }
          });
      }
      if (piece.type == 3) {
          _.each(design.allDirections(), function(dir) {
               var captured = false;
               var p = design.navigate(piece.player, pos, dir);
               if (p === null) return;
               if (isEngaged(design, board, piece.player, p, engage)) {
                   r.push({
                      from: pos,
                      to: p
                   });
                   captured = true;
               } else if (board.getPiece(p) !== null) return;
               if (isSpears(design, board, piece.player, p, dir)) return;
               p = design.navigate(piece.player, p, dir);
               if (p === null) return;
               if (isEngaged(design, board, piece.player, p, engage)) {
                   if (captured) return;
                   r.push({
                      from: pos,
                      to: p
                   });
                   captured = true;
               } else if (board.getPiece(p) !== null) return;
                 else {
                   if (captured)
                   r.push({
                      from: pos,
                      to: p
                   });
               }
               if (isSpears(design, board, piece.player, p, dir)) return;
               p = design.navigate(piece.player, p, dir);
               if (p === null) return;
               if (isEngaged(design, board, piece.player, p, engage)) {
                   if (captured) return;
                   r.push({
                      from: pos,
                      to: p
                   });
                   captured = true;
               } else if (board.getPiece(p) !== null) return;
                 else {
                   if (captured)
                   r.push({
                      from: pos,
                      to: p
                   });
               }
          });
      }
      if (piece.type == 4) {
          _.each(design.allDirections(), function(dir) {
               var captured = false;
               var p = design.navigate(piece.player, pos, dir);
               if (p === null) return;
               if (isEngaged(design, board, piece.player, p, engage)) {
                   r.push({
                      from: pos,
                      to: p
                   });
                   captured = true;
               } else if (board.getPiece(p) !== null) return;
               if (isSpears(design, board, piece.player, p, dir)) return;
               p = design.navigate(piece.player, p, dir);
               if (p === null) return;
               if (isEngaged(design, board, piece.player, p, engage)) {
                   if (captured) return;
                   r.push({
                      from: pos,
                      to: p
                   });
                   captured = true;
               } else if (board.getPiece(p) !== null) return;
                 else {
                   if (captured)
                   r.push({
                      from: pos,
                      to: p
                   });
               }
          });
      }
      if (piece.type == 5) {
          _.each(design.allDirections(), function(dir) {
               var p = design.navigate(piece.player, pos, dir);
               if (p === null) return;
               if (isEngaged(design, board, piece.player, p, engage)) {
                   r.push({
                      from: pos,
                      to: p
                   });
               }
               if (board.getPiece(p) !== null) return;
               if (isSpears(design, board, piece.player, p, dir)) return;
               p = design.navigate(piece.player, p, dir);
               if (p === null) return;
               if (isEngaged(design, board, piece.player, p, engage)) {
                   r.push({
                      from: pos,
                      to: p
                   });
               }
          });
      }
      if (piece.type == 7) {
          _.each(design.allDirections(), function(dir) {
               var p = design.navigate(piece.player, pos, dir);
               if (p === null) return;
               p = design.navigate(piece.player, p, dir);
               if (p === null) return;
               if (isEngaged(design, board, piece.player, p, engage)) {
                   r.push({
                      from: pos,
                      to: p
                   });
               } else {
                   var target = board.getPiece(p);
                   if ((target !== null) && (target.type != 10)) return;
               }
               p = design.navigate(piece.player, p, dir);
               if (p === null) return;
               if (isEngaged(design, board, piece.player, p, engage)) {
                   r.push({
                      from: pos,
                      to: p
                   });
               } else {
                   var target = board.getPiece(p);
                   if ((target !== null) && (target.type != 10)) return;
               }
               p = design.navigate(piece.player, p, dir);
               if (p === null) return;
               if (isEngaged(design, board, piece.player, p, engage)) {
                   r.push({
                      from: pos,
                      to: p
                   });
               }
          });
      }
      if (piece.type == 8) {
          _.each(design.allDirections(), function(dir) {
               var p = design.navigate(piece.player, pos, dir);
               if (p === null) return;
               if (isEngaged(design, board, piece.player, p, engage)) {
                   r.push({
                      from: pos,
                      to: p
                   });
               }
               if (isSpears(design, board, piece.player, p, dir)) return;
               p = design.navigate(piece.player, p, dir);
               if (p === null) return;
               if (isEngaged(design, board, piece.player, p, engage)) {
                   r.push({
                      from: pos,
                      to: p
                   });
               }
               if (isSpears(design, board, piece.player, p, dir)) return;
               p = design.navigate(piece.player, p, dir);
               if (p === null) return;
               if (isEngaged(design, board, piece.player, p, engage)) {
                   r.push({
                      from: pos,
                      to: p
                   });
               }
               if (isSpears(design, board, piece.player, p, dir)) return;
               p = design.navigate(piece.player, p, dir);
               if (p === null) return;
               if (isEngaged(design, board, piece.player, p, engage)) {
                   r.push({
                      from: pos,
                      to: p
                   });
               }
          });
      }
  });
  return r;
}

var isCaptured = function(from, to, captures) {
  for (var i = 0; i < captures.length; i++) {
       if ((captures[i].from == from) && (captures[i].to == to)) return true;
  }
  return false;
}

var showBoard = Dagaz.View.showBoard;

Dagaz.View.showBoard = function(board, ctx) {
  var design = Dagaz.Controller.app.design;
  var view = Dagaz.Controller.app.view;
  ctx.save();
  var e = getEngages(design, board);
  var c = getCaptures(design, board, e);
  for (var i = 0; i < e.length; i++) {
//    if (e[i].player != board.player) continue;
      if (isCaptured(e[i].from, e[i].to, c)) continue;
      ctx.strokeStyle = "#0000FF";
      var a = view.pos[e[i].from];
      var b = view.pos[e[i].to];
      if (!_.isUndefined(a) && !_.isUndefined(b)) {
          if (isFocused(e[i].from) || isFocused(e[i].to)) {
              ctx.globalAlpha = 1;
          } else {
              ctx.globalAlpha = 0.35;
          }
          ctx.beginPath();
          ctx.moveTo(a.x + a.dx / 2, a.y + a.dy / 2);
          ctx.lineTo(b.x + b.dx / 2, b.y + b.dy / 2);
          ctx.stroke();
          ctx.fillStyle = '#0000FF';
          ctx.arc(b.x + b.dx / 2, b.y + b.dy / 2, 3, 0, 2 * Math.PI);
          ctx.fill();
      }
  }
  for (var i = 0; i < c.length; i++) {
      ctx.strokeStyle = "#FF0000";
      var a = view.pos[c[i].from];
      var b = view.pos[c[i].to];
      if (!_.isUndefined(a) && !_.isUndefined(b)) {
          if (isFocused(c[i].from) || isFocused(c[i].to)) {
              ctx.globalAlpha = 1;
          } else {
              ctx.globalAlpha = 0.35;
          }
          ctx.beginPath();
          ctx.moveTo(a.x + a.dx / 2, a.y + a.dy / 2);
          ctx.lineTo(b.x + b.dx / 2, b.y + b.dy / 2);
          ctx.stroke();
          ctx.beginPath();
          ctx.fillStyle = '#FF0000';
          ctx.arc(b.x + b.dx / 2, b.y + b.dy / 2, 3, 0, 2 * Math.PI);
          ctx.fill();
      }
  }
  ctx.restore();
  if (!_.isUndefined(showBoard)) {
      showBoard(board, ctx);
  }
}

})();
