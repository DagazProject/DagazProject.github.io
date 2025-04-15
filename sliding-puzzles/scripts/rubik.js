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

    design.addDirection("s");
    design.addDirection("e");
    design.addDirection("w");
    design.addDirection("n");
    design.addDirection("u");
    design.addDirection("d");

    design.addPlayer("You", [3, 2, 1, 0, 5, 4]);

    design.addPosition("a3", [3, 1, 0, 0, 9, 0]);
    design.addPosition("b3", [3, 1, -1, 0, 9, 0]);
    design.addPosition("c3", [3, 0, -1, 0, 9, 0]);
    design.addPosition("a2", [3, 1, 0, -3, 9, 0]);
    design.addPosition("b2", [3, 1, -1, -3, 9, 0]);
    design.addPosition("c2", [3, 0, -1, -3, 9, 0]);
    design.addPosition("a1", [0, 1, 0, -3, 9, 0]);
    design.addPosition("b1", [0, 1, -1, -3, 9, 0]);
    design.addPosition("c1", [0, 0, -1, -3, 9, 0]);
    design.addPosition("d3", [3, 1, 0, 0, 9, -9]);
    design.addPosition("e3", [3, 1, -1, 0, 9, -9]);
    design.addPosition("f3", [3, 0, -1, 0, 9, -9]);
    design.addPosition("d2", [3, 1, 0, -3, 9, -9]);
    design.addPosition("e2", [3, 1, -1, -3, 9, -9]);
    design.addPosition("f2", [3, 0, -1, -3, 9, -9]);
    design.addPosition("d1", [0, 1, 0, -3, 9, -9]);
    design.addPosition("e1", [0, 1, -1, -3, 9, -9]);
    design.addPosition("f1", [0, 0, -1, -3, 9, -9]);
    design.addPosition("g3", [3, 1, 0, 0, 0, -9]);
    design.addPosition("h3", [3, 1, -1, 0, 0, -9]);
    design.addPosition("i3", [3, 0, -1, 0, 0, -9]);
    design.addPosition("g2", [3, 1, 0, -3, 0, -9]);
    design.addPosition("h2", [3, 1, -1, -3, 0, -9]);
    design.addPosition("i2", [3, 0, -1, -3, 0, -9]);
    design.addPosition("g1", [0, 1, 0, -3, 0, -9]);
    design.addPosition("h1", [0, 1, -1, -3, 0, -9]);
    design.addPosition("i1", [0, 0, -1, -3, 0, -9]);

    design.addPiece("WRBYOG", 0);
    design.addPiece("WBOYGR", 1);
    design.addPiece("WGRYBO", 2);
    design.addPiece("WOGYRB", 3);
    design.addPiece("RWGOYB", 4);
    design.addPiece("RBWOGY", 5);
    design.addPiece("RGYOBW", 6);
    design.addPiece("RYBOWG", 7);
    design.addPiece("BWRGYO", 8);
    design.addPiece("BRYGOW", 9);
    design.addPiece("BOWGRY", 10);
    design.addPiece("BYOGWR", 11);
    design.addPiece("GWOBYR", 12);
    design.addPiece("GRWBOY", 13);
    design.addPiece("GOYBRW", 14);
    design.addPiece("GYRBWO", 15);
    design.addPiece("OWBRYG", 16);
    design.addPiece("OBYRGW", 17);
    design.addPiece("OGWRBY", 18);
    design.addPiece("OYGRWB", 19);
    design.addPiece("YRGWOB", 20);
    design.addPiece("YBRWGO", 21);
    design.addPiece("YGOWBR", 22);
    design.addPiece("YOBWRG", 23);

    design.setup("You", "WRBYOG", 6);
    design.setup("You", "WRBYOG", 3);
    design.setup("You", "WRBYOG", 0);
    design.setup("You", "WRBYOG", 7);
    design.setup("You", "WRBYOG", 4);
    design.setup("You", "WRBYOG", 1);
    design.setup("You", "WRBYOG", 8);
    design.setup("You", "WRBYOG", 5);
    design.setup("You", "WRBYOG", 2);
    design.setup("You", "WRBYOG", 15);
    design.setup("You", "WRBYOG", 12);
    design.setup("You", "WRBYOG", 9);
    design.setup("You", "WRBYOG", 16);
    design.setup("You", "WRBYOG", 13);
    design.setup("You", "WRBYOG", 10);
    design.setup("You", "WRBYOG", 17);
    design.setup("You", "WRBYOG", 14);
    design.setup("You", "WRBYOG", 11);
    design.setup("You", "WRBYOG", 24);
    design.setup("You", "WRBYOG", 21);
    design.setup("You", "WRBYOG", 18);
    design.setup("You", "WRBYOG", 25);
    design.setup("You", "WRBYOG", 22);
    design.setup("You", "WRBYOG", 19);
    design.setup("You", "WRBYOG", 26);
    design.setup("You", "WRBYOG", 23);
    design.setup("You", "WRBYOG", 20);
}

