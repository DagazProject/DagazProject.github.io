"use strict";

let g_width             = 5;
let g_height            = 5;

const NOISE_FACTOR      = 5;
const PIECE_MASK        = 0xF;
const TYPE_MASK         = 0x7;
const PLAYERS_MASK      = 0x18;
const COUNTER_SIZE      = 6;
const TYPE_SIZE         = 3;
const VECTORDELTA_SIZE  = 256;

const colorBlack        = 0x10;
const colorWhite        = 0x08;

const pieceEmpty        = 0x00;
const piecePawn         = 0x01;
const pieceUnicorn      = 0x02;
const pieceBishop       = 0x03;
const pieceKnight       = 0x04;
const pieceRook         = 0x05;
const pieceQueen        = 0x06;
const pieceKing         = 0x07;
const pieceNo           = 0x80;

const moveflagPromotion = 0x01 << 24;

//var g_vectorDelta = new Array(VECTORDELTA_SIZE);

importScripts('../../underscore/underscore-min.js', '../../common-scripts/zobrist-worker.js', '../../common-scripts/garbo-worker.js');

function GetMoveSAN(move, validMoves) {
    return FormatMove(move);
}

function MakeSquare(row, column, plane) {
    return ((plane + 2) << 8) | ((row + 2) << 4) | (column + 4);
}

function FormatSquare(square) {
    const p = ['A', 'B', 'C', 'D', 'E'];
    const r = ['a', 'b', 'c', 'd', 'e'];
    return p[(square >> 8)  - 2] + 
           r[(square & 0xF) - 4] + 
           (((g_height + 1) - ((square & 0xF0) >> 4)) + 1);
}

function FormatMove(move) {
    const result = FormatSquare(move & 0xFFF) + '-' + FormatSquare((move >> 12) & 0xFFF);
    return result;
}

const materialTable = [0, 800, 2000, 2500, 3350, 5000, 10000, 600000];

const emptyAdj = [   
    0,    0,    0,    0,    0, // pieceEmpty
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,

    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,

    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,

    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,

    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0
];

const pawnAdj = [   
    0,    0,    0,    0,    0, // piecePawn
   50,  200,  300,  150,   50, 
   30,  100,  150,  100,   30, 
   10,   50,  100,   50,   10, 
    0,    0,    0,    0,    0,

   50,  200,  300,  200,   50,
   30,  150,  250,  150,   30, 
   10,  100,  200,  100,   10, 
    0,   50,  150,   50,    0, 
    0,    0,    0,    0,    0,

    0,   30,   50,   30,    0,
  -10,   50,  100,   50,  -10, 
    0,   70,  200,   70,    0, 
  -10,   40,  130,   40,  -10, 
    0,    0,    0,    0,    0,

  -30,   10,   30,   10,  -30,
  -20,   30,   50,   30,  -20, 
  -10,   50,  150,   50,  -10, 
  -20,   20,  100,   20,  -20, 
    0,    0,    0,    0,    0,

  -40,    0,   10,    0,  -40,
  -30,   10,   50,   10,  -30, 
  -20,   20,   80,   20,  -20, 
  -50,   10,   70,   10,  -50, 
    0,    0,    0,    0,    0
];

const unicornAdj = [   
    0,    0,    0,    0,    0, // pieceUnicorn
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,

    0,    0,    0,    0,    0,
    0,   20,   20,   20,    0, 
    0,   20,   30,   20,    0, 
    0,   20,   20,   20,    0, 
    0,    0,    0,    0,    0,

    0,    0,    0,    0,    0,
    0,   30,   30,   30,    0, 
    0,   30,   60,   30,    0, 
    0,   30,   30,   30,    0, 
    0,    0,    0,    0,    0,

    0,    0,    0,    0,    0,
    0,   20,   20,   20,    0, 
    0,   20,   30,   20,    0, 
    0,   20,   20,   20,    0, 
    0,    0,    0,    0,    0,

    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0
];

const bishopAdj = [   
  -50,    0,    0,    0,  -50, // pieceBishop
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,

    0,    0,    0,    0,    0,
    0,   20,   20,   20,    0, 
    0,   20,   30,   20,    0, 
    0,   20,   20,   20,    0, 
    0,    0,    0,    0,    0,

    0,    0,    0,    0,    0,
    0,   30,   30,   30,    0, 
    0,   30,   60,   30,    0, 
    0,   30,   30,   30,    0, 
    0,    0,    0,    0,    0,

    0,    0,    0,    0,    0,
    0,   20,   20,   20,    0, 
    0,   20,   30,   20,    0, 
    0,   20,   20,   20,    0, 
    0,    0,    0,    0,    0,

    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
  -50,    0,    0,    0,  -50
];

const knightAdj = [   
  -50,    0,    0,    0,  -50, // pieceKnight
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,

    0,    0,    0,    0,    0,
    0,   20,   20,   20,    0, 
    0,   20,   30,   20,    0, 
    0,   20,   20,   20,    0, 
    0,    0,    0,    0,    0,

    0,    0,    0,    0,    0,
    0,   30,   30,   30,    0, 
    0,   30,   60,   30,    0, 
    0,   30,   30,   30,    0, 
    0,    0,    0,    0,    0,

    0,    0,    0,    0,    0,
    0,   20,   20,   20,    0, 
    0,   20,   30,   20,    0, 
    0,   20,   20,   20,    0, 
    0,    0,    0,    0,    0,

    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
  -50,    0,    0,    0,  -50
];

const rookAdj = [   
    0,    0,    0,    0,    0, // pieceRook
    0,   20,  100,   20,    0, 
    0,   20,   20,   20,    0, 
    0,   20,   20,   20,    0, 
    0,    0,    0,    0,    0,

    0,   20,  100,   20,    0,
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,

    0,   20,   20,   20,    0,
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,

    0,   20,   20,   20,    0,
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,

    0,   20,   20,   20,    0,
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0
];

const queenAdj = [
    0,    0,    0,    0,    0, // pieceQueen
    0,   20,  100,   20,    0, 
    0,   20,   20,   20,    0, 
    0,   20,   20,   20,    0, 
    0,    0,    0,    0,    0,

    0,   20,  100,   20,    0,
    0,   30,   30,   30,    0, 
    0,   30,   70,   30,    0, 
    0,   30,   30,   30,    0, 
    0,    0,    0,    0,    0,

    0,   20,   20,   20,    0,
    0,   70,   70,   70,    0, 
    0,   70,  100,   70,    0, 
    0,   70,   70,   70,    0, 
    0,    0,    0,    0,    0,

    0,   20,   20,   20,    0,
    0,   10,   10,   10,    0, 
    0,   10,   50,   10,    0, 
    0,   10,   10,   10,    0, 
    0,    0,    0,    0,    0,

    0,   20,   20,   20,    0,
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0
];

const kingAdj = [   
    0,    0,    0,    0,    0, // pieceKing
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,

    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,

    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,

    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,  100, -100,  100,    0, 
    0,   50,  -50,   50,    0,

    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,  100,  -50,  100,    0, 
    0,   50,  -25,   50,    0
];

const pieceSquareAdj = new Array(8);
const flipTable = new Array(256 * 9);

const g_seeValues = [0, 1, 3, 3, 3, 5, 9, 900,
                     0, 1, 3, 3, 3, 5, 9, 900];

