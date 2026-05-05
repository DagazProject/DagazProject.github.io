"use strict";

const VECTORDELTA_SIZE  = 256;

importScripts('../../underscore/underscore-min.js', '../../common-scripts/zobrist-worker.js', '../../common-scripts/garbo-worker.js');

const emptyAdj = [
     0,     0,     0, // pieceEmpty
     0,     0,     0,
     0,     0,     0,
     0,     0,     0
];

const pawnAdj = [    
     0,     0,     0, // piecePawn
   200,   250,   200,
   100,   150,   100,
     0,     0,     0
];

const goldAdj = [  
   100,   150,   100, // pieceGold
   400,   600,   400,
   400,   600,   400,
   300,   500,   300
];

const bishopAdj = [  
   100,   200,   100, // pieceBishop
   200,   400,   200,
   200,   400,   200,
   100,   200,   100
];

const rookAdj = [  
   200,   300,   200, // pieceRook
   300,   400,   300,
   300,   400,   300,
   200,   300,   200
];

const kingAdj = [ 
999999,999999,999999, // pieceKing
   500,   400,   500,
   300,   200,   300,
   100,   200,   100
];

let g_width             = 3;
let g_height            = 4;

STALMATED               = true;

const NOISE_FACTOR      = 0;

const PIECE_MASK        = 0xF;
const TYPE_MASK         = 0x7;
const PLAYERS_MASK      = 0x18;
const COUNTER_SIZE      = 4;
const TYPE_SIZE         = 3;

let colorBlack          = 0x10;
let colorWhite          = 0x08;

const pieceEmpty        = 0x00;
const piecePawn         = 0x01;
const pieceBishop       = 0x02;
const pieceRook         = 0x03;
const pieceGold         = 0x04;
const pieceKing         = 0x05;
const pieceNo           = 0x80;

const moveflagPromotion = 0x01 << 24;

let RESERVE_WIDTH   = 1;
let RESERVE_SIZE    = 8;
const g_reserve     = [0, 0, 0, 0, 0, 0, 0, 0];

const materialTable = [0, 100, 400, 500, 600, 600000];

const g_seeValues   = [0, 1, 3, 3, 5, 900, 0, 0,
                       0, 1, 3, 3, 5, 900, 0, 0];

const pieceSquareAdj = new Array(10);
const flipTable      = new Array(256);

const g_vectorDelta  = new Array(VECTORDELTA_SIZE);

const g_bishopDeltas = [-15, -17, 15, 17];
const g_rookDeltas   = [-1, +1, -16, +16];
const g_kingDeltas   = [-15, -17, 15, 17, -1, +1, -16, +16];

