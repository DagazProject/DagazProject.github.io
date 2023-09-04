"use strict";

(function() {

Dagaz.AI.NOISE_FACTOR       = 5;

var pieceEmpty              = 0x00;
var pieceMan                = 0x01;
var pieceKnight             = 0x02;
var pieceBishop             = 0x03;
var pieceDragon             = 0x04;
var pieceQueen              = 0x05;
var pieceKing               = 0x06;
var pieceNo                 = 0x80;

var moveflagPromotion       = 0x01000000;
var moveflagPromotionKnight = 0x02000000;
var moveflagPromotionBishop = 0x04000000;
var moveflagPromotionQueen  = 0x08000000;
var moveflagPromotionAll    = 0x0F000000;

var g_moveUndoStack = new Array();
var materialTable = [0, 300, 3000, 3500, 5000, 5500, 200000];
var g_mob = [0, 1, 2, 2, 4, 5, 9];

var pieceSquareAdj = new Array(5);
Dagaz.AI.flipTable = new Array(256);

Dagaz.AI.MakeSquare = function(row, column) {
    return ((row + 3) << 4) | (column + 2);
}

Dagaz.AI.FormatSquare = function(square) {
    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    return letters[(square & 0xF) - 2] + (((Dagaz.Model.HEIGHT + 1) - (square >> 4)) + 2);
}

Dagaz.AI.FormatMove = function(move) {
    var result = null; var f = 0;
    for (var i = 0; i < move.length; i++) {
        if (result === null) {
            result = Dagaz.AI.FormatSquare(move[i] & 0xFF);
        }
        result = result + Dagaz.AI.FormatSquare((move[i] >> 8) & 0xFF);
        if (move[i] & moveflagPromotion) f |= move[i] & moveflagPromotionAll
    }
    if (f & moveflagPromotion) {
        if (f & moveflagPromotionBishop) result += " Bishop";
        else if (f & moveflagPromotionKnight) result += " Camel";
        else if (f & moveflagPromotionQueen) result += " Queen";
        else result += " King";
    }
    return result;
}

function MakeTable(table) {
    var result = new Array(256);
    for (var i = 0; i < 256; i++) {
        result[i] = 0;
    }
    for (var row = 0; row < Dagaz.Model.HEIGHT; row++) {
        for (var col = 0; col < Dagaz.Model.WIDTH; col++) {
            result[Dagaz.AI.MakeSquare(row, col)] = table[row * Dagaz.Model.WIDTH + col];
        }
    }
    return result;
}

Dagaz.AI.Mobility = function(color) {
    var mob, to, pos;
    var result = 0;
    var inc = color == Dagaz.AI.colorWhite ? -16 : 16;
    var me = color == Dagaz.AI.colorWhite ? Dagaz.AI.colorWhite : Dagaz.AI.colorBlack;
    var enemy = color == Dagaz.AI.colorWhite ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;
    for (var from = 0; from < 256; from++) {
         if (Dagaz.AI.g_board[from] & me) {
             var piece = Dagaz.AI.g_board[from] & Dagaz.AI.TYPE_MASK;
             if (piece == pieceKnight) {
                 mob = -2;
                 to = from - 47; if (Dagaz.AI.g_board[to] == 0) mob++;
                 if (Dagaz.AI.g_board[to] & enemy) mob += g_mob[Dagaz.AI.g_board[to] & Dagaz.AI.TYPE_MASK];
                 to = from + 47; if (Dagaz.AI.g_board[to] == 0) mob++;
                 if (Dagaz.AI.g_board[to] & enemy) mob += g_mob[Dagaz.AI.g_board[to] & Dagaz.AI.TYPE_MASK];
                 to = from - 49; if (Dagaz.AI.g_board[to] == 0) mob++;
                 if (Dagaz.AI.g_board[to] & enemy) mob += g_mob[Dagaz.AI.g_board[to] & Dagaz.AI.TYPE_MASK];
                 to = from + 49; if (Dagaz.AI.g_board[to] == 0) mob++;
                 if (Dagaz.AI.g_board[to] & enemy) mob += g_mob[Dagaz.AI.g_board[to] & Dagaz.AI.TYPE_MASK];
                 to = from - 13; if (Dagaz.AI.g_board[to] == 0) mob++;
                 if (Dagaz.AI.g_board[to] & enemy) mob += g_mob[Dagaz.AI.g_board[to] & Dagaz.AI.TYPE_MASK];
                 to = from + 13; if (Dagaz.AI.g_board[to] == 0) mob++;
                 if (Dagaz.AI.g_board[to] & enemy) mob += g_mob[Dagaz.AI.g_board[to] & Dagaz.AI.TYPE_MASK];
                 to = from - 19; if (Dagaz.AI.g_board[to] == 0) mob++;
                 if (Dagaz.AI.g_board[to] & enemy) mob += g_mob[Dagaz.AI.g_board[to] & Dagaz.AI.TYPE_MASK];
                 to = from + 19; if (Dagaz.AI.g_board[to] == 0) mob++;
                 if (Dagaz.AI.g_board[to] & enemy) mob += g_mob[Dagaz.AI.g_board[to] & Dagaz.AI.TYPE_MASK];
                 result += 20 * mob;
             }
             if (piece == pieceBishop) {
                 mob = -2;
                 to = from - 15; while (Dagaz.AI.g_board[to] == 0) { to -= 15; mob++; }
                 if (Dagaz.AI.g_board[to] & enemy) mob += g_mob[Dagaz.AI.g_board[to] & Dagaz.AI.TYPE_MASK];
                 to = from + 15; while (Dagaz.AI.g_board[to] == 0) { to += 15; mob++; }
                 if (Dagaz.AI.g_board[to] & enemy) mob += g_mob[Dagaz.AI.g_board[to] & Dagaz.AI.TYPE_MASK];
                 to = from - 17; while (Dagaz.AI.g_board[to] == 0) { to -= 17; mob++; }
                 if (Dagaz.AI.g_board[to] & enemy) mob += g_mob[Dagaz.AI.g_board[to] & Dagaz.AI.TYPE_MASK];
                 to = from + 17; while (Dagaz.AI.g_board[to] == 0) { to += 17; mob++; }
                 if (Dagaz.AI.g_board[to] & enemy) mob += g_mob[Dagaz.AI.g_board[to] & Dagaz.AI.TYPE_MASK];
                 result += 20 * mob;
             }
             if (piece == pieceMan) {
                 mob = 0;
                 to = from + inc - 1; 
                 if (Dagaz.AI.g_board[to] == 0) mob++;
                 if (Dagaz.AI.g_board[to] & enemy) {
                     pos = to - inc + 1;
                     if (Dagaz.AI.g_board[pos] != 0) {
                         mob += 4;
                         to += inc - 1;
                         if (Dagaz.AI.g_board[to] == 0) mob += 4;
                     }
                 }
                 to = from + inc + 1; 
                 if (Dagaz.AI.g_board[to] == 0) mob++;
                 if (Dagaz.AI.g_board[to] & enemy) {
                     pos = to - inc - 1;
                     if (Dagaz.AI.g_board[pos] != 0) {
                         mob += 4;
                         to += inc + 1;
                         if (Dagaz.AI.g_board[to] == 0) mob += 4;
                     }
                 }
                 to = from - inc - 1;
                 if (Dagaz.AI.g_board[to] & enemy) mob++;
                 to = from - inc + 1;
                 if (Dagaz.AI.g_board[to] & enemy) mob++;
                 to = from + (inc * 2);
                 while (Dagaz.AI.g_board[to] == 0) to += inc * 2;
                 if (Dagaz.AI.g_board[to] & enemy) mob += 4;
                 result += 10 * mob;
             }
             if (piece == pieceKing) {
                 mob = -2;
                 to = from - 17; if (Dagaz.AI.g_board[to] == 0) mob++;
                 to = from - 15; if (Dagaz.AI.g_board[to] == 0) mob++;
                 to = from + 17; if (Dagaz.AI.g_board[to] == 0) mob++;
                 to = from + 15; if (Dagaz.AI.g_board[to] == 0) mob++;
                 to = from + 32; if (Dagaz.AI.g_board[to] & enemy) mob += 2;
                 to = from - 32; if (Dagaz.AI.g_board[to] & enemy) mob += 2;
                 to = from + 2;  if (Dagaz.AI.g_board[to] & enemy) mob += 2;
                 to = from - 2;  if (Dagaz.AI.g_board[to] & enemy) mob += 2;
                 result += 50 * mob;
             }
             if (piece == pieceDragon) {
                 mob = 0;
                 to = from + inc - 1; while (Dagaz.AI.g_board[to] == 0) {to += inc - 1; mob++;}
                 to = from + inc + 1; while (Dagaz.AI.g_board[to] == 0) {to += inc + 1; mob++;}
                 result += 50 * mob;
             }
             if (piece == pieceQueen) {
                 mob = -2;
                 to = from - 17; while (Dagaz.AI.g_board[to] == 0) {to -= 17; mob++;}
                 to = from - 15; while (Dagaz.AI.g_board[to] == 0) {to -= 15; mob++;}
                 to = from + 17; while (Dagaz.AI.g_board[to] == 0) {to += 17; mob++;}
                 to = from + 15; while (Dagaz.AI.g_board[to] == 0) {to += 15; mob++;}
                 result += 50 * mob;
             }
         }
    }
    return result;
}

Dagaz.AI.Evaluate = function() {
    var curEval = Dagaz.AI.g_baseEval;
    var mobility = Dagaz.AI.Mobility(Dagaz.AI.colorWhite) - Dagaz.AI.Mobility(0);
    if (Dagaz.AI.g_toMove == 0) {
        // Black
        curEval -= mobility;
    }
    else {
        curEval += mobility;
    }
    return curEval;
}

var ResetGame = Dagaz.AI.ResetGame;

Dagaz.AI.ResetGame = function() {
  ResetGame();

  for (var row = 0; row < Dagaz.Model.HEIGHT; row++) {
       for (var col = 0; col < Dagaz.Model.WIDTH; col++) {
            var square = Dagaz.AI.MakeSquare(row, col);
            Dagaz.AI.flipTable[square] = Dagaz.AI.MakeSquare((Dagaz.Model.HEIGHT - 1) - row, (Dagaz.Model.WIDTH - 1) - col);
       }
  }

  pieceSquareAdj[pieceEmpty]  = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceMan]    = MakeTable(Dagaz.AI.pieceAdj[pieceMan]);
  pieceSquareAdj[pieceKnight] = MakeTable(Dagaz.AI.pieceAdj[pieceKnight]);
  pieceSquareAdj[pieceBishop] = MakeTable(Dagaz.AI.pieceAdj[pieceBishop]);
  pieceSquareAdj[pieceDragon] = MakeTable(Dagaz.AI.pieceAdj[pieceDragon]);
  pieceSquareAdj[pieceQueen]  = MakeTable(Dagaz.AI.pieceAdj[pieceQueen]);
  pieceSquareAdj[pieceKing]   = MakeTable(Dagaz.AI.pieceAdj[pieceKing]);
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
                    Dagaz.AI.g_board[Dagaz.AI.MakeSquare(row, col)] = 0;
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
                        piece |= pieceMan;
                        break;
                    case 'k':
                        piece |= pieceKing;
                        break;
                    case 'n':
                        piece |= pieceKnight;
                        break;
                    case 'b':
                        piece |= pieceBishop;
                        break;
                    case 'd':
                        piece |= pieceDragon;
                        break;
                    case 'q':
                        piece |= pieceQueen;
                        break;
                }
                
                if (piece & Dagaz.AI.TYPE_MASK) {
                    Dagaz.AI.g_board[Dagaz.AI.MakeSquare(row, col)] = piece;
                }
                col++;
            }
        }
    }

    Dagaz.AI.g_toMove = chunks[1].charAt(0) == 'w' ? Dagaz.AI.colorWhite : pieceEmpty;

    var hashResult = Dagaz.AI.SetHash();
    Dagaz.AI.g_hashKeyLow = hashResult.hashKeyLow;
    Dagaz.AI.g_hashKeyHigh = hashResult.hashKeyHigh;

    Dagaz.AI.g_baseEval = 0;
    for (var i = 0; i < 256; i++) {
        if (Dagaz.AI.g_board[i] & Dagaz.AI.colorWhite) {
            Dagaz.AI.g_baseEval += pieceSquareAdj[Dagaz.AI.g_board[i] & Dagaz.AI.TYPE_MASK][i];
            Dagaz.AI.g_baseEval += materialTable[Dagaz.AI.g_board[i] & Dagaz.AI.TYPE_MASK];
        } else if (Dagaz.AI.g_board[i] & Dagaz.AI.colorBlack) {
            Dagaz.AI.g_baseEval -= pieceSquareAdj[Dagaz.AI.g_board[i] & Dagaz.AI.TYPE_MASK][Dagaz.AI.flipTable[i]];
            Dagaz.AI.g_baseEval -= materialTable[Dagaz.AI.g_board[i] & Dagaz.AI.TYPE_MASK];
        }
    }
    if (!Dagaz.AI.g_toMove) Dagaz.AI.g_baseEval = -Dagaz.AI.g_baseEval;
    Dagaz.AI.g_move50 = 0;

    return '';
}

