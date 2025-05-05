(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "rubik-4x4x4-extension") {
     checkVersion(design, name, value);
  }
}

if (!_.isUndefined(Dagaz.Controller.addSound)) {
    Dagaz.Controller.addSound(0, "../sounds/slide.ogg", true);
}

const ROTATE = [                                     
  [7, 11, 15, 19, 3, 10, 14, 23, 2, 6, 18, 22, 1, 5, 17, 21, 0, 9, 13, 20, 4, 8, 12, 16],
  [16, 12, 8, 4, 20, 13, 9, 0, 21, 17, 5, 1, 22, 18, 6, 2, 23, 14, 10, 3, 19, 15, 11, 7],
  [13, 5, 18, 10, 8, 21, 2, 15, 16, 0, 23, 7, 4, 20, 3, 19, 12, 1, 22, 11, 9, 17, 6, 14],
  [9, 17, 6, 14, 12, 1, 22, 11, 4, 20, 3, 19, 16, 0, 23, 7, 8, 21, 2, 15, 13, 5, 18, 10],
  [1, 3, 0, 2, 6, 4, 7, 5, 9, 11, 8, 10, 14, 12, 15, 13, 17, 19, 16, 18, 22, 20, 23, 21],
  [2, 0, 3, 1, 5, 7, 4, 6, 10, 8, 11, 9, 13, 15, 12, 14, 18, 16, 19, 17, 21, 23, 20, 22],
];

//  0.. 3 - 0
//  4.. 7 - 1
//  8..11 - 2
// 12..15 - 3
// 16..19 - 4
// 20..23 - 5

const MODES = [
  [[63, 62, 61, 60, 15, 14, 13, 12, -1, -1, -1, -1, -1, -1, -1, -1, 44, 28, -1, -1, 47, 31], [], [49, 50, -1, -1, 61, 62, -1, -1, 63, 59, 55, 51, 60, 56, 52, 48], [], [-1, -1, -1, -1, -1, -1, -1, -1, 11, 7, -1, -1, 59, 55, -1, -1, 63, 47, 31, 15, 51, 35, 19, 3], []],
  [[], [2, 1, -1, -1, 50, 49, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 51, 35, 19, 3, 48, 32, 16, 0], [51, 50, 49, 48, 63, 62, 61, 60, 59, 55, -1, -1, 56, 52], [], [-1, -1, -1, -1, -1, -1, -1, -1, 15, 11, 7, 3, 63, 59, 55, 51, 47, 31, -1, -1, 35, 19], []],
  [[], [0, 1, 2, 3, 51, 50, 49, 48, -1, -1, -1, -1, -1, -1, -1, -1, 35, 19, -1, -1, 32, 16], [50, 49, -1, -1, 62, 61, -1, -1, 51, 55, 59, 63, 48, 52, 56, 60], [], [], [-1, -1, -1, -1, -1, -1, -1, -1, 52, 56, -1, -1, 4, 8, -1, -1, 48, 32, 16, 0, 60, 44, 28, 12]],
  [[61, 62, -1, -1, 13, 14, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 60, 44, 28, 12, 63, 47, 31, 15], [], [48, 49, 50, 51, 60, 61, 62, 63, 55, 59, -1, -1, 52, 56], [], [], [-1, -1, -1, -1, -1, -1, -1, -1, 48, 52, 56, 60, 0, 4, 8, 12, 32, 16, -1, -1, 44, 28]],
  [[61, 62, -1, -1, 13, 14, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 60, 44, 28, 12, 63, 47, 31, 15], [], [], [12, 13, 14, 15, 0, 1, 2, 3, 8, 4, -1, -1, 11, 7], [-1, -1, -1, -1, -1, -1, -1, -1, 15, 11, 7, 3, 63, 59, 55, 51, 47, 31, -1, -1, 35, 19], []],
  [[], [3, 2, 1, 0, 51, 50, 49, 48, -1, -1, -1, -1, -1, -1, -1, -1, 35, 19, -1, -1, 32, 16], [], [14, 13, -1, -1, 2, 1, -1, -1, 12, 8, 4, 0, 15, 11, 7, 3], [-1, -1, -1, -1, -1, -1, -1, -1, 11, 7, -1, -1, 59, 55, -1, -1, 63, 47, 31, 15, 51, 35, 19, 3], []],
  [[], [2, 1, -1, -1, 50, 49, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 51, 35, 19, 3, 48, 32, 16, 0], [], [15, 14, 13, 12, 3, 2, 1, 0, 4, 8, -1, -1, 7, 11], [], [-1, -1, -1, -1, -1, -1, -1, -1, 48, 52, 56, 60, 0, 4, 8, 12, 32, 16, -1, -1, 44, 28]],
  [[60, 61, 62, 63, 12, 13, 14, 15, -1, -1, -1, -1, -1, -1, -1, -1, 44, 28, -1, -1, 47, 31], [], [], [13, 14, -1, -1, 1, 2, -1, -1, 0, 4, 8, 12, 3, 7, 11, 15], [], [-1, -1, -1, -1, -1, -1, -1, -1, 52, 56, -1, -1, 4, 8, -1, -1, 48, 32, 16, 0, 60, 44, 28, 12]]
];

