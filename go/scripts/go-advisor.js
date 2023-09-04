(function() {

Dagaz.AI.inProgress = false;
Dagaz.AI.SERVICE = "https://games.dtco.ru/api/";
Dagaz.AI.sid = null;

var result = null;

var showResult = function() {
  var view = Dagaz.Controller.app.view;
  var b = []; var s = []; var rb = []; var rs = []; 
  for (var i = 0; i < result.length; i++) {
       var pos = Dagaz.Model.stringToPos(result[i].move);
       if (Math.abs(result[i].weight) > 500) {
           if (result[i].weight < 0) {
               rb.push(pos);
           } else {
               b.push(pos);
           }
       } else {
           if (result[i].weight < 0) {
               rs.push(pos);
           } else {
               s.push(pos);
           }
       }
  }
  view.markPositions(5, b); view.markPositions(7, rb);
  view.markPositions(6, s); view.markPositions(8, rs);
  if (Dagaz.AI.checkForbidden && Dagaz.AI.getBoard) {
      const board = Dagaz.AI.getBoard(Dagaz.Controller.app.board);
      forbidden = []; let hints = []; let small = [];
      Dagaz.AI.checkForbidden(board, forbidden, hints, small);
      hints = _.difference(hints, forbidden);
      view.markPositions(9, hints);
      view.markPositions(10, small);
  }
}

Dagaz.AI.clearAdvisor = function() {
  var view = Dagaz.Controller.app.view;
  view.markPositions(5, []); view.markPositions(7, []);
  view.markPositions(6, []); view.markPositions(8, []);
  view.markPositions(9, []); view.markPositions(10,[]);
}

Dagaz.AI.getSid = function(callback, ctx, setup) {
  $.ajax({
     url: Dagaz.AI.SERVICE + "ai",
     type: "GET",
     crossDomain: true,
     dataType: "json",
     success: function(data) {
         Dagaz.AI.sid = data.sid;
         Dagaz.AI.inProgress = false;
         if (callback) {
             callback(ctx, setup);
         }
     },
     error: function() {
         console.log('Auth: Error!');
         window.location = '/';
     },
     statusCode: {
        500: function() {
             console.log('Auth: Internal Error!');
             window.location = '/';
        }
     }
  });
}

/*Dagaz.AI.putFit = function(setup, move) {
  $.ajax({
     url: Dagaz.AI.SERVICE + "ai/fit",
     type: "PUT",
     crossDomain: true,
     data: {
         variant_id: 2,
         setup: setup,
         move: move
     },
     dataType: "json",
     success: function(data) {
         Dagaz.AI.inProgress = false;
     },
     statusCode: {
        500: function() {
             console.log('Auth: Internal Error!');
             window.location = '/';
        }
     }
  });
}*/

Dagaz.AI.advisor = function(setup) {
  if (result !== null) {
      showResult();
      result = null;
      return true;
  }
  if (Dagaz.AI.inProgress) return false;
  Dagaz.AI.inProgress = true;
  if (Dagaz.AI.sid === null) {
      Dagaz.AI.getSid();
      return false;
  }
  console.log('sid = ' + Dagaz.AI.sid + ', setup = ' + setup);
  $.ajax({
     url: Dagaz.AI.SERVICE + "ai",
     type: "PUT",
     crossDomain: true,
     data: {
         sid: Dagaz.AI.sid,
         setup: setup,
         variant_id: 2,
         coeff: 5
     },
     dataType: "json",
     success: function(data) {
         if (data.length > 0) {
             result = data;
         }
         Dagaz.AI.inProgress = false;
     },
     statusCode: {
        404: function() {
             result = null;
             Dagaz.AI.inProgress = false;
        },
        500: function() {
             console.log('Auth: Internal Error!');
             window.location = '/';
        }
     }
  });
  return false;
}

Dagaz.AI.getBoard = function(board) {
  let r = new Int32Array(Dagaz.Model.WIDTH * Dagaz.Model.HEIGHT);
  for (let pos = 0; pos < Dagaz.Model.WIDTH * Dagaz.Model.HEIGHT; pos++) {
       let piece = board.getPiece(pos);
       if (piece === null) continue;
       if (piece.player == board.player) {
           r[pos] = 1;
       } else {
           r[pos] = -1;
       }
  }
  return r;
}

function isFriend(x) {
    return x > 0.1;
}

function isEnemy(x) {
    return x < -0.1;
}

function isEmpty(x) {
    return !isFriend(x) && !isEnemy(x);
}

function navigate(pos, dir) {
    let r = +pos + +dir;
    if (r >= Dagaz.Model.WIDTH * Dagaz.Model.HEIGHT) return -1;
    if ((dir > -2) && (dir < 2)) {
        if (((pos / Dagaz.Model.WIDTH) | 0) != ((r / Dagaz.Model.WIDTH) | 0)) return -1;
    }
    return r;
}

function analyze(board) {
    let m = []; let r = []; let done = [];
    for (let p = 0; p < Dagaz.Model.WIDTH * Dagaz.Model.HEIGHT; p++) {
        if (!isEmpty(board[p])) continue;
        if (_.indexOf(done, p) >= 0) continue;
        let g = [p]; let c = null; let e = [];
        for (let i = 0; i < g.length; i++) {
            m[ g[i] ] = r.length;
            done.push(g[i]);
            _.each([1, -1, Dagaz.Model.WIDTH, -Dagaz.Model.WIDTH], function(dir) {
                let q = navigate(g[i], dir);
                if (q < 0) return;
                if (_.indexOf(g, q) >= 0) return;
                if (isEnemy(board[q])) {
                    if (c === null) c = -1;
                    if (isFriend(c)) c = 0;
                    if (_.indexOf(e, q) < 0) e.push(q);
                    return;
                }
                if (isFriend(board[q])) {
                    if (c === null) c = 1;
                    if (isEnemy(c)) c = 0;
                    if (_.indexOf(e, q) < 0) e.push(q);
                    return;
                }
                g.push(q);
            });
        }
        r.push({
            type:  0,
            group: g,
            color: c,
            edge:  e
        });
    }
    for (let p = 0; p < Dagaz.Model.WIDTH * Dagaz.Model.HEIGHT; p++) {
        if (_.indexOf(done, p) >= 0) continue;
        let f = isFriend(board[p]);
        let g = [p]; let d = []; let y = []; let e = [];
        for (let i = 0; i < g.length; i++) {
            m[ g[i] ] = r.length;
            done.push(g[i]);
            _.each([1, -1, Dagaz.Model.WIDTH, -Dagaz.Model.WIDTH], function(dir) {
                let q = navigate(g[i], dir);
                if (q < 0) return;
                if (_.indexOf(g, q) >= 0) return;
                if (isFriend(board[q])) {
                    if (!f) {
                        if (_.indexOf(e, q) < 0) e.push(q);
                        return;
                    } else {
                        if (_.indexOf(g, q) < 0) g.push(q);
                    }
                } else if (isEnemy(board[q])) {
                    if (f) {
                        if (_.indexOf(e, q) < 0) e.push(q);
                        return;
                    } else {
                        if (_.indexOf(g, q) < 0) g.push(q);
                    }
                } else {
                    if (_.indexOf(d, q) < 0) d.push(q);
                    let ix = m[q];
                    if (_.isUndefined(ix)) return;
                    if (!isEmpty(r[ix].type)) return;
                    if (f) {
                        if (isFriend(r[ix].color)) {
                            if (_.indexOf(y, q) < 0) y.push(q);
                            r[ix].isEye = true;
                        }
                    } else {
                        if (isEnemy(r[ix].color)) {
                            if (_.indexOf(y, q) < 0) y.push(q);
                            r[ix].isEye = true;
                        }
                    }
                }
            });
        }
        r.push({
            type:  f ? 1 : -1,
            group: g,
            dame:  d,
            eyes:  y,
            edge:  e
        });
    }
    return {
        map: m,
        res: r
    }
}

function isDead(board, a, pos) {
    let dame = 0; let ixs = [];
    _.each([1, -1, Dagaz.Model.WIDTH, -Dagaz.Model.WIDTH], function(dir) {
        let p = navigate(pos, dir);
        if (p < 0) return;
        if (isFriend(board[p])) {
            const ix = a.map[p];
            if (_.isUndefined(ix)) return;
            const d = a.res[ix].dame;
            if (_.isUndefined(d)) return;
            if (_.indexOf(ixs, ix) >= 0) return;
            ixs.push(ix);
            dame += d.length - 1;
            return;
        }
        if (isEnemy(board[p])) return;
        dame++;
    });
    return dame < 2;
}

function isSecondLine(board, pos) {
    let r = false;
    _.each([1, -1, Dagaz.Model.WIDTH, -Dagaz.Model.WIDTH], function(dir) {
        const p = navigate(pos, dir);
        if (p < 0) return;
        if (!isFriend(board[p])) return;
        const q = navigate(pos, -dir);
        if (q < 0) r = true;
    });
    return r;
}

function isDoubleAtari(a, pos) {
    let r = [];
    _.each([1, -1, Dagaz.Model.WIDTH, -Dagaz.Model.WIDTH], function(dir) {
        const p = navigate(pos, dir);
        if (p < 0) return;
        const ix = a.map[p];
        if (_.isUndefined(ix)) return;
        if (_.indexOf(r, ix) >= 0) return;
        if (!isEnemy(a.res[ix].type)) return;
        if (a.res[ix].dame.length > 2) return;
        r.push(ix);
    });
    return r.length > 1;
}

function isSecondLineAtariThreat(a, pos) {
    let e = 0; let d = 0; let b = 0;
    _.each([1, -1, Dagaz.Model.WIDTH, -Dagaz.Model.WIDTH], function(dir) {
        const p = navigate(pos, dir);
        if (p < 0) return;
        const ix = a.map[p];
        if (_.isUndefined(ix)) return;
        if (isEnemy(a.res[ix].type) || (isFriend(a.res[ix].type) && (a.res[ix].dame.length == 1))) {
            e++;
            return;
        }
        if (isEmpty(a.res[ix].type)) {
            const q = navigate(p, dir);
            if (q < 0) {
                b++;
            } else {
                d++;
            }
        }
    });
    return (e == 2) && (d == 1) && (b == 1);
}

function isFirstLine(pos) {
    let r = false;
    _.each([1, -1, Dagaz.Model.WIDTH, -Dagaz.Model.WIDTH], function(dir) {
        const p = navigate(pos, dir);
        if (p < 0) r = true;
    });
    return r;
}

Dagaz.AI.checkForbidden = function(board, forbidden, hints, small) {
    const a = analyze(board); 
    let m = null; let f = false;
    // Defence
    for (let i = 0; i < a.res.length; i++) {
         if (!isFriend(a.res[i].type)) continue;
         if (a.res[i].dame.length != 1) continue;
         if (isSecondLine(board, a.res[i].dame[0])) {
             forbidden.push(a.res[i].dame[0]);
             continue;
         }
         if (isDead(board, a, a.res[i].dame[0])) continue;
         if ((m !== null) && (m > a.res[i].group.length)) continue;
         m = a.res[i].group.length;
         if (hints.length > 0) {
             small.push(hints[0]);
             hints.length = 0;
         }
         hints.push(a.res[i].dame[0]);
    }
    // Capturing
    for (let i = 0; i < a.res.length; i++) {
        if (!isEnemy(a.res[i].type)) continue;
        if (a.res[i].dame.length != 1) continue;
        if ((m !== null) && (m > a.res[i].group.length)) continue;
        m = a.res[i].group.length;
        if (hints.length > 0) {
            small.push(hints[0]);
            hints.length = 0;
        }
        hints.push(a.res[i].dame[0]);
        f = true;
    }
    // Second line Atari
    for (let i = 0; i < a.res.length; i++) {
         if (!isEnemy(a.res[i].type)) continue;
         if (a.res[i].dame.length != 2) continue;
         let p = null;
         for (let j = 0; j < a.res[i].dame.length; j++) {
             if (isFirstLine(a.res[i].dame[j])) p = a.res[i].dame[j];
         }
         if (p === null) continue;
         _.each(_.without(a.res[i].dame, p), function(q) {
             if (hints.length > 0) {
                 small.push(q);
             } else {
                 hints.push(q);
             }
         });
    }
    for (let p = 0; p < Dagaz.Model.WIDTH * Dagaz.Model.HEIGHT; p++) {
        const ix = a.map[p];
        if (_.isUndefined(ix)) continue;
        if (!isEmpty(a.res[ix].type)) continue;
        // Eyes filling
        if (a.res[ix].isEye && (a.res[ix].group.length < 5)) {
            forbidden.push(p);
            continue;
        }
        // Atari threat
        if (isDead(board, a, p)) {
            if (_.indexOf(hints, p) < 0) forbidden.push(p);
            continue;
        }
        // Second line Atari threat
        if (isSecondLineAtariThreat(a, p)) {
            forbidden.push(p);
            continue;
        }
        if (f) continue;
        // Double Atari
        if (isDoubleAtari(a, p)) {
            if (hints.length > 0) {
                small.push(p);
            } else {
                hints.push(p);
            }
            continue;
        }
    }
    return a;
}

})();
