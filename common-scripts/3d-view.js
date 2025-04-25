"use strict";

(function() {

const PIECE_TYPE = {
   NONE:              0,
   CUBE:              1
};

const MOVE_TYPE = {
   MOVE:              0,
   ROTATE:            1,
   REFRESH:           2
};

Dagaz.View.NO_PIECE   = true;
Dagaz.View.PIECE_TYPE = PIECE_TYPE.NONE;
Dagaz.View.STEP_CNT   = 3;

Dagaz.View.markType = {
   TARGET:            0,
   KO:                4
};

const ANIMATE_STATE = {
  INIT:               0,
  READY:              1,
  DONE:               2
};

let boardPresent   = false;
let isConfigured   = false;
let isInitialized  = false;
let isFirstDraw    = true;
let currPos        = null;
let ko             = null;
let cameraSettings = null;

let lastX = null;
let lastY = null;

const settings = {
  x: 100,
  y: 100,
  z: 250,
  dx: -27,
  dy: -27,
  dz: 0.5
};

const PLAYER_1_COLOR = 0x101010;
const PLAYER_2_COLOR = 0x505050;

let allPositions     = [];
let playerColors     = [];
let pieceTypes       = [];
let pieces           = [];
let cubes            = [];

function getPlayerMaterial(player, transparent) {
    if (playerColors.length == 0) {
        playerColors = [0x101010, 0x505050];
    }
    if (transparent) {
        return new THREE.MeshStandardMaterial({
            color: playerColors[player - 1],
            metalness: 0.3,
            roughness: 0.2,
            transparent: true,
            opacity: 0.3,
            depthWrite: false
        });
    } else {
        return new THREE.MeshStandardMaterial({
            color: playerColors[player - 1],
            metalness: 0.3,
            roughness: 0.2
        });
    }
}

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
const mobileCoeff = isTouchDevice ? 3 : 1;

const clock = new THREE.Clock();
let   prevTime = 0;
let   tooltipIx = null;
let   leastTouch = null;

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#Canvas'),
    antialias: true
});

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
};

const aspectRatio = sizes.width / sizes.height;
const scene = new THREE.Scene();
const textureLoader = new THREE.TextureLoader();

const viewDistance = 50;

const camera = new THREE.OrthographicCamera(
  viewDistance * -1 * aspectRatio, 
  viewDistance * aspectRatio,  
  viewDistance,  
  viewDistance * -1,
);

const updateRender = () => {
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio * 2, 2));
};

const lineMaterial   = new THREE.LineBasicMaterial({ color: 0x333333 });
const redMaterial    = new THREE.LineBasicMaterial({ color: 0xFF0000 });

const posGeometry    = new THREE.SphereGeometry(3, 32, 32);
const dotGeometry    = new THREE.SphereGeometry(0.5, 15, 15);
const koGeometry     = new THREE.SphereGeometry(1, 15, 15);
const targetGeometry = new THREE.SphereGeometry(2, 32, 32);

const koMaterial = new THREE.MeshStandardMaterial({
    color: 0xFF0000,
    metalness: 0.3,
    roughness: 0.2
});

const targetMaterial = new THREE.MeshStandardMaterial({
    color: 0x003200,
    metalness: 0.2,
    roughness: 0.7
});

const posMaterial = new THREE.MeshStandardMaterial({
    color: 0x101010,
    metalness: 0.3,
    roughness: 0.2,
    transparent: true,
    opacity: 0,
    depthWrite: false
});

const blackMaterial = new THREE.MeshStandardMaterial({
    color: 0x101010,
    metalness: 0.3,
    roughness: 0.2
});

Dagaz.View.configure = function(view) {}

function View3D() {
  this.board   = null;
  this.res     = [];
  this.pos     = [];
  this.drops   = [];
  this.hots    = [];
  this.filled  = [];
  this.setup   = [];
  this.ctrls   = [];
  this.ko      = [];
  this.targets = [];
  this.queue   = [];
  this.ready   = false;
}

Dagaz.View.getView = function() {
  if (_.isUndefined(Dagaz.View.view)) {
      Dagaz.View.view = new View3D();
  }
  return Dagaz.View.view;
}

