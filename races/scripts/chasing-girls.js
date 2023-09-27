Dagaz.Model.passForcedDraw = false;

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
    Dagaz.Controller.addSound(10, "../sounds/dice.wav", true);
}

Dagaz.Model.BuildDesign = function(design) {
    design.checkVersion("z2j", "2");
    design.checkVersion("smart-moves", "from");
    design.checkVersion("pass-turn", "forced");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-captures", "false");
    design.checkVersion("show-drops", "false");
    design.checkVersion("show-lose", "false");
    design.checkVersion("advisor-wait", "25");

    design.addDirection("dx"); // 0
    design.addDirection("wx"); // 1
    design.addDirection("px"); // 2

    design.addPlayer("White", [0, 1, 2]);
    design.addPlayer("Black", [0, 1, 2]);

    design.addRandom(1, [0]); // 0
    design.addRandom(1, [0]); // 1
    design.addTurn(1, [1, 2, 3, 4, 5, 6, 8, 9]); // 2
    design.addTurn(1, [1, 2, 3, 4, 5, 6, 8, 9]); // 3
    design.addTurn(1, [1, 2, 3, 4, 5, 6, 8, 9]); // 4
    design.addTurn(1, [1, 2, 3, 4, 5, 6, 8, 9]); // 5
    design.addRandom(2, [0]); // 6
    design.addRandom(2, [0]); // 7
    design.addTurn(2, [1, 2, 3, 4, 5, 6, 8, 9]); // 8
    design.addTurn(2, [1, 2, 3, 4, 5, 6, 8, 9]); // 9
    design.addTurn(2, [1, 2, 3, 4, 5, 6, 8, 9]); // 10
    design.addTurn(2, [1, 2, 3, 4, 5, 6, 8, 9]); // 11

    design.addPosition("m1", [24, 12, 12]);
    design.addPosition("l1", [0, -1, -1]);
    design.addPosition("k1", [0, -1, -2]);
    design.addPosition("j1", [0, -1, -3]);
    design.addPosition("h1", [0, -1, -4]);
    design.addPosition("g1", [0, -1, -5]);
    design.addPosition("f1", [0, -1, -1]);
    design.addPosition("e1", [0, -1, -1]);
    design.addPosition("d1", [0, -1, -2]);
    design.addPosition("c1", [0, -1, -3]);
    design.addPosition("b1", [0, -1, -4]);
    design.addPosition("a1", [0, -1, -5]);
    design.addPosition("m2", [0, 1, 5]);
    design.addPosition("l2", [0, 1, 4]);
    design.addPosition("k2", [0, 1, 3]);
    design.addPosition("j2", [0, 1, 2]);
    design.addPosition("h2", [0, 1, 1]);
    design.addPosition("g2", [0, 1, 1]);
    design.addPosition("f2", [0, 1, 5]);
    design.addPosition("e2", [0, 1, 4]);
    design.addPosition("d2", [0, 1, 3]);
    design.addPosition("c2", [0, 1, 2]);
    design.addPosition("b2", [0, 1, 1]);
    design.addPosition("a2", [0, -12, -12]);
    design.addPosition("D1", [1, 0, 0]);
    design.addPosition("D2", [1, 0, 0]);
    design.addPosition("D3", [1, 0, 0]);
    design.addPosition("D4", [0, 1, 2]);

    design.addZone("dice-zone", 1, [24, 25]);
    design.addZone("dice-zone", 2, [26, 27]);
    design.addZone("init-zone", 1, [27]);
    design.addZone("init-zone", 2, [24]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	4);
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.JUMP,	-5);
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	4);
    design.addCommand(1, ZRF.PARAM,	2);	// $3
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.JUMP,	-5);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.PARAM,	2);	// $3
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	4);
    design.addCommand(2, ZRF.PARAM,	3);	// $4
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.JUMP,	-5);
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.PARAM,	2);	// $3
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.PARAM,	3);	// $4
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	4);
    design.addCommand(3, ZRF.PARAM,	4);	// $5
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.JUMP,	-5);
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
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
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	4);
    design.addCommand(4, ZRF.PARAM,	5);	// $6
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.JUMP,	-5);
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
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
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	4);
    design.addCommand(5, ZRF.PARAM,	6);	// $7
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.JUMP,	-5);
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.IN_ZONE,	0);	// dice-zone
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.IN_ZONE,	1);	// init-zone
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addPiece("Man", 0);
    design.addMove(0, 0, [1, 1], 1, 1);
    design.addMove(0, 1, [1, 1, 1], 2, 1);
    design.addMove(0, 2, [1, 1, 1, 1], 3, 1);
    design.addMove(0, 3, [1, 1, 1, 1, 1], 4, 1);
    design.addMove(0, 4, [1, 1, 1, 1, 1, 1], 5, 1);
    design.addMove(0, 5, [1, 1, 1, 1, 1, 1, 1], 6, 1);
    design.addMove(0, 0, [2, 2], 8, 1);
    design.addMove(0, 1, [2, 2, 2], 9, 1);

    design.addPiece("D1", 1, 1);
    design.addDrop(1, 6, [], 0, 10);
    design.addPiece("D2", 2, 2);
    design.addDrop(2, 6, [], 0, 10);
    design.addPiece("D3", 3, 3);
    design.addDrop(3, 6, [], 0, 10);
    design.addPiece("D4", 4, 4);
    design.addDrop(4, 6, [], 0, 10);
    design.addPiece("D5", 5, 5);
    design.addDrop(5, 6, [], 0, 10);
    design.addPiece("D6", 6, 6);
    design.addDrop(6, 6, [], 0, 10);

    design.setup("Black", "Man", 11);
    design.setup("Black", "Man", 10);
    design.setup("Black", "Man", 9);
    design.setup("Black", "Man", 8);
    design.setup("Black", "Man", 7);
    design.setup("Black", "Man", 6);
    design.setup("White", "Man", 17);
    design.setup("White", "Man", 16);
    design.setup("White", "Man", 15);
    design.setup("White", "Man", 14);
    design.setup("White", "Man", 13);
    design.setup("White", "Man", 12);
}