function UndoHistory(move, step, baseEval, hashKeyLow, hashKeyHigh, move50, captured) {
    this.move = move;
    this.step = step;
    this.baseEval = baseEval;
    this.hashKeyLow = hashKeyLow;
    this.hashKeyHigh = hashKeyHigh;
    this.move50 = move50;
    this.captured = captured;
}

Dagaz.AI.MakeStep = function(move, step) {
    var me = Dagaz.AI.g_toMove >> Dagaz.AI.TYPE_SIZE;
    var flags = move & 0xFF000000;
    var to = (move >> 8) & 0xFF;
    var from = move & 0xFF;
    var target = (move >> 16) & 0xFF;

    var captured = target ? Dagaz.AI.g_board[target] : pieceEmpty;
    var piece = Dagaz.AI.g_board[from];

    g_moveUndoStack[Dagaz.AI.g_moveCount] = new UndoHistory(move, step, Dagaz.AI.g_baseEval, Dagaz.AI.g_hashKeyLow, Dagaz.AI.g_hashKeyHigh, Dagaz.AI.g_move50, captured);
    Dagaz.AI.g_moveCount++;

    if (captured) {
        var capturedType = captured & Dagaz.AI.PIECE_MASK;
        Dagaz.AI.g_baseEval += materialTable[captured & Dagaz.AI.TYPE_MASK];
        Dagaz.AI.g_baseEval += pieceSquareAdj[captured & Dagaz.AI.TYPE_MASK][me ? Dagaz.AI.flipTable[target] : target];
        Dagaz.AI.g_board[target] = pieceEmpty;

        Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[target][capturedType];
        Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[target][capturedType];
        Dagaz.AI.g_move50 = 0;
    }

    Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[from][piece & Dagaz.AI.PIECE_MASK];
    Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[from][piece & Dagaz.AI.PIECE_MASK];
    Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[to][piece & Dagaz.AI.PIECE_MASK];
    Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[to][piece & Dagaz.AI.PIECE_MASK];

    Dagaz.AI.g_baseEval -= pieceSquareAdj[piece & Dagaz.AI.TYPE_MASK][me == 0 ? Dagaz.AI.flipTable[from] : from];

    if (flags & moveflagPromotion) {
        var newPiece = piece & (~Dagaz.AI.TYPE_MASK);
        if (flags & moveflagPromotionKnight) newPiece |= pieceKnight;
        else if (flags & moveflagPromotionBishop) newPiece |= pieceBishop;
        else if (flags & moveflagPromotionQueen) newPiece |= pieceQueen;
            else newPiece |= pieceKing;

        Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[to][piece & Dagaz.AI.PIECE_MASK];
        Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[to][piece & Dagaz.AI.PIECE_MASK];
        Dagaz.AI.g_board[to] = newPiece;
        Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[to][newPiece & Dagaz.AI.PIECE_MASK];
        Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[to][newPiece & Dagaz.AI.PIECE_MASK];

        Dagaz.AI.g_baseEval += pieceSquareAdj[newPiece & Dagaz.AI.TYPE_MASK][me == 0 ? Dagaz.AI.flipTable[to] : to];
        Dagaz.AI.g_baseEval -= materialTable[pieceMan];
        Dagaz.AI.g_baseEval += materialTable[newPiece & Dagaz.AI.TYPE_MASK];
    } else {
        Dagaz.AI.g_board[to] = Dagaz.AI.g_board[from];
        Dagaz.AI.g_baseEval += pieceSquareAdj[piece & Dagaz.AI.TYPE_MASK][me == 0 ? Dagaz.AI.flipTable[to] : to];
    }
    Dagaz.AI.g_board[from] = pieceEmpty;

    Dagaz.AI.g_repMoveStack[Dagaz.AI.g_moveCount - 1] = Dagaz.AI.g_hashKeyLow;
    Dagaz.AI.g_move50++;

    return target == to ? 0 : captured;
}

