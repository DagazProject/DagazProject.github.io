(function() {

Dagaz.View.SHIFT_X      = 0;
Dagaz.View.SHIFT_Y      = 0;

Dagaz.View.STRIKE_ALPHA = 0.5;
Dagaz.View.DROPS_ALPHA  = 0.5;

Dagaz.View.HINT_STEPS   = 1;

var minZ  = 1;
var maxZ  = 1;
var currZ = 1;

Dagaz.View.markType = {
   TARGET:    0,
   ATTACKING: 1,
   GOAL:      2,
   CURRENT:   3,
   KO:        4
};

Dagaz.View.maxSteps = 3;
Dagaz.View.STEP_CNT = 3;

var self            = null;
var isConfigured    = false;
var isValid         = false;
var mouseX          = 0;
var mouseY          = 0;
var mousePressed    = false;
var hintedPiece     = null;
var fromPos         = null;
var deferred        = [];
var blink           = 0;

Dagaz.View.blink = [1, 0, -1, 0];

Dagaz.View.configure = function(view) {}

function View2D() {
  this.pos     = [];
  this.res     = [];
  this.back    = [];
  this.piece   = [];
  this.board   = [];
  this.setup   = [];
  this.target  = [];
  this.strike  = [];
  this.goal    = [];
  this.changes = [];
  this.vectors = [];
  this.current = [];
  this.drops   = [];
  this.ko      = [];
  this.buttons = [];
}

Dagaz.View.getView = function() {
  if (_.isUndefined(Dagaz.View.view)) {
      Dagaz.View.view = new View2D();
  }
  return Dagaz.View.view;
}

Dagaz.View.inRect = function(view, pos, x, y) {
  return (currZ == view.pos[pos].z) &&
         (x > view.pos[pos].x) &&
         (y > view.pos[pos].y) &&
         (x < view.pos[pos].x + view.pos[pos].dx) &&
         (y < view.pos[pos].y + view.pos[pos].dy);
}

Dagaz.View.pointToPieces = function(view, x, y) {
  var list = _.chain(view.setup)
   .map(function(piece) {
       return +piece.pos;
    })
   .filter(function(pos) {
      return Dagaz.View.inRect(view, pos, x, y);
    })
   .sortBy(function(pos) {
       return -pos;
    })
   .value();
}

View2D.prototype.pointToPieces = function(x, y) {
  return Dagaz.View.pointToPieces(this, x, y);
}

Dagaz.View.pointToPositions = function(view, x, y) {
  return _.chain(_.range(view.pos.length))
   .filter(function(pos) {
      return Dagaz.View.inRect(view, pos, x, y);
    })
   .value();
}

View2D.prototype.pointToPositions = function(x, y) {
  return Dagaz.View.pointToPositions(this, x, y);
}

var posToIx = function(view, pos) {
  for (var i = 0; i < view.setup.length; i++) {
       if (view.setup[i].pos == pos) {
           return i;
       }
  }
  return null;
}

View2D.prototype.isEmpty = function(pos) {
  return posToIx(this, pos) === null;
}

View2D.prototype.setDrops = function(name, positions) {
  this.drops = [];
  if (!_.isUndefined(this.piece[name])) {
      _.each(positions, function(p) {
          if (p <= this.pos.length) {
              this.drops.push({
                  piece: this.piece[name],
                  position: this.pos[p]
              });
          }
      }, this);
  }
}

View2D.prototype.clearDrops = function() {
  this.drops = [];
}

View2D.prototype.defButton = function(ix, x, y, dx, dy) {
  this.buttons.push({
      ix:   ix,
      x:    x,
      y:    y,
      dx:   dx,
      dy:   dy
  });
}

View2D.prototype.defPosition = function(name, x, y, dx, dy, selector) {
  minZ = Math.min(minZ, selector);
  maxZ = Math.max(maxZ, selector);
  this.pos.push({
      name: name,
      x:    x,
      y:    y,
      dx:   dx,
      dy:   dy,
      z:    selector
  });
}

View2D.prototype.defBoard = function(img, x, y, selector, turns) {
  minZ = Math.min(minZ, selector);
  maxZ = Math.max(maxZ, selector);
  var board = {
     h: document.getElementById(img),
     t: turns,
     x: x ? x : 0,
     y: y ? y : 0,
     z: selector
  };
  this.res.push(board);
  this.back.push(board);
}

View2D.prototype.defControl = function(imgs, hint, isVisible) {}

View2D.prototype.defPiece = function(img, name, help, glyph) {
  var piece = {
     h:    document.getElementById(img),
     name: name
  };
  if (glyph) {
     piece.glyph = document.getElementById(glyph);
  }
  if (help) {
     piece.help = help;
  }
  this.res.push(piece);
  this.piece[name] = piece;
}

View2D.prototype.allResLoaded = function() {
  if (this.allDone) return true;
  for (var i = 0; i < this.res.length; i++) {
       var image = this.res[i].h;
       if (!image.complete || (image.naturalWidth == 0)) return false;
       this.res[i].dx = image.naturalWidth;
       this.res[i].dy = image.naturalHeight;
  }
  this.allDone = true;
  return true;
}

View2D.prototype.clear = function() {
  this.setup = [];
}

View2D.prototype.addPiece = function(piece, pos, model) {
  this.setup.push({
       pos:  +pos,
       name:  piece,
       model: model, 
       x:     this.pos[pos].x,
       y:     this.pos[pos].y
  });
}

View2D.prototype.markPositions = function(type, positions) {
  if (type == Dagaz.View.markType.TARGET) {
      this.target  = positions;
  } 
  if (type == Dagaz.View.markType.ATTACKING) {
      this.strike  = positions;
  }
  if (type == Dagaz.View.markType.GOAL) {
      this.goal    = positions;
  }
  if (type == Dagaz.View.markType.CURRENT) {
      this.current = positions;
  }
  if (type == Dagaz.View.markType.KO) {
      this.ko      = positions;
  }
  this.invalidate();
}

View2D.prototype.capturePiece = function(move, pos, phase) {
  if (!phase) { phase = 1; }
  _.chain(this.changes)
   .filter(function(frame) {
      return !_.isUndefined(frame.from) && !_.isUndefined(frame.to);
    })
   .filter(function(frame) {
      return frame.to == pos;
    })
   .each(function(frame) {
      deferred.push(pos);
    });
  var ix = posToIx(this, pos);
  if (ix === null) return;
  this.changes.push({
      phase: phase,
      steps: 1,
      from:  pos,
      op:    ix
  });
  currZ = this.pos[pos].z;
}

View2D.prototype.dropPiece = function(move, pos, piece, phase) {
  if (!phase) { phase = 0; }
  var ix = posToIx(this, pos);
  this.changes.push({
      phase: phase,
      steps: 1,
      ix:    ix,
      to:    pos,
      model: piece,
      np:    piece.toString()
  });
  currZ = this.pos[pos].z;
}

View2D.prototype.addVector = function(from, to, steps, mode, level) {
  if (!mode) mode = 0;
  if (!steps) { steps = Dagaz.View.STEP_CNT; }
  if (_.isUndefined(this.vectors[mode])) {
      this.vectors[mode] = [];
  }
  if (_.isUndefined(this.vectors[mode][from])) {
      this.vectors[mode][from] = [];
  }
  this.vectors[mode][from][to] = {
      steps: steps,
      level: level
  };
}

View2D.prototype.addPhase = function(ix, from, to, piece, phase, steps) {
  this.changes.push({
      phase: phase,
      steps: steps,
      from:  from,
      to:    to,
      ix:    ix,
      model: piece,
      np:    (piece === null) ? null : piece.toString(),
      dx:    ((this.pos[to].x - this.pos[from].x) / steps) | 0,
      dy:    ((this.pos[to].y - this.pos[from].y) / steps) | 0
  });
}

View2D.prototype.vectorFound = function(ix, from, to, piece, mode, phase) {
  if (!phase) { phase = 1; }
  if (phase > Dagaz.View.maxSteps) return false;
  if (this.vectors[mode] && this.vectors[mode][from]) {
      if (this.vectors[mode][from][to] && (this.vectors[mode][from][to].level == phase)) {
          this.addPhase(ix, from, to, piece, phase, this.vectors[mode][from][to].steps);
          return true;
      }
      var list = _.keys(this.vectors[mode][from]);
      for (var i = 0; i < list.length; i++) {
          var pos = list[i];
          if (this.vectors[mode][from][pos].level == phase) {
              this.addPhase(ix, from, pos, piece, phase, this.vectors[mode][from][pos].steps);
              if (this.vectorFound(ix, pos, to, piece, mode, phase + 1)) {
                  return true;
              }
              this.changes.pop();
          }
      }
  }
  return false;
}

View2D.prototype.movePiece = function(move, from, to, piece, phase, steps) {
  if (!phase) { phase = 1; }
  if (!steps) { steps = Dagaz.View.STEP_CNT; }
  var ix = posToIx(this, from);
  if (!this.vectorFound(ix, from, to, piece, move.mode)) {
      if (!_.isUndefined(move.hints)) {
          _.each(move.hints, function(p) {
               this.addPhase(ix, from, p, piece, phase, Dagaz.View.HINT_STEPS);
               from = p;
               phase++;
          }, this);
      }
      this.addPhase(ix, from, to, piece, phase, steps);
  }
  currZ = this.pos[to].z;
}

View2D.prototype.commit = function(move) {
   _.chain(this.changes)
    .filter(function(frame) {
       return !_.isUndefined(frame.from) && !_.isUndefined(frame.to);
     })
    .filter(function(frame) {
       return _.indexOf(_.chain(this.changes)
               .filter(function(frame) {
                   return !_.isUndefined(frame.from) && _.isUndefined(frame.to);
                })
               .map(function(frame) {
                   return frame.from;
                })
               .value(), frame.to) >= 0;
     }, this)
    .each(function(frame) {
       delete frame.ix;
     });
   _.chain(this.changes)
    .map(function(frame) {
       return frame.phase;
     })
    .uniq()
    .each(function(phase) {
       var steps = _.chain(this.changes)
        .filter(function(frame) {
           return frame.phase == phase;
         })
        .map(function(frame) {
           return frame.steps;
         })
        .push(1)
        .max()
        .value();
       _.chain(this.changes)
        .filter(function(frame) {
           return frame.phase == phase;
         })
        .each(function(frame) {
           frame.cnt = steps;
         });
     }, this);
   this.invalidate();
}

var drawMarks = function(ctx, view, list, color) {
   _.each(list, function(p) {
        var pos = this.pos[p];
        if (pos.z != currZ) return;
        var x = pos.x; var y = pos.y;
        if (pos.dx > 0) {
            x += pos.dx / 2 | 0;
        }
        if (pos.dy > 0) {
            y += pos.dy / 2 | 0;
        }
        var r = pos.dx / 4;
        if (Math.abs(pos.dy - pos.dx) > 10) {
            r = Math.min(pos.dy, pos.dx) / 2;
        }
        if (!_.isUndefined(Dagaz.View.MARK_R)) {
            r = Dagaz.View.MARK_R;
        }
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(x + Dagaz.View.SHIFT_X, y + Dagaz.View.SHIFT_Y, r, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
   }, view);
}

View2D.prototype.drawKo = function(ctx) {
   if (!_.isUndefined(this.piece["Ko"]) && (this.ko.length > 0)) {
       var piece = this.piece["Ko"];
       _.each(this.ko, function(pos) {
          var p = this.pos[pos];
          var x = ( p.x + (p.dx - piece.dx) / 2) | 0;
          var y = ( p.y + (p.dy - piece.dy) / 2) | 0;
          if (!_.isUndefined(Dagaz.View.KO_ALPHA)) {
              ctx.save();
              ctx.globalAlpha = Dagaz.View.KO_ALPHA;
          }
          ctx.drawImage(piece.h, x, y, piece.dx, piece.dy);
          if (!_.isUndefined(Dagaz.View.KO_ALPHA)) {
              ctx.restore();
          }
       }, this);
   }
}

View2D.prototype.invalidate = function() {
   isValid = false;
}

var isCommitted = function(frame) {
  return !_.isUndefined(frame.cnt);
}

var isDone = function(frame) {
  return frame.cnt <= 0;
}

var isNotNull = function(x) {
  return !_.isUndefined(x) && (x !== null);
}

View2D.prototype.animate = function() {
    var len = this.changes.length;
    this.changes = _.filter(this.changes, function(frame) {
        return _.isUndefined(frame.done);
    });
    var phase = _.chain(this.changes)
     .map(function(frame) {
        return frame.phase;
      })
     .min()
     .value();
  _.chain(this.changes)
   .filter(function(frame) {
        return frame.phase == phase;
    })
   .filter(function(frame) {
        return !_.isUndefined(frame.from) && _.isUndefined(frame.op);
    })
   .each(function(frame) {
        frame.op = posToIx(this, frame.from);
    }, this);
  this.changes = _.filter(this.changes, function(frame) {
        if (frame.phase > phase) return true;
        if (_.isUndefined(frame.from)) return true;
        return !_.isUndefined(frame.op);
    });
  _.chain(this.changes)
   .filter(function(frame) {
        return frame.phase == phase;
    })
   .filter(isCommitted)
   .each(function(frame) {
        if (!_.isUndefined(frame.op)) {
            var piece = this.setup[frame.op];
            if (piece) {
                if (!_.isUndefined(frame.dx)) {
                    piece.x += frame.dx;
                }
                if (!_.isUndefined(frame.dy)) {
                    piece.y += frame.dy;
                }
                piece.z = Math.abs(+frame.dx) + Math.abs(+frame.dy);
            }
        }
        frame.cnt--;
    }, this);
  var captured = _.chain(this.changes)
   .filter(function(frame) {
        return frame.phase == phase;
    })
   .filter(isCommitted)
   .filter(isDone)
   .map(function(frame) {
       if (_.isUndefined(frame.to)) {
           return frame.from;
       } else {
           return frame.to;
       }
    })
   .map(function(pos) {
       return posToIx(this, pos);
    }, this)
   .filter(isNotNull)
   .difference(
       _.chain(this.changes)
        .filter(isCommitted)
        .filter(isDone)
        .map(function(frame) {
             return frame.ix;
         })
        .filter(isNotNull)
        .value()
    )
   .value();
  _.chain(this.changes)
   .filter(function(frame) {
        return frame.phase == phase;
    })
   .filter(isCommitted)
   .filter(isDone)
   .each(function(frame) {
        if (!_.isUndefined(frame.op) && !_.isUndefined(frame.to)) {
            var piece = this.setup[frame.op];
            if (piece) {
                if (frame.np) {
                    piece.name = frame.np;
                }
                if (frame.model) {
                    piece.model = frame.model;
                }
                piece.pos = +frame.to;
                piece.x = this.pos[frame.to].x;
                piece.y = this.pos[frame.to].y;
                delete piece.z;
            }
        }
        if (_.isUndefined(frame.op) && !_.isUndefined(frame.to)) {
            this.setup.push({
                pos:   frame.to,
                name:  frame.np,
                model: frame.model,
                x:     this.pos[frame.to].x,
                y:     this.pos[frame.to].y
            });
        }
        frame.done = true;
    }, this);
    this.setup = _.chain(_.range(this.setup.length))
    .filter(function(ix) {
        return _.indexOf(captured, ix) < 0;
     })
    .map(function(ix) {
        return this.setup[ix];
     }, this)
    .value();
    if ((len > 0) && (this.changes.length == 0)) {
        isValid = true;
        if (this.controller) {
            this.controller.done();
        }
        if (deferred.length > 0) {
            deferred = _.map(deferred, function(pos) {
               return posToIx(this, pos);
            }, this);
            this.setup = _.chain(_.range(this.setup.length))
           .filter(function(ix) {
               return _.indexOf(deferred, ix) < 0;
            })
           .map(function(ix) {
               return this.setup[ix];
            }, this)
           .value();
            deferred = [];
        }
    }
}

Dagaz.View.showMarks = function(view, ctx) {
  drawMarks(ctx, view, view.target, "#00AA00");
  drawMarks(ctx, view, view.goal,   "#FFFF00");
}

Dagaz.View.showPiece = function(view, ctx, frame, pos, piece, model, x, y) {
  var isSaved = false;
  var dx = 0;
  var dy = 0;
  if (_.indexOf(view.strike, pos) >= 0) {
      ctx.save();
      ctx.globalAlpha = Dagaz.View.STRIKE_ALPHA;
      isSaved = true;
  }
  if (Dagaz.Model.showBlink && (_.indexOf(view.current, pos) >= 0)) {
      dx = Dagaz.View.blink[blink];
      dy = Dagaz.View.blink[blink + 1];
  }
  ctx.drawImage(piece.h, x + dx, y + dy, piece.dx, piece.dy);
  if (isSaved) {
      ctx.restore();
  }
}

View2D.prototype.showDrops = function(ctx) {
  if (this.drops.length > 0) {
      ctx.save();
      ctx.globalAlpha = Dagaz.View.DROPS_ALPHA;
      _.each(this.drops, function(f) {
         var dx = (f.position.dx - f.piece.dx) / 2 | 0;
         var dy = (f.position.dy - f.piece.dy) / 2 | 0;
         ctx.drawImage(f.piece.h, f.position.x + dx, f.position.y + dy, f.piece.dx, f.piece.dy);
      });
      ctx.restore();
  }
}

View2D.prototype.reInit = function(board) {
  board.setup(this, false);
  this.invalidate();
}

View2D.prototype.configure = function() {
  if (!isConfigured) {
      Dagaz.View.configure(this);
      if (this.controller) {
          var board = this.controller.getBoard();
          board.setup(this, true);
          this.controller.done();
      }
      isConfigured = true;
  }
}

View2D.prototype.draw = function(canvas) {
  this.configure();
  if (this.allResLoaded() && !isValid) {
      var ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      _.each(this.back, function(b) {
           if (b.z != currZ) return;
           if (!_.isUndefined(b.t)) {
               var board = Dagaz.Controller.app.board;
               if (_.indexOf(b.t, board.turn) < 0) return;
           }
           if (Dagaz.View.SCALE_SIZE) {
               let x = b.x;
               let y = b.y;
               let dx = b.dx;
               let dy = b.dy;     
               ctx.drawImage(b.h, 0, 0, b.dx, b.dy, b.x, b.y, canvas.width - x * 2,canvas.height - y * 2);
           } else {
               ctx.drawImage(b.h, b.x, b.y);
           }
      });
      _.chain(_.range(this.setup.length))
       .sortBy(function(ix) {
           var piece = this.setup[ix];
           var order = piece.pos;
           if (piece.z > 0) {
               order += this.pos.length;
           }
           return order;
        }, this)
       .map(function(ix) {
           return this.setup[ix];
        }, this)
       .each(function(p) {
           var x = p.x; var y = p.y;
           var pos = this.pos[p.pos];
           if (pos.z != currZ) return;
           var piece = this.piece[p.name];
           if (piece) {
               x += (pos.dx - piece.dx) / 2 | 0;
               y += (pos.dy - piece.dy) / 2 | 0;
               Dagaz.View.showPiece(this, ctx, pos, p.pos, piece, p.model, x, y, p);
           }
        }, this);
      blink += 2;
      if (blink >= Dagaz.View.blink.length) {
          blink = 0;
      }
      this.drawKo(ctx);
      Dagaz.View.showMarks(this, ctx);
      this.showDrops(ctx);
      this.animate();
      if (!_.isUndefined(Dagaz.View.showBoard)) {
           var board = this.controller.getBoard();
           Dagaz.View.showBoard(board, ctx);
      }
  }
}

View2D.prototype.debug = function(text) {
  PieceInfoText.innerHTML = text;
  PieceInfo.style.display = "inline";
}

Dagaz.View.showHint = function(view) {
  if (Dagaz.Model.showHints) {
      var positions = view.pointToPositions(mouseX, mouseY);
      if (!_.isUndefined(positions) && (positions.length > 0)) {
          var ix  = posToIx(view, positions[0]);
          if (ix !== null) {
              var piece = view.piece[view.setup[ix].name];
              if (hintedPiece !== piece) {
                  var text = piece.name;
                  if (piece.help) {
                      text = piece.help;
                  }
                  PieceInfoImage.src = piece.h.src;
                  PieceInfoText.innerHTML = text;
                  PieceInfo.style.display = "inline";
                  hintedPiece = piece;
              }
          }
      } else {
          PieceInfo.style.display = "none";
          hintedPiece = null;
      }
  }
}

var mouseUpdate = function(event) {
  var canvasRect = Canvas.getBoundingClientRect();
  mouseX = (event.clientX - canvasRect.left) / (canvasRect.width / Canvas.width);
  mouseY = (event.clientY - canvasRect.top) / (canvasRect.height / Canvas.height);
}

var mouseMove = function(event) {
  mouseUpdate(event);
  Dagaz.View.showHint(self);
  var pos = self.pointToPositions(mouseX, mouseY);
  if (pos && self.controller) {
      self.controller.mouseLocate(self, pos);
  }
}

Dagaz.View.PKM = function(view, positions) {}

var mouseUp = function(event) { 
  _.each(self.buttons, function(b) {
      if (mouseX < b.x) return;
      if (mouseY < b.y) return;
      if (mouseX > b.x + b.dx) return;
      if (mouseY > b.y + b.dy) return;
      currZ = b.ix;
  });
  var pos = self.pointToPositions(mouseX, mouseY);
  if (event.button == 2) return;
  if (pos && self.controller) {
      self.controller.mouseUp(self, pos);
  }
  mousePressed = false; 
}

var mouseDown = function(event) { 
  if (event.button == 2) return;
  mousePressed = true; 
  var pos = self.pointToPositions(mouseX, mouseY);
  if (pos && self.controller) {
      self.controller.mouseDown(self, pos);
  }
  event.preventDefault(); 
}

var mouseWheel = function(event) {
  var f = false;
  _.each(self.buttons, function(b) {
      if (mouseX < b.x) return;
      if (mouseY < b.y) return;
      if (mouseX > b.x + b.dx) return;
      if (mouseY > b.y + b.dy) return;
      f = true;
  });
  var pos = self.pointToPositions(mouseX, mouseY);
  if (pos && pos.length > 0) f= true;
  if (f) {
      var delta = event.wheelDelta;
      if (_.isUndefined(event.wheelDelta)) {
          delta = -event.deltaY;
      }
      if (delta < 0) {
          if (currZ > minZ) currZ--;
      } else {
          if (currZ < maxZ) currZ++;
      }
      event.preventDefault();
  }
}

View2D.prototype.init = function(canvas, controller) {
  self = this;
  canvas.onmousemove = mouseMove;
  canvas.onmouseup   = mouseUp;
  canvas.onmousedown = mouseDown;
  if ('onwheel' in document) {
      document.addEventListener('wheel', mouseWheel, { passive: false });
  } else if ('onmousewheel' in document) {
      document.addEventListener('mousewheel', mouseWheel, { passive: false });
  } else {
      document.MozMousePixelScroll = mouseWheel;
  }
  this.controller = controller;
}

document.oncontextmenu = function()  { 
  var pos = self.pointToPositions(mouseX, mouseY);
  Dagaz.View.PKM(self, pos);
  return false; 
}

})();
