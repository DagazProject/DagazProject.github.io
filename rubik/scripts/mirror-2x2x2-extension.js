(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "rubik-2x2x2-extension") {
     checkVersion(design, name, value);
  }
}

if (!_.isUndefined(Dagaz.Controller.addSound)) {
    Dagaz.Controller.addSound(0, "../sounds/slide.ogg", true);
}

// 0: b1, d1, d2, b2, a1, c1, c2, a2
// 1: b2, d2, d1, b1, a2, c2, c1, a1
// 2: c1, d1, b1, a1, c2, d2, b2, a2
// 3: a1, b1, d1, c1, a2, b2, d2, c2
// 4: d1, c1, c2, d2, b1, a1, a2, b2
// 5: d2, c2, c1, d1, b2, a2, a1, b1

// 0-1 (23)
//
// P-123 -> P-132 -> P-123 -> P-132
// P-124 -> P-142 -> P-124 -> P-142
// P-153 -> P-135 -> P-153 -> P-135
// P-154 -> P-145 -> P-154 -> P-145
// P-213 -> P-231
// P-214 -> P-241
// P-263 -> P-236
// P-264 -> P-246
// P-321 -> P-312
// P-326 -> P-362
// P-351 -> P-315
// P-356 -> P-365
// P-421 -> P-412
// P-451 -> P-415
// P-426 -> P-462
// P-456 -> P-465
// P-513 -> P-531
// P-514 -> P-541
// P-563 -> P-536
// P-564 -> P-546
// P-623 -> P-632 -> P-623 -> P-632
// P-653 -> P-635 -> P-653 -> P-635
// P-624 -> P-642 -> P-624 -> P-642
// P-654 -> P-645 -> P-654 -> P-645

// 2-3 (13)
//
// P-123 -> P-321 -> P-123 -> P-321
// P-124 -> P-421 -> P-124 -> P-421
// P-153 -> P-351 -> P-153 -> P-351
// P-154 -> P-451 -> P-154 -> P-451
// P-623 -> P-326 -> P-623 -> P-326
// P-624 -> P-426 -> P-624 -> P-426
// P-653 -> P-356 -> P-653 -> P-356
// P-654 -> P-456 -> P-654 -> P-456
// P-132
// P-142
// P-135
// P-145
// P-632
// P-635
// P-642
// P-645
// P-213
// P-214
// P-513
// P-514
// P-263
// P-264
// P-563
// P-564

// 4-5 (12)
//
// P-123 -> P-213 -> P-123 -> P-213
// P-124 -> P-214 -> P-124 -> P-214
// P-153 -> P-513 -> P-153 -> P-513
// P-154 -> P-514 -> P-154 -> P-514
// P-623 -> P-263 -> P-623 -> P-263
// P-624 -> P-264 -> P-624 -> P-264
// P-653 -> P-563 -> P-653 -> P-563
// P-654 -> P-564 -> P-654 -> P-564

const ROTATE = [                                     
//   0   1   2   3   4   5   6   7   8   9  10  11  12   13  14  15  16  17  18  19  20  21  22  23  24  25
  [ 20, 17,  2, 23,  8,  5, 14, 11,  9, 10,  4, 12, 13,   7, 15, 16,  6, 18, 19,  1, 21, 22,  0, 24, 25,  3],
  [ 22, 19,  2, 25, 10,  5, 16, 13,  4,  8,  9,  7, 11,  12,  6, 14, 15,  1, 17, 18,  0, 20, 21,  3, 23, 24],

//[ -1, -1, -1, -1, -1, -1,  -1, -1, -1, -1, -1, -1, -1,  -1, -1, -1, -1],
  [13, 5, 18, 10, 8, 21, 2, 15, 16, 0, 23, 7, 4, 20, 3, 19, 12, 1, 22, 11, 9, 17, 6, 14],
  [9, 17, 6, 14, 12, 1, 22, 11, 4, 20, 3, 19, 16, 0, 23, 7, 8, 21, 2, 15, 13, 5, 18, 10],
  [1, 3, 0, 2, 6, 4, 7, 5, 9, 11, 8, 10, 14, 12, 15, 13, 17, 19, 16, 18, 22, 20, 23, 21],
  [2, 0, 3, 1, 5, 7, 4, 6, 10, 8, 11, 9, 13, 15, 12, 14, 18, 16, 19, 17, 21, 23, 20, 22],
];

