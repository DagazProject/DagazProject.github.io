"use strict";

let g_width          = 11;
let g_height         = 11;

let NOISE_FACTOR     = 5;

const PIECE_MASK     = 0x1F;
const TYPE_MASK      = 0xF;
const PLAYERS_MASK   = 0x30;
const COUNTER_SIZE   = 3;
const TYPE_SIZE      = 4;

var VECTORDELTA_SIZE = 512;

let colorBlack       = 0x20;
let colorWhite       = 0x10;

importScripts('../../underscore/underscore-min.js', '../../common-scripts/zobrist-worker.js', '../../common-scripts/garbo-worker.js');

var pieceEmpty       = 0x00;
var piecePawn        = 0x01;
var pieceDun         = 0x02;
var pieceAdvisor     = 0x03;
var pieceBishop      = 0x04;
var pieceKnight      = 0x05;
var pieceCannon      = 0x06;
var pieceRook        = 0x07;
var pieceKing        = 0x08;
var pieceNo          = 0x80;

STALMATED            = true;

var emptyAdj =
[   0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0, // pieceEmpty
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0
];

var pawnAdj =
[  50,  100,   50,   40,   20,   10,   10,    5,    3,    1,    0, // piecePawn
  100,  200,  100,   40,   30,   10,   10,    5,    3,    1,    0,
   50,  100,   50,   40,   30,   20,   10,    5,    3,    0,    0,
   40,   40,   40,   30,   30,   20,   10,    5,    0,    0,    0,
   20,   30,   30,   30,   20,   20,   10,    0,    0,    0,    0,
   10,   20,   20,   20,   20,    0,    0,    0,    0,    0,    0,
    5,   10,   10,   10,    0,    0,    0,    0,    0,    0,    0,
    3,    5,    5,    0,    0,    0,    0,    0,    0,    0,    0,
    1,    1,    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0
];

var dunAdj =
[  50,    0,   50,    0,   10,    0,    5,    0,    1,    0,    0, // pieceDun
    0,  100,    0,   40,    0,   10,    0,    5,    0,    1,    0,
   50,    0,   50,    0,   20,    0,    5,    0,    1,    0,    1,
    0,   40,    0,   20,    0,    5,    0,    1,    0,    5,    0,
   10,    0,   20,    0,    5,    0,    1,    0,    5,    0,    3,
    0,   10,    0,    5,    0,    1,    0,    5,    0,    5,    0,
    5,    0,    5,    0,    1,    0,   10,    0,   10,    0,    3,
    0,    5,    0,    1,    0,    5,    0,   20,    0,    5,    0,
    1,    0,    1,    0,    5,    0,   10,    0,   10,    0,    1,
    0,    1,    0,    5,    0,    5,    0,    5,    0,    1,    0,
    0,    0,    1,    0,    3,    0,    3,    0,    1,    0,    1
];

var advisorAdj =
[   0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0, // pieceAdvisor
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0,   10,    0,
    0,    0,    0,    0,    0,    0,    0,    0,   10,   15,   10,
    0,    0,    0,    0,    0,    0,    0,    0,    0,   10,    0
];

var bishopAdj =
[   0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0, // pieceBishop
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    1,
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,   10,    0,    5,
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    5,    0,   10,    0,   20,    0,   10,
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    5,    0,   10,    0,   20,    0,   20,    0,   10,
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    1,    0,    5,    0,   10,    0,   10,    0,    1
];

var knightAdj =
[-200, -100,  -50,  -50,  -50,  -50,  -50,  -50,  -50, -100, -200, // pieceKnight
 -100,    0,    0,  200,  100,    0,    0,    0,    0,    0, -100,
  -50,    0,    0,  100,   60,   60,   60,   60,   60,    0,  -50,
  -50,  200,  100,  200,   60,   60,   60,   60,   60,    0,  -50,
  -50,  100,   60,   60,   60,   60,   60,   60,   60,    0,  -50,
  -50,    0,   60,   60,   60,   60,   60,   60,   60,    0,  -50,
  -50,    0,   60,   60,   60,   60,   60,   60,   60,    0,  -50,
  -50,    0,   60,   60,   60,   60,   60,   60,    0,    0,  -50,
  -50,    0,   60,   60,   60,   60,   60,    0,  -10,  -50,  -50,
 -100,    0,    0,    0,    0,    0,    0,    0,  -50,  -50, -100,
 -200, -100,  -50,  -50,  -50,  -50,  -50,  -50,  -50, -100, -200
];

var cannonAdj =
[ -60,  -30,  -10,   10,   50,   50,   50,   50,   50,   50,  -60, // pieceCannon
  -30,  -10,  -10,   10,  100,  100,  100,  100,   20,   10,  -30,
  -10,  -10,  -10,   50,   50,   50,   50,   20,   10,    0,  -30,
   50,   10,   10,   10,   10,   10,   10,   10,   10,    0,  -30,
   50,  100,   50,   10,    0,    0,    0,    0,    0,    0,  -30,
   50,  100,   50,   10,    0,    0,    0,    0,    0,    0,  -30,
   50,  100,   50,   10,    0,    0,    0,    0,    0,    0,  -30,
   50,   20,   50,   10,    0,    0,    0,    0,    0,    0,  -30,
   50,   10,   10,   10,    0,    0,    0,    0,    0,    0,  -30,
  -60,    0,    0,    0,    0,    0,    0,    0,    0,    0,  -30,
  -60,  -30,  -30,  -30,  -30,  -30,  -30,  -30,  -30,  -30,  -60
];

var rookAdj =
[ -60,  -30,  -10,   50,   50,   50,   50,   50,   50,   50,  -60, // pieceRook
  -30,  -10,  -10,  100,  100,  100,  100,  100,   20,   10,  -30,
  -10,  -10,  -10,   50,   50,   50,   50,   20,   10,    0,  -30,
   50,  100,   50,   10,   10,   10,   10,   10,   10,    0,  -30,
   50,  100,   50,   10,    0,    0,    0,    0,    0,    0,  -30,
   50,  100,   50,   10,    0,    0,    0,    0,    0,    0,  -30,
   50,  100,   50,   10,    0,    0,    0,    0,    0,    0,  -30,
   50,   20,   50,   10,    0,    0,    0,    0,    0,    0,  -30,
   50,   10,   10,   10,    0,    0,    0,    0,    0,    0,  -30,
  -60,    0,    0,    0,    0,    0,    0,    0,    0,    0,  -30,
  -60,  -30,  -30,  -30,  -30,  -30,  -30,  -30,  -30,  -30,  -60
];

