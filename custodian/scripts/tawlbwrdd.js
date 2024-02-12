Dagaz.Controller.persistense = "setup";

Dagaz.Model.WIDTH  = 11;
Dagaz.Model.HEIGHT = 11;

Dagaz.Model.NEIGB  = [49, 59, 61, 71];
Dagaz.Model.CENTR  = 60;
Dagaz.Model.RESTR  = [60];

Dagaz.AI.MAXX      = 0x0B;
Dagaz.AI.MAXY      = 0xB0;

Dagaz.AI.pieceAdj = [
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
],
[   0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0, // piecePawn
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0, -100,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0
],
[   2000000,    2000000,    2000000,    2000000,    2000000,    2000000,    2000000,    2000000,    2000000,    2000000,    2000000, // pieceKing
    2000000,    0,    0,    0,    0,    0,    0,    0,    0,    0,    2000000,
    2000000,    0,    0,    0,    0,    0,    0,    0,    0,    0,    2000000,
    2000000,    0,    0,    0,    0,    0,    0,    0,    0,    0,    2000000,
    2000000,    0,    0,    0,    0,    0,    0,    0,    0,    0,    2000000,
    2000000,    0,    0,    0,    0,  -10,    0,    0,    0,    0,    2000000,
    2000000,    0,    0,    0,    0,    0,    0,    0,    0,    0,    2000000,
    2000000,    0,    0,    0,    0,    0,    0,    0,    0,    0,    2000000,
    2000000,    0,    0,    0,    0,    0,    0,    0,    0,    0,    2000000,
    2000000,    0,    0,    0,    0,    0,    0,    0,    0,    0,    2000000,
    2000000,    2000000,    2000000,    2000000,    2000000,    2000000,    2000000,    2000000,    2000000,    2000000,    0
],
[   0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0, // pieceCaptured
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
]];

Dagaz.AI.RESTRICTED = [0x77];

ZRF = {
    JUMP:          0,
    IF:            1,
    FORK:          2,
    FUNCTION:      3,
    IN_ZONE:       4,
    FLAG:          5,
    SET_FLAG:      6,
    POS_FLAG:      7,
    SET_POS_FLAG:  8,
    ATTR:          9,
    SET_ATTR:      10,
    PROMOTE:       11,
    MODE:          12,
    ON_BOARD_DIR:  13,
    ON_BOARD_POS:  14,
    PARAM:         15,
    LITERAL:       16,
    VERIFY:        20
};

