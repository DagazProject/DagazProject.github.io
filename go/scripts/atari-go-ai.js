"use strict";

(function() {

const SIZE = 9;
const LETTERS = 'abcdefghi';

const C = 1.5;
const D = 30.5;

const MAX_TIME = 3000;
const DO_TOTAL = 10000;

let board = new Int32Array(SIZE * SIZE);

var inProgress = false;
var resultMove = null;
var player     = null;

function Ai(parent) {
  this.parent = parent;
}

var findBot = Dagaz.AI.findBot;

Dagaz.AI.findBot = function(type, params, parent) {
  if ((type == "external") || (type == "smart") || (type == "1") || (type == "2")) {
      return new Ai(parent);
  } else {
      return findBot(type, params, parent);
  }
}

function dump(board, size, moves, player) {
    for (let y = 0; y < size; y++) {
        let s = '';
        for (let x = 0; x < size; x++) {
            let pos = y * size + x;
            if (!_.isUndefined(player) && (player < 0)) {
                pos = x * size + y;
            }
            if (board[pos] > 0) {
                s = s + '* ';
            } else if (board[pos] < 0) {
                s = s + 'o ';
            }  else if (!_.isUndefined(moves) && (moves[pos] > 1 / (size * size))) {
                s = s + '+ ';
            }  else if (!_.isUndefined(moves) && (moves[pos] < -1 / (size * size))) {
                s = s + 'X ';
            }  else {
                s = s + '. ';
            }
        }
        console.log(s);
    }
    console.log('');
}

function FormatMove(move, size) {
    const col = move % size;
    const row = (move / size) | 0;
    return LETTERS[col] + (9 - row);
}

function InitializeFromFen(fen, board, size, player) {
    for (let pos = 0; pos < SIZE * SIZE; pos++) {
        board[pos] = 0;
    }
    let pos = 0;
    for (let i = 0; i < fen.length; i++) {
        const c = fen[i];
        if (c != '/') {
            if ((c >= '0') && (c <= '9')) {
                pos += +c;
            } else {
                let p = 1;
                if ((c == 'w') || (c == 'W')) {
                    p = -p;
                }
                board[pos] = p * player;
                pos++;
            }
            if (pos >= size * size) break;
        } 
    }
}

function analyze(board, size, map) {
  let r = []; let done = [];
  r.push({
      player: 0,
      group:  [],
      edges:  [],
      dame:   []
  });
  for (let pos = 0; pos < size * size; pos++) {
      if (board[pos] == 0) continue;
      if (_.indexOf(done, pos) >= 0) continue;
      const p = board[pos];
      let g = [pos]; let d = []; let e = [];
      for (let i = 0; i < g.length; i++) {          
          _.each([-1, 1, -size, size], function(dir) {
               const q = navigate(g[i], dir, size);
               if (q === null) return;
               if (_.indexOf(g, q) >= 0) return;
               if (board[q] * p < 0) {
                   if (_.indexOf(e, q) < 0) e.push(q);
                   return;
               }
               if (board[q] * p > 0) {
                   g.push(q);
                   return;
               }
               if (_.indexOf(d, q) < 0) d.push(q);
          });
          done.push(g[i]);
      }
      if (!_.isUndefined(map)) {
          _.each(g, function(p) {
               map[p] = r.length;
          });
      }
      r.push({
          player: p,
          group:  g,
          edges:  e,
          dame:   d
      });
  }
  return r;
}

function getMoveByStat(board, size, stat, player) {
  for (let i = 0; i < stat.length; i++) {
      if ((stat[i].player != player) && (stat[i].dame.length == 1)) return stat[i].dame[0];
  }
  for (let i = 0; i < stat.length; i++) {
      if ((stat[i].player == player) && (stat[i].dame.length == 1)) {
           if (noSuicide(board, size, stat[i].dame[0])) return stat[i].dame[0];
      }
  }
  return null;
}

function uct(parent, node) {
    return (node.w / node.n) + C * Math.sqrt(Math.log(parent.n) / node.n) + D * (node.p / node.n);
}

function Node(avail) {
    this.avail = avail;
    this.n = 0;
    this.childs = [];
}

function getMoves(board, size, move) {
    return _.filter(_.range(size * size), function(pos) {
        if (move == pos) return false;
        if (board[pos] != 0) return false;
        let c = 0;
        _.each([-1, 1, SIZE, -SIZE, SIZE - 1, SIZE + 1, -SIZE - 1, -SIZE + 1], function(dir) {
            const p = navigate(pos, dir, size);
            if (p === null) return;
            if ((move !== null) && (move == p)) c++;
            if (board[p] > 0) c++;
            if (board[p] < 0) c++;
        });
        return c > 0;
    });
}

function getPattern(board, x, y, stat, ix) {
  if ((x < 0) || (x >= Dagaz.Model.WIDTH))  return " ";
  if ((y < 0) || (y >= Dagaz.Model.HEIGHT)) return " ";
  const pos = y * Dagaz.Model.WIDTH + x;
  const player = board[pos];
  const v = stat[ix[pos]].dame.length;
  if (player == 0) return "0";
  if (player > 0) {
      if (v == 1) return "a";
      if (v == 2) return "b";
      if (v == 3) return "c";
      if (v == 4) return "d";
      return "x";
  } else {
      if (v == 1) return "A";
      if (v == 2) return "B";
      if (v == 3) return "C";
      if (v == 4) return "D";
      return "X";
  }
}

function show(map) {
  for (let y = 0; y < SIZE; y++) {
    let s = '';
    for (let x = 0; x < SIZE; x++) {
        s = s + map[y * SIZE + x] + ' ';
    }
    console.log(s);
  }
}

function sameai(board, move, stat, map) {
  var fd = 0; var ed = 0; var c = 0;
  _.each([1, -1, SIZE, -SIZE], function (dir) {
      const pos = navigate(move, dir, SIZE);
      if (pos === null) {
          c += 3;
          return;
      }
      const ix = map[pos];
      if (ix == 0) {
          fd++;
          return;
      }
      if (stat[ix].player > 0) {
          fd += stat[ix].dame.length - 1;
          c++;
      } else {
          if ((ed == 0) || (ed > stat[ix].dame.length)) ed = stat[ix].dame.length - 1;
      }
  });
  if ((c < 2) && (ed > 0) && (fd > ed)) return 900;
  return 0;
}

function getWeight(board, move, stat, map) {
    const X = Dagaz.Model.getX(move);
    const Y = Dagaz.Model.getY(move);
    let p = "";
    for (let j = Y - 2; j <= Y + 2; j++) {
         for (let i = X - 2; i <= X + 2; i++) {
              p = p + getPattern(board, i, j, stat, map);
         }
    }
    let v = Dagaz.AI.findPattern(p);
    v += sameai(board, move, stat, map);
    if (v > 3000) v = 3000;
    return v / 100;
}
  
Node.prototype.getUCT = function(board, size, stat, map) {
    const m = getAvail(this);
    if (m !== null) {
        const moves = getMoves(board, size, m);
        const r = new Child(m, [], moves, getWeight(board, m, stat, map));
        this.childs.push(r);
        return r;
    }
    if (this.childs.length == 0) return null;
    return _.max(this.childs, function(node) {
        return uct(this, node);
    }, this);
}

function Child(move, prior, avail, p) {
    this.move  = move;
    this.prior = prior;
    this.avail = avail;
    this.p = p;
    this.n = 1;
    this.w = 0;
    this.moves = [];
}

Child.prototype.getRandom = function() {
    let m = null;
    if (this.prior.length > 0) {
        m = this.prior.pop();
    } else {
        m = getAvail(this);
    }
    if (m !== null) {
        this.moves.push(m);
        return m;
    }
    if (this.moves.length == 0) return null;
    if (this.moves.length == 1) return this.moves[0];
    const ix = _.random(0, this.moves.length - 1);
    return this.moves[ix];
}

function getAvail(node) {
    if (node.avail.length == 0) return null;
    if (node.avail.length == 1) {
        const r = node.avail[0];
        node.avail = [];
        return r;
    }
    const ix = _.random(0, node.avail.length - 1);
    const r = node.avail[ix];
    node.avail = _.without(node.avail, r);
    return r;
}

function simulate(board, player, size, move) {
    let g = 0;
    let undo = [];
    let p = player;
    if (move !== null) {
        undo.push(move);
        board[move] = -p;
        for (let i = 0; i < size * size; i++) {
            const s = analyze(board, size);
            let m = getMoveByStat(board, size, s, p);
            if (m === null) {
                let moves = getMoves(board, size);
                if (moves.length == 0) break;
                let ix = 0;
                if (moves.length > 1) ix = _.random(0, moves.length - 1);
                m = moves[ix];
            }
            undo.push(m);
            board[m] = p;
            g = checkGoal(board, p, size, m);
//          dump(board, size);
            if (g != 0) break;
            p = -p;
        }
    }
    _.each(undo, function(p) {
        board[p] = 0;
    });
    return g * p;
}

function noSuicide(board, size, move) {
    board[move] = 1;
    var group = [move];
    var dame = expand(board, size, group, 1);
    board[move] = 0;
    return dame > 0;
}

function findMove(fen, player, callback) {
    const t0 = Date.now();
    InitializeFromFen(fen, board, SIZE, player);
    player = 1;

    let map = new Int32Array(SIZE * SIZE);
    const s = analyze(board, SIZE, map);
    const m = getMoveByStat(board, SIZE, s, player);
    if (m !== null) {
        const t1 = Date.now();
        console.log('Time = ' + (t1 - t0));
        callback(m, 100000, t1 - t0);
        return;
    }

    let moves = getMoves(board, SIZE);
    const root = new Node(moves);

    for (let i = 0; i < DO_TOTAL; i++) {
        const c = root.getUCT(board, SIZE, s, map);
        if (c === null) break;
        board[c.move] = player;
        if (!noSuicide(board, SIZE, c.move)) {
            board[c.move] = 0;
            continue;
        }
        const move = c.getRandom();
        if (simulate(board, player, SIZE, move) > 0) {
            c.w++;
        }
        c.n++;
        root.n++;
        board[c.move] = 0;
        if (i % 100 == 0) {
            if (Date.now() - t0 > MAX_TIME) break;
        }
    }

    const r = _.sortBy(root.childs, function(c) {
        return -c.n;
    });
    const t1 = Date.now();

    let mx = r[0].w; let ix = 0;
    for (let i = 0; i < r.length; i++) {
        const m = r[i].move;
        console.log(FormatMove(m, SIZE) + ': n = ' + r[i].n + ', w = ' + r[i].w + ', p = ' + r[i].p);
/*      if (r[i].w > mx) {
            mx = r[i].w;
            ix = i;
        }*/
        if (i >= 9) break;
    }

    console.log('Time = ' + (t1 - t0) + ', N = ' + root.n);
    callback(r[ix].move, (r[ix].n / root.n) * 1000, t1 - t0);
}

function navigate(pos, dir, size) {
    const x = pos % size;
    const y = (pos / size) | 0;
    if (x == 0) {
        if (dir == -1) return null;
        if (dir == -size - 1) return null;
        if (dir == size - 1) return null;
    }
    if (x == size - 1) {
        if (dir == 1) return null;
        if (dir == -size + 1) return null;
        if (dir == size + 1) return null;
    }
    if (y == 0) {
        if (dir == -size) return null;
        if (dir == -size - 1) return null;
        if (dir == -size + 1) return null;
    }
    if (y == size - 1) {
        if (dir == size) return null;
        if (dir == size - 1) return null;
        if (dir == size + 1) return null;
    }
    return pos + dir;
}

function expand(board, size, group, player) {
    let dame = 0;
    for (let i = 0; i < group.length; i++) {
         _.each([1, -1, SIZE, -SIZE], function(dir) {
             const p = navigate(group[i], dir, size);
             if (p === null) return;
             if (_.indexOf(group, p) >= 0) return;
             if (board[p] * player < 0) return;
             if (board[p] * player > 0) {
                 group.push(p);
                 return;
             }
             dame++;
         });
    }
    return dame;
}

function checkGoal(board, player, size, move) {
    let captured = null;
    let dame = 0; let group = [move]; 
    _.each([1, -1, SIZE, -SIZE], function(dir) {
        if (captured !== null) return;
        const p = navigate(move, dir, size);
        if (p === null) return;
        if (board[p] * player > 0) return;
        if (board[p] * player < 0) {
            let g = [p];
            const d = expand(board, size, g, -player);
            if (d == 0) captured = p;
            return;
        }
        dame++;
    });
    if (captured !== null) return 1;
    if (dame == 0) {
        dame = expand(board, size, group, player);
        if (dame == 0) return -1;
    }
    return 0;
}

Ai.prototype.setContext = function(ctx, board) {
  if (this.parent) {
      this.parent.setContext(ctx, board);
  }
  ctx.timestamp = Date.now();
  ctx.board  = board;
  inProgress = false;
  resultMove = null;
  player     = board.player;
}

var callback = function(bestMove, value, timeTaken) {
  resultMove = FormatMove(bestMove, SIZE);  
  inProgress = false;
  console.log('MCTS: ' + resultMove + ', value = ' + value + ', time = ' + timeTaken);
  if (Dagaz.AI.callback) {
      Dagaz.AI.callback(resultMove);
  }
}

Ai.prototype.getMove = function(ctx) {
  var moves = Dagaz.AI.generate(ctx, ctx.board);
  if (moves.length == 0) {
      return { done: true, ai: "nothing" };
  }
  var setup = Dagaz.Model.getSetup(ctx.design, ctx.board);
  var result = setup.match(/[?&]setup=(.*)/);
  if (resultMove !== null) {
      var bestMove = null;
      _.each(moves, function(move) {
          var x = move.toString() + ' ';
          if (x.startsWith(resultMove + ' ')) {
              bestMove = move;
          }
      });
      if (bestMove !== null) {
          return {
              done: true,
              move: bestMove,
              time: Date.now() - ctx.timestamp,
              ai:  "mcts"
         };
      }
      if (this.parent) {
          return this.parent.getMove(ctx);
      }
  }
  if (inProgress) {
      return {
           done: false,
           time: Date.now() - ctx.timestamp,
           ai:  "mcts"
      };
  }
  if (result) {
      inProgress = true;
      var fen = result[1];
      setTimeout(function () {
         if (fen == '9/9/9/9/9/9/9/9/9') {
             callback(40, 1000, Date.now() - ctx.timestamp);
         } else {
             findMove(fen, ctx.board.player == 1 ? 1 : -1, callback);
         }
      }, 100);
      return {
           done: false,
           time: Date.now() - ctx.timestamp,
           ai:  "mcts"
      };
  }
  if (this.parent) {
      return this.parent.getMove(ctx);
  }
}

})();
