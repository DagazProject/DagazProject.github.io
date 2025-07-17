"use strict";

Dagaz.Model.WIDTH         = 5;
Dagaz.Model.HEIGHT        = 10;
Dagaz.AI.PLANES           = 9;

(function() {

Dagaz.AI.NOISE_FACTOR     = 0;
Dagaz.AI.PIECE_MASK       = 0x1F;
Dagaz.AI.TYPE_MASK        = 0xF;
Dagaz.AI.PLAYERS_MASK     = 0x30;
Dagaz.AI.COUNTER_SIZE     = 4;
Dagaz.AI.TYPE_SIZE        = 4;

Dagaz.AI.colorBlack       = 0x20;
Dagaz.AI.colorWhite       = 0x10;

var pieceEmpty            = 0x00;
var piecePawn             = 0x01;
var pieceAdvisor          = 0x02;
var pieceBishop           = 0x03;
var pieceKnight           = 0x04;
var pieceUnicorn          = 0x05;
var pieceCannon           = 0x06;
var pieceRook             = 0x07;
var pieceKing             = 0x08;
var pieceNo               = 0x80;

var g_moveUndoStack = new Array();

var g_mobUnit;

var materialTable = [0, 300, 1200, 1200, 2700, 2850, 6000, 7000, 600000];

Dagaz.AI.pieceAdj = [
[   
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
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0
]];

var pieceSquareAdj = new Array(8);
var flipTable = new Array(256 * 9);

var g_seeValues    = [0, 1, 2, 2, 3, 4, 5, 6, 900, 0, 0, 0, 0, 0, 0, 0,
                      0, 1, 2, 2, 3, 4, 5, 6, 900, 0, 0, 0, 0, 0, 0, 0];


function MakeSquare(row, column, plane) {
    return ((plane + 2) << 8) | ((row + 2) << 4) | (column + 4);
}

function FormatSquare(square) {
    var p = ['A', 'B', 'C', 'D', 'E'];
    var r = ['a', 'b', 'c', 'd', 'e'];
    return p[(square >> 8)  - 2] + 
           r[(square & 0xF) - 4] + 
           (((Dagaz.Model.HEIGHT + 1) - ((square & 0xF0) >> 4)) + 1);
}

Dagaz.AI.FormatMove = function(move, color) {
    var result = FormatSquare(move & 0xFFF) + '-' + FormatSquare((move >> 12) & 0xFFF);
    return result;
}

Dagaz.AI.Evaluate = function() {
    var curEval = Dagaz.AI.g_baseEval;

    var mobility = Mobility(Dagaz.AI.colorWhite) - Mobility(0);

    if (Dagaz.AI.g_toMove == 0) {
        // Black
        curEval -= mobility;
    } else {
        curEval += mobility;
    }
    
    return curEval;
}

Dagaz.AI.ScoreMove = function(move) {
    var moveTo = (move >> 12) & 0xFFF;
    var captured = Dagaz.AI.g_board[moveTo] & Dagaz.AI.TYPE_MASK;
    var piece = Dagaz.AI.g_board[move & 0xFFF];
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
    var from = hashMove & 0xFFF;
    var to = (hashMove >> 12) & 0xFFF;
    var ourPiece = Dagaz.AI.g_board[from];
    var pieceType = ourPiece & Dagaz.AI.TYPE_MASK;
    if (pieceType < piecePawn || pieceType > pieceKing) return false;
    // Can't move a piece we don't control
    if (Dagaz.AI.g_toMove != (ourPiece & Dagaz.AI.colorWhite)) return false;
    // Can't move to a square that has something of the same color
    if (Dagaz.AI.g_board[to] != 0 && (Dagaz.AI.g_toMove == (Dagaz.AI.g_board[to] & Dagaz.AI.colorWhite))) return false;
    // This validates that this piece type can actually make the attack
    return IsSquareAttackableFrom(to, from);
}

Dagaz.AI.isNoZugzwang = function() {
    return true;
}

function MakeTable(table) {
    var result = new Array(256 * 9);
    for (var i = 0; i < 256 * 9; i++) {
        result[i] = 0;
    }
    for (var plane = 0; plane < Dagaz.Model.HEIGHT; plane++) {
        for (var row = 0; row < Dagaz.Model.HEIGHT; row++) {
            for (var col = 0; col < Dagaz.Model.WIDTH; col++) {
                result[MakeSquare(row, col, plane)] = table[(plane * Dagaz.Model.WIDTH * Dagaz.Model.HEIGHT) + (row * Dagaz.Model.WIDTH) + col];
            }
        }
    }
    return result;
}

var ResetGame = Dagaz.AI.ResetGame;

Dagaz.AI.ResetGame = function() {

  ResetGame();

  for (var plane = 0; plane < Dagaz.Model.HEIGHT; plane++) {
       for (var row = 0; row < Dagaz.Model.HEIGHT; row++) {
            for (var col = 0; col < Dagaz.Model.WIDTH; col++) {
                 var square = MakeSquare(row, col, plane);
                 flipTable[square] = MakeSquare((Dagaz.Model.HEIGHT - 1) - row, (Dagaz.Model.WIDTH - 1) - col, (Dagaz.Model.HEIGHT - 1) - plane);
            }
       }
  }

  pieceSquareAdj[pieceEmpty]   = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[piecePawn]    = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceAdvisor] = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceBishop]  = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceKnight]  = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceUnicorn] = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceCannon]  = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceRook]    = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);
  pieceSquareAdj[pieceKing]    = MakeTable(Dagaz.AI.pieceAdj[pieceEmpty]);

  InitializeEval();
}