var kingAdj =
[   0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0, // pieceKing
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    5,   10,    5,
    0,    0,    0,    0,    0,    0,    0,    0,   10,   25,   10,
    0,    0,    0,    0,    0,    0,    0,    0,    5,   10,    5
];

function GetFen() {
    var result = "";
    for (var row = 0; row < g_height; row++) {
        if (row != 0) result += '/';
        var empty = 0;
        for (var col = 0; col < g_width; col++) {
            var piece = g_board[MakeSquare(row, col)];
            if (piece == 0) {
                empty++;
            } else {
                if (empty != 0) 
                    result += empty;
                empty = 0;
                var pieceChar = [" ", "p", "g", "a", "b", "n", "c", "r", "k"][(piece & TYPE_MASK)];
                result += ((piece & colorWhite) != 0) ? pieceChar.toUpperCase() : pieceChar;
            }
        }
        if (empty != 0) {
            result += empty;
        }
    }
    result += g_toMove == colorWhite ? " w" : " b";
    return result;
}

function GetMoveSAN(move, validMoves) {
    return FormatMove(move);
}

function FormatSquare(square) {
    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
    return letters[(square & 0xF) - 2] + (((g_height + 1) - (square >> 4)) + 1);
}

function FormatMove(move) {
    var result = FormatSquare(move & 0xFF) + ' - ' + FormatSquare((move >> 8) & 0xFF);
    return result;
}

function MakeSquare(row, column) {
    return ((row + 2) << 4) | (column + 2);
}

var materialTable = [0, 800, 800, 800, 1500, 3350, 4000, 5500, 600000];

var pieceSquareAdj = new Array(9);
var flipTable = new Array(256);

function Mobility(color) {
    var result = 0;
    var from, to, pos, mob, pieceIdx;
    var enemy = color == colorWhite ? colorBlack : colorWhite
    var mobUnit = color == colorWhite ? g_mobUnit[0] : g_mobUnit[1];

    // Knight mobility
    mob = -3;
    pieceIdx = (color | pieceKnight) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        pos = from - 16;
        if (g_board[pos] == 0) {
            to = pos - 15; mob += mobUnit[g_board[to]];
            to = pos - 17; mob += mobUnit[g_board[to]];
        }
        pos = from + 16;
        if (g_board[pos] == 0) {
            to = pos + 15; mob += mobUnit[g_board[to]];
            to = pos + 17; mob += mobUnit[g_board[to]];
        }
        pos = from - 1;
        if (g_board[pos] == 0) {
            to = pos - 17; mob += mobUnit[g_board[to]];
            to = pos + 15; mob += mobUnit[g_board[to]];
        }
        pos = from + 1;
        if (g_board[pos] == 0) {
            to = pos - 15; mob += mobUnit[g_board[to]];
            to = pos + 17; mob += mobUnit[g_board[to]];
        }
        from = g_pieceList[pieceIdx++];
    }
    result += 65 * mob;

    // Rook mobility
    mob = -4;
    pieceIdx = (color | pieceRook) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from - 1;  while (g_board[to] == 0) { to--; mob++;}  if (g_board[to] & enemy) mob++;
        to = from + 1;  while (g_board[to] == 0) { to++; mob++; } if (g_board[to] & enemy) mob++;
        to = from + 16; while (g_board[to] == 0) { to += 16; mob++; } if (g_board[to] & enemy) mob++;
        to = from - 16; while (g_board[to] == 0) { to -= 16; mob++; } if (g_board[to] & enemy) mob++;
        from = g_pieceList[pieceIdx++];
    }
    result += 25 * mob;

    // Cannon mobility
    mob = -4;
    pieceIdx = (color | pieceCannon) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from - 1;  while (g_board[to] == 0) { to--; mob++;}  
        if (g_board[to] & PLAYERS_MASK) {
            to--; while (g_board[to] == 0) { to--; }
            if (g_board[to] & enemy) mob++;
        }
        to = from + 1;  while (g_board[to] == 0) { to++; mob++;}  
        if (g_board[to] & PLAYERS_MASK) {
            to++; while (g_board[to] == 0) { to++; }
            if (g_board[to] & enemy) mob++;
        }
        to = from - 16;  while (g_board[to] == 0) { to -= 16; mob++;}  
        if (g_board[to] & PLAYERS_MASK) {
            to -= 16; while (g_board[to] == 0) { to -= 16; }
            if (g_board[to] & enemy) mob++;
        }
        to = from + 16;  while (g_board[to] == 0) { to += 16; mob++;}  
        if (g_board[to] & PLAYERS_MASK) {
            to += 16; while (g_board[to] == 0) { to += 16; }
            if (g_board[to] & enemy) mob++;
        }
        from = g_pieceList[pieceIdx++];
    }
    result += 25 * mob;

    return result;
}

function Evaluate() {
    var curEval = g_baseEval;
    var evalAdjust = 0;

    // Black bishop pair
    if (g_pieceCount[pieceBishop] >= 2)
        evalAdjust -= 500;
    // White bishop pair
    if (g_pieceCount[pieceBishop | colorWhite] >= 2)
        evalAdjust += 500;

    var mobility = Mobility(colorWhite) - Mobility(0);

    if (g_toMove == 0) {
        // Black
        curEval -= mobility;
        curEval -= evalAdjust;
    } else {
        curEval += mobility;
        curEval += evalAdjust;
    }
    
    return curEval;
}

function ScoreMove(move) {
    var moveTo = (move >> 8) & 0xFF;
    var captured = g_board[moveTo] & TYPE_MASK;
    var piece = g_board[move & 0xFF];
    var score;
    if (captured != pieceEmpty) {
        var pieceType = piece & TYPE_MASK;
        score = (captured << 5) - pieceType;
    } else {
        score = historyTable[piece & PIECE_MASK][moveTo];
    }
    return score;
}

function isNoZugzwang() {
    return true;
}

function IsHashMoveValid(hashMove) {
    var from = hashMove & 0xFF;
    var to = (hashMove >> 8) & 0xFF;
    var ourPiece = g_board[from];
    var pieceType = ourPiece & TYPE_MASK;
    if (pieceType < piecePawn || pieceType > pieceKing) return false;
    // Can't move a piece we don't control
    if (g_toMove != (ourPiece & colorWhite)) return false;
    // Can't move to a square that has something of the same color
    if (g_board[to] != 0 && (g_toMove == (g_board[to] & colorWhite))) return false;
    // This validates that this piece type can actually make the attack
    return IsSquareAttackableFromX(to, from);
}