Dagaz.AI.UnmakeStep = function() {
    Dagaz.AI.g_moveCount--;
    var move = g_moveUndoStack[Dagaz.AI.g_moveCount].move;
    Dagaz.AI.g_baseEval = g_moveUndoStack[Dagaz.AI.g_moveCount].baseEval;
    Dagaz.AI.g_hashKeyLow = g_moveUndoStack[Dagaz.AI.g_moveCount].hashKeyLow;
    Dagaz.AI.g_hashKeyHigh = g_moveUndoStack[Dagaz.AI.g_moveCount].hashKeyHigh;
    Dagaz.AI.g_move50 = g_moveUndoStack[Dagaz.AI.g_moveCount].move50;

    var otherColor = Dagaz.AI.colorWhite - Dagaz.AI.g_toMove;
    var me = Dagaz.AI.g_toMove >> Dagaz.AI.TYPE_SIZE;
    var them = otherColor >> Dagaz.AI.TYPE_SIZE;

    var flags = move & 0xFF000000;
    var captured = g_moveUndoStack[Dagaz.AI.g_moveCount].captured;
    var to = (move >> 8) & 0xFF;
    var from = move & 0xFF;
    var target = (move >> 16) & 0xFF;

    var piece = Dagaz.AI.g_board[to];

    if (flags & moveflagPromotion) {
        piece = Dagaz.AI.g_board[to] & (~Dagaz.AI.TYPE_MASK);
        if (flags & moveflagPromotionQueen) piece |= pieceDragon;
            else piece |= pieceMan;

        Dagaz.AI.g_board[from] = piece;
    } else {
        Dagaz.AI.g_board[from] = Dagaz.AI.g_board[to];
    }

    Dagaz.AI.g_board[to] = pieceEmpty;
    if (captured) {
        Dagaz.AI.g_board[target] = captured;
    }

    return g_moveUndoStack[Dagaz.AI.g_moveCount].step;
}