View3D.prototype.setCamera = function(dx, dy, dz, x, y, z) {
  if (!_.isUndefined(x)) settings.x = x;
  if (!_.isUndefined(y)) settings.y = y;
  if (!_.isUndefined(z)) settings.z = z;
  if (!_.isUndefined(dx)) settings.dx = dx;
  if (!_.isUndefined(dy)) settings.dy = dy;
  if (!_.isUndefined(dz)) settings.dz = dz;
  settings.zoom = 1;
  const s = localStorage.getItem('dagaz.camera');
  if (s) {
      const v = s.split(';');
      if (v.length == 4) {
          settings.x = +v[0];
          settings.y = +v[2];
          settings.z = +v[1];
          settings.zoom = +v[3];
      }
  }
  camera.position.set(settings.x, settings.z, settings.y);
  this.invalidate();
}

View3D.prototype.clearTargets = function() {
  _.each(this.targets, function(pos) {
      const t = this.pos[pos].t;
      t.material = posMaterial;
  }, this);
}

View3D.prototype.markPositions = function(type, positions) {
  if (Dagaz.View.PIECE_TYPE == PIECE_TYPE.CUBE) return;
  if (type == Dagaz.View.markType.TARGET) {
      this.clearTargets();
      this.targets = positions;
      _.each(this.targets, function(pos) {
          const t = this.pos[pos].t;
          t.material = targetMaterial;
      }, this);
  }
  if (type == Dagaz.View.markType.KO) {
      this.ko = positions;
      if (this.ko.length > 0) {
          if (ko === null) {
              ko = new THREE.Mesh(koGeometry, koMaterial);
              scene.add(ko);
          } else {
              ko.material = koMaterial;
          }
          const p = this.pos[this.ko[0]];
          if (p) {
              ko.position.set((p.x / 10) + settings.dx, (p.z / 10) + settings.dz, (p.y / 10) + settings.dy);
          }
      } else {
          if (ko !== null) {
              ko.material = posMaterial;
          }
      }
  }
  this.invalidate();
}

View3D.prototype.init = function(canvas, controller) {
  if (!isInitialized) {
     scene.background = new THREE.Color('#eee');
     camera.position.set(settings.x, settings.z, settings.y);
     camera.lookAt(0, 0, 0);
     const ambientLight = new THREE.AmbientLight('white', 2);
     scene.add(ambientLight);
     const directionalLight = new THREE.DirectionalLight('white', 2);
     directionalLight.position.set(100, 180, 60);
     scene.add(directionalLight);
     updateRender();
     isInitialized = true;
  }
  this.controller = controller;
}

View3D.prototype.clear = function() {
  _.each(this.filled, function(pos) {
      const p = this.pos[pos].p;
      p.material = posMaterial;
  }, this);
  this.setup  = [];
  this.filled = [];
  this.invalidate();
}

function getCube(pos) {
  for (let i = 0; i < cubes.length; i++) {
      if (cubes[i].pos == pos) return cubes[i];
  }
  return null;
}

View3D.prototype.groupCubes = function(move) {
  const group = new THREE.Group();
  let isChanged = false;
  _.each(move.actions, function(a) {
      if (a[0] === null) return;
      const piece = getCube(a[0][0]);
      if (piece === null) return;
      group.add(piece);
      scene.remove(piece);
      cubes = _.without(cubes, piece);
      pieces = _.without(pieces, piece);
      isChanged = true;
  });
  scene.add(group);
  cubes.push(group);
  if (isChanged) this.invalidate();
  return group;
}

View3D.prototype.addPiece = function(piece, pos, model) {
  this.filled.push(+pos);
  const p = this.pos[pos];
  if (Dagaz.View.NO_PIECE) {
      p.material = getPlayerMaterial(model.player, false);
  } else {
      const pieceType = pieceTypes[model.type*10 + (+model.player)];
      const pieceGeometry = new THREE.BoxGeometry(p.dx / 10, p.dz / 10, p.dy / 10);
      const materials = [
            new THREE.MeshBasicMaterial({ color: pieceType.colors[2] }), // right
            new THREE.MeshBasicMaterial({ color: pieceType.colors[3] }), // left
            new THREE.MeshBasicMaterial({ color: pieceType.colors[0] }), // top
            new THREE.MeshBasicMaterial({ color: pieceType.colors[5] }), // bottom
            new THREE.MeshBasicMaterial({ color: pieceType.colors[1] }), // forward
            new THREE.MeshBasicMaterial({ color: pieceType.colors[4] })  // backward
      ];
      const group = new THREE.Group();
      group.pos = pos;
      const piece = new THREE.Mesh(pieceGeometry, materials);
      piece.pos = pos;
      group.add(piece);
      const edgeColor = 0x000000;
      const edgesGeometry = new THREE.EdgesGeometry(pieceGeometry);
      const edgesMaterial = new THREE.LineBasicMaterial({ 
            color: edgeColor,
            linewidth: 3
      });
      const edges = new THREE.LineSegments(edgesGeometry, edgesMaterial);
      group.add(edges);
      group.position.set(p.x / 10, p.z / 10, p.y / 10);
      scene.add(group);   
      cubes.push(group);
      pieces.push(piece);
  }
}

