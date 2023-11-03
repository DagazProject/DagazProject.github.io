Dagaz.Model.WIDTH         = 9;
Dagaz.Model.HEIGHT        = 9;

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
    design.checkVersion("animate-captures", "false");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");

    design.addDirection("se");
    design.addDirection("s");
    design.addDirection("sw");
    design.addDirection("e");
    design.addDirection("w");
    design.addDirection("ne");
    design.addDirection("nw");
    design.addDirection("n");

    design.addPlayer("South", [6, 7, 5, 4, 3, 2, 0, 1]);
    design.addPlayer("North", [6, 7, 5, 4, 3, 2, 0, 1]);

    design.addPosition("a9", [10, 9, 0, 1, 0, 0, 0, 0]);
    design.addPosition("b9", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("c9", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("d9", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("e9", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("f9", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("g9", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("h9", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("i9", [0, 9, 8, 0, -1, 0, 0, 0]);
    design.addPosition("a8", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i8", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a7", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i7", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a6", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i6", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a5", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i5", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a4", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i4", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a3", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i3", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a2", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i2", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("d1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("e1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("f1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("g1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("h1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("i1", [0, 0, 0, 0, -1, 0, -10, -9]);
    design.addPosition("T1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("T2", [0, 0, 0, 0, 0, 0, 0, 0]);

    design.addZone("promotion-zone", 1, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]);
    design.addZone("promotion-zone", 2, [72, 73, 74, 75, 76, 77, 78, 79, 80, 63, 64, 65, 66, 67, 68, 69, 70, 71, 54, 55, 56, 57, 58, 59, 60, 61, 62]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	7);
    design.addCommand(2, ZRF.FORK,	3);
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.JUMP,	-8);
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addPiece("DrunkenElephant", 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 0, [5], 0);
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [6], 0);
    design.addMove(0, 0, [7], 0);
    design.addMove(0, 0, [0], 0);

    design.addPiece("King", 1);
    design.addMove(1, 0, [7], 0);
    design.addMove(1, 0, [6], 0);
    design.addMove(1, 0, [1], 0);
    design.addMove(1, 0, [0], 0);
    design.addMove(1, 0, [4], 0);
    design.addMove(1, 0, [2], 0);
    design.addMove(1, 0, [3], 0);
    design.addMove(1, 0, [5], 0);

    design.addPiece("Gold", 2);
    design.addMove(2, 0, [7], 0);
    design.addMove(2, 0, [6], 0);
    design.addMove(2, 0, [1], 0);
    design.addMove(2, 0, [5], 0);
    design.addMove(2, 0, [4], 0);
    design.addMove(2, 0, [3], 0);

    design.addPiece("Silver", 3);
    design.addMove(3, 0, [6], 0);
    design.addMove(3, 0, [2], 0);
    design.addMove(3, 0, [0], 0);
    design.addMove(3, 0, [5], 0);
    design.addMove(3, 0, [7], 0);

    design.addPiece("Knight", 4);
    design.addMove(4, 1, [7, 6], 0);
    design.addMove(4, 1, [7, 5], 0);

    design.addPiece("Lance", 5);
    design.addMove(5, 2, [7, 7], 0);

    design.addPiece("Bishop", 6);
    design.addMove(6, 2, [6, 6], 0);
    design.addMove(6, 2, [0, 0], 0);
    design.addMove(6, 2, [2, 2], 0);
    design.addMove(6, 2, [5, 5], 0);

    design.addPiece("Rook", 7);
    design.addMove(7, 2, [7, 7], 0);
    design.addMove(7, 2, [3, 3], 0);
    design.addMove(7, 2, [4, 4], 0);
    design.addMove(7, 2, [1, 1], 0);

    design.addPiece("BishopP", 8);
    design.addMove(8, 2, [6, 6], 0);
    design.addMove(8, 0, [7], 0);
    design.addMove(8, 2, [0, 0], 0);
    design.addMove(8, 0, [1], 0);
    design.addMove(8, 2, [2, 2], 0);
    design.addMove(8, 0, [4], 0);
    design.addMove(8, 2, [5, 5], 0);
    design.addMove(8, 0, [3], 0);

    design.addPiece("RookP", 9);
    design.addMove(9, 2, [7, 7], 0);
    design.addMove(9, 0, [6], 0);
    design.addMove(9, 2, [3, 3], 0);
    design.addMove(9, 0, [5], 0);
    design.addMove(9, 2, [4, 4], 0);
    design.addMove(9, 0, [2], 0);
    design.addMove(9, 2, [1, 1], 0);
    design.addMove(9, 0, [0], 0);

    design.addPiece("Pawn", 10);
    design.addMove(10, 0, [7], 0);

    design.setup("South", "King", 76);
    design.setup("South", "Gold", 75);
    design.setup("South", "Gold", 77);
    design.setup("South", "Silver", 74);
    design.setup("South", "Silver", 78);
    design.setup("South", "Knight", 73);
    design.setup("South", "Knight", 79);
    design.setup("South", "Lance", 72);
    design.setup("South", "Lance", 80);
    design.setup("South", "Bishop", 64);
    design.setup("South", "Rook", 70);
    design.setup("South", "DrunkenElephant", 67);
    design.setup("South", "Pawn", 54);
    design.setup("South", "Pawn", 55);
    design.setup("South", "Pawn", 56);
    design.setup("South", "Pawn", 57);
    design.setup("South", "Pawn", 58);
    design.setup("South", "Pawn", 59);
    design.setup("South", "Pawn", 60);
    design.setup("South", "Pawn", 61);
    design.setup("South", "Pawn", 62);
    design.setup("North", "King", 4);
    design.setup("North", "Gold", 3);
    design.setup("North", "Gold", 5);
    design.setup("North", "Silver", 2);
    design.setup("North", "Silver", 6);
    design.setup("North", "Knight", 1);
    design.setup("North", "Knight", 7);
    design.setup("North", "Lance", 0);
    design.setup("North", "Lance", 8);
    design.setup("North", "Bishop", 16);
    design.setup("North", "Rook", 10);
    design.setup("North", "DrunkenElephant", 13);
    design.setup("North", "Pawn", 18);
    design.setup("North", "Pawn", 19);
    design.setup("North", "Pawn", 20);
    design.setup("North", "Pawn", 21);
    design.setup("North", "Pawn", 22);
    design.setup("North", "Pawn", 23);
    design.setup("North", "Pawn", 24);
    design.setup("North", "Pawn", 25);
    design.setup("North", "Pawn", 26);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("SouthKing", "South King");
    view.defPiece("NorthKing", "North King");
    view.defPiece("SouthDrunkenElephant", "South DrunkenElephant");
    view.defPiece("NorthDrunkenElephant", "North DrunkenElephant");
    view.defPiece("SouthGold", "South Gold");
    view.defPiece("NorthGold", "North Gold");
    view.defPiece("SouthSilver", "South Silver");
    view.defPiece("NorthSilver", "North Silver");
    view.defPiece("SouthKnight", "South Knight");
    view.defPiece("NorthKnight", "North Knight");
    view.defPiece("SouthLance", "South Lance");
    view.defPiece("NorthLance", "North Lance");
    view.defPiece("SouthBishop", "South Bishop");
    view.defPiece("NorthBishop", "North Bishop");
    view.defPiece("SouthRook", "South Rook");
    view.defPiece("NorthRook", "North Rook");
    view.defPiece("SouthBishopP", "South BishopP");
    view.defPiece("NorthBishopP", "North BishopP");
    view.defPiece("SouthRookP", "South RookP");
    view.defPiece("NorthRookP", "North RookP");
    view.defPiece("SouthPawn", "South Pawn");
    view.defPiece("NorthPawn", "North Pawn");
 
    view.defPosition("a9", 9, 10, 41, 46);
    view.defPosition("b9", 50, 10, 41, 46);
    view.defPosition("c9", 91, 10, 41, 46);
    view.defPosition("d9", 132, 10, 41, 46);
    view.defPosition("e9", 173, 10, 41, 46);
    view.defPosition("f9", 214, 10, 41, 46);
    view.defPosition("g9", 255, 10, 41, 46);
    view.defPosition("h9", 296, 10, 41, 46);
    view.defPosition("i9", 337, 10, 41, 46);
    view.defPosition("a8", 9, 56, 41, 46);
    view.defPosition("b8", 50, 56, 41, 46);
    view.defPosition("c8", 91, 56, 41, 46);
    view.defPosition("d8", 132, 56, 41, 46);
    view.defPosition("e8", 173, 56, 41, 46);
    view.defPosition("f8", 214, 56, 41, 46);
    view.defPosition("g8", 255, 56, 41, 46);
    view.defPosition("h8", 296, 56, 41, 46);
    view.defPosition("i8", 337, 56, 41, 46);
    view.defPosition("a7", 9, 102, 41, 46);
    view.defPosition("b7", 50, 102, 41, 46);
    view.defPosition("c7", 91, 102, 41, 46);
    view.defPosition("d7", 132, 102, 41, 46);
    view.defPosition("e7", 173, 102, 41, 46);
    view.defPosition("f7", 214, 102, 41, 46);
    view.defPosition("g7", 255, 102, 41, 46);
    view.defPosition("h7", 296, 102, 41, 46);
    view.defPosition("i7", 337, 102, 41, 46);
    view.defPosition("a6", 9, 148, 41, 46);
    view.defPosition("b6", 50, 148, 41, 46);
    view.defPosition("c6", 91, 148, 41, 46);
    view.defPosition("d6", 132, 148, 41, 46);
    view.defPosition("e6", 173, 148, 41, 46);
    view.defPosition("f6", 214, 148, 41, 46);
    view.defPosition("g6", 255, 148, 41, 46);
    view.defPosition("h6", 296, 148, 41, 46);
    view.defPosition("i6", 337, 148, 41, 46);
    view.defPosition("a5", 9, 194, 41, 46);
    view.defPosition("b5", 50, 194, 41, 46);
    view.defPosition("c5", 91, 194, 41, 46);
    view.defPosition("d5", 132, 194, 41, 46);
    view.defPosition("e5", 173, 194, 41, 46);
    view.defPosition("f5", 214, 194, 41, 46);
    view.defPosition("g5", 255, 194, 41, 46);
    view.defPosition("h5", 296, 194, 41, 46);
    view.defPosition("i5", 337, 194, 41, 46);
    view.defPosition("a4", 9, 240, 41, 46);
    view.defPosition("b4", 50, 240, 41, 46);
    view.defPosition("c4", 91, 240, 41, 46);
    view.defPosition("d4", 132, 240, 41, 46);
    view.defPosition("e4", 173, 240, 41, 46);
    view.defPosition("f4", 214, 240, 41, 46);
    view.defPosition("g4", 255, 240, 41, 46);
    view.defPosition("h4", 296, 240, 41, 46);
    view.defPosition("i4", 337, 240, 41, 46);
    view.defPosition("a3", 9, 286, 41, 46);
    view.defPosition("b3", 50, 286, 41, 46);
    view.defPosition("c3", 91, 286, 41, 46);
    view.defPosition("d3", 132, 286, 41, 46);
    view.defPosition("e3", 173, 286, 41, 46);
    view.defPosition("f3", 214, 286, 41, 46);
    view.defPosition("g3", 255, 286, 41, 46);
    view.defPosition("h3", 296, 286, 41, 46);
    view.defPosition("i3", 337, 286, 41, 46);
    view.defPosition("a2", 9, 332, 41, 46);
    view.defPosition("b2", 50, 332, 41, 46);
    view.defPosition("c2", 91, 332, 41, 46);
    view.defPosition("d2", 132, 332, 41, 46);
    view.defPosition("e2", 173, 332, 41, 46);
    view.defPosition("f2", 214, 332, 41, 46);
    view.defPosition("g2", 255, 332, 41, 46);
    view.defPosition("h2", 296, 332, 41, 46);
    view.defPosition("i2", 337, 332, 41, 46);
    view.defPosition("a1", 9, 378, 41, 46);
    view.defPosition("b1", 50, 378, 41, 46);
    view.defPosition("c1", 91, 378, 41, 46);
    view.defPosition("d1", 132, 378, 41, 46);
    view.defPosition("e1", 173, 378, 41, 46);
    view.defPosition("f1", 214, 378, 41, 46);
    view.defPosition("g1", 255, 378, 41, 46);
    view.defPosition("h1", 296, 378, 41, 46);
    view.defPosition("i1", 337, 378, 41, 46);

    view.defPopup("Promote", 142, 95);
    view.defPopupPosition("T1", 12, 15, 39, 39);
    view.defPopupPosition("T2", 52, 15, 39, 39);
}
