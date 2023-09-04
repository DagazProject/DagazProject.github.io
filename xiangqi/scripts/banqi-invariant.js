(function() {

var chinese = false;

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name == "banqi-invariant") {
      if (value == "chinese") chinese = true;
  } else {
      checkVersion(design, name, value);
  }
}

var getShadow = function(design, board) {
  var player = board.getValue(board.player);
  if (player === null) return [];
  if (_.isUndefined(board.shadow)) {
      board.shadow = [];
      _.each(design.allPositions(), function(pos) {
           var piece = board.getPiece(pos);
           if ((piece !== null) && (piece.type < 7)) {
               var value = +piece.type + 7;
               if (piece.player != player) {
                   value = -value;
               }
               board.shadow.push(value);
           }
      });
  }
  return board.shadow;
}

var isFriend = function(design, x) {
  return x > 0;
}

var isPiece = function(design, x, y) {
  return x == y;
}

var isAttacker = function(design, x, enemy) {
  if (x < 0) return false;
  if ((x == 13) && (enemy == 7)) return true;
  if (!chinese && (x == 7) && (enemy == 13)) return false;
  if (!chinese && (x == 12)) return false;
  return x <= enemy;
}

var isDefender = function(design, x, enemy, friend) {
  if (!isAttacker(design, x, enemy)) return false;
  return design.price[friend] <= design.price[enemy];
}

var estimate = function(design, board, p, y, z) {
  var shadow = getShadow(design, board);
  if (shadow.length == 0) return 0;
  var r = 0;
  _.each(shadow, function(x) {
      if (p(design, x, y, z)) r++;
  });
  return (100 * r) / shadow.length;
}

var getGoals = function(design, board) {
  var r = [];
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.type >= 7)) {
          r.push(pos);
      }
  });
  return {
      positions: r
  };
}

var getTargets = function(design, board, goals) {
  var r = {
      positions: []
  };
  if (!chinese) {
      r.map = [];
      _.each(goals.positions, function(pos) {
          _.each(design.allDirections(), function(dir) {
              var p = design.navigate(board.player, pos, dir);
              while (p !== null) {
                  if (board.getPiece(p) !== null) break;
                  p = design.navigate(board.player, p, dir);
              }
              if (p === null) return;
              p = design.navigate(board.player, p, dir);
              while (p !== null) {
                  var piece = board.getPiece(p);
                  if ((piece === null) || (piece.type == 12)) {
                      r.positions.push(p);
                      if (_.isUndefined(r.map[p])) {
                          r.map[p] = [];
                      }
                      r.map[p].push(pos);
                  }
                  if (piece !== null) break;
                  p = design.navigate(board.player, p, dir);
              }
          });
      });
  }
  return r;
}

var copy = function(list) {
  var r = [];
  _.each(list, function(x) {
      r.push(x);
  });
  return r;
}

var getTrace = function(design, board, dst, level) {
  var r = [];
  var pos = dst;
  while (pos !== null) {
      var current = level[pos];
      if (current == 0) return r;
      r.unshift(pos);
      var next = null;
      _.each(design.allDirections(), function(dir) {
          if (next === null) {
              var p = design.navigate(board.player, pos, dir);
              while (p !== null) {
                  if (_.isUndefined(level[p])) break;
                  if (level[p] < current) {
                      next = p;
                      break;
                  }
                  if (level[p] > current) break;
                  p = design.navigate(board.player, p, dir);
              }
          }
      });
      pos = next;
  }
  return null;
}

var getChainPrice = function(design, board, attacker, attacking, len) {
  var player = board.getValue(board.player);
  if ((player === null) || (attacker == null) || (attacking === null)) return 0;
  if (attacker.player == attacking.player) return 0;
  var isAttacking = isAttacker(design, +attacker.type, +attacking.type);
  var isAttacked  = isAttacker(design, +attacking.type, +attacker.type);
  if (!chinese && (attacker.type == 12)) {
      isAttacking = true;
      isAttacked  = (attacking.type == attacker.type) && (len == 1);
  }
  var price = 0;
  var f = (len % 2 == 0);
  if (attacker.player != player) f = !f;
  if (isAttacking) {
      if (isAttacked) {
          price = f ? (len - design.price[attacker.type]) : (design.price[attacking.type] - len);
      } else {
          price = design.price[attacking.type] - len;
          if (f) price = (price / 2) | 0;
      }
  } else {
      if (isAttacked) {
          price = len - design.price[attacker.type];
      }
  }
  return price;
}

var chainToStr = function(trace) {
  var r = "";
  _.each(trace, function(pos) {
      if (r.length != 0) {
          r = r + ",";
      }
      r = r + Dagaz.Model.posToString(pos);
  });
  return r;
}