Dagaz.View.getAxis = function(move) {
  if (move.mode == 0) return new THREE.Vector3(-1, 0,  0).normalize();
  if (move.mode == 1) return new THREE.Vector3(1,  0,  0).normalize();
  if (move.mode == 2) return new THREE.Vector3(0,  0, -1).normalize();
  if (move.mode == 3) return new THREE.Vector3(0,  0,  1).normalize();
  if (move.mode == 4) return new THREE.Vector3(0, -1,  0).normalize();
  if (move.mode == 5) return new THREE.Vector3(0,  1,  0).normalize();
  return null;
}

function getDir(x, y, z) {
  if (z >  0.9) return 0;
  if (z < -0.9) return 1;
  if (y >  0.9) return 2;
  if (y < -0.9) return 3;
  if (x >  0.9) return 4;
  if (x < -0.9) return 5;
  return -1;
}

function getOctant(x, y, z) {
  if (x < 0 && y < 0 && z < 0) return 0;
  if (x < 0 && y < 0 && z > 0) return 1;
  if (x > 0 && y < 0 && z > 0) return 2;
  if (x > 0 && y < 0 && z < 0) return 3;
  if (x < 0 && y > 0 && z < 0) return 4;
  if (x < 0 && y > 0 && z > 0) return 5;
  if (x > 0 && y > 0 && z > 0) return 6;
  if (x > 0 && y > 0 && z < 0) return 7;
  return -1;
}

Dagaz.View.getMove = function(camera, x, y, z, pos, board) {
  const direction = new THREE.Vector3();
  camera.getWorldDirection(direction);
  const oct = getOctant(direction.x, direction.y, direction.z);
  const dir = getDir(x, y, z);
  if (oct < 0 || dir < 0) return null;
  const ix = _.indexOf(MODES[oct][dir], +pos);
  if (ix < 0) return null;
  const mode = (ix > 19) ? 5 : ((ix > 15) ? 4 : ((ix > 11) ? 3 : ((ix > 7) ? 2 : ((ix > 3) ? 1 : 0))));
  for (let i = 0; i < board.moves.length; i++) {
     const m = board.moves[i];
     if (m.mode != mode) continue;
     for (let j = 0; j < m.actions.length; j++) {
          if (j > 3) break;
          const a = m.actions[j];
          if (a[0] === null) continue;
          if (a[1] === null) continue;
          if (a[0][0] == pos) return m;
     }
  }
  return null;
}

function rotate(piece, dir) {
  return piece.promote(ROTATE[dir][piece.type]);
}

