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
    Dagaz.Controller.addSound(10, "sounds/roll.wav", true);
    Dagaz.Controller.addSound(11, "sounds/push_short.wav", true);
    Dagaz.Controller.addSound(12, "sounds/push_double.wav", true);
    Dagaz.Controller.addSound(13, "sounds/push_medium.wav", true);
    Dagaz.Controller.addSound(14, "sounds/push_long.wav", true);
}

Dagaz.Model.BuildDesign = function(design) {
    design.checkVersion("z2j", "2");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("pass-turn", "forced");
    design.checkVersion("pass-partial", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-captures", "false");
    design.checkVersion("show-drops", "false");
    design.checkVersion("show-lose", "false");
    design.checkVersion("advisor-wait", "10");

    design.addDirection("next");       // 0
    design.addDirection("next-black"); // 1
    design.addDirection("up");         // 2

    design.addPlayer("White", [0, 1, 2]);
    design.addPlayer("Black", [1, 0, 2]);

    design.addTurn(1, [1, 4, 6, 2, 8, 12]); // 0
    design.addTurn(1, [1, 4, 6]); // 1
    design.repeatMark();
    design.addRandom(2, [0]); // 2
    design.addRandom(2, [0]); // 3
    design.addRandom(2, [0]); // 4
    design.addRandom(2, [0]); // 5
    design.addTurn(2, [1, 4, 6, 2, 8, 12]); // 6
    design.addTurn(2, [1, 4, 6]); // 7
    design.addRandom(1, [0]); // 8
    design.addRandom(1, [0]); // 9
    design.addRandom(1, [0]); // 10
    design.addRandom(1, [0]); // 11
    design.addTurn(1, [1, 4, 6, 2, 8, 12]); // 12
    design.addTurn(1, [1, 4, 6]); // 13

    design.addPosition("x1", [0, 0, 0]);
    design.addPosition("x2", [0, 0, 0]);
    design.addPosition("x3", [0, 0, 0]);
    design.addPosition("x4", [0, 0, 0]);
    design.addPosition("a4", [0, 1, 48]);
    design.addPosition("a3", [4, 4, 48]);
    design.addPosition("a2", [-1, 1, 48]);
    design.addPosition("a1", [4, 4, 48]);
    design.addPosition("b4", [-4, -4, 48]);
    design.addPosition("b3", [4, 4, 48]);
    design.addPosition("b2", [-4, -4, 48]);
    design.addPosition("b1", [4, 4, 48]);
    design.addPosition("c4", [-4, -4, 48]);
    design.addPosition("c3", [4, 4, 48]);
    design.addPosition("c2", [-4, -4, 48]);
    design.addPosition("c1", [4, 4, 48]);
    design.addPosition("d4", [-4, -4, 48]);
    design.addPosition("d3", [4, 4, 48]);
    design.addPosition("d2", [-4, -4, 48]);
    design.addPosition("d1", [4, 4, 48]);
    design.addPosition("e4", [-4, -4, 48]);
    design.addPosition("e3", [4, 4, 48]);
    design.addPosition("e2", [-4, -4, 48]);
    design.addPosition("e1", [4, 4, 48]);
    design.addPosition("f4", [-4, -4, 48]);
    design.addPosition("f3", [4, 4, 48]);
    design.addPosition("f2", [-4, -4, 48]);
    design.addPosition("f1", [4, 4, 48]);
    design.addPosition("g4", [-4, -4, 48]);
    design.addPosition("g3", [4, 4, 48]);
    design.addPosition("g2", [-4, -4, 48]);
    design.addPosition("g1", [4, 4, 48]);
    design.addPosition("h4", [-4, -4, 48]);
    design.addPosition("h3", [4, 4, 48]);
    design.addPosition("h2", [-4, -4, 48]);
    design.addPosition("h1", [4, 4, 48]);
    design.addPosition("i4", [-4, -4, 48]);
    design.addPosition("i3", [4, 4, 48]);
    design.addPosition("i2", [-4, -4, 48]);
    design.addPosition("i1", [4, 4, 48]);
    design.addPosition("j4", [-4, -4, 48]);
    design.addPosition("j3", [4, 4, 48]);
    design.addPosition("j2", [-4, -4, 48]);
    design.addPosition("j1", [4, 4, 48]);
    design.addPosition("k4", [-4, -4, 48]);
    design.addPosition("k3", [4, 4, 48]);
    design.addPosition("k2", [-4, -4, 48]);
    design.addPosition("k1", [4, 4, 48]);
    design.addPosition("l4", [-4, -4, 48]);
    design.addPosition("l3", [-1, 1, 48]);
    design.addPosition("l2", [-4, -4, 48]);
    design.addPosition("l1", [-1, 0, 48]);
    design.addPosition("A4", [0, 0, 0]);
    design.addPosition("A3", [0, 0, 0]);
    design.addPosition("A2", [0, 0, 0]);
    design.addPosition("A1", [0, 0, 0]);
    design.addPosition("B4", [0, 0, 0]);
    design.addPosition("B3", [0, 0, 0]);
    design.addPosition("B2", [0, 0, 0]);
    design.addPosition("B1", [0, 0, 0]);
    design.addPosition("C4", [0, 0, 0]);
    design.addPosition("C3", [0, 0, 0]);
    design.addPosition("C2", [0, 0, 0]);
    design.addPosition("C1", [0, 0, 0]);
    design.addPosition("D4", [0, 0, 0]);
    design.addPosition("D3", [0, 0, 0]);
    design.addPosition("D2", [0, 0, 0]);
    design.addPosition("D1", [0, 0, 0]);
    design.addPosition("E4", [0, 0, 0]);
    design.addPosition("E3", [0, 0, 0]);
    design.addPosition("E2", [0, 0, 0]);
    design.addPosition("E1", [0, 0, 0]);
    design.addPosition("F4", [0, 0, 0]);
    design.addPosition("F3", [0, 0, 0]);
    design.addPosition("F2", [0, 0, 0]);
    design.addPosition("F1", [0, 0, 0]);
    design.addPosition("G4", [0, 0, 0]);
    design.addPosition("G3", [0, 0, 0]);
    design.addPosition("G2", [0, 0, 0]);
    design.addPosition("G1", [0, 0, 0]);
    design.addPosition("H4", [0, 0, 0]);
    design.addPosition("H3", [0, 0, 0]);
    design.addPosition("H2", [0, 0, 0]);
    design.addPosition("H1", [0, 0, 0]);
    design.addPosition("I4", [0, 0, 0]);
    design.addPosition("I3", [0, 0, 0]);
    design.addPosition("I2", [0, 0, 0]);
    design.addPosition("I1", [0, 0, 0]);
    design.addPosition("J4", [0, 0, 0]);
    design.addPosition("J3", [0, 0, 0]);
    design.addPosition("J2", [0, 0, 0]);
    design.addPosition("J1", [0, 0, 0]);
    design.addPosition("K4", [0, 0, 0]);
    design.addPosition("K3", [0, 0, 0]);
    design.addPosition("K2", [0, 0, 0]);
    design.addPosition("K1", [0, 0, 0]);
    design.addPosition("L4", [0, 0, 0]);
    design.addPosition("L3", [0, 0, 0]);
    design.addPosition("L2", [0, 0, 0]);
    design.addPosition("L1", [0, 0, 0]);

    design.addZone("target", 1, [4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48]);
    design.addZone("target", 2, [7, 11, 15, 19, 23, 27, 31, 35, 39, 43, 47, 51]);
    design.addZone("dices", 1, [0, 1, 2, 3]);
    design.addZone("dices", 2, [0, 1, 2, 3]);

    design.addCommand(0, ZRF.IN_ZONE,	1);	// dices
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.IN_ZONE,	0);	// target
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PROMOTE,	3);	// Active
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.IN_ZONE,	0);	// target
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PROMOTE,	3);	// Active
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.IN_ZONE,	0);	// target
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
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
    design.addCommand(4, ZRF.IN_ZONE,	0);	// target
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.PARAM,	2);	// $3
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.PARAM,	3);	// $4
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.PARAM,	4);	// $5
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.PARAM,	5);	// $6
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.PARAM,	6);	// $7
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.PARAM,	7);	// $8
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.IN_ZONE,	0);	// target
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.PARAM,	1);	// $2
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.PARAM,	2);	// $3
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.PARAM,	3);	// $4
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.PARAM,	4);	// $5
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.PARAM,	5);	// $6
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.PARAM,	6);	// $7
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.PARAM,	7);	// $8
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.PARAM,	8);	// $9
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.PARAM,	9);	// $10
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.PARAM,	10);	// $11
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.PARAM,	11);	// $12
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.IN_ZONE,	0);	// target
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.IN_ZONE,	0);	// target
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	0);	// $1
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.PARAM,	1);	// $2
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.PARAM,	2);	// $3
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.PARAM,	3);	// $4
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.IN_ZONE,	0);	// target
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	0);	// $1
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.PARAM,	1);	// $2
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.PARAM,	2);	// $3
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.PARAM,	3);	// $4
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.PARAM,	4);	// $5
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.PARAM,	5);	// $6
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end

    design.addPiece("dice0", 0);
    design.addDrop(0, 0, [], 0, 10);

    design.addPiece("dice1", 1);
    design.addDrop(1, 0, [], 0, 10);

    design.addPiece("Man", 2);
    design.addMove(2, 1, [0, 0], 2, 11);
    design.addMove(2, 2, [0], 1, 11);

    design.addPiece("Active", 3);
    design.addMove(3, 3, [0, 0], 2, 11);
    design.addMove(3, 4, [0, 0, 0, 0, 0, 0, 0, 0], 8, 13);
    design.addMove(3, 5, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 12, 14);
    design.addMove(3, 6, [0], 1, 11);
    design.addMove(3, 7, [0, 0, 0, 0], 4, 12);
    design.addMove(3, 8, [0, 0, 0, 0, 0, 0], 6, 12);

    design.setup("White", "Man", 7);
    design.setup("White", "Man", 11);
    design.setup("White", "Man", 15);
    design.setup("White", "Man", 19);
    design.setup("White", "Man", 23);
    design.setup("White", "Man", 27);
    design.setup("White", "Man", 31);
    design.setup("White", "Man", 35);
    design.setup("White", "Man", 39);
    design.setup("White", "Man", 43);
    design.setup("White", "Man", 47);
    design.setup("White", "Man", 51);
    design.setup("White", "dice0", 0);
    design.setup("White", "dice0", 1);
    design.setup("White", "dice0", 2);
    design.setup("White", "dice1", 3);
    design.setup("Black", "Man", 4);
    design.setup("Black", "Man", 8);
    design.setup("Black", "Man", 12);
    design.setup("Black", "Man", 16);
    design.setup("Black", "Man", 20);
    design.setup("Black", "Man", 24);
    design.setup("Black", "Man", 28);
    design.setup("Black", "Man", 32);
    design.setup("Black", "Man", 36);
    design.setup("Black", "Man", 40);
    design.setup("Black", "Man", 44);
    design.setup("Black", "Man", 48);
}

