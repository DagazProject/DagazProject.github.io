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
    design.checkVersion("animate-drops", "false");
    design.checkVersion("smart-moves", "false");

    design.addDirection("s");
    design.addDirection("e");
    design.addDirection("w");
    design.addDirection("n");
    design.addDirection("u");
    design.addDirection("d");

    design.addPlayer("Blue", [3, 2, 1, 0, 5, 4]);
    design.addPlayer("Red", [0, 1, 2, 3, 4, 5]);

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

    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addPiece("Stone", 0);
    design.addDrop(0, 0, [], 0);
    design.addMove(0, 1, [3], 0);
    design.addMove(0, 1, [0], 0);
    design.addMove(0, 1, [2], 0);
    design.addMove(0, 1, [1], 0);
    design.addMove(0, 1, [4], 0);
    design.addMove(0, 1, [5], 0);

    design.reserve("Blue", "Stone", 3);
    design.reserve("Red", "Stone", 3);
}

Dagaz.View.configure = function(view) {
    view.defPiece(0, 1, 0x000050); // Blue
    view.defPiece(0, 2, 0x500000); // Red

    view.setCamera(0, 0, 0, 91, 228, 148);
 
    view.defControl("UndoControl", "Undo Move", false, Dagaz.Controller.undo);
    view.defControl("NewControl", "New Game", true, Dagaz.Controller.newGame);
    view.defControl(Dagaz.AI.ON ? "AiOnControl" : "AiOffControl", Dagaz.AI.ON ? "AI" : "No AI", true, Dagaz.Controller.go, Dagaz.AI.ON ? 'diamond-atari-go-board.htm' : 'diamond-atari-go.htm');
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
