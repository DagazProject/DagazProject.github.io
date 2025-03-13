"use strict";

(function() {

var isConfigured  = false;
var isInitialized = false;
var isFirstDraw   = true;
var currPos       = null;

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

const clock = new THREE.Clock();
let prevTime = 0;

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

const posGeometry = new THREE.SphereGeometry(3, 32, 32);

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
  this.ready   = false;
}

Dagaz.View.getView = function() {
  if (_.isUndefined(Dagaz.View.view)) {
      Dagaz.View.view = new View3D();
  }
  return Dagaz.View.view;
}

View3D.prototype.init = function(canvas, controller) {
  if (!isInitialized) {
     scene.background = new THREE.Color('#eee');
     camera.position.set(100, 250, 100);
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
}

View3D.prototype.defControl = function(imgs, hint, isVisible, proc, args) {
  var type = 0;
  if (!_.isArray(imgs)) {
     if (imgs == "UndoControl") type = 1;
     if (imgs == "RedoControl") type = 2;
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
  p.position.set((x / 10) - 27, (z / 10) + 0.5, (y / 10) - 27);
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

View3D.prototype.invalidate = function() {
  renderer.render(scene, camera);
  let o = 5 + 3;
  ctx.clearRect(o, 5 + 3, 300, 32);
  for (let i = 0; i < this.ctrls.length; i++) {
      const t = this.ctrls[i];
      if (!t.v) continue;
      ctx.clearRect(o, 5 + 3, t.h[t.x].naturalWidth, t.h[t.x].naturalHeight);
      ctx.drawImage(t.h[t.x], o, 5 + 3, t.h[t.x].naturalWidth, t.h[t.x].naturalHeight);
      o += t.h[t.x].naturalWidth + 6;
  }
}

View3D.prototype.menuClick = function(x) {
  let o = 3;
  for (let i = 0; i < this.ctrls.length; i++) {
      const t = this.ctrls[i];
      if (!t.v) continue;
      if ((x > o) && (x < o + t.h[t.x].naturalWidth)) {
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
      o += t.h[t.x].naturalWidth + 6;
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

View3D.prototype.draw = function(canvas) {
  this.configure();
  if (this.allResLoaded()) {
      const elapsedTime = clock.getElapsedTime();
      const deltaTime = elapsedTime - prevTime;
      prevTime = elapsedTime;
      if (isFirstDraw) {
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
         const orbits = new THREE.OrbitControls(camera, renderer.domElement);
         orbits.addEventListener('change', () => this.invalidate());
         isFirstDraw = false;
      }
      this.invalidate();
  }
}

window.addEventListener('resize', () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  const aspectRatio = sizes.width / sizes.height;
  camera.left = viewDistance * -1 * aspectRatio;
  camera.right = viewDistance * aspectRatio;
  camera.updateProjectionMatrix();
  updateRender();
  renderer.render(scene, camera);
});

function mouseMove(event) {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
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
  Dagaz.View.view.invalidate();
}

window.addEventListener('mousemove', (event) => {
  mouseMove(event);
});

window.addEventListener('click', (event) => {
  mouseMove(event);
  if (currPos !== null) {
      Dagaz.View.view.controller.click(currPos.ix, currPos.name);
      Dagaz.View.view.invalidate();
  }
});

overlay.addEventListener('click', (event) => {
  mouse.x = event.clientX - 5;
  mouse.y = event.clientY - 5;
  if ((mouse.y > 0) && (mouse.y < 38)) {
     Dagaz.View.view.menuClick(mouse.x);
  }
});

})();
