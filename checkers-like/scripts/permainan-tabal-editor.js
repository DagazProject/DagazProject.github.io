Dagaz.Controller.noDropIndex = true;

Dagaz.Model.WIDTH  = 5;
Dagaz.Model.HEIGHT = 9;

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

    design.addDirection("n");
    design.addDirection("e");
    design.addDirection("w");
    design.addDirection("s");
    design.addDirection("nw");
    design.addDirection("ne");
    design.addDirection("sw");
    design.addDirection("se");

    design.addPlayer("You", [3, 2, 1, 0, 7, 6, 5, 4]);

    design.addPosition("a9", [0, 2, 0, 0, 0, 0, 0, 6]);
    design.addPosition("b9", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c9", [0, 2, -2, 5, 0, 0, 0, 0]);
    design.addPosition("d9", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e9", [0, 0, -2, 0, 0, 0, 4, 0]);
    design.addPosition("a8", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b8", [0, 1, 0, 0, -6, 0, 0, 6]);
    design.addPosition("c8", [-5, 1, -1, 5, 0, 0, 0, 0]);
    design.addPosition("d8", [0, 0, -1, 0, 0, -4, 4, 0]);
    design.addPosition("e8", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a7", [0, 1, 0, 5, 0, 0, 0, 6]);
    design.addPosition("b7", [0, 1, -1, 5, 0, 0, 0, 0]);
    design.addPosition("c7", [-5, 1, -1, 5, -6, -4, 4, 6]);
    design.addPosition("d7", [0, 1, -1, 5, 0, 0, 0, 0]);
    design.addPosition("e7", [0, 0, -1, 5, 0, 0, 4, 0]);
    design.addPosition("a6", [-5, 1, 0, 5, 0, 0, 0, 0]);
    design.addPosition("b6", [-5, 1, -1, 5, -6, -4, 4, 6]);
    design.addPosition("c6", [-5, 1, -1, 5, 0, 0, 0, 0]);
    design.addPosition("d6", [-5, 1, -1, 5, -6, -4, 4, 6]);
    design.addPosition("e6", [-5, 0, -1, 5, 0, 0, 0, 0]);
    design.addPosition("a5", [-5, 1, 0, 5, 0, -4, 0, 6]);
    design.addPosition("b5", [-5, 1, -1, 5, 0, 0, 0, 0]);
    design.addPosition("c5", [-5, 1, -1, 5, -6, -4, 4, 6]);
    design.addPosition("d5", [-5, 1, -1, 5, 0, 0, 0, 0]);
    design.addPosition("e5", [-5, 0, -1, 5, -6, 0, 4, 0]);
    design.addPosition("a4", [-5, 1, 0, 5, 0, 0, 0, 0]);
    design.addPosition("b4", [-5, 1, -1, 5, -6, -4, 4, 6]);
    design.addPosition("c4", [-5, 1, -1, 5, 0, 0, 0, 0]);
    design.addPosition("d4", [-5, 1, -1, 5, -6, -4, 4, 6]);
    design.addPosition("e4", [-5, 0, -1, 5, 0, 0, 0, 0]);
    design.addPosition("a3", [-5, 1, 0, 0, 0, -4, 0, 0]);
    design.addPosition("b3", [-5, 1, -1, 0, 0, 0, 0, 0]);
    design.addPosition("c3", [-5, 1, -1, 5, -6, -4, 4, 6]);
    design.addPosition("d3", [-5, 1, -1, 0, 0, 0, 0, 0]);
    design.addPosition("e3", [-5, 0, -1, 0, -6, 0, 0, 0]);
    design.addPosition("a2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b2", [0, 1, 0, 0, 0, -4, 4, 0]);
    design.addPosition("c2", [-5, 1, -1, 5, 0, 0, 0, 0]);
    design.addPosition("d2", [0, 0, -1, 0, -6, 0, 0, 6]);
    design.addPosition("e2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a1", [0, 2, 0, 0, 0, -4, 0, 0]);
    design.addPosition("b1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("c1", [-5, 2, -2, 0, 0, 0, 0, 0]);
    design.addPosition("d1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("e1", [0, 0, -2, 0, -6, 0, 0, 0]);

    design.addZone("forbidden", 1, [1, 3, 5, 9, 35, 39, 41, 43]);
    design.addZone("white-promotion", 1, [0, 2, 4]);
    design.addZone("black-promotion", 1, [40, 42, 44]);

    design.addCommand(0, ZRF.IN_ZONE,	0);	// forbidden
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.IN_ZONE,	0);	// forbidden
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.IN_ZONE,	1);	// white-promotion
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.IN_ZONE,	0);	// forbidden
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.IN_ZONE,	2);	// black-promotion
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.FUNCTION,	26);	// capture
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addPiece("WhiteMan", 0);
    design.addDrop(0, 1, [], 0);
    design.addMove(0, 3, [], 0);

    design.addPiece("BlackMan", 1);
    design.addDrop(1, 2, [], 0);
    design.addMove(1, 3, [], 0);

    design.addPiece("WhiteKing", 2);
    design.addDrop(2, 0, [], 0);
    design.addMove(2, 3, [], 0);

    design.addPiece("BlackKing", 3);
    design.addDrop(3, 0, [], 0);
    design.addMove(3, 3, [], 0);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteMan", "You WhiteMan");
    view.defPiece("BlackMan", "You BlackMan");
    view.defPiece("WhiteKing", "You WhiteKing");
    view.defPiece("BlackKing", "You BlackKing");
 
    view.defPosition("a9", 25, 25, 59, 59);
    view.defPosition("b9", 159, 25, 59, 59);
    view.defPosition("c9", 293, 25, 59, 59);
    view.defPosition("d9", 427, 25, 59, 59);
    view.defPosition("e9", 561, 25, 59, 59);
    view.defPosition("a8", 25, 159, 59, 59);
    view.defPosition("b8", 159, 159, 59, 59);
    view.defPosition("c8", 293, 159, 59, 59);
    view.defPosition("d8", 427, 159, 59, 59);
    view.defPosition("e8", 561, 159, 59, 59);
    view.defPosition("a7", 25, 293, 59, 59);
    view.defPosition("b7", 159, 293, 59, 59);
    view.defPosition("c7", 293, 293, 59, 59);
    view.defPosition("d7", 427, 293, 59, 59);
    view.defPosition("e7", 561, 293, 59, 59);
    view.defPosition("a6", 25, 427, 59, 59);
    view.defPosition("b6", 159, 427, 59, 59);
    view.defPosition("c6", 293, 427, 59, 59);
    view.defPosition("d6", 427, 427, 59, 59);
    view.defPosition("e6", 561, 427, 59, 59);
    view.defPosition("a5", 25, 561, 59, 59);
    view.defPosition("b5", 159, 561, 59, 59);
    view.defPosition("c5", 293, 561, 59, 59);
    view.defPosition("d5", 427, 561, 59, 59);
    view.defPosition("e5", 561, 561, 59, 59);
    view.defPosition("a4", 25, 695, 59, 59);
    view.defPosition("b4", 159, 695, 59, 59);
    view.defPosition("c4", 293, 695, 59, 59);
    view.defPosition("d4", 427, 695, 59, 59);
    view.defPosition("e4", 561, 695, 59, 59);
    view.defPosition("a3", 25, 829, 59, 59);
    view.defPosition("b3", 159, 829, 59, 59);
    view.defPosition("c3", 293, 829, 59, 59);
    view.defPosition("d3", 427, 829, 59, 59);
    view.defPosition("e3", 561, 829, 59, 59);
    view.defPosition("a2", 25, 963, 59, 59);
    view.defPosition("b2", 159, 963, 59, 59);
    view.defPosition("c2", 293, 963, 59, 59);
    view.defPosition("d2", 427, 963, 59, 59);
    view.defPosition("e2", 561, 963, 59, 59);
    view.defPosition("a1", 25, 1097, 59, 59);
    view.defPosition("b1", 159, 1097, 59, 59);
    view.defPosition("c1", 293, 1097, 59, 59);
    view.defPosition("d1", 427, 1097, 59, 59);
    view.defPosition("e1", 561, 1097, 59, 59);
}