Dagaz.View.configure = function(view) {

    // W 0x707070
    // R 0x880000
    // B 0x0000FF
    // Y 0xF2E825
    // O 0xFDA831
    // G 0x37B476

    view.defPieceCube(0,  1, [0x707070, 0x880000, 0x0000FF, 0xF2E825, 0xFDA831, 0x37B476]);
    view.defPieceCube(1,  1, [0x707070, 0x0000FF, 0xFDA831, 0xF2E825, 0x37B476, 0x880000]);
    view.defPieceCube(2,  1, [0x707070, 0x37B476, 0x880000, 0xF2E825, 0x0000FF, 0xFDA831]);
    view.defPieceCube(3,  1, [0x707070, 0xFDA831, 0x37B476, 0xF2E825, 0x880000, 0x0000FF]);
    view.defPieceCube(4,  1, [0x880000, 0x707070, 0x37B476, 0xFDA831, 0xF2E825, 0x0000FF]);
    view.defPieceCube(5,  1, [0x880000, 0x0000FF, 0x707070, 0xFDA831, 0x37B476, 0xF2E825]);
    view.defPieceCube(6,  1, [0x880000, 0x37B476, 0xF2E825, 0xFDA831, 0x0000FF, 0x707070]);
    view.defPieceCube(7,  1, [0x880000, 0xF2E825, 0x0000FF, 0xFDA831, 0x707070, 0x37B476]);
    view.defPieceCube(8,  1, [0x0000FF, 0x707070, 0x880000, 0x37B476, 0xF2E825, 0xFDA831]);
    view.defPieceCube(9,  1, [0x0000FF, 0x880000, 0xF2E825, 0x37B476, 0xFDA831, 0x707070]);
    view.defPieceCube(10, 1, [0x0000FF, 0xFDA831, 0x707070, 0x37B476, 0x880000, 0xF2E825]);
    view.defPieceCube(11, 1, [0x0000FF, 0xF2E825, 0xFDA831, 0x37B476, 0x707070, 0x880000]);
    view.defPieceCube(12, 1, [0x37B476, 0x707070, 0xFDA831, 0x0000FF, 0xF2E825, 0x880000]);
    view.defPieceCube(13, 1, [0x37B476, 0x880000, 0x707070, 0x0000FF, 0xFDA831, 0xF2E825]);
    view.defPieceCube(14, 1, [0x37B476, 0xFDA831, 0xF2E825, 0x0000FF, 0x880000, 0x707070]);
    view.defPieceCube(15, 1, [0x37B476, 0xF2E825, 0x880000, 0x0000FF, 0x707070, 0xFDA831]);
    view.defPieceCube(16, 1, [0xFDA831, 0x707070, 0x0000FF, 0x880000, 0xF2E825, 0x37B476]);
    view.defPieceCube(17, 1, [0xFDA831, 0x0000FF, 0xF2E825, 0x880000, 0x37B476, 0x707070]);
    view.defPieceCube(18, 1, [0xFDA831, 0x37B476, 0x707070, 0x880000, 0x0000FF, 0xF2E825]);
    view.defPieceCube(19, 1, [0xFDA831, 0xF2E825, 0x37B476, 0x880000, 0x707070, 0x0000FF]);
    view.defPieceCube(20, 1, [0xF2E825, 0x880000, 0x37B476, 0x707070, 0xFDA831, 0x0000FF]);
    view.defPieceCube(21, 1, [0xF2E825, 0x0000FF, 0x880000, 0x707070, 0x37B476, 0xFDA831]);
    view.defPieceCube(22, 1, [0xF2E825, 0x37B476, 0xFDA831, 0x707070, 0x0000FF, 0x880000]);
    view.defPieceCube(23, 1, [0xF2E825, 0xFDA831, 0x0000FF, 0x707070, 0x880000, 0x37B476]);

    view.setCamera(0, 0, 0, 91, 228, 148);
 
    view.defControl("UndoControl", "Undo Move", false, Dagaz.Controller.undo);
    view.defControl("NewControl", "New Game", true, Dagaz.Controller.newGame);
    view.defControl(Dagaz.Controller.soundOff ? ["SoundOffControl", "SoundOnControl"] : ["SoundOnControl", "SoundOffControl"], "Sound", true, Dagaz.Controller.switchSound);
    view.defControl("RedoControl", "Redo Move", false, Dagaz.Controller.redo);

    view.defPosition("a3", -84, -84, 84, 84, -84);
    view.defPosition("b3", 0, -84, 84, 84, -84);
    view.defPosition("c3", 84, -84, 84, 84, -84);
    view.defPosition("a2", -84, 0, 84, 84, -84);
    view.defPosition("b2", 0, 0, 84, 84, -84);
    view.defPosition("c2", 84, 0, 84, 84, -84);
    view.defPosition("a1", -84, 84, 84, 84, -84);
    view.defPosition("b1", 0, 84, 84, 84, -84);
    view.defPosition("c1", 84, 84, 84, 84, -84);

    view.defPosition("d3", -84, -84, 84, 84, 0);
    view.defPosition("e3", 0, -84, 84, 84, 0);
    view.defPosition("f3", 84, -84, 84, 84, 0);
    view.defPosition("d2", -84, 0, 84, 84, 0);
    view.defPosition("e2", 0, 0, 84, 84, 0);
    view.defPosition("f2", 84, 0, 84, 84, 0);
    view.defPosition("d1", -84, 84, 84, 84, 0);
    view.defPosition("e1", 0, 84, 84, 84, 0);
    view.defPosition("f1", 84, 84, 84, 84, 0);

    view.defPosition("g3", -84, -84, 84, 84, 84);
    view.defPosition("h3", 0, -84, 84, 84, 84);
    view.defPosition("i3", 84, -84, 84, 84, 84);
    view.defPosition("g2", -84, 0, 84, 84, 84);
    view.defPosition("h2", 0, 0, 84, 84, 84);
    view.defPosition("i2", 84, 0, 84, 84, 84);
    view.defPosition("g1", -84, 84, 84, 84, 84);
    view.defPosition("h1", 0, 84, 84, 84, 84);
    view.defPosition("i1", 84, 84, 84, 84, 84);
}