Dagaz.AI.MakeMove = function(move) {
    for (var i = 0; i < move.length; i++) {
        if (Dagaz.AI.MakeStep(move[i], i) == pieceEmpty) break;
    }
    Dagaz.AI.g_toMove = Dagaz.AI.colorWhite - Dagaz.AI.g_toMove;
    Dagaz.AI.g_baseEval = -Dagaz.AI.g_baseEval;
    Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristBlackLow;
    Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristBlackHigh;
    return true;
}

Dagaz.AI.UnmakeMove = function(move) {
    Dagaz.AI.g_toMove = Dagaz.AI.colorWhite - Dagaz.AI.g_toMove;
    Dagaz.AI.g_baseEval = -Dagaz.AI.g_baseEval;
    while (Dagaz.AI.UnmakeStep() > 0);
}

function GenerateCaptureMoves(moves) {
  var color = Dagaz.AI.g_toMove ? Dagaz.AI.colorWhite : Dagaz.AI.colorBlack;
  for (var pos = 0; pos < 256; pos++) {
       if (Dagaz.AI.g_board[pos] & color) {           
           GenerateCaptureMovesFrom(moves, pos);
       }
  }
}

function GenerateCaptureChessMoves(moves) {
  var color = Dagaz.AI.g_toMove ? Dagaz.AI.colorWhite : Dagaz.AI.colorBlack;
  for (var pos = 0; pos < 256; pos++) {
       if (Dagaz.AI.g_board[pos] & color) {           
           GenerateCaptureChessMovesFrom(moves, pos);
       }
  }
}

