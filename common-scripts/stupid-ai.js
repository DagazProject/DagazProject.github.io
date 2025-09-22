"use strict";

(function() {

function Ai(params, parent) {
  this.params = params;
  this.parent = parent;
}

const findBot = Dagaz.AI.findBot;

Dagaz.AI.findBot = function(type, params, parent) {
  if ((type == "external") || (type == "smart") /*|| (type == "1")*/ || (type == "2")) {
      return new Ai(params, parent);
  } else {
      return findBot(type, params, parent);
  }
}

Dagaz.Model.moveToString = function(move) {
  var r = "";
  _.each(move.actions, function(a) {
      if (a[1] === null) return;
      if (r != "") {
          r = r + " ";
      }
      if (a[0] != null) {
          r = r + Dagaz.Model.posToString(a[0][0]);
          if (a[1] !== null) {
              r = r + '-';
          }
      }
      if (a[1] !== null) {
          r = r + Dagaz.Model.posToString(a[1][0]);
      }
  });
  return r;
}

const BOARD_SIZE = 8;
const turn = 'black';
const flipped = true;
const whiteKingMoved = true;
const blackKingMoved = true;
const whiteLeftRookMoved = true;
const whiteRightRookMoved = true;
const blackLeftRookMoved = true;
const blackRightRookMoved = true;

let selectedPiece = null;
let selectedPos = null;
let lastMove = null;

const pieceValues = {
    'R': 5, 'N': 3, 'B': 3, 'Q': 9, 'P': 1, 'K': 0,
    'r': 5, 'n': 3, 'b': 3, 'q': 9, 'p': 1, 'k': 0,
}

function boardStateToFEN(boardState, side, whiteKingMoved, whiteLeftRookMoved, whiteRightRookMoved, blackKingMoved, blackLeftRookMoved, blackRightRookMoved) {
    let fen = "";

    // Map the piece symbols to their corresponding FEN characters
    const pieceMap = {
        'R': 'R', 'N': 'N', 'B': 'B', 'Q': 'Q', 'P': 'P', 'K': 'K', // White pieces
        'r': 'r', 'n': 'n', 'b': 'b', 'q': 'q', 'p': 'p', 'k': 'k', // Black pieces
    };

    // Generate the board part of the FEN
    for (let row = 0; row < 8; row++) {
        let emptySquares = 0;
        for (let col = 0; col < 8; col++) {
            const piece = boardState[row][col];
            if (piece === ' ') {
                emptySquares++;
            } else {
                if (emptySquares > 0) {
                    fen += emptySquares;
                    emptySquares = 0;
                }
                fen += pieceMap[piece] || '';
            }
        }
        if (emptySquares > 0) {
            fen += emptySquares;
        }
        if (row < 7) {
            fen += "/";
        }
    }

    // Add the side to move
    fen += ` ${side === 'white' ? 'w' : 'b'}`;

    // Generate castling availability
    let castling = "";
    if (!whiteKingMoved) {
        if (!whiteLeftRookMoved) castling += "K";
        if (!whiteRightRookMoved) castling += "Q";
    }
    if (!blackKingMoved) {
        if (!blackLeftRookMoved) castling += "k";
        if (!blackRightRookMoved) castling += "q";
    }
    fen += ` ${castling || "-"}`;

    // Placeholder for en passant target square (not implemented here)
    fen += " -";

    // Placeholder for halfmove clock (not implemented here)
    fen += " 0";

    // Placeholder for fullmove number (not implemented here)
    fen += " 1";

    return fen;
}

const openingBook = {
    "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR b KQkq - 0 1": [
        { from: { row: 1, col: 2 }, to: { row: 3, col: 2 } }, // c5 (Sicilian Defense)
    ],
    "rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 0 1": [
        { from: { row: 1, col: 3 }, to: { row: 2, col: 3 } }, // c5 (Sicilian Defense)
    ],
    "rnbqkbnr/pp2pppp/3p4/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq - 0 1": [
        { from: { row: 3, col: 2 }, to: { row: 4, col: 3 } }, // c5 (Sicilian Defense)
    ],
    "rnbqkbnr/pp2pppp/3p4/8/3NP3/8/PPP2PPP/RNBQKB1R b KQkq - 0 1": [
        { from: { row: 0, col: 6 }, to: { row: 2, col: 5 } }, // c5 (Sicilian Defense)
    ],
    "rnbqkb1r/pp2pppp/3p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R b KQkq - 0 1": [
        { from: { row: 1, col: 6 }, to: { row: 2, col: 6 } }, // c5 (Sicilian Defense)
    ],
    "rnbqkb1r/pp2pp1p/3p1np1/8/3NP3/2N1B3/PPP2PPP/R2QKB1R b KQkq - 0 1": [
        { from: { row: 0, col: 5 }, to: { row: 1, col: 6 } }, // c5 (Sicilian Defense)
    ],
};

const table = {
    'R': [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0.005, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.005],
        [-0.005, 0, 0, 0, 0, 0, 0, -0.005],
        [-0.005, 0, 0, 0, 0, 0, 0, -0.005],
        [-0.005, 0, 0, 0, 0, 0, 0, -0.005],
        [-0.005, 0, 0, 0, 0, 0, 0, -0.005],
        [-0.005, 0, 0, 0, 0, 0, 0, -0.005],
        [0, 0, 0, 0.005, 0.005, 0, 0, 0]
    ],
    'N': [
        [-0.05, -0.04, -0.03, -0.03, -0.03, -0.03, -0.04, -0.05],
        [-0.04, -0.02, 0, 0, 0, 0, -0.02, -0.04],
        [-0.03, 0, 0.01, 0.015, 0.015, 0.01, 0, -0.03],
        [-0.03, 0.005, 0.015, 0.02, 0.02, 0.015, 0.005, -0.03],
        [-0.03, 0, 0.015, 0.02, 0.02, 0.015, 0, -0.03],
        [-0.03, 0.005, 0.01, 0.015, 0.015, 0.01, 0.005, -0.03],
        [-0.04, -0.02, 0, 0.005, 0.005, 0, -0.02, -0.04],
        [-0.05, -0.04, -0.03, -0.03, -0.03, -0.03, -0.04, -0.05]
    ],
    'B': [
        [-0.02, -0.01, -0.04, -0.01, -0.01, -0.04, -0.01, -0.02],
        [-0.01, 0.02, 0, 0, 0, 0, 0.02, -0.01],
        [-0.01, 0, 0.005, 0.01, 0.01, 0.005, 0, -0.01],
        [-0.01, 0.005, 0.005, 0.01, 0.01, 0.005, 0.005, -0.01],
        [-0.01, 0, 0.01, 0.01, 0.01, 0.01, 0, -0.01],
        [-0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, -0.01],
        [-0.01, 0.005, 0, 0, 0, 0, 0.005, -0.01],
        [-0.02, -0.01, -0.01, -0.01, -0.01, -0.01, -0.01, -0.02]
    ],
    'Q': [
        [-0.02, -0.01, -0.01, -0.005, -0.005, -0.01, -0.01, -0.02],
        [-0.01, 0, 0, 0, 0, 0, 0, -0.01],
        [-0.01, 0, 0.005, 0.005, 0.005, 0.005, 0, -0.01],
        [-0.005, 0, 0.005, 0.005, 0.005, 0.005, 0, -0.005],
        [0, 0, 0.005, 0.005, 0.005, 0.005, 0, -0.005],
        [-0.01, 0.005, 0.005, 0.005, 0.005, 0.005, 0, -0.01],
        [-0.01, 0, 0.005, 0, 0, 0, 0, -0.01],
        [-0.02, -0.01, -0.01, -0.005, -0.005, -0.01, -0.01, -0.02]
    ],
    'r': [
        [0, 0, 0, 0.005, 0.005, 0, 0, 0],
        [-0.005, 0, 0, 0, 0, 0, 0, -0.005],
        [-0.005, 0, 0, 0, 0, 0, 0, -0.005],
        [-0.005, 0, 0, 0, 0, 0, 0, -0.005],
        [-0.005, 0, 0, 0, 0, 0, 0, -0.005],
        [-0.005, 0, 0, 0, 0, 0, 0, -0.005],
        [0.005, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.005],
        [0, 0, 0, 0, 0, 0, 0, 0]
    ],
    'n': [
        [-0.05, -0.04, -0.03, -0.03, -0.03, -0.03, -0.04, -0.05],
        [-0.04, -0.02, 0, 0.005, 0.005, 0, -0.02, -0.04],
        [-0.03, 0.005, 0.01, 0.015, 0.015, 0.01, 0.005, -0.03],
        [-0.03, 0, 0.015, 0.02, 0.02, 0.015, 0, -0.03],
        [-0.03, 0.005, 0.015, 0.02, 0.02, 0.015, 0.005, -0.03],
        [-0.03, 0, 0.01, 0.015, 0.015, 0.01, 0, -0.03],
        [-0.04, -0.02, 0, 0, 0, 0, -0.02, -0.04],
        [-0.05, -0.04, -0.03, -0.03, -0.03, -0.03, -0.04, -0.05]
    ],
    'b': [
        [-0.02, -0.01, -0.01, -0.01, -0.01, -0.01, -0.01, -0.02],
        [-0.01, 0.005, 0, 0, 0, 0, 0.005, -0.01],
        [-0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.01, -0.01],
        [-0.01, 0, 0.01, 0.01, 0.01, 0.01, 0, -0.01],
        [-0.01, 0.005, 0.005, 0.01, 0.01, 0.005, 0.005, -0.01],
        [-0.01, 0, 0.005, 0.01, 0.01, 0.005, 0, -0.01],
        [-0.01, 0.02, 0, 0, 0, 0, 0.02, -0.01],
        [-0.02, -0.01, -0.04, -0.01, -0.01, -0.04, -0.01, -0.02]
    ],
    'q': [
        [-0.02, -0.01, -0.01, -0.005, -0.005, -0.01, -0.01, -0.02],
        [-0.01, 0, 0.005, 0, 0, 0, 0, -0.01],
        [-0.01, 0.005, 0.005, 0.005, 0.005, 0.005, 0, -0.01],
        [0, 0, 0.005, 0.005, 0.005, 0.005, 0, -0.005],
        [-0.005, 0, 0.005, 0.005, 0.005, 0.005, 0, -0.005],
        [-0.01, 0, 0.005, 0.005, 0.005, 0.005, 0, -0.01],
        [-0.01, 0, 0, 0, 0, 0, 0, -0.01],
        [-0.02, -0.01, -0.01, -0.005, -0.005, -0.01, -0.01, -0.02]
    ],
};

const kingMiddle = {
    'K': [
        [-0.03, -0.04, -0.04, -0.05, -0.05, -0.04, -0.04, -0.03],
        [-0.03, -0.04, -0.04, -0.05, -0.05, -0.04, -0.04, -0.03],
        [-0.03, -0.04, -0.04, -0.05, -0.05, -0.04, -0.04, -0.03],
        [-0.03, -0.04, -0.04, -0.05, -0.05, -0.04, -0.04, -0.03],
        [-0.02, -0.03, -0.03, -0.04, -0.04, -0.03, -0.03, -0.02],
        [-0.01, -0.02, -0.02, -0.02, -0.02, -0.02, -0.02, -0.01],
        [-0.005, -0.005, -0.02, -0.02, -0.02, -0.02, -0.005, -0.005],
        [0.02, 0.03, 0.02, 0, 0, 0.01, 0.03, 0.02]
    ],
    'k': [
        [0.02, 0.03, 0.02, 0, 0, 0.01, 0.03, 0.02],
        [-0.005, -0.005, -0.02, -0.02, -0.02, -0.02, -0.005, -0.005],
        [-0.01, -0.02, -0.02, -0.02, -0.02, -0.02, -0.02, -0.01],
        [-0.02, -0.03, -0.03, -0.04, -0.04, -0.03, -0.03, -0.02],
        [-0.03, -0.04, -0.04, -0.05, -0.05, -0.04, -0.04, -0.03],
        [-0.03, -0.04, -0.04, -0.05, -0.05, -0.04, -0.04, -0.03],
        [-0.03, -0.04, -0.04, -0.05, -0.05, -0.04, -0.04, -0.03],
        [-0.03, -0.04, -0.04, -0.05, -0.05, -0.04, -0.04, -0.03]
    ],
};

const kingEnd = {
    'K': [
        [-0.05, -0.04, -0.03, -0.02, -0.02, -0.03, -0.04, -0.05],
        [-0.03, -0.02, -0.01, 0, 0, -0.01, -0.02, -0.03],
        [-0.03, -0.01, 0.02, 0.03, 0.03, 0.02, -0.01, -0.03],
        [-0.03, -0.01, 0.03, 0.04, 0.04, 0.03, -0.01, -0.03],
        [-0.03, -0.01, 0.03, 0.04, 0.04, 0.03, -0.01, -0.03],
        [-0.03, -0.01, 0.02, 0.03, 0.03, 0.02, -0.01, -0.03],
        [-0.03, -0.03, 0, 0, 0, 0, -0.03, -0.03],
        [-0.05, -0.03, -0.03, -0.03, -0.03, -0.03, -0.03, -0.05]
    ],
    'k': [
        [-0.05, -0.03, -0.03, -0.03, -0.03, -0.03, -0.03, -0.05],
        [-0.03, -0.03, 0, 0, 0, 0, -0.03, -0.03],
        [-0.03, -0.01, 0.02, 0.03, 0.03, 0.02, -0.01, -0.03],
        [-0.03, -0.01, 0.03, 0.04, 0.04, 0.03, -0.01, -0.03],
        [-0.03, -0.01, 0.03, 0.04, 0.04, 0.03, -0.01, -0.03],
        [-0.03, -0.01, 0.02, 0.03, 0.03, 0.02, -0.01, -0.03],
        [-0.03, -0.02, -0.01, 0, 0, -0.01, -0.02, -0.03],
        [-0.05, -0.04, -0.03, -0.02, -0.02, -0.03, -0.04, -0.05]
    ],
};

const pawnsMiddle = {
    'P': [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0.05, 0.05, 0.07, 0.07, 0.07, 0.05, 0.05, 0.05],
        [0.01, 0.01, 0.02, 0.06, 0.06, 0.02, 0.01, 0.01],
        [0.005, 0.005, 0.01, 0.055, 0.055, 0.01, 0.005, 0.005],
        [0.005, 0, 0, 0.05, 0.05, 0, 0, 0.005],
        [0.005, -0.005, -0.01, 0, 0, -0.01, -0.005, 0.005],
        [0.005, 0.01, 0.01, -0.02, -0.02, 0.01, 0.01, 0.005],
        [0, 0, 0, 0, 0, 0, 0, 0]
    ],
    'p': [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0.005, 0.01, 0.01, -0.02, -0.02, 0.01, 0.01, 0.005],
        [0.005, -0.005, -0.01, 0, 0, -0.01, -0.005, 0.005],
        [0.005, 0, 0, 0.05, 0.05, 0, 0, 0.005],
        [0.005, 0.005, 0.01, 0.025, 0.025, 0.01, 0.005, 0.005],
        [0.01, 0.01, 0.02, 0.03, 0.03, 0.02, 0.01, 0.01],
        [0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05],
        [0, 0, 0, 0, 0, 0, 0, 0]
    ],
};

