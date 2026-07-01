"use strict";

var VECTORDELTA_SIZE  = 256;

importScripts('../../underscore/underscore-min.js', '../../common-scripts/zobrist-worker.js', '../../common-scripts/garbo-worker.js', 'common-shogi-worker.js');

let g_width          = 5;
let g_height         = 6;

const emptyAdj = [
     0,     0,     0,     0,     0, // pieceEmpty
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0
];

const pawnAdj = [
     0,     0,     0,     0,     0, // pieceEmpty
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0
];

const goldAdj = [
     0,     0,     0,     0,     0, // pieceEmpty
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0
];

const silverAdj = [
     0,     0,     0,     0,     0, // pieceEmpty
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0
];

const bishopAdj = [
     0,     0,     0,     0,     0, // pieceEmpty
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0
];

const rookAdj = [
     0,     0,     0,     0,     0, // pieceEmpty
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0
];

const bishopPAdj = [
     0,     0,     0,     0,     0, // pieceEmpty
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0
];

const rookPAdj = [
     0,     0,     0,     0,     0, // pieceEmpty
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0
];

const kingAdj = [
     0,     0,     0,     0,     0, // pieceEmpty
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0
];

const lanceAdj = [
     0,     0,     0,     0,     0, // pieceEmpty
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0
];

const knightAdj = [
     0,     0,     0,     0,     0, // pieceEmpty
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0,
     0,     0,     0,     0,     0
];

function onBoard(target) {
  return !(target & 0x88);
}