function GetFen() {
    let result = "";
    for (let row = 0; row < g_height; row++) {
        if (row != 0) result += '/';
        let empty = 0;
        for (let col = 0; col < g_width; col++) {
            const piece = g_board[MakeSquare(row, col)];
            if (piece == 0) {
                empty++;
            } else {
                if (empty != 0) 
                    result += empty;
                empty = 0;
                const pieceChar = [" ", "p", "b", "r", "q", "k"][(piece & TYPE_MASK)];
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

function MakeSquare(row, column) {
    return ((row + 2) << 4) | (column + 4);
}

function FormatSquare(square) {
    const letters = ['a', 'b', 'c'];
    return letters[(square & 0xF) - 4] + (((g_height + 1) - (square >> 4)) + 1);
}

function FormatReserve(square) {
    const letters = ['r', 'g'];
    return letters[square & 1] + (g_height - (square >> 1));
}

function FormatMove(move) {
    let result;
    let from = move & 0xFF;
    if (from != 0) {
        result = FormatSquare(from) + FormatSquare((move >> 8) & 0xFF);
    } else {
        from = (move >> 16) & 0xFF;
        result = FormatReserve(from) + FormatSquare((move >> 8) & 0xFF);
    }
    return result;
}

function Mobility(color) {
    let result = 0;
    let from, to, mob, pieceIdx;

    const enemy = color ? colorBlack : colorWhite
    const mobUnit = color ? g_mobUnit[0] : g_mobUnit[1];

    // Pawn mobility
    mob = 0;
    pieceIdx = (color | piecePawn) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        if (color == colorWhite) {
            mob += mobUnit[g_board[from - 16]];
        } else {
            mob += mobUnit[g_board[from + 16]];
        }
        from = g_pieceList[pieceIdx++];
    }
    result += 40 * mob;

    // Bishop mobility
    mob = -4;
    pieceIdx = (color | pieceBishop) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        mob += mobUnit[g_board[from - 17]];
        mob += mobUnit[g_board[from - 15]];
        mob += mobUnit[g_board[from + 15]];
        mob += mobUnit[g_board[from + 17]];
        from = g_pieceList[pieceIdx++];
    }
    result += 30 * mob;

    // Rook mobility
    mob = -4;
    pieceIdx = (color | pieceRook) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        mob += mobUnit[g_board[from - 1]];
        mob += mobUnit[g_board[from - 16]];
        mob += mobUnit[g_board[from + 1]];
        mob += mobUnit[g_board[from + 16]];
        from = g_pieceList[pieceIdx++];
    }
    result += 25 * mob;

    // Gold mobility
    mob = -2;
    pieceIdx = (color | pieceGold) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        if (color == colorWhite) {
            mob += mobUnit[g_board[from - 15]];
            mob += mobUnit[g_board[from - 17]];
        } else {
            mob += mobUnit[g_board[from + 15]];
            mob += mobUnit[g_board[from + 17]];
        }
        mob += mobUnit[g_board[from - 1]];
        mob += mobUnit[g_board[from - 16]];
        mob += mobUnit[g_board[from + 1]];
        mob += mobUnit[g_board[from + 16]];
        from = g_pieceList[pieceIdx++];
    }
    result += 22 * mob;

    return result;
}

function DropMobility(piece, from) {
    const color = piece & colorWhite;
    const enemy = color ? colorBlack : colorWhite;
    const mobUnit = color ? g_mobUnit[0] : g_mobUnit[1];

    let mob = 0;
    let to;
    
    if ((piece & TYPE_MASK) == piecePawn) {
        if (color == colorWhite) {
            mob += mobUnit[g_board[from - 16]];
        } else {
            mob += mobUnit[g_board[from + 16]];
        }
    }

    if ((piece & TYPE_MASK) == pieceGold) {
        if (color == colorWhite) {
            mob += mobUnit[g_board[from - 17]];
            mob += mobUnit[g_board[from - 15]];
        } else {
            mob += mobUnit[g_board[from + 17]];
            mob += mobUnit[g_board[from + 15]];
        }
        mob += mobUnit[g_board[from - 16]];
        mob += mobUnit[g_board[from + 16]];
        mob += mobUnit[g_board[from - 1]];
        mob += mobUnit[g_board[from + 1]];
    }

    if ((piece & TYPE_MASK) == pieceRook) {
        mob += mobUnit[g_board[from - 16]];
        mob += mobUnit[g_board[from + 16]];
        mob += mobUnit[g_board[from - 1]];
        mob += mobUnit[g_board[from + 1]];
    }

    if ((piece & TYPE_MASK) == pieceBishop) {
        mob += mobUnit[g_board[from + 17]];
        mob += mobUnit[g_board[from + 15]];
        mob += mobUnit[g_board[from - 17]];
        mob += mobUnit[g_board[from - 15]];
    }

    return mob;
}

function Evaluate() {
    let curEval = g_baseEval;
    let mobility = Mobility(colorWhite) - Mobility(0);
    if (g_toMove == 0) {
        // Black
        curEval -= mobility;
    }
    else {
        curEval += mobility;
    }
    return curEval;
}