const pawnsEnd = {
    'P': [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [2, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 2],
        [1.6, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.6],
        [1, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 1],
        [0.6, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.6],
        [0.3, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.3],
        [-0.03, -0.03, 0, 0, 0, 0, -0.03, -0.03],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ],
    'p': [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [-0.03, -0.03, 0, 0, 0, 0, -0.03, -0.03],
        [0.3, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.3],
        [0.6, 0.4, 0.4, 0.4, 0.4, 0.4, 0.4, 0.6],
        [1, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 1],
        [1.6, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.6],
        [2, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 2],
        [0, 0, 0, 0, 0, 0, 0, 0],
    ],
};

function evaluatePosition(
    boardState,
    side,
    whiteKingMoved,
    whiteLeftRookMoved,
    whiteRightRookMoved,
    blackKingMoved,
    blackLeftRookMoved,
    blackRightRookMoved
) {
    let evaluation = 0;
    let yourPieceMaterial = 0;
    let oppPieceMaterial = 0;

    for (let row = 0; row < BOARD_SIZE; row++) {
        for (let col = 0; col < BOARD_SIZE; col++) {
            if (boardState[row][col] === ' ') continue;
            evaluation += (2 * isPieceYour(boardState[row][col], side) - 1) * pieceValues[boardState[row][col]];

            if (isPieceYour(boardState[row][col], side) && boardState[row][col] !== 'P' && boardState[row][col] !== 'p') {
                yourPieceMaterial += pieceValues[boardState[row][col]];
            } else {
                oppPieceMaterial += pieceValues[boardState[row][col]];
            }

            if (isPieceYour(boardState[row][col], side)) {
                if (boardState[row][col] !== 'k' && boardState[row][col] !== 'K' && boardState[row][col] !== 'p' && boardState[row][col] !== 'P') {
                    evaluation += table[boardState[row][col]][flipped ? 7 - row : row][col];
                } else if (boardState[row][col] === 'k' || boardState[row][col] === 'K') {
                    if (yourPieceMaterial <= 13 && oppPieceMaterial <= 13) {
                        evaluation += kingEnd[boardState[row][col]][flipped ? 7 - row : row][col];
                    } else {
                        evaluation += kingMiddle[boardState[row][col]][flipped ? 7 - row : row][col];
                    }
                } else if (boardState[row][col] === 'p' || boardState[row][col] === 'P') {
                    if (yourPieceMaterial <= 13 && oppPieceMaterial <= 13) {
                        evaluation += pawnsEnd[boardState[row][col]][flipped ? 7 - row : row][col];
                    } else {
                        evaluation += pawnsMiddle[boardState[row][col]][flipped ? 7 - row : row][col];
                    }
                }
            } else {
                if (boardState[row][col] !== 'k' && boardState[row][col] !== 'K' && boardState[row][col] !== 'p' && boardState[row][col] !== 'P') {
                    evaluation -= table[boardState[row][col]][flipped ? 7 - row : row][col];
                } else if (boardState[row][col] === 'k' || boardState[row][col] === 'K') {
                    if (yourPieceMaterial <= 13 && oppPieceMaterial <= 13) {
                        evaluation -= kingEnd[boardState[row][col]][flipped ? 7 - row : row][col];
                    } else {
                        evaluation -= kingMiddle[boardState[row][col]][flipped ? 7 - row : row][col];
                    }
                } else if (boardState[row][col] === 'p' || boardState[row][col] === 'P') {
                    if (yourPieceMaterial <= 13 && oppPieceMaterial <= 13) {
                        evaluation -= pawnsEnd[boardState[row][col]][flipped ? 7 - row : row][col];
                    } else {
                        evaluation -= pawnsMiddle[boardState[row][col]][flipped ? 7 - row : row][col];
                    }
                }
            }
        }
    }

    if (isKingInCheck(
        side === 'white' ? 'black' : 'white',
        boardState,
        whiteKingMoved,
        whiteLeftRookMoved,
        whiteRightRookMoved,
        blackKingMoved,
        blackLeftRookMoved,
        blackRightRookMoved
    )) {
        evaluation += 0.5;
    }

    return evaluation - 0.1 + Math.random() * 0.2;
}

