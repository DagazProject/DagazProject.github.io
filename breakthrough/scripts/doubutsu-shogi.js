Dagaz.Controller.persistense = "setup";

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
    design.checkVersion("zrf", "3.0");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("highlight-goals", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("doubutsu-shogi-extension", "true");

    design.addDirection("nx"); // 0
    design.addDirection("n");  // 1
    design.addDirection("s");  // 2
    design.addDirection("w");  // 3
    design.addDirection("e");  // 4
    design.addDirection("ne"); // 5
    design.addDirection("sw"); // 6
    design.addDirection("nw"); // 7
    design.addDirection("se"); // 8
    design.addDirection("th"); // 9
    design.addDirection("tn"); // 10

    design.addPlayer("Green", [0, 2, 1, 4, 3, 6, 5, 8, 7, 9, 10]);
    design.addPlayer("Red", [0, 2, 1, 3, 4, 6, 5, 8, 7, 10, 9]);

    design.addPosition("r4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5]);
    design.addPosition("a4", [16, 0, 5, 1, 0, 0, 0, 0, 6, 3, -1]);
    design.addPosition("b4", [16, 0, 5, 1, -1, 0, 4, 0, 6, 2, -2]);
    design.addPosition("c4", [16, 0, 5, 0, -1, 0, 4, 0, 0, 1, -3]);
    design.addPosition("g4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5]);
    design.addPosition("r3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5]);
    design.addPosition("a3", [-5, -5, 5, 1, 0, -4, 0, 0, 6, -2, -6]);
    design.addPosition("b3", [-5, -5, 5, 1, -1, -4, 4, -6, 6, -3, -7]);
    design.addPosition("c3", [-5, -5, 5, 0, -1, 0, 4, -6, 0, -4, -8]);
    design.addPosition("g3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5]);
    design.addPosition("r2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5]);
    design.addPosition("a2", [-5, -5, 5, 1, 0, -4, 0, 0, 6, -7, -11]);
    design.addPosition("b2", [-5, -5, 5, 1, -1, -4, 4, -6, 6, -8, -12]);
    design.addPosition("c2", [-5, -5, 5, 0, -1, 0, 4, -6, 0, -9, -13]);
    design.addPosition("g2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5]);
    design.addPosition("r1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -11]);
    design.addPosition("a1", [-5, -5, 0, 1, 0, -4, 0, 0, 0, -12, -16]);
    design.addPosition("b1", [-5, -5, 0, 1, -1, -4, 0, -6, 0, -13, -17]);
    design.addPosition("c1", [-5, -5, 0, 0, -1, 0, 0, -6, 0, -14, -18]);
    design.addPosition("g1", [0, 0, 0, 0, 0, 0, 0, 0, 0, -19, 0]);

    design.addZone("board-zone", 2, [16, 17, 18, 11, 12, 13, 6, 7, 8, 1, 2, 3]);
    design.addZone("board-zone", 1, [16, 17, 18, 11, 12, 13, 6, 7, 8, 1, 2, 3]);
    design.addZone("promotion-zone", 2, [16, 17, 18]);
    design.addZone("promotion-zone", 1, [1, 2, 3]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.IF,	6);
    design.addCommand(0, ZRF.LITERAL,	0);	// King
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.IF,	3);
    design.addCommand(0, ZRF.LITERAL,	1);	// true
    design.addCommand(0, ZRF.JUMP,	2);
    design.addCommand(0, ZRF.LITERAL,	0);	// false
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	41);
    design.addCommand(0, ZRF.LITERAL,	1);	// Za
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.IF,	6);
    design.addCommand(0, ZRF.LITERAL,	4);	// Hu
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.IF,	3);
    design.addCommand(0, ZRF.LITERAL,	0);	// false
    design.addCommand(0, ZRF.JUMP,	2);
    design.addCommand(0, ZRF.LITERAL,	1);	// true
    design.addCommand(0, ZRF.SET_FLAG,	0);	// is-za?
    design.addCommand(0, ZRF.LITERAL,	2);	// Sang
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.SET_FLAG,	1);	// is-sang?
    design.addCommand(0, ZRF.LITERAL,	3);	// Jang
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(0, ZRF.SET_FLAG,	2);	// is-jang?
    design.addCommand(0, ZRF.FUNCTION,	6);	// mark
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.IF,	4);
    design.addCommand(0, ZRF.PARAM,	2);	// $3
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.JUMP,	-4);
    design.addCommand(0, ZRF.FLAG,	0);	// is-za?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	3);
    design.addCommand(0, ZRF.LITERAL,	1);	// Za
    design.addCommand(0, ZRF.FUNCTION,	11);	// create
    design.addCommand(0, ZRF.FLAG,	1);	// is-sang?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	3);
    design.addCommand(0, ZRF.LITERAL,	2);	// Sang
    design.addCommand(0, ZRF.FUNCTION,	11);	// create
    design.addCommand(0, ZRF.FLAG,	2);	// is-jang?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	3);
    design.addCommand(0, ZRF.LITERAL,	3);	// Jang
    design.addCommand(0, ZRF.FUNCTION,	11);	// create
    design.addCommand(0, ZRF.FUNCTION,	7);	// back
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.IF,	6);
    design.addCommand(1, ZRF.LITERAL,	0);	// King
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.IF,	3);
    design.addCommand(1, ZRF.LITERAL,	1);	// true
    design.addCommand(1, ZRF.JUMP,	2);
    design.addCommand(1, ZRF.LITERAL,	0);	// false
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	41);
    design.addCommand(1, ZRF.LITERAL,	1);	// Za
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.IF,	6);
    design.addCommand(1, ZRF.LITERAL,	4);	// Hu
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.IF,	3);
    design.addCommand(1, ZRF.LITERAL,	0);	// false
    design.addCommand(1, ZRF.JUMP,	2);
    design.addCommand(1, ZRF.LITERAL,	1);	// true
    design.addCommand(1, ZRF.SET_FLAG,	0);	// is-za?
    design.addCommand(1, ZRF.LITERAL,	2);	// Sang
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.SET_FLAG,	1);	// is-sang?
    design.addCommand(1, ZRF.LITERAL,	3);	// Jang
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.SET_FLAG,	2);	// is-jang?
    design.addCommand(1, ZRF.FUNCTION,	6);	// mark
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.IF,	4);
    design.addCommand(1, ZRF.PARAM,	2);	// $3
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.JUMP,	-4);
    design.addCommand(1, ZRF.FLAG,	0);	// is-za?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	3);
    design.addCommand(1, ZRF.LITERAL,	1);	// Za
    design.addCommand(1, ZRF.FUNCTION,	11);	// create
    design.addCommand(1, ZRF.FLAG,	1);	// is-sang?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	3);
    design.addCommand(1, ZRF.LITERAL,	2);	// Sang
    design.addCommand(1, ZRF.FUNCTION,	11);	// create
    design.addCommand(1, ZRF.FLAG,	2);	// is-jang?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	3);
    design.addCommand(1, ZRF.LITERAL,	3);	// Jang
    design.addCommand(1, ZRF.FUNCTION,	11);	// create
    design.addCommand(1, ZRF.FUNCTION,	7);	// back
    design.addCommand(1, ZRF.IN_ZONE,	1);	// promotion-zone
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	4);
    design.addCommand(1, ZRF.PROMOTE,	4);	// Hu
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.JUMP,	2);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	21);	// position
    design.addCommand(2, ZRF.ON_BOARD_DIR,	0);	// name
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	10);
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	4);
    design.addCommand(2, ZRF.FORK,	3);
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.JUMP,	-11);
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addPiece("King", 0, 600000);
    design.addMove(0, 0, [1, 9, 9], 0);
    design.addMove(0, 0, [2, 9, 9], 0);
    design.addMove(0, 0, [3, 9, 9], 0);
    design.addMove(0, 0, [4, 9, 9], 0);
    design.addMove(0, 0, [7, 9, 9], 0);
    design.addMove(0, 0, [6, 9, 9], 0);
    design.addMove(0, 0, [5, 9, 9], 0);
    design.addMove(0, 0, [8, 9, 9], 0);

    design.addPiece("Za", 1, 800);
    design.addMove(1, 1, [1, 9, 9], 0);
    design.addMove(1, 2, [16, 0], 0);

    design.addPiece("Sang", 2, 3000);
    design.addMove(2, 0, [7, 9, 9], 0);
    design.addMove(2, 0, [6, 9, 9], 0);
    design.addMove(2, 0, [5, 9, 9], 0);
    design.addMove(2, 0, [8, 9, 9], 0);
    design.addMove(2, 2, [16, 0], 0);

    design.addPiece("Jang", 3, 5000);
    design.addMove(3, 0, [1, 9, 9], 0);
    design.addMove(3, 0, [2, 9, 9], 0);
    design.addMove(3, 0, [3, 9, 9], 0);
    design.addMove(3, 0, [4, 9, 9], 0);
    design.addMove(3, 2, [16, 0], 0);

    design.addPiece("Hu", 4, 5500);
    design.addMove(4, 0, [1, 9, 9], 0);
    design.addMove(4, 0, [2, 9, 9], 0);
    design.addMove(4, 0, [3, 9, 9], 0);
    design.addMove(4, 0, [4, 9, 9], 0);
    design.addMove(4, 0, [7, 9, 9], 0);
    design.addMove(4, 0, [5, 9, 9], 0);

    design.setup("Green", "Sang", 16);
    design.setup("Green", "King", 17);
    design.setup("Green", "Jang", 18);
    design.setup("Green", "Za", 12);
    design.setup("Red", "Sang", 3);
    design.setup("Red", "King", 2);
    design.setup("Red", "Jang", 1);
    design.setup("Red", "Za", 7);

    design.goal(0, "Green", "King", [1, 2, 3]);
    design.goal(1, "Red", "King", [16, 17, 18]);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("GreenKing", "Green King");
    view.defPiece("RedKing", "Red King");
    view.defPiece("GreenZa", "Green Za");
    view.defPiece("RedZa", "Red Za");
    view.defPiece("GreenSang", "Green Sang");
    view.defPiece("RedSang", "Red Sang");
    view.defPiece("GreenJang", "Green Jang");
    view.defPiece("RedJang", "Red Jang");
    view.defPiece("GreenHu", "Green Hu");
    view.defPiece("RedHu", "Red Hu");
 
    view.defPosition("r4", 12, 12, 103, 93);
    view.defPosition("a4", 105, 12, 103, 93);
    view.defPosition("b4", 198, 12, 103, 93);
    view.defPosition("c4", 291, 12, 103, 93);
    view.defPosition("g4", 384, 12, 103, 93);
    view.defPosition("r3", 12, 106, 103, 93);
    view.defPosition("a3", 105, 106, 103, 93);
    view.defPosition("b3", 198, 106, 103, 93);
    view.defPosition("c3", 291, 106, 103, 93);
    view.defPosition("g3", 384, 106, 103, 93);
    view.defPosition("r2", 12, 200, 103, 93);
    view.defPosition("a2", 105, 200, 103, 93);
    view.defPosition("b2", 198, 200, 103, 93);
    view.defPosition("c2", 291, 200, 103, 93);
    view.defPosition("g2", 384, 200, 103, 93);
    view.defPosition("r1", 12, 294, 103, 93);
    view.defPosition("a1", 105, 294, 103, 93);
    view.defPosition("b1", 198, 294, 103, 93);
    view.defPosition("c1", 291, 294, 103, 93);
    view.defPosition("g1", 384, 294, 103, 93);
}