function IsSquareAttackableFromX(target, from) {
    var to, pos, piece, pieceType, adj;

    piece = g_board[from];
    pieceType = piece & TYPE_MASK;

    if (pieceType == pieceEmpty) return false;
    var color = (piece & colorWhite);
    var enemy = color ? colorBlack : colorWhite;
    var inc = color ? -1 : 1;
    var me = color >> TYPE_SIZE;

    if (pieceType == piecePawn) {
        adj = pieceSquareAdj[piecePawn][me == 0 ? flipTable[from] : from];
        if (from + inc == target) return true;
        if (from + (inc * 16) == target) return true;
        if (adj != 0) {
            if (from - inc == target) return true;
            if (from - (inc * 16) == target) return true;
        }
    }
    if (pieceType == pieceDun) {
        to = from - 17; if (to == target) return true;
        to = from - 15; if (to == target) return true;
        to = from + 17; if (to == target) return true;
        to = from + 15; if (to == target) return true;
    }
    if (pieceType == pieceAdvisor) {
        to = from + 16; adj = pieceSquareAdj[pieceAdvisor][me == 0 ? flipTable[to] : to];
        if (adj != 0) {
            if (to == target) return true;
        }
        to = from + 1; adj = pieceSquareAdj[pieceAdvisor][me == 0 ? flipTable[to] : to];
        if (adj != 0) {
            if (to == target) return true;
        }
        to = from - 16; adj = pieceSquareAdj[pieceAdvisor][me == 0 ? flipTable[to] : to];
        if (adj != 0) {
            if (to == target) return true;
        }
        to = from - 1; adj = pieceSquareAdj[pieceAdvisor][me == 0 ? flipTable[to] : to];
        if (adj != 0) {
            if (to == target) return true;
        }
    }
    if (pieceType == pieceBishop) {
        to = from + 16;
        if (g_board[to] == 0) {
            to += 16; adj = pieceSquareAdj[pieceBishop][me == 0 ? flipTable[to] : to];
            if (adj != 0) {
                if (to == target) return true;
            }
        }
        to = from + 1;
        if (g_board[to] == 0) {
            to++; adj = pieceSquareAdj[pieceBishop][me == 0 ? flipTable[to] : to];
            if (adj != 0) {
                if (to == target) return true;
            }
        }
        to = from - 16;
        if (g_board[to] == 0) {
            to -= 16; adj = pieceSquareAdj[pieceBishop][me == 0 ? flipTable[to] : to];
            if (adj != 0) {
                if (to == target) return true;
            }
        }
        to = from - 1;
        if (g_board[to] == 0) {
            to--; adj = pieceSquareAdj[pieceBishop][me == 0 ? flipTable[to] : to];
            if (adj != 0) {
                if (to == target) return true;
            }
        }
    }
    if (pieceType == pieceKnight) {
        pos = from - 16;
        if (g_board[pos] == 0) {
            to = pos - 15; if (to == target) return true;
            to = pos - 17; if (to == target) return true;
        }
        pos = from + 16;
        if (g_board[pos] == 0) {
            to = pos + 15; if (to == target) return true;
            to = pos + 17; if (to == target) return true;
        }
        pos = from - 1;
        if (g_board[pos] == 0) {
            to = pos + 15; if (to == target) return true;
            to = pos - 17; if (to == target) return true;
        }
        pos = from + 1;
        if (g_board[pos] == 0) {
            to = pos - 15; if (to == target) return true;
            to = pos + 17; if (to == target) return true;
        }
    }
    if (pieceType == pieceKing) {
       to = from + 1; adj = pieceSquareAdj[pieceKing][me == 0 ? flipTable[to] : to];
       if (adj != 0) {
           if (to == target) return true;
       }
       to = from - 1; adj = pieceSquareAdj[pieceKing][me == 0 ? flipTable[to] : to];
       if (adj != 0) {
           if (to == target) return true;
       }
       to = from + 16; adj = pieceSquareAdj[pieceKing][me == 0 ? flipTable[to] : to];
       if (adj != 0) {
           if (to == target) return true;
       }
       to = from - 16; adj = pieceSquareAdj[pieceKing][me == 0 ? flipTable[to] : to];
       if (adj != 0) {
           if (to == target) return true;
       }
       adj = pieceSquareAdj[pieceKing][me == 0 ? flipTable[from] : from];
       if ((adj % 2) != 0) {
           to = from - 17; adj = pieceSquareAdj[pieceKing][me == 0 ? flipTable[to] : to];
           if (adj != 0) {
               if (to == target) return true;
           }
           to = from - 15; adj = pieceSquareAdj[pieceKing][me == 0 ? flipTable[to] : to];
           if (adj != 0) {
               if (to == target) return true;
           }
           to = from + 17; adj = pieceSquareAdj[pieceKing][me == 0 ? flipTable[to] : to];
           if (adj != 0) {
               if (to == target) return true;
           }
           to = from + 15; adj = pieceSquareAdj[pieceKing][me == 0 ? flipTable[to] : to];
           if (adj != 0) {
               if (to == target) return true;
           }
       }
       to = from + (inc * 17); while (g_board[to] == 0) { to += inc * 17; }
       if (to != target) return false;
       if ((g_board[to] & TYPE_MASK) == pieceKing) return true;
    }
    if (((target & 0xF) != (from & 0xF)) && ((target & 0xF0) != (from & 0xF0))) return false;
    if (pieceType == pieceRook) {
       to = from; do { to++; if (to == target) return true; } while (g_board[to] == 0);
       to = from; do { to--; if (to == target) return true; } while (g_board[to] == 0);
       to = from; do { to += 16; if (to == target) return true; } while (g_board[to] == 0);
       to = from; do { to -= 16; if (to == target) return true; } while (g_board[to] == 0);
    }
    if (pieceType == pieceCannon) {
       to = from + 1; while (g_board[to] == 0) { if (to == target) return false; to++; }
       if (g_board[to] & PLAYERS_MASK) {
           to++; while (g_board[to] == 0) { to++; }
           if (to == target) return true;
       }
       to = from - 1; while (g_board[to] == 0) { if (to == target) return false; to--; }
       if (g_board[to] & PLAYERS_MASK) {
           to--; while (g_board[to] == 0) { to--; }
           if (to == target) return true;
       }
       to = from + 16; while (g_board[to] == 0) { if (to == target) return false; to += 16; }
       if (g_board[to] & PLAYERS_MASK) {
           to += 16; while (g_board[to] == 0) { to += 16; }
           if (to == target) return true;
       }
       to = from - 16; while (g_board[to] == 0) { if (to == target) return false; to -= 16; }
       if (g_board[to] & PLAYERS_MASK) {
           to -= 16; while (g_board[to] == 0) { to -= 16; }
           if (to == target) return true;
       }
    }
    return false;
}