function Mobility(color) {
    let result = 0;
    let from, to, mob, pieceIdx;

    const enemy = color == colorWhite ? colorBlack : colorWhite
    const mobUnit = color == colorWhite ? g_mobUnit[0] : g_mobUnit[1];

    // Unicorn mobility
    mob = -4;
    pieceIdx = (color | pieceUnicorn) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from - 239; while (g_board[to] == 0) { to -= 239; mob++; }
        if (g_board[to] & enemy) {
          mob++;
          if (!(g_board[to] & piecePawn)) {
            to -= 239; while (g_board[to] == 0) to -= 239;
            mob += mobUnit[g_board[to]] << 2;
          }
        }

        to = from + 239; while (g_board[to] == 0) { to += 239; mob++; }
        if (g_board[to] & enemy) {
          mob++;
          if (!(g_board[to] & piecePawn)) {
            to += 239; while (g_board[to] == 0) to += 239;
            mob += mobUnit[g_board[to]] << 2; 
          }
        }

        to = from - 273; while (g_board[to] == 0) { to -= 273; mob++; }
        if (g_board[to] & enemy) {
          mob++;
          if (!(g_board[to] & piecePawn)) {
            to -= 273; while (g_board[to] == 0) to -= 273;
            mob += mobUnit[g_board[to]] << 2; 
          }
        }

        to = from + 273; while (g_board[to] == 0) { to += 273; mob++; }
        if (g_board[to] & enemy) {
          mob++;
          if (!(g_board[to] & piecePawn)) {
            to += 273; while (g_board[to] == 0) to += 273;
            mob += mobUnit[g_board[to]] << 2;
          }
        }

        to = from - 241; while (g_board[to] == 0) { to -= 241; mob++; }
        if (g_board[to] & enemy) {
          mob++;
          if (!(g_board[to] & piecePawn)) {
            to -= 241; while (g_board[to] == 0) to -= 241;
            mob += mobUnit[g_board[to]] << 2; 
          }
        }

        to = from + 241; while (g_board[to] == 0) { to += 241; mob++; }
        if (g_board[to] & enemy) {
          mob++;
          if (!(g_board[to] & piecePawn)) {
            to += 241; while (g_board[to] == 0) to += 241;
            mob += mobUnit[g_board[to]] << 2;
          }
        }

        to = from - 271; while (g_board[to] == 0) { to -= 271; mob++; }
        if (g_board[to] & enemy) {
          mob++;
          if (!(g_board[to] & piecePawn)) {
            to -= 271; while (g_board[to] == 0) to -= 271;
            mob += mobUnit[g_board[to]] << 2; 
          }
        }

        to = from + 271; while (g_board[to] == 0) { to += 271; mob++; }
        if (g_board[to] & enemy) {
          mob++;
          if (!(g_board[to] & piecePawn)) {
            to += 271; while (g_board[to] == 0) to += 271;
            mob += mobUnit[g_board[to]] << 2;
          }
        }

        from = g_pieceList[pieceIdx++];
    }
    result += 44 * mob;

    // Knight mobility
    mob = -3;
    pieceIdx = (color | pieceKnight) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        mob += mobUnit[g_board[from + 31]];
        mob += mobUnit[g_board[from + 33]];
        mob += mobUnit[g_board[from + 14]];
        mob += mobUnit[g_board[from - 14]];
        mob += mobUnit[g_board[from - 31]];
        mob += mobUnit[g_board[from - 33]];
        mob += mobUnit[g_board[from + 18]];
        mob += mobUnit[g_board[from - 18]];
        mob += mobUnit[g_board[from + 224]];
        mob += mobUnit[g_board[from - 224]];
        mob += mobUnit[g_board[from + 288]];
        mob += mobUnit[g_board[from - 288]];
        mob += mobUnit[g_board[from + 254]];
        mob += mobUnit[g_board[from - 254]];
        mob += mobUnit[g_board[from + 258]];
        mob += mobUnit[g_board[from - 258]];
        mob += mobUnit[g_board[from + 496]];
        mob += mobUnit[g_board[from - 496]];
        mob += mobUnit[g_board[from + 528]];
        mob += mobUnit[g_board[from - 528]];
        mob += mobUnit[g_board[from + 511]];
        mob += mobUnit[g_board[from - 511]];
        mob += mobUnit[g_board[from + 513]];
        mob += mobUnit[g_board[from - 513]];
        from = g_pieceList[pieceIdx++];
    }
    result += 65 * mob;

    // Bishop mobility
    mob = -4;
    pieceIdx = (color | pieceBishop) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from - 15; while (g_board[to] == 0) { to -= 15; mob++; }
        if (g_board[to] & enemy) {
          mob++;
          if (!(g_board[to] & piecePawn)) {
            to -= 15; while (g_board[to] == 0) to -= 15;
            mob += mobUnit[g_board[to]] << 2;
          }
        }

        to = from + 15; while (g_board[to] == 0) { to += 15; mob++; }
        if (g_board[to] & enemy) {
          mob++;
          if (!(g_board[to] & piecePawn)) {
            to += 15; while (g_board[to] == 0) to += 15;
            mob += mobUnit[g_board[to]] << 2; 
          }
        }

        to = from - 17; while (g_board[to] == 0) { to -= 17; mob++; }
        if (g_board[to] & enemy) {
          mob++;
          if (!(g_board[to] & piecePawn)) {
            to -= 17; while (g_board[to] == 0) to -= 17;
            mob += mobUnit[g_board[to]] << 2; 
          }
        }

        to = from + 17; while (g_board[to] == 0) { to += 17; mob++; }
        if (g_board[to] & enemy) {
          mob++;
          if (!(g_board[to] & piecePawn)) {
            to += 17; while (g_board[to] == 0) to += 17;
            mob += mobUnit[g_board[to]] << 2;
          }
        }

        to = from - 272; while (g_board[to] == 0) { to -= 272; mob++; }
        if (g_board[to] & enemy) {
          mob++;
          if (!(g_board[to] & piecePawn)) {
            to -= 272; while (g_board[to] == 0) to -= 272;
            mob += mobUnit[g_board[to]] << 2; 
          }
        }

        to = from + 272; while (g_board[to] == 0) { to += 272; mob++; }
        if (g_board[to] & enemy) {
          mob++;
          if (!(g_board[to] & piecePawn)) {
            to += 272; while (g_board[to] == 0) to += 272;
            mob += mobUnit[g_board[to]] << 2;
          }
        }

        to = from - 240; while (g_board[to] == 0) { to -= 240; mob++; }
        if (g_board[to] & enemy) {
          mob++;
          if (!(g_board[to] & piecePawn)) {
            to -= 240; while (g_board[to] == 0) to -= 240;
            mob += mobUnit[g_board[to]] << 2; 
          }
        }

        to = from + 240; while (g_board[to] == 0) { to += 240; mob++; }
        if (g_board[to] & enemy) {
          mob++;
          if (!(g_board[to] & piecePawn)) {
            to += 240; while (g_board[to] == 0) to += 240;
            mob += mobUnit[g_board[to]] << 2;
          }
        }

        to = from - 255; while (g_board[to] == 0) { to -= 255; mob++; }
        if (g_board[to] & enemy) {
          mob++;
          if (!(g_board[to] & piecePawn)) {
            to -= 255; while (g_board[to] == 0) to -= 255;
            mob += mobUnit[g_board[to]] << 2; 
          }
        }

        to = from + 255; while (g_board[to] == 0) { to += 255; mob++; }
        if (g_board[to] & enemy) {
          mob++;
          if (!(g_board[to] & piecePawn)) {
            to += 255; while (g_board[to] == 0) to += 255;
            mob += mobUnit[g_board[to]] << 2;
          }
        }

        to = from - 257; while (g_board[to] == 0) { to -= 257; mob++; }
        if (g_board[to] & enemy) {
          mob++;
          if (!(g_board[to] & piecePawn)) {
            to -= 257; while (g_board[to] == 0) to -= 257;
            mob += mobUnit[g_board[to]] << 2; 
          }
        }

        to = from + 257; while (g_board[to] == 0) { to += 257; mob++; }
        if (g_board[to] & enemy) {
          mob++;
          if (!(g_board[to] & piecePawn)) {
            to += 257; while (g_board[to] == 0) to += 257;
            mob += mobUnit[g_board[to]] << 2;
          }
        }

        from = g_pieceList[pieceIdx++];
    }
    result += 44 * mob;

    // Rook mobility
    mob = -4;
    pieceIdx = (color | pieceRook) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from - 1;  while (g_board[to] == 0) { to--; mob++;}  if (g_board[to] & enemy) mob++;
        to = from + 1;  while (g_board[to] == 0) { to++; mob++; } if (g_board[to] & enemy) mob++;
        to = from + 16; while (g_board[to] == 0) { to += 16; mob++; } if (g_board[to] & enemy) mob++;
        to = from - 16; while (g_board[to] == 0) { to -= 16; mob++; } if (g_board[to] & enemy) mob++;
        to = from + 256; while (g_board[to] == 0) { to += 256; mob++; } if (g_board[to] & enemy) mob++;
        to = from - 256; while (g_board[to] == 0) { to -= 256; mob++; } if (g_board[to] & enemy) mob++;
        from = g_pieceList[pieceIdx++];
    }
    result += 25 * mob;

    // Queen mobility
    mob = -2;
    pieceIdx = (color | pieceQueen) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from - 15; while (g_board[to] == 0) { to -= 15; mob++; } if (g_board[to] & enemy) mob++;
        to = from - 17; while (g_board[to] == 0) { to -= 17; mob++; } if (g_board[to] & enemy) mob++;
        to = from + 15; while (g_board[to] == 0) { to += 15; mob++; } if (g_board[to] & enemy) mob++;
        to = from + 17; while (g_board[to] == 0) { to += 17; mob++; } if (g_board[to] & enemy) mob++;
        to = from - 1;  while (g_board[to] == 0) { to--; mob++; } if (g_board[to] & enemy) mob++;
        to = from + 1;  while (g_board[to] == 0) { to++; mob++; } if (g_board[to] & enemy) mob++;
        to = from + 16; while (g_board[to] == 0) { to += 16; mob++; } if (g_board[to] & enemy) mob++;
        to = from - 16; while (g_board[to] == 0) { to -= 16; mob++; } if (g_board[to] & enemy) mob++;
        to = from + 256; while (g_board[to] == 0) { to += 256; mob++; } if (g_board[to] & enemy) mob++;
        to = from - 256; while (g_board[to] == 0) { to -= 256; mob++; } if (g_board[to] & enemy) mob++;
        to = from + 272; while (g_board[to] == 0) { to += 272; mob++; } if (g_board[to] & enemy) mob++;
        to = from - 272; while (g_board[to] == 0) { to -= 272; mob++; } if (g_board[to] & enemy) mob++;
        to = from + 240; while (g_board[to] == 0) { to += 240; mob++; } if (g_board[to] & enemy) mob++;
        to = from - 240; while (g_board[to] == 0) { to -= 240; mob++; } if (g_board[to] & enemy) mob++;
        to = from + 255; while (g_board[to] == 0) { to += 255; mob++; } if (g_board[to] & enemy) mob++;
        to = from - 255; while (g_board[to] == 0) { to -= 255; mob++; } if (g_board[to] & enemy) mob++;
        to = from + 257; while (g_board[to] == 0) { to += 257; mob++; } if (g_board[to] & enemy) mob++;
        to = from - 257; while (g_board[to] == 0) { to -= 257; mob++; } if (g_board[to] & enemy) mob++;
        to = from + 239; while (g_board[to] == 0) { to += 239; mob++; } if (g_board[to] & enemy) mob++;
        to = from - 239; while (g_board[to] == 0) { to -= 239; mob++; } if (g_board[to] & enemy) mob++;
        to = from + 273; while (g_board[to] == 0) { to += 273; mob++; } if (g_board[to] & enemy) mob++;
        to = from - 273; while (g_board[to] == 0) { to -= 273; mob++; } if (g_board[to] & enemy) mob++;
        to = from + 241; while (g_board[to] == 0) { to += 241; mob++; } if (g_board[to] & enemy) mob++;
        to = from - 241; while (g_board[to] == 0) { to -= 241; mob++; } if (g_board[to] & enemy) mob++;
        to = from + 271; while (g_board[to] == 0) { to += 271; mob++; } if (g_board[to] & enemy) mob++;
        to = from - 271; while (g_board[to] == 0) { to -= 271; mob++; } if (g_board[to] & enemy) mob++;
        from = g_pieceList[pieceIdx++];
    }
    result += 22 * mob;

    return result;
}

