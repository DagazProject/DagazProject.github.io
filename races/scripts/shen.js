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
    design.checkVersion("smart-moves", "from");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-captures", "false");
    design.checkVersion("show-drops", "false");
    design.checkVersion("show-lose", "false");
    design.checkVersion("complete-partial", "true");
    design.checkVersion("advisor-wait", "5");

    design.addDirection("nx"); // 0
    design.addDirection("fk"); // 1
    design.addDirection("fb"); // 2
    design.addDirection("rs"); // 3

    design.addPlayer("Blue", [0, 1, 2, 3]);
    design.addPlayer("Red", [0, 2, 1, 3]);
    design.addRandom(2, [0]); // 0
    design.addRandom(2, [0]); // 1
    design.addRandom(2, [0]); // 2
    design.addRandom(2, [0]); // 3
    design.repeatMark();
    design.addRandom(1, [0]); // 4
    design.addRandom(1, [0]); // 5
    design.addRandom(1, [0]); // 6
    design.addRandom(1, [7]); // 7
    design.addTurn(1, [1, 2, 3, 4, 5]); // 8
    design.addRandom(2, [0]); // 9
    design.addRandom(2, [0]); // 10
    design.addRandom(2, [0]); // 11
    design.addRandom(2, [0]); // 12
    design.addTurn(2, [1, 2, 3, 4, 5]); // 13

    design.addPosition("x1", [0, 0, 0, 0]);
    design.addPosition("x2", [0, 0, 0, 0]);
    design.addPosition("x3", [0, 0, 0, 0]);
    design.addPosition("x4", [0, 0, 0, 0]);
    design.addPosition("y1", [0, 0, 0, 0]);
    design.addPosition("y2", [0, 0, 0, 0]);
    design.addPosition("y3", [0, 0, 0, 0]);
    design.addPosition("y4", [0, 0, 0, 0]);
    design.addPosition("a1", [2, 0, 59, 59]);
    design.addPosition("b1", [2, 59, 0, 59]);
    design.addPosition("a2", [2, 0, 0, 0]);
    design.addPosition("b2", [2, 0, 0, 0]);
    design.addPosition("a3", [2, 0, 0, 0]);
    design.addPosition("b3", [2, 0, 0, 0]);
    design.addPosition("a4", [2, 0, 0, 0]);
    design.addPosition("b4", [2, 0, 0, 0]);
    design.addPosition("a5", [2, 0, 0, 0]);
    design.addPosition("b5", [2, 0, 0, 0]);
    design.addPosition("a6", [2, 0, 28, 0]);
    design.addPosition("b6", [2, 28, 0, 0]);
    design.addPosition("a7", [2, 0, 0, 0]);
    design.addPosition("b7", [2, 0, 0, 0]);
    design.addPosition("a8", [2, 0, 4, 0]);
    design.addPosition("b8", [2, 4, 0, 0]);
    design.addPosition("a9", [2, 0, 0, 0]);
    design.addPosition("b9", [2, 0, 0, 0]);
    design.addPosition("a10", [2, 0, -4, 0]);
    design.addPosition("b10", [2, -4, 0, 0]);
    design.addPosition("a11", [2, 0, 0, 0]);
    design.addPosition("b11", [2, 0, 0, 0]);
    design.addPosition("a12", [2, 0, 0, 0]);
    design.addPosition("b12", [2, 0, 0, 0]);
    design.addPosition("a13", [2, 0, 0, 0]);
    design.addPosition("b13", [2, 0, 0, 0]);
    design.addPosition("a14", [2, 0, 0, 0]);
    design.addPosition("b14", [2, 0, 0, 0]);
    design.addPosition("a15", [2, 0, 0, 0]);
    design.addPosition("b15", [2, 0, 0, 0]);
    design.addPosition("a16", [2, 0, 0, 0]);
    design.addPosition("b16", [2, 0, 0, 0]);
    design.addPosition("a17", [2, 0, 0, 0]);
    design.addPosition("b17", [2, 0, 0, 0]);
    design.addPosition("a18", [2, 0, 0, 0]);
    design.addPosition("b18", [2, 0, 0, 0]);
    design.addPosition("a19", [2, 0, 0, 0]);
    design.addPosition("b19", [2, 0, 0, 0]);
    design.addPosition("a20", [2, 0, -28, 0]);
    design.addPosition("b20", [2, -28, 0, 0]);
    design.addPosition("a21", [2, 0, 0, 0]);
    design.addPosition("b21", [2, 0, 0, 0]);
    design.addPosition("a22", [2, 0, 0, 0]);
    design.addPosition("b22", [2, 0, 0, 0]);
    design.addPosition("a23", [2, 0, 0, 0]);
    design.addPosition("b23", [2, 0, 0, 0]);
    design.addPosition("a24", [2, 0, 0, 0]);
    design.addPosition("b24", [2, 0, 0, 0]);
    design.addPosition("a25", [2, 0, 0, 0]);
    design.addPosition("b25", [2, 0, 0, 0]);
    design.addPosition("a26", [2, 0, 0, 0]);
    design.addPosition("b26", [2, 0, 0, 0]);
    design.addPosition("a27", [2, 0, 0, 0]);
    design.addPosition("b27", [2, 0, 0, 0]);
    design.addPosition("a28", [2, 0, 0, 0]);
    design.addPosition("b28", [2, 0, 0, 0]);
    design.addPosition("a29", [2, 0, 0, 0]);
    design.addPosition("b29", [1, 0, 0, 0]);
    design.addPosition("end", [0, -57, -58, 0]);
    design.addPosition("z1", [0, 0, -59, 2]);
    design.addPosition("t1", [0, -59, 0, 2]);
    design.addPosition("z2", [0, 0, -61, 2]);
    design.addPosition("t2", [0, -61, 0, 2]);
    design.addPosition("z3", [0, 0, -63, 2]);
    design.addPosition("t3", [0, -63, 0, 2]);
    design.addPosition("z4", [0, 0, -65, 0]);
    design.addPosition("t4", [0, -65, 0, 0]);

    design.addZone("start", 1, [9]);
    design.addZone("start", 2, [8]);
    design.addZone("stop", 1, [66]);
    design.addZone("stop", 2, [66]);
    design.addZone("bonus", 1, [36, 56, 37, 57]);
    design.addZone("bonus", 2, [36, 56, 37, 57]);
    design.addZone("dice", 1, [0, 1, 2, 3]);
    design.addZone("dice", 2, [4, 5, 6, 7]);
    design.addZone("reserve", 1, [67, 69, 71, 73, 68, 70, 72, 74]);
    design.addZone("reserve", 2, [67, 69, 71, 73, 68, 70, 72, 74]);

    design.addCommand(0, ZRF.IN_ZONE,	3);	// dice
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.ON_BOARD_DIR,	1);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	4);
    design.addCommand(1, ZRF.MODE,	6);	// continue-type
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.JUMP,	2);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.ON_BOARD_DIR,	1);	// name
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	4);
    design.addCommand(2, ZRF.MODE,	6);	// continue-type
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.JUMP,	2);
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	2);	// $3
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.ON_BOARD_DIR,	1);	// name
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	4);
    design.addCommand(3, ZRF.MODE,	6);	// continue-type
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.JUMP,	2);
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	2);	// $3
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	3);	// $4
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.ON_BOARD_DIR,	1);	// name
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	4);
    design.addCommand(4, ZRF.MODE,	6);	// continue-type
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.JUMP,	2);
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	1);	// $2
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	2);	// $3
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	3);	// $4
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	4);	// $5
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.ON_BOARD_DIR,	1);	// name
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	4);
    design.addCommand(5, ZRF.MODE,	6);	// continue-type
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.JUMP,	2);
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addPiece("D0", 0);
    design.addDrop(0, 0, [], 0, 10);
    design.addDrop(0, 0, [], 7, 10);

    design.addPiece("D1", 1);
    design.addDrop(1, 0, [], 0, 10);
    design.addDrop(1, 0, [], 7, 10);

    design.addPiece("Man", 2);
    design.addMove(2, 1, [0], 1);
    design.addMove(2, 2, [0, 0], 2);
    design.addMove(2, 3, [0, 0, 0], 3);
    design.addMove(2, 4, [0, 0, 0, 0], 4);
    design.addMove(2, 5, [0, 0, 0, 0, 0], 5);
    design.addMove(2, 6, [1], 6);

    design.setup("Blue", "Man", 9);
    design.setup("Blue", "Man", 68);
    design.setup("Blue", "Man", 70);
    design.setup("Blue", "Man", 72);
    design.setup("Blue", "Man", 74);
    design.setup("Red", "Man", 8);
    design.setup("Red", "Man", 67);
    design.setup("Red", "Man", 69);
    design.setup("Red", "Man", 71);
    design.setup("Red", "Man", 73);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("BlueD0", "Blue D0");
    view.defPiece("RedD0", "Red D0");
    view.defPiece("BlueD1", "Blue D1");
    view.defPiece("RedD1", "Red D1");
    view.defPiece("BlueMan", "Blue Man");
    view.defPiece("RedMan", "Red Man");
 
    view.defPosition("x1", 566, 7, 15, 322);
    view.defPosition("x2", 596, 7, 15, 322);
    view.defPosition("x3", 566, 339, 15, 322);
    view.defPosition("x4", 596, 339, 15, 322);
    view.defPosition("y1", 19, 7, 15, 322);
    view.defPosition("y2", 47, 7, 15, 322);
    view.defPosition("y3", 19, 339, 15, 322);
    view.defPosition("y4", 47, 339, 15, 322);
    view.defPosition("a1", 236, 216, 26, 26);
    view.defPosition("b1", 366, 216, 26, 26);
    view.defPosition("a2", 236, 254, 26, 26);
    view.defPosition("b2", 366, 254, 26, 26);
    view.defPosition("a3", 236, 292, 26, 26);
    view.defPosition("b3", 366, 292, 26, 26);
    view.defPosition("a4", 236, 330, 26, 26);
    view.defPosition("b4", 366, 330, 26, 26);
    view.defPosition("a5", 236, 368, 26, 26);
    view.defPosition("b5", 366, 368, 26, 26);
    view.defPosition("a6", 236, 407, 26, 26);
    view.defPosition("b6", 366, 407, 26, 26);
    view.defPosition("a7", 236, 446, 26, 26);
    view.defPosition("b7", 366, 446, 26, 26);
    view.defPosition("a8", 236, 484, 26, 26);
    view.defPosition("b8", 366, 484, 26, 26);
    view.defPosition("a9", 236, 523, 26, 26);
    view.defPosition("b9", 366, 523, 26, 26);
    view.defPosition("a10", 236, 561, 26, 26);
    view.defPosition("b10", 366, 561, 26, 26);
    view.defPosition("a11", 236, 600, 26, 26);
    view.defPosition("b11", 366, 600, 26, 26);
    view.defPosition("a12", 203, 580, 26, 26);
    view.defPosition("b12", 399, 580, 26, 26);
    view.defPosition("a13", 176, 553, 26, 26);
    view.defPosition("b13", 426, 553, 26, 26);
    view.defPosition("a14", 152, 523, 26, 26);
    view.defPosition("b14", 450, 523, 26, 26);
    view.defPosition("a15", 133, 490, 26, 26);
    view.defPosition("b15", 469, 490, 26, 26);
    view.defPosition("a16", 118, 454, 26, 26);
    view.defPosition("b16", 484, 454, 26, 26);
    view.defPosition("a17", 107, 417, 26, 26);
    view.defPosition("b17", 495, 417, 26, 26);
    view.defPosition("a18", 100, 380, 26, 26);
    view.defPosition("b18", 502, 380, 26, 26);
    view.defPosition("a19", 96, 342, 26, 26);
    view.defPosition("b19", 505, 342, 26, 26);
    view.defPosition("a20", 95, 303, 26, 26);
    view.defPosition("b20", 506, 303, 26, 26);
    view.defPosition("a21", 99, 265, 26, 26);
    view.defPosition("b21", 503, 265, 26, 26);
    view.defPosition("a22", 105, 226, 26, 26);
    view.defPosition("b22", 497, 226, 26, 26);
    view.defPosition("a23", 115, 190, 26, 26);
    view.defPosition("b23", 487, 190, 26, 26);
    view.defPosition("a24", 129, 154, 26, 26);
    view.defPosition("b24", 473, 154, 26, 26);
    view.defPosition("a25", 147, 120, 26, 26);
    view.defPosition("b25", 455, 120, 26, 26);
    view.defPosition("a26", 169, 89, 26, 26);
    view.defPosition("b26", 433, 89, 26, 26);
    view.defPosition("a27", 196, 61, 26, 26);
    view.defPosition("b27", 406, 61, 26, 26);
    view.defPosition("a28", 228, 39, 26, 26);
    view.defPosition("b28", 375, 39, 26, 26);
    view.defPosition("a29", 263, 24, 26, 26);
    view.defPosition("b29", 339, 24, 26, 26);
    view.defPosition("end", 300, 18, 28, 26);
    view.defPosition("z1", 198, 292, 26, 26);
    view.defPosition("t1", 404, 292, 26, 26);
    view.defPosition("z2", 198, 330, 26, 26);
    view.defPosition("t2", 404, 330, 26, 26);
    view.defPosition("z3", 198, 368, 26, 26);
    view.defPosition("t3", 404, 368, 26, 26);
    view.defPosition("z4", 198, 406, 26, 26);
    view.defPosition("t4", 404, 406, 26, 26);
}
