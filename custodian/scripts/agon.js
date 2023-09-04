Dagaz.Controller.persistense = "session";

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
    design.checkVersion("pass-turn", "forced");
    design.checkVersion("agon-extension", "true");

    design.addDirection("next");
    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("n");
    design.addDirection("nw");
    design.addDirection("ne");
    design.addDirection("cn");
    design.addDirection("cs");
    design.addDirection("cne");
    design.addDirection("csw");
    design.addDirection("cnw");
    design.addDirection("cse");

    design.addPlayer("White", [2, 2, 1, 3, 4, 5, 7, 6, 9, 8, 11, 10]);
    design.addPlayer("Black", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

    design.addPosition("a16", [48, 48, 1, 49, 0, 0, 0, 1, 48, 0, 0, 49]);
    design.addPosition("a14", [-1, -1, 1, 0, 48, 49, -1, 1, 48, 0, 0, 49]);
    design.addPosition("a12", [-1, -1, 1, 0, 48, 49, -1, 1, 48, 0, 0, 49]);
    design.addPosition("a10", [-1, -1, 1, 0, 48, 49, -1, 1, 48, 0, 0, 49]);
    design.addPosition("a8", [-1, -1, 1, 0, 48, 49, -1, 1, 48, 0, 0, 49]);
    design.addPosition("a6", [-1, -1, 49, 48, 0, 0, -1, 0, 48, 0, 0, 49]);
    design.addPosition("b18", [49, 49, 42, 0, 50, 1, 0, 1, 49, 42, 0, 50]);
    design.addPosition("b16", [0, 49, 42, 0, 50, 1, -1, 1, 49, 42, 41, 50]);
    design.addPosition("b14", [0, 49, 1, 50, 0, 0, -1, 1, 49, 42, 41, 50]);
    design.addPosition("b12", [0, -1, 1, 0, 49, 50, -1, 1, 49, 42, 41, 50]);
    design.addPosition("b10", [0, -1, 1, 0, 49, 50, -1, 1, 49, 42, 41, 50]);
    design.addPosition("b8", [0, -1, 50, 49, 0, 0, -1, 1, 49, 42, 41, 50]);
    design.addPosition("b6", [0, 41, 50, 0, -1, 49, -1, 1, 49, 42, 41, 50]);
    design.addPosition("b4", [41, 41, 50, 0, -1, 49, -1, 0, 49, 0, 41, 50]);
    design.addPosition("c20", [50, 50, 41, 0, 51, 1, 0, 1, 50, 41, 0, 51]);
    design.addPosition("c18", [0, 50, 41, 0, 51, 1, -1, 1, 50, 41, 40, 51]);
    design.addPosition("c16", [0, 50, 41, 0, 51, 1, -1, 1, 50, 41, 40, 51]);
    design.addPosition("c14", [0, 50, 41, 0, 51, 1, -1, 1, 50, 41, 40, 51]);
    design.addPosition("c12", [0, 50, 1, 51, 0, 0, -1, 1, 50, 41, 40, 51]);
    design.addPosition("c10", [0, -1, 51, 50, 0, 0, -1, 1, 50, 41, 40, 51]);
    design.addPosition("c8", [0, 40, 51, 0, -1, 50, -1, 1, 50, 41, 40, 51]);
    design.addPosition("c6", [0, 40, 51, 0, -1, 50, -1, 1, 50, 41, 40, 51]);
    design.addPosition("c4", [0, 40, 51, 0, -1, 50, -1, 1, 50, 41, 40, 51]);
    design.addPosition("c2", [40, 40, 51, 0, -1, 50, -1, 0, 50, 0, 40, 51]);
    design.addPosition("d20", [51, 51, 40, 0, 1, 41, 0, 1, 0, 41, 40, 51]);
    design.addPosition("d18", [0, 51, 40, 0, 1, 41, -1, 1, 50, 41, 40, 51]);
    design.addPosition("d16", [0, 51, 40, 0, 1, 41, -1, 1, 50, 41, 40, 51]);
    design.addPosition("d14", [0, 51, 40, 0, 1, 41, -1, 1, 50, 41, 40, 51]);
    design.addPosition("d12", [0, 1, 40, 41, 0, 0, -1, 1, 50, 41, 40, 51]);
    design.addPosition("d10", [0, 41, -1, 40, 0, 0, -1, 1, 50, 41, 40, 51]);
    design.addPosition("d8", [0, 41, 50, 0, 40, -1, -1, 1, 50, 41, 40, 51]);
    design.addPosition("d6", [0, 41, 50, 0, 40, -1, -1, 1, 50, 41, 40, 51]);
    design.addPosition("d4", [0, 41, 50, 0, 40, -1, -1, 1, 50, 41, 40, 51]);
    design.addPosition("d2", [0, 41, 50, 0, 40, -1, -1, 0, 50, 41, 40, 0]);
    design.addPosition("e18", [50, 50, 41, 0, 1, 42, 0, 1, 0, 42, 41, 50]);
    design.addPosition("e16", [0, 50, 41, 0, 1, 42, -1, 1, 49, 42, 41, 50]);
    design.addPosition("e14", [0, 1, 41, 42, 0, 0, -1, 1, 49, 42, 41, 50]);
    design.addPosition("e12", [0, 1, -1, 0, 42, 41, -1, 1, 49, 42, 41, 50]);
    design.addPosition("e10", [0, 1, -1, 0, 42, 41, -1, 1, 49, 42, 41, 50]);
    design.addPosition("e8", [0, 42, -1, 41, 0, 0, -1, 1, 49, 42, 41, 50]);
    design.addPosition("e6", [0, 42, 49, 0, 41, -1, -1, 1, 49, 42, 41, 50]);
    design.addPosition("e4", [42, 42, 49, 0, 41, -1, -1, 0, 49, 42, 41, 0]);
    design.addPosition("f16", [1, 1, 42, 43, 0, 0, 0, 1, 0, 43, 42, 0]);
    design.addPosition("f14", [1, 1, -1, 0, 43, 42, -1, 1, 0, 43, 42, 0]);
    design.addPosition("f12", [1, 1, -1, 0, 43, 42, -1, 1, 0, 43, 42, 0]);
    design.addPosition("f10", [1, 1, -1, 0, 43, 42, -1, 1, 0, 43, 42, 0]);
    design.addPosition("f8", [1, 1, -1, 0, 43, 42, -1, 1, 0, 43, 42, 0]);
    design.addPosition("f6", [43, 43, -1, 42, 0, 0, -1, 0, 0, 43, 42, 0]);
    design.addPosition("a17", [-42, -42, -48, 0, -41, 1, 0, 1, -42, -48, 0, -41]);
    design.addPosition("a15", [0, -42, 1, -41, 0, 0, -1, 1, -42, -48, -49, -41]);
    design.addPosition("a13", [0, -1, 1, 0, -42, -41, -1, 1, -42, -48, -49, -41]);
    design.addPosition("a11", [0, -1, 1, 0, -42, -41, -1, 1, -42, -48, -49, -41]);
    design.addPosition("a9", [0, -1, 1, 0, -42, -41, -1, 1, -42, -48, -49, -41]);
    design.addPosition("a7", [0, -1, -41, -42, 0, 0, -1, 1, -42, -48, -49, -41]);
    design.addPosition("a5", [-49, -49, -41, 0, -1, -42, -1, 0, -42, 0, -49, -41]);
    design.addPosition("b19", [-41, -41, -49, 0, -40, 1, 0, 1, -41, -49, 0, -40]);
    design.addPosition("b17", [0, -41, -49, 0, -40, 1, -1, 1, -41, -49, -50, -40]);
    design.addPosition("b15", [0, -41, -49, 0, -40, 1, -1, 1, -41, -49, -50, -40]);
    design.addPosition("b13", [0, -41, 1, -40, 0, 0, -1, 1, -41, -49, -50, -40]);
    design.addPosition("b11", [0, -1, 1, 0, -41, -40, -1, 1, -41, -49, -50, -40]);
    design.addPosition("b9", [0, -1, -40, -41, 0, 0, -1, 1, -41, -49, -50, -40]);
    design.addPosition("b7", [0, -50, -40, 0, -1, -41, -1, 1, -41, -49, -50, -40]);
    design.addPosition("b5", [0, -50, -40, 0, -1, -41, -1, 1, -41, -49, -50, -40]);
    design.addPosition("b3", [-50, -50, -40, 0, -1, -41, -1, 0, -41, 0, -50, -40]);
    design.addPosition("c21", [-40, -40, -50, 1, 0, 0, 0, 1, 0, -50, 0, -40]);
    design.addPosition("c19", [0, -40, -50, 1, 0, 0, -1, 1, -41, -50, -51, -40]);
    design.addPosition("c17", [0, -40, -50, 1, 0, 0, -1, 1, -41, -50, -51, -40]);
    design.addPosition("c15", [0, -40, -50, 1, 0, 0, -1, 1, -41, -50, -51, -40]);
    design.addPosition("c13", [0, -40, -50, 1, 0, 0, -1, 1, -41, -50, -51, -40]);
    design.addPosition("c11", [0, 0, 0, 0, 0, 0, -1, 1, -41, -50, -51, -40]);
    design.addPosition("c9", [0, -51, -41, -1, 0, 0, -1, 1, -41, -50, -51, -40]);
    design.addPosition("c7", [0, -51, -41, -1, 0, 0, -1, 1, -41, -50, -51, -40]);
    design.addPosition("c5", [0, -51, -41, -1, 0, 0, -1, 1, -41, -50, -51, -40]);
    design.addPosition("c3", [0, -51, -41, -1, 0, 0, -1, 1, -41, -50, -51, -40]);
    design.addPosition("c1", [-51, -51, -41, -1, 0, 0, -1, 0, -41, 0, -51, 0]);
    design.addPosition("d19", [-41, -41, -51, 0, 1, -50, 0, 1, 0, -50, -51, -41]);
    design.addPosition("d17", [0, -41, -51, 0, 1, -50, -1, 1, -42, -50, -51, -41]);
    design.addPosition("d15", [0, -41, -51, 0, 1, -50, -1, 1, -42, -50, -51, -41]);
    design.addPosition("d13", [0, 1, -51, -50, 0, 0, -1, 1, -42, -50, -51, -41]);
    design.addPosition("d11", [0, 1, -1, 0, -50, -51, -1, 1, -42, -50, -51, -41]);
    design.addPosition("d9", [0, -50, -1, -51, 0, 0, -1, 1, -42, -50, -51, -41]);
    design.addPosition("d7", [0, -50, -42, 0, -51, -1, -1, 1, -42, -50, -51, -41]);
    design.addPosition("d5", [0, -50, -42, 0, -51, -1, -1, 1, -42, -50, -51, -41]);
    design.addPosition("d3", [-50, -50, -42, 0, -51, -1, -1, 0, -42, -50, -51, 0]);
    design.addPosition("e17", [-42, -42, -50, 0, 1, -49, 0, 1, 0, -49, -50, -42]);
    design.addPosition("e15", [0, 1, -50, -49, 0, 0, -1, 1, -43, -49, -50, -42]);
    design.addPosition("e13", [0, 1, -1, 0, -49, -50, -1, 1, -43, -49, -50, -42]);
    design.addPosition("e11", [0, 1, -1, 0, -49, -50, -1, 1, -43, -49, -50, -42]);
    design.addPosition("e9", [0, 1, -1, 0, -49, -50, -1, 1, -43, -49, -50, -42]);
    design.addPosition("e7", [0, -49, -1, -50, 0, 0, -1, 1, -43, -49, -50, -42]);
    design.addPosition("e5", [-49, -49, -43, 0, -50, -1, -1, 0, -43, -49, -50, 0]);

    design.addZone("center", 1, [69]);
    design.addZone("center", 2, [69]);
    design.addZone("guards", 1, [70, 19, 18, 68, 28, 29]);
    design.addZone("guards", 2, [70, 19, 18, 68, 28, 29]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	21);	// position
    design.addCommand(1, ZRF.ON_BOARD_DIR,	0);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	10);
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	4);
    design.addCommand(1, ZRF.FORK,	3);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.JUMP,	-11);
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.IN_ZONE,	0);	// center
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addPriority(0);			// drop-type
    design.addPriority(1);			// normal-type

    design.addPiece("Queen", 0);
    design.addMove(0, 0, [3], 1);
    design.addMove(0, 0, [1], 1);
    design.addMove(0, 0, [2], 1);
    design.addMove(0, 0, [4], 1);
    design.addMove(0, 0, [5], 1);

    design.addPiece("QueenCaptured", 1);
    design.addMove(1, 1, [74, 0], 0);

    design.addPiece("Guard", 2);
    design.addMove(2, 2, [3], 1);
    design.addMove(2, 2, [1], 1);
    design.addMove(2, 2, [2], 1);
    design.addMove(2, 2, [4], 1);
    design.addMove(2, 2, [5], 1);

    design.addPiece("GuardCaptured", 3);
    design.addMove(3, 1, [74, 0], 0);

    design.setup("White", "Guard", 54);
    design.setup("White", "Guard", 47);
    design.setup("White", "Guard", 2);
    design.setup("White", "Guard", 43);
    design.setup("White", "Guard", 55);
    design.setup("White", "Guard", 75);
    design.setup("White", "Queen", 74);
    design.setup("Black", "Guard", 63);
    design.setup("Black", "Guard", 83);
    design.setup("Black", "Guard", 4);
    design.setup("Black", "Guard", 45);
    design.setup("Black", "Guard", 0);
    design.setup("Black", "Guard", 84);
    design.setup("Black", "Queen", 64);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteQueen", "White Queen");
    view.defPiece("BlackQueen", "Black Queen");
    view.defPiece("WhiteQueenCaptured", "White QueenCaptured");
    view.defPiece("BlackQueenCaptured", "Black QueenCaptured");
    view.defPiece("WhiteGuard", "White Guard");
    view.defPiece("BlackGuard", "Black Guard");
    view.defPiece("WhiteGuardCaptured", "White GuardCaptured");
    view.defPiece("BlackGuardCaptured", "Black GuardCaptured");
 
    view.defPosition("a16", 10, 156, 60, 60);
    view.defPosition("a14", 10, 217, 60, 60);
    view.defPosition("a12", 10, 278, 60, 60);
    view.defPosition("a10", 10, 339, 60, 60);
    view.defPosition("a8", 10, 400, 60, 60);
    view.defPosition("a6", 10, 461, 60, 60);
    view.defPosition("b18", 115, 95, 60, 60);
    view.defPosition("b16", 115, 156, 60, 60);
    view.defPosition("b14", 115, 217, 60, 60);
    view.defPosition("b12", 115, 278, 60, 60);
    view.defPosition("b10", 115, 339, 60, 60);
    view.defPosition("b8", 115, 400, 60, 60);
    view.defPosition("b6", 115, 461, 60, 60);
    view.defPosition("b4", 115, 522, 60, 60);
    view.defPosition("c20", 220, 34, 60, 60);
    view.defPosition("c18", 220, 95, 60, 60);
    view.defPosition("c16", 220, 156, 60, 60);
    view.defPosition("c14", 220, 217, 60, 60);
    view.defPosition("c12", 220, 278, 60, 60);
    view.defPosition("c10", 220, 339, 60, 60);
    view.defPosition("c8", 220, 400, 60, 60);
    view.defPosition("c6", 220, 461, 60, 60);
    view.defPosition("c4", 220, 522, 60, 60);
    view.defPosition("c2", 220, 583, 60, 60);
    view.defPosition("d20", 325, 34, 60, 60);
    view.defPosition("d18", 325, 95, 60, 60);
    view.defPosition("d16", 325, 156, 60, 60);
    view.defPosition("d14", 325, 217, 60, 60);
    view.defPosition("d12", 325, 278, 60, 60);
    view.defPosition("d10", 325, 339, 60, 60);
    view.defPosition("d8", 325, 400, 60, 60);
    view.defPosition("d6", 325, 461, 60, 60);
    view.defPosition("d4", 325, 522, 60, 60);
    view.defPosition("d2", 325, 583, 60, 60);
    view.defPosition("e18", 430, 95, 60, 60);
    view.defPosition("e16", 430, 156, 60, 60);
    view.defPosition("e14", 430, 217, 60, 60);
    view.defPosition("e12", 430, 278, 60, 60);
    view.defPosition("e10", 430, 339, 60, 60);
    view.defPosition("e8", 430, 400, 60, 60);
    view.defPosition("e6", 430, 461, 60, 60);
    view.defPosition("e4", 430, 522, 60, 60);
    view.defPosition("f16", 535, 156, 60, 60);
    view.defPosition("f14", 535, 217, 60, 60);
    view.defPosition("f12", 535, 278, 60, 60);
    view.defPosition("f10", 535, 339, 60, 60);
    view.defPosition("f8", 535, 400, 60, 60);
    view.defPosition("f6", 535, 461, 60, 60);
    view.defPosition("a17", 62, 126, 60, 60);
    view.defPosition("a15", 62, 187, 60, 60);
    view.defPosition("a13", 62, 248, 60, 60);
    view.defPosition("a11", 62, 309, 60, 60);
    view.defPosition("a9", 62, 370, 60, 60);
    view.defPosition("a7", 62, 431, 60, 60);
    view.defPosition("a5", 62, 492, 60, 60);
    view.defPosition("b19", 167, 65, 60, 60);
    view.defPosition("b17", 167, 126, 60, 60);
    view.defPosition("b15", 167, 187, 60, 60);
    view.defPosition("b13", 167, 248, 60, 60);
    view.defPosition("b11", 167, 309, 60, 60);
    view.defPosition("b9", 167, 370, 60, 60);
    view.defPosition("b7", 167, 431, 60, 60);
    view.defPosition("b5", 167, 492, 60, 60);
    view.defPosition("b3", 167, 553, 60, 60);
    view.defPosition("c21", 272, 4, 60, 60);
    view.defPosition("c19", 272, 65, 60, 60);
    view.defPosition("c17", 272, 126, 60, 60);
    view.defPosition("c15", 272, 187, 60, 60);
    view.defPosition("c13", 272, 248, 60, 60);
    view.defPosition("c11", 272, 309, 60, 60);
    view.defPosition("c9", 272, 370, 60, 60);
    view.defPosition("c7", 272, 431, 60, 60);
    view.defPosition("c5", 272, 492, 60, 60);
    view.defPosition("c3", 272, 553, 60, 60);
    view.defPosition("c1", 272, 614, 60, 60);
    view.defPosition("d19", 377, 65, 60, 60);
    view.defPosition("d17", 377, 126, 60, 60);
    view.defPosition("d15", 377, 187, 60, 60);
    view.defPosition("d13", 377, 248, 60, 60);
    view.defPosition("d11", 377, 309, 60, 60);
    view.defPosition("d9", 377, 370, 60, 60);
    view.defPosition("d7", 377, 431, 60, 60);
    view.defPosition("d5", 377, 492, 60, 60);
    view.defPosition("d3", 377, 553, 60, 60);
    view.defPosition("e17", 482, 126, 60, 60);
    view.defPosition("e15", 482, 187, 60, 60);
    view.defPosition("e13", 482, 248, 60, 60);
    view.defPosition("e11", 482, 309, 60, 60);
    view.defPosition("e9", 482, 370, 60, 60);
    view.defPosition("e7", 482, 431, 60, 60);
    view.defPosition("e5", 482, 492, 60, 60);
}
