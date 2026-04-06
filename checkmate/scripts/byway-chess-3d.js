Dagaz.View.TARGET_FLAT       =  true;
Dagaz.View.TARGET_RADIUS     =  2;
Dagaz.Controller.persistense = "setup";

Dagaz.AI.WORKER_NAME  = 'scripts/chess-worker.js';
Dagaz.AI.WORKER_TIME  = 5000;
Dagaz.AI.ADVISOR_TIME = 27000;

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

Dagaz.Model.BuildDesign = function(design) {
    design.checkVersion("z2j", "2");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("advisor-wait", "25");

    design.addDirection("sw");  // 0
    design.addDirection("nne"); // 1
    design.addDirection("sse"); // 2
    design.addDirection("e");   // 3
    design.addDirection("nw");  // 4
    design.addDirection("n");   // 5
    design.addDirection("een"); // 6
    design.addDirection("wwn"); // 7
    design.addDirection("se");  // 8
    design.addDirection("ees"); // 9
    design.addDirection("wws"); // 10
    design.addDirection("s");   // 11
    design.addDirection("nnw"); // 12
    design.addDirection("ssw"); // 13
    design.addDirection("w");   // 14
    design.addDirection("ne");  // 15

    design.addPlayer("White", [15, 13, 12, 14, 8, 11, 10, 9, 4, 7, 6, 5, 2, 1, 3, 0]);
    design.addPlayer("Black", [4, 2, 1, 3, 0, 11, 9, 10, 15, 6, 7, 5, 13, 12, 14, 8]);

    design.addPosition("i10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d10", [9, 0, 21, 1, 0, 0, 0, 0, 11, 12, 8, 10, 0, 19, 0, 0]);
    design.addPosition("e10", [9, 0, 21, 0, 0, 0, 0, 0, 11, 12, 8, 10, 0, 19, -1, 0]);
    design.addPosition("f10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("j10", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b9", [9, 0, 21, 1, 0, 0, -8, 0, 11, 12, 0, 10, 0, 19, 0, 0]);
    design.addPosition("c9", [9, 0, 21, 1, 0, 0, -8, 0, 11, 12, 8, 10, 0, 19, -1, -9]);
    design.addPosition("d9", [9, 0, 21, 1, 0, -10, 0, 0, 11, 12, 8, 10, 0, 19, -1, -9]);
    design.addPosition("e9", [9, 0, 21, 1, -11, -10, 0, 0, 11, 12, 8, 10, 0, 19, -1, 0]);
    design.addPosition("f9", [9, 0, 21, 1, -11, 0, 0, -12, 11, 12, 8, 10, 0, 19, -1, 0]);
    design.addPosition("g9", [9, 0, 21, 0, 0, 0, 0, -12, 11, 0, 8, 10, 0, 19, -1, 0]);
    design.addPosition("h9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("j9", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i8", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a8", [0, 0, 21, 1, 0, 0, -8, 0, 11, 12, 0, 10, 0, 19, 0, -9]);
    design.addPosition("b8", [9, 0, 21, 1, 0, -10, -8, 0, 11, 12, 0, 10, 0, 19, -1, -9]);
    design.addPosition("c8", [9, -19, 21, 1, -11, -10, -8, 0, 11, 12, 8, 10, 0, 19, -1, -9]);
    design.addPosition("d8", [9, -19, 21, 1, -11, -10, -8, -12, 11, 12, 8, 10, 0, 19, -1, -9]);
    design.addPosition("e8", [9, 0, 21, 1, -11, -10, -8, -12, 11, 12, 8, 10, -21, 19, -1, -9]);
    design.addPosition("f8", [9, 0, 21, 1, -11, -10, 0, -12, 11, 12, 8, 10, -21, 19, -1, -9]);
    design.addPosition("g8", [9, 0, 21, 1, -11, -10, 0, -12, 11, 0, 8, 10, 0, 19, -1, 0]);
    design.addPosition("h8", [9, 0, 21, 0, -11, 0, 0, -12, 0, 0, 8, 10, 0, 19, -1, 0]);
    design.addPosition("j8", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i7", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a7", [9, -19, 21, 1, 0, -10, -8, 0, 11, 12, 0, 10, 0, 19, 0, -9]);
    design.addPosition("b7", [9, -19, 21, 1, -11, -10, -8, 0, 11, 12, 8, 10, 0, 19, -1, -9]);
    design.addPosition("c7", [9, -19, 21, 1, -11, -10, -8, -12, 11, 12, 8, 10, -21, 19, -1, -9]);
    design.addPosition("d7", [9, -19, 21, 1, -11, -10, -8, -12, 11, 12, 8, 10, -21, 19, -1, -9]);
    design.addPosition("e7", [9, -19, 21, 1, -11, -10, -8, -12, 11, 12, 8, 10, -21, 19, -1, -9]);
    design.addPosition("f7", [9, -19, 21, 1, -11, -10, -8, -12, 11, 12, 8, 10, -21, 19, -1, -9]);
    design.addPosition("g7", [9, 0, 21, 1, -11, -10, 0, -12, 11, 12, 8, 10, -21, 19, -1, -9]);
    design.addPosition("h7", [9, 0, 21, 0, -11, -10, 0, -12, 11, 0, 8, 10, -21, 19, -1, 0]);
    design.addPosition("j7", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i6", [0, -19, 21, 1, 0, 0, -8, 0, 11, 12, 0, 10, 0, 0, 0, -9]);
    design.addPosition("a6", [9, -19, 21, 1, 0, -10, -8, 0, 11, 12, 0, 10, 0, 0, -1, -9]);
    design.addPosition("b6", [9, -19, 21, 1, -11, -10, -8, 0, 11, 12, 8, 10, -21, 19, -1, -9]);
    design.addPosition("c6", [9, -19, 21, 1, -11, -10, -8, -12, 11, 12, 8, 10, -21, 19, -1, -9]);
    design.addPosition("d6", [9, -19, 21, 1, -11, -10, -8, -12, 11, 12, 8, 10, -21, 19, -1, -9]);
    design.addPosition("e6", [9, -19, 21, 1, -11, -10, -8, -12, 11, 12, 8, 10, -21, 19, -1, -9]);
    design.addPosition("f6", [9, -19, 21, 1, -11, -10, -8, -12, 11, 12, 8, 10, -21, 19, -1, -9]);
    design.addPosition("g6", [9, -19, 21, 1, -11, -10, 0, -12, 11, 12, 8, 10, -21, 19, -1, -9]);
    design.addPosition("h6", [9, 0, 0, 1, -11, -10, 0, -12, 11, 0, 8, 10, -21, 19, -1, 0]);
    design.addPosition("j6", [9, 0, 0, 0, -11, 0, 0, -12, 0, 0, 8, 10, -21, 19, -1, 0]);
    design.addPosition("i5", [0, -19, 21, 1, 0, -10, -8, 0, 11, 12, 0, 0, 0, 0, 0, -9]);
    design.addPosition("a5", [0, -19, 21, 1, -11, -10, -8, 0, 11, 12, 0, 10, 0, 0, -1, -9]);
    design.addPosition("b5", [9, -19, 21, 1, -11, -10, -8, -12, 11, 12, 0, 10, -21, 19, -1, -9]);
    design.addPosition("c5", [9, -19, 21, 1, -11, -10, -8, -12, 11, 12, 8, 10, -21, 19, -1, -9]);
    design.addPosition("d5", [9, -19, 21, 1, -11, -10, -8, -12, 11, 12, 8, 10, -21, 19, -1, -9]);
    design.addPosition("e5", [9, -19, 21, 1, -11, -10, -8, -12, 11, 12, 8, 10, -21, 19, -1, -9]);
    design.addPosition("f5", [9, -19, 21, 1, -11, -10, -8, -12, 11, 12, 8, 10, -21, 19, -1, -9]);
    design.addPosition("g5", [9, -19, 21, 1, -11, -10, -8, -12, 11, 0, 8, 10, -21, 19, -1, -9]);
    design.addPosition("h5", [9, 0, 0, 1, -11, -10, 0, -12, 0, 0, 8, 10, -21, 19, -1, -9]);
    design.addPosition("j5", [9, 0, 0, 0, -11, -10, 0, -12, 0, 0, 8, 0, -21, 19, -1, 0]);
    design.addPosition("i4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a4", [0, -19, 21, 1, -11, -10, -8, 0, 11, 12, 0, 10, -21, 0, 0, -9]);
    design.addPosition("b4", [9, -19, 21, 1, -11, -10, -8, -12, 11, 12, 0, 10, -21, 0, -1, -9]);
    design.addPosition("c4", [9, -19, 21, 1, -11, -10, -8, -12, 11, 12, 8, 10, -21, 19, -1, -9]);
    design.addPosition("d4", [9, -19, 21, 1, -11, -10, -8, -12, 11, 12, 8, 10, -21, 19, -1, -9]);
    design.addPosition("e4", [9, -19, 21, 1, -11, -10, -8, -12, 11, 12, 8, 10, -21, 19, -1, -9]);
    design.addPosition("f4", [9, -19, 21, 1, -11, -10, -8, -12, 11, 12, 8, 10, -21, 19, -1, -9]);
    design.addPosition("g4", [9, -19, 0, 1, -11, -10, -8, -12, 11, 0, 8, 10, -21, 19, -1, -9]);
    design.addPosition("h4", [9, -19, 0, 0, -11, -10, 0, -12, 0, 0, 8, 10, -21, 19, -1, -9]);
    design.addPosition("j4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a3", [0, -19, 0, 1, 0, -10, -8, 0, 11, 12, 0, 0, -21, 0, 0, -9]);
    design.addPosition("b3", [0, -19, 0, 1, -11, -10, -8, 0, 11, 12, 0, 10, -21, 0, -1, -9]);
    design.addPosition("c3", [9, -19, 21, 1, -11, -10, -8, -12, 11, 12, 0, 10, -21, 0, -1, -9]);
    design.addPosition("d3", [9, -19, 21, 1, -11, -10, -8, -12, 11, 12, 8, 10, -21, 0, -1, -9]);
    design.addPosition("e3", [9, -19, 0, 1, -11, -10, -8, -12, 11, 12, 8, 10, -21, 19, -1, -9]);
    design.addPosition("f3", [9, -19, 0, 1, -11, -10, -8, -12, 11, 0, 8, 10, -21, 19, -1, -9]);
    design.addPosition("g3", [9, -19, 0, 1, -11, -10, 0, -12, 0, 0, 8, 10, -21, 0, -1, -9]);
    design.addPosition("h3", [9, -19, 0, 0, -11, -10, 0, -12, 0, 0, 8, 0, -21, 0, -1, 0]);
    design.addPosition("j3", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b2", [0, -19, 0, 1, -11, -10, -8, 0, 0, 12, 0, 0, -21, 0, 0, -9]);
    design.addPosition("c2", [0, -19, 0, 1, -11, -10, -8, -12, 11, 12, 0, 0, -21, 0, -1, -9]);
    design.addPosition("d2", [0, -19, 0, 1, -11, -10, -8, -12, 11, 0, 0, 10, -21, 0, -1, -9]);
    design.addPosition("e2", [9, -19, 0, 1, -11, -10, -8, -12, 0, 0, 0, 10, -21, 0, -1, -9]);
    design.addPosition("f2", [9, -19, 0, 1, -11, -10, -8, -12, 0, 0, 8, 0, -21, 0, -1, -9]);
    design.addPosition("g2", [0, -19, 0, 0, -11, -10, 0, -12, 0, 0, 8, 0, -21, 0, -1, -9]);
    design.addPosition("h2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("j2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("i1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("d1", [0, -19, 0, 1, -11, -10, -8, -12, 0, 0, 0, 0, -21, 0, 0, -9]);
    design.addPosition("e1", [0, -19, 0, 0, -11, -10, -8, -12, 0, 0, 0, 0, -21, 0, -1, -9]);
    design.addPosition("f1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("g1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("h1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("j1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

    design.addZone("full-promotion", 1, [40, 21, 12, 13, 4, 5, 16, 17, 28, 49]);
    design.addZone("full-promotion", 2, [50, 71, 82, 83, 94, 95, 86, 87, 78, 59]);
    design.addZone("third-rank", 1, [61, 62, 63, 64, 65, 66, 67, 68]);
    design.addZone("third-rank", 2, [31, 32, 33, 34, 35, 36, 37, 38]);

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
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.IN_ZONE,	1);	// third-rank
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	5);	// last-to?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.LITERAL,	0);	// Pawn
    design.addCommand(3, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	26);	// capture
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	6);	// mark
    design.addCommand(3, ZRF.PARAM,	2);	// $3
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	4);	// last-from?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	7);	// back
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

    design.addPiece("Pawn", 0, 100);
    design.addMove(0, 0, [5], 0);
    design.addMove(0, 1, [5, 5], 0);
    design.addMove(0, 2, [4], 0);
    design.addMove(0, 2, [15], 0);
    design.addMove(0, 3, [3, 5, 5], 0);
    design.addMove(0, 3, [14, 5, 5], 0);

    design.addPiece("Rook", 1, 500);
    design.addMove(1, 4, [5, 5], 0);
    design.addMove(1, 4, [11, 11], 0);
    design.addMove(1, 4, [14, 14], 0);
    design.addMove(1, 4, [3, 3], 0);

    design.addPiece("Knight", 2, 320);
    design.addMove(2, 5, [1], 0);
    design.addMove(2, 5, [12], 0);
    design.addMove(2, 5, [2], 0);
    design.addMove(2, 5, [13], 0);
    design.addMove(2, 5, [6], 0);
    design.addMove(2, 5, [9], 0);
    design.addMove(2, 5, [7], 0);
    design.addMove(2, 5, [10], 0);

    design.addPiece("Bishop", 3, 330);
    design.addMove(3, 4, [4, 4], 0);
    design.addMove(3, 4, [0, 0], 0);
    design.addMove(3, 4, [15, 15], 0);
    design.addMove(3, 4, [8, 8], 0);

    design.addPiece("Queen", 4, 900);
    design.addMove(4, 4, [5, 5], 0);
    design.addMove(4, 4, [11, 11], 0);
    design.addMove(4, 4, [14, 14], 0);
    design.addMove(4, 4, [3, 3], 0);
    design.addMove(4, 4, [4, 4], 0);
    design.addMove(4, 4, [0, 0], 0);
    design.addMove(4, 4, [15, 15], 0);
    design.addMove(4, 4, [8, 8], 0);

    design.addPiece("King", 5, 20000);
    design.addMove(5, 5, [5], 0);
    design.addMove(5, 5, [11], 0);
    design.addMove(5, 5, [14], 0);
    design.addMove(5, 5, [3], 0);
    design.addMove(5, 5, [4], 0);
    design.addMove(5, 5, [0], 0);
    design.addMove(5, 5, [15], 0);
    design.addMove(5, 5, [8], 0);

    design.setup("White", "Pawn", 71);
    design.setup("White", "Pawn", 72);
    design.setup("White", "Pawn", 73);
    design.setup("White", "Pawn", 74);
    design.setup("White", "Pawn", 75);
    design.setup("White", "Pawn", 76);
    design.setup("White", "Pawn", 77);
    design.setup("White", "Pawn", 78);
    design.setup("White", "Rook", 94);
    design.setup("White", "Rook", 95);
    design.setup("White", "Knight", 82);
    design.setup("White", "Knight", 87);
    design.setup("White", "Bishop", 83);
    design.setup("White", "Bishop", 86);
    design.setup("White", "Queen", 84);
    design.setup("White", "King", 85);
    design.setup("Black", "Pawn", 21);
    design.setup("Black", "Pawn", 22);
    design.setup("Black", "Pawn", 23);
    design.setup("Black", "Pawn", 24);
    design.setup("Black", "Pawn", 25);
    design.setup("Black", "Pawn", 26);
    design.setup("Black", "Pawn", 27);
    design.setup("Black", "Pawn", 28);
    design.setup("Black", "Rook", 4);
    design.setup("Black", "Rook", 5);
    design.setup("Black", "Knight", 12);
    design.setup("Black", "Knight", 17);
    design.setup("Black", "Bishop", 13);
    design.setup("Black", "Bishop", 16);
    design.setup("Black", "Queen", 14);
    design.setup("Black", "King", 15);
}

Dagaz.View.configure = function(view) {
    const opacity = 1;
    view.defBoard3D(302, 402, 1, -3, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "Board",   opacity);
    view.defBoard3D(102,  52, 1, -3, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "BoardT",  opacity, 0, -225);
    view.defBoard3D(102,  52, 1, -3, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "BoardB",  opacity, 0, 225);
    view.defBoard3D(52,  302, 1, -3, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "BoardL",  opacity, -175, 0);
    view.defBoard3D(52,  302, 1, -3, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "BoardR",  opacity, 175, 0);
    view.defBoard3D(52,  102, 1, -3, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "BoardLL", opacity, -225, 0);
    view.defBoard3D(52,  102, 1, -3, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "BoardRR", opacity, 225, 0);

    const modelPath = '../res/fairy';
    const white = '#FFFF63';
    const black = '#333333';

    view.defPieceModel(0, 1, modelPath, 'pawn', white, 2);
    view.defPieceModel(0, 2, modelPath, 'pawn', black, 2);
    view.defPieceModel(1, 1, modelPath, 'rook', white, 2);
    view.defPieceModel(1, 2, modelPath, 'rook', black, 2);
    view.defPieceModel(2, 1, modelPath, 'knight', white, 2);
    view.defPieceModel(2, 2, modelPath, 'knight', black, 2);
    view.defPieceModel(3, 1, modelPath, 'bishop', white, 2);
    view.defPieceModel(3, 2, modelPath, 'bishop', black, 2);
    view.defPieceModel(4, 1, modelPath, 'queen', white, 2);
    view.defPieceModel(4, 2, modelPath, 'queen', black, 2);
    view.defPieceModel(5, 1, modelPath, 'king', white, 2);
    view.defPieceModel(5, 2, modelPath, 'king', black, 2);

    view.setCamera(0, 0, 0, -109, 215, 155);
 
    view.defControl("InfoControl", "Paul Byway", true, Dagaz.Controller.open, 'http://mlwi.magix.net/bg/troitzkychess.htm');
    view.defControl("UndoControl", "Undo Move", false, Dagaz.Controller.undo);
    view.defControl("NewControl", "New Game", true, Dagaz.Controller.newGame);
    view.defControl("ResControl", "3D", true, Dagaz.Controller.go, Dagaz.AI.ON ? 'byway-chess.htm' : 'byway-chess-board.htm');
    view.defControl(Dagaz.AI.ON ? ["AiOnControl", "AiLightControl", "AiAlertControl"] : ["AiOffControl", "AiOffControl", "AiOffControl"], Dagaz.AI.ON ? "AI" : "No AI", true, Dagaz.Controller.go, Dagaz.AI.ON ? 'byway-chess-3d-board.htm' : 'byway-chess-3d.htm');
    view.defControl(Dagaz.Controller.soundOff ? ["SoundOffControl", "SoundOnControl"] : ["SoundOnControl", "SoundOffControl"], "Sound", true, Dagaz.Controller.switchSound);
    view.defControl("RedoControl", "Redo Move{move}", false, Dagaz.Controller.redo);
 
    view.defPosition("i10", -225, -225, 50, 50, 0);
    view.defPosition("a10", -175, -225, 50, 50, 0);
    view.defPosition("b10", -125, -225, 50, 50, 0);
    view.defPosition("c10", -75, -225, 50, 50, 0);
    view.defPosition("d10", -25, -225, 50, 50, 0);
    view.defPosition("e10", 25, -225, 50, 50, 0);
    view.defPosition("f10", 75, -225, 50, 50, 0);
    view.defPosition("g10", 125, -225, 50, 50, 0);
    view.defPosition("h10", 175, -225, 50, 50, 0);
    view.defPosition("j10", 225, -225, 50, 50, 0);
    view.defPosition("i9", -225, -175, 50, 50, 0);
    view.defPosition("a9", -175, -175, 50, 50, 0);
    view.defPosition("b9", -125, -175, 50, 50, 0);
    view.defPosition("c9", -75, -175, 50, 50, 0);
    view.defPosition("d9", -25, -175, 50, 50, 0);
    view.defPosition("e9", 25, -175, 50, 50, 0);
    view.defPosition("f9", 75, -175, 50, 50, 0);
    view.defPosition("g9", 125, -175, 50, 50, 0);
    view.defPosition("h9", 175, -175, 50, 50, 0);
    view.defPosition("j9", 225, -175, 50, 50, 0);
    view.defPosition("i8", -225, -125, 50, 50, 0);
    view.defPosition("a8", -175, -125, 50, 50, 0);
    view.defPosition("b8", -125, -125, 50, 50, 0);
    view.defPosition("c8", -75, -125, 50, 50, 0);
    view.defPosition("d8", -25, -125, 50, 50, 0);
    view.defPosition("e8", 25, -125, 50, 50, 0);
    view.defPosition("f8", 75, -125, 50, 50, 0);
    view.defPosition("g8", 125, -125, 50, 50, 0);
    view.defPosition("h8", 175, -125, 50, 50, 0);
    view.defPosition("j8", 225, -125, 50, 50, 0);
    view.defPosition("i7", -225, -75, 50, 50, 0);
    view.defPosition("a7", -175, -75, 50, 50, 0);
    view.defPosition("b7", -125, -75, 50, 50, 0);
    view.defPosition("c7", -75, -75, 50, 50, 0);
    view.defPosition("d7", -25, -75, 50, 50, 0);
    view.defPosition("e7", 25, -75, 50, 50, 0);
    view.defPosition("f7", 75, -75, 50, 50, 0);
    view.defPosition("g7", 125, -75, 50, 50, 0);
    view.defPosition("h7", 175, -75, 50, 50, 0);
    view.defPosition("j7", 225, -75, 50, 50, 0);
    view.defPosition("i6", -225, -25, 50, 50, 0);
    view.defPosition("a6", -175, -25, 50, 50, 0);
    view.defPosition("b6", -125, -25, 50, 50, 0);
    view.defPosition("c6", -75, -25, 50, 50, 0);
    view.defPosition("d6", -25, -25, 50, 50, 0);
    view.defPosition("e6", 25, -25, 50, 50, 0);
    view.defPosition("f6", 75, -25, 50, 50, 0);
    view.defPosition("g6", 125, -25, 50, 50, 0);
    view.defPosition("h6", 175, -25, 50, 50, 0);
    view.defPosition("j6", 225, -25, 50, 50, 0);
    view.defPosition("i5", -225, 25, 50, 50, 0);
    view.defPosition("a5", -175, 25, 50, 50, 0);
    view.defPosition("b5", -125, 25, 50, 50, 0);
    view.defPosition("c5", -75, 25, 50, 50, 0);
    view.defPosition("d5", -25, 25, 50, 50, 0);
    view.defPosition("e5", 25, 25, 50, 50, 0);
    view.defPosition("f5", 75, 25, 50, 50, 0);
    view.defPosition("g5", 125, 25, 50, 50, 0);
    view.defPosition("h5", 175, 25, 50, 50, 0);
    view.defPosition("j5", 225, 25, 50, 50, 0);
    view.defPosition("i4", -225, 75, 50, 50, 0);
    view.defPosition("a4", -175, 75, 50, 50, 0);
    view.defPosition("b4", -125, 75, 50, 50, 0);
    view.defPosition("c4", -75, 75, 50, 50, 0);
    view.defPosition("d4", -25, 75, 50, 50, 0);
    view.defPosition("e4", 25, 75, 50, 50, 0);
    view.defPosition("f4", 75, 75, 50, 50, 0);
    view.defPosition("g4", 125, 75, 50, 50, 0);
    view.defPosition("h4", 175, 75, 50, 50, 0);
    view.defPosition("j4", 225, 75, 50, 50, 0);
    view.defPosition("i3", -225, 125, 50, 50, 0);
    view.defPosition("a3", -175, 125, 50, 50, 0);
    view.defPosition("b3", -125, 125, 50, 50, 0);
    view.defPosition("c3", -75, 125, 50, 50, 0);
    view.defPosition("d3", -25, 125, 50, 50, 0);
    view.defPosition("e3", 25, 125, 50, 50, 0);
    view.defPosition("f3", 75, 125, 50, 50, 0);
    view.defPosition("g3", 125, 125, 50, 50, 0);
    view.defPosition("h3", 175, 125, 50, 50, 0);
    view.defPosition("j3", 225, 125, 50, 50, 0);
    view.defPosition("i2", -225, 175, 50, 50, 0);
    view.defPosition("a2", -175, 175, 50, 50, 0);
    view.defPosition("b2", -125, 175, 50, 50, 0);
    view.defPosition("c2", -75, 175, 50, 50, 0);
    view.defPosition("d2", -25, 175, 50, 50, 0);
    view.defPosition("e2", 25, 175, 50, 50, 0);
    view.defPosition("f2", 75, 175, 50, 50, 0);
    view.defPosition("g2", 125, 175, 50, 50, 0);
    view.defPosition("h2", 175, 175, 50, 50, 0);
    view.defPosition("j2", 225, 175, 50, 50, 0);
    view.defPosition("i1", -225, 225, 50, 50, 0);
    view.defPosition("a1", -175, 225, 50, 50, 0);
    view.defPosition("b1", -125, 225, 50, 50, 0);
    view.defPosition("c1", -75, 225, 50, 50, 0);
    view.defPosition("d1", -25, 225, 50, 50, 0);
    view.defPosition("e1", 25, 225, 50, 50, 0);
    view.defPosition("f1", 75, 225, 50, 50, 0);
    view.defPosition("g1", 125, 225, 50, 50, 0);
    view.defPosition("h1", 175, 225, 50, 50, 0);
    view.defPosition("j1", 225, 225, 50, 50, 0);
}