function findAllPossibleMoves(
    boardState,
    turn,
    whiteKingMoved,
    whiteLeftRookMoved,
    whiteRightRookMoved,
    blackKingMoved,
    blackLeftRookMoved,
    blackRightRookMoved
) {
    const allPossibleMoves = [];
    for (let row = 0; row < BOARD_SIZE; row++) {
        for (let col = 0; col < BOARD_SIZE; col++) {
            if (boardState[row][col] === ' ') continue;
            if (
                (['R', 'N', 'B', 'Q', 'K', 'P'].includes(boardState[row][col]) && turn === 'white') ||
                (['r', 'n', 'b', 'q', 'k', 'p'].includes(boardState[row][col]) && turn === 'black')
            ) {
                const possibleMovesForPiece = findAllPossibleMovesForPiece(
                    boardState,
                    boardState[row][col],
                    { row, col },
                    turn,
                    whiteKingMoved,
                    whiteLeftRookMoved,
                    whiteRightRookMoved,
                    blackKingMoved,
                    blackLeftRookMoved,
                    blackRightRookMoved
                );

                for (const move of possibleMovesForPiece) {
                    allPossibleMoves.push({ from: { row, col }, to: { row: move.row, col: move.col }, piece: boardState[row][col], type: move.validMove });
                }
            }
        }
    }

    return allPossibleMoves;
}