var getChains = function(design, board) {
  var player = board.getValue(board.player);
  if (player === null) return [];
  if (_.isUndefined(board.chains)) {
      board.chains = [];
      var pieces   = getGoals(design, board);
      var targets  = getTargets(design, board, pieces);
      _.each(pieces.positions, function(pos) {
          var goals = pieces; var f = true;
          var piece = board.getPiece(pos);
          if (piece === null) return;
          if (!chinese && (piece.type == 12)) {
              goals = targets;
              f = false;
          }
          var group  = [ pos ];
          var level  = [];
          level[pos] = 0;
          for (var i = 0; i < group.length; i++) {
              if (_.indexOf(goals.positions, group[i]) >= 0) {
                  if (!f || (group[i] != pos))   {
                      if (_.isUndefined(board.chains[pos])) {
                          board.chains[pos] = [];
                      }
                      var t = getTrace(design, board, group[i], level);
                      if (!f) {
                          if (!_.isUndefined(goals.map[ group[i] ])) {
                              _.each(goals.map[ group[i] ], function(q) {
                                  var c = copy(t);
                                  c.push(q);
                                  var target = board.getPiece(q);
                                  if (target !== null) {
                                      var price = getChainPrice(design, board, piece, target, c.length);
                                      board.chains[pos].push({
                                          trace: c,
                                          price: price
                                      });
                                      console.log("Chain[C]: " + Dagaz.Model.posToString(pos) + " -> " + chainToStr(c) + ", price = " + price);
                                  }
                              });
                          }
                      } else {
                          var target = board.getPiece(group[i]);
                          if (target !== null) {
                              var price = getChainPrice(design, board, piece, target, t.length);
                              board.chains[pos].push({
                                  trace: t,
                                  price: price
                              });
                              console.log("Chain[L]: " + Dagaz.Model.posToString(pos) + " -> " + chainToStr(t) + ", price = " + price);
                          }
                      }
                  }
              }
              if ((i > 0) && (board.getPiece(group[i]) !== null)) continue;
              _.each(design.allDirections(), function(dir) {
                   p = design.navigate(board.player, group[i], dir);
                   while (p !== null) {
                        if (_.indexOf(group, p) >= 0) break;
                        group.push(p);
                        level[p] = level[ group[i] ] + 1;
                        if (f || (board.getPiece(p) !== null)) break;
                        p = design.navigate(board.player, p, dir);
                   }
              });
          }
      });
  }
  return board.chains;
}

var addWish = function(board, comment, price, src, dst) {
  if (_.isUndefined(board.wish[src])) {
      board.wish[src] = [];
  }
  if (_.isUndefined(dst)) dst = src;
  if (_.isUndefined(board.wish[src][dst])) {
      board.wish[src][dst] = price;
  } else {
      board.wish[src][dst] += price;
  }
  console.log("Wish [" + comment + "]: " + Dagaz.Model.posToString(src) + " - " + Dagaz.Model.posToString(dst) + " = " + price);
}

var isDefended = function(design, board, target, attacker, len) {
  var chains = getChains(design, board);
  for (var pos = 0; pos < design.positions.length; pos++) {
       if (!_.isUndefined(chains[pos])) {
           _.each(chains[pos], function(chain) {
               if (chain.trace.length <= len) {
                   var piece = board.getPiece(pos);
                   if ((piece !== null) && (piece.type != attacker.type) && isAttacker(design, +piece.type, +attacker.type)) return true;
               }
           });
       }
  }
  return false;
}

