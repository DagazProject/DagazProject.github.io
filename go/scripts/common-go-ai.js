"use strict";

(function() {

function Ai(parent) {
  this.parent = parent;
}

var findBot = Dagaz.AI.findBot;

Dagaz.AI.findBot = function(type, params, parent) {
  if ((type == "fast") || (type == "common")) {
      return new Ai(parent);
  } else {
      return findBot(type, params, parent);
  }
}

function analyze(ctx) {
  if (_.isUndefined(ctx.board.groups)) {
      ctx.board.groups = [];
      const design = Dagaz.Model.getDesign();
      let done = [];
      _.each(design.allPositions(), function(pos) {
          if (_.indexOf(done, +pos) >= 0) return;
          done.push(+pos);
          const piece = ctx.board.getPiece(pos);
          if (piece === null) return;
          let group   = [+pos];
          let dame    = [];
          let enemies = [];
          for (let i = 0; i < group.length; i++) {
              _.each(design.allDirections(), function(dir) {
                   var p = design.navigate(1, group[i], dir);
                   if (p === null) return;
                   if (_.indexOf(group, +p) >= 0) return;
                   const x = ctx.board.getPiece(p);
                   if (x === null) {
                       dame.push(+p);
                       return;
                   }
                   if (x.player != piece.player) {
                       enemies.push(+p);
                       return;
                   }
                   group.push(+p);
                   done.push(+p);
              });
          }
          ctx.board.groups.push({
              p: piece.player,
              g: group,
              d: dame,
              e: enemies
          });
      });
      ctx.board.arity = [];
      for (let i = 0; i < ctx.board.groups.length; i++) {
           const g = ctx.board.groups[i];
           for (let j = 0; j < g.d.length ; j++) {
                let dame = 0;
                _.each(design.allDirections(), function(dir) {
                    var p = design.navigate(1, g.d[j], dir);
                    if (p === null) return;
                    if (ctx.board.getPiece(p) !== null) return;
                    dame++;
                });
                ctx.board.arity[+g.d[j]] = dame;
           }
      }
  }
  return ctx.board.groups;
}

function getResultMove(ctx) {
  analyze(ctx);
  const player = ctx.board.player;
  for (let i = 0; i < ctx.board.groups.length; i++) {
       if (ctx.board.groups[i].p == player) continue;
       if (ctx.board.groups[i].d.length == 1) {
           return Dagaz.Model.posToString(ctx.board.groups[i].d[0]);
       }
  }
  let weak = null;
  for (let i = 0; i < ctx.board.groups.length; i++) {
       if (ctx.board.groups[i].p != player) continue;
       if ((weak === null) || (ctx.board.groups[i].d.length < weak.d.length)) {
           weak = ctx.board.groups[i];
       }
  }
  if ((weak !== null) && (weak.d.length < 3)) {
       let best = null; let bestDame = null;
       for (let i = 0; i < weak.d.length; i++) {
            const p = weak.d[i];
            let dame = _.isUndefined(ctx.board.arity[p]) ? 0 : ctx.board.arity[p];
            for (let j = 0; j < ctx.board.groups.length; j++) {
                 if (ctx.board.groups[j].p != player) continue;
                 if (_.indexOf(ctx.board.groups[j].d, +p) < 0) continue;
                 dame += ctx.board.groups[j].d.length - 1;
            }
            if ((best === null) || (dame > bestDame)) {
                 best = p;
                 bestDame = dame;
            }
       }
       if (best !== null) {
           return Dagaz.Model.posToString(best);
       }
  }
  weak = null;
  for (let i = 0; i < ctx.board.groups.length; i++) {
       if (ctx.board.groups[i].p == player) continue;
       if ((weak === null) || (ctx.board.groups[i].d.length < weak.d.length)) {
           weak = ctx.board.groups[i];
       }
  }
  if (weak !== null) {
      let best = null; let bestDame = null;
      for (let i = 0; i < weak.d.length; i++) {
           const p = weak.d[i];
           if ((best === null) || (ctx.board.arity[p] > bestDame)) {
                best = p;
                bestDame = ctx.board.arity[p];
           }
      }
      if (best !== null) {
          return Dagaz.Model.posToString(best);
      }
  }
  return null;
}

Ai.prototype.setContext = function(ctx, board) {
  if (this.parent) {
      this.parent.setContext(ctx, board);
  }
  ctx.timestamp = Date.now();
  ctx.board  = board;
}

Ai.prototype.getMove = function(ctx) {
  var moves = Dagaz.AI.generate(ctx, ctx.board);
  if (moves.length == 0) {
      return { done: true, ai: "nothing" };
  }
  const resultMove = getResultMove(ctx);
  if (resultMove !== null) {
      var bestMove = null;
      _.each(moves, function(move) {
          var x = move.toString() + ' ';
          if (x.startsWith(resultMove + ' ')) {
              bestMove = move;
          }
      });
      if (bestMove !== null) {
          console.log("AI: " + bestMove.toString());
          return {
              done: true,
              move: bestMove,
              time: Date.now() - ctx.timestamp,
              ai:  "fast"
         };
      }
  }
  if (this.parent) {
      return this.parent.getMove(ctx);
  }
}

})();