View3D.prototype.sync = function(board) {
  this.board = board;
  if (Dagaz.View.PIECE_TYPE == PIECE_TYPE.CUBE) {
      _.each(cubes, function(p) {
          scene.remove(p);
      });
      cubes = [];
      pieces = [];
      board.setup(this, false);
      this.invalidate();
  }
}

View3D.prototype.defBoard = function(res) {
  const img = document.getElementById(res);
  const texture = textureLoader.load(
    img.currentSrc,
    () => {this.invalidate();},
    undefined,
    undefined,
    { crossOrigin: 'anonymous' }
  );
  var board = {
     h: img,
     t: texture
  };
  this.res.push(board);
  boardPresent = true;
}

View3D.prototype.clearControls = function() {
  for (let i = 0; i < this.ctrls.length; i++) {
       if ((this.ctrls[i].y == 1) || (this.ctrls[i].y == 2)) this.ctrls[i].v = false;
  }
  this.invalidate();
}

View3D.prototype.defControl = function(imgs, hint, isVisible, proc, args, selector) {
  if (!_.isUndefined(selector) && (selector != Dagaz.Model.getResourceSelector())) return;
  var type = 0;
  if (!_.isArray(imgs)) {
     if (imgs == "UndoControl")   type = 1;
     if (imgs == "RedoControl")   type = 2;
     if (imgs == "CameraControl") type = 3;
     imgs = [imgs];
  }
  imgs = _.map(imgs, function(res) {
     const img = document.getElementById(res);
     this.res.push({h:img});
     return img;
  }, this);
  this.ctrls.push({
     h: imgs,
     x: 0,
     t: hint,
     v: isVisible,
     p: proc,
     a: args,
     y: type
  });
}

View3D.prototype.defPieceCube = function(type, player, colors) {
  Dagaz.View.NO_PIECE = false;
  Dagaz.View.PIECE_TYPE = PIECE_TYPE.CUBE;
  pieceTypes[type*10 + player] = {
     type: PIECE_TYPE.CUBE,
     colors: colors
  };
}

View3D.prototype.defPiece = function(type, player, color) {
  playerColors[player - 1] = color;
}

View3D.prototype.defPosition = function(name, x, y, dx, dy, z, dz, selector) {
  if (!_.isUndefined(selector) && (selector != Dagaz.Model.getResourceSelector())) return;
  if (_.isUndefined(dz)) {
      dz = dx;
  }
  var ix = Dagaz.Model.stringToPos(name);
  const p = new THREE.Mesh(posGeometry, posMaterial);
  p.position.set((x / 10) + settings.dx, (z / 10) + settings.dz, (y / 10) + settings.dy);
  p.name = name;
  p.ix = ix;
  p.isPosition = true;
  allPositions.push(p);
  const t = new THREE.Mesh(targetGeometry, posMaterial);
  t.position.set((x / 10) + settings.dx, (z / 10) + settings.dz, (y / 10) + settings.dy);
  this.pos[ix] = {
      x: x, dx: dx,
      y: y, dy: dy,
      z: z, dz: dz,
      p: p, nm: name,
      t: t
  };
  scene.add(p);
  scene.add(t);
}

View3D.prototype.allResLoaded = function() {
  if (this.ready) return true;
  for (var i = 0; i < this.res.length; i++) {
       var image = this.res[i].h;
       if (!image.complete || (image.naturalWidth == 0)) return false;
       this.res[i].dx = image.naturalWidth;
       this.res[i].dy = image.naturalHeight;
  }
  this.ready = true;
  return true;
}

const overlay = document.getElementById('overlay');
const ctx = overlay.getContext('2d');

