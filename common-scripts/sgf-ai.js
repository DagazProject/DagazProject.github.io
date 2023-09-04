(function() {

function SgfAi(params, parent) {
  this.params   = params;
  this.parent   = parent;
  if (_.isUndefined(this.params.rand)) {
      this.params.rand = _.random;
  }
}

var findBot = Dagaz.AI.findBot;

Dagaz.AI.findBot = function(type, params, parent) {
  if ((type == "sgf") || (type == "opening") || (type == "solver")) {
      return new SgfAi(params, parent);
  } else {
      return findBot(type, params, parent);
  }
}

var getNote = function(move) {
  var r = "";
  if (move.actions.length == 1) {
      if (move.actions[0][0] !== null) {
          r = Dagaz.Model.posToString(move.actions[0][0][0]);
      }
      if (move.actions[0][1] !== null) {
          r = r + Dagaz.Model.posToString(move.actions[0][1][0]);
      }
  }
  return r;
}

var locate = function(cursor) {
  var sgf = Dagaz.AI.SGF;
  for (var i = 0; i < cursor.length; i++) {
       var p = cursor[i];
       if (p >= sgf.length) return null;
       sgf = sgf[p];
       if (!_.isArray(sgf) || (sgf.length == 0)) return null;
  }
  return sgf;
}

var find = function(ctx, position, sgf, move) {
  if (_.isArray(sgf[position])) {
      for (var i = 0; i < sgf.length; i++) {
           var r = find(ctx, 0, sgf[i], move);
           if (r !== null) {
               ctx.cursor.push(i);
               return r;
           }
      }
      return null;
  } else {
      if (position >= sgf.length) return null;
      if (!sgf[position]) return null;
      if (sgf[position].arg[0] != move) return null;
      ctx.position = position + 1;
      return sgf;
  }
}

var compareMove = Dagaz.Model.compareMove;

SgfAi.prototype.setContext = function(ctx, board) {
  if (this.parent) {
      this.parent.setContext(ctx, board);
  }
  ctx.board = board;
  if (_.isUndefined(ctx.cursor)) {
      ctx.cursor = [];
      ctx.position = 0;
  }
  if (!_.isUndefined(board.move)) {
      if (!ctx.design.isPuzzle()) {
          ctx.sgf = find(ctx, ctx.position, locate(ctx.cursor), getNote(board.move));
      }
  } else {
      ctx.sgf = locate(ctx.cursor);
  }
}

SgfAi.prototype.getMove = function(ctx) {
  if (ctx.sgf && (ctx.position < ctx.sgf.length)) {
      var notes = [];
      if (_.isArray(ctx.sgf[ctx.position])) {
          for (var i = ctx.position; i < ctx.sgf.length; i++) {
             notes.push(ctx.sgf[i][0].arg[0]);
          }
      } else {
          notes.push(ctx.sgf[ctx.position].arg[0]);
      }
      console.log(notes);
      if (notes) {
          var moves = _.filter(Dagaz.AI.generate(ctx, ctx.board), function(move) {
              return _.indexOf(notes, getNote(move)) >= 0;
          });
          if (moves.length > 0) {
              var ix = 0;
              if (moves.length > 1) {
                  ix = this.params.rand(0, moves.length - 1);
                  ctx.cursor.push(_.indexOf(notes, getNote(moves[ix])) + ctx.position);
                  ctx.position = 0;
              } 
              ctx.position++;
              return {
                  done: true,
                  move: moves[ix],
                  ai:   "sgf"
              };
          }
      }
  }
  if (this.parent) {
      return this.parent.getMove(ctx);
  }
}

})();
