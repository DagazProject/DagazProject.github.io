Dagaz.Controller.persistense = "setup";

Dagaz.Model.WIDTH  = 9;
Dagaz.Model.HEIGHT = 9;

Dagaz.Model.CROSS  = [22, 38, 42, 58];
Dagaz.Model.NEIGB  = [31, 39, 41, 49];
Dagaz.Model.CENTR  = 40;
Dagaz.Model.RESTR  = [40];

Dagaz.AI.pieceAdj = [
[   0,    0,    0,    0,    0,    0,    0,    0,    0, // pieceEmpty
    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0
],
[   0,    0,    0,    0,    0,    0,    0,    0,    0, // piecePawn
    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0, -100,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0
],
[   2000000, 2000000, 2000000, 2000000, 2000000, 2000000, 2000000, 2000000, 2000000, // pieceKing
    2000000,    0,    0,    0,    0,    0,    0,    0,    2000000,
    2000000,    0,    0,    0,    0,    0,    0,    0,    2000000,
    2000000,    0,    0,    0,    0,    0,    0,    0,    2000000,
    2000000,    0,    0,    0,  -10,    0,    0,    0,    2000000,
    2000000,    0,    0,    0,    0,    0,    0,    0,    2000000,
    2000000,    0,    0,    0,    0,    0,    0,    0,    2000000,
    2000000,    0,    0,    0,    0,    0,    0,    0,    2000000,
    2000000, 2000000, 2000000, 2000000, 2000000, 2000000, 2000000, 2000000, 2000000
],
[   0,    0,    0,    0,    0,    0,    0,    0,    0, // pieceCaptured
    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0,
    0,    0,    0,    0,    0,    0,    0,    0,    0
]];

