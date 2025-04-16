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

function rotate(piece, dir) {
  return piece.promote(ROTATE[dir][piece.type]);
}

function gen(board, a1, a2, a3, a4, b1, b2, b3, b4, dir) {
  const m = Dagaz.Model.createMove(dir);
  m.movePiece(a1, a2, rotate(board.getPiece(a1), dir));
  m.movePiece(a2, a3, rotate(board.getPiece(a2), dir));
  m.movePiece(a3, a4, rotate(board.getPiece(a3), dir));
  m.movePiece(a4, a1, rotate(board.getPiece(a4), dir));
  m.movePiece(b1, b2, rotate(board.getPiece(b1), dir));
  m.movePiece(b2, b3, rotate(board.getPiece(b2), dir));
  m.movePiece(b3, b4, rotate(board.getPiece(b3), dir));
  m.movePiece(b4, b1, rotate(board.getPiece(b4), dir));
  board.moves.push(m);
}

function p(name) {
  return Dagaz.Model.stringToPos(name);
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;

  gen(board, p('c1'), p('i1'), p('i3'), p('c3'), p('f1'), p('i2'), p('f3'), p('c2'), 0);
  gen(board, p('c3'), p('i3'), p('i1'), p('c1'), p('c2'), p('f3'), p('i2'), p('f1'), 1);
  gen(board, p('b1'), p('h1'), p('h3'), p('b3'), p('e1'), p('h2'), p('e3'), p('b2'), 0);
  gen(board, p('b3'), p('h3'), p('h1'), p('b1'), p('b2'), p('e3'), p('h2'), p('e1'), 1);
  gen(board, p('a1'), p('g1'), p('g3'), p('a3'), p('d1'), p('g2'), p('d3'), p('a2'), 0);
  gen(board, p('a3'), p('g3'), p('g1'), p('a1'), p('a2'), p('d3'), p('g2'), p('d1'), 1);

  gen(board, p('i1'), p('c1'), p('a1'), p('g1'), p('f1'), p('b1'), p('d1'), p('h1'), 2);
  gen(board, p('g1'), p('a1'), p('c1'), p('i1'), p('h1'), p('d1'), p('b1'), p('f1'), 3);
  gen(board, p('i2'), p('c2'), p('a2'), p('g2'), p('f2'), p('b2'), p('d2'), p('h2'), 2);
  gen(board, p('g2'), p('a2'), p('c2'), p('i2'), p('h2'), p('d2'), p('b2'), p('f2'), 3);
  gen(board, p('i3'), p('c3'), p('a3'), p('g3'), p('f3'), p('b3'), p('d3'), p('h3'), 2);
  gen(board, p('g3'), p('a3'), p('c3'), p('i3'), p('h3'), p('d3'), p('b3'), p('f3'), 3);

  gen(board, p('i1'), p('g1'), p('g3'), p('i3'), p('h1'), p('g2'), p('h3'), p('i2'), 4);
  gen(board, p('i3'), p('g3'), p('g1'), p('i1'), p('i2'), p('h3'), p('g2'), p('h1'), 5);
  gen(board, p('f1'), p('d1'), p('d3'), p('f3'), p('e1'), p('d2'), p('e3'), p('f2'), 4);
  gen(board, p('f3'), p('d3'), p('d1'), p('f1'), p('f2'), p('e3'), p('d2'), p('e1'), 5);
  gen(board, p('c1'), p('a1'), p('a3'), p('c3'), p('b1'), p('a2'), p('b3'), p('c2'), 4);
  gen(board, p('c3'), p('a3'), p('a1'), p('c1'), p('c2'), p('b3'), p('a2'), p('b1'), 5);

  CheckInvariants(board);
}

})();
