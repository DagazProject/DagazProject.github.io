Dagaz.Controller.persistense = "none";

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

Dagaz.Controller.addSound(2, "../sounds/tadam.wav", true);
Dagaz.Controller.addSound(3, "../sounds/loss.wav", true);
Dagaz.Controller.addSound(10, "sounds/turnover/pawn.wav", true);
Dagaz.Controller.addSound(11, "sounds/turnover/knight.wav", true);
Dagaz.Controller.addSound(12, "sounds/turnover/bishop.wav", true);
Dagaz.Controller.addSound(13, "sounds/turnover/queen.wav", true);
Dagaz.Controller.addSound(14, "sounds/turnover/rook.wav", true);
Dagaz.Controller.addSound(15, "sounds/turnover/castle.wav", true);
Dagaz.Controller.addSound(16, "../sounds/seed.ogg", true);
Dagaz.Controller.addSound(17, "../sounds/popup.ogg", true);

Dagaz.Model.BuildDesign = function(design) {
    design.checkVersion("z2j", "2");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("pass-turn", "forced");

    design.addDirection("se");   // 0
    design.addDirection("s");    // 1
    design.addDirection("sw");   // 2
    design.addDirection("e");    // 3
    design.addDirection("w");    // 4
    design.addDirection("ne");   // 5
    design.addDirection("nw");   // 6
    design.addDirection("n");    // 7
    design.addDirection("dice"); // 8

    design.addPlayer("White", [6, 7, 5, 4, 3, 2, 0, 1, 8]);
    design.addPlayer("Black", [5, 7, 6, 3, 4, 0, 2, 1, 8]);

    design.setupSelector(3);

    design.addRandom(1, [9]);                       // 0
    design.addRandom(1, [9]);                       // 1
    design.addRandom(1, [6], 2);                    // 2
    design.addRandom(1, [6], 2);                    // 3
    design.addTurn(1, [0, 1, 2, 3, 4, 5, 7, 8]);    // 4
    design.addTurn(1, [0, 1, 2, 3, 4, 5, 7, 8]);    // 5
    design.addTurn(1, [0, 1, 2, 3, 4, 5, 7, 8], 2); // 6
    design.addTurn(1, [0, 1, 2, 3, 4, 5, 7, 8], 2); // 7
    design.repeatMark();
    design.addRandom(2, [9]);                       // 8
    design.addRandom(2, [9]);                       // 9
    design.addRandom(2, [6], 1);                    // 10
    design.addRandom(2, [6], 1);                    // 11
    design.addRandom(2, [6], 2);                    // 10
    design.addRandom(2, [6], 2);                    // 11
    design.addTurn(2, [0, 1, 2, 3, 4, 5, 7, 8]);    // 12
    design.addTurn(2, [0, 1, 2, 3, 4, 5, 7, 8]);    // 13
    design.addTurn(2, [0, 1, 2, 3, 4, 5, 7, 8], 1); // 14
    design.addTurn(2, [0, 1, 2, 3, 4, 5, 7, 8], 1); // 15
    design.addTurn(2, [0, 1, 2, 3, 4, 5, 7, 8], 2); // 14
    design.addTurn(2, [0, 1, 2, 3, 4, 5, 7, 8], 2); // 15
    design.addRandom(1, [9]);                       // 16
    design.addRandom(1, [9]);                       // 17
    design.addRandom(1, [6], 1);                    // 18
    design.addRandom(1, [6], 1);                    // 19
    design.addRandom(1, [6], 2);                    // 18
    design.addRandom(1, [6], 2);                    // 19
    design.addTurn(1, [0, 1, 2, 3, 4, 5, 7, 8]);    // 20
    design.addTurn(1, [0, 1, 2, 3, 4, 5, 7, 8]);    // 21
    design.addTurn(1, [0, 1, 2, 3, 4, 5, 7, 8], 1); // 22
    design.addTurn(1, [0, 1, 2, 3, 4, 5, 7, 8], 1); // 23
    design.addTurn(1, [0, 1, 2, 3, 4, 5, 7, 8], 2); // 22
    design.addTurn(1, [0, 1, 2, 3, 4, 5, 7, 8], 2); // 23

    design.addPosition("a12", [13, 12, 0, 1, 0, 0, 0, 0, 144]);
    design.addPosition("b12", [13, 12, 11, 1, -1, 0, 0, 0, 0]);
    design.addPosition("c12", [13, 12, 11, 1, -1, 0, 0, 0, 0]);
    design.addPosition("d12", [13, 12, 11, 1, -1, 0, 0, 0, 0]);
    design.addPosition("e12", [13, 12, 11, 1, -1, 0, 0, 0, 0]);
    design.addPosition("f12", [13, 12, 11, 1, -1, 0, 0, 0, 0]);
    design.addPosition("g12", [13, 12, 11, 1, -1, 0, 0, 0, 0]);
    design.addPosition("h12", [13, 12, 11, 1, -1, 0, 0, 0, 0]);
    design.addPosition("i12", [13, 12, 11, 1, -1, 0, 0, 0, 0]);
    design.addPosition("j12", [13, 12, 11, 1, -1, 0, 0, 0, 0]);
    design.addPosition("k12", [13, 12, 11, 1, -1, 0, 0, 0, 0]);
    design.addPosition("l12", [0, 12, 11, 0, -1, 0, 0, 0, 0]);
    design.addPosition("a11", [13, 12, 0, 1, 0, -11, 0, -12, 0]);
    design.addPosition("b11", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("c11", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("d11", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("e11", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("f11", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("g11", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("h11", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("i11", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("j11", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("k11", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("l11", [0, 12, 11, 0, -1, 0, -13, -12, 0]);
    design.addPosition("a10", [13, 12, 0, 1, 0, -11, 0, -12, 0]);
    design.addPosition("b10", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("c10", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("d10", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("e10", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("f10", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("g10", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("h10", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("i10", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("j10", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("k10", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("l10", [0, 12, 11, 0, -1, 0, -13, -12, 0]);
    design.addPosition("a9", [13, 12, 0, 1, 0, -11, 0, -12, 0]);
    design.addPosition("b9", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("c9", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("d9", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("e9", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("f9", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("g9", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("h9", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("i9", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("j9", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("k9", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("l9", [0, 12, 11, 0, -1, 0, -13, -12, 0]);
    design.addPosition("a8", [13, 12, 0, 1, 0, -11, 0, -12, 0]);
    design.addPosition("b8", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("c8", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("d8", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("e8", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("f8", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("g8", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("h8", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("i8", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("j8", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("k8", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("l8", [0, 12, 11, 0, -1, 0, -13, -12, 0]);
    design.addPosition("a7", [13, 12, 0, 1, 0, -11, 0, -12, 0]);
    design.addPosition("b7", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("c7", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("d7", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("e7", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("f7", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("g7", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("h7", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("i7", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("j7", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("k7", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("l7", [0, 12, 11, 0, -1, 0, -13, -12, 0]);
    design.addPosition("a6", [13, 12, 0, 1, 0, -11, 0, -12, 0]);
    design.addPosition("b6", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("c6", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("d6", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("e6", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("f6", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("g6", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("h6", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("i6", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("j6", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("k6", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("l6", [0, 12, 11, 0, -1, 0, -13, -12, 0]);
    design.addPosition("a5", [13, 12, 0, 1, 0, -11, 0, -12, 0]);
    design.addPosition("b5", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("c5", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("d5", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("e5", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("f5", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("g5", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("h5", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("i5", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("j5", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("k5", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("l5", [0, 12, 11, 0, -1, 0, -13, -12, 0]);
    design.addPosition("a4", [13, 12, 0, 1, 0, -11, 0, -12, 0]);
    design.addPosition("b4", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("c4", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("d4", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("e4", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("f4", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("g4", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("h4", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("i4", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("j4", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("k4", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("l4", [0, 12, 11, 0, -1, 0, -13, -12, 0]);
    design.addPosition("a3", [13, 12, 0, 1, 0, -11, 0, -12, 0]);
    design.addPosition("b3", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("c3", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("d3", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("e3", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("f3", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("g3", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("h3", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("i3", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("j3", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("k3", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("l3", [0, 12, 11, 0, -1, 0, -13, -12, 0]);
    design.addPosition("a2", [13, 12, 0, 1, 0, -11, 0, -12, 0]);
    design.addPosition("b2", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("c2", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("d2", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("e2", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("f2", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("g2", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("h2", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("i2", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("j2", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("k2", [13, 12, 11, 1, -1, -11, -13, -12, 0]);
    design.addPosition("l2", [0, 12, 11, 0, -1, 0, -13, -12, 0]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -11, 0, -12, 0]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -11, -13, -12, 0]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -11, -13, -12, 0]);
    design.addPosition("d1", [0, 0, 0, 1, -1, -11, -13, -12, 0]);
    design.addPosition("e1", [0, 0, 0, 1, -1, -11, -13, -12, 0]);
    design.addPosition("f1", [0, 0, 0, 1, -1, -11, -13, -12, 0]);
    design.addPosition("g1", [0, 0, 0, 1, -1, -11, -13, -12, 0]);
    design.addPosition("h1", [0, 0, 0, 1, -1, -11, -13, -12, 0]);
    design.addPosition("i1", [0, 0, 0, 1, -1, -11, -13, -12, 0]);
    design.addPosition("j1", [0, 0, 0, 1, -1, -11, -13, -12, 0]);
    design.addPosition("k1", [0, 0, 0, 1, -1, -11, -13, -12, 0]);
    design.addPosition("l1", [0, 0, 0, 0, -1, 0, -13, -12, 0]);
    design.addPosition("D1", [0, 0, 0, 0, 0, 0, 0, 0, 1]);
    design.addPosition("D2", [0, 0, 0, 0, 0, 0, 0, 0, 1]);
    design.addPosition("D3", [0, 0, 0, 0, 0, 0, 0, 0, 1]);
    design.addPosition("D4", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X1", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X2", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X3", [0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X4", [0, 0, 0, 0, 0, 0, 0, 0, 0]);

    design.addZone("last-rank", 1, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    design.addZone("last-rank", 2, [132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143]);
    design.addZone("dices", 1, [144, 145, 146, 147]);
    design.addZone("dices", 2, [144, 145, 146, 147]);
    design.addZone("init", 1, [144, 145]);
    design.addZone("init", 2, [144, 145]);

    design.addCommand(0, ZRF.IN_ZONE,	1);	// dices
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.IN_ZONE,	0);	// last-rank
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	4);
    design.addCommand(1, ZRF.PROMOTE,	10);	// Queen
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.JUMP,	2);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.IN_ZONE,	0);	// last-rank
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	4);
    design.addCommand(2, ZRF.PROMOTE,	10);	// Queen
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.JUMP,	2);
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
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
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.FUNCTION,	26);	// capture
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.IN_ZONE,	2);	// init
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addPiece("dp", 0);
    design.addDrop(0, 0, [], 6, 16);
    design.addDrop(0, 7, [], 9, 16);
    design.addMove(0, 6, [], 7, 17);

    design.addPiece("dn", 1);
    design.addDrop(1, 0, [], 6, 16);
    design.addDrop(1, 7, [], 9, 16);
    design.addMove(1, 6, [], 8, 17);

    design.addPiece("db", 2);
    design.addDrop(2, 0, [], 6, 16);
    design.addDrop(2, 7, [], 9, 16);
    design.addMove(2, 6, [], 8, 17);

    design.addPiece("dr", 3);
    design.addDrop(3, 0, [], 6, 16);
    design.addDrop(3, 7, [], 9, 16);
    design.addMove(3, 6, [], 8, 17);

    design.addPiece("dq", 4);
    design.addDrop(4, 0, [], 6, 16);
    design.addDrop(4, 7, [], 9, 16);
    design.addMove(4, 6, [], 8, 17);

    design.addPiece("dk", 5);
    design.addDrop(5, 0, [], 6, 16);
    design.addDrop(5, 7, [], 9, 16);
    design.addMove(5, 6, [], 8, 17);

    design.addPiece("Pawn", 6, 100);
    design.addMove(6, 1, [7], 0, 10);
    design.addMove(6, 2, [6], 0, 10);
    design.addMove(6, 2, [5], 0, 10);

    design.addPiece("Knight", 7, 320);
    design.addMove(7, 3, [7, 6], 1, 11);
    design.addMove(7, 3, [7, 5], 1, 11);
    design.addMove(7, 3, [1, 2], 1, 11);
    design.addMove(7, 3, [1, 0], 1, 11);
    design.addMove(7, 3, [4, 6], 1, 11);
    design.addMove(7, 3, [4, 2], 1, 11);
    design.addMove(7, 3, [3, 5], 1, 11);
    design.addMove(7, 3, [3, 0], 1, 11);

    design.addPiece("Bishop", 8, 330);
    design.addMove(8, 4, [6, 6], 2, 12);
    design.addMove(8, 4, [2, 2], 2, 12);
    design.addMove(8, 4, [5, 5], 2, 12);
    design.addMove(8, 4, [0, 0], 2, 12);

    design.addPiece("Rook", 9, 500);
    design.addMove(9, 4, [7, 7], 3, 13);
    design.addMove(9, 4, [1, 1], 3, 13);
    design.addMove(9, 4, [4, 4], 3, 13);
    design.addMove(9, 4, [3, 3], 3, 13);

    design.addPiece("Queen", 10, 900);
    design.addMove(10, 4, [7, 7], 4, 14);
    design.addMove(10, 4, [1, 1], 4, 14);
    design.addMove(10, 4, [4, 4], 4, 14);
    design.addMove(10, 4, [3, 3], 4, 14);
    design.addMove(10, 4, [6, 6], 4, 14);
    design.addMove(10, 4, [2, 2], 4, 14);
    design.addMove(10, 4, [5, 5], 4, 14);
    design.addMove(10, 4, [0, 0], 4, 14);

    design.addPiece("King", 11, 20000);
    design.addMove(11, 5, [7], 5, 15);
    design.addMove(11, 5, [1], 5, 15);
    design.addMove(11, 5, [4], 5, 15);
    design.addMove(11, 5, [3], 5, 15);
    design.addMove(11, 5, [6], 5, 15);
    design.addMove(11, 5, [2], 5, 15);
    design.addMove(11, 5, [5], 5, 15);
    design.addMove(11, 5, [0], 5, 15);

    design.setup("White", "Pawn", 84);
    design.setup("White", "Pawn", 85);
    design.setup("White", "Pawn", 86);
    design.setup("White", "Pawn", 87);
    design.setup("White", "Pawn", 88);
    design.setup("White", "Pawn", 89);
    design.setup("White", "Pawn", 90);
    design.setup("White", "Pawn", 91);
    design.setup("White", "Pawn", 92);
    design.setup("White", "Pawn", 93);
    design.setup("White", "Pawn", 94);
    design.setup("White", "Pawn", 95);
    design.setup("White", "Pawn", 72);
    design.setup("White", "Pawn", 73);
    design.setup("White", "Pawn", 74);
    design.setup("White", "Pawn", 75);
    design.setup("White", "Pawn", 76);
    design.setup("White", "Pawn", 77);
    design.setup("White", "Pawn", 78);
    design.setup("White", "Pawn", 79);
    design.setup("White", "Pawn", 80);
    design.setup("White", "Pawn", 81);
    design.setup("White", "Pawn", 82);
    design.setup("White", "Pawn", 83);
    design.setup("White", "Rook", 132);
    design.setup("White", "Rook", 96);
    design.setup("White", "Rook", 135);
    design.setup("White", "Rook", 99);
    design.setup("White", "Rook", 140);
    design.setup("White", "Rook", 104);
    design.setup("White", "Rook", 143);
    design.setup("White", "Rook", 107);
    design.setup("White", "Knight", 120);
    design.setup("White", "Knight", 108);
    design.setup("White", "Knight", 121);
    design.setup("White", "Knight", 109);
    design.setup("White", "Knight", 130);
    design.setup("White", "Knight", 118);
    design.setup("White", "Knight", 131);
    design.setup("White", "Knight", 119);
    design.setup("White", "Bishop", 122);
    design.setup("White", "Bishop", 110);
    design.setup("White", "Bishop", 123);
    design.setup("White", "Bishop", 111);
    design.setup("White", "Bishop", 128);
    design.setup("White", "Bishop", 116);
    design.setup("White", "Bishop", 129);
    design.setup("White", "Bishop", 117);
    design.setup("White", "Queen", 136);
    design.setup("White", "Queen", 100);
    design.setup("White", "Queen", 139);
    design.setup("White", "Queen", 103);
    design.setup("White", "King", 125);
    design.setup("White", "King", 113);
    design.setup("White", "King", 126);
    design.setup("White", "King", 114);
    design.setup("Black", "Pawn", 60);
    design.setup("Black", "Pawn", 61);
    design.setup("Black", "Pawn", 62);
    design.setup("Black", "Pawn", 63);
    design.setup("Black", "Pawn", 64);
    design.setup("Black", "Pawn", 65);
    design.setup("Black", "Pawn", 66);
    design.setup("Black", "Pawn", 67);
    design.setup("Black", "Pawn", 68);
    design.setup("Black", "Pawn", 69);
    design.setup("Black", "Pawn", 70);
    design.setup("Black", "Pawn", 71);
    design.setup("Black", "Pawn", 48);
    design.setup("Black", "Pawn", 49);
    design.setup("Black", "Pawn", 50);
    design.setup("Black", "Pawn", 51);
    design.setup("Black", "Pawn", 52);
    design.setup("Black", "Pawn", 53);
    design.setup("Black", "Pawn", 54);
    design.setup("Black", "Pawn", 55);
    design.setup("Black", "Pawn", 56);
    design.setup("Black", "Pawn", 57);
    design.setup("Black", "Pawn", 58);
    design.setup("Black", "Pawn", 59);
    design.setup("Black", "Rook", 36);
    design.setup("Black", "Rook", 0);
    design.setup("Black", "Rook", 39);
    design.setup("Black", "Rook", 3);
    design.setup("Black", "Rook", 44);
    design.setup("Black", "Rook", 8);
    design.setup("Black", "Rook", 47);
    design.setup("Black", "Rook", 11);
    design.setup("Black", "Knight", 24);
    design.setup("Black", "Knight", 12);
    design.setup("Black", "Knight", 25);
    design.setup("Black", "Knight", 13);
    design.setup("Black", "Knight", 34);
    design.setup("Black", "Knight", 22);
    design.setup("Black", "Knight", 35);
    design.setup("Black", "Knight", 23);
    design.setup("Black", "Bishop", 26);
    design.setup("Black", "Bishop", 14);
    design.setup("Black", "Bishop", 27);
    design.setup("Black", "Bishop", 15);
    design.setup("Black", "Bishop", 32);
    design.setup("Black", "Bishop", 20);
    design.setup("Black", "Bishop", 33);
    design.setup("Black", "Bishop", 21);
    design.setup("Black", "Queen", 40);
    design.setup("Black", "Queen", 4);
    design.setup("Black", "Queen", 43);
    design.setup("Black", "Queen", 7);
    design.setup("Black", "King", 29);
    design.setup("Black", "King", 17);
    design.setup("Black", "King", 30);
    design.setup("Black", "King", 18);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("Whitedp", "White dp");
    view.defPiece("Blackdp", "Black dp");
    view.defPiece("Whitedn", "White dn");
    view.defPiece("Blackdn", "Black dn");
    view.defPiece("Whitedb", "White db");
    view.defPiece("Blackdb", "Black db");
    view.defPiece("Whitedr", "White dr");
    view.defPiece("Blackdr", "Black dr");
    view.defPiece("Whitedq", "White dq");
    view.defPiece("Blackdq", "Black dq");
    view.defPiece("Whitedk", "White dk");
    view.defPiece("Blackdk", "Black dk");
    view.defPiece("WhitePawn", "White Pawn");
    view.defPiece("BlackPawn", "Black Pawn");
    view.defPiece("WhiteRook", "White Rook");
    view.defPiece("BlackRook", "Black Rook");
    view.defPiece("WhiteKnight", "White Knight");
    view.defPiece("BlackKnight", "Black Knight");
    view.defPiece("WhiteBishop", "White Bishop");
    view.defPiece("BlackBishop", "Black Bishop");
    view.defPiece("WhiteQueen", "White Queen");
    view.defPiece("BlackQueen", "Black Queen");
    view.defPiece("WhiteKing", "White King");
    view.defPiece("BlackKing", "Black King");
 
    view.defPosition("a12", 2, 2, 49, 49);
    view.defPosition("b12", 51, 2, 49, 49);
    view.defPosition("c12", 100, 2, 49, 49);
    view.defPosition("d12", 149, 2, 49, 49);
    view.defPosition("e12", 198, 2, 49, 49);
    view.defPosition("f12", 247, 2, 49, 49);
    view.defPosition("g12", 296, 2, 49, 49);
    view.defPosition("h12", 345, 2, 49, 49);
    view.defPosition("i12", 394, 2, 49, 49);
    view.defPosition("j12", 443, 2, 49, 49);
    view.defPosition("k12", 492, 2, 49, 49);
    view.defPosition("l12", 541, 2, 49, 49);
    view.defPosition("a11", 2, 51, 49, 49);
    view.defPosition("b11", 51, 51, 49, 49);
    view.defPosition("c11", 100, 51, 49, 49);
    view.defPosition("d11", 149, 51, 49, 49);
    view.defPosition("e11", 198, 51, 49, 49);
    view.defPosition("f11", 247, 51, 49, 49);
    view.defPosition("g11", 296, 51, 49, 49);
    view.defPosition("h11", 345, 51, 49, 49);
    view.defPosition("i11", 394, 51, 49, 49);
    view.defPosition("j11", 443, 51, 49, 49);
    view.defPosition("k11", 492, 51, 49, 49);
    view.defPosition("l11", 541, 51, 49, 49);
    view.defPosition("a10", 2, 100, 49, 49);
    view.defPosition("b10", 51, 100, 49, 49);
    view.defPosition("c10", 100, 100, 49, 49);
    view.defPosition("d10", 149, 100, 49, 49);
    view.defPosition("e10", 198, 100, 49, 49);
    view.defPosition("f10", 247, 100, 49, 49);
    view.defPosition("g10", 296, 100, 49, 49);
    view.defPosition("h10", 345, 100, 49, 49);
    view.defPosition("i10", 394, 100, 49, 49);
    view.defPosition("j10", 443, 100, 49, 49);
    view.defPosition("k10", 492, 100, 49, 49);
    view.defPosition("l10", 541, 100, 49, 49);
    view.defPosition("a9", 2, 149, 49, 49);
    view.defPosition("b9", 51, 149, 49, 49);
    view.defPosition("c9", 100, 149, 49, 49);
    view.defPosition("d9", 149, 149, 49, 49);
    view.defPosition("e9", 198, 149, 49, 49);
    view.defPosition("f9", 247, 149, 49, 49);
    view.defPosition("g9", 296, 149, 49, 49);
    view.defPosition("h9", 345, 149, 49, 49);
    view.defPosition("i9", 394, 149, 49, 49);
    view.defPosition("j9", 443, 149, 49, 49);
    view.defPosition("k9", 492, 149, 49, 49);
    view.defPosition("l9", 541, 149, 49, 49);
    view.defPosition("a8", 2, 198, 49, 49);
    view.defPosition("b8", 51, 198, 49, 49);
    view.defPosition("c8", 100, 198, 49, 49);
    view.defPosition("d8", 149, 198, 49, 49);
    view.defPosition("e8", 198, 198, 49, 49);
    view.defPosition("f8", 247, 198, 49, 49);
    view.defPosition("g8", 296, 198, 49, 49);
    view.defPosition("h8", 345, 198, 49, 49);
    view.defPosition("i8", 394, 198, 49, 49);
    view.defPosition("j8", 443, 198, 49, 49);
    view.defPosition("k8", 492, 198, 49, 49);
    view.defPosition("l8", 541, 198, 49, 49);
    view.defPosition("a7", 2, 247, 49, 49);
    view.defPosition("b7", 51, 247, 49, 49);
    view.defPosition("c7", 100, 247, 49, 49);
    view.defPosition("d7", 149, 247, 49, 49);
    view.defPosition("e7", 198, 247, 49, 49);
    view.defPosition("f7", 247, 247, 49, 49);
    view.defPosition("g7", 296, 247, 49, 49);
    view.defPosition("h7", 345, 247, 49, 49);
    view.defPosition("i7", 394, 247, 49, 49);
    view.defPosition("j7", 443, 247, 49, 49);
    view.defPosition("k7", 492, 247, 49, 49);
    view.defPosition("l7", 541, 247, 49, 49);
    view.defPosition("a6", 2, 296, 49, 49);
    view.defPosition("b6", 51, 296, 49, 49);
    view.defPosition("c6", 100, 296, 49, 49);
    view.defPosition("d6", 149, 296, 49, 49);
    view.defPosition("e6", 198, 296, 49, 49);
    view.defPosition("f6", 247, 296, 49, 49);
    view.defPosition("g6", 296, 296, 49, 49);
    view.defPosition("h6", 345, 296, 49, 49);
    view.defPosition("i6", 394, 296, 49, 49);
    view.defPosition("j6", 443, 296, 49, 49);
    view.defPosition("k6", 492, 296, 49, 49);
    view.defPosition("l6", 541, 296, 49, 49);
    view.defPosition("a5", 2, 345, 49, 49);
    view.defPosition("b5", 51, 345, 49, 49);
    view.defPosition("c5", 100, 345, 49, 49);
    view.defPosition("d5", 149, 345, 49, 49);
    view.defPosition("e5", 198, 345, 49, 49);
    view.defPosition("f5", 247, 345, 49, 49);
    view.defPosition("g5", 296, 345, 49, 49);
    view.defPosition("h5", 345, 345, 49, 49);
    view.defPosition("i5", 394, 345, 49, 49);
    view.defPosition("j5", 443, 345, 49, 49);
    view.defPosition("k5", 492, 345, 49, 49);
    view.defPosition("l5", 541, 345, 49, 49);
    view.defPosition("a4", 2, 394, 49, 49);
    view.defPosition("b4", 51, 394, 49, 49);
    view.defPosition("c4", 100, 394, 49, 49);
    view.defPosition("d4", 149, 394, 49, 49);
    view.defPosition("e4", 198, 394, 49, 49);
    view.defPosition("f4", 247, 394, 49, 49);
    view.defPosition("g4", 296, 394, 49, 49);
    view.defPosition("h4", 345, 394, 49, 49);
    view.defPosition("i4", 394, 394, 49, 49);
    view.defPosition("j4", 443, 394, 49, 49);
    view.defPosition("k4", 492, 394, 49, 49);
    view.defPosition("l4", 541, 394, 49, 49);
    view.defPosition("a3", 2, 443, 49, 49);
    view.defPosition("b3", 51, 443, 49, 49);
    view.defPosition("c3", 100, 443, 49, 49);
    view.defPosition("d3", 149, 443, 49, 49);
    view.defPosition("e3", 198, 443, 49, 49);
    view.defPosition("f3", 247, 443, 49, 49);
    view.defPosition("g3", 296, 443, 49, 49);
    view.defPosition("h3", 345, 443, 49, 49);
    view.defPosition("i3", 394, 443, 49, 49);
    view.defPosition("j3", 443, 443, 49, 49);
    view.defPosition("k3", 492, 443, 49, 49);
    view.defPosition("l3", 541, 443, 49, 49);
    view.defPosition("a2", 2, 492, 49, 49);
    view.defPosition("b2", 51, 492, 49, 49);
    view.defPosition("c2", 100, 492, 49, 49);
    view.defPosition("d2", 149, 492, 49, 49);
    view.defPosition("e2", 198, 492, 49, 49);
    view.defPosition("f2", 247, 492, 49, 49);
    view.defPosition("g2", 296, 492, 49, 49);
    view.defPosition("h2", 345, 492, 49, 49);
    view.defPosition("i2", 394, 492, 49, 49);
    view.defPosition("j2", 443, 492, 49, 49);
    view.defPosition("k2", 492, 492, 49, 49);
    view.defPosition("l2", 541, 492, 49, 49);
    view.defPosition("a1", 2, 541, 49, 49);
    view.defPosition("b1", 51, 541, 49, 49);
    view.defPosition("c1", 100, 541, 49, 49);
    view.defPosition("d1", 149, 541, 49, 49);
    view.defPosition("e1", 198, 541, 49, 49);
    view.defPosition("f1", 247, 541, 49, 49);
    view.defPosition("g1", 296, 541, 49, 49);
    view.defPosition("h1", 345, 541, 49, 49);
    view.defPosition("i1", 394, 541, 49, 49);
    view.defPosition("j1", 443, 541, 49, 49);
    view.defPosition("k1", 492, 541, 49, 49);
    view.defPosition("l1", 541, 541, 49, 49);
    view.defPosition("D1", 600, 10, 112, 112);
    view.defPosition("D2", 600, 142, 112, 112);
    view.defPosition("D3", 600, 274, 112, 112);
    view.defPosition("D4", 600, 406, 112, 112);

    view.defPopup("Promote", 145, 105);
    view.defPopupPosition("X1", 10, 7, 68, 68);
    view.defPopupPosition("X2", 80, 7, 68, 68);
    view.defPopupPosition("X3", 150, 7, 68, 68);
    view.defPopupPosition("X4", 220, 7, 68, 68);
}