Dagaz.Model.BuildDesign = function(design) {
    design.checkVersion("z2j", "2");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("advisor-wait", "25");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("n");

    design.addPlayer("Black", [1, 0, 3, 2]);
    design.addPlayer("White", [0, 1, 2, 3]);

    design.addPosition("a11", [0, 1, 11, 0]);
    design.addPosition("b11", [-1, 1, 11, 0]);
    design.addPosition("c11", [-1, 1, 11, 0]);
    design.addPosition("d11", [-1, 1, 11, 0]);
    design.addPosition("e11", [-1, 1, 11, 0]);
    design.addPosition("f11", [-1, 1, 11, 0]);
    design.addPosition("g11", [-1, 1, 11, 0]);
    design.addPosition("h11", [-1, 1, 11, 0]);
    design.addPosition("i11", [-1, 1, 11, 0]);
    design.addPosition("j11", [-1, 1, 11, 0]);
    design.addPosition("k11", [-1, 0, 11, 0]);
    design.addPosition("a10", [0, 1, 11, -11]);
    design.addPosition("b10", [-1, 1, 11, -11]);
    design.addPosition("c10", [-1, 1, 11, -11]);
    design.addPosition("d10", [-1, 1, 11, -11]);
    design.addPosition("e10", [-1, 1, 11, -11]);
    design.addPosition("f10", [-1, 1, 11, -11]);
    design.addPosition("g10", [-1, 1, 11, -11]);
    design.addPosition("h10", [-1, 1, 11, -11]);
    design.addPosition("i10", [-1, 1, 11, -11]);
    design.addPosition("j10", [-1, 1, 11, -11]);
    design.addPosition("k10", [-1, 0, 11, -11]);
    design.addPosition("a9", [0, 1, 11, -11]);
    design.addPosition("b9", [-1, 1, 11, -11]);
    design.addPosition("c9", [-1, 1, 11, -11]);
    design.addPosition("d9", [-1, 1, 11, -11]);
    design.addPosition("e9", [-1, 1, 11, -11]);
    design.addPosition("f9", [-1, 1, 11, -11]);
    design.addPosition("g9", [-1, 1, 11, -11]);
    design.addPosition("h9", [-1, 1, 11, -11]);
    design.addPosition("i9", [-1, 1, 11, -11]);
    design.addPosition("j9", [-1, 1, 11, -11]);
    design.addPosition("k9", [-1, 0, 11, -11]);
    design.addPosition("a8", [0, 1, 11, -11]);
    design.addPosition("b8", [-1, 1, 11, -11]);
    design.addPosition("c8", [-1, 1, 11, -11]);
    design.addPosition("d8", [-1, 1, 11, -11]);
    design.addPosition("e8", [-1, 1, 11, -11]);
    design.addPosition("f8", [-1, 1, 11, -11]);
    design.addPosition("g8", [-1, 1, 11, -11]);
    design.addPosition("h8", [-1, 1, 11, -11]);
    design.addPosition("i8", [-1, 1, 11, -11]);
    design.addPosition("j8", [-1, 1, 11, -11]);
    design.addPosition("k8", [-1, 0, 11, -11]);
    design.addPosition("a7", [0, 1, 11, -11]);
    design.addPosition("b7", [-1, 1, 11, -11]);
    design.addPosition("c7", [-1, 1, 11, -11]);
    design.addPosition("d7", [-1, 1, 11, -11]);
    design.addPosition("e7", [-1, 1, 11, -11]);
    design.addPosition("f7", [-1, 1, 11, -11]);
    design.addPosition("g7", [-1, 1, 11, -11]);
    design.addPosition("h7", [-1, 1, 11, -11]);
    design.addPosition("i7", [-1, 1, 11, -11]);
    design.addPosition("j7", [-1, 1, 11, -11]);
    design.addPosition("k7", [-1, 0, 11, -11]);
    design.addPosition("a6", [0, 1, 11, -11]);
    design.addPosition("b6", [-1, 1, 11, -11]);
    design.addPosition("c6", [-1, 1, 11, -11]);
    design.addPosition("d6", [-1, 1, 11, -11]);
    design.addPosition("e6", [-1, 1, 11, -11]);
    design.addPosition("f6", [-1, 1, 11, -11]);
    design.addPosition("g6", [-1, 1, 11, -11]);
    design.addPosition("h6", [-1, 1, 11, -11]);
    design.addPosition("i6", [-1, 1, 11, -11]);
    design.addPosition("j6", [-1, 1, 11, -11]);
    design.addPosition("k6", [-1, 0, 11, -11]);
    design.addPosition("a5", [0, 1, 11, -11]);
    design.addPosition("b5", [-1, 1, 11, -11]);
    design.addPosition("c5", [-1, 1, 11, -11]);
    design.addPosition("d5", [-1, 1, 11, -11]);
    design.addPosition("e5", [-1, 1, 11, -11]);
    design.addPosition("f5", [-1, 1, 11, -11]);
    design.addPosition("g5", [-1, 1, 11, -11]);
    design.addPosition("h5", [-1, 1, 11, -11]);
    design.addPosition("i5", [-1, 1, 11, -11]);
    design.addPosition("j5", [-1, 1, 11, -11]);
    design.addPosition("k5", [-1, 0, 11, -11]);
    design.addPosition("a4", [0, 1, 11, -11]);
    design.addPosition("b4", [-1, 1, 11, -11]);
    design.addPosition("c4", [-1, 1, 11, -11]);
    design.addPosition("d4", [-1, 1, 11, -11]);
    design.addPosition("e4", [-1, 1, 11, -11]);
    design.addPosition("f4", [-1, 1, 11, -11]);
    design.addPosition("g4", [-1, 1, 11, -11]);
    design.addPosition("h4", [-1, 1, 11, -11]);
    design.addPosition("i4", [-1, 1, 11, -11]);
    design.addPosition("j4", [-1, 1, 11, -11]);
    design.addPosition("k4", [-1, 0, 11, -11]);
    design.addPosition("a3", [0, 1, 11, -11]);
    design.addPosition("b3", [-1, 1, 11, -11]);
    design.addPosition("c3", [-1, 1, 11, -11]);
    design.addPosition("d3", [-1, 1, 11, -11]);
    design.addPosition("e3", [-1, 1, 11, -11]);
    design.addPosition("f3", [-1, 1, 11, -11]);
    design.addPosition("g3", [-1, 1, 11, -11]);
    design.addPosition("h3", [-1, 1, 11, -11]);
    design.addPosition("i3", [-1, 1, 11, -11]);
    design.addPosition("j3", [-1, 1, 11, -11]);
    design.addPosition("k3", [-1, 0, 11, -11]);
    design.addPosition("a2", [0, 1, 11, -11]);
    design.addPosition("b2", [-1, 1, 11, -11]);
    design.addPosition("c2", [-1, 1, 11, -11]);
    design.addPosition("d2", [-1, 1, 11, -11]);
    design.addPosition("e2", [-1, 1, 11, -11]);
    design.addPosition("f2", [-1, 1, 11, -11]);
    design.addPosition("g2", [-1, 1, 11, -11]);
    design.addPosition("h2", [-1, 1, 11, -11]);
    design.addPosition("i2", [-1, 1, 11, -11]);
    design.addPosition("j2", [-1, 1, 11, -11]);
    design.addPosition("k2", [-1, 0, 11, -11]);
    design.addPosition("a1", [0, 1, 0, -11]);
    design.addPosition("b1", [-1, 1, 0, -11]);
    design.addPosition("c1", [-1, 1, 0, -11]);
    design.addPosition("d1", [-1, 1, 0, -11]);
    design.addPosition("e1", [-1, 1, 0, -11]);
    design.addPosition("f1", [-1, 1, 0, -11]);
    design.addPosition("g1", [-1, 1, 0, -11]);
    design.addPosition("h1", [-1, 1, 0, -11]);
    design.addPosition("i1", [-1, 1, 0, -11]);
    design.addPosition("j1", [-1, 1, 0, -11]);
    design.addPosition("k1", [-1, 0, 0, -11]);

    design.addZone("throne", 2, [60]);
    design.addZone("throne", 1, [60]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	13);
    design.addCommand(0, ZRF.IN_ZONE,	0);	// throne
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.IN_ZONE,	1);	// goal
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FORK,	3);
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.JUMP,	-14);
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addPiece("Man", 0);
    design.addMove(0, 0, [3, 3], 0);
    design.addMove(0, 0, [2, 2], 0);
    design.addMove(0, 0, [0, 0], 0);
    design.addMove(0, 0, [1, 1], 0);

    design.addPiece("King", 1);
    design.addMove(1, 0, [3, 3], 0);
    design.addMove(1, 0, [2, 2], 0);
    design.addMove(1, 0, [0, 0], 0);
    design.addMove(1, 0, [1, 1], 0);

    design.addPiece("CapturedKing", 2);

    design.setup("Black", "Man", 77);
    design.setup("Black", "Man", 66);
    design.setup("Black", "Man", 55);
    design.setup("Black", "Man", 44);
    design.setup("Black", "Man", 33);
    design.setup("Black", "Man", 56);
    design.setup("Black", "Man", 113);
    design.setup("Black", "Man", 3);
    design.setup("Black", "Man", 114);
    design.setup("Black", "Man", 4);
    design.setup("Black", "Man", 115);
    design.setup("Black", "Man", 104);
    design.setup("Black", "Man", 16);
    design.setup("Black", "Man", 5);
    design.setup("Black", "Man", 116);
    design.setup("Black", "Man", 6);
    design.setup("Black", "Man", 117);
    design.setup("Black", "Man", 7);
    design.setup("Black", "Man", 64);
    design.setup("Black", "Man", 87);
    design.setup("Black", "Man", 76);
    design.setup("Black", "Man", 65);
    design.setup("Black", "Man", 54);
    design.setup("Black", "Man", 43);
    design.setup("White", "King", 60);
    design.setup("White", "Man", 58);
    design.setup("White", "Man", 70);
    design.setup("White", "Man", 59);
    design.setup("White", "Man", 48);
    design.setup("White", "Man", 82);
    design.setup("White", "Man", 71);
    design.setup("White", "Man", 49);
    design.setup("White", "Man", 38);
    design.setup("White", "Man", 72);
    design.setup("White", "Man", 61);
    design.setup("White", "Man", 50);
    design.setup("White", "Man", 62);

    design.goal(0, "White", "King", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 21, 22, 32, 33, 43, 44, 54, 55, 65, 66, 76, 77, 87, 88, 98, 99, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120]);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPieceSvg("WhiteMan", "White Man", 49, 49);
    view.defPieceSvg("BlackMan", "Black Man", 49, 49);
    view.defPiece("WhiteKing", "White King");
    view.defPiece("WhiteKing", "White CapturedKing");
 
    view.defPosition("a11", 21, 23, 69, 69);
    view.defPosition("b11", 90, 23, 69, 69);
    view.defPosition("c11", 159, 23, 69, 69);
    view.defPosition("d11", 228, 23, 69, 69);
    view.defPosition("e11", 297, 23, 69, 69);
    view.defPosition("f11", 366, 23, 69, 69);
    view.defPosition("g11", 435, 23, 69, 69);
    view.defPosition("h11", 504, 23, 69, 69);
    view.defPosition("i11", 573, 23, 69, 69);
    view.defPosition("j11", 642, 23, 69, 69);
    view.defPosition("k11", 711, 23, 69, 69);
    view.defPosition("a10", 21, 92, 69, 69);
    view.defPosition("b10", 90, 92, 69, 69);
    view.defPosition("c10", 159, 92, 69, 69);
    view.defPosition("d10", 228, 92, 69, 69);
    view.defPosition("e10", 297, 92, 69, 69);
    view.defPosition("f10", 366, 92, 69, 69);
    view.defPosition("g10", 435, 92, 69, 69);
    view.defPosition("h10", 504, 92, 69, 69);
    view.defPosition("i10", 573, 92, 69, 69);
    view.defPosition("j10", 642, 92, 69, 69);
    view.defPosition("k10", 711, 92, 69, 69);
    view.defPosition("a9", 21, 161, 69, 69);
    view.defPosition("b9", 90, 161, 69, 69);
    view.defPosition("c9", 159, 161, 69, 69);
    view.defPosition("d9", 228, 161, 69, 69);
    view.defPosition("e9", 297, 161, 69, 69);
    view.defPosition("f9", 366, 161, 69, 69);
    view.defPosition("g9", 435, 161, 69, 69);
    view.defPosition("h9", 504, 161, 69, 69);
    view.defPosition("i9", 573, 161, 69, 69);
    view.defPosition("j9", 642, 161, 69, 69);
    view.defPosition("k9", 711, 161, 69, 69);
    view.defPosition("a8", 21, 230, 69, 69);
    view.defPosition("b8", 90, 230, 69, 69);
    view.defPosition("c8", 159, 230, 69, 69);
    view.defPosition("d8", 228, 230, 69, 69);
    view.defPosition("e8", 297, 230, 69, 69);
    view.defPosition("f8", 366, 230, 69, 69);
    view.defPosition("g8", 435, 230, 69, 69);
    view.defPosition("h8", 504, 230, 69, 69);
    view.defPosition("i8", 573, 230, 69, 69);
    view.defPosition("j8", 642, 230, 69, 69);
    view.defPosition("k8", 711, 230, 69, 69);
    view.defPosition("a7", 21, 299, 69, 69);
    view.defPosition("b7", 90, 299, 69, 69);
    view.defPosition("c7", 159, 299, 69, 69);
    view.defPosition("d7", 228, 299, 69, 69);
    view.defPosition("e7", 297, 299, 69, 69);
    view.defPosition("f7", 366, 299, 69, 69);
    view.defPosition("g7", 435, 299, 69, 69);
    view.defPosition("h7", 504, 299, 69, 69);
    view.defPosition("i7", 573, 299, 69, 69);
    view.defPosition("j7", 642, 299, 69, 69);
    view.defPosition("k7", 711, 299, 69, 69);
    view.defPosition("a6", 21, 368, 69, 69);
    view.defPosition("b6", 90, 368, 69, 69);
    view.defPosition("c6", 159, 368, 69, 69);
    view.defPosition("d6", 228, 368, 69, 69);
    view.defPosition("e6", 297, 368, 69, 69);
    view.defPosition("f6", 366, 368, 69, 69);
    view.defPosition("g6", 435, 368, 69, 69);
    view.defPosition("h6", 504, 368, 69, 69);
    view.defPosition("i6", 573, 368, 69, 69);
    view.defPosition("j6", 642, 368, 69, 69);
    view.defPosition("k6", 711, 368, 69, 69);
    view.defPosition("a5", 21, 437, 69, 69);
    view.defPosition("b5", 90, 437, 69, 69);
    view.defPosition("c5", 159, 437, 69, 69);
    view.defPosition("d5", 228, 437, 69, 69);
    view.defPosition("e5", 297, 437, 69, 69);
    view.defPosition("f5", 366, 437, 69, 69);
    view.defPosition("g5", 435, 437, 69, 69);
    view.defPosition("h5", 504, 437, 69, 69);
    view.defPosition("i5", 573, 437, 69, 69);
    view.defPosition("j5", 642, 437, 69, 69);
    view.defPosition("k5", 711, 437, 69, 69);
    view.defPosition("a4", 21, 506, 69, 69);
    view.defPosition("b4", 90, 506, 69, 69);
    view.defPosition("c4", 159, 506, 69, 69);
    view.defPosition("d4", 228, 506, 69, 69);
    view.defPosition("e4", 297, 506, 69, 69);
    view.defPosition("f4", 366, 506, 69, 69);
    view.defPosition("g4", 435, 506, 69, 69);
    view.defPosition("h4", 504, 506, 69, 69);
    view.defPosition("i4", 573, 506, 69, 69);
    view.defPosition("j4", 642, 506, 69, 69);
    view.defPosition("k4", 711, 506, 69, 69);
    view.defPosition("a3", 21, 575, 69, 69);
    view.defPosition("b3", 90, 575, 69, 69);
    view.defPosition("c3", 159, 575, 69, 69);
    view.defPosition("d3", 228, 575, 69, 69);
    view.defPosition("e3", 297, 575, 69, 69);
    view.defPosition("f3", 366, 575, 69, 69);
    view.defPosition("g3", 435, 575, 69, 69);
    view.defPosition("h3", 504, 575, 69, 69);
    view.defPosition("i3", 573, 575, 69, 69);
    view.defPosition("j3", 642, 575, 69, 69);
    view.defPosition("k3", 711, 575, 69, 69);
    view.defPosition("a2", 21, 644, 69, 69);
    view.defPosition("b2", 90, 644, 69, 69);
    view.defPosition("c2", 159, 644, 69, 69);
    view.defPosition("d2", 228, 644, 69, 69);
    view.defPosition("e2", 297, 644, 69, 69);
    view.defPosition("f2", 366, 644, 69, 69);
    view.defPosition("g2", 435, 644, 69, 69);
    view.defPosition("h2", 504, 644, 69, 69);
    view.defPosition("i2", 573, 644, 69, 69);
    view.defPosition("j2", 642, 644, 69, 69);
    view.defPosition("k2", 711, 644, 69, 69);
    view.defPosition("a1", 21, 713, 69, 69);
    view.defPosition("b1", 90, 713, 69, 69);
    view.defPosition("c1", 159, 713, 69, 69);
    view.defPosition("d1", 228, 713, 69, 69);
    view.defPosition("e1", 297, 713, 69, 69);
    view.defPosition("f1", 366, 713, 69, 69);
    view.defPosition("g1", 435, 713, 69, 69);
    view.defPosition("h1", 504, 713, 69, 69);
    view.defPosition("i1", 573, 713, 69, 69);
    view.defPosition("j1", 642, 713, 69, 69);
    view.defPosition("k1", 711, 713, 69, 69);
}