function findAllPossibleMovesForPiece(
    boardState,
    selectedPiece,
    selectedPos,
    turn,
    whiteKingMoved,
    whiteLeftRookMoved,
    whiteRightRookMoved,
    blackKingMoved,
    blackLeftRookMoved,
    blackRightRookMoved
) {
    const legalMoveCells = [];

    if (['B', 'b'].includes(selectedPiece)) {
        const moves = [
            [-7, -7], [-6, -6], [-5, -5], [-4, -4], [-3, -3], [-2, -2], [-1, -1],
            [7, 7], [6, 6], [5, 5], [4, 4], [3, 3], [2, 2], [1, 1],
            [7, -7], [6, -6], [5, -5], [4, -4], [3, -3], [2, -2], [1, -1],
            [-7, 7], [-6, 6], [-5, 5], [-4, 4], [-3, 3], [-2, 2], [-1, 1]
        ];
        for (const move of moves) {
            let row = selectedPos.row + move[0];
            let col = selectedPos.col + move[1];
            if (row < 0 || row > 7 || col < 0 || col > 7) continue;
            
            let validMove = isValidMove(
                boardState,
                selectedPiece,
                selectedPos,
                { row, col },
                whiteKingMoved,
                whiteLeftRookMoved,
                whiteRightRookMoved,
                blackKingMoved,
                blackLeftRookMoved,
                blackRightRookMoved,
            );
    
            let copyBoardState = JSON.parse(JSON.stringify(boardState));
            
            copyBoardState[selectedPos.row][selectedPos.col] = ' ';
            copyBoardState[row][col] = selectedPiece;
    
            if (validMove && !isKingInCheck(
                turn,
                copyBoardState,
                whiteKingMoved,
                whiteLeftRookMoved,
                whiteRightRookMoved,
                blackKingMoved,
                blackLeftRookMoved,
                blackRightRookMoved
            )) {
                legalMoveCells.push({ row, col, validMove });
            }
        }
    }
    if (['R', 'r'].includes(selectedPiece)) {
        const moves = [
            [-7, 0], [-6, 0], [-5, 0], [-4, 0], [-3, 0], [-2, 0], [-1, 0],
            [7, 0], [6, 0], [5, 0], [4, 0], [3, 0], [2, 0], [1, 0],
            [0, -7], [0, -6], [0, -5], [0, -4], [0, -3], [0, -2], [0, -1],
            [0, 7], [0, 6], [0, 5], [0, 4], [0, 3], [0, 2], [0, 1]
        ];
        for (const move of moves) {
            let row = selectedPos.row + move[0];
            let col = selectedPos.col + move[1];
            if (row < 0 || row > 7 || col < 0 || col > 7) continue;
            
            let validMove = isValidMove(
                boardState,
                selectedPiece,
                selectedPos,
                { row, col },
                whiteKingMoved,
                whiteLeftRookMoved,
                whiteRightRookMoved,
                blackKingMoved,
                blackLeftRookMoved,
                blackRightRookMoved,
            );
    
            let copyBoardState = JSON.parse(JSON.stringify(boardState));
            
            copyBoardState[selectedPos.row][selectedPos.col] = ' ';
            copyBoardState[row][col] = selectedPiece;
    
            if (validMove && !isKingInCheck(
                turn,
                copyBoardState,
                whiteKingMoved,
                whiteLeftRookMoved,
                whiteRightRookMoved,
                blackKingMoved,
                blackLeftRookMoved,
                blackRightRookMoved
            )) {
                legalMoveCells.push({ row, col, validMove });
            }
        }
    }
    if (['N', 'n'].includes(selectedPiece)) {
        const moves = [[-2, -1], [2, -1], [-2, 1], [2, 1], [-1, -2], [1, -2], [-1, 2], [1, 2]];
        for (const move of moves) {
            let row = selectedPos.row + move[0];
            let col = selectedPos.col + move[1];
            if (row < 0 || row > 7 || col < 0 || col > 7) continue;

            let validMove = isValidMove(
                boardState,
                selectedPiece,
                selectedPos,
                { row, col },
                whiteKingMoved,
                whiteLeftRookMoved,
                whiteRightRookMoved,
                blackKingMoved,
                blackLeftRookMoved,
                blackRightRookMoved,
            );
    
            let copyBoardState = JSON.parse(JSON.stringify(boardState));
            
            copyBoardState[selectedPos.row][selectedPos.col] = ' ';
            copyBoardState[row][col] = selectedPiece;
    
            if (validMove && !isKingInCheck(
                turn,
                copyBoardState,
                whiteKingMoved,
                whiteLeftRookMoved,
                whiteRightRookMoved,
                blackKingMoved,
                blackLeftRookMoved,
                blackRightRookMoved
            )) {
                legalMoveCells.push({ row, col, validMove });
            }
        }
    }
    if (['K', 'k'].includes(selectedPiece)) {
        const moves = [
            [-1, -1], [1, 1], [1, -1], [-1, 1], [-1, 0], [1, 0], [0, -1], [0, 1], [0, -2], [0, 2], [0, -3], [0, 3], [0, -4], [0, 4]
        ];
        for (const move of moves) {
            let row = selectedPos.row + move[0];
            let col = selectedPos.col + move[1];
            if (row < 0 || row > 7 || col < 0 || col > 7) continue;
            
            const validMove = isValidMove(
                boardState,
                selectedPiece,
                selectedPos,
                { row, col },
                whiteKingMoved,
                whiteLeftRookMoved,
                whiteRightRookMoved,
                blackKingMoved,
                blackLeftRookMoved,
                blackRightRookMoved
            );
            const copyBoardState = JSON.parse(JSON.stringify(boardState));
            let inCheckCastlingLeft = false;
            let inCheckCastlingRight = false;
            if (validMove === 'castling left') {
                copyBoardState[selectedPos.row][3 - flipped] = selectedPiece;
                if (isKingInCheck(
                    turn,
                    copyBoardState,
                    whiteKingMoved,
                    whiteLeftRookMoved,
                    whiteRightRookMoved,
                    blackKingMoved,
                    blackLeftRookMoved,
                    blackRightRookMoved
                )) {
                    inCheckCastlingLeft = true;
                }
                copyBoardState[selectedPos.row][5 + flipped] = ' ';
            } else if (validMove === 'castling right') {
                copyBoardState[selectedPos.row][5 + flipped] = selectedPiece;
                if (isKingInCheck(
                    turn,
                    copyBoardState,
                    whiteKingMoved,
                    whiteLeftRookMoved,
                    whiteRightRookMoved,
                    blackKingMoved,
                    blackLeftRookMoved,
                    blackRightRookMoved
                )) {
                    inCheckCastlingRight = true;
                }
                copyBoardState[selectedPos.row][5 + flipped] = ' ';
            }
            copyBoardState[selectedPos.row][selectedPos.col] = ' ';
            copyBoardState[row][col] = selectedPiece;

            if (validMove && !isKingInCheck(
                turn,
                copyBoardState,
                whiteKingMoved,
                whiteLeftRookMoved,
                whiteRightRookMoved,
                blackKingMoved,
                blackLeftRookMoved,
                blackRightRookMoved
            ) && !inCheckCastlingLeft && !inCheckCastlingRight) {
                legalMoveCells.push({ row, col, validMove })
            }
        }
    }
    if (['Q', 'q'].includes(selectedPiece)) {
        const moves = [
            [-7, -7], [-6, -6], [-5, -5], [-4, -4], [-3, -3], [-2, -2], [-1, -1],
            [7, 7], [6, 6], [5, 5], [4, 4], [3, 3], [2, 2], [1, 1],
            [7, -7], [6, -6], [5, -5], [4, -4], [3, -3], [2, -2], [1, -1],
            [-7, 7], [-6, 6], [-5, 5], [-4, 4], [-3, 3], [-2, 2], [-1, 1],
            [-7, 0], [-6, 0], [-5, 0], [-4, 0], [-3, 0], [-2, 0], [-1, 0],
            [7, 0], [6, 0], [5, 0], [4, 0], [3, 0], [2, 0], [1, 0],
            [0, -7], [0, -6], [0, -5], [0, -4], [0, -3], [0, -2], [0, -1],
            [0, 7], [0, 6], [0, 5], [0, 4], [0, 3], [0, 2], [0, 1]
        ];
        for (const move of moves) {
            let row = selectedPos.row + move[0];
            let col = selectedPos.col + move[1];
            if (row < 0 || row > 7 || col < 0 || col > 7) continue;
            
            let validMove = isValidMove(
                boardState,
                selectedPiece,
                selectedPos,
                { row, col },
                whiteKingMoved,
                whiteLeftRookMoved,
                whiteRightRookMoved,
                blackKingMoved,
                blackLeftRookMoved,
                blackRightRookMoved,
            );
    
            let copyBoardState = JSON.parse(JSON.stringify(boardState));
            
            copyBoardState[selectedPos.row][selectedPos.col] = ' ';
            copyBoardState[row][col] = selectedPiece;
    
            if (validMove && !isKingInCheck(
                turn,
                copyBoardState,
                whiteKingMoved,
                whiteLeftRookMoved,
                whiteRightRookMoved,
                blackKingMoved,
                blackLeftRookMoved,
                blackRightRookMoved
            )) {
                legalMoveCells.push({ row, col, validMove });
            }
        }
    }
    if (selectedPiece === 'P') {
        const direction = 2 * flipped - 1;
        const moves = [
            [direction, 0], [direction, 1], [direction, -1], [2 * direction, 0], 
        ];
        for (const move of moves) {
            let row = selectedPos.row + move[0];
            let col = selectedPos.col + move[1];
            if (row < 0 || row > 7 || col < 0 || col > 7) continue;
            
            let validMove = isValidMove(
                boardState,
                selectedPiece,
                selectedPos,
                { row, col },
                whiteKingMoved,
                whiteLeftRookMoved,
                whiteRightRookMoved,
                blackKingMoved,
                blackLeftRookMoved,
                blackRightRookMoved,
            );
    
            let copyBoardState = JSON.parse(JSON.stringify(boardState));
            
            copyBoardState[selectedPos.row][selectedPos.col] = ' ';
            copyBoardState[row][col] = selectedPiece;
    
            if (validMove && !isKingInCheck(
                turn,
                copyBoardState,
                whiteKingMoved,
                whiteLeftRookMoved,
                whiteRightRookMoved,
                blackKingMoved,
                blackLeftRookMoved,
                blackRightRookMoved
            )) {
                legalMoveCells.push({ row, col, validMove });
            }
        }
    }
    if (selectedPiece === 'p') {
        const direction = 1 - 2 * flipped;
        const moves = [
            [direction, 0], [direction, 1], [direction, -1], [2 * direction, 0], 
        ];
        for (const move of moves) {
            let row = selectedPos.row + move[0];
            let col = selectedPos.col + move[1];
            if (row < 0 || row > 7 || col < 0 || col > 7) continue;
            
            let validMove = isValidMove(
                boardState,
                selectedPiece,
                selectedPos,
                { row, col },
                whiteKingMoved,
                whiteLeftRookMoved,
                whiteRightRookMoved,
                blackKingMoved,
                blackLeftRookMoved,
                blackRightRookMoved,
            );
    
            let copyBoardState = JSON.parse(JSON.stringify(boardState));
            
            copyBoardState[selectedPos.row][selectedPos.col] = ' ';
            copyBoardState[row][col] = selectedPiece;
    
            if (validMove && !isKingInCheck(
                turn,
                copyBoardState,
                whiteKingMoved,
                whiteLeftRookMoved,
                whiteRightRookMoved,
                blackKingMoved,
                blackLeftRookMoved,
                blackRightRookMoved
            )) {
                legalMoveCells.push({ row, col, validMove });
            }
        }
        
    }
    
    return legalMoveCells;
}

