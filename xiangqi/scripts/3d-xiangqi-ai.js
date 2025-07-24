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
],
[   
    1,   10,   20,   10,    1, // piecePawn
    1,   10,   20,   10,    1, 
    1,    5,   10,    5,    1, 
    1,    1,    5,    1,    1, 
    1,    1,    1,    1,    1,
    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,

    1,   15,   25,   15,    1,
    1,   15,   25,   15,    1, 
    1,   10,   15,   10,    1, 
    1,    5,   10,    5,    1, 
    1,    1,    5,    1,    1,
    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,

    5,   20,   30,   20,    5,
    5,   20,   30,   10,    5, 
    1,   15,   20,   15,    1, 
    1,   10,   15,   10,    1, 
    1,    5,   10,    5,    1,
    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,

    1,   15,   25,   15,    1,
    1,   15,   25,   15,    1, 
    1,   10,   15,   10,    1, 
    1,    5,   10,    5,    1, 
    1,    1,    5,    1,    1,
    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,

    1,   10,   20,   10,    1,
    1,   10,   20,   10,    1, 
    1,    5,   10,    5,    1, 
    1,    1,    5,    1,    1, 
    1,    1,    1,    1,    1,
    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0
],
[   
    0,    0,    0,    0,    0, // pieceAdvisor
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
    0,    0,   10,    0,    0, 
    0,    5,    0,    5,    0, 
    0,    0,    5,    0,    0,

    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0, 
    0,   10,    0,   10,    0, 
    0,    0,   15,    0,    0, 
    0,   10,    0,   10,    0,

    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0, 
    0,    0,   10,    0,    0, 
    0,    5,    0,    5,    0, 
    0,    0,    5,    0,    0,

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
],
[   
    0,    0,    0,    0,    0, // pieceBishop
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
],
[   
    0,    0,    0,    0,    0, // pieceKnight
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
],
[   
    0,    0,    0,    0,    0, // pieceUnicorn
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
],
[   
    0,    0,    0,    0,    0, // pieceCannon
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
],
[   
    0,    0,    0,    0,    0, // pieceRook
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
],
[   
    0,    0,    0,    0,    0, // pieceKing
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
    0,    1,    5,    1,    0, 
    0,    5,    5,    5,    0, 
    0,    1,    5,    1,    0,

    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0, 
    0,    5,   10,    5,    0, 
    0,   10,   10,   10,    0, 
    0,    5,   10,    0,    0,

    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0, 
    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0, 
    0,    1,    5,    1,    0, 
    0,    5,    5,    5,    0, 
    0,    1,    5,    1,    0,

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
]
];

var pieceSquareAdj = new Array(9);
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
  pieceSquareAdj[piecePawn]    = MakeTable(Dagaz.AI.pieceAdj[piecePawn]);
  pieceSquareAdj[pieceAdvisor] = MakeTable(Dagaz.AI.pieceAdj[pieceAdvisor]);
  pieceSquareAdj[pieceBishop]  = MakeTable(Dagaz.AI.pieceAdj[pieceBishop]);
  pieceSquareAdj[pieceKnight]  = MakeTable(Dagaz.AI.pieceAdj[pieceKnight]);
  pieceSquareAdj[pieceUnicorn] = MakeTable(Dagaz.AI.pieceAdj[pieceUnicorn]);
  pieceSquareAdj[pieceCannon]  = MakeTable(Dagaz.AI.pieceAdj[pieceCannon]);
  pieceSquareAdj[pieceRook]    = MakeTable(Dagaz.AI.pieceAdj[pieceRook]);
  pieceSquareAdj[pieceKing]    = MakeTable(Dagaz.AI.pieceAdj[pieceKing]);

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

