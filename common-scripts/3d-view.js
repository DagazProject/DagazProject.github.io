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
     console.log('Initialized!');
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
    undefined,
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

View3D.prototype.defPiece = function(img, name) {
}

View3D.prototype.defPosition = function(name, x, y, dx, dy, z, dz) {
  if (_.isUndefined(dz)) {
      dz = dx;
  }
  var ix = Dagaz.Model.stringToPos(name);
  const p = new THREE.Mesh(posGeometry, posMaterial);
  p.position.set((x / 10) - 27, (z / 10) + 1, (y / 10) - 27);
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

View3D.prototype.configure = function() {
  if (!isConfigured && this.controller) {
      Dagaz.View.configure(this);
      var board = this.controller.getBoard();
      board.setup(this, true);
      this.controller.done();
      isConfigured = true;
      console.log('Configured!');
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

View3D.prototype.invalidate = function() {
  renderer.render(scene, camera);
}

View3D.prototype.dropPiece = function(move, pos, piece, phase) {
  if (!phase) { phase = 1; }
  console.log('Drop: ' + phase);
  console.log(move);
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
  console.log('Move: ' + phase);
  console.log(move);
  if (from == to) return;
  // TODO:

}

View3D.prototype.capturePiece = function(move, pos, phase) {
  if (!phase) { phase = 1; }
  console.log('Capture: ' + phase);
  console.log(move);
  this.filled = _.without(this.filled, +pos);
  const p = this.pos[pos].p;
  p.material = posMaterial;
  // TODO:

}

View3D.prototype.commit = function(move) {
  console.log('Commit:');
  console.log(move);
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
            new THREE.MeshBasicMaterial({ color: '#FFEDCB' }),
            new THREE.MeshBasicMaterial({ color: '#AC5146' }),
            new THREE.MeshBasicMaterial({ color: '#AC5146' })
         ];
         const boardBlock = new THREE.Mesh(boardGeometry, materials);
         scene.add(boardBlock);
         new THREE.OrbitControls(camera, renderer.domElement);
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

window.addEventListener('mousemove', (event) => {
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
});

window.addEventListener('click', (event) => {
  if (currPos !== null) {
      Dagaz.View.view.controller.click(currPos.ix, currPos.name);
  }
});

})();