function Evaluate() {
    let curEval = g_baseEval;
    let evalAdjust = 0;

    // Black queen gone, then cancel white's penalty for king movement
    if (g_pieceList[pieceQueen << COUNTER_SIZE] == 0) {
        const kingPos = g_pieceList[(colorWhite | pieceKing) << COUNTER_SIZE];
        if (kingPos != 0) {
            evalAdjust -= pieceSquareAdj[pieceKing][kingPos];
        }
    }

    // White queen gone, then cancel black's penalty for king movement
    if (g_pieceList[(colorWhite | pieceQueen) << COUNTER_SIZE] == 0) {
        const kingPos = flipTable[g_pieceList[pieceKing << COUNTER_SIZE]];
        if (kingPos != 0) {
            evalAdjust += pieceSquareAdj[pieceKing][kingPos];
        }
    }

    // Black bishop pair
    if (g_pieceCount[pieceBishop] >= 2)
        evalAdjust -= 500;
    // White bishop pair
    if (g_pieceCount[pieceBishop | colorWhite] >= 2)
        evalAdjust += 500;

    const mobility = Mobility(colorWhite) - Mobility(0);

    if (g_toMove == 0) {
        // Black
        curEval -= mobility;
        curEval -= evalAdjust;
    }
    else {
        curEval += mobility;
        curEval += evalAdjust;
    }
    
    return curEval;
}

function ScoreMove(move) {
    const moveTo = (move >> 12) & 0xFFF;
    const captured = g_board[moveTo] & TYPE_MASK;
    const piece = g_board[move & 0xFFF];
    let score;
    if (captured != pieceEmpty) {
        const pieceType = piece & TYPE_MASK;
        score = (captured << 5) - pieceType;
    } else {
        score = historyTable[piece & PIECE_MASK][moveTo];
    }
    return score;
}

function isNoZugzwang() {
    return g_pieceCount[pieceUnicorn | g_toMove] != 0 ||
           g_pieceCount[pieceBishop  | g_toMove] != 0 ||
           g_pieceCount[pieceKnight  | g_toMove] != 0 ||
           g_pieceCount[pieceRook    | g_toMove] != 0 ||
           g_pieceCount[pieceQueen   | g_toMove] != 0;
}

function IsHashMoveValid(hashMove) {
    const from = hashMove & 0xFFF;
    const to = (hashMove >> 12) & 0xFFF;
    const ourPiece = g_board[from];
    const pieceType = ourPiece & TYPE_MASK;
    if (pieceType < piecePawn || pieceType > pieceKing) return false;
    // Can't move a piece we don't control
    if (g_toMove != (ourPiece & colorWhite)) return false;
    // Can't move to a square that has something of the same color
    if (g_board[to] != 0 && (g_toMove == (g_board[to] & colorWhite))) return false;
    if (pieceType == piecePawn) {
        if (hashMove & moveflagPromotion) {
            return false;
        }
        // Valid moves are push, capture, double push, promotions
        const dir = to - from;
        if (g_toMove == colorWhite) {
            if (_.indexOf([-16, 256, -15, -17, 255, 257, 240], +dir) < 0) return false;
        } else {
            if (_.indexOf([16, -256, 15, 17, -255, -257, -240], +dir) < 0) return false;
        }

        const row = to & 0xFF0;
        if (((row == 0x260 && !g_toMove) ||
             (row == 0x620 && g_toMove)) != (hashMove & moveflagPromotion)) {
            // Handle promotions
            return false;
        }

        if (dir == -16 || dir == 16 || dir == -256 || dir == 256) {
            // White/Black push
            return g_board[to] == 0;
        } else if (dir == -15 || dir == -17 || dir == 15 || dir == 17 || dir == -255 || dir == 255 || dir == -257 || dir == 257 || dir == -240 || dir == 240) {
            // White/Black capture
            return g_board[to] != 0;
        } else {
            return false;
        }

        return true;
    } else {
        return IsSquareAttackableFrom(to, from);
    }
}

