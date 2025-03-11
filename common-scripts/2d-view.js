(function() {

Dagaz.View.markType = {
   TARGET:    0,
   ATTACKING: 1,
   GOAL:      2,
   KO:        4
};

var STEP_CNT     = 3;

var self         = null;
var isConfigured = false;
var isValid      = false;
var mouseX       = 0;
var mouseY       = 0;
var mousePressed = false;
var hintedPiece  = null;
var fromPos      = null;
var deferred     = [];

Dagaz.View.configure = function(view) {}

function View2D() {
  this.pos     = [];
  this.res     = [];
  this.piece   = [];
  this.board   = [];
  this.setup   = [];
  this.target  = [];
  this.strike  = [];
  this.goal    = [];
  this.changes = [];
  this.vectors = [];
  this.ko      = [];
}

Dagaz.View.getView = function() {
  if (_.isUndefined(Dagaz.View.view)) {
      Dagaz.View.view = new View2D();
  }
  return Dagaz.View.view;
}

Dagaz.View.inRect = function(view, pos, x, y) {
  return (x > view.pos[pos].x) &&
         (y > view.pos[pos].y) &&
         (x < view.pos[pos].x + view.pos[pos].dx) &&
         (y < view.pos[pos].y + view.pos[pos].dy);
}

Dagaz.View.pointToPositions = function(view, x, y) {
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
  if (list.length > 0) {
      return list.slice(0, 1);
  }
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

View2D.prototype.clearDrops = function() {
  this.drops = [];
}

View2D.prototype.defPosition = function(name, x, y, dx, dy) {
  this.pos.push({
      name: name,
      x:    x,
      y:    y,
      dx:   dx,
      dy:   dy
  });
}

View2D.prototype.defBoard = function(img, x, y, selector) {
  if (!_.isUndefined(Dagaz.Model.setupSelector) && !_.isUndefined(selector) && (selector != Dagaz.Model.getResourceSelector())) return;
  var board = {
     h: document.getElementById(img),
     x: x ? x : 0,
     y: y ? y : 0
  };
  if (Dagaz.View.CHECK_CANVAS) {
      Canvas.width = board.h.width;
      Canvas.height = board.h.height;
  }
  this.res.push(board);
  this.board.push(board);
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
      this.target = positions;
  } 
  if (type == Dagaz.View.markType.ATTACKING) {
      this.strike = positions;
  }
  if (type == Dagaz.View.markType.GOAL) {
      this.goal   = positions;
  }
  if (type == Dagaz.View.markType.KO) {
      this.ko     = positions;
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
}

View2D.prototype.addVector = function(from, to, steps) {
  if (!steps) { steps = STEP_CNT; }
  if (_.isUndefined(this.vectors[from])) {
      this.vectors[from] = [];
  }
  this.vectors[from][to] = steps;
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

View2D.prototype.vectorFound = function(ix, from, to, piece, phase) {
  if (!phase) { phase = 1; }
  if (this.vectors[from]) {
      if (this.vectors[from][to]) {
          this.addPhase(ix, from, to, piece, phase, this.vectors[from][to]);
          return true;
      }
      var list = _.keys(this.vectors[from]);
      for (var i = 0; i < list.length; i++) {
          var pos = list[i];
          this.addPhase(ix, from, pos, piece, phase, this.vectors[from][pos]);
          if (this.vectorFound(ix, pos, to, piece, phase + 1)) {
              return true;
          }
          this.changes.pop();
      }
  }
  return false;
}

View2D.prototype.movePiece = function(move, from, to, piece, phase, steps) {
  if (!phase) { phase = 1; }
  if (!steps) { steps = STEP_CNT; }
  var ix = posToIx(this, from);
  if (!this.vectorFound(ix, from, to, piece)) {
      this.addPhase(ix, from, to, piece, phase, steps);
  }
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
        ctx.arc(x, y, r, 0, 2 * Math.PI);
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
            if (_.isUndefined(piece)) return;
            if (!_.isUndefined(frame.dx)) {
                piece.x += frame.dx;
            }
            if (!_.isUndefined(frame.dy)) {
                piece.y += frame.dy;
            }
            piece.z = Math.abs(+frame.dx) + Math.abs(+frame.dy);
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
  if (_.indexOf(view.strike, pos) >= 0) {
      ctx.save();
      ctx.globalAlpha = Dagaz.View.STRIKE_ALPHA;
      isSaved = true;
  }
  ctx.drawImage(piece.h, x, y, piece.dx, piece.dy);
  if (isSaved) {
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
      _.each(this.board, function(b) {
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
           var piece = this.piece[p.name];
           x += (pos.dx - piece.dx) / 2 | 0;
           y += (pos.dy - piece.dy) / 2 | 0;
           Dagaz.View.showPiece(this, ctx, pos, p.pos, piece, p.model, x, y);
        }, this);
      this.drawKo(ctx);
      Dagaz.View.showMarks(this, ctx);
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
      var pos = view.pointToPositions(mouseX, mouseY);
      var ix  = posToIx(view, pos);
      if (pos.length == 0) ix = null;
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
      self.controller.mouseLocate(self, +pos);
  }
}

var mouseUp = function() { 
  var pos = self.pointToPositions(mouseX, mouseY);
  if (pos && self.controller) {
      self.controller.mouseUp(self, +pos[0]);
  }
  mousePressed = false; 
}

var mouseDown = function(event) { 
  mousePressed = true; 
  var pos = self.pointToPositions(mouseX, mouseY);
  if (pos && self.controller) {
      self.controller.mouseDown(self, +pos[0]);
  }
  event.preventDefault(); 
}

View2D.prototype.init = function(canvas, controller) {
  self = this;
  canvas.onmousemove = mouseMove;
  canvas.onmouseup   = mouseUp;
  canvas.onmousedown = mouseDown;
  this.controller    = controller;
}

})();
