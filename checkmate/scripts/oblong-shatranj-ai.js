"use strict";

(function() {

Dagaz.Model.WIDTH         = 4;
Dagaz.Model.HEIGHT        = 16;

Dagaz.AI.NOISE_FACTOR     = 5;

Dagaz.AI.PIECE_MASK       = 0xF;
Dagaz.AI.TYPE_MASK        = 0x7;
Dagaz.AI.PLAYERS_MASK     = 0x18;
Dagaz.AI.COUNTER_SIZE     = 4;
Dagaz.AI.TYPE_SIZE        = 3;
Dagaz.AI.VECTORDELTA_SIZE = 512;

Dagaz.AI.colorBlack       = 0x10;
Dagaz.AI.colorWhite       = 0x08;

var pieceEmpty            = 0x00;
var pieceSarbaz           = 0x01;
var pieceAlfil            = 0x02;
var pieceFers             = 0x03;
var pieceAsb              = 0x04;
var pieceRokh             = 0x05;
var pieceShah             = 0x06;
var pieceNo               = 0x80;

var moveflagPromotion     = 0x10 << 16;

var g_moveUndoStack = new Array();

var g_mobUnit;
var materialTable = [0, 800, 1500, 2500, 3350, 5000, 600000];

Dagaz.AI.pieceAdj = [
[   0,    0,    0,    0, // pieceEmpty
    0,    0,    0,    0,    
    0,    0,    0,    0,    
    0,    0,    0,    0,    
    0,    0,    0,    0, 
    0,    0,    0,    0,    
    0,    0,    0,    0,    
    0,    0,    0,    0,    
    0,    0,    0,    0,    
    0,    0,    0,    0,    
    0,    0,    0,    0,    
    0,    0,    0,    0,    
    0,    0,    0,    0,    
    0,    0,    0,    0,    
    0,    0,    0,    0,   
    0,    0,    0,    0
]];

var pieceSquareAdj = new Array(8);
var flipTable = new Array(256);

var g_vectorDelta  = new Array(Dagaz.AI.VECTORDELTA_SIZE);

var g_bishopDeltas = [62, 66, -62, -66];
var g_knightDeltas = [63, 65, -63, -65, 30, 34, -30, -34];
var g_rookDeltas   = [1, 32, -1, -32];
var g_queenDeltas  = [31, 33, -31, -33];
var g_kingDeltas   = [1, 32, -1, -32, 31, 33, -31, -33];

var g_seeValues    = [0, 1, 1, 2, 3, 9, 900, 0,
                      0, 1, 1, 2, 3, 9, 900, 0];

function GetRow(square) {
    return (square - 8) & 0x0F;
}

function GetCol(square) {
    return (((square - 8) & 0xF0) >> 5) - 2;
}

function MakeSquare(row, column) {
    return ((column + 2) << 5) + (row + 8);
}

function FormatSquare(square) {
    var letters = ['a', 'b', 'c', 'd'];
    return letters[GetCol(square)] + (Dagaz.Model.HEIGHT - GetRow(square));
}

Dagaz.AI.FormatMove = function(move, color) {
    var result = FormatSquare(move & 0xFF) + FormatSquare((move >> 8) & 0xFF);
    return result;
}

function Mobility(color) {
    var result = 0;
    var from, to, mob, pieceIdx;
    var enemy = color == Dagaz.AI.colorWhite ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;
    var mobUnit = color == Dagaz.AI.colorWhite ? g_mobUnit[0] : g_mobUnit[1];

    // Knight mobility
    mob = -3;
    pieceIdx = (color | pieceAsb) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        mob += mobUnit[Dagaz.AI.g_board[from + 63]];
        mob += mobUnit[Dagaz.AI.g_board[from + 65]];
        mob += mobUnit[Dagaz.AI.g_board[from + 30]];
        mob += mobUnit[Dagaz.AI.g_board[from + 34]];
        mob += mobUnit[Dagaz.AI.g_board[from - 63]];
        mob += mobUnit[Dagaz.AI.g_board[from - 65]];
        mob += mobUnit[Dagaz.AI.g_board[from - 30]];
        mob += mobUnit[Dagaz.AI.g_board[from - 34]];
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    result += 65 * mob;

    // Bishop mobility
    mob = -4;
    pieceIdx = (color | pieceAlfil) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        mob += mobUnit[Dagaz.AI.g_board[from + 62]];
        mob += mobUnit[Dagaz.AI.g_board[from + 66]];
        mob += mobUnit[Dagaz.AI.g_board[from - 62]];
        mob += mobUnit[Dagaz.AI.g_board[from - 66]];
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    result += 44 * mob;

    // Rook mobility
    mob = -4;
    pieceIdx = (color | pieceRokh) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from - 1;  while (Dagaz.AI.g_board[to] == 0) { to--; mob++;}  if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from + 1;  while (Dagaz.AI.g_board[to] == 0) { to++; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from + 32; while (Dagaz.AI.g_board[to] == 0) { to += 32; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        to = from - 32; while (Dagaz.AI.g_board[to] == 0) { to -= 32; mob++; } if (Dagaz.AI.g_board[to] & enemy) mob++;
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    result += 25 * mob;

    // Queen mobility
    mob = -2;
    pieceIdx = (color | pieceFers) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        mob += mobUnit[Dagaz.AI.g_board[from + 31]];
        mob += mobUnit[Dagaz.AI.g_board[from + 33]];
        mob += mobUnit[Dagaz.AI.g_board[from - 31]];
        mob += mobUnit[Dagaz.AI.g_board[from - 33]];
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
    result += 22 * mob;

    return result;
}

Dagaz.AI.Evaluate = function() {
    var curEval = Dagaz.AI.g_baseEval;
    var evalAdjust = 0;

    // Black queen gone, then cancel white's penalty for king movement
    if (Dagaz.AI.g_pieceList[pieceRokh << Dagaz.AI.COUNTER_SIZE] == 0) {
        var kingPos = Dagaz.AI.g_pieceList[(Dagaz.AI.colorWhite | pieceShah) << Dagaz.AI.COUNTER_SIZE];
        if (kingPos != 0) {
            evalAdjust -= pieceSquareAdj[pieceShah][kingPos];
        }
    }

    // White queen gone, then cancel black's penalty for king movement
    if (Dagaz.AI.g_pieceList[(Dagaz.AI.colorWhite | pieceRokh) << Dagaz.AI.COUNTER_SIZE] == 0) {
        var kingPos = flipTable[Dagaz.AI.g_pieceList[pieceShah << Dagaz.AI.COUNTER_SIZE]];
        if (kingPos != 0) {
            evalAdjust += pieceSquareAdj[pieceShah][kingPos];
        }
    }

    // Black bishop pair
    if (Dagaz.AI.g_pieceCount[pieceAlfil] >= 2)
        evalAdjust -= 100;
    // White bishop pair
    if (Dagaz.AI.g_pieceCount[pieceAlfil | Dagaz.AI.colorWhite] >= 2)
        evalAdjust += 100;

    var mobility = Mobility(Dagaz.AI.colorWhite) - Mobility(0);

    if (Dagaz.AI.g_toMove == 0) {
        // Black
        curEval -= mobility;
        curEval -= evalAdjust;
    } else {
        curEval += mobility;
        curEval += evalAdjust;
    }
    
    return curEval;
}

Dagaz.AI.ScoreMove = function(move){
    var moveTo = (move >> 8) & 0xFF;
    var captured = Dagaz.AI.g_board[moveTo] & Dagaz.AI.TYPE_MASK;
    var piece = Dagaz.AI.g_board[move & 0xFF];
    var score;
    if (captured != pieceEmpty) {
        var pieceType = piece & Dagaz.AI.TYPE_MASK;
        score = (captured << 5) - pieceType;
    } else {
        score = Dagaz.AI.historyTable[piece & Dagaz.AI.PIECE_MASK][moveTo];
    }
    return score;
}

Dagaz.AI.IsHashMoveValid = function(hashMove) {
    var from = hashMove & 0xFF;
    var to = (hashMove >> 8) & 0xFF;
    var ourPiece = Dagaz.AI.g_board[from];
    var pieceType = ourPiece & Dagaz.AI.TYPE_MASK;
    if (pieceType < pieceSarbaz || pieceType > pieceShah) return false;
    // Can't move a piece we don't control
    if (Dagaz.AI.g_toMove != (ourPiece & Dagaz.AI.colorWhite)) return false;
    // Can't move to a square that has something of the same color
    if (Dagaz.AI.g_board[to] != 0 && (Dagaz.AI.g_toMove == (Dagaz.AI.g_board[to] & Dagaz.AI.colorWhite))) return false;
    if (pieceType == pieceSarbaz) {
        var row = GetRow(to);
        // Valid moves are push, capture, double push, promotions
        var dir = row - GetRow(from);
        if ((Dagaz.AI.g_toMove == Dagaz.AI.colorWhite) != (dir < 0))  {
            // Pawns have to move in the right direction
            return false;
        }

        if (((row == 15 && !Dagaz.AI.g_toMove) || (row == 0 && Dagaz.AI.g_toMove)) != (hashMove & moveflagPromotion)) {
            // Handle promotions
            return false;
        }

        if (dir == -1 || dir == 1) {
            // White/Black push
            return Dagaz.AI.g_board[to] == 0;
        } else if (dir == -31 || dir == -33 || dir == 31 || dir == 33) {
            // White/Black capture
            return Dagaz.AI.g_board[to] != 0;
        } else {
            return false;
        }

        return true;
    } else {
        // This validates that this piece type can actually make the attack
        if (hashMove >> 16) return false;
        return IsSquareAttackableFrom(to, from);
    }
}

Dagaz.AI.isNoZugzwang = function() {
    return Dagaz.AI.g_pieceCount[pieceAlfil | Dagaz.AI.g_toMove] != 0 ||
           Dagaz.AI.g_pieceCount[pieceAsb   | Dagaz.AI.g_toMove] != 0 ||
           Dagaz.AI.g_pieceCount[pieceRokh  | Dagaz.AI.g_toMove] != 0 ||
           Dagaz.AI.g_pieceCount[pieceFers  | Dagaz.AI.g_toMove] != 0;
}

function MakeTable(table) {
    var result = new Array(256);
    for (var i = 0; i < 256; i++) {
        result[i] = 0;
    }
    for (var row = 0; row < Dagaz.Model.HEIGHT; row++) {
        for (var col = 0; col < Dagaz.Model.WIDTH; col++) {
            result[MakeSquare(row, col)] = table[row * Dagaz.Model.WIDTH + col];
        }
    }
    return result;
}

function onBoard(target) {
  if (target < 0) return false;
  if (GetRow(target) >= Dagaz.Model.HEIGHT) return false;
  if (GetCol(target) >= Dagaz.Model.WIDTH)  return false;
  return true;
}

var ResetGame = Dagaz.AI.ResetGame;

Dagaz.AI.ResetGame = function() {

  ResetGame();

  for (var row = 0; row < Dagaz.Model.HEIGHT; row++) {
       for (var col = 0; col < Dagaz.Model.WIDTH; col++) {
            var square = MakeSquare(row, col);
            flipTable[square] = MakeSquare((Dagaz.Model.HEIGHT - 1) - row, col);
       }
  }

  pieceSquareAdj[pieceEmpty]  = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceSarbaz] = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceAlfil]  = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceFers]   = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceAsb]    = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceRokh]   = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceShah]   = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);

  var pieceDeltas = [[], [], g_bishopDeltas, g_queenDeltas, g_knightDeltas, g_rookDeltas, g_kingDeltas];

  for (var i = 0; i < Dagaz.AI.VECTORDELTA_SIZE; i++) {
      g_vectorDelta[i] = new Object();
      g_vectorDelta[i].delta = 0;
      g_vectorDelta[i].pieceMask = new Array(2);
      g_vectorDelta[i].pieceMask[0] = 0;
      g_vectorDelta[i].pieceMask[1] = 0;
  }

  // Initialize the vector delta table    
  for (var row = 0; row < Dagaz.Model.HEIGHT; row++) 
      for (var col = 0; col < Dagaz.Model.WIDTH; col++) {
            var square = MakeSquare(row, col);
            
            // Pawn moves
            var index = square - (square - 33) + (Dagaz.AI.VECTORDELTA_SIZE >> 1);
            g_vectorDelta[index].pieceMask[Dagaz.AI.colorWhite >> Dagaz.AI.TYPE_SIZE] |= (1 << pieceSarbaz);
            index = square - (square + 31) + (Dagaz.AI.VECTORDELTA_SIZE >> 1);
            g_vectorDelta[index].pieceMask[Dagaz.AI.colorWhite >> Dagaz.AI.TYPE_SIZE] |= (1 << pieceSarbaz);
            
            index = square - (square + 33) + (Dagaz.AI.VECTORDELTA_SIZE >> 1);
            g_vectorDelta[index].pieceMask[0] |= (1 << pieceSarbaz);
            index = square - (square - 31) + (Dagaz.AI.VECTORDELTA_SIZE >> 1);
            g_vectorDelta[index].pieceMask[0] |= (1 << pieceSarbaz);
            
            for (var i = pieceAlfil; i <= pieceShah; i++) {
                for (var dir = 0; dir < pieceDeltas[i].length; dir++) {
                    var target = square + pieceDeltas[i][dir];
                    while (onBoard(target)) {
                        index = square - target + (Dagaz.AI.VECTORDELTA_SIZE >> 1);
                        
                        g_vectorDelta[index].pieceMask[Dagaz.AI.colorWhite >> Dagaz.AI.TYPE_SIZE] |= (1 << i);
                        g_vectorDelta[index].pieceMask[0] |= (1 << i);
                        
                        var flip = -1;
                        if (square < target) 
                            flip = 1;
                        
                        if (GetRow(square) == GetRow(target)) {
                            // On the same row
                            g_vectorDelta[index].delta = flip * 32;
                        } else if (GetCol(square) == GetCol(target)) {
                            // On the same column
                            g_vectorDelta[index].delta = flip * 1;
                        } else if ((square % 31) == (target % 31)) {
                            g_vectorDelta[index].delta = flip * 31;
                        } else if ((square % 33) == (target % 33)) {
                            g_vectorDelta[index].delta = flip * 33;
                        }

                        if ((i == pieceAsb) || (i == pieceAlfil) || (i == pieceFers)) {
                            g_vectorDelta[index].delta = pieceDeltas[i][dir];
                            break;
                        }

                        if (i == pieceShah)
                            break;

                        target += pieceDeltas[i][dir];
                    }
                }
          }
    }

    InitializeEval();
}