function MakeTable3D(table) {
    var result = new Array(256 * 9);
    for (var i = 0; i < 256 * 9; i++) {
        result[i] = 0;
    }
    for (var plane = 0; plane < g_height; plane++) {
        for (var row = 0; row < g_height; row++) {
            for (var col = 0; col < g_width; col++) {
                result[MakeSquare(row, col, plane)] = table[(plane * g_width * g_height) + (row * g_width) + col];
            }
        }
    }
    return result;
}

function ResetGame() {
  CommonResetGame();

  for (let plane = 0; plane < g_height; plane++) {
       for (let row = 0; row < g_height; row++) {
            for (let col = 0; col < g_width; col++) {
                 const square = MakeSquare(row, col, plane);
                 flipTable[square] = MakeSquare((g_height - 1) - row, (g_width - 1) - col, (g_height - 1) - plane);
            }
       }
  }

  pieceSquareAdj[pieceEmpty]   = MakeTable3D(emptyAdj);
  pieceSquareAdj[piecePawn]    = MakeTable3D(pawnAdj);
  pieceSquareAdj[pieceUnicorn] = MakeTable3D(unicornAdj);
  pieceSquareAdj[pieceKnight]  = MakeTable3D(knightAdj);
  pieceSquareAdj[pieceBishop]  = MakeTable3D(bishopAdj);
  pieceSquareAdj[pieceRook]    = MakeTable3D(rookAdj);
  pieceSquareAdj[pieceQueen]   = MakeTable3D(queenAdj);
  pieceSquareAdj[pieceKing]    = MakeTable3D(kingAdj);

  InitializeEval();
}

function InitializeEval() {
    g_mobUnit = new Array(2);
    for (let i = 0; i < 2; i++) {
        g_mobUnit[i] = new Array();
        const enemy = i == 0 ? colorBlack : colorWhite;
        const friend = i == 0 ? colorWhite : colorBlack;
        g_mobUnit[i][pieceEmpty] = 1;
        g_mobUnit[i][pieceNo] = 0;
        g_mobUnit[i][enemy  | piecePawn]    = 1;
        g_mobUnit[i][enemy  | pieceBishop]  = 2;
        g_mobUnit[i][enemy  | pieceKnight]  = 2;
        g_mobUnit[i][enemy  | pieceUnicorn] = 2;
        g_mobUnit[i][enemy  | pieceRook]    = 4;
        g_mobUnit[i][enemy  | pieceQueen]   = 6;
        g_mobUnit[i][enemy  | pieceKing]    = 6;
        g_mobUnit[i][friend | piecePawn]    = 0;
        g_mobUnit[i][friend | pieceBishop]  = 0;
        g_mobUnit[i][friend | pieceKnight]  = 0;
        g_mobUnit[i][friend | pieceUnicorn] = 0;
        g_mobUnit[i][friend | pieceRook]    = 0;
        g_mobUnit[i][friend | pieceQueen]   = 0;
        g_mobUnit[i][friend | pieceKing]    = 0;
    }
}

function InitializeFromFen(fen) {
    const chunks = fen.split(' ');
    
    for (let i = 0; i < 256 * 9; i++) 
        g_board[i] = pieceNo;
    
    let pln = g_height - 1;
    let row = 0;
    let col = 0;
    
    const pieces = chunks[0];
    for (let i = 0; i < pieces.length; i++) {
         let c = pieces.charAt(i);

         if (c == '/') {
             row++;
             col = 0;
             if (row >= g_height) {
                 pln--;
                 row = 0;
             }
             if (pln < 0) break;
         } else {
            if (c >= '0' && c <= '9') {
                for (let j = 0; j < parseInt(c); j++) {
                    g_board[MakeSquare(row, col, pln)] = 0;
                    col++;
                }
            } else {
                let isBlack = c >= 'a' && c <= 'z';
                let piece = isBlack ? colorBlack : colorWhite;
                if (!isBlack) 
                    c = pieces.toLowerCase().charAt(i);
                switch (c) {
                    case 'p':
                        piece |= piecePawn;
                        break;
                    case 'b':
                        piece |= pieceBishop;
                        break;
                    case 'u':
                        piece |= pieceUnicorn;
                        break;
                    case 'n':
                        piece |= pieceKnight;
                        break;
                    case 'r':
                        piece |= pieceRook;
                        break;
                    case 'q':
                        piece |= pieceQueen;
                        break;
                    case 'k':
                        piece |= pieceKing;
                        break;
                }
                g_board[MakeSquare(row, col, pln)] = piece;
                col++;
            }
         }
    }
    
    InitializePieceList();
    
    g_toMove = chunks[1].charAt(0) == 'w' ? colorWhite : 0;
    const them = colorWhite - g_toMove;
    
    let hashResult = SetHash();
    g_hashKeyLow = hashResult.hashKeyLow;
    g_hashKeyHigh = hashResult.hashKeyHigh;

    g_baseEval = 0;
    for (let i = 0; i < 256 * 9; i++) {
        if (g_board[i] & colorWhite) {
            g_baseEval += pieceSquareAdj[g_board[i] & TYPE_MASK][i];
            g_baseEval += materialTable[g_board[i] & TYPE_MASK];
        } else if (g_board[i] & colorBlack) {
            g_baseEval -= pieceSquareAdj[g_board[i] & TYPE_MASK][flipTable[i]];
            g_baseEval -= materialTable[g_board[i] & TYPE_MASK];
        }
    }
    if (!g_toMove) g_baseEval = -g_baseEval;

    g_move50 = 0;
    let kingPos = g_pieceList[(g_toMove | pieceKing) << COUNTER_SIZE];
    g_inCheck = false;
    if (kingPos != 0) {
        g_inCheck = IsSquareAttackable(kingPos, them);
    }

    // Check for king capture (invalid FEN)
    kingPos = g_pieceList[(them | pieceKing) << COUNTER_SIZE];
    if ((kingPos != 0) && IsSquareAttackable(kingPos, g_toMove)) {
        return 'Invalid FEN: Can capture king';
    }

    // Checkmate/stalemate
    if (GenerateValidMoves().length == 0) {
        return g_inCheck ? 'Checkmate' : 'Stalemate';
    } 

    return '';
}

function UndoHistory(inCheck, baseEval, hashKeyLow, hashKeyHigh, move50, captured) {
    this.inCheck = inCheck;
    this.baseEval = baseEval;
    this.hashKeyLow = hashKeyLow;
    this.hashKeyHigh = hashKeyHigh;
    this.move50 = move50;
    this.captured = captured;
}

