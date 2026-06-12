"use strict";

var VECTORDELTA_SIZE  = 256;

importScripts('../../underscore/underscore-min.js', '../../common-scripts/zobrist-worker.js', '../../common-scripts/garbo-worker.js', 'common-shogi-worker.js');

let g_width          = 4;
let g_height         = 6;

const emptyAdj =
[    0,     0,     0,     0, // pieceEmpty
     0,     0,     0,     0,
     0,     0,     0,     0,
     0,     0,     0,     0,
     0,     0,     0,     0,
     0,     0,     0,     0
];

const pawnAdj = 
[    0,     0,     0,     0, // piecePawn
     0,     0,     0,     0,
    20,    40,    40,    20,
    15,    30,    30,    15,
    10,    20,    20,    10,
     0,     0,     0,     0
];

const goldAdj = 
[    0,     0,     0,     0, // pieceGold
     5,    20,    20,     5,
     0,    10,    10,     0,
     0,     5,     5,     0,
     0,     0,     0,     0,
     0,     0,     0,     0
];

const silverAdj = 
[    0,     0,     0,     0, // pieceSilver
     0,    10,    10,     0,
    10,    30,    30,    10,
     5,    20,    20,     5,
     0,    10,    10,     0,
     0,     0,     0,     0
];

const bishopAdj = 
[    0,     0,     0,     0, // pieceBishop
     0,    10,    10,     0,
     5,    20,    20,     5,
     0,    10,    10,     0,
     0,     0,     0,     0,
     0,     0,     0,     0
];

const rookAdj = 
[    0,     0,     0,     0, // pieceRook
    10,    20,    20,    10,
    20,    30,    30,    20,
    20,    30,    30,    20,
    10,    40,    40,    10,
     0,     0,     0,     0
];

const bishopPAdj = 
[    0,     0,     0,     0, // pieceBishopP
     5,    15,    15,     5,
    10,    30,    30,    10,
     0,    20,    20,     0,
     0,     0,     0,     0,
     0,     0,     0,     0
];

const rookPAdj = 
[    0,     0,     0,     0, // pieceRookP
    15,    25,    25,    15,
    20,    60,    60,    20,
    25,    35,    35,    25,
    10,    40,    40,    10,
     0,     0,     0,     0
];

const kingAdj = 
[   10,    50,    50,    10, // pieceKing
    15,    30,    30,    10,
     0,     0,     0,     0,
     0,    10,    10,     0,
    10,    20,    20,    10,
     5,    30,    30,     5
];

const lanceAdj = 
[    0,     0,     0,     0, // pieceLance
     0,     0,     0,     0,
     5,    10,    10,     5,
    10,    30,    30,    10,
    20,    40,    40,    20,
    30,    50,    50,    30
];

const knightAdj = 
[    0,     0,     0,     0, // pieceKnight
     0,     0,     0,     0,
     5,    30,    30,     5,
    10,    20,    20,    10,
     0,    10,    10,     0,
     0,     0,     0,     0
];

function onBoard(target) {
  return !(target & 0x88);
}
