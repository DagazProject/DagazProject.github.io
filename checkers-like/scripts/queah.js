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
    design.checkVersion("smart-moves", "true");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("advisor-wait", "5");
    design.checkVersion("queah-invariant", "true");

    design.addDirection("ne");
    design.addDirection("se");
    design.addDirection("sw");
    design.addDirection("nw");
    design.addDirection("next");

    design.addPlayer("Black", [2, 3, 0, 1, 4]);
    design.addPlayer("White", [0, 1, 2, 3, 4]);

    design.addPosition("x5", [0, 0, 0, 0, 0]);
    design.addPosition("y5", [0, 1, 2, 3, 4]);
    design.addPosition("z5", [0, 0, 0, 0, 50]);
    design.addPosition("t5", [0, 1, 2, 3, 4]);
    design.addPosition("a5", [0, 14, 0, 0, 40]);
    design.addPosition("b5", [0, 1, 2, 3, 4]);
    design.addPosition("c5", [0, 14, 12, 0, 40]);
    design.addPosition("d5", [0, 1, 2, 3, 4]);
    design.addPosition("e5", [0, 0, 12, 0, 0]);
    design.addPosition("k5", [0, 1, 2, 3, 4]);
    design.addPosition("u5", [0, 0, 0, 0, 0]);
    design.addPosition("v5", [0, 1, 2, 3, 4]);
    design.addPosition("w5", [0, 0, 0, 0, 50]);
    design.addPosition("x4", [0, 1, 2, 3, 4]);
    design.addPosition("y4", [0, 1, 2, 3, 4]);
    design.addPosition("z4", [0, 1, 2, 3, 4]);
    design.addPosition("t4", [0, 1, 2, 3, 4]);
    design.addPosition("a4", [0, 1, 2, 3, 4]);
    design.addPosition("b4", [-12, 14, 12, -14, 40]);
    design.addPosition("c4", [0, 1, 2, 3, 4]);
    design.addPosition("d4", [-12, 14, 12, -14, 40]);
    design.addPosition("e4", [0, 1, 2, 3, 4]);
    design.addPosition("k4", [0, 1, 2, 3, 4]);
    design.addPosition("u4", [0, 1, 2, 3, 4]);
    design.addPosition("v4", [0, 1, 2, 3, 4]);
    design.addPosition("w4", [0, 1, 2, 3, 4]);
    design.addPosition("x3", [0, 0, 0, 0, -26]);
    design.addPosition("y3", [0, 1, 2, 3, 4]);
    design.addPosition("z3", [0, 0, 0, 0, -26]);
    design.addPosition("t3", [0, 1, 2, 3, 4]);
    design.addPosition("a3", [-12, 14, 0, 0, -26]);
    design.addPosition("b3", [0, 1, 2, 3, 4]);
    design.addPosition("c3", [-12, 14, 12, -14, -26]);
    design.addPosition("d3", [0, 1, 2, 3, 4]);
    design.addPosition("e3", [0, 0, 12, -14, -26]);
    design.addPosition("k3", [0, 1, 2, 3, 4]);
    design.addPosition("u3", [0, 0, 0, 0, -26]);
    design.addPosition("v3", [0, 1, 2, 3, 4]);
    design.addPosition("w3", [0, 0, 0, 0, -26]);
    design.addPosition("x2", [0, 1, 2, 3, 4]);
    design.addPosition("y2", [0, 1, 2, 3, 4]);
    design.addPosition("z2", [0, 1, 2, 3, 4]);
    design.addPosition("t2", [0, 1, 2, 3, 4]);
    design.addPosition("a2", [0, 1, 2, 3, 4]);
    design.addPosition("b2", [-12, 14, 12, -14, -26]);
    design.addPosition("c2", [0, 1, 2, 3, 4]);
    design.addPosition("d2", [-12, 14, 12, -14, -26]);
    design.addPosition("e2", [0, 1, 2, 3, 4]);
    design.addPosition("k2", [0, 1, 2, 3, 4]);
    design.addPosition("u2", [0, 1, 2, 3, 4]);
    design.addPosition("v2", [0, 1, 2, 3, 4]);
    design.addPosition("w2", [0, 1, 2, 3, 4]);
    design.addPosition("x1", [0, 0, 0, 0, -26]);
    design.addPosition("y1", [0, 1, 2, 3, 4]);
    design.addPosition("z1", [0, 0, 0, 0, -26]);
    design.addPosition("t1", [0, 1, 2, 3, 4]);
    design.addPosition("a1", [-12, 0, 0, 0, -26]);
    design.addPosition("b1", [0, 1, 2, 3, 4]);
    design.addPosition("c1", [-12, 0, 0, -14, -26]);
    design.addPosition("d1", [0, 1, 2, 3, 4]);
    design.addPosition("e1", [0, 0, 0, -14, -26]);
    design.addPosition("k1", [0, 1, 2, 3, 4]);
    design.addPosition("u1", [0, 0, 0, 0, -26]);
    design.addPosition("v1", [0, 1, 2, 3, 4]);
    design.addPosition("w1", [0, 0, 0, 0, -26]);

    design.addZone("board-zone", 2, [56, 30, 4, 44, 18, 58, 32, 6, 46, 20, 60, 34, 8]);
    design.addZone("board-zone", 1, [56, 30, 4, 44, 18, 58, 32, 6, 46, 20, 60, 34, 8]);

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
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	26);	// capture
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.ON_BOARD_DIR,	4);	// name
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	5);
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	21);	// position
    design.addCommand(2, ZRF.ON_BOARD_DIR,	4);	// name
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	10);
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	4);
    design.addCommand(2, ZRF.FORK,	3);
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end
    design.addCommand(2, ZRF.PARAM,	2);	// $3
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.JUMP,	-11);
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addPiece("Man", 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [1], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 1, [0, 0], 1);
    design.addMove(0, 1, [3, 3], 1);
    design.addMove(0, 1, [1, 1], 1);
    design.addMove(0, 1, [2, 2], 1);
    design.addMove(0, 2, [4, 56, 4], 2);

    design.setup("White", "Man", 56);
    design.setup("White", "Man", 30);
    design.setup("White", "Man", 44);
    design.setup("White", "Man", 18);
    design.setup("White", "Man", 52);
    design.setup("White", "Man", 26);
    design.setup("White", "Man", 0);
    design.setup("White", "Man", 54);
    design.setup("White", "Man", 28);
    design.setup("White", "Man", 2);
    design.setup("Black", "Man", 46);
    design.setup("Black", "Man", 20);
    design.setup("Black", "Man", 34);
    design.setup("Black", "Man", 8);
    design.setup("Black", "Man", 62);
    design.setup("Black", "Man", 36);
    design.setup("Black", "Man", 10);
    design.setup("Black", "Man", 64);
    design.setup("Black", "Man", 38);
    design.setup("Black", "Man", 12);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteMan", "White Man");
    view.defPiece("BlackMan", "Black Man");
 
    view.defPosition("x5", 14, 53, 50, 50);
    view.defPosition("y5", 63, 53, 50, 50);
    view.defPosition("z5", 112, 53, 50, 50);
    view.defPosition("t5", 161, 53, 50, 50);
    view.defPosition("a5", 210, 53, 50, 50);
    view.defPosition("b5", 259, 53, 50, 50);
    view.defPosition("c5", 308, 53, 50, 50);
    view.defPosition("d5", 357, 53, 50, 50);
    view.defPosition("e5", 406, 53, 50, 50);
    view.defPosition("k5", 455, 53, 50, 50);
    view.defPosition("u5", 504, 53, 50, 50);
    view.defPosition("v5", 553, 53, 50, 50);
    view.defPosition("w5", 602, 53, 50, 50);
    view.defPosition("x4", 14, 102, 50, 50);
    view.defPosition("y4", 63, 102, 50, 50);
    view.defPosition("z4", 112, 102, 50, 50);
    view.defPosition("t4", 161, 102, 50, 50);
    view.defPosition("a4", 210, 102, 50, 50);
    view.defPosition("b4", 259, 102, 50, 50);
    view.defPosition("c4", 308, 102, 50, 50);
    view.defPosition("d4", 357, 102, 50, 50);
    view.defPosition("e4", 406, 102, 50, 50);
    view.defPosition("k4", 455, 102, 50, 50);
    view.defPosition("u4", 504, 102, 50, 50);
    view.defPosition("v4", 553, 102, 50, 50);
    view.defPosition("w4", 602, 102, 50, 50);
    view.defPosition("x3", 14, 151, 50, 50);
    view.defPosition("y3", 63, 151, 50, 50);
    view.defPosition("z3", 112, 151, 50, 50);
    view.defPosition("t3", 161, 151, 50, 50);
    view.defPosition("a3", 210, 151, 50, 50);
    view.defPosition("b3", 259, 151, 50, 50);
    view.defPosition("c3", 308, 151, 50, 50);
    view.defPosition("d3", 357, 151, 50, 50);
    view.defPosition("e3", 406, 151, 50, 50);
    view.defPosition("k3", 455, 151, 50, 50);
    view.defPosition("u3", 504, 151, 50, 50);
    view.defPosition("v3", 553, 151, 50, 50);
    view.defPosition("w3", 602, 151, 50, 50);
    view.defPosition("x2", 14, 200, 50, 50);
    view.defPosition("y2", 63, 200, 50, 50);
    view.defPosition("z2", 112, 200, 50, 50);
    view.defPosition("t2", 161, 200, 50, 50);
    view.defPosition("a2", 210, 200, 50, 50);
    view.defPosition("b2", 259, 200, 50, 50);
    view.defPosition("c2", 308, 200, 50, 50);
    view.defPosition("d2", 357, 200, 50, 50);
    view.defPosition("e2", 406, 200, 50, 50);
    view.defPosition("k2", 455, 200, 50, 50);
    view.defPosition("u2", 504, 200, 50, 50);
    view.defPosition("v2", 553, 200, 50, 50);
    view.defPosition("w2", 602, 200, 50, 50);
    view.defPosition("x1", 14, 249, 50, 50);
    view.defPosition("y1", 63, 249, 50, 50);
    view.defPosition("z1", 112, 249, 50, 50);
    view.defPosition("t1", 161, 249, 50, 50);
    view.defPosition("a1", 210, 249, 50, 50);
    view.defPosition("b1", 259, 249, 50, 50);
    view.defPosition("c1", 308, 249, 50, 50);
    view.defPosition("d1", 357, 249, 50, 50);
    view.defPosition("e1", 406, 249, 50, 50);
    view.defPosition("k1", 455, 249, 50, 50);
    view.defPosition("u1", 504, 249, 50, 50);
    view.defPosition("v1", 553, 249, 50, 50);
    view.defPosition("w1", 602, 249, 50, 50);
}
