(function() {

Dagaz.AI.NOISE_FACTOR = 10;

function Ai(params) {
  this.params = params;
  if (_.isUndefined(this.params.rand)) {
      this.params.rand = _.random;
  }
}

var findBot = Dagaz.AI.findBot;

Dagaz.AI.findBot = function(type, params, parent) {
  if ((type == "heuristic") || (type == "common")) {
      return new Ai(params);
  } else {
      return findBot(type, params, parent);
  }
}

var getData = function(design, board) {
  if (_.isUndefined(board.data)) {
      board.data  = [];
      var targets = [];
      var zone = 4;
      _.each(design.allPositions(), function(pos) {
           board.data[pos] = 100;
           var piece = board.getPiece(pos);
           if (piece !== null) {
               if (piece.type == 2) targets.push(pos);
               if (piece.type == 3) {
                   if (design.inZone(2, 1, pos)) zone = 3;
                   targets.push(pos);
               }
           }
      });
      _.each(design.allPositions(), function(pos) {
           if (design.inZone(zone, 1, pos)) {
               targets.push(pos);
           }
      });
      _.each(targets, function(pos) {
           var group  = [pos];
           var level  = [];
           level[pos] = 0;
           for (var i = 0; i < group.length; i++) {
                _.each(design.allDirections(), function(dir) {
                     var p = design.navigate(1, group[i], dir);
                     if ((p !== null) && (_.indexOf(group, p) < 0)) {
                         group.push(p);
                         level[p] = level[ group[i] ] + 1;
                     }
                });
           }
           _.each(design.allPositions(), function(pos) {
                if (!_.isUndefined(level[pos])) {
                     board.data[pos] -= level[pos];
                }
           });
      });
  }
  return board.data;
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  if (move.isSimpleMove()) {
      var pos = move.actions[0][1][0];
      if (board.getPiece(pos) !== null) return 1000;
      var data = getData(design, board);
      return data[pos];
  }
  return 1;
}

Ai.prototype.setContext = function(ctx, board) {
  if (this.parent) {
      this.parent.setContext(ctx, board);
  }
  ctx.board  = board;
}

Ai.prototype.getMove = function(ctx) {
  ctx.board.moves = Dagaz.AI.generate(ctx, ctx.board);
  if (ctx.board.moves.length == 0) {
      return { done: true, ai: "nothing" };
  }
  var nodes = _.chain(ctx.board.moves)
     .map(function(m) {
          return {
             move:   m,
             weight: Dagaz.AI.heuristic(this, ctx.design, ctx.board, m)
          };
      }, this)
     .filter(function(n) {
          return n.weight >= 0;
      }).value();
  if (this.params.NOISE_FACTOR > 1) {
      _.each(nodes, function(n) {
         n.weight *= this.params.NOISE_FACTOR;
         n.weight += _.random(0, this.params.NOISE_FACTOR - 1);
      }, this);
  }
  if (nodes.length > 0) {
      nodes = _.sortBy(nodes, function(n) {
           return -n.weight;
      });
      console.log("Move: " + nodes[0].move.toString() + ", weight = " + nodes[0].weight);
      return {
           done: true,
           move: nodes[0].move,
           time: Date.now() - ctx.timestamp,
           ai:  "heuristic"
      };
  }
  if (this.parent) {
      return this.parent.getMove(ctx);
  }
}

})();
