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
    design.checkVersion("smart-moves", "true");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "true");
    design.checkVersion("deferred-captures", "true");
    design.checkVersion("advisor-wait", "25");

    design.addDirection("se");
    design.addDirection("sw");
    design.addDirection("e");
    design.addDirection("ne");
    design.addDirection("w");
    design.addDirection("nw");

    design.addPlayer("White", [5, 3, 4, 1, 2, 0]);
    design.addPlayer("Black", [5, 3, 4, 1, 2, 0]);

    design.addPosition("a7", [0, 0, 0, 0, 0, 0]);
    design.addPosition("b7", [0, 0, 0, 0, 0, 0]);
    design.addPosition("c7", [0, 0, 0, 0, 0, 0]);
    design.addPosition("d7", [5, 4, 1, 0, 0, 0]);
    design.addPosition("e7", [5, 4, 0, 0, -1, 0]);
    design.addPosition("a6", [0, 0, 0, 0, 0, 0]);
    design.addPosition("b6", [0, 0, 0, 0, 0, 0]);
    design.addPosition("c6", [5, 4, 1, -4, 0, 0]);
    design.addPosition("d6", [5, 4, 1, -4, -1, -5]);
    design.addPosition("e6", [5, 4, 0, 0, -1, -5]);
    design.addPosition("a5", [0, 0, 0, 0, 0, 0]);
    design.addPosition("b5", [5, 4, 1, -4, 0, 0]);
    design.addPosition("c5", [5, 4, 1, -4, -1, -5]);
    design.addPosition("d5", [5, 4, 1, -4, -1, -5]);
    design.addPosition("e5", [5, 4, 0, 0, -1, -5]);
    design.addPosition("a4", [5, 0, 1, -4, 0, 0]);
    design.addPosition("b4", [5, 4, 1, -4, -1, -5]);
    design.addPosition("c4", [5, 4, 1, -4, -1, -5]);
    design.addPosition("d4", [5, 4, 1, -4, -1, -5]);
    design.addPosition("e4", [0, 4, 0, 0, -1, -5]);
    design.addPosition("a3", [5, 0, 1, -4, 0, -5]);
    design.addPosition("b3", [5, 4, 1, -4, -1, -5]);
    design.addPosition("c3", [5, 4, 1, -4, -1, -5]);
    design.addPosition("d3", [0, 4, 0, -4, -1, -5]);
    design.addPosition("e3", [0, 0, 0, 0, 0, 0]);
    design.addPosition("a2", [5, 0, 1, -4, 0, -5]);
    design.addPosition("b2", [5, 4, 1, -4, -1, -5]);
    design.addPosition("c2", [0, 4, 0, -4, -1, -5]);
    design.addPosition("d2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("e2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("a1", [0, 0, 1, -4, 0, -5]);
    design.addPosition("b1", [0, 0, 0, -4, -1, -5]);
    design.addPosition("c1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("d1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("e1", [0, 0, 0, 0, 0, 0]);

    design.addZone("promotion", 1, [3, 4]);
    design.addZone("promotion", 2, [30, 31]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	26);	// capture
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.MODE,	0);	// jump-type
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	4);
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.JUMP,	-5);
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	2);	// $3
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	18);
    design.addCommand(2, ZRF.FUNCTION,	6);	// mark
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	5);
    design.addCommand(2, ZRF.PARAM,	3);	// $4
    design.addCommand(2, ZRF.FUNCTION,	23);	// opposite
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.JUMP,	-6);
    design.addCommand(2, ZRF.FUNCTION,	26);	// capture
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
    design.addCommand(2, ZRF.FORK,	4);
    design.addCommand(2, ZRF.MODE,	2);	// cont-type
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end
    design.addCommand(2, ZRF.PARAM,	4);	// $5
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.JUMP,	-19);
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	7);
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	4);	// last-from?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.JUMP,	-8);
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	2);	// $3
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	18);
    design.addCommand(3, ZRF.FUNCTION,	6);	// mark
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	5);
    design.addCommand(3, ZRF.PARAM,	3);	// $4
    design.addCommand(3, ZRF.FUNCTION,	23);	// opposite
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.JUMP,	-6);
    design.addCommand(3, ZRF.FUNCTION,	26);	// capture
    design.addCommand(3, ZRF.FUNCTION,	7);	// back
    design.addCommand(3, ZRF.FORK,	4);
    design.addCommand(3, ZRF.MODE,	2);	// cont-type
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end
    design.addCommand(3, ZRF.PARAM,	4);	// $5
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.JUMP,	-19);
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	7);
    design.addCommand(4, ZRF.FORK,	3);
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.JUMP,	-8);
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addPriority(0);			// jump-type
    design.addPriority(1);			// normal-type

    design.addPiece("Man", 0, 20);
    design.addMove(0, 0, [5, 5], 0);
    design.addMove(0, 0, [3, 3], 0);
    design.addMove(0, 0, [1, 1], 0);
    design.addMove(0, 0, [0, 0], 0);
    design.addMove(0, 0, [4, 4], 0);
    design.addMove(0, 0, [2, 2], 0);
    design.addMove(0, 1, [5], 1);
    design.addMove(0, 1, [3], 1);

    design.addPiece("King", 1, 100);
    design.addMove(1, 2, [5, 5, 5, 5, 5], 0);
    design.addMove(1, 2, [3, 3, 3, 3, 3], 0);
    design.addMove(1, 2, [1, 1, 1, 1, 1], 0);
    design.addMove(1, 2, [0, 0, 0, 0, 0], 0);
    design.addMove(1, 2, [4, 4, 4, 4, 4], 0);
    design.addMove(1, 2, [2, 2, 2, 2, 2], 0);
    design.addMove(1, 3, [5, 5, 5, 5, 5], 2);
    design.addMove(1, 3, [3, 3, 3, 3, 3], 2);
    design.addMove(1, 3, [1, 1, 1, 1, 1], 2);
    design.addMove(1, 3, [0, 0, 0, 0, 0], 2);
    design.addMove(1, 3, [4, 4, 4, 4, 4], 2);
    design.addMove(1, 3, [2, 2, 2, 2, 2], 2);
    design.addMove(1, 4, [5, 5], 1);
    design.addMove(1, 4, [3, 3], 1);
    design.addMove(1, 4, [1, 1], 1);
    design.addMove(1, 4, [0, 0], 1);
    design.addMove(1, 4, [4, 4], 1);
    design.addMove(1, 4, [2, 2], 1);

    design.setup("White", "Man", 30);
    design.setup("White", "Man", 31);
    design.setup("White", "Man", 25);
    design.setup("White", "Man", 26);
    design.setup("White", "Man", 27);
    design.setup("White", "Man", 20);
    design.setup("White", "Man", 21);
    design.setup("White", "Man", 22);
    design.setup("White", "Man", 23);
    design.setup("Black", "Man", 11);
    design.setup("Black", "Man", 12);
    design.setup("Black", "Man", 13);
    design.setup("Black", "Man", 14);
    design.setup("Black", "Man", 7);
    design.setup("Black", "Man", 8);
    design.setup("Black", "Man", 9);
    design.setup("Black", "Man", 3);
    design.setup("Black", "Man", 4);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteMan", "White Man");
    view.defPiece("BlackMan", "Black Man");
    view.defPiece("WhiteKing", "White King");
    view.defPiece("BlackKing", "Black King");
 
    view.defPosition("a7", -94, 24, 42, 42);
    view.defPosition("b7", -14, 24, 42, 42);
    view.defPosition("c7", 66, 24, 42, 42);
    view.defPosition("d7", 146, 24, 42, 42);
    view.defPosition("e7", 226, 24, 42, 42);
    view.defPosition("a6", -54, 95, 42, 42);
    view.defPosition("b6", 26, 95, 42, 42);
    view.defPosition("c6", 106, 95, 42, 42);
    view.defPosition("d6", 186, 95, 42, 42);
    view.defPosition("e6", 266, 95, 42, 42);
    view.defPosition("a5", -14, 166, 42, 42);
    view.defPosition("b5", 66, 166, 42, 42);
    view.defPosition("c5", 146, 166, 42, 42);
    view.defPosition("d5", 226, 166, 42, 42);
    view.defPosition("e5", 306, 166, 42, 42);
    view.defPosition("a4", 26, 237, 42, 42);
    view.defPosition("b4", 106, 237, 42, 42);
    view.defPosition("c4", 186, 237, 42, 42);
    view.defPosition("d4", 266, 237, 42, 42);
    view.defPosition("e4", 346, 237, 42, 42);
    view.defPosition("a3", 66, 308, 42, 42);
    view.defPosition("b3", 146, 308, 42, 42);
    view.defPosition("c3", 226, 308, 42, 42);
    view.defPosition("d3", 306, 308, 42, 42);
    view.defPosition("e3", 386, 308, 42, 42);
    view.defPosition("a2", 106, 379, 42, 42);
    view.defPosition("b2", 186, 379, 42, 42);
    view.defPosition("c2", 266, 379, 42, 42);
    view.defPosition("d2", 346, 379, 42, 42);
    view.defPosition("e2", 426, 379, 42, 42);
    view.defPosition("a1", 146, 450, 42, 42);
    view.defPosition("b1", 226, 450, 42, 42);
    view.defPosition("c1", 306, 450, 42, 42);
    view.defPosition("d1", 386, 450, 42, 42);
    view.defPosition("e1", 466, 450, 42, 42);
}