Dagaz.View.configure = function(view) {
    view.defBoard("WhiteBoard", 0, 0, undefined, [0, 1, 2, 3, 4, 5, 6, 7]);
    view.defBoard("BlackBoard", 0, 0, undefined, [8, 9, 10, 11, 12, 13]);
    view.defPiece("WhiteMan", "White Man");
    view.defPiece("BlackMan", "Black Man");
    view.defPiece("WhiteD1", "White D1");
    view.defPiece("BlackD1", "Black D1");
    view.defPiece("WhiteD2", "White D2");
    view.defPiece("BlackD2", "Black D2");
    view.defPiece("WhiteD3", "White D3");
    view.defPiece("BlackD3", "Black D3");
    view.defPiece("WhiteD4", "White D4");
    view.defPiece("BlackD4", "Black D4");
    view.defPiece("WhiteD5", "White D5");
    view.defPiece("BlackD5", "Black D5");
    view.defPiece("WhiteD6", "White D6");
    view.defPiece("BlackD6", "Black D6");
 
    view.defPosition("m1", 9, 10, 34, 32);
    view.defPosition("l1", 43, 10, 34, 32);
    view.defPosition("k1", 77, 10, 34, 32);
    view.defPosition("j1", 111, 10, 34, 32);
    view.defPosition("h1", 145, 10, 34, 32);
    view.defPosition("g1", 179, 10, 34, 32);
    view.defPosition("f1", 237, 10, 34, 32);
    view.defPosition("e1", 271, 10, 34, 32);
    view.defPosition("d1", 305, 10, 34, 32);
    view.defPosition("c1", 339, 10, 34, 32);
    view.defPosition("b1", 373, 10, 34, 32);
    view.defPosition("a1", 407, 10, 34, 32);
    view.defPosition("m2", 9, 308, 34, 32);
    view.defPosition("l2", 43, 308, 34, 32);
    view.defPosition("k2", 77, 308, 34, 32);
    view.defPosition("j2", 111, 308, 34, 32);
    view.defPosition("h2", 145, 308, 34, 32);
    view.defPosition("g2", 179, 308, 34, 32);
    view.defPosition("f2", 237, 308, 34, 32);
    view.defPosition("e2", 271, 308, 34, 32);
    view.defPosition("d2", 305, 308, 34, 32);
    view.defPosition("c2", 339, 308, 34, 32);
    view.defPosition("b2", 373, 308, 34, 32);
    view.defPosition("a2", 407, 308, 34, 32);
    view.defPosition("D1", 77, 160, 34, 29);
    view.defPosition("D2", 111, 160, 34, 29);
    view.defPosition("D3", 305, 160, 34, 29);
    view.defPosition("D4", 339, 160, 34, 29);
}
