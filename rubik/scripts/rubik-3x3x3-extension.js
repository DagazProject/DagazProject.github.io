(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "rubik-3x3-extension") {
     checkVersion(design, name, value);
  }
}

// WRBGOY( 0) -> RYBGWO( 7) -> YOBGRW(23) -> OWBGYR(16)
// WBORGY( 1) -> BYORWG(11) -> YGORBW(22) -> GWORYB(12)
// WGROBY( 2) -> GYROWB(15) -> YBROGW(21) -> BWROYG( 8)
// WOGBRY( 3) -> OYGBWR(19) -> YRGBOW(20) -> RWGBYO( 4)
// RBWYGO( 5) -> BOWYRG(10) -> OGWYBR(18) -> GRWYOB(13)
// RGYWBO( 6) -> GOYWRB(14) -> OBYWGR(17) -> BRYWOG( 9)

// WRBGOY( 0) -> GRWYOB(13) -> YRGBOW(20) -> BRYWOG( 9)
// WBORGY( 1) -> RBWYGO( 5) -> YBROGW(21) -> OBYWGR(17)
// WGROBY( 2) -> OGWYBR(18) -> YGORBW(22) -> RGYWBO( 6)
// WOGBRY( 3) -> BOWYRG(10) -> YOBGRW(23) -> GOYWRB(14)
// RWGBYO( 4) -> BWROYG( 8) -> OWBGYR(16) -> GWORYB(12)
// RYBGWO( 7) -> GYROWB(15) -> OYGBWR(19) -> BYORWG(11)

// WRBGOY( 0) -> WBORGY( 1) -> WOGBRY( 3) -> WGROBY( 2)
// RWGBYO( 4) -> RGYWBO( 6) -> RYBGWO( 7) -> RBWYGO( 5)
// BWROYG( 8) -> BRYWOG( 9) -> BYORWG(11) -> BOWYRG(10)
// GWORYB(12) -> GOYWRB(14) -> GYROWB(15) -> GRWYOB(13)
// OWBGYR(16) -> OBYWGR(17) -> OYGBWR(19) -> OGWYBR(18)
// YRGBOW(20) -> YGORBW(22) -> YOBGRW(23) -> YBROGW(21)

const ROTATE = [                                     
  [7, 11, 15, 19, 3, 10, 14, 23, 2, 6, 18, 22, 1, 5, 17, 21, 0, 9, 13, 20, 4, 8, 12, 16],
  [16, 12, 8, 4, 20, 13, 9, 0, 21, 17, 5, 1, 22, 18, 6, 2, 23, 14, 10, 3, 19, 15, 11, 7],
  [13, 5, 18, 10, 8, 21, 2, 15, 16, 0, 23, 7, 4, 20, 3, 19, 12, 1, 22, 11, 9, 17, 6, 14],
  [9, 17, 6, 14, 12, 1, 22, 11, 4, 20, 3, 19, 16, 0, 23, 7, 8, 21, 2, 15, 13, 5, 18, 10],
  [1, 3, 0, 2, 6, 4, 7, 5, 9, 11, 8, 10, 14, 12, 15, 13, 17, 19, 16, 18, 22, 20, 23, 21],
  [2, 0, 3, 1, 5, 7, 4, 6, 10, 8, 11, 9, 13, 15, 12, 14, 18, 16, 19, 17, 21, 23, 20, 22],
];

//  0.. 2 - 0
//  3.. 5 - 1
//  6.. 8 - 2
//  9..11 - 3
// 12..14 - 4
// 15..17 - 5

const MODES = [
  [[24, 25, 26, 6, 7, 8, -1, -1, -1, -1, -1, -1, 15, -1, -1, 17], [], [19, -1, -1, 25, -1, -1, 20, 23, 26, 18, 21, 24], [], [-1, -1, -1, -1, -1, -1, 5, -1, -1, 23, -1, -1, 8, 17, 26, 2, 11, 20], []],
  [[], [0, 1, 2, 18, 19, 20, -1, -1, -1, -1, -1, -1, 11, -1, -1, 9], [19, -1, -1, 25, -1, -1, 20, 23, 26, 18, 21, 24], [], [-1, -1, -1, -1, -1, -1, 5, -1, -1, 23, -1, -1, 8, 17, 26, 2, 11, 20], []],
  [[], [0, 1, 2, 18, 19, 20, -1, -1, -1, -1, -1, -1, 11, -1, -1, 9], [18, 19, 20, 24, 25, 26, 23, -1, -1, 21], [], [], [-1, -1, -1, -1, -1, -1, 21, -1, -1, 3, -1, -1, 0, 9, 18, 6, 15, 24]],
  [[25, -1, -1, 7, -1, -1, -1, -1, -1, -1, -1, -1, 6, 15, 24, 8, 17, 26], [], [18, 19, 20, 24, 25, 26, 23, -1, -1, 21], [], [], [-1, -1, -1, -1, -1, -1, 18, 21, 24, 0, 3, 6, 9, -1, -1, 15]],
  [[25, -1, -1, 7, -1, -1, -1, -1, -1, -1, -1, -1, 6, 15, 24, 8, 17, 26], [], [], [6, 7, 8, 0, 1, 2, 3, -1, -1, 5], [-1, -1, -1, -1, -1, -1, 2, 5, 8, 20, 23, 26, 17, -1, -1, 11], []],
  [[], [0, 1, 2, 18, 19, 20, -1, -1, -1, -1, -1, -1, 11, -1, -1, 9], [], [7, -1, -1, 1, -1, -1, 0, 3, 6, 2, 5, 8], [-1, -1, -1, -1, -1, -1, 5, -1, -1, 23, -1, -1, 8, 17, 26, 2, 11, 20], []], // 5
  [[], [1, -1, -1, 19, -1, -1, -1, -1, -1, -1, -1, -1, 2, 11, 20, 0, 9, 18], [], [6, 7, 8, 0, 1, 2, 3, -1, -1, 5], [], [-1, -1, -1, -1, -1, -1, 18, 21, 24, 0, 3, 6, 9, -1, -1, 15]],
  [[24, 25, 26, 6, 7, 8, -1, -1, -1, -1, -1, -1, 15, -1, -1, 17], [], [], [7, -1, -1, 1, -1, -1, 0, 3, 6, 2, 5, 8], [], [-1, -1, -1, -1, -1, -1, 21, -1, -1, 3, -1, -1, 0, 9, 18, 6, 15, 24]]
];

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
  const mode = (ix > 14) ? 5 : ((ix > 11) ? 4 : ((ix > 8) ? 3 : ((ix > 5) ? 2 : ((ix > 2) ? 1 : 0))));
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