Dagaz.View.configure = function(view) {
    view.defBoard("WhiteBoard", 0, 0, undefined, [0, 1, 8, 9, 10, 11, 12, 13]);
    view.defBoard("BlackBoard", 0, 0, undefined, [2, 3, 4, 5, 6, 7]);
    view.defPiece("Whitedice0", "White dice0");
    view.defPiece("Blackdice0", "Black dice0");
    view.defPiece("Whitedice1", "White dice1");
    view.defPiece("Blackdice1", "Black dice1");
    view.defPiece("WhiteMan", "White Man");
    view.defPiece("BlackMan", "Black Man");
    view.defPiece("WhiteActive", "White Active");
    view.defPiece("BlackActive", "Black Active");
 
    view.defPosition("x1", 631, 0, 15, 204);
    view.defPosition("x2", 652, 0, 15, 204);
    view.defPosition("x3", 673, 0, 15, 204);
    view.defPosition("x4", 694, 0, 15, 204);
    view.defPosition("a4", 20, 2, 50, 50);
    view.defPosition("a3", 20, 52, 50, 50);
    view.defPosition("a2", 20, 102, 50, 50);
    view.defPosition("a1", 20, 152, 50, 50);
    view.defPosition("b4", 70, 2, 50, 50);
    view.defPosition("b3", 70, 52, 50, 50);
    view.defPosition("b2", 70, 102, 50, 50);
    view.defPosition("b1", 70, 152, 50, 50);
    view.defPosition("c4", 120, 2, 50, 50);
    view.defPosition("c3", 120, 52, 50, 50);
    view.defPosition("c2", 120, 102, 50, 50);
    view.defPosition("c1", 120, 152, 50, 50);
    view.defPosition("d4", 170, 2, 50, 50);
    view.defPosition("d3", 170, 52, 50, 50);
    view.defPosition("d2", 170, 102, 50, 50);
    view.defPosition("d1", 170, 152, 50, 50);
    view.defPosition("e4", 220, 2, 50, 50);
    view.defPosition("e3", 220, 52, 50, 50);
    view.defPosition("e2", 220, 102, 50, 50);
    view.defPosition("e1", 220, 152, 50, 50);
    view.defPosition("f4", 270, 2, 50, 50);
    view.defPosition("f3", 270, 52, 50, 50);
    view.defPosition("f2", 270, 102, 50, 50);
    view.defPosition("f1", 270, 152, 50, 50);
    view.defPosition("g4", 320, 2, 50, 50);
    view.defPosition("g3", 320, 52, 50, 50);
    view.defPosition("g2", 320, 102, 50, 50);
    view.defPosition("g1", 320, 152, 50, 50);
    view.defPosition("h4", 370, 2, 50, 50);
    view.defPosition("h3", 370, 52, 50, 50);
    view.defPosition("h2", 370, 102, 50, 50);
    view.defPosition("h1", 370, 152, 50, 50);
    view.defPosition("i4", 420, 2, 50, 50);
    view.defPosition("i3", 420, 52, 50, 50);
    view.defPosition("i2", 420, 102, 50, 50);
    view.defPosition("i1", 420, 152, 50, 50);
    view.defPosition("j4", 470, 2, 50, 50);
    view.defPosition("j3", 470, 52, 50, 50);
    view.defPosition("j2", 470, 102, 50, 50);
    view.defPosition("j1", 470, 152, 50, 50);
    view.defPosition("k4", 520, 2, 50, 50);
    view.defPosition("k3", 520, 52, 50, 50);
    view.defPosition("k2", 520, 102, 50, 50);
    view.defPosition("k1", 520, 152, 50, 50);
    view.defPosition("l4", 570, 2, 50, 50);
    view.defPosition("l3", 570, 52, 50, 50);
    view.defPosition("l2", 570, 102, 50, 50);
    view.defPosition("l1", 570, 152, 50, 50);
    view.defPosition("A4", 20, 2, 50, 50);
    view.defPosition("A3", 20, 52, 50, 50);
    view.defPosition("A2", 20, 102, 50, 50);
    view.defPosition("A1", 20, 152, 50, 50);
    view.defPosition("B4", 70, 2, 50, 50);
    view.defPosition("B3", 70, 52, 50, 50);
    view.defPosition("B2", 70, 102, 50, 50);
    view.defPosition("B1", 70, 152, 50, 50);
    view.defPosition("C4", 120, 2, 50, 50);
    view.defPosition("C3", 120, 52, 50, 50);
    view.defPosition("C2", 120, 102, 50, 50);
    view.defPosition("C1", 120, 152, 50, 50);
    view.defPosition("D4", 170, 2, 50, 50);
    view.defPosition("D3", 170, 52, 50, 50);
    view.defPosition("D2", 170, 102, 50, 50);
    view.defPosition("D1", 170, 152, 50, 50);
    view.defPosition("E4", 220, 2, 50, 50);
    view.defPosition("E3", 220, 52, 50, 50);
    view.defPosition("E2", 220, 102, 50, 50);
    view.defPosition("E1", 220, 152, 50, 50);
    view.defPosition("F4", 270, 2, 50, 50);
    view.defPosition("F3", 270, 52, 50, 50);
    view.defPosition("F2", 270, 102, 50, 50);
    view.defPosition("F1", 270, 152, 50, 50);
    view.defPosition("G4", 320, 2, 50, 50);
    view.defPosition("G3", 320, 52, 50, 50);
    view.defPosition("G2", 320, 102, 50, 50);
    view.defPosition("G1", 320, 152, 50, 50);
    view.defPosition("H4", 370, 2, 50, 50);
    view.defPosition("H3", 370, 52, 50, 50);
    view.defPosition("H2", 370, 102, 50, 50);
    view.defPosition("H1", 370, 152, 50, 50);
    view.defPosition("I4", 420, 2, 50, 50);
    view.defPosition("I3", 420, 52, 50, 50);
    view.defPosition("I2", 420, 102, 50, 50);
    view.defPosition("I1", 420, 152, 50, 50);
    view.defPosition("J4", 470, 2, 50, 50);
    view.defPosition("J3", 470, 52, 50, 50);
    view.defPosition("J2", 470, 102, 50, 50);
    view.defPosition("J1", 470, 152, 50, 50);
    view.defPosition("K4", 520, 2, 50, 50);
    view.defPosition("K3", 520, 52, 50, 50);
    view.defPosition("K2", 520, 102, 50, 50);
    view.defPosition("K1", 520, 152, 50, 50);
    view.defPosition("L4", 570, 2, 50, 50);
    view.defPosition("L3", 570, 52, 50, 50);
    view.defPosition("L2", 570, 102, 50, 50);
    view.defPosition("L1", 570, 152, 50, 50);
}