function InitializeEval() {
    g_mobUnit = new Array(2);
    for (var i = 0; i < 2; i++) {
        g_mobUnit[i] = new Array();
        var enemy = i == 0 ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;
        var friend = i == 0 ? Dagaz.AI.colorWhite : Dagaz.AI.colorBlack;
        g_mobUnit[i][0] = 1;
        g_mobUnit[i][pieceNo] = 0;
        g_mobUnit[i][enemy  | piecePawn]    = 1;
        g_mobUnit[i][enemy  | pieceAdvisor] = 1;
        g_mobUnit[i][enemy  | pieceBishop]  = 1;
        g_mobUnit[i][enemy  | pieceKnight]  = 2;
        g_mobUnit[i][enemy  | pieceUnicorn] = 2;
        g_mobUnit[i][enemy  | pieceCannon]  = 4;
        g_mobUnit[i][enemy  | pieceRook]    = 5;
        g_mobUnit[i][enemy  | pieceKing]    = 6;
        g_mobUnit[i][friend | piecePawn]    = 0;
        g_mobUnit[i][friend | pieceAdvisor] = 0;
        g_mobUnit[i][friend | pieceBishop]  = 0;
        g_mobUnit[i][friend | pieceKnight]  = 0;
        g_mobUnit[i][friend | pieceUnicorn] = 0;
        g_mobUnit[i][friend | pieceCannon]  = 0;
        g_mobUnit[i][friend | pieceRook]    = 0;
        g_mobUnit[i][friend | pieceKing]    = 0;
    }
}

Dagaz.AI.InitializeFromFen = function(fen) {
    var chunks = fen.split('+');

    for (var i = 0; i < 256 * 9; i++) 
        Dagaz.AI.g_board[i] = pieceNo;

    var pln = Dagaz.Model.HEIGHT - 1; var row = 0; var col = 0;

    var pieces = chunks[0];
    for (var i = 0; i < pieces.length; i++) {
         var c = pieces.charAt(i);

         if (c == '/') {
             row++;
             col = 0;
             if (row >= Dagaz.Model.HEIGHT) {
                 pln--;
                 row = 0;
             }
             if (pln < 0) break;
         } else {
            if (c >= '0' && c <= '9') {
                for (var j = 0; j < parseInt(c); j++) {
                    Dagaz.AI.g_board[MakeSquare(row, col, pln)] = 0;
                    col++;
                }
            } else {
                var isBlack = c >= 'a' && c <= 'z';
                var piece = isBlack ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;
                if (!isBlack) 
                    c = pieces.toLowerCase().charAt(i);
                switch (c) {
                    case 'p':
                        piece |= piecePawn;
                        break;
                    case 'u':
                        piece |= pieceUnicorn;
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
                    case 'q':
                        piece |= pieceAdvisor;
                        break;
                    case 'c':
                        piece |= pieceCannon;
                        break;
                    case 'k':
                        piece |= pieceKing;
                        break;
                }
                Dagaz.AI.g_board[MakeSquare(row, col, pln)] = piece;
//              console.log(FormatSquare(MakeSquare(row, col, pln)) + '[' + row + ',' + col + ',' + pln + ']: ' + piece);
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
    for (var i = 0; i < 256 * 9; i++) {
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
    var kingPos = Dagaz.AI.g_pieceList[(Dagaz.AI.g_toMove | pieceKing) << Dagaz.AI.COUNTER_SIZE];
    Dagaz.AI.g_inCheck = false;
    if (kingPos != 0) {
        Dagaz.AI.g_inCheck = IsSquareAttackable(kingPos, them);
    }

    // Check for king capture (invalid FEN)
    kingPos = Dagaz.AI.g_pieceList[(them | pieceKing) << Dagaz.AI.COUNTER_SIZE];
    if ((kingPos != 0) && IsSquareAttackable(kingPos, Dagaz.AI.g_toMove)) {
        return 'Invalid FEN: Can capture king';
    }

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

})();