//  0.. 1 - 0
//  2.. 3 - 1
//  4.. 5 - 2
//  6.. 7 - 3
//  8.. 9 - 4
// 10..11 - 5

const MODES = [[[6, 7, 2, 3], [], [-1, -1, -1, -1, 5, 7, 4, 6], [], [-1, -1, -1, -1, -1, -1, -1, -1, 3, 7, 1, 5], []],
  [[], [-1, -1, -1, -1, -1, -1, -1, -1, 1, 5, 0, 4], [4, 5, 6, 7], [], [-1, -1, -1, -1, 1, 3, 5, 7], []],
  [[], [0, 1, 4, 5], [-1, -1, -1, -1, 5, 7, 4, 6], [], [], [-1, -1, -1, -1, -1, -1, -1, -1, 0, 4, 2, 6]],
  [[-1, -1, -1, -1, -1, -1, -1, -1, 2, 6, 3, 7], [], [4, 5, 6, 7], [], [], [-1, -1, -1, -1, 4, 6, 0, 2]],
  [[-1, -1, -1, -1, -1, -1, -1, -1, 2, 6, 3, 7], [], [], [2, 3, 0, 1], [-1, -1, -1, -1, 1, 3, 5, 7], []],
  [[], [0, 1, 4, 5], [], [-1, -1, -1, -1, 0, 2, 1, 3], [-1, -1, -1, -1, -1, -1, -1, -1, 3, 7, 1, 5], []],
  [[], [-1, -1, -1, -1, -1, -1, -1, -1, 1, 5, 0, 4], [], [2, 3, 0, 1], [], [-1, -1, -1, -1, 4, 6, 0, 2]],
  [[6, 7, 2, 3], [], [], [-1, -1, -1, -1, 0, 2, 1, 3], [], [-1, -1, -1, -1, -1, -1, -1, -1, 0, 4, 6, 2]]
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
  const mode = (ix > 9) ? 5 : ((ix > 7) ? 4 : ((ix > 5) ? 3 : ((ix > 3) ? 2 : ((ix > 1) ? 1 : 0))));
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

function gen(board, dir, a1, a2, a3, a4) {
  const m = Dagaz.Model.createMove(dir);
  m.movePiece(a1, a2, rotate(board.getPiece(a1), dir));
  m.movePiece(a2, a3, rotate(board.getPiece(a2), dir));
  m.movePiece(a3, a4, rotate(board.getPiece(a3), dir));
  m.movePiece(a4, a1, rotate(board.getPiece(a4), dir));
  board.moves.push(m);
}

function rotate(piece, dir) {
  return piece.promote(ROTATE[dir][piece.type]);
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;

  gen(board, 0, 3, 7, 5, 1);
  gen(board, 1, 1, 5, 7, 3);
  gen(board, 0, 2, 6, 4, 0);
  gen(board, 1, 0, 4, 6, 2);

  gen(board, 2, 6, 7, 3, 2);
  gen(board, 3, 2, 3, 7, 6);
  gen(board, 2, 4, 5, 1, 0);
  gen(board, 3, 0, 1, 5, 4);

  gen(board, 4, 7, 6, 4, 5);
  gen(board, 5, 5, 4, 6, 7);
  gen(board, 4, 3, 2, 0, 1);
  gen(board, 5, 1, 0, 2, 3);

  CheckInvariants(board);
}

})();
