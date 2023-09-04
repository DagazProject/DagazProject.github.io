Dagaz.View.WIDTH = 404;

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
    design.addPlayer("Blue", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPlayer("Green", [0, 1, 2, 3, 4, 5, 6, 7]);

    design.addPosition("a8", [9, 8, 0, 1, 0, 0, 0, 0]);
    design.addPosition("b8", [9, 8, 7, 1, -1, 0, 0, 0]);
    design.addPosition("c8", [9, 8, 7, 1, -1, 0, 0, 0]);
    design.addPosition("d8", [9, 8, 7, 1, -1, 0, 0, 0]);
    design.addPosition("e8", [9, 8, 7, 1, -1, 0, 0, 0]);
    design.addPosition("f8", [9, 8, 7, 1, -1, 0, 0, 0]);
    design.addPosition("g8", [9, 8, 7, 1, -1, 0, 0, 0]);
    design.addPosition("h8", [0, 8, 7, 0, -1, 0, 0, 0]);
    design.addPosition("a7", [9, 8, 0, 1, 0, -7, 0, -8]);
    design.addPosition("b7", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("c7", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("d7", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("e7", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("f7", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("g7", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("h7", [0, 8, 7, 0, -1, 0, -9, -8]);
    design.addPosition("a6", [9, 8, 0, 1, 0, -7, 0, -8]);
    design.addPosition("b6", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("c6", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("d6", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("e6", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("f6", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("g6", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("h6", [0, 8, 7, 0, -1, 0, -9, -8]);
    design.addPosition("a5", [9, 8, 0, 1, 0, -7, 0, -8]);
    design.addPosition("b5", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("c5", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("d5", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("e5", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("f5", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("g5", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("h5", [0, 8, 7, 0, -1, 0, -9, -8]);
    design.addPosition("a4", [9, 8, 0, 1, 0, -7, 0, -8]);
    design.addPosition("b4", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("c4", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("d4", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("e4", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("f4", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("g4", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("h4", [0, 8, 7, 0, -1, 0, -9, -8]);
    design.addPosition("a3", [9, 8, 0, 1, 0, -7, 0, -8]);
    design.addPosition("b3", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("c3", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("d3", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("e3", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("f3", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("g3", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("h3", [0, 8, 7, 0, -1, 0, -9, -8]);
    design.addPosition("a2", [9, 8, 0, 1, 0, -7, 0, -8]);
    design.addPosition("b2", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("c2", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("d2", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("e2", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("f2", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("g2", [9, 8, 7, 1, -1, -7, -9, -8]);
    design.addPosition("h2", [0, 8, 7, 0, -1, 0, -9, -8]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -7, 0, -8]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -7, -9, -8]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -7, -9, -8]);
    design.addPosition("d1", [0, 0, 0, 1, -1, -7, -9, -8]);
    design.addPosition("e1", [0, 0, 0, 1, -1, -7, -9, -8]);
    design.addPosition("f1", [0, 0, 0, 1, -1, -7, -9, -8]);
    design.addPosition("g1", [0, 0, 0, 1, -1, -7, -9, -8]);
    design.addPosition("h1", [0, 0, 0, 0, -1, 0, -9, -8]);

    design.addZone("home", 1, [60, 61, 62, 63, 52, 53, 54, 55, 44, 45, 46, 47, 36, 37, 38, 39]);
    design.addZone("home", 3, [24, 25, 26, 27, 16, 17, 18, 19, 8, 9, 10, 11, 0, 1, 2, 3]);
    design.addZone("home", 2, [56, 57, 58, 59, 48, 49, 50, 51, 40, 41, 42, 43, 32, 33, 34, 35]);
    design.addZone("home", 4, [28, 29, 30, 31, 20, 21, 22, 23, 12, 13, 14, 15, 4, 5, 6, 7]);

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

    design.setup("Purple", "Bishop", 53);
    design.setup("Purple", "Bishop", 45);
    design.setup("Purple", "Bishop", 46);
    design.setup("Purple", "Drone", 61);
    design.setup("Purple", "Drone", 54);
    design.setup("Purple", "Drone", 47);
    design.setup("Purple", "Queen", 62);
    design.setup("Purple", "Queen", 63);
    design.setup("Purple", "Queen", 55);
    design.setup("Orange", "Bishop", 41);
    design.setup("Orange", "Bishop", 42);
    design.setup("Orange", "Bishop", 50);
    design.setup("Orange", "Drone", 40);
    design.setup("Orange", "Drone", 49);
    design.setup("Orange", "Drone", 58);
    design.setup("Orange", "Queen", 56);
    design.setup("Orange", "Queen", 48);
    design.setup("Orange", "Queen", 57);
    design.setup("Blue", "Bishop", 17);
    design.setup("Blue", "Bishop", 18);
    design.setup("Blue", "Bishop", 10);
    design.setup("Blue", "Drone", 16);
    design.setup("Blue", "Drone", 9);
    design.setup("Blue", "Drone", 2);
    design.setup("Blue", "Queen", 0);
    design.setup("Blue", "Queen", 8);
    design.setup("Blue", "Queen", 1);
    design.setup("Green", "Bishop", 13);
    design.setup("Green", "Bishop", 21);
    design.setup("Green", "Bishop", 22);
    design.setup("Green", "Drone", 5);
    design.setup("Green", "Drone", 14);
    design.setup("Green", "Drone", 23);
    design.setup("Green", "Queen", 6);
    design.setup("Green", "Queen", 7);
    design.setup("Green", "Queen", 15);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board-1", 0, 0, undefined, [0]);
    view.defBoard("Board-2", 0, 0, undefined, [1]);
    view.defBoard("Board-3", 0, 0, undefined, [2]);
    view.defBoard("Board-4", 0, 0, undefined, [3]);
    view.defPiece("PurpleBishop", "Purple Bishop");
    view.defPiece("OrangeBishop", "Orange Bishop");
    view.defPiece("BlueBishop", "Blue Bishop");
    view.defPiece("GreenBishop", "Green Bishop");
    view.defPiece("PurpleDrone", "Purple Drone");
    view.defPiece("OrangeDrone", "Orange Drone");
    view.defPiece("BlueDrone", "Blue Drone");
    view.defPiece("GreenDrone", "Green Drone");
    view.defPiece("PurpleQueen", "Purple Queen");
    view.defPiece("OrangeQueen", "Orange Queen");
    view.defPiece("BlueQueen", "Blue Queen");
    view.defPiece("GreenQueen", "Green Queen");
 
    view.defPosition("a8", 20, 2, 50, 50);
    view.defPosition("b8", 70, 2, 50, 50);
    view.defPosition("c8", 120, 2, 50, 50);
    view.defPosition("d8", 170, 2, 50, 50);
    view.defPosition("e8", 220, 2, 50, 50);
    view.defPosition("f8", 270, 2, 50, 50);
    view.defPosition("g8", 320, 2, 50, 50);
    view.defPosition("h8", 370, 2, 50, 50);
    view.defPosition("a7", 20, 52, 50, 50);
    view.defPosition("b7", 70, 52, 50, 50);
    view.defPosition("c7", 120, 52, 50, 50);
    view.defPosition("d7", 170, 52, 50, 50);
    view.defPosition("e7", 220, 52, 50, 50);
    view.defPosition("f7", 270, 52, 50, 50);
    view.defPosition("g7", 320, 52, 50, 50);
    view.defPosition("h7", 370, 52, 50, 50);
    view.defPosition("a6", 20, 102, 50, 50);
    view.defPosition("b6", 70, 102, 50, 50);
    view.defPosition("c6", 120, 102, 50, 50);
    view.defPosition("d6", 170, 102, 50, 50);
    view.defPosition("e6", 220, 102, 50, 50);
    view.defPosition("f6", 270, 102, 50, 50);
    view.defPosition("g6", 320, 102, 50, 50);
    view.defPosition("h6", 370, 102, 50, 50);
    view.defPosition("a5", 20, 152, 50, 50);
    view.defPosition("b5", 70, 152, 50, 50);
    view.defPosition("c5", 120, 152, 50, 50);
    view.defPosition("d5", 170, 152, 50, 50);
    view.defPosition("e5", 220, 152, 50, 50);
    view.defPosition("f5", 270, 152, 50, 50);
    view.defPosition("g5", 320, 152, 50, 50);
    view.defPosition("h5", 370, 152, 50, 50);
    view.defPosition("a4", 20, 202, 50, 50);
    view.defPosition("b4", 70, 202, 50, 50);
    view.defPosition("c4", 120, 202, 50, 50);
    view.defPosition("d4", 170, 202, 50, 50);
    view.defPosition("e4", 220, 202, 50, 50);
    view.defPosition("f4", 270, 202, 50, 50);
    view.defPosition("g4", 320, 202, 50, 50);
    view.defPosition("h4", 370, 202, 50, 50);
    view.defPosition("a3", 20, 252, 50, 50);
    view.defPosition("b3", 70, 252, 50, 50);
    view.defPosition("c3", 120, 252, 50, 50);
    view.defPosition("d3", 170, 252, 50, 50);
    view.defPosition("e3", 220, 252, 50, 50);
    view.defPosition("f3", 270, 252, 50, 50);
    view.defPosition("g3", 320, 252, 50, 50);
    view.defPosition("h3", 370, 252, 50, 50);
    view.defPosition("a2", 20, 302, 50, 50);
    view.defPosition("b2", 70, 302, 50, 50);
    view.defPosition("c2", 120, 302, 50, 50);
    view.defPosition("d2", 170, 302, 50, 50);
    view.defPosition("e2", 220, 302, 50, 50);
    view.defPosition("f2", 270, 302, 50, 50);
    view.defPosition("g2", 320, 302, 50, 50);
    view.defPosition("h2", 370, 302, 50, 50);
    view.defPosition("a1", 20, 352, 50, 50);
    view.defPosition("b1", 70, 352, 50, 50);
    view.defPosition("c1", 120, 352, 50, 50);
    view.defPosition("d1", 170, 352, 50, 50);
    view.defPosition("e1", 220, 352, 50, 50);
    view.defPosition("f1", 270, 352, 50, 50);
    view.defPosition("g1", 320, 352, 50, 50);
    view.defPosition("h1", 370, 352, 50, 50);
}
