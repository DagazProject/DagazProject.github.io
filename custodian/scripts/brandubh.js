Dagaz.Controller.persistense = "setup";

Dagaz.Model.WIDTH  = 7;
Dagaz.Model.HEIGHT = 7;

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
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("advisor-wait", "25");
    design.checkVersion("tafl-extension", "goals");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("n");

    design.addPlayer("Black", [1, 0, 3, 2]);
    design.addPlayer("White", [0, 1, 2, 3]);

    design.addPosition("a7", [0, 1, 7, 0]);
    design.addPosition("b7", [-1, 1, 7, 0]);
    design.addPosition("c7", [-1, 1, 7, 0]);
    design.addPosition("d7", [-1, 1, 7, 0]);
    design.addPosition("e7", [-1, 1, 7, 0]);
    design.addPosition("f7", [-1, 1, 7, 0]);
    design.addPosition("g7", [-1, 0, 7, 0]);
    design.addPosition("a6", [0, 1, 7, -7]);
    design.addPosition("b6", [-1, 1, 7, -7]);
    design.addPosition("c6", [-1, 1, 7, -7]);
    design.addPosition("d6", [-1, 1, 7, -7]);
    design.addPosition("e6", [-1, 1, 7, -7]);
    design.addPosition("f6", [-1, 1, 7, -7]);
    design.addPosition("g6", [-1, 0, 7, -7]);
    design.addPosition("a5", [0, 1, 7, -7]);
    design.addPosition("b5", [-1, 1, 7, -7]);
    design.addPosition("c5", [-1, 1, 7, -7]);
    design.addPosition("d5", [-1, 1, 7, -7]);
    design.addPosition("e5", [-1, 1, 7, -7]);
    design.addPosition("f5", [-1, 1, 7, -7]);
    design.addPosition("g5", [-1, 0, 7, -7]);
    design.addPosition("a4", [0, 1, 7, -7]);
    design.addPosition("b4", [-1, 1, 7, -7]);
    design.addPosition("c4", [-1, 1, 7, -7]);
    design.addPosition("d4", [-1, 1, 7, -7]);
    design.addPosition("e4", [-1, 1, 7, -7]);
    design.addPosition("f4", [-1, 1, 7, -7]);
    design.addPosition("g4", [-1, 0, 7, -7]);
    design.addPosition("a3", [0, 1, 7, -7]);
    design.addPosition("b3", [-1, 1, 7, -7]);
    design.addPosition("c3", [-1, 1, 7, -7]);
    design.addPosition("d3", [-1, 1, 7, -7]);
    design.addPosition("e3", [-1, 1, 7, -7]);
    design.addPosition("f3", [-1, 1, 7, -7]);
    design.addPosition("g3", [-1, 0, 7, -7]);
    design.addPosition("a2", [0, 1, 7, -7]);
    design.addPosition("b2", [-1, 1, 7, -7]);
    design.addPosition("c2", [-1, 1, 7, -7]);
    design.addPosition("d2", [-1, 1, 7, -7]);
    design.addPosition("e2", [-1, 1, 7, -7]);
    design.addPosition("f2", [-1, 1, 7, -7]);
    design.addPosition("g2", [-1, 0, 7, -7]);
    design.addPosition("a1", [0, 1, 0, -7]);
    design.addPosition("b1", [-1, 1, 0, -7]);
    design.addPosition("c1", [-1, 1, 0, -7]);
    design.addPosition("d1", [-1, 1, 0, -7]);
    design.addPosition("e1", [-1, 1, 0, -7]);
    design.addPosition("f1", [-1, 1, 0, -7]);
    design.addPosition("g1", [-1, 0, 0, -7]);

    design.addZone("throne", 2, [24]);
    design.addZone("throne", 1, [24]);
    design.addZone("goal", 2, [42, 0, 48, 6]);
    design.addZone("goal", 1, [42, 0, 48, 6]);
    design.addZone("enemies", 2, [21, 27, 45, 3, 14, 15, 44, 37, 11, 4, 33, 34]);
    design.addZone("enemies", 1, [21, 27, 45, 3, 14, 15, 44, 37, 11, 4, 33, 34]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.IN_ZONE,	0);	// throne
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.IN_ZONE,	1);	// goal
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.IN_ZONE,	0);	// throne
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end


    design.addPiece("Man", 0);
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 0, [1], 0);

    design.addPiece("King", 1);
    design.addMove(1, 1, [3], 0);
    design.addMove(1, 1, [2], 0);
    design.addMove(1, 1, [0], 0);
    design.addMove(1, 1, [1], 0);

    design.setup("Black", "Man", 21);
    design.setup("Black", "Man", 27);
    design.setup("Black", "Man", 45);
    design.setup("Black", "Man", 3);
    design.setup("Black", "Man", 14);
    design.setup("Black", "Man", 15);
    design.setup("Black", "Man", 44);
    design.setup("Black", "Man", 37);
    design.setup("Black", "Man", 11);
    design.setup("Black", "Man", 4);
    design.setup("Black", "Man", 33);
    design.setup("Black", "Man", 34);
    design.setup("White", "King", 24);
    design.setup("White", "Man", 23);
    design.setup("White", "Man", 25);
    design.setup("White", "Man", 31);
    design.setup("White", "Man", 17);
    design.setup("White", "Man", 38);
    design.setup("White", "Man", 10);

    design.goal(0, "White", "King", [42, 0, 48, 6]);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteMan", "White Man");
    view.defPiece("BlackMan", "Black Man");
    view.defPiece("WhiteKing", "White King");
 
    view.defPosition("a7", 21, 23, 69, 69);
    view.defPosition("b7", 90, 23, 69, 69);
    view.defPosition("c7", 159, 23, 69, 69);
    view.defPosition("d7", 228, 23, 69, 69);
    view.defPosition("e7", 297, 23, 69, 69);
    view.defPosition("f7", 366, 23, 69, 69);
    view.defPosition("g7", 435, 23, 69, 69);
    view.defPosition("a6", 21, 92, 69, 69);
    view.defPosition("b6", 90, 92, 69, 69);
    view.defPosition("c6", 159, 92, 69, 69);
    view.defPosition("d6", 228, 92, 69, 69);
    view.defPosition("e6", 297, 92, 69, 69);
    view.defPosition("f6", 366, 92, 69, 69);
    view.defPosition("g6", 435, 92, 69, 69);
    view.defPosition("a5", 21, 161, 69, 69);
    view.defPosition("b5", 90, 161, 69, 69);
    view.defPosition("c5", 159, 161, 69, 69);
    view.defPosition("d5", 228, 161, 69, 69);
    view.defPosition("e5", 297, 161, 69, 69);
    view.defPosition("f5", 366, 161, 69, 69);
    view.defPosition("g5", 435, 161, 69, 69);
    view.defPosition("a4", 21, 230, 69, 69);
    view.defPosition("b4", 90, 230, 69, 69);
    view.defPosition("c4", 159, 230, 69, 69);
    view.defPosition("d4", 228, 230, 69, 69);
    view.defPosition("e4", 297, 230, 69, 69);
    view.defPosition("f4", 366, 230, 69, 69);
    view.defPosition("g4", 435, 230, 69, 69);
    view.defPosition("a3", 21, 299, 69, 69);
    view.defPosition("b3", 90, 299, 69, 69);
    view.defPosition("c3", 159, 299, 69, 69);
    view.defPosition("d3", 228, 299, 69, 69);
    view.defPosition("e3", 297, 299, 69, 69);
    view.defPosition("f3", 366, 299, 69, 69);
    view.defPosition("g3", 435, 299, 69, 69);
    view.defPosition("a2", 21, 368, 69, 69);
    view.defPosition("b2", 90, 368, 69, 69);
    view.defPosition("c2", 159, 368, 69, 69);
    view.defPosition("d2", 228, 368, 69, 69);
    view.defPosition("e2", 297, 368, 69, 69);
    view.defPosition("f2", 366, 368, 69, 69);
    view.defPosition("g2", 435, 368, 69, 69);
    view.defPosition("a1", 21, 437, 69, 69);
    view.defPosition("b1", 90, 437, 69, 69);
    view.defPosition("c1", 159, 437, 69, 69);
    view.defPosition("d1", 228, 437, 69, 69);
    view.defPosition("e1", 297, 437, 69, 69);
    view.defPosition("f1", 366, 437, 69, 69);
    view.defPosition("g1", 435, 437, 69, 69);
}
