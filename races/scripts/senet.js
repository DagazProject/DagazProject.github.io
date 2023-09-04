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
    Dagaz.Controller.addSound(0, "../sounds/slide.ogg", true);
    Dagaz.Controller.addSound(10, "../sounds/dice.wav", true);
}

Dagaz.Model.BuildDesign = function(design) {
    design.checkVersion("z2j", "2");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("animate-drops", "false");
    design.checkVersion("smart-moves", "from");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-lose", "false");
    design.checkVersion("pass-turn", "forced");
    design.checkVersion("advisor-wait", "5");

    design.addDirection("next"); // 0
    design.addDirection("prev"); // 1
    design.addDirection("back"); // 2

    design.addPlayer("Blue", [0, 0, 2]);
    design.addPlayer("Green", [0, 1, 2]);

    design.addRandom(1, [0]); // 0
    design.addRandom(1, [0]); // 1
    design.addRandom(1, [0]); // 2
    design.addRandom(1, [0]); // 3
    design.addTurn(1, [1, 2, 3, 4, 5]); // 4
    design.addRandom(2, [0]); // 5
    design.addRandom(2, [0]); // 6
    design.addRandom(2, [0]); // 7
    design.addRandom(2, [0]); // 8
    design.addTurn(2, [1, 2, 3, 4, 5]); // 9

    design.addPosition("A1", [1, 0, 0]);
    design.addPosition("B1", [1, 0, 0]);
    design.addPosition("C1", [1, 0, 0]);
    design.addPosition("D1", [0, 0, 0]);
    design.addPosition("a3", [3, 0, 0]);
    design.addPosition("a2", [1, 3, 0]);
    design.addPosition("a1", [3, -1, 0]);
    design.addPosition("b3", [3, -3, 0]);
    design.addPosition("b2", [-3, 3, 0]);
    design.addPosition("b1", [3, -3, 0]);
    design.addPosition("c3", [3, -3, 0]);
    design.addPosition("c2", [-3, 3, 0]);
    design.addPosition("c1", [3, -3, 0]);
    design.addPosition("d3", [3, -3, 0]);
    design.addPosition("d2", [-3, 3, 0]);
    design.addPosition("d1", [3, -3, 0]);
    design.addPosition("e3", [3, -3, 0]);
    design.addPosition("e2", [-3, 3, 0]);
    design.addPosition("e1", [3, -3, 0]);
    design.addPosition("f3", [3, -3, 0]);
    design.addPosition("f2", [-3, 3, 0]);
    design.addPosition("f1", [3, -3, 0]);
    design.addPosition("g3", [3, -3, 0]);
    design.addPosition("g2", [-3, 3, 0]);
    design.addPosition("g1", [3, -3, -4]);
    design.addPosition("h3", [3, -3, 0]);
    design.addPosition("h2", [-3, 3, 0]);
    design.addPosition("h1", [3, -3, 0]);
    design.addPosition("i3", [3, -3, 0]);
    design.addPosition("i2", [-3, 3, 0]);
    design.addPosition("i1", [3, -3, 0]);
    design.addPosition("j3", [1, -3, 0]);
    design.addPosition("j2", [-3, -1, 0]);
    design.addPosition("j1", [1, -3, 0]);
    design.addPosition("k1", [0, 0, 0]);

    design.addZone("dices", 1, [0, 1, 2, 3]);
    design.addZone("dices", 2, [0, 1, 2, 3]);
    design.addZone("reborn", 1, [20]);
    design.addZone("reborn", 2, [20]);
    design.addZone("beauty", 1, [21]);
    design.addZone("beauty", 2, [21]);
    design.addZone("water", 1, [24]);
    design.addZone("water", 2, [24]);
    design.addZone("three", 1, [27]);
    design.addZone("three", 2, [27]);
    design.addZone("isis", 1, [30]);
    design.addZone("isis", 2, [30]);
    design.addZone("ra", 1, [33]);
    design.addZone("ra", 2, [33]);
    design.addZone("end", 1, [34]);
    design.addZone("end", 2, [34]);
    design.addZone("safe", 1, [21, 24, 27, 30, 33]);
    design.addZone("safe", 2, [21, 24, 27, 30, 33]);

    design.addCommand(0, ZRF.IN_ZONE,	0);	// dices
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
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
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.PARAM,	2);	// $3
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
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
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
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
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addPiece("Zero", 0);
    design.addDrop(0, 0, [], 0, 10);

    design.addPiece("One", 1);
    design.addDrop(1, 0, [], 0, 10);

    design.addPiece("Stone", 2);
    design.addMove(2, 1, [0], 1);
    design.addMove(2, 2, [0, 0], 2);
    design.addMove(2, 3, [0, 0, 0], 3);
    design.addMove(2, 4, [0, 0, 0, 0], 4);
    design.addMove(2, 5, [0, 0, 0, 0, 0], 5);

    design.setup("Green", "Stone", 4);
    design.setup("Green", "Stone", 10);
    design.setup("Green", "Stone", 16);
    design.setup("Green", "Stone", 22);
    design.setup("Green", "Stone", 28);
    design.setup("Blue", "Stone", 7);
    design.setup("Blue", "Stone", 13);
    design.setup("Blue", "Stone", 19);
    design.setup("Blue", "Stone", 25);
    design.setup("Blue", "Stone", 31);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("BlueZero", "Blue Zero");
    view.defPiece("GreenZero", "Green Zero");
    view.defPiece("BlueOne", "Blue One");
    view.defPiece("GreenOne", "Green One");
    view.defPiece("BlueStone", "Blue Stone");
    view.defPiece("GreenStone", "Green Stone");
 
    view.defPosition("A1", 604, 3, 9, 119);
    view.defPosition("B1", 618, 3, 9, 119);
    view.defPosition("C1", 632, 3, 9, 119);
    view.defPosition("D1", 646, 3, 9, 119);
    view.defPosition("a3", 6, 8, 49, 49);
    view.defPosition("a2", 6, 68, 49, 49);
    view.defPosition("a1", 6, 128, 49, 49);
    view.defPosition("b3", 66, 8, 49, 49);
    view.defPosition("b2", 66, 68, 49, 49);
    view.defPosition("b1", 66, 128, 49, 49);
    view.defPosition("c3", 126, 8, 49, 49);
    view.defPosition("c2", 126, 68, 49, 49);
    view.defPosition("c1", 126, 128, 49, 49);
    view.defPosition("d3", 186, 8, 49, 49);
    view.defPosition("d2", 186, 68, 49, 49);
    view.defPosition("d1", 186, 128, 49, 49);
    view.defPosition("e3", 246, 8, 49, 49);
    view.defPosition("e2", 246, 68, 49, 49);
    view.defPosition("e1", 246, 128, 49, 49);
    view.defPosition("f3", 306, 8, 49, 49);
    view.defPosition("f2", 306, 68, 49, 49);
    view.defPosition("f1", 306, 128, 49, 49);
    view.defPosition("g3", 366, 8, 49, 49);
    view.defPosition("g2", 366, 68, 49, 49);
    view.defPosition("g1", 366, 128, 49, 49);
    view.defPosition("h3", 426, 8, 49, 49);
    view.defPosition("h2", 426, 68, 49, 49);
    view.defPosition("h1", 426, 128, 49, 49);
    view.defPosition("i3", 486, 8, 49, 49);
    view.defPosition("i2", 486, 68, 49, 49);
    view.defPosition("i1", 486, 128, 49, 49);
    view.defPosition("j3", 546, 8, 49, 49);
    view.defPosition("j2", 546, 68, 49, 49);
    view.defPosition("j1", 546, 128, 49, 49);
    view.defPosition("k1", 606, 128, 49, 49);
}