function isKingInCheck(
    turn,
    boardState,
    whiteKingMoved,
    whiteLeftRookMoved,
    whiteRightRookMoved,
    blackKingMoved,
    blackLeftRookMoved,
    blackRightRookMoved
) {
    const king = turn === 'white' ? 'K' : 'k';
    const opponentTurn = turn === 'white' ? 'black' : 'white';

    // Locate the king's position
    let kingPosition = null;
    for (let row = 0; row < BOARD_SIZE; row++) {
        for (let col = 0; col < BOARD_SIZE; col++) {
            if (boardState[row][col] === king) {
                kingPosition = { row, col };
                break;
            }
        }
        if (kingPosition) break;
    }

    // If we didn't find the king, return false (error case, king should always be on board)
    if (!kingPosition) return false;

    // Check if any opponent piece can move to the king's position
    for (let row = 0; row < BOARD_SIZE; row++) {
        for (let col = 0; col < BOARD_SIZE; col++) {
            const piece = boardState[row][col];
            if (piece !== ' ' && isPieceOpponent(piece, opponentTurn)) {
                const from = { row, col };
                const to = kingPosition;

                // Check if the piece can legally move to the king's position
                if (isValidMove(
                    boardState,
                    piece,
                    from,
                    to,
                    whiteKingMoved,
                    whiteLeftRookMoved,
                    whiteRightRookMoved,
                    blackKingMoved,
                    blackLeftRookMoved,
                    blackRightRookMoved
                )) {
                    return true; // King is in check
                }
            }
        }
    }

    return false; // King is not in check
}

function isPathClear(boardState, from, to) {
    const rowStep = Math.sign(to.row - from.row);
    const colStep = Math.sign(to.col - from.col);

    let currentRow = from.row + rowStep;
    let currentCol = from.col + colStep;

    while (currentRow !== to.row || currentCol !== to.col) {
        if (boardState[currentRow][currentCol] !== ' ') return false;
        currentRow += rowStep;
        currentCol += colStep;
    }

    return true;
}

function isPieceOpponent(piece, turn) {
    const whiteDangerPieces = ['k', 'q', 'r', 'b', 'n', 'p'];
    const blackDangerPieces = ['K', 'Q', 'R', 'B', 'N', 'P'];

    if (turn === 'white') {
        return blackDangerPieces.includes(piece); // Opponent pieces are black
    } else if (turn === 'black') {
        return whiteDangerPieces.includes(piece); // Opponent pieces are white
    }
    return false; // Empty squares or invalid pieces
}

function isPieceYour(piece, turn) {
    const blackPieces = ['k', 'q', 'r', 'b', 'n', 'p'];
    const whitePieces = ['K', 'Q', 'R', 'B', 'N', 'P'];

    if (turn === 'black') {
        return blackPieces.includes(piece); // Opponent pieces are black
    } else if (turn === 'white') {
        return whitePieces.includes(piece); // Opponent pieces are white
    }
    return false; // Empty squares or invalid pieces
}

function isSameColor(piece1, piece2) {
    return (['R', 'N', 'B', 'Q', 'K', 'P'].includes(piece1)) === (['R', 'N', 'B', 'Q', 'K', 'P'].includes(piece2));
}

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Random index from 0 to i
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
    }
    return arr;
}

function isValidBishopMove(boardState, from, to) {
    if (Math.abs(to.row - from.row) !== Math.abs(to.col - from.col)) return false;
    return isPathClear(boardState, from, to);
}

