"use strict";

(function() {

Dagaz.View.markType = {
   KO: 4
};

let boardPresent  = false;
let isConfigured  = false;
let isInitialized = false;
let isFirstDraw   = true;
let currPos       = null;
let ko            = null;

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

const lineMaterial = new THREE.LineBasicMaterial({ color: 0x333333 });
const redMaterial = new THREE.LineBasicMaterial({ color: 0xFF0000 });

const posGeometry = new THREE.SphereGeometry(3, 32, 32);
const dotGeometry = new THREE.SphereGeometry(0.5, 15, 15);
const koGeometry  = new THREE.SphereGeometry(1, 15, 15);

const koMaterial = new THREE.MeshStandardMaterial({
    color: 0xFF0000,
    metalness: 0.3,
    roughness: 0.2
});

const posMaterial = new THREE.MeshStandardMaterial({
    color: 0x101010,
    metalness: 0.3,
    roughness: 0.2,
    transparent: true,
    opacity: 0,
    depthWrite: false
});

const blackMarkMaterial = new THREE.MeshStandardMaterial({
    color: 0x101010,
    metalness: 0.3,
    roughness: 0.2,
    transparent: true,
    opacity: 0.3,
    depthWrite: false
});

const whiteMarkMaterial = new THREE.MeshStandardMaterial({
    color: 0x505050,
    metalness: 0.3,
    roughness: 0.2,
    transparent: true,
    opacity: 0.3,
    depthWrite: false
});

const blackMaterial = new THREE.MeshStandardMaterial({
    color: 0x101010,
    metalness: 0.3,
    roughness: 0.2
});

const whiteMaterial = new THREE.MeshStandardMaterial({
    color: 0x505050,
    metalness: 0.3,
    roughness: 0.2
});

Dagaz.View.configure = function(view) {}

function View3D() {
  this.board   = null;
  this.res     = [];
  this.pos     = [];
  this.drops   = [];
  this.filled  = [];
  this.setup   = [];
  this.ctrls   = [];
  this.ko      = [];
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
  camera.position.set(settings.x, settings.z, settings.y);
  this.invalidate();
}

View3D.prototype.markPositions = function(type, positions) {
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
      this.invalidate();
  }
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

View3D.prototype.addPiece = function(piece, pos, model) {
  this.filled.push(+pos);
  const p = this.pos[pos].p;
  if (model.player == 2) {
      p.material = blackMaterial;
  } else {
      p.material = whiteMaterial;
  }
}

View3D.prototype.sync = function(board) {
  this.board = board;
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

View3D.prototype.defControl = function(imgs, hint, isVisible, proc, args) {
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

View3D.prototype.defPiece = function(img, name) {}

View3D.prototype.defPosition = function(name, x, y, dx, dy, z, dz) {
  if (_.isUndefined(dz)) {
      dz = dx;
  }
  var ix = Dagaz.Model.stringToPos(name);
  const p = new THREE.Mesh(posGeometry, posMaterial);
  p.position.set((x / 10) + settings.dx, (z / 10) + settings.dz, (y / 10) + settings.dy);
  p.name = name;
  p.ix = ix;
  p.isPosition = true;
  this.pos[ix] = {
      x: x, dx: dx,
      y: y, dy: dy,
      z: z, dz: dz,
      p: p, nm: name
  };
  scene.add(p);
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
  this.invalidate();
}

View3D.prototype.setDrops = function(positions) {
  positions = _.difference(positions, this.filled);
  this.drops = _.map(positions, function(ix) {
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
  renderer.render(scene, camera);
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
  if (h !== null) {
      drawTooltip(h.t, h.x, h.y);
  }
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

View3D.prototype.dropPiece = function(move, pos, piece, phase) {
  if (!phase) { phase = 1; }
  this.filled.push(+pos);
  const p = this.pos[pos].p;
  if (piece.player == 2) {
      p.material = blackMaterial;
  } else {
      p.material = whiteMaterial;
  }
  currPos = null;
}

View3D.prototype.movePiece = function(move, from, to, piece, phase, steps) {
  if (!phase) { phase = 1; }
  if (from == to) return;
  // TODO:

}

View3D.prototype.capturePiece = function(move, pos, phase) {
  if (!phase) { phase = 1; }
  this.filled = _.without(this.filled, +pos);
  const p = this.pos[pos].p;
  p.material = posMaterial;
  // TODO:

}

View3D.prototype.commit = function(move) {
  // TODO:

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

function mouseMove({x, y}, clean = false) {
  mouse.x = (x / window.innerWidth) * 2 - 1;
  mouse.y = -(y / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);
  if (_.isUndefined(Dagaz.View.view) || _.isUndefined(Dagaz.View.view.drops)) return;
  const intersects = raycaster.intersectObjects(Dagaz.View.view.drops);
  if ((intersects.length > 0) && intersects[0].object.isPosition) {
     if ((currPos === null) || (currPos != intersects[0].object)) {
        if (currPos !== null) {
           currPos.material = posMaterial;
        }
        currPos = intersects[0].object;
        if (Dagaz.View.view.controller.board.player == 2) {
            currPos.material = blackMarkMaterial;
        } else {
            currPos.material = whiteMarkMaterial;
        }
     }
  } else {
     if (currPos !== null) {
        currPos.material = posMaterial;
        currPos = null;
     }
  }
  processMenu({x, y});
  if(clean && currPos !== null) {
      if ((Math.abs(lastX - x) <= 10) && (Math.abs(lastY - y) <= 10)) {
          Dagaz.View.view.controller.click(currPos.ix, currPos.name);
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