function MakeMove(move) {
    const me = g_toMove >> TYPE_SIZE;
    const otherColor = colorWhite - g_toMove; 
    
    const flags = move & 0xFF000000;
    const to = (move >> 12) & 0xFFF;
    const from = move & 0xFFF;
    const captured = g_board[to];
    let piece = g_board[from];

    g_moveUndoStack[g_moveCount] = new UndoHistory(g_inCheck, g_baseEval, g_hashKeyLow, g_hashKeyHigh, g_move50, captured);
    g_moveCount++;

    if (captured) {
        // Remove our piece from the piece list
        const capturedType = captured & PIECE_MASK;
        g_pieceCount[capturedType]--;
        const lastPieceSquare = g_pieceList[(capturedType << COUNTER_SIZE) | g_pieceCount[capturedType]];
        g_pieceIndex[lastPieceSquare] = g_pieceIndex[to];
        g_pieceList[(capturedType << COUNTER_SIZE) | g_pieceIndex[lastPieceSquare]] = lastPieceSquare;
        g_pieceList[(capturedType << COUNTER_SIZE) | g_pieceCount[capturedType]] = 0;

        g_baseEval += materialTable[captured & TYPE_MASK];
        g_baseEval += pieceSquareAdj[captured & TYPE_MASK][me ? flipTable[to] : to];

        g_hashKeyLow ^= g_zobristLow[to][capturedType];
        g_hashKeyHigh ^= g_zobristHigh[to][capturedType];
        g_move50 = 0;
    }

    g_hashKeyLow ^= g_zobristLow[from][piece & PIECE_MASK];
    g_hashKeyHigh ^= g_zobristHigh[from][piece & PIECE_MASK];
    g_hashKeyLow ^= g_zobristLow[to][piece & PIECE_MASK];
    g_hashKeyHigh ^= g_zobristHigh[to][piece & PIECE_MASK];
    g_hashKeyLow ^= g_zobristBlackLow;
    g_hashKeyHigh ^= g_zobristBlackHigh;
    
    g_baseEval -= pieceSquareAdj[piece & TYPE_MASK][me == 0 ? flipTable[from] : from];
    
    // Move our piece in the piece list
    g_pieceIndex[to] = g_pieceIndex[from];
    g_pieceList[((piece & PIECE_MASK) << COUNTER_SIZE) | g_pieceIndex[to]] = to;

    if (flags & moveflagPromotion) {
        let newPiece = piece & (~TYPE_MASK);
        newPiece |= pieceQueen;

        g_hashKeyLow ^= g_zobristLow[to][piece & PIECE_MASK];
        g_hashKeyHigh ^= g_zobristHigh[to][piece & PIECE_MASK];
        g_board[to] = newPiece;
        g_hashKeyLow ^= g_zobristLow[to][newPiece & PIECE_MASK];
        g_hashKeyHigh ^= g_zobristHigh[to][newPiece & PIECE_MASK];
        
        g_baseEval += pieceSquareAdj[newPiece & TYPE_MASK][me == 0 ? flipTable[to] : to];
        g_baseEval -= materialTable[piecePawn];
        g_baseEval += materialTable[newPiece & TYPE_MASK];

        const pawnType = piece & PIECE_MASK;
        const promoteType = newPiece & PIECE_MASK;

        g_pieceCount[pawnType]--;

        const lastPawnSquare = g_pieceList[(pawnType << COUNTER_SIZE) | g_pieceCount[pawnType]];
        g_pieceIndex[lastPawnSquare] = g_pieceIndex[to];
        g_pieceList[(pawnType << COUNTER_SIZE) | g_pieceIndex[lastPawnSquare]] = lastPawnSquare;
        g_pieceList[(pawnType << COUNTER_SIZE) | g_pieceCount[pawnType]] = 0;
        g_pieceIndex[to] = g_pieceCount[promoteType];
        g_pieceList[(promoteType << COUNTER_SIZE) | g_pieceIndex[to]] = to;
        g_pieceCount[promoteType]++;
    } else {
        g_board[to] = g_board[from];
        g_baseEval += pieceSquareAdj[piece & TYPE_MASK][me == 0 ? flipTable[to] : to];
    }
    g_board[from] = pieceEmpty;

    g_toMove = otherColor;
    g_baseEval = -g_baseEval;
    
    const kingPos = g_pieceList[(pieceKing | (colorWhite - g_toMove)) << COUNTER_SIZE];
    if ((kingPos != 0) && IsSquareAttackable(kingPos, otherColor)) {
        UnmakeMove(move);
        return false;
    }
    
    g_inCheck = false;
    
    const theirKingPos = g_pieceList[(pieceKing | g_toMove) << COUNTER_SIZE];
    if (theirKingPos != 0) {
//      g_inCheck = IsSquareAttackable(theirKingPos, g_toMove);
    }

    g_repMoveStack[g_moveCount - 1] = g_hashKeyLow;
    g_move50++;

    return true;
}

function UnmakeMove(move) {
    g_toMove = colorWhite - g_toMove;
    g_baseEval = -g_baseEval;
    
    g_moveCount--;
    g_inCheck = g_moveUndoStack[g_moveCount].inCheck;
    g_baseEval = g_moveUndoStack[g_moveCount].baseEval;
    g_hashKeyLow = g_moveUndoStack[g_moveCount].hashKeyLow;
    g_hashKeyHigh = g_moveUndoStack[g_moveCount].hashKeyHigh;
    g_move50 = g_moveUndoStack[g_moveCount].move50;
    
    const otherColor = colorWhite - g_toMove;
    const me = g_toMove >> TYPE_SIZE;
    const them = otherColor >> TYPE_SIZE;
    
    const flags = move & 0xFF000000;
    const captured = g_moveUndoStack[g_moveCount].captured;
    const to = (move >> 12) & 0xFFF;
    const from = move & 0xFFF;
    
    let piece = g_board[to];
    
    if (flags & moveflagPromotion) {
        piece = (g_board[to] & (~TYPE_MASK)) | piecePawn;
        g_board[from] = piece;

        const pawnType = g_board[from] & PIECE_MASK;
        const promoteType = g_board[to] & PIECE_MASK;

        g_pieceCount[promoteType]--;

        const lastPromoteSquare = g_pieceList[(promoteType << COUNTER_SIZE) | g_pieceCount[promoteType]];
        g_pieceIndex[lastPromoteSquare] = g_pieceIndex[to];
        g_pieceList[(promoteType << COUNTER_SIZE) | g_pieceIndex[lastPromoteSquare]] = lastPromoteSquare;
        g_pieceList[(promoteType << COUNTER_SIZE) | g_pieceCount[promoteType]] = 0;
        g_pieceIndex[to] = g_pieceCount[pawnType];
        g_pieceList[(pawnType << COUNTER_SIZE) | g_pieceIndex[to]] = to;
        g_pieceCount[pawnType]++;
    } else {
        g_board[from] = g_board[to];
    }

    g_board[to] = captured;

    // Move our piece in the piece list
    g_pieceIndex[from] = g_pieceIndex[to];
    g_pieceList[((piece & PIECE_MASK) << COUNTER_SIZE) | g_pieceIndex[from]] = from;

    if (captured) {
        // Restore our piece to the piece list
        const captureType = captured & PIECE_MASK;
        g_pieceIndex[to] = g_pieceCount[captureType];
        g_pieceList[(captureType << COUNTER_SIZE) | g_pieceCount[captureType]] = to;
        g_pieceCount[captureType]++;
    }
}

