"use strict";

(function() {

Dagaz.AI.UNPROM_CAPTURED = false;

Dagaz.AI.STACK_MASK      = 0x0F;
var MAX_STACK            = 32;

Dagaz.AI.PIECE_MASK      = 0x3F;
Dagaz.AI.TYPE_MASK       = 0x10;
Dagaz.AI.PLAYERS_MASK    = 0x60;
Dagaz.AI.TYPE_SIZE       = 5;
Dagaz.AI.STACK_SIZE      = 4;

Dagaz.AI.colorBlack      = 0x40;
Dagaz.AI.colorWhite      = 0x20;
Dagaz.AI.PLAYERS_MASK    = 0x60;

var pieceEmpty           = 0x00;
var pieceMan             = 0x00;
var pieceKing            = 0x10;
var pieceNo              = 0x80;

var moveflagPromotion   = 0x01000000;
var moveflagUnPromotion = 0x02000000;

var stacks = new Array();
var g_moveUndoStack = new Array();

var pieceSquareAdj = new Array(2);
var flipTable = new Array(256);

function clearStacks() {
  stacks = [];
  stacks.push([]);
  for (var i = 0; i < 15; i++) {
       var d = [];
       for (var j = 0; j < MAX_STACK; j++) {
           d.push(0);
       }
       stacks.push({
           head: 0, 
           tail: 0, 
           data: d
       });
  }
}

function isEmpty(ix) {
  return stacks[ix].head == stacks[ix].tail;
}

function getStack() {
  for (var ix = 1; ix < stacks.length; ix++) {
       if (isEmpty(ix)) return ix;
  }
  return 0;
}

function pushStack(ix, x) {
  var offset = stacks[ix].head + 1;
  if (offset >= MAX_STACK) offset = 0;
  if (offset == stacks[ix].tail) return false;
  stacks[ix].data[stacks[ix].head] = x;
  stacks[ix].head = offset;
  return true;
}

function popStack(ix) {
  if (stacks[ix].head == stacks[ix].tail) return null;
  stacks[ix].head--;
  if (stacks[ix].head < 0) stacks[ix].head = MAX_STACK - 1;
  return stacks[ix].data[stacks[ix].head];
}

function shiftStack(ix) {
  if (stacks[ix].head == stacks[ix].tail) return null;
  var r = stacks[ix].data[stacks[ix].tail];
  stacks[ix].tail++;
  if (stacks[ix].tail >= MAX_STACK) stacks[ix].tail = 0;
  return r;
}

function unshiftStack(ix, x) {
  var offset = stacks[ix].tail - 1;
  if (offset < 0) offset = MAX_STACK - 1;
  if (offset == stacks[ix].head) return false;
  stacks[ix].data[offset] = x;
  stacks[ix].tail = offset;
  return true;
}

Dagaz.AI.iterateStack = function(ix, f) {
  var offset = stacks[ix].head;
  while (offset != stacks[ix].tail) {
      offset--;
      if (offset < 0) offset = MAX_STACK - 1;
      f(stacks[ix].data[offset]);
  }
}

Dagaz.AI.MakeSquare = function(row, column) {
    return ((row + 2) << 4) | (column + 2);
}

Dagaz.AI.FormatSquare = function(square) {
    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    return letters[(square & 0xF) - 2] + (((Dagaz.Model.HEIGHT + 1) - (square >> 4)) + 1);
}

Dagaz.AI.FormatMove = function(move) {
    var result = null;
    for (var i = 0; i < move.length; i++) {
        if (result === null) {
            result = Dagaz.AI.FormatSquare(move[i] & 0xFF);
        }
        result = result + Dagaz.AI.FormatSquare((move[i] >> 8) & 0xFF);
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

var ResetGame = Dagaz.AI.ResetGame;

Dagaz.AI.ResetGame = function() {
  ResetGame();

  for (var row = 0; row < Dagaz.Model.HEIGHT; row++) {
       for (var col = 0; col < Dagaz.Model.WIDTH; col++) {
            var square = Dagaz.AI.MakeSquare(row, col);
            flipTable[square] = Dagaz.AI.MakeSquare((Dagaz.Model.HEIGHT - 1) - row, (Dagaz.Model.WIDTH - 1) - col);
       }
  }

  pieceSquareAdj[pieceMan >> Dagaz.AI.STACK_SIZE]  = MakeTable(Dagaz.AI.pieceAdj[pieceMan >> Dagaz.AI.STACK_SIZE]);
  pieceSquareAdj[pieceKing >> Dagaz.AI.STACK_SIZE] = MakeTable(Dagaz.AI.pieceAdj[pieceKing >> Dagaz.AI.STACK_SIZE]);
}

Dagaz.AI.InitializeFromFen = function(fen) {
    var chunks = fen.split('-');

    clearStacks();
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
                    case 'p':
                        piece |= pieceMan;
                        break;
                    case 'k':
                        piece |= pieceKing;
                        break;
                }

                if ((i < pieces.length - 1) && (pieces.charAt(i + 1) == '[')) {
                    var ix = getStack(); i += 2;
                    var ps = 0;
                    for (; i < pieces.length; i++) {
                        var c = pieces.charAt(i);
                        if (c == ']') break;
                        if (ix > 0) {
                            var ib = c >= 'a' && c <= 'z';
                            var x = ib ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;
                            if (!ib) 
                                c = pieces.toLowerCase().charAt(i);
                            switch (c) {
                                case 'p':
                                    x |= pieceMan;
                                    break;
                                case 'k':
                                    x |= pieceKing;
                                    break;
                            }
                            pushStack(ix, x);
                            ps++;
                        }
                    }
                    if (ps > 0) {
                        piece |= ix;
                    }
                }
                
                if ((row < Dagaz.Model.HEIGHT) && (Dagaz.Model.WIDTH)) {
                    Dagaz.AI.g_board[Dagaz.AI.MakeSquare(row, col)] = piece;
                }
                col++;
            }
        }
    }

    Dagaz.AI.g_toMove = chunks[1].charAt(0) == 'w' ? Dagaz.AI.colorWhite : pieceEmpty;
    Dagaz.AI.isWhite = Dagaz.AI.g_toMove;

    var hashResult = Dagaz.AI.SetHash();
    Dagaz.AI.g_hashKeyLow = hashResult.hashKeyLow;
    Dagaz.AI.g_hashKeyHigh = hashResult.hashKeyHigh;

    Dagaz.AI.g_baseEval = 0;
    for (var i = 0; i < 256; i++) {
        var pieceType = (Dagaz.AI.g_board[i] & Dagaz.AI.TYPE_MASK) >> Dagaz.AI.STACK_SIZE;
        if (Dagaz.AI.g_board[i] & Dagaz.AI.colorWhite) {
            Dagaz.AI.g_baseEval += pieceSquareAdj[pieceType][i];
            Dagaz.AI.g_baseEval += Dagaz.AI.materialTable[pieceType];
        } else if (Dagaz.AI.g_board[i] & Dagaz.AI.colorBlack) {
            Dagaz.AI.g_baseEval -= pieceSquareAdj[pieceType][flipTable[i]];
            Dagaz.AI.g_baseEval -= Dagaz.AI.materialTable[pieceType];
        }
    }
    if (!Dagaz.AI.g_toMove) Dagaz.AI.g_baseEval = -Dagaz.AI.g_baseEval;
    Dagaz.AI.g_move50 = 0;

    return '';
}

