Dagaz.View.TARGET_FLAT  = true;
Dagaz.View.TARGET_LARGE = true;
Dagaz.View.IS_DIAGONAL  = true;

Dagaz.Controller.persistense = "setup";

Dagaz.Model.WIDTH  = 11;
Dagaz.Model.HEIGHT = 11;

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
    design.checkVersion("animate-captures", "false");

    design.addDirection("nn"); // 0
    design.addDirection("ss"); // 1
    design.addDirection("se"); // 2
    design.addDirection("s");  // 3
    design.addDirection("sw"); // 4
    design.addDirection("e");  // 5
    design.addDirection("w");  // 6
    design.addDirection("ne"); // 7
    design.addDirection("nw"); // 8
    design.addDirection("n");  // 9

    design.addPlayer("Red", [1, 0, 2, 9, 7, 6, 5, 4, 8, 3]);
    design.addPlayer("Black", [1, 0, 8, 9, 7, 6, 5, 4, 2, 3]);

    design.addPosition("a11", [0, 12, 12, 11, 0, 1, 0, 0, 0, 0]);
    design.addPosition("b11", [0, 12, 12, 11, 10, 1, -1, 0, 0, 0]);
    design.addPosition("c11", [0, 12, 12, 11, 10, 1, -1, 0, 0, 0]);
    design.addPosition("d11", [0, 12, 12, 11, 10, 1, -1, 0, 0, 0]);
    design.addPosition("e11", [0, 12, 12, 11, 10, 1, -1, 0, 0, 0]);
    design.addPosition("f11", [0, 12, 12, 11, 10, 1, -1, 0, 0, 0]);
    design.addPosition("g11", [0, 12, 12, 11, 10, 1, -1, 0, 0, 0]);
    design.addPosition("h11", [0, 12, 12, 11, 10, 1, -1, 0, 0, 0]);
    design.addPosition("i11", [0, 12, 12, 11, 10, 1, -1, 0, 0, 0]);
    design.addPosition("j11", [0, 0, 0, 11, 10, 0, -1, 0, 0, 0]);
    design.addPosition("k11", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a10", [0, 12, 12, 11, 0, 1, 0, -10, 0, -11]);
    design.addPosition("b10", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("c10", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("d10", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("e10", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("f10", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("g10", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("h10", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("i10", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("j10", [-12, 12, 12, 11, 10, 0, -1, 0, -12, -11]);
    design.addPosition("k10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a9", [0, 12, 12, 11, 0, 1, 0, -10, 0, -11]);
    design.addPosition("b9", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("c9", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("d9", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("e9", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("f9", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("g9", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("h9", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("i9", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("j9", [-12, 12, 12, 11, 10, 1, -1, 0, -12, -11]);
    design.addPosition("k9", [-12, 0, 0, 11, 10, 0, -1, 0, -12, 0]);
    design.addPosition("a8", [0, 12, 12, 11, 0, 1, 0, -10, 0, -11]);
    design.addPosition("b8", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("c8", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("d8", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("e8", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("f8", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("g8", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("h8", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("i8", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("j8", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("k8", [-12, 0, 0, 11, 10, 0, -1, 0, -12, -11]);
    design.addPosition("a7", [0, 12, 12, 11, 0, 1, 0, -10, 0, -11]);
    design.addPosition("b7", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("c7", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("d7", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("e7", [-12, 0, 0, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("f7", [-12, 12, 12, 0, 10, 1, -1, -10, -12, -11]);
    design.addPosition("g7", [-12, 12, 12, 11, 0, 1, -1, -10, -12, -11]);
    design.addPosition("h7", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("i7", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("j7", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("k7", [-12, 0, 0, 11, 10, 0, -1, 0, -12, -11]);
    design.addPosition("a6", [0, 12, 12, 11, 0, 1, 0, -10, 0, -11]);
    design.addPosition("b6", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("c6", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("d6", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("e6", [-12, 12, 12, 11, 10, 0, -1, -10, -12, -11]);
    design.addPosition("f6", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g6", [-12, 12, 12, 11, 10, 1, 0, -10, -12, -11]);
    design.addPosition("h6", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("i6", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("j6", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("k6", [-12, 0, 0, 11, 10, 0, -1, 0, -12, -11]);
    design.addPosition("a5", [0, 12, 12, 11, 0, 1, 0, -10, 0, -11]);
    design.addPosition("b5", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("c5", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("d5", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("e5", [-12, 12, 12, 11, 10, 1, -1, 0, -12, -11]);
    design.addPosition("f5", [-12, 12, 12, 11, 10, 1, -1, -10, -12, 0]);
    design.addPosition("g5", [0, 12, 12, 11, 10, 1, -1, -10, 0, -11]);
    design.addPosition("h5", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("i5", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("j5", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("k5", [-12, 0, 0, 11, 10, 0, -1, 0, -12, -11]);
    design.addPosition("a4", [0, 12, 12, 11, 0, 1, 0, -10, 0, -11]);
    design.addPosition("b4", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("c4", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("d4", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("e4", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("f4", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("g4", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("h4", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("i4", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("j4", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("k4", [-12, 0, 0, 11, 10, 0, -1, 0, -12, -11]);
    design.addPosition("a3", [0, 12, 12, 0, 0, 1, 0, -10, 0, -11]);
    design.addPosition("b3", [-12, 12, 12, 11, 0, 1, -1, -10, -12, -11]);
    design.addPosition("c3", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("d3", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("e3", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("f3", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("g3", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("h3", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("i3", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("j3", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("k3", [-12, 0, 0, 11, 10, 0, -1, 0, -12, -11]);
    design.addPosition("a2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b2", [-12, 12, 12, 11, 0, 1, 0, -10, -12, -11]);
    design.addPosition("c2", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("d2", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("e2", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("f2", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("g2", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("h2", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("i2", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("j2", [-12, 12, 12, 11, 10, 1, -1, -10, -12, -11]);
    design.addPosition("k2", [-12, 0, 0, 11, 10, 0, -1, 0, -12, -11]);
    design.addPosition("a1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b1", [0, 0, 0, 0, 0, 1, 0, -10, 0, -11]);
    design.addPosition("c1", [-12, 0, 0, 0, 0, 1, -1, -10, -12, -11]);
    design.addPosition("d1", [-12, 0, 0, 0, 0, 1, -1, -10, -12, -11]);
    design.addPosition("e1", [-12, 0, 0, 0, 0, 1, -1, -10, -12, -11]);
    design.addPosition("f1", [-12, 0, 0, 0, 0, 1, -1, -10, -12, -11]);
    design.addPosition("g1", [-12, 0, 0, 0, 0, 1, -1, -10, -12, -11]);
    design.addPosition("h1", [-12, 0, 0, 0, 0, 1, -1, -10, -12, -11]);
    design.addPosition("i1", [-12, 0, 0, 0, 0, 1, -1, -10, -12, -11]);
    design.addPosition("j1", [-12, 0, 0, 0, 0, 1, -1, -10, -12, -11]);
    design.addPosition("k1", [-12, 0, 0, 0, 0, 0, -1, 0, -12, -11]);

    design.addZone("fortress", 1, [118, 119, 120, 107, 108, 109, 96, 97, 98]);
    design.addZone("fortress", 2, [22, 23, 24, 11, 12, 13, 0, 1, 2]);
    design.addZone("home", 1, [111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 90, 91, 92, 93, 94, 95, 96, 97, 98, 80, 81, 82, 83, 84, 85, 86, 87, 70, 71, 72, 73, 74, 75, 76, 61, 62, 63, 64, 65, 51, 52, 53, 54, 41, 42, 43, 31, 32]);
    design.addZone("home", 2, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 23, 24, 25, 26, 27, 28, 29, 30, 33, 34, 35, 36, 37, 38, 39, 40, 44, 45, 46, 47, 48, 49, 50, 55, 56, 57, 58, 59, 66, 67, 68, 69, 77, 78, 79, 88, 89]);
    design.addZone("enemy", 1, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 23, 24, 25, 26, 27, 28, 29, 30, 33, 34, 35, 36, 37, 38, 39, 40, 44, 45, 46, 47, 48, 49, 50, 55, 56, 57, 58, 59, 66, 67, 68, 69, 77, 78, 79, 88, 89]);
    design.addZone("enemy", 2, [111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 90, 91, 92, 93, 94, 95, 96, 97, 98, 80, 81, 82, 83, 84, 85, 86, 87, 70, 71, 72, 73, 74, 75, 76, 61, 62, 63, 64, 65, 51, 52, 53, 54, 41, 42, 43, 31, 32]);
    design.addZone("cross", 1, [118, 120, 108, 96, 98]);
    design.addZone("cross", 2, [22, 24, 12, 0, 2]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.IN_ZONE,	2);	// enemy
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.IN_ZONE,	2);	// enemy
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.IN_ZONE,	1);	// home
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
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
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	7);
    design.addCommand(5, ZRF.FORK,	3);
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end
    design.addCommand(5, ZRF.PARAM,	1);	// $2
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.JUMP,	-8);
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	2);	// $3
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	4);
    design.addCommand(5, ZRF.PARAM,	3);	// $4
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.JUMP,	-5);
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.IN_ZONE,	0);	// fortress
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.IN_ZONE,	0);	// fortress
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.IN_ZONE,	3);	// cross
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	0);	// $1
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.IN_ZONE,	3);	// cross
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addPiece("Soldier", 0, 800);
    design.addMove(0, 0, [9], 0);
    design.addMove(0, 0, [6], 0);
    design.addMove(0, 1, [3], 0);
    design.addMove(0, 1, [5], 0);

    design.addPiece("Horse", 1, 3350);
    design.addMove(1, 2, [9, 8], 0);
    design.addMove(1, 2, [9, 7], 0);
    design.addMove(1, 2, [3, 4], 0);
    design.addMove(1, 2, [3, 2], 0);
    design.addMove(1, 2, [6, 8], 0);
    design.addMove(1, 2, [5, 7], 0);
    design.addMove(1, 2, [6, 4], 0);
    design.addMove(1, 2, [5, 2], 0);

    design.addPiece("Elephant", 2, 1500);
    design.addMove(2, 3, [9, 9], 0);
    design.addMove(2, 3, [5, 5], 0);
    design.addMove(2, 3, [6, 6], 0);
    design.addMove(2, 3, [3, 3], 0);

    design.addPiece("Chariot", 3, 5500);
    design.addMove(3, 4, [9, 9], 0);
    design.addMove(3, 4, [3, 3], 0);
    design.addMove(3, 4, [6, 6], 0);
    design.addMove(3, 4, [5, 5], 0);

    design.addPiece("Cannon", 4, 4000);
    design.addMove(4, 5, [9, 9, 9, 9], 0);
    design.addMove(4, 5, [3, 3, 3, 3], 0);
    design.addMove(4, 5, [6, 6, 6, 6], 0);
    design.addMove(4, 5, [5, 5, 5, 5], 0);

    design.addPiece("Dun", 5, 400);
    design.addMove(5, 0, [7], 0);
    design.addMove(5, 0, [4], 0);
    design.addMove(5, 0, [8], 0);
    design.addMove(5, 0, [2], 0);

    design.addPiece("Mandarin", 6, 800);
    design.addMove(6, 6, [9], 0);
    design.addMove(6, 6, [5], 0);
    design.addMove(6, 6, [6], 0);
    design.addMove(6, 6, [3], 0);

    design.addPiece("General", 7, 600000);
    design.addMove(7, 6, [9], 0);
    design.addMove(7, 6, [3], 0);
    design.addMove(7, 6, [6], 0);
    design.addMove(7, 6, [5], 0);
    design.addMove(7, 7, [7], 0);
    design.addMove(7, 7, [4], 0);
    design.addMove(7, 7, [8], 0);
    design.addMove(7, 7, [2], 0);

    design.setup("Red", "Soldier", 112);
    design.setup("Red", "Soldier", 92);
    design.setup("Red", "Soldier", 72);
    design.setup("Red", "Soldier", 52);
    design.setup("Red", "Soldier", 32);
    design.setup("Red", "Horse", 117);
    design.setup("Red", "Horse", 87);
    design.setup("Red", "Elephant", 118);
    design.setup("Red", "Elephant", 98);
    design.setup("Red", "Chariot", 114);
    design.setup("Red", "Chariot", 54);
    design.setup("Red", "Cannon", 116);
    design.setup("Red", "Cannon", 76);
    design.setup("Red", "Dun", 94);
    design.setup("Red", "Dun", 74);
    design.setup("Red", "Mandarin", 119);
    design.setup("Red", "Mandarin", 109);
    design.setup("Red", "General", 120);
    design.setup("Black", "Soldier", 88);
    design.setup("Black", "Soldier", 68);
    design.setup("Black", "Soldier", 48);
    design.setup("Black", "Soldier", 28);
    design.setup("Black", "Soldier", 8);
    design.setup("Black", "Horse", 3);
    design.setup("Black", "Horse", 33);
    design.setup("Black", "Elephant", 2);
    design.setup("Black", "Elephant", 22);
    design.setup("Black", "Chariot", 6);
    design.setup("Black", "Chariot", 66);
    design.setup("Black", "Cannon", 4);
    design.setup("Black", "Cannon", 44);
    design.setup("Black", "Dun", 46);
    design.setup("Black", "Dun", 26);
    design.setup("Black", "Mandarin", 1);
    design.setup("Black", "Mandarin", 11);
    design.setup("Black", "General", 0);
}

Dagaz.View.configure = function(view) {
    view.defBoard3D(670, 672, 1, -3, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "Board");

    const modelPath = '../res/fairy';
    const white = '#FFFF63';
    const black = '#333333';

    view.defPieceModel(0, 1, modelPath, 'pawn', white);
    view.defPieceModel(0, 2, modelPath, 'pawn', black);
    view.defPieceModel(1, 1, modelPath, 'knight', white);
    view.defPieceModel(1, 2, modelPath, 'knight', black);
    view.defPieceModel(2, 1, modelPath, 'elephant', white);
    view.defPieceModel(2, 2, modelPath, 'elephant', black);
    view.defPieceModel(3, 1, modelPath, 'rook', white);
    view.defPieceModel(3, 2, modelPath, 'rook', black);
    view.defPieceModel(4, 1, modelPath, 'cannon', white);
    view.defPieceModel(4, 2, modelPath, 'cannon', black);
    view.defPieceModel(5, 1, modelPath, 'admiral', white);
    view.defPieceModel(5, 2, modelPath, 'admiral', black);
    view.defPieceModel(6, 1, modelPath, 'queen', white);
    view.defPieceModel(6, 2, modelPath, 'queen', black);
    view.defPieceModel(7, 1, modelPath, 'king', white);
    view.defPieceModel(7, 2, modelPath, 'king', black);

    view.setCamera(0, 0, 0, 87, 250, 231);

    view.defControl("InfoControl", "1890 Tong Xie Geng", true);
    view.defControl("ResControl", "Western", true, Dagaz.Controller.go, Dagaz.AI.ON ? 'wojiaoqi.htm' : 'wojiaoqi-board.htm');
    view.defControl("UndoControl", "Undo Move", false, Dagaz.Controller.undo);
    view.defControl("NewControl", "New Game", true, Dagaz.Controller.newGame);
    view.defControl(Dagaz.AI.ON ? "AiOnControl" : "AiOffControl", Dagaz.AI.ON ? "AI" : "No AI", true, Dagaz.Controller.go, Dagaz.AI.ON ? 'wojiaoqi-3d-board.htm' : 'wojiaoqi-3d.htm');
    view.defControl(Dagaz.Controller.soundOff ? ["SoundOffControl", "SoundOnControl"] : ["SoundOnControl", "SoundOffControl"], "Sound", true, Dagaz.Controller.switchSound);
    view.defControl("RedoControl", "Redo Move", false, Dagaz.Controller.redo);
 
    view.defPosition("a11", -300, -300, 42, 42, 0);
    view.defPosition("b11", -240, -300, 42, 42, 0);
    view.defPosition("c11", -180, -300, 42, 42, 0);
    view.defPosition("d11", -120, -300, 42, 42, 0);
    view.defPosition("e11", -60, -300, 42, 42, 0);
    view.defPosition("f11", 0, -300, 42, 42, 0);
    view.defPosition("g11", 60, -300, 42, 42, 0);
    view.defPosition("h11", 120, -300, 42, 42, 0);
    view.defPosition("i11", 180, -300, 42, 42, 0);
    view.defPosition("j11", 240, -300, 42, 42, 0);
    view.defPosition("k11", 300, -300, 42, 42, 0);
    view.defPosition("a10", -300, -240, 42, 42, 0);
    view.defPosition("b10", -240, -240, 42, 42, 0);
    view.defPosition("c10", -180, -240, 42, 42, 0);
    view.defPosition("d10", -120, -240, 42, 42, 0);
    view.defPosition("e10", -60, -240, 42, 42, 0);
    view.defPosition("f10", 0, -240, 42, 42, 0);
    view.defPosition("g10", 60, -240, 42, 42, 0);
    view.defPosition("h10", 120, -240, 42, 42, 0);
    view.defPosition("i10", 180, -240, 42, 42, 0);
    view.defPosition("j10", 240, -240, 42, 42, 0);
    view.defPosition("k10", 300, -240, 42, 42, 0);
    view.defPosition("a9", -300, -180, 42, 42, 0);
    view.defPosition("b9", -240, -180, 42, 42, 0);
    view.defPosition("c9", -180, -180, 42, 42, 0);
    view.defPosition("d9", -120, -180, 42, 42, 0);
    view.defPosition("e9", -60, -180, 42, 42, 0);
    view.defPosition("f9", 0, -180, 42, 42, 0);
    view.defPosition("g9", 60, -180, 42, 42, 0);
    view.defPosition("h9", 120, -180, 42, 42, 0);
    view.defPosition("i9", 180, -180, 42, 42, 0);
    view.defPosition("j9", 240, -180, 42, 42, 0);
    view.defPosition("k9", 300, -180, 42, 42, 0);
    view.defPosition("a8", -300, -120, 42, 42, 0);
    view.defPosition("b8", -240, -120, 42, 42, 0);
    view.defPosition("c8", -180, -120, 42, 42, 0);
    view.defPosition("d8", -120, -120, 42, 42, 0);
    view.defPosition("e8", -60, -120, 42, 42, 0);
    view.defPosition("f8", 0, -120, 42, 42, 0);
    view.defPosition("g8", 60, -120, 42, 42, 0);
    view.defPosition("h8", 120, -120, 42, 42, 0);
    view.defPosition("i8", 180, -120, 42, 42, 0);
    view.defPosition("j8", 240, -120, 42, 42, 0);
    view.defPosition("k8", 300, -120, 42, 42, 0);
    view.defPosition("a7", -300, -60, 42, 42, 0);
    view.defPosition("b7", -240, -60, 42, 42, 0);
    view.defPosition("c7", -180, -60, 42, 42, 0);
    view.defPosition("d7", -120, -60, 42, 42, 0);
    view.defPosition("e7", -60, -60, 42, 42, 0);
    view.defPosition("f7", 0, -60, 42, 42, 0);
    view.defPosition("g7", 60, -60, 42, 42, 0);
    view.defPosition("h7", 120, -60, 42, 42, 0);
    view.defPosition("i7", 180, -60, 42, 42, 0);
    view.defPosition("j7", 240, -60, 42, 42, 0);
    view.defPosition("k7", 300, -60, 42, 42, 0);
    view.defPosition("a6", -300, 0, 42, 42, 0);
    view.defPosition("b6", -240, 0, 42, 42, 0);
    view.defPosition("c6", -180, 0, 42, 42, 0);
    view.defPosition("d6", -120, 0, 42, 42, 0);
    view.defPosition("e6", -60, 0, 42, 42, 0);
    view.defPosition("f6", 0, 0, 42, 42, 0);
    view.defPosition("g6", 60, 0, 42, 42, 0);
    view.defPosition("h6", 120, 0, 42, 42, 0);
    view.defPosition("i6", 180, 0, 42, 42, 0);
    view.defPosition("j6", 240, 0, 42, 42, 0);
    view.defPosition("k6", 300, 0, 42, 42, 0);
    view.defPosition("a5", -300, 60, 42, 42, 0);
    view.defPosition("b5", -240, 60, 42, 42, 0);
    view.defPosition("c5", -180, 60, 42, 42, 0);
    view.defPosition("d5", -120, 60, 42, 42, 0);
    view.defPosition("e5", -60, 60, 42, 42, 0);
    view.defPosition("f5", 0, 60, 42, 42, 0);
    view.defPosition("g5", 60, 60, 42, 42, 0);
    view.defPosition("h5", 120, 60, 42, 42, 0);
    view.defPosition("i5", 180, 60, 42, 42, 0);
    view.defPosition("j5", 240, 60, 42, 42, 0);
    view.defPosition("k5", 300, 60, 42, 42, 0);
    view.defPosition("a4", -300, 120, 42, 42, 0);
    view.defPosition("b4", -240, 120, 42, 42, 0);
    view.defPosition("c4", -180, 120, 42, 42, 0);
    view.defPosition("d4", -120, 120, 42, 42, 0);
    view.defPosition("e4", -60, 120, 42, 42, 0);
    view.defPosition("f4", 0, 120, 42, 42, 0);
    view.defPosition("g4", 60, 120, 42, 42, 0);
    view.defPosition("h4", 120, 120, 42, 42, 0);
    view.defPosition("i4", 180, 120, 42, 42, 0);
    view.defPosition("j4", 240, 120, 42, 42, 0);
    view.defPosition("k4", 300, 120, 42, 42, 0);
    view.defPosition("a3", -300, 180, 42, 42, 0);
    view.defPosition("b3", -240, 180, 42, 42, 0);
    view.defPosition("c3", -180, 180, 42, 42, 0);
    view.defPosition("d3", -120, 180, 42, 42, 0);
    view.defPosition("e3", -60, 180, 42, 42, 0);
    view.defPosition("f3", 0, 180, 42, 42, 0);
    view.defPosition("g3", 60, 180, 42, 42, 0);
    view.defPosition("h3", 120, 180, 42, 42, 0);
    view.defPosition("i3", 180, 180, 42, 42, 0);
    view.defPosition("j3", 240, 180, 42, 42, 0);
    view.defPosition("k3", 300, 180, 42, 42, 0);
    view.defPosition("a2", -300, 240, 42, 42, 0);
    view.defPosition("b2", -240, 240, 42, 42, 0);
    view.defPosition("c2", -180, 240, 42, 42, 0);
    view.defPosition("d2", -120, 240, 42, 42, 0);
    view.defPosition("e2", -60, 240, 42, 42, 0);
    view.defPosition("f2", 0, 240, 42, 42, 0);
    view.defPosition("g2", 60, 240, 42, 42, 0);
    view.defPosition("h2", 120, 240, 42, 42, 0);
    view.defPosition("i2", 180, 240, 42, 42, 0);
    view.defPosition("j2", 240, 240, 42, 42, 0);
    view.defPosition("k2", 300, 240, 42, 42, 0);
    view.defPosition("a1", -300, 300, 42, 42, 0);
    view.defPosition("b1", -240, 300, 42, 42, 0);
    view.defPosition("c1", -180, 300, 42, 42, 0);
    view.defPosition("d1", -120, 300, 42, 42, 0);
    view.defPosition("e1", -60, 300, 42, 42, 0);
    view.defPosition("f1", 0, 300, 42, 42, 0);
    view.defPosition("g1", 60, 300, 42, 42, 0);
    view.defPosition("h1", 120, 300, 42, 42, 0);
    view.defPosition("i1", 180, 300, 42, 42, 0);
    view.defPosition("j1", 240, 300, 42, 42, 0);
    view.defPosition("k1", 300, 300, 42, 42, 0);
}