function ScoreMove(move) {
    const moveTo = (move >> 8) & 0xFF;
    const captured = g_board[moveTo] & TYPE_MASK;
    const from = move & 0xFF;
    let piece;
    if (from != 0) {
        piece = g_board[from];
    } else {
        const slot = (move >> 16) & 0xFF;
        piece = g_reserve[slot];
        const score = DropMobility(piece, moveTo);
        return score;
    }
    let score;
    if (captured != pieceEmpty) {
        const pieceType = piece & TYPE_MASK;
        score = (captured << 5) - pieceType;
    } else {
        score = historyTable[piece & PIECE_MASK][moveTo];
    }
    return score;
}

function IsHashMoveValid(hashMove) {
    const from = hashMove & 0xFF;
    const to = (hashMove >> 8) & 0xFF;
    let ourPiece;
    if (from == 0) {
        ourPiece = g_board[from];
    } else {
        const slot = (hashMove >> 16) & 0xFF;
        ourPiece = g_reserve[slot];
    }
    const pieceType = ourPiece & TYPE_MASK;
    if (pieceType < piecePawn || pieceType > pieceKing) return false;
    // Can't move a piece we don't control
    if (g_toMove != (ourPiece & colorWhite)) return false;
    // Can't move to a square that has something of the same color
    if (g_board[to] != 0 && (g_toMove == (g_board[to] & colorWhite))) return false;
    if (from == 0) return true;
    if (pieceType == piecePawn) {
        // Valid moves are push, capture, double push, promotions
        const dir = to - from;
        if ((g_toMove == colorWhite) != (dir < 0))  {
            // Pawns have to move in the right direction
            return false;
        }
        const row = to & 0xF0;
        if (((row == 0x50 && !g_toMove) ||
             (row == 0x20 && g_toMove)) != (hashMove & moveflagPromotion)) {
            // Handle promotions
            return false;
        }
        if (dir == -16 || dir == 16) {
            return true;
        }
        return false;
    } else {
        // This validates that this piece type can actually make the attack
        if (hashMove >> 24) return false;
        return IsSquareAttackableFrom(to, from);
    }
}

function isNoZugzwang() {
    return true;
}

function ResetGame() {
  CommonResetGame();

  pieceSquareAdj[pieceEmpty]   = MakeTable(emptyAdj);
  pieceSquareAdj[piecePawn]    = MakeTable(pawnAdj);
  pieceSquareAdj[pieceBishop]  = MakeTable(bishopAdj);
  pieceSquareAdj[pieceRook]    = MakeTable(rookAdj);
  pieceSquareAdj[pieceGold]    = MakeTable(goldAdj);
  pieceSquareAdj[pieceKing]    = MakeTable(kingAdj);

  const pieceDeltas = [[], [], g_bishopDeltas, g_rookDeltas, g_rookDeltas, g_kingDeltas];

  for (let i = 0; i < VECTORDELTA_SIZE; i++) {
      g_vectorDelta[i] = new Object();
      g_vectorDelta[i].delta = 0;
      g_vectorDelta[i].pieceMask = new Array(2);
      g_vectorDelta[i].pieceMask[0] = 0;
      g_vectorDelta[i].pieceMask[1] = 0;
  }

  // Initialize the vector delta table    
  for (let row = 0; row < (g_height << 4); row += 0x10) {
      for (let col = 0; col < g_width; col++) {
           const square = row | col;

           // Pawn moves
           var index = square - (square - 16) + (VECTORDELTA_SIZE >> 1);
           g_vectorDelta[index].pieceMask[colorWhite >> TYPE_SIZE] |= (1 << piecePawn);
           index = square - (square + 16) + (VECTORDELTA_SIZE >> 1);
           g_vectorDelta[index].pieceMask[0] |= (1 << piecePawn);

           // Gold moves
           index = square - (square - 15) + (VECTORDELTA_SIZE >> 1);
           g_vectorDelta[index].pieceMask[colorWhite >> TYPE_SIZE] |= (1 << pieceGold);
           index = square - (square - 17) + (VECTORDELTA_SIZE >> 1);
           g_vectorDelta[index].pieceMask[colorWhite >> TYPE_SIZE] |= (1 << pieceGold);

           index = square - (square + 15) + (VECTORDELTA_SIZE >> 1);
           g_vectorDelta[index].pieceMask[0] |= (1 << pieceGold);
           index = square - (square + 17) + (VECTORDELTA_SIZE >> 1);
           g_vectorDelta[index].pieceMask[0] |= (1 << pieceGold);

           for (let i = pieceBishop; i <= pieceKing; i++) {
                for (let dir = 0; dir < pieceDeltas[i].length; dir++) {
                     let target = square + pieceDeltas[i][dir];
                     while (!(target & 0x88)) {
                         const index = square - target + (VECTORDELTA_SIZE >> 1);
                         g_vectorDelta[index].pieceMask[colorWhite >> TYPE_SIZE] |= (1 << i);
                         g_vectorDelta[index].pieceMask[0] |= (1 << i);
                         let flip = -1;
                         if (square < target) flip = 1;
                         if ((square & 0xF0) == (target & 0xF0)) {
                             // On the same row
                             g_vectorDelta[index].delta = flip * 1;
                         } else if ((square & 0x0F) == (target & 0x0F)) {
                             // On the same column
                             g_vectorDelta[index].delta = flip * 16;
                         } else if ((square % 15) == (target % 15)) {
                             g_vectorDelta[index].delta = flip * 15;
                         } else if ((square % 17) == (target % 17)) {
                             g_vectorDelta[index].delta = flip * 17;
                         }
                         target += pieceDeltas[i][dir];
                         break;
                     }
                }
           }
      }
  }
  InitializeEval();
}

