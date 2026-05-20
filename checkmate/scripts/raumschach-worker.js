"use strict";

let g_width             = 5;
let g_height            = 5;

let NOISE_FACTOR        = 5;
let PIECE_MASK          = 0xF;
let TYPE_MASK           = 0x7;
let PLAYERS_MASK        = 0x18;
let COUNTER_SIZE        = 6;
let TYPE_SIZE           = 3;

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

const moveflagPromotion     = 0x01 << 24;

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

const materialTable = [0, 800, 2000, 2500, 3350, 5000, 1000, 600000];

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

  pieceSquareAdj[piecePawn]    = MakeTable(pawnAdj);
  pieceSquareAdj[pieceUnicorn] = MakeTable(unicornAdj);
  pieceSquareAdj[pieceKnight]  = MakeTable(knightAdj);
  pieceSquareAdj[pieceBishop]  = MakeTable(bishopAdj);
  pieceSquareAdj[pieceRook]    = MakeTable(rookAdj);
  pieceSquareAdj[pieceQueen]   = MakeTable(queenAdj);
  pieceSquareAdj[pieceKing]    = MakeTable(kingAdj);

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
                for (var j = 0; j < parseInt(c); j++) {
                    g_board[MakeSquare(row, col, pln)] = 0;
                    col++;
                }
            } else {
                var isBlack = c >= 'a' && c <= 'z';
                var piece = isBlack ? colorBlack : colorWhite;
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
    var kingPos = g_pieceList[(g_toMove | pieceKing) << COUNTER_SIZE];
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
