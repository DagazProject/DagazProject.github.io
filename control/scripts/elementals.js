Dagaz.Model.WIDTH  = 10;
Dagaz.Model.HEIGHT = 10;

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
    Dagaz.Controller.addSound(0, "../sounds/card.ogg", true);
    Dagaz.Controller.addSound(2, "../sounds/tadam.wav", true);
    Dagaz.Controller.addSound(3, "../sounds/loss.wav", true);
    Dagaz.Controller.addSound(10, "../sounds/freeze.wav", true);
    Dagaz.Controller.addSound(11, "../sounds/fire.wav", true);
    Dagaz.Controller.addSound(12, "../sounds/roll.ogg", true);
}

Dagaz.Model.BuildDesign = function(design) {
    design.checkVersion("z2j", "2");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-blink", "true");

    design.addDirection("se"); // 0
    design.addDirection("s");  // 1
    design.addDirection("sw"); // 2
    design.addDirection("e");  // 3
    design.addDirection("ne"); // 4
    design.addDirection("w");  // 5
    design.addDirection("nw"); // 6
    design.addDirection("n");  // 7

    design.addPlayer("Light", [6, 7, 4, 5, 2, 3, 0, 1]);
    design.addPlayer("Dark", [0, 1, 2, 3, 4, 5, 6, 7]);

    design.addTurn(1, [0, 2, 3, 4]);
    design.addTurn(2, [0, 2, 3, 4]);

    design.addPosition("a10", [11, 10, 0, 1, 0, 0, 0, 0]);
    design.addPosition("b10", [11, 10, 9, 1, 0, -1, 0, 0]);
    design.addPosition("c10", [11, 10, 9, 1, 0, -1, 0, 0]);
    design.addPosition("d10", [11, 10, 9, 1, 0, -1, 0, 0]);
    design.addPosition("e10", [11, 10, 9, 1, 0, -1, 0, 0]);
    design.addPosition("f10", [11, 10, 9, 1, 0, -1, 0, 0]);
    design.addPosition("g10", [11, 10, 9, 1, 0, -1, 0, 0]);
    design.addPosition("h10", [11, 10, 9, 1, 0, -1, 0, 0]);
    design.addPosition("i10", [11, 10, 9, 1, 0, -1, 0, 0]);
    design.addPosition("j10", [0, 10, 9, 0, 0, -1, 0, 0]);
    design.addPosition("a9", [11, 10, 0, 1, -9, 0, 0, -10]);
    design.addPosition("b9", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("c9", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("d9", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("e9", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("f9", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("g9", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("h9", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("i9", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("j9", [0, 10, 9, 0, 0, -1, -11, -10]);
    design.addPosition("a8", [11, 10, 0, 1, -9, 0, 0, -10]);
    design.addPosition("b8", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("c8", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("d8", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("e8", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("f8", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("g8", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("h8", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("i8", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("j8", [0, 10, 9, 0, 0, -1, -11, -10]);
    design.addPosition("a7", [11, 10, 0, 1, -9, 0, 0, -10]);
    design.addPosition("b7", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("c7", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("d7", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("e7", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("f7", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("g7", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("h7", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("i7", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("j7", [0, 10, 9, 0, 0, -1, -11, -10]);
    design.addPosition("a6", [11, 10, 0, 1, -9, 0, 0, -10]);
    design.addPosition("b6", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("c6", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("d6", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("e6", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("f6", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("g6", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("h6", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("i6", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("j6", [0, 10, 9, 0, 0, -1, -11, -10]);
    design.addPosition("a5", [11, 10, 0, 1, -9, 0, 0, -10]);
    design.addPosition("b5", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("c5", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("d5", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("e5", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("f5", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("g5", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("h5", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("i5", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("j5", [0, 10, 9, 0, 0, -1, -11, -10]);
    design.addPosition("a4", [11, 10, 0, 1, -9, 0, 0, -10]);
    design.addPosition("b4", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("c4", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("d4", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("e4", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("f4", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("g4", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("h4", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("i4", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("j4", [0, 10, 9, 0, 0, -1, -11, -10]);
    design.addPosition("a3", [11, 10, 0, 1, -9, 0, 0, -10]);
    design.addPosition("b3", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("c3", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("d3", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("e3", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("f3", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("g3", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("h3", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("i3", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("j3", [0, 10, 9, 0, 0, -1, -11, -10]);
    design.addPosition("a2", [11, 10, 0, 1, -9, 0, 0, -10]);
    design.addPosition("b2", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("c2", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("d2", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("e2", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("f2", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("g2", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("h2", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("i2", [11, 10, 9, 1, -9, -1, -11, -10]);
    design.addPosition("j2", [0, 10, 9, 0, 0, -1, -11, -10]);
    design.addPosition("a1", [0, 0, 0, 1, -9, 0, 0, -10]);
    design.addPosition("b1", [0, 0, 0, 1, -9, -1, -11, -10]);
    design.addPosition("c1", [0, 0, 0, 1, -9, -1, -11, -10]);
    design.addPosition("d1", [0, 0, 0, 1, -9, -1, -11, -10]);
    design.addPosition("e1", [0, 0, 0, 1, -9, -1, -11, -10]);
    design.addPosition("f1", [0, 0, 0, 1, -9, -1, -11, -10]);
    design.addPosition("g1", [0, 0, 0, 1, -9, -1, -11, -10]);
    design.addPosition("h1", [0, 0, 0, 1, -9, -1, -11, -10]);
    design.addPosition("i1", [0, 0, 0, 1, -9, -1, -11, -10]);
    design.addPosition("j1", [0, 0, 0, 0, 0, -1, -11, -10]);

    design.addZone("center", 1, [54, 44, 55, 45]);
    design.addZone("center", 2, [54, 44, 55, 45]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.IF,	6);
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.JUMP,	-6);
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	41);
    design.addCommand(1, ZRF.LITERAL,	1);	// GB
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.LITERAL,	5);	// BYB
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.LITERAL,	9);	// YBB
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.LITERAL,	13);	// GBB
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.LITERAL,	17);	// BGB
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.LITERAL,	21);	// YGB
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.LITERAL,	25);	// GYB
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.LITERAL,	29);	// RB
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.LITERAL,	33);	// GRB
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.LITERAL,	37);	// RGB
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PROMOTE,	1);	// GB
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	41);
    design.addCommand(2, ZRF.LITERAL,	3);	// GD
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.LITERAL,	7);	// BYD
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.LITERAL,	11);	// YBD
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.LITERAL,	15);	// GBD
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.LITERAL,	19);	// BGD
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.LITERAL,	23);	// YGD
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.LITERAL,	27);	// GYD
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.LITERAL,	31);	// RD
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.LITERAL,	35);	// GRD
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.LITERAL,	39);	// RGD
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PROMOTE,	3);	// GD
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	41);
    design.addCommand(3, ZRF.LITERAL,	2);	// GC
    design.addCommand(3, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.LITERAL,	6);	// BYC
    design.addCommand(3, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.LITERAL,	10);	// YBC
    design.addCommand(3, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.LITERAL,	14);	// GBC
    design.addCommand(3, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.LITERAL,	18);	// BGC
    design.addCommand(3, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.LITERAL,	22);	// YGC
    design.addCommand(3, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.LITERAL,	26);	// GYC
    design.addCommand(3, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.LITERAL,	30);	// RC
    design.addCommand(3, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.LITERAL,	34);	// GRC
    design.addCommand(3, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.LITERAL,	38);	// RGC
    design.addCommand(3, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PROMOTE,	2);	// GC
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	41);
    design.addCommand(4, ZRF.LITERAL,	0);	// GA
    design.addCommand(4, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.LITERAL,	4);	// BYA
    design.addCommand(4, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.LITERAL,	8);	// YBA
    design.addCommand(4, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.LITERAL,	12);	// GBA
    design.addCommand(4, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.LITERAL,	16);	// BGA
    design.addCommand(4, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.LITERAL,	20);	// YGA
    design.addCommand(4, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.LITERAL,	24);	// GYA
    design.addCommand(4, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.LITERAL,	28);	// RA
    design.addCommand(4, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.LITERAL,	32);	// GRA
    design.addCommand(4, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.LITERAL,	36);	// RGA
    design.addCommand(4, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PROMOTE,	0);	// GA
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.IF,	50);
    design.addCommand(5, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	41);
    design.addCommand(5, ZRF.LITERAL,	0);	// GA
    design.addCommand(5, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.LITERAL,	4);	// BYA
    design.addCommand(5, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.LITERAL,	8);	// YBA
    design.addCommand(5, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.LITERAL,	12);	// GBA
    design.addCommand(5, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.LITERAL,	16);	// BGA
    design.addCommand(5, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.LITERAL,	20);	// YGA
    design.addCommand(5, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.LITERAL,	24);	// GYA
    design.addCommand(5, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.LITERAL,	28);	// RA
    design.addCommand(5, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.LITERAL,	32);	// GRA
    design.addCommand(5, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.LITERAL,	36);	// RGA
    design.addCommand(5, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FORK,	3);
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end
    design.addCommand(5, ZRF.PARAM,	1);	// $2
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.JUMP,	-50);
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.IF,	41);
    design.addCommand(6, ZRF.LITERAL,	1);	// GB
    design.addCommand(6, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.LITERAL,	5);	// BYB
    design.addCommand(6, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.LITERAL,	9);	// YBB
    design.addCommand(6, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.LITERAL,	13);	// GBB
    design.addCommand(6, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.LITERAL,	17);	// BGB
    design.addCommand(6, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.LITERAL,	21);	// YGB
    design.addCommand(6, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.LITERAL,	25);	// GYB
    design.addCommand(6, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.LITERAL,	29);	// RB
    design.addCommand(6, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.LITERAL,	33);	// GRB
    design.addCommand(6, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.LITERAL,	37);	// RGB
    design.addCommand(6, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PROMOTE,	5);	// BYB
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.PARAM,	0);	// $1
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	41);
    design.addCommand(7, ZRF.LITERAL,	3);	// GD
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.LITERAL,	7);	// BYD
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.LITERAL,	11);	// YBD
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.LITERAL,	15);	// GBD
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.LITERAL,	19);	// BGD
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.LITERAL,	23);	// YGD
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.LITERAL,	27);	// GYD
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.LITERAL,	31);	// RD
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.LITERAL,	35);	// GRD
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.LITERAL,	39);	// RGD
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PROMOTE,	11);	// YBD
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.ON_BOARD_DIR,	1);	// name
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.IF,	57);
    design.addCommand(8, ZRF.PARAM,	0);	// $1
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.IF,	4);
    design.addCommand(8, ZRF.FORK,	3);
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end
    design.addCommand(8, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.IF,	45);
    design.addCommand(8, ZRF.LITERAL,	0);	// GA
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	4);	// BYA
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	8);	// YBA
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	12);	// GBA
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	16);	// BGA
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	20);	// YGA
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	24);	// GYA
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	28);	// RA
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	32);	// GRA
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	36);	// RGA
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FORK,	4);
    design.addCommand(8, ZRF.MODE,	1);	// continue-type
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end
    design.addCommand(8, ZRF.JUMP,	-58);
    design.addCommand(8, ZRF.FUNCTION,	28);	// end

    design.addCommand(9, ZRF.FUNCTION,	24);	// from
    design.addCommand(9, ZRF.PARAM,	0);	// $1
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.IF,	8);
    design.addCommand(9, ZRF.FORK,	4);
    design.addCommand(9, ZRF.PROMOTE,	5);	// BYB
    design.addCommand(9, ZRF.FUNCTION,	25);	// to
    design.addCommand(9, ZRF.FUNCTION,	28);	// end
    design.addCommand(9, ZRF.PARAM,	1);	// $2
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.JUMP,	-9);
    design.addCommand(9, ZRF.FUNCTION,	28);	// end

    design.addCommand(10, ZRF.FUNCTION,	24);	// from
    design.addCommand(10, ZRF.PARAM,	0);	// $1
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(10, ZRF.FUNCTION,	0);	// not
    design.addCommand(10, ZRF.IF,	8);
    design.addCommand(10, ZRF.FORK,	4);
    design.addCommand(10, ZRF.PROMOTE,	11);	// YBD
    design.addCommand(10, ZRF.FUNCTION,	25);	// to
    design.addCommand(10, ZRF.FUNCTION,	28);	// end
    design.addCommand(10, ZRF.PARAM,	1);	// $2
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.JUMP,	-9);
    design.addCommand(10, ZRF.FUNCTION,	28);	// end

    design.addCommand(11, ZRF.FUNCTION,	24);	// from
    design.addCommand(11, ZRF.ON_BOARD_DIR,	0);	// name
    design.addCommand(11, ZRF.FUNCTION,	0);	// not
    design.addCommand(11, ZRF.IF,	52);
    design.addCommand(11, ZRF.PARAM,	0);	// $1
    design.addCommand(11, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(11, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(11, ZRF.FUNCTION,	0);	// not
    design.addCommand(11, ZRF.IF,	46);
    design.addCommand(11, ZRF.LITERAL,	1);	// GB
    design.addCommand(11, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(11, ZRF.FUNCTION,	0);	// not
    design.addCommand(11, ZRF.FUNCTION,	20);	// verify
    design.addCommand(11, ZRF.LITERAL,	5);	// BYB
    design.addCommand(11, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(11, ZRF.FUNCTION,	0);	// not
    design.addCommand(11, ZRF.FUNCTION,	20);	// verify
    design.addCommand(11, ZRF.LITERAL,	9);	// YBB
    design.addCommand(11, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(11, ZRF.FUNCTION,	0);	// not
    design.addCommand(11, ZRF.FUNCTION,	20);	// verify
    design.addCommand(11, ZRF.LITERAL,	13);	// GBB
    design.addCommand(11, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(11, ZRF.FUNCTION,	0);	// not
    design.addCommand(11, ZRF.FUNCTION,	20);	// verify
    design.addCommand(11, ZRF.LITERAL,	17);	// BGB
    design.addCommand(11, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(11, ZRF.FUNCTION,	0);	// not
    design.addCommand(11, ZRF.FUNCTION,	20);	// verify
    design.addCommand(11, ZRF.LITERAL,	21);	// YGB
    design.addCommand(11, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(11, ZRF.FUNCTION,	0);	// not
    design.addCommand(11, ZRF.FUNCTION,	20);	// verify
    design.addCommand(11, ZRF.LITERAL,	25);	// GYB
    design.addCommand(11, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(11, ZRF.FUNCTION,	0);	// not
    design.addCommand(11, ZRF.FUNCTION,	20);	// verify
    design.addCommand(11, ZRF.LITERAL,	29);	// RB
    design.addCommand(11, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(11, ZRF.FUNCTION,	0);	// not
    design.addCommand(11, ZRF.FUNCTION,	20);	// verify
    design.addCommand(11, ZRF.LITERAL,	33);	// GRB
    design.addCommand(11, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(11, ZRF.FUNCTION,	0);	// not
    design.addCommand(11, ZRF.FUNCTION,	20);	// verify
    design.addCommand(11, ZRF.LITERAL,	37);	// RGB
    design.addCommand(11, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(11, ZRF.FUNCTION,	0);	// not
    design.addCommand(11, ZRF.FUNCTION,	20);	// verify
    design.addCommand(11, ZRF.FORK,	5);
    design.addCommand(11, ZRF.PROMOTE,	5);	// BYB
    design.addCommand(11, ZRF.MODE,	1);	// continue-type
    design.addCommand(11, ZRF.FUNCTION,	25);	// to
    design.addCommand(11, ZRF.FUNCTION,	28);	// end
    design.addCommand(11, ZRF.JUMP,	-53);
    design.addCommand(11, ZRF.FUNCTION,	28);	// end

    design.addCommand(12, ZRF.FUNCTION,	24);	// from
    design.addCommand(12, ZRF.ON_BOARD_DIR,	2);	// name
    design.addCommand(12, ZRF.FUNCTION,	0);	// not
    design.addCommand(12, ZRF.IF,	52);
    design.addCommand(12, ZRF.PARAM,	0);	// $1
    design.addCommand(12, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(12, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(12, ZRF.FUNCTION,	0);	// not
    design.addCommand(12, ZRF.IF,	46);
    design.addCommand(12, ZRF.LITERAL,	3);	// GD
    design.addCommand(12, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(12, ZRF.FUNCTION,	0);	// not
    design.addCommand(12, ZRF.FUNCTION,	20);	// verify
    design.addCommand(12, ZRF.LITERAL,	7);	// BYD
    design.addCommand(12, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(12, ZRF.FUNCTION,	0);	// not
    design.addCommand(12, ZRF.FUNCTION,	20);	// verify
    design.addCommand(12, ZRF.LITERAL,	11);	// YBD
    design.addCommand(12, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(12, ZRF.FUNCTION,	0);	// not
    design.addCommand(12, ZRF.FUNCTION,	20);	// verify
    design.addCommand(12, ZRF.LITERAL,	15);	// GBD
    design.addCommand(12, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(12, ZRF.FUNCTION,	0);	// not
    design.addCommand(12, ZRF.FUNCTION,	20);	// verify
    design.addCommand(12, ZRF.LITERAL,	19);	// BGD
    design.addCommand(12, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(12, ZRF.FUNCTION,	0);	// not
    design.addCommand(12, ZRF.FUNCTION,	20);	// verify
    design.addCommand(12, ZRF.LITERAL,	23);	// YGD
    design.addCommand(12, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(12, ZRF.FUNCTION,	0);	// not
    design.addCommand(12, ZRF.FUNCTION,	20);	// verify
    design.addCommand(12, ZRF.LITERAL,	27);	// GYD
    design.addCommand(12, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(12, ZRF.FUNCTION,	0);	// not
    design.addCommand(12, ZRF.FUNCTION,	20);	// verify
    design.addCommand(12, ZRF.LITERAL,	31);	// RD
    design.addCommand(12, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(12, ZRF.FUNCTION,	0);	// not
    design.addCommand(12, ZRF.FUNCTION,	20);	// verify
    design.addCommand(12, ZRF.LITERAL,	35);	// GRD
    design.addCommand(12, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(12, ZRF.FUNCTION,	0);	// not
    design.addCommand(12, ZRF.FUNCTION,	20);	// verify
    design.addCommand(12, ZRF.LITERAL,	39);	// RGD
    design.addCommand(12, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(12, ZRF.FUNCTION,	0);	// not
    design.addCommand(12, ZRF.FUNCTION,	20);	// verify
    design.addCommand(12, ZRF.FORK,	5);
    design.addCommand(12, ZRF.PROMOTE,	11);	// YBD
    design.addCommand(12, ZRF.MODE,	1);	// continue-type
    design.addCommand(12, ZRF.FUNCTION,	25);	// to
    design.addCommand(12, ZRF.FUNCTION,	28);	// end
    design.addCommand(12, ZRF.JUMP,	-53);
    design.addCommand(12, ZRF.FUNCTION,	28);	// end

    design.addCommand(13, ZRF.FUNCTION,	24);	// from
    design.addCommand(13, ZRF.PARAM,	0);	// $1
    design.addCommand(13, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(13, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(13, ZRF.IF,	50);
    design.addCommand(13, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(13, ZRF.FUNCTION,	0);	// not
    design.addCommand(13, ZRF.IF,	41);
    design.addCommand(13, ZRF.LITERAL,	1);	// GB
    design.addCommand(13, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(13, ZRF.FUNCTION,	0);	// not
    design.addCommand(13, ZRF.FUNCTION,	20);	// verify
    design.addCommand(13, ZRF.LITERAL,	5);	// BYB
    design.addCommand(13, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(13, ZRF.FUNCTION,	0);	// not
    design.addCommand(13, ZRF.FUNCTION,	20);	// verify
    design.addCommand(13, ZRF.LITERAL,	9);	// YBB
    design.addCommand(13, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(13, ZRF.FUNCTION,	0);	// not
    design.addCommand(13, ZRF.FUNCTION,	20);	// verify
    design.addCommand(13, ZRF.LITERAL,	13);	// GBB
    design.addCommand(13, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(13, ZRF.FUNCTION,	0);	// not
    design.addCommand(13, ZRF.FUNCTION,	20);	// verify
    design.addCommand(13, ZRF.LITERAL,	17);	// BGB
    design.addCommand(13, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(13, ZRF.FUNCTION,	0);	// not
    design.addCommand(13, ZRF.FUNCTION,	20);	// verify
    design.addCommand(13, ZRF.LITERAL,	21);	// YGB
    design.addCommand(13, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(13, ZRF.FUNCTION,	0);	// not
    design.addCommand(13, ZRF.FUNCTION,	20);	// verify
    design.addCommand(13, ZRF.LITERAL,	25);	// GYB
    design.addCommand(13, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(13, ZRF.FUNCTION,	0);	// not
    design.addCommand(13, ZRF.FUNCTION,	20);	// verify
    design.addCommand(13, ZRF.LITERAL,	29);	// RB
    design.addCommand(13, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(13, ZRF.FUNCTION,	0);	// not
    design.addCommand(13, ZRF.FUNCTION,	20);	// verify
    design.addCommand(13, ZRF.LITERAL,	33);	// GRB
    design.addCommand(13, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(13, ZRF.FUNCTION,	0);	// not
    design.addCommand(13, ZRF.FUNCTION,	20);	// verify
    design.addCommand(13, ZRF.LITERAL,	37);	// RGB
    design.addCommand(13, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(13, ZRF.FUNCTION,	0);	// not
    design.addCommand(13, ZRF.FUNCTION,	20);	// verify
    design.addCommand(13, ZRF.FORK,	3);
    design.addCommand(13, ZRF.FUNCTION,	25);	// to
    design.addCommand(13, ZRF.FUNCTION,	28);	// end
    design.addCommand(13, ZRF.PARAM,	1);	// $2
    design.addCommand(13, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(13, ZRF.JUMP,	-50);
    design.addCommand(13, ZRF.FUNCTION,	28);	// end

    design.addCommand(14, ZRF.FUNCTION,	24);	// from
    design.addCommand(14, ZRF.PARAM,	0);	// $1
    design.addCommand(14, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(14, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(14, ZRF.FUNCTION,	0);	// not
    design.addCommand(14, ZRF.FUNCTION,	20);	// verify
    design.addCommand(14, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(14, ZRF.FUNCTION,	0);	// not
    design.addCommand(14, ZRF.IF,	41);
    design.addCommand(14, ZRF.LITERAL,	2);	// GC
    design.addCommand(14, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(14, ZRF.FUNCTION,	0);	// not
    design.addCommand(14, ZRF.FUNCTION,	20);	// verify
    design.addCommand(14, ZRF.LITERAL,	6);	// BYC
    design.addCommand(14, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(14, ZRF.FUNCTION,	0);	// not
    design.addCommand(14, ZRF.FUNCTION,	20);	// verify
    design.addCommand(14, ZRF.LITERAL,	10);	// YBC
    design.addCommand(14, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(14, ZRF.FUNCTION,	0);	// not
    design.addCommand(14, ZRF.FUNCTION,	20);	// verify
    design.addCommand(14, ZRF.LITERAL,	14);	// GBC
    design.addCommand(14, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(14, ZRF.FUNCTION,	0);	// not
    design.addCommand(14, ZRF.FUNCTION,	20);	// verify
    design.addCommand(14, ZRF.LITERAL,	18);	// BGC
    design.addCommand(14, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(14, ZRF.FUNCTION,	0);	// not
    design.addCommand(14, ZRF.FUNCTION,	20);	// verify
    design.addCommand(14, ZRF.LITERAL,	22);	// YGC
    design.addCommand(14, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(14, ZRF.FUNCTION,	0);	// not
    design.addCommand(14, ZRF.FUNCTION,	20);	// verify
    design.addCommand(14, ZRF.LITERAL,	26);	// GYC
    design.addCommand(14, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(14, ZRF.FUNCTION,	0);	// not
    design.addCommand(14, ZRF.FUNCTION,	20);	// verify
    design.addCommand(14, ZRF.LITERAL,	30);	// RC
    design.addCommand(14, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(14, ZRF.FUNCTION,	0);	// not
    design.addCommand(14, ZRF.FUNCTION,	20);	// verify
    design.addCommand(14, ZRF.LITERAL,	34);	// GRC
    design.addCommand(14, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(14, ZRF.FUNCTION,	0);	// not
    design.addCommand(14, ZRF.FUNCTION,	20);	// verify
    design.addCommand(14, ZRF.LITERAL,	38);	// RGC
    design.addCommand(14, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(14, ZRF.FUNCTION,	0);	// not
    design.addCommand(14, ZRF.FUNCTION,	20);	// verify
    design.addCommand(14, ZRF.PROMOTE,	6);	// BYC
    design.addCommand(14, ZRF.FUNCTION,	25);	// to
    design.addCommand(14, ZRF.FUNCTION,	28);	// end

    design.addCommand(15, ZRF.FUNCTION,	24);	// from
    design.addCommand(15, ZRF.PARAM,	0);	// $1
    design.addCommand(15, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(15, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(15, ZRF.FUNCTION,	0);	// not
    design.addCommand(15, ZRF.FUNCTION,	20);	// verify
    design.addCommand(15, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(15, ZRF.FUNCTION,	0);	// not
    design.addCommand(15, ZRF.IF,	41);
    design.addCommand(15, ZRF.LITERAL,	0);	// GA
    design.addCommand(15, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(15, ZRF.FUNCTION,	0);	// not
    design.addCommand(15, ZRF.FUNCTION,	20);	// verify
    design.addCommand(15, ZRF.LITERAL,	4);	// BYA
    design.addCommand(15, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(15, ZRF.FUNCTION,	0);	// not
    design.addCommand(15, ZRF.FUNCTION,	20);	// verify
    design.addCommand(15, ZRF.LITERAL,	8);	// YBA
    design.addCommand(15, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(15, ZRF.FUNCTION,	0);	// not
    design.addCommand(15, ZRF.FUNCTION,	20);	// verify
    design.addCommand(15, ZRF.LITERAL,	12);	// GBA
    design.addCommand(15, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(15, ZRF.FUNCTION,	0);	// not
    design.addCommand(15, ZRF.FUNCTION,	20);	// verify
    design.addCommand(15, ZRF.LITERAL,	16);	// BGA
    design.addCommand(15, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(15, ZRF.FUNCTION,	0);	// not
    design.addCommand(15, ZRF.FUNCTION,	20);	// verify
    design.addCommand(15, ZRF.LITERAL,	20);	// YGA
    design.addCommand(15, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(15, ZRF.FUNCTION,	0);	// not
    design.addCommand(15, ZRF.FUNCTION,	20);	// verify
    design.addCommand(15, ZRF.LITERAL,	24);	// GYA
    design.addCommand(15, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(15, ZRF.FUNCTION,	0);	// not
    design.addCommand(15, ZRF.FUNCTION,	20);	// verify
    design.addCommand(15, ZRF.LITERAL,	28);	// RA
    design.addCommand(15, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(15, ZRF.FUNCTION,	0);	// not
    design.addCommand(15, ZRF.FUNCTION,	20);	// verify
    design.addCommand(15, ZRF.LITERAL,	32);	// GRA
    design.addCommand(15, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(15, ZRF.FUNCTION,	0);	// not
    design.addCommand(15, ZRF.FUNCTION,	20);	// verify
    design.addCommand(15, ZRF.LITERAL,	36);	// RGA
    design.addCommand(15, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(15, ZRF.FUNCTION,	0);	// not
    design.addCommand(15, ZRF.FUNCTION,	20);	// verify
    design.addCommand(15, ZRF.PROMOTE,	4);	// BYA
    design.addCommand(15, ZRF.FUNCTION,	25);	// to
    design.addCommand(15, ZRF.FUNCTION,	28);	// end

    design.addCommand(16, ZRF.FUNCTION,	24);	// from
    design.addCommand(16, ZRF.ON_BOARD_DIR,	0);	// name
    design.addCommand(16, ZRF.FUNCTION,	0);	// not
    design.addCommand(16, ZRF.IF,	57);
    design.addCommand(16, ZRF.PARAM,	0);	// $1
    design.addCommand(16, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(16, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(16, ZRF.FUNCTION,	0);	// not
    design.addCommand(16, ZRF.IF,	4);
    design.addCommand(16, ZRF.FORK,	3);
    design.addCommand(16, ZRF.FUNCTION,	25);	// to
    design.addCommand(16, ZRF.FUNCTION,	28);	// end
    design.addCommand(16, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(16, ZRF.FUNCTION,	0);	// not
    design.addCommand(16, ZRF.IF,	45);
    design.addCommand(16, ZRF.LITERAL,	1);	// GB
    design.addCommand(16, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(16, ZRF.FUNCTION,	0);	// not
    design.addCommand(16, ZRF.FUNCTION,	20);	// verify
    design.addCommand(16, ZRF.LITERAL,	5);	// BYB
    design.addCommand(16, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(16, ZRF.FUNCTION,	0);	// not
    design.addCommand(16, ZRF.FUNCTION,	20);	// verify
    design.addCommand(16, ZRF.LITERAL,	9);	// YBB
    design.addCommand(16, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(16, ZRF.FUNCTION,	0);	// not
    design.addCommand(16, ZRF.FUNCTION,	20);	// verify
    design.addCommand(16, ZRF.LITERAL,	13);	// GBB
    design.addCommand(16, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(16, ZRF.FUNCTION,	0);	// not
    design.addCommand(16, ZRF.FUNCTION,	20);	// verify
    design.addCommand(16, ZRF.LITERAL,	17);	// BGB
    design.addCommand(16, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(16, ZRF.FUNCTION,	0);	// not
    design.addCommand(16, ZRF.FUNCTION,	20);	// verify
    design.addCommand(16, ZRF.LITERAL,	21);	// YGB
    design.addCommand(16, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(16, ZRF.FUNCTION,	0);	// not
    design.addCommand(16, ZRF.FUNCTION,	20);	// verify
    design.addCommand(16, ZRF.LITERAL,	25);	// GYB
    design.addCommand(16, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(16, ZRF.FUNCTION,	0);	// not
    design.addCommand(16, ZRF.FUNCTION,	20);	// verify
    design.addCommand(16, ZRF.LITERAL,	29);	// RB
    design.addCommand(16, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(16, ZRF.FUNCTION,	0);	// not
    design.addCommand(16, ZRF.FUNCTION,	20);	// verify
    design.addCommand(16, ZRF.LITERAL,	33);	// GRB
    design.addCommand(16, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(16, ZRF.FUNCTION,	0);	// not
    design.addCommand(16, ZRF.FUNCTION,	20);	// verify
    design.addCommand(16, ZRF.LITERAL,	37);	// RGB
    design.addCommand(16, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(16, ZRF.FUNCTION,	0);	// not
    design.addCommand(16, ZRF.FUNCTION,	20);	// verify
    design.addCommand(16, ZRF.FORK,	4);
    design.addCommand(16, ZRF.MODE,	1);	// continue-type
    design.addCommand(16, ZRF.FUNCTION,	25);	// to
    design.addCommand(16, ZRF.FUNCTION,	28);	// end
    design.addCommand(16, ZRF.JUMP,	-58);
    design.addCommand(16, ZRF.FUNCTION,	28);	// end

    design.addCommand(17, ZRF.FUNCTION,	24);	// from
    design.addCommand(17, ZRF.PARAM,	0);	// $1
    design.addCommand(17, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(17, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(17, ZRF.FUNCTION,	0);	// not
    design.addCommand(17, ZRF.IF,	8);
    design.addCommand(17, ZRF.FORK,	4);
    design.addCommand(17, ZRF.PROMOTE,	6);	// BYC
    design.addCommand(17, ZRF.FUNCTION,	25);	// to
    design.addCommand(17, ZRF.FUNCTION,	28);	// end
    design.addCommand(17, ZRF.PARAM,	1);	// $2
    design.addCommand(17, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(17, ZRF.JUMP,	-9);
    design.addCommand(17, ZRF.FUNCTION,	28);	// end

    design.addCommand(18, ZRF.FUNCTION,	24);	// from
    design.addCommand(18, ZRF.PARAM,	0);	// $1
    design.addCommand(18, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(18, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(18, ZRF.FUNCTION,	0);	// not
    design.addCommand(18, ZRF.IF,	8);
    design.addCommand(18, ZRF.FORK,	4);
    design.addCommand(18, ZRF.PROMOTE,	4);	// BYA
    design.addCommand(18, ZRF.FUNCTION,	25);	// to
    design.addCommand(18, ZRF.FUNCTION,	28);	// end
    design.addCommand(18, ZRF.PARAM,	1);	// $2
    design.addCommand(18, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(18, ZRF.JUMP,	-9);
    design.addCommand(18, ZRF.FUNCTION,	28);	// end

    design.addCommand(19, ZRF.FUNCTION,	24);	// from
    design.addCommand(19, ZRF.ON_BOARD_DIR,	3);	// name
    design.addCommand(19, ZRF.FUNCTION,	0);	// not
    design.addCommand(19, ZRF.IF,	52);
    design.addCommand(19, ZRF.PARAM,	0);	// $1
    design.addCommand(19, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(19, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(19, ZRF.FUNCTION,	0);	// not
    design.addCommand(19, ZRF.IF,	46);
    design.addCommand(19, ZRF.LITERAL,	2);	// GC
    design.addCommand(19, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(19, ZRF.FUNCTION,	0);	// not
    design.addCommand(19, ZRF.FUNCTION,	20);	// verify
    design.addCommand(19, ZRF.LITERAL,	6);	// BYC
    design.addCommand(19, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(19, ZRF.FUNCTION,	0);	// not
    design.addCommand(19, ZRF.FUNCTION,	20);	// verify
    design.addCommand(19, ZRF.LITERAL,	10);	// YBC
    design.addCommand(19, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(19, ZRF.FUNCTION,	0);	// not
    design.addCommand(19, ZRF.FUNCTION,	20);	// verify
    design.addCommand(19, ZRF.LITERAL,	14);	// GBC
    design.addCommand(19, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(19, ZRF.FUNCTION,	0);	// not
    design.addCommand(19, ZRF.FUNCTION,	20);	// verify
    design.addCommand(19, ZRF.LITERAL,	18);	// BGC
    design.addCommand(19, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(19, ZRF.FUNCTION,	0);	// not
    design.addCommand(19, ZRF.FUNCTION,	20);	// verify
    design.addCommand(19, ZRF.LITERAL,	22);	// YGC
    design.addCommand(19, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(19, ZRF.FUNCTION,	0);	// not
    design.addCommand(19, ZRF.FUNCTION,	20);	// verify
    design.addCommand(19, ZRF.LITERAL,	26);	// GYC
    design.addCommand(19, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(19, ZRF.FUNCTION,	0);	// not
    design.addCommand(19, ZRF.FUNCTION,	20);	// verify
    design.addCommand(19, ZRF.LITERAL,	30);	// RC
    design.addCommand(19, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(19, ZRF.FUNCTION,	0);	// not
    design.addCommand(19, ZRF.FUNCTION,	20);	// verify
    design.addCommand(19, ZRF.LITERAL,	34);	// GRC
    design.addCommand(19, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(19, ZRF.FUNCTION,	0);	// not
    design.addCommand(19, ZRF.FUNCTION,	20);	// verify
    design.addCommand(19, ZRF.LITERAL,	38);	// RGC
    design.addCommand(19, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(19, ZRF.FUNCTION,	0);	// not
    design.addCommand(19, ZRF.FUNCTION,	20);	// verify
    design.addCommand(19, ZRF.FORK,	5);
    design.addCommand(19, ZRF.PROMOTE,	6);	// BYC
    design.addCommand(19, ZRF.MODE,	1);	// continue-type
    design.addCommand(19, ZRF.FUNCTION,	25);	// to
    design.addCommand(19, ZRF.FUNCTION,	28);	// end
    design.addCommand(19, ZRF.JUMP,	-53);
    design.addCommand(19, ZRF.FUNCTION,	28);	// end

    design.addCommand(20, ZRF.FUNCTION,	24);	// from
    design.addCommand(20, ZRF.ON_BOARD_DIR,	1);	// name
    design.addCommand(20, ZRF.FUNCTION,	0);	// not
    design.addCommand(20, ZRF.IF,	52);
    design.addCommand(20, ZRF.PARAM,	0);	// $1
    design.addCommand(20, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(20, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(20, ZRF.FUNCTION,	0);	// not
    design.addCommand(20, ZRF.IF,	46);
    design.addCommand(20, ZRF.LITERAL,	0);	// GA
    design.addCommand(20, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(20, ZRF.FUNCTION,	0);	// not
    design.addCommand(20, ZRF.FUNCTION,	20);	// verify
    design.addCommand(20, ZRF.LITERAL,	4);	// BYA
    design.addCommand(20, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(20, ZRF.FUNCTION,	0);	// not
    design.addCommand(20, ZRF.FUNCTION,	20);	// verify
    design.addCommand(20, ZRF.LITERAL,	8);	// YBA
    design.addCommand(20, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(20, ZRF.FUNCTION,	0);	// not
    design.addCommand(20, ZRF.FUNCTION,	20);	// verify
    design.addCommand(20, ZRF.LITERAL,	12);	// GBA
    design.addCommand(20, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(20, ZRF.FUNCTION,	0);	// not
    design.addCommand(20, ZRF.FUNCTION,	20);	// verify
    design.addCommand(20, ZRF.LITERAL,	16);	// BGA
    design.addCommand(20, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(20, ZRF.FUNCTION,	0);	// not
    design.addCommand(20, ZRF.FUNCTION,	20);	// verify
    design.addCommand(20, ZRF.LITERAL,	20);	// YGA
    design.addCommand(20, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(20, ZRF.FUNCTION,	0);	// not
    design.addCommand(20, ZRF.FUNCTION,	20);	// verify
    design.addCommand(20, ZRF.LITERAL,	24);	// GYA
    design.addCommand(20, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(20, ZRF.FUNCTION,	0);	// not
    design.addCommand(20, ZRF.FUNCTION,	20);	// verify
    design.addCommand(20, ZRF.LITERAL,	28);	// RA
    design.addCommand(20, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(20, ZRF.FUNCTION,	0);	// not
    design.addCommand(20, ZRF.FUNCTION,	20);	// verify
    design.addCommand(20, ZRF.LITERAL,	32);	// GRA
    design.addCommand(20, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(20, ZRF.FUNCTION,	0);	// not
    design.addCommand(20, ZRF.FUNCTION,	20);	// verify
    design.addCommand(20, ZRF.LITERAL,	36);	// RGA
    design.addCommand(20, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(20, ZRF.FUNCTION,	0);	// not
    design.addCommand(20, ZRF.FUNCTION,	20);	// verify
    design.addCommand(20, ZRF.FORK,	5);
    design.addCommand(20, ZRF.PROMOTE,	4);	// BYA
    design.addCommand(20, ZRF.MODE,	1);	// continue-type
    design.addCommand(20, ZRF.FUNCTION,	25);	// to
    design.addCommand(20, ZRF.FUNCTION,	28);	// end
    design.addCommand(20, ZRF.JUMP,	-53);
    design.addCommand(20, ZRF.FUNCTION,	28);	// end

    design.addCommand(21, ZRF.FUNCTION,	24);	// from
    design.addCommand(21, ZRF.PARAM,	0);	// $1
    design.addCommand(21, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(21, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(21, ZRF.IF,	50);
    design.addCommand(21, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(21, ZRF.FUNCTION,	0);	// not
    design.addCommand(21, ZRF.IF,	41);
    design.addCommand(21, ZRF.LITERAL,	2);	// GC
    design.addCommand(21, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(21, ZRF.FUNCTION,	0);	// not
    design.addCommand(21, ZRF.FUNCTION,	20);	// verify
    design.addCommand(21, ZRF.LITERAL,	6);	// BYC
    design.addCommand(21, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(21, ZRF.FUNCTION,	0);	// not
    design.addCommand(21, ZRF.FUNCTION,	20);	// verify
    design.addCommand(21, ZRF.LITERAL,	10);	// YBC
    design.addCommand(21, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(21, ZRF.FUNCTION,	0);	// not
    design.addCommand(21, ZRF.FUNCTION,	20);	// verify
    design.addCommand(21, ZRF.LITERAL,	14);	// GBC
    design.addCommand(21, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(21, ZRF.FUNCTION,	0);	// not
    design.addCommand(21, ZRF.FUNCTION,	20);	// verify
    design.addCommand(21, ZRF.LITERAL,	18);	// BGC
    design.addCommand(21, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(21, ZRF.FUNCTION,	0);	// not
    design.addCommand(21, ZRF.FUNCTION,	20);	// verify
    design.addCommand(21, ZRF.LITERAL,	22);	// YGC
    design.addCommand(21, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(21, ZRF.FUNCTION,	0);	// not
    design.addCommand(21, ZRF.FUNCTION,	20);	// verify
    design.addCommand(21, ZRF.LITERAL,	26);	// GYC
    design.addCommand(21, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(21, ZRF.FUNCTION,	0);	// not
    design.addCommand(21, ZRF.FUNCTION,	20);	// verify
    design.addCommand(21, ZRF.LITERAL,	30);	// RC
    design.addCommand(21, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(21, ZRF.FUNCTION,	0);	// not
    design.addCommand(21, ZRF.FUNCTION,	20);	// verify
    design.addCommand(21, ZRF.LITERAL,	34);	// GRC
    design.addCommand(21, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(21, ZRF.FUNCTION,	0);	// not
    design.addCommand(21, ZRF.FUNCTION,	20);	// verify
    design.addCommand(21, ZRF.LITERAL,	38);	// RGC
    design.addCommand(21, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(21, ZRF.FUNCTION,	0);	// not
    design.addCommand(21, ZRF.FUNCTION,	20);	// verify
    design.addCommand(21, ZRF.FORK,	3);
    design.addCommand(21, ZRF.FUNCTION,	25);	// to
    design.addCommand(21, ZRF.FUNCTION,	28);	// end
    design.addCommand(21, ZRF.PARAM,	1);	// $2
    design.addCommand(21, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(21, ZRF.JUMP,	-50);
    design.addCommand(21, ZRF.FUNCTION,	28);	// end

    design.addCommand(22, ZRF.FUNCTION,	24);	// from
    design.addCommand(22, ZRF.PARAM,	0);	// $1
    design.addCommand(22, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(22, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(22, ZRF.FUNCTION,	0);	// not
    design.addCommand(22, ZRF.FUNCTION,	20);	// verify
    design.addCommand(22, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(22, ZRF.FUNCTION,	0);	// not
    design.addCommand(22, ZRF.IF,	41);
    design.addCommand(22, ZRF.LITERAL,	3);	// GD
    design.addCommand(22, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(22, ZRF.FUNCTION,	0);	// not
    design.addCommand(22, ZRF.FUNCTION,	20);	// verify
    design.addCommand(22, ZRF.LITERAL,	7);	// BYD
    design.addCommand(22, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(22, ZRF.FUNCTION,	0);	// not
    design.addCommand(22, ZRF.FUNCTION,	20);	// verify
    design.addCommand(22, ZRF.LITERAL,	11);	// YBD
    design.addCommand(22, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(22, ZRF.FUNCTION,	0);	// not
    design.addCommand(22, ZRF.FUNCTION,	20);	// verify
    design.addCommand(22, ZRF.LITERAL,	15);	// GBD
    design.addCommand(22, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(22, ZRF.FUNCTION,	0);	// not
    design.addCommand(22, ZRF.FUNCTION,	20);	// verify
    design.addCommand(22, ZRF.LITERAL,	19);	// BGD
    design.addCommand(22, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(22, ZRF.FUNCTION,	0);	// not
    design.addCommand(22, ZRF.FUNCTION,	20);	// verify
    design.addCommand(22, ZRF.LITERAL,	23);	// YGD
    design.addCommand(22, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(22, ZRF.FUNCTION,	0);	// not
    design.addCommand(22, ZRF.FUNCTION,	20);	// verify
    design.addCommand(22, ZRF.LITERAL,	27);	// GYD
    design.addCommand(22, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(22, ZRF.FUNCTION,	0);	// not
    design.addCommand(22, ZRF.FUNCTION,	20);	// verify
    design.addCommand(22, ZRF.LITERAL,	31);	// RD
    design.addCommand(22, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(22, ZRF.FUNCTION,	0);	// not
    design.addCommand(22, ZRF.FUNCTION,	20);	// verify
    design.addCommand(22, ZRF.LITERAL,	35);	// GRD
    design.addCommand(22, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(22, ZRF.FUNCTION,	0);	// not
    design.addCommand(22, ZRF.FUNCTION,	20);	// verify
    design.addCommand(22, ZRF.LITERAL,	39);	// RGD
    design.addCommand(22, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(22, ZRF.FUNCTION,	0);	// not
    design.addCommand(22, ZRF.FUNCTION,	20);	// verify
    design.addCommand(22, ZRF.PROMOTE,	7);	// BYD
    design.addCommand(22, ZRF.FUNCTION,	25);	// to
    design.addCommand(22, ZRF.FUNCTION,	28);	// end

    design.addCommand(23, ZRF.FUNCTION,	24);	// from
    design.addCommand(23, ZRF.ON_BOARD_DIR,	3);	// name
    design.addCommand(23, ZRF.FUNCTION,	0);	// not
    design.addCommand(23, ZRF.IF,	57);
    design.addCommand(23, ZRF.PARAM,	0);	// $1
    design.addCommand(23, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(23, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(23, ZRF.FUNCTION,	0);	// not
    design.addCommand(23, ZRF.IF,	4);
    design.addCommand(23, ZRF.FORK,	3);
    design.addCommand(23, ZRF.FUNCTION,	25);	// to
    design.addCommand(23, ZRF.FUNCTION,	28);	// end
    design.addCommand(23, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(23, ZRF.FUNCTION,	0);	// not
    design.addCommand(23, ZRF.IF,	45);
    design.addCommand(23, ZRF.LITERAL,	2);	// GC
    design.addCommand(23, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(23, ZRF.FUNCTION,	0);	// not
    design.addCommand(23, ZRF.FUNCTION,	20);	// verify
    design.addCommand(23, ZRF.LITERAL,	6);	// BYC
    design.addCommand(23, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(23, ZRF.FUNCTION,	0);	// not
    design.addCommand(23, ZRF.FUNCTION,	20);	// verify
    design.addCommand(23, ZRF.LITERAL,	10);	// YBC
    design.addCommand(23, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(23, ZRF.FUNCTION,	0);	// not
    design.addCommand(23, ZRF.FUNCTION,	20);	// verify
    design.addCommand(23, ZRF.LITERAL,	14);	// GBC
    design.addCommand(23, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(23, ZRF.FUNCTION,	0);	// not
    design.addCommand(23, ZRF.FUNCTION,	20);	// verify
    design.addCommand(23, ZRF.LITERAL,	18);	// BGC
    design.addCommand(23, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(23, ZRF.FUNCTION,	0);	// not
    design.addCommand(23, ZRF.FUNCTION,	20);	// verify
    design.addCommand(23, ZRF.LITERAL,	22);	// YGC
    design.addCommand(23, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(23, ZRF.FUNCTION,	0);	// not
    design.addCommand(23, ZRF.FUNCTION,	20);	// verify
    design.addCommand(23, ZRF.LITERAL,	26);	// GYC
    design.addCommand(23, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(23, ZRF.FUNCTION,	0);	// not
    design.addCommand(23, ZRF.FUNCTION,	20);	// verify
    design.addCommand(23, ZRF.LITERAL,	30);	// RC
    design.addCommand(23, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(23, ZRF.FUNCTION,	0);	// not
    design.addCommand(23, ZRF.FUNCTION,	20);	// verify
    design.addCommand(23, ZRF.LITERAL,	34);	// GRC
    design.addCommand(23, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(23, ZRF.FUNCTION,	0);	// not
    design.addCommand(23, ZRF.FUNCTION,	20);	// verify
    design.addCommand(23, ZRF.LITERAL,	38);	// RGC
    design.addCommand(23, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(23, ZRF.FUNCTION,	0);	// not
    design.addCommand(23, ZRF.FUNCTION,	20);	// verify
    design.addCommand(23, ZRF.FORK,	4);
    design.addCommand(23, ZRF.MODE,	1);	// continue-type
    design.addCommand(23, ZRF.FUNCTION,	25);	// to
    design.addCommand(23, ZRF.FUNCTION,	28);	// end
    design.addCommand(23, ZRF.JUMP,	-58);
    design.addCommand(23, ZRF.FUNCTION,	28);	// end

    design.addCommand(24, ZRF.FUNCTION,	24);	// from
    design.addCommand(24, ZRF.PARAM,	0);	// $1
    design.addCommand(24, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(24, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(24, ZRF.FUNCTION,	0);	// not
    design.addCommand(24, ZRF.IF,	8);
    design.addCommand(24, ZRF.FORK,	4);
    design.addCommand(24, ZRF.PROMOTE,	7);	// BYD
    design.addCommand(24, ZRF.FUNCTION,	25);	// to
    design.addCommand(24, ZRF.FUNCTION,	28);	// end
    design.addCommand(24, ZRF.PARAM,	1);	// $2
    design.addCommand(24, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(24, ZRF.JUMP,	-9);
    design.addCommand(24, ZRF.FUNCTION,	28);	// end

    design.addCommand(25, ZRF.FUNCTION,	24);	// from
    design.addCommand(25, ZRF.ON_BOARD_DIR,	4);	// name
    design.addCommand(25, ZRF.FUNCTION,	0);	// not
    design.addCommand(25, ZRF.IF,	52);
    design.addCommand(25, ZRF.PARAM,	0);	// $1
    design.addCommand(25, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(25, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(25, ZRF.FUNCTION,	0);	// not
    design.addCommand(25, ZRF.IF,	46);
    design.addCommand(25, ZRF.LITERAL,	3);	// GD
    design.addCommand(25, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(25, ZRF.FUNCTION,	0);	// not
    design.addCommand(25, ZRF.FUNCTION,	20);	// verify
    design.addCommand(25, ZRF.LITERAL,	7);	// BYD
    design.addCommand(25, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(25, ZRF.FUNCTION,	0);	// not
    design.addCommand(25, ZRF.FUNCTION,	20);	// verify
    design.addCommand(25, ZRF.LITERAL,	11);	// YBD
    design.addCommand(25, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(25, ZRF.FUNCTION,	0);	// not
    design.addCommand(25, ZRF.FUNCTION,	20);	// verify
    design.addCommand(25, ZRF.LITERAL,	15);	// GBD
    design.addCommand(25, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(25, ZRF.FUNCTION,	0);	// not
    design.addCommand(25, ZRF.FUNCTION,	20);	// verify
    design.addCommand(25, ZRF.LITERAL,	19);	// BGD
    design.addCommand(25, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(25, ZRF.FUNCTION,	0);	// not
    design.addCommand(25, ZRF.FUNCTION,	20);	// verify
    design.addCommand(25, ZRF.LITERAL,	23);	// YGD
    design.addCommand(25, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(25, ZRF.FUNCTION,	0);	// not
    design.addCommand(25, ZRF.FUNCTION,	20);	// verify
    design.addCommand(25, ZRF.LITERAL,	27);	// GYD
    design.addCommand(25, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(25, ZRF.FUNCTION,	0);	// not
    design.addCommand(25, ZRF.FUNCTION,	20);	// verify
    design.addCommand(25, ZRF.LITERAL,	31);	// RD
    design.addCommand(25, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(25, ZRF.FUNCTION,	0);	// not
    design.addCommand(25, ZRF.FUNCTION,	20);	// verify
    design.addCommand(25, ZRF.LITERAL,	35);	// GRD
    design.addCommand(25, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(25, ZRF.FUNCTION,	0);	// not
    design.addCommand(25, ZRF.FUNCTION,	20);	// verify
    design.addCommand(25, ZRF.LITERAL,	39);	// RGD
    design.addCommand(25, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(25, ZRF.FUNCTION,	0);	// not
    design.addCommand(25, ZRF.FUNCTION,	20);	// verify
    design.addCommand(25, ZRF.FORK,	5);
    design.addCommand(25, ZRF.PROMOTE,	7);	// BYD
    design.addCommand(25, ZRF.MODE,	1);	// continue-type
    design.addCommand(25, ZRF.FUNCTION,	25);	// to
    design.addCommand(25, ZRF.FUNCTION,	28);	// end
    design.addCommand(25, ZRF.JUMP,	-53);
    design.addCommand(25, ZRF.FUNCTION,	28);	// end

    design.addCommand(26, ZRF.FUNCTION,	24);	// from
    design.addCommand(26, ZRF.PARAM,	0);	// $1
    design.addCommand(26, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(26, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(26, ZRF.IF,	50);
    design.addCommand(26, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(26, ZRF.FUNCTION,	0);	// not
    design.addCommand(26, ZRF.IF,	41);
    design.addCommand(26, ZRF.LITERAL,	3);	// GD
    design.addCommand(26, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(26, ZRF.FUNCTION,	0);	// not
    design.addCommand(26, ZRF.FUNCTION,	20);	// verify
    design.addCommand(26, ZRF.LITERAL,	7);	// BYD
    design.addCommand(26, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(26, ZRF.FUNCTION,	0);	// not
    design.addCommand(26, ZRF.FUNCTION,	20);	// verify
    design.addCommand(26, ZRF.LITERAL,	11);	// YBD
    design.addCommand(26, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(26, ZRF.FUNCTION,	0);	// not
    design.addCommand(26, ZRF.FUNCTION,	20);	// verify
    design.addCommand(26, ZRF.LITERAL,	15);	// GBD
    design.addCommand(26, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(26, ZRF.FUNCTION,	0);	// not
    design.addCommand(26, ZRF.FUNCTION,	20);	// verify
    design.addCommand(26, ZRF.LITERAL,	19);	// BGD
    design.addCommand(26, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(26, ZRF.FUNCTION,	0);	// not
    design.addCommand(26, ZRF.FUNCTION,	20);	// verify
    design.addCommand(26, ZRF.LITERAL,	23);	// YGD
    design.addCommand(26, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(26, ZRF.FUNCTION,	0);	// not
    design.addCommand(26, ZRF.FUNCTION,	20);	// verify
    design.addCommand(26, ZRF.LITERAL,	27);	// GYD
    design.addCommand(26, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(26, ZRF.FUNCTION,	0);	// not
    design.addCommand(26, ZRF.FUNCTION,	20);	// verify
    design.addCommand(26, ZRF.LITERAL,	31);	// RD
    design.addCommand(26, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(26, ZRF.FUNCTION,	0);	// not
    design.addCommand(26, ZRF.FUNCTION,	20);	// verify
    design.addCommand(26, ZRF.LITERAL,	35);	// GRD
    design.addCommand(26, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(26, ZRF.FUNCTION,	0);	// not
    design.addCommand(26, ZRF.FUNCTION,	20);	// verify
    design.addCommand(26, ZRF.LITERAL,	39);	// RGD
    design.addCommand(26, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(26, ZRF.FUNCTION,	0);	// not
    design.addCommand(26, ZRF.FUNCTION,	20);	// verify
    design.addCommand(26, ZRF.FORK,	3);
    design.addCommand(26, ZRF.FUNCTION,	25);	// to
    design.addCommand(26, ZRF.FUNCTION,	28);	// end
    design.addCommand(26, ZRF.PARAM,	1);	// $2
    design.addCommand(26, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(26, ZRF.JUMP,	-50);
    design.addCommand(26, ZRF.FUNCTION,	28);	// end

    design.addCommand(27, ZRF.FUNCTION,	24);	// from
    design.addCommand(27, ZRF.PARAM,	0);	// $1
    design.addCommand(27, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(27, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(27, ZRF.FUNCTION,	0);	// not
    design.addCommand(27, ZRF.FUNCTION,	20);	// verify
    design.addCommand(27, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(27, ZRF.FUNCTION,	0);	// not
    design.addCommand(27, ZRF.IF,	41);
    design.addCommand(27, ZRF.LITERAL,	0);	// GA
    design.addCommand(27, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(27, ZRF.FUNCTION,	0);	// not
    design.addCommand(27, ZRF.FUNCTION,	20);	// verify
    design.addCommand(27, ZRF.LITERAL,	4);	// BYA
    design.addCommand(27, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(27, ZRF.FUNCTION,	0);	// not
    design.addCommand(27, ZRF.FUNCTION,	20);	// verify
    design.addCommand(27, ZRF.LITERAL,	8);	// YBA
    design.addCommand(27, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(27, ZRF.FUNCTION,	0);	// not
    design.addCommand(27, ZRF.FUNCTION,	20);	// verify
    design.addCommand(27, ZRF.LITERAL,	12);	// GBA
    design.addCommand(27, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(27, ZRF.FUNCTION,	0);	// not
    design.addCommand(27, ZRF.FUNCTION,	20);	// verify
    design.addCommand(27, ZRF.LITERAL,	16);	// BGA
    design.addCommand(27, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(27, ZRF.FUNCTION,	0);	// not
    design.addCommand(27, ZRF.FUNCTION,	20);	// verify
    design.addCommand(27, ZRF.LITERAL,	20);	// YGA
    design.addCommand(27, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(27, ZRF.FUNCTION,	0);	// not
    design.addCommand(27, ZRF.FUNCTION,	20);	// verify
    design.addCommand(27, ZRF.LITERAL,	24);	// GYA
    design.addCommand(27, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(27, ZRF.FUNCTION,	0);	// not
    design.addCommand(27, ZRF.FUNCTION,	20);	// verify
    design.addCommand(27, ZRF.LITERAL,	28);	// RA
    design.addCommand(27, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(27, ZRF.FUNCTION,	0);	// not
    design.addCommand(27, ZRF.FUNCTION,	20);	// verify
    design.addCommand(27, ZRF.LITERAL,	32);	// GRA
    design.addCommand(27, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(27, ZRF.FUNCTION,	0);	// not
    design.addCommand(27, ZRF.FUNCTION,	20);	// verify
    design.addCommand(27, ZRF.LITERAL,	36);	// RGA
    design.addCommand(27, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(27, ZRF.FUNCTION,	0);	// not
    design.addCommand(27, ZRF.FUNCTION,	20);	// verify
    design.addCommand(27, ZRF.PROMOTE,	8);	// YBA
    design.addCommand(27, ZRF.FUNCTION,	25);	// to
    design.addCommand(27, ZRF.FUNCTION,	28);	// end

    design.addCommand(28, ZRF.FUNCTION,	24);	// from
    design.addCommand(28, ZRF.ON_BOARD_DIR,	4);	// name
    design.addCommand(28, ZRF.FUNCTION,	0);	// not
    design.addCommand(28, ZRF.IF,	57);
    design.addCommand(28, ZRF.PARAM,	0);	// $1
    design.addCommand(28, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(28, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(28, ZRF.FUNCTION,	0);	// not
    design.addCommand(28, ZRF.IF,	4);
    design.addCommand(28, ZRF.FORK,	3);
    design.addCommand(28, ZRF.FUNCTION,	25);	// to
    design.addCommand(28, ZRF.FUNCTION,	28);	// end
    design.addCommand(28, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(28, ZRF.FUNCTION,	0);	// not
    design.addCommand(28, ZRF.IF,	45);
    design.addCommand(28, ZRF.LITERAL,	3);	// GD
    design.addCommand(28, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(28, ZRF.FUNCTION,	0);	// not
    design.addCommand(28, ZRF.FUNCTION,	20);	// verify
    design.addCommand(28, ZRF.LITERAL,	7);	// BYD
    design.addCommand(28, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(28, ZRF.FUNCTION,	0);	// not
    design.addCommand(28, ZRF.FUNCTION,	20);	// verify
    design.addCommand(28, ZRF.LITERAL,	11);	// YBD
    design.addCommand(28, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(28, ZRF.FUNCTION,	0);	// not
    design.addCommand(28, ZRF.FUNCTION,	20);	// verify
    design.addCommand(28, ZRF.LITERAL,	15);	// GBD
    design.addCommand(28, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(28, ZRF.FUNCTION,	0);	// not
    design.addCommand(28, ZRF.FUNCTION,	20);	// verify
    design.addCommand(28, ZRF.LITERAL,	19);	// BGD
    design.addCommand(28, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(28, ZRF.FUNCTION,	0);	// not
    design.addCommand(28, ZRF.FUNCTION,	20);	// verify
    design.addCommand(28, ZRF.LITERAL,	23);	// YGD
    design.addCommand(28, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(28, ZRF.FUNCTION,	0);	// not
    design.addCommand(28, ZRF.FUNCTION,	20);	// verify
    design.addCommand(28, ZRF.LITERAL,	27);	// GYD
    design.addCommand(28, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(28, ZRF.FUNCTION,	0);	// not
    design.addCommand(28, ZRF.FUNCTION,	20);	// verify
    design.addCommand(28, ZRF.LITERAL,	31);	// RD
    design.addCommand(28, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(28, ZRF.FUNCTION,	0);	// not
    design.addCommand(28, ZRF.FUNCTION,	20);	// verify
    design.addCommand(28, ZRF.LITERAL,	35);	// GRD
    design.addCommand(28, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(28, ZRF.FUNCTION,	0);	// not
    design.addCommand(28, ZRF.FUNCTION,	20);	// verify
    design.addCommand(28, ZRF.LITERAL,	39);	// RGD
    design.addCommand(28, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(28, ZRF.FUNCTION,	0);	// not
    design.addCommand(28, ZRF.FUNCTION,	20);	// verify
    design.addCommand(28, ZRF.FORK,	4);
    design.addCommand(28, ZRF.MODE,	1);	// continue-type
    design.addCommand(28, ZRF.FUNCTION,	25);	// to
    design.addCommand(28, ZRF.FUNCTION,	28);	// end
    design.addCommand(28, ZRF.JUMP,	-58);
    design.addCommand(28, ZRF.FUNCTION,	28);	// end

    design.addCommand(29, ZRF.FUNCTION,	24);	// from
    design.addCommand(29, ZRF.PARAM,	0);	// $1
    design.addCommand(29, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(29, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(29, ZRF.FUNCTION,	0);	// not
    design.addCommand(29, ZRF.IF,	8);
    design.addCommand(29, ZRF.FORK,	4);
    design.addCommand(29, ZRF.PROMOTE,	8);	// YBA
    design.addCommand(29, ZRF.FUNCTION,	25);	// to
    design.addCommand(29, ZRF.FUNCTION,	28);	// end
    design.addCommand(29, ZRF.PARAM,	1);	// $2
    design.addCommand(29, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(29, ZRF.JUMP,	-9);
    design.addCommand(29, ZRF.FUNCTION,	28);	// end

    design.addCommand(30, ZRF.FUNCTION,	24);	// from
    design.addCommand(30, ZRF.ON_BOARD_DIR,	7);	// name
    design.addCommand(30, ZRF.FUNCTION,	0);	// not
    design.addCommand(30, ZRF.IF,	52);
    design.addCommand(30, ZRF.PARAM,	0);	// $1
    design.addCommand(30, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(30, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(30, ZRF.FUNCTION,	0);	// not
    design.addCommand(30, ZRF.IF,	46);
    design.addCommand(30, ZRF.LITERAL,	0);	// GA
    design.addCommand(30, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(30, ZRF.FUNCTION,	0);	// not
    design.addCommand(30, ZRF.FUNCTION,	20);	// verify
    design.addCommand(30, ZRF.LITERAL,	4);	// BYA
    design.addCommand(30, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(30, ZRF.FUNCTION,	0);	// not
    design.addCommand(30, ZRF.FUNCTION,	20);	// verify
    design.addCommand(30, ZRF.LITERAL,	8);	// YBA
    design.addCommand(30, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(30, ZRF.FUNCTION,	0);	// not
    design.addCommand(30, ZRF.FUNCTION,	20);	// verify
    design.addCommand(30, ZRF.LITERAL,	12);	// GBA
    design.addCommand(30, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(30, ZRF.FUNCTION,	0);	// not
    design.addCommand(30, ZRF.FUNCTION,	20);	// verify
    design.addCommand(30, ZRF.LITERAL,	16);	// BGA
    design.addCommand(30, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(30, ZRF.FUNCTION,	0);	// not
    design.addCommand(30, ZRF.FUNCTION,	20);	// verify
    design.addCommand(30, ZRF.LITERAL,	20);	// YGA
    design.addCommand(30, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(30, ZRF.FUNCTION,	0);	// not
    design.addCommand(30, ZRF.FUNCTION,	20);	// verify
    design.addCommand(30, ZRF.LITERAL,	24);	// GYA
    design.addCommand(30, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(30, ZRF.FUNCTION,	0);	// not
    design.addCommand(30, ZRF.FUNCTION,	20);	// verify
    design.addCommand(30, ZRF.LITERAL,	28);	// RA
    design.addCommand(30, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(30, ZRF.FUNCTION,	0);	// not
    design.addCommand(30, ZRF.FUNCTION,	20);	// verify
    design.addCommand(30, ZRF.LITERAL,	32);	// GRA
    design.addCommand(30, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(30, ZRF.FUNCTION,	0);	// not
    design.addCommand(30, ZRF.FUNCTION,	20);	// verify
    design.addCommand(30, ZRF.LITERAL,	36);	// RGA
    design.addCommand(30, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(30, ZRF.FUNCTION,	0);	// not
    design.addCommand(30, ZRF.FUNCTION,	20);	// verify
    design.addCommand(30, ZRF.FORK,	5);
    design.addCommand(30, ZRF.PROMOTE,	8);	// YBA
    design.addCommand(30, ZRF.MODE,	1);	// continue-type
    design.addCommand(30, ZRF.FUNCTION,	25);	// to
    design.addCommand(30, ZRF.FUNCTION,	28);	// end
    design.addCommand(30, ZRF.JUMP,	-53);
    design.addCommand(30, ZRF.FUNCTION,	28);	// end

    design.addCommand(31, ZRF.FUNCTION,	24);	// from
    design.addCommand(31, ZRF.PARAM,	0);	// $1
    design.addCommand(31, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(31, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(31, ZRF.FUNCTION,	0);	// not
    design.addCommand(31, ZRF.FUNCTION,	20);	// verify
    design.addCommand(31, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(31, ZRF.FUNCTION,	0);	// not
    design.addCommand(31, ZRF.IF,	41);
    design.addCommand(31, ZRF.LITERAL,	1);	// GB
    design.addCommand(31, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(31, ZRF.FUNCTION,	0);	// not
    design.addCommand(31, ZRF.FUNCTION,	20);	// verify
    design.addCommand(31, ZRF.LITERAL,	5);	// BYB
    design.addCommand(31, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(31, ZRF.FUNCTION,	0);	// not
    design.addCommand(31, ZRF.FUNCTION,	20);	// verify
    design.addCommand(31, ZRF.LITERAL,	9);	// YBB
    design.addCommand(31, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(31, ZRF.FUNCTION,	0);	// not
    design.addCommand(31, ZRF.FUNCTION,	20);	// verify
    design.addCommand(31, ZRF.LITERAL,	13);	// GBB
    design.addCommand(31, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(31, ZRF.FUNCTION,	0);	// not
    design.addCommand(31, ZRF.FUNCTION,	20);	// verify
    design.addCommand(31, ZRF.LITERAL,	17);	// BGB
    design.addCommand(31, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(31, ZRF.FUNCTION,	0);	// not
    design.addCommand(31, ZRF.FUNCTION,	20);	// verify
    design.addCommand(31, ZRF.LITERAL,	21);	// YGB
    design.addCommand(31, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(31, ZRF.FUNCTION,	0);	// not
    design.addCommand(31, ZRF.FUNCTION,	20);	// verify
    design.addCommand(31, ZRF.LITERAL,	25);	// GYB
    design.addCommand(31, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(31, ZRF.FUNCTION,	0);	// not
    design.addCommand(31, ZRF.FUNCTION,	20);	// verify
    design.addCommand(31, ZRF.LITERAL,	29);	// RB
    design.addCommand(31, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(31, ZRF.FUNCTION,	0);	// not
    design.addCommand(31, ZRF.FUNCTION,	20);	// verify
    design.addCommand(31, ZRF.LITERAL,	33);	// GRB
    design.addCommand(31, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(31, ZRF.FUNCTION,	0);	// not
    design.addCommand(31, ZRF.FUNCTION,	20);	// verify
    design.addCommand(31, ZRF.LITERAL,	37);	// RGB
    design.addCommand(31, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(31, ZRF.FUNCTION,	0);	// not
    design.addCommand(31, ZRF.FUNCTION,	20);	// verify
    design.addCommand(31, ZRF.PROMOTE,	9);	// YBB
    design.addCommand(31, ZRF.FUNCTION,	25);	// to
    design.addCommand(31, ZRF.FUNCTION,	28);	// end

    design.addCommand(32, ZRF.FUNCTION,	24);	// from
    design.addCommand(32, ZRF.ON_BOARD_DIR,	7);	// name
    design.addCommand(32, ZRF.FUNCTION,	0);	// not
    design.addCommand(32, ZRF.IF,	57);
    design.addCommand(32, ZRF.PARAM,	0);	// $1
    design.addCommand(32, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(32, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(32, ZRF.FUNCTION,	0);	// not
    design.addCommand(32, ZRF.IF,	4);
    design.addCommand(32, ZRF.FORK,	3);
    design.addCommand(32, ZRF.FUNCTION,	25);	// to
    design.addCommand(32, ZRF.FUNCTION,	28);	// end
    design.addCommand(32, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(32, ZRF.FUNCTION,	0);	// not
    design.addCommand(32, ZRF.IF,	45);
    design.addCommand(32, ZRF.LITERAL,	0);	// GA
    design.addCommand(32, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(32, ZRF.FUNCTION,	0);	// not
    design.addCommand(32, ZRF.FUNCTION,	20);	// verify
    design.addCommand(32, ZRF.LITERAL,	4);	// BYA
    design.addCommand(32, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(32, ZRF.FUNCTION,	0);	// not
    design.addCommand(32, ZRF.FUNCTION,	20);	// verify
    design.addCommand(32, ZRF.LITERAL,	8);	// YBA
    design.addCommand(32, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(32, ZRF.FUNCTION,	0);	// not
    design.addCommand(32, ZRF.FUNCTION,	20);	// verify
    design.addCommand(32, ZRF.LITERAL,	12);	// GBA
    design.addCommand(32, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(32, ZRF.FUNCTION,	0);	// not
    design.addCommand(32, ZRF.FUNCTION,	20);	// verify
    design.addCommand(32, ZRF.LITERAL,	16);	// BGA
    design.addCommand(32, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(32, ZRF.FUNCTION,	0);	// not
    design.addCommand(32, ZRF.FUNCTION,	20);	// verify
    design.addCommand(32, ZRF.LITERAL,	20);	// YGA
    design.addCommand(32, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(32, ZRF.FUNCTION,	0);	// not
    design.addCommand(32, ZRF.FUNCTION,	20);	// verify
    design.addCommand(32, ZRF.LITERAL,	24);	// GYA
    design.addCommand(32, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(32, ZRF.FUNCTION,	0);	// not
    design.addCommand(32, ZRF.FUNCTION,	20);	// verify
    design.addCommand(32, ZRF.LITERAL,	28);	// RA
    design.addCommand(32, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(32, ZRF.FUNCTION,	0);	// not
    design.addCommand(32, ZRF.FUNCTION,	20);	// verify
    design.addCommand(32, ZRF.LITERAL,	32);	// GRA
    design.addCommand(32, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(32, ZRF.FUNCTION,	0);	// not
    design.addCommand(32, ZRF.FUNCTION,	20);	// verify
    design.addCommand(32, ZRF.LITERAL,	36);	// RGA
    design.addCommand(32, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(32, ZRF.FUNCTION,	0);	// not
    design.addCommand(32, ZRF.FUNCTION,	20);	// verify
    design.addCommand(32, ZRF.FORK,	4);
    design.addCommand(32, ZRF.MODE,	1);	// continue-type
    design.addCommand(32, ZRF.FUNCTION,	25);	// to
    design.addCommand(32, ZRF.FUNCTION,	28);	// end
    design.addCommand(32, ZRF.JUMP,	-58);
    design.addCommand(32, ZRF.FUNCTION,	28);	// end

    design.addCommand(33, ZRF.FUNCTION,	24);	// from
    design.addCommand(33, ZRF.PARAM,	0);	// $1
    design.addCommand(33, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(33, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(33, ZRF.FUNCTION,	0);	// not
    design.addCommand(33, ZRF.IF,	8);
    design.addCommand(33, ZRF.FORK,	4);
    design.addCommand(33, ZRF.PROMOTE,	9);	// YBB
    design.addCommand(33, ZRF.FUNCTION,	25);	// to
    design.addCommand(33, ZRF.FUNCTION,	28);	// end
    design.addCommand(33, ZRF.PARAM,	1);	// $2
    design.addCommand(33, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(33, ZRF.JUMP,	-9);
    design.addCommand(33, ZRF.FUNCTION,	28);	// end

    design.addCommand(34, ZRF.FUNCTION,	24);	// from
    design.addCommand(34, ZRF.ON_BOARD_DIR,	6);	// name
    design.addCommand(34, ZRF.FUNCTION,	0);	// not
    design.addCommand(34, ZRF.IF,	52);
    design.addCommand(34, ZRF.PARAM,	0);	// $1
    design.addCommand(34, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(34, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(34, ZRF.FUNCTION,	0);	// not
    design.addCommand(34, ZRF.IF,	46);
    design.addCommand(34, ZRF.LITERAL,	1);	// GB
    design.addCommand(34, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(34, ZRF.FUNCTION,	0);	// not
    design.addCommand(34, ZRF.FUNCTION,	20);	// verify
    design.addCommand(34, ZRF.LITERAL,	5);	// BYB
    design.addCommand(34, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(34, ZRF.FUNCTION,	0);	// not
    design.addCommand(34, ZRF.FUNCTION,	20);	// verify
    design.addCommand(34, ZRF.LITERAL,	9);	// YBB
    design.addCommand(34, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(34, ZRF.FUNCTION,	0);	// not
    design.addCommand(34, ZRF.FUNCTION,	20);	// verify
    design.addCommand(34, ZRF.LITERAL,	13);	// GBB
    design.addCommand(34, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(34, ZRF.FUNCTION,	0);	// not
    design.addCommand(34, ZRF.FUNCTION,	20);	// verify
    design.addCommand(34, ZRF.LITERAL,	17);	// BGB
    design.addCommand(34, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(34, ZRF.FUNCTION,	0);	// not
    design.addCommand(34, ZRF.FUNCTION,	20);	// verify
    design.addCommand(34, ZRF.LITERAL,	21);	// YGB
    design.addCommand(34, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(34, ZRF.FUNCTION,	0);	// not
    design.addCommand(34, ZRF.FUNCTION,	20);	// verify
    design.addCommand(34, ZRF.LITERAL,	25);	// GYB
    design.addCommand(34, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(34, ZRF.FUNCTION,	0);	// not
    design.addCommand(34, ZRF.FUNCTION,	20);	// verify
    design.addCommand(34, ZRF.LITERAL,	29);	// RB
    design.addCommand(34, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(34, ZRF.FUNCTION,	0);	// not
    design.addCommand(34, ZRF.FUNCTION,	20);	// verify
    design.addCommand(34, ZRF.LITERAL,	33);	// GRB
    design.addCommand(34, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(34, ZRF.FUNCTION,	0);	// not
    design.addCommand(34, ZRF.FUNCTION,	20);	// verify
    design.addCommand(34, ZRF.LITERAL,	37);	// RGB
    design.addCommand(34, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(34, ZRF.FUNCTION,	0);	// not
    design.addCommand(34, ZRF.FUNCTION,	20);	// verify
    design.addCommand(34, ZRF.FORK,	5);
    design.addCommand(34, ZRF.PROMOTE,	9);	// YBB
    design.addCommand(34, ZRF.MODE,	1);	// continue-type
    design.addCommand(34, ZRF.FUNCTION,	25);	// to
    design.addCommand(34, ZRF.FUNCTION,	28);	// end
    design.addCommand(34, ZRF.JUMP,	-53);
    design.addCommand(34, ZRF.FUNCTION,	28);	// end

    design.addCommand(35, ZRF.FUNCTION,	24);	// from
    design.addCommand(35, ZRF.PARAM,	0);	// $1
    design.addCommand(35, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(35, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(35, ZRF.FUNCTION,	0);	// not
    design.addCommand(35, ZRF.FUNCTION,	20);	// verify
    design.addCommand(35, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(35, ZRF.FUNCTION,	0);	// not
    design.addCommand(35, ZRF.IF,	41);
    design.addCommand(35, ZRF.LITERAL,	2);	// GC
    design.addCommand(35, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(35, ZRF.FUNCTION,	0);	// not
    design.addCommand(35, ZRF.FUNCTION,	20);	// verify
    design.addCommand(35, ZRF.LITERAL,	6);	// BYC
    design.addCommand(35, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(35, ZRF.FUNCTION,	0);	// not
    design.addCommand(35, ZRF.FUNCTION,	20);	// verify
    design.addCommand(35, ZRF.LITERAL,	10);	// YBC
    design.addCommand(35, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(35, ZRF.FUNCTION,	0);	// not
    design.addCommand(35, ZRF.FUNCTION,	20);	// verify
    design.addCommand(35, ZRF.LITERAL,	14);	// GBC
    design.addCommand(35, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(35, ZRF.FUNCTION,	0);	// not
    design.addCommand(35, ZRF.FUNCTION,	20);	// verify
    design.addCommand(35, ZRF.LITERAL,	18);	// BGC
    design.addCommand(35, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(35, ZRF.FUNCTION,	0);	// not
    design.addCommand(35, ZRF.FUNCTION,	20);	// verify
    design.addCommand(35, ZRF.LITERAL,	22);	// YGC
    design.addCommand(35, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(35, ZRF.FUNCTION,	0);	// not
    design.addCommand(35, ZRF.FUNCTION,	20);	// verify
    design.addCommand(35, ZRF.LITERAL,	26);	// GYC
    design.addCommand(35, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(35, ZRF.FUNCTION,	0);	// not
    design.addCommand(35, ZRF.FUNCTION,	20);	// verify
    design.addCommand(35, ZRF.LITERAL,	30);	// RC
    design.addCommand(35, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(35, ZRF.FUNCTION,	0);	// not
    design.addCommand(35, ZRF.FUNCTION,	20);	// verify
    design.addCommand(35, ZRF.LITERAL,	34);	// GRC
    design.addCommand(35, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(35, ZRF.FUNCTION,	0);	// not
    design.addCommand(35, ZRF.FUNCTION,	20);	// verify
    design.addCommand(35, ZRF.LITERAL,	38);	// RGC
    design.addCommand(35, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(35, ZRF.FUNCTION,	0);	// not
    design.addCommand(35, ZRF.FUNCTION,	20);	// verify
    design.addCommand(35, ZRF.PROMOTE,	10);	// YBC
    design.addCommand(35, ZRF.FUNCTION,	25);	// to
    design.addCommand(35, ZRF.FUNCTION,	28);	// end

    design.addCommand(36, ZRF.FUNCTION,	24);	// from
    design.addCommand(36, ZRF.ON_BOARD_DIR,	6);	// name
    design.addCommand(36, ZRF.FUNCTION,	0);	// not
    design.addCommand(36, ZRF.IF,	57);
    design.addCommand(36, ZRF.PARAM,	0);	// $1
    design.addCommand(36, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(36, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(36, ZRF.FUNCTION,	0);	// not
    design.addCommand(36, ZRF.IF,	4);
    design.addCommand(36, ZRF.FORK,	3);
    design.addCommand(36, ZRF.FUNCTION,	25);	// to
    design.addCommand(36, ZRF.FUNCTION,	28);	// end
    design.addCommand(36, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(36, ZRF.FUNCTION,	0);	// not
    design.addCommand(36, ZRF.IF,	45);
    design.addCommand(36, ZRF.LITERAL,	1);	// GB
    design.addCommand(36, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(36, ZRF.FUNCTION,	0);	// not
    design.addCommand(36, ZRF.FUNCTION,	20);	// verify
    design.addCommand(36, ZRF.LITERAL,	5);	// BYB
    design.addCommand(36, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(36, ZRF.FUNCTION,	0);	// not
    design.addCommand(36, ZRF.FUNCTION,	20);	// verify
    design.addCommand(36, ZRF.LITERAL,	9);	// YBB
    design.addCommand(36, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(36, ZRF.FUNCTION,	0);	// not
    design.addCommand(36, ZRF.FUNCTION,	20);	// verify
    design.addCommand(36, ZRF.LITERAL,	13);	// GBB
    design.addCommand(36, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(36, ZRF.FUNCTION,	0);	// not
    design.addCommand(36, ZRF.FUNCTION,	20);	// verify
    design.addCommand(36, ZRF.LITERAL,	17);	// BGB
    design.addCommand(36, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(36, ZRF.FUNCTION,	0);	// not
    design.addCommand(36, ZRF.FUNCTION,	20);	// verify
    design.addCommand(36, ZRF.LITERAL,	21);	// YGB
    design.addCommand(36, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(36, ZRF.FUNCTION,	0);	// not
    design.addCommand(36, ZRF.FUNCTION,	20);	// verify
    design.addCommand(36, ZRF.LITERAL,	25);	// GYB
    design.addCommand(36, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(36, ZRF.FUNCTION,	0);	// not
    design.addCommand(36, ZRF.FUNCTION,	20);	// verify
    design.addCommand(36, ZRF.LITERAL,	29);	// RB
    design.addCommand(36, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(36, ZRF.FUNCTION,	0);	// not
    design.addCommand(36, ZRF.FUNCTION,	20);	// verify
    design.addCommand(36, ZRF.LITERAL,	33);	// GRB
    design.addCommand(36, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(36, ZRF.FUNCTION,	0);	// not
    design.addCommand(36, ZRF.FUNCTION,	20);	// verify
    design.addCommand(36, ZRF.LITERAL,	37);	// RGB
    design.addCommand(36, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(36, ZRF.FUNCTION,	0);	// not
    design.addCommand(36, ZRF.FUNCTION,	20);	// verify
    design.addCommand(36, ZRF.FORK,	4);
    design.addCommand(36, ZRF.MODE,	1);	// continue-type
    design.addCommand(36, ZRF.FUNCTION,	25);	// to
    design.addCommand(36, ZRF.FUNCTION,	28);	// end
    design.addCommand(36, ZRF.JUMP,	-58);
    design.addCommand(36, ZRF.FUNCTION,	28);	// end

    design.addCommand(37, ZRF.FUNCTION,	24);	// from
    design.addCommand(37, ZRF.PARAM,	0);	// $1
    design.addCommand(37, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(37, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(37, ZRF.FUNCTION,	0);	// not
    design.addCommand(37, ZRF.IF,	8);
    design.addCommand(37, ZRF.FORK,	4);
    design.addCommand(37, ZRF.PROMOTE,	10);	// YBC
    design.addCommand(37, ZRF.FUNCTION,	25);	// to
    design.addCommand(37, ZRF.FUNCTION,	28);	// end
    design.addCommand(37, ZRF.PARAM,	1);	// $2
    design.addCommand(37, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(37, ZRF.JUMP,	-9);
    design.addCommand(37, ZRF.FUNCTION,	28);	// end

    design.addCommand(38, ZRF.FUNCTION,	24);	// from
    design.addCommand(38, ZRF.ON_BOARD_DIR,	5);	// name
    design.addCommand(38, ZRF.FUNCTION,	0);	// not
    design.addCommand(38, ZRF.IF,	52);
    design.addCommand(38, ZRF.PARAM,	0);	// $1
    design.addCommand(38, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(38, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(38, ZRF.FUNCTION,	0);	// not
    design.addCommand(38, ZRF.IF,	46);
    design.addCommand(38, ZRF.LITERAL,	2);	// GC
    design.addCommand(38, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(38, ZRF.FUNCTION,	0);	// not
    design.addCommand(38, ZRF.FUNCTION,	20);	// verify
    design.addCommand(38, ZRF.LITERAL,	6);	// BYC
    design.addCommand(38, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(38, ZRF.FUNCTION,	0);	// not
    design.addCommand(38, ZRF.FUNCTION,	20);	// verify
    design.addCommand(38, ZRF.LITERAL,	10);	// YBC
    design.addCommand(38, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(38, ZRF.FUNCTION,	0);	// not
    design.addCommand(38, ZRF.FUNCTION,	20);	// verify
    design.addCommand(38, ZRF.LITERAL,	14);	// GBC
    design.addCommand(38, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(38, ZRF.FUNCTION,	0);	// not
    design.addCommand(38, ZRF.FUNCTION,	20);	// verify
    design.addCommand(38, ZRF.LITERAL,	18);	// BGC
    design.addCommand(38, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(38, ZRF.FUNCTION,	0);	// not
    design.addCommand(38, ZRF.FUNCTION,	20);	// verify
    design.addCommand(38, ZRF.LITERAL,	22);	// YGC
    design.addCommand(38, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(38, ZRF.FUNCTION,	0);	// not
    design.addCommand(38, ZRF.FUNCTION,	20);	// verify
    design.addCommand(38, ZRF.LITERAL,	26);	// GYC
    design.addCommand(38, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(38, ZRF.FUNCTION,	0);	// not
    design.addCommand(38, ZRF.FUNCTION,	20);	// verify
    design.addCommand(38, ZRF.LITERAL,	30);	// RC
    design.addCommand(38, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(38, ZRF.FUNCTION,	0);	// not
    design.addCommand(38, ZRF.FUNCTION,	20);	// verify
    design.addCommand(38, ZRF.LITERAL,	34);	// GRC
    design.addCommand(38, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(38, ZRF.FUNCTION,	0);	// not
    design.addCommand(38, ZRF.FUNCTION,	20);	// verify
    design.addCommand(38, ZRF.LITERAL,	38);	// RGC
    design.addCommand(38, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(38, ZRF.FUNCTION,	0);	// not
    design.addCommand(38, ZRF.FUNCTION,	20);	// verify
    design.addCommand(38, ZRF.FORK,	5);
    design.addCommand(38, ZRF.PROMOTE,	10);	// YBC
    design.addCommand(38, ZRF.MODE,	1);	// continue-type
    design.addCommand(38, ZRF.FUNCTION,	25);	// to
    design.addCommand(38, ZRF.FUNCTION,	28);	// end
    design.addCommand(38, ZRF.JUMP,	-53);
    design.addCommand(38, ZRF.FUNCTION,	28);	// end

    design.addCommand(39, ZRF.FUNCTION,	24);	// from
    design.addCommand(39, ZRF.ON_BOARD_DIR,	5);	// name
    design.addCommand(39, ZRF.FUNCTION,	0);	// not
    design.addCommand(39, ZRF.IF,	57);
    design.addCommand(39, ZRF.PARAM,	0);	// $1
    design.addCommand(39, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(39, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(39, ZRF.FUNCTION,	0);	// not
    design.addCommand(39, ZRF.IF,	4);
    design.addCommand(39, ZRF.FORK,	3);
    design.addCommand(39, ZRF.FUNCTION,	25);	// to
    design.addCommand(39, ZRF.FUNCTION,	28);	// end
    design.addCommand(39, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(39, ZRF.FUNCTION,	0);	// not
    design.addCommand(39, ZRF.IF,	45);
    design.addCommand(39, ZRF.LITERAL,	2);	// GC
    design.addCommand(39, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(39, ZRF.FUNCTION,	0);	// not
    design.addCommand(39, ZRF.FUNCTION,	20);	// verify
    design.addCommand(39, ZRF.LITERAL,	6);	// BYC
    design.addCommand(39, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(39, ZRF.FUNCTION,	0);	// not
    design.addCommand(39, ZRF.FUNCTION,	20);	// verify
    design.addCommand(39, ZRF.LITERAL,	10);	// YBC
    design.addCommand(39, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(39, ZRF.FUNCTION,	0);	// not
    design.addCommand(39, ZRF.FUNCTION,	20);	// verify
    design.addCommand(39, ZRF.LITERAL,	14);	// GBC
    design.addCommand(39, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(39, ZRF.FUNCTION,	0);	// not
    design.addCommand(39, ZRF.FUNCTION,	20);	// verify
    design.addCommand(39, ZRF.LITERAL,	18);	// BGC
    design.addCommand(39, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(39, ZRF.FUNCTION,	0);	// not
    design.addCommand(39, ZRF.FUNCTION,	20);	// verify
    design.addCommand(39, ZRF.LITERAL,	22);	// YGC
    design.addCommand(39, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(39, ZRF.FUNCTION,	0);	// not
    design.addCommand(39, ZRF.FUNCTION,	20);	// verify
    design.addCommand(39, ZRF.LITERAL,	26);	// GYC
    design.addCommand(39, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(39, ZRF.FUNCTION,	0);	// not
    design.addCommand(39, ZRF.FUNCTION,	20);	// verify
    design.addCommand(39, ZRF.LITERAL,	30);	// RC
    design.addCommand(39, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(39, ZRF.FUNCTION,	0);	// not
    design.addCommand(39, ZRF.FUNCTION,	20);	// verify
    design.addCommand(39, ZRF.LITERAL,	34);	// GRC
    design.addCommand(39, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(39, ZRF.FUNCTION,	0);	// not
    design.addCommand(39, ZRF.FUNCTION,	20);	// verify
    design.addCommand(39, ZRF.LITERAL,	38);	// RGC
    design.addCommand(39, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(39, ZRF.FUNCTION,	0);	// not
    design.addCommand(39, ZRF.FUNCTION,	20);	// verify
    design.addCommand(39, ZRF.FORK,	4);
    design.addCommand(39, ZRF.MODE,	1);	// continue-type
    design.addCommand(39, ZRF.FUNCTION,	25);	// to
    design.addCommand(39, ZRF.FUNCTION,	28);	// end
    design.addCommand(39, ZRF.JUMP,	-58);
    design.addCommand(39, ZRF.FUNCTION,	28);	// end

    design.addCommand(40, ZRF.FUNCTION,	24);	// from
    design.addCommand(40, ZRF.ON_BOARD_DIR,	2);	// name
    design.addCommand(40, ZRF.FUNCTION,	0);	// not
    design.addCommand(40, ZRF.IF,	57);
    design.addCommand(40, ZRF.PARAM,	0);	// $1
    design.addCommand(40, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(40, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(40, ZRF.FUNCTION,	0);	// not
    design.addCommand(40, ZRF.IF,	4);
    design.addCommand(40, ZRF.FORK,	3);
    design.addCommand(40, ZRF.FUNCTION,	25);	// to
    design.addCommand(40, ZRF.FUNCTION,	28);	// end
    design.addCommand(40, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(40, ZRF.FUNCTION,	0);	// not
    design.addCommand(40, ZRF.IF,	45);
    design.addCommand(40, ZRF.LITERAL,	3);	// GD
    design.addCommand(40, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(40, ZRF.FUNCTION,	0);	// not
    design.addCommand(40, ZRF.FUNCTION,	20);	// verify
    design.addCommand(40, ZRF.LITERAL,	7);	// BYD
    design.addCommand(40, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(40, ZRF.FUNCTION,	0);	// not
    design.addCommand(40, ZRF.FUNCTION,	20);	// verify
    design.addCommand(40, ZRF.LITERAL,	11);	// YBD
    design.addCommand(40, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(40, ZRF.FUNCTION,	0);	// not
    design.addCommand(40, ZRF.FUNCTION,	20);	// verify
    design.addCommand(40, ZRF.LITERAL,	15);	// GBD
    design.addCommand(40, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(40, ZRF.FUNCTION,	0);	// not
    design.addCommand(40, ZRF.FUNCTION,	20);	// verify
    design.addCommand(40, ZRF.LITERAL,	19);	// BGD
    design.addCommand(40, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(40, ZRF.FUNCTION,	0);	// not
    design.addCommand(40, ZRF.FUNCTION,	20);	// verify
    design.addCommand(40, ZRF.LITERAL,	23);	// YGD
    design.addCommand(40, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(40, ZRF.FUNCTION,	0);	// not
    design.addCommand(40, ZRF.FUNCTION,	20);	// verify
    design.addCommand(40, ZRF.LITERAL,	27);	// GYD
    design.addCommand(40, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(40, ZRF.FUNCTION,	0);	// not
    design.addCommand(40, ZRF.FUNCTION,	20);	// verify
    design.addCommand(40, ZRF.LITERAL,	31);	// RD
    design.addCommand(40, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(40, ZRF.FUNCTION,	0);	// not
    design.addCommand(40, ZRF.FUNCTION,	20);	// verify
    design.addCommand(40, ZRF.LITERAL,	35);	// GRD
    design.addCommand(40, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(40, ZRF.FUNCTION,	0);	// not
    design.addCommand(40, ZRF.FUNCTION,	20);	// verify
    design.addCommand(40, ZRF.LITERAL,	39);	// RGD
    design.addCommand(40, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(40, ZRF.FUNCTION,	0);	// not
    design.addCommand(40, ZRF.FUNCTION,	20);	// verify
    design.addCommand(40, ZRF.FORK,	4);
    design.addCommand(40, ZRF.MODE,	1);	// continue-type
    design.addCommand(40, ZRF.FUNCTION,	25);	// to
    design.addCommand(40, ZRF.FUNCTION,	28);	// end
    design.addCommand(40, ZRF.JUMP,	-58);
    design.addCommand(40, ZRF.FUNCTION,	28);	// end

    design.addCommand(41, ZRF.FUNCTION,	24);	// from
    design.addCommand(41, ZRF.PARAM,	0);	// $1
    design.addCommand(41, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(41, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(41, ZRF.FUNCTION,	0);	// not
    design.addCommand(41, ZRF.FUNCTION,	20);	// verify
    design.addCommand(41, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(41, ZRF.FUNCTION,	0);	// not
    design.addCommand(41, ZRF.IF,	41);
    design.addCommand(41, ZRF.LITERAL,	1);	// GB
    design.addCommand(41, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(41, ZRF.FUNCTION,	0);	// not
    design.addCommand(41, ZRF.FUNCTION,	20);	// verify
    design.addCommand(41, ZRF.LITERAL,	5);	// BYB
    design.addCommand(41, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(41, ZRF.FUNCTION,	0);	// not
    design.addCommand(41, ZRF.FUNCTION,	20);	// verify
    design.addCommand(41, ZRF.LITERAL,	9);	// YBB
    design.addCommand(41, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(41, ZRF.FUNCTION,	0);	// not
    design.addCommand(41, ZRF.FUNCTION,	20);	// verify
    design.addCommand(41, ZRF.LITERAL,	13);	// GBB
    design.addCommand(41, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(41, ZRF.FUNCTION,	0);	// not
    design.addCommand(41, ZRF.FUNCTION,	20);	// verify
    design.addCommand(41, ZRF.LITERAL,	17);	// BGB
    design.addCommand(41, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(41, ZRF.FUNCTION,	0);	// not
    design.addCommand(41, ZRF.FUNCTION,	20);	// verify
    design.addCommand(41, ZRF.LITERAL,	21);	// YGB
    design.addCommand(41, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(41, ZRF.FUNCTION,	0);	// not
    design.addCommand(41, ZRF.FUNCTION,	20);	// verify
    design.addCommand(41, ZRF.LITERAL,	25);	// GYB
    design.addCommand(41, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(41, ZRF.FUNCTION,	0);	// not
    design.addCommand(41, ZRF.FUNCTION,	20);	// verify
    design.addCommand(41, ZRF.LITERAL,	29);	// RB
    design.addCommand(41, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(41, ZRF.FUNCTION,	0);	// not
    design.addCommand(41, ZRF.FUNCTION,	20);	// verify
    design.addCommand(41, ZRF.LITERAL,	33);	// GRB
    design.addCommand(41, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(41, ZRF.FUNCTION,	0);	// not
    design.addCommand(41, ZRF.FUNCTION,	20);	// verify
    design.addCommand(41, ZRF.LITERAL,	37);	// RGB
    design.addCommand(41, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(41, ZRF.FUNCTION,	0);	// not
    design.addCommand(41, ZRF.FUNCTION,	20);	// verify
    design.addCommand(41, ZRF.PROMOTE,	13);	// GBB
    design.addCommand(41, ZRF.FUNCTION,	25);	// to
    design.addCommand(41, ZRF.FUNCTION,	28);	// end

    design.addCommand(42, ZRF.FUNCTION,	24);	// from
    design.addCommand(42, ZRF.PARAM,	0);	// $1
    design.addCommand(42, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(42, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(42, ZRF.FUNCTION,	0);	// not
    design.addCommand(42, ZRF.FUNCTION,	20);	// verify
    design.addCommand(42, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(42, ZRF.FUNCTION,	0);	// not
    design.addCommand(42, ZRF.IF,	41);
    design.addCommand(42, ZRF.LITERAL,	3);	// GD
    design.addCommand(42, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(42, ZRF.FUNCTION,	0);	// not
    design.addCommand(42, ZRF.FUNCTION,	20);	// verify
    design.addCommand(42, ZRF.LITERAL,	7);	// BYD
    design.addCommand(42, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(42, ZRF.FUNCTION,	0);	// not
    design.addCommand(42, ZRF.FUNCTION,	20);	// verify
    design.addCommand(42, ZRF.LITERAL,	11);	// YBD
    design.addCommand(42, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(42, ZRF.FUNCTION,	0);	// not
    design.addCommand(42, ZRF.FUNCTION,	20);	// verify
    design.addCommand(42, ZRF.LITERAL,	15);	// GBD
    design.addCommand(42, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(42, ZRF.FUNCTION,	0);	// not
    design.addCommand(42, ZRF.FUNCTION,	20);	// verify
    design.addCommand(42, ZRF.LITERAL,	19);	// BGD
    design.addCommand(42, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(42, ZRF.FUNCTION,	0);	// not
    design.addCommand(42, ZRF.FUNCTION,	20);	// verify
    design.addCommand(42, ZRF.LITERAL,	23);	// YGD
    design.addCommand(42, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(42, ZRF.FUNCTION,	0);	// not
    design.addCommand(42, ZRF.FUNCTION,	20);	// verify
    design.addCommand(42, ZRF.LITERAL,	27);	// GYD
    design.addCommand(42, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(42, ZRF.FUNCTION,	0);	// not
    design.addCommand(42, ZRF.FUNCTION,	20);	// verify
    design.addCommand(42, ZRF.LITERAL,	31);	// RD
    design.addCommand(42, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(42, ZRF.FUNCTION,	0);	// not
    design.addCommand(42, ZRF.FUNCTION,	20);	// verify
    design.addCommand(42, ZRF.LITERAL,	35);	// GRD
    design.addCommand(42, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(42, ZRF.FUNCTION,	0);	// not
    design.addCommand(42, ZRF.FUNCTION,	20);	// verify
    design.addCommand(42, ZRF.LITERAL,	39);	// RGD
    design.addCommand(42, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(42, ZRF.FUNCTION,	0);	// not
    design.addCommand(42, ZRF.FUNCTION,	20);	// verify
    design.addCommand(42, ZRF.PROMOTE,	19);	// BGD
    design.addCommand(42, ZRF.FUNCTION,	25);	// to
    design.addCommand(42, ZRF.FUNCTION,	28);	// end

    design.addCommand(43, ZRF.FUNCTION,	24);	// from
    design.addCommand(43, ZRF.PARAM,	0);	// $1
    design.addCommand(43, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(43, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(43, ZRF.FUNCTION,	0);	// not
    design.addCommand(43, ZRF.FUNCTION,	20);	// verify
    design.addCommand(43, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(43, ZRF.FUNCTION,	0);	// not
    design.addCommand(43, ZRF.IF,	41);
    design.addCommand(43, ZRF.LITERAL,	2);	// GC
    design.addCommand(43, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(43, ZRF.FUNCTION,	0);	// not
    design.addCommand(43, ZRF.FUNCTION,	20);	// verify
    design.addCommand(43, ZRF.LITERAL,	6);	// BYC
    design.addCommand(43, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(43, ZRF.FUNCTION,	0);	// not
    design.addCommand(43, ZRF.FUNCTION,	20);	// verify
    design.addCommand(43, ZRF.LITERAL,	10);	// YBC
    design.addCommand(43, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(43, ZRF.FUNCTION,	0);	// not
    design.addCommand(43, ZRF.FUNCTION,	20);	// verify
    design.addCommand(43, ZRF.LITERAL,	14);	// GBC
    design.addCommand(43, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(43, ZRF.FUNCTION,	0);	// not
    design.addCommand(43, ZRF.FUNCTION,	20);	// verify
    design.addCommand(43, ZRF.LITERAL,	18);	// BGC
    design.addCommand(43, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(43, ZRF.FUNCTION,	0);	// not
    design.addCommand(43, ZRF.FUNCTION,	20);	// verify
    design.addCommand(43, ZRF.LITERAL,	22);	// YGC
    design.addCommand(43, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(43, ZRF.FUNCTION,	0);	// not
    design.addCommand(43, ZRF.FUNCTION,	20);	// verify
    design.addCommand(43, ZRF.LITERAL,	26);	// GYC
    design.addCommand(43, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(43, ZRF.FUNCTION,	0);	// not
    design.addCommand(43, ZRF.FUNCTION,	20);	// verify
    design.addCommand(43, ZRF.LITERAL,	30);	// RC
    design.addCommand(43, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(43, ZRF.FUNCTION,	0);	// not
    design.addCommand(43, ZRF.FUNCTION,	20);	// verify
    design.addCommand(43, ZRF.LITERAL,	34);	// GRC
    design.addCommand(43, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(43, ZRF.FUNCTION,	0);	// not
    design.addCommand(43, ZRF.FUNCTION,	20);	// verify
    design.addCommand(43, ZRF.LITERAL,	38);	// RGC
    design.addCommand(43, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(43, ZRF.FUNCTION,	0);	// not
    design.addCommand(43, ZRF.FUNCTION,	20);	// verify
    design.addCommand(43, ZRF.PROMOTE,	14);	// GBC
    design.addCommand(43, ZRF.FUNCTION,	25);	// to
    design.addCommand(43, ZRF.FUNCTION,	28);	// end

    design.addCommand(44, ZRF.FUNCTION,	24);	// from
    design.addCommand(44, ZRF.PARAM,	0);	// $1
    design.addCommand(44, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(44, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(44, ZRF.FUNCTION,	0);	// not
    design.addCommand(44, ZRF.FUNCTION,	20);	// verify
    design.addCommand(44, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(44, ZRF.FUNCTION,	0);	// not
    design.addCommand(44, ZRF.IF,	41);
    design.addCommand(44, ZRF.LITERAL,	0);	// GA
    design.addCommand(44, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(44, ZRF.FUNCTION,	0);	// not
    design.addCommand(44, ZRF.FUNCTION,	20);	// verify
    design.addCommand(44, ZRF.LITERAL,	4);	// BYA
    design.addCommand(44, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(44, ZRF.FUNCTION,	0);	// not
    design.addCommand(44, ZRF.FUNCTION,	20);	// verify
    design.addCommand(44, ZRF.LITERAL,	8);	// YBA
    design.addCommand(44, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(44, ZRF.FUNCTION,	0);	// not
    design.addCommand(44, ZRF.FUNCTION,	20);	// verify
    design.addCommand(44, ZRF.LITERAL,	12);	// GBA
    design.addCommand(44, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(44, ZRF.FUNCTION,	0);	// not
    design.addCommand(44, ZRF.FUNCTION,	20);	// verify
    design.addCommand(44, ZRF.LITERAL,	16);	// BGA
    design.addCommand(44, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(44, ZRF.FUNCTION,	0);	// not
    design.addCommand(44, ZRF.FUNCTION,	20);	// verify
    design.addCommand(44, ZRF.LITERAL,	20);	// YGA
    design.addCommand(44, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(44, ZRF.FUNCTION,	0);	// not
    design.addCommand(44, ZRF.FUNCTION,	20);	// verify
    design.addCommand(44, ZRF.LITERAL,	24);	// GYA
    design.addCommand(44, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(44, ZRF.FUNCTION,	0);	// not
    design.addCommand(44, ZRF.FUNCTION,	20);	// verify
    design.addCommand(44, ZRF.LITERAL,	28);	// RA
    design.addCommand(44, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(44, ZRF.FUNCTION,	0);	// not
    design.addCommand(44, ZRF.FUNCTION,	20);	// verify
    design.addCommand(44, ZRF.LITERAL,	32);	// GRA
    design.addCommand(44, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(44, ZRF.FUNCTION,	0);	// not
    design.addCommand(44, ZRF.FUNCTION,	20);	// verify
    design.addCommand(44, ZRF.LITERAL,	36);	// RGA
    design.addCommand(44, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(44, ZRF.FUNCTION,	0);	// not
    design.addCommand(44, ZRF.FUNCTION,	20);	// verify
    design.addCommand(44, ZRF.PROMOTE,	12);	// GBA
    design.addCommand(44, ZRF.FUNCTION,	25);	// to
    design.addCommand(44, ZRF.FUNCTION,	28);	// end

    design.addCommand(45, ZRF.FUNCTION,	24);	// from
    design.addCommand(45, ZRF.PARAM,	0);	// $1
    design.addCommand(45, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(45, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(45, ZRF.FUNCTION,	0);	// not
    design.addCommand(45, ZRF.FUNCTION,	20);	// verify
    design.addCommand(45, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(45, ZRF.FUNCTION,	0);	// not
    design.addCommand(45, ZRF.IF,	41);
    design.addCommand(45, ZRF.LITERAL,	3);	// GD
    design.addCommand(45, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(45, ZRF.FUNCTION,	0);	// not
    design.addCommand(45, ZRF.FUNCTION,	20);	// verify
    design.addCommand(45, ZRF.LITERAL,	7);	// BYD
    design.addCommand(45, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(45, ZRF.FUNCTION,	0);	// not
    design.addCommand(45, ZRF.FUNCTION,	20);	// verify
    design.addCommand(45, ZRF.LITERAL,	11);	// YBD
    design.addCommand(45, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(45, ZRF.FUNCTION,	0);	// not
    design.addCommand(45, ZRF.FUNCTION,	20);	// verify
    design.addCommand(45, ZRF.LITERAL,	15);	// GBD
    design.addCommand(45, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(45, ZRF.FUNCTION,	0);	// not
    design.addCommand(45, ZRF.FUNCTION,	20);	// verify
    design.addCommand(45, ZRF.LITERAL,	19);	// BGD
    design.addCommand(45, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(45, ZRF.FUNCTION,	0);	// not
    design.addCommand(45, ZRF.FUNCTION,	20);	// verify
    design.addCommand(45, ZRF.LITERAL,	23);	// YGD
    design.addCommand(45, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(45, ZRF.FUNCTION,	0);	// not
    design.addCommand(45, ZRF.FUNCTION,	20);	// verify
    design.addCommand(45, ZRF.LITERAL,	27);	// GYD
    design.addCommand(45, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(45, ZRF.FUNCTION,	0);	// not
    design.addCommand(45, ZRF.FUNCTION,	20);	// verify
    design.addCommand(45, ZRF.LITERAL,	31);	// RD
    design.addCommand(45, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(45, ZRF.FUNCTION,	0);	// not
    design.addCommand(45, ZRF.FUNCTION,	20);	// verify
    design.addCommand(45, ZRF.LITERAL,	35);	// GRD
    design.addCommand(45, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(45, ZRF.FUNCTION,	0);	// not
    design.addCommand(45, ZRF.FUNCTION,	20);	// verify
    design.addCommand(45, ZRF.LITERAL,	39);	// RGD
    design.addCommand(45, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(45, ZRF.FUNCTION,	0);	// not
    design.addCommand(45, ZRF.FUNCTION,	20);	// verify
    design.addCommand(45, ZRF.PROMOTE,	15);	// GBD
    design.addCommand(45, ZRF.FUNCTION,	25);	// to
    design.addCommand(45, ZRF.FUNCTION,	28);	// end

    design.addCommand(46, ZRF.FUNCTION,	24);	// from
    design.addCommand(46, ZRF.PARAM,	0);	// $1
    design.addCommand(46, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(46, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(46, ZRF.FUNCTION,	0);	// not
    design.addCommand(46, ZRF.FUNCTION,	20);	// verify
    design.addCommand(46, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(46, ZRF.FUNCTION,	0);	// not
    design.addCommand(46, ZRF.IF,	41);
    design.addCommand(46, ZRF.LITERAL,	0);	// GA
    design.addCommand(46, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(46, ZRF.FUNCTION,	0);	// not
    design.addCommand(46, ZRF.FUNCTION,	20);	// verify
    design.addCommand(46, ZRF.LITERAL,	4);	// BYA
    design.addCommand(46, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(46, ZRF.FUNCTION,	0);	// not
    design.addCommand(46, ZRF.FUNCTION,	20);	// verify
    design.addCommand(46, ZRF.LITERAL,	8);	// YBA
    design.addCommand(46, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(46, ZRF.FUNCTION,	0);	// not
    design.addCommand(46, ZRF.FUNCTION,	20);	// verify
    design.addCommand(46, ZRF.LITERAL,	12);	// GBA
    design.addCommand(46, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(46, ZRF.FUNCTION,	0);	// not
    design.addCommand(46, ZRF.FUNCTION,	20);	// verify
    design.addCommand(46, ZRF.LITERAL,	16);	// BGA
    design.addCommand(46, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(46, ZRF.FUNCTION,	0);	// not
    design.addCommand(46, ZRF.FUNCTION,	20);	// verify
    design.addCommand(46, ZRF.LITERAL,	20);	// YGA
    design.addCommand(46, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(46, ZRF.FUNCTION,	0);	// not
    design.addCommand(46, ZRF.FUNCTION,	20);	// verify
    design.addCommand(46, ZRF.LITERAL,	24);	// GYA
    design.addCommand(46, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(46, ZRF.FUNCTION,	0);	// not
    design.addCommand(46, ZRF.FUNCTION,	20);	// verify
    design.addCommand(46, ZRF.LITERAL,	28);	// RA
    design.addCommand(46, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(46, ZRF.FUNCTION,	0);	// not
    design.addCommand(46, ZRF.FUNCTION,	20);	// verify
    design.addCommand(46, ZRF.LITERAL,	32);	// GRA
    design.addCommand(46, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(46, ZRF.FUNCTION,	0);	// not
    design.addCommand(46, ZRF.FUNCTION,	20);	// verify
    design.addCommand(46, ZRF.LITERAL,	36);	// RGA
    design.addCommand(46, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(46, ZRF.FUNCTION,	0);	// not
    design.addCommand(46, ZRF.FUNCTION,	20);	// verify
    design.addCommand(46, ZRF.PROMOTE,	16);	// BGA
    design.addCommand(46, ZRF.FUNCTION,	25);	// to
    design.addCommand(46, ZRF.FUNCTION,	28);	// end

    design.addCommand(47, ZRF.FUNCTION,	24);	// from
    design.addCommand(47, ZRF.PARAM,	0);	// $1
    design.addCommand(47, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(47, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(47, ZRF.FUNCTION,	0);	// not
    design.addCommand(47, ZRF.FUNCTION,	20);	// verify
    design.addCommand(47, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(47, ZRF.FUNCTION,	0);	// not
    design.addCommand(47, ZRF.IF,	41);
    design.addCommand(47, ZRF.LITERAL,	1);	// GB
    design.addCommand(47, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(47, ZRF.FUNCTION,	0);	// not
    design.addCommand(47, ZRF.FUNCTION,	20);	// verify
    design.addCommand(47, ZRF.LITERAL,	5);	// BYB
    design.addCommand(47, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(47, ZRF.FUNCTION,	0);	// not
    design.addCommand(47, ZRF.FUNCTION,	20);	// verify
    design.addCommand(47, ZRF.LITERAL,	9);	// YBB
    design.addCommand(47, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(47, ZRF.FUNCTION,	0);	// not
    design.addCommand(47, ZRF.FUNCTION,	20);	// verify
    design.addCommand(47, ZRF.LITERAL,	13);	// GBB
    design.addCommand(47, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(47, ZRF.FUNCTION,	0);	// not
    design.addCommand(47, ZRF.FUNCTION,	20);	// verify
    design.addCommand(47, ZRF.LITERAL,	17);	// BGB
    design.addCommand(47, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(47, ZRF.FUNCTION,	0);	// not
    design.addCommand(47, ZRF.FUNCTION,	20);	// verify
    design.addCommand(47, ZRF.LITERAL,	21);	// YGB
    design.addCommand(47, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(47, ZRF.FUNCTION,	0);	// not
    design.addCommand(47, ZRF.FUNCTION,	20);	// verify
    design.addCommand(47, ZRF.LITERAL,	25);	// GYB
    design.addCommand(47, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(47, ZRF.FUNCTION,	0);	// not
    design.addCommand(47, ZRF.FUNCTION,	20);	// verify
    design.addCommand(47, ZRF.LITERAL,	29);	// RB
    design.addCommand(47, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(47, ZRF.FUNCTION,	0);	// not
    design.addCommand(47, ZRF.FUNCTION,	20);	// verify
    design.addCommand(47, ZRF.LITERAL,	33);	// GRB
    design.addCommand(47, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(47, ZRF.FUNCTION,	0);	// not
    design.addCommand(47, ZRF.FUNCTION,	20);	// verify
    design.addCommand(47, ZRF.LITERAL,	37);	// RGB
    design.addCommand(47, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(47, ZRF.FUNCTION,	0);	// not
    design.addCommand(47, ZRF.FUNCTION,	20);	// verify
    design.addCommand(47, ZRF.PROMOTE,	17);	// BGB
    design.addCommand(47, ZRF.FUNCTION,	25);	// to
    design.addCommand(47, ZRF.FUNCTION,	28);	// end

    design.addCommand(48, ZRF.FUNCTION,	24);	// from
    design.addCommand(48, ZRF.PARAM,	0);	// $1
    design.addCommand(48, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(48, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(48, ZRF.FUNCTION,	0);	// not
    design.addCommand(48, ZRF.FUNCTION,	20);	// verify
    design.addCommand(48, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(48, ZRF.FUNCTION,	0);	// not
    design.addCommand(48, ZRF.IF,	41);
    design.addCommand(48, ZRF.LITERAL,	2);	// GC
    design.addCommand(48, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(48, ZRF.FUNCTION,	0);	// not
    design.addCommand(48, ZRF.FUNCTION,	20);	// verify
    design.addCommand(48, ZRF.LITERAL,	6);	// BYC
    design.addCommand(48, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(48, ZRF.FUNCTION,	0);	// not
    design.addCommand(48, ZRF.FUNCTION,	20);	// verify
    design.addCommand(48, ZRF.LITERAL,	10);	// YBC
    design.addCommand(48, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(48, ZRF.FUNCTION,	0);	// not
    design.addCommand(48, ZRF.FUNCTION,	20);	// verify
    design.addCommand(48, ZRF.LITERAL,	14);	// GBC
    design.addCommand(48, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(48, ZRF.FUNCTION,	0);	// not
    design.addCommand(48, ZRF.FUNCTION,	20);	// verify
    design.addCommand(48, ZRF.LITERAL,	18);	// BGC
    design.addCommand(48, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(48, ZRF.FUNCTION,	0);	// not
    design.addCommand(48, ZRF.FUNCTION,	20);	// verify
    design.addCommand(48, ZRF.LITERAL,	22);	// YGC
    design.addCommand(48, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(48, ZRF.FUNCTION,	0);	// not
    design.addCommand(48, ZRF.FUNCTION,	20);	// verify
    design.addCommand(48, ZRF.LITERAL,	26);	// GYC
    design.addCommand(48, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(48, ZRF.FUNCTION,	0);	// not
    design.addCommand(48, ZRF.FUNCTION,	20);	// verify
    design.addCommand(48, ZRF.LITERAL,	30);	// RC
    design.addCommand(48, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(48, ZRF.FUNCTION,	0);	// not
    design.addCommand(48, ZRF.FUNCTION,	20);	// verify
    design.addCommand(48, ZRF.LITERAL,	34);	// GRC
    design.addCommand(48, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(48, ZRF.FUNCTION,	0);	// not
    design.addCommand(48, ZRF.FUNCTION,	20);	// verify
    design.addCommand(48, ZRF.LITERAL,	38);	// RGC
    design.addCommand(48, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(48, ZRF.FUNCTION,	0);	// not
    design.addCommand(48, ZRF.FUNCTION,	20);	// verify
    design.addCommand(48, ZRF.PROMOTE,	18);	// BGC
    design.addCommand(48, ZRF.FUNCTION,	25);	// to
    design.addCommand(48, ZRF.FUNCTION,	28);	// end

    design.addCommand(49, ZRF.FUNCTION,	24);	// from
    design.addCommand(49, ZRF.PARAM,	0);	// $1
    design.addCommand(49, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(49, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(49, ZRF.FUNCTION,	0);	// not
    design.addCommand(49, ZRF.FUNCTION,	20);	// verify
    design.addCommand(49, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(49, ZRF.FUNCTION,	0);	// not
    design.addCommand(49, ZRF.IF,	41);
    design.addCommand(49, ZRF.LITERAL,	1);	// GB
    design.addCommand(49, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(49, ZRF.FUNCTION,	0);	// not
    design.addCommand(49, ZRF.FUNCTION,	20);	// verify
    design.addCommand(49, ZRF.LITERAL,	5);	// BYB
    design.addCommand(49, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(49, ZRF.FUNCTION,	0);	// not
    design.addCommand(49, ZRF.FUNCTION,	20);	// verify
    design.addCommand(49, ZRF.LITERAL,	9);	// YBB
    design.addCommand(49, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(49, ZRF.FUNCTION,	0);	// not
    design.addCommand(49, ZRF.FUNCTION,	20);	// verify
    design.addCommand(49, ZRF.LITERAL,	13);	// GBB
    design.addCommand(49, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(49, ZRF.FUNCTION,	0);	// not
    design.addCommand(49, ZRF.FUNCTION,	20);	// verify
    design.addCommand(49, ZRF.LITERAL,	17);	// BGB
    design.addCommand(49, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(49, ZRF.FUNCTION,	0);	// not
    design.addCommand(49, ZRF.FUNCTION,	20);	// verify
    design.addCommand(49, ZRF.LITERAL,	21);	// YGB
    design.addCommand(49, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(49, ZRF.FUNCTION,	0);	// not
    design.addCommand(49, ZRF.FUNCTION,	20);	// verify
    design.addCommand(49, ZRF.LITERAL,	25);	// GYB
    design.addCommand(49, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(49, ZRF.FUNCTION,	0);	// not
    design.addCommand(49, ZRF.FUNCTION,	20);	// verify
    design.addCommand(49, ZRF.LITERAL,	29);	// RB
    design.addCommand(49, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(49, ZRF.FUNCTION,	0);	// not
    design.addCommand(49, ZRF.FUNCTION,	20);	// verify
    design.addCommand(49, ZRF.LITERAL,	33);	// GRB
    design.addCommand(49, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(49, ZRF.FUNCTION,	0);	// not
    design.addCommand(49, ZRF.FUNCTION,	20);	// verify
    design.addCommand(49, ZRF.LITERAL,	37);	// RGB
    design.addCommand(49, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(49, ZRF.FUNCTION,	0);	// not
    design.addCommand(49, ZRF.FUNCTION,	20);	// verify
    design.addCommand(49, ZRF.PROMOTE,	21);	// YGB
    design.addCommand(49, ZRF.FUNCTION,	25);	// to
    design.addCommand(49, ZRF.FUNCTION,	28);	// end

    design.addCommand(50, ZRF.FUNCTION,	24);	// from
    design.addCommand(50, ZRF.PARAM,	0);	// $1
    design.addCommand(50, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(50, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(50, ZRF.FUNCTION,	0);	// not
    design.addCommand(50, ZRF.FUNCTION,	20);	// verify
    design.addCommand(50, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(50, ZRF.FUNCTION,	0);	// not
    design.addCommand(50, ZRF.IF,	41);
    design.addCommand(50, ZRF.LITERAL,	3);	// GD
    design.addCommand(50, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(50, ZRF.FUNCTION,	0);	// not
    design.addCommand(50, ZRF.FUNCTION,	20);	// verify
    design.addCommand(50, ZRF.LITERAL,	7);	// BYD
    design.addCommand(50, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(50, ZRF.FUNCTION,	0);	// not
    design.addCommand(50, ZRF.FUNCTION,	20);	// verify
    design.addCommand(50, ZRF.LITERAL,	11);	// YBD
    design.addCommand(50, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(50, ZRF.FUNCTION,	0);	// not
    design.addCommand(50, ZRF.FUNCTION,	20);	// verify
    design.addCommand(50, ZRF.LITERAL,	15);	// GBD
    design.addCommand(50, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(50, ZRF.FUNCTION,	0);	// not
    design.addCommand(50, ZRF.FUNCTION,	20);	// verify
    design.addCommand(50, ZRF.LITERAL,	19);	// BGD
    design.addCommand(50, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(50, ZRF.FUNCTION,	0);	// not
    design.addCommand(50, ZRF.FUNCTION,	20);	// verify
    design.addCommand(50, ZRF.LITERAL,	23);	// YGD
    design.addCommand(50, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(50, ZRF.FUNCTION,	0);	// not
    design.addCommand(50, ZRF.FUNCTION,	20);	// verify
    design.addCommand(50, ZRF.LITERAL,	27);	// GYD
    design.addCommand(50, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(50, ZRF.FUNCTION,	0);	// not
    design.addCommand(50, ZRF.FUNCTION,	20);	// verify
    design.addCommand(50, ZRF.LITERAL,	31);	// RD
    design.addCommand(50, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(50, ZRF.FUNCTION,	0);	// not
    design.addCommand(50, ZRF.FUNCTION,	20);	// verify
    design.addCommand(50, ZRF.LITERAL,	35);	// GRD
    design.addCommand(50, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(50, ZRF.FUNCTION,	0);	// not
    design.addCommand(50, ZRF.FUNCTION,	20);	// verify
    design.addCommand(50, ZRF.LITERAL,	39);	// RGD
    design.addCommand(50, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(50, ZRF.FUNCTION,	0);	// not
    design.addCommand(50, ZRF.FUNCTION,	20);	// verify
    design.addCommand(50, ZRF.PROMOTE,	27);	// GYD
    design.addCommand(50, ZRF.FUNCTION,	25);	// to
    design.addCommand(50, ZRF.FUNCTION,	28);	// end

    design.addCommand(51, ZRF.FUNCTION,	24);	// from
    design.addCommand(51, ZRF.PARAM,	0);	// $1
    design.addCommand(51, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(51, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(51, ZRF.FUNCTION,	0);	// not
    design.addCommand(51, ZRF.IF,	8);
    design.addCommand(51, ZRF.FORK,	4);
    design.addCommand(51, ZRF.PROMOTE,	21);	// YGB
    design.addCommand(51, ZRF.FUNCTION,	25);	// to
    design.addCommand(51, ZRF.FUNCTION,	28);	// end
    design.addCommand(51, ZRF.PARAM,	1);	// $2
    design.addCommand(51, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(51, ZRF.JUMP,	-9);
    design.addCommand(51, ZRF.FUNCTION,	28);	// end

    design.addCommand(52, ZRF.FUNCTION,	24);	// from
    design.addCommand(52, ZRF.PARAM,	0);	// $1
    design.addCommand(52, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(52, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(52, ZRF.FUNCTION,	0);	// not
    design.addCommand(52, ZRF.IF,	8);
    design.addCommand(52, ZRF.FORK,	4);
    design.addCommand(52, ZRF.PROMOTE,	27);	// GYD
    design.addCommand(52, ZRF.FUNCTION,	25);	// to
    design.addCommand(52, ZRF.FUNCTION,	28);	// end
    design.addCommand(52, ZRF.PARAM,	1);	// $2
    design.addCommand(52, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(52, ZRF.JUMP,	-9);
    design.addCommand(52, ZRF.FUNCTION,	28);	// end

    design.addCommand(53, ZRF.FUNCTION,	24);	// from
    design.addCommand(53, ZRF.ON_BOARD_DIR,	6);	// name
    design.addCommand(53, ZRF.FUNCTION,	0);	// not
    design.addCommand(53, ZRF.IF,	52);
    design.addCommand(53, ZRF.PARAM,	0);	// $1
    design.addCommand(53, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(53, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(53, ZRF.FUNCTION,	0);	// not
    design.addCommand(53, ZRF.IF,	46);
    design.addCommand(53, ZRF.LITERAL,	1);	// GB
    design.addCommand(53, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(53, ZRF.FUNCTION,	0);	// not
    design.addCommand(53, ZRF.FUNCTION,	20);	// verify
    design.addCommand(53, ZRF.LITERAL,	5);	// BYB
    design.addCommand(53, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(53, ZRF.FUNCTION,	0);	// not
    design.addCommand(53, ZRF.FUNCTION,	20);	// verify
    design.addCommand(53, ZRF.LITERAL,	9);	// YBB
    design.addCommand(53, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(53, ZRF.FUNCTION,	0);	// not
    design.addCommand(53, ZRF.FUNCTION,	20);	// verify
    design.addCommand(53, ZRF.LITERAL,	13);	// GBB
    design.addCommand(53, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(53, ZRF.FUNCTION,	0);	// not
    design.addCommand(53, ZRF.FUNCTION,	20);	// verify
    design.addCommand(53, ZRF.LITERAL,	17);	// BGB
    design.addCommand(53, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(53, ZRF.FUNCTION,	0);	// not
    design.addCommand(53, ZRF.FUNCTION,	20);	// verify
    design.addCommand(53, ZRF.LITERAL,	21);	// YGB
    design.addCommand(53, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(53, ZRF.FUNCTION,	0);	// not
    design.addCommand(53, ZRF.FUNCTION,	20);	// verify
    design.addCommand(53, ZRF.LITERAL,	25);	// GYB
    design.addCommand(53, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(53, ZRF.FUNCTION,	0);	// not
    design.addCommand(53, ZRF.FUNCTION,	20);	// verify
    design.addCommand(53, ZRF.LITERAL,	29);	// RB
    design.addCommand(53, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(53, ZRF.FUNCTION,	0);	// not
    design.addCommand(53, ZRF.FUNCTION,	20);	// verify
    design.addCommand(53, ZRF.LITERAL,	33);	// GRB
    design.addCommand(53, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(53, ZRF.FUNCTION,	0);	// not
    design.addCommand(53, ZRF.FUNCTION,	20);	// verify
    design.addCommand(53, ZRF.LITERAL,	37);	// RGB
    design.addCommand(53, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(53, ZRF.FUNCTION,	0);	// not
    design.addCommand(53, ZRF.FUNCTION,	20);	// verify
    design.addCommand(53, ZRF.FORK,	5);
    design.addCommand(53, ZRF.PROMOTE,	21);	// YGB
    design.addCommand(53, ZRF.MODE,	1);	// continue-type
    design.addCommand(53, ZRF.FUNCTION,	25);	// to
    design.addCommand(53, ZRF.FUNCTION,	28);	// end
    design.addCommand(53, ZRF.JUMP,	-53);
    design.addCommand(53, ZRF.FUNCTION,	28);	// end

    design.addCommand(54, ZRF.FUNCTION,	24);	// from
    design.addCommand(54, ZRF.ON_BOARD_DIR,	4);	// name
    design.addCommand(54, ZRF.FUNCTION,	0);	// not
    design.addCommand(54, ZRF.IF,	52);
    design.addCommand(54, ZRF.PARAM,	0);	// $1
    design.addCommand(54, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(54, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(54, ZRF.FUNCTION,	0);	// not
    design.addCommand(54, ZRF.IF,	46);
    design.addCommand(54, ZRF.LITERAL,	3);	// GD
    design.addCommand(54, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(54, ZRF.FUNCTION,	0);	// not
    design.addCommand(54, ZRF.FUNCTION,	20);	// verify
    design.addCommand(54, ZRF.LITERAL,	7);	// BYD
    design.addCommand(54, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(54, ZRF.FUNCTION,	0);	// not
    design.addCommand(54, ZRF.FUNCTION,	20);	// verify
    design.addCommand(54, ZRF.LITERAL,	11);	// YBD
    design.addCommand(54, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(54, ZRF.FUNCTION,	0);	// not
    design.addCommand(54, ZRF.FUNCTION,	20);	// verify
    design.addCommand(54, ZRF.LITERAL,	15);	// GBD
    design.addCommand(54, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(54, ZRF.FUNCTION,	0);	// not
    design.addCommand(54, ZRF.FUNCTION,	20);	// verify
    design.addCommand(54, ZRF.LITERAL,	19);	// BGD
    design.addCommand(54, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(54, ZRF.FUNCTION,	0);	// not
    design.addCommand(54, ZRF.FUNCTION,	20);	// verify
    design.addCommand(54, ZRF.LITERAL,	23);	// YGD
    design.addCommand(54, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(54, ZRF.FUNCTION,	0);	// not
    design.addCommand(54, ZRF.FUNCTION,	20);	// verify
    design.addCommand(54, ZRF.LITERAL,	27);	// GYD
    design.addCommand(54, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(54, ZRF.FUNCTION,	0);	// not
    design.addCommand(54, ZRF.FUNCTION,	20);	// verify
    design.addCommand(54, ZRF.LITERAL,	31);	// RD
    design.addCommand(54, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(54, ZRF.FUNCTION,	0);	// not
    design.addCommand(54, ZRF.FUNCTION,	20);	// verify
    design.addCommand(54, ZRF.LITERAL,	35);	// GRD
    design.addCommand(54, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(54, ZRF.FUNCTION,	0);	// not
    design.addCommand(54, ZRF.FUNCTION,	20);	// verify
    design.addCommand(54, ZRF.LITERAL,	39);	// RGD
    design.addCommand(54, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(54, ZRF.FUNCTION,	0);	// not
    design.addCommand(54, ZRF.FUNCTION,	20);	// verify
    design.addCommand(54, ZRF.FORK,	5);
    design.addCommand(54, ZRF.PROMOTE,	27);	// GYD
    design.addCommand(54, ZRF.MODE,	1);	// continue-type
    design.addCommand(54, ZRF.FUNCTION,	25);	// to
    design.addCommand(54, ZRF.FUNCTION,	28);	// end
    design.addCommand(54, ZRF.JUMP,	-53);
    design.addCommand(54, ZRF.FUNCTION,	28);	// end

    design.addCommand(55, ZRF.FUNCTION,	24);	// from
    design.addCommand(55, ZRF.PARAM,	0);	// $1
    design.addCommand(55, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(55, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(55, ZRF.FUNCTION,	0);	// not
    design.addCommand(55, ZRF.FUNCTION,	20);	// verify
    design.addCommand(55, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(55, ZRF.FUNCTION,	0);	// not
    design.addCommand(55, ZRF.IF,	41);
    design.addCommand(55, ZRF.LITERAL,	2);	// GC
    design.addCommand(55, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(55, ZRF.FUNCTION,	0);	// not
    design.addCommand(55, ZRF.FUNCTION,	20);	// verify
    design.addCommand(55, ZRF.LITERAL,	6);	// BYC
    design.addCommand(55, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(55, ZRF.FUNCTION,	0);	// not
    design.addCommand(55, ZRF.FUNCTION,	20);	// verify
    design.addCommand(55, ZRF.LITERAL,	10);	// YBC
    design.addCommand(55, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(55, ZRF.FUNCTION,	0);	// not
    design.addCommand(55, ZRF.FUNCTION,	20);	// verify
    design.addCommand(55, ZRF.LITERAL,	14);	// GBC
    design.addCommand(55, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(55, ZRF.FUNCTION,	0);	// not
    design.addCommand(55, ZRF.FUNCTION,	20);	// verify
    design.addCommand(55, ZRF.LITERAL,	18);	// BGC
    design.addCommand(55, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(55, ZRF.FUNCTION,	0);	// not
    design.addCommand(55, ZRF.FUNCTION,	20);	// verify
    design.addCommand(55, ZRF.LITERAL,	22);	// YGC
    design.addCommand(55, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(55, ZRF.FUNCTION,	0);	// not
    design.addCommand(55, ZRF.FUNCTION,	20);	// verify
    design.addCommand(55, ZRF.LITERAL,	26);	// GYC
    design.addCommand(55, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(55, ZRF.FUNCTION,	0);	// not
    design.addCommand(55, ZRF.FUNCTION,	20);	// verify
    design.addCommand(55, ZRF.LITERAL,	30);	// RC
    design.addCommand(55, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(55, ZRF.FUNCTION,	0);	// not
    design.addCommand(55, ZRF.FUNCTION,	20);	// verify
    design.addCommand(55, ZRF.LITERAL,	34);	// GRC
    design.addCommand(55, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(55, ZRF.FUNCTION,	0);	// not
    design.addCommand(55, ZRF.FUNCTION,	20);	// verify
    design.addCommand(55, ZRF.LITERAL,	38);	// RGC
    design.addCommand(55, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(55, ZRF.FUNCTION,	0);	// not
    design.addCommand(55, ZRF.FUNCTION,	20);	// verify
    design.addCommand(55, ZRF.PROMOTE,	22);	// YGC
    design.addCommand(55, ZRF.FUNCTION,	25);	// to
    design.addCommand(55, ZRF.FUNCTION,	28);	// end

    design.addCommand(56, ZRF.FUNCTION,	24);	// from
    design.addCommand(56, ZRF.PARAM,	0);	// $1
    design.addCommand(56, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(56, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(56, ZRF.FUNCTION,	0);	// not
    design.addCommand(56, ZRF.FUNCTION,	20);	// verify
    design.addCommand(56, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(56, ZRF.FUNCTION,	0);	// not
    design.addCommand(56, ZRF.IF,	41);
    design.addCommand(56, ZRF.LITERAL,	0);	// GA
    design.addCommand(56, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(56, ZRF.FUNCTION,	0);	// not
    design.addCommand(56, ZRF.FUNCTION,	20);	// verify
    design.addCommand(56, ZRF.LITERAL,	4);	// BYA
    design.addCommand(56, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(56, ZRF.FUNCTION,	0);	// not
    design.addCommand(56, ZRF.FUNCTION,	20);	// verify
    design.addCommand(56, ZRF.LITERAL,	8);	// YBA
    design.addCommand(56, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(56, ZRF.FUNCTION,	0);	// not
    design.addCommand(56, ZRF.FUNCTION,	20);	// verify
    design.addCommand(56, ZRF.LITERAL,	12);	// GBA
    design.addCommand(56, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(56, ZRF.FUNCTION,	0);	// not
    design.addCommand(56, ZRF.FUNCTION,	20);	// verify
    design.addCommand(56, ZRF.LITERAL,	16);	// BGA
    design.addCommand(56, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(56, ZRF.FUNCTION,	0);	// not
    design.addCommand(56, ZRF.FUNCTION,	20);	// verify
    design.addCommand(56, ZRF.LITERAL,	20);	// YGA
    design.addCommand(56, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(56, ZRF.FUNCTION,	0);	// not
    design.addCommand(56, ZRF.FUNCTION,	20);	// verify
    design.addCommand(56, ZRF.LITERAL,	24);	// GYA
    design.addCommand(56, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(56, ZRF.FUNCTION,	0);	// not
    design.addCommand(56, ZRF.FUNCTION,	20);	// verify
    design.addCommand(56, ZRF.LITERAL,	28);	// RA
    design.addCommand(56, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(56, ZRF.FUNCTION,	0);	// not
    design.addCommand(56, ZRF.FUNCTION,	20);	// verify
    design.addCommand(56, ZRF.LITERAL,	32);	// GRA
    design.addCommand(56, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(56, ZRF.FUNCTION,	0);	// not
    design.addCommand(56, ZRF.FUNCTION,	20);	// verify
    design.addCommand(56, ZRF.LITERAL,	36);	// RGA
    design.addCommand(56, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(56, ZRF.FUNCTION,	0);	// not
    design.addCommand(56, ZRF.FUNCTION,	20);	// verify
    design.addCommand(56, ZRF.PROMOTE,	20);	// YGA
    design.addCommand(56, ZRF.FUNCTION,	25);	// to
    design.addCommand(56, ZRF.FUNCTION,	28);	// end

    design.addCommand(57, ZRF.FUNCTION,	24);	// from
    design.addCommand(57, ZRF.PARAM,	0);	// $1
    design.addCommand(57, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(57, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(57, ZRF.FUNCTION,	0);	// not
    design.addCommand(57, ZRF.IF,	8);
    design.addCommand(57, ZRF.FORK,	4);
    design.addCommand(57, ZRF.PROMOTE,	22);	// YGC
    design.addCommand(57, ZRF.FUNCTION,	25);	// to
    design.addCommand(57, ZRF.FUNCTION,	28);	// end
    design.addCommand(57, ZRF.PARAM,	1);	// $2
    design.addCommand(57, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(57, ZRF.JUMP,	-9);
    design.addCommand(57, ZRF.FUNCTION,	28);	// end

    design.addCommand(58, ZRF.FUNCTION,	24);	// from
    design.addCommand(58, ZRF.PARAM,	0);	// $1
    design.addCommand(58, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(58, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(58, ZRF.FUNCTION,	0);	// not
    design.addCommand(58, ZRF.IF,	8);
    design.addCommand(58, ZRF.FORK,	4);
    design.addCommand(58, ZRF.PROMOTE,	20);	// YGA
    design.addCommand(58, ZRF.FUNCTION,	25);	// to
    design.addCommand(58, ZRF.FUNCTION,	28);	// end
    design.addCommand(58, ZRF.PARAM,	1);	// $2
    design.addCommand(58, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(58, ZRF.JUMP,	-9);
    design.addCommand(58, ZRF.FUNCTION,	28);	// end

    design.addCommand(59, ZRF.FUNCTION,	24);	// from
    design.addCommand(59, ZRF.ON_BOARD_DIR,	5);	// name
    design.addCommand(59, ZRF.FUNCTION,	0);	// not
    design.addCommand(59, ZRF.IF,	52);
    design.addCommand(59, ZRF.PARAM,	0);	// $1
    design.addCommand(59, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(59, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(59, ZRF.FUNCTION,	0);	// not
    design.addCommand(59, ZRF.IF,	46);
    design.addCommand(59, ZRF.LITERAL,	2);	// GC
    design.addCommand(59, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(59, ZRF.FUNCTION,	0);	// not
    design.addCommand(59, ZRF.FUNCTION,	20);	// verify
    design.addCommand(59, ZRF.LITERAL,	6);	// BYC
    design.addCommand(59, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(59, ZRF.FUNCTION,	0);	// not
    design.addCommand(59, ZRF.FUNCTION,	20);	// verify
    design.addCommand(59, ZRF.LITERAL,	10);	// YBC
    design.addCommand(59, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(59, ZRF.FUNCTION,	0);	// not
    design.addCommand(59, ZRF.FUNCTION,	20);	// verify
    design.addCommand(59, ZRF.LITERAL,	14);	// GBC
    design.addCommand(59, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(59, ZRF.FUNCTION,	0);	// not
    design.addCommand(59, ZRF.FUNCTION,	20);	// verify
    design.addCommand(59, ZRF.LITERAL,	18);	// BGC
    design.addCommand(59, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(59, ZRF.FUNCTION,	0);	// not
    design.addCommand(59, ZRF.FUNCTION,	20);	// verify
    design.addCommand(59, ZRF.LITERAL,	22);	// YGC
    design.addCommand(59, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(59, ZRF.FUNCTION,	0);	// not
    design.addCommand(59, ZRF.FUNCTION,	20);	// verify
    design.addCommand(59, ZRF.LITERAL,	26);	// GYC
    design.addCommand(59, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(59, ZRF.FUNCTION,	0);	// not
    design.addCommand(59, ZRF.FUNCTION,	20);	// verify
    design.addCommand(59, ZRF.LITERAL,	30);	// RC
    design.addCommand(59, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(59, ZRF.FUNCTION,	0);	// not
    design.addCommand(59, ZRF.FUNCTION,	20);	// verify
    design.addCommand(59, ZRF.LITERAL,	34);	// GRC
    design.addCommand(59, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(59, ZRF.FUNCTION,	0);	// not
    design.addCommand(59, ZRF.FUNCTION,	20);	// verify
    design.addCommand(59, ZRF.LITERAL,	38);	// RGC
    design.addCommand(59, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(59, ZRF.FUNCTION,	0);	// not
    design.addCommand(59, ZRF.FUNCTION,	20);	// verify
    design.addCommand(59, ZRF.FORK,	5);
    design.addCommand(59, ZRF.PROMOTE,	22);	// YGC
    design.addCommand(59, ZRF.MODE,	1);	// continue-type
    design.addCommand(59, ZRF.FUNCTION,	25);	// to
    design.addCommand(59, ZRF.FUNCTION,	28);	// end
    design.addCommand(59, ZRF.JUMP,	-53);
    design.addCommand(59, ZRF.FUNCTION,	28);	// end

    design.addCommand(60, ZRF.FUNCTION,	24);	// from
    design.addCommand(60, ZRF.ON_BOARD_DIR,	7);	// name
    design.addCommand(60, ZRF.FUNCTION,	0);	// not
    design.addCommand(60, ZRF.IF,	52);
    design.addCommand(60, ZRF.PARAM,	0);	// $1
    design.addCommand(60, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(60, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(60, ZRF.FUNCTION,	0);	// not
    design.addCommand(60, ZRF.IF,	46);
    design.addCommand(60, ZRF.LITERAL,	0);	// GA
    design.addCommand(60, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(60, ZRF.FUNCTION,	0);	// not
    design.addCommand(60, ZRF.FUNCTION,	20);	// verify
    design.addCommand(60, ZRF.LITERAL,	4);	// BYA
    design.addCommand(60, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(60, ZRF.FUNCTION,	0);	// not
    design.addCommand(60, ZRF.FUNCTION,	20);	// verify
    design.addCommand(60, ZRF.LITERAL,	8);	// YBA
    design.addCommand(60, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(60, ZRF.FUNCTION,	0);	// not
    design.addCommand(60, ZRF.FUNCTION,	20);	// verify
    design.addCommand(60, ZRF.LITERAL,	12);	// GBA
    design.addCommand(60, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(60, ZRF.FUNCTION,	0);	// not
    design.addCommand(60, ZRF.FUNCTION,	20);	// verify
    design.addCommand(60, ZRF.LITERAL,	16);	// BGA
    design.addCommand(60, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(60, ZRF.FUNCTION,	0);	// not
    design.addCommand(60, ZRF.FUNCTION,	20);	// verify
    design.addCommand(60, ZRF.LITERAL,	20);	// YGA
    design.addCommand(60, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(60, ZRF.FUNCTION,	0);	// not
    design.addCommand(60, ZRF.FUNCTION,	20);	// verify
    design.addCommand(60, ZRF.LITERAL,	24);	// GYA
    design.addCommand(60, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(60, ZRF.FUNCTION,	0);	// not
    design.addCommand(60, ZRF.FUNCTION,	20);	// verify
    design.addCommand(60, ZRF.LITERAL,	28);	// RA
    design.addCommand(60, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(60, ZRF.FUNCTION,	0);	// not
    design.addCommand(60, ZRF.FUNCTION,	20);	// verify
    design.addCommand(60, ZRF.LITERAL,	32);	// GRA
    design.addCommand(60, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(60, ZRF.FUNCTION,	0);	// not
    design.addCommand(60, ZRF.FUNCTION,	20);	// verify
    design.addCommand(60, ZRF.LITERAL,	36);	// RGA
    design.addCommand(60, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(60, ZRF.FUNCTION,	0);	// not
    design.addCommand(60, ZRF.FUNCTION,	20);	// verify
    design.addCommand(60, ZRF.FORK,	5);
    design.addCommand(60, ZRF.PROMOTE,	20);	// YGA
    design.addCommand(60, ZRF.MODE,	1);	// continue-type
    design.addCommand(60, ZRF.FUNCTION,	25);	// to
    design.addCommand(60, ZRF.FUNCTION,	28);	// end
    design.addCommand(60, ZRF.JUMP,	-53);
    design.addCommand(60, ZRF.FUNCTION,	28);	// end

    design.addCommand(61, ZRF.FUNCTION,	24);	// from
    design.addCommand(61, ZRF.PARAM,	0);	// $1
    design.addCommand(61, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(61, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(61, ZRF.FUNCTION,	0);	// not
    design.addCommand(61, ZRF.FUNCTION,	20);	// verify
    design.addCommand(61, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(61, ZRF.FUNCTION,	0);	// not
    design.addCommand(61, ZRF.IF,	41);
    design.addCommand(61, ZRF.LITERAL,	3);	// GD
    design.addCommand(61, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(61, ZRF.FUNCTION,	0);	// not
    design.addCommand(61, ZRF.FUNCTION,	20);	// verify
    design.addCommand(61, ZRF.LITERAL,	7);	// BYD
    design.addCommand(61, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(61, ZRF.FUNCTION,	0);	// not
    design.addCommand(61, ZRF.FUNCTION,	20);	// verify
    design.addCommand(61, ZRF.LITERAL,	11);	// YBD
    design.addCommand(61, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(61, ZRF.FUNCTION,	0);	// not
    design.addCommand(61, ZRF.FUNCTION,	20);	// verify
    design.addCommand(61, ZRF.LITERAL,	15);	// GBD
    design.addCommand(61, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(61, ZRF.FUNCTION,	0);	// not
    design.addCommand(61, ZRF.FUNCTION,	20);	// verify
    design.addCommand(61, ZRF.LITERAL,	19);	// BGD
    design.addCommand(61, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(61, ZRF.FUNCTION,	0);	// not
    design.addCommand(61, ZRF.FUNCTION,	20);	// verify
    design.addCommand(61, ZRF.LITERAL,	23);	// YGD
    design.addCommand(61, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(61, ZRF.FUNCTION,	0);	// not
    design.addCommand(61, ZRF.FUNCTION,	20);	// verify
    design.addCommand(61, ZRF.LITERAL,	27);	// GYD
    design.addCommand(61, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(61, ZRF.FUNCTION,	0);	// not
    design.addCommand(61, ZRF.FUNCTION,	20);	// verify
    design.addCommand(61, ZRF.LITERAL,	31);	// RD
    design.addCommand(61, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(61, ZRF.FUNCTION,	0);	// not
    design.addCommand(61, ZRF.FUNCTION,	20);	// verify
    design.addCommand(61, ZRF.LITERAL,	35);	// GRD
    design.addCommand(61, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(61, ZRF.FUNCTION,	0);	// not
    design.addCommand(61, ZRF.FUNCTION,	20);	// verify
    design.addCommand(61, ZRF.LITERAL,	39);	// RGD
    design.addCommand(61, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(61, ZRF.FUNCTION,	0);	// not
    design.addCommand(61, ZRF.FUNCTION,	20);	// verify
    design.addCommand(61, ZRF.PROMOTE,	23);	// YGD
    design.addCommand(61, ZRF.FUNCTION,	25);	// to
    design.addCommand(61, ZRF.FUNCTION,	28);	// end

    design.addCommand(62, ZRF.FUNCTION,	24);	// from
    design.addCommand(62, ZRF.PARAM,	0);	// $1
    design.addCommand(62, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(62, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(62, ZRF.FUNCTION,	0);	// not
    design.addCommand(62, ZRF.IF,	8);
    design.addCommand(62, ZRF.FORK,	4);
    design.addCommand(62, ZRF.PROMOTE,	23);	// YGD
    design.addCommand(62, ZRF.FUNCTION,	25);	// to
    design.addCommand(62, ZRF.FUNCTION,	28);	// end
    design.addCommand(62, ZRF.PARAM,	1);	// $2
    design.addCommand(62, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(62, ZRF.JUMP,	-9);
    design.addCommand(62, ZRF.FUNCTION,	28);	// end

    design.addCommand(63, ZRF.FUNCTION,	24);	// from
    design.addCommand(63, ZRF.ON_BOARD_DIR,	2);	// name
    design.addCommand(63, ZRF.FUNCTION,	0);	// not
    design.addCommand(63, ZRF.IF,	52);
    design.addCommand(63, ZRF.PARAM,	0);	// $1
    design.addCommand(63, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(63, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(63, ZRF.FUNCTION,	0);	// not
    design.addCommand(63, ZRF.IF,	46);
    design.addCommand(63, ZRF.LITERAL,	3);	// GD
    design.addCommand(63, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(63, ZRF.FUNCTION,	0);	// not
    design.addCommand(63, ZRF.FUNCTION,	20);	// verify
    design.addCommand(63, ZRF.LITERAL,	7);	// BYD
    design.addCommand(63, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(63, ZRF.FUNCTION,	0);	// not
    design.addCommand(63, ZRF.FUNCTION,	20);	// verify
    design.addCommand(63, ZRF.LITERAL,	11);	// YBD
    design.addCommand(63, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(63, ZRF.FUNCTION,	0);	// not
    design.addCommand(63, ZRF.FUNCTION,	20);	// verify
    design.addCommand(63, ZRF.LITERAL,	15);	// GBD
    design.addCommand(63, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(63, ZRF.FUNCTION,	0);	// not
    design.addCommand(63, ZRF.FUNCTION,	20);	// verify
    design.addCommand(63, ZRF.LITERAL,	19);	// BGD
    design.addCommand(63, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(63, ZRF.FUNCTION,	0);	// not
    design.addCommand(63, ZRF.FUNCTION,	20);	// verify
    design.addCommand(63, ZRF.LITERAL,	23);	// YGD
    design.addCommand(63, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(63, ZRF.FUNCTION,	0);	// not
    design.addCommand(63, ZRF.FUNCTION,	20);	// verify
    design.addCommand(63, ZRF.LITERAL,	27);	// GYD
    design.addCommand(63, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(63, ZRF.FUNCTION,	0);	// not
    design.addCommand(63, ZRF.FUNCTION,	20);	// verify
    design.addCommand(63, ZRF.LITERAL,	31);	// RD
    design.addCommand(63, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(63, ZRF.FUNCTION,	0);	// not
    design.addCommand(63, ZRF.FUNCTION,	20);	// verify
    design.addCommand(63, ZRF.LITERAL,	35);	// GRD
    design.addCommand(63, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(63, ZRF.FUNCTION,	0);	// not
    design.addCommand(63, ZRF.FUNCTION,	20);	// verify
    design.addCommand(63, ZRF.LITERAL,	39);	// RGD
    design.addCommand(63, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(63, ZRF.FUNCTION,	0);	// not
    design.addCommand(63, ZRF.FUNCTION,	20);	// verify
    design.addCommand(63, ZRF.FORK,	5);
    design.addCommand(63, ZRF.PROMOTE,	23);	// YGD
    design.addCommand(63, ZRF.MODE,	1);	// continue-type
    design.addCommand(63, ZRF.FUNCTION,	25);	// to
    design.addCommand(63, ZRF.FUNCTION,	28);	// end
    design.addCommand(63, ZRF.JUMP,	-53);
    design.addCommand(63, ZRF.FUNCTION,	28);	// end

    design.addCommand(64, ZRF.FUNCTION,	24);	// from
    design.addCommand(64, ZRF.PARAM,	0);	// $1
    design.addCommand(64, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(64, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(64, ZRF.FUNCTION,	0);	// not
    design.addCommand(64, ZRF.FUNCTION,	20);	// verify
    design.addCommand(64, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(64, ZRF.FUNCTION,	0);	// not
    design.addCommand(64, ZRF.IF,	41);
    design.addCommand(64, ZRF.LITERAL,	0);	// GA
    design.addCommand(64, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(64, ZRF.FUNCTION,	0);	// not
    design.addCommand(64, ZRF.FUNCTION,	20);	// verify
    design.addCommand(64, ZRF.LITERAL,	4);	// BYA
    design.addCommand(64, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(64, ZRF.FUNCTION,	0);	// not
    design.addCommand(64, ZRF.FUNCTION,	20);	// verify
    design.addCommand(64, ZRF.LITERAL,	8);	// YBA
    design.addCommand(64, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(64, ZRF.FUNCTION,	0);	// not
    design.addCommand(64, ZRF.FUNCTION,	20);	// verify
    design.addCommand(64, ZRF.LITERAL,	12);	// GBA
    design.addCommand(64, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(64, ZRF.FUNCTION,	0);	// not
    design.addCommand(64, ZRF.FUNCTION,	20);	// verify
    design.addCommand(64, ZRF.LITERAL,	16);	// BGA
    design.addCommand(64, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(64, ZRF.FUNCTION,	0);	// not
    design.addCommand(64, ZRF.FUNCTION,	20);	// verify
    design.addCommand(64, ZRF.LITERAL,	20);	// YGA
    design.addCommand(64, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(64, ZRF.FUNCTION,	0);	// not
    design.addCommand(64, ZRF.FUNCTION,	20);	// verify
    design.addCommand(64, ZRF.LITERAL,	24);	// GYA
    design.addCommand(64, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(64, ZRF.FUNCTION,	0);	// not
    design.addCommand(64, ZRF.FUNCTION,	20);	// verify
    design.addCommand(64, ZRF.LITERAL,	28);	// RA
    design.addCommand(64, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(64, ZRF.FUNCTION,	0);	// not
    design.addCommand(64, ZRF.FUNCTION,	20);	// verify
    design.addCommand(64, ZRF.LITERAL,	32);	// GRA
    design.addCommand(64, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(64, ZRF.FUNCTION,	0);	// not
    design.addCommand(64, ZRF.FUNCTION,	20);	// verify
    design.addCommand(64, ZRF.LITERAL,	36);	// RGA
    design.addCommand(64, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(64, ZRF.FUNCTION,	0);	// not
    design.addCommand(64, ZRF.FUNCTION,	20);	// verify
    design.addCommand(64, ZRF.PROMOTE,	24);	// GYA
    design.addCommand(64, ZRF.FUNCTION,	25);	// to
    design.addCommand(64, ZRF.FUNCTION,	28);	// end

    design.addCommand(65, ZRF.FUNCTION,	24);	// from
    design.addCommand(65, ZRF.PARAM,	0);	// $1
    design.addCommand(65, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(65, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(65, ZRF.FUNCTION,	0);	// not
    design.addCommand(65, ZRF.IF,	8);
    design.addCommand(65, ZRF.FORK,	4);
    design.addCommand(65, ZRF.PROMOTE,	24);	// GYA
    design.addCommand(65, ZRF.FUNCTION,	25);	// to
    design.addCommand(65, ZRF.FUNCTION,	28);	// end
    design.addCommand(65, ZRF.PARAM,	1);	// $2
    design.addCommand(65, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(65, ZRF.JUMP,	-9);
    design.addCommand(65, ZRF.FUNCTION,	28);	// end

    design.addCommand(66, ZRF.FUNCTION,	24);	// from
    design.addCommand(66, ZRF.ON_BOARD_DIR,	1);	// name
    design.addCommand(66, ZRF.FUNCTION,	0);	// not
    design.addCommand(66, ZRF.IF,	52);
    design.addCommand(66, ZRF.PARAM,	0);	// $1
    design.addCommand(66, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(66, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(66, ZRF.FUNCTION,	0);	// not
    design.addCommand(66, ZRF.IF,	46);
    design.addCommand(66, ZRF.LITERAL,	0);	// GA
    design.addCommand(66, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(66, ZRF.FUNCTION,	0);	// not
    design.addCommand(66, ZRF.FUNCTION,	20);	// verify
    design.addCommand(66, ZRF.LITERAL,	4);	// BYA
    design.addCommand(66, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(66, ZRF.FUNCTION,	0);	// not
    design.addCommand(66, ZRF.FUNCTION,	20);	// verify
    design.addCommand(66, ZRF.LITERAL,	8);	// YBA
    design.addCommand(66, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(66, ZRF.FUNCTION,	0);	// not
    design.addCommand(66, ZRF.FUNCTION,	20);	// verify
    design.addCommand(66, ZRF.LITERAL,	12);	// GBA
    design.addCommand(66, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(66, ZRF.FUNCTION,	0);	// not
    design.addCommand(66, ZRF.FUNCTION,	20);	// verify
    design.addCommand(66, ZRF.LITERAL,	16);	// BGA
    design.addCommand(66, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(66, ZRF.FUNCTION,	0);	// not
    design.addCommand(66, ZRF.FUNCTION,	20);	// verify
    design.addCommand(66, ZRF.LITERAL,	20);	// YGA
    design.addCommand(66, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(66, ZRF.FUNCTION,	0);	// not
    design.addCommand(66, ZRF.FUNCTION,	20);	// verify
    design.addCommand(66, ZRF.LITERAL,	24);	// GYA
    design.addCommand(66, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(66, ZRF.FUNCTION,	0);	// not
    design.addCommand(66, ZRF.FUNCTION,	20);	// verify
    design.addCommand(66, ZRF.LITERAL,	28);	// RA
    design.addCommand(66, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(66, ZRF.FUNCTION,	0);	// not
    design.addCommand(66, ZRF.FUNCTION,	20);	// verify
    design.addCommand(66, ZRF.LITERAL,	32);	// GRA
    design.addCommand(66, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(66, ZRF.FUNCTION,	0);	// not
    design.addCommand(66, ZRF.FUNCTION,	20);	// verify
    design.addCommand(66, ZRF.LITERAL,	36);	// RGA
    design.addCommand(66, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(66, ZRF.FUNCTION,	0);	// not
    design.addCommand(66, ZRF.FUNCTION,	20);	// verify
    design.addCommand(66, ZRF.FORK,	5);
    design.addCommand(66, ZRF.PROMOTE,	24);	// GYA
    design.addCommand(66, ZRF.MODE,	1);	// continue-type
    design.addCommand(66, ZRF.FUNCTION,	25);	// to
    design.addCommand(66, ZRF.FUNCTION,	28);	// end
    design.addCommand(66, ZRF.JUMP,	-53);
    design.addCommand(66, ZRF.FUNCTION,	28);	// end

    design.addCommand(67, ZRF.FUNCTION,	24);	// from
    design.addCommand(67, ZRF.PARAM,	0);	// $1
    design.addCommand(67, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(67, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(67, ZRF.FUNCTION,	0);	// not
    design.addCommand(67, ZRF.FUNCTION,	20);	// verify
    design.addCommand(67, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(67, ZRF.FUNCTION,	0);	// not
    design.addCommand(67, ZRF.IF,	41);
    design.addCommand(67, ZRF.LITERAL,	1);	// GB
    design.addCommand(67, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(67, ZRF.FUNCTION,	0);	// not
    design.addCommand(67, ZRF.FUNCTION,	20);	// verify
    design.addCommand(67, ZRF.LITERAL,	5);	// BYB
    design.addCommand(67, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(67, ZRF.FUNCTION,	0);	// not
    design.addCommand(67, ZRF.FUNCTION,	20);	// verify
    design.addCommand(67, ZRF.LITERAL,	9);	// YBB
    design.addCommand(67, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(67, ZRF.FUNCTION,	0);	// not
    design.addCommand(67, ZRF.FUNCTION,	20);	// verify
    design.addCommand(67, ZRF.LITERAL,	13);	// GBB
    design.addCommand(67, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(67, ZRF.FUNCTION,	0);	// not
    design.addCommand(67, ZRF.FUNCTION,	20);	// verify
    design.addCommand(67, ZRF.LITERAL,	17);	// BGB
    design.addCommand(67, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(67, ZRF.FUNCTION,	0);	// not
    design.addCommand(67, ZRF.FUNCTION,	20);	// verify
    design.addCommand(67, ZRF.LITERAL,	21);	// YGB
    design.addCommand(67, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(67, ZRF.FUNCTION,	0);	// not
    design.addCommand(67, ZRF.FUNCTION,	20);	// verify
    design.addCommand(67, ZRF.LITERAL,	25);	// GYB
    design.addCommand(67, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(67, ZRF.FUNCTION,	0);	// not
    design.addCommand(67, ZRF.FUNCTION,	20);	// verify
    design.addCommand(67, ZRF.LITERAL,	29);	// RB
    design.addCommand(67, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(67, ZRF.FUNCTION,	0);	// not
    design.addCommand(67, ZRF.FUNCTION,	20);	// verify
    design.addCommand(67, ZRF.LITERAL,	33);	// GRB
    design.addCommand(67, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(67, ZRF.FUNCTION,	0);	// not
    design.addCommand(67, ZRF.FUNCTION,	20);	// verify
    design.addCommand(67, ZRF.LITERAL,	37);	// RGB
    design.addCommand(67, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(67, ZRF.FUNCTION,	0);	// not
    design.addCommand(67, ZRF.FUNCTION,	20);	// verify
    design.addCommand(67, ZRF.PROMOTE,	25);	// GYB
    design.addCommand(67, ZRF.FUNCTION,	25);	// to
    design.addCommand(67, ZRF.FUNCTION,	28);	// end

    design.addCommand(68, ZRF.FUNCTION,	24);	// from
    design.addCommand(68, ZRF.PARAM,	0);	// $1
    design.addCommand(68, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(68, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(68, ZRF.FUNCTION,	0);	// not
    design.addCommand(68, ZRF.IF,	8);
    design.addCommand(68, ZRF.FORK,	4);
    design.addCommand(68, ZRF.PROMOTE,	25);	// GYB
    design.addCommand(68, ZRF.FUNCTION,	25);	// to
    design.addCommand(68, ZRF.FUNCTION,	28);	// end
    design.addCommand(68, ZRF.PARAM,	1);	// $2
    design.addCommand(68, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(68, ZRF.JUMP,	-9);
    design.addCommand(68, ZRF.FUNCTION,	28);	// end

    design.addCommand(69, ZRF.FUNCTION,	24);	// from
    design.addCommand(69, ZRF.ON_BOARD_DIR,	0);	// name
    design.addCommand(69, ZRF.FUNCTION,	0);	// not
    design.addCommand(69, ZRF.IF,	52);
    design.addCommand(69, ZRF.PARAM,	0);	// $1
    design.addCommand(69, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(69, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(69, ZRF.FUNCTION,	0);	// not
    design.addCommand(69, ZRF.IF,	46);
    design.addCommand(69, ZRF.LITERAL,	1);	// GB
    design.addCommand(69, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(69, ZRF.FUNCTION,	0);	// not
    design.addCommand(69, ZRF.FUNCTION,	20);	// verify
    design.addCommand(69, ZRF.LITERAL,	5);	// BYB
    design.addCommand(69, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(69, ZRF.FUNCTION,	0);	// not
    design.addCommand(69, ZRF.FUNCTION,	20);	// verify
    design.addCommand(69, ZRF.LITERAL,	9);	// YBB
    design.addCommand(69, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(69, ZRF.FUNCTION,	0);	// not
    design.addCommand(69, ZRF.FUNCTION,	20);	// verify
    design.addCommand(69, ZRF.LITERAL,	13);	// GBB
    design.addCommand(69, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(69, ZRF.FUNCTION,	0);	// not
    design.addCommand(69, ZRF.FUNCTION,	20);	// verify
    design.addCommand(69, ZRF.LITERAL,	17);	// BGB
    design.addCommand(69, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(69, ZRF.FUNCTION,	0);	// not
    design.addCommand(69, ZRF.FUNCTION,	20);	// verify
    design.addCommand(69, ZRF.LITERAL,	21);	// YGB
    design.addCommand(69, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(69, ZRF.FUNCTION,	0);	// not
    design.addCommand(69, ZRF.FUNCTION,	20);	// verify
    design.addCommand(69, ZRF.LITERAL,	25);	// GYB
    design.addCommand(69, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(69, ZRF.FUNCTION,	0);	// not
    design.addCommand(69, ZRF.FUNCTION,	20);	// verify
    design.addCommand(69, ZRF.LITERAL,	29);	// RB
    design.addCommand(69, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(69, ZRF.FUNCTION,	0);	// not
    design.addCommand(69, ZRF.FUNCTION,	20);	// verify
    design.addCommand(69, ZRF.LITERAL,	33);	// GRB
    design.addCommand(69, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(69, ZRF.FUNCTION,	0);	// not
    design.addCommand(69, ZRF.FUNCTION,	20);	// verify
    design.addCommand(69, ZRF.LITERAL,	37);	// RGB
    design.addCommand(69, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(69, ZRF.FUNCTION,	0);	// not
    design.addCommand(69, ZRF.FUNCTION,	20);	// verify
    design.addCommand(69, ZRF.FORK,	5);
    design.addCommand(69, ZRF.PROMOTE,	25);	// GYB
    design.addCommand(69, ZRF.MODE,	1);	// continue-type
    design.addCommand(69, ZRF.FUNCTION,	25);	// to
    design.addCommand(69, ZRF.FUNCTION,	28);	// end
    design.addCommand(69, ZRF.JUMP,	-53);
    design.addCommand(69, ZRF.FUNCTION,	28);	// end

    design.addCommand(70, ZRF.FUNCTION,	24);	// from
    design.addCommand(70, ZRF.PARAM,	0);	// $1
    design.addCommand(70, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(70, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(70, ZRF.FUNCTION,	0);	// not
    design.addCommand(70, ZRF.FUNCTION,	20);	// verify
    design.addCommand(70, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(70, ZRF.FUNCTION,	0);	// not
    design.addCommand(70, ZRF.IF,	41);
    design.addCommand(70, ZRF.LITERAL,	2);	// GC
    design.addCommand(70, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(70, ZRF.FUNCTION,	0);	// not
    design.addCommand(70, ZRF.FUNCTION,	20);	// verify
    design.addCommand(70, ZRF.LITERAL,	6);	// BYC
    design.addCommand(70, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(70, ZRF.FUNCTION,	0);	// not
    design.addCommand(70, ZRF.FUNCTION,	20);	// verify
    design.addCommand(70, ZRF.LITERAL,	10);	// YBC
    design.addCommand(70, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(70, ZRF.FUNCTION,	0);	// not
    design.addCommand(70, ZRF.FUNCTION,	20);	// verify
    design.addCommand(70, ZRF.LITERAL,	14);	// GBC
    design.addCommand(70, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(70, ZRF.FUNCTION,	0);	// not
    design.addCommand(70, ZRF.FUNCTION,	20);	// verify
    design.addCommand(70, ZRF.LITERAL,	18);	// BGC
    design.addCommand(70, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(70, ZRF.FUNCTION,	0);	// not
    design.addCommand(70, ZRF.FUNCTION,	20);	// verify
    design.addCommand(70, ZRF.LITERAL,	22);	// YGC
    design.addCommand(70, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(70, ZRF.FUNCTION,	0);	// not
    design.addCommand(70, ZRF.FUNCTION,	20);	// verify
    design.addCommand(70, ZRF.LITERAL,	26);	// GYC
    design.addCommand(70, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(70, ZRF.FUNCTION,	0);	// not
    design.addCommand(70, ZRF.FUNCTION,	20);	// verify
    design.addCommand(70, ZRF.LITERAL,	30);	// RC
    design.addCommand(70, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(70, ZRF.FUNCTION,	0);	// not
    design.addCommand(70, ZRF.FUNCTION,	20);	// verify
    design.addCommand(70, ZRF.LITERAL,	34);	// GRC
    design.addCommand(70, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(70, ZRF.FUNCTION,	0);	// not
    design.addCommand(70, ZRF.FUNCTION,	20);	// verify
    design.addCommand(70, ZRF.LITERAL,	38);	// RGC
    design.addCommand(70, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(70, ZRF.FUNCTION,	0);	// not
    design.addCommand(70, ZRF.FUNCTION,	20);	// verify
    design.addCommand(70, ZRF.PROMOTE,	26);	// GYC
    design.addCommand(70, ZRF.FUNCTION,	25);	// to
    design.addCommand(70, ZRF.FUNCTION,	28);	// end

    design.addCommand(71, ZRF.FUNCTION,	24);	// from
    design.addCommand(71, ZRF.PARAM,	0);	// $1
    design.addCommand(71, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(71, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(71, ZRF.FUNCTION,	0);	// not
    design.addCommand(71, ZRF.IF,	8);
    design.addCommand(71, ZRF.FORK,	4);
    design.addCommand(71, ZRF.PROMOTE,	26);	// GYC
    design.addCommand(71, ZRF.FUNCTION,	25);	// to
    design.addCommand(71, ZRF.FUNCTION,	28);	// end
    design.addCommand(71, ZRF.PARAM,	1);	// $2
    design.addCommand(71, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(71, ZRF.JUMP,	-9);
    design.addCommand(71, ZRF.FUNCTION,	28);	// end

    design.addCommand(72, ZRF.FUNCTION,	24);	// from
    design.addCommand(72, ZRF.ON_BOARD_DIR,	3);	// name
    design.addCommand(72, ZRF.FUNCTION,	0);	// not
    design.addCommand(72, ZRF.IF,	52);
    design.addCommand(72, ZRF.PARAM,	0);	// $1
    design.addCommand(72, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(72, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(72, ZRF.FUNCTION,	0);	// not
    design.addCommand(72, ZRF.IF,	46);
    design.addCommand(72, ZRF.LITERAL,	2);	// GC
    design.addCommand(72, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(72, ZRF.FUNCTION,	0);	// not
    design.addCommand(72, ZRF.FUNCTION,	20);	// verify
    design.addCommand(72, ZRF.LITERAL,	6);	// BYC
    design.addCommand(72, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(72, ZRF.FUNCTION,	0);	// not
    design.addCommand(72, ZRF.FUNCTION,	20);	// verify
    design.addCommand(72, ZRF.LITERAL,	10);	// YBC
    design.addCommand(72, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(72, ZRF.FUNCTION,	0);	// not
    design.addCommand(72, ZRF.FUNCTION,	20);	// verify
    design.addCommand(72, ZRF.LITERAL,	14);	// GBC
    design.addCommand(72, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(72, ZRF.FUNCTION,	0);	// not
    design.addCommand(72, ZRF.FUNCTION,	20);	// verify
    design.addCommand(72, ZRF.LITERAL,	18);	// BGC
    design.addCommand(72, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(72, ZRF.FUNCTION,	0);	// not
    design.addCommand(72, ZRF.FUNCTION,	20);	// verify
    design.addCommand(72, ZRF.LITERAL,	22);	// YGC
    design.addCommand(72, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(72, ZRF.FUNCTION,	0);	// not
    design.addCommand(72, ZRF.FUNCTION,	20);	// verify
    design.addCommand(72, ZRF.LITERAL,	26);	// GYC
    design.addCommand(72, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(72, ZRF.FUNCTION,	0);	// not
    design.addCommand(72, ZRF.FUNCTION,	20);	// verify
    design.addCommand(72, ZRF.LITERAL,	30);	// RC
    design.addCommand(72, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(72, ZRF.FUNCTION,	0);	// not
    design.addCommand(72, ZRF.FUNCTION,	20);	// verify
    design.addCommand(72, ZRF.LITERAL,	34);	// GRC
    design.addCommand(72, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(72, ZRF.FUNCTION,	0);	// not
    design.addCommand(72, ZRF.FUNCTION,	20);	// verify
    design.addCommand(72, ZRF.LITERAL,	38);	// RGC
    design.addCommand(72, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(72, ZRF.FUNCTION,	0);	// not
    design.addCommand(72, ZRF.FUNCTION,	20);	// verify
    design.addCommand(72, ZRF.FORK,	5);
    design.addCommand(72, ZRF.PROMOTE,	26);	// GYC
    design.addCommand(72, ZRF.MODE,	1);	// continue-type
    design.addCommand(72, ZRF.FUNCTION,	25);	// to
    design.addCommand(72, ZRF.FUNCTION,	28);	// end
    design.addCommand(72, ZRF.JUMP,	-53);
    design.addCommand(72, ZRF.FUNCTION,	28);	// end

    design.addCommand(73, ZRF.FUNCTION,	24);	// from
    design.addCommand(73, ZRF.PARAM,	0);	// $1
    design.addCommand(73, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(73, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(73, ZRF.FUNCTION,	0);	// not
    design.addCommand(73, ZRF.IF,	7);
    design.addCommand(73, ZRF.FORK,	3);
    design.addCommand(73, ZRF.FUNCTION,	25);	// to
    design.addCommand(73, ZRF.FUNCTION,	28);	// end
    design.addCommand(73, ZRF.PARAM,	1);	// $2
    design.addCommand(73, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(73, ZRF.JUMP,	-8);
    design.addCommand(73, ZRF.FUNCTION,	28);	// end

    design.addCommand(74, ZRF.FUNCTION,	24);	// from
    design.addCommand(74, ZRF.PARAM,	0);	// $1
    design.addCommand(74, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(74, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(74, ZRF.FUNCTION,	0);	// not
    design.addCommand(74, ZRF.FUNCTION,	20);	// verify
    design.addCommand(74, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(74, ZRF.FUNCTION,	0);	// not
    design.addCommand(74, ZRF.IF,	41);
    design.addCommand(74, ZRF.LITERAL,	1);	// GB
    design.addCommand(74, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(74, ZRF.FUNCTION,	0);	// not
    design.addCommand(74, ZRF.FUNCTION,	20);	// verify
    design.addCommand(74, ZRF.LITERAL,	5);	// BYB
    design.addCommand(74, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(74, ZRF.FUNCTION,	0);	// not
    design.addCommand(74, ZRF.FUNCTION,	20);	// verify
    design.addCommand(74, ZRF.LITERAL,	9);	// YBB
    design.addCommand(74, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(74, ZRF.FUNCTION,	0);	// not
    design.addCommand(74, ZRF.FUNCTION,	20);	// verify
    design.addCommand(74, ZRF.LITERAL,	13);	// GBB
    design.addCommand(74, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(74, ZRF.FUNCTION,	0);	// not
    design.addCommand(74, ZRF.FUNCTION,	20);	// verify
    design.addCommand(74, ZRF.LITERAL,	17);	// BGB
    design.addCommand(74, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(74, ZRF.FUNCTION,	0);	// not
    design.addCommand(74, ZRF.FUNCTION,	20);	// verify
    design.addCommand(74, ZRF.LITERAL,	21);	// YGB
    design.addCommand(74, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(74, ZRF.FUNCTION,	0);	// not
    design.addCommand(74, ZRF.FUNCTION,	20);	// verify
    design.addCommand(74, ZRF.LITERAL,	25);	// GYB
    design.addCommand(74, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(74, ZRF.FUNCTION,	0);	// not
    design.addCommand(74, ZRF.FUNCTION,	20);	// verify
    design.addCommand(74, ZRF.LITERAL,	29);	// RB
    design.addCommand(74, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(74, ZRF.FUNCTION,	0);	// not
    design.addCommand(74, ZRF.FUNCTION,	20);	// verify
    design.addCommand(74, ZRF.LITERAL,	33);	// GRB
    design.addCommand(74, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(74, ZRF.FUNCTION,	0);	// not
    design.addCommand(74, ZRF.FUNCTION,	20);	// verify
    design.addCommand(74, ZRF.LITERAL,	37);	// RGB
    design.addCommand(74, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(74, ZRF.FUNCTION,	0);	// not
    design.addCommand(74, ZRF.FUNCTION,	20);	// verify
    design.addCommand(74, ZRF.PROMOTE,	29);	// RB
    design.addCommand(74, ZRF.FUNCTION,	25);	// to
    design.addCommand(74, ZRF.FUNCTION,	28);	// end

    design.addCommand(75, ZRF.FUNCTION,	24);	// from
    design.addCommand(75, ZRF.PARAM,	0);	// $1
    design.addCommand(75, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(75, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(75, ZRF.FUNCTION,	0);	// not
    design.addCommand(75, ZRF.FUNCTION,	20);	// verify
    design.addCommand(75, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(75, ZRF.FUNCTION,	0);	// not
    design.addCommand(75, ZRF.IF,	41);
    design.addCommand(75, ZRF.LITERAL,	3);	// GD
    design.addCommand(75, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(75, ZRF.FUNCTION,	0);	// not
    design.addCommand(75, ZRF.FUNCTION,	20);	// verify
    design.addCommand(75, ZRF.LITERAL,	7);	// BYD
    design.addCommand(75, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(75, ZRF.FUNCTION,	0);	// not
    design.addCommand(75, ZRF.FUNCTION,	20);	// verify
    design.addCommand(75, ZRF.LITERAL,	11);	// YBD
    design.addCommand(75, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(75, ZRF.FUNCTION,	0);	// not
    design.addCommand(75, ZRF.FUNCTION,	20);	// verify
    design.addCommand(75, ZRF.LITERAL,	15);	// GBD
    design.addCommand(75, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(75, ZRF.FUNCTION,	0);	// not
    design.addCommand(75, ZRF.FUNCTION,	20);	// verify
    design.addCommand(75, ZRF.LITERAL,	19);	// BGD
    design.addCommand(75, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(75, ZRF.FUNCTION,	0);	// not
    design.addCommand(75, ZRF.FUNCTION,	20);	// verify
    design.addCommand(75, ZRF.LITERAL,	23);	// YGD
    design.addCommand(75, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(75, ZRF.FUNCTION,	0);	// not
    design.addCommand(75, ZRF.FUNCTION,	20);	// verify
    design.addCommand(75, ZRF.LITERAL,	27);	// GYD
    design.addCommand(75, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(75, ZRF.FUNCTION,	0);	// not
    design.addCommand(75, ZRF.FUNCTION,	20);	// verify
    design.addCommand(75, ZRF.LITERAL,	31);	// RD
    design.addCommand(75, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(75, ZRF.FUNCTION,	0);	// not
    design.addCommand(75, ZRF.FUNCTION,	20);	// verify
    design.addCommand(75, ZRF.LITERAL,	35);	// GRD
    design.addCommand(75, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(75, ZRF.FUNCTION,	0);	// not
    design.addCommand(75, ZRF.FUNCTION,	20);	// verify
    design.addCommand(75, ZRF.LITERAL,	39);	// RGD
    design.addCommand(75, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(75, ZRF.FUNCTION,	0);	// not
    design.addCommand(75, ZRF.FUNCTION,	20);	// verify
    design.addCommand(75, ZRF.PROMOTE,	31);	// RD
    design.addCommand(75, ZRF.FUNCTION,	25);	// to
    design.addCommand(75, ZRF.FUNCTION,	28);	// end

    design.addCommand(76, ZRF.FUNCTION,	24);	// from
    design.addCommand(76, ZRF.PARAM,	0);	// $1
    design.addCommand(76, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(76, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(76, ZRF.FUNCTION,	0);	// not
    design.addCommand(76, ZRF.FUNCTION,	20);	// verify
    design.addCommand(76, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(76, ZRF.FUNCTION,	0);	// not
    design.addCommand(76, ZRF.IF,	41);
    design.addCommand(76, ZRF.LITERAL,	2);	// GC
    design.addCommand(76, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(76, ZRF.FUNCTION,	0);	// not
    design.addCommand(76, ZRF.FUNCTION,	20);	// verify
    design.addCommand(76, ZRF.LITERAL,	6);	// BYC
    design.addCommand(76, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(76, ZRF.FUNCTION,	0);	// not
    design.addCommand(76, ZRF.FUNCTION,	20);	// verify
    design.addCommand(76, ZRF.LITERAL,	10);	// YBC
    design.addCommand(76, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(76, ZRF.FUNCTION,	0);	// not
    design.addCommand(76, ZRF.FUNCTION,	20);	// verify
    design.addCommand(76, ZRF.LITERAL,	14);	// GBC
    design.addCommand(76, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(76, ZRF.FUNCTION,	0);	// not
    design.addCommand(76, ZRF.FUNCTION,	20);	// verify
    design.addCommand(76, ZRF.LITERAL,	18);	// BGC
    design.addCommand(76, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(76, ZRF.FUNCTION,	0);	// not
    design.addCommand(76, ZRF.FUNCTION,	20);	// verify
    design.addCommand(76, ZRF.LITERAL,	22);	// YGC
    design.addCommand(76, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(76, ZRF.FUNCTION,	0);	// not
    design.addCommand(76, ZRF.FUNCTION,	20);	// verify
    design.addCommand(76, ZRF.LITERAL,	26);	// GYC
    design.addCommand(76, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(76, ZRF.FUNCTION,	0);	// not
    design.addCommand(76, ZRF.FUNCTION,	20);	// verify
    design.addCommand(76, ZRF.LITERAL,	30);	// RC
    design.addCommand(76, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(76, ZRF.FUNCTION,	0);	// not
    design.addCommand(76, ZRF.FUNCTION,	20);	// verify
    design.addCommand(76, ZRF.LITERAL,	34);	// GRC
    design.addCommand(76, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(76, ZRF.FUNCTION,	0);	// not
    design.addCommand(76, ZRF.FUNCTION,	20);	// verify
    design.addCommand(76, ZRF.LITERAL,	38);	// RGC
    design.addCommand(76, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(76, ZRF.FUNCTION,	0);	// not
    design.addCommand(76, ZRF.FUNCTION,	20);	// verify
    design.addCommand(76, ZRF.PROMOTE,	30);	// RC
    design.addCommand(76, ZRF.FUNCTION,	25);	// to
    design.addCommand(76, ZRF.FUNCTION,	28);	// end

    design.addCommand(77, ZRF.FUNCTION,	24);	// from
    design.addCommand(77, ZRF.PARAM,	0);	// $1
    design.addCommand(77, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(77, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(77, ZRF.FUNCTION,	0);	// not
    design.addCommand(77, ZRF.FUNCTION,	20);	// verify
    design.addCommand(77, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(77, ZRF.FUNCTION,	0);	// not
    design.addCommand(77, ZRF.IF,	41);
    design.addCommand(77, ZRF.LITERAL,	0);	// GA
    design.addCommand(77, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(77, ZRF.FUNCTION,	0);	// not
    design.addCommand(77, ZRF.FUNCTION,	20);	// verify
    design.addCommand(77, ZRF.LITERAL,	4);	// BYA
    design.addCommand(77, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(77, ZRF.FUNCTION,	0);	// not
    design.addCommand(77, ZRF.FUNCTION,	20);	// verify
    design.addCommand(77, ZRF.LITERAL,	8);	// YBA
    design.addCommand(77, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(77, ZRF.FUNCTION,	0);	// not
    design.addCommand(77, ZRF.FUNCTION,	20);	// verify
    design.addCommand(77, ZRF.LITERAL,	12);	// GBA
    design.addCommand(77, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(77, ZRF.FUNCTION,	0);	// not
    design.addCommand(77, ZRF.FUNCTION,	20);	// verify
    design.addCommand(77, ZRF.LITERAL,	16);	// BGA
    design.addCommand(77, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(77, ZRF.FUNCTION,	0);	// not
    design.addCommand(77, ZRF.FUNCTION,	20);	// verify
    design.addCommand(77, ZRF.LITERAL,	20);	// YGA
    design.addCommand(77, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(77, ZRF.FUNCTION,	0);	// not
    design.addCommand(77, ZRF.FUNCTION,	20);	// verify
    design.addCommand(77, ZRF.LITERAL,	24);	// GYA
    design.addCommand(77, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(77, ZRF.FUNCTION,	0);	// not
    design.addCommand(77, ZRF.FUNCTION,	20);	// verify
    design.addCommand(77, ZRF.LITERAL,	28);	// RA
    design.addCommand(77, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(77, ZRF.FUNCTION,	0);	// not
    design.addCommand(77, ZRF.FUNCTION,	20);	// verify
    design.addCommand(77, ZRF.LITERAL,	32);	// GRA
    design.addCommand(77, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(77, ZRF.FUNCTION,	0);	// not
    design.addCommand(77, ZRF.FUNCTION,	20);	// verify
    design.addCommand(77, ZRF.LITERAL,	36);	// RGA
    design.addCommand(77, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(77, ZRF.FUNCTION,	0);	// not
    design.addCommand(77, ZRF.FUNCTION,	20);	// verify
    design.addCommand(77, ZRF.PROMOTE,	28);	// RA
    design.addCommand(77, ZRF.FUNCTION,	25);	// to
    design.addCommand(77, ZRF.FUNCTION,	28);	// end

    design.addCommand(78, ZRF.FUNCTION,	24);	// from
    design.addCommand(78, ZRF.PARAM,	0);	// $1
    design.addCommand(78, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(78, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(78, ZRF.FUNCTION,	0);	// not
    design.addCommand(78, ZRF.FUNCTION,	20);	// verify
    design.addCommand(78, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(78, ZRF.FUNCTION,	0);	// not
    design.addCommand(78, ZRF.IF,	41);
    design.addCommand(78, ZRF.LITERAL,	1);	// GB
    design.addCommand(78, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(78, ZRF.FUNCTION,	0);	// not
    design.addCommand(78, ZRF.FUNCTION,	20);	// verify
    design.addCommand(78, ZRF.LITERAL,	5);	// BYB
    design.addCommand(78, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(78, ZRF.FUNCTION,	0);	// not
    design.addCommand(78, ZRF.FUNCTION,	20);	// verify
    design.addCommand(78, ZRF.LITERAL,	9);	// YBB
    design.addCommand(78, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(78, ZRF.FUNCTION,	0);	// not
    design.addCommand(78, ZRF.FUNCTION,	20);	// verify
    design.addCommand(78, ZRF.LITERAL,	13);	// GBB
    design.addCommand(78, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(78, ZRF.FUNCTION,	0);	// not
    design.addCommand(78, ZRF.FUNCTION,	20);	// verify
    design.addCommand(78, ZRF.LITERAL,	17);	// BGB
    design.addCommand(78, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(78, ZRF.FUNCTION,	0);	// not
    design.addCommand(78, ZRF.FUNCTION,	20);	// verify
    design.addCommand(78, ZRF.LITERAL,	21);	// YGB
    design.addCommand(78, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(78, ZRF.FUNCTION,	0);	// not
    design.addCommand(78, ZRF.FUNCTION,	20);	// verify
    design.addCommand(78, ZRF.LITERAL,	25);	// GYB
    design.addCommand(78, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(78, ZRF.FUNCTION,	0);	// not
    design.addCommand(78, ZRF.FUNCTION,	20);	// verify
    design.addCommand(78, ZRF.LITERAL,	29);	// RB
    design.addCommand(78, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(78, ZRF.FUNCTION,	0);	// not
    design.addCommand(78, ZRF.FUNCTION,	20);	// verify
    design.addCommand(78, ZRF.LITERAL,	33);	// GRB
    design.addCommand(78, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(78, ZRF.FUNCTION,	0);	// not
    design.addCommand(78, ZRF.FUNCTION,	20);	// verify
    design.addCommand(78, ZRF.LITERAL,	37);	// RGB
    design.addCommand(78, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(78, ZRF.FUNCTION,	0);	// not
    design.addCommand(78, ZRF.FUNCTION,	20);	// verify
    design.addCommand(78, ZRF.PROMOTE,	33);	// GRB
    design.addCommand(78, ZRF.FUNCTION,	25);	// to
    design.addCommand(78, ZRF.FUNCTION,	28);	// end

    design.addCommand(79, ZRF.FUNCTION,	24);	// from
    design.addCommand(79, ZRF.PARAM,	0);	// $1
    design.addCommand(79, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(79, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(79, ZRF.FUNCTION,	0);	// not
    design.addCommand(79, ZRF.FUNCTION,	20);	// verify
    design.addCommand(79, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(79, ZRF.FUNCTION,	0);	// not
    design.addCommand(79, ZRF.IF,	41);
    design.addCommand(79, ZRF.LITERAL,	3);	// GD
    design.addCommand(79, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(79, ZRF.FUNCTION,	0);	// not
    design.addCommand(79, ZRF.FUNCTION,	20);	// verify
    design.addCommand(79, ZRF.LITERAL,	7);	// BYD
    design.addCommand(79, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(79, ZRF.FUNCTION,	0);	// not
    design.addCommand(79, ZRF.FUNCTION,	20);	// verify
    design.addCommand(79, ZRF.LITERAL,	11);	// YBD
    design.addCommand(79, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(79, ZRF.FUNCTION,	0);	// not
    design.addCommand(79, ZRF.FUNCTION,	20);	// verify
    design.addCommand(79, ZRF.LITERAL,	15);	// GBD
    design.addCommand(79, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(79, ZRF.FUNCTION,	0);	// not
    design.addCommand(79, ZRF.FUNCTION,	20);	// verify
    design.addCommand(79, ZRF.LITERAL,	19);	// BGD
    design.addCommand(79, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(79, ZRF.FUNCTION,	0);	// not
    design.addCommand(79, ZRF.FUNCTION,	20);	// verify
    design.addCommand(79, ZRF.LITERAL,	23);	// YGD
    design.addCommand(79, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(79, ZRF.FUNCTION,	0);	// not
    design.addCommand(79, ZRF.FUNCTION,	20);	// verify
    design.addCommand(79, ZRF.LITERAL,	27);	// GYD
    design.addCommand(79, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(79, ZRF.FUNCTION,	0);	// not
    design.addCommand(79, ZRF.FUNCTION,	20);	// verify
    design.addCommand(79, ZRF.LITERAL,	31);	// RD
    design.addCommand(79, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(79, ZRF.FUNCTION,	0);	// not
    design.addCommand(79, ZRF.FUNCTION,	20);	// verify
    design.addCommand(79, ZRF.LITERAL,	35);	// GRD
    design.addCommand(79, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(79, ZRF.FUNCTION,	0);	// not
    design.addCommand(79, ZRF.FUNCTION,	20);	// verify
    design.addCommand(79, ZRF.LITERAL,	39);	// RGD
    design.addCommand(79, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(79, ZRF.FUNCTION,	0);	// not
    design.addCommand(79, ZRF.FUNCTION,	20);	// verify
    design.addCommand(79, ZRF.PROMOTE,	39);	// RGD
    design.addCommand(79, ZRF.FUNCTION,	25);	// to
    design.addCommand(79, ZRF.FUNCTION,	28);	// end

    design.addCommand(80, ZRF.FUNCTION,	24);	// from
    design.addCommand(80, ZRF.PARAM,	0);	// $1
    design.addCommand(80, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(80, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(80, ZRF.FUNCTION,	0);	// not
    design.addCommand(80, ZRF.FUNCTION,	20);	// verify
    design.addCommand(80, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(80, ZRF.FUNCTION,	0);	// not
    design.addCommand(80, ZRF.IF,	41);
    design.addCommand(80, ZRF.LITERAL,	2);	// GC
    design.addCommand(80, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(80, ZRF.FUNCTION,	0);	// not
    design.addCommand(80, ZRF.FUNCTION,	20);	// verify
    design.addCommand(80, ZRF.LITERAL,	6);	// BYC
    design.addCommand(80, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(80, ZRF.FUNCTION,	0);	// not
    design.addCommand(80, ZRF.FUNCTION,	20);	// verify
    design.addCommand(80, ZRF.LITERAL,	10);	// YBC
    design.addCommand(80, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(80, ZRF.FUNCTION,	0);	// not
    design.addCommand(80, ZRF.FUNCTION,	20);	// verify
    design.addCommand(80, ZRF.LITERAL,	14);	// GBC
    design.addCommand(80, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(80, ZRF.FUNCTION,	0);	// not
    design.addCommand(80, ZRF.FUNCTION,	20);	// verify
    design.addCommand(80, ZRF.LITERAL,	18);	// BGC
    design.addCommand(80, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(80, ZRF.FUNCTION,	0);	// not
    design.addCommand(80, ZRF.FUNCTION,	20);	// verify
    design.addCommand(80, ZRF.LITERAL,	22);	// YGC
    design.addCommand(80, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(80, ZRF.FUNCTION,	0);	// not
    design.addCommand(80, ZRF.FUNCTION,	20);	// verify
    design.addCommand(80, ZRF.LITERAL,	26);	// GYC
    design.addCommand(80, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(80, ZRF.FUNCTION,	0);	// not
    design.addCommand(80, ZRF.FUNCTION,	20);	// verify
    design.addCommand(80, ZRF.LITERAL,	30);	// RC
    design.addCommand(80, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(80, ZRF.FUNCTION,	0);	// not
    design.addCommand(80, ZRF.FUNCTION,	20);	// verify
    design.addCommand(80, ZRF.LITERAL,	34);	// GRC
    design.addCommand(80, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(80, ZRF.FUNCTION,	0);	// not
    design.addCommand(80, ZRF.FUNCTION,	20);	// verify
    design.addCommand(80, ZRF.LITERAL,	38);	// RGC
    design.addCommand(80, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(80, ZRF.FUNCTION,	0);	// not
    design.addCommand(80, ZRF.FUNCTION,	20);	// verify
    design.addCommand(80, ZRF.PROMOTE,	34);	// GRC
    design.addCommand(80, ZRF.FUNCTION,	25);	// to
    design.addCommand(80, ZRF.FUNCTION,	28);	// end

    design.addCommand(81, ZRF.FUNCTION,	24);	// from
    design.addCommand(81, ZRF.PARAM,	0);	// $1
    design.addCommand(81, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(81, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(81, ZRF.FUNCTION,	0);	// not
    design.addCommand(81, ZRF.FUNCTION,	20);	// verify
    design.addCommand(81, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(81, ZRF.FUNCTION,	0);	// not
    design.addCommand(81, ZRF.IF,	41);
    design.addCommand(81, ZRF.LITERAL,	0);	// GA
    design.addCommand(81, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(81, ZRF.FUNCTION,	0);	// not
    design.addCommand(81, ZRF.FUNCTION,	20);	// verify
    design.addCommand(81, ZRF.LITERAL,	4);	// BYA
    design.addCommand(81, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(81, ZRF.FUNCTION,	0);	// not
    design.addCommand(81, ZRF.FUNCTION,	20);	// verify
    design.addCommand(81, ZRF.LITERAL,	8);	// YBA
    design.addCommand(81, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(81, ZRF.FUNCTION,	0);	// not
    design.addCommand(81, ZRF.FUNCTION,	20);	// verify
    design.addCommand(81, ZRF.LITERAL,	12);	// GBA
    design.addCommand(81, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(81, ZRF.FUNCTION,	0);	// not
    design.addCommand(81, ZRF.FUNCTION,	20);	// verify
    design.addCommand(81, ZRF.LITERAL,	16);	// BGA
    design.addCommand(81, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(81, ZRF.FUNCTION,	0);	// not
    design.addCommand(81, ZRF.FUNCTION,	20);	// verify
    design.addCommand(81, ZRF.LITERAL,	20);	// YGA
    design.addCommand(81, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(81, ZRF.FUNCTION,	0);	// not
    design.addCommand(81, ZRF.FUNCTION,	20);	// verify
    design.addCommand(81, ZRF.LITERAL,	24);	// GYA
    design.addCommand(81, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(81, ZRF.FUNCTION,	0);	// not
    design.addCommand(81, ZRF.FUNCTION,	20);	// verify
    design.addCommand(81, ZRF.LITERAL,	28);	// RA
    design.addCommand(81, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(81, ZRF.FUNCTION,	0);	// not
    design.addCommand(81, ZRF.FUNCTION,	20);	// verify
    design.addCommand(81, ZRF.LITERAL,	32);	// GRA
    design.addCommand(81, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(81, ZRF.FUNCTION,	0);	// not
    design.addCommand(81, ZRF.FUNCTION,	20);	// verify
    design.addCommand(81, ZRF.LITERAL,	36);	// RGA
    design.addCommand(81, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(81, ZRF.FUNCTION,	0);	// not
    design.addCommand(81, ZRF.FUNCTION,	20);	// verify
    design.addCommand(81, ZRF.PROMOTE,	32);	// GRA
    design.addCommand(81, ZRF.FUNCTION,	25);	// to
    design.addCommand(81, ZRF.FUNCTION,	28);	// end

    design.addCommand(82, ZRF.FUNCTION,	24);	// from
    design.addCommand(82, ZRF.PARAM,	0);	// $1
    design.addCommand(82, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(82, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(82, ZRF.FUNCTION,	0);	// not
    design.addCommand(82, ZRF.FUNCTION,	20);	// verify
    design.addCommand(82, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(82, ZRF.FUNCTION,	0);	// not
    design.addCommand(82, ZRF.IF,	41);
    design.addCommand(82, ZRF.LITERAL,	3);	// GD
    design.addCommand(82, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(82, ZRF.FUNCTION,	0);	// not
    design.addCommand(82, ZRF.FUNCTION,	20);	// verify
    design.addCommand(82, ZRF.LITERAL,	7);	// BYD
    design.addCommand(82, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(82, ZRF.FUNCTION,	0);	// not
    design.addCommand(82, ZRF.FUNCTION,	20);	// verify
    design.addCommand(82, ZRF.LITERAL,	11);	// YBD
    design.addCommand(82, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(82, ZRF.FUNCTION,	0);	// not
    design.addCommand(82, ZRF.FUNCTION,	20);	// verify
    design.addCommand(82, ZRF.LITERAL,	15);	// GBD
    design.addCommand(82, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(82, ZRF.FUNCTION,	0);	// not
    design.addCommand(82, ZRF.FUNCTION,	20);	// verify
    design.addCommand(82, ZRF.LITERAL,	19);	// BGD
    design.addCommand(82, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(82, ZRF.FUNCTION,	0);	// not
    design.addCommand(82, ZRF.FUNCTION,	20);	// verify
    design.addCommand(82, ZRF.LITERAL,	23);	// YGD
    design.addCommand(82, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(82, ZRF.FUNCTION,	0);	// not
    design.addCommand(82, ZRF.FUNCTION,	20);	// verify
    design.addCommand(82, ZRF.LITERAL,	27);	// GYD
    design.addCommand(82, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(82, ZRF.FUNCTION,	0);	// not
    design.addCommand(82, ZRF.FUNCTION,	20);	// verify
    design.addCommand(82, ZRF.LITERAL,	31);	// RD
    design.addCommand(82, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(82, ZRF.FUNCTION,	0);	// not
    design.addCommand(82, ZRF.FUNCTION,	20);	// verify
    design.addCommand(82, ZRF.LITERAL,	35);	// GRD
    design.addCommand(82, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(82, ZRF.FUNCTION,	0);	// not
    design.addCommand(82, ZRF.FUNCTION,	20);	// verify
    design.addCommand(82, ZRF.LITERAL,	39);	// RGD
    design.addCommand(82, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(82, ZRF.FUNCTION,	0);	// not
    design.addCommand(82, ZRF.FUNCTION,	20);	// verify
    design.addCommand(82, ZRF.PROMOTE,	35);	// GRD
    design.addCommand(82, ZRF.FUNCTION,	25);	// to
    design.addCommand(82, ZRF.FUNCTION,	28);	// end

    design.addCommand(83, ZRF.FUNCTION,	24);	// from
    design.addCommand(83, ZRF.PARAM,	0);	// $1
    design.addCommand(83, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(83, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(83, ZRF.FUNCTION,	0);	// not
    design.addCommand(83, ZRF.FUNCTION,	20);	// verify
    design.addCommand(83, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(83, ZRF.FUNCTION,	0);	// not
    design.addCommand(83, ZRF.IF,	41);
    design.addCommand(83, ZRF.LITERAL,	0);	// GA
    design.addCommand(83, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(83, ZRF.FUNCTION,	0);	// not
    design.addCommand(83, ZRF.FUNCTION,	20);	// verify
    design.addCommand(83, ZRF.LITERAL,	4);	// BYA
    design.addCommand(83, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(83, ZRF.FUNCTION,	0);	// not
    design.addCommand(83, ZRF.FUNCTION,	20);	// verify
    design.addCommand(83, ZRF.LITERAL,	8);	// YBA
    design.addCommand(83, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(83, ZRF.FUNCTION,	0);	// not
    design.addCommand(83, ZRF.FUNCTION,	20);	// verify
    design.addCommand(83, ZRF.LITERAL,	12);	// GBA
    design.addCommand(83, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(83, ZRF.FUNCTION,	0);	// not
    design.addCommand(83, ZRF.FUNCTION,	20);	// verify
    design.addCommand(83, ZRF.LITERAL,	16);	// BGA
    design.addCommand(83, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(83, ZRF.FUNCTION,	0);	// not
    design.addCommand(83, ZRF.FUNCTION,	20);	// verify
    design.addCommand(83, ZRF.LITERAL,	20);	// YGA
    design.addCommand(83, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(83, ZRF.FUNCTION,	0);	// not
    design.addCommand(83, ZRF.FUNCTION,	20);	// verify
    design.addCommand(83, ZRF.LITERAL,	24);	// GYA
    design.addCommand(83, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(83, ZRF.FUNCTION,	0);	// not
    design.addCommand(83, ZRF.FUNCTION,	20);	// verify
    design.addCommand(83, ZRF.LITERAL,	28);	// RA
    design.addCommand(83, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(83, ZRF.FUNCTION,	0);	// not
    design.addCommand(83, ZRF.FUNCTION,	20);	// verify
    design.addCommand(83, ZRF.LITERAL,	32);	// GRA
    design.addCommand(83, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(83, ZRF.FUNCTION,	0);	// not
    design.addCommand(83, ZRF.FUNCTION,	20);	// verify
    design.addCommand(83, ZRF.LITERAL,	36);	// RGA
    design.addCommand(83, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(83, ZRF.FUNCTION,	0);	// not
    design.addCommand(83, ZRF.FUNCTION,	20);	// verify
    design.addCommand(83, ZRF.PROMOTE,	36);	// RGA
    design.addCommand(83, ZRF.FUNCTION,	25);	// to
    design.addCommand(83, ZRF.FUNCTION,	28);	// end

    design.addCommand(84, ZRF.FUNCTION,	24);	// from
    design.addCommand(84, ZRF.PARAM,	0);	// $1
    design.addCommand(84, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(84, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(84, ZRF.FUNCTION,	0);	// not
    design.addCommand(84, ZRF.FUNCTION,	20);	// verify
    design.addCommand(84, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(84, ZRF.FUNCTION,	0);	// not
    design.addCommand(84, ZRF.IF,	41);
    design.addCommand(84, ZRF.LITERAL,	1);	// GB
    design.addCommand(84, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(84, ZRF.FUNCTION,	0);	// not
    design.addCommand(84, ZRF.FUNCTION,	20);	// verify
    design.addCommand(84, ZRF.LITERAL,	5);	// BYB
    design.addCommand(84, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(84, ZRF.FUNCTION,	0);	// not
    design.addCommand(84, ZRF.FUNCTION,	20);	// verify
    design.addCommand(84, ZRF.LITERAL,	9);	// YBB
    design.addCommand(84, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(84, ZRF.FUNCTION,	0);	// not
    design.addCommand(84, ZRF.FUNCTION,	20);	// verify
    design.addCommand(84, ZRF.LITERAL,	13);	// GBB
    design.addCommand(84, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(84, ZRF.FUNCTION,	0);	// not
    design.addCommand(84, ZRF.FUNCTION,	20);	// verify
    design.addCommand(84, ZRF.LITERAL,	17);	// BGB
    design.addCommand(84, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(84, ZRF.FUNCTION,	0);	// not
    design.addCommand(84, ZRF.FUNCTION,	20);	// verify
    design.addCommand(84, ZRF.LITERAL,	21);	// YGB
    design.addCommand(84, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(84, ZRF.FUNCTION,	0);	// not
    design.addCommand(84, ZRF.FUNCTION,	20);	// verify
    design.addCommand(84, ZRF.LITERAL,	25);	// GYB
    design.addCommand(84, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(84, ZRF.FUNCTION,	0);	// not
    design.addCommand(84, ZRF.FUNCTION,	20);	// verify
    design.addCommand(84, ZRF.LITERAL,	29);	// RB
    design.addCommand(84, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(84, ZRF.FUNCTION,	0);	// not
    design.addCommand(84, ZRF.FUNCTION,	20);	// verify
    design.addCommand(84, ZRF.LITERAL,	33);	// GRB
    design.addCommand(84, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(84, ZRF.FUNCTION,	0);	// not
    design.addCommand(84, ZRF.FUNCTION,	20);	// verify
    design.addCommand(84, ZRF.LITERAL,	37);	// RGB
    design.addCommand(84, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(84, ZRF.FUNCTION,	0);	// not
    design.addCommand(84, ZRF.FUNCTION,	20);	// verify
    design.addCommand(84, ZRF.PROMOTE,	37);	// RGB
    design.addCommand(84, ZRF.FUNCTION,	25);	// to
    design.addCommand(84, ZRF.FUNCTION,	28);	// end

    design.addCommand(85, ZRF.FUNCTION,	24);	// from
    design.addCommand(85, ZRF.PARAM,	0);	// $1
    design.addCommand(85, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(85, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(85, ZRF.FUNCTION,	0);	// not
    design.addCommand(85, ZRF.FUNCTION,	20);	// verify
    design.addCommand(85, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(85, ZRF.FUNCTION,	0);	// not
    design.addCommand(85, ZRF.IF,	41);
    design.addCommand(85, ZRF.LITERAL,	2);	// GC
    design.addCommand(85, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(85, ZRF.FUNCTION,	0);	// not
    design.addCommand(85, ZRF.FUNCTION,	20);	// verify
    design.addCommand(85, ZRF.LITERAL,	6);	// BYC
    design.addCommand(85, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(85, ZRF.FUNCTION,	0);	// not
    design.addCommand(85, ZRF.FUNCTION,	20);	// verify
    design.addCommand(85, ZRF.LITERAL,	10);	// YBC
    design.addCommand(85, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(85, ZRF.FUNCTION,	0);	// not
    design.addCommand(85, ZRF.FUNCTION,	20);	// verify
    design.addCommand(85, ZRF.LITERAL,	14);	// GBC
    design.addCommand(85, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(85, ZRF.FUNCTION,	0);	// not
    design.addCommand(85, ZRF.FUNCTION,	20);	// verify
    design.addCommand(85, ZRF.LITERAL,	18);	// BGC
    design.addCommand(85, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(85, ZRF.FUNCTION,	0);	// not
    design.addCommand(85, ZRF.FUNCTION,	20);	// verify
    design.addCommand(85, ZRF.LITERAL,	22);	// YGC
    design.addCommand(85, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(85, ZRF.FUNCTION,	0);	// not
    design.addCommand(85, ZRF.FUNCTION,	20);	// verify
    design.addCommand(85, ZRF.LITERAL,	26);	// GYC
    design.addCommand(85, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(85, ZRF.FUNCTION,	0);	// not
    design.addCommand(85, ZRF.FUNCTION,	20);	// verify
    design.addCommand(85, ZRF.LITERAL,	30);	// RC
    design.addCommand(85, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(85, ZRF.FUNCTION,	0);	// not
    design.addCommand(85, ZRF.FUNCTION,	20);	// verify
    design.addCommand(85, ZRF.LITERAL,	34);	// GRC
    design.addCommand(85, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(85, ZRF.FUNCTION,	0);	// not
    design.addCommand(85, ZRF.FUNCTION,	20);	// verify
    design.addCommand(85, ZRF.LITERAL,	38);	// RGC
    design.addCommand(85, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(85, ZRF.FUNCTION,	0);	// not
    design.addCommand(85, ZRF.FUNCTION,	20);	// verify
    design.addCommand(85, ZRF.PROMOTE,	38);	// RGC
    design.addCommand(85, ZRF.FUNCTION,	25);	// to
    design.addCommand(85, ZRF.FUNCTION,	28);	// end

    design.addPiece("GA", 0);
    design.addMove(0, 0, [7, 7], 4);
    design.addMove(0, 0, [1, 1], 4);
    design.addMove(0, 1, [6], 0);
    design.addMove(0, 2, [4], 0);
    design.addMove(0, 1, [0], 0);
    design.addMove(0, 2, [2], 0);

    design.addPiece("GB", 1);
    design.addMove(1, 0, [6, 6], 4);
    design.addMove(1, 0, [0, 0], 4);
    design.addMove(1, 3, [5], 0);
    design.addMove(1, 4, [7], 0);
    design.addMove(1, 3, [3], 0);
    design.addMove(1, 4, [1], 0);

    design.addPiece("GC", 2);
    design.addMove(2, 0, [5, 5], 4);
    design.addMove(2, 0, [3, 3], 4);
    design.addMove(2, 2, [2], 0);
    design.addMove(2, 1, [6], 0);
    design.addMove(2, 2, [4], 0);
    design.addMove(2, 1, [0], 0);

    design.addPiece("GD", 3);
    design.addMove(3, 0, [2, 2], 4);
    design.addMove(3, 0, [4, 4], 4);
    design.addMove(3, 4, [1], 0);
    design.addMove(3, 3, [5], 0);
    design.addMove(3, 4, [7], 0);
    design.addMove(3, 3, [3], 0);

    design.addPiece("BYA", 4);
    design.addMove(4, 5, [7, 7], 3);
    design.addMove(4, 6, [6], 0);
    design.addMove(4, 7, [4], 0);
    design.addMove(4, 8, [1], 0);
    design.addMove(4, 9, [0, 0], 0);
    design.addMove(4, 10, [2, 2], 0);
    design.addMove(4, 11, [0], 1);
    design.addMove(4, 12, [2], 1);

    design.addPiece("BYB", 5);
    design.addMove(5, 13, [6, 6], 3);
    design.addMove(5, 14, [5], 0);
    design.addMove(5, 15, [7], 0);
    design.addMove(5, 16, [0], 0);
    design.addMove(5, 17, [3, 3], 0);
    design.addMove(5, 18, [1, 1], 0);
    design.addMove(5, 19, [3], 1);
    design.addMove(5, 20, [1], 1);

    design.addPiece("BYC", 6);
    design.addMove(6, 21, [5, 5], 3);
    design.addMove(6, 22, [2], 0);
    design.addMove(6, 6, [6], 0);
    design.addMove(6, 23, [3], 0);
    design.addMove(6, 24, [4, 4], 0);
    design.addMove(6, 9, [0, 0], 0);
    design.addMove(6, 25, [4], 1);
    design.addMove(6, 11, [0], 1);

    design.addPiece("BYD", 7);
    design.addMove(7, 26, [2, 2], 3);
    design.addMove(7, 27, [1], 0);
    design.addMove(7, 14, [5], 0);
    design.addMove(7, 28, [4], 0);
    design.addMove(7, 29, [7, 7], 0);
    design.addMove(7, 17, [3, 3], 0);
    design.addMove(7, 30, [7], 1);
    design.addMove(7, 19, [3], 1);

    design.addPiece("YBA", 8);
    design.addMove(8, 5, [1, 1], 3);
    design.addMove(8, 31, [0], 0);
    design.addMove(8, 22, [2], 0);
    design.addMove(8, 32, [7], 0);
    design.addMove(8, 33, [6, 6], 0);
    design.addMove(8, 24, [4, 4], 0);
    design.addMove(8, 34, [6], 1);
    design.addMove(8, 25, [4], 1);

    design.addPiece("YBB", 9);
    design.addMove(9, 13, [0, 0], 3);
    design.addMove(9, 35, [3], 0);
    design.addMove(9, 27, [1], 0);
    design.addMove(9, 36, [6], 0);
    design.addMove(9, 37, [5, 5], 0);
    design.addMove(9, 29, [7, 7], 0);
    design.addMove(9, 38, [5], 1);
    design.addMove(9, 30, [7], 1);

    design.addPiece("YBC", 10);
    design.addMove(10, 21, [3, 3], 3);
    design.addMove(10, 7, [4], 0);
    design.addMove(10, 31, [0], 0);
    design.addMove(10, 39, [5], 0);
    design.addMove(10, 10, [2, 2], 0);
    design.addMove(10, 33, [6, 6], 0);
    design.addMove(10, 12, [2], 1);
    design.addMove(10, 34, [6], 1);

    design.addPiece("YBD", 11);
    design.addMove(11, 26, [4, 4], 3);
    design.addMove(11, 15, [7], 0);
    design.addMove(11, 35, [3], 0);
    design.addMove(11, 40, [2], 0);
    design.addMove(11, 18, [1, 1], 0);
    design.addMove(11, 37, [5, 5], 0);
    design.addMove(11, 20, [1], 1);
    design.addMove(11, 38, [5], 1);

    design.addPiece("GBA", 12);
    design.addMove(12, 0, [7, 7], 4);
    design.addMove(12, 41, [6], 0);
    design.addMove(12, 42, [4], 0);
    design.addMove(12, 5, [1, 1], 3);
    design.addMove(12, 41, [0], 0);
    design.addMove(12, 42, [2], 0);

    design.addPiece("GBB", 13);
    design.addMove(13, 0, [6, 6], 4);
    design.addMove(13, 43, [5], 0);
    design.addMove(13, 44, [7], 0);
    design.addMove(13, 13, [0, 0], 3);
    design.addMove(13, 43, [3], 0);
    design.addMove(13, 44, [1], 0);

    design.addPiece("GBC", 14);
    design.addMove(14, 0, [5, 5], 4);
    design.addMove(14, 45, [2], 0);
    design.addMove(14, 41, [6], 0);
    design.addMove(14, 21, [3, 3], 3);
    design.addMove(14, 45, [4], 0);
    design.addMove(14, 41, [0], 0);

    design.addPiece("GBD", 15);
    design.addMove(15, 0, [2, 2], 4);
    design.addMove(15, 46, [1], 0);
    design.addMove(15, 43, [5], 0);
    design.addMove(15, 26, [4, 4], 3);
    design.addMove(15, 46, [7], 0);
    design.addMove(15, 43, [3], 0);

    design.addPiece("BGA", 16);
    design.addMove(16, 0, [1, 1], 4);
    design.addMove(16, 47, [0], 0);
    design.addMove(16, 45, [2], 0);
    design.addMove(16, 5, [7, 7], 3);
    design.addMove(16, 47, [6], 0);
    design.addMove(16, 45, [4], 0);

    design.addPiece("BGB", 17);
    design.addMove(17, 0, [0, 0], 4);
    design.addMove(17, 48, [3], 0);
    design.addMove(17, 46, [1], 0);
    design.addMove(17, 13, [6, 6], 3);
    design.addMove(17, 48, [5], 0);
    design.addMove(17, 46, [7], 0);

    design.addPiece("BGC", 18);
    design.addMove(18, 0, [3, 3], 4);
    design.addMove(18, 42, [4], 0);
    design.addMove(18, 47, [0], 0);
    design.addMove(18, 21, [5, 5], 3);
    design.addMove(18, 42, [2], 0);
    design.addMove(18, 47, [6], 0);

    design.addPiece("BGD", 19);
    design.addMove(19, 0, [4, 4], 4);
    design.addMove(19, 44, [7], 0);
    design.addMove(19, 48, [3], 0);
    design.addMove(19, 26, [2, 2], 3);
    design.addMove(19, 44, [1], 0);
    design.addMove(19, 48, [5], 0);

    design.addPiece("YGA", 20);
    design.addMove(20, 0, [1, 1], 4);
    design.addMove(20, 49, [0], 0);
    design.addMove(20, 50, [2], 0);
    design.addMove(20, 32, [7], 0);
    design.addMove(20, 51, [6, 6], 0);
    design.addMove(20, 52, [4, 4], 0);
    design.addMove(20, 53, [6], 1);
    design.addMove(20, 54, [4], 1);

    design.addPiece("YGB", 21);
    design.addMove(21, 0, [0, 0], 4);
    design.addMove(21, 55, [3], 0);
    design.addMove(21, 56, [1], 0);
    design.addMove(21, 36, [6], 0);
    design.addMove(21, 57, [5, 5], 0);
    design.addMove(21, 58, [7, 7], 0);
    design.addMove(21, 59, [5], 1);
    design.addMove(21, 60, [7], 1);

    design.addPiece("YGC", 22);
    design.addMove(22, 0, [3, 3], 4);
    design.addMove(22, 61, [4], 0);
    design.addMove(22, 49, [0], 0);
    design.addMove(22, 39, [5], 0);
    design.addMove(22, 62, [2, 2], 0);
    design.addMove(22, 51, [6, 6], 0);
    design.addMove(22, 63, [2], 1);
    design.addMove(22, 53, [6], 1);

    design.addPiece("YGD", 23);
    design.addMove(23, 0, [4, 4], 4);
    design.addMove(23, 64, [7], 0);
    design.addMove(23, 55, [3], 0);
    design.addMove(23, 40, [2], 0);
    design.addMove(23, 65, [1, 1], 0);
    design.addMove(23, 57, [5, 5], 0);
    design.addMove(23, 66, [1], 1);
    design.addMove(23, 59, [5], 1);

    design.addPiece("GYA", 24);
    design.addMove(24, 0, [7, 7], 4);
    design.addMove(24, 67, [6], 0);
    design.addMove(24, 61, [4], 0);
    design.addMove(24, 8, [1], 0);
    design.addMove(24, 68, [0, 0], 0);
    design.addMove(24, 62, [2, 2], 0);
    design.addMove(24, 69, [0], 1);
    design.addMove(24, 63, [2], 1);

    design.addPiece("GYB", 25);
    design.addMove(25, 0, [6, 6], 4);
    design.addMove(25, 70, [5], 0);
    design.addMove(25, 64, [7], 0);
    design.addMove(25, 16, [0], 0);
    design.addMove(25, 71, [3, 3], 0);
    design.addMove(25, 65, [1, 1], 0);
    design.addMove(25, 72, [3], 1);
    design.addMove(25, 66, [1], 1);

    design.addPiece("GYC", 26);
    design.addMove(26, 0, [5, 5], 4);
    design.addMove(26, 50, [2], 0);
    design.addMove(26, 67, [6], 0);
    design.addMove(26, 23, [3], 0);
    design.addMove(26, 52, [4, 4], 0);
    design.addMove(26, 68, [0, 0], 0);
    design.addMove(26, 54, [4], 1);
    design.addMove(26, 69, [0], 1);

    design.addPiece("GYD", 27);
    design.addMove(27, 0, [2, 2], 4);
    design.addMove(27, 56, [1], 0);
    design.addMove(27, 70, [5], 0);
    design.addMove(27, 28, [4], 0);
    design.addMove(27, 58, [7, 7], 0);
    design.addMove(27, 71, [3, 3], 0);
    design.addMove(27, 60, [7], 1);
    design.addMove(27, 72, [3], 1);

    design.addPiece("RA", 28);
    design.addMove(28, 73, [7, 7], 2);
    design.addMove(28, 73, [1, 1], 2);
    design.addMove(28, 74, [6], 0);
    design.addMove(28, 75, [4], 0);
    design.addMove(28, 74, [0], 0);
    design.addMove(28, 75, [2], 0);

    design.addPiece("RB", 29);
    design.addMove(29, 73, [6, 6], 2);
    design.addMove(29, 73, [0, 0], 2);
    design.addMove(29, 76, [5], 0);
    design.addMove(29, 77, [7], 0);
    design.addMove(29, 76, [3], 0);
    design.addMove(29, 77, [1], 0);

    design.addPiece("RC", 30);
    design.addMove(30, 73, [5, 5], 2);
    design.addMove(30, 73, [3, 3], 2);
    design.addMove(30, 75, [2], 0);
    design.addMove(30, 74, [6], 0);
    design.addMove(30, 75, [4], 0);
    design.addMove(30, 74, [0], 0);

    design.addPiece("RD", 31);
    design.addMove(31, 73, [2, 2], 2);
    design.addMove(31, 73, [4, 4], 2);
    design.addMove(31, 77, [1], 0);
    design.addMove(31, 76, [5], 0);
    design.addMove(31, 77, [7], 0);
    design.addMove(31, 76, [3], 0);

    design.addPiece("GRA", 32);
    design.addMove(32, 0, [7, 7], 4);
    design.addMove(32, 78, [6], 0);
    design.addMove(32, 79, [4], 0);
    design.addMove(32, 73, [1, 1], 2);
    design.addMove(32, 78, [0], 0);
    design.addMove(32, 79, [2], 0);

    design.addPiece("GRB", 33);
    design.addMove(33, 0, [6, 6], 4);
    design.addMove(33, 80, [5], 0);
    design.addMove(33, 81, [7], 0);
    design.addMove(33, 73, [0, 0], 2);
    design.addMove(33, 80, [3], 0);
    design.addMove(33, 81, [1], 0);

    design.addPiece("GRC", 34);
    design.addMove(34, 0, [5, 5], 4);
    design.addMove(34, 82, [2], 0);
    design.addMove(34, 78, [6], 0);
    design.addMove(34, 73, [3, 3], 2);
    design.addMove(34, 82, [4], 0);
    design.addMove(34, 78, [0], 0);

    design.addPiece("GRD", 35);
    design.addMove(35, 0, [2, 2], 4);
    design.addMove(35, 83, [1], 0);
    design.addMove(35, 80, [5], 0);
    design.addMove(35, 73, [4, 4], 2);
    design.addMove(35, 83, [7], 0);
    design.addMove(35, 80, [3], 0);

    design.addPiece("RGA", 36);
    design.addMove(36, 0, [1, 1], 4);
    design.addMove(36, 84, [0], 0);
    design.addMove(36, 82, [2], 0);
    design.addMove(36, 73, [7, 7], 2);
    design.addMove(36, 84, [6], 0);
    design.addMove(36, 82, [4], 0);

    design.addPiece("RGB", 37);
    design.addMove(37, 0, [0, 0], 4);
    design.addMove(37, 85, [3], 0);
    design.addMove(37, 83, [1], 0);
    design.addMove(37, 73, [6, 6], 2);
    design.addMove(37, 85, [5], 0);
    design.addMove(37, 83, [7], 0);

    design.addPiece("RGC", 38);
    design.addMove(38, 0, [3, 3], 4);
    design.addMove(38, 79, [4], 0);
    design.addMove(38, 84, [0], 0);
    design.addMove(38, 73, [5, 5], 2);
    design.addMove(38, 79, [2], 0);
    design.addMove(38, 84, [6], 0);

    design.addPiece("RGD", 39);
    design.addMove(39, 0, [4, 4], 4);
    design.addMove(39, 81, [7], 0);
    design.addMove(39, 85, [3], 0);
    design.addMove(39, 73, [2, 2], 2);
    design.addMove(39, 81, [1], 0);
    design.addMove(39, 85, [5], 0);

    design.setupSelector(2);

    design.setup("Light", "GA", 82, 1);
    design.setup("Light", "GA", 83, 1);
    design.setup("Light", "GA", 84, 1);
    design.setup("Light", "GA", 85, 1);
    design.setup("Light", "GA", 86, 1);
    design.setup("Light", "GA", 87, 1);
    design.setup("Light", "GC", 91, 1);
    design.setup("Light", "GC", 98, 1);
    design.setup("Light", "GB", 81, 1);
    design.setup("Light", "GD", 88, 1);
    design.setup("Light", "YBD", 94, 1);
    design.setup("Light", "BYB", 95, 1);
    design.setup("Light", "GYB", 93, 1);
    design.setup("Light", "YGD", 96, 1);
    design.setup("Light", "BGB", 92, 1);
    design.setup("Light", "GBD", 97, 1);
    design.setup("Dark", "GA", 12, 1);
    design.setup("Dark", "GA", 13, 1);
    design.setup("Dark", "GA", 14, 1);
    design.setup("Dark", "GA", 15, 1);
    design.setup("Dark", "GA", 16, 1);
    design.setup("Dark", "GA", 17, 1);
    design.setup("Dark", "GC", 1, 1);
    design.setup("Dark", "GC", 8, 1);
    design.setup("Dark", "GB", 18, 1);
    design.setup("Dark", "GD", 11, 1);
    design.setup("Dark", "RD", 4, 1);
    design.setup("Dark", "RB", 5, 1);
    design.setup("Dark", "GRB", 3, 1);
    design.setup("Dark", "RGD", 6, 1);
    design.setup("Dark", "BGD", 2, 1);
    design.setup("Dark", "GBB", 7, 1);

    design.setup("Light", "GA", 82, 2);
    design.setup("Light", "GA", 83, 2);
    design.setup("Light", "GA", 84, 2);
    design.setup("Light", "GA", 85, 2);
    design.setup("Light", "GA", 86, 2);
    design.setup("Light", "GA", 87, 2);
    design.setup("Light", "GC", 91, 2);
    design.setup("Light", "GC", 98, 2);
    design.setup("Light", "GB", 81, 2);
    design.setup("Light", "GD", 88, 2);
    design.setup("Light", "BYA", 94, 2);
    design.setup("Light", "BYA", 95, 2);
    design.setup("Light", "GBB", 93, 2);
    design.setup("Light", "BGD", 96, 2);
    design.setup("Light", "GYB", 92, 2);
    design.setup("Light", "YGD", 97, 2);
    design.setup("Dark", "GA", 12, 2);
    design.setup("Dark", "GA", 13, 2);
    design.setup("Dark", "GA", 14, 2);
    design.setup("Dark", "GA", 15, 2);
    design.setup("Dark", "GA", 16, 2);
    design.setup("Dark", "GA", 17, 2);
    design.setup("Dark", "GC", 1, 2);
    design.setup("Dark", "GC", 8, 2);
    design.setup("Dark", "GB", 18, 2);
    design.setup("Dark", "GD", 11, 2);
    design.setup("Dark", "RA", 4, 2);
    design.setup("Dark", "RA", 5, 2);
    design.setup("Dark", "GRD", 3, 2);
    design.setup("Dark", "RGB", 6, 2);
    design.setup("Dark", "GBD", 2, 2);
    design.setup("Dark", "BGB", 7, 2);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("LightGA", "Light GA");
    view.defPiece("DarkGA", "Dark GA");
    view.defPiece("LightGB", "Light GB");
    view.defPiece("DarkGB", "Dark GB");
    view.defPiece("LightGC", "Light GC");
    view.defPiece("DarkGC", "Dark GC");
    view.defPiece("LightGD", "Light GD");
    view.defPiece("DarkGD", "Dark GD");
    view.defPiece("LightBYA", "Light BYA");
    view.defPiece("LightBYB", "Light BYB");
    view.defPiece("LightBYC", "Light BYC");
    view.defPiece("LightBYD", "Light BYD");
    view.defPiece("LightYBA", "Light YBA");
    view.defPiece("LightYBB", "Light YBB");
    view.defPiece("LightYBC", "Light YBC");
    view.defPiece("LightYBD", "Light YBD");
    view.defPiece("LightGBA", "Light GBA");
    view.defPiece("DarkGBA", "Dark GBA");
    view.defPiece("LightGBB", "Light GBB");
    view.defPiece("DarkGBB", "Dark GBB");
    view.defPiece("LightGBC", "Light GBC");
    view.defPiece("DarkGBC", "Dark GBC");
    view.defPiece("LightGBD", "Light GBD");
    view.defPiece("DarkGBD", "Dark GBD");
    view.defPiece("LightBGA", "Light BGA");
    view.defPiece("DarkBGA", "Dark BGA");
    view.defPiece("LightBGB", "Light BGB");
    view.defPiece("DarkBGB", "Dark BGB");
    view.defPiece("LightBGC", "Light BGC");
    view.defPiece("DarkBGC", "Dark BGC");
    view.defPiece("LightBGD", "Light BGD");
    view.defPiece("DarkBGD", "Dark BGD");
    view.defPiece("LightYGA", "Light YGA");
    view.defPiece("LightYGB", "Light YGB");
    view.defPiece("LightYGC", "Light YGC");
    view.defPiece("LightYGD", "Light YGD");
    view.defPiece("LightGYA", "Light GYA");
    view.defPiece("LightGYB", "Light GYB");
    view.defPiece("LightGYC", "Light GYC");
    view.defPiece("LightGYD", "Light GYD");
    view.defPiece("DarkRA", "Dark RA");
    view.defPiece("DarkRB", "Dark RB");
    view.defPiece("DarkRC", "Dark RC");
    view.defPiece("DarkRD", "Dark RD");
    view.defPiece("DarkGRA", "Dark GRA");
    view.defPiece("DarkGRB", "Dark GRB");
    view.defPiece("DarkGRC", "Dark GRC");
    view.defPiece("DarkGRD", "Dark GRD");
    view.defPiece("DarkRGA", "Dark RGA");
    view.defPiece("DarkRGB", "Dark RGB");
    view.defPiece("DarkRGC", "Dark RGC");
    view.defPiece("DarkRGD", "Dark RGD");
    view.defPiece("Ko", "Ko");
 
    view.defPosition("a10", 2, 2, 70, 70);
    view.defPosition("b10", 72, 2, 70, 70);
    view.defPosition("c10", 142, 2, 70, 70);
    view.defPosition("d10", 212, 2, 70, 70);
    view.defPosition("e10", 282, 2, 70, 70);
    view.defPosition("f10", 352, 2, 70, 70);
    view.defPosition("g10", 422, 2, 70, 70);
    view.defPosition("h10", 492, 2, 70, 70);
    view.defPosition("i10", 562, 2, 70, 70);
    view.defPosition("j10", 632, 2, 70, 70);
    view.defPosition("a9", 2, 72, 70, 70);
    view.defPosition("b9", 72, 72, 70, 70);
    view.defPosition("c9", 142, 72, 70, 70);
    view.defPosition("d9", 212, 72, 70, 70);
    view.defPosition("e9", 282, 72, 70, 70);
    view.defPosition("f9", 352, 72, 70, 70);
    view.defPosition("g9", 422, 72, 70, 70);
    view.defPosition("h9", 492, 72, 70, 70);
    view.defPosition("i9", 562, 72, 70, 70);
    view.defPosition("j9", 632, 72, 70, 70);
    view.defPosition("a8", 2, 142, 70, 70);
    view.defPosition("b8", 72, 142, 70, 70);
    view.defPosition("c8", 142, 142, 70, 70);
    view.defPosition("d8", 212, 142, 70, 70);
    view.defPosition("e8", 282, 142, 70, 70);
    view.defPosition("f8", 352, 142, 70, 70);
    view.defPosition("g8", 422, 142, 70, 70);
    view.defPosition("h8", 492, 142, 70, 70);
    view.defPosition("i8", 562, 142, 70, 70);
    view.defPosition("j8", 632, 142, 70, 70);
    view.defPosition("a7", 2, 212, 70, 70);
    view.defPosition("b7", 72, 212, 70, 70);
    view.defPosition("c7", 142, 212, 70, 70);
    view.defPosition("d7", 212, 212, 70, 70);
    view.defPosition("e7", 282, 212, 70, 70);
    view.defPosition("f7", 352, 212, 70, 70);
    view.defPosition("g7", 422, 212, 70, 70);
    view.defPosition("h7", 492, 212, 70, 70);
    view.defPosition("i7", 562, 212, 70, 70);
    view.defPosition("j7", 632, 212, 70, 70);
    view.defPosition("a6", 2, 282, 70, 70);
    view.defPosition("b6", 72, 282, 70, 70);
    view.defPosition("c6", 142, 282, 70, 70);
    view.defPosition("d6", 212, 282, 70, 70);
    view.defPosition("e6", 282, 282, 70, 70);
    view.defPosition("f6", 352, 282, 70, 70);
    view.defPosition("g6", 422, 282, 70, 70);
    view.defPosition("h6", 492, 282, 70, 70);
    view.defPosition("i6", 562, 282, 70, 70);
    view.defPosition("j6", 632, 282, 70, 70);
    view.defPosition("a5", 2, 352, 70, 70);
    view.defPosition("b5", 72, 352, 70, 70);
    view.defPosition("c5", 142, 352, 70, 70);
    view.defPosition("d5", 212, 352, 70, 70);
    view.defPosition("e5", 282, 352, 70, 70);
    view.defPosition("f5", 352, 352, 70, 70);
    view.defPosition("g5", 422, 352, 70, 70);
    view.defPosition("h5", 492, 352, 70, 70);
    view.defPosition("i5", 562, 352, 70, 70);
    view.defPosition("j5", 632, 352, 70, 70);
    view.defPosition("a4", 2, 422, 70, 70);
    view.defPosition("b4", 72, 422, 70, 70);
    view.defPosition("c4", 142, 422, 70, 70);
    view.defPosition("d4", 212, 422, 70, 70);
    view.defPosition("e4", 282, 422, 70, 70);
    view.defPosition("f4", 352, 422, 70, 70);
    view.defPosition("g4", 422, 422, 70, 70);
    view.defPosition("h4", 492, 422, 70, 70);
    view.defPosition("i4", 562, 422, 70, 70);
    view.defPosition("j4", 632, 422, 70, 70);
    view.defPosition("a3", 2, 492, 70, 70);
    view.defPosition("b3", 72, 492, 70, 70);
    view.defPosition("c3", 142, 492, 70, 70);
    view.defPosition("d3", 212, 492, 70, 70);
    view.defPosition("e3", 282, 492, 70, 70);
    view.defPosition("f3", 352, 492, 70, 70);
    view.defPosition("g3", 422, 492, 70, 70);
    view.defPosition("h3", 492, 492, 70, 70);
    view.defPosition("i3", 562, 492, 70, 70);
    view.defPosition("j3", 632, 492, 70, 70);
    view.defPosition("a2", 2, 562, 70, 70);
    view.defPosition("b2", 72, 562, 70, 70);
    view.defPosition("c2", 142, 562, 70, 70);
    view.defPosition("d2", 212, 562, 70, 70);
    view.defPosition("e2", 282, 562, 70, 70);
    view.defPosition("f2", 352, 562, 70, 70);
    view.defPosition("g2", 422, 562, 70, 70);
    view.defPosition("h2", 492, 562, 70, 70);
    view.defPosition("i2", 562, 562, 70, 70);
    view.defPosition("j2", 632, 562, 70, 70);
    view.defPosition("a1", 2, 632, 70, 70);
    view.defPosition("b1", 72, 632, 70, 70);
    view.defPosition("c1", 142, 632, 70, 70);
    view.defPosition("d1", 212, 632, 70, 70);
    view.defPosition("e1", 282, 632, 70, 70);
    view.defPosition("f1", 352, 632, 70, 70);
    view.defPosition("g1", 422, 632, 70, 70);
    view.defPosition("h1", 492, 632, 70, 70);
    view.defPosition("i1", 562, 632, 70, 70);
    view.defPosition("j1", 632, 632, 70, 70);
}