function IsSquareAttackableX(target, color) {
    for (var i = piecePawn; i <= pieceKing; i++) {
        var index = (color | i) << COUNTER_SIZE;
        var square = g_pieceList[index];
        while (square != 0) {
            if (IsSquareAttackableFromX(target, square)) return true;
            square = g_pieceList[++index];
        }
    }
    return false;
}

function ResetGame() {
    CommonResetGame();

    for (var row = 0; row < g_height; row++) {
       for (var col = 0; col < g_width; col++) {
            var square = MakeSquare(row, col);
            flipTable[square] = MakeSquare((g_height - 1) - row, (g_width - 1) - col);
       }
    }

    pieceSquareAdj[pieceEmpty]   = MakeTable(emptyAdj);
    pieceSquareAdj[piecePawn]    = MakeTable(pawnAdj);
    pieceSquareAdj[pieceDun]     = MakeTable(dunAdj);
    pieceSquareAdj[pieceAdvisor] = MakeTable(advisorAdj);
    pieceSquareAdj[pieceBishop]  = MakeTable(bishopAdj);
    pieceSquareAdj[pieceKnight]  = MakeTable(knightAdj);
    pieceSquareAdj[pieceCannon]  = MakeTable(cannonAdj);
    pieceSquareAdj[pieceRook]    = MakeTable(rookAdj);
    pieceSquareAdj[pieceKing]    = MakeTable(kingAdj);

    InitializeEval();
}

function InitializeEval() {
    g_mobUnit = new Array(2);
    for (var i = 0; i < 2; i++) {
        g_mobUnit[i] = new Array();
        var enemy = i == 0 ? colorBlack : colorWhite;
        var friend = i == 0 ? colorWhite : colorBlack;
        g_mobUnit[i][0] = 1;
        g_mobUnit[i][pieceNo] = 0;
        g_mobUnit[i][enemy  | piecePawn]    = 1;
        g_mobUnit[i][enemy  | pieceAdvisor] = 1;
        g_mobUnit[i][enemy  | pieceDun]     = 1;
        g_mobUnit[i][enemy  | pieceBishop]  = 1;
        g_mobUnit[i][enemy  | pieceKnight]  = 2;
        g_mobUnit[i][enemy  | pieceCannon]  = 4;
        g_mobUnit[i][enemy  | pieceRook]    = 5;
        g_mobUnit[i][enemy  | pieceKing]    = 6;
        g_mobUnit[i][friend | piecePawn]    = 0;
        g_mobUnit[i][friend | pieceDun]     = 0;
        g_mobUnit[i][friend | pieceAdvisor] = 0;
        g_mobUnit[i][friend | pieceBishop]  = 0;
        g_mobUnit[i][friend | pieceKnight]  = 0;
        g_mobUnit[i][friend | pieceCannon]  = 0;
        g_mobUnit[i][friend | pieceRook]    = 0;
        g_mobUnit[i][friend | pieceKing]    = 0;
    }
}