View3D.prototype.configure = function() {
  if (!isConfigured && this.controller) {
      Dagaz.View.configure(this);
      var board = this.controller.getBoard();
      board.setup(this, true);
      this.controller.done();
      isConfigured = true;

      // DEBUG:
      overlay.width = 800;
      overlay.height = 600;  
  }
}

View3D.prototype.reInit = function(board) {
  board.setup(this, false);
  this.invalidate();
}

View3D.prototype.clearDrops = function() {
  this.drops = [];
  this.hots = [];
  this.invalidate();
}

View3D.prototype.setDrops = function(positions) {
  positions = _.difference(positions, this.filled);
  this.drops = _.map(positions, function(ix) {
     return this.pos[ix].p;
  }, this);
  this.invalidate();
}

View3D.prototype.setHots = function(positions) {
  this.hots = _.map(positions, function(ix) {
     return this.pos[ix].p;
  }, this);
  this.invalidate();
}

View3D.prototype.showControl = function(type, isVisible) {
  for (let i = 0; i < this.ctrls.length; i++) {
     const t = this.ctrls[i];
     if (t.y == type) {
         t.v = isVisible;
         this.invalidate();
         break;
     }
  }
}

function drawTooltip(text, x, y) {
  ctx.font = '14px Arial';
  const padding = 8;
  const lines = text.split('\n');
  const lineHeight = 20;
  
  const maxWidth = Math.max(...lines.map(line => 
    ctx.measureText(line).width
  ));
  const height = lineHeight * lines.length;
  
  let tipX = x + 15;
  let tipY = y - 15;
  if (tipX + maxWidth > overlay.width) tipX = x - maxWidth - 15;
  if (tipY + height > overlay.height) tipY = overlay.height - height;

  ctx.fillStyle = 'rgba(255, 255, 220, 0.95)';
  ctx.strokeStyle = '#333';
  ctx.beginPath();
  ctx.roundRect(tipX, tipY, maxWidth + padding * 2, height + padding, 5);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#000';
  lines.forEach((line, i) => {
    ctx.fillText(line, tipX + padding, tipY + padding + lineHeight * (i + 0.5));
  });
}

View3D.prototype.invalidate = function() {
  let o = 5 + 3; let h = null;
  ctx.clearRect(o, 5 + 3, 300 * mobileCoeff, 70 * mobileCoeff);
  for (let i = 0; i < this.ctrls.length; i++) {
      const t = this.ctrls[i];
      if (!t.v) continue;
      ctx.clearRect(o, 5 + 3, t.h[t.x].naturalWidth * mobileCoeff, t.h[t.x].naturalHeight * mobileCoeff);
      ctx.drawImage(t.h[t.x], 0, 0, t.h[t.x].naturalWidth, t.h[t.x].naturalHeight
                            , o, 5 + 3, t.h[t.x].naturalWidth * mobileCoeff, t.h[t.x].naturalHeight * mobileCoeff);
      if ((tooltipIx !== null) && (tooltipIx == i) && t.t) {
         h = {
            t: t.t,
            x: o,
            y: 60
         };
      }
      o += (t.h[t.x].naturalWidth + 6) * mobileCoeff;
  }
  for (let i = 0; i < this.ctrls.length; i++) {
      if (this.ctrls[i].y == 3) {
          this.ctrls[i].t = Math.round(camera.position.x) + "," + Math.round(camera.position.y) + "," + Math.round(camera.position.z);
          break;
      }
  }
  const s = camera.position.x + ';' + camera.position.y + ';' + camera.position.z + ';' + camera.zoom;
  if ((cameraSettings === null) || (cameraSettings != s)) {
      localStorage.setItem('dagaz.camera', s);
      cameraSettings = s;
  }
  if (h !== null) {
      drawTooltip(h.t, h.x, h.y);
  }
  renderer.render(scene, camera);
}

View3D.prototype.menuClick = function(x) {
  let o = 3;
  for (let i = 0; i < this.ctrls.length; i++) {
      const t = this.ctrls[i];
      if (!t.v) continue;
      if ((x > o) && (x < o + t.h[t.x].naturalWidth * mobileCoeff)) {
         if (t.h.length > 1) {
             t.x++;
             if (t.x >= t.h.length) {
                 t.x = 0;
             }
         }
         if (!_.isUndefined(t.p)) {
             t.p(t.a);
         }
         this.invalidate();
      }
      o += (t.h[t.x].naturalWidth + 6) * mobileCoeff;
  }
}