function InitializeEval() {
    g_mobUnit = new Array(2);
    for (var i = 0; i < 2; i++) {
        g_mobUnit[i] = new Array();
        var enemy = i == 0 ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;
        var friend = i == 0 ? Dagaz.AI.colorWhite : Dagaz.AI.colorBlack;
        g_mobUnit[i][0] = 1;
        g_mobUnit[i][0x80] = 0;
        g_mobUnit[i][enemy  | pieceSarbaz] = 1;
        g_mobUnit[i][enemy  | pieceAlfil]  = 1;
        g_mobUnit[i][enemy  | pieceFers]   = 1;
        g_mobUnit[i][enemy  | pieceAsb]    = 2;
        g_mobUnit[i][enemy  | pieceRokh]   = 4;
        g_mobUnit[i][enemy  | pieceShah]   = 6;
        g_mobUnit[i][friend | pieceSarbaz] = 0;
        g_mobUnit[i][friend | pieceAlfil]  = 0;
        g_mobUnit[i][friend | pieceFers]   = 0;
        g_mobUnit[i][friend | pieceAsb]    = 0;
        g_mobUnit[i][friend | pieceRokh]   = 0;
        g_mobUnit[i][friend | pieceShah]   = 0;
    }
}

Dagaz.AI.InitializeFromFen = function(fen) {
    var chunks = fen.split(' ');
    
    for (var i = 0; i < 256; i++) 
        Dagaz.AI.g_board[i] = pieceNo;
    
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
                    Dagaz.AI.g_board[MakeSquare(row, col)] = 0;
                    col++;
                }
            }
            else {
                var isBlack = c >= 'a' && c <= 'z';
                var piece = isBlack ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;
                if (!isBlack) 
                    c = pieces.toLowerCase().charAt(i);
                switch (c) {
                    case 'p':
                        piece |= pieceSarbaz;
                        break;
                    case 'b':
                        piece |= pieceAlfil;
                        break;
                    case 'n':
                        piece |= pieceAsb;
                        break;
                    case 'r':
                        piece |= pieceRokh;
                        break;
                    case 'q':
                        piece |= pieceFers;
                        break;
                    case 'k':
                        piece |= pieceShah;
                        break;
                }
                
                Dagaz.AI.g_board[MakeSquare(row, col)] = piece;
                col++;
            }
        }
    }
    
    Dagaz.AI.InitializePieceList();
    
    Dagaz.AI.g_toMove = chunks[1].charAt(0) == 'w' ? Dagaz.AI.colorWhite : 0;
    var them = Dagaz.AI.colorWhite - Dagaz.AI.g_toMove;
    
    var hashResult = Dagaz.AI.SetHash();
    Dagaz.AI.g_hashKeyLow = hashResult.hashKeyLow;
    Dagaz.AI.g_hashKeyHigh = hashResult.hashKeyHigh;

    Dagaz.AI.g_baseEval = 0;
    for (var i = 0; i < 256; i++) {
        if (Dagaz.AI.g_board[i] & Dagaz.AI.colorWhite) {
            Dagaz.AI.g_baseEval += pieceSquareAdj[Dagaz.AI.g_board[i] & Dagaz.AI.TYPE_MASK][i];
            Dagaz.AI.g_baseEval += materialTable[Dagaz.AI.g_board[i] & Dagaz.AI.TYPE_MASK];
        } else if (Dagaz.AI.g_board[i] & Dagaz.AI.colorBlack) {
            Dagaz.AI.g_baseEval -= pieceSquareAdj[Dagaz.AI.g_board[i] & Dagaz.AI.TYPE_MASK][flipTable[i]];
            Dagaz.AI.g_baseEval -= materialTable[Dagaz.AI.g_board[i] & Dagaz.AI.TYPE_MASK];
        }
    }
    if (!Dagaz.AI.g_toMove) Dagaz.AI.g_baseEval = -Dagaz.AI.g_baseEval;

    Dagaz.AI.g_move50 = 0;
    Dagaz.AI.g_inCheck = IsSquareAttackable(Dagaz.AI.g_pieceList[(Dagaz.AI.g_toMove | pieceShah) << Dagaz.AI.COUNTER_SIZE], them);

    // Check for king capture (invalid FEN)