function IsSquareAttackableFrom(target, from) {
    let to, pos, piece, pieceType, adj;

    piece = g_board[from];
    pieceType = piece & TYPE_MASK;

    if (pieceType == pieceEmpty) return false;
    const color = (piece & colorWhite);
    const enemy = color ? colorBlack : colorWhite;
    const inc = color ? -1 : 1;
    const me = color >> TYPE_SIZE;

    if (pieceType == piecePawn) {
        if (+from + ((inc * 16) - 1) == target) return true;
        if (+from + ((inc * 16) + 1) == target) return true;
        if (+from + ((inc * -256) - 1) == target) return true;
        if (+from + ((inc * -256) + 1) == target) return true;
        if (+from + (inc * -240) == target) return true;
    }

    if (pieceType == pieceUnicorn) {
       to = from; do { to += 239; if (to == target) return true; } while (g_board[to] == 0);
       to = from; do { to -= 239; if (to == target) return true; } while (g_board[to] == 0);
       to = from; do { to += 273; if (to == target) return true; } while (g_board[to] == 0);
       to = from; do { to -= 273; if (to == target) return true; } while (g_board[to] == 0);
       to = from; do { to += 241; if (to == target) return true; } while (g_board[to] == 0);
       to = from; do { to -= 241; if (to == target) return true; } while (g_board[to] == 0);
       to = from; do { to += 271; if (to == target) return true; } while (g_board[to] == 0);
       to = from; do { to -= 271; if (to == target) return true; } while (g_board[to] == 0);
    }

    if (pieceType == pieceBishop) {
       to = from; do { to += 17; if (to == target) return true; } while (g_board[to] == 0);
       to = from; do { to -= 17; if (to == target) return true; } while (g_board[to] == 0);
       to = from; do { to += 15; if (to == target) return true; } while (g_board[to] == 0);
       to = from; do { to -= 15; if (to == target) return true; } while (g_board[to] == 0);
       to = from; do { to += 272; if (to == target) return true; } while (g_board[to] == 0);
       to = from; do { to -= 272; if (to == target) return true; } while (g_board[to] == 0);
       to = from; do { to += 240; if (to == target) return true; } while (g_board[to] == 0);
       to = from; do { to -= 240; if (to == target) return true; } while (g_board[to] == 0);
       to = from; do { to += 255; if (to == target) return true; } while (g_board[to] == 0);
       to = from; do { to -= 255; if (to == target) return true; } while (g_board[to] == 0);
       to = from; do { to += 257; if (to == target) return true; } while (g_board[to] == 0);
       to = from; do { to -= 257; if (to == target) return true; } while (g_board[to] == 0);
    }

    if (pieceType == pieceKnight) {
        if (+from - 31 == target) return true;
        if (+from + 31 == target) return true;
        if (+from - 33 == target) return true;
        if (+from + 33 == target) return true;
        if (+from - 14 == target) return true;
        if (+from + 14 == target) return true;
        if (+from - 18 == target) return true;
        if (+from + 18 == target) return true;
        if (+from - 224 == target) return true;
        if (+from + 224 == target) return true;
        if (+from - 288 == target) return true;
        if (+from + 288 == target) return true;
        if (+from - 254 == target) return true;
        if (+from + 254 == target) return true;
        if (+from - 258 == target) return true;
        if (+from + 258 == target) return true;
        if (+from - 496 == target) return true;
        if (+from + 496 == target) return true;
        if (+from - 528 == target) return true;
        if (+from + 528 == target) return true;
        if (+from - 511 == target) return true;
        if (+from + 511 == target) return true;
        if (+from - 513 == target) return true;
        if (+from + 513 == target) return true;
    }

    if (pieceType == pieceRook) {
       to = from; do { to++; if (to == target) return true; } while (g_board[to] == 0);
       to = from; do { to--; if (to == target) return true; } while (g_board[to] == 0);
       to = from; do { to += 16; if (to == target) return true; } while (g_board[to] == 0);
       to = from; do { to -= 16; if (to == target) return true; } while (g_board[to] == 0);
       to = from; do { to += 256; if (to == target) return true; } while (g_board[to] == 0);
       to = from; do { to -= 256; if (to == target) return true; } while (g_board[to] == 0);
    }

    if (pieceType == pieceQueen) {
       to = from; do { to++; if (to == target) return true; } while (g_board[to] == 0);
       to = from; do { to--; if (to == target) return true; } while (g_board[to] == 0);
       to = from; do { to += 16; if (to == target) return true; } while (g_board[to] == 0);
       to = from; do { to -= 16; if (to == target) return true; } while (g_board[to] == 0);
       to = from; do { to += 256; if (to == target) return true; } while (g_board[to] == 0);
       to = from; do { to -= 256; if (to == target) return true; } while (g_board[to] == 0);
       to = from; do { to += 17; if (to == target) return true; } while (g_board[to] == 0);
       to = from; do { to -= 17; if (to == target) return true; } while (g_board[to] == 0);
       to = from; do { to += 15; if (to == target) return true; } while (g_board[to] == 0);
       to = from; do { to -= 15; if (to == target) return true; } while (g_board[to] == 0);
       to = from; do { to += 272; if (to == target) return true; } while (g_board[to] == 0);
       to = from; do { to -= 272; if (to == target) return true; } while (g_board[to] == 0);
       to = from; do { to += 240; if (to == target) return true; } while (g_board[to] == 0);
       to = from; do { to -= 240; if (to == target) return true; } while (g_board[to] == 0);
       to = from; do { to += 255; if (to == target) return true; } while (g_board[to] == 0);
       to = from; do { to -= 255; if (to == target) return true; } while (g_board[to] == 0);
       to = from; do { to += 257; if (to == target) return true; } while (g_board[to] == 0);
       to = from; do { to -= 257; if (to == target) return true; } while (g_board[to] == 0);
       to = from; do { to += 239; if (to == target) return true; } while (g_board[to] == 0);
       to = from; do { to -= 239; if (to == target) return true; } while (g_board[to] == 0);
       to = from; do { to += 273; if (to == target) return true; } while (g_board[to] == 0);
       to = from; do { to -= 273; if (to == target) return true; } while (g_board[to] == 0);
       to = from; do { to += 241; if (to == target) return true; } while (g_board[to] == 0);
       to = from; do { to -= 241; if (to == target) return true; } while (g_board[to] == 0);
       to = from; do { to += 271; if (to == target) return true; } while (g_board[to] == 0);
       to = from; do { to -= 271; if (to == target) return true; } while (g_board[to] == 0);
    }

    if (pieceType == pieceKing) {
        if (+from - 1 == target) return true;
        if (+from + 1 == target) return true;
        if (+from - 16 == target) return true;
        if (+from + 16 == target) return true;
        if (+from - 256 == target) return true;
        if (+from + 256 == target) return true;
        if (+from - 17 == target) return true;
        if (+from + 17 == target) return true;
        if (+from - 15 == target) return true;
        if (+from + 15 == target) return true;
        if (+from - 272 == target) return true;
        if (+from + 272 == target) return true;
        if (+from - 240 == target) return true;
        if (+from + 240 == target) return true;
        if (+from - 255 == target) return true;
        if (+from + 255 == target) return true;
        if (+from - 257 == target) return true;
        if (+from + 257 == target) return true;
        if (+from - 239 == target) return true;
        if (+from + 239 == target) return true;
        if (+from - 273 == target) return true;
        if (+from + 273 == target) return true;
        if (+from - 241 == target) return true;
        if (+from + 241 == target) return true;
        if (+from - 271 == target) return true;
        if (+from + 271 == target) return true;
    }

    return false;
}

function IsSquareAttackable(target, color) {
    for (let i = piecePawn; i <= pieceKing; i++) {
        let index = (color | i) << COUNTER_SIZE;
        let square = g_pieceList[index];
        while (square != 0) {
            if (IsSquareAttackableFrom(target, square)) return true;
            square = g_pieceList[++index];
        }
    }
    return false;
}

