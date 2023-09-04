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
    design.checkVersion("smart-moves", "true");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("musketeers-extension", "true");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("n");

    design.addPlayer("Red", [1, 0, 3, 2]);
    design.addPlayer("White", [0, 1, 2, 3]);

    design.addTurn(2);
    design.addTurn(1);

    design.addPosition("a5", [0, 1, 5, 0]);
    design.addPosition("b5", [-1, 1, 5, 0]);
    design.addPosition("c5", [-1, 1, 5, 0]);
    design.addPosition("d5", [-1, 1, 5, 0]);
    design.addPosition("e5", [-1, 0, 5, 0]);
    design.addPosition("a4", [0, 1, 5, -5]);
    design.addPosition("b4", [-1, 1, 5, -5]);
    design.addPosition("c4", [-1, 1, 5, -5]);
    design.addPosition("d4", [-1, 1, 5, -5]);
    design.addPosition("e4", [-1, 0, 5, -5]);
    design.addPosition("a3", [0, 1, 5, -5]);
    design.addPosition("b3", [-1, 1, 5, -5]);
    design.addPosition("c3", [-1, 1, 5, -5]);
    design.addPosition("d3", [-1, 1, 5, -5]);
    design.addPosition("e3", [-1, 0, 5, -5]);
    design.addPosition("a2", [0, 1, 5, -5]);
    design.addPosition("b2", [-1, 1, 5, -5]);
    design.addPosition("c2", [-1, 1, 5, -5]);
    design.addPosition("d2", [-1, 1, 5, -5]);
    design.addPosition("e2", [-1, 0, 5, -5]);
    design.addPosition("a1", [0, 1, 0, -5]);
    design.addPosition("b1", [-1, 1, 0, -5]);
    design.addPosition("c1", [-1, 1, 0, -5]);
    design.addPosition("d1", [-1, 1, 0, -5]);
    design.addPosition("e1", [-1, 0, 0, -5]);


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
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end


    design.addPiece("Soldier", 0);
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [1], 0);
    design.addMove(0, 0, [0], 0);

    design.addPiece("Musketeer", 1);
    design.addMove(1, 1, [3], 0);
    design.addMove(1, 1, [2], 0);
    design.addMove(1, 1, [1], 0);
    design.addMove(1, 1, [0], 0);

    design.setup("White", "Musketeer", 20);
    design.setup("White", "Musketeer", 12);
    design.setup("White", "Musketeer", 4);
    design.setup("Red", "Soldier", 15);
    design.setup("Red", "Soldier", 10);
    design.setup("Red", "Soldier", 5);
    design.setup("Red", "Soldier", 0);
    design.setup("Red", "Soldier", 21);
    design.setup("Red", "Soldier", 16);
    design.setup("Red", "Soldier", 11);
    design.setup("Red", "Soldier", 6);
    design.setup("Red", "Soldier", 1);
    design.setup("Red", "Soldier", 22);
    design.setup("Red", "Soldier", 17);
    design.setup("Red", "Soldier", 7);
    design.setup("Red", "Soldier", 2);
    design.setup("Red", "Soldier", 23);
    design.setup("Red", "Soldier", 18);
    design.setup("Red", "Soldier", 13);
    design.setup("Red", "Soldier", 8);
    design.setup("Red", "Soldier", 3);
    design.setup("Red", "Soldier", 24);
    design.setup("Red", "Soldier", 19);
    design.setup("Red", "Soldier", 14);
    design.setup("Red", "Soldier", 9);

}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("RedSoldier", "Red Soldier");
    view.defPiece("WhiteMusketeer", "White Musketeer");
 
    view.defPosition("a5", 2, 2, 90, 90);
    view.defPosition("b5", 92, 2, 90, 90);
    view.defPosition("c5", 182, 2, 90, 90);
    view.defPosition("d5", 272, 2, 90, 90);
    view.defPosition("e5", 362, 2, 90, 90);
    view.defPosition("a4", 2, 92, 90, 90);
    view.defPosition("b4", 92, 92, 90, 90);
    view.defPosition("c4", 182, 92, 90, 90);
    view.defPosition("d4", 272, 92, 90, 90);
    view.defPosition("e4", 362, 92, 90, 90);
    view.defPosition("a3", 2, 182, 90, 90);
    view.defPosition("b3", 92, 182, 90, 90);
    view.defPosition("c3", 182, 182, 90, 90);
    view.defPosition("d3", 272, 182, 90, 90);
    view.defPosition("e3", 362, 182, 90, 90);
    view.defPosition("a2", 2, 272, 90, 90);
    view.defPosition("b2", 92, 272, 90, 90);
    view.defPosition("c2", 182, 272, 90, 90);
    view.defPosition("d2", 272, 272, 90, 90);
    view.defPosition("e2", 362, 272, 90, 90);
    view.defPosition("a1", 2, 362, 90, 90);
    view.defPosition("b1", 92, 362, 90, 90);
    view.defPosition("c1", 182, 362, 90, 90);
    view.defPosition("d1", 272, 362, 90, 90);
    view.defPosition("e1", 362, 362, 90, 90);
}
