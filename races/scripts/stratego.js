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
    design.checkVersion("ko", "situation");
    design.checkVersion("advisor-wait", "25");

    design.addDirection("s"); // 0
    design.addDirection("e"); // 1
    design.addDirection("w"); // 2
    design.addDirection("n"); // 3

    design.addPlayer("Red", [3, 2, 1, 0]);
    design.addPlayer("Blue", [0, 1, 2, 3]);
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

    design.addPosition("a9", [10, 1, 0, 0]);
    design.addPosition("b9", [10, 1, -1, 0]);
    design.addPosition("c9", [10, 1, -1, 0]);
    design.addPosition("d9", [10, 1, -1, 0]);
    design.addPosition("e9", [10, 1, -1, 0]);
    design.addPosition("f9", [10, 1, -1, 0]);
    design.addPosition("g9", [10, 1, -1, 0]);
    design.addPosition("h9", [10, 1, -1, 0]);
    design.addPosition("i9", [10, 1, -1, 0]);
    design.addPosition("j9", [10, 0, -1, 0]);
    design.addPosition("a8", [10, 1, 0, -10]);
    design.addPosition("b8", [10, 1, -1, -10]);
    design.addPosition("c8", [10, 1, -1, -10]);
    design.addPosition("d8", [10, 1, -1, -10]);
    design.addPosition("e8", [10, 1, -1, -10]);
    design.addPosition("f8", [10, 1, -1, -10]);
    design.addPosition("g8", [10, 1, -1, -10]);
    design.addPosition("h8", [10, 1, -1, -10]);
    design.addPosition("i8", [10, 1, -1, -10]);
    design.addPosition("j8", [10, 0, -1, -10]);
    design.addPosition("a7", [10, 1, 0, -10]);
    design.addPosition("b7", [10, 1, -1, -10]);
    design.addPosition("c7", [10, 1, -1, -10]);
    design.addPosition("d7", [10, 1, -1, -10]);
    design.addPosition("e7", [10, 1, -1, -10]);
    design.addPosition("f7", [10, 1, -1, -10]);
    design.addPosition("g7", [10, 1, -1, -10]);
    design.addPosition("h7", [10, 1, -1, -10]);
    design.addPosition("i7", [10, 1, -1, -10]);
    design.addPosition("j7", [10, 0, -1, -10]);
    design.addPosition("a6", [10, 1, 0, -10]);
    design.addPosition("b6", [10, 1, -1, -10]);
    design.addPosition("c6", [0, 1, -1, -10]);
    design.addPosition("d6", [0, 1, -1, -10]);
    design.addPosition("e6", [10, 1, -1, -10]);
    design.addPosition("f6", [10, 1, -1, -10]);
    design.addPosition("g6", [0, 1, -1, -10]);
    design.addPosition("h6", [0, 1, -1, -10]);
    design.addPosition("i6", [10, 1, -1, -10]);
    design.addPosition("j6", [10, 0, -1, -10]);
    design.addPosition("a5", [10, 1, 0, -10]);
    design.addPosition("b5", [10, 0, -1, -10]);
    design.addPosition("c5", [0, 1, 2, 3]);
    design.addPosition("d5", [0, 1, 2, 3]);
    design.addPosition("e5", [10, 1, 0, -10]);
    design.addPosition("f5", [10, 0, -1, -10]);
    design.addPosition("g5", [0, 1, 2, 3]);
    design.addPosition("h5", [0, 1, 2, 3]);
    design.addPosition("i5", [10, 1, 0, -10]);
    design.addPosition("j5", [10, 0, -1, -10]);
    design.addPosition("a4", [10, 1, 0, -10]);
    design.addPosition("b4", [10, 0, -1, -10]);
    design.addPosition("c4", [0, 1, 2, 3]);
    design.addPosition("d4", [0, 1, 2, 3]);
    design.addPosition("e4", [10, 1, 0, -10]);
    design.addPosition("f4", [10, 0, -1, -10]);
    design.addPosition("g4", [0, 1, 2, 3]);
    design.addPosition("h4", [0, 1, 2, 3]);
    design.addPosition("i4", [10, 1, 0, -10]);
    design.addPosition("j4", [10, 0, -1, -10]);
    design.addPosition("a3", [10, 1, 0, -10]);
    design.addPosition("b3", [10, 1, -1, -10]);
    design.addPosition("c3", [10, 1, -1, 0]);
    design.addPosition("d3", [10, 1, -1, 0]);
    design.addPosition("e3", [10, 1, -1, -10]);
    design.addPosition("f3", [10, 1, -1, -10]);
    design.addPosition("g3", [10, 1, -1, 0]);
    design.addPosition("h3", [10, 1, -1, 0]);
    design.addPosition("i3", [10, 1, -1, -10]);
    design.addPosition("j3", [10, 0, -1, -10]);
    design.addPosition("a2", [10, 1, 0, -10]);
    design.addPosition("b2", [10, 1, -1, -10]);
    design.addPosition("c2", [10, 1, -1, -10]);
    design.addPosition("d2", [10, 1, -1, -10]);
    design.addPosition("e2", [10, 1, -1, -10]);
    design.addPosition("f2", [10, 1, -1, -10]);
    design.addPosition("g2", [10, 1, -1, -10]);
    design.addPosition("h2", [10, 1, -1, -10]);
    design.addPosition("i2", [10, 1, -1, -10]);
    design.addPosition("j2", [10, 0, -1, -10]);
    design.addPosition("a1", [10, 1, 0, -10]);
    design.addPosition("b1", [10, 1, -1, -10]);
    design.addPosition("c1", [10, 1, -1, -10]);
    design.addPosition("d1", [10, 1, -1, -10]);
    design.addPosition("e1", [10, 1, -1, -10]);
    design.addPosition("f1", [10, 1, -1, -10]);
    design.addPosition("g1", [10, 1, -1, -10]);
    design.addPosition("h1", [10, 1, -1, -10]);
    design.addPosition("i1", [10, 1, -1, -10]);
    design.addPosition("j1", [10, 0, -1, -10]);
    design.addPosition("a0", [0, 1, 0, -10]);
    design.addPosition("b0", [0, 1, -1, -10]);
    design.addPosition("c0", [0, 1, -1, -10]);
    design.addPosition("d0", [0, 1, -1, -10]);
    design.addPosition("e0", [0, 1, -1, -10]);
    design.addPosition("f0", [0, 1, -1, -10]);
    design.addPosition("g0", [0, 1, -1, -10]);
    design.addPosition("h0", [0, 1, -1, -10]);
    design.addPosition("i0", [0, 1, -1, -10]);
    design.addPosition("j0", [0, 0, -1, -10]);

    design.addZone("home-zone", 1, [90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69]);
    design.addZone("home-zone", 2, [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.IN_ZONE,	0);	// home-zone
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

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	8);
    design.addCommand(2, ZRF.FORK,	4);
    design.addCommand(2, ZRF.PROMOTE,	14);	// ScoutOpened
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end
    design.addCommand(2, ZRF.PARAM,	2);	// $3
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.JUMP,	-9);
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PROMOTE,	14);	// ScoutOpened
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addPriority(0);			// priority-type
    design.addPriority(1);			// drop-type
    design.addPriority(2);			// normal-type

    design.addPiece("Flag", 0, 10000);
    design.addDrop(0, 0, [], 0);

    design.addPiece("Spy", 1, 100);
    design.addDrop(1, 0, [], 1);
    design.addMove(1, 1, [3], 2);
    design.addMove(1, 1, [1], 2);
    design.addMove(1, 1, [2], 2);
    design.addMove(1, 1, [0], 2);

    design.addPiece("Scout", 2, 50);
    design.addDrop(2, 0, [], 1);
    design.addMove(2, 1, [3], 2);
    design.addMove(2, 1, [1], 2);
    design.addMove(2, 1, [2], 2);
    design.addMove(2, 1, [0], 2);
    design.addMove(2, 2, [3, 3, 3], 2);
    design.addMove(2, 2, [1, 1, 1], 2);
    design.addMove(2, 2, [2, 2, 2], 2);
    design.addMove(2, 2, [0, 0, 0], 2);

    design.addPiece("Disarmer", 3, 200);
    design.addDrop(3, 0, [], 1);
    design.addMove(3, 1, [3], 2);
    design.addMove(3, 1, [1], 2);
    design.addMove(3, 1, [2], 2);
    design.addMove(3, 1, [0], 2);

    design.addPiece("Sergeant", 4, 40);
    design.addDrop(4, 0, [], 1);
    design.addMove(4, 1, [3], 2);
    design.addMove(4, 1, [1], 2);
    design.addMove(4, 1, [2], 2);
    design.addMove(4, 1, [0], 2);

    design.addPiece("Lieutenant", 5, 50);
    design.addDrop(5, 0, [], 1);
    design.addMove(5, 1, [3], 2);
    design.addMove(5, 1, [1], 2);
    design.addMove(5, 1, [2], 2);
    design.addMove(5, 1, [0], 2);

    design.addPiece("Captain", 6, 60);
    design.addDrop(6, 0, [], 1);
    design.addMove(6, 1, [3], 2);
    design.addMove(6, 1, [1], 2);
    design.addMove(6, 1, [2], 2);
    design.addMove(6, 1, [0], 2);

    design.addPiece("Major", 7, 70);
    design.addDrop(7, 0, [], 1);
    design.addMove(7, 1, [3], 2);
    design.addMove(7, 1, [1], 2);
    design.addMove(7, 1, [2], 2);
    design.addMove(7, 1, [0], 2);

    design.addPiece("Brigadier", 8, 80);
    design.addDrop(8, 0, [], 1);
    design.addMove(8, 1, [3], 2);
    design.addMove(8, 1, [1], 2);
    design.addMove(8, 1, [2], 2);
    design.addMove(8, 1, [0], 2);

    design.addPiece("General", 9, 90);
    design.addDrop(9, 0, [], 1);
    design.addMove(9, 1, [3], 2);
    design.addMove(9, 1, [1], 2);
    design.addMove(9, 1, [2], 2);
    design.addMove(9, 1, [0], 2);

    design.addPiece("Commandant", 10, 100);
    design.addDrop(10, 0, [], 1);
    design.addMove(10, 1, [3], 2);
    design.addMove(10, 1, [1], 2);
    design.addMove(10, 1, [2], 2);
    design.addMove(10, 1, [0], 2);

    design.addPiece("Bomb", 11, 2);
    design.addDrop(11, 0, [], 0);

    design.addPiece("FlagOpened", 12, 10000);

    design.addPiece("SpyOpened", 13, 100);
    design.addMove(13, 1, [3], 2);
    design.addMove(13, 1, [1], 2);
    design.addMove(13, 1, [2], 2);
    design.addMove(13, 1, [0], 2);

    design.addPiece("ScoutOpened", 14, 50);
    design.addMove(14, 1, [3], 2);
    design.addMove(14, 1, [1], 2);
    design.addMove(14, 1, [2], 2);
    design.addMove(14, 1, [0], 2);
    design.addMove(14, 2, [3, 3, 3], 2);
    design.addMove(14, 2, [1, 1, 1], 2);
    design.addMove(14, 2, [2, 2, 2], 2);
    design.addMove(14, 2, [0, 0, 0], 2);

    design.addPiece("DisarmerOpened", 15, 200);
    design.addMove(15, 1, [3], 2);
    design.addMove(15, 1, [1], 2);
    design.addMove(15, 1, [2], 2);
    design.addMove(15, 1, [0], 2);

    design.addPiece("SergeantOpened", 16, 40);
    design.addMove(16, 1, [3], 2);
    design.addMove(16, 1, [1], 2);
    design.addMove(16, 1, [2], 2);
    design.addMove(16, 1, [0], 2);

    design.addPiece("LieutenantOpened", 17, 50);
    design.addMove(17, 1, [3], 2);
    design.addMove(17, 1, [1], 2);
    design.addMove(17, 1, [2], 2);
    design.addMove(17, 1, [0], 2);

    design.addPiece("CaptainOpened", 18, 60);
    design.addMove(18, 1, [3], 2);
    design.addMove(18, 1, [1], 2);
    design.addMove(18, 1, [2], 2);
    design.addMove(18, 1, [0], 2);

    design.addPiece("MajorOpened", 19, 70);
    design.addMove(19, 1, [3], 2);
    design.addMove(19, 1, [1], 2);
    design.addMove(19, 1, [2], 2);
    design.addMove(19, 1, [0], 2);

    design.addPiece("BrigadierOpened", 20, 80);
    design.addMove(20, 1, [3], 2);
    design.addMove(20, 1, [1], 2);
    design.addMove(20, 1, [2], 2);
    design.addMove(20, 1, [0], 2);

    design.addPiece("GeneralOpened", 21, 90);
    design.addMove(21, 1, [3], 2);
    design.addMove(21, 1, [1], 2);
    design.addMove(21, 1, [2], 2);
    design.addMove(21, 1, [0], 2);

    design.addPiece("CommandantOpened", 22, 100);
    design.addMove(22, 1, [3], 2);
    design.addMove(22, 1, [1], 2);
    design.addMove(22, 1, [2], 2);
    design.addMove(22, 1, [0], 2);

    design.addPiece("BombOpened", 23, 2);

    design.reserve("Red", "Flag", 1);
    design.reserve("Red", "Spy", 1);
    design.reserve("Red", "Scout", 8);
    design.reserve("Red", "Disarmer", 5);
    design.reserve("Red", "Sergeant", 4);
    design.reserve("Red", "Lieutenant", 4);
    design.reserve("Red", "Captain", 4);
    design.reserve("Red", "Major", 3);
    design.reserve("Red", "Brigadier", 2);
    design.reserve("Red", "General", 1);
    design.reserve("Red", "Commandant", 1);
    design.reserve("Red", "Bomb", 6);
    design.reserve("Blue", "Flag", 0);
    design.reserve("Blue", "Spy", 0);
    design.reserve("Blue", "Scout", 0);
    design.reserve("Blue", "Disarmer", 0);
    design.reserve("Blue", "Sergeant", 0);
    design.reserve("Blue", "Lieutenant", 0);
    design.reserve("Blue", "Captain", 0);
    design.reserve("Blue", "Major", 0);
    design.reserve("Blue", "Brigadier", 0);
    design.reserve("Blue", "General", 0);
    design.reserve("Blue", "Commandant", 0);
    design.reserve("Blue", "Bomb", 0);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("RedFlag", "Red Flag");
    view.defPiece("BlueFlag", "Blue Flag");
    view.defPiece("RedSpy", "Red Spy");
    view.defPiece("BlueSpy", "Blue Spy");
    view.defPiece("RedScout", "Red Scout");
    view.defPiece("BlueScout", "Blue Scout");
    view.defPiece("RedDisarmer", "Red Disarmer");
    view.defPiece("BlueDisarmer", "Blue Disarmer");
    view.defPiece("RedSergeant", "Red Sergeant");
    view.defPiece("BlueSergeant", "Blue Sergeant");
    view.defPiece("RedLieutenant", "Red Lieutenant");
    view.defPiece("BlueLieutenant", "Blue Lieutenant");
    view.defPiece("RedCaptain", "Red Captain");
    view.defPiece("BlueCaptain", "Blue Captain");
    view.defPiece("RedMajor", "Red Major");
    view.defPiece("BlueMajor", "Blue Major");
    view.defPiece("RedBrigadier", "Red Brigadier");
    view.defPiece("BlueBrigadier", "Blue Brigadier");
    view.defPiece("RedGeneral", "Red General");
    view.defPiece("BlueGeneral", "Blue General");
    view.defPiece("RedCommandant", "Red Commandant");
    view.defPiece("BlueCommandant", "Blue Commandant");
    view.defPiece("RedBomb", "Red Bomb");
    view.defPiece("BlueBomb", "Blue Bomb");
    view.defPiece("RedFlagOpened", "Red FlagOpened");
    view.defPiece("BlueFlagOpened", "Blue FlagOpened");
    view.defPiece("RedSpyOpened", "Red SpyOpened");
    view.defPiece("BlueSpyOpened", "Blue SpyOpened");
    view.defPiece("RedScoutOpened", "Red ScoutOpened");
    view.defPiece("BlueScoutOpened", "Blue ScoutOpened");
    view.defPiece("RedDisarmerOpened", "Red DisarmerOpened");
    view.defPiece("BlueDisarmerOpened", "Blue DisarmerOpened");
    view.defPiece("RedSergeantOpened", "Red SergeantOpened");
    view.defPiece("BlueSergeantOpened", "Blue SergeantOpened");
    view.defPiece("RedLieutenantOpened", "Red LieutenantOpened");
    view.defPiece("BlueLieutenantOpened", "Blue LieutenantOpened");
    view.defPiece("RedCaptainOpened", "Red CaptainOpened");
    view.defPiece("BlueCaptainOpened", "Blue CaptainOpened");
    view.defPiece("RedMajorOpened", "Red MajorOpened");
    view.defPiece("BlueMajorOpened", "Blue MajorOpened");
    view.defPiece("RedBrigadierOpened", "Red BrigadierOpened");
    view.defPiece("BlueBrigadierOpened", "Blue BrigadierOpened");
    view.defPiece("RedGeneralOpened", "Red GeneralOpened");
    view.defPiece("BlueGeneralOpened", "Blue GeneralOpened");
    view.defPiece("RedCommandantOpened", "Red CommandantOpened");
    view.defPiece("BlueCommandantOpened", "Blue CommandantOpened");
    view.defPiece("RedBombOpened", "Red BombOpened");
    view.defPiece("BlueBombOpened", "Blue BombOpened");
    view.defPiece("Ko", "Ko");
 
    view.defPosition("a9", 1, 1, 40, 40);
    view.defPosition("b9", 41, 1, 40, 40);
    view.defPosition("c9", 81, 1, 40, 40);
    view.defPosition("d9", 121, 1, 40, 40);
    view.defPosition("e9", 161, 1, 40, 40);
    view.defPosition("f9", 201, 1, 40, 40);
    view.defPosition("g9", 241, 1, 40, 40);
    view.defPosition("h9", 281, 1, 40, 40);
    view.defPosition("i9", 321, 1, 40, 40);
    view.defPosition("j9", 361, 1, 40, 40);
    view.defPosition("a8", 1, 41, 40, 40);
    view.defPosition("b8", 41, 41, 40, 40);
    view.defPosition("c8", 81, 41, 40, 40);
    view.defPosition("d8", 121, 41, 40, 40);
    view.defPosition("e8", 161, 41, 40, 40);
    view.defPosition("f8", 201, 41, 40, 40);
    view.defPosition("g8", 241, 41, 40, 40);
    view.defPosition("h8", 281, 41, 40, 40);
    view.defPosition("i8", 321, 41, 40, 40);
    view.defPosition("j8", 361, 41, 40, 40);
    view.defPosition("a7", 1, 81, 40, 40);
    view.defPosition("b7", 41, 81, 40, 40);
    view.defPosition("c7", 81, 81, 40, 40);
    view.defPosition("d7", 121, 81, 40, 40);
    view.defPosition("e7", 161, 81, 40, 40);
    view.defPosition("f7", 201, 81, 40, 40);
    view.defPosition("g7", 241, 81, 40, 40);
    view.defPosition("h7", 281, 81, 40, 40);
    view.defPosition("i7", 321, 81, 40, 40);
    view.defPosition("j7", 361, 81, 40, 40);
    view.defPosition("a6", 1, 121, 40, 40);
    view.defPosition("b6", 41, 121, 40, 40);
    view.defPosition("c6", 81, 121, 40, 40);
    view.defPosition("d6", 121, 121, 40, 40);
    view.defPosition("e6", 161, 121, 40, 40);
    view.defPosition("f6", 201, 121, 40, 40);
    view.defPosition("g6", 241, 121, 40, 40);
    view.defPosition("h6", 281, 121, 40, 40);
    view.defPosition("i6", 321, 121, 40, 40);
    view.defPosition("j6", 361, 121, 40, 40);
    view.defPosition("a5", 1, 161, 40, 40);
    view.defPosition("b5", 41, 161, 40, 40);
    view.defPosition("c5", 81, 161, 40, 40);
    view.defPosition("d5", 121, 161, 40, 40);
    view.defPosition("e5", 161, 161, 40, 40);
    view.defPosition("f5", 201, 161, 40, 40);
    view.defPosition("g5", 241, 161, 40, 40);
    view.defPosition("h5", 281, 161, 40, 40);
    view.defPosition("i5", 321, 161, 40, 40);
    view.defPosition("j5", 361, 161, 40, 40);
    view.defPosition("a4", 1, 201, 40, 40);
    view.defPosition("b4", 41, 201, 40, 40);
    view.defPosition("c4", 81, 201, 40, 40);
    view.defPosition("d4", 121, 201, 40, 40);
    view.defPosition("e4", 161, 201, 40, 40);
    view.defPosition("f4", 201, 201, 40, 40);
    view.defPosition("g4", 241, 201, 40, 40);
    view.defPosition("h4", 281, 201, 40, 40);
    view.defPosition("i4", 321, 201, 40, 40);
    view.defPosition("j4", 361, 201, 40, 40);
    view.defPosition("a3", 1, 241, 40, 40);
    view.defPosition("b3", 41, 241, 40, 40);
    view.defPosition("c3", 81, 241, 40, 40);
    view.defPosition("d3", 121, 241, 40, 40);
    view.defPosition("e3", 161, 241, 40, 40);
    view.defPosition("f3", 201, 241, 40, 40);
    view.defPosition("g3", 241, 241, 40, 40);
    view.defPosition("h3", 281, 241, 40, 40);
    view.defPosition("i3", 321, 241, 40, 40);
    view.defPosition("j3", 361, 241, 40, 40);
    view.defPosition("a2", 1, 281, 40, 40);
    view.defPosition("b2", 41, 281, 40, 40);
    view.defPosition("c2", 81, 281, 40, 40);
    view.defPosition("d2", 121, 281, 40, 40);
    view.defPosition("e2", 161, 281, 40, 40);
    view.defPosition("f2", 201, 281, 40, 40);
    view.defPosition("g2", 241, 281, 40, 40);
    view.defPosition("h2", 281, 281, 40, 40);
    view.defPosition("i2", 321, 281, 40, 40);
    view.defPosition("j2", 361, 281, 40, 40);
    view.defPosition("a1", 1, 321, 40, 40);
    view.defPosition("b1", 41, 321, 40, 40);
    view.defPosition("c1", 81, 321, 40, 40);
    view.defPosition("d1", 121, 321, 40, 40);
    view.defPosition("e1", 161, 321, 40, 40);
    view.defPosition("f1", 201, 321, 40, 40);
    view.defPosition("g1", 241, 321, 40, 40);
    view.defPosition("h1", 281, 321, 40, 40);
    view.defPosition("i1", 321, 321, 40, 40);
    view.defPosition("j1", 361, 321, 40, 40);
    view.defPosition("a0", 1, 361, 40, 40);
    view.defPosition("b0", 41, 361, 40, 40);
    view.defPosition("c0", 81, 361, 40, 40);
    view.defPosition("d0", 121, 361, 40, 40);
    view.defPosition("e0", 161, 361, 40, 40);
    view.defPosition("f0", 201, 361, 40, 40);
    view.defPosition("g0", 241, 361, 40, 40);
    view.defPosition("h0", 281, 361, 40, 40);
    view.defPosition("i0", 321, 361, 40, 40);
    view.defPosition("j0", 361, 361, 40, 40);
}