View3D.prototype.menuHint = function(x) {
  let o = 3;
  for (let i = 0; i < this.ctrls.length; i++) {
      const t = this.ctrls[i];
      if (!t.v) continue;
      if ((x > o) && (x < o + t.h[t.x].naturalWidth * mobileCoeff)) {
          return i;
      }
      o += (t.h[t.x].naturalWidth + 6) * mobileCoeff;
  }
}

View3D.prototype.animate = function() {
  if (this.queue.length == 0) return;
  let phase = null; let ready = true;
  _.each(this.queue, function(q) {
      if (q.state == ANIMATE_STATE.INIT) {
          ready = false;
          return;
      }
      if (q.state != ANIMATE_STATE.READY) return;
      if ((phase === null) || (q.phase < phase)) {
          phase = q.phase;
      }
  });
  if (phase === null) {
      this.queue = [];
      this.controller.animate(false);
      return;
  }
  if (!ready) return;
  let changed = false;
  _.each(this.queue, function(q) {
      if (q.type  != MOVE_TYPE.REFRESH) return;
      if (q.state != ANIMATE_STATE.READY) return;
      if (q.phase != phase) return;
      Dagaz.Controller.app.boardApply(q.move);
      q.state = ANIMATE_STATE.DONE;
      changed = true;
  }, this);
  _.each(this.queue, function(q) {
      if (q.type  != MOVE_TYPE.ROTATE) return;
      if (q.state != ANIMATE_STATE.READY) return;
      if (q.phase != phase) return;
      if (q.steps > 0) {
          q.steps--;
          q.piece.rotateOnAxis(q.axis, 0.225);
      } else {
          q.state = ANIMATE_STATE.DONE;
      }
      changed = true;
  }, this);
  _.each(this.queue, function(q) {
      if (q.type  != MOVE_TYPE.MOVE) return;
      if (q.state != ANIMATE_STATE.READY) return;
      if (q.phase != phase) return;
      if (q.steps > 0) {
          q.steps--;
          q.piece.position.x += q.dx;
          q.piece.position.y += q.dy;
          q.piece.position.z += q.dz;
      } else {
          q.state = ANIMATE_STATE.DONE;
          if (Dagaz.View.NO_PIECE) {
              q.final.material = getPlayerMaterial(q.player, false);
              q.piece.material = posMaterial;
              q.piece.position.x = q.sx;
              q.piece.position.y = q.sy;
              q.piece.position.z = q.sz;
          } else {
              q.piece.position.x = q.ex;
              q.piece.position.y = q.ey;
              q.piece.position.z = q.ez;
          }
      }
      changed = true;
  }, this);
  if (changed) {
      this.invalidate();
  }
}

View3D.prototype.dropPiece = function(move, pos, piece, phase) {
  if (!phase) { phase = 1; }
  this.filled.push(+pos);
  const p = this.pos[pos].p;
  p.material = getPlayerMaterial(piece.player, false);
  currPos = null;
}

View3D.prototype.movePiece = function(move, from, to, piece, phase, steps) {
  if (from == to) return;
  if (!phase) { phase = 1; }
  if (!steps) { steps = Dagaz.View.STEP_CNT; }
  let start = null;
  if (Dagaz.View.NO_PIECE) {
      start = this.pos[from];
  }
  const stop = this.pos[to];
  if (!start || !stop) return;
  this.queue.push({
      type:  MOVE_TYPE.MOVE,
      state: ANIMATE_STATE.INIT,
      piece: start.p,
      final: stop.p,
      phase: phase,
      steps: steps,
      dx: (stop.p.position.x - start.p.position.x)/(steps + 1),
      dy: (stop.p.position.y - start.p.position.y)/(steps + 1),
      dz: (stop.p.position.z - start.p.position.z)/(steps + 1),
      sx: start.p.position.x, ex: stop.p.position.x,
      sy: start.p.position.y, ey: stop.p.position.y,
      sz: start.p.position.z, ez: stop.p.position.z,
      player: piece.player
  });
  this.filled = _.without(this.filled, +from);
  this.filled.push(+to);
}

View3D.prototype.capturePiece = function(move, pos, phase) {
  if (!phase) { phase = 1; }
  this.filled = _.without(this.filled, +pos);
  const p = this.pos[pos].p;
  p.material = posMaterial;
  // TODO:

}

