(function() {

var MAX_DEEP = 3;

function Ai(parent) {
  this.parent = parent;
}

var findBot = Dagaz.AI.findBot;

Dagaz.AI.findBot = function(type, params, parent) {
  if ((type == "filler") || (type == "common") || (type == "1") || (type == "2")) {
      return new Ai(parent);
  } else {
      return findBot(type, params, parent);
  }
}

var getEdge = function(ctx, group) {
  var r = [];
  _.each(group, function(pos) {
      _.each(ctx.design.allDirections(), function(dir) {
          var p = ctx.design.navigate(1, pos, dir);
          if (p === null) return;
          if (_.indexOf(group, p) >= 0) return;
          var piece = ctx.board.getPiece(p);
          if (piece === null) return;
          if (piece.player < 2) return;
          if (piece.type > 6) return;
          if (_.indexOf(r, +piece.type) >= 0) return;
          r.push(+piece.type);
      });
  });
  return r;
}

var findMove = function(ctx, type, group, deep) {
  var r = group.length;
  if (deep <= 0) return r;
  var size = group.length;
  for (var i = 0; i < group.length; i++) {
      _.each(ctx.design.allDirections(), function(dir) {
          var p = ctx.design.navigate(1, group[i], dir);
          if (p === null) return;
          if (_.indexOf(group, p) >= 0) return;
          var piece = ctx.board.getPiece(p);
          if (piece === null) return;
          if (piece.player < 2) return;
          if (piece.type != type) return;
          group.push(p);
      });
  }
  var edge = getEdge(ctx, group);
  if (edge.length > 0) {
      for (var i = 0; i < edge.length; i++) {
           var q = findMove(ctx, edge[i], group, deep - 1);
           if (r < q) r = q;
      }
  }
  while (group.length > size) {
      group.pop();
  }
  return r;
}

Ai.prototype.setContext = function(ctx, board) {
  if (this.parent) {
      this.parent.setContext(ctx, board);
  }
  ctx.board = board;
  ctx.timestamp = Date.now();
}

Ai.prototype.getMove = function(ctx) {
  var moves = Dagaz.AI.generate(ctx, ctx.board);
  if (moves.length == 0) {      
      return { done: true, ai: "nothing" };
  }
  if (moves.length == 1) {
      return { done: true, move: moves[0], ai: "once" };
  }
  var group = [];
  _.each(ctx.design.allPositions(), function(pos) {
      var piece = ctx.board.getPiece(pos);
      if (piece === null) return;
      if (piece.player != ctx.board.player) return;
      group.push(pos);
  });
  var edge = getEdge(ctx, group);
  if (edge.length > 0) {
      var type = _.max(edge, function(t) {
           return findMove(ctx, t, group, MAX_DEEP);
      });
      for (var i = 0; i < moves.length; i++) {
           var m = moves[i];
           if ((m.actions.length > 0) && (m.actions[0][1] !== null)) {
               var pos = m.actions[0][1][0];
               if (pos >= 7) pos -= 7;
               if (pos == type) {
                   return {
                       done: true,
                       move: m,
                       time: Date.now() - ctx.timestamp,
                       ai:  "filler"
                   };
               }
           }
      }
  }
  if (this.parent) {
      return this.parent.getMove(ctx);
  }
}

})();
