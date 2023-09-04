Dagaz.View.MARK_R = 15;

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
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-captures", "false");
    design.checkVersion("show-lose", "false");
    design.checkVersion("advisor-wait", "5");

    design.addDirection("s");
    design.addDirection("e");
    design.addDirection("w");
    design.addDirection("n");

    design.addPlayer("White", [3, 2, 1, 0]);
    design.addPlayer("Black", [3, 2, 1, 0]);
    design.addTurn(1);
    design.addTurn(1);
    design.addTurn(1);
    design.addTurn(1);
    design.addTurn(1);
    design.addTurn(1);
    design.addTurn(1);
    design.addTurn(1);
    design.addTurn(1);
    design.addTurn(1);
    design.addTurn(1);
    design.addTurn(1);
    design.addTurn(1);
    design.addTurn(1);
    design.addTurn(1);
    design.addTurn(1);
    design.addTurn(1);
    design.addTurn(1);
    design.addTurn(1);
    design.addTurn(1);
    design.addTurn(1);
    design.repeatMark();
    design.addTurn(1);
    design.addTurn(2);

    design.addPosition("a8", [9, 1, 0, 0]);
    design.addPosition("b8", [9, 1, -1, 0]);
    design.addPosition("c8", [9, 1, -1, 0]);
    design.addPosition("d8", [9, 1, -1, 0]);
    design.addPosition("e8", [9, 1, -1, 0]);
    design.addPosition("f8", [9, 1, -1, 0]);
    design.addPosition("g8", [9, 1, -1, 0]);
    design.addPosition("h8", [9, 1, -1, 0]);
    design.addPosition("i8", [9, 0, -1, 0]);
    design.addPosition("a7", [9, 1, 0, -9]);
    design.addPosition("b7", [9, 1, -1, -9]);
    design.addPosition("c7", [9, 1, -1, -9]);
    design.addPosition("d7", [9, 1, -1, -9]);
    design.addPosition("e7", [9, 1, -1, -9]);
    design.addPosition("f7", [9, 1, -1, -9]);
    design.addPosition("g7", [9, 1, -1, -9]);
    design.addPosition("h7", [9, 1, -1, -9]);
    design.addPosition("i7", [9, 0, -1, -9]);
    design.addPosition("a6", [9, 1, 0, -9]);
    design.addPosition("b6", [9, 1, -1, -9]);
    design.addPosition("c6", [9, 1, -1, -9]);
    design.addPosition("d6", [9, 1, -1, -9]);
    design.addPosition("e6", [9, 1, -1, -9]);
    design.addPosition("f6", [9, 1, -1, -9]);
    design.addPosition("g6", [9, 1, -1, -9]);
    design.addPosition("h6", [9, 1, -1, -9]);
    design.addPosition("i6", [9, 0, -1, -9]);
    design.addPosition("a5", [9, 1, 0, -9]);
    design.addPosition("b5", [9, 1, -1, -9]);
    design.addPosition("c5", [9, 1, -1, -9]);
    design.addPosition("d5", [9, 1, -1, -9]);
    design.addPosition("e5", [9, 1, -1, -9]);
    design.addPosition("f5", [9, 1, -1, -9]);
    design.addPosition("g5", [9, 1, -1, -9]);
    design.addPosition("h5", [9, 1, -1, -9]);
    design.addPosition("i5", [9, 0, -1, -9]);
    design.addPosition("a4", [9, 1, 0, -9]);
    design.addPosition("b4", [9, 1, -1, -9]);
    design.addPosition("c4", [9, 1, -1, -9]);
    design.addPosition("d4", [9, 1, -1, -9]);
    design.addPosition("e4", [9, 1, -1, -9]);
    design.addPosition("f4", [9, 1, -1, -9]);
    design.addPosition("g4", [9, 1, -1, -9]);
    design.addPosition("h4", [9, 1, -1, -9]);
    design.addPosition("i4", [9, 0, -1, -9]);
    design.addPosition("a3", [9, 1, 0, -9]);
    design.addPosition("b3", [9, 1, -1, -9]);
    design.addPosition("c3", [9, 1, -1, -9]);
    design.addPosition("d3", [9, 1, -1, -9]);
    design.addPosition("e3", [9, 1, -1, -9]);
    design.addPosition("f3", [9, 1, -1, -9]);
    design.addPosition("g3", [9, 1, -1, -9]);
    design.addPosition("h3", [9, 1, -1, -9]);
    design.addPosition("i3", [9, 0, -1, -9]);
    design.addPosition("a2", [9, 1, 0, -9]);
    design.addPosition("b2", [9, 1, -1, -9]);
    design.addPosition("c2", [9, 1, -1, -9]);
    design.addPosition("d2", [9, 1, -1, -9]);
    design.addPosition("e2", [9, 1, -1, -9]);
    design.addPosition("f2", [9, 1, -1, -9]);
    design.addPosition("g2", [9, 1, -1, -9]);
    design.addPosition("h2", [9, 1, -1, -9]);
    design.addPosition("i2", [9, 0, -1, -9]);
    design.addPosition("a1", [0, 1, 0, -9]);
    design.addPosition("b1", [0, 1, -1, -9]);
    design.addPosition("c1", [0, 1, -1, -9]);
    design.addPosition("d1", [0, 1, -1, -9]);
    design.addPosition("e1", [0, 1, -1, -9]);
    design.addPosition("f1", [0, 1, -1, -9]);
    design.addPosition("g1", [0, 1, -1, -9]);
    design.addPosition("h1", [0, 1, -1, -9]);
    design.addPosition("i1", [0, 0, -1, -9]);

    design.addZone("home", 1, [64, 67, 70, 54, 55, 56, 57, 58, 59, 60, 61, 62, 45, 46, 47, 48, 49, 50, 51, 52, 53]);
    design.addZone("home", 2, [1, 4, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]);
    design.addZone("goal", 1, [63, 64, 65, 66, 67, 68, 69, 70, 71]);
    design.addZone("goal", 2, [0, 1, 2, 3, 4, 5, 6, 7, 8]);

    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.IN_ZONE,	0);	// home
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addPriority(0);			// priority-type
    design.addPriority(1);			// drop-type
    design.addPriority(2);			// normal-type

    design.addPiece("General-5", 0, 780);
    design.addDrop(0, 0, [], 1);
    design.addMove(0, 1, [3], 2);
    design.addMove(0, 1, [1], 2);
    design.addMove(0, 1, [2], 2);
    design.addMove(0, 1, [0], 2);

    design.addPiece("General-4", 1, 695);
    design.addDrop(1, 0, [], 1);
    design.addMove(1, 1, [3], 2);
    design.addMove(1, 1, [1], 2);
    design.addMove(1, 1, [2], 2);
    design.addMove(1, 1, [0], 2);

    design.addPiece("General-3", 2, 615);
    design.addDrop(2, 0, [], 1);
    design.addMove(2, 1, [3], 2);
    design.addMove(2, 1, [1], 2);
    design.addMove(2, 1, [2], 2);
    design.addMove(2, 1, [0], 2);

    design.addPiece("General-2", 3, 540);
    design.addDrop(3, 0, [], 1);
    design.addMove(3, 1, [3], 2);
    design.addMove(3, 1, [1], 2);
    design.addMove(3, 1, [2], 2);
    design.addMove(3, 1, [0], 2);

    design.addPiece("General-1", 4, 470);
    design.addDrop(4, 0, [], 1);
    design.addMove(4, 1, [3], 2);
    design.addMove(4, 1, [1], 2);
    design.addMove(4, 1, [2], 2);
    design.addMove(4, 1, [0], 2);

    design.addPiece("Colonel-1", 5, 450);
    design.addDrop(5, 0, [], 1);
    design.addMove(5, 1, [3], 2);
    design.addMove(5, 1, [1], 2);
    design.addMove(5, 1, [2], 2);
    design.addMove(5, 1, [0], 2);

    design.addPiece("Colonel-2", 6, 345);
    design.addDrop(6, 0, [], 1);
    design.addMove(6, 1, [3], 2);
    design.addMove(6, 1, [1], 2);
    design.addMove(6, 1, [2], 2);
    design.addMove(6, 1, [0], 2);

    design.addPiece("Major", 7, 290);
    design.addDrop(7, 0, [], 1);
    design.addMove(7, 1, [3], 2);
    design.addMove(7, 1, [1], 2);
    design.addMove(7, 1, [2], 2);
    design.addMove(7, 1, [0], 2);

    design.addPiece("Captain", 8, 240);
    design.addDrop(8, 0, [], 1);
    design.addMove(8, 1, [3], 2);
    design.addMove(8, 1, [1], 2);
    design.addMove(8, 1, [2], 2);
    design.addMove(8, 1, [0], 2);

    design.addPiece("Lieutenant-1", 9, 195);
    design.addDrop(9, 0, [], 1);
    design.addMove(9, 1, [3], 2);
    design.addMove(9, 1, [1], 2);
    design.addMove(9, 1, [2], 2);
    design.addMove(9, 1, [0], 2);

    design.addPiece("Lieutenant-2", 10, 155);
    design.addDrop(10, 0, [], 1);
    design.addMove(10, 1, [3], 2);
    design.addMove(10, 1, [1], 2);
    design.addMove(10, 1, [2], 2);
    design.addMove(10, 1, [0], 2);

    design.addPiece("Sergeant", 11, 120);
    design.addDrop(11, 0, [], 1);
    design.addMove(11, 1, [3], 2);
    design.addMove(11, 1, [1], 2);
    design.addMove(11, 1, [2], 2);
    design.addMove(11, 1, [0], 2);

    design.addPiece("Private", 12, 137);
    design.addDrop(12, 0, [], 1);
    design.addMove(12, 1, [3], 2);
    design.addMove(12, 1, [1], 2);
    design.addMove(12, 1, [2], 2);
    design.addMove(12, 1, [0], 2);

    design.addPiece("Spy", 13, 750);
    design.addDrop(13, 0, [], 1);
    design.addMove(13, 1, [3], 2);
    design.addMove(13, 1, [1], 2);
    design.addMove(13, 1, [2], 2);
    design.addMove(13, 1, [0], 2);

    design.addPiece("Flag", 14, 10000);
    design.addDrop(14, 0, [], 0);
    design.addMove(14, 1, [3], 2);
    design.addMove(14, 1, [1], 2);
    design.addMove(14, 1, [2], 2);
    design.addMove(14, 1, [0], 2);

    design.reserve("White", "Flag", 1);
    design.reserve("White", "General-5", 1);
    design.reserve("White", "General-4", 1);
    design.reserve("White", "General-3", 1);
    design.reserve("White", "General-2", 1);
    design.reserve("White", "General-1", 1);
    design.reserve("White", "Colonel-1", 1);
    design.reserve("White", "Colonel-2", 1);
    design.reserve("White", "Major", 1);
    design.reserve("White", "Captain", 1);
    design.reserve("White", "Lieutenant-2", 1);
    design.reserve("White", "Lieutenant-1", 1);
    design.reserve("White", "Sergeant", 1);
    design.reserve("White", "Private", 6);
    design.reserve("White", "Spy", 2);
    design.reserve("Black", "Flag", 0);
    design.reserve("Black", "General-5", 0);
    design.reserve("Black", "General-4", 0);
    design.reserve("Black", "General-3", 0);
    design.reserve("Black", "General-2", 0);
    design.reserve("Black", "General-1", 0);
    design.reserve("Black", "Colonel-1", 0);
    design.reserve("Black", "Colonel-2", 0);
    design.reserve("Black", "Major", 0);
    design.reserve("Black", "Captain", 0);
    design.reserve("Black", "Lieutenant-2", 0);
    design.reserve("Black", "Lieutenant-1", 0);
    design.reserve("Black", "Sergeant", 0);
    design.reserve("Black", "Private", 0);
    design.reserve("Black", "Spy", 0);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteGeneral-5", "White General-5");
    view.defPiece("BlackGeneral-5", "Black General-5");
    view.defPiece("WhiteGeneral-4", "White General-4");
    view.defPiece("BlackGeneral-4", "Black General-4");
    view.defPiece("WhiteGeneral-3", "White General-3");
    view.defPiece("BlackGeneral-3", "Black General-3");
    view.defPiece("WhiteGeneral-2", "White General-2");
    view.defPiece("BlackGeneral-2", "Black General-2");
    view.defPiece("WhiteGeneral-1", "White General-1");
    view.defPiece("BlackGeneral-1", "Black General-1");
    view.defPiece("WhiteColonel-1", "White Colonel-1");
    view.defPiece("BlackColonel-1", "Black Colonel-1");
    view.defPiece("WhiteColonel-2", "White Colonel-2");
    view.defPiece("BlackColonel-2", "Black Colonel-2");
    view.defPiece("WhiteMajor", "White Major");
    view.defPiece("BlackMajor", "Black Major");
    view.defPiece("WhiteCaptain", "White Captain");
    view.defPiece("BlackCaptain", "Black Captain");
    view.defPiece("WhiteLieutenant-1", "White Lieutenant-1");
    view.defPiece("BlackLieutenant-1", "Black Lieutenant-1");
    view.defPiece("WhiteLieutenant-2", "White Lieutenant-2");
    view.defPiece("BlackLieutenant-2", "Black Lieutenant-2");
    view.defPiece("WhiteSergeant", "White Sergeant");
    view.defPiece("BlackSergeant", "Black Sergeant");
    view.defPiece("WhitePrivate", "White Private");
    view.defPiece("BlackPrivate", "Black Private");
    view.defPiece("WhiteSpy", "White Spy");
    view.defPiece("BlackSpy", "Black Spy");
    view.defPiece("WhiteFlag", "White Flag");
    view.defPiece("BlackFlag", "Black Flag");
    view.defPiece("Ko", "Ko");
 
    view.defPosition("a8", 3, 3, 80, 60);
    view.defPosition("b8", 84, 3, 80, 60);
    view.defPosition("c8", 165, 3, 80, 60);
    view.defPosition("d8", 246, 3, 80, 60);
    view.defPosition("e8", 327, 3, 80, 60);
    view.defPosition("f8", 408, 3, 80, 60);
    view.defPosition("g8", 489, 3, 80, 60);
    view.defPosition("h8", 570, 3, 80, 60);
    view.defPosition("i8", 651, 3, 80, 60);
    view.defPosition("a7", 3, 64, 80, 60);
    view.defPosition("b7", 84, 64, 80, 60);
    view.defPosition("c7", 165, 64, 80, 60);
    view.defPosition("d7", 246, 64, 80, 60);
    view.defPosition("e7", 327, 64, 80, 60);
    view.defPosition("f7", 408, 64, 80, 60);
    view.defPosition("g7", 489, 64, 80, 60);
    view.defPosition("h7", 570, 64, 80, 60);
    view.defPosition("i7", 651, 64, 80, 60);
    view.defPosition("a6", 3, 125, 80, 60);
    view.defPosition("b6", 84, 125, 80, 60);
    view.defPosition("c6", 165, 125, 80, 60);
    view.defPosition("d6", 246, 125, 80, 60);
    view.defPosition("e6", 327, 125, 80, 60);
    view.defPosition("f6", 408, 125, 80, 60);
    view.defPosition("g6", 489, 125, 80, 60);
    view.defPosition("h6", 570, 125, 80, 60);
    view.defPosition("i6", 651, 125, 80, 60);
    view.defPosition("a5", 3, 186, 80, 60);
    view.defPosition("b5", 84, 186, 80, 60);
    view.defPosition("c5", 165, 186, 80, 60);
    view.defPosition("d5", 246, 186, 80, 60);
    view.defPosition("e5", 327, 186, 80, 60);
    view.defPosition("f5", 408, 186, 80, 60);
    view.defPosition("g5", 489, 186, 80, 60);
    view.defPosition("h5", 570, 186, 80, 60);
    view.defPosition("i5", 651, 186, 80, 60);
    view.defPosition("a4", 3, 247, 80, 60);
    view.defPosition("b4", 84, 247, 80, 60);
    view.defPosition("c4", 165, 247, 80, 60);
    view.defPosition("d4", 246, 247, 80, 60);
    view.defPosition("e4", 327, 247, 80, 60);
    view.defPosition("f4", 408, 247, 80, 60);
    view.defPosition("g4", 489, 247, 80, 60);
    view.defPosition("h4", 570, 247, 80, 60);
    view.defPosition("i4", 651, 247, 80, 60);
    view.defPosition("a3", 3, 308, 80, 60);
    view.defPosition("b3", 84, 308, 80, 60);
    view.defPosition("c3", 165, 308, 80, 60);
    view.defPosition("d3", 246, 308, 80, 60);
    view.defPosition("e3", 327, 308, 80, 60);
    view.defPosition("f3", 408, 308, 80, 60);
    view.defPosition("g3", 489, 308, 80, 60);
    view.defPosition("h3", 570, 308, 80, 60);
    view.defPosition("i3", 651, 308, 80, 60);
    view.defPosition("a2", 3, 369, 80, 60);
    view.defPosition("b2", 84, 369, 80, 60);
    view.defPosition("c2", 165, 369, 80, 60);
    view.defPosition("d2", 246, 369, 80, 60);
    view.defPosition("e2", 327, 369, 80, 60);
    view.defPosition("f2", 408, 369, 80, 60);
    view.defPosition("g2", 489, 369, 80, 60);
    view.defPosition("h2", 570, 369, 80, 60);
    view.defPosition("i2", 651, 369, 80, 60);
    view.defPosition("a1", 3, 430, 80, 60);
    view.defPosition("b1", 84, 430, 80, 60);
    view.defPosition("c1", 165, 430, 80, 60);
    view.defPosition("d1", 246, 430, 80, 60);
    view.defPosition("e1", 327, 430, 80, 60);
    view.defPosition("f1", 408, 430, 80, 60);
    view.defPosition("g1", 489, 430, 80, 60);
    view.defPosition("h1", 570, 430, 80, 60);
    view.defPosition("i1", 651, 430, 80, 60);
}
