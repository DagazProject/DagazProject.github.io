Dagaz.Controller.persistense = "setup";

Dagaz.Model.passTurn = 3;

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
    Dagaz.Controller.addSound(10, "../sounds/wind.wav");
}

Dagaz.Model.BuildDesign = function(design) {
    design.checkVersion("z2j", "2");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("shared-pieces", "true");

    design.addDirection("s"); // 0
    design.addDirection("e"); // 1
    design.addDirection("w"); // 2
    design.addDirection("n"); // 3

    design.addPlayer("Blue", [3, 2, 1, 0]);
    design.addPlayer("Pink", [0, 1, 2, 3]);
    design.addPlayer("Black", [0, 1, 2, 3]);

    design.addTurn(1, [1, 2, 3, 4, 5, 6, 7, 8]); // 0
    design.addTurn(1, [0]);                      // 1
    design.addTurn(2, [1, 2, 3, 4, 5, 6, 7, 8]); // 2
    design.addTurn(2, [0]);                      // 3

    design.addPosition("a4", [4, 1, 0, 0]);
    design.addPosition("b4", [4, 1, -1, 0]);
    design.addPosition("c4", [4, 1, -1, 0]);
    design.addPosition("d4", [4, 0, -1, 0]);
    design.addPosition("a3", [4, 1, 0, -4]);
    design.addPosition("b3", [4, 1, -1, -4]);
    design.addPosition("c3", [4, 1, -1, -4]);
    design.addPosition("d3", [4, 0, -1, -4]);
    design.addPosition("a2", [4, 1, 0, -4]);
    design.addPosition("b2", [4, 1, -1, -4]);
    design.addPosition("c2", [4, 1, -1, -4]);
    design.addPosition("d2", [4, 0, -1, -4]);
    design.addPosition("a1", [0, 1, 0, -4]);
    design.addPosition("b1", [0, 1, -1, -4]);
    design.addPosition("c1", [0, 1, -1, -4]);
    design.addPosition("d1", [0, 0, -1, -4]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addPiece("Stone", 0);

    design.addPiece("Tile", 1);

    design.setValue(0, 5);
    design.setValue(1, 1);

    design.setup("Blue", "Tile", 13, undefined, 2);
    design.setup("Blue", "Tile", 9,  undefined, 3);
    design.setup("Blue", "Tile", 5,  undefined, 4);
    design.setup("Blue", "Tile", 14, undefined, 1);
    design.setup("Pink", "Tile", 1,  undefined, 1);
    design.setup("Pink", "Tile", 10, undefined, 4);
    design.setup("Pink", "Tile", 6,  undefined, 3);
    design.setup("Pink", "Tile", 2,  undefined, 2);

    design.setup("Black", "Stone", 0);
    design.setup("Black", "Stone", 15);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("BlackStone", "Black Stone");
    view.defPiece("BlueTile", "Blue Tile");
    view.defPiece("PinkTile", "Pink Tile");
    view.defPiece("B0001", "B0001");
    view.defPiece("B0010", "B0010");
    view.defPiece("B0011", "B0011");
    view.defPiece("B0100", "B0100");
    view.defPiece("B0101", "B0101");
    view.defPiece("B0110", "B0110");
    view.defPiece("B1000", "B1000");
    view.defPiece("B1001", "B1001");
    view.defPiece("B1010", "B1010");
    view.defPiece("B1100", "B1100");
    view.defPiece("R0001", "R0001");
    view.defPiece("R0010", "R0010");
    view.defPiece("R0011", "R0011");
    view.defPiece("R0100", "R0100");
    view.defPiece("R0101", "R0101");
    view.defPiece("R0110", "R0110");
    view.defPiece("R1000", "R1000");
    view.defPiece("R1001", "R1001");
    view.defPiece("R1010", "R1010");
    view.defPiece("R1100", "R1100");

    view.defPosition("a4", 0, 0, 100, 100);
    view.defPosition("b4", 100, 0, 100, 100);
    view.defPosition("c4", 200, 0, 100, 100);
    view.defPosition("d4", 300, 0, 100, 100);
    view.defPosition("a3", 0, 100, 100, 100);
    view.defPosition("b3", 100, 100, 100, 100);
    view.defPosition("c3", 200, 100, 100, 100);
    view.defPosition("d3", 300, 100, 100, 100);
    view.defPosition("a2", 0, 200, 100, 100);
    view.defPosition("b2", 100, 200, 100, 100);
    view.defPosition("c2", 200, 200, 100, 100);
    view.defPosition("d2", 300, 200, 100, 100);
    view.defPosition("a1", 0, 300, 100, 100);
    view.defPosition("b1", 100, 300, 100, 100);
    view.defPosition("c1", 200, 300, 100, 100);
    view.defPosition("d1", 300, 300, 100, 100);
}