function gen(board, dir, a1, a2, a3, a4, b1, b2, b3, b4, c1) {
  const m = Dagaz.Model.createMove(dir);
  m.movePiece(a1, a2, rotate(board.getPiece(a1), dir));
  m.movePiece(a2, a3, rotate(board.getPiece(a2), dir));
  m.movePiece(a3, a4, rotate(board.getPiece(a3), dir));
  m.movePiece(a4, a1, rotate(board.getPiece(a4), dir));
  if (!_.isUndefined(b1) && !_.isUndefined(b2) && !_.isUndefined(b3) && !_.isUndefined(b4)) {
      m.movePiece(b1, b2, rotate(board.getPiece(b1), dir));
      m.movePiece(b2, b3, rotate(board.getPiece(b2), dir));
      m.movePiece(b3, b4, rotate(board.getPiece(b3), dir));
      m.movePiece(b4, b1, rotate(board.getPiece(b4), dir));
  }
  if (!_.isUndefined(c1)) {
      m.movePiece(c1, c1, rotate(board.getPiece(c1), dir));
  }
  board.moves.push(m);
}

function p(name) {
  return Dagaz.Model.stringToPos(name);
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;

  gen(board, 0, p('c1'), p('i1'), p('i3'), p('c3'), p('f1'), p('i2'), p('f3'), p('c2'), p('f2'));
  gen(board, 1, p('c3'), p('i3'), p('i1'), p('c1'), p('c2'), p('f3'), p('i2'), p('f1'), p('f2'));
  gen(board, 0, p('b1'), p('h1'), p('h3'), p('b3'), p('e1'), p('h2'), p('e3'), p('b2'));
  gen(board, 1, p('b3'), p('h3'), p('h1'), p('b1'), p('b2'), p('e3'), p('h2'), p('e1'));
  gen(board, 0, p('a1'), p('g1'), p('g3'), p('a3'), p('d1'), p('g2'), p('d3'), p('a2'), p('d2'));
  gen(board, 1, p('a3'), p('g3'), p('g1'), p('a1'), p('a2'), p('d3'), p('g2'), p('d1'), p('d2'));

  gen(board, 2, p('i1'), p('c1'), p('a1'), p('g1'), p('f1'), p('b1'), p('d1'), p('h1'), p('e1'));
  gen(board, 3, p('g1'), p('a1'), p('c1'), p('i1'), p('h1'), p('d1'), p('b1'), p('f1'), p('e1'));
  gen(board, 2, p('i2'), p('c2'), p('a2'), p('g2'), p('f2'), p('b2'), p('d2'), p('h2'));
  gen(board, 3, p('g2'), p('a2'), p('c2'), p('i2'), p('h2'), p('d2'), p('b2'), p('f2'));
  gen(board, 2, p('i3'), p('c3'), p('a3'), p('g3'), p('f3'), p('b3'), p('d3'), p('h3'), p('e3'));
  gen(board, 3, p('g3'), p('a3'), p('c3'), p('i3'), p('h3'), p('d3'), p('b3'), p('f3'), p('e3'));

  gen(board, 4, p('i1'), p('g1'), p('g3'), p('i3'), p('h1'), p('g2'), p('h3'), p('i2'), p('h2'));
  gen(board, 5, p('i3'), p('g3'), p('g1'), p('i1'), p('i2'), p('h3'), p('g2'), p('h1'), p('h2'));
  gen(board, 4, p('f1'), p('d1'), p('d3'), p('f3'), p('e1'), p('d2'), p('e3'), p('f2'));
  gen(board, 5, p('f3'), p('d3'), p('d1'), p('f1'), p('f2'), p('e3'), p('d2'), p('e1'));
  gen(board, 4, p('c1'), p('a1'), p('a3'), p('c3'), p('b1'), p('a2'), p('b3'), p('c2'), p('b2'));
  gen(board, 5, p('c3'), p('a3'), p('a1'), p('c1'), p('c2'), p('b3'), p('a2'), p('b1'), p('b2'));

  CheckInvariants(board);
}

})();