function InitializeEval() {
    g_mobUnit = new Array(2);
    for (let i = 0; i < 2; i++) {
        g_mobUnit[i] = new Array();
        const enemy = i == 0 ? colorBlack : colorWhite;
        const friend = i == 0 ? colorWhite : colorBlack;
        g_mobUnit[i][0] = 1;
        g_mobUnit[i][pieceNo] = 0;
        g_mobUnit[i][enemy  | piecePawn]   = 1;
        g_mobUnit[i][enemy  | pieceBishop] = 2;
        g_mobUnit[i][enemy  | pieceRook]   = 3;
        g_mobUnit[i][enemy  | pieceGold]   = 4;
        g_mobUnit[i][enemy  | pieceKing]   = 9;
        g_mobUnit[i][friend | piecePawn]   = 0;
        g_mobUnit[i][friend | pieceBishop] = 0;
        g_mobUnit[i][friend | pieceRook]   = 0;
        g_mobUnit[i][friend | pieceGold]   = 0;
        g_mobUnit[i][friend | pieceKing]   = 0;
    }
}

function ShogiSetHash() {
    let result = SetHash();
    for (let i = 0; i < RESERVE_SIZE; i++) {
        const piece = g_reserve[i];
        if ((piece & PLAYERS_MASK) && (piece & TYPE_MASK)) {
            result.hashKeyLow ^= g_zobristLow[i][piece & PIECE_MASK];
            result.hashKeyHigh ^= g_zobristHigh[i][piece & PIECE_MASK];
        }
    }
    return result;
}