function isValidKingMove(boardState, piece, from, to, rowDiff, colDiff, whiteKingMoved, whiteLeftRookMoved, whiteRightRookMoved, blackKingMoved, blackLeftRookMoved, blackRightRookMoved) {
    if (Math.abs(colDiff) > 1 && Math.abs(rowDiff) === 0) {
        if (piece === 'K' && !whiteKingMoved) {
            if (colDiff < 0 && isPathClear(boardState, from, { col: 0, row: from.row }) && !whiteLeftRookMoved && !isKingInCheck(
                'white',
                boardState,
                whiteKingMoved,
                whiteLeftRookMoved,
                whiteRightRookMoved,
                blackKingMoved,
                blackLeftRookMoved,
                blackRightRookMoved
            )) {
                return 'castling left';
            }
            if (colDiff > 0 && isPathClear(boardState, from, { col: 7, row: from.row }) && !whiteRightRookMoved && !isKingInCheck(
                'white',
                boardState,
                whiteKingMoved,
                whiteLeftRookMoved,
                whiteRightRookMoved,
                blackKingMoved,
                blackLeftRookMoved,
                blackRightRookMoved
            )) {
                return 'castling right';
            }
        }
        if (piece === 'k' && !blackKingMoved) {
            if (colDiff < 0 && isPathClear(boardState, from, { col: 0, row: from.row }) && !blackLeftRookMoved && !isKingInCheck(
                'black',
                boardState,
                whiteKingMoved,
                whiteLeftRookMoved,
                whiteRightRookMoved,
                blackKingMoved,
                blackLeftRookMoved,
                blackRightRookMoved
            )) {
                return 'castling left';
            }
            if (colDiff > 0 && isPathClear(boardState, from, { col: 7, row: from.row }) && !blackRightRookMoved && !isKingInCheck(
                'black',
                boardState,
                whiteKingMoved,
                whiteLeftRookMoved,
                whiteRightRookMoved,
                blackKingMoved,
                blackLeftRookMoved,
                blackRightRookMoved
            )) {
                return 'castling right';
            }
        }
    }
    return Math.abs(rowDiff) <= 1 && Math.abs(colDiff) <= 1;
}

function isValidKnightMove(boardState, rowDiff, colDiff) {
    return (Math.abs(rowDiff) === 2 && Math.abs(colDiff) === 1) || (Math.abs(rowDiff) === 1 && Math.abs(colDiff) === 2);
}

function isValidMove(boardState, piece, from, to, whiteKingMoved, whiteLeftRookMoved, whiteRightRookMoved, blackKingMoved, blackLeftRookMoved, blackRightRookMoved) {
    // Prevent moving out of bounds
    if (to.row < 0 || to.row >= BOARD_SIZE || to.col < 0 || to.col >= BOARD_SIZE) return false;
    const targetSquare = boardState[to.row][to.col];

    // Prevent moving onto a piece of the same color
    if (
        targetSquare !== ' ' &&
        isSameColor(piece, targetSquare) && 
        !(
            (selectedPiece === 'K' && !whiteKingMoved && (to.col === 0 || to.col === 7)) ||
            (selectedPiece === 'k' && !blackKingMoved && (to.col === 0 || to.col === 7))
        )
    ) return false;

    const rowDiff = to.row - from.row;
    const colDiff = to.col - from.col;

    switch (piece.toLowerCase()) {
        case 'P': // White Pawn
            return isValidPawnMove(boardState, piece, from, to, rowDiff, colDiff, targetSquare, 2 * flipped - 1);
        case 'p': // Black Pawn
            return isValidPawnMove(boardState, piece, from, to, rowDiff, colDiff, targetSquare, 1 - 2 * flipped);
        case 'R': case 'r': // Rook
            return isValidRookMove(boardState, from, to);
        case 'N': case 'n': // Knight
            return isValidKnightMove(boardState, rowDiff, colDiff);
        case 'B': case 'b': // Bishop
            return isValidBishopMove(boardState, from, to);
        case 'Q': case 'q': // Queen
            return isValidQueenMove(boardState, from, to);
        case 'K': case 'k': // King
            return isValidKingMove(boardState, piece, from, to, rowDiff, colDiff, whiteKingMoved, whiteLeftRookMoved, whiteRightRookMoved, blackKingMoved, blackLeftRookMoved, blackRightRookMoved);
        default:
            return false;
    }
}

function isValidPawnMove(boardState, piece, from, to, rowDiff, colDiff, targetSquare, direction) {
    // Standard move: move forward one square if the destination is empty
    if (colDiff === 0 && rowDiff === direction && targetSquare === ' ') {
        return true;
    }

    // Double move: move forward two squares if starting from the initial position and both squares are empty
    const startingRow = (flipped ? piece === 'P' : piece === 'p') ? 1 : 6;
    if (colDiff === 0 && rowDiff === 2 * direction && targetSquare === ' ' &&
        from.row === startingRow && boardState[from.row + direction][from.col] === ' ') {
        return true;
    }

    // Capture move: move diagonally one square if capturing an opponent's piece
    if (Math.abs(colDiff) === 1 && rowDiff === direction && targetSquare !== ' ' &&
        !isSameColor(piece, targetSquare)) {
        return true;
    }

    if (lastMove && Math.abs(colDiff) === 1 && rowDiff === direction && targetSquare === ' ') {
        // Check if last move was a double pawn move from the opponent
        const opponentPawnRow = from.row;
        const enPassantPawn = piece === 'P' ? 'p' : 'P';
        if (lastMove &&
            lastMove.piece === enPassantPawn &&
            lastMove.from.row === opponentPawnRow + 2 * direction &&
            lastMove.to.row === from.row &&
            lastMove.to.col === to.col) {
            return 'en passant'; // En passant is valid
        }
    }

    return false;
}

function isValidQueenMove(boardState, from, to) {
    // Queen moves like a Rook or a Bishop
    return isValidRookMove(boardState, from, to) || isValidBishopMove(boardState, from, to);
}

function isValidRookMove(boardState, from, to) {
    if (from.row !== to.row && from.col !== to.col) return false;
    return isPathClear(boardState, from, to);
}

