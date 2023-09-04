Dagaz.Model.DETAIL_MOVE_DESCRIPTION = true;

Dagaz.Model.WIDTH = 10;

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
    design.checkVersion("pass-partial", "true");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-drops", "true");
    design.checkVersion("show-lose", "false");
    design.checkVersion("detect-loops", "true");
    design.checkVersion("advisor-wait", "5");
    design.checkVersion("halma-restrictions", "strong");

    design.addDirection("se"); // 0
    design.addDirection("s");  // 1
    design.addDirection("sw"); // 2
    design.addDirection("e");  // 3
    design.addDirection("w");  // 4
    design.addDirection("ne"); // 5
    design.addDirection("nw"); // 6
    design.addDirection("n");  // 7

    design.addPlayer("South", [6, 7, 5, 4, 3, 2, 0, 1]);
    design.addPlayer("West", [2, 4, 6, 1, 7, 0, 5, 3]);
    design.addPlayer("North", [6, 7, 5, 4, 3, 2, 0, 1]);
    design.addPlayer("East", [5, 3, 0, 7, 1, 6, 2, 4]);

    design.addTurn(1, [2]);
    design.addTurn(1, [2]);
    design.addTurn(1, [2]);
    design.addTurn(1, [2]);
    design.addTurn(1, [2]);
    design.addTurn(1, [2]);
    design.addTurn(1, [2]);
    design.addTurn(1, [2]);
    design.repeatMark();
    design.addTurn(1);
    design.addTurn(2);
    design.addTurn(3);
    design.addTurn(4);

    design.addPosition("X9", [11, 10, 0, 1, 0, 0, 0, 0]);
    design.addPosition("a9", [11, 10, 9, 1, -1, 0, 0, 0]);
    design.addPosition("b9", [11, 10, 9, 1, -1, 0, 0, 0]);
    design.addPosition("c9", [11, 10, 9, 1, -1, 0, 0, 0]);
    design.addPosition("d9", [11, 10, 9, 1, -1, 0, 0, 0]);
    design.addPosition("e9", [11, 10, 9, 1, -1, 0, 0, 0]);
    design.addPosition("f9", [11, 10, 9, 1, -1, 0, 0, 0]);
    design.addPosition("g9", [11, 10, 9, 1, -1, 0, 0, 0]);
    design.addPosition("h9", [11, 10, 9, 1, -1, 0, 0, 0]);
    design.addPosition("Y9", [0, 10, 9, 0, -1, 0, 0, 0]);
    design.addPosition("X8", [11, 10, 0, 1, 0, -9, 0, -10]);
    design.addPosition("a8", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("b8", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("c8", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("d8", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("e8", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("f8", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("g8", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("h8", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("Y8", [0, 10, 9, 0, -1, 0, -11, -10]);
    design.addPosition("X7", [11, 10, 0, 1, 0, -9, 0, -10]);
    design.addPosition("a7", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("b7", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("c7", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("d7", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("e7", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("f7", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("g7", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("h7", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("Y7", [0, 10, 9, 0, -1, 0, -11, -10]);
    design.addPosition("X6", [11, 10, 0, 1, 0, -9, 0, -10]);
    design.addPosition("a6", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("b6", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("c6", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("d6", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("e6", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("f6", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("g6", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("h6", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("Y6", [0, 10, 9, 0, -1, 0, -11, -10]);
    design.addPosition("X5", [11, 10, 0, 1, 0, -9, 0, -10]);
    design.addPosition("a5", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("b5", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("c5", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("d5", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("e5", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("f5", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("g5", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("h5", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("Y5", [0, 10, 9, 0, -1, 0, -11, -10]);
    design.addPosition("X4", [11, 10, 0, 1, 0, -9, 0, -10]);
    design.addPosition("a4", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("b4", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("c4", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("d4", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("e4", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("f4", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("g4", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("h4", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("Y4", [0, 10, 9, 0, -1, 0, -11, -10]);
    design.addPosition("X3", [11, 10, 0, 1, 0, -9, 0, -10]);
    design.addPosition("a3", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("b3", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("c3", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("d3", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("e3", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("f3", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("g3", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("h3", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("Y3", [0, 10, 9, 0, -1, 0, -11, -10]);
    design.addPosition("X2", [11, 10, 0, 1, 0, -9, 0, -10]);
    design.addPosition("a2", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("b2", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("c2", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("d2", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("e2", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("f2", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("g2", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("h2", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("Y2", [0, 10, 9, 0, -1, 0, -11, -10]);
    design.addPosition("X1", [11, 10, 0, 1, 0, -9, 0, -10]);
    design.addPosition("a1", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("b1", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("c1", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("d1", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("e1", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("f1", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("g1", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("h1", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("Y1", [0, 10, 9, 0, -1, 0, -11, -10]);
    design.addPosition("X0", [0, 0, 0, 1, 0, -9, 0, -10]);
    design.addPosition("a0", [0, 0, 0, 1, -1, -9, -11, -10]);
    design.addPosition("b0", [0, 0, 0, 1, -1, -9, -11, -10]);
    design.addPosition("c0", [0, 0, 0, 1, -1, -9, -11, -10]);
    design.addPosition("d0", [0, 0, 0, 1, -1, -9, -11, -10]);
    design.addPosition("e0", [0, 0, 0, 1, -1, -9, -11, -10]);
    design.addPosition("f0", [0, 0, 0, 1, -1, -9, -11, -10]);
    design.addPosition("g0", [0, 0, 0, 1, -1, -9, -11, -10]);
    design.addPosition("h0", [0, 0, 0, 1, -1, -9, -11, -10]);
    design.addPosition("Y0", [0, 0, 0, 0, -1, 0, -11, -10]);

    design.addZone("goal-zone", 2, [89, 79, 69, 59, 49, 39, 29, 19]);
    design.addZone("goal-zone", 1, [1, 2, 3, 4, 5, 6, 7, 8]);
    design.addZone("goal-zone", 3, [91, 92, 93, 94, 95, 96, 97, 98]);
    design.addZone("goal-zone", 4, [80, 70, 60, 50, 40, 30, 20, 10]);
    design.addZone("home-zone", 2, [80, 70, 60, 50, 40, 30, 20, 10]);
    design.addZone("home-zone", 1, [91, 92, 93, 94, 95, 96, 97, 98]);
    design.addZone("home-zone", 3, [1, 2, 3, 4, 5, 6, 7, 8]);
    design.addZone("home-zone", 4, [89, 79, 69, 59, 49, 39, 29, 19]);

    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.IN_ZONE,	1);	// home-zone
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.MODE,	1);	// continue-type
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
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	2);	// $3
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	3);	// $4
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.MODE,	1);	// continue-type
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
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	3);	// $4
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	4);	// $5
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	5);	// $6
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.MODE,	1);	// continue-type
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
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	4);	// $5
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	5);	// $6
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	6);	// $7
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	7);	// $8
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.MODE,	1);	// continue-type
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addPiece("T", 0);
    design.addDrop(0, 0, [], 2, 10);
    design.addMove(0, 1, [6], 0);
    design.addMove(0, 1, [5], 0);
    design.addMove(0, 1, [1], 0);
    design.addMove(0, 2, [6, 6], 1);
    design.addMove(0, 2, [5, 5], 1);
    design.addMove(0, 2, [1, 1], 1);
    design.addMove(0, 3, [6, 6, 6, 6], 1);
    design.addMove(0, 3, [5, 5, 5, 5], 1);
    design.addMove(0, 3, [1, 1, 1, 1], 1);
    design.addMove(0, 4, [6, 6, 6, 6, 6, 6], 1);
    design.addMove(0, 4, [5, 5, 5, 5, 5, 5], 1);
    design.addMove(0, 4, [1, 1, 1, 1, 1, 1], 1);
    design.addMove(0, 5, [6, 6, 6, 6, 6, 6, 6, 6], 1);
    design.addMove(0, 5, [5, 5, 5, 5, 5, 5, 5, 5], 1);
    design.addMove(0, 5, [1, 1, 1, 1, 1, 1, 1, 1], 1);

    design.addPiece("S", 1);
    design.addDrop(1, 0, [], 2, 10);
    design.addMove(1, 1, [7], 0);
    design.addMove(1, 1, [3], 0);
    design.addMove(1, 1, [4], 0);
    design.addMove(1, 1, [1], 0);
    design.addMove(1, 2, [7, 7], 1);
    design.addMove(1, 2, [3, 3], 1);
    design.addMove(1, 2, [4, 4], 1);
    design.addMove(1, 2, [1, 1], 1);
    design.addMove(1, 3, [7, 7, 7, 7], 1);
    design.addMove(1, 3, [3, 3, 3, 3], 1);
    design.addMove(1, 3, [4, 4, 4, 4], 1);
    design.addMove(1, 3, [1, 1, 1, 1], 1);
    design.addMove(1, 4, [7, 7, 7, 7, 7, 7], 1);
    design.addMove(1, 4, [3, 3, 3, 3, 3, 3], 1);
    design.addMove(1, 4, [4, 4, 4, 4, 4, 4], 1);
    design.addMove(1, 4, [1, 1, 1, 1, 1, 1], 1);
    design.addMove(1, 5, [7, 7, 7, 7, 7, 7, 7, 7], 1);
    design.addMove(1, 5, [3, 3, 3, 3, 3, 3, 3, 3], 1);
    design.addMove(1, 5, [4, 4, 4, 4, 4, 4, 4, 4], 1);
    design.addMove(1, 5, [1, 1, 1, 1, 1, 1, 1, 1], 1);

    design.addPiece("R", 2);
    design.addDrop(2, 0, [], 2, 10);
    design.addMove(2, 1, [6], 0);
    design.addMove(2, 1, [5], 0);
    design.addMove(2, 1, [2], 0);
    design.addMove(2, 1, [0], 0);
    design.addMove(2, 2, [6, 6], 1);
    design.addMove(2, 2, [5, 5], 1);
    design.addMove(2, 2, [2, 2], 1);
    design.addMove(2, 2, [0, 0], 1);
    design.addMove(2, 3, [6, 6, 6, 6], 1);
    design.addMove(2, 3, [5, 5, 5, 5], 1);
    design.addMove(2, 3, [2, 2, 2, 2], 1);
    design.addMove(2, 3, [0, 0, 0, 0], 1);
    design.addMove(2, 4, [6, 6, 6, 6, 6, 6], 1);
    design.addMove(2, 4, [5, 5, 5, 5, 5, 5], 1);
    design.addMove(2, 4, [2, 2, 2, 2, 2, 2], 1);
    design.addMove(2, 4, [0, 0, 0, 0, 0, 0], 1);
    design.addMove(2, 5, [6, 6, 6, 6, 6, 6, 6, 6], 1);
    design.addMove(2, 5, [5, 5, 5, 5, 5, 5, 5, 5], 1);
    design.addMove(2, 5, [2, 2, 2, 2, 2, 2, 2, 2], 1);
    design.addMove(2, 5, [0, 0, 0, 0, 0, 0, 0, 0], 1);

    design.addPiece("C", 3);
    design.addDrop(3, 0, [], 2, 10);
    design.addMove(3, 1, [7], 0);
    design.addMove(3, 1, [6], 0);
    design.addMove(3, 1, [3], 0);
    design.addMove(3, 1, [5], 0);
    design.addMove(3, 1, [4], 0);
    design.addMove(3, 1, [2], 0);
    design.addMove(3, 1, [1], 0);
    design.addMove(3, 1, [0], 0);
    design.addMove(3, 2, [7, 7], 1);
    design.addMove(3, 2, [6, 6], 1);
    design.addMove(3, 2, [3, 3], 1);
    design.addMove(3, 2, [5, 5], 1);
    design.addMove(3, 2, [4, 4], 1);
    design.addMove(3, 2, [2, 2], 1);
    design.addMove(3, 2, [1, 1], 1);
    design.addMove(3, 2, [0, 0], 1);
    design.addMove(3, 3, [7, 7, 7, 7], 1);
    design.addMove(3, 3, [6, 6, 6, 6], 1);
    design.addMove(3, 3, [3, 3, 3, 3], 1);
    design.addMove(3, 3, [5, 5, 5, 5], 1);
    design.addMove(3, 3, [4, 4, 4, 4], 1);
    design.addMove(3, 3, [2, 2, 2, 2], 1);
    design.addMove(3, 3, [1, 1, 1, 1], 1);
    design.addMove(3, 3, [0, 0, 0, 0], 1);
    design.addMove(3, 4, [7, 7, 7, 7, 7, 7], 1);
    design.addMove(3, 4, [6, 6, 6, 6, 6, 6], 1);
    design.addMove(3, 4, [3, 3, 3, 3, 3, 3], 1);
    design.addMove(3, 4, [5, 5, 5, 5, 5, 5], 1);
    design.addMove(3, 4, [4, 4, 4, 4, 4, 4], 1);
    design.addMove(3, 4, [2, 2, 2, 2, 2, 2], 1);
    design.addMove(3, 4, [1, 1, 1, 1, 1, 1], 1);
    design.addMove(3, 4, [0, 0, 0, 0, 0, 0], 1);
    design.addMove(3, 5, [7, 7, 7, 7, 7, 7, 7, 7], 1);
    design.addMove(3, 5, [6, 6, 6, 6, 6, 6, 6, 6], 1);
    design.addMove(3, 5, [3, 3, 3, 3, 3, 3, 3, 3], 1);
    design.addMove(3, 5, [5, 5, 5, 5, 5, 5, 5, 5], 1);
    design.addMove(3, 5, [4, 4, 4, 4, 4, 4, 4, 4], 1);
    design.addMove(3, 5, [2, 2, 2, 2, 2, 2, 2, 2], 1);
    design.addMove(3, 5, [1, 1, 1, 1, 1, 1, 1, 1], 1);
    design.addMove(3, 5, [0, 0, 0, 0, 0, 0, 0, 0], 1);

    design.reserve("South", "S", 2);
    design.reserve("South", "T", 2);
    design.reserve("South", "R", 2);
    design.reserve("South", "C", 2);

    design.reserve("West", "S", 0);
    design.reserve("West", "T", 0);
    design.reserve("West", "R", 0);
    design.reserve("West", "C", 0);

    design.reserve("North", "S", 0);
    design.reserve("North", "T", 0);
    design.reserve("North", "R", 0);
    design.reserve("North", "C", 0);

    design.reserve("East", "S", 0);
    design.reserve("East", "T", 0);
    design.reserve("East", "R", 0);
    design.reserve("East", "C", 0);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("SouthT", "South T");
    view.defPiece("WestT", "West T");
    view.defPiece("NorthT", "North T");
    view.defPiece("EastT", "East T");
    view.defPiece("SouthS", "South S");
    view.defPiece("WestS", "West S");
    view.defPiece("NorthS", "North S");
    view.defPiece("EastS", "East S");
    view.defPiece("SouthR", "South R");
    view.defPiece("WestR", "West R");
    view.defPiece("NorthR", "North R");
    view.defPiece("EastR", "East R");
    view.defPiece("SouthC", "South C");
    view.defPiece("WestC", "West C");
    view.defPiece("NorthC", "North C");
    view.defPiece("EastC", "East C");
    view.defPiece("Ko", "Ko");
 
    view.defPosition("X9", 2, 2, 50, 50);
    view.defPosition("a9", 52, 2, 50, 50);
    view.defPosition("b9", 102, 2, 50, 50);
    view.defPosition("c9", 152, 2, 50, 50);
    view.defPosition("d9", 202, 2, 50, 50);
    view.defPosition("e9", 252, 2, 50, 50);
    view.defPosition("f9", 302, 2, 50, 50);
    view.defPosition("g9", 352, 2, 50, 50);
    view.defPosition("h9", 402, 2, 50, 50);
    view.defPosition("Y9", 452, 2, 50, 50);
    view.defPosition("X8", 2, 52, 50, 50);
    view.defPosition("a8", 52, 52, 50, 50);
    view.defPosition("b8", 102, 52, 50, 50);
    view.defPosition("c8", 152, 52, 50, 50);
    view.defPosition("d8", 202, 52, 50, 50);
    view.defPosition("e8", 252, 52, 50, 50);
    view.defPosition("f8", 302, 52, 50, 50);
    view.defPosition("g8", 352, 52, 50, 50);
    view.defPosition("h8", 402, 52, 50, 50);
    view.defPosition("Y8", 452, 52, 50, 50);
    view.defPosition("X7", 2, 102, 50, 50);
    view.defPosition("a7", 52, 102, 50, 50);
    view.defPosition("b7", 102, 102, 50, 50);
    view.defPosition("c7", 152, 102, 50, 50);
    view.defPosition("d7", 202, 102, 50, 50);
    view.defPosition("e7", 252, 102, 50, 50);
    view.defPosition("f7", 302, 102, 50, 50);
    view.defPosition("g7", 352, 102, 50, 50);
    view.defPosition("h7", 402, 102, 50, 50);
    view.defPosition("Y7", 452, 102, 50, 50);
    view.defPosition("X6", 2, 152, 50, 50);
    view.defPosition("a6", 52, 152, 50, 50);
    view.defPosition("b6", 102, 152, 50, 50);
    view.defPosition("c6", 152, 152, 50, 50);
    view.defPosition("d6", 202, 152, 50, 50);
    view.defPosition("e6", 252, 152, 50, 50);
    view.defPosition("f6", 302, 152, 50, 50);
    view.defPosition("g6", 352, 152, 50, 50);
    view.defPosition("h6", 402, 152, 50, 50);
    view.defPosition("Y6", 452, 152, 50, 50);
    view.defPosition("X5", 2, 202, 50, 50);
    view.defPosition("a5", 52, 202, 50, 50);
    view.defPosition("b5", 102, 202, 50, 50);
    view.defPosition("c5", 152, 202, 50, 50);
    view.defPosition("d5", 202, 202, 50, 50);
    view.defPosition("e5", 252, 202, 50, 50);
    view.defPosition("f5", 302, 202, 50, 50);
    view.defPosition("g5", 352, 202, 50, 50);
    view.defPosition("h5", 402, 202, 50, 50);
    view.defPosition("Y5", 452, 202, 50, 50);
    view.defPosition("X4", 2, 252, 50, 50);
    view.defPosition("a4", 52, 252, 50, 50);
    view.defPosition("b4", 102, 252, 50, 50);
    view.defPosition("c4", 152, 252, 50, 50);
    view.defPosition("d4", 202, 252, 50, 50);
    view.defPosition("e4", 252, 252, 50, 50);
    view.defPosition("f4", 302, 252, 50, 50);
    view.defPosition("g4", 352, 252, 50, 50);
    view.defPosition("h4", 402, 252, 50, 50);
    view.defPosition("Y4", 452, 252, 50, 50);
    view.defPosition("X3", 2, 302, 50, 50);
    view.defPosition("a3", 52, 302, 50, 50);
    view.defPosition("b3", 102, 302, 50, 50);
    view.defPosition("c3", 152, 302, 50, 50);
    view.defPosition("d3", 202, 302, 50, 50);
    view.defPosition("e3", 252, 302, 50, 50);
    view.defPosition("f3", 302, 302, 50, 50);
    view.defPosition("g3", 352, 302, 50, 50);
    view.defPosition("h3", 402, 302, 50, 50);
    view.defPosition("Y3", 452, 302, 50, 50);
    view.defPosition("X2", 2, 352, 50, 50);
    view.defPosition("a2", 52, 352, 50, 50);
    view.defPosition("b2", 102, 352, 50, 50);
    view.defPosition("c2", 152, 352, 50, 50);
    view.defPosition("d2", 202, 352, 50, 50);
    view.defPosition("e2", 252, 352, 50, 50);
    view.defPosition("f2", 302, 352, 50, 50);
    view.defPosition("g2", 352, 352, 50, 50);
    view.defPosition("h2", 402, 352, 50, 50);
    view.defPosition("Y2", 452, 352, 50, 50);
    view.defPosition("X1", 2, 402, 50, 50);
    view.defPosition("a1", 52, 402, 50, 50);
    view.defPosition("b1", 102, 402, 50, 50);
    view.defPosition("c1", 152, 402, 50, 50);
    view.defPosition("d1", 202, 402, 50, 50);
    view.defPosition("e1", 252, 402, 50, 50);
    view.defPosition("f1", 302, 402, 50, 50);
    view.defPosition("g1", 352, 402, 50, 50);
    view.defPosition("h1", 402, 402, 50, 50);
    view.defPosition("Y1", 452, 402, 50, 50);
    view.defPosition("X0", 2, 452, 50, 50);
    view.defPosition("a0", 52, 452, 50, 50);
    view.defPosition("b0", 102, 452, 50, 50);
    view.defPosition("c0", 152, 452, 50, 50);
    view.defPosition("d0", 202, 452, 50, 50);
    view.defPosition("e0", 252, 452, 50, 50);
    view.defPosition("f0", 302, 452, 50, 50);
    view.defPosition("g0", 352, 452, 50, 50);
    view.defPosition("h0", 402, 452, 50, 50);
    view.defPosition("Y0", 452, 452, 50, 50);
}