function InitializeFromFen(fen) {
    var chunks = fen.split(' ');
    
    for (var i = 0; i < 256; i++) 
        g_board[i] = pieceNo;
    
    var row = 0;
    var col = 0;
    
    var pieces = chunks[0];
    for (var i = 0; i < pieces.length; i++) {
        var c = pieces.charAt(i);
        
        if (c == '/') {
            row++;
            col = 0;
        } else {
            if (c >= '0' && c <= '9') {
                for (var j = 0; j < parseInt(c); j++) {
                    g_board[MakeSquare(row, col)] = 0;
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
                    case 'n':
                        piece |= pieceKnight;
                        break;
                    case 'b':
                        piece |= pieceBishop;
                        break;
                    case 'r':
                        piece |= pieceRook;
                        break;
                    case 'a':
                        piece |= pieceAdvisor;
                        break;
                    case 'g':
                        piece |= pieceDun;
                        break;
                    case 'c':
                        piece |= pieceCannon;
                        break;
                    case 'k':
                        piece |= pieceKing;
                        break;
                }
                if (piece & TYPE_MASK) {
                    g_board[MakeSquare(row, col)] = piece;
                }
                col++;
            }
        }
    }

    InitializePieceList();
    
    g_toMove = chunks[1].charAt(0) == 'w' ? colorWhite : 0;
    var them = colorWhite - g_toMove;
    
    var hashResult = SetHash();
    g_hashKeyLow = hashResult.hashKeyLow;
    g_hashKeyHigh = hashResult.hashKeyHigh;

    g_baseEval = 0;
    for (var i = 0; i < 256; i++) {
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
        g_inCheck = IsSquareAttackableX(kingPos, them);
    }

    // Check for king capture (invalid FEN)
    kingPos = g_pieceList[(them | pieceKing) << COUNTER_SIZE];
    if ((kingPos != 0) && IsSquareAttackableX(kingPos, g_toMove)) {
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

function MakeMove(move){
    var me = g_toMove >> TYPE_SIZE;
    var otherColor = colorWhite - g_toMove; 
    
    var to = (move >> 8) & 0xFF;
    var from = move & 0xFF;
    var captured = g_board[to];
    var piece = g_board[from];

    g_moveUndoStack[g_moveCount] = new UndoHistory(g_inCheck, g_baseEval, g_hashKeyLow, g_hashKeyHigh, g_move50, captured);
    g_moveCount++;

    if (captured) {
        // Remove our piece from the piece list
        var capturedType = captured & PIECE_MASK;
        g_pieceCount[capturedType]--;
        var lastPieceSquare = g_pieceList[(capturedType << COUNTER_SIZE) | g_pieceCount[capturedType]];
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

    g_board[to] = g_board[from];
    g_baseEval += pieceSquareAdj[piece & TYPE_MASK][me == 0 ? flipTable[to] : to];
    g_board[from] = pieceEmpty;

    g_toMove = otherColor;
    g_baseEval = -g_baseEval;
    
    var kingPos = g_pieceList[(pieceKing | (colorWhite - g_toMove)) << COUNTER_SIZE];
    if ((kingPos != 0) && IsSquareAttackableX(kingPos, otherColor)) {
        UnmakeMove(move);
        return false;
    }
    
    g_inCheck = false;
    
/*  var theirKingPos = g_pieceList[(pieceKing | g_toMove) << COUNTER_SIZE];
    if (theirKingPos != 0) {
        g_inCheck = IsSquareAttackableX(theirKingPos, g_toMove);
    }*/

    g_repMoveStack[g_moveCount - 1] = g_hashKeyLow;
    g_move50++;

    return true;
}

function UnmakeMove(move){
    g_toMove = colorWhite - g_toMove;
    g_baseEval = -g_baseEval;
    
    g_moveCount--;
    g_inCheck = g_moveUndoStack[g_moveCount].inCheck;
    g_baseEval = g_moveUndoStack[g_moveCount].baseEval;
    g_hashKeyLow = g_moveUndoStack[g_moveCount].hashKeyLow;
    g_hashKeyHigh = g_moveUndoStack[g_moveCount].hashKeyHigh;
    g_move50 = g_moveUndoStack[g_moveCount].move50;
    
    var otherColor = colorWhite - g_toMove;
    var me = g_toMove >> TYPE_SIZE;
    var them = otherColor >> TYPE_SIZE;
    
    var captured = g_moveUndoStack[g_moveCount].captured;
    var to = (move >> 8) & 0xFF;
    var from = move & 0xFF;
    
    var piece = g_board[to];
    g_board[from] = g_board[to];
    g_board[to] = captured;

    // Move our piece in the piece list
    g_pieceIndex[from] = g_pieceIndex[to];
    g_pieceList[((piece & PIECE_MASK) << COUNTER_SIZE) | g_pieceIndex[from]] = from;

    if (captured) {
        // Restore our piece to the piece list
        var captureType = captured & PIECE_MASK;
        g_pieceIndex[to] = g_pieceCount[captureType];
        g_pieceList[(captureType << COUNTER_SIZE) | g_pieceCount[captureType]] = to;
        g_pieceCount[captureType]++;
    }
}

function GenerateAllMoves(moveStack) {
    var adj, from, to, pos, piece, pieceIdx;
    var me = g_toMove >> TYPE_SIZE;
    var inc = (g_toMove == colorWhite) ? -16 : 16;

    // Pawn quiet moves
    pieceIdx = (g_toMove | piecePawn) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + inc; if (g_board[to] == 0) {moveStack[moveStack.length] = GenerateMove(from, to);}
        to = from + (inc * 16); if (g_board[to] == 0) {moveStack[moveStack.length] = GenerateMove(from, to);}
        adj = pieceSquareAdj[piecePawn][me == 0 ? flipTable[from] : from];
        if (adj != 0) {
            to = from - inc; 
            if ((g_board[to] == 0) && (pieceSquareAdj[piecePawn][me == 0 ? flipTable[to] : to] != 0)) {
                moveStack[moveStack.length] = GenerateMove(from, to);
            }
            to = from - (inc * 16); 
            if ((g_board[to] == 0) && (pieceSquareAdj[piecePawn][me == 0 ? flipTable[to] : to] != 0)) {
                moveStack[moveStack.length] = GenerateMove(from, to);
            }
        }
	from = g_pieceList[pieceIdx++];
    }

    pieceIdx = (g_toMove | pieceDun) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from - 17; if (g_board[to] == 0) {moveStack[moveStack.length] = GenerateMove(from, to);}
        to = from - 15; if (g_board[to] == 0) {moveStack[moveStack.length] = GenerateMove(from, to);}
        to = from + 17; if (g_board[to] == 0) {moveStack[moveStack.length] = GenerateMove(from, to);}
        to = from + 15; if (g_board[to] == 0) {moveStack[moveStack.length] = GenerateMove(from, to);}
	from = g_pieceList[pieceIdx++];
    }

    // Advisor quiet moves
    pieceIdx = (g_toMove | pieceAdvisor) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from - 16; adj = pieceSquareAdj[pieceAdvisor][me == 0 ? flipTable[to] : to];
        if (adj != 0) {
            if (g_board[to] == 0) {moveStack[moveStack.length] = GenerateMove(from, to);}
        }
        to = from - 1; adj = pieceSquareAdj[pieceAdvisor][me == 0 ? flipTable[to] : to];
        if (adj != 0) {
            if (g_board[to] == 0) {moveStack[moveStack.length] = GenerateMove(from, to);}
        }
        to = from + 16; adj = pieceSquareAdj[pieceAdvisor][me == 0 ? flipTable[to] : to];
        if (adj != 0) {
            if (g_board[to] == 0) {moveStack[moveStack.length] = GenerateMove(from, to);}
        }
        to = from + 1; adj = pieceSquareAdj[pieceAdvisor][me == 0 ? flipTable[to] : to];
        if (adj != 0) {
            if (g_board[to] == 0) {moveStack[moveStack.length] = GenerateMove(from, to);}
        }
	from = g_pieceList[pieceIdx++];
    }

    // Bishop quiet moves
    pieceIdx = (g_toMove | pieceBishop) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        pos = from - 16; 
        if (g_board[pos] == 0) {
            to = pos - 16; adj = pieceSquareAdj[pieceBishop][me == 0 ? flipTable[to] : to];
            if (adj != 0) {
                if (g_board[to] == 0) {moveStack[moveStack.length] = GenerateMove(from, to);}
            }
        }
        pos = from - 1; 
        if (g_board[pos] == 0) {
            to = pos - 1; adj = pieceSquareAdj[pieceBishop][me == 0 ? flipTable[to] : to];
            if (adj != 0) {
                if (g_board[to] == 0) {moveStack[moveStack.length] = GenerateMove(from, to);}
            }
        }
        pos = from + 16; 
        if (g_board[pos] == 0) {
            to = pos + 16; adj = pieceSquareAdj[pieceBishop][me == 0 ? flipTable[to] : to];
            if (adj != 0) {
                if (g_board[to] == 0) {moveStack[moveStack.length] = GenerateMove(from, to);}
            }
        }
        pos = from + 1; 
        if (g_board[pos] == 0) {
            to = pos + 1; adj = pieceSquareAdj[pieceBishop][me == 0 ? flipTable[to] : to];
            if (adj != 0) {
                if (g_board[to] == 0) {moveStack[moveStack.length] = GenerateMove(from, to);}
            }
        }
	from = g_pieceList[pieceIdx++];
    }

    // Knight quiet moves
    pieceIdx = (g_toMove | pieceKnight) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        pos = from - 16;
        if (g_board[pos] == 0) {
            to = pos - 15; if (g_board[to] == 0) {moveStack[moveStack.length] = GenerateMove(from, to);}
            to = pos - 17; if (g_board[to] == 0) {moveStack[moveStack.length] = GenerateMove(from, to);}
        }
        pos = from + 16;
        if (g_board[pos] == 0) {
            to = pos + 15; if (g_board[to] == 0) {moveStack[moveStack.length] = GenerateMove(from, to);}
            to = pos + 17; if (g_board[to] == 0) {moveStack[moveStack.length] = GenerateMove(from, to);}
        }
        pos = from - 1;
        if (g_board[pos] == 0) {
            to = pos - 17; if (g_board[to] == 0) {moveStack[moveStack.length] = GenerateMove(from, to);}
            to = pos + 15; if (g_board[to] == 0) {moveStack[moveStack.length] = GenerateMove(from, to);}
        }
        pos = from + 1;
        if (g_board[pos] == 0) {
            to = pos - 15; if (g_board[to] == 0) {moveStack[moveStack.length] = GenerateMove(from, to);}
            to = pos + 17; if (g_board[to] == 0) {moveStack[moveStack.length] = GenerateMove(from, to);}
        }
	from = g_pieceList[pieceIdx++];
    }

    // Rook quiet moves
    pieceIdx = (g_toMove | pieceRook) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from - 1;  while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to); to--; }
	to = from + 1;  while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to); to++; }
	to = from + 16; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to); to += 16; }
	to = from - 16; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to); to -= 16; }
	from = g_pieceList[pieceIdx++];
    }

    // Cannon quiet moves
    pieceIdx = (g_toMove | pieceCannon) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from - 1;  while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to); to--; }
	to = from + 1;  while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to); to++; }
	to = from + 16; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to); to += 16; }
	to = from - 16; while (g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to); to -= 16; }
	from = g_pieceList[pieceIdx++];
    }

    // King quiet moves
    pieceIdx = (g_toMove | pieceKing) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx];
    to = from - 16; adj = pieceSquareAdj[pieceKing][me == 0 ? flipTable[to] : to];
    if (adj != 0) {
        if (g_board[to] == 0) {moveStack[moveStack.length] = GenerateMove(from, to);}
    }
    to = from + 16; adj = pieceSquareAdj[pieceKing][me == 0 ? flipTable[to] : to];
    if (adj != 0) {
        if (g_board[to] == 0) {moveStack[moveStack.length] = GenerateMove(from, to);}
    }
    to = from - 1; adj = pieceSquareAdj[pieceKing][me == 0 ? flipTable[to] : to];
    if (adj != 0) {
        if (g_board[to] == 0) {moveStack[moveStack.length] = GenerateMove(from, to);}
    }
    to = from + 1; adj = pieceSquareAdj[pieceKing][me == 0 ? flipTable[to] : to];
    if (adj != 0) {
        if (g_board[to] == 0) {moveStack[moveStack.length] = GenerateMove(from, to);}
    }
    adj = pieceSquareAdj[pieceKing][me == 0 ? flipTable[from] : from];
    if ((adj % 2) != 0) {
        to = from - 17; adj = pieceSquareAdj[pieceKing][me == 0 ? flipTable[to] : to];
        if (adj != 0) {
            if (g_board[to] == 0) {moveStack[moveStack.length] = GenerateMove(from, to);}
        }
        to = from - 15; adj = pieceSquareAdj[pieceKing][me == 0 ? flipTable[to] : to];
        if (adj != 0) {
            if (g_board[to] == 0) {moveStack[moveStack.length] = GenerateMove(from, to);}
        }
        to = from + 17; adj = pieceSquareAdj[pieceKing][me == 0 ? flipTable[to] : to];
        if (adj != 0) {
            if (g_board[to] == 0) {moveStack[moveStack.length] = GenerateMove(from, to);}
        }
        to = from + 15; adj = pieceSquareAdj[pieceKing][me == 0 ? flipTable[to] : to];
        if (adj != 0) {
            if (g_board[to] == 0) {moveStack[moveStack.length] = GenerateMove(from, to);}
        }
    }
}

