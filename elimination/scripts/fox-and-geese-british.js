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
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "false");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("ne");
    design.addDirection("n");
    design.addDirection("se");
    design.addDirection("sw");
    design.addDirection("nw");

    design.addPlayer("Goose", [1, 0, 4, 6, 2, 7, 3, 5]);
    design.addPlayer("Fox", [0, 1, 2, 3, 4, 5, 6, 7]);

    design.addPosition("a7", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPosition("b7", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPosition("c7", [0, 1, 7, 0, 0, 8, 0, 0]);
    design.addPosition("d7", [-1, 1, 7, 0, 0, 8, 6, 0]);
    design.addPosition("e7", [-1, 0, 7, 0, 0, 0, 6, 0]);
    design.addPosition("f7", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPosition("g7", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPosition("a6", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPosition("b6", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPosition("c6", [0, 1, 7, -6, -7, 8, 6, 0]);
    design.addPosition("d6", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("e6", [-1, 0, 7, 0, -7, 8, 6, -8]);
    design.addPosition("f6", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPosition("g6", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPosition("a5", [0, 1, 7, 0, 0, 8, 0, 0]);
    design.addPosition("b5", [-1, 1, 7, -6, 0, 8, 6, 0]);
    design.addPosition("c5", [-1, 1, 7, -6, -7, 8, 6, 0]);
    design.addPosition("d5", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("e5", [-1, 1, 7, 0, -7, 8, 6, -8]);
    design.addPosition("f5", [-1, 1, 7, 0, 0, 8, 6, -8]);
    design.addPosition("g5", [-1, 0, 7, 0, 0, 0, 6, 0]);
    design.addPosition("a4", [0, 1, 7, -6, -7, 8, 0, 0]);
    design.addPosition("b4", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("c4", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("d4", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("e4", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("f4", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("g4", [-1, 0, 7, 0, -7, 0, 6, -8]);
    design.addPosition("a3", [0, 1, 0, -6, -7, 0, 0, 0]);
    design.addPosition("b3", [-1, 1, 0, -6, -7, 8, 0, -8]);
    design.addPosition("c3", [-1, 1, 7, -6, -7, 8, 0, -8]);
    design.addPosition("d3", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("e3", [-1, 1, 7, -6, -7, 0, 6, -8]);
    design.addPosition("f3", [-1, 1, 0, -6, -7, 0, 6, -8]);
    design.addPosition("g3", [-1, 0, 0, 0, -7, 0, 0, -8]);
    design.addPosition("a2", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPosition("b2", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPosition("c2", [0, 1, 7, -6, -7, 8, 0, -8]);
    design.addPosition("d2", [-1, 1, 7, -6, -7, 8, 6, -8]);
    design.addPosition("e2", [-1, 0, 7, -6, -7, 0, 6, -8]);
    design.addPosition("f2", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPosition("g2", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPosition("a1", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPosition("b1", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPosition("c1", [0, 1, 0, -6, -7, 0, 0, 0]);
    design.addPosition("d1", [-1, 1, 0, -6, -7, 0, 0, -8]);
    design.addPosition("e1", [-1, 0, 0, 0, -7, 0, 0, -8]);
    design.addPosition("f1", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPosition("g1", [0, 1, 2, 3, 4, 5, 6, 7]);

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
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	26);	// capture
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.MODE,	1);	// jump-type
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addPiece("Soldier", 0);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 0, [1], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 0, [7], 0);
    design.addMove(0, 0, [5], 0);
    design.addMove(0, 0, [6], 0);
    design.addMove(0, 0, [3], 0);

    design.addPiece("Defender", 1);
    design.addMove(1, 0, [4], 0);
    design.addMove(1, 0, [1], 0);
    design.addMove(1, 0, [2], 0);
    design.addMove(1, 0, [0], 0);
    design.addMove(1, 0, [7], 0);
    design.addMove(1, 0, [5], 0);
    design.addMove(1, 0, [6], 0);
    design.addMove(1, 0, [3], 0);
    design.addMove(1, 1, [4, 4], 1);
    design.addMove(1, 1, [1, 1], 1);
    design.addMove(1, 1, [2, 2], 1);
    design.addMove(1, 1, [0, 0], 1);
    design.addMove(1, 1, [7, 7], 1);
    design.addMove(1, 1, [5, 5], 1);
    design.addMove(1, 1, [6, 6], 1);
    design.addMove(1, 1, [3, 3], 1);

    design.setup("Fox", "Defender", 24);
    design.setup("Goose", "Soldier", 28);
    design.setup("Goose", "Soldier", 29);
    design.setup("Goose", "Soldier", 44);
    design.setup("Goose", "Soldier", 37);
    design.setup("Goose", "Soldier", 30);
    design.setup("Goose", "Soldier", 45);
    design.setup("Goose", "Soldier", 38);
    design.setup("Goose", "Soldier", 31);
    design.setup("Goose", "Soldier", 46);
    design.setup("Goose", "Soldier", 39);
    design.setup("Goose", "Soldier", 32);
    design.setup("Goose", "Soldier", 33);
    design.setup("Goose", "Soldier", 34);
    design.setup("Goose", "Soldier", 21);
    design.setup("Goose", "Soldier", 27);
    design.setup("Goose", "Soldier", 22);
    design.setup("Goose", "Soldier", 26);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("SoldiersSoldier", "Goose Soldier");
    view.defPiece("DefendersDefender", "Fox Defender");
 
    view.defPosition("a7", 12, 12, 48, 48);
    view.defPosition("b7", 60, 12, 48, 48);
    view.defPosition("c7", 108, 12, 48, 48);
    view.defPosition("d7", 156, 12, 48, 48);
    view.defPosition("e7", 204, 12, 48, 48);
    view.defPosition("f7", 252, 12, 48, 48);
    view.defPosition("g7", 300, 12, 48, 48);
    view.defPosition("a6", 12, 60, 48, 48);
    view.defPosition("b6", 60, 60, 48, 48);
    view.defPosition("c6", 108, 60, 48, 48);
    view.defPosition("d6", 156, 60, 48, 48);
    view.defPosition("e6", 204, 60, 48, 48);
    view.defPosition("f6", 252, 60, 48, 48);
    view.defPosition("g6", 300, 60, 48, 48);
    view.defPosition("a5", 12, 108, 48, 48);
    view.defPosition("b5", 60, 108, 48, 48);
    view.defPosition("c5", 108, 108, 48, 48);
    view.defPosition("d5", 156, 108, 48, 48);
    view.defPosition("e5", 204, 108, 48, 48);
    view.defPosition("f5", 252, 108, 48, 48);
    view.defPosition("g5", 300, 108, 48, 48);
    view.defPosition("a4", 12, 156, 48, 48);
    view.defPosition("b4", 60, 156, 48, 48);
    view.defPosition("c4", 108, 156, 48, 48);
    view.defPosition("d4", 156, 156, 48, 48);
    view.defPosition("e4", 204, 156, 48, 48);
    view.defPosition("f4", 252, 156, 48, 48);
    view.defPosition("g4", 300, 156, 48, 48);
    view.defPosition("a3", 12, 204, 48, 48);
    view.defPosition("b3", 60, 204, 48, 48);
    view.defPosition("c3", 108, 204, 48, 48);
    view.defPosition("d3", 156, 204, 48, 48);
    view.defPosition("e3", 204, 204, 48, 48);
    view.defPosition("f3", 252, 204, 48, 48);
    view.defPosition("g3", 300, 204, 48, 48);
    view.defPosition("a2", 12, 252, 48, 48);
    view.defPosition("b2", 60, 252, 48, 48);
    view.defPosition("c2", 108, 252, 48, 48);
    view.defPosition("d2", 156, 252, 48, 48);
    view.defPosition("e2", 204, 252, 48, 48);
    view.defPosition("f2", 252, 252, 48, 48);
    view.defPosition("g2", 300, 252, 48, 48);
    view.defPosition("a1", 12, 300, 48, 48);
    view.defPosition("b1", 60, 300, 48, 48);
    view.defPosition("c1", 108, 300, 48, 48);
    view.defPosition("d1", 156, 300, 48, 48);
    view.defPosition("e1", 204, 300, 48, 48);
    view.defPosition("f1", 252, 300, 48, 48);
    view.defPosition("g1", 300, 300, 48, 48);
}
