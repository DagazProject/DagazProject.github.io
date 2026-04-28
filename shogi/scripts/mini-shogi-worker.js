"use strict";

importScripts('../../underscore/underscore-min.js', '../../common-scripts/zobrist-worker.js', '../../common-scripts/garbo-worker.js', 'common-shogi-worker.js');

let g_width          = 5;
let g_height         = 5;

const RESERVE_SIZE   = 2;

const WHITE_PROM     = 0x20;
const BLACK_PROM     = 0x60;

const emptyAdj = [
[    0,     0,     0,     0,     0, // pieceEmpty
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0
];

const pawnAdj = 
[    0,     0,     0,     0,     0, // piecePawn
    20,    40,    40,    40,    20,
    10,    20,    20,    20,    10,
     5,    10,    10,    10,     5,
     0,     0,     0,     0,     0
];

const goldAdj = 
[    0,     0,     0,     0,     0, // pieceGold
    10,    50,    60,    50,    10,
    10,    40,    50,    40,    10,
    10,    30,    40,    30,    10,
     0,     0,     0,     0,     0
];

const silverAdj = 
[    0,     0,     0,     0,     0, // pieceSilver
    10,    50,    60,    50,    10,
    10,    40,    50,    40,    10,
    10,    30,    40,    30,    10,
     0,     0,     0,     0,     0
];

const bishopAdj = 
[    0,     0,     0,     0,     0, // pieceBishop
    10,    50,    60,    50,    10,
    10,    40,    50,    40,    10,
    10,    30,    40,    30,    10,
     0,     0,     0,     0,     0
];

const rookAdj = 
[   0,     0,     0,     0,     0, // pieceRook
    10,    50,    60,    50,    10,
    10,    40,    50,    40,    10,
    10,    30,    40,    30,    10,
     0,     0,     0,     0,     0
];

const bishopPAdj = 
[    0,     0,     0,     0,     0, // pieceBishopP
    10,    50,    60,    50,    10,
    10,    40,    50,    40,    10,
    10,    30,    40,    30,    10,
     0,     0,     0,     0,     0
];

const rookPAdj = 
[    0,     0,     0,     0,     0, // pieceRookP
    10,    50,    60,    50,    10,
    10,    40,    50,    40,    10,
    10,    30,    40,    30,    10,
     0,     0,     0,     0,     0
];

const kingAdj = 
[    0,     0,     0,     0,     0, // pieceKing
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0,
     0,    10,    20,    10,     0,
    10,    50,    50,    50,    10
];

const lanceAdj = [
[    0,     0,     0,     0,     0, // pieceEmpty
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0
];
