"use strict";

(function() {

Dagaz.AI.NOISE_FACTOR     = 5;

Dagaz.AI.PIECE_MASK       = 0x3FF;
Dagaz.AI.TYPE_MASK        = 0x1FF;
Dagaz.AI.PLAYERS_MASK     = 0x600;

Dagaz.AI.colorBlack       = 0x400;
Dagaz.AI.colorWhite       = 0x200;

var pieceEmpty            = 0x000;
var pieceBishop           = 0x001;
var pieceRook             = 0x002;
var pieceElephant         = 0x004;
var pieceRider            = 0x004;
var pieceFerz             = 0x010;
var pieceDabbaba          = 0x020;
var pieceAlfil            = 0x040;
var pieceKnight           = 0x080;
var pieceKing             = 0x100;
var pieceNo               = 0x800;

var moveflagPromotion     = 0x010000;

var g_moveUndoStack = new Array();
var materialTable = [2100, 900, 100, 200, 200, 100, 300, 2000, 200000];

function getMaterial(pieceType) {
  var r = 0; var m = 1;
  for (var i = 0; m <= pieceKing; m <<= 1, i++) {
      if (pieceType & m) r += materialTable[i];
  }
  return r;
}

function getKing(color) {
  var me = color ? Dagaz.AI.colorWhite : Dagaz.AI.colorBlack;
  for (var pos = 0; pos < 256; pos++) {
      if ((Dagaz.AI.g_board[pos] & pieceKing) && (Dagaz.AI.g_board[pos] & me)) return pos;
  }
  return 0;
}

Dagaz.AI.MakeSquare = function(row, column) {
    return ((row + 2) << 4) | (column + 2);
}

Dagaz.AI.FormatSquare = function(square) {
    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    return letters[(square & 0xF) - 2] + (((Dagaz.Model.HEIGHT + 1) - (square >> 4)) + 1);
}

Dagaz.AI.FormatMove = function(move) {
    var result = Dagaz.AI.FormatSquare(move & 0xFF) + Dagaz.AI.FormatSquare((move >> 8) & 0xFF);
    return result;
}

Dagaz.AI.Mobility = function(color) {
    var mob, to, pos;
    var result = 0;

    var me = color == Dagaz.AI.colorWhite ? Dagaz.AI.colorWhite : Dagaz.AI.colorBlack;
    var enemy = color == Dagaz.AI.colorWhite ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;
    for (var from = 0; from < 256; from++) {
         if (Dagaz.AI.g_board[from] & me) {
             var piece = Dagaz.AI.g_board[from] & Dagaz.AI.TYPE_MASK;
             mob = 0;   
             if (piece & pieceKing) {
                 // TODO: enemies
                 to = from - 16;
                 if (Dagaz.AI.g_board[to] == 0) mob++;
                 to = from + 16;
                 if (Dagaz.AI.g_board[to] == 0) mob++;
                 to = from - 1;
                 if (Dagaz.AI.g_board[to] == 0) mob++;
                 to = from + 1;
                 if (Dagaz.AI.g_board[to] == 0) mob++;
             }
             // TODO: friends
             if (piece & pieceFerz) {
                 to = from - 17;
                 while (Dagaz.AI.g_board[to] == 0) {
                     mob++;
                     if ((piece & pieceBishop) == 0) break;
                     to -= 17;
                 }
                 if (Dagaz.AI.g_board[to] & enemy) mob += getMaterial(Dagaz.AI.g_board[to]) / 10;
                 to = from + 17;
                 while (Dagaz.AI.g_board[to] == 0) {
                     mob++;
                     if ((piece & pieceBishop) == 0) break;
                     to += 17;
                 }
                 if (Dagaz.AI.g_board[to] & enemy) mob += getMaterial(Dagaz.AI.g_board[to]) / 10;
                 to = from - 15;
                 while (Dagaz.AI.g_board[to] == 0) {
                     mob++;
                     if ((piece & pieceBishop) == 0) break;
                     to -= 15;
                 }
                 if (Dagaz.AI.g_board[to] & enemy) mob += getMaterial(Dagaz.AI.g_board[to]) / 10;
                 to = from + 15;
                 while (Dagaz.AI.g_board[to] == 0) {
                     mob++;
                     if ((piece & pieceBishop) == 0) break;
                     to += 15;
                 }
                 if (Dagaz.AI.g_board[to] & enemy) mob += getMaterial(Dagaz.AI.g_board[to]) / 10;
             }
             if (piece & pieceDabbaba) {
                 to = from - 32;
                 while (Dagaz.AI.g_board[to] == 0) {
                     mob++;
                     if ((piece & pieceRook) == 0) break;
                     to -= 32;
                 }
                 if (Dagaz.AI.g_board[to] & enemy) mob += getMaterial(Dagaz.AI.g_board[to]) / 10;
                 to = from + 32;
                 while (Dagaz.AI.g_board[to] == 0) {
                     mob++;
                     if ((piece & pieceRook) == 0) break;
                     to += 32;
                 }
                 if (Dagaz.AI.g_board[to] & enemy) mob += getMaterial(Dagaz.AI.g_board[to]) / 10;
                 to = from - 2;
                 while (Dagaz.AI.g_board[to] == 0) {
                     mob++;
                     if ((piece & pieceRook) == 0) break;
                     to -= 2;
                 }
                 if (Dagaz.AI.g_board[to] & enemy) mob += getMaterial(Dagaz.AI.g_board[to]) / 10;
                 to = from + 2;
                 while (Dagaz.AI.g_board[to] == 0) {
                     mob++;
                     if ((piece & pieceRook) == 0) break;
                     to += 2;
                 }
                 if (Dagaz.AI.g_board[to] & enemy) mob += getMaterial(Dagaz.AI.g_board[to]) / 10;
             }
             if (piece & pieceAlfil) {
                 to = from - 34;
                 while (Dagaz.AI.g_board[to] == 0) {
                     mob++;
                     if ((piece & pieceElephant) == 0) break;
                     to -= 34;
                 }
                 if (Dagaz.AI.g_board[to] & enemy) mob += getMaterial(Dagaz.AI.g_board[to]) / 10;
                 to = from + 34;
                 while (Dagaz.AI.g_board[to] == 0) {
                     mob++;
                     if ((piece & pieceElephant) == 0) break;
                     to += 34;
                 }
                 if (Dagaz.AI.g_board[to] & enemy) mob += getMaterial(Dagaz.AI.g_board[to]) / 10;
                 to = from - 30;
                 while (Dagaz.AI.g_board[to] == 0) {
                     mob++;
                     if ((piece & pieceElephant) == 0) break;
                     to -= 30;
                 }
                 if (Dagaz.AI.g_board[to] & enemy) mob += getMaterial(Dagaz.AI.g_board[to]) / 10;
                 to = from + 30;
                 while (Dagaz.AI.g_board[to] == 0) {
                     mob++;
                     if ((piece & pieceElephant) == 0) break;
                     to += 30;
                 }
                 if (Dagaz.AI.g_board[to] & enemy) mob += getMaterial(Dagaz.AI.g_board[to]) / 10;
             }
             if (piece & pieceKnight) {
                 to = from - 31;
                 while (Dagaz.AI.g_board[to] == 0) {
                     mob++;
                     if ((piece & pieceRider) == 0) break;
                     to -= 31;
                 }
                 if (Dagaz.AI.g_board[to] & enemy) mob += getMaterial(Dagaz.AI.g_board[to]) / 10;
                 to = from + 31;
                 while (Dagaz.AI.g_board[to] == 0) {
                     mob++;
                     if ((piece & pieceRider) == 0) break;
                     to += 31;
                 }
                 if (Dagaz.AI.g_board[to] & enemy) mob += getMaterial(Dagaz.AI.g_board[to]) / 10;
                 to = from - 33;
                 while (Dagaz.AI.g_board[to] == 0) {
                     mob++;
                     if ((piece & pieceRider) == 0) break;
                     to -= 33;
                 }
                 if (Dagaz.AI.g_board[to] & enemy) mob += getMaterial(Dagaz.AI.g_board[to]) / 10;
                 to = from + 33;
                 while (Dagaz.AI.g_board[to] == 0) {
                     mob++;
                     if ((piece & pieceRider) == 0) break;
                     to += 33;
                 }
                 if (Dagaz.AI.g_board[to] & enemy) mob += getMaterial(Dagaz.AI.g_board[to]) / 10;
                 to = from - 14;
                 while (Dagaz.AI.g_board[to] == 0) {
                     mob++;
                     if ((piece & pieceRider) == 0) break;
                     to -= 14;
                 }
                 if (Dagaz.AI.g_board[to] & enemy) mob += getMaterial(Dagaz.AI.g_board[to]) / 10;
                 to = from + 14;
                 while (Dagaz.AI.g_board[to] == 0) {
                     mob++;
                     if ((piece & pieceRider) == 0) break;
                     to += 14;
                 }
                 if (Dagaz.AI.g_board[to] & enemy) mob += getMaterial(Dagaz.AI.g_board[to]) / 10;
                 to = from - 18;
                 while (Dagaz.AI.g_board[to] == 0) {
                     mob++;
                     if ((piece & pieceRider) == 0) break;
                     to -= 18;
                 }
                 if (Dagaz.AI.g_board[to] & enemy) mob += getMaterial(Dagaz.AI.g_board[to]) / 10;
                 to = from + 18;
                 while (Dagaz.AI.g_board[to] == 0) {
                     mob++;
                     if ((piece & pieceRider) == 0) break;
                     to += 18;
                 }
                 if (Dagaz.AI.g_board[to] & enemy) mob += getMaterial(Dagaz.AI.g_board[to]) / 10;
             }
             result += mob;
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
                    Dagaz.AI.g_board[Dagaz.AI.MakeSquare(row, col)] = pieceEmpty;
                    col++;
                }
            } else {
                var isBlack = c >= 'a' && c <= 'z';
                var piece = isBlack ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;
                if (!isBlack) 
                    c = pieces.toLowerCase().charAt(i);
                switch (c) {
                    case 'k':
                        piece |= pieceKing;
                        break;
                }

                if ((i < pieces.length - 1) && (pieces.charAt(i + 1) == '[')) {
                    var ps = 0; var v = ''; i += 2;
                    for (; i < pieces.length; i++) {
                        var c = pieces.charAt(i);
                        if (c == ']') break;
                        v = v + c;
                    }
                    if (v != 0) {
                        piece |= (v & 0xF0) >> 4;
                        piece |= (v & 0x0F) << 4;
                    }
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
            Dagaz.AI.g_baseEval += getMaterial(Dagaz.AI.g_board[i]);
        } else if (Dagaz.AI.g_board[i] & Dagaz.AI.colorBlack) {
            Dagaz.AI.g_baseEval -= getMaterial(Dagaz.AI.g_board[i]);
        }
    }
    if (!Dagaz.AI.g_toMove) Dagaz.AI.g_baseEval = -Dagaz.AI.g_baseEval;
    Dagaz.AI.g_move50 = 0;

    var them = Dagaz.AI.colorWhite - Dagaz.AI.g_toMove;

    var kingPos = getKing(Dagaz.AI.g_toMove);
    Dagaz.AI.g_inCheck = false;
    if (kingPos != 0) {
        Dagaz.AI.g_inCheck = IsSquareAttackable(kingPos, them);
    }

    kingPos = getKing(them);
    if ((kingPos != 0) && IsSquareAttackable(kingPos, Dagaz.AI.g_toMove)) {
        return 'Invalid FEN: Can capture king';
    }

    if (GenerateValidMoves().length == 0) {
        return Dagaz.AI.g_inCheck ? 'Checkmate' : 'Stalemate';
    } 

    return '';
}

Dagaz.AI.SetHash = function() {
    var result = new Object();
    result.hashKeyLow = 0;
    result.hashKeyHigh = 0;
    for (var i = 0; i < 256; i++) {
        var piece = Dagaz.AI.g_board[i];
        if (piece & Dagaz.AI.PLAYERS_MASK) {
            result.hashKeyLow ^= Dagaz.AI.g_zobristLow[i][(piece & Dagaz.AI.PIECE_MASK) >> 4]
            result.hashKeyHigh ^= Dagaz.AI.g_zobristHigh[i][(piece & Dagaz.AI.PIECE_MASK) >> 4]
        }
    }
    if (!Dagaz.AI.g_toMove) {
        result.hashKeyLow ^= Dagaz.AI.g_zobristBlackLow;
        result.hashKeyHigh ^= Dagaz.AI.g_zobristBlackHigh;
    }
    return result;
}

function UndoHistory(inCheck, baseEval, hashKeyLow, hashKeyHigh, move50, captured, piece) {
    this.inCheck = inCheck;
    this.baseEval = baseEval;
    this.hashKeyLow = hashKeyLow;
    this.hashKeyHigh = hashKeyHigh;
    this.move50 = move50;
    this.captured = captured;
    this.piece = piece;
}

Dagaz.AI.MakeMove = function(move) {
    var me = Dagaz.AI.g_toMove >> Dagaz.AI.TYPE_SIZE;
    var otherColor = Dagaz.AI.colorWhite - Dagaz.AI.g_toMove; 

    var flags = move & 0xFF0000;
    var to = (move >> 8) & 0xFF;
    var from = move & 0xFF;
    var captured = Dagaz.AI.g_board[to];
    var piece = Dagaz.AI.g_board[from];

    g_moveUndoStack[Dagaz.AI.g_moveCount] = new UndoHistory(Dagaz.AI.g_inCheck, Dagaz.AI.g_baseEval, Dagaz.AI.g_hashKeyLow, Dagaz.AI.g_hashKeyHigh, Dagaz.AI.g_move50, captured, piece);
    Dagaz.AI.g_moveCount++;

    var newPiece = piece;
    if (captured) {
        newPiece = captured & 0xFF;
        Dagaz.AI.g_baseEval += getMaterial(captured);
        Dagaz.AI.g_board[to] = pieceEmpty;
        Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[to][(captured & Dagaz.AI.PIECE_MASK) >> 4];
        Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[to][(captured & Dagaz.AI.PIECE_MASK) >> 4];
        Dagaz.AI.g_move50 = 0;
    }

    if (flags & moveflagPromotion) {
        newPiece = piece | ((piece & 0xF0) >> 4);
    }

    Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[from][(piece & Dagaz.AI.PIECE_MASK) >> 4];
    Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[from][(piece & Dagaz.AI.PIECE_MASK) >> 4];
    Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[to][(newPiece & Dagaz.AI.PIECE_MASK) >> 4];
    Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[to][(newPiece & Dagaz.AI.PIECE_MASK) >> 4];
    Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristBlackLow;
    Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristBlackHigh;

    if (newPiece != piece) {
        Dagaz.AI.g_board[to] = newPiece;
        Dagaz.AI.g_baseEval -= getMaterial(piece);
        Dagaz.AI.g_baseEval += getMaterial(newPiece);
    } else {
        Dagaz.AI.g_board[to] = Dagaz.AI.g_board[from];
    }
    Dagaz.AI.g_board[from] = pieceEmpty;

    Dagaz.AI.g_toMove = otherColor;
    Dagaz.AI.g_baseEval = -Dagaz.AI.g_baseEval;

    var kingPos = getKing(Dagaz.AI.colorWhite - Dagaz.AI.g_toMove);
    if ((kingPos != 0) && IsSquareAttackable(kingPos, otherColor)) {
        Dagaz.AI.UnmakeMove(move);
        return false;
    }

    Dagaz.AI.g_inCheck = false;
    kingPos = getKing(Dagaz.AI.g_toMove);
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

    var flags = move & 0xFF0000;
    var captured = g_moveUndoStack[Dagaz.AI.g_moveCount].captured;
    var piece = g_moveUndoStack[Dagaz.AI.g_moveCount].piece;
    var to = (move >> 8) & 0xFF;
    var from = move & 0xFF;

    Dagaz.AI.g_board[from] = piece;
    Dagaz.AI.g_board[to] = captured;
}

function IsSquareAttackableFrom(target, from) {
    var to;
    var piece = Dagaz.AI.g_board[from];

    if (piece & pieceKing) {
        to = from - 16; if (target == to) return true;
        to = from + 16; if (target == to) return true;
        to = from - 1;  if (target == to) return true;
        to = from + 1;  if (target == to) return true;
    }

    if (piece & pieceFerz) {
        to = from - 17; if (target == to) return true;
        while (Dagaz.AI.g_board[to] == 0) {
             if ((piece & pieceBishop) == 0) break;
             to -= 17;
             if (target == to) return true;
        }
        to = from + 17; if (target == to) return true;
        while (Dagaz.AI.g_board[to] == 0) {
             if ((piece & pieceBishop) == 0) break;
             to += 17;
             if (target == to) return true;
        }
        to = from - 15; if (target == to) return true;
        while (Dagaz.AI.g_board[to] == 0) {
             if ((piece & pieceBishop) == 0) break;
             to -= 15;
             if (target == to) return true;
        }
        to = from + 15; if (target == to) return true;
        while (Dagaz.AI.g_board[to] == 0) {
             if ((piece & pieceBishop) == 0) break;
             to += 15;
             if (target == to) return true;
        }
    }

    if (piece & pieceDabbaba) {
        to = from - 32; if (target == to) return true;
        while (Dagaz.AI.g_board[to] == 0) {
             if ((piece & pieceBishop) == 0) break;
             to -= 32;
             if (target == to) return true;
        }
        to = from + 32; if (target == to) return true;
        while (Dagaz.AI.g_board[to] == 0) {
             if ((piece & pieceBishop) == 0) break;
             to += 32;
             if (target == to) return true;
        }
        to = from - 2; if (target == to) return true;
        while (Dagaz.AI.g_board[to] == 0) {
             if ((piece & pieceBishop) == 0) break;
             to -= 2;
             if (target == to) return true;
        }
        to = from + 2; if (target == to) return true;
        while (Dagaz.AI.g_board[to] == 0) {
             if ((piece & pieceBishop) == 0) break;
             to += 2;
             if (target == to) return true;
        }
    }

    if (piece & pieceAlfil) {
        to = from - 34; if (target == to) return true;
        while (Dagaz.AI.g_board[to] == 0) {
             if ((piece & pieceBishop) == 0) break;
             to -= 34;
             if (target == to) return true;
        }
        to = from + 34; if (target == to) return true;
        while (Dagaz.AI.g_board[to] == 0) {
             if ((piece & pieceBishop) == 0) break;
             to += 34;
             if (target == to) return true;
        }
        to = from - 30; if (target == to) return true;
        while (Dagaz.AI.g_board[to] == 0) {
             if ((piece & pieceBishop) == 0) break;
             to -= 30;
             if (target == to) return true;
        }
        to = from + 30; if (target == to) return true;
        while (Dagaz.AI.g_board[to] == 0) {
             if ((piece & pieceBishop) == 0) break;
             to += 30;
             if (target == to) return true;
        }
    }

    if (piece & pieceKnight) {
        to = from - 31; if (target == to) return true;
        while (Dagaz.AI.g_board[to] == 0) {
             if ((piece & pieceBishop) == 0) break;
             to -= 31;
             if (target == to) return true;
        }
        to = from + 31; if (target == to) return true;
        while (Dagaz.AI.g_board[to] == 0) {
             if ((piece & pieceBishop) == 0) break;
             to += 31;
             if (target == to) return true;
        }
        to = from - 33; if (target == to) return true;
        while (Dagaz.AI.g_board[to] == 0) {
             if ((piece & pieceBishop) == 0) break;
             to -= 33;
             if (target == to) return true;
        }
        to = from + 33; if (target == to) return true;
        while (Dagaz.AI.g_board[to] == 0) {
             if ((piece & pieceBishop) == 0) break;
             to += 33;
             if (target == to) return true;
        }
        to = from - 14; if (target == to) return true;
        while (Dagaz.AI.g_board[to] == 0) {
             if ((piece & pieceBishop) == 0) break;
             to -= 14;
             if (target == to) return true;
        }
        to = from + 14; if (target == to) return true;
        while (Dagaz.AI.g_board[to] == 0) {
             if ((piece & pieceBishop) == 0) break;
             to += 14;
             if (target == to) return true;
        }
        to = from - 18; if (target == to) return true;
        while (Dagaz.AI.g_board[to] == 0) {
             if ((piece & pieceBishop) == 0) break;
             to -= 18;
             if (target == to) return true;
        }
        to = from + 18; if (target == to) return true;
        while (Dagaz.AI.g_board[to] == 0) {
             if ((piece & pieceBishop) == 0) break;
             to += 18;
             if (target == to) return true;
        }
    }

    return false;
}

function IsSquareAttackable(target, color) {
    var enemy = color ? Dagaz.AI.colorWhite : Dagaz.AI.colorBlack;
    for (var from = 0; from < 256; from++) {
         if (Dagaz.AI.g_board[from] & enemy) {
             if (IsSquareAttackableFrom(target, from)) return true;
         }
    }
    return false;
}

function GenerateMove(moves, from, to) {
    var row = to & 0xF0;
    var flags = 0;
    if ((Dagaz.AI.g_toMove && (row == 0x20)) ||
       (!Dagaz.AI.g_toMove && (row == 0x90))) {
       var piece = Dagaz.AI.g_board[from];
       if (((piece & 0x0F) == 0) && (piece & 0xF0)) flags = moveflagPromotion;
    }
    moves.push(from | (to << 8) | flags);
}

function GenerateValidMoves() {
    var moveList = new Array();
    var allMoves = new Array();
    GenerateCaptureMoves(allMoves, null);
    GenerateQuietMoves(allMoves);
    for (var i = allMoves.length - 1; i >= 0; i--) {
        if (Dagaz.AI.MakeMove(allMoves[i])) {
            moveList[moveList.length] = allMoves[i];
            Dagaz.AI.UnmakeMove(allMoves[i]);
        }
    }
    return moveList;
}

Dagaz.AI.GenerateAllMoves = function() {
  var moves = [];
  if (getKing(Dagaz.AI.g_toMove) == 0) return moves;
  GenerateCaptureMoves(moves);
  GenerateQuietMoves(moves);
  return moves;
}

Dagaz.AI.GenerateCaptureMoves = function() {
  var moves = [];
  if (getKing(Dagaz.AI.g_toMove) == 0) return moves;
  GenerateCaptureMoves(moves);
  return moves;
}

function GenerateQuietMoves(moves) {
    var to;
    var me = Dagaz.AI.g_toMove ? Dagaz.AI.colorWhite : Dagaz.AI.colorBlack;
    for (var from = 0; from < 256; from++) {
         if (Dagaz.AI.g_board[from] & me) {
             var piece = Dagaz.AI.g_board[from] & Dagaz.AI.TYPE_MASK;
             if (piece & pieceKing) {
                 to = from - 16;
                 if (Dagaz.AI.g_board[to] == 0) GenerateMove(moves, from, to);
                 to = from + 16;
                 if (Dagaz.AI.g_board[to] == 0) GenerateMove(moves, from, to);
                 to = from - 1;
                 if (Dagaz.AI.g_board[to] == 0) GenerateMove(moves, from, to);
                 to = from + 1;
                 if (Dagaz.AI.g_board[to] == 0) GenerateMove(moves, from, to);
             }
             if (piece & pieceFerz) {
                 to = from - 17;
                 while (Dagaz.AI.g_board[to] == 0) {
                     GenerateMove(moves, from, to);
                     if ((piece & pieceBishop) == 0) break;
                     to -= 17;
                 }
                 to = from + 17;
                 while (Dagaz.AI.g_board[to] == 0) {
                     GenerateMove(moves, from, to);
                     if ((piece & pieceBishop) == 0) break;
                     to += 17;
                 }
                 to = from - 15;
                 while (Dagaz.AI.g_board[to] == 0) {
                     GenerateMove(moves, from, to);
                     if ((piece & pieceBishop) == 0) break;
                     to -= 15;
                 }
                 to = from + 15;
                 while (Dagaz.AI.g_board[to] == 0) {
                     GenerateMove(moves, from, to);
                     if ((piece & pieceBishop) == 0) break;
                     to += 15;
                 }
             }
             if (piece & pieceDabbaba) {
                 to = from - 32;
                 while (Dagaz.AI.g_board[to] == 0) {
                     GenerateMove(moves, from, to);
                     if ((piece & pieceRook) == 0) break;
                     to -= 32;
                 }
                 to = from + 32;
                 while (Dagaz.AI.g_board[to] == 0) {
                     GenerateMove(moves, from, to);
                     if ((piece & pieceRook) == 0) break;
                     to += 32;
                 }
                 to = from - 2;
                 while (Dagaz.AI.g_board[to] == 0) {
                     GenerateMove(moves, from, to);
                     if ((piece & pieceRook) == 0) break;
                     to -= 2;
                 }
                 to = from + 2;
                 while (Dagaz.AI.g_board[to] == 0) {
                     GenerateMove(moves, from, to);
                     if ((piece & pieceRook) == 0) break;
                     to += 2;
                 }
             }
             if (piece & pieceAlfil) {
                 to = from - 34;
                 while (Dagaz.AI.g_board[to] == 0) {
                     GenerateMove(moves, from, to);
                     if ((piece & pieceElephant) == 0) break;
                     to -= 34;
                 }
                 to = from + 34;
                 while (Dagaz.AI.g_board[to] == 0) {
                     GenerateMove(moves, from, to);
                     if ((piece & pieceElephant) == 0) break;
                     to += 34;
                 }
                 to = from - 30;
                 while (Dagaz.AI.g_board[to] == 0) {
                     GenerateMove(moves, from, to);
                     if ((piece & pieceElephant) == 0) break;
                     to -= 30;
                 }
                 to = from + 30;
                 while (Dagaz.AI.g_board[to] == 0) {
                     GenerateMove(moves, from, to);
                     if ((piece & pieceElephant) == 0) break;
                     to += 30;
                 }
             }
             if (piece & pieceKnight) {
                 to = from - 31;
                 while (Dagaz.AI.g_board[to] == 0) {
                     GenerateMove(moves, from, to);
                     if ((piece & pieceRider) == 0) break;
                     to -= 31;
                 }
                 to = from + 31;
                 while (Dagaz.AI.g_board[to] == 0) {
                     GenerateMove(moves, from, to);
                     if ((piece & pieceRider) == 0) break;
                     to += 31;
                 }
                 to = from - 33;
                 while (Dagaz.AI.g_board[to] == 0) {
                     GenerateMove(moves, from, to);
                     if ((piece & pieceRider) == 0) break;
                     to -= 33;
                 }
                 to = from + 33;
                 while (Dagaz.AI.g_board[to] == 0) {
                     GenerateMove(moves, from, to);
                     if ((piece & pieceRider) == 0) break;
                     to += 33;
                 }
                 to = from - 14;
                 while (Dagaz.AI.g_board[to] == 0) {
                     GenerateMove(moves, from, to);
                     if ((piece & pieceRider) == 0) break;
                     to -= 14;
                 }
                 to = from + 14;
                 while (Dagaz.AI.g_board[to] == 0) {
                     GenerateMove(moves, from, to);
                     if ((piece & pieceRider) == 0) break;
                     to += 14;
                 }
                 to = from - 18;
                 while (Dagaz.AI.g_board[to] == 0) {
                     GenerateMove(moves, from, to);
                     if ((piece & pieceRider) == 0) break;
                     to -= 18;
                 }
                 to = from + 18;
                 while (Dagaz.AI.g_board[to] == 0) {
                     GenerateMove(moves, from, to);
                     if ((piece & pieceRider) == 0) break;
                     to += 18;
                 }
            }
         }
    }
}

function GenerateCaptureMoves(moves) {
    var to;
    if (getKing(Dagaz.AI.g_toMove) == 0) return;
    var me = Dagaz.AI.g_toMove ? Dagaz.AI.colorWhite : Dagaz.AI.colorBlack;
    var enemy = Dagaz.AI.g_toMove ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;
    for (var from = 0; from < 256; from++) {
         if (Dagaz.AI.g_board[from] & me) {
             var piece = Dagaz.AI.g_board[from] & Dagaz.AI.TYPE_MASK;
             if (piece & pieceKing) {
                 to = from - 16;
                 if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moves, from, to);
                 to = from + 16;
                 if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moves, from, to);
                 to = from - 1;
                 if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moves, from, to);
                 to = from + 1;
                 if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moves, from, to);
             }
             if (piece & pieceFerz) {
                 to = from - 17;
                 while (Dagaz.AI.g_board[to] == 0) {
                     if ((piece & pieceBishop) == 0) break;
                     to -= 17;
                 }
                 if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moves, from, to);
                 to = from + 17;
                 while (Dagaz.AI.g_board[to] == 0) {
                     if ((piece & pieceBishop) == 0) break;
                     to += 17;
                 }
                 if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moves, from, to);
                 to = from - 15;
                 while (Dagaz.AI.g_board[to] == 0) {
                     if ((piece & pieceBishop) == 0) break;
                     to -= 15;
                 }
                 if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moves, from, to);
                 to = from + 15;
                 while (Dagaz.AI.g_board[to] == 0) {
                     if ((piece & pieceBishop) == 0) break;
                     to += 15;
                 }
                 if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moves, from, to);
             }
             if (piece & pieceDabbaba) {
                 to = from - 32;
                 while (Dagaz.AI.g_board[to] == 0) {
                     if ((piece & pieceBishop) == 0) break;
                     to -= 32;
                 }
                 if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moves, from, to);
                 to = from + 32;
                 while (Dagaz.AI.g_board[to] == 0) {
                     if ((piece & pieceBishop) == 0) break;
                     to += 32;
                 }
                 if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moves, from, to);
                 to = from - 2;
                 while (Dagaz.AI.g_board[to] == 0) {
                     if ((piece & pieceBishop) == 0) break;
                     to -= 2;
                 }
                 if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moves, from, to);
                 to = from + 2;
                 while (Dagaz.AI.g_board[to] == 0) {
                     if ((piece & pieceBishop) == 0) break;
                     to += 2;
                 }
                 if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moves, from, to);
             }
             if (piece & pieceAlfil) {
                 to = from - 34;
                 while (Dagaz.AI.g_board[to] == 0) {
                     if ((piece & pieceBishop) == 0) break;
                     to -= 34;
                 }
                 if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moves, from, to);
                 to = from + 34;
                 while (Dagaz.AI.g_board[to] == 0) {
                     if ((piece & pieceBishop) == 0) break;
                     to += 34;
                 }
                 if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moves, from, to);
                 to = from - 30;
                 while (Dagaz.AI.g_board[to] == 0) {
                     if ((piece & pieceBishop) == 0) break;
                     to -= 30;
                 }
                 if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moves, from, to);
                 to = from + 30;
                 while (Dagaz.AI.g_board[to] == 0) {
                     if ((piece & pieceBishop) == 0) break;
                     to += 30;
                 }
                 if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moves, from, to);
             }
             if (piece & pieceKnight) {
                 to = from - 31;
                 while (Dagaz.AI.g_board[to] == 0) {
                     if ((piece & pieceBishop) == 0) break;
                     to -= 31;
                 }
                 if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moves, from, to);
                 to = from + 31;
                 while (Dagaz.AI.g_board[to] == 0) {
                     if ((piece & pieceBishop) == 0) break;
                     to += 31;
                 }
                 if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moves, from, to);
                 to = from - 33;
                 while (Dagaz.AI.g_board[to] == 0) {
                     if ((piece & pieceBishop) == 0) break;
                     to -= 33;
                 }
                 if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moves, from, to);
                 to = from + 33;
                 while (Dagaz.AI.g_board[to] == 0) {
                     if ((piece & pieceBishop) == 0) break;
                     to += 33;
                 }
                 if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moves, from, to);
                 to = from - 14;
                 while (Dagaz.AI.g_board[to] == 0) {
                     if ((piece & pieceBishop) == 0) break;
                     to -= 14;
                 }
                 if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moves, from, to);
                 to = from + 14;
                 while (Dagaz.AI.g_board[to] == 0) {
                     if ((piece & pieceBishop) == 0) break;
                     to += 14;
                 }
                 if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moves, from, to);
                 to = from - 18;
                 while (Dagaz.AI.g_board[to] == 0) {
                     if ((piece & pieceBishop) == 0) break;
                     to -= 18;
                 }
                 if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moves, from, to);
                 to = from + 18;
                 while (Dagaz.AI.g_board[to] == 0) {
                     if ((piece & pieceBishop) == 0) break;
                     to += 18;
                 }
                 if (Dagaz.AI.g_board[to] & enemy) GenerateMove(moves, from, to);
             }
         }
    }
}

})();