function GenerateQuietMoves(moves) {
  var color = Dagaz.AI.g_toMove ? Dagaz.AI.colorWhite : Dagaz.AI.colorBlack;
  for (var pos = 0; pos < 256; pos++) {
       if (Dagaz.AI.g_board[pos] & color) {
           GenerateQuietMovesFrom(moves, pos);
       }
  }
}

function NoKing() {
  var me = Dagaz.AI.g_toMove == Dagaz.AI.colorWhite ? Dagaz.AI.colorWhite : Dagaz.AI.colorBlack;
  for (var pos = 0; pos < 256; pos++) {
       if (Dagaz.AI.g_board[pos] & me) {
           if ((Dagaz.AI.g_board[pos] & Dagaz.AI.TYPE_MASK) == pieceKing) return false;
       }
  }
  return true;
}

function IsPrefix(a, b) {
  if (a.length >= b.length) return false;
  for (var i = 0; i < a.length; i++) {
       if (a[i] != b[i]) return false;
  }
  return true;
}

function CheckInvariant(moves) {
  var result = [];
  for (var i = 0; i < moves.length; i++) {
       var f = true;
       for (var j = 0; j < moves.length; j++) {
            if ((i != j) && IsPrefix(moves[i], moves[j])) {
                f = false;
                break;
            }
       }
       if (f) {
           result.push(moves[i]);
       }
  }
  return result;
}

function CheckPromotion(moves) {
  var result = [];
  for (var i = 0; i < moves.length; i++) {
      if ((moves[i].length > 0) && (moves[i][0] & moveflagPromotion)) result.push(moves[i]);
  }
  return result;
}

Dagaz.AI.GenerateAllMoves = function() {
  var moves = [];
  if (NoKing()) return moves;
  GenerateCaptureMoves(moves);
  moves = CheckInvariant(moves);
  if (moves.length == 0) {
      GenerateQuietMoves(moves);
  }
  GenerateCaptureChessMoves(moves);
  return moves;
}

Dagaz.AI.GenerateCaptureMoves = function() {
  var moves = [];
  if (NoKing()) return moves;
  GenerateCaptureMoves(moves);
  moves = CheckInvariant(moves);
  GenerateCaptureChessMoves(moves);
  if (moves.length == 0) {
      GenerateQuietMoves(moves);
      moves = CheckPromotion(moves);
  }
  return moves;
}

function GenerateChessStep(moves, from, to) {
    moves.push(from | (to << 8) | (to << 16));
}

