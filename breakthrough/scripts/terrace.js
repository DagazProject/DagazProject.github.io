Dagaz.View.MARK_R = 15;

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

if (!_.isUndefined(Dagaz.Controller.addSound)) {
    Dagaz.Controller.addSound(1, "../sounds/slide.ogg", true);
    Dagaz.Controller.addSound(2,  "../sounds/tadam.wav", true);
    Dagaz.Controller.addSound(3, "../sounds/loss.wav", true);
}

Dagaz.Model.BuildDesign = function(design) {
    design.checkVersion("z2j", "2");
    design.checkVersion("animate-drops", "false");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("show-blink", "true");

    design.addDirection("ww");  // 0
    design.addDirection("ee");  // 1
    design.addDirection("swu"); // 2
    design.addDirection("seu"); // 3
    design.addDirection("nwu"); // 4
    design.addDirection("neu"); // 5
    design.addDirection("swd"); // 6
    design.addDirection("sed"); // 7
    design.addDirection("nwd"); // 8
    design.addDirection("ned"); // 9
    design.addDirection("w");   // 10
    design.addDirection("wu");  // 11
    design.addDirection("wd");  // 12
    design.addDirection("e");   // 13
    design.addDirection("eu");  // 14
    design.addDirection("ed");  // 15
    design.addDirection("s");   // 16
    design.addDirection("su");  // 17
    design.addDirection("sd");  // 18
    design.addDirection("n");   // 19
    design.addDirection("nu");  // 20
    design.addDirection("nd");  // 21
    design.addDirection("up");  // 22

    design.addPlayer("Black", [1, 0, 9, 8, 7, 6, 5, 4, 3, 2, 13, 15, 14, 10, 12, 11, 16, 21, 20, 19, 18, 17, 22]);
    design.addPlayer("White", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]);

    design.addPosition("f6", [0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 6, 0, 0, 0, 36]);
    design.addPosition("e6", [0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, -1, 0, 0, 0, 1, 6, 0, 0, 0, 0, 0, 36]);
    design.addPosition("d6", [0, 0, 5, 0, 0, 0, 0, 7, 0, 0, 0, -1, 0, 0, 0, 1, 6, 0, 0, 0, 0, 0, 36]);
    design.addPosition("c6", [0, 0, 5, 0, 0, 0, 0, 7, 0, 0, 0, -1, 0, 0, 0, 1, 6, 0, 0, 0, 0, 0, 36]);
    design.addPosition("b6", [0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 1, 6, 0, 0, 0, 0, 0, 36]);
    design.addPosition("a6", [0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 36]);
    design.addPosition("f5", [0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 6, 0, -6, 0, 36]);
    design.addPosition("e5", [0, 0, 0, 0, -7, 0, 5, 7, 0, -5, -1, 0, 0, 0, 0, 1, 0, 0, 6, -6, 0, 0, 36]);
    design.addPosition("d5", [0, 0, 0, 0, -7, 0, 0, 7, 0, -5, 0, -1, 0, 0, 0, 1, 6, 0, 0, -6, 0, 0, 36]);
    design.addPosition("c5", [0, 0, 5, 0, -7, 0, 0, 0, 0, -5, 0, -1, 0, 0, 0, 1, 6, 0, 0, -6, 0, 0, 36]);
    design.addPosition("b5", [0, 0, 5, 7, -7, 0, 0, 0, 0, -5, 0, -1, 0, 1, 0, 0, 0, 6, 0, -6, 0, 0, 36]);
    design.addPosition("a5", [0, 0, 5, 0, 0, 0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, -6, 36]);
    design.addPosition("f4", [0, 0, 0, 0, 0, -5, 0, 7, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 6, 0, -6, 0, 36]);
    design.addPosition("e4", [0, 0, 0, 0, -7, 0, 5, 7, 0, 0, -1, 0, 0, 1, 0, 0, 0, 0, 6, 0, -6, 0, 36]);
    design.addPosition("d4", [0, 7, 0, 0, -7, 0, 5, 0, 0, -5, -1, 0, 0, 0, 0, 1, 0, 0, 6, -6, 0, 0, 36]);
    design.addPosition("c4", [5, 0, 0, 7, -7, 0, 0, 0, 0, -5, 0, -1, 0, 1, 0, 0, 0, 6, 0, -6, 0, 0, 36]);
    design.addPosition("b4", [0, 0, 5, 7, 0, 0, 0, 0, 0, -5, -1, 0, 0, 1, 0, 0, 0, 6, 0, 0, 0, -6, 36]);
    design.addPosition("a4", [0, 0, 5, 0, 0, 0, 0, 0, -7, 0, -1, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, -6, 36]);
    design.addPosition("f3", [0, 0, 0, 0, 0, -5, 0, 7, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 6, 0, -6, 0, 36]);
    design.addPosition("e3", [0, 0, 0, 0, -7, -5, 5, 0, 0, 0, -1, 0, 0, 1, 0, 0, 0, 0, 6, 0, -6, 0, 36]);
    design.addPosition("d3", [0, -5, 0, 7, -7, 0, 5, 0, 0, 0, -1, 0, 0, 0, 1, 0, 6, 0, 0, 0, -6, 0, 36]);
    design.addPosition("c3", [-7, 0, 0, 7, 0, 0, 5, 0, 0, -5, 0, 0, -1, 1, 0, 0, 6, 0, 0, 0, 0, -6, 36]);
    design.addPosition("b3", [0, 0, 0, 7, 0, 0, 0, 0, -7, -5, -1, 0, 0, 1, 0, 0, 0, 6, 0, 0, 0, -6, 36]);
    design.addPosition("a3", [0, 0, 5, 0, 0, 0, 0, 0, -7, 0, -1, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, -6, 36]);
    design.addPosition("f2", [0, 0, 0, 0, 0, -5, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 6, 0, -6, 0, 36]);
    design.addPosition("e2", [0, 0, 0, 7, -7, -5, 5, 0, 0, 0, -1, 0, 0, 0, 1, 0, 6, 0, 0, 0, -6, 0, 36]);
    design.addPosition("d2", [0, 0, 0, 7, 0, -5, 5, 0, 0, 0, 0, 0, -1, 0, 1, 0, 6, 0, 0, -6, 0, 0, 36]);
    design.addPosition("c2", [0, 0, 0, 7, 0, 0, 5, 0, -7, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, -6, 0, 0, 36]);
    design.addPosition("b2", [0, 0, 0, 7, 0, 0, 5, 0, -7, -5, 0, 0, -1, 1, 0, 0, 6, 0, 0, 0, 0, -6, 36]);
    design.addPosition("a2", [0, 0, 0, 0, 0, 0, 0, 0, -7, 0, -1, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, -6, 36]);
    design.addPosition("f1", [0, 0, 0, 0, 0, -5, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, -6, 0, 36]);
    design.addPosition("e1", [0, 0, 0, 0, 0, -5, 0, 0, 0, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, -6, 0, 0, 36]);
    design.addPosition("d1", [0, 0, 0, 0, 0, -5, 0, 0, -7, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, -6, 0, 0, 36]);
    design.addPosition("c1", [0, 0, 0, 0, 0, -5, 0, 0, -7, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, -6, 0, 0, 36]);
    design.addPosition("b1", [0, 0, 0, 0, 0, 0, 0, 0, -7, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, -6, 0, 0, 36]);
    design.addPosition("a1", [0, 0, 0, 0, 0, 0, 0, 0, -7, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, -6, 36]);
    design.addPosition("F6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("E6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("D6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("C6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("A6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("F5", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("E5", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("D5", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("C5", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B5", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("A5", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("F4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("E4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("D4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("C4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("A4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("F3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("E3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("D3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("C3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("A3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("F2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("E2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("D2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("C2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("A2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("F1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("E1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("D1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("C1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("B1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("A1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

    design.addZone("goal-zone", 2, [30]);
    design.addZone("goal-zone", 1, [5]);

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
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.IF,	10);
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	4);
    design.addCommand(2, ZRF.FORK,	3);
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.JUMP,	-10);
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addPiece("T", 0, 10000);
    design.addMove(0, 0, [20], 0, 0);
    design.addMove(0, 0, [14], 0, 0);
    design.addMove(0, 0, [5], 0, 0);
    design.addMove(0, 0, [4], 0, 0);
    design.addMove(0, 0, [17], 0, 0);
    design.addMove(0, 0, [11], 0, 0);
    design.addMove(0, 0, [3], 0, 0);
    design.addMove(0, 0, [2], 0, 0);
    design.addMove(0, 0, [21], 0, 0);
    design.addMove(0, 0, [15], 0, 0);
    design.addMove(0, 1, [9], 0, 0);
    design.addMove(0, 1, [8], 0, 0);
    design.addMove(0, 0, [18], 0, 0);
    design.addMove(0, 0, [12], 0, 0);
    design.addMove(0, 1, [7], 0, 0);
    design.addMove(0, 1, [6], 0, 0);
    design.addMove(0, 2, [19, 19], 0, 1);
    design.addMove(0, 2, [13, 13], 0, 1);
    design.addMove(0, 2, [10, 10], 0, 1);
    design.addMove(0, 2, [16, 16], 0, 1);
    design.addMove(0, 0, [0], 0, 0);
    design.addMove(0, 0, [1], 0, 0);

    design.addPiece("S", 1, 100);
    design.addMove(1, 0, [20], 0, 0);
    design.addMove(1, 0, [14], 0, 0);
    design.addMove(1, 0, [5], 0, 0);
    design.addMove(1, 0, [4], 0, 0);
    design.addMove(1, 0, [17], 0, 0);
    design.addMove(1, 0, [11], 0, 0);
    design.addMove(1, 0, [3], 0, 0);
    design.addMove(1, 0, [2], 0, 0);
    design.addMove(1, 0, [21], 0, 0);
    design.addMove(1, 0, [15], 0, 0);
    design.addMove(1, 1, [9], 0, 0);
    design.addMove(1, 1, [8], 0, 0);
    design.addMove(1, 0, [18], 0, 0);
    design.addMove(1, 0, [12], 0, 0);
    design.addMove(1, 1, [7], 0, 0);
    design.addMove(1, 1, [6], 0, 0);
    design.addMove(1, 2, [19, 19], 0, 1);
    design.addMove(1, 2, [13, 13], 0, 1);
    design.addMove(1, 2, [10, 10], 0, 1);
    design.addMove(1, 2, [16, 16], 0, 1);
    design.addMove(1, 0, [0], 0, 0);
    design.addMove(1, 0, [1], 0, 0);

    design.addPiece("M", 2, 200);
    design.addMove(2, 0, [20], 0, 0);
    design.addMove(2, 0, [14], 0, 0);
    design.addMove(2, 0, [5], 0, 0);
    design.addMove(2, 0, [4], 0, 0);
    design.addMove(2, 0, [17], 0, 0);
    design.addMove(2, 0, [11], 0, 0);
    design.addMove(2, 0, [3], 0, 0);
    design.addMove(2, 0, [2], 0, 0);
    design.addMove(2, 0, [21], 0, 0);
    design.addMove(2, 0, [15], 0, 0);
    design.addMove(2, 1, [9], 0, 0);
    design.addMove(2, 1, [8], 0, 0);
    design.addMove(2, 0, [18], 0, 0);
    design.addMove(2, 0, [12], 0, 0);
    design.addMove(2, 1, [7], 0, 0);
    design.addMove(2, 1, [6], 0, 0);
    design.addMove(2, 2, [19, 19], 0, 1);
    design.addMove(2, 2, [13, 13], 0, 1);
    design.addMove(2, 2, [10, 10], 0, 1);
    design.addMove(2, 2, [16, 16], 0, 1);
    design.addMove(2, 0, [0], 0, 0);
    design.addMove(2, 0, [1], 0, 0);

    design.addPiece("L", 3, 300);
    design.addMove(3, 0, [20], 0, 0);
    design.addMove(3, 0, [14], 0, 0);
    design.addMove(3, 0, [5], 0, 0);
    design.addMove(3, 0, [4], 0, 0);
    design.addMove(3, 0, [17], 0, 0);
    design.addMove(3, 0, [11], 0, 0);
    design.addMove(3, 0, [3], 0, 0);
    design.addMove(3, 0, [2], 0, 0);
    design.addMove(3, 0, [21], 0, 0);
    design.addMove(3, 0, [15], 0, 0);
    design.addMove(3, 1, [9], 0, 0);
    design.addMove(3, 1, [8], 0, 0);
    design.addMove(3, 0, [18], 0, 0);
    design.addMove(3, 0, [12], 0, 0);
    design.addMove(3, 1, [7], 0, 0);
    design.addMove(3, 1, [6], 0, 0);
    design.addMove(3, 2, [19, 19], 0, 1);
    design.addMove(3, 2, [13, 13], 0, 1);
    design.addMove(3, 2, [10, 10], 0, 1);
    design.addMove(3, 2, [16, 16], 0, 1);
    design.addMove(3, 0, [0], 0, 0);
    design.addMove(3, 0, [1], 0, 0);

    design.setup("Black", "L", 35);
    design.setup("Black", "L", 34);
    design.setup("Black", "L", 25);
    design.setup("Black", "L", 24);
    design.setup("Black", "M", 33);
    design.setup("Black", "M", 32);
    design.setup("Black", "M", 27);
    design.setup("Black", "M", 26);
    design.setup("Black", "S", 29);
    design.setup("Black", "S", 28);
    design.setup("Black", "S", 31);
    design.setup("Black", "T", 30);
    design.setup("White", "L", 1);
    design.setup("White", "L", 0);
    design.setup("White", "L", 11);
    design.setup("White", "L", 10);
    design.setup("White", "M", 3);
    design.setup("White", "M", 2);
    design.setup("White", "M", 9);
    design.setup("White", "M", 8);
    design.setup("White", "S", 7);
    design.setup("White", "S", 6);
    design.setup("White", "S", 4);
    design.setup("White", "T", 5);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("BlackT", "Black T");
    view.defPiece("WhiteT", "White T");
    view.defPiece("BlackS", "Black S");
    view.defPiece("WhiteS", "White S");
    view.defPiece("BlackM", "Black M");
    view.defPiece("WhiteM", "White M");
    view.defPiece("BlackL", "Black L");
    view.defPiece("WhiteL", "White L");
 
    view.defPosition("f6", 48, 6, 102, 99);
    view.defPosition("e6", 120, 14, 102, 99);
    view.defPosition("d6", 192, 22, 102, 99);
    view.defPosition("c6", 264, 30, 102, 99);
    view.defPosition("b6", 336, 38, 102, 99);
    view.defPosition("a6", 408, 46, 102, 99);
    view.defPosition("f5", 40, 95, 102, 99);
    view.defPosition("e5", 120, 95, 102, 99);
    view.defPosition("d5", 192, 103, 102, 99);
    view.defPosition("c5", 264, 111, 102, 99);
    view.defPosition("b5", 336, 119, 102, 99);
    view.defPosition("a5", 416, 119, 102, 99);
    view.defPosition("f4", 32, 184, 102, 99);
    view.defPosition("e4", 112, 184, 102, 99);
    view.defPosition("d4", 192, 184, 102, 99);
    view.defPosition("c4", 264, 192, 102, 99);
    view.defPosition("b4", 344, 192, 102, 99);
    view.defPosition("a4", 424, 192, 102, 99);
    view.defPosition("f3", 24, 273, 102, 99);
    view.defPosition("e3", 104, 273, 102, 99);
    view.defPosition("d3", 184, 273, 102, 99);
    view.defPosition("c3", 272, 265, 102, 99);
    view.defPosition("b3", 352, 265, 102, 99);
    view.defPosition("a3", 432, 265, 102, 99);
    view.defPosition("f2", 16, 362, 102, 99);
    view.defPosition("e2", 96, 362, 102, 99);
    view.defPosition("d2", 184, 354, 102, 99);
    view.defPosition("c2", 272, 346, 102, 99);
    view.defPosition("b2", 360, 338, 102, 99);
    view.defPosition("a2", 440, 338, 102, 99);
    view.defPosition("f1", 8, 451, 102, 99);
    view.defPosition("e1", 96, 443, 102, 99);
    view.defPosition("d1", 184, 435, 102, 99);
    view.defPosition("c1", 272, 427, 102, 99);
    view.defPosition("b1", 360, 419, 102, 99);
    view.defPosition("a1", 448, 411, 102, 99);
    view.defPosition("F6", 48, 6, 102, 99);
    view.defPosition("E6", 120, 14, 102, 99);
    view.defPosition("D6", 192, 22, 102, 99);
    view.defPosition("C6", 264, 30, 102, 99);
    view.defPosition("B6", 336, 38, 102, 99);
    view.defPosition("A6", 408, 46, 102, 99);
    view.defPosition("F5", 40, 95, 102, 99);
    view.defPosition("E5", 120, 95, 102, 99);
    view.defPosition("D5", 192, 103, 102, 99);
    view.defPosition("C5", 264, 111, 102, 99);
    view.defPosition("B5", 336, 119, 102, 99);
    view.defPosition("A5", 416, 119, 102, 99);
    view.defPosition("F4", 32, 184, 102, 99);
    view.defPosition("E4", 112, 184, 102, 99);
    view.defPosition("D4", 192, 184, 102, 99);
    view.defPosition("C4", 264, 192, 102, 99);
    view.defPosition("B4", 344, 192, 102, 99);
    view.defPosition("A4", 424, 192, 102, 99);
    view.defPosition("F3", 24, 273, 102, 99);
    view.defPosition("E3", 104, 273, 102, 99);
    view.defPosition("D3", 184, 273, 102, 99);
    view.defPosition("C3", 272, 265, 102, 99);
    view.defPosition("B3", 352, 265, 102, 99);
    view.defPosition("A3", 432, 265, 102, 99);
    view.defPosition("F2", 16, 362, 102, 99);
    view.defPosition("E2", 96, 362, 102, 99);
    view.defPosition("D2", 184, 354, 102, 99);
    view.defPosition("C2", 272, 346, 102, 99);
    view.defPosition("B2", 360, 338, 102, 99);
    view.defPosition("A2", 440, 338, 102, 99);
    view.defPosition("F1", 8, 451, 102, 99);
    view.defPosition("E1", 96, 443, 102, 99);
    view.defPosition("D1", 184, 435, 102, 99);
    view.defPosition("C1", 272, 427, 102, 99);
    view.defPosition("B1", 360, 419, 102, 99);
    view.defPosition("A1", 448, 411, 102, 99);
}