var getWish = function(design, board) {
  if (_.isUndefined(board.wish)) {      
      var player = board.getValue(board.player);
      if (player === null) return [];
      var chains   = getChains(design, board);
      board.wish   = [];
      var attacks  = [];
      _.each(design.allPositions(), function(pos) {
          if (!_.isUndefined(chains[pos])) {
              var piece = board.getPiece(pos);
              if ((piece === null) || (piece.type < 7)) return;
              if (piece.player == player) {
                  _.each(chains[pos], function(chain) {
                      if (chain.trace.length == 0) return;
                      var price = chain.price;
                      if ((chain.trace.length > 3) && (price > 0)) price /= 10;
                      var p = chain.trace[ chain.trace.length - 1];
                      if (isDefended(design, board, p, piece, chain.trace.length)) {
                          price -= design.price[piece.type];
                      } else {
                          if ((price > 0) && (chain.trace.length == 1)) price *= 10;
                      }
                      addWish(board, "1", price, pos, chain.trace[0]);
                  });
              } else {
                  var len = _.chain(chains[pos]).map(function(chain) {
                      return chain.trace.length;
                  }).min().value();
                  if ((len > 1) && (len < 4)) {
                      attacks.push(pos);
                  }
              }
          }
      });
      if (board.wish.length == 0) {
          var pFriend = estimate(design, board, isFriend);
          if (pFriend > 30) {
              var pCannon = estimate(design, board, isPiece, 12);
              var chain   = null;
              var maxp    = 0;
              _.each(attacks, function(pos) {
                  var piece = board.getPiece(pos);
                  if ((piece !== null) && (piece.player != player)) {
                      var p = estimate(design, board, isAttacker, +piece.type);
                      if (p > 30) {
                          if ((chain === null) || (p > maxp)) {
                               chain = _.min(chains[pos], function(chain) {
                                   return chain.trace.length;
                               });
                               maxp  = p;
                          }
                      }
                  }
              });
              if ((chain !== null) && (maxp > 50)) {
                 for (var ix = 0; ix < chain.trace - 1; ix++) {
                     _.each(design.allDirections(), function(dir) {
                          var p = design.navigate(board.player, chain.trace[ix], dir);
                          if (p !== null) {
                              var piece = board.getPiece(p);
                              if ((piece !== null) && (piece.type < 7)) {
                                  addWish(board, "2", chain.price * maxp, p);
                              }
                          }
                     });
                 }
              }
              _.each(design.allPositions(), function(pos) {
                  var piece = board.getPiece(pos);
                  if ((piece !== null) && (piece.player != player) && (piece.type >= 7)) {
                      _.each(design.allDirections(), function(dir) {
                          var p = design.navigate(board.player, pos, dir);
                          if (p !== null) {
                              var x = board.getPiece(p);
                              if ((x !== null) && (x.type < 7)) {
                                  var r = estimate(design, board, isAttacker, +piece.type);
                                  if (!chinese) {
                                      if (pCannon > 50) {
                                          r = 0;
                                      } else {
                                          if (piece.type == 12) r = 100;
                                      }
                                  }
                                  if (r > 50) {
                                      addWish(board, "3", design.price[piece.type] * r, p);
                                  }
                              }
                              if (!chinese && (piece.type != 12)) {
                                  while (x === null) {
                                      p = design.navigate(board.player, p, dir);
                                      if (p === null) return;
                                      x = board.getPiece(p);
                                  }
                                  p = design.navigate(board.player, p, dir);
                                  if (p === null) return;
                                  x = board.getPiece(p);
                                  while (x === null) {
                                      p = design.navigate(board.player, p, dir);
                                      if (p === null) return;
                                      x = board.getPiece(p);
                                  }
                                  if (x.type < 7) {
                                      addWish(board, "4", design.price[piece.type] * pCannon, p);
                                  }
                              }
                          }
                      });
                  }
              });
              var targets = []; var enemies = [];
              _.each(design.allPositions(), function(pos) {
                  if (!_.isUndefined(chains[pos])) {
                      var piece = board.getPiece(pos);
                      if ((piece !== null) && (piece.player != player) && (piece.type >= 7)) {
                          _.each(chains[pos], function(chain) {
                              if (chain.trace.length == 1) {
                                  var p  = chain.trace[0];
                                  var ix = _.indexOf(targets, p);
                                  if (ix < 0) {
                                      ix = targets.length;
                                  }
                                  targets[ix] = p;
                                  if (_.isUndefined(enemies[ix]) || (enemies[ix] > piece.type)) {
                                      enemies[ix] = +piece.type;
                                  }
                              }
                          });
                      }
                  }
              });
              for (var ix = 0; ix < targets.length; ix++) {
                  var pos     = targets[ix];
                  var emp     = [];
                  var piece   = board.getPiece(pos);
                  var pDefend = estimate(design, board, isDefender, enemies[ix], +piece.type);
                  if (piece === null) continue;
                  _.each(design.allDirections(), function(dir) {
                      var p = design.navigate(board.player, pos, dir);
                      if (p !== null) {
                          var x = board.getPiece(p);
                          if (x !== null) {
                              if ((x.type < 7) && (pDefend > 50)) {
                                  addWish(board, "5", design.price[piece.type], p);
                              }
                          } else {
                              emp.push(p);
                          }
                      }
                  });
                  _.each(emp, function(p) {
                      addWish(board, "6", design.price[piece.type], pos, p);
                  });
              }
          }
      }
  }
  return board.wish;
}

Dagaz.AI.heuristic = function(ai, design, board, move) {
  var wish = getWish(design, board);
  if (move.isSimpleMove() &&
      !_.isUndefined(wish[ move.actions[0][0][0] ]) &&
      !_.isUndefined(wish[ move.actions[0][0][0] ][ move.actions[0][1][0] ])) {
      return wish[ move.actions[0][0][0] ][ move.actions[0][1][0] ];
  }
  return 0;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = board.game.design;
  _.each(board.moves, function(move) {
      if ((move.actions.length > 0) && (move.actions[0][0] !== null) && (move.actions[0][1] !== null) && (move.actions[0][0][0] != move.actions[0][1][0])) {
           var pos = move.actions[0][0][0];
           var piece = board.getPiece(pos);
           if (piece === null) return;
           _.each(move.actions, function(a) {
               if ((a[0] !== null) && (a[1] !== null) && (a[0][0] != a[1][0])) {
                   var target = board.getPiece(a[1][0]);
                   if (target === null) return;
                   if ((target.player == piece.player) || (target.type < 7)) {
                       move.failed = true;
                       return;
                   }
                   if (!chinese && (piece.type == 7) && (target.type == 13)) {
                       move.failed = true;
                       return;
                   }
                   if (target.type < piece.type) {
                       if ((piece.type == 13) && (target.type == 7)) return;
                       if (!chinese && (piece.type == 12) && (target.type >= 7)) return;
                       move.failed = true;
                       return;
                   }
               }
           });
      }
  });
  CheckInvariants(board);
}

})();