function GenerateQuietStep(moves, from, to, pieceType) {
    var flags = 0;
    var delta = (8 - Dagaz.Model.HEIGHT) << 4;
    if (pieceType == pieceMan) {
        var row = to & 0xF0;
        if (!Dagaz.AI.g_toMove && (row == (0xA0 - delta))) {
            flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_toMove && (row == 0x30)) {
            flags = moveflagPromotion;
        }
    }
    if (pieceType == pieceDragon) {
        var row = to & 0xF0;
        if (!Dagaz.AI.g_toMove && (row == (0xA0 - delta))) {
            flags = moveflagPromotion | moveflagPromotionQueen;
        }
        if (Dagaz.AI.g_toMove && (row == 0x30)) {
            flags = moveflagPromotion | moveflagPromotionQueen;
        }
    }
    moves.push(from | (to << 8) | flags);
}

function GenerateCaptureStep(from, dir, isMan) {
    var delta = (8 - Dagaz.Model.HEIGHT) << 4;
    var enemy = Dagaz.AI.g_toMove == Dagaz.AI.colorWhite ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;
    var captured = +from + dir;
    if ((Dagaz.AI.g_board[captured] & enemy) == 0) return 0;
    var to = +captured + dir;
    if (Dagaz.AI.g_board[to] != pieceEmpty) return 0;
    var flags = 0;
    if (isMan) {
        var row = to & 0xF0;
        if (!Dagaz.AI.g_toMove && (row == (0xA0 - delta))) {
            flags = moveflagPromotion;
        }
        if (Dagaz.AI.g_toMove && (row == 0x30)) {
            flags = moveflagPromotion;
        }
    }
    return from | (to << 8) | (captured << 16) | flags;
}

function GenerateCaptureDragonStep(from, dir, isDragon) {
    var delta = (8 - Dagaz.Model.HEIGHT) << 4;
    var enemy = Dagaz.AI.g_toMove == Dagaz.AI.colorWhite ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;
    var captured = +from + dir;
    while (Dagaz.AI.g_board[captured] == pieceEmpty) {
        captured += dir;
    }
    if ((Dagaz.AI.g_board[captured] & enemy) == 0) return 0;
    var to = +captured + dir;
    if (Dagaz.AI.g_board[to] != pieceEmpty) return 0;
    var flags = 0;
    if (isDragon) {
        var row = to & 0xF0;
        if (!Dagaz.AI.g_toMove && (row == (0xA0 - delta))) {
            flags = moveflagPromotion | moveflagPromotionQueen;
        }
        if (Dagaz.AI.g_toMove && (row == 0x30)) {
            flags = moveflagPromotion | moveflagPromotionQueen;
        }
    }
    return from | (to << 8) | (captured << 16) | flags;
}

function GenerateCaptureMovesFromTree(moves, from, isMan, stack, isDone) {
    var r = true;
    var inc = (Dagaz.AI.g_toMove == Dagaz.AI.colorWhite) ? -16 : 16;
    var dirs = [-17, -15, 15, 17];
    if (isMan) dirs = [inc - 1, inc + 1];
    _.each(dirs, function(dir) {
        if (isDone) return;
        var step = GenerateCaptureStep(from, dir, isMan);
        if (step == 0) return;
        var pos = (step >> 8) & 0xFF;
        stack.push(step);
        Dagaz.AI.MakeStep(step, 0);
        if (GenerateCaptureMovesFromTree(moves, pos, isMan, stack, step & moveflagPromotion)) r = false;
        Dagaz.AI.UnmakeStep();
        stack.pop();
    });
    if (r && (stack.length > 0)) {
        var flags = [0];
        if (isDone) flags = [moveflagPromotion, moveflagPromotionKnight, moveflagPromotionBishop];
        _.each(flags, function(f) {
             var move = new Array();
             for (var i = 0; i < stack.length; i++) {
                  var m = stack[i];
                  if (i == stack.length - 1) m |= f;
                  move.push(m);
             }
             moves.push(move);
        });
    }
    return !r;
}

function GenerateCaptureDragonMovesFromTree(moves, from, isDragon, stack, restricted) {
    var r = true;
    var inc = (Dagaz.AI.g_toMove == Dagaz.AI.colorWhite) ? -16 : 16;
    var dirs = [-17, -15, 15, 17];
    if (isDragon) dirs = [inc - 1, inc + 1];
    _.each(dirs, function(dir) {
        if (restricted && (restricted == dir)) return;
        var step = GenerateCaptureDragonStep(from, dir, isDragon);
        if (step == 0) return;
        var f = isDragon;
        if (step & moveflagPromotion) f = false;
        var pos = (step >> 8) & 0xFF;
        stack.push(step);
        Dagaz.AI.MakeStep(step, 0);
        if (GenerateCaptureDragonMovesFromTree(moves, pos, f, stack, -dir)) r = false;
        Dagaz.AI.UnmakeStep();
        stack.pop();
        pos += dir;
        while (Dagaz.AI.g_board[pos] == pieceEmpty) {
            step &= ~0xFF00;
            step |= pos << 8;
            stack.push(step);
            Dagaz.AI.MakeStep(step, 0);
            if (GenerateCaptureDragonMovesFromTree(moves, pos, f, stack, -dir)) r = false;
            Dagaz.AI.UnmakeStep();
            stack.pop();
            pos += dir;
        }
    });
    if (r && (stack.length > 0)) {
        var move = new Array();
        for (var i = 0; i < stack.length; i++) {
            move.push(stack[i]);
        }
        moves.push(move);
    }
    return !r;
}