function gen(board, dir, a1, a2, a3, a4, b1, b2, b3, b4, c1, c2, c3, c4, d1, d2, d3, d4) {
  const m = Dagaz.Model.createMove(dir);
  m.movePiece(a1, a2, rotate(board.getPiece(a1), dir));
  m.movePiece(a2, a3, rotate(board.getPiece(a2), dir));
  m.movePiece(a3, a4, rotate(board.getPiece(a3), dir));
  m.movePiece(a4, a1, rotate(board.getPiece(a4), dir));

  m.movePiece(b1, b2, rotate(board.getPiece(b1), dir));
  m.movePiece(b2, b3, rotate(board.getPiece(b2), dir));
  m.movePiece(b3, b4, rotate(board.getPiece(b3), dir));
  m.movePiece(b4, b1, rotate(board.getPiece(b4), dir));

  m.movePiece(c1, c2, rotate(board.getPiece(c1), dir));
  m.movePiece(c2, c3, rotate(board.getPiece(c2), dir));
  m.movePiece(c3, c4, rotate(board.getPiece(c3), dir));
  m.movePiece(c4, c1, rotate(board.getPiece(c4), dir));

  if (!_.isUndefined(d1) && !_.isUndefined(d2) && !_.isUndefined(d3) && !_.isUndefined(d4)) {
      m.movePiece(d1, d2, rotate(board.getPiece(d1), dir));
      m.movePiece(d2, d3, rotate(board.getPiece(d2), dir));
      m.movePiece(d3, d4, rotate(board.getPiece(d3), dir));
      m.movePiece(d4, d1, rotate(board.getPiece(d4), dir));
  }

  board.moves.push(m);
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;

  gen(board, 0, 63, 51, 3, 15, 31, 59, 35, 7, 47, 55, 19, 11, 43, 39, 23, 27);
  gen(board, 1, 15, 3, 51, 63, 7, 35, 59, 31, 11, 19, 55, 47, 27, 23, 39, 43);
  gen(board, 0, 60, 48, 0, 12, 56, 32, 4, 28, 52, 16, 8, 44, 40, 36, 20, 24);
  gen(board, 1, 12, 0, 48, 60, 28, 4, 32, 56, 44, 8, 16, 52, 24, 20, 36, 40);
  gen(board, 0, 62, 50, 2, 14, 58, 34, 6, 30, 54, 18, 10, 46);
  gen(board, 1, 14, 2, 50, 62, 30, 6, 34, 58, 46, 10, 18, 54);
  gen(board, 0, 61, 49, 1, 13, 57, 33, 5, 29, 53, 17, 9, 45);
  gen(board, 1, 13, 1, 49, 61, 29, 5, 33, 57, 45, 9, 17, 53);

  gen(board, 2, 60, 63, 15, 12, 61, 47, 14, 28, 62, 31, 13, 44, 45, 46, 30, 29);
  gen(board, 3, 12, 15, 63, 60, 28, 14, 47, 61, 44, 13, 31, 62, 29, 30, 46, 45);
  gen(board, 2, 48, 51, 3, 0, 49, 35, 2, 16, 50, 19, 1, 32, 33, 34, 18, 17);
  gen(board, 3, 0, 3, 51, 48, 16, 2, 35, 49, 32, 1, 19, 50, 17, 18, 34, 33);
  gen(board, 2, 56, 59, 11, 8, 57, 43, 10, 24, 58, 27, 9, 40);
  gen(board, 3, 8, 11, 59, 56, 24, 10, 43, 57, 40, 9, 27, 58);
  gen(board, 2, 52, 55, 7, 4, 53, 39, 6, 20, 54, 23, 5, 36);
  gen(board, 3, 4, 7, 55, 52, 20, 6, 39, 53, 36, 5, 23, 54);

  gen(board, 4, 63, 60, 48, 51, 62, 56, 49, 55, 61, 52, 50, 59, 58, 57, 53, 54);
  gen(board, 5, 51, 48, 60, 63, 55, 49, 56, 62, 59, 50, 52, 61, 54, 53, 57, 58);
  gen(board, 4, 15, 12, 0, 3, 14, 8, 1, 7, 13, 4, 2, 11, 10, 9, 5, 6);
  gen(board, 5, 3, 0, 12, 15, 7, 1, 8, 14, 11, 2, 4, 13, 6, 5, 9, 10);
  gen(board, 4, 47, 44, 32, 35, 46, 40, 33, 39, 45, 36, 34, 43);
  gen(board, 5, 35, 32, 44, 47, 39, 33, 40, 46, 43, 34, 36, 45);
  gen(board, 4, 31, 28, 16, 19, 30, 24, 17, 23, 29, 20, 18, 27);
  gen(board, 5, 19, 16, 28, 31, 23, 17, 24, 30, 27, 18, 20, 29);

  CheckInvariants(board);
}

})();