/*  if (IsSquareAttackable(Dagaz.AI.g_pieceList[(them | pieceShah) << Dagaz.AI.COUNTER_SIZE], Dagaz.AI.g_toMove)) {
        return 'Invalid FEN: Can capture king';
    }*/

    // Checkmate/stalemate
    if (GenerateValidMoves().length == 0) {
        return Dagaz.AI.g_inCheck ? 'Checkmate' : 'Stalemate';
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

Dagaz.AI.MakeMove = function(move) {
    var me = Dagaz.AI.g_toMove >> Dagaz.AI.TYPE_SIZE;
    var otherColor = Dagaz.AI.colorWhite - Dagaz.AI.g_toMove; 
    
    var flags = move & 0xFF0000;
    var to = (move >> 8) & 0xFF;
    var from = move & 0xFF;
    var captured = Dagaz.AI.g_board[to];
    var piece = Dagaz.AI.g_board[from];

    g_moveUndoStack[Dagaz.AI.g_moveCount] = new UndoHistory(Dagaz.AI.g_inCheck, Dagaz.AI.g_baseEval, Dagaz.AI.g_hashKeyLow, Dagaz.AI.g_hashKeyHigh, Dagaz.AI.g_move50, captured);
    Dagaz.AI.g_moveCount++;

    if (captured) {
        // Remove our piece from the piece list
        var capturedType = captured & Dagaz.AI.PIECE_MASK;
        Dagaz.AI.g_pieceCount[capturedType]--;
        var lastPieceSquare = Dagaz.AI.g_pieceList[(capturedType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceCount[capturedType]];
        Dagaz.AI.g_pieceIndex[lastPieceSquare] = Dagaz.AI.g_pieceIndex[to];
        Dagaz.AI.g_pieceList[(capturedType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceIndex[lastPieceSquare]] = lastPieceSquare;
        Dagaz.AI.g_pieceList[(capturedType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceCount[capturedType]] = 0;

        Dagaz.AI.g_baseEval += materialTable[captured & Dagaz.AI.TYPE_MASK];
        Dagaz.AI.g_baseEval += pieceSquareAdj[captured & Dagaz.AI.TYPE_MASK][me ? flipTable[to] : to];

        Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[to][capturedType];
        Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[to][capturedType];
        Dagaz.AI.g_move50 = 0;
    }

    Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[from][piece & Dagaz.AI.PIECE_MASK];
    Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[from][piece & Dagaz.AI.PIECE_MASK];
    Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[to][piece & Dagaz.AI.PIECE_MASK];
    Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[to][piece & Dagaz.AI.PIECE_MASK];
    Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristBlackLow;
    Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristBlackHigh;
    
    Dagaz.AI.g_baseEval -= pieceSquareAdj[piece & Dagaz.AI.TYPE_MASK][me == 0 ? flipTable[from] : from];
    
    // Move our piece in the piece list
    Dagaz.AI.g_pieceIndex[to] = Dagaz.AI.g_pieceIndex[from];
    Dagaz.AI.g_pieceList[((piece & Dagaz.AI.PIECE_MASK) << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceIndex[to]] = to;

    if (flags & moveflagPromotion) {
        var newPiece = piece & (~Dagaz.AI.TYPE_MASK);
        newPiece |= pieceFers;

        Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[to][piece & Dagaz.AI.PIECE_MASK];
        Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[to][piece & Dagaz.AI.PIECE_MASK];
        Dagaz.AI.g_board[to] = newPiece;
        Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[to][newPiece & Dagaz.AI.PIECE_MASK];
        Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[to][newPiece & Dagaz.AI.PIECE_MASK];
        
        Dagaz.AI.g_baseEval += pieceSquareAdj[newPiece & Dagaz.AI.TYPE_MASK][me == 0 ? flipTable[to] : to];
        Dagaz.AI.g_baseEval -= materialTable[pieceSarbaz];
        Dagaz.AI.g_baseEval += materialTable[newPiece & Dagaz.AI.TYPE_MASK];

        var pawnType = piece & Dagaz.AI.PIECE_MASK;
        var promoteType = newPiece & Dagaz.AI.PIECE_MASK;

        Dagaz.AI.g_pieceCount[pawnType]--;

        var lastPawnSquare = Dagaz.AI.g_pieceList[(pawnType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceCount[pawnType]];
        Dagaz.AI.g_pieceIndex[lastPawnSquare] = Dagaz.AI.g_pieceIndex[to];
        Dagaz.AI.g_pieceList[(pawnType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceIndex[lastPawnSquare]] = lastPawnSquare;
        Dagaz.AI.g_pieceList[(pawnType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceCount[pawnType]] = 0;
        Dagaz.AI.g_pieceIndex[to] = Dagaz.AI.g_pieceCount[promoteType];
        Dagaz.AI.g_pieceList[(promoteType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceIndex[to]] = to;
        Dagaz.AI.g_pieceCount[promoteType]++;
    } else {
        Dagaz.AI.g_board[to] = Dagaz.AI.g_board[from];
        Dagaz.AI.g_baseEval += pieceSquareAdj[piece & Dagaz.AI.TYPE_MASK][me == 0 ? flipTable[to] : to];
    }
    Dagaz.AI.g_board[from] = pieceEmpty;

    Dagaz.AI.g_toMove = otherColor;
    Dagaz.AI.g_baseEval = -Dagaz.AI.g_baseEval;
    
    var kingPos = Dagaz.AI.g_pieceList[(pieceShah | (Dagaz.AI.colorWhite - Dagaz.AI.g_toMove)) << Dagaz.AI.COUNTER_SIZE];
    if ((kingPos != 0) && IsSquareAttackable(kingPos, otherColor)) {
        Dagaz.AI.UnmakeMove(move);
        return false;
    }
    
    Dagaz.AI.g_inCheck = false;
    var kingPos = Dagaz.AI.g_pieceList[(pieceShah | Dagaz.AI.g_toMove) << Dagaz.AI.COUNTER_SIZE];
    if (kingPos != 0) {
        Dagaz.AI.g_inCheck = IsSquareAttackable(kingPos, Dagaz.AI.colorWhite - Dagaz.AI.g_toMove);
    }

    Dagaz.AI.g_repMoveStack[Dagaz.AI.g_moveCount - 1] = Dagaz.AI.g_hashKeyLow;
    Dagaz.AI.g_move50++;

    return true;
}

Dagaz.AI.UnmakeMove = function(move) {
    Dagaz.AI.g_toMove = Dagaz.AI.colorWhite - Dagaz.AI.g_toMove;
    Dagaz.AI.g_baseEval = -Dagaz.AI.g_baseEval;
    
    Dagaz.AI.g_moveCount--;
    Dagaz.AI.g_inCheck = g_moveUndoStack[Dagaz.AI.g_moveCount].inCheck;
    Dagaz.AI.g_baseEval = g_moveUndoStack[Dagaz.AI.g_moveCount].baseEval;
    Dagaz.AI.g_hashKeyLow = g_moveUndoStack[Dagaz.AI.g_moveCount].hashKeyLow;
    Dagaz.AI.g_hashKeyHigh = g_moveUndoStack[Dagaz.AI.g_moveCount].hashKeyHigh;
    Dagaz.AI.g_move50 = g_moveUndoStack[Dagaz.AI.g_moveCount].move50;
    
    var otherColor = Dagaz.AI.colorWhite - Dagaz.AI.g_toMove;
    var me = Dagaz.AI.g_toMove >> Dagaz.AI.TYPE_SIZE;
    var them = otherColor >> Dagaz.AI.TYPE_SIZE;
    
    var flags = move & 0xFF0000;
    var captured = g_moveUndoStack[Dagaz.AI.g_moveCount].captured;
    var to = (move >> 8) & 0xFF;
    var from = move & 0xFF;
    
    var piece = Dagaz.AI.g_board[to];
    
    if (flags & moveflagPromotion) {
        piece = (Dagaz.AI.g_board[to] & (~Dagaz.AI.TYPE_MASK)) | pieceSarbaz;
        Dagaz.AI.g_board[from] = piece;

        var pawnType = Dagaz.AI.g_board[from] & Dagaz.AI.PIECE_MASK;
        var promoteType = Dagaz.AI.g_board[to] & Dagaz.AI.PIECE_MASK;

        Dagaz.AI.g_pieceCount[promoteType]--;

        var lastPromoteSquare = Dagaz.AI.g_pieceList[(promoteType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceCount[promoteType]];
        Dagaz.AI.g_pieceIndex[lastPromoteSquare] = Dagaz.AI.g_pieceIndex[to];
        Dagaz.AI.g_pieceList[(promoteType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceIndex[lastPromoteSquare]] = lastPromoteSquare;
        Dagaz.AI.g_pieceList[(promoteType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceCount[promoteType]] = 0;
        Dagaz.AI.g_pieceIndex[to] = Dagaz.AI.g_pieceCount[pawnType];
        Dagaz.AI.g_pieceList[(pawnType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceIndex[to]] = to;
        Dagaz.AI.g_pieceCount[pawnType]++;
    } else {
        Dagaz.AI.g_board[from] = Dagaz.AI.g_board[to];
    }

    Dagaz.AI.g_board[to] = captured;

    // Move our piece in the piece list
    Dagaz.AI.g_pieceIndex[from] = Dagaz.AI.g_pieceIndex[to];
    Dagaz.AI.g_pieceList[((piece & Dagaz.AI.PIECE_MASK) << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceIndex[from]] = from;

    if (captured) {
        // Restore our piece to the piece list
        var captureType = captured & Dagaz.AI.PIECE_MASK;
        Dagaz.AI.g_pieceIndex[to] = Dagaz.AI.g_pieceCount[captureType];
        Dagaz.AI.g_pieceList[(captureType << Dagaz.AI.COUNTER_SIZE) | Dagaz.AI.g_pieceCount[captureType]] = to;
        Dagaz.AI.g_pieceCount[captureType]++;
    }
}

function IsSquareOnPieceLine(target, from) {
    var index = from - target + (Dagaz.AI.VECTORDELTA_SIZE >> 1);
    var piece = Dagaz.AI.g_board[from];
    return (g_vectorDelta[index].pieceMask[(piece >> Dagaz.AI.TYPE_SIZE) & 1] & (1 << (piece & Dagaz.AI.TYPE_MASK))) ? true : false;
}

function IsSquareAttackableFrom(target, from){
    var index = from - target + (Dagaz.AI.VECTORDELTA_SIZE >> 1);
    var piece = Dagaz.AI.g_board[from];
    if (g_vectorDelta[index].pieceMask[(piece >> Dagaz.AI.TYPE_SIZE) & 1] & (1 << (piece & Dagaz.AI.TYPE_MASK))) {
        // Yes, this square is pseudo-attackable.  Now, check for real attack
        var inc = g_vectorDelta[index].delta;
        do {
            from += inc;
            if (from == target) return true;
        } while (Dagaz.AI.g_board[from] == 0);
    }
    return false;
}

function IsSquareAttackable(target, color) {
	// Attackable by pawns?
	var inc = color ? -1 : 1;
	var pawn = (color ? Dagaz.AI.colorWhite : Dagaz.AI.colorBlack) | pieceSarbaz;
	if (Dagaz.AI.g_board[target - 32 + inc] == pawn) return true;
	if (Dagaz.AI.g_board[target + 32 + inc] == pawn) return true;
	// Attackable by pieces?
	for (var i = pieceAlfil; i <= pieceShah; i++) {
        var index = (color | i) << Dagaz.AI.COUNTER_SIZE;
        var square = Dagaz.AI.g_pieceList[index];
        while (square != 0) {
            if (IsSquareAttackableFrom(target, square)) return true;
            square = Dagaz.AI.g_pieceList[++index];
        }
    }
    return false;
}

function GenerateMove(from, to, flags) {
    return from | (to << 8) | flags;
}

function GenerateValidMoves() {
    var moveList = new Array();
    var allMoves = new Array();
    Dagaz.AI.GenerateCaptureMoves(allMoves, null);
    Dagaz.AI.GenerateAllMoves(allMoves);
    for (var i = allMoves.length - 1; i >= 0; i--) {
        if (Dagaz.AI.MakeMove(allMoves[i])) {
            moveList[moveList.length] = allMoves[i];
            Dagaz.AI.UnmakeMove(allMoves[i]);
        }
    }
    return moveList;
}

Dagaz.AI.GenerateAllMoves = function(moveStack) {
    var from, to, pieceIdx;

    // Pawn quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceSarbaz) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        GeneratePawnMoves(moveStack, from);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // Knight quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceAsb) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + 63; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 65; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 30; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 34; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 63; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 65; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 30; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 34; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // Bishop quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceAlfil) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + 62; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 66; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 62; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 66; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // Rook quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceRokh) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + 1;  while (Dagaz.AI.g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to++; }
        to = from + 32; while (Dagaz.AI.g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to += 32; }
        to = from - 1;  while (Dagaz.AI.g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to--; }
        to = from - 32; while (Dagaz.AI.g_board[to] == 0) { moveStack[moveStack.length] = GenerateMove(from, to, 0); to -= 32; }
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
	
    // Queen quiet moves
    pieceIdx = (Dagaz.AI.g_toMove | pieceFers) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + 31; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 33; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 31; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 33; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
	
    // King quiet moves
    {
        pieceIdx = (Dagaz.AI.g_toMove | pieceShah) << Dagaz.AI.COUNTER_SIZE;
        from = Dagaz.AI.g_pieceList[pieceIdx];
        to = from - 31; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 33; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 31; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 33; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 1;  if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 32; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 1;  if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 32; if (Dagaz.AI.g_board[to] == 0) moveStack[moveStack.length] = GenerateMove(from, to, 0);
    }
}

Dagaz.AI.GenerateCaptureMoves = function(moveStack) {
    var from, to, piece, pieceIdx;
    var inc = (Dagaz.AI.g_toMove == Dagaz.AI.colorWhite) ? -1 : 1;
    var enemy = Dagaz.AI.g_toMove == Dagaz.AI.colorWhite ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;

    // Pawn captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceSarbaz) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from - 32 + inc;
        if (Dagaz.AI.g_board[to] & enemy) {
            MovePawnTo(moveStack, from, to);
        }

        to = from + 32 + inc;
        if (Dagaz.AI.g_board[to] & enemy) {
            MovePawnTo(moveStack, from, to);
        }

        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    // Knight captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceAsb) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + 63; if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 65; if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 30; if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 34; if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 63; if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 65; if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 30; if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 34; if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
	
    // Bishop captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceAlfil) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + 62; if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 66; if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 62; if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 66; if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
	
    // Rook captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceRokh) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from; do { to--; } while (Dagaz.AI.g_board[to] == 0); if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from; do { to++; } while (Dagaz.AI.g_board[to] == 0); if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from; do { to -= 32; } while (Dagaz.AI.g_board[to] == 0); if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from; do { to += 32; } while (Dagaz.AI.g_board[to] == 0); if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
	
    // Queen captures
    pieceIdx = (Dagaz.AI.g_toMove | pieceFers) << Dagaz.AI.COUNTER_SIZE;
    from = Dagaz.AI.g_pieceList[pieceIdx++];
    while (from != 0) {
        to = from + 31; if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 33; if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 31; if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 33; if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        from = Dagaz.AI.g_pieceList[pieceIdx++];
    }
	
    // King captures
    {
        pieceIdx = (Dagaz.AI.g_toMove | pieceShah) << Dagaz.AI.COUNTER_SIZE;
        from = Dagaz.AI.g_pieceList[pieceIdx];
        to = from - 31; if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 33; if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 31; if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 33; if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 1;  if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from - 32; if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 1;  if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
        to = from + 32; if (Dagaz.AI.g_board[to] & enemy) moveStack[moveStack.length] = GenerateMove(from, to, 0);
    }
}

function MovePawnTo(moveStack, start, square) {
    var row = GetRow(square);
    if ((row == 0) || (row == 15)) {
        moveStack[moveStack.length] = GenerateMove(start, square, moveflagPromotion);
    } else {
        moveStack[moveStack.length] = GenerateMove(start, square, 0);
    }
}

function GeneratePawnMoves(moveStack, from) {
    var piece = Dagaz.AI.g_board[from];
    var color = piece & Dagaz.AI.colorWhite;
    var inc = (color == Dagaz.AI.colorWhite) ? -1 : 1;
    
    // Quiet pawn moves
    var to = from + inc;
    if (Dagaz.AI.g_board[to] == 0) {
        MovePawnTo(moveStack, from, to, pieceEmpty);
    }
}

Dagaz.AI.See = function(move) {
    var from = move & 0xFF;
    var to = (move >> 8) & 0xFF;

    var fromPiece = Dagaz.AI.g_board[from];

    var fromValue = g_seeValues[fromPiece & Dagaz.AI.PIECE_MASK];
    var toValue = g_seeValues[Dagaz.AI.g_board[to] & Dagaz.AI.PIECE_MASK];

    if (fromValue <= toValue) {
        return true;
    }

    if (move >> 16) {
        // Castles, promotion, ep are always good
        return true;
    }

    var us = (fromPiece & Dagaz.AI.colorWhite) ? Dagaz.AI.colorWhite : 0;
    var them = Dagaz.AI.colorWhite - us;

    // Pawn attacks 
    // If any opponent pawns can capture back, this capture is probably not worthwhile (as we must be using knight or above).
    var inc = (fromPiece & Dagaz.AI.colorWhite) ? -1 : 1; // Note: this is capture direction from to, so reversed from normal move direction
    if (((Dagaz.AI.g_board[to - 32 + inc] & Dagaz.AI.PIECE_MASK) == (pieceSarbaz | them)) ||
        ((Dagaz.AI.g_board[to + 32 + inc] & Dagaz.AI.PIECE_MASK) == (pieceSarbaz | them))) {
        return false;
    }

    var themAttacks = new Array();

    // Knight attacks 
    // If any opponent knights can capture back, and the deficit we have to make up is greater than the knights value, 
    // it's not worth it.  We can capture on this square again, and the opponent doesn't have to capture back. 
    var captureDeficit = fromValue - toValue;
    SeeAddKnightAttacks(to, them, themAttacks);
    if (themAttacks.length != 0 && captureDeficit > g_seeValues[pieceAsb]) {
        return false;
    }

    // Slider attacks
    Dagaz.AI.g_board[from] = 0;
    for (var pieceType = pieceAlfil; pieceType <= pieceFers; pieceType++) {
        if (SeeAddSliderAttacks(to, them, themAttacks, pieceType)) {
            if (captureDeficit > g_seeValues[pieceType]) {
                Dagaz.AI.g_board[from] = fromPiece;
                return false;
            }
        }
    }

    // Pawn defenses 
    // At this point, we are sure we are making a "losing" capture.  The opponent can not capture back with a 
    // pawn.  They cannot capture back with a minor/major and stand pat either.  So, if we can capture with 
    // a pawn, it's got to be a winning or equal capture. 
    if (((Dagaz.AI.g_board[to - inc + 1] & Dagaz.AI.PIECE_MASK) == (pieceSarbaz | us)) ||
        ((Dagaz.AI.g_board[to - inc - 1] & Dagaz.AI.PIECE_MASK) == (pieceSarbaz | us))) {
        Dagaz.AI.g_board[from] = fromPiece;
        return true;
    }

    // King attacks
    SeeAddSliderAttacks(to, them, themAttacks, pieceShah);

    // Our attacks
    var usAttacks = new Array();
    SeeAddKnightAttacks(to, us, usAttacks);
    for (var pieceType = pieceAlfil; pieceType <= pieceShah; pieceType++) {
        SeeAddSliderAttacks(to, us, usAttacks, pieceType);
    }

    Dagaz.AI.g_board[from] = fromPiece;

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
                var pieceValue = g_seeValues[Dagaz.AI.g_board[themAttacks[i]] & 0x7];
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
        SeeAddXrayAttack(to, capturingPieceSquare, us, usAttacks, themAttacks);

        // Our turn to capture
        capturingPieceValue = 1000;
        capturingPieceIndex = -1;

        // Find our least valuable piece that can attack the square
        for (var i = 0; i < usAttacks.length; i++) {
            if (usAttacks[i] != 0) {
                var pieceValue = g_seeValues[Dagaz.AI.g_board[usAttacks[i]] & 0x7];
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
        SeeAddXrayAttack(to, capturingPieceSquare, us, usAttacks, themAttacks);
    }
}

function SeeAddXrayAttack(target, square, us, usAttacks, themAttacks) {
    var index = square - target + (Dagaz.AI.VECTORDELTA_SIZE >> 1);
    var delta = -g_vectorDelta[index].delta;
    if (delta == 0) return;
    square += delta;
    while (Dagaz.AI.g_board[square] == 0) {
        square += delta;
    }

    if ((Dagaz.AI.g_board[square] & Dagaz.AI.PLAYERS_MASK) && IsSquareOnPieceLine(target, square)) {
        if ((Dagaz.AI.g_board[square] & Dagaz.AI.colorWhite) == us) {
            usAttacks[usAttacks.length] = square;
        } else {
            themAttacks[themAttacks.length] = square;
        }
    }
}

// target = attacking square, us = color of knights to look for, attacks = array to add squares to
function SeeAddKnightAttacks(target, us, attacks) {
    var pieceIdx = (us | pieceAsb) << Dagaz.AI.COUNTER_SIZE;
    var attackerSq = Dagaz.AI.g_pieceList[pieceIdx++];
    while (attackerSq != 0) {
        if (IsSquareOnPieceLine(target, attackerSq)) {
            attacks[attacks.length] = attackerSq;
        }
        attackerSq = Dagaz.AI.g_pieceList[pieceIdx++];
    }
}

function SeeAddSliderAttacks(target, us, attacks, pieceType) {
    var pieceIdx = (us | pieceType) << Dagaz.AI.COUNTER_SIZE;
    var attackerSq = Dagaz.AI.g_pieceList[pieceIdx++];
    var hit = false;
    while (attackerSq != 0) {
        if (IsSquareAttackableFrom(target, attackerSq)) {
            attacks[attacks.length] = attackerSq;
            hit = true;
        }
        attackerSq = Dagaz.AI.g_pieceList[pieceIdx++];
    }

    return hit;
}

})();