function GenerateCaptureMovesFrom(moves, from) {
    var piece = Dagaz.AI.g_board[from] & Dagaz.AI.TYPE_MASK;   
    if ((piece == pieceMan) || (piece == pieceKing)) {
        GenerateCaptureMovesFromTree(moves, from, piece == pieceMan, new Array());
    }
    if ((piece == pieceDragon) || (piece == pieceQueen)) {
        GenerateCaptureDragonMovesFromTree(moves, from, piece == pieceDragon, new Array());
    }
}

function GenerateCaptureChessMovesFrom(moves, from) {
    var to; var steps;
    var enemy = Dagaz.AI.g_toMove == Dagaz.AI.colorWhite ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;
    var piece = Dagaz.AI.g_board[from] & Dagaz.AI.TYPE_MASK;
    if (piece == pieceKnight) {
        to = from + 47; if (Dagaz.AI.g_board[to] & enemy) {
            steps = new Array();
            GenerateChessStep(steps, from, to);
            moves.push(steps);
        }
        to = from - 47; if (Dagaz.AI.g_board[to] & enemy) {
            steps = new Array();
            GenerateChessStep(steps, from, to);
            moves.push(steps);
        }
        to = from + 49; if (Dagaz.AI.g_board[to] & enemy) {
            steps = new Array();
            GenerateChessStep(steps, from, to);
            moves.push(steps);
        }
        to = from - 49; if (Dagaz.AI.g_board[to] & enemy) {
            steps = new Array();
            GenerateChessStep(steps, from, to);
            moves.push(steps);
        }
        to = from + 13; if (Dagaz.AI.g_board[to] & enemy) {
            steps = new Array();
            GenerateChessStep(steps, from, to);
            moves.push(steps);
        }
        to = from - 13; if (Dagaz.AI.g_board[to] & enemy) {
            steps = new Array();
            GenerateChessStep(steps, from, to);
            moves.push(steps);
        }
        to = from + 19; if (Dagaz.AI.g_board[to] & enemy) {
            steps = new Array();
            GenerateChessStep(steps, from, to);
            moves.push(steps);
        }
        to = from - 19; if (Dagaz.AI.g_board[to] & enemy) {
            steps = new Array();
            GenerateChessStep(steps, from, to);
            moves.push(steps);
        }
    }
    if (piece == pieceBishop) {
        to = from; do { to -= 15; } while (Dagaz.AI.g_board[to] == 0);
        if (Dagaz.AI.g_board[to] & enemy) {
            steps = new Array();
            GenerateChessStep(steps, from, to);
            moves.push(steps);
        }
        to = from; do { to += 15; } while (Dagaz.AI.g_board[to] == 0);
        if (Dagaz.AI.g_board[to] & enemy) {
            steps = new Array();
            GenerateChessStep(steps, from, to);
            moves.push(steps);
        }
        to = from; do { to -= 17; } while (Dagaz.AI.g_board[to] == 0);
        if (Dagaz.AI.g_board[to] & enemy) {
            steps = new Array();
            GenerateChessStep(steps, from, to);
            moves.push(steps);
        }
        to = from; do { to += 17; } while (Dagaz.AI.g_board[to] == 0);
        if (Dagaz.AI.g_board[to] & enemy) {
            steps = new Array();
            GenerateChessStep(steps, from, to);
            moves.push(steps);
        }
    }
}