function InitializeFromFen(fen) {
    const chunks = fen.split(' ');
    
    for (let i = 0; i < 256; i++) 
        g_board[i] = pieceNo;

    for (let i = 0; i < RESERVE_SIZE; i++) 
        g_reserve[i] = pieceEmpty;
    
    let row = 0;
    let col = 0;

    let pieces = chunks[0];
    for (let i = 0; i < pieces.length; i++) {
        let c = pieces.charAt(i);
        if (c == '/') {
            row++;
            col = 0;
        } else {
            if (c >= '0' && c <= '9') {
                for (let j = 0; j < parseInt(c); j++) {
                    g_board[MakeSquare(row, col)] = 0;
                    col++;
                }
            } else {
                const isBlack = c >= 'a' && c <= 'z';
                let piece = isBlack ? colorBlack : colorWhite;
                if (!isBlack) 
                    c = pieces.toLowerCase().charAt(i);
                switch (c) {
                    case 'p':
                        piece |= piecePawn;
                        break;
                    case 'q':
                        piece |= pieceGold;
                        break;
                    case 'b':
                        piece |= pieceBishop;
                        break;
                    case 'r':
                        piece |= pieceRook;
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
 
    let ix = 0;
    pieces = chunks[1];
    for (let i = 0; i < pieces.length; i++) {
        let c = pieces.charAt(i);
        if (c == '/') continue;
            if (c >= '0' && c <= '9') {
                for (let j = 0; j < parseInt(c); j++) {
                    g_reserve[ix] = pieceEmpty;
                    ix++;
                }
            } else {
                const isBlack = c >= 'a' && c <= 'z';
                let piece = isBlack ? colorBlack : colorWhite;
                if (!isBlack) 
                    c = pieces.toLowerCase().charAt(i);
                switch (c) {
                    case 'p':
                        piece |= piecePawn;
                        break;
                    case 'q':
                        piece |= pieceGold;
                        break;
                    case 'b':
                        piece |= pieceBishop;
                        break;
                    case 'r':
                        piece |= pieceRook;
                        break;
                    case 'k':
                        piece |= pieceKing;
                        break;
                }
                if (piece & TYPE_MASK) {
                    g_reserve[ix] = piece;
                }
                ix++;
        }
    }

    InitializePieceList();
    
    g_toMove = chunks[2].charAt(0) == 'w' ? colorWhite : 0;
    const them = colorWhite - g_toMove;
    
    let hashResult = ShogiSetHash();
    g_hashKeyLow = hashResult.hashKeyLow;
    g_hashKeyHigh = hashResult.hashKeyHigh;

    g_baseEval = 0;
    for (let i = 0; i < 256; i++) {
        if (g_board[i] & colorWhite) {
            g_baseEval += pieceSquareAdj[g_board[i] & TYPE_MASK][i];
            g_baseEval += materialTable[g_board[i] & TYPE_MASK];
        } else if (g_board[i] & colorBlack) {
            g_baseEval -= pieceSquareAdj[g_board[i] & TYPE_MASK][flipTable[i]];
            g_baseEval -= materialTable[g_board[i] & TYPE_MASK];
        }
    }
    for (let i = 0; i < RESERVE_SIZE; i++) {
        if (g_reserve[i] & colorWhite) {
            g_baseEval += materialTable[g_reserve[i] & TYPE_MASK];
        } else if (g_reserve[i] & colorBlack) {
            g_baseEval -= materialTable[g_reserve[i] & TYPE_MASK];
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

function GetSlot() {
    var ix = g_toMove ? [1, 3, 5, 7, 0, 2, 4, 6] : [0, 2, 4, 6, 1, 3, 5, 7];
    for (var i = 0; i < RESERVE_SIZE; i++) {
        if (g_reserve[ix[i]] == 0) return ix[i];
    }
    return null;
}

function UndoHistory(inCheck, baseEval, hashKeyLow, hashKeyHigh, move50, captured, slot) {
    this.inCheck = inCheck;
    this.baseEval = baseEval;
    this.hashKeyLow = hashKeyLow;
    this.hashKeyHigh = hashKeyHigh;
    this.move50 = move50;
    this.captured = captured;
    this.slot = slot;
}

function MakeMove(move) {
    let slot = GetSlot();
    const me = g_toMove >> TYPE_SIZE;
    const otherColor = colorWhite - g_toMove; 
    
    const flags = move & 0xFF000000;
    const to = (move >> 8) & 0xFF;
    const from = move & 0xFF;
    const captured = g_board[to];
    let piece = g_board[from];

    if (captured && (slot === null)) {
        return false;
    }

    g_moveUndoStack[g_moveCount] = new UndoHistory(g_inCheck, g_baseEval, g_hashKeyLow, g_hashKeyHigh, g_move50, captured, slot);
    g_moveCount++;

    if (captured) {
        let newPiece = captured & (~PLAYERS_MASK);
        newPiece |= g_toMove ? colorWhite : colorBlack;
        if ((captured & TYPE_MASK) == pieceGold) {
             newPiece &= ~TYPE_MASK;
             newPiece |= piecePawn;
        }
        g_reserve[slot] = newPiece;
        g_baseEval += materialTable[newPiece & TYPE_MASK];

        g_hashKeyLow ^= g_zobristLow[slot][newPiece & PIECE_MASK];
        g_hashKeyHigh ^= g_zobristHigh[slot][newPiece & PIECE_MASK];

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

    if (from == 0) {
        slot = (move >> 16) & 0xFF;
        piece = g_reserve[slot];
        g_baseEval -= materialTable[piece & TYPE_MASK];
        g_hashKeyLow ^= g_zobristLow[slot][piece & PIECE_MASK];
        g_hashKeyHigh ^= g_zobristHigh[slot][piece & PIECE_MASK];

        const pieceType = piece & PIECE_MASK;
        g_pieceIndex[to] = g_pieceCount[pieceType];
        g_pieceList[(pieceType << COUNTER_SIZE) | g_pieceCount[pieceType]] = to;
        g_pieceCount[pieceType]++;

        g_reserve[slot] = 0;
    } else {
        g_hashKeyLow ^= g_zobristLow[from][piece & PIECE_MASK];
        g_hashKeyHigh ^= g_zobristHigh[from][piece & PIECE_MASK];
        g_baseEval -= pieceSquareAdj[piece & TYPE_MASK][me == 0 ? flipTable[from] : from];

        // Move our piece in the piece list
        g_pieceIndex[to] = g_pieceIndex[from];
        g_pieceList[((piece & PIECE_MASK) << COUNTER_SIZE) | g_pieceIndex[to]] = to;
    }

    g_hashKeyLow ^= g_zobristLow[to][piece & PIECE_MASK];
    g_hashKeyHigh ^= g_zobristHigh[to][piece & PIECE_MASK];
    g_hashKeyLow ^= g_zobristBlackLow;
    g_hashKeyHigh ^= g_zobristBlackHigh;

    if (flags & moveflagPromotion) {
        let newPiece = piece & (~TYPE_MASK);
        newPiece |= pieceGold;

        g_hashKeyLow ^= g_zobristLow[to][piece & PIECE_MASK];
        g_hashKeyHigh ^= g_zobristHigh[to][piece & PIECE_MASK];
        g_board[to] = newPiece;
        g_hashKeyLow ^= g_zobristLow[to][newPiece & PIECE_MASK];
        g_hashKeyHigh ^= g_zobristHigh[to][newPiece & PIECE_MASK];
        
        g_baseEval += pieceSquareAdj[newPiece & TYPE_MASK][me == 0 ? flipTable[to] : to];
        g_baseEval -= materialTable[piece & TYPE_MASK];
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
        g_board[to] = piece;
        g_baseEval += pieceSquareAdj[piece & TYPE_MASK][me == 0 ? flipTable[to] : to];
    }

    if (from != 0) {
        g_board[from] = pieceEmpty;
    }

    g_toMove = otherColor;
    g_baseEval = -g_baseEval;

    let kingPos = g_pieceList[(pieceKing | (colorWhite - g_toMove)) << COUNTER_SIZE];
    if ((kingPos != 0) && IsSquareAttackable(kingPos, otherColor)) {
        UnmakeMove(move);
        return false;
    }

    g_inCheck = false;
    kingPos = g_pieceList[(pieceKing | g_toMove) << COUNTER_SIZE];
    if (kingPos != 0) {
        g_inCheck = IsSquareAttackable(kingPos, colorWhite - g_toMove);
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
    const slot = g_moveUndoStack[g_moveCount].slot;
    const to = (move >> 8) & 0xFF;
    const from = move & 0xFF;

    let piece = g_board[to];

    if (flags & moveflagPromotion) {
        piece = g_board[to] & (~TYPE_MASK) | piecePawn;
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
        if (from == 0) {
            g_reserve[(move >> 16) & 0xFF] = g_board[to];
            const capturedType = g_board[to] & PIECE_MASK;
            g_pieceCount[capturedType]--;
            const lastPieceSquare = g_pieceList[(capturedType << COUNTER_SIZE) | g_pieceCount[capturedType]];
            g_pieceIndex[lastPieceSquare] = g_pieceIndex[to];
            g_pieceList[(capturedType << COUNTER_SIZE) | g_pieceIndex[lastPieceSquare]] = lastPieceSquare;
            g_pieceList[(capturedType << COUNTER_SIZE) | g_pieceCount[capturedType]] = 0;
        } else {
            g_board[from] = g_board[to];
        }
    }

    g_board[to] = captured;

    if (from != 0) {
        // Move our piece in the piece list
        g_pieceIndex[from] = g_pieceIndex[to];
        g_pieceList[((piece & PIECE_MASK) << COUNTER_SIZE) | g_pieceIndex[from]] = from;
    }

    if (captured) {
        g_reserve[slot] = 0;
        // Restore our piece to the piece list
        const captureType = captured & PIECE_MASK;
        g_pieceIndex[to] = g_pieceCount[captureType];
        g_pieceList[(captureType << COUNTER_SIZE) | g_pieceCount[captureType]] = to;
        g_pieceCount[captureType]++;
    }
}

/*function IsSquareAttackableFrom(target, from) {
    var index = from - target + 128;
    var piece = g_board[from];
    if (g_vectorDelta[index].pieceMask[(piece >> TYPE_SIZE) & 1] & (1 << (piece & TYPE_MASK))) {
        // Yes, this square is pseudo-attackable.  Now, check for real attack
        var inc = g_vectorDelta[index].delta;
//      do {
            from += inc;
            if (from == target) return true;
//      } while (g_board[from] == 0);
    }
    return false;
}

function IsSquareAttackable(target, color) {
    // Attackable by pawns?
    var inc = color ? -16 : 16;
    var pawn = (color ? colorWhite : colorBlack) | piecePawn;
    if (g_board[target - inc] == pawn) return true;

    // Attackable by queens?
    var queen = (color ? colorWhite : colorBlack) | pieceGold;
    if (g_board[target - (inc - 1)] == queen) return true;
    if (g_board[target - (inc + 1)] == queen) return true;

    // Attackable by pieces?
    for (var i = pieceBishop; i <= pieceKing; i++) {
         var index = (color | i) << COUNTER_SIZE;
         var square = g_pieceList[index];
         while (square) {
             if (IsSquareAttackableFrom(target, square)) return true;
             square = g_pieceList[++index];
         }
    }
    return false;
}*/

function GenerateDrop(to, slot) {
    return (to << 8) | (slot << 16);
}

function isLosed() {
    var them = colorWhite - g_toMove;
    var kingPos = g_pieceList[(them | pieceKing) << COUNTER_SIZE];
    if (kingPos != 0) {
        var row = kingPos & 0xF0;
        if (g_toMove) {
            if (row == 0x50) return true;
        } else {
            if (row == 0x20) return true;
        }
    }
    return false;
}

function GenerateAllMoves(moveStack) {
    var from, to, piece, pieceIdx, flags;
    if (isLosed()) return;

    // Pawn quiet moves
    pieceIdx = (g_toMove | piecePawn) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        flags = 0;
        if (g_toMove) {
            to = from - 16; 
            if ((to & 0xF0) == 0x20) flags = moveflagPromotion;
            if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        } else {
            to = from + 16; 
            if ((to & 0xF0) == 0x50) flags = moveflagPromotion;
            if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        }
        from = g_pieceList[pieceIdx++];
    }

    // Bishop quiet moves
    pieceIdx = (g_toMove | pieceBishop) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from - 15; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 15; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 17; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 17; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	from = g_pieceList[pieceIdx++];
    }

    // Rook quiet moves
    pieceIdx = (g_toMove | pieceRook) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
	to = from - 1;  if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 1;  if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 16; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 16; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	from = g_pieceList[pieceIdx++];
    }
	
    // Queen quiet moves
    pieceIdx = (g_toMove | pieceGold) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        if (g_toMove) {
            to = from - 15; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
            to = from - 17; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        } else {
            to = from + 15; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
            to = from + 17; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        }
	to = from - 1;  if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 1;  if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from - 16; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	to = from + 16; if (g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
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
    }
}

function GenerateCaptureMoves(moveStack) {
    var from, to, piece, pieceIdx, flags;
    var enemy = g_toMove ? colorBlack : colorWhite;
    if (isLosed()) return;

    // Pawn captures
    pieceIdx = (g_toMove | piecePawn) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        flags = 0;
        if (g_toMove) {
            to = from - 16; 
            if ((to & 0xF0) == 0x20) flags = moveflagPromotion;
            if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        } else {
            to = from + 16; 
            if ((to & 0xF0) == 0x50) flags = moveflagPromotion;
            if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, flags);
        }
        from = g_pieceList[pieceIdx++];
    }

    // Bishop captures
    pieceIdx = (g_toMove | pieceBishop) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from - 15; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 15; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 17; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 17; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	from = g_pieceList[pieceIdx++];
    }
	
    // Rook captures
    pieceIdx = (g_toMove | pieceRook) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from - 1;  if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 1;  if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 16; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 16; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
	from = g_pieceList[pieceIdx++];
    }
	
    // Queen captures
    pieceIdx = (g_toMove | pieceGold) << COUNTER_SIZE;
    from = g_pieceList[pieceIdx++];
    while (from != 0) {
        if (g_toMove) {
            to = from - 15; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
            to = from - 17; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        } else {
            to = from + 15; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
            to = from + 17; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        }
        to = from - 1;  if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 1;  if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 16; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 16; if (g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
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
    }
}

function GenerateDropMoves(moveStack, force) {
   if (!force) return;
   if (isLosed()) return;
   var friend = g_toMove ? colorWhite : colorBlack;
   for (var slot = 0; slot < RESERVE_SIZE; slot++) {
       var piece = g_reserve[slot];
       if ((piece & friend) == 0) continue;
       for (var to = 0; to < 256; to++) {
           if (g_board[to] != 0) continue;
           if ((piece & TYPE_MASK) == piecePawn) {
               var row = to & 0xF0;
               if (row == 0x50 && !g_toMove) continue;
               if (row == 0x20 && g_toMove) continue;
           }
           moveStack[moveStack.length] = GenerateDrop(to, slot);
       }
   }
}

function See(move) {
    const from = move & 0xFF;
    const to = (move >> 8) & 0xFF;

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
    const inc = (fromPiece & colorWhite) ? -16 : 16; // Note: this is capture direction from to, so reversed from normal move direction
    if ((g_board[to + inc] & PIECE_MASK) == (piecePawn | them)) {
        return false;
    }

    const themAttacks = new Array();

    // Knight attacks 
    // If any opponent knights can capture back, and the deficit we have to make up is greater than the knights value, 
    // it's not worth it.  We can capture on this square again, and the opponent doesn't have to capture back. 
    const captureDeficit = fromValue - toValue;

    // Slider attacks
    g_board[from] = 0;
    for (let pieceType = pieceBishop; pieceType <= pieceGold; pieceType++) {
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
    if ((g_board[to - inc] & PIECE_MASK) == (piecePawn | us)) {
        g_board[from] = fromPiece;
        return true;
    }

    // King attacks
    SeeAddSliderAttacks(to, them, themAttacks, pieceKing);

    // Our attacks
    const usAttacks = new Array();
    for (let pieceType = pieceBishop; pieceType <= pieceKing; pieceType++) {
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
//      SeeAddXrayAttack(to, capturingPieceSquare, us, usAttacks, themAttacks);

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
//      SeeAddXrayAttack(to, capturingPieceSquare, us, usAttacks, themAttacks);
    }
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
//  console.log(e.data);
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
        let s = e.data.substr(9, e.data.length - 9);
        s = s.replaceAll('-', ' ');
        ResetGame();
        const result = InitializeFromFen(s);
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