View3D.prototype.commit = function(move) {
  let f = false;
  _.each(this.queue, function(q) {
       if (q.state == ANIMATE_STATE.INIT) {
           q.state = ANIMATE_STATE.READY;
           f = true;
       }
  });
  this.controller.animate(f);
}

View3D.prototype.addDir = function(p, q, f) {
  const pointA = new THREE.Vector3(this.pos[p].x / 10, this.pos[p].z / 10, this.pos[p].y / 10);
  const pointB = new THREE.Vector3(this.pos[q].x / 10, this.pos[q].z / 10, this.pos[q].y / 10);

  const geometry = new THREE.BufferGeometry();
  geometry.setFromPoints([pointA, pointB]);

  const line = new THREE.Line(geometry, lineMaterial);
  if (f) {
      line.material = redMaterial;
  }
  scene.add(line);

  if (!this.pos[p].marked) {
     this.pos[p].marked = true;
     const x = new THREE.Mesh(dotGeometry, blackMaterial);
     x.position.set(pointA.x, pointA.y, pointA.z);
     scene.add(x);
  }

  if (!this.pos[q].marked) {
     this.pos[q].marked = true;
     const x = new THREE.Mesh(dotGeometry, blackMaterial);
     x.position.set(pointB.x, pointB.y, pointB.z);
     scene.add(x);
  }
}

View3D.prototype.draw = function(canvas) {
  this.configure();
  if (this.allResLoaded()) {
      this.animate();
      const elapsedTime = clock.getElapsedTime();
      const deltaTime = elapsedTime - prevTime;
      prevTime = elapsedTime;
      if (isFirstDraw) {
         if (boardPresent) {
            const boardGeometry = new THREE.BoxGeometry(this.res[0].dx / 10, 1, this.res[0].dy / 10);
            const materials = [
               new THREE.MeshBasicMaterial({ color: '#AC5146' }),
               new THREE.MeshBasicMaterial({ color: '#AC5146' }),
               new THREE.MeshBasicMaterial({ map: this.res[0].t }),
               new THREE.MeshBasicMaterial({ color: '#FFEDCB', transparent: true, opacity: 0.3 }),
               new THREE.MeshBasicMaterial({ color: '#AC5146' }),
               new THREE.MeshBasicMaterial({ color: '#AC5146' })
            ];
            const boardBlock = new THREE.Mesh(boardGeometry, materials);
            scene.add(boardBlock);
         }
         if (!_.isUndefined(Dagaz.View.augBoard)) {
            Dagaz.View.augBoard(this);
         }
         const orbits = new THREE.OrbitControls(camera, renderer.domElement);
         orbits.addEventListener('change', () => this.invalidate());
         isFirstDraw = false;
      }
      this.invalidate();
  } else {
      setTimeout(()=>this.draw(canvas), 100);
  }
}

function changeDimensions() {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    const aspectRatio = sizes.width / sizes.height;
    camera.left = viewDistance * -1 * aspectRatio;
    camera.right = viewDistance * aspectRatio;
    camera.updateProjectionMatrix();
    updateRender();
    renderer.render(scene, camera);
}

function processMenu({x, y, click}) {
    mouse.x = x - 5;
    mouse.y = y - 5;
    let ix = null;
    if ((mouse.y > 0) && (mouse.y < 38 * mobileCoeff)) {
        ix = Dagaz.View.view.menuHint(mouse.x);
        if (click) {
            Dagaz.View.view.menuClick(mouse.x);
        }
    }
    if ((tooltipIx === null) || (ix === null) || (tooltipIx != ix)) {
        tooltipIx = ix;
        Dagaz.View.view.invalidate();
    }
}

function getWorldFaceNormal(intersection) {
    const normalMatrix = new THREE.Matrix3().getNormalMatrix(intersection.object.matrixWorld);
    return intersection.face.normal.clone().applyMatrix3(normalMatrix).normalize();
}

Dagaz.View.getMove = function(camera, x, y, z, pos, board) {
  return null;
}