function GenerateQuietMovesFrom(moves, from) {
    var to; var steps;
    var inc = (Dagaz.AI.g_toMove == Dagaz.AI.colorWhite) ? -16 : 16;
    var piece = Dagaz.AI.g_board[from] & Dagaz.AI.TYPE_MASK;
    if (piece == pieceKnight) {
        to = from + 47; if (Dagaz.AI.g_board[to] == 0) {
            steps = new Array();
            GenerateChessStep(steps, from, to);
            moves.push(steps);
        }
        to = from - 47; if (Dagaz.AI.g_board[to] == 0) {
            steps = new Array();
            GenerateChessStep(steps, from, to);
            moves.push(steps);
        }
        to = from + 49; if (Dagaz.AI.g_board[to] == 0) {
            steps = new Array();
            GenerateChessStep(steps, from, to);
            moves.push(steps);
        }
        to = from - 49; if (Dagaz.AI.g_board[to] == 0) {
            steps = new Array();
            GenerateChessStep(steps, from, to);
            moves.push(steps);
        }
        to = from + 13; if (Dagaz.AI.g_board[to] == 0) {
            steps = new Array();
            GenerateChessStep(steps, from, to);
            moves.push(steps);
        }
        to = from - 13; if (Dagaz.AI.g_board[to] == 0) {
            steps = new Array();
            GenerateChessStep(steps, from, to);
            moves.push(steps);
        }
        to = from + 19; if (Dagaz.AI.g_board[to] == 0) {
            steps = new Array();
            GenerateChessStep(steps, from, to);
            moves.push(steps);
        }
        to = from - 19; if (Dagaz.AI.g_board[to] == 0) {
            steps = new Array();
            GenerateChessStep(steps, from, to);
            moves.push(steps);
        }
    }
    if (piece == pieceBishop) {
        to = from - 15; while (Dagaz.AI.g_board[to] == 0) {
            steps = new Array();
            GenerateChessStep(steps, from, to);
            moves.push(steps);
            to -= 15;
        }
        to = from + 15; while (Dagaz.AI.g_board[to] == 0) {
            steps = new Array();
            GenerateChessStep(steps, from, to);
            moves.push(steps);
            to += 15;
        }
        to = from - 17; while (Dagaz.AI.g_board[to] == 0) {
            steps = new Array();
            GenerateChessStep(steps, from, to);
            moves.push(steps);
            to -= 17;
        }
        to = from + 17; while (Dagaz.AI.g_board[to] == 0) {
            steps = new Array();
            GenerateChessStep(steps, from, to);
            moves.push(steps);
            to += 17;
        }
    }
    if (piece == pieceMan) {
        to = from + inc - 1;
        if (Dagaz.AI.g_board[to] == 0) { 
            steps = new Array();
            GenerateQuietStep(steps, from, to, piece);
            if (steps[0] & moveflagPromotion) {
                steps[0] |= moveflagPromotionKnight;
                moves.push(steps);
                steps[0] &= ~moveflagPromotionKnight;
                steps[0] |= moveflagPromotionBishop;
                moves.push(steps);
                steps[0] &= ~moveflagPromotionBishop;
            }
            moves.push(steps);
        }
        to = from + inc + 1;
        if (Dagaz.AI.g_board[to] == 0) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, piece);
            if (steps[0] & moveflagPromotion) {
                steps[0] |= moveflagPromotionKnight;
                moves.push(steps);
                steps[0] &= ~moveflagPromotionKnight;
                steps[0] |= moveflagPromotionBishop;
                moves.push(steps);
                steps[0] &= ~moveflagPromotionBishop;
            }
            moves.push(steps);
        }
    }
    if (piece == pieceKing) {
        to = from - 17;
        if (Dagaz.AI.g_board[to] == 0) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, piece);
            moves.push(steps);
        }
        to = from + 17; 
        if (Dagaz.AI.g_board[to] == 0) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, piece);
            moves.push(steps);
        }
        to = from - 15; 
        if (Dagaz.AI.g_board[to] == 0) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, piece);
            moves.push(steps);
        }
        to = from + 15; 
        if (Dagaz.AI.g_board[to] == 0) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, piece);
            moves.push(steps);
        }
    }
    if (piece == pieceDragon) {
        to = from + inc - 1;
        while (Dagaz.AI.g_board[to] == 0) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, piece);
            moves.push(steps);
            to += inc - 1;
        }
        to = from + inc + 1;
        while (Dagaz.AI.g_board[to] == 0) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, piece);
            moves.push(steps);
            to += inc + 1;
        }
    }
    if (piece == pieceQueen) {
        to = from - 17;
        while (Dagaz.AI.g_board[to] == 0) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, piece);
            moves.push(steps);
            to -= 17;
        }
        to = from + 17;
        while (Dagaz.AI.g_board[to] == 0) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, piece);
            moves.push(steps);
            to += 17;
        }
        to = from - 15;
        while (Dagaz.AI.g_board[to] == 0) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, piece);
            moves.push(steps);
            to -= 15;
        }
        to = from + 15;
        while (Dagaz.AI.g_board[to] == 0) {
            steps = new Array();
            GenerateQuietStep(steps, from, to, piece);
            moves.push(steps);
            to += 15;
        }
    }
}

})();