function GenerateAllMoves(moveStack) {
    let from, to, piece, pieceIdx;

    // Pawn quiet moves
    pieceIdx = (g_toMove | piecePawn) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        GeneratePawnMoves(moveStack, from);
        from = g_pieceList[pieceIdx++];
    }

    // Unicorn quiet moves
    pieceIdx = (g_toMove | pieceUnicorn) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from - 239; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= 239; }
	to = from + 239; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to += 239; }
	to = from - 273; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= 273; }
	to = from + 273; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to += 273; }
	to = from - 241; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= 241; }
	to = from + 241; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to += 241; }
	to = from - 271; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= 271; }
	to = from + 271; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to += 271; }
	from = g_pieceList[pieceIdx++];
    }

    // Knight quiet moves
    pieceIdx = (g_toMove | pieceKnight) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from + 31; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 33; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 14; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 14; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 31; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 33; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 18; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 18; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 224; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 224; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 288; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 288; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 254; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 254; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 258; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 258; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 496; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 496; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 528; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 528; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 511; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 511; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 513; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 513; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	from = g_pieceList[pieceIdx++];
    }

    // Bishop quiet moves
    pieceIdx = (g_toMove | pieceBishop) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from - 15; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= 15; }
	to = from - 17; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= 17; }
	to = from + 15; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to += 15; }
	to = from + 17; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to += 17; }
	to = from - 272; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= 272; }
	to = from + 272; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to += 272; }
	to = from - 240; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= 240; }
	to = from + 240; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to += 240; }
	to = from - 255; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= 255; }
	to = from + 255; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to += 255; }
	to = from - 257; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= 257; }
	to = from + 257; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to += 257; }
	from = g_pieceList[pieceIdx++];
    }

    // Rook quiet moves
    pieceIdx = (g_toMove | pieceRook) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from - 1;  while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to--; }
	to = from + 1;  while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to++; }
	to = from + 16; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to += 16; }
	to = from - 16; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= 16; }
	to = from + 256; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to += 256; }
	to = from - 256; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= 256; }
	from = g_pieceList[pieceIdx++];
    }

    // Queen quiet moves
    pieceIdx = (g_toMove | pieceQueen) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from - 15; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= 15; }
	to = from - 17; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= 17; }
	to = from + 15; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to += 15; }
	to = from + 17; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to += 17; }
	to = from - 1;  while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to--; }
	to = from + 1;  while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to++; }
	to = from + 16; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to += 16; }
	to = from - 16; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= 16; }
	to = from + 256; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to += 256; }
	to = from - 256; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= 256; }
	to = from - 272; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= 272; }
	to = from + 272; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to += 272; }
	to = from - 240; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= 240; }
	to = from + 240; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to += 240; }
	to = from - 255; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= 255; }
	to = from + 255; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to += 255; }
	to = from - 257; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= 257; }
	to = from + 257; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to += 257; }
	to = from - 239; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= 239; }
	to = from + 239; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to += 239; }
	to = from - 273; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= 273; }
	to = from + 273; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to += 273; }
	to = from - 241; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= 241; }
	to = from + 241; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to += 241; }
	to = from - 271; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= 271; }
	to = from + 271; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to += 271; }
	from = g_pieceList[pieceIdx++];
    }

    // King quiet moves
    {
 	pieceIdx = (g_toMove | pieceKing) << COUNTER_SIZE;
	from = g_pieceList[pieceIdx];
	to = from - 15; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 17; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 15; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 17; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 1;  if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 1;  if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 16; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 16; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 256; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 256; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 272; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 272; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 240; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 240; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 255; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 255; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 257; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 257; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 239; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 239; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 273; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 273; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 241; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 241; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 271; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 271; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
    }	
}

function GenerateCaptureMoves(moveStack, moveScores) {
    let from, to, piece, pieceIdx;

    const inc = (g_toMove == colorWhite) ? -1 : 1;
    const enemy = g_toMove == colorWhite ? colorBlack : colorWhite;

    // Pawn captures
    pieceIdx = (g_toMove | piecePawn) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + (inc * 16) - 1;
        if (g_board[to] & enemy) {
            MovePawnTo(moveStack, from, to);
        }
        to = from + (inc * 16) + 1;
        if (g_board[to] & enemy) {
            MovePawnTo(moveStack, from, to);
        }
        to = from + (inc * -256) - 1;
        if (g_board[to] & enemy) {
            MovePawnTo(moveStack, from, to);
        }
        to = from + (inc * -256) + 1;
        if (g_board[to] & enemy) {
            MovePawnTo(moveStack, from, to);
        }
        to = from + (inc * -240);
        if (g_board[to] & enemy) {
            MovePawnTo(moveStack, from, to);
        }
        from = g_pieceList[pieceIdx++];
    }

    // Unicorn captures
    pieceIdx = (g_toMove | pieceUnicorn) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from; do { to -= 239; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to += 239; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to -= 273; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to += 273; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to -= 241; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to += 241; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to -= 271; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to += 271; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	from = g_pieceList[pieceIdx++];
    }

    // Knight captures
    pieceIdx = (g_toMove | pieceKnight) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from + 31; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 33; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 14; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 14; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 31; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 33; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 18; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 18; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 224; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 224; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 288; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 288; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 254; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 254; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 258; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 258; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 496; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 496; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 528; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 528; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 511; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 511; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 513; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 513; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	from = g_pieceList[pieceIdx++];
    }

    // Bishop captures
    pieceIdx = (g_toMove | pieceBishop) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from; do { to -= 15; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to -= 17; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to += 15; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to += 17; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to -= 272; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to += 272; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to -= 240; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to += 240; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to -= 255; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to += 255; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to -= 257; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to += 257; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	from = g_pieceList[pieceIdx++];
    }

    // Rook captures
    pieceIdx = (g_toMove | pieceRook) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from; do { to--; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to++; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to -= 16; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to += 16; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to -= 256; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to += 256; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	from = g_pieceList[pieceIdx++];
    }

    // Queen captures
    pieceIdx = (g_toMove | pieceQueen) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from; do { to--; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to++; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to -= 16; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to += 16; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to -= 256; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to += 256; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to -= 15; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to -= 17; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to += 15; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to += 17; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to -= 272; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to += 272; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to -= 240; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to += 240; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to -= 255; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to += 255; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to -= 257; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to += 257; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to -= 239; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to += 239; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to -= 273; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to += 273; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to -= 241; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to += 241; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to -= 271; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from; do { to += 271; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	from = g_pieceList[pieceIdx++];
    }

    // King captures
    {
	pieceIdx = (g_toMove | pieceKing) << COUNTER_SIZE;
	from = g_pieceList[pieceIdx];
	to = from - 15; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 17; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 15; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 17; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 1;  if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 1;  if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 16; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 16; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 256; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 256; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 272; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 272; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 240; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 240; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 255; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 255; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 257; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 257; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 239; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 239; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 273; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 273; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 241; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 241; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 271; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 271; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
    }
}

function GenerateDropMoves(moveStack, force) {}

function MovePawnTo(moveStack, start, square) {
    const row = square & 0xFF0;
    if ((row == 0x620) || (row == 0x260)) {
        moveStack[moveStack.length] = GenerateMove(start, square, moveflagPromotion);
    } else {
        moveStack[moveStack.length] = GenerateMove(start, square, 0);
    }
}

function GeneratePawnMoves(moveStack, from) {
    const piece = g_board[from];
    const color = piece & colorWhite;
    const inc = (color == colorWhite) ? -1 : 1;
    // Quiet pawn moves
    let to = from + (inc * 16);
    if (g_board[to] == 0) {
	MovePawnTo(moveStack, from, to);
    }
    to = from + (inc * -256);
    if (g_board[to] == 0) {
	MovePawnTo(moveStack, from, to);
    }
}

