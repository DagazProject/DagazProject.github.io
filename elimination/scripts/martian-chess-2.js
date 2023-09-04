Dagaz.View.WIDTH = 204;

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
    design.checkVersion("show-hints", "false");
    design.checkVersion("ko", "true");
    design.checkVersion("advisor-wait", "5");

    design.addDirection("se");
    design.addDirection("s");
    design.addDirection("sw");
    design.addDirection("e");
    design.addDirection("w");
    design.addDirection("ne");
    design.addDirection("nw");
    design.addDirection("n");

    design.addPlayer("Purple", [6, 7, 5, 4, 3, 2, 0, 1]);
    design.addPlayer("Orange", [0, 1, 2, 3, 4, 5, 6, 7]);

    design.addPosition("a8", [5, 4, 0, 1, 0, 0, 0, 0]);
    design.addPosition("b8", [5, 4, 3, 1, -1, 0, 0, 0]);
    design.addPosition("c8", [5, 4, 3, 1, -1, 0, 0, 0]);
    design.addPosition("d8", [0, 4, 3, 0, -1, 0, 0, 0]);
    design.addPosition("a7", [5, 4, 0, 1, 0, -3, 0, -4]);
    design.addPosition("b7", [5, 4, 3, 1, -1, -3, -5, -4]);
    design.addPosition("c7", [5, 4, 3, 1, -1, -3, -5, -4]);
    design.addPosition("d7", [0, 4, 3, 0, -1, 0, -5, -4]);
    design.addPosition("a6", [5, 4, 0, 1, 0, -3, 0, -4]);
    design.addPosition("b6", [5, 4, 3, 1, -1, -3, -5, -4]);
    design.addPosition("c6", [5, 4, 3, 1, -1, -3, -5, -4]);
    design.addPosition("d6", [0, 4, 3, 0, -1, 0, -5, -4]);
    design.addPosition("a5", [5, 4, 0, 1, 0, -3, 0, -4]);
    design.addPosition("b5", [5, 4, 3, 1, -1, -3, -5, -4]);
    design.addPosition("c5", [5, 4, 3, 1, -1, -3, -5, -4]);
    design.addPosition("d5", [0, 4, 3, 0, -1, 0, -5, -4]);
    design.addPosition("a4", [5, 4, 0, 1, 0, -3, 0, -4]);
    design.addPosition("b4", [5, 4, 3, 1, -1, -3, -5, -4]);
    design.addPosition("c4", [5, 4, 3, 1, -1, -3, -5, -4]);
    design.addPosition("d4", [0, 4, 3, 0, -1, 0, -5, -4]);
    design.addPosition("a3", [5, 4, 0, 1, 0, -3, 0, -4]);
    design.addPosition("b3", [5, 4, 3, 1, -1, -3, -5, -4]);
    design.addPosition("c3", [5, 4, 3, 1, -1, -3, -5, -4]);
    design.addPosition("d3", [0, 4, 3, 0, -1, 0, -5, -4]);
    design.addPosition("a2", [5, 4, 0, 1, 0, -3, 0, -4]);
    design.addPosition("b2", [5, 4, 3, 1, -1, -3, -5, -4]);
    design.addPosition("c2", [5, 4, 3, 1, -1, -3, -5, -4]);
    design.addPosition("d2", [0, 4, 3, 0, -1, 0, -5, -4]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -3, 0, -4]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -3, -5, -4]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -3, -5, -4]);
    design.addPosition("d1", [0, 0, 0, 0, -1, 0, -5, -4]);

    design.addZone("home", 2, [12, 13, 14, 15, 8, 9, 10, 11, 4, 5, 6, 7, 0, 1, 2, 3]);
    design.addZone("home", 1, [28, 29, 30, 31, 24, 25, 26, 27, 20, 21, 22, 23, 16, 17, 18, 19]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.LITERAL,	0);	// Bishop
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PROMOTE,	1);	// Drone
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.LITERAL,	1);	// Drone
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PROMOTE,	2);	// Queen
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
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
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.LITERAL,	0);	// Bishop
    design.addCommand(4, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PROMOTE,	2);	// Queen
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	1);	// $2
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.LITERAL,	0);	// Bishop
    design.addCommand(5, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PROMOTE,	2);	// Queen
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.IF,	7);
    design.addCommand(6, ZRF.FORK,	3);
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end
    design.addCommand(6, ZRF.PARAM,	1);	// $2
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.JUMP,	-8);
    design.addCommand(6, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addPiece("Bishop", 0, 2);
    design.addMove(0, 0, [6], 0);
    design.addMove(0, 0, [5], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 1, [6], 1);
    design.addMove(0, 1, [5], 1);
    design.addMove(0, 1, [2], 1);
    design.addMove(0, 1, [0], 1);
    design.addMove(0, 2, [6], 1);
    design.addMove(0, 2, [5], 1);
    design.addMove(0, 2, [2], 1);
    design.addMove(0, 2, [0], 1);

    design.addPiece("Drone", 1, 10);
    design.addMove(1, 0, [7], 0);
    design.addMove(1, 3, [7, 7], 0);
    design.addMove(1, 0, [3], 0);
    design.addMove(1, 3, [3, 3], 0);
    design.addMove(1, 0, [4], 0);
    design.addMove(1, 3, [4, 4], 0);
    design.addMove(1, 0, [1], 0);
    design.addMove(1, 3, [1, 1], 0);
    design.addMove(1, 4, [7], 1);
    design.addMove(1, 5, [7, 7], 1);
    design.addMove(1, 4, [3], 1);
    design.addMove(1, 5, [3, 3], 1);
    design.addMove(1, 4, [4], 1);
    design.addMove(1, 5, [4, 4], 1);
    design.addMove(1, 4, [1], 1);
    design.addMove(1, 5, [1, 1], 1);

    design.addPiece("Queen", 2, 100);
    design.addMove(2, 6, [7, 7], 0);
    design.addMove(2, 6, [6, 6], 0);
    design.addMove(2, 6, [3, 3], 0);
    design.addMove(2, 6, [5, 5], 0);
    design.addMove(2, 6, [4, 4], 0);
    design.addMove(2, 6, [2, 2], 0);
    design.addMove(2, 6, [1, 1], 0);
    design.addMove(2, 6, [0, 0], 0);

    design.setup("Purple", "Bishop", 25);
    design.setup("Purple", "Bishop", 21);
    design.setup("Purple", "Bishop", 22);
    design.setup("Purple", "Drone", 29);
    design.setup("Purple", "Drone", 26);
    design.setup("Purple", "Drone", 23);
    design.setup("Purple", "Queen", 30);
    design.setup("Purple", "Queen", 31);
    design.setup("Purple", "Queen", 27);
    design.setup("Orange", "Bishop", 9);
    design.setup("Orange", "Bishop", 10);
    design.setup("Orange", "Bishop", 6);
    design.setup("Orange", "Drone", 8);
    design.setup("Orange", "Drone", 5);
    design.setup("Orange", "Drone", 2);
    design.setup("Orange", "Queen", 0);
    design.setup("Orange", "Queen", 4);
    design.setup("Orange", "Queen", 1);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board-1", 0, 0, undefined, [0]);
    view.defBoard("Board-2", 0, 0, undefined, [1]);
    view.defPiece("PurpleBishop", "Purple Bishop");
    view.defPiece("OrangeBishop", "Orange Bishop");
    view.defPiece("PurpleDrone", "Purple Drone");
    view.defPiece("OrangeDrone", "Orange Drone");
    view.defPiece("PurpleQueen", "Purple Queen");
    view.defPiece("OrangeQueen", "Orange Queen");
 
    view.defPosition("a8", 20, 2, 50, 50);
    view.defPosition("b8", 70, 2, 50, 50);
    view.defPosition("c8", 120, 2, 50, 50);
    view.defPosition("d8", 170, 2, 50, 50);
    view.defPosition("a7", 20, 52, 50, 50);
    view.defPosition("b7", 70, 52, 50, 50);
    view.defPosition("c7", 120, 52, 50, 50);
    view.defPosition("d7", 170, 52, 50, 50);
    view.defPosition("a6", 20, 102, 50, 50);
    view.defPosition("b6", 70, 102, 50, 50);
    view.defPosition("c6", 120, 102, 50, 50);
    view.defPosition("d6", 170, 102, 50, 50);
    view.defPosition("a5", 20, 152, 50, 50);
    view.defPosition("b5", 70, 152, 50, 50);
    view.defPosition("c5", 120, 152, 50, 50);
    view.defPosition("d5", 170, 152, 50, 50);
    view.defPosition("a4", 20, 202, 50, 50);
    view.defPosition("b4", 70, 202, 50, 50);
    view.defPosition("c4", 120, 202, 50, 50);
    view.defPosition("d4", 170, 202, 50, 50);
    view.defPosition("a3", 20, 252, 50, 50);
    view.defPosition("b3", 70, 252, 50, 50);
    view.defPosition("c3", 120, 252, 50, 50);
    view.defPosition("d3", 170, 252, 50, 50);
    view.defPosition("a2", 20, 302, 50, 50);
    view.defPosition("b2", 70, 302, 50, 50);
    view.defPosition("c2", 120, 302, 50, 50);
    view.defPosition("d2", 170, 302, 50, 50);
    view.defPosition("a1", 20, 352, 50, 50);
    view.defPosition("b1", 70, 352, 50, 50);
    view.defPosition("c1", 120, 352, 50, 50);
    view.defPosition("d1", 170, 352, 50, 50);
}
