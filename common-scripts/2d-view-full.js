(function() {

Dagaz.Controller.Event = {
  MOUSE_MOVE:           0,
  MOUSE_LKM_DOWN:       1,
  MOUSE_LKM_UP:         2,
  MOUSE_PKM_DOWN:       3,
  MOUSE_PKM_UP:         4,
  MOUSE_WHEEL:          5,
  KEY_PRESSED:          6,
  MARK_TARGETS:         7,
  MARK_CAPTURES:        8,
  MARK_SELECTED:        9,
  STATE_CHANGED:        10,
  STATUS_CHANGED:       11,
  TURN_CHANGED:         12
};

var isValid             = false;

Dagaz.View.SHIFT_X      = 0;
Dagaz.View.SHIFT_Y      = 0;
Dagaz.View.STRIKE_ALPHA = 0.5;
Dagaz.View.STEP_CNT     = 5;

Dagaz.View.NORMAL_DIR   = 0;
Dagaz.View.REVERSE_DIR  = 1;

function Grid(region, sx, sy, dx, dy) {
  this.r  = region;
  this.sx = sx; this.sy = sy;
  this.dx = dx; this.dy = dy;
  this.s  = [];
}

function Region(isActive, draw, events) {
  this.d = draw; this.e = events;
  this.sx = 0; this.sy = 0;
  this.isActive  = isActive;
  this.regions   = [];
  this.boards    = [];
  this.positions = [];
  this.frames    = [];
}

Region.prototype.addFrame = function(x, y, dx, dy, turns) {
  this.frames.push({
      t:  turns,
      x:  x,
      y:  y,
      dx: dx,
      dy: dy
  });
}

Region.prototype.addRegion = function(x, y, dx, dy, isActive, turns, draw, events) {
  if (_.isUndefined(isActive)) isActive = true;
  var r = new Region(isActive, draw, events);
  r.addFrame(x, y, dx, dy, turns);
  r.view   = this.view;
  r.parent = this;
  r.zValue = this.regions.length;
  this.regions.push(r);
  return r;
}

Region.prototype.addBoard = function(name, turns, selector, draw) {
  if (!_.isUndefined(selector) && (selector != Dagaz.Model.getResourceSelector())) return;
  var board = {
      h: document.getElementById(name),
      t: turns,
      d: draw
  };
  this.boards.push(board);
}

Region.prototype.findPosition = function(name, isNotRecursive) {
  for (var i = 0; i < this.positions.length; i++) {
       if (this.positions[i].name == name) return this.positions[i];
  }
  if (isNotRecursive) return null;
  for (var i = 0; i < this.regions.length; i++) {
       var r = this.regions[i].findPosition(name);
       if (r !== null) return r;
  }
  return null;
}

Region.prototype.locatePosition = function(pos) {
  var r = null;
  _.each(pos.c, function(loc) {
      if (r !== null) return;
      if (!_.isUndefined(loc.t)) {
          if (_.indexOf(loc.t, this.view.turn) < 0) return;
      }
      r = loc;
  }, this);
  return r;
}

Region.prototype.findAndLocate = function(ix) {
  var name = Dagaz.Model.posToString(ix, this.view.design);
  var pos = this.findPosition(name);
  if (pos === null) return null;
  return this.locatePosition(pos);
}

Region.prototype.addPosition = function(name, x, y, dx, dy, turns, selector, draw) {
  if (!_.isUndefined(selector) && (selector != Dagaz.Model.getResourceSelector())) return;
  var pos = this.findPosition(name, true);
  if (pos === null) {
      pos = {
          name: name,
          r:    this,
          c:    [],
          d:    draw
      };
      this.positions.push(pos);
  }
  pos.c.push({
      p:    pos,
      t:    turns,
      x:    x,
      y:    y,
      dx:   dx,
      dy:   dy
  });
}

Grid.prototype.addScale = function(scale, sx, sy) {
  this.s.push({
     s: scale.split('/'),
     x: sx,
     y: sy
  });
}

Grid.prototype.addTurns = function(dir, turns, selector, draw) {
  var ix = []; var n = 1;
  for (var i = 0; i < this.s.length; i++) {
       ix.push(0);
       n = n * this.s[i].s.length;
  }
  for (; n > 0; n--) {
       var name = ''; 
       var x = this.sx; var y = this.sy; 
       for (var i = 0; i < ix.length; i++) {
            if (dir == Dagaz.View.NORMAL_DIR) {
                name = name + this.s[i].s[ix[i]];
            } else {
                var l = this.s[i].s.length - 1;
                name = name + this.s[i].s[l - ix[i]];
            }
            x += this.s[i].x * ix[i];
            y += this.s[i].y * ix[i];
       }
//     console.log('view.defPosition("' + name + '", ' + x + ', ' + y + ', ' + this.dx + ', ' + this.dy + ')');
       this.r.addPosition(name, x, y, this.dx, this.dy, turns, selector, draw);
       for (var i = 0; i < ix.length; i++) {
            if (ix[i] < this.s[i].s.length - 1) {
                ix[i]++;
                break;
            } else {
                ix[i] = 0;
            }
       }
  }
}

Region.prototype.addGrid = function(sx, sy, dx, dy) {
  var g = new Grid(this, sx, sy, dx - sx, dy - sy);
  return g;
}

Region.prototype.scrollX = function(dx) {
  this.sx += dx;
  if (this.sx < 0) this.sx = 0;
  this.view.invalidate();
}

Region.prototype.scrollY = function(dy) {
  this.sy += dy;
  if (this.sy < 0) this.sy = 0;
  this.view.invalidate();
}

Region.prototype.clearX = function() {
  if (this.sx == 0) return;
  this.sx = 0;
  this.view.invalidate();
}

Region.prototype.clearY = function() {
  if (this.sy == 0) return;
  this.sy = 0;
  this.view.invalidate();
}

Region.prototype.isLoaded = function() {
  for (var i = 0; i < this.regions.length; i++) {
       if (!this.regions[i].isLoaded()) return false;
  }
  for (var i = 0; i < this.boards.length; i++) {
       var image = this.boards[i].h;
       if (!image.complete || (image.naturalWidth == 0)) return false;
       this.boards[i].dx = image.naturalWidth;
       this.boards[i].dy = image.naturalHeight;
  }
  return true;
}

Region.prototype.close = function() {
  this.isActive = false;
}

Region.prototype.open = function() {
  if (!_.isUndefined(this.parent)) {
       var p = this.parent;
       var regions = [];
       for (var i = 0; i < this.regions.length; i++) {
            var r = this.regions[i];
            if (r.zValue != this.zValue) {
                r.zValue = regions.length;
                regions.push(r);
            }
       }
       this.zValue = regions.length;
       regions.push(this);
       p.regions = regions;
  }
  this.isActive = true;
}

var drawMark = function(ctx, x, y, dx, dy) {
  x += (dx / 2) | 0;
  y += (dy / 2) | 0;
  var r = dx / 4;
  if (Math.abs(dy - dx) > 10) {
      r = Math.min(dy, dx) / 2;
  }
  if (!_.isUndefined(Dagaz.View.MARK_R)) {
      r = Dagaz.View.MARK_R;
      if (r == 0) return;
  }
  ctx.beginPath();
  ctx.fillStyle = "#00AA00";
  ctx.arc(x + Dagaz.View.SHIFT_X, y + Dagaz.View.SHIFT_Y, r, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();
}

var isBadFrame = function(view, region, c, dx, dy) {
  if (!_.isUndefined(c.t)) {
      if (_.indexOf(c.t, view.turn) < 0) return true;
  }
  if (c.x - region.sx < 0) return true;
  if (c.y - region.sy < 0) return true;
  if (c.x + c.dx - region.sx >= dx) return true;
  if (c.y + c.dy - region.sy >= dy) return true;
  return false;
}

Region.prototype.draw = function(ctx, x, y, dx, dy) {
  if (!this.isActive) return;
  if (!_.isUndefined(this.d)) {
       this.d(ctx, this);
       return;
  }
  _.each(this.boards, function(board) {
      if (!_.isUndefined(board.t)) {
          if (_.indexOf(board.t, this.view.turn) < 0) return;
      }
      ctx.drawImage(board.h, x, y);
      if (!_.isUndefined(board.d)) {
          board.d(ctx, this, board);
      }
  }, this);
  _.each(this.positions, function(pos) {
     if (!_.isUndefined(pos.d)) {
         pos.d(ctx, this, pos);
     }
  }, this);
  _.each(this.positions, function(pos) {
     if (_.isUndefined(pos.setup)) return;
     if (pos.setup.hints.length > 1) return;
     var isDone = false;
     _.each(pos.c, function(c) {
         if (isDone) return;
         if (isBadFrame(this.view, this, c, dx, dy)) return;
         if (!_.isUndefined(pos.setup)) {
             pos.setup.piece.d(ctx, this, pos, x + c.x + pos.setup.x - this.sx, y + c.y + pos.setup.y - this.sy);
         }
         isDone = true;
     }, this);
  }, this);
  _.each(this.positions, function(pos) {
     if (_.isUndefined(pos.setup)) return;
     if (pos.setup.hints.length < 2) return;
     pos.setup.x = pos.setup.hints.shift();
     pos.setup.y = pos.setup.hints.shift();
     var isDone = false;
     _.each(pos.c, function(c) {
         if (isDone) return;
         if (isBadFrame(this.view, this, c, dx, dy)) return;
         if (!_.isUndefined(pos.setup)) {
             pos.setup.piece.d(ctx, this, pos, x + c.x + pos.setup.x - this.sx, y + c.y + pos.setup.y - this.sy);
         }
         isDone = true;
     }, this);
  }, this);
  _.each(this.positions, function(pos) {
     var isDone = false;
     _.each(pos.c, function(c) {
         if (isDone) return;
         if (isBadFrame(this.view, this, c, dx, dy)) return;
         if (!_.isUndefined(this.view.markTargets) && (_.indexOf(this.view.markTargets, pos.name) >= 0)) {
             drawMark(ctx, x + c.x - this.sx, y + c.y - this.sy, c.dx, c.dy);
         }
         isDone = true;
     }, this);
  }, this);
  _.each(this.regions, function(r) {
     _.each(r.frames, function(w) {
         if (!_.isUndefined(w.t)) {
             if (_.indexOf(w.t, this.view.turn) < 0) return;
         }
         if (w.x + w.dx - this.sx < 0) return;
         if (w.y + w.dy - this.sy < 0) return;
         if (w.x - this.sx >= dx) return;
         if (w.y - this.sy >= dy) return;
         r.draw(ctx, x + w.x - this.sx, y + w.y - this.sy);
     }, this);
  }, this);
}

var inRect = function(obj, x, y) {
  return (x >= obj.x) &&
         (y >= obj.y) &&
         (x < obj.x + obj.dx) &&
         (y < obj.y + obj.dy);
}

Region.prototype.send = function(code, event, x, y, callback) {
  var f = false;
  if (!this.isActive) return false;
  _.each(this.frames, function(w) {
      if (!_.isUndefined(w.t)) {
          if (_.indexOf(w.t, this.view.turn) < 0) return;
      }
      var wx = w.x; var wy = w.y;
      if (_.isUndefined(x) || _.isUndefined(y) || inRect(w, x, y)) {
          if (!_.isUndefined(this.e)) {
              f = this.e(code, event, x - this.sz, y - this.sy, callback);
              if (f) return;
          }
          _.each(this.regions.reverse(), function(r) {
             if (f) return;
             f = r.send(code, event, 
                 _.isUndefined(x) ? x : x - this.sx/* - w.x*/, 
                 _.isUndefined(y) ? y : y - this.sy/* - w.y*/, 
                 callback);
          }, this);
          if (!_.isUndefined(x) && !_.isUndefined(y)) {
              _.each(this.positions, function(pos) {
                 if (f) return;
                 _.each(pos.c, function(w) {
                     if (!_.isUndefined(w.t)) {
                         if (_.indexOf(w.t, this.view.turn) < 0) return;
                     }
                     if (inRect(w, x - this.sx - wx, y - this.sy - wy)) {
                         f = callback(this.view.controller, code, event, x, y, pos);
                     }
                 }, this);
              }, this);
          }
      }
  }, this);
  return f;
}

function View(design) {
  this.design = design;
  this.root = new Region(true);
  this.root.addFrame(0, 0, canvas.width, canvas.height);
  this.root.view = this;
  this.pieces = [];
  this.turn = 0;
}

Dagaz.View.getView = function(design) {
  if (_.isUndefined(Dagaz.View.view)) {
      Dagaz.View.view = new View(design);
  }
  return Dagaz.View.view;
}

var drawPiece = function(ctx, region, pos, x, y) {
  var isSaved = false;
  var view  = region.view;
  var piece = pos.setup.piece;
  var l = region.locatePosition(pos);
  if (l === null) return;
  if (Dagaz.Model.showCaptures) {
      var ix = Dagaz.Model.stringToPos(pos.name, view.design);
      if (!_.isUndefined(this.markCaptures) && (_.indexOf(this.markCaptures, ix) >= 0)) {
          ctx.save();
          ctx.globalAlpha = Dagaz.View.STRIKE_ALPHA;
          isSaved = true;
      }
  }
  x += (l.dx - piece.dx) / 2 | 0;
  y += (l.dy - piece.dy) / 2 | 0;
  ctx.drawImage(piece.h, x, y, piece.dx, piece.dy);
  if (isSaved) {
      ctx.restore();
  }
}

View.prototype.addPiece = function(name, draw) {
  if (_.isArray(name)) {
      _.each(name, function(n) {
         this.addPiece(n, draw);
      }, this);
      return;
  }
  var piece = {
      n: name,
      h: document.getElementById(name),
      d: _.isUndefined(draw) ? drawPiece : draw
  };
  this.pieces.push(piece);
}

View.prototype.findPiece = function(name) {
  for (var i = 0; i < this.pieces.length; i++) {
       if (this.pieces[i].n == name) return this.pieces[i];
  }
  return null;
}

View.prototype.isLoaded = function() {
  if (_.isUndefined(this.allLoaded)) {
      if (!this.root.isLoaded()) return false;
      for (var i = 0; i < this.pieces.length; i++) {
           var image = this.pieces[i].h;
           if (!image.complete || (image.naturalWidth == 0)) return false;
           this.pieces[i].dx = image.naturalWidth;
           this.pieces[i].dy = image.naturalHeight;
      }
      this.allLoaded = true;
  }
  return this.allLoaded;
}

View.prototype.addSetup = function(name, piece, model) {
  var pos = this.root.findPosition(name);
  if (pos !== null) {
      pos.setup = {
          model: model,
          piece: piece,
          hints: [],
          x: 0, y: 0
      };
      this.invalidate();
  }
}

View.prototype.setup = function(board) {
  _.each(this.design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if (piece === null) return;
      var name = Dagaz.Model.posToString(pos, this.design);
//    console.log(name + ": " + piece.getOwner() + piece.getType());
      this.addSetup(name, this.findPiece(piece.getOwner() + piece.getType()), piece);
  }, this);
}

View.prototype.apply = function(move) {
  if (!_.isUndefined(this.move)) return false;
  this.move = move;
  this.step = 0;
  this.changes = [];
  return true;
}

View.prototype.createChanges = function() {
  this.step++;
  _.each(this.move.actions, function(a) {
       if (a[3] != this.step) return;
       var o = null; var n = null;
       var piece = null; var model = null;
       if (a[0] !== null) {
           o = this.root.findAndLocate(a[0][0]);
           if (o === null) return;
           if (o.p.setup) {
               piece = o.p.setup.piece;
               model = o.p.setup.model;
           }
       }
       if (a[1] !== null) {
           n = this.root.findAndLocate(a[1][0]);
           if (n === null) return;
       }
       if (a[2] !== null) {
           var name = a[2][0].getOwner() + a[2][0].getType();
           piece = this.findPiece(name);
           if (piece === null) return;
           model = a[2][0];
       }
       var c = 0;
       if ((o !== null) && (n !== null)) {
           o.p.setup.hints = [];
           o.p.setup.x = 0; o.p.setup.y = 0;
           if (!_.isUndefined(this.move.hints)) {
                for (var i = 0; i < this.move.hints.length; i++) {
                     if (_.isObject(this.move.hints[i])) {
                         o.p.setup.hints.push(this.move.hints[i].x);
                         o.p.setup.hints.push(this.move.hints[i].y);
                     } else {
                         var loc = this.root.findAndLocate(this.move.hints[i]);
                         if (loc !== null) {
                             o.p.setup.hints.push(loc.x - o.x);
                             o.p.setup.hints.push(loc.y - o.y);
                         }
                     }
                     c++;
                }
           } else {
                c = Dagaz.View.STEP_CNT;
                var dx = ((n.x - o.x) / c) | 0;
                var dy = ((n.y - o.y) / c) | 0;
                var x = 0; var y = 0;
                for (var i = 0; i < c; i++) {
                     x += dx; y += dy;
                     o.p.setup.hints.push(x);
                     o.p.setup.hints.push(y);
                }
          }
       }
       this.changes.push({
          c: c,
          o: o,
          n: n,
          p: piece,
          m: model
       });
  }, this);
}

View.prototype.animate = function() {
  if (!_.isUndefined(this.changes) && !_.isUndefined(this.move)) {
       var f = true;
       _.each(this.changes, function(c) {
           if ((c.c <= 2) && (c.n !== null) && (c.o !== null) && c.n.p.setup) {
               delete c.n.p.setup;
           }
           if (c.c <= 1) return;
           c.c--;
           f = false;
       });
       if (f) {
           _.each(this.changes, function(c) {
                if ((c.o !== null) && !_.isUndefined(c.o.p.setup)) {
                    delete c.o.p.setup;
                }
                if (c.n === null) return;
                if (c.p === null) return;
                c.n.p.setup = {
                    model: c.m,
                    piece: c.p,
                    hints: [],
                    x: 0, y: 0
                };
           });
           this.changes = [];
           this.createChanges();
           if (this.changes.length == 0) {
               delete this.changes;
               delete this.move;
               if (this.controller.done) {
                   this.controller.done();
               }
           }
       }
       this.invalidate();
  }
}

View.prototype.draw = function() {
  if (!this.isLoaded()) return;
  this.animate();
  if (isValid) return;
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, this.root.dx, this.root.dy);
  this.root.draw(ctx, 0, 0, this.root.dx, this.root.dy);
  isValid = true;
}

View.prototype.send = function(code, event, x, y, callback) {
  if (code == Dagaz.Controller.Event.MARK_TARGETS) {
      this.markTargets = event;
      this.invalidate();
      return true;
  }
  if (code == Dagaz.Controller.Event.MARK_CAPTURES) {
      this.markCaptures = event;
      return true;
  }
  if (code == Dagaz.Controller.Event.MARK_SELECTED) {
      this.markSelected = event;
      return true;
  }
  if (code == Dagaz.Controller.Event.STATE_CHANGED) {
      this.state = event;
      return true;
  }
  if (code == Dagaz.Controller.Event.STATUS_CHANGED) {
      this.status = event;
      return true;
  }
  if (code == Dagaz.Controller.Event.TURN_CHANGED) {
      this.turn = event;
      this.invalidate();
      return true;
  }
  return this.root.send(code, event, x, y, callback);
}

View.prototype.invalidate = function() {
   isValid = false;
}

View.prototype.setController = function(controller) {
  this.controller = controller;
}

})();