function GenerateCaptureMoves(moveStack, moveScores) {
    var adj, from, to, pos, piece, pieceIdx;
    var me = g_toMove >> TYPE_SIZE;
    var enemy = g_toMove == colorWhite ? colorBlack : colorWhite;
    var inc = (g_toMove == colorWhite) ? -16 : 16;

    // Pawn captures
    pieceIdx = (g_toMove | piecePawn) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + inc; if (g_board[to] & enemy) {moveStack[moveStack.length] = GenerateMove(from, to);}
        to = from + (inc * 16); if (g_board[to] & enemy) {moveStack[moveStack.length] = GenerateMove(from, to);}
        adj = pieceSquareAdj[piecePawn][me == 0 ? flipTable[from] : from];
        if (adj != 0) {
            to = from - inc; 
            if ((g_board[to] & enemy) && (pieceSquareAdj[piecePawn][me == 0 ? flipTable[to] : to] != 0)) {
                moveStack[moveStack.length] = GenerateMove(from, to);
            }
            to = from - (inc * 16); 
            if ((g_board[to] & enemy) && (pieceSquareAdj[piecePawn][me == 0 ? flipTable[to] : to] != 0)) {
                moveStack[moveStack.length] = GenerateMove(from, to);
            }
        }
	from = g_pieceList[pieceIdx++];
    }

    // Dun captures
    pieceIdx = (g_toMove | pieceDun) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from - 17; if (g_board[to] & enemy) {moveStack[moveStack.length] = GenerateMove(from, to);}
        to = from - 15; if (g_board[to] & enemy) {moveStack[moveStack.length] = GenerateMove(from, to);}
        to = from + 17; if (g_board[to] & enemy) {moveStack[moveStack.length] = GenerateMove(from, to);}
        to = from + 15; if (g_board[to] & enemy) {moveStack[moveStack.length] = GenerateMove(from, to);}
	from = g_pieceList[pieceIdx++];
    }

    // Advisor captures
    pieceIdx = (g_toMove | pieceAdvisor) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from - 16; adj = pieceSquareAdj[pieceAdvisor][me == 0 ? flipTable[to] : to];
        if (adj != 0) {
            if (g_board[to] & enemy) {moveStack[moveStack.length] = GenerateMove(from, to);}
        }
        to = from - 1; adj = pieceSquareAdj[pieceAdvisor][me == 0 ? flipTable[to] : to];
        if (adj != 0) {
            if (g_board[to] & enemy) {moveStack[moveStack.length] = GenerateMove(from, to);}
        }
        to = from + 16; adj = pieceSquareAdj[pieceAdvisor][me == 0 ? flipTable[to] : to];
        if (adj != 0) {
            if (g_board[to] & enemy) {moveStack[moveStack.length] = GenerateMove(from, to);}
        }
        to = from + 1; adj = pieceSquareAdj[pieceAdvisor][me == 0 ? flipTable[to] : to];
        if (adj != 0) {
            if (g_board[to] & enemy) {moveStack[moveStack.length] = GenerateMove(from, to);}
        }
	from = g_pieceList[pieceIdx++];
    }

    // Bishop captures
    pieceIdx = (g_toMove | pieceBishop) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        pos = from - 16; 
        if (g_board[pos] == 0) {
            to = pos - 16; adj = pieceSquareAdj[pieceBishop][me == 0 ? flipTable[to] : to];
            if (adj != 0) {
                if (g_board[to] & enemy) {moveStack[moveStack.length] = GenerateMove(from, to);}
            }
        }
        pos = from - 1; 
        if (g_board[pos] == 0) {
            to = pos - 1; adj = pieceSquareAdj[pieceBishop][me == 0 ? flipTable[to] : to];
            if (adj != 0) {
                if (g_board[to] & enemy) {moveStack[moveStack.length] = GenerateMove(from, to);}
            }
        }
        pos = from + 16; 
        if (g_board[pos] == 0) {
            to = pos + 16; adj = pieceSquareAdj[pieceBishop][me == 0 ? flipTable[to] : to];
            if (adj != 0) {
                if (g_board[to] & enemy) {moveStack[moveStack.length] = GenerateMove(from, to);}
            }
        }
        pos = from + 1; 
        if (g_board[pos] == 0) {
            to = pos + 1; adj = pieceSquareAdj[pieceBishop][me == 0 ? flipTable[to] : to];
            if (adj != 0) {
                if (g_board[to] & enemy) {moveStack[moveStack.length] = GenerateMove(from, to);}
            }
        }
	from = g_pieceList[pieceIdx++];
    }

    // Knight captures
    pieceIdx = (g_toMove | pieceKnight) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        pos = from - 16;
        if (g_board[pos] == 0) {
            to = pos - 15; if (g_board[to] & enemy) {moveStack[moveStack.length] = GenerateMove(from, to);}
            to = pos - 17; if (g_board[to] & enemy) {moveStack[moveStack.length] = GenerateMove(from, to);}
        }
        pos = from + 16;
        if (g_board[pos] == 0) {
            to = pos + 15; if (g_board[to] & enemy) {moveStack[moveStack.length] = GenerateMove(from, to);}
            to = pos + 17; if (g_board[to] & enemy) {moveStack[moveStack.length] = GenerateMove(from, to);}
        }
        pos = from - 1;
        if (g_board[pos] == 0) {
            to = pos - 17; if (g_board[to] & enemy) {moveStack[moveStack.length] = GenerateMove(from, to);}
            to = pos + 15; if (g_board[to] & enemy) {moveStack[moveStack.length] = GenerateMove(from, to);}
        }
        pos = from + 1;
        if (g_board[pos] == 0) {
            to = pos - 15; if (g_board[to] & enemy) {moveStack[moveStack.length] = GenerateMove(from, to);}
            to = pos + 17; if (g_board[to] & enemy) {moveStack[moveStack.length] = GenerateMove(from, to);}
        }
	from = g_pieceList[pieceIdx++];
    }

    // Rook captures
    pieceIdx = (g_toMove | pieceRook) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from; do { to--; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to);
	to = from; do { to++; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to);
	to = from; do { to -= 16; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to);
	to = from; do { to += 16; } while (g_board[to] == 0); if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to);
	from = g_pieceList[pieceIdx++];
    }

    // Cannon captures
    pieceIdx = (g_toMove | pieceCannon) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from; do { to--; } while (g_board[to] == 0);
        if (g_board[to] & PLAYERS_MASK) {
            to--; while (g_board[to] == 0) { to--; }
            if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to);
        }
        to = from; do { to++; } while (g_board[to] == 0);
        if (g_board[to] & PLAYERS_MASK) {
            to++; while (g_board[to] == 0) { to++; }
            if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to);
        }
        to = from; do { to -= 16; } while (g_board[to] == 0);
        if (g_board[to] & PLAYERS_MASK) {
            to -= 16; while (g_board[to] == 0) { to -= 16; }
            if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to);
        }
        to = from; do { to += 16; } while (g_board[to] == 0);
        if (g_board[to] & PLAYERS_MASK) {
            to += 16; while (g_board[to] == 0) { to += 16; }
            if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to);
        }
	from = g_pieceList[pieceIdx++];
    }

    // King captures
    pieceIdx = (g_toMove | pieceKing) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx];
    to = from - 16; adj = pieceSquareAdj[pieceKing][me == 0 ? flipTable[to] : to];
    if (adj != 0) {
        if (g_board[to] & enemy) {moveStack[moveStack.length] = GenerateMove(from, to);}
    }
    to = from + 16; adj = pieceSquareAdj[pieceKing][me == 0 ? flipTable[to] : to];
    if (adj != 0) {
        if (g_board[to] & enemy) {moveStack[moveStack.length] = GenerateMove(from, to);}
    }
    to = from - 1; adj = pieceSquareAdj[pieceKing][me == 0 ? flipTable[to] : to];
    if (adj != 0) {
        if (g_board[to] & enemy) {moveStack[moveStack.length] = GenerateMove(from, to);}
    }
    to = from + 1; adj = pieceSquareAdj[pieceKing][me == 0 ? flipTable[to] : to];
    if (adj != 0) {
        if (g_board[to] & enemy) {moveStack[moveStack.length] = GenerateMove(from, to);}
    }
    adj = pieceSquareAdj[pieceKing][me == 0 ? flipTable[from] : from];
    if ((adj % 2) != 0) {
        to = from - 17; adj = pieceSquareAdj[pieceKing][me == 0 ? flipTable[to] : to];
        if (adj != 0) {
            if (g_board[to] & enemy) {moveStack[moveStack.length] = GenerateMove(from, to);}
        }
        to = from - 15; adj = pieceSquareAdj[pieceKing][me == 0 ? flipTable[to] : to];
        if (adj != 0) {
            if (g_board[to] & enemy) {moveStack[moveStack.length] = GenerateMove(from, to);}
        }
        to = from + 17; adj = pieceSquareAdj[pieceKing][me == 0 ? flipTable[to] : to];
        if (adj != 0) {
            if (g_board[to] & enemy) {moveStack[moveStack.length] = GenerateMove(from, to);}
        }
        to = from + 15; adj = pieceSquareAdj[pieceKing][me == 0 ? flipTable[to] : to];
        if (adj != 0) {
            if (g_board[to] & enemy) {moveStack[moveStack.length] = GenerateMove(from, to);}
        }
    }
}