function UndoHistory(move, step, baseEval, hashKeyLow, hashKeyHigh, move50) {
    this.move = move;
    this.step = step;
    this.baseEval = baseEval;
    this.hashKeyLow = hashKeyLow;
    this.hashKeyHigh = hashKeyHigh;
    this.move50 = move50;
}

Dagaz.AI.MakeStep = function(move, step) {
    var me = Dagaz.AI.g_toMove >> Dagaz.AI.TYPE_SIZE;
    var flags = move & 0xFF000000;
    var to = (move >> 8) & 0xFF;
    var from = move & 0xFF;
    var target = (move >> 16) & 0xFF;

    var captured = target ? Dagaz.AI.g_board[target] : pieceEmpty;
    var piece = Dagaz.AI.g_board[from];

    g_moveUndoStack[Dagaz.AI.g_moveCount] = new UndoHistory(move, step, Dagaz.AI.g_baseEval, Dagaz.AI.g_hashKeyLow, Dagaz.AI.g_hashKeyHigh, Dagaz.AI.g_move50);
    Dagaz.AI.g_moveCount++;

    if (captured) {
        var capturedType = (captured & Dagaz.AI.TYPE_MASK) >> Dagaz.AI.STACK_SIZE;
        Dagaz.AI.g_baseEval += Dagaz.AI.materialTable[capturedType];
        Dagaz.AI.g_baseEval += pieceSquareAdj[capturedType][me ? flipTable[target] : target];

        Dagaz.AI.g_board[target] = pieceEmpty;

        Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[target][captured & Dagaz.AI.PIECE_MASK];
        Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[target][captured & Dagaz.AI.PIECE_MASK];

        var ix = captured & Dagaz.AI.STACK_MASK;
        var p = (ix > 0) ? popStack(ix) : null;
        if (p !== null) {
            var pType = (p & Dagaz.AI.TYPE_MASK) >> Dagaz.AI.STACK_SIZE;
            var enemy = me ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;

            var v = Dagaz.AI.materialTable[pType];
            v += pieceSquareAdj[pType][(p & Dagaz.AI.colorWhite) ? target : flipTable[target]];
            Dagaz.AI.g_baseEval -= (p & enemy) ? v : -v;

            if (!isEmpty(ix)) p |= ix;
            Dagaz.AI.g_board[target] = p;

            Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[target][p & Dagaz.AI.PIECE_MASK];
            Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[target][p & Dagaz.AI.PIECE_MASK];
        }
        Dagaz.AI.g_move50 = 0;
    }

    Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[from][piece & Dagaz.AI.PIECE_MASK];
    Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[from][piece & Dagaz.AI.PIECE_MASK];
    Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[to][piece & Dagaz.AI.PIECE_MASK];
    Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[to][piece & Dagaz.AI.PIECE_MASK];

    Dagaz.AI.g_baseEval -= pieceSquareAdj[(piece & Dagaz.AI.TYPE_MASK) >> Dagaz.AI.STACK_SIZE][me == 0 ? flipTable[from] : from];

    if (captured || (flags & moveflagPromotion)) {
        var newPiece = piece;
        if (flags & moveflagPromotion) {
            newPiece &= ~Dagaz.AI.TYPE_MASK;
            newPiece |= pieceKing;

            Dagaz.AI.g_baseEval -= Dagaz.AI.materialTable[pieceMan];
            Dagaz.AI.g_baseEval += pieceSquareAdj[(newPiece & Dagaz.AI.TYPE_MASK) >> Dagaz.AI.STACK_SIZE][me == 0 ? flipTable[to] : to];
            Dagaz.AI.g_baseEval += Dagaz.AI.materialTable[(newPiece & Dagaz.AI.TYPE_MASK) >> Dagaz.AI.STACK_SIZE];
        }

        var ix = piece & Dagaz.AI.STACK_MASK;
        if (captured) {
            if (ix == 0) ix = getStack();
            if (ix > 0) {
                if (Dagaz.AI.UNPROM_CAPTURED) {
                    if (captured & pieceKing) {
                        captured &= ~pieceKing;
                        g_moveUndoStack[Dagaz.AI.g_moveCount - 1].move |= moveflagUnPromotion;
                    }
                }
                if (unshiftStack(ix, captured & (~Dagaz.AI.STACK_MASK))) {
                    newPiece |= ix;
                }
            }
        }

        Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[to][piece & Dagaz.AI.PIECE_MASK];
        Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[to][piece & Dagaz.AI.PIECE_MASK];

        Dagaz.AI.g_board[to] = newPiece;
        Dagaz.AI.g_hashKeyLow ^= Dagaz.AI.g_zobristLow[to][newPiece & Dagaz.AI.PIECE_MASK];
        Dagaz.AI.g_hashKeyHigh ^= Dagaz.AI.g_zobristHigh[to][newPiece & Dagaz.AI.PIECE_MASK];
    } else {
        Dagaz.AI.g_board[to] = Dagaz.AI.g_board[from];
        Dagaz.AI.g_baseEval += pieceSquareAdj[(piece & Dagaz.AI.TYPE_MASK) >> Dagaz.AI.STACK_SIZE][me == 0 ? flipTable[to] : to];
    }
    Dagaz.AI.g_board[from] = pieceEmpty;

    Dagaz.AI.g_repMoveStack[Dagaz.AI.g_moveCount - 1] = Dagaz.AI.g_hashKeyLow;
    Dagaz.AI.g_move50++;

    return captured;
}