Dagaz.AI.MakeMove = function(move) {
    var me = Dagaz.AI.g_toMove >> Dagaz.AI.TYPE_SIZE;
    var otherColor = Dagaz.AI.colorWhite - Dagaz.AI.g_toMove; 
    
    var flags = move & 0xFF000000;
    var to = (move >> 12) & 0xFFF;
    var from = move & 0xFFF;
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

    Dagaz.AI.g_board[to] = Dagaz.AI.g_board[from];
    Dagaz.AI.g_baseEval += pieceSquareAdj[piece & Dagaz.AI.TYPE_MASK][me == 0 ? flipTable[to] : to];
    Dagaz.AI.g_board[from] = pieceEmpty;

    Dagaz.AI.g_toMove = otherColor;
    Dagaz.AI.g_baseEval = -Dagaz.AI.g_baseEval;
    
    var kingPos = Dagaz.AI.g_pieceList[(pieceKing | (Dagaz.AI.colorWhite - Dagaz.AI.g_toMove)) << Dagaz.AI.COUNTER_SIZE];
    if ((kingPos != 0) && IsSquareAttackable(kingPos, otherColor)) {
        Dagaz.AI.UnmakeMove(move);
        return false;
    }
    
    Dagaz.AI.g_inCheck = false;
    
/*  var theirKingPos = Dagaz.AI.g_pieceList[(pieceKing | Dagaz.AI.g_toMove) << Dagaz.AI.COUNTER_SIZE];
    if (theirKingPos != 0) {
        Dagaz.AI.g_inCheck = IsSquareAttackable(theirKingPos, Dagaz.AI.g_toMove);
    }*/

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
    
    var captured = g_moveUndoStack[Dagaz.AI.g_moveCount].captured;
    var to = (move >> 12) & 0xFFF;
    var from = move & 0xFFF;
    
    var piece = Dagaz.AI.g_board[to];
    Dagaz.AI.g_board[from] = Dagaz.AI.g_board[to];
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

function IsSquareAttackableFrom(target, from) {
    var to, pos, piece, pieceType, adj;

    piece = Dagaz.AI.g_board[from];
    pieceType = piece & Dagaz.AI.TYPE_MASK;

    if (pieceType == pieceEmpty) return false;
    var color = (piece & Dagaz.AI.colorWhite);
    var enemy = color ? Dagaz.AI.colorBlack : Dagaz.AI.colorWhite;
    var inc = color ? -16 : 16;
    var me = color >> Dagaz.AI.TYPE_SIZE;

    if (pieceType == piecePawn) {
        if (+from + inc == target) return true;
        if (+from + 256 == target) return true;
        if (+from - 256 == target) return true;
        if (+from + 257 == target) return true;
        if (+from + 255 == target) return true;
        if (+from - 257 == target) return true;
        if (+from - 255 == target) return true;
        if (+from + 1 == target) return true;
        if (+from - 1 == target) return true;
    }

    if (pieceType == pieceUnicorn) {
       to = from; do { to += 239; if (to == target) return true; } while (Dagaz.AI.g_board[to] == 0);
       to = from; do { to -= 239; if (to == target) return true; } while (Dagaz.AI.g_board[to] == 0);
       to = from; do { to += 273; if (to == target) return true; } while (Dagaz.AI.g_board[to] == 0);
       to = from; do { to -= 273; if (to == target) return true; } while (Dagaz.AI.g_board[to] == 0);
       to = from; do { to += 241; if (to == target) return true; } while (Dagaz.AI.g_board[to] == 0);
       to = from; do { to -= 241; if (to == target) return true; } while (Dagaz.AI.g_board[to] == 0);
       to = from; do { to += 271; if (to == target) return true; } while (Dagaz.AI.g_board[to] == 0);
       to = from; do { to -= 271; if (to == target) return true; } while (Dagaz.AI.g_board[to] == 0);
    }

    if (pieceType == pieceKnight) {
        pos = from - 16;
        if (Dagaz.AI.g_board[pos] == 0) {
            to = pos - 15; if (to == target) return true;
            to = pos - 17; if (to == target) return true;
        }
        pos = from + 16;
        if (Dagaz.AI.g_board[pos] == 0) {
            to = pos + 15; if (to == target) return true;
            to = pos + 17; if (to == target) return true;
        }
        pos = from - 1;
        if (Dagaz.AI.g_board[pos] == 0) {
            to = pos + 15; if (to == target) return true;
            to = pos - 17; if (to == target) return true;
        }
        pos = from + 1;
        if (Dagaz.AI.g_board[pos] == 0) {
            to = pos - 15; if (to == target) return true;
            to = pos + 17; if (to == target) return true;
        }
        pos = from - 256;
        if (Dagaz.AI.g_board[pos] == 0) {
            to = pos - 32; if (to == target) return true;
            to = pos + 32; if (to == target) return true;
            to = pos -  2; if (to == target) return true;
            to = pos +  2; if (to == target) return true;
        }
        pos = from + 256;
        if (Dagaz.AI.g_board[pos] == 0) {
            to = pos - 32; if (to == target) return true;
            to = pos + 32; if (to == target) return true;
            to = pos -  2; if (to == target) return true;
            to = pos +  2; if (to == target) return true;
        }
        pos = from - 512;
        if (Dagaz.AI.g_board[pos] == 0) {
            to = pos - 16; if (to == target) return true;
            to = pos + 16; if (to == target) return true;
            to = pos -  1; if (to == target) return true;
            to = pos +  1; if (to == target) return true;
        }
        pos = from + 512;
        if (Dagaz.AI.g_board[pos] == 0) {
            to = pos - 16; if (to == target) return true;
            to = pos + 16; if (to == target) return true;
            to = pos -  1; if (to == target) return true;
            to = pos +  1; if (to == target) return true;
        }
    }

    if (pieceType == pieceRook) {
       to = from; do { to++; if (to == target) return true; } while (Dagaz.AI.g_board[to] == 0);
       to = from; do { to--; if (to == target) return true; } while (Dagaz.AI.g_board[to] == 0);
       to = from; do { to += 16; if (to == target) return true; } while (Dagaz.AI.g_board[to] == 0);
       to = from; do { to -= 16; if (to == target) return true; } while (Dagaz.AI.g_board[to] == 0);
       to = from; do { to += 256; if (to == target) return true; } while (Dagaz.AI.g_board[to] == 0);
       to = from; do { to -= 256; if (to == target) return true; } while (Dagaz.AI.g_board[to] == 0);
    }

    if (pieceType == pieceCannon) {
       to = from + 1; while (Dagaz.AI.g_board[to] == 0) { if (to == target) return false; to++; }
       if (Dagaz.AI.g_board[to] & Dagaz.AI.PLAYERS_MASK) {
           to++; while (Dagaz.AI.g_board[to] == 0) { to++; }
           if (to == target) return true;
       }
       to = from - 1; while (Dagaz.AI.g_board[to] == 0) { if (to == target) return false; to--; }
       if (Dagaz.AI.g_board[to] & Dagaz.AI.PLAYERS_MASK) {
           to--; while (Dagaz.AI.g_board[to] == 0) { to--; }
           if (to == target) return true;
       }
       to = from + 16; while (Dagaz.AI.g_board[to] == 0) { if (to == target) return false; to += 16; }
       if (Dagaz.AI.g_board[to] & Dagaz.AI.PLAYERS_MASK) {
           to += 16; while (Dagaz.AI.g_board[to] == 0) { to += 16; }
           if (to == target) return true;
       }
       to = from - 16; while (Dagaz.AI.g_board[to] == 0) { if (to == target) return false; to -= 16; }
       if (Dagaz.AI.g_board[to] & Dagaz.AI.PLAYERS_MASK) {
           to -= 16; while (Dagaz.AI.g_board[to] == 0) { to -= 16; }
           if (to == target) return true;
       }
       to = from + 256; while (Dagaz.AI.g_board[to] == 0) { if (to == target) return false; to += 256; }
       if (Dagaz.AI.g_board[to] & Dagaz.AI.PLAYERS_MASK) {
           to += 256; while (Dagaz.AI.g_board[to] == 0) { to += 256; }
           if (to == target) return true;
       }
       to = from - 256; while (Dagaz.AI.g_board[to] == 0) { if (to == target) return false; to -= 256; }
       if (Dagaz.AI.g_board[to] & Dagaz.AI.PLAYERS_MASK) {
           to -= 256; while (Dagaz.AI.g_board[to] == 0) { to -= 256; }
           if (to == target) return true;
       }
    }

    return false;
}

})();
