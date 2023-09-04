Dagaz.Controller.noDropIndex = true;

Dagaz.Model.TO_CHAR = 'PpNnBbRrCcAaKk';

Dagaz.Model.WIDTH  = 9;
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
    design.checkVersion("animate-drops", "false");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("show-captures", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-drops", "true");

    design.addDirection("se");  // 0
    design.addDirection("s");   // 1
    design.addDirection("sw");  // 2
    design.addDirection("e");   // 3
    design.addDirection("w");   // 4
    design.addDirection("ne");  // 5
    design.addDirection("nw");  // 6
    design.addDirection("n");   // 7
    design.addDirection("fn");  // 8
    design.addDirection("fe");  // 9
    design.addDirection("fw");  // 10
    design.addDirection("fs");  // 11
    design.addDirection("fnw"); // 12
    design.addDirection("fne"); // 13
    design.addDirection("fsw"); // 14
    design.addDirection("fse"); // 15

    design.addPlayer("You", [6, 7, 5, 4, 3, 2, 0, 1, 11, 10, 9, 8, 15, 14, 13, 12]);

    design.addPosition("a10", [10, 9, 0, 1, 0, 0, 0, 0, 0, 1, 0, 9, 0, 0, 0, 0]);
    design.addPosition("b10", [10, 9, 8, 1, -1, 0, 0, 0, 0, 0, 0, 9, 0, 0, 8, 10]);
    design.addPosition("c10", [10, 9, 8, 1, -1, 0, 0, 0, 0, 1, -1, 0, 0, 0, 8, 10]);
    design.addPosition("d10", [10, 9, 8, 1, -1, 0, 0, 0, 0, 1, 0, 9, 0, 0, 0, 10]);
    design.addPosition("e10", [10, 9, 8, 1, -1, 0, 0, 0, 0, 1, -1, 9, 0, 0, 0, 0]);
    design.addPosition("f10", [10, 9, 8, 1, -1, 0, 0, 0, 0, 0, -1, 9, 0, 0, 8, 0]);
    design.addPosition("g10", [10, 9, 8, 1, -1, 0, 0, 0, 0, 1, -1, 0, 0, 0, 8, 10]);
    design.addPosition("h10", [10, 9, 8, 1, -1, 0, 0, 0, 0, 0, 0, 9, 0, 0, 8, 10]);
    design.addPosition("i10", [0, 9, 8, 0, -1, 0, 0, 0, 0, 0, -1, 9, 0, 0, 0, 0]);
    design.addPosition("a9", [10, 9, 0, 1, 0, -8, 0, -9, -9, 1, 0, 9, 0, 0, 0, 0]);
    design.addPosition("b9", [10, 9, 8, 1, -1, -8, -10, -9, 0, 1, 0, 9, -10, 0, 0, 0]);
    design.addPosition("c9", [10, 9, 8, 1, -1, -8, -10, -9, 0, 0, 0, 0, -10, 0, 8, 0]);
    design.addPosition("d9", [10, 9, 8, 1, -1, -8, -10, -9, -9, 1, 0, 9, 0, 0, 0, 0]);
    design.addPosition("e9", [10, 9, 8, 1, -1, -8, -10, -9, -9, 1, -1, 9, -10, -8, 8, 10]);
    design.addPosition("f9", [10, 9, 8, 1, -1, -8, -10, -9, -9, 0, -1, 9, 0, 0, 0, 0]);
    design.addPosition("g9", [10, 9, 8, 1, -1, -8, -10, -9, 0, 0, 0, 0, 0, -8, 0, 10]);
    design.addPosition("h9", [10, 9, 8, 1, -1, -8, -10, -9, 0, 0, -1, 9, 0, -8, 0, 0]);
    design.addPosition("i9", [0, 9, 8, 0, -1, 0, -10, -9, -9, 0, -1, 9, 0, 0, 0, 0]);
    design.addPosition("a8", [10, 9, 0, 1, 0, -8, 0, -9, 0, 0, 0, 0, 0, -8, 0, 10]);
    design.addPosition("b8", [10, 9, 8, 1, -1, -8, -10, -9, -9, 1, -1, 9, 0, 0, 0, 0]);
    design.addPosition("c8", [10, 9, 8, 1, -1, -8, -10, -9, -9, 0, -1, 9, 0, 0, 0, 0]);
    design.addPosition("d8", [10, 9, 8, 1, -1, -8, -10, -9, -9, 1, 0, 0, 0, -8, 0, 0]);
    design.addPosition("e8", [10, 9, 8, 1, -1, -8, -10, -9, -9, 1, -1, 0, 0, 0, 0, 0]);
    design.addPosition("f8", [10, 9, 8, 1, -1, -8, -10, -9, -9, 0, -1, 0, -10, 0, 0, 0]);
    design.addPosition("g8", [10, 9, 8, 1, -1, -8, -10, -9, -9, 1, 0, 9, 0, 0, 0, 0]);
    design.addPosition("h8", [10, 9, 8, 1, -1, -8, -10, -9, -9, 1, -1, 9, 0, 0, 0, 0]);
    design.addPosition("i8", [0, 9, 8, 0, -1, 0, -10, -9, 0, 0, 0, 0, -10, 0, 8, 0]);
    design.addPosition("a7", [10, 9, 0, 1, 0, -8, 0, -9, -9, 0, 0, 9, 0, 0, 0, 0]);
    design.addPosition("b7", [10, 9, 8, 1, -1, -8, -10, -9, 0, 1, -1, 0, 0, 0, 0, 0]);
    design.addPosition("c7", [10, 9, 8, 1, -1, -8, -10, -9, -9, 1, -1, 9, 0, 0, 0, 0]);
    design.addPosition("d7", [10, 9, 8, 1, -1, -8, -10, -9, 0, 1, -1, 9, 0, 0, 0, 0]);
    design.addPosition("e7", [10, 9, 8, 1, -1, -8, -10, -9, 0, 1, -1, 9, 0, 0, 0, 0]);
    design.addPosition("f7", [10, 9, 8, 1, -1, -8, -10, -9, 0, 1, -1, 9, 0, 0, 0, 0]);
    design.addPosition("g7", [10, 9, 8, 1, -1, -8, -10, -9, -9, 1, -1, 9, 0, 0, 0, 0]);
    design.addPosition("h7", [10, 9, 8, 1, -1, -8, -10, -9, 0, 1, -1, 0, 0, 0, 0, 0]);
    design.addPosition("i7", [0, 9, 8, 0, -1, 0, -10, -9, -9, 0, 0, 9, 0, 0, 0, 0]);
    design.addPosition("a6", [10, 9, 0, 1, 0, -8, 0, -9, 0, 1, 0, 0, 0, -8, 0, 10]);
    design.addPosition("b6", [10, 9, 8, 1, -1, -8, -10, -9, -9, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c6", [10, 9, 8, 1, -1, -8, -10, -9, 0, 0, 0, 0, -10, -8, 8, 10]);
    design.addPosition("d6", [10, 9, 8, 1, -1, -8, -10, -9, -9, 0, -1, 9, 0, 0, 0, 0]);
    design.addPosition("e6", [10, 9, 8, 1, -1, -8, -10, -9, -9, 1, -1, 9, -10, -8, 8, 10]);
    design.addPosition("f6", [10, 9, 8, 1, -1, -8, -10, -9, -9, 0, -1, 9, 0, 0, 0, 0]);
    design.addPosition("g6", [10, 9, 8, 1, -1, -8, -10, -9, 0, 0, 0, 0, -10, -8, 8, 10]);
    design.addPosition("h6", [10, 9, 8, 1, -1, -8, -10, -9, 0, 0, -1, 0, 0, 0, 0, 0]);
    design.addPosition("i6", [0, 9, 8, 0, -1, 0, -10, -9, 0, 0, -1, 0, -10, 0, 8, 0]);
    design.addPosition("a5", [10, 9, 0, 1, 0, -8, 0, -9, 0, 1, 0, 0, 0, -8, 0, 10]);
    design.addPosition("b5", [10, 9, 8, 1, -1, -8, -10, -9, 0, 1, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c5", [10, 9, 8, 1, -1, -8, -10, -9, 0, 0, 0, 0, -10, -8, 8, 10]);
    design.addPosition("d5", [10, 9, 8, 1, -1, -8, -10, -9, -9, 1, 0, 9, 0, 0, 0, 0]);
    design.addPosition("e5", [10, 9, 8, 1, -1, -8, -10, -9, -9, 1, -1, 9, -10, -8, 8, 10]);
    design.addPosition("f5", [10, 9, 8, 1, -1, -8, -10, -9, -9, 1, 0, 9, 0, 0, 0, 0]);
    design.addPosition("g5", [10, 9, 8, 1, -1, -8, -10, -9, 0, 0, 0, 0, -10, -8, 8, 10]);
    design.addPosition("h5", [10, 9, 8, 1, -1, -8, -10, -9, 0, 0, 0, 9, 0, 0, 0, 0]);
    design.addPosition("i5", [0, 9, 8, 0, -1, 0, -10, -9, 0, 0, -1, 0, -10, 0, 8, 0]);
    design.addPosition("a4", [10, 9, 0, 1, 0, -8, 0, -9, -9, 0, 0, 9, 0, 0, 0, 0]);
    design.addPosition("b4", [10, 9, 8, 1, -1, -8, -10, -9, 0, 1, -1, 0, 0, 0, 0, 0]);
    design.addPosition("c4", [10, 9, 8, 1, -1, -8, -10, -9, -9, 1, -1, 9, 0, 0, 0, 0]);
    design.addPosition("d4", [10, 9, 8, 1, -1, -8, -10, -9, -9, 1, -1, 0, 0, 0, 0, 0]);
    design.addPosition("e4", [10, 9, 8, 1, -1, -8, -10, -9, -9, 1, -1, 0, 0, 0, 0, 0]);
    design.addPosition("f4", [10, 9, 8, 1, -1, -8, -10, -9, -9, 1, -1, 0, 0, 0, 0, 0]);
    design.addPosition("g4", [10, 9, 8, 1, -1, -8, -10, -9, -9, 1, -1, 9, 0, 0, 0, 0]);
    design.addPosition("h4", [10, 9, 8, 1, -1, -8, -10, -9, 0, 1, -1, 0, 0, 0, 0, 0]);
    design.addPosition("i4", [0, 9, 8, 0, -1, 0, -10, -9, -9, 0, 0, 9, 0, 0, 0, 0]);
    design.addPosition("a3", [10, 9, 0, 1, 0, -8, 0, -9, 0, 0, 0, 0, 0, -8, 0, 10]);
    design.addPosition("b3", [10, 9, 8, 1, -1, -8, -10, -9, -9, 1, -1, 9, 0, 0, 0, 0]);
    design.addPosition("c3", [10, 9, 8, 1, -1, -8, -10, -9, -9, 0, -1, 9, 0, 0, 0, 0]);
    design.addPosition("d3", [10, 9, 8, 1, -1, -8, -10, -9, 0, 1, 0, 9, 0, 0, 0, 10]);
    design.addPosition("e3", [10, 9, 8, 1, -1, -8, -10, -9, 0, 1, -1, 9, 0, 0, 0, 0]);
    design.addPosition("f3", [10, 9, 8, 1, -1, -8, -10, -9, 0, 0, -1, 9, 0, 0, 8, 0]);
    design.addPosition("g3", [10, 9, 8, 1, -1, -8, -10, -9, -9, 1, 0, 9, 0, 0, 0, 0]);
    design.addPosition("h3", [10, 9, 8, 1, -1, -8, -10, -9, -9, 1, -1, 9, 0, 0, 0, 0]);
    design.addPosition("i3", [0, 9, 8, 0, -1, 0, -10, -9, 0, 0, 0, 0, -10, 0, 8, 0]);
    design.addPosition("a2", [10, 9, 0, 1, 0, -8, 0, -9, -9, 1, 0, 9, 0, 0, 0, 0]);
    design.addPosition("b2", [10, 9, 8, 1, -1, -8, -10, -9, -9, 1, 0, 0, 0, 0, 8, 0]);
    design.addPosition("c2", [10, 9, 8, 1, -1, -8, -10, -9, 0, 0, 0, 0, -10, 0, 8, 0]);
    design.addPosition("d2", [10, 9, 8, 1, -1, -8, -10, -9, -9, 1, 0, 9, 0, 0, 0, 0]);
    design.addPosition("e2", [10, 9, 8, 1, -1, -8, -10, -9, -9, 1, -1, 9, -10, -8, 8, 10]);
    design.addPosition("f2", [10, 9, 8, 1, -1, -8, -10, -9, -9, 0, -1, 9, 0, 0, 0, 0]);
    design.addPosition("g2", [10, 9, 8, 1, -1, -8, -10, -9, 0, 0, 0, 0, 0, -8, 0, 10]);
    design.addPosition("h2", [10, 9, 8, 1, -1, -8, -10, -9, -9, 0, -1, 0, 0, 0, 0, 10]);
    design.addPosition("i2", [0, 9, 8, 0, -1, 0, -10, -9, -9, 0, -1, 9, 0, 0, 0, 0]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -8, 0, -9, -9, 1, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -8, -10, -9, -9, 0, 0, 0, -10, -8, 0, 0]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -8, -10, -9, 0, 1, -1, 0, -10, -8, 0, 0]);
    design.addPosition("d1", [0, 0, 0, 1, -1, -8, -10, -9, -9, 1, 0, 0, 0, -8, 0, 0]);
    design.addPosition("e1", [0, 0, 0, 1, -1, -8, -10, -9, -9, 1, -1, 0, 0, 0, 0, 0]);
    design.addPosition("f1", [0, 0, 0, 1, -1, -8, -10, -9, -9, 0, -1, 0, -10, 0, 0, 0]);
    design.addPosition("g1", [0, 0, 0, 1, -1, -8, -10, -9, 0, 1, -1, 0, -10, -8, 0, 0]);
    design.addPosition("h1", [0, 0, 0, 1, -1, -8, -10, -9, -9, 0, 0, 0, -10, -8, 0, 0]);
    design.addPosition("i1", [0, 0, 0, 0, -1, 0, -10, -9, -9, 0, -1, 0, 0, 0, 0, 0]);

    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.FUNCTION,	26);	// capture
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addPiece("RedNinny", 0);
    design.addDrop(0, 0, [], 0);
    design.addMove(0, 1, [], 0);

    design.addPiece("BlueNinny", 1);
    design.addDrop(1, 0, [], 0);
    design.addMove(1, 1, [], 0);

    design.addPiece("RedYahoo", 2);
    design.addDrop(2, 0, [], 0);
    design.addMove(2, 1, [], 0);

    design.addPiece("BlueYahoo", 3);
    design.addDrop(3, 0, [], 0);
    design.addMove(3, 1, [], 0);

    design.addPiece("RedFuddy-Duddy", 4);
    design.addDrop(4, 0, [], 0);
    design.addMove(4, 1, [], 0);

    design.addPiece("BlueFuddy-Duddy", 5);
    design.addDrop(5, 0, [], 0);
    design.addMove(5, 1, [], 0);

    design.addPiece("RedNumskull", 6);
    design.addDrop(6, 0, [], 0);
    design.addMove(6, 1, [], 0);

    design.addPiece("BlueNumskull", 7);
    design.addDrop(7, 0, [], 0);
    design.addMove(7, 1, [], 0);

    design.addPiece("RedClodhopper", 8);
    design.addDrop(8, 0, [], 0);
    design.addMove(8, 1, [], 0);

    design.addPiece("BlueClodhopper", 9);
    design.addDrop(9, 0, [], 0);
    design.addMove(9, 1, [], 0);

    design.addPiece("RedToady", 10);
    design.addDrop(10, 0, [], 0);
    design.addMove(10, 1, [], 0);

    design.addPiece("BlueToady", 11);
    design.addDrop(11, 0, [], 0);
    design.addMove(11, 1, [], 0);

    design.addPiece("RedBrain", 12);
    design.addDrop(12, 0, [], 0);
    design.addMove(12, 1, [], 0);

    design.addPiece("BlueBrain", 13);
    design.addDrop(13, 0, [], 0);
    design.addMove(13, 1, [], 0);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("RedNinny", "You RedNinny");
    view.defPiece("BlueNinny", "You BlueNinny");
    view.defPiece("RedYahoo", "You RedYahoo");
    view.defPiece("BlueYahoo", "You BlueYahoo");
    view.defPiece("RedFuddy-Duddy", "You RedFuddy-Duddy");
    view.defPiece("BlueFuddy-Duddy", "You BlueFuddy-Duddy");
    view.defPiece("RedNumskull", "You RedNumskull");
    view.defPiece("BlueNumskull", "You BlueNumskull");
    view.defPiece("RedClodhopper", "You RedClodhopper");
    view.defPiece("BlueClodhopper", "You BlueClodhopper");
    view.defPiece("RedToady", "You RedToady");
    view.defPiece("BlueToady", "You BlueToady");
    view.defPiece("RedBrain", "You RedBrain");
    view.defPiece("BlueBrain", "You BlueBrain");
 
    view.defPosition("a10", 2, 2, 59, 59);
    view.defPosition("b10", 62, 2, 59, 59);
    view.defPosition("c10", 122, 2, 59, 59);
    view.defPosition("d10", 182, 2, 59, 59);
    view.defPosition("e10", 242, 2, 59, 59);
    view.defPosition("f10", 302, 2, 59, 59);
    view.defPosition("g10", 362, 2, 59, 59);
    view.defPosition("h10", 422, 2, 59, 59);
    view.defPosition("i10", 482, 2, 59, 59);
    view.defPosition("a9", 2, 62, 59, 59);
    view.defPosition("b9", 62, 62, 59, 59);
    view.defPosition("c9", 122, 62, 59, 59);
    view.defPosition("d9", 182, 62, 59, 59);
    view.defPosition("e9", 242, 62, 59, 59);
    view.defPosition("f9", 302, 62, 59, 59);
    view.defPosition("g9", 362, 62, 59, 59);
    view.defPosition("h9", 422, 62, 59, 59);
    view.defPosition("i9", 482, 62, 59, 59);
    view.defPosition("a8", 2, 122, 59, 59);
    view.defPosition("b8", 62, 122, 59, 59);
    view.defPosition("c8", 122, 122, 59, 59);
    view.defPosition("d8", 182, 122, 59, 59);
    view.defPosition("e8", 242, 122, 59, 59);
    view.defPosition("f8", 302, 122, 59, 59);
    view.defPosition("g8", 362, 122, 59, 59);
    view.defPosition("h8", 422, 122, 59, 59);
    view.defPosition("i8", 482, 122, 59, 59);
    view.defPosition("a7", 2, 182, 59, 59);
    view.defPosition("b7", 62, 182, 59, 59);
    view.defPosition("c7", 122, 182, 59, 59);
    view.defPosition("d7", 182, 182, 59, 59);
    view.defPosition("e7", 242, 182, 59, 59);
    view.defPosition("f7", 302, 182, 59, 59);
    view.defPosition("g7", 362, 182, 59, 59);
    view.defPosition("h7", 422, 182, 59, 59);
    view.defPosition("i7", 482, 182, 59, 59);
    view.defPosition("a6", 2, 242, 59, 59);
    view.defPosition("b6", 62, 242, 59, 59);
    view.defPosition("c6", 122, 242, 59, 59);
    view.defPosition("d6", 182, 242, 59, 59);
    view.defPosition("e6", 242, 242, 59, 59);
    view.defPosition("f6", 302, 242, 59, 59);
    view.defPosition("g6", 362, 242, 59, 59);
    view.defPosition("h6", 422, 242, 59, 59);
    view.defPosition("i6", 482, 242, 59, 59);
    view.defPosition("a5", 2, 302, 59, 59);
    view.defPosition("b5", 62, 302, 59, 59);
    view.defPosition("c5", 122, 302, 59, 59);
    view.defPosition("d5", 182, 302, 59, 59);
    view.defPosition("e5", 242, 302, 59, 59);
    view.defPosition("f5", 302, 302, 59, 59);
    view.defPosition("g5", 362, 302, 59, 59);
    view.defPosition("h5", 422, 302, 59, 59);
    view.defPosition("i5", 482, 302, 59, 59);
    view.defPosition("a4", 2, 362, 59, 59);
    view.defPosition("b4", 62, 362, 59, 59);
    view.defPosition("c4", 122, 362, 59, 59);
    view.defPosition("d4", 182, 362, 59, 59);
    view.defPosition("e4", 242, 362, 59, 59);
    view.defPosition("f4", 302, 362, 59, 59);
    view.defPosition("g4", 362, 362, 59, 59);
    view.defPosition("h4", 422, 362, 59, 59);
    view.defPosition("i4", 482, 362, 59, 59);
    view.defPosition("a3", 2, 422, 59, 59);
    view.defPosition("b3", 62, 422, 59, 59);
    view.defPosition("c3", 122, 422, 59, 59);
    view.defPosition("d3", 182, 422, 59, 59);
    view.defPosition("e3", 242, 422, 59, 59);
    view.defPosition("f3", 302, 422, 59, 59);
    view.defPosition("g3", 362, 422, 59, 59);
    view.defPosition("h3", 422, 422, 59, 59);
    view.defPosition("i3", 482, 422, 59, 59);
    view.defPosition("a2", 2, 482, 59, 59);
    view.defPosition("b2", 62, 482, 59, 59);
    view.defPosition("c2", 122, 482, 59, 59);
    view.defPosition("d2", 182, 482, 59, 59);
    view.defPosition("e2", 242, 482, 59, 59);
    view.defPosition("f2", 302, 482, 59, 59);
    view.defPosition("g2", 362, 482, 59, 59);
    view.defPosition("h2", 422, 482, 59, 59);
    view.defPosition("i2", 482, 482, 59, 59);
    view.defPosition("a1", 2, 542, 59, 59);
    view.defPosition("b1", 62, 542, 59, 59);
    view.defPosition("c1", 122, 542, 59, 59);
    view.defPosition("d1", 182, 542, 59, 59);
    view.defPosition("e1", 242, 542, 59, 59);
    view.defPosition("f1", 302, 542, 59, 59);
    view.defPosition("g1", 362, 542, 59, 59);
    view.defPosition("h1", 422, 542, 59, 59);
    view.defPosition("i1", 482, 542, 59, 59);
}