Dagaz.AI.UnmakeStep = function() {
    Dagaz.AI.g_moveCount--;
    var move = g_moveUndoStack[Dagaz.AI.g_moveCount].move;
    Dagaz.AI.g_baseEval = g_moveUndoStack[Dagaz.AI.g_moveCount].baseEval;
    Dagaz.AI.g_hashKeyLow = g_moveUndoStack[Dagaz.AI.g_moveCount].hashKeyLow;
    Dagaz.AI.g_hashKeyHigh = g_moveUndoStack[Dagaz.AI.g_moveCount].hashKeyHigh;
    Dagaz.AI.g_move50 = g_moveUndoStack[Dagaz.AI.g_moveCount].move50;

    var flags = move & 0xFF000000;
    var captured = null;
    var to = (move >> 8) & 0xFF;
    var from = move & 0xFF;
    var target = (move >> 16) & 0xFF;

    var piece = Dagaz.AI.g_board[to];
    var ix = piece & Dagaz.AI.STACK_MASK;

    if (target && (ix > 0)) {
        captured = shiftStack(ix);
        if (move & moveflagUnPromotion) {
            captured |= pieceKing;
        }
        if (isEmpty(ix)) {
            piece &= ~Dagaz.AI.STACK_MASK;
        }
        var p = Dagaz.AI.g_board[target];
        if (p != pieceEmpty) {
            ix = p & Dagaz.AI.STACK_MASK;
            if (ix == 0) ix = getStack();
            pushStack(ix, p & (~Dagaz.AI.STACK_MASK));
            captured |= ix;
        }
        Dagaz.AI.g_board[target] = captured;
    }

    if (captured || (flags & moveflagPromotion)) {
        if (flags & moveflagPromotion) {
            piece &= ~Dagaz.AI.TYPE_MASK;
            piece |= pieceMan;
        }
        Dagaz.AI.g_board[from] = piece;
    } else {
        Dagaz.AI.g_board[from] = Dagaz.AI.g_board[to];
    }
    Dagaz.AI.g_board[to] = pieceEmpty;

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

})();