function mouseMove({x, y}, clean = false) {
  mouse.x = (x / window.innerWidth) * 2 - 1;
  mouse.y = -(y / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);
  if (_.isUndefined(Dagaz.View.view)) return;
  if (!_.isUndefined(Dagaz.View.view.drops)) {
      const intersects = raycaster.intersectObjects(Dagaz.View.view.drops);
      if ((intersects.length > 0) && intersects[0].object.isPosition) {
         if ((currPos === null) || (currPos != intersects[0].object)) {
            if (currPos !== null) {
               currPos.material = posMaterial;
            }
            currPos = intersects[0].object;
            currPos.material = getPlayerMaterial(Dagaz.View.view.controller.board.player, true);
         }
      } else {
         if (currPos !== null) {
            currPos.material = posMaterial;
            currPos = null;
         }
      }
  }
  processMenu({x, y});
  if(clean) {
      if ((Math.abs(lastX - x) <= 10) && (Math.abs(lastY - y) <= 10)) {
          let pos = currPos;
          if ((pieces.length > 0) && (Dagaz.View.PIECE_TYPE == PIECE_TYPE.CUBE)) {
              const intersects = raycaster.intersectObjects(pieces);
              const view = Dagaz.View.view;
              if ((intersects.length > 0) && (view.queue.length == 0)) {
                  const intersection = intersects[0];
                  const faceNormal = getWorldFaceNormal(intersection);
                  const move = Dagaz.View.getMove(camera, faceNormal.x, faceNormal.y, faceNormal.z, intersection.object.pos, Dagaz.Controller.app.board);
                  if (move !== null) {
                      const axis = Dagaz.View.getAxis(move);
                      const group = view.groupCubes(move);
                      if (!Dagaz.Controller.viewOff) {
                          view.queue.push({
                             type:  MOVE_TYPE.ROTATE,
                             state: ANIMATE_STATE.INIT,
                             piece: group,
                             axis:  axis,
                             phase: 1,
                             steps: 7
                          });
                      }
                      view.queue.push({
                         type:  MOVE_TYPE.REFRESH,
                         state: ANIMATE_STATE.INIT,
                         phase: 2,
                         move:  move
                      });
                      if (!_.isUndefined(Dagaz.Controller.play)) {
                         let sound = Dagaz.Sounds.move;
                         if (!_.isUndefined(move.sound)) {
                             sound = this.move.sound;
                         }
                         Dagaz.Controller.play(sound);
                      }
                      view.commit(move);
                  }
              }
          } else {
              if ((pos === null) && !_.isUndefined(Dagaz.View.view.hots)) {
                  const intersects = raycaster.intersectObjects(Dagaz.View.view.hots);
                  if (intersects.length > 0) {
                      const intersection = intersects[0];
                      if (intersection.object.isPosition) {
                          pos = intersection.object;
                      }
                  }
              }
          }
          if (pos !== null) {
              Dagaz.View.view.controller.click(pos.ix, pos.name);
          }
      }
  }
  Dagaz.View.view.invalidate();
}

// resize event
window.addEventListener('resize', changeDimensions);

// mouse events
window.addEventListener('mousedown', (event) => {
  lastX = event.clientX;
  lastY = event.clientY;
});
window.addEventListener('mousemove', (event) => {
  mouseMove({x: event.clientX, y: event.clientY});
  if (Dagaz.View.PIECE_TYPE == PIECE_TYPE.CUBE) return;
  if (Dagaz.Controller.app && !_.isUndefined(Dagaz.View.view.hots)) {
      const intersects = raycaster.intersectObjects(Dagaz.View.view.hots);
      if ((intersects.length > 0) && intersects[0].object.isPosition) {
          Dagaz.Controller.app.mouseLocate(Dagaz.Controller.app, +intersects[0].object.ix);
      } else {
          Dagaz.Controller.app.mouseLocate(Dagaz.Controller.app, null);
      }
  }
});
window.addEventListener('mouseup', (event) => {
  mouseMove({x: event.clientX, y: event.clientY}, true);
});

// touch events
window.addEventListener('touchstart', (event) => {
    leastTouch = event.touches[0];
    lastX = leastTouch.clientX;
    lastY = leastTouch.clientY;
    mouseMove({x: leastTouch.clientX, y: leastTouch.clientY});
});

window.addEventListener('touchmove', (event) => {
    if(event.touches.length) {
        leastTouch = event.touches[0];
        mouseMove({x: leastTouch.clientX, y: leastTouch.clientY});
    }
});

window.addEventListener('touchend', (event) => {
    if(leastTouch) {
        mouseMove({x: leastTouch.clientX, y: leastTouch.clientY}, true);
        leastTouch = null;
    }
});

// click events
window.addEventListener('click', (event) => {
  processMenu({x: event.clientX, y: event.clientY, click: true});
});

})();
