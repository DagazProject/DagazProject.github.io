Dagaz.Model.WIDTH = 5;

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
    design.checkVersion("smart-moves", "to");
    design.checkVersion("show-blink", "true");

    design.addDirection("se"); // 0
    design.addDirection("s");  // 1
    design.addDirection("sw"); // 2
    design.addDirection("e");  // 3
    design.addDirection("w");  // 4
    design.addDirection("ne"); // 5
    design.addDirection("nw"); // 6
    design.addDirection("n");  // 7

    design.addPlayer("White", [6, 7, 5, 4, 3, 2, 0, 1]);
    design.addPlayer("Black", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addTurn(1, [0, 1]);
    design.addTurn(2, [0, 1]);

    design.addPosition("a8", [6, 5, 0, 1, 0, 0, 0, 0]);
    design.addPosition("b8", [6, 5, 4, 1, -1, 0, 0, 0]);
    design.addPosition("c8", [6, 5, 4, 1, -1, 0, 0, 0]);
    design.addPosition("d8", [6, 5, 4, 1, -1, 0, 0, 0]);
    design.addPosition("e8", [0, 5, 4, 0, -1, 0, 0, 0]);
    design.addPosition("a7", [6, 5, 0, 1, 0, -4, 0, -5]);
    design.addPosition("b7", [6, 5, 4, 1, -1, -4, -6, -5]);
    design.addPosition("c7", [6, 5, 4, 1, -1, -4, -6, -5]);
    design.addPosition("d7", [6, 5, 4, 1, -1, -4, -6, -5]);
    design.addPosition("e7", [0, 5, 4, 0, -1, 0, -6, -5]);
    design.addPosition("a6", [6, 5, 0, 1, 0, -4, 0, -5]);
    design.addPosition("b6", [6, 5, 4, 1, -1, -4, -6, -5]);
    design.addPosition("c6", [6, 5, 4, 1, -1, -4, -6, -5]);
    design.addPosition("d6", [6, 5, 4, 1, -1, -4, -6, -5]);
    design.addPosition("e6", [0, 5, 4, 0, -1, 0, -6, -5]);
    design.addPosition("a5", [6, 5, 0, 1, 0, -4, 0, -5]);
    design.addPosition("b5", [6, 5, 4, 1, -1, -4, -6, -5]);
    design.addPosition("c5", [6, 5, 4, 1, -1, -4, -6, -5]);
    design.addPosition("d5", [6, 5, 4, 1, -1, -4, -6, -5]);
    design.addPosition("e5", [0, 5, 4, 0, -1, 0, -6, -5]);
    design.addPosition("a4", [6, 5, 0, 1, 0, -4, 0, -5]);
    design.addPosition("b4", [6, 5, 4, 1, -1, -4, -6, -5]);
    design.addPosition("c4", [6, 5, 4, 1, -1, -4, -6, -5]);
    design.addPosition("d4", [6, 5, 4, 1, -1, -4, -6, -5]);
    design.addPosition("e4", [0, 5, 4, 0, -1, 0, -6, -5]);
    design.addPosition("a3", [6, 5, 0, 1, 0, -4, 0, -5]);
    design.addPosition("b3", [6, 5, 4, 1, -1, -4, -6, -5]);
    design.addPosition("c3", [6, 5, 4, 1, -1, -4, -6, -5]);
    design.addPosition("d3", [6, 5, 4, 1, -1, -4, -6, -5]);
    design.addPosition("e3", [0, 5, 4, 0, -1, 0, -6, -5]);
    design.addPosition("a2", [6, 5, 0, 1, 0, -4, 0, -5]);
    design.addPosition("b2", [6, 5, 4, 1, -1, -4, -6, -5]);
    design.addPosition("c2", [6, 5, 4, 1, -1, -4, -6, -5]);
    design.addPosition("d2", [6, 5, 4, 1, -1, -4, -6, -5]);
    design.addPosition("e2", [0, 5, 4, 0, -1, 0, -6, -5]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -4, 0, -5]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -4, -6, -5]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -4, -6, -5]);
    design.addPosition("d1", [0, 0, 0, 1, -1, -4, -6, -5]);
    design.addPosition("e1", [0, 0, 0, 0, -1, 0, -6, -5]);

    design.addZone("goal-zone", 1, [0, 1, 2, 3, 4]);
    design.addZone("goal-zone", 2, [35, 36, 37, 38, 39]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	7);
    design.addCommand(0, ZRF.FORK,	3);
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.JUMP,	-8);
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.LITERAL,	0);	// Ball
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.MODE,	2);	// continue-type
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	8);
    design.addCommand(2, ZRF.FORK,	4);
    design.addCommand(2, ZRF.PROMOTE,	0);	// Ball
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.JUMP,	-9);
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addPiece("Ball", 0);

    design.addPiece("King", 1);
    design.addMove(1, 0, [4, 4], 1);
    design.addMove(1, 0, [3, 3], 1);

    design.addPiece("Bishop", 2);
    design.addMove(2, 1, [7], 0);
    design.addMove(2, 1, [6], 0);
    design.addMove(2, 1, [3], 0);
    design.addMove(2, 1, [5], 0);
    design.addMove(2, 1, [4], 0);
    design.addMove(2, 1, [2], 0);
    design.addMove(2, 1, [1], 0);
    design.addMove(2, 1, [0], 0);
    design.addMove(2, 0, [7, 7], 1);
    design.addMove(2, 0, [6, 6], 1);
    design.addMove(2, 0, [3, 3], 1);
    design.addMove(2, 0, [5, 5], 1);
    design.addMove(2, 0, [4, 4], 1);
    design.addMove(2, 0, [2, 2], 1);
    design.addMove(2, 0, [1, 1], 1);
    design.addMove(2, 0, [0, 0], 1);
    design.addMove(2, 2, [7, 7], 2);
    design.addMove(2, 2, [6, 6], 2);
    design.addMove(2, 2, [3, 3], 2);
    design.addMove(2, 2, [5, 5], 2);
    design.addMove(2, 2, [4, 4], 2);
    design.addMove(2, 2, [2, 2], 2);
    design.addMove(2, 2, [1, 1], 2);
    design.addMove(2, 2, [0, 0], 2);

    design.addPiece("Pawn", 3);
    design.addMove(3, 1, [7], 0);
    design.addMove(3, 1, [6], 0);
    design.addMove(3, 1, [3], 0);
    design.addMove(3, 1, [5], 0);
    design.addMove(3, 1, [4], 0);
    design.addMove(3, 1, [2], 0);
    design.addMove(3, 1, [1], 0);
    design.addMove(3, 1, [0], 0);
    design.addMove(3, 0, [7, 7], 1);
    design.addMove(3, 0, [6, 6], 1);
    design.addMove(3, 0, [3, 3], 1);
    design.addMove(3, 0, [5, 5], 1);
    design.addMove(3, 0, [4, 4], 1);
    design.addMove(3, 0, [2, 2], 1);
    design.addMove(3, 0, [1, 1], 1);
    design.addMove(3, 0, [0, 0], 1);
    design.addMove(3, 2, [7, 7], 2);
    design.addMove(3, 2, [6, 6], 2);
    design.addMove(3, 2, [3, 3], 2);
    design.addMove(3, 2, [5, 5], 2);
    design.addMove(3, 2, [4, 4], 2);
    design.addMove(3, 2, [2, 2], 2);
    design.addMove(3, 2, [1, 1], 2);
    design.addMove(3, 2, [0, 0], 2);

    design.setup("White", "Ball", 22);
    design.setup("White", "King", 37);
    design.setup("White", "Bishop", 26);
    design.setup("White", "Bishop", 27);
    design.setup("White", "Bishop", 28);
    design.setup("White", "Pawn", 31);
    design.setup("White", "Pawn", 32);
    design.setup("White", "Pawn", 33);
    design.setup("Black", "King", 2);
    design.setup("Black", "Bishop", 11);
    design.setup("Black", "Bishop", 12);
    design.setup("Black", "Bishop", 13);
    design.setup("Black", "Pawn", 6);
    design.setup("Black", "Pawn", 7);
    design.setup("Black", "Pawn", 8);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteBall", "White Ball");
    view.defPiece("BlackBall", "Black Ball");
    view.defPiece("WhiteKing", "White King");
    view.defPiece("BlackKing", "Black King");
    view.defPiece("WhiteBishop", "White Bishop");
    view.defPiece("BlackBishop", "Black Bishop");
    view.defPiece("WhitePawn", "White Pawn");
    view.defPiece("BlackPawn", "Black Pawn");
 
    view.defPosition("a8", 2, 2, 50, 50);
    view.defPosition("b8", 52, 2, 50, 50);
    view.defPosition("c8", 102, 2, 50, 50);
    view.defPosition("d8", 152, 2, 50, 50);
    view.defPosition("e8", 202, 2, 50, 50);
    view.defPosition("a7", 2, 52, 50, 50);
    view.defPosition("b7", 52, 52, 50, 50);
    view.defPosition("c7", 102, 52, 50, 50);
    view.defPosition("d7", 152, 52, 50, 50);
    view.defPosition("e7", 202, 52, 50, 50);
    view.defPosition("a6", 2, 102, 50, 50);
    view.defPosition("b6", 52, 102, 50, 50);
    view.defPosition("c6", 102, 102, 50, 50);
    view.defPosition("d6", 152, 102, 50, 50);
    view.defPosition("e6", 202, 102, 50, 50);
    view.defPosition("a5", 2, 152, 50, 50);
    view.defPosition("b5", 52, 152, 50, 50);
    view.defPosition("c5", 102, 152, 50, 50);
    view.defPosition("d5", 152, 152, 50, 50);
    view.defPosition("e5", 202, 152, 50, 50);
    view.defPosition("a4", 2, 202, 50, 50);
    view.defPosition("b4", 52, 202, 50, 50);
    view.defPosition("c4", 102, 202, 50, 50);
    view.defPosition("d4", 152, 202, 50, 50);
    view.defPosition("e4", 202, 202, 50, 50);
    view.defPosition("a3", 2, 252, 50, 50);
    view.defPosition("b3", 52, 252, 50, 50);
    view.defPosition("c3", 102, 252, 50, 50);
    view.defPosition("d3", 152, 252, 50, 50);
    view.defPosition("e3", 202, 252, 50, 50);
    view.defPosition("a2", 2, 302, 50, 50);
    view.defPosition("b2", 52, 302, 50, 50);
    view.defPosition("c2", 102, 302, 50, 50);
    view.defPosition("d2", 152, 302, 50, 50);
    view.defPosition("e2", 202, 302, 50, 50);
    view.defPosition("a1", 2, 352, 50, 50);
    view.defPosition("b1", 52, 352, 50, 50);
    view.defPosition("c1", 102, 352, 50, 50);
    view.defPosition("d1", 152, 352, 50, 50);
    view.defPosition("e1", 202, 352, 50, 50);
}