function See(move) {
    const from = move & 0xFFF;
    const to = (move >> 12) & 0xFFF;

    const fromPiece = g_board[from];

    const fromValue = g_seeValues[fromPiece & PIECE_MASK];
    const toValue = g_seeValues[g_board[to] & PIECE_MASK];

    if (fromValue <= toValue) {
        return true;
    }

    if (move >> 24) {
        // Castles, promotion, ep are always good
        return true;
    }

    const us = (fromPiece & colorWhite) ? colorWhite : 0;
    const them = colorWhite - us;

    // Pawn attacks 
    // If any opponent pawns can capture back, this capture is probably not worthwhile (as we must be using knight or above).
    const inc = (fromPiece & colorWhite) ? -1 : 1; // Note: this is capture direction from to, so reversed from normal move direction
    if (((g_board[to + (inc * 16) + 1] & PIECE_MASK) == (piecePawn | them)) ||
        ((g_board[to + (inc * 16) - 1] & PIECE_MASK) == (piecePawn | them)) ||
        ((g_board[to + (inc * -256) + 1] & PIECE_MASK) == (piecePawn | them)) ||
        ((g_board[to + (inc * -256) - 1] & PIECE_MASK) == (piecePawn | them)) ||
        ((g_board[to + (inc * -240)] & PIECE_MASK) == (piecePawn | them))) {
        return false;
    }

    const themAttacks = new Array();

    // Pawn attacks 
    // If any opponent pawns can capture back, this capture is probably not worthwhile (as we must be using knight or above).
    if (SeeAddSliderAttacks(to, them, themAttacks, piecePawn)) {
        return false;
    }

    // Knight attacks 
    // If any opponent knights can capture back, and the deficit we have to make up is greater than the knights value, 
    // it's not worth it.  We can capture on this square again, and the opponent doesn't have to capture back. 
    const captureDeficit = fromValue - toValue;
    SeeAddKnightAttacks(to, them, themAttacks);
    if (themAttacks.length != 0 && captureDeficit > g_seeValues[pieceKnight]) {
        return false;
    }

    // Slider attacks
    g_board[from] = 0;
    for (let pieceType = pieceUnicorn; pieceType <= pieceQueen; pieceType++) {
        if (pieceType == pieceKnight) continue;
        if (SeeAddSliderAttacks(to, them, themAttacks, pieceType)) {
            if (captureDeficit > g_seeValues[pieceType]) {
                g_board[from] = fromPiece;
                return false;
            }
        }
    }

    // Pawn defenses 
    // At this point, we are sure we are making a "losing" capture.  The opponent can not capture back with a 
    // pawn.  They cannot capture back with a minor/major and stand pat either.  So, if we can capture with 
    // a pawn, it's got to be a winning or equal capture. 
    if (((g_board[to - (inc * 16) + 1] & PIECE_MASK) == (piecePawn | us)) ||
        ((g_board[to - (inc * 16) - 1] & PIECE_MASK) == (piecePawn | us)) ||
        ((g_board[to - (inc * -256) + 1] & PIECE_MASK) == (piecePawn | us)) ||
        ((g_board[to - (inc * -256) - 1] & PIECE_MASK) == (piecePawn | us)) ||
        ((g_board[to - (inc * -240)] & PIECE_MASK) == (piecePawn | us))) {
        g_board[from] = fromPiece;
        return true;
    }

    // King attacks
    SeeAddSliderAttacks(to, them, themAttacks, pieceKing);

    // Our attacks
    const usAttacks = new Array();
    SeeAddKnightAttacks(to, us, usAttacks);
    for (let pieceType = pieceUnicorn; pieceType <= pieceKing; pieceType++) {
        if (pieceType == pieceKnight) continue;
        SeeAddSliderAttacks(to, us, usAttacks, pieceType);
    }

    g_board[from] = fromPiece;

    // We are currently winning the amount of material of the captured piece, time to see if the opponent 
    // can get it back somehow.  We assume the opponent can capture our current piece in this score, which 
    // simplifies the later code considerably. 
    let seeValue = toValue - fromValue;

    for (; ; ) {
        let capturingPieceValue = 1000;
        let capturingPieceIndex = -1;

        // Find the least valuable piece of the opponent that can attack the square
        for (let i = 0; i < themAttacks.length; i++) {
            if (themAttacks[i] != 0) {
                const pieceValue = g_seeValues[g_board[themAttacks[i]] & TYPE_MASK];
                if (pieceValue < capturingPieceValue) {
                    capturingPieceValue = pieceValue;
                    capturingPieceIndex = i;
                }
            }
        }

        if (capturingPieceIndex == -1) {
            // Opponent can't capture back, we win
            return true;
        }

        // Now, if seeValue < 0, the opponent is winning.  If even after we take their piece, 
        // we can't bring it back to 0, then we have lost this battle. 
        seeValue += capturingPieceValue;
        if (seeValue < 0) {
            return false;
        }

        let capturingPieceSquare = themAttacks[capturingPieceIndex];
        themAttacks[capturingPieceIndex] = 0;

        // Add any x-ray attackers
        // SeeAddXrayAttack(to, capturingPieceSquare, us, usAttacks, themAttacks);

        // Our turn to capture
        capturingPieceValue = 1000;
        capturingPieceIndex = -1;

        // Find our least valuable piece that can attack the square
        for (let i = 0; i < usAttacks.length; i++) {
            if (usAttacks[i] != 0) {
                const pieceValue = g_seeValues[g_board[usAttacks[i]] & TYPE_MASK];
                if (pieceValue < capturingPieceValue) {
                    capturingPieceValue = pieceValue;
                    capturingPieceIndex = i;
                }
            }
        }

        if (capturingPieceIndex == -1) {
            // We can't capture back, we lose :( 
            return false;
        }

        // Assume our opponent can capture us back, and if we are still winning, we can stand-pat 
        // here, and assume we've won. 
        seeValue -= capturingPieceValue;
        if (seeValue >= 0) {
            return true;
        }

        capturingPieceSquare = usAttacks[capturingPieceIndex];
        usAttacks[capturingPieceIndex] = 0;

        // Add any x-ray attackers
        // SeeAddXrayAttack(to, capturingPieceSquare, us, usAttacks, themAttacks);
    }
}

function SeeAddKnightAttacks(target, us, attacks) {
    let pieceIdx = (us | pieceKnight) << COUNTER_SIZE;
    let attackerSq = g_pieceList[pieceIdx++];
    while (attackerSq != 0) {
        if (IsSquareAttackableFrom(target, attackerSq)) {
            attacks[attacks.length] = attackerSq;
        }
        attackerSq = g_pieceList[pieceIdx++];
    }
}

function SeeAddSliderAttacks(target, us, attacks, pieceType) {
    let pieceIdx = (us | pieceType) << COUNTER_SIZE;
    let attackerSq = g_pieceList[pieceIdx++];
    let hit = false;
    while (attackerSq != 0) {
        if (IsSquareAttackableFrom(target, attackerSq)) {
            if (pieceType > piecePawn) {
                attacks[attacks.length] = attackerSq;
            }
            hit = true;
        }
        attackerSq = g_pieceList[pieceIdx++];
    }
    return hit;
}

function configure(name, value) {
    if (name == 'WIDTH') {
        g_width = +value;
        return true;
    }
    if (name == 'HEIGHT') {
        g_height = +value;
        return true;
    }
    if (name == 'FLAGS') {
        g_flags = +value;
        return true;
    }
    if (name == 'POS_MASK') {
        POS_MASK = +value;
        return true;
    }
    if (name == 'POS_SIZE') {
        POS_SIZE = +value;
        return true;
    }
    return false;
}

self.onmessage = function (e) {
    if (e.data == "go" || needsReset) {
        ResetGame();
        needsReset = false;
        if (e.data == "go") return;
    }
    if (e.data.match("^config") == "config") {
        const s = e.data.substr(7, e.data.length - 7);
        const r = s.match(/\s*([^\s=]+)\s*=\s*(\S+)/);
        if (r) {
            if (configure(r[1], r[2])) {
                self.postMessage("pv " + r[1] + '=' + r[2]);
            }
        }
    } else if (e.data.match("^position") == "position") {
        ResetGame();
        const result = InitializeFromFen(e.data.substr(9, e.data.length - 9));
        if (result.length != 0) {
            self.postMessage("message " + result);
        }
    } else if (e.data.match("^search") == "search") {
        g_timeout = parseInt(e.data.substr(7, e.data.length - 7), 10);
        Search(FinishMoveLocalTesting, 99, FinishPlyCallback);
    } else if (e.data == "analyze") {
        g_timeout = 99999999999;
        Search(null, 99, FinishPlyCallback);
    } else {
        MakeMove(GetMoveFromString(e.data));
    }
}