Dagaz.AI.RESTRICTED = [0x66];

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

    design.addPosition("a9", [0, 1, 9, 0]);
    design.addPosition("b9", [-1, 1, 9, 0]);
    design.addPosition("c9", [-1, 1, 9, 0]);
    design.addPosition("d9", [-1, 1, 9, 0]);
    design.addPosition("e9", [-1, 1, 9, 0]);
    design.addPosition("f9", [-1, 1, 9, 0]);
    design.addPosition("g9", [-1, 1, 9, 0]);
    design.addPosition("h9", [-1, 1, 9, 0]);
    design.addPosition("i9", [-1, 0, 9, 0]);
    design.addPosition("a8", [0, 1, 9, -9]);
    design.addPosition("b8", [-1, 1, 9, -9]);
    design.addPosition("c8", [-1, 1, 9, -9]);
    design.addPosition("d8", [-1, 1, 9, -9]);
    design.addPosition("e8", [-1, 1, 9, -9]);
    design.addPosition("f8", [-1, 1, 9, -9]);
    design.addPosition("g8", [-1, 1, 9, -9]);
    design.addPosition("h8", [-1, 1, 9, -9]);
    design.addPosition("i8", [-1, 0, 9, -9]);
    design.addPosition("a7", [0, 1, 9, -9]);
    design.addPosition("b7", [-1, 1, 9, -9]);
    design.addPosition("c7", [-1, 1, 9, -9]);
    design.addPosition("d7", [-1, 1, 9, -9]);
    design.addPosition("e7", [-1, 1, 9, -9]);
    design.addPosition("f7", [-1, 1, 9, -9]);
    design.addPosition("g7", [-1, 1, 9, -9]);
    design.addPosition("h7", [-1, 1, 9, -9]);
    design.addPosition("i7", [-1, 0, 9, -9]);
    design.addPosition("a6", [0, 1, 9, -9]);
    design.addPosition("b6", [-1, 1, 9, -9]);
    design.addPosition("c6", [-1, 1, 9, -9]);
    design.addPosition("d6", [-1, 1, 9, -9]);
    design.addPosition("e6", [-1, 1, 9, -9]);
    design.addPosition("f6", [-1, 1, 9, -9]);
    design.addPosition("g6", [-1, 1, 9, -9]);
    design.addPosition("h6", [-1, 1, 9, -9]);
    design.addPosition("i6", [-1, 0, 9, -9]);
    design.addPosition("a5", [0, 1, 9, -9]);
    design.addPosition("b5", [-1, 1, 9, -9]);
    design.addPosition("c5", [-1, 1, 9, -9]);
    design.addPosition("d5", [-1, 1, 9, -9]);
    design.addPosition("e5", [-1, 1, 9, -9]);
    design.addPosition("f5", [-1, 1, 9, -9]);
    design.addPosition("g5", [-1, 1, 9, -9]);
    design.addPosition("h5", [-1, 1, 9, -9]);
    design.addPosition("i5", [-1, 0, 9, -9]);
    design.addPosition("a4", [0, 1, 9, -9]);
    design.addPosition("b4", [-1, 1, 9, -9]);
    design.addPosition("c4", [-1, 1, 9, -9]);
    design.addPosition("d4", [-1, 1, 9, -9]);
    design.addPosition("e4", [-1, 1, 9, -9]);
    design.addPosition("f4", [-1, 1, 9, -9]);
    design.addPosition("g4", [-1, 1, 9, -9]);
    design.addPosition("h4", [-1, 1, 9, -9]);
    design.addPosition("i4", [-1, 0, 9, -9]);
    design.addPosition("a3", [0, 1, 9, -9]);
    design.addPosition("b3", [-1, 1, 9, -9]);
    design.addPosition("c3", [-1, 1, 9, -9]);
    design.addPosition("d3", [-1, 1, 9, -9]);
    design.addPosition("e3", [-1, 1, 9, -9]);
    design.addPosition("f3", [-1, 1, 9, -9]);
    design.addPosition("g3", [-1, 1, 9, -9]);
    design.addPosition("h3", [-1, 1, 9, -9]);
    design.addPosition("i3", [-1, 0, 9, -9]);
    design.addPosition("a2", [0, 1, 9, -9]);
    design.addPosition("b2", [-1, 1, 9, -9]);
    design.addPosition("c2", [-1, 1, 9, -9]);
    design.addPosition("d2", [-1, 1, 9, -9]);
    design.addPosition("e2", [-1, 1, 9, -9]);
    design.addPosition("f2", [-1, 1, 9, -9]);
    design.addPosition("g2", [-1, 1, 9, -9]);
    design.addPosition("h2", [-1, 1, 9, -9]);
    design.addPosition("i2", [-1, 0, 9, -9]);
    design.addPosition("a1", [0, 1, 0, -9]);
    design.addPosition("b1", [-1, 1, 0, -9]);
    design.addPosition("c1", [-1, 1, 0, -9]);
    design.addPosition("d1", [-1, 1, 0, -9]);
    design.addPosition("e1", [-1, 1, 0, -9]);
    design.addPosition("f1", [-1, 1, 0, -9]);
    design.addPosition("g1", [-1, 1, 0, -9]);
    design.addPosition("h1", [-1, 1, 0, -9]);
    design.addPosition("i1", [-1, 0, 0, -9]);

    design.addZone("throne", 2, [40]);
    design.addZone("throne", 1, [40]);

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
    design.addMove(1, 0, [0, 0], 0);
    design.addMove(1, 0, [2, 2], 0);
    design.addMove(1, 0, [1, 1], 0);

    design.addPiece("CapturedKing", 2);

    design.setup("Black", "Man", 45);
    design.setup("Black", "Man", 36);
    design.setup("Black", "Man", 27);
    design.setup("Black", "Man", 37);
    design.setup("Black", "Man", 75);
    design.setup("Black", "Man", 3);
    design.setup("Black", "Man", 76);
    design.setup("Black", "Man", 67);
    design.setup("Black", "Man", 13);
    design.setup("Black", "Man", 4);
    design.setup("Black", "Man", 77);
    design.setup("Black", "Man", 5);
    design.setup("Black", "Man", 43);
    design.setup("Black", "Man", 53);
    design.setup("Black", "Man", 44);
    design.setup("Black", "Man", 35);
    design.setup("White", "King", 40);
    design.setup("White", "Man", 38);
    design.setup("White", "Man", 39);
    design.setup("White", "Man", 58);
    design.setup("White", "Man", 49);
    design.setup("White", "Man", 31);
    design.setup("White", "Man", 22);
    design.setup("White", "Man", 41);
    design.setup("White", "Man", 42);

    design.goal(0, "White", "King", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 17, 18, 26, 27, 35, 36, 44, 45, 53, 54, 62, 63, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80]);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPieceSvg("WhiteMan", "White Man", 49, 49);
    view.defPieceSvg("BlackMan", "Black Man", 49, 49);
    view.defPiece("WhiteKing", "White King");
    view.defPiece("WhiteKing", "White CapturedKing");
 
    view.defPosition("a9", 21, 23, 69, 69);
    view.defPosition("b9", 90, 23, 69, 69);
    view.defPosition("c9", 159, 23, 69, 69);
    view.defPosition("d9", 228, 23, 69, 69);
    view.defPosition("e9", 297, 23, 69, 69);
    view.defPosition("f9", 366, 23, 69, 69);
    view.defPosition("g9", 435, 23, 69, 69);
    view.defPosition("h9", 504, 23, 69, 69);
    view.defPosition("i9", 573, 23, 69, 69);
    view.defPosition("a8", 21, 92, 69, 69);
    view.defPosition("b8", 90, 92, 69, 69);
    view.defPosition("c8", 159, 92, 69, 69);
    view.defPosition("d8", 228, 92, 69, 69);
    view.defPosition("e8", 297, 92, 69, 69);
    view.defPosition("f8", 366, 92, 69, 69);
    view.defPosition("g8", 435, 92, 69, 69);
    view.defPosition("h8", 504, 92, 69, 69);
    view.defPosition("i8", 573, 92, 69, 69);
    view.defPosition("a7", 21, 161, 69, 69);
    view.defPosition("b7", 90, 161, 69, 69);
    view.defPosition("c7", 159, 161, 69, 69);
    view.defPosition("d7", 228, 161, 69, 69);
    view.defPosition("e7", 297, 161, 69, 69);
    view.defPosition("f7", 366, 161, 69, 69);
    view.defPosition("g7", 435, 161, 69, 69);
    view.defPosition("h7", 504, 161, 69, 69);
    view.defPosition("i7", 573, 161, 69, 69);
    view.defPosition("a6", 21, 230, 69, 69);
    view.defPosition("b6", 90, 230, 69, 69);
    view.defPosition("c6", 159, 230, 69, 69);
    view.defPosition("d6", 228, 230, 69, 69);
    view.defPosition("e6", 297, 230, 69, 69);
    view.defPosition("f6", 366, 230, 69, 69);
    view.defPosition("g6", 435, 230, 69, 69);
    view.defPosition("h6", 504, 230, 69, 69);
    view.defPosition("i6", 573, 230, 69, 69);
    view.defPosition("a5", 21, 299, 69, 69);
    view.defPosition("b5", 90, 299, 69, 69);
    view.defPosition("c5", 159, 299, 69, 69);
    view.defPosition("d5", 228, 299, 69, 69);
    view.defPosition("e5", 297, 299, 69, 69);
    view.defPosition("f5", 366, 299, 69, 69);
    view.defPosition("g5", 435, 299, 69, 69);
    view.defPosition("h5", 504, 299, 69, 69);
    view.defPosition("i5", 573, 299, 69, 69);
    view.defPosition("a4", 21, 368, 69, 69);
    view.defPosition("b4", 90, 368, 69, 69);
    view.defPosition("c4", 159, 368, 69, 69);
    view.defPosition("d4", 228, 368, 69, 69);
    view.defPosition("e4", 297, 368, 69, 69);
    view.defPosition("f4", 366, 368, 69, 69);
    view.defPosition("g4", 435, 368, 69, 69);
    view.defPosition("h4", 504, 368, 69, 69);
    view.defPosition("i4", 573, 368, 69, 69);
    view.defPosition("a3", 21, 437, 69, 69);
    view.defPosition("b3", 90, 437, 69, 69);
    view.defPosition("c3", 159, 437, 69, 69);
    view.defPosition("d3", 228, 437, 69, 69);
    view.defPosition("e3", 297, 437, 69, 69);
    view.defPosition("f3", 366, 437, 69, 69);
    view.defPosition("g3", 435, 437, 69, 69);
    view.defPosition("h3", 504, 437, 69, 69);
    view.defPosition("i3", 573, 437, 69, 69);
    view.defPosition("a2", 21, 506, 69, 69);
    view.defPosition("b2", 90, 506, 69, 69);
    view.defPosition("c2", 159, 506, 69, 69);
    view.defPosition("d2", 228, 506, 69, 69);
    view.defPosition("e2", 297, 506, 69, 69);
    view.defPosition("f2", 366, 506, 69, 69);
    view.defPosition("g2", 435, 506, 69, 69);
    view.defPosition("h2", 504, 506, 69, 69);
    view.defPosition("i2", 573, 506, 69, 69);
    view.defPosition("a1", 21, 575, 69, 69);
    view.defPosition("b1", 90, 575, 69, 69);
    view.defPosition("c1", 159, 575, 69, 69);
    view.defPosition("d1", 228, 575, 69, 69);
    view.defPosition("e1", 297, 575, 69, 69);
    view.defPosition("f1", 366, 575, 69, 69);
    view.defPosition("g1", 435, 575, 69, 69);
    view.defPosition("h1", 504, 575, 69, 69);
    view.defPosition("i1", 573, 575, 69, 69);
}