function findBestMove(allPossibleMoves, boardState) {
    let maxEvaluation = -100000000;
    let maxEvaluationMove = allPossibleMoves[0];

    for (const move of shuffleArray(allPossibleMoves)) {
        const copyBoardState = boardState.map(row => [...row]);

        if (move.type === 'castling left') {
            copyBoardState[move.from.row][0] = ' ';
            copyBoardState[move.from.row][3 - flipped] = copyBoardState[move.from.row][move.from.col] === 'K' ? 'R' : 'r';
            copyBoardState[move.from.row][2 - flipped] = copyBoardState[move.from.row][move.from.col];
        } else if (move.type === 'castling right') {
            copyBoardState[move.from.row][7] = ' ';
            copyBoardState[move.from.row][5 - flipped] = copyBoardState[move.from.row][move.from.col] === 'K' ? 'R' : 'r';
            copyBoardState[move.from.row][6 - flipped] = copyBoardState[move.from.row][move.from.col];
        } else {
            if (copyBoardState[move.from.row][move.from.col] === 'P' && move.to.row === flipped * 7) {
                copyBoardState[move.to.row][move.to.col] = 'Q';
            } else if (copyBoardState[move.from.row][move.from.col] === 'p' && move.to.row === 7 - flipped * 7) {
                copyBoardState[move.to.row][move.to.col] = 'q';
            } else {
                copyBoardState[move.to.row][move.to.col] = copyBoardState[move.from.row][move.from.col];
            }
        }
        if (move.type === 'en passant') {
            copyBoardState[move.from.row][move.to.col] = ' ';
        }
        copyBoardState[move.from.row][move.from.col] = ' ';

        const allPossibleMovesAfterMove = findAllPossibleMoves(
            copyBoardState,
            turn === 'white' ? 'black' : 'white',
            whiteKingMoved,
            whiteLeftRookMoved,
            whiteRightRookMoved,
            blackKingMoved,
            blackLeftRookMoved,
            blackRightRookMoved
        );

        let minEvaluation = 100000000;

        for (const oppMove of allPossibleMovesAfterMove) {
            const copyBoardState2 = copyBoardState.map(row => [...row]);
                        
            if (oppMove.type === 'castling left') {
                copyBoardState2[oppMove.from.row][0] = ' ';
                copyBoardState2[oppMove.from.row][3 - flipped] = copyBoardState2[oppMove.from.row][oppMove.from.col] === 'K' ? 'R' : 'r';
                copyBoardState2[oppMove.from.row][2 - flipped] = copyBoardState2[oppMove.from.row][oppMove.from.col];
            } else if (oppMove.type === 'castling right') {
                copyBoardState2[oppMove.from.row][7] = ' ';
                copyBoardState2[oppMove.from.row][5 - flipped] = copyBoardState2[oppMove.from.row][oppMove.from.col] === 'K' ? 'R' : 'r';
                copyBoardState2[oppMove.from.row][6 - flipped] = copyBoardState2[oppMove.from.row][oppMove.from.col];
            } else {
                if (copyBoardState2[oppMove.from.row][oppMove.from.col] === 'P' && oppMove.to.row === flipped * 7) {
                    copyBoardState2[oppMove.to.row][oppMove.to.col] = 'Q';
                } else if (copyBoardState2[oppMove.from.row][oppMove.from.col] === 'p' && oppMove.to.row === 7 - flipped * 7) {
                    copyBoardState2[oppMove.to.row][oppMove.to.col] = 'q';
                } else {
                    copyBoardState2[oppMove.to.row][oppMove.to.col] = copyBoardState2[oppMove.from.row][oppMove.from.col];
                }
            }
            if (oppMove.type === 'en passant') {
                copyBoardState2[oppMove.from.row][oppMove.to.col] = ' ';
            }
            copyBoardState2[oppMove.from.row][oppMove.from.col] = ' ';

            let evaluation = evaluatePosition(
                copyBoardState2,
                turn === 'white' ? 'black' : 'white',
                whiteKingMoved,
                whiteLeftRookMoved,
                whiteRightRookMoved,
                blackKingMoved,
                blackLeftRookMoved,
                blackRightRookMoved
            );

            if (allPossibleMovesAfterMove.length < 10) {
                evaluation -= 0.1;
                evaluation += allPossibleMovesAfterMove.length * 0.01;
            }
            evaluation -= isKingInCheck(
                turn === 'white' ? 'black' : 'white',
                copyBoardState,
                whiteKingMoved,
                whiteLeftRookMoved,
                whiteRightRookMoved,
                blackKingMoved,
                blackLeftRookMoved,
                blackRightRookMoved
            );
            evaluation += isKingInCheck(
                turn,
                copyBoardState2,
                whiteKingMoved,
                whiteLeftRookMoved,
                whiteRightRookMoved,
                blackKingMoved,
                blackLeftRookMoved,
                blackRightRookMoved
            );

            if (-1 * evaluation < minEvaluation) {
                minEvaluation = -1 * evaluation;
            }
        }
        
        if (minEvaluation > maxEvaluation) {
            maxEvaluation = minEvaluation;
            maxEvaluationMove = move;
        }
    }
    
    const bestMove = maxEvaluationMove;

    return bestMove;
}

function findBestMoveRecursive(allPossibleMoves, boardState, side, depth = 1) {
    let maxEvaluation = -1000000000;
    let maxEvaluationMove = allPossibleMoves[0];

    for (const move of shuffleArray(allPossibleMoves)) {
        const copyBoardState = boardState.map(row => [...row]);

        if (move.type === 'castling left') {
            copyBoardState[move.from.row][0] = ' ';
            copyBoardState[move.from.row][3 - flipped] = copyBoardState[move.from.row][move.from.col] === 'K' ? 'R' : 'r';
            copyBoardState[move.from.row][2 - flipped] = copyBoardState[move.from.row][move.from.col];
        } else if (move.type === 'castling right') {
            copyBoardState[move.from.row][7] = ' ';
            copyBoardState[move.from.row][5 - flipped] = copyBoardState[move.from.row][move.from.col] === 'K' ? 'R' : 'r';
            copyBoardState[move.from.row][6 - flipped] = copyBoardState[move.from.row][move.from.col];
        } else {
            if (copyBoardState[move.from.row][move.from.col] === 'P' && move.to.row === flipped * 7) {
                copyBoardState[move.to.row][move.to.col] = 'Q';
            } else if (copyBoardState[move.from.row][move.from.col] === 'p' && move.to.row === 7 - flipped * 7) {
                copyBoardState[move.to.row][move.to.col] = 'q';
            } else {
                copyBoardState[move.to.row][move.to.col] = copyBoardState[move.from.row][move.from.col];
            }
        }
        if (move.type === 'en passant') {
            copyBoardState[move.from.row][move.to.col] = ' ';
        }
        copyBoardState[move.from.row][move.from.col] = ' ';

        if (depth === 0) {
            if (isKingInCheck(
                side === 'white' ? 'black' : 'white',
                copyBoardState,
                whiteKingMoved,
                whiteLeftRookMoved,
                whiteRightRookMoved,
                blackKingMoved,
                blackLeftRookMoved,
                blackRightRookMoved
            )) {
                const allPossibleMovesAfterMove = findAllPossibleMoves(
                    copyBoardState,
                    side,
                    whiteKingMoved,
                    whiteLeftRookMoved,
                    whiteRightRookMoved,
                    blackKingMoved,
                    blackLeftRookMoved,
                    blackRightRookMoved
                );
                const evaluation = allPossibleMovesAfterMove.length !== 0 ? evaluatePosition(
                    copyBoardState,
                    side === 'white' ? 'black' : 'white',
                    whiteKingMoved,
                    whiteLeftRookMoved,
                    whiteRightRookMoved,
                    blackKingMoved,
                    blackLeftRookMoved,
                    blackRightRookMoved
                ) : 10000000;
                if (evaluation > maxEvaluation) {
                    maxEvaluation = evaluation;
                    maxEvaluationMove = move;
                }
                continue;
            }
            const evaluation = evaluatePosition(copyBoardState, side);
            if (evaluation > maxEvaluation) {
                maxEvaluation = evaluation;
                maxEvaluationMove = move;
            }
            continue;
        }

        const allPossibleMovesAfterMove = findAllPossibleMoves(
            copyBoardState,
            turn === 'white' ? 'black' : 'white',
            whiteKingMoved,
            whiteLeftRookMoved,
            whiteRightRookMoved,
            blackKingMoved,
            blackLeftRookMoved,
            blackRightRookMoved
        );

        const {evaluation} = findBestMoveRecursive(allPossibleMovesAfterMove, copyBoardState, side === 'white' ? 'black' : 'white', depth - 1);

        if (-1 * evaluation > maxEvaluation) {
            maxEvaluation = -1 * evaluation;
            maxEvaluationMove = move;
        }
    }
    
    const bestMove = maxEvaluationMove;

    return {bestMove, evaluation: maxEvaluation};
}

