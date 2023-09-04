Dagaz.View.MARK_R = 12;
Dagaz.Model.showLose = false;

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
    design.checkVersion("pass-partial", "true");
    design.checkVersion("detect-loops", "true");

    design.addDirection("se");
    design.addDirection("sw");
    design.addDirection("e");
    design.addDirection("ne");
    design.addDirection("w");
    design.addDirection("nw");

    design.addPlayer("Red", [5, 3, 4, 1, 2, 0]);
    design.addPlayer("Blue", [0, 1, 2, 3, 4, 5]);

    design.addPosition("a9", [6, 5, 0, 0, 0, 0]);
    design.addPosition("b9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("c9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("d9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("e9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("a8", [6, 5, 1, -5, 0, 0]);
    design.addPosition("b8", [6, 5, 0, 0, -1, -6]);
    design.addPosition("c8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("d8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("e8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("a7", [6, 5, 1, -5, 0, 0]);
    design.addPosition("b7", [6, 5, 1, -5, -1, -6]);
    design.addPosition("c7", [6, 5, 0, 0, -1, -6]);
    design.addPosition("d7", [0, 0, 0, 0, 0, 0]);
    design.addPosition("e7", [0, 0, 0, 0, 0, 0]);
    design.addPosition("a6", [6, 5, 1, -5, 0, 0]);
    design.addPosition("b6", [6, 5, 1, -5, -1, -6]);
    design.addPosition("c6", [6, 5, 1, -5, -1, -6]);
    design.addPosition("d6", [6, 5, 0, 0, -1, -6]);
    design.addPosition("e6", [0, 0, 0, 0, 0, 0]);
    design.addPosition("a5", [6, 0, 1, -5, 0, 0]);
    design.addPosition("b5", [6, 5, 1, -5, -1, -6]);
    design.addPosition("c5", [6, 5, 1, -5, -1, -6]);
    design.addPosition("d5", [6, 5, 1, -5, -1, -6]);
    design.addPosition("e5", [0, 5, 0, 0, -1, -6]);
    design.addPosition("a4", [0, 0, 0, 0, 0, 0]);
    design.addPosition("b4", [6, 0, 1, -5, 0, -6]);
    design.addPosition("c4", [6, 5, 1, -5, -1, -6]);
    design.addPosition("d4", [6, 5, 1, -5, -1, -6]);
    design.addPosition("e4", [0, 5, 0, -5, -1, -6]);
    design.addPosition("a3", [0, 0, 0, 0, 0, 0]);
    design.addPosition("b3", [0, 0, 0, 0, 0, 0]);
    design.addPosition("c3", [6, 0, 1, -5, 0, -6]);
    design.addPosition("d3", [6, 5, 1, -5, -1, -6]);
    design.addPosition("e3", [0, 5, 0, -5, -1, -6]);
    design.addPosition("a2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("b2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("c2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("d2", [6, 0, 1, -5, 0, -6]);
    design.addPosition("e2", [0, 5, 0, -5, -1, -6]);
    design.addPosition("a1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("b1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("c1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("d1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("e1", [0, 0, 0, -5, 0, -6]);

    design.addZone("goal-zone", 1, [0, 5, 6, 10, 11, 12, 15, 16, 17, 18]);
    design.addZone("goal-zone", 2, [44, 38, 39, 32, 33, 34, 26, 27, 28, 29]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.MODE,	1);	// continue-type
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.LITERAL,	0);	// R
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.MODE,	1);	// continue-type
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.LITERAL,	1);	// S
    design.addCommand(3, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.MODE,	1);	// continue-type
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addPiece("R", 0);
    design.addMove(0, 0, [5], 0);
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [1], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 1, [5, 5], 1);
    design.addMove(0, 1, [3, 3], 1);
    design.addMove(0, 1, [1, 1], 1);
    design.addMove(0, 1, [0, 0], 1);
    design.addMove(0, 1, [2, 2], 1);
    design.addMove(0, 1, [4, 4], 1);
    design.addMove(0, 2, [5, 5], 1);
    design.addMove(0, 2, [3, 3], 1);
    design.addMove(0, 2, [1, 1], 1);
    design.addMove(0, 2, [0, 0], 1);
    design.addMove(0, 2, [2, 2], 1);
    design.addMove(0, 2, [4, 4], 1);

    design.addPiece("S", 1);
    design.addMove(1, 0, [5], 0);
    design.addMove(1, 0, [3], 0);
    design.addMove(1, 0, [1], 0);
    design.addMove(1, 0, [0], 0);
    design.addMove(1, 0, [2], 0);
    design.addMove(1, 0, [4], 0);
    design.addMove(1, 1, [5, 5], 1);
    design.addMove(1, 1, [3, 3], 1);
    design.addMove(1, 1, [1, 1], 1);
    design.addMove(1, 1, [0, 0], 1);
    design.addMove(1, 1, [2, 2], 1);
    design.addMove(1, 1, [4, 4], 1);
    design.addMove(1, 3, [5, 5], 1);
    design.addMove(1, 3, [3, 3], 1);
    design.addMove(1, 3, [1, 1], 1);
    design.addMove(1, 3, [0, 0], 1);
    design.addMove(1, 3, [2, 2], 1);
    design.addMove(1, 3, [4, 4], 1);

    design.reserve("Red", "S", 5);
    design.reserve("Red", "R", 5);
    design.reserve("Blue", "S", 5);
    design.reserve("Blue", "R", 5);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("RedR", "Red R");
    view.defPiece("BlueR", "Blue R");
    view.defPiece("RedS", "Red S");
    view.defPiece("BlueS", "Blue S");
 
    view.defPosition("a9", 103, 2, 32, 32);
    view.defPosition("b9", 153, 2, 32, 32);
    view.defPosition("c9", 203, 2, 32, 32);
    view.defPosition("d9", 253, 2, 32, 32);
    view.defPosition("e9", 303, 2, 32, 32);
    view.defPosition("a8", 78, 45, 32, 32);
    view.defPosition("b8", 128, 45, 32, 32);
    view.defPosition("c8", 178, 45, 32, 32);
    view.defPosition("d8", 228, 45, 32, 32);
    view.defPosition("e8", 278, 45, 32, 32);
    view.defPosition("a7", 53, 88, 32, 32);
    view.defPosition("b7", 103, 88, 32, 32);
    view.defPosition("c7", 153, 88, 32, 32);
    view.defPosition("d7", 203, 88, 32, 32);
    view.defPosition("e7", 253, 88, 32, 32);
    view.defPosition("a6", 28, 131, 32, 32);
    view.defPosition("b6", 78, 131, 32, 32);
    view.defPosition("c6", 128, 131, 32, 32);
    view.defPosition("d6", 178, 131, 32, 32);
    view.defPosition("e6", 228, 131, 32, 32);
    view.defPosition("a5", 3, 174, 32, 32);
    view.defPosition("b5", 53, 174, 32, 32);
    view.defPosition("c5", 103, 174, 32, 32);
    view.defPosition("d5", 153, 174, 32, 32);
    view.defPosition("e5", 203, 174, 32, 32);
    view.defPosition("a4", -22, 217, 32, 32);
    view.defPosition("b4", 28, 217, 32, 32);
    view.defPosition("c4", 78, 217, 32, 32);
    view.defPosition("d4", 128, 217, 32, 32);
    view.defPosition("e4", 178, 217, 32, 32);
    view.defPosition("a3", -47, 260, 32, 32);
    view.defPosition("b3", 3, 260, 32, 32);
    view.defPosition("c3", 53, 260, 32, 32);
    view.defPosition("d3", 103, 260, 32, 32);
    view.defPosition("e3", 153, 260, 32, 32);
    view.defPosition("a2", -72, 303, 32, 32);
    view.defPosition("b2", -22, 303, 32, 32);
    view.defPosition("c2", 28, 303, 32, 32);
    view.defPosition("d2", 78, 303, 32, 32);
    view.defPosition("e2", 128, 303, 32, 32);
    view.defPosition("a1", -97, 346, 32, 32);
    view.defPosition("b1", -47, 346, 32, 32);
    view.defPosition("c1", 3, 346, 32, 32);
    view.defPosition("d1", 53, 346, 32, 32);
    view.defPosition("e1", 103, 346, 32, 32);
}
