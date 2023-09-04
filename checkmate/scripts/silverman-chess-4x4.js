Dagaz.Controller.persistense = "setup";

Dagaz.Model.WIDTH  = 4;
Dagaz.Model.HEIGHT = 4;
Dagaz.AI.FLAGS     = 0xA2;

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

if (Dagaz.AI.SetParams) {
    Dagaz.AI.SetParams(Dagaz.Model.WIDTH, Dagaz.Model.HEIGHT, Dagaz.AI.FLAGS);
}

Dagaz.Model.BuildDesign = function(design) {
    design.checkVersion("z2j", "2");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("advisor-wait", "25");
    design.checkVersion("chess-invariant", "true");

    design.addDirection("w");  // 0
    design.addDirection("e");  // 1
    design.addDirection("s");  // 2
    design.addDirection("ne"); // 3
    design.addDirection("n");  // 4
    design.addDirection("se"); // 5
    design.addDirection("sw"); // 6
    design.addDirection("nw"); // 7

    design.addPlayer("White", [1, 0, 4, 6, 2, 7, 3, 5]);
    design.addPlayer("Black", [1, 0, 4, 6, 2, 7, 3, 5]);

    design.addPosition("a4", [0, 1, 4, 0, 0, 5, 0, 0]);
    design.addPosition("b4", [-1, 1, 4, 0, 0, 5, 3, 0]);
    design.addPosition("c4", [-1, 1, 4, 0, 0, 5, 3, 0]);
    design.addPosition("d4", [-1, 0, 4, 0, 0, 0, 3, 0]);
    design.addPosition("a3", [0, 1, 4, -3, -4, 5, 0, 0]);
    design.addPosition("b3", [-1, 1, 4, -3, -4, 5, 3, -5]);
    design.addPosition("c3", [-1, 1, 4, -3, -4, 5, 3, -5]);
    design.addPosition("d3", [-1, 0, 4, 0, -4, 0, 3, -5]);
    design.addPosition("a2", [0, 1, 4, -3, -4, 5, 0, 0]);
    design.addPosition("b2", [-1, 1, 4, -3, -4, 5, 3, -5]);
    design.addPosition("c2", [-1, 1, 4, -3, -4, 5, 3, -5]);
    design.addPosition("d2", [-1, 0, 4, 0, -4, 0, 3, -5]);
    design.addPosition("a1", [0, 1, 0, -3, -4, 0, 0, 0]);
    design.addPosition("b1", [-1, 1, 0, -3, -4, 0, 0, -5]);
    design.addPosition("c1", [-1, 1, 0, -3, -4, 0, 0, -5]);
    design.addPosition("d1", [-1, 0, 0, 0, -4, 0, 0, -5]);
    design.addPosition("X1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X2", [0, 0, 0, 0, 0, 0, 0, 0]);

    design.addZone("last-rank", 1, [0, 1, 2, 3]);
    design.addZone("last-rank", 2, [12, 13, 14, 15]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.IN_ZONE,	0);	// last-rank
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	4);
    design.addCommand(0, ZRF.PROMOTE,	4);	// Queen
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.JUMP,	2);
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.IN_ZONE,	0);	// last-rank
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	4);
    design.addCommand(1, ZRF.PROMOTE,	4);	// Queen
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.JUMP,	2);
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
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addPiece("Pawn", 0, 800);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 1, [7], 0);
    design.addMove(0, 1, [3], 0);

    design.addPiece("Rook", 1, 5000);
    design.addMove(1, 2, [4, 4], 0);
    design.addMove(1, 2, [2, 2], 0);
    design.addMove(1, 2, [0, 0], 0);
    design.addMove(1, 2, [1, 1], 0);

    design.addPiece("Queen", 2, 9750);
    design.addMove(2, 2, [4, 4], 0);
    design.addMove(2, 2, [2, 2], 0);
    design.addMove(2, 2, [0, 0], 0);
    design.addMove(2, 2, [1, 1], 0);
    design.addMove(2, 2, [7, 7], 0);
    design.addMove(2, 2, [6, 6], 0);
    design.addMove(2, 2, [3, 3], 0);
    design.addMove(2, 2, [5, 5], 0);

    design.addPiece("King", 3, 600000);
    design.addMove(3, 4, [4], 0);
    design.addMove(3, 4, [2], 0);
    design.addMove(3, 4, [0], 0);
    design.addMove(3, 4, [1], 0);
    design.addMove(3, 4, [7], 0);
    design.addMove(3, 4, [6], 0);
    design.addMove(3, 4, [3], 0);
    design.addMove(3, 4, [5], 0);

    design.setup("White", "Pawn", 8);
    design.setup("White", "Pawn", 9);
    design.setup("White", "Pawn", 10);
    design.setup("White", "Pawn", 11);
    design.setup("White", "Rook", 12);
    design.setup("White", "Rook", 15);
    design.setup("White", "Queen", 13);
    design.setup("White", "King", 14);
    design.setup("Black", "Pawn", 4);
    design.setup("Black", "Pawn", 5);
    design.setup("Black", "Pawn", 6);
    design.setup("Black", "Pawn", 7);
    design.setup("Black", "Rook", 0);
    design.setup("Black", "Rook", 3);
    design.setup("Black", "Queen", 1);
    design.setup("Black", "King", 2);
}

Dagaz.View.configure = function(view) {
    view.defBoard("WhiteBoard", 0, 0, undefined, [0]);
    view.defBoard("BlackBoard", 0, 0, undefined, [1]);
    view.defPiece("WhitePawn", "White Pawn");
    view.defPiece("BlackPawn", "Black Pawn");
    view.defPiece("WhiteRook", "White Rook");
    view.defPiece("BlackRook", "Black Rook");
    view.defPiece("WhiteQueen", "White Queen");
    view.defPiece("BlackQueen", "Black Queen");
    view.defPiece("WhiteKing", "White King");
    view.defPiece("BlackKing", "Black King");
 
    view.defPosition("a4", 2, 2, 68, 68);
    view.defPosition("b4", 70, 2, 68, 68);
    view.defPosition("c4", 138, 2, 68, 68);
    view.defPosition("d4", 206, 2, 68, 68);
    view.defPosition("a3", 2, 70, 68, 68);
    view.defPosition("b3", 70, 70, 68, 68);
    view.defPosition("c3", 138, 70, 68, 68);
    view.defPosition("d3", 206, 70, 68, 68);
    view.defPosition("a2", 2, 138, 68, 68);
    view.defPosition("b2", 70, 138, 68, 68);
    view.defPosition("c2", 138, 138, 68, 68);
    view.defPosition("d2", 206, 138, 68, 68);
    view.defPosition("a1", 2, 206, 68, 68);
    view.defPosition("b1", 70, 206, 68, 68);
    view.defPosition("c1", 138, 206, 68, 68);
    view.defPosition("d1", 206, 206, 68, 68);

    view.defPopup("Promote", 62, 30);
    view.defPopupPosition("X1", 10, 7, 68, 68);
    view.defPopupPosition("X2", 80, 7, 68, 68);
}
