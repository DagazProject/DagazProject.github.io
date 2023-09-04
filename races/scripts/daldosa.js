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
    design.checkVersion("smart-moves", "from");
    design.checkVersion("pass-turn", "forced");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-drops", "true");
    design.checkVersion("show-captures", "false");
    design.checkVersion("show-lose", "false");
    design.checkVersion("advisor-wait", "5");

    design.addDirection("next");       // 0
    design.addDirection("next-white"); // 1

    design.addPlayer("Black", [0, 1]);
    design.addPlayer("White", [1, 0]);
    design.addRandom(1, [0]);
    design.addRandom(1, [0]);
    design.addTurn(1, [1, 2, 3, 4]);
    design.addTurn(1, [1, 2, 3, 4]);
    design.addRandom(2, [0]);
    design.addRandom(2, [0]);
    design.addTurn(2, [1, 2, 3, 4]);
    design.addTurn(2, [1, 2, 3, 4]);

    design.addPosition("X", [0, 0]);
    design.addPosition("Y", [0, 0]);
    design.addPosition("a3", [1, 1]);
    design.addPosition("a2", [3, 3]);
    design.addPosition("a1", [-1, -1]);
    design.addPosition("b3", [-3, -3]);
    design.addPosition("b2", [3, 3]);
    design.addPosition("b1", [-3, -3]);
    design.addPosition("c3", [-3, -3]);
    design.addPosition("c2", [3, 3]);
    design.addPosition("c1", [-3, -3]);
    design.addPosition("d3", [-3, -3]);
    design.addPosition("d2", [3, 3]);
    design.addPosition("d1", [-3, -3]);
    design.addPosition("e3", [-3, -3]);
    design.addPosition("e2", [3, 3]);
    design.addPosition("e1", [-3, -3]);
    design.addPosition("f3", [-3, -3]);
    design.addPosition("f2", [3, 3]);
    design.addPosition("f1", [-3, -3]);
    design.addPosition("g3", [-3, -3]);
    design.addPosition("g2", [3, 3]);
    design.addPosition("g1", [-3, -3]);
    design.addPosition("h3", [-3, -3]);
    design.addPosition("h2", [3, 3]);
    design.addPosition("h1", [-3, -3]);
    design.addPosition("i3", [-3, -3]);
    design.addPosition("i2", [3, 3]);
    design.addPosition("i1", [-3, -3]);
    design.addPosition("j3", [-3, -3]);
    design.addPosition("j2", [3, 3]);
    design.addPosition("j1", [-3, -3]);
    design.addPosition("k3", [-3, -3]);
    design.addPosition("k2", [3, 3]);
    design.addPosition("k1", [-3, -3]);
    design.addPosition("l3", [-3, -3]);
    design.addPosition("l2", [3, 3]);
    design.addPosition("l1", [-3, -3]);
    design.addPosition("m3", [-3, -3]);
    design.addPosition("m2", [3, 3]);
    design.addPosition("m1", [-3, -3]);
    design.addPosition("n3", [-3, -3]);
    design.addPosition("n2", [3, 3]);
    design.addPosition("n1", [-3, -3]);
    design.addPosition("o3", [-3, -3]);
    design.addPosition("o2", [3, 3]);
    design.addPosition("o1", [-3, -3]);
    design.addPosition("p3", [-3, -3]);
    design.addPosition("p2", [2, 2]);
    design.addPosition("p1", [-3, -3]);
    design.addPosition("q2", [-3, -1]);

    design.addZone("dices", 2, [0, 1]);
    design.addZone("dices", 1, [0, 1]);
    design.addZone("center", 2, [4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 43, 46, 49]);
    design.addZone("center", 1, [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44, 47]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.PROMOTE,	1);	// On
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	2);	// $3
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	2);	// $3
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	3);	// $4
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.IN_ZONE,	0);	// dices
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addPiece("Off", 0);
    design.addMove(0, 0, [0], 1, 1);

    design.addPiece("On", 1);
    design.addMove(1, 1, [0], 1, 1);
    design.addMove(1, 2, [0, 0], 2, 1);
    design.addMove(1, 3, [0, 0, 0], 3, 1);
    design.addMove(1, 4, [0, 0, 0, 0], 4, 1);

    design.addPiece("D1", 2, 1);
    design.addDrop(2, 5, [], 0, 10);

    design.addPiece("D2", 3, 2);
    design.addDrop(3, 5, [], 0, 10);

    design.addPiece("D3", 4, 3);
    design.addDrop(4, 5, [], 0, 10);

    design.addPiece("D4", 5, 4);
    design.addDrop(5, 5, [], 0, 10);

    design.setup("White", "Off", 2);
    design.setup("White", "Off", 5);
    design.setup("White", "Off", 8);
    design.setup("White", "Off", 11);
    design.setup("White", "Off", 14);
    design.setup("White", "Off", 17);
    design.setup("White", "Off", 20);
    design.setup("White", "Off", 23);
    design.setup("White", "Off", 26);
    design.setup("White", "Off", 29);
    design.setup("White", "Off", 32);
    design.setup("White", "Off", 35);
    design.setup("White", "Off", 38);
    design.setup("White", "Off", 41);
    design.setup("White", "Off", 44);
    design.setup("White", "Off", 47);
    design.setup("Black", "Off", 4);
    design.setup("Black", "Off", 7);
    design.setup("Black", "Off", 10);
    design.setup("Black", "Off", 13);
    design.setup("Black", "Off", 16);
    design.setup("Black", "Off", 19);
    design.setup("Black", "Off", 22);
    design.setup("Black", "Off", 25);
    design.setup("Black", "Off", 28);
    design.setup("Black", "Off", 31);
    design.setup("Black", "Off", 34);
    design.setup("Black", "Off", 37);
    design.setup("Black", "Off", 40);
    design.setup("Black", "Off", 43);
    design.setup("Black", "Off", 46);
    design.setup("Black", "Off", 49);

}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteOff", "White Off");
    view.defPiece("BlackOff", "Black Off");
    view.defPiece("WhiteOn", "White On");
    view.defPiece("BlackOn", "Black On");
    view.defPiece("WhiteD1", "White D1");
    view.defPiece("BlackD1", "Black D1");
    view.defPiece("WhiteD2", "White D2");
    view.defPiece("BlackD2", "Black D2");
    view.defPiece("WhiteD3", "White D3");
    view.defPiece("BlackD3", "Black D3");
    view.defPiece("WhiteD4", "White D4");
    view.defPiece("BlackD4", "Black D4");
 
    view.defPosition("X", 592, 27, 92, 21);
    view.defPosition("Y", 592, 73, 92, 21);
    view.defPosition("a3", 19, 14, 29, 30);
    view.defPosition("a2", 19, 43, 29, 30);
    view.defPosition("a1", 19, 72, 29, 30);
    view.defPosition("b3", 48, 14, 29, 30);
    view.defPosition("b2", 48, 43, 29, 30);
    view.defPosition("b1", 48, 72, 29, 30);
    view.defPosition("c3", 77, 14, 29, 30);
    view.defPosition("c2", 78, 43, 28, 30);
    view.defPosition("c1", 77, 72, 29, 30);
    view.defPosition("d3", 107, 14, 29, 30);
    view.defPosition("d2", 106, 43, 29, 30);
    view.defPosition("d1", 106, 72, 29, 30);
    view.defPosition("e3", 136, 14, 29, 30);
    view.defPosition("e2", 135, 43, 29, 30);
    view.defPosition("e1", 135, 72, 29, 30);
    view.defPosition("f3", 164, 14, 29, 30);
    view.defPosition("f2", 164, 43, 29, 30);
    view.defPosition("f1", 164, 72, 29, 30);
    view.defPosition("g3", 194, 14, 29, 30);
    view.defPosition("g2", 193, 43, 29, 30);
    view.defPosition("g1", 193, 72, 29, 30);
    view.defPosition("h3", 223, 14, 29, 30);
    view.defPosition("h2", 223, 43, 29, 30);
    view.defPosition("h1", 223, 72, 29, 30);
    view.defPosition("i3", 252, 14, 29, 30);
    view.defPosition("i2", 252, 43, 29, 30);
    view.defPosition("i1", 252, 72, 29, 30);
    view.defPosition("j3", 281, 14, 29, 30);
    view.defPosition("j2", 281, 43, 29, 30);
    view.defPosition("j1", 281, 72, 29, 30);
    view.defPosition("k3", 310, 14, 29, 30);
    view.defPosition("k2", 310, 43, 29, 30);
    view.defPosition("k1", 310, 72, 29, 30);
    view.defPosition("l3", 339, 15, 29, 30);
    view.defPosition("l2", 339, 44, 29, 30);
    view.defPosition("l1", 339, 73, 29, 30);
    view.defPosition("m3", 368, 15, 29, 30);
    view.defPosition("m2", 368, 44, 29, 30);
    view.defPosition("m1", 368, 73, 29, 30);
    view.defPosition("n3", 397, 15, 29, 30);
    view.defPosition("n2", 397, 44, 29, 30);
    view.defPosition("n1", 397, 73, 29, 30);
    view.defPosition("o3", 426, 15, 29, 30);
    view.defPosition("o2", 426, 44, 29, 30);
    view.defPosition("o1", 426, 73, 29, 30);
    view.defPosition("p3", 455, 15, 29, 30);
    view.defPosition("p2", 455, 44, 29, 30);
    view.defPosition("p1", 455, 73, 29, 30);
    view.defPosition("q2", 484, 44, 29, 30);
}