function GenerateDropMoves(moveStack, force) {}

var g_seeValues = [0, 1, 1, 2, 2, 3, 4, 5, 900, 0, 0, 0, 0, 0, 0, 0,
                   0, 1, 1, 2, 2, 3, 4, 5, 900, 0, 0, 0, 0, 0, 0, 0];

function See(move) {
    var from = move & 0xFF;
    var to = (move >> 8) & 0xFF;

    var fromPiece = g_board[from];

    var fromValue = g_seeValues[fromPiece & PIECE_MASK];
    var toValue = g_seeValues[g_board[to] & PIECE_MASK];

    if (fromValue <= toValue) {
        return true;
    }

    var us = (fromPiece & colorWhite) ? colorWhite : 0;
    var them = colorWhite - us;

    var themAttacks = new Array();

    // Pawn attacks 
    // If any opponent pawns can capture back, this capture is probably not worthwhile (as we must be using knight or above).
    if (SeeAddSliderAttacksX(to, them, themAttacks, piecePawn)) {
        return false;
    }

    // Knight attacks 
    // If any opponent knights can capture back, and the deficit we have to make up is greater than the knights value, 
    // it's not worth it.  We can capture on this square again, and the opponent doesn't have to capture back. 
    var captureDeficit = fromValue - toValue;

    // Slider attacks
    g_board[from] = 0;
    for (var pieceType = pieceDun; pieceType <= pieceRook; pieceType++) {
        if (SeeAddSliderAttacksX(to, them, themAttacks, pieceType)) {
            if (captureDeficit > g_seeValues[pieceType]) {
                g_board[from] = fromPiece;
                return false;
            }
        }
    }

    var usAttacks = new Array();

    // Pawn defenses 
    // At this point, we are sure we are making a "losing" capture.  The opponent can not capture back with a 
    // pawn.  They cannot capture back with a minor/major and stand pat either.  So, if we can capture with 
    // a pawn, it's got to be a winning or equal capture. 
    if (SeeAddSliderAttacksX(to, us, usAttacks, piecePawn)) {
        g_board[from] = fromPiece;
        return true;
    }

    // King attacks
    SeeAddSliderAttacksX(to, them, themAttacks, pieceKing);

    // Our attacks
    for (var pieceType = pieceDun; pieceType <= pieceKing; pieceType++) {
        SeeAddSliderAttacksX(to, us, usAttacks, pieceType);
    }

    g_board[from] = fromPiece;

    // We are currently winning the amount of material of the captured piece, time to see if the opponent 
    // can get it back somehow.  We assume the opponent can capture our current piece in this score, which 
    // simplifies the later code considerably. 
    var seeValue = toValue - fromValue;

    for (; ; ) {
        var capturingPieceValue = 1000;
        var capturingPieceIndex = -1;

        // Find the least valuable piece of the opponent that can attack the square
        for (var i = 0; i < themAttacks.length; i++) {
            if (themAttacks[i] != 0) {
                var pieceValue = g_seeValues[g_board[themAttacks[i]] & TYPE_MASK];
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

        var capturingPieceSquare = themAttacks[capturingPieceIndex];
        themAttacks[capturingPieceIndex] = 0;

        // Add any x-ray attackers
        SeeAddXrayAttackX(to, capturingPieceSquare, us, usAttacks, themAttacks);

        // Our turn to capture
        capturingPieceValue = 1000;
        capturingPieceIndex = -1;

        // Find our least valuable piece that can attack the square
        for (var i = 0; i < usAttacks.length; i++) {
            if (usAttacks[i] != 0) {
                var pieceValue = g_seeValues[g_board[usAttacks[i]] & TYPE_MASK];
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
        SeeAddXrayAttackX(to, capturingPieceSquare, us, usAttacks, themAttacks);
    }
}

function SeeAddXrayAttackX(target, square, us, usAttacks, themAttacks) {
  var inc;
  if ((target & 0xF) == (square & 0xF)) {
      inc = (square > target) ? 16 : -16;
  }
  if ((target & 0xF0) == (square & 0xF0)) {
      inc = (square > target) ? 1 : -1;
  }
  var to = square + inc; while (g_board[to] == 0) { to += inc; }
  if ((g_board[to] & TYPE_MASK) == pieceRook) {
      if ((g_board[to] & colorWhite) == us) {
          usAttacks[usAttacks.length] = to;
      } else {
          themAttacks[themAttacks.length] = to;
      }
      return;
  }
  if ((g_board[to] & PLAYERS_MASK) == 0) return;
  to += inc; while (g_board[to] == 0) { to += inc; }
  if ((g_board[to] & TYPE_MASK) != pieceCannon) return;
  if ((g_board[to] & colorWhite) == us) {
      usAttacks[usAttacks.length] = to;
  } else {
      themAttacks[themAttacks.length] = to;
  }
}

function SeeAddSliderAttacksX(target, us, attacks, pieceType) {
    var pieceIdx = (us | pieceType) << COUNTER_SIZE;
    var attackerSq = g_pieceList[pieceIdx++];
    var hit = false;
    while (attackerSq != 0) {
        if (IsSquareAttackableFromX(target, attackerSq)) {
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
        var result = InitializeFromFen(e.data.substr(9, e.data.length - 9));
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
