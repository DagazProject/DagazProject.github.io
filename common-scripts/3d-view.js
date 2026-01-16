"use strict";

(function() {

const BOARD_TYPE = {
   RECT:              0,
   TRIANGLE:          1
};

const PIECE_TYPE = {
   NONE:              0,
   CUBE:              1,
   MODEL:             2,
   TOKEN:             3,
   PLATFORM:          4,
   TRIANGLE:          5
};

const MOVE_TYPE = {
   MOVE:              0,
   ROTATE:            1,
   REFRESH:           2,
   PROMOTE:           3,
   SOUND:             4
};

Dagaz.View.IS_DIAGONAL   = false;
Dagaz.View.TARGET_COLOR  = 0x004000;
Dagaz.View.TARGET_RADIUS = 2;
Dagaz.View.LARGE_RADIUS  = 3;
Dagaz.View.TARGET_FLAT   = false;
Dagaz.View.TARGET_LARGE  = false;
Dagaz.View.TARGET_SZ     = 0;

const TEXTURE_CANVAS_SZ  = 256;

Dagaz.View.NO_PIECE      = true;
Dagaz.View.PIECE_TYPE    = PIECE_TYPE.NONE;
Dagaz.View.STEP_CNT      = 3;
Dagaz.View.SPEED         = 0.523;
Dagaz.View.RENDER_ORDER  = false;
Dagaz.View.RECT_OPACITY  = false;

let resTask = [];
let resList = [];

Dagaz.View.markType = {
   TARGET:            0,
   KO:                4
};

const ANIMATE_STATE = {
  INIT:               0,
  READY:              1,
  DONE:               2
};

const menus = [{
  v:  true,
  x:  5 + 3,
  y:  5 + 3,
  sx: 3,
  sy: 0,
  dx: 800,
  dy: 200,
  items: []
}];

let isConfigured   = false;
let isSetuped      = false;
let isInitialized  = false;
let isFirstDraw    = true;
let currPos        = null;
let ko             = null;
let cameraSettings = null;
let onceResolve     = true;

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
let pieceKeys        = [];

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
let   prevTime    = 0;
let   tooltipIx   = null;
let   tooltipHide = -1;
let   leastTouch  = null;

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

const lineMaterial   = new THREE.LineBasicMaterial({ color: 0x333333, transparent: true, opacity: 0.3});
const redMaterial    = new THREE.LineBasicMaterial({ color: 0xFF0000 });

const posGeometry    = new THREE.SphereGeometry(3, 32, 32);
const dotGeometry    = new THREE.SphereGeometry(0.5, 15, 15);
const koGeometry     = new THREE.SphereGeometry(1, 15, 15);

let targetGeometry   = null;
let largeGeometry    = null;

const koMaterial = new THREE.MeshStandardMaterial({
    color: 0xFF0000,
    metalness: 0.3,
    roughness: 0.2
});

const targetMaterial = new THREE.MeshStandardMaterial({
    color: Dagaz.View.TARGET_COLOR,
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
  this.ko      = [];
  this.targets = [];
  this.queue   = [];
  this.boards  = [];
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
      const l = this.pos[pos].l;
      t.material = posMaterial;
      if (l !== null) {
          l.material = posMaterial;
      }
  }, this);
}

View3D.prototype.existsPiece = function(pos) {
  for (let i = 0; i < pieces.length; i++) {
      const p = pieces[i];
      if (p.pos == pos) return true;
  }
  return false;
}

View3D.prototype.markPositions = function(type, positions) {
  if (Dagaz.View.PIECE_TYPE == PIECE_TYPE.CUBE) return;
  if (type == Dagaz.View.markType.TARGET) {
      this.clearTargets();
      this.targets = positions;
      _.each(this.targets, function(pos) {
          const t = this.pos[pos].t;
          const l = this.pos[pos].l;
          if (this.existsPiece(pos) && (l !== null)) {
              l.material = targetMaterial;
          } else {
              t.material = targetMaterial;
          }
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
              if (Dagaz.View.RENDER_ORDER) {
                  ko.renderOrder = 2;
              }
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
     scene.background = new THREE.Color(0xE5E5E5);
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
  _.each(pieces, function(p) {
      scene.remove(p);
  });
  _.each(cubes, function(p) {
      scene.remove(p);
  });
  pieces = [];
  cubes = [];
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

function addCube(p, pos, model) {
  const v = model.getValue(0);
  let gg = null;
  if (v !== null) {
      _.each(cubes, function(group) {
            if (group.groupId === null) return;
            if (group.groupId != v) return;
            gg = group;
      });
  }
  const pieceType = pieceTypes[model.type*10 + (+model.player)];
  const materials = [
        new THREE.MeshBasicMaterial({ color: pieceType.colors[2] }), // right
        new THREE.MeshBasicMaterial({ color: pieceType.colors[3] }), // left
        new THREE.MeshBasicMaterial({ color: pieceType.colors[0] }), // top
        new THREE.MeshBasicMaterial({ color: pieceType.colors[5] }), // bottom
        new THREE.MeshBasicMaterial({ color: pieceType.colors[1] }), // forward
        new THREE.MeshBasicMaterial({ color: pieceType.colors[4] })  // backward
  ];
  const group = new THREE.Group();
  let pieceGeometry = null;
  group.pos = pos;
  if (gg !== null) {
      gg.params.c++;
      gg.params.nx  = Math.min(gg.params.nx, p.x - p.dx/2);
      gg.params.mx  = Math.max(gg.params.mx, p.x + p.dx/2);
      gg.params.ny  = Math.min(gg.params.ny, p.y - p.dy/2);
      gg.params.my  = Math.max(gg.params.my, p.y + p.dy/2);
      gg.params.nz  = Math.min(gg.params.nz, p.z - p.dz/2);
      gg.params.mz  = Math.max(gg.params.mz, p.z + p.dz/2);
      gg.params.x   = (gg.params.mx + gg.params.nx) / 2;
      gg.params.y   = (gg.params.my + gg.params.ny) / 2;
      gg.params.z   = (gg.params.mz + gg.params.nz) / 2;
      gg.params.dx  = (gg.params.mx - gg.params.nx);
      gg.params.dy  = (gg.params.my - gg.params.ny);
      gg.params.dz  = (gg.params.mz - gg.params.nz);
      pieceGeometry = new THREE.BoxGeometry(gg.params.dx / 10, gg.params.dz / 10, gg.params.dy / 10);
      group.params  = gg.params;
      scene.remove(gg);
      pieces = _.filter(pieces, function(p) {
         return p.groupId != v;
      });
      cubes = _.filter(cubes, function(p) {
         return p.groupId != v;
      });
  } else {
      pieceGeometry = new THREE.BoxGeometry(p.dx / 10, p.dz / 10, p.dy / 10);
      group.params  = {
         x: p.x, dx: p.dx, nx: p.x - p.dx/2, mx: p.x + p.dx/2,
         y: p.y, dy: p.dy, ny: p.y - p.dy/2, my: p.y + p.dy/2,
         z: p.z, dz: p.dz, nz: p.z - p.dz/2, mz: p.z + p.dz/2,
         c: 1, id: v
      };
  }
  const piece = new THREE.Mesh(pieceGeometry, materials);
  piece.pos = pos;
  piece.positions = (gg === null) ? [+pos] : _.union(gg.positions, [+pos]);
  piece.groupId = v;
  group.groupId = v;
  group.add(piece);
  const edgeColor = 0x000000;
  const edgesGeometry = new THREE.EdgesGeometry(pieceGeometry);
  const edgesMaterial = new THREE.LineBasicMaterial({ 
        color: edgeColor,
        linewidth: 3
  });
  const edges = new THREE.LineSegments(edgesGeometry, edgesMaterial);
  group.add(edges);
  group.position.set(group.params.x / 10, group.params.z / 10, group.params.y / 10);
  group.positions = (gg === null) ? [+pos] : _.union(gg.positions, [+pos]);
  pieces.push(piece);
  return group;
}

View3D.prototype.addPieceTriangle = function(pieceType, pos) {
  const p = this.pos[pos];
  const geometry = createTriangularPrism(pieceType.dx / 10, 1, pieceType.dy / 10);
  const materials = [
     // Материал для верхнего основания (с текстурой)
     new THREE.MeshBasicMaterial({ 
           color: pieceType.colors[0], 
           transparent: true, 
           opacity: pieceType.opacity,
           side: THREE.DoubleSide
     }),
     // Материал для остальных граней
     new THREE.MeshBasicMaterial({ 
           color: pieceType.colors[1], 
           transparent: true, 
           opacity: pieceType.opacity,
           side: THREE.DoubleSide
     }),
  ];
  // Назначаем материал группе граней
  geometry.clearGroups();
  // Верхнее основание (индексы 3-5)
  geometry.addGroup(3, 3, 0); // 0 - материал с текстурой
  // Все остальные грани
  geometry.addGroup(0, 3, 1); // нижнее основание
  geometry.addGroup(6, 18, 1); // боковые грани
  const edgeColor = 0x555555;
  const edgesGeometry = new THREE.EdgesGeometry(geometry);
  const edgesMaterial = new THREE.LineBasicMaterial({ 
        color: edgeColor,
        linewidth: 3
  });
  const edges = new THREE.LineSegments(edgesGeometry, edgesMaterial);
  const piece = new THREE.Mesh(geometry, materials);
  const group = new THREE.Group();
  group.add(piece);
  group.add(edges);
  if (pieceType.angle) {
      group.rotation.y = pieceType.angle;
  }
  group.pos = pos;
  group.type = pieceType;
  group.position.set(p.x / 10, p.z / 10, p.y / 10);
  if (Dagaz.View.RENDER_ORDER) {
      group.renderOrder = 2;
  }
  scene.add(group);   
  pieces.push(group);  
}

View3D.prototype.addPiecePlatform = function(pieceType, pos) {
  const p = this.pos[pos];
  let geometry = new THREE.BoxGeometry(pieceType.dx / 10, 1, pieceType.dy / 10);
  let materials = [
        new THREE.MeshBasicMaterial({ color: pieceType.colors[2] }),
        new THREE.MeshBasicMaterial({ color: pieceType.colors[3] }),
        new THREE.MeshBasicMaterial((pieceType.img !== null) ? { map: pieceType.img.t, transparent: true, opacity: pieceType.opacity } : { color: pieceType.colors[i] } ),
        new THREE.MeshBasicMaterial({ color: pieceType.colors[5], transparent: true, opacity: 0.3 }),
        new THREE.MeshBasicMaterial({ color: pieceType.colors[1] }),
        new THREE.MeshBasicMaterial({ color: pieceType.colors[4] })
  ];
  if (Dagaz.View.RECT_OPACITY) {
      geometry = createRectangularPrismWithGroups(
                    pieceType.dx / 10,  // width
                    1,                  // height (толщина доски)
                    pieceType.dy / 10   // depth
      );
      materials = [
                    // Материал 0: Верхняя грань (с текстурой)
                    new THREE.MeshBasicMaterial({ 
                        map: pieceType.img !== null ? pieceType.img.t : null,
                        color: pieceType.img === null ? pieceType.colors[2] : 0xFFFFFF,
                        transparent: true,
                        opacity: pieceType.opacity,
                        side: THREE.DoubleSide
                    }),
                    // Материал 1: Остальные грани (цветные)
                    new THREE.MeshBasicMaterial({ 
                        color: pieceType.colors[1] || 0x8B4513, // или используйте цвет из настроек
                        transparent: true,
                        opacity: 0.3,
                        side: THREE.DoubleSide
                    })
      ];
  }
  const piece = new THREE.Mesh(geometry, materials);
  piece.pos = pos;
  piece.type = pieceType;
  piece.position.set(p.x / 10, p.z / 10, p.y / 10);
  if (Dagaz.View.RENDER_ORDER) {
      piece.renderOrder = 2;
  }
  scene.add(piece);   
  pieces.push(piece);  
}

View3D.prototype.addPiece = function(piece, pos, model) {
  this.filled.push(+pos);
  const p = this.pos[pos];
  if (Dagaz.View.PIECE_TYPE == PIECE_TYPE.CUBE) {
      const group = addCube(p, pos, model);
      if (Dagaz.View.RENDER_ORDER) {
          group.renderOrder = 2;
      }
      scene.add(group);   
      cubes.push(group);
  } else if (Dagaz.View.PIECE_TYPE == PIECE_TYPE.TOKEN || Dagaz.View.PIECE_TYPE == PIECE_TYPE.MODEL) {
      const pieceType = pieceTypes[model.type*10 + (+model.player)];
      if (pieceType && pieceType.kind == PIECE_TYPE.TOKEN) {
          const piece = new THREE.Mesh(pieceType.geometry, [pieceType.matborder, pieceType.mattop]);
          piece.pos = pos;
          piece.type = pieceType;
          piece.position.set(p.x / 10, p.z / 10, p.y / 10);
          if (Dagaz.View.RENDER_ORDER) {
              piece.renderOrder = 2;
          }
          piece.scale.set(2.5, 2.5, 2.5);
          scene.add(piece);   
          pieces.push(piece);
      } else if (pieceType && pieceType.kind == PIECE_TYPE.MODEL) {
          const piece = new THREE.Mesh(pieceType.geometry, pieceType.material);
          if (Dagaz.View.IS_DIAGONAL) {
              if (model.player == 1) {
                  piece.rotation.y = Math.PI * 1.25;
              } else {
                  piece.rotation.y = Math.PI * 0.25;
              }
          } else {
              if (model.player == 1) {
                  piece.rotation.y = Math.PI;
              }
          }
          piece.pos = pos;
          piece.type = pieceType;
          piece.position.set(p.x / 10, p.z / 10, p.y / 10);
          if (Dagaz.View.RENDER_ORDER) {
              piece.renderOrder = 2;
          }
          piece.scale.set(2.5, 2.5, 2.5);
          scene.add(piece);   
          pieces.push(piece);
      } else if (pieceType && pieceType.kind == PIECE_TYPE.PLATFORM) {
          this.addPiecePlatform(pieceType, pos);
      } else if (pieceType && pieceType.kind == PIECE_TYPE.TRIANGLE) {
          this.addPieceTriangle(pieceType, pos);
      }
  } else if (Dagaz.View.NO_PIECE) {
      p.p.material = getPlayerMaterial(model.player, false);
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

View3D.prototype.findRes = function(res) {
  for (let i = 0; i < this.res.length; i++) {
       if (this.res[i].r == res) return this.res[i];
  }
  return null;
}

View3D.prototype.defBoard = function(res) {}

View3D.prototype.defBoardTriangular = function(dx, dy, dz, z, colors, res, opacity) {
  if (_.isUndefined(opacity)) opacity = 1;
  let board = null;
  if (!_.isUndefined(res)) {
      board = this.findRes(res);
      if (board === null) {
          const img = document.getElementById(res);
          const t = new Promise((resolve) => {
                textureLoader.load(
                    img.currentSrc,
                    resolve,
                    undefined,
                    undefined,
                  { crossOrigin: 'anonymous' }
                );
          });
          resTask.push(t); 
          board = {
             r: res,
             h: img
          };
          resList.push(board);
          this.res.push(board);
      }
  }
  this.boards.push({
     dx: dx, dy: dy, dz: dz, z: z,
     colors: colors, img: board,
     opacity: opacity, type: BOARD_TYPE.TRIANGLE
  });
}

View3D.prototype.defBoard3D = function(dx, dy, dz, z, colors, res, opacity) {
  if (_.isUndefined(opacity)) opacity = 1;
  let board = null;
  if (!_.isUndefined(res)) {
      board = this.findRes(res);
      if (board === null) {
          const img = document.getElementById(res);
          const t = new Promise((resolve) => {
                textureLoader.load(
                    img.currentSrc,
                    resolve,
                    undefined,
                    undefined,
                  { crossOrigin: 'anonymous' }
                );
          });
          resTask.push(t); 
          board = {
             r: res,
             h: img
          };
          resList.push(board);
          this.res.push(board);
      }
  }
  this.boards.push({
     dx: dx, dy: dy, dz: dz, z: z,
     colors: colors, img: board,
     opacity: opacity, type: BOARD_TYPE.RECT
  });
}

View3D.prototype.clearControls = function() {
  for (let i = 0; i < menus[0].items.length; i++) {
       if ((menus[0].items[i].y == 1) || (menus[0].items[i].y == 2)) menus[0].items[i].v = false;
  }
  this.invalidate();
}

View3D.prototype.defControl = function(imgs, hint, isVisible, proc, args, selector) {
  if (!_.isUndefined(selector) && (selector != Dagaz.Model.getResourceSelector())) return;
  var type = 0;
  if (!_.isArray(imgs)) {
     if (imgs == "UndoControl") type = 1;
     if (imgs == "RedoControl") type = 2;
     if (imgs == "HomeControl") type = 3;
     imgs = [imgs];
  }
  imgs = _.map(imgs, function(res) {
     const img = document.getElementById(res);
     this.res.push({h:img});
     return img;
  }, this);
  menus[0].items.push({
     h: imgs,
     x: 0,
     t: hint,
     v: isVisible,
     p: proc,
     a: args,
     y: type
  });
}

View3D.prototype.defSubControl = function(ix, imgs, hint, isVisible, proc, args) {
  if (_.isUndefined(menus[ix])) {
      menus[ix] = {
         v: false,
         x: 3  + 5,
         y: 50 + 5,
         sx: 3,
         sy: 0,
         dx: 300,
         dy: 70,
         items: []
      };
  }
  if (_.isUndefined(isVisible)) isVisible = true;
  if (!_.isArray(imgs)) {
     imgs = [imgs];
  }
  imgs = _.map(imgs, function(res) {
     const img = document.getElementById(res);
     this.res.push({h:img});
     return img;
  }, this);
  menus[ix].items.push({
     h: imgs,
     x: 0,
     t: hint,
     v: isVisible,
     p: proc,
     a: args
  });
}

View3D.prototype.defPieceToken = function(type, player, path, model, image, bump, color) {
  if (_.isUndefined(color)) color = 0x3F3F3F;
  Dagaz.View.NO_PIECE = false;
  Dagaz.View.PIECE_TYPE = PIECE_TYPE.TOKEN;
  const key = type * 10 + (+player);
  if (!_.isUndefined(image)) {
      const img = document.getElementById(image);
      this.res.push({h: img});
  }
  if (!_.isUndefined(bump)) {
      const bmp = document.getElementById(bump);
      this.res.push({h: bmp});
  }
  pieceKeys.push(key);
  pieceTypes[key] = {
     kind:   PIECE_TYPE.TOKEN,
     type:   type,
     player: player,
     model:  path + '/' + model,
     image:  !_.isUndefined(image) ? document.getElementById(image) : null,
     bump:   !_.isUndefined(bump)  ? document.getElementById(bump)  : null,
     color:  color
  };
}

View3D.prototype.defPieceTriangle = function(type, player, dx, dy, dz, sz, colors, angle, res, opacity) {
  Dagaz.View.NO_PIECE = false;
  Dagaz.View.PIECE_TYPE = PIECE_TYPE.MODEL;
  if (_.isUndefined(opacity)) opacity = 1;
  Dagaz.View.NO_PIECE = false;
  const key = type*10 + (+player);
  pieceKeys.push(key);
  pieceTypes[key] = {
     kind:    PIECE_TYPE.TRIANGLE,
     type:    type,
     player:  player,
     dx:      dx,
     dy:      dy,
     dz:      dz, 
     sz:      sz,
     colors:  colors,
     opacity: opacity,
     angle:   angle
  };
}

View3D.prototype.defPiecePlatform = function(type, player, dx, dy, dz, sz, colors, res, opacity) {
  Dagaz.View.NO_PIECE = false;
  Dagaz.View.PIECE_TYPE = PIECE_TYPE.MODEL;
  if (_.isUndefined(opacity)) opacity = 1;
  Dagaz.View.NO_PIECE = false;
  const key = type*10 + (+player);
  pieceKeys.push(key);
  let p = null;
  if (!_.isUndefined(res)) {
      p = this.findRes(res);
      if (p === null) {
          const img = document.getElementById(res);
          const t = new Promise((resolve) => {
                textureLoader.load(
                    img.currentSrc,
                    resolve,
                    undefined,
                    undefined,
                  { crossOrigin: 'anonymous' }
                );
          });
          resTask.push(t); 
          p = {
             r: res,
             h: img
          };
          resList.push(p);
          this.res.push(p);
      }
  }
  pieceTypes[key] = {
     kind:    PIECE_TYPE.PLATFORM,
     type:    type,
     player:  player,
     dx:      dx,
     dy:      dy,
     dz:      dz, 
     sz:      sz,
     colors:  colors,
     opacity: opacity,
     img:     p
  };
}

View3D.prototype.defPieceModel = function(type, player, path, model, color) {
  Dagaz.View.NO_PIECE = false;
  Dagaz.View.PIECE_TYPE = PIECE_TYPE.MODEL;
  const key = type*10 + (+player);
  pieceKeys.push(key);
  pieceTypes[key] = {
     kind: PIECE_TYPE.MODEL,
     type: type,
     player: player,
     model: path + '/' + model + '/' + model + '.js',
     color: color,
     textures: {
         diffuse: path + '/' + model + '/' + model + '-diffusemap.jpg',
         normal: path + '/' + model + '/' + model + '-normalmap.jpg'
     }
  };
}

View3D.prototype.defPieceCube = function(type, player, colors) {
  Dagaz.View.NO_PIECE = false;
  Dagaz.View.PIECE_TYPE = PIECE_TYPE.CUBE;
  pieceTypes[type*10 + (+player)] = {
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
  p.position.set((x / 10), (z / 10), (y / 10));
  if (Dagaz.View.RENDER_ORDER) {
      p.renderOrder = 2;
  }
  p.name = name;
  p.ix = ix;
  p.isPosition = true;
  allPositions.push(p);
  if (Dagaz.View.TARGET_FLAT) {
      targetGeometry = new THREE.CylinderGeometry(Dagaz.View.TARGET_RADIUS, Dagaz.View.TARGET_RADIUS, 1, 32);
      if (Dagaz.View.TARGET_LARGE) {
          largeGeometry  = new THREE.CylinderGeometry(Dagaz.View.LARGE_RADIUS, Dagaz.View.LARGE_RADIUS, 1, 32);
      }
  } else {
      targetGeometry = new THREE.SphereGeometry(Dagaz.View.TARGET_RADIUS, 32, 32); 
  }
  const t = new THREE.Mesh(targetGeometry, posMaterial);
  t.position.set((x / 10), (z / 10) + Dagaz.View.TARGET_SZ, (y / 10));
  if (Dagaz.View.RENDER_ORDER) {
      t.renderOrder = 2;
  }
  let l = null;
  if (largeGeometry !== null) {
      l = new THREE.Mesh(largeGeometry, posMaterial);
      l.position.set((x / 10), (z / 10) + Dagaz.View.TARGET_SZ, (y / 10));
      if (Dagaz.View.RENDER_ORDER) {
          l.renderOrder = 2;
      }
      scene.add(l);
  }
  this.pos[ix] = {
      x: x, dx: dx,
      y: y, dy: dy,
      z: z, dz: dz,
      p: p, nm: name,
      t: t, l:  l
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
  if (resTask.length > 0) {
      Promise.all(resTask).then((results) => {
          for (let i = 0; i < results.length; i++) {
               if (i >= resList.length) break;
               resList[i].t = results[i];
          }
          resTask = [];
          resList = [];
          this.invalidate();
      }).catch((error) => {
          console.error('Error loading assets:', error);
      });
      return false;
  }
  if (onceResolve && ((Dagaz.View.PIECE_TYPE == PIECE_TYPE.MODEL) || (Dagaz.View.PIECE_TYPE == PIECE_TYPE.TOKEN))) {
      onceResolve = false;
      const loadingManager = new THREE.LoadingManager();
      const textureLoader = new THREE.TextureLoader(loadingManager);
      const jsonLoader = new THREE.JSONLoader(loadingManager);
      let res = []; let ix = 0;
      for (let i = 0; i < pieceKeys.length; i++) {
           const key = pieceKeys[i];
           if (pieceTypes[key].kind >= PIECE_TYPE.PLATFORM) continue;
           pieceTypes[key].ix = ix++;
           if (Dagaz.View.PIECE_TYPE == PIECE_TYPE.MODEL) {
               const d = new Promise((resolve) => {
                 textureLoader.load(pieceTypes[key].textures.diffuse, resolve);
               });
               res.push(d);
               const t = new Promise((resolve) => {
                 textureLoader.load(pieceTypes[key].textures.normal, resolve);
               });
               res.push(t);
           }
           const m = new Promise((resolve, reject) => {
                 jsonLoader.load(pieceTypes[key].model, (geometry, materials) => {
                     resolve({ geometry, materials });
                 }, undefined, reject);
           });
           res.push(m);
      }
      if (res.length > 0) {
          Promise.all(res).then((results) => {
                for (let i = 0; i < pieceKeys.length; i++) {
                     const key = pieceKeys[i];
                     if (pieceTypes[key].kind >= PIECE_TYPE.PLATFORM) continue;
                     let modelData;
                     if (Dagaz.View.PIECE_TYPE == PIECE_TYPE.MODEL) {
                         const ix = pieceTypes[key].ix;
                         modelData = results[ix * 3 + 2];
                         const diffuseMap = results[ix * 3];
                         const normalMap = results[ix * 3 + 1];
                         const color = pieceTypes[key].color;
                         pieceTypes[key].material = new THREE.MeshStandardMaterial({
                             map: diffuseMap,
                             normalMap: normalMap,
                             metalness: 0.3,
                             roughness: 0.7,
                             color: color,
                             emissive: 0x111111,
                             emissiveIntensity: 1.4,
                             side: THREE.DoubleSide
                         });
                     }
                     if (Dagaz.View.PIECE_TYPE == PIECE_TYPE.TOKEN) {
                         const ix = pieceTypes[key].ix;
                         modelData = results[ix];
                         const specular="#050505", shininess=30, color=pieceTypes[key].color;

                         var canvasDiffuse = document.createElement('canvas');
                         canvasDiffuse.width = canvasDiffuse.height=TEXTURE_CANVAS_SZ;
                         var textureDiff = new THREE.Texture(canvasDiffuse);
                         if (pieceTypes[key].image !== null) {
                             var ctxDiff = canvasDiffuse.getContext("2d");
                             ctxDiff.drawImage(pieceTypes[key].image, 0, 0, TEXTURE_CANVAS_SZ, TEXTURE_CANVAS_SZ);
                         }
                         textureDiff.needsUpdate = true;

                         var canvasBump = document.createElement('canvas');
                         canvasBump.width = canvasBump.height=TEXTURE_CANVAS_SZ;
                         var textureBump = new THREE.Texture(canvasBump);
                         if (pieceTypes[key].bump !== null) {
                             var ctxBump = canvasBump.getContext("2d");
                             ctxBump.drawImage(pieceTypes[key].bump, 0, 0, TEXTURE_CANVAS_SZ,TEXTURE_CANVAS_SZ);
                         }
                         textureBump.needsUpdate = true;

                         pieceTypes[key].matborder = new THREE.MeshPhongMaterial({
                               name: "pieceborders",
                               color : color,
                               specular: specular,
                               shininess: shininess
                         });

                         if (pieceTypes[key].image !== null) {
                             pieceTypes[key].mattop = new THREE.MeshPhongMaterial({
                                   name: "piecetop",
                                   color : color,
                                   specular: specular,
                                   shininess: shininess,
                                   map: textureDiff,
                                   bumpMap: textureBump,
                                   bumpScale: 0.2
                             });
                         } else {
                             pieceTypes[key].mattop = pieceTypes[key].matborder;
                         }

                     }
                     pieceTypes[key].geometry = modelData.geometry;
                }
          }).catch((error) => {
                console.error('Error loading assets:', error);
          });
          return false;
      }
  } else {
      for (let i = 0; i < pieceKeys.length; i++) {
          const key = pieceKeys[i];
          if (pieceTypes[key].kind >= PIECE_TYPE.PLATFORM) continue;
          if (_.isUndefined(pieceTypes[key].material) && (_.isUndefined(pieceTypes[key].mattop || pieceTypes[key].matborder))) return false;
          if (_.isUndefined(pieceTypes[key].geometry)) return false;
      }
  }
  this.ready = true;
  return true;
}

const overlay = document.getElementById('overlay');
const ctx = overlay.getContext('2d');

View3D.prototype.configure = function() {
  if (!isConfigured && this.controller) {
      Dagaz.View.configure(this);
      isConfigured = true;

      // DEBUG:
      overlay.width = 1200;
      overlay.height = 150;  
  }
}

View3D.prototype.initBoard = function() {
  if (!isSetuped && this.controller) {
      isSetuped = true;
      var board = this.controller.getBoard();
      board.setup(this, true);
      this.controller.done();
  }
}

View3D.prototype.reInit = function(board) {
  this.clear();
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
  for (let i = 0; i < menus[0].items.length; i++) {
     const t = menus[0].items[i];
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

Dagaz.View.switchMenu = function(ix) {
  menus[ix].v = !menus[ix].v;
  Dagaz.View.view.invalidate();
}

View3D.prototype.invalidate = function() {
  let h = null;
  for (let i = 0; i < menus.length; i++) {
       const x = this.menuDraw(menus[i]);
       if (h === null) h = x;
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

View3D.prototype.menuDraw = function(m) {
  if (!m.v) return null;
  let o = m.x; let h = null;
  ctx.clearRect(o, m.y, m.dx * mobileCoeff, m.dy * mobileCoeff);
  for (let i = 0; i < m.items.length; i++) {
      const t = m.items[i];
      if (!t.v) continue;
      ctx.clearRect(o, m.y, t.h[t.x].naturalWidth * mobileCoeff, t.h[t.x].naturalHeight * mobileCoeff);
      ctx.drawImage(t.h[t.x], 0, 0, t.h[t.x].naturalWidth, t.h[t.x].naturalHeight
                            , o, m.y, t.h[t.x].naturalWidth * mobileCoeff, t.h[t.x].naturalHeight * mobileCoeff);
      if ((tooltipIx !== null) && (tooltipIx == i) && (tooltipIx != tooltipHide) && t.t) {
         h = {
            t: t.t,
            x: o,
            y: t.h[t.x].naturalHeight * 2
         };
      }
      o += (t.h[t.x].naturalWidth + 6) * mobileCoeff;
  }
  return h;
}

View3D.prototype.menuClick = function(x, m) {
  if (_.isUndefined(m)) m = menus[0];
  let o = m.sx;
  for (let i = 0; i < m.items.length; i++) {
      const t = m.items[i];
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
         tooltipHide = tooltipIx;
         this.invalidate();
      }
      o += (t.h[t.x].naturalWidth + m.sx*2) * mobileCoeff;
  }
}

View3D.prototype.menuHint = function(x, m) {
  if (_.isUndefined(m)) m = menus[0];
  let o = m.sx;
  for (let i = 0; i < m.items.length; i++) {
      const t = m.items[i];
      if (!t.v) continue;
      if ((x > o) && (x < o + t.h[t.x].naturalWidth * mobileCoeff)) {
          return i;
      }
      o += (t.h[t.x].naturalWidth + m.sx*2) * mobileCoeff;
  }
}

function rotateAroundWorldAxis(obj, axis, point, angle) {
  const localAxis = new THREE.Vector3().copy(axis).normalize();
  const quaternion = new THREE.Quaternion();
  quaternion.setFromAxisAngle(localAxis, angle);
  obj.position.sub(point);
  obj.position.applyQuaternion(quaternion);
  obj.position.add(point);
  obj.rotateOnWorldAxis(axis, angle);
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
      if (q.type  != MOVE_TYPE.SOUND) return;
      if (q.state != ANIMATE_STATE.READY) return;
      if (q.phase != phase) return;
      Dagaz.Controller.play(q.sound);
      q.state = ANIMATE_STATE.DONE;
      changed = true;
  }, this);
  _.each(this.queue, function(q) {
      if (q.type  != MOVE_TYPE.PROMOTE) return;
      if (q.state != ANIMATE_STATE.READY) return;
      if (q.phase != phase) return;
      let piece = null;
      if (q.pieceType.kind == PIECE_TYPE.TOKEN) {
          piece = new THREE.Mesh(q.pieceType.geometry, [q.pieceType.matborder, q.pieceType.mattop]);
      } else {
          piece = new THREE.Mesh(q.pieceType.geometry, q.pieceType.material);
          if (Dagaz.View.IS_DIAGONAL) {
              if (q.player == 1) {
                  piece.rotation.y = Math.PI * 1.25;
              } else {
                  piece.rotation.y = Math.PI * 0.25;
              }
          } else {
              if (q.player == 1) {
                  piece.rotation.y = Math.PI;
              }
          }
      }
      piece.pos = q.piece.pos;
      piece.type = q.pieceType;
      const p = this.pos[piece.pos];
      piece.position.set(p.x / 10, p.z / 10, p.y / 10);
      if (Dagaz.View.RENDER_ORDER) {
          piece.renderOrder = 2;
      }
      piece.scale.set(2.5, 2.5, 2.5);
      this.removePiece(q.piece.pos);
      scene.remove(q.piece);
      if (q.pieceType.kind == PIECE_TYPE.PLATFORM) {
          this.addPiecePlatform(q.pieceType, q.piece.pos);
      } else if (q.pieceType.kind == PIECE_TYPE.TRIANGLE) {
          this.addPieceTriangle(q.pieceType, q.piece.pos);
      } else {
          scene.add(piece);
          pieces.push(piece);
      }
      q.state = ANIMATE_STATE.DONE;
      changed = true;
  }, this);
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
          if (q.offset !== null) {
              rotateAroundWorldAxis(q.piece, q.axis, q.offset, Dagaz.View.SPEED);
          } else {
              q.piece.rotateOnAxis(q.axis, Dagaz.View.SPEED);
          }
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
  const pieceType = pieceTypes[piece.type*10 + piece.player];
  if (pieceType && (pieceType.kind >= PIECE_TYPE.PLATFORM || pieceType.kind == PIECE_TYPE.MODEL || pieceType.kind == PIECE_TYPE.TOKEN)) {
      this.addPiece(piece.toString(), pos, piece);
  } else {
      this.filled.push(+pos);
      const p = this.pos[pos].p;
      p.material = getPlayerMaterial(piece.player, false);
  }
  currPos = null;
}

View3D.prototype.findPiece = function(pos) {
  for (let i = 0; i < pieces.length; i++) {
       if (pieces[i].pos == pos) return i;
  }
  return -1;
}

View3D.prototype.movePiece = function(move, from, to, piece, phase, steps) {
  if (!phase) { phase = 1; }
  if (!steps) { steps = Dagaz.View.STEP_CNT; }
  const start = this.pos[from];
  const stop  = this.pos[to];
  if (from == to) {
      if (Dagaz.View.NO_PIECE) {
          start.p.material = getPlayerMaterial(piece.player, false);
      }
      return;
  }
  let mesh = start.p;
  if (!Dagaz.View.NO_PIECE) {
      const ix = this.findPiece(from);
      if (ix >= 0) {
          mesh = pieces[ix];
          pieces[ix].pos = to;
      } else return;
  }
  if (!start || !stop) return;
  this.queue.push({
      type:  MOVE_TYPE.MOVE,
      state: ANIMATE_STATE.INIT,
      piece: mesh,
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
  if ((piece !== null) && (piece.type != mesh.type) && !Dagaz.View.NO_PIECE) {
      const pieceType = pieceTypes[piece.type*10 + (+piece.player)];
          this.queue.push({
             type:  MOVE_TYPE.PROMOTE,
             state: ANIMATE_STATE.INIT,
             phase: phase + 1,
             player: piece.player,
             piece: mesh,
             pieceType: pieceType
          });
  }
  this.filled = _.without(this.filled, +from);
  this.filled.push(+to);
}

View3D.prototype.removePiece = function(pos) {
  const ix = this.findPiece(pos);
  if (ix >= 0) {
      scene.remove(pieces[ix]);
      const l = [];
      for (let i = 0; i < pieces.length; i++) {
           if (i == ix) continue;
           l.push(pieces[i]);
      }
      pieces = l;
  }
}

View3D.prototype.capturePiece = function(move, pos, phase) {
  if (!phase) { phase = 1; }
  this.filled = _.without(this.filled, +pos);
  const p = this.pos[pos].p;
  if (Dagaz.View.NO_PIECE) {
      p.material = posMaterial;
  } else {
      this.removePiece(pos);
  }
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

function createTriangularPrism(width, height, depth) {
  const geometry = new THREE.BufferGeometry();
      
  const halfWidth  = width  / 2;
  const halfDepth  = depth  / 2;
  const halfHeight = height / 2;
  	
  // 6 вершин для треугольных оснований
  const vertices = new Float32Array([
     // Нижнее основание (треугольник)
     -halfWidth, -halfHeight, -halfDepth,  // 0: левый нижний угол
     halfWidth, -halfHeight, -halfDepth,   // 1: правый нижний угол
     0, -halfHeight, halfDepth,            // 2: верхний угол (по Z)
        
     // Верхнее основание (треугольник)
     -halfWidth, halfHeight, -halfDepth,   // 3: левый верхний угол
     halfWidth, halfHeight, -halfDepth,    // 4: правый верхний угол
     0, halfHeight, halfDepth,             // 5: верхний угол (по Z)
  ]);

  // Индексы для треугольников (12 треугольников для всей призмы)
  const indices = [
     // Нижнее основание
     0, 1, 2,
     // Верхнее основание
     3, 5, 4,
     // Боковые грани (3 прямоугольника -> 6 треугольников)
     0, 3, 1,   // левая грань часть 1
     1, 3, 4,   // левая грань часть 2
     1, 4, 2,   // правая грань часть 1
     2, 4, 5,   // правая грань часть 2
     2, 5, 0,   // задняя грань часть 1
     0, 5, 3,   // задняя грань часть 2
  ];

  // UV координаты для текстуры
  const uvs = new Float32Array([
     // Нижнее основание
     0, 0,  // вершина 0
     1, 0,  // вершина 1
     0.5, 1, // вершина 2
     // Верхнее основание
     0, 0,  // вершина 3
     1, 0,  // вершина 4
     0.5, 1, // вершина 5
  ]);

  geometry.setIndex(indices);
  geometry.addAttribute('position', new THREE.BufferAttribute(vertices, 3));
  geometry.addAttribute('uv', new THREE.BufferAttribute(uvs, 2));
  geometry.computeVertexNormals();
      
  return geometry;
}

function createRectangularPrismWithGroups(width, height, depth) {
  const geometry = new THREE.BufferGeometry();
  
  const halfWidth = width / 2;
  const halfHeight = height / 2;
  const halfDepth = depth / 2;
  
  // Вершины для 6 граней (по 4 вершины на грань, всего 24 вершины)
  // Каждая грань определяется отдельно для правильных UV и нормалей
  const vertices = new Float32Array([
    // Правая грань (X+)
    halfWidth, halfHeight, -halfDepth,   // 0
    halfWidth, -halfHeight, -halfDepth,  // 1
    halfWidth, -halfHeight, halfDepth,   // 2
    halfWidth, halfHeight, halfDepth,    // 3
    
    // Левая грань (X-)
    -halfWidth, halfHeight, halfDepth,   // 4
    -halfWidth, -halfHeight, halfDepth,  // 5
    -halfWidth, -halfHeight, -halfDepth, // 6
    -halfWidth, halfHeight, -halfDepth,  // 7
    
    // Верхняя грань (Y+) - будем использовать для текстуры
    -halfWidth, halfHeight, -halfDepth,  // 8
    halfWidth, halfHeight, -halfDepth,   // 9
    halfWidth, halfHeight, halfDepth,    // 10
    -halfWidth, halfHeight, halfDepth,   // 11
    
    // Нижняя грань (Y-)
    -halfWidth, -halfHeight, halfDepth,  // 12
    halfWidth, -halfHeight, halfDepth,   // 13
    halfWidth, -halfHeight, -halfDepth,  // 14
    -halfWidth, -halfHeight, -halfDepth, // 15
    
    // Передняя грань (Z+)
    -halfWidth, halfHeight, halfDepth,   // 16
    halfWidth, halfHeight, halfDepth,    // 17
    halfWidth, -halfHeight, halfDepth,   // 18
    -halfWidth, -halfHeight, halfDepth,  // 19
    
    // Задняя грань (Z-)
    halfWidth, halfHeight, -halfDepth,   // 20
    -halfWidth, halfHeight, -halfDepth,  // 21
    -halfWidth, -halfHeight, -halfDepth, // 22
    halfWidth, -halfHeight, -halfDepth,  // 23
  ]);
  
  // Индексы для треугольников (6 граней × 2 треугольника × 3 вершины = 36 индексов)
  const indices = [
    // Правая грань
    0, 1, 2, 0, 2, 3,
    // Левая грань
    4, 5, 6, 4, 6, 7,
    // Верхняя грань - группа 0
    8, 9, 10, 8, 10, 11,
    // Нижняя грань
    12, 13, 14, 12, 14, 15,
    // Передняя грань
    16, 17, 18, 16, 18, 19,
    // Задняя грань
    20, 21, 22, 20, 22, 23,
  ];
  
  // UV координаты для текстур
  const uvs = new Float32Array([
    // Правая грань
    0, 1, 0, 0, 1, 0, 1, 1,
    // Левая грань
    0, 1, 0, 0, 1, 0, 1, 1,
    // Верхняя грань
    0, 1, 1, 1, 1, 0, 0, 0,
    // Нижняя грань
    0, 0, 1, 0, 1, 1, 0, 1,
    // Передняя грань
    0, 1, 1, 1, 1, 0, 0, 0,
    // Задняя грань
    1, 1, 0, 1, 0, 0, 1, 0,
  ]);
  
  // Устанавливаем атрибуты
  geometry.setIndex(indices);
  geometry.addAttribute('position', new THREE.BufferAttribute(vertices, 3));
  geometry.addAttribute('uv', new THREE.BufferAttribute(uvs, 2));
  
  // Вычисляем нормали
  geometry.computeVertexNormals();
  
  // Создаем группы для материалов
  geometry.clearGroups();
  
  // Группа 0: Верхняя грань (индексы 12-17) - материал с текстурой
  geometry.addGroup(12, 6, 0);
  
  // Группа 1: Остальные грани (индексы 0-11 и 18-35) - цветной материал
  geometry.addGroup(0, 12, 1);    // Правая и левая грани
  geometry.addGroup(18, 6, 1);    // Нижняя грань
  geometry.addGroup(24, 6, 1);    // Передняя грань
  geometry.addGroup(30, 6, 1);    // Задняя грань
  
  return geometry;
}

View3D.prototype.draw = function(canvas) {
  this.configure();
  if (this.allResLoaded()) {
      this.initBoard();
      this.animate();
      const elapsedTime = clock.getElapsedTime();
      const deltaTime = elapsedTime - prevTime;
      prevTime = elapsedTime;
      if (isFirstDraw) {
         for (let i = 0; i < this.boards.length; i++) {
            const b = this.boards[i];
            if (b.type == BOARD_TYPE.RECT) {
                let boardGeometry = new THREE.BoxGeometry(b.dx / 10, 1, b.dy / 10);
                let materials = [
                   new THREE.MeshBasicMaterial({ color: b.colors[2] }),
                   new THREE.MeshBasicMaterial({ color: b.colors[3] }),
                   new THREE.MeshBasicMaterial((b.img !== null) ? { map: b.img.t, transparent: true, opacity: b.opacity, side: THREE.DoubleSide } : { color: b.colors[i] } ),
                   new THREE.MeshBasicMaterial({ color: b.colors[5], transparent: true, opacity: 0.3, side: THREE.DoubleSide }),
                   new THREE.MeshBasicMaterial({ color: b.colors[1] }),
                   new THREE.MeshBasicMaterial({ color: b.colors[4] })
                ];
                if (Dagaz.View.RECT_OPACITY) {
                    boardGeometry = createRectangularPrismWithGroups(
                        b.dx / 10,  // width
                        1,          // height (толщина доски)
                        b.dy / 10   // depth
                    );

                    materials = [
                        // Материал 0: Верхняя грань (с текстурой)
                        new THREE.MeshBasicMaterial({ 
                            map: b.img !== null ? b.img.t : null,
                            color: b.img === null ? b.colors[2] : 0xFFFFFF,
                            transparent: true,
                            opacity: b.opacity,
                            side: THREE.DoubleSide
                        }),
                        // Материал 1: Остальные грани (цветные)
                            new THREE.MeshBasicMaterial({ 
                            color: b.colors[1] || 0x8B4513, // или используйте цвет из настроек
                            transparent: true,
                            opacity: 0.3,
                            side: THREE.DoubleSide
                        })
                    ];
                }
                const boardBlock = new THREE.Mesh(boardGeometry, materials);
                boardBlock.position.set(0, b.z / 10, 0);
                if (Dagaz.View.RENDER_ORDER) {
                    boardBlock.renderOrder = 1;
                }
                scene.add(boardBlock);
            }
            if (b.type == BOARD_TYPE.TRIANGLE) {
                const boardGeometry = createTriangularPrism(b.dx / 10, 1, b.dy / 10);
                const materials = [
                   // Материал для верхнего основания (с текстурой)
                   new THREE.MeshBasicMaterial({ 
                       map: b.img.t, transparent: true, opacity: b.opacity,
                       side: THREE.DoubleSide
                   }),
                   // Материал для остальных граней
                   new THREE.MeshBasicMaterial({ 
                       color: b.colors[1], transparent: true, opacity: 0.3,
                       side: THREE.DoubleSide
                   }),
                ];

                // Назначаем материал группе граней
                boardGeometry.clearGroups();
                // Верхнее основание (индексы 3-5)
                boardGeometry.addGroup(3, 3, 0); // 0 - материал с текстурой
                // Все остальные грани
                boardGeometry.addGroup(0, 3, 1); // нижнее основание
                boardGeometry.addGroup(6, 18, 1); // боковые грани

                const boardBlock = new THREE.Mesh(boardGeometry, materials);
                boardBlock.rotation.y = Math.PI;
                boardBlock.position.set(0, b.z / 10, 0);
                if (Dagaz.View.RENDER_ORDER) {
                    boardBlock.renderOrder = 1;
                }
                scene.add(boardBlock);
            }
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
    if ((mouse.y > 0) && (mouse.y < 100 * mobileCoeff)) {
        if (mouse.y < 50 * mobileCoeff) {
            ix = Dagaz.View.view.menuHint(mouse.x);
        }
        if (click) {
            for (let i = 0; i < menus.length; i++) {
                if (!menus[i].v) continue;
                if (y < menus[i].y) continue;
                if (y > menus[i].y + 32) continue;
                Dagaz.View.view.menuClick(mouse.x, menus[i]);
            }
        }
    }
    if ((tooltipIx === null) || (ix === null) || (tooltipIx != ix)) {
        tooltipIx   = ix;
        tooltipHide = -1;
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

function getMove(camera, x, y, z, positions, board) {
  let r = null;
  for (let i = 0; i < positions.length; i++) {
      r = Dagaz.View.getMove(camera, x, y, z, positions[i], board);
      if (r !== null) break;
  }
  return r;
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
                  const move = getMove(camera, faceNormal.x, faceNormal.y, faceNormal.z, intersection.object.positions, Dagaz.Controller.app.board);
                  if (move !== null) {
                      let axis = null; let offset = null;
                      if (!_.isUndefined(Dagaz.View.getAxis)) {
                          axis = Dagaz.View.getAxis(move);
                      }
                      if (!_.isUndefined(Dagaz.View.getRotate)) {
                          const r = Dagaz.View.getRotate(move);
                          axis = r.axis;
                          offset = r.offset;
                      }
                      const group = view.groupCubes(move);
                      if (!Dagaz.Controller.viewOff && (axis !== null)) {
                          view.queue.push({
                             type:   MOVE_TYPE.ROTATE,
                             state:  ANIMATE_STATE.INIT,
                             piece:  group,
                             axis:   axis,
                             offset: offset,
                             phase:  1,
                             steps:  Dagaz.View.STEP_CNT
                          });
                      }
                      if (!_.isUndefined(Dagaz.Controller.play)) {
                         let sound = Dagaz.Sounds.move;
                         if (!_.isUndefined(move.sound)) {
                             sound = this.move.sound;
                         }
                         if (Dagaz.Controller.customSound) {
                             view.queue.push({
                                type:   MOVE_TYPE.SOUND,
                                state:  ANIMATE_STATE.INIT,
                                sound:  sound,
                                phase:  2
                             });
                         } else {
                             Dagaz.Controller.play(sound);
                         }
                      }
                      view.queue.push({
                         type:  MOVE_TYPE.REFRESH,
                         state: ANIMATE_STATE.INIT,
                         phase: 3,
                         move:  move
                      });
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
