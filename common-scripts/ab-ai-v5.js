(function() {

Dagaz.AI.inProgress   = false;
Dagaz.AI.AI_FRAME     = 5000;
Dagaz.AI.IDLE_FRAME   = 1000;
Dagaz.AI.START_DEEP   = 1;
Dagaz.AI.NOISE_FACTOR = 100;
Dagaz.AI.MAX_QS_LEVEL = 3;
Dagaz.AI.STALEMATE    = 0;
Dagaz.AI.MAX_AB_VARS  = 7;
Dagaz.AI.MAX_QS_VARS  = 3;
Dagaz.AI.NO_PRUNING   = 2;

var MAX_LEVEL = 25;
var MAX_VALUE = 2000000;
var HASH_MASK = (1 << 22) - 1;

var ALPHA_FLAG = 1;
var BETA_FLAG  = 2;
var EXACT_FLAG = 3;

var AI_FRAME   = null;

function Ai(parent) {
  this.parent = parent;
}

var findBot = Dagaz.AI.findBot;

Dagaz.AI.findBot = function(type, params, parent) {
  if ((type == "ab") || (type == "smart") || (type == "1") || (type == "2")) {
      return new Ai(parent);
  } else {
      return findBot(type, params, parent);
  }
}

var getAiFrame = function() {
  if (AI_FRAME === null) {
      var str = window.location.search.toString();
      var result = str.match(/[?&]ai=([^&]*)/);
      if (result) {
          AI_FRAME = result[1];
      } else {
          AI_FRAME = Dagaz.AI.AI_FRAME;
      }
  }
  return AI_FRAME;
}

Dagaz.AI.getPrice = function(design, piece, pos) {
  return design.price[piece.type];
}

Dagaz.AI.isMajorPiece = function(type) {
  return type > 0;
}

var checkGoal = function(ctx, board) {
  if (_.isUndefined(board.goal)) {
      board.goal = Dagaz.Model.checkGoals(ctx.design, board, board.player);
  }
  return board.goal;
}

var generate = function(ctx, board) {
  if (_.isUndefined(board.moves)) {
      if (checkGoal(ctx, board) === null) {
         board.moves = Dagaz.AI.generate(ctx, board);
      } else {
         board.moves = [];
      }
  }
  return board.moves;
}

Ai.prototype.getBaseEval = function(ctx, board) {
  if (!_.isUndefined(board.baseEval)) {
      board.baseEval = 0;
      board.isZugzwang = true;
      _.each(ctx.design.allPositions(), function(pos) {
           var piece = board.getPiece(pos);
           if (piece === null) return;
           var v = Dagaz.AI.getPrice(ctx.design, piece, pos);
           if (Dagaz.AI.isMajorPiece(piece.type)) {
               board.isZugzwang = false;
           }
           if (piece.player == board.player) {
               board.baseEval += v;
           } else {
               board.baseEval -= v;
           }
      });
  }
  return board.baseEval;
}

Ai.prototype.getCompleteEval = function(ctx, board) {
  return Dagaz.AI.eval(ctx.design, [], board, board.player);
}

Ai.prototype.noZugzwang = function(ctx, board) {
  this.getBaseEval(ctx, board);
  return !board.isZugzwang;
}

Ai.prototype.getMoveScore = function(ctx, board, move) {
  return Dagaz.AI.heuristic(this, ctx.design, board, move);
}

Dagaz.AI.isRepDraw = function(board) {
  return false;
}

Dagaz.AI.inCheck = function(design, board) {
  return false;
}

Dagaz.AI.see = function(design, board, move) {
  return true;
}

Dagaz.AI.isCapture = function(board, move) {
  for (var i = 0; i < move.actions.length; i++) {
       var a = move.actions[i];
       if (a[0] !== null) {
           if (a[1] === null) return true;
           if (board.getPiece(a[1][0]) !== null) return true;
       }
  }
  return false;
}

var applyMove = function(ctx, board, move) {
  var b = board.apply(move);
  return b;
}

Ai.prototype.store = function(ctx, board, value, flag, maxLevel, best, level) {
  if (value >= MAX_VALUE - 2000) value += level;
  else if (value <= -MAX_VALUE + 2000) value -= level;
  ctx.cache[board.zSign & HASH_MASK] = {
      lock:  board.hSign,
      board: board,
      value: value,
      flag:  flag,
      level: maxLevel,
      best:  best
  };
}

Dagaz.AI.getSource = function(move) {
  for (var i = 0; i < move.actions.length; i++) {
       if ((move.actions[i][0] !== null) && (move.actions[i][1] !== null)) {
           return move.actions[i][0][0];
       }
  }
  return null;
}

Dagaz.AI.getTarget = function(move) {
  for (var i = 0; i < move.actions.length; i++) {
       if (move.actions[i][0] !== null) {
           var pos = move.actions[i][0][0];
           if (move.actions[i][1] === null) return pos;
           return move.actions[i][1][0];
       }
  }
  return null;
}

function MovePicker(ctx, board, best, k1, k2, allowPruning) {
  this.list = []; var loosing = []; var done = [];
  if (!_.isUndefined(best) && (best !== null)) {
      best.weight = 100000;
      this.list.push(best);
      done.push(best.move.getZ());
  }
  board.moves = generate(ctx, board); 
  _.each(board.moves, function(move) {
      if (_.indexOf(done, move.getZ()) >= 0) return;
      if (!Dagaz.AI.isCapture(board, move)) return;
      done.push(move.getZ());
      var b = applyMove(ctx, board, move);
      if (Dagaz.AI.see(ctx.design, board, move)) {
          b.weight = Dagaz.AI.heuristic(this, ctx.design, board, move);
          var pos = Dagaz.AI.getTarget(move);
          if ((pos !== null) && (pos == board.lastt)) {
              b.weight += 10000;
          }
          this.list.push(b);
      } else {
          loosing.push(b);
      }
  }, this);
  this.list = _.sortBy(this.list, function(b) {
     return -b.weight;
  });
  _.each(board.moves, function(move) {
      if (_.indexOf(done, move.getZ()) >= 0) return;
      if (move.getZ() != k1) return;
      done.push(move.getZ());
      var b = applyMove(ctx, board, move);
      this.list.push(b);
  }, this);
  _.each(board.moves, function(move) {
      if (_.indexOf(done, move.getZ()) >= 0) return;
      if (move.getZ() != k2) return;
      done.push(move.getZ());
      var b = applyMove(ctx, board, move);
      this.list.push(b);
  }, this);
  this.prune = this.list.length;
  if (allowPruning && (this.list.length >= Dagaz.AI.MAX_AB_VARS)) return;
  _.each(board.moves, function(move) {
      if (allowPruning && (this.list.length >= Dagaz.AI.MAX_AB_VARS)) return;
      if (_.indexOf(done, move.getZ()) >= 0) return;
      var b = applyMove(ctx, board, move);
      this.list.push(b);
  }, this);
  _.each(loosing, function(b) {
      if (allowPruning && (this.list.length >= Dagaz.AI.MAX_AB_VARS)) return;
      this.list.push(b);
  }, this);
}

Ai.prototype.acn = function(ctx, board, maxLevel, level, beta, allowNull) {
  if (maxLevel <= 0) return this.qs(ctx, board, beta - 1, beta, 0, level);
  if (!Dagaz.AI.inProgress) return beta - 1;
  ctx.nodeCount++;
  while (ctx.killer[0].length <= board.level) {
      ctx.killer[0].push(0);
      ctx.killer[1].push(0);
  }
  if (Dagaz.AI.isRepDraw(board)) return 0;
  // Mate distance pruning: https://www.chessprogramming.org/Mate_Distance_Pruning
  if (-MAX_VALUE + level >= beta) return beta;
  if (MAX_VALUE - (level + 1) < beta) return beta - 1;
  var best = null;
  var node = ctx.cache[board.zSign & HASH_MASK];
  if (!_.isUndefined(node) && (node.lock == board.hSign)) {
      best = node.best;
      if (node.level >= maxLevel) {
          var value = node.value;
          if (value >= MAX_VALUE - 2000) value -= level;
              else if (value <= -MAX_VALUE + 2000) value += level;
          if (node.flag == EXACT_FLAG) return value;
          if ((node.flag == ALPHA_FLAG) && (value < beta)) return value;
          if ((node.flag == BETA_FLAG) && (value >= beta)) return value;
      }
  }
  if (!Dagaz.AI.inCheck(ctx.design, board) && allowNull && (beta > -MAX_VALUE + 2000) && (beta < MAX_VALUE - 2000)) {
      // Razoring: https://www.chessprogramming.org/Razoring
      if ((best === null) && (maxLevel < 4)) {
          var razorMargin = 2500 + 200 * maxLevel;
          if (this.getBaseEval(ctx, board) < beta - razorMargin) {
              var razorBeta = beta - razorMargin;
              var v = this.qs(ctx, board, razorBeta - 1, razorBeta, 0, level);
              if (v < razorBeta) return v;
          }
      }
      // Null move: https://www.chessprogramming.org/Null_Move_Pruning
      var baseEval = this.getBaseEval(ctx, board);
      if ((maxLevel > 1) && (baseEval >= beta - (maxLevel >= 4 ? 2500 : 0)) && this.noZugzwang(ctx, board)) {
          var r = 3 + (maxLevel >= 5 ? 1 : maxLevel / 4);
          if (baseEval - beta > 1500) r++;
          var b = board.apply(Dagaz.Model.createMove(0));
          b.baseEval = -baseEval;
          var value = -this.acn(ctx, b, maxLevel - r, level + 1, -(beta - 1), false);
          if (value >= beta) return beta;
      }
  }
  var f = false;
  var e = -MAX_VALUE - 1;
  var inCheck = Dagaz.AI.inCheck(ctx.design, board);
  var g = checkGoal(ctx, board);
  if ((g !== null) && (g < 0)) inCheck = true;
  var m = new MovePicker(ctx, board, best, ctx.killer[0][board.level], ctx.killer[1][board.level], true);
  for (var i = 0; i < m.list.length; i++) {
       var b = m.list[i];
       var ltos = maxLevel - 1;
       var v = null;
       var isFs = true;
       if (inCheck) {
           ltos++;
       } else {
           var r = ltos - (i > 14 ? 2 : 1);
           // Late move reductions: https://www.chessprogramming.org/Late_Move_Reductions
           if ((i >= m.prune) && (i > 5) && (maxLevel >= 3)) {
               v = -this.acn(ctx, b, r, level + 1, -(beta - 1), true);
               isFs = (v >= beta);
           }
       }
       if (isFs) {
           v = -this.acn(ctx, b, maxLevel, level + 1, -(beta  - 1), true);
       }
       f = true;
       if (!Dagaz.AI.inProgress) return beta - 1;
       if (v > e) {
           if (v >= beta) {
               if (!Dagaz.AI.isCapture(board, b.move)) {
                   if (b.move.getZ() != ctx.killer[0][board.level]) {
                       ctx.killer[1][board.level] = ctx.killer[0][board.level];
                       ctx.killer[0][board.level] = b.move.getZ();
                   }
               }
               this.store(ctx, board, v, BETA_FLAG, maxLevel, b, level);
               return v;
           }
           e = v;
           best = b;
       }
  }
  if (!f) {
      if (inCheck) 
          // Checkmate
          return -MAX_VALUE + level;
      else
          // Stalemate
          return Dagaz.AI.STALEMATE * (MAX_VALUE - level);
  }
  this.store(ctx, board, e, ALPHA_FLAG, maxLevel, best, level);
  return e;
}

function FastMovePicker(ctx, board, inCheck) {
  var best = null; var weight = null;
  board.moves = generate(ctx, board); 
  _.each(board.moves, function(move) {
     var pos = Dagaz.AI.getTarget(move);
     if ((pos === null) || (pos != board.lastt)) return;
     if (!inCheck && !Dagaz.AI.see(ctx.design, board, move)) return;
     var w = Dagaz.AI.heuristic(this, ctx.design, board, move);
     if ((weight === null) || (w > weight)) {
         weight = w;
         best = move;
     }
  }, this);
  this.list = [];
  if (best !== null) {
      var b = applyMove(ctx, board, best);
      b.weight = weight + 100000;
      this.list.push(b);
  }
  _.each(board.moves, function(move) {
     if (!inCheck && (this.list.length >= Dagaz.AI.MAX_QS_VARS)) return;
     if ((best !== null) && (best.getZ() == move.getZ())) return;
     if (!Dagaz.AI.isCapture(board, move)) return;
     if (!inCheck && !Dagaz.AI.see(ctx.design, board, move)) return;
     var b = applyMove(ctx, board, move);
     b.weight = Dagaz.AI.heuristic(this, ctx.design, board, move);
     this.list.push(b);
  }, this);
  this.list = _.sortBy(this.list, function(b) {
     return -b.weight;
  });
  if (inCheck) {
      _.each(board.moves, function(move) {
         if (Dagaz.AI.isCapture(board, move)) return;
         var b = applyMove(ctx, board, move);
         this.list.push(b);
      }, this);
  }
}

Ai.prototype.qs = function(ctx, board, alpha, beta, maxLevel, level) {
  if (level > MAX_LEVEL) return 0;
  ctx.qNodeCount++;
  if (level > ctx.qLevel) ctx.qLevel = level;
  var inCheck = Dagaz.AI.inCheck(ctx.design, board);
  var g = checkGoal(ctx, board);
  if ((g !== null) && (g < 0)) inCheck = true;
  var e = inCheck ? (-MAX_VALUE + 1) : this.getCompleteEval(ctx, board);
  if (e >= beta) return e;
  if (e > alpha) alpha = e;
  if (maxLevel < -Dagaz.AI.MAX_QS_LEVEL) return e;
  var m = new FastMovePicker(ctx, board, inCheck);
  for (var i = 0; i < m.list.length; i++) {
       var b = m.list[i];
       var v = -this.qs(ctx, b, -beta, -alpha, maxLevel - 1, level + 1);
       if (v > e) {
           if (v >= beta) return v;
           if (v > alpha) alpha = v;
           e = v;
       }
  }
  return e;
}

Ai.prototype.ab = function(ctx, board, maxLevel, level, alpha, beta) {
  if ((maxLevel <= 0) || (level > MAX_LEVEL - 2)) {
      ctx.tNodeCount++;
      return this.qs(ctx, board, alpha, beta, 0, level);
  }
  ctx.nodeCount++;
  while (ctx.killer[0].length <= board.level) {
      ctx.killer[0].push(0);
      ctx.killer[1].push(0);
  }
  if (level > ctx.mLevel) ctx.mLevel = level;
  if ((level > 0) && Dagaz.AI.isRepDraw(board)) return 0;
  // Mate distance pruning: https://www.chessprogramming.org/Mate_Distance_Pruning
  var oa = alpha;
  if (alpha > -MAX_VALUE + level) alpha = -MAX_VALUE + level;
  if (beta < MAX_VALUE - (level + 1)) beta = MAX_VALUE - (level + 1);
  if (alpha >= beta) return alpha;
  var best = null;
  var flag = ALPHA_FLAG;
  var node = ctx.cache[board.zSign & HASH_MASK];
  if (!_.isUndefined(node) && (node.lock == board.hSign)) {
      best = node.best;
  }
  var inCheck = Dagaz.AI.inCheck(ctx.design, board);
  var g = checkGoal(ctx, board);
  if ((g !== null) && (g < 0)) inCheck = true;
  var f = false;
  var e = -MAX_VALUE;
  var m = new MovePicker(ctx, board, best, ctx.killer[0][board.level], ctx.killer[1][board.level], level >= Dagaz.AI.NO_PRUNING);
  for (var i = 0; i < m.list.length; i++) {
       var b = m.list[i];
       var ltos = maxLevel - 1;
       if (Dagaz.AI.inCheck(ctx.design, b)) ltos++;
       var v = null;
       if (f) {
           if ((ctx.nodeCount & 31) == 31) {
               if (Date.now() - ctx.timestamp > getAiFrame()) {
                   Dagaz.AI.inProgress = false;
               }
           }
//         v = -this.acn(ctx, b, ltos, level + 1, -alpha, true);
//         if (v > alpha) {
               v = -this.ab(ctx, b, ltos, level + 1, -beta, -alpha);
//         }
       } else {
           v = -this.ab(ctx, b, ltos, level + 1, -beta, -alpha);
       }
       f = true;
       if (!Dagaz.AI.inProgress) return alpha;
       if (v > e) {
           if (v >= beta) {
               if (!Dagaz.AI.isCapture(board, b.move)) {
                   if (b.move.getZ() != ctx.killer[0][board.level]) {
                       ctx.killer[1][board.level] = ctx.killer[0][board.level];
                       ctx.killer[0][board.level] = b.move.getZ();
                   }
               }
               this.store(ctx, board, v, BETA_FLAG, maxLevel, b, level);
               return v;
           }
           if (v > oa) {
               flag = EXACT_FLAG;
               alpha = v;
           }
           e = v;
           best = b;
       }
  }
  if (!f) {
       if (inCheck) 
           // Checkmate
           return -MAX_VALUE + level;
       else 
           // Stalemate
           return Dagaz.AI.STALEMATE * (MAX_VALUE - level);
  }
  this.store(ctx, board, e, flag, maxLevel, best, level);
  return e;
}

Ai.prototype.setContext = function(ctx, board) {
  if (this.parent) {
      this.parent.setContext(ctx, board);
  }
  ctx.board = board;
  ctx.timestamp  = Date.now();
  ctx.nodeCount  = 0;
  ctx.qNodeCount = 0;
  ctx.tNodeCount = 0;
  ctx.mLevel     = 0;
  ctx.qLevel     = 0;
  if (!Dagaz.AI.selector || (Dagaz.Model.getSetupSelector(2) == 2)) {
      if (_.isUndefined(ctx.cache)) {
          ctx.cache = [];     
      }
      if (_.isUndefined(ctx.killer)) {
          ctx.killer = [];
          ctx.killer[0] = [];
          ctx.killer[1] = [];
      }
  }
}

Ai.prototype.getMove = function(ctx) {
  ctx.board.moves = Dagaz.AI.generate(ctx, ctx.board);
  if (ctx.board.moves.length == 0) {
      return { done: true, ai: "nothing" };
  }
  if (ctx.board.moves.length == 1) {
      return {
           done: true,
           move: ctx.board.moves[0],
           time: Date.now() - ctx.timestamp,
           ai:  "once"
      };
  }
  if (!Dagaz.AI.selector || (Dagaz.Model.getSetupSelector(2) == 2)) {
      for (var i = 0; i < ctx.board.moves.length; i++) {
           var b = ctx.board.apply(ctx.board.moves[i]);
           if (Dagaz.Model.checkGoals(ctx.design, b, ctx.board.player) > 0)
               return {
                   done: true,
                   move: ctx.board.moves[i],
                   time: Date.now() - ctx.timestamp,
                   ai:  "goal"
               };
      }
      if (Dagaz.AI.NOISE_FACTOR > 0) {
          ctx.board.moves = _.sortBy(ctx.board.moves, function(m) {
              if (_.isUndefined(m.weight)) {
                  m.weight = _.random(0, Dagaz.AI.NOISE_FACTOR);
              }
              return m.weight;
          });
      }
      ctx.timestamp = Date.now();
      ctx.best = null;
      Dagaz.AI.inProgress = true;
      var alpha = -MAX_VALUE;
      var beta = MAX_VALUE;
      for (var i = Dagaz.AI.START_DEEP; (i < 100) && Dagaz.AI.inProgress; i++) {
           var v = this.ab(ctx, ctx.board, i, 0, alpha, beta);
           if (!Dagaz.AI.inProgress) break;
           if ((v > alpha) && (v < beta)) {
               alpha = v - 500;
               beta = v + 500;
               if (alpha < -MAX_VALUE) alpha = -MAX_VALUE;
               if (beta > MAX_VALUE) beta = MAX_VALUE;
           } else if (alpha != -MAX_VALUE) {
               alpha = -MAX_VALUE;
               beta = MAX_VALUE;
               i--;
           }
           var node = ctx.cache[ctx.board.zSign & HASH_MASK];
           if (!_.isUndefined(node) && (node.lock == ctx.board.hSign)) {
               ctx.best = node.best.move;
           }
      }
      Dagaz.AI.inProgress = false;
      if (ctx.best !== null) {
          console.log("AB: " + ctx.best.toString() + ", A=" + alpha + ", B=" + beta + ", N=" + ctx.nodeCount + ", Q=" + ctx.qNodeCount + ", T=" + ctx.tNodeCount + ", L=" + ctx.mLevel + ", D=" + ctx.qLevel);
          return {
               done: true,
               move: ctx.best,
               time: Date.now() - ctx.timestamp,
               ai:  "ab"
          };
      }
  }
  if (this.parent) {
      return this.parent.getMove(ctx);
  }
}

})();