function findBestMoveWithMinimax(
    boardState,
    side,
    whiteKingMoved,
    whiteLeftRookMoved,
    whiteRightRookMoved,
    blackKingMoved,
    blackLeftRookMoved,
    blackRightRookMoved,
    depth = 6,
    isMaximizing = true,
    alpha = -Infinity,
    beta = Infinity,
    moveNumber = 1
) {
    if (moveNumber <= 10 && depth === 4) {
        const fen = boardStateToFEN(boardState, side, whiteKingMoved, whiteLeftRookMoved, whiteRightRookMoved, blackKingMoved, blackLeftRookMoved, blackRightRookMoved);
        if (openingBook[fen]) {
            // Randomly pick a move from the opening book
            const moves = openingBook[fen];
            const move = moves[Math.floor(Math.random() * moves.length)];
            return { bestMove: move, evaluation: 0 }; // Evaluation can be neutral as openings are predefined
        }
    }
    if (depth === 0) {
        return { evaluation: evaluatePosition(boardState, side, whiteKingMoved, whiteLeftRookMoved, whiteRightRookMoved, blackKingMoved, blackLeftRookMoved, blackRightRookMoved) };
    }

    let allPossibleMoves = shuffleArray(findAllPossibleMoves(
        boardState,
        side,
        whiteKingMoved,
        whiteLeftRookMoved,
        whiteRightRookMoved,
        blackKingMoved,
        blackLeftRookMoved,
        blackRightRookMoved
    ));

    // Проверка на отсутствие возможных ходов
    if (allPossibleMoves.length === 0) {
        if (isKingInCheck(
            side,
            boardState,
            whiteKingMoved,
            whiteLeftRookMoved,
            whiteRightRookMoved,
            blackKingMoved,
            blackLeftRookMoved,
            blackRightRookMoved
        )) {
            // Мат
            return { evaluation: isMaximizing ? -Infinity : Infinity }; // Мат плох для текущей стороны
        } else {
            // Пат
            return { evaluation: 0 }; // Ничья
        }
    }

    let bestEvaluation = isMaximizing ? -Infinity : Infinity;
    let bestMove = allPossibleMoves[0];

    for (const move of allPossibleMoves) {
        const copyBoardState = JSON.parse(JSON.stringify(boardState));

        if (move.type === 'castling left') {
            copyBoardState[move.from.row][0] = ' ';
            copyBoardState[move.from.row][3] = copyBoardState[move.from.row][move.from.col] === 'K' ? 'R' : 'r';
            copyBoardState[move.from.row][2] = copyBoardState[move.from.row][move.from.col];
        } else if (move.type === 'castling right') {
            copyBoardState[move.from.row][7] = ' ';
            copyBoardState[move.from.row][5] = copyBoardState[move.from.row][move.from.col] === 'K' ? 'R' : 'r';
            copyBoardState[move.from.row][6] = copyBoardState[move.from.row][move.from.col];
        } else {
            if (copyBoardState[move.from.row][move.from.col] === 'P' && move.to.row === 7 * flipped) {
                copyBoardState[move.to.row][move.to.col] = 'Q';
            } else if (copyBoardState[move.from.row][move.from.col] === 'p' && move.to.row === 7 - 7 * flipped) {
                copyBoardState[move.to.row][move.to.col] = 'q';
            } else {
                copyBoardState[move.to.row][move.to.col] = copyBoardState[move.from.row][move.from.col];
            }
        }
        if (move.type === 'en passant') {
            copyBoardState[move.from.row][move.to.col] = ' ';
        }
        copyBoardState[move.from.row][move.from.col] = ' ';

        const opponentSide = side === 'white' ? 'black' : 'white';

        const result = findBestMoveWithMinimax(
            copyBoardState,
            opponentSide,
            whiteKingMoved,
            whiteLeftRookMoved,
            whiteRightRookMoved,
            blackKingMoved,
            blackLeftRookMoved,
            blackRightRookMoved,
            depth - 1,
            !isMaximizing,
            alpha,
            beta,
            moveNumber + 1,
        );

        const evaluation = result.evaluation;

        if (isMaximizing) {
            if (evaluation > bestEvaluation) {
                bestEvaluation = evaluation;
                bestMove = move;
            }
            alpha = Math.max(alpha, evaluation);
        } else {
            if (evaluation < bestEvaluation) {
                bestEvaluation = evaluation;
                bestMove = move;
            }
            beta = Math.min(beta, evaluation);
        }

        if (beta <= alpha) break; // Отсечение
    }

    return { bestMove, evaluation: bestEvaluation };
}

function getBoardState(setup) {
  const state = [
     [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
     [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
     [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
     [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
     [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
     [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
     [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
     [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
  ];
  const fen = setup.split('=');
  const chunks = fen[2].split('+');
  let row = 0;
  let col = 0;
  const pieces = chunks[0];
  for (let i = 0; i < pieces.length; i++) {
      const c = pieces.charAt(i);
      if (c == '/') {
          row++;
          col = 0;
      } else {
          if (c >= '0' && c <= '9') {
              for (var j = 0; j < parseInt(c); j++) {
                  state[row][col] = ' ';
                  col++;
              }
          } else {
//            console.log('row = ' + row + ', col = ' + col + ': ' + c);
              state[row][col] = c;
              col++;
          }
      }
  }
  return state;
}

Ai.prototype.setContext = function(ctx, board) {
  if (this.parent) {
      this.parent.setContext(ctx, board);
  }
  ctx.timestamp = Date.now();
  ctx.board  = board;
}

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function decodeCol(ix) {
  return letters[ix];
}

function decodeRow(ix) {
  return 8 - ix;
}

function decodeMove(move) {
  return decodeCol(move.from.row) + decodeRow(move.from.col) + '-' + decodeCol(move.to.row) + decodeRow(move.to.col);
}

Ai.prototype.getMove = function(ctx) {
  const moves = Dagaz.AI.generate(ctx, ctx.board);
  if (moves.length == 0) {
      return { done: true, ai: "nothing" };
  }
  if (moves.length == 1) {
      return {
           done: true,
           move: moves[0],
           time: Date.now() - ctx.timestamp,
           ai:  "once"
      };
  }
  const setup = Dagaz.Model.getSetup(ctx.design, ctx.board);
  console.log('FEN: ' + setup);
  const boardState = getBoardState(setup);
  const pieces = boardState.map(row => row.join('')).join('').replaceAll(' ', '');
  const {bestMove, evaluation} = findBestMoveWithMinimax(
                                boardState,
                                turn,
                                whiteKingMoved,
                                whiteLeftRookMoved,
                                whiteRightRookMoved,
                                blackKingMoved,
                                blackLeftRookMoved,
                                blackRightRookMoved,
                                pieces.length <= 10 && !pieces.includes('Q') && !pieces.includes('q') ? 6 : 4,
  );
//console.log(boardState);
  console.log(bestMove);
//console.log('Eval: ' + evaluation);
  const resultMove = decodeMove(bestMove);
  let m = null;
      _.each(moves, function(move) {
          var x = move.toString() + ' ';
          if (x.startsWith(resultMove + ' ')) {
              m = move;
          }
  });
  if (m !== null) {
      return {
        done: true,
        move: move,
        time: Date.now() - ctx.timestamp,
        ai:  "stupid"
      };
  }
  if (this.parent) {
      return this.parent.getMove(ctx);
  }
}


})();
