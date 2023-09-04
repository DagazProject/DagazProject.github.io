Dagaz.Controller.noDropIndex = true;

Dagaz.Model.WIDTH  = 9;
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

    design.addDirection("se"); // 0
    design.addDirection("s");  // 1
    design.addDirection("sw"); // 2
    design.addDirection("e");  // 3
    design.addDirection("w");  // 4
    design.addDirection("ne"); // 5
    design.addDirection("nw"); // 6
    design.addDirection("n");  // 7

    design.addPlayer("You", [6, 7, 5, 4, 3, 2, 0, 1]);

    design.addPosition("a9", [10, 9, 0, 1, 0, 0, 0, 0]);
    design.addPosition("b9", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("c9", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("d9", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("e9", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("f9", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("g9", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("h9", [10, 9, 8, 1, -1, 0, 0, 0]);
    design.addPosition("i9", [0, 9, 8, 0, -1, 0, 0, 0]);
    design.addPosition("a8", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h8", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i8", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a7", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h7", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i7", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a6", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h6", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i6", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a5", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h5", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i5", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a4", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h4", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i4", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a3", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h3", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i3", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a2", [10, 9, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("c2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("d2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("e2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("f2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("g2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("h2", [10, 9, 8, 1, -1, -8, -10, -9]);
    design.addPosition("i2", [0, 9, 8, 0, -1, 0, -10, -9]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -8, 0, -9]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("d1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("e1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("f1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("g1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("h1", [0, 0, 0, 1, -1, -8, -10, -9]);
    design.addPosition("i1", [0, 0, 0, 0, -1, 0, -10, -9]);

    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.FUNCTION,	26);	// capture
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addPiece("WhitePawn", 0);
    design.addDrop(0, 0, [], 0);
    design.addMove(0, 1, [], 0);

    design.addPiece("BlackPawn", 1);
    design.addDrop(1, 0, [], 0);
    design.addMove(1, 1, [], 0);

    design.addPiece("WhiteShield", 2);
    design.addDrop(2, 0, [], 0);
    design.addMove(2, 1, [], 0);

    design.addPiece("BlackShield", 3);
    design.addDrop(3, 0, [], 0);
    design.addMove(3, 1, [], 0);

    design.addPiece("WhiteGhost", 4);
    design.addDrop(4, 0, [], 0);
    design.addMove(4, 1, [], 0);

    design.addPiece("BlackGhost", 5);
    design.addDrop(5, 0, [], 0);
    design.addMove(5, 1, [], 0);

    design.addPiece("WhiteChaos", 6);
    design.addDrop(6, 0, [], 0);
    design.addMove(6, 1, [], 0);

    design.addPiece("BlackChaos", 7);
    design.addDrop(7, 0, [], 0);
    design.addMove(7, 1, [], 0);

    design.addPiece("WhiteReaper", 8);
    design.addDrop(8, 0, [], 0);
    design.addMove(8, 1, [], 0);

    design.addPiece("BlackReaper", 9);
    design.addDrop(9, 0, [], 0);
    design.addMove(9, 1, [], 0);

    design.addPiece("WhiteKnightrider", 10);
    design.addDrop(10, 0, [], 0);
    design.addMove(10, 1, [], 0);

    design.addPiece("BlackKnightrider", 11);
    design.addDrop(11, 0, [], 0);
    design.addMove(11, 1, [], 0);

    design.addPiece("WhiteKing", 12);
    design.addDrop(12, 0, [], 0);
    design.addMove(12, 1, [], 0);

    design.addPiece("BlackKing", 13);
    design.addDrop(13, 0, [], 0);
    design.addMove(13, 1, [], 0);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhitePawn", "You WhitePawn");
    view.defPiece("BlackPawn", "You BlackPawn");
    view.defPiece("WhiteShield", "You WhiteShield");
    view.defPiece("BlackShield", "You BlackShield");
    view.defPiece("WhiteGhost", "You WhiteGhost");
    view.defPiece("BlackGhost", "You BlackGhost");
    view.defPiece("WhiteChaos", "You WhiteChaos");
    view.defPiece("BlackChaos", "You BlackChaos");
    view.defPiece("WhiteReaper", "You WhiteReaper");
    view.defPiece("BlackReaper", "You BlackReaper");
    view.defPiece("WhiteKnightrider", "You WhiteKnightrider");
    view.defPiece("BlackKnightrider", "You BlackKnightrider");
    view.defPiece("WhiteKing", "You WhiteKing");
    view.defPiece("BlackKing", "You BlackKing");
 
    view.defPosition("a9", 17, 17, 65, 65);
    view.defPosition("b9", 82, 17, 65, 65);
    view.defPosition("c9", 147, 17, 65, 65);
    view.defPosition("d9", 212, 17, 65, 65);
    view.defPosition("e9", 277, 17, 65, 65);
    view.defPosition("f9", 342, 17, 65, 65);
    view.defPosition("g9", 407, 17, 65, 65);
    view.defPosition("h9", 472, 17, 65, 65);
    view.defPosition("i9", 537, 17, 65, 65);
    view.defPosition("a8", 17, 82, 65, 65);
    view.defPosition("b8", 82, 82, 65, 65);
    view.defPosition("c8", 147, 82, 65, 65);
    view.defPosition("d8", 212, 82, 65, 65);
    view.defPosition("e8", 277, 82, 65, 65);
    view.defPosition("f8", 342, 82, 65, 65);
    view.defPosition("g8", 407, 82, 65, 65);
    view.defPosition("h8", 472, 82, 65, 65);
    view.defPosition("i8", 537, 82, 65, 65);
    view.defPosition("a7", 17, 147, 65, 65);
    view.defPosition("b7", 82, 147, 65, 65);
    view.defPosition("c7", 147, 147, 65, 65);
    view.defPosition("d7", 212, 147, 65, 65);
    view.defPosition("e7", 277, 147, 65, 65);
    view.defPosition("f7", 342, 147, 65, 65);
    view.defPosition("g7", 407, 147, 65, 65);
    view.defPosition("h7", 472, 147, 65, 65);
    view.defPosition("i7", 537, 147, 65, 65);
    view.defPosition("a6", 17, 212, 65, 65);
    view.defPosition("b6", 82, 212, 65, 65);
    view.defPosition("c6", 147, 212, 65, 65);
    view.defPosition("d6", 212, 212, 65, 65);
    view.defPosition("e6", 277, 212, 65, 65);
    view.defPosition("f6", 342, 212, 65, 65);
    view.defPosition("g6", 407, 212, 65, 65);
    view.defPosition("h6", 472, 212, 65, 65);
    view.defPosition("i6", 537, 212, 65, 65);
    view.defPosition("a5", 17, 277, 65, 65);
    view.defPosition("b5", 82, 277, 65, 65);
    view.defPosition("c5", 147, 277, 65, 65);
    view.defPosition("d5", 212, 277, 65, 65);
    view.defPosition("e5", 277, 277, 65, 65);
    view.defPosition("f5", 342, 277, 65, 65);
    view.defPosition("g5", 407, 277, 65, 65);
    view.defPosition("h5", 472, 277, 65, 65);
    view.defPosition("i5", 537, 277, 65, 65);
    view.defPosition("a4", 17, 342, 65, 65);
    view.defPosition("b4", 82, 342, 65, 65);
    view.defPosition("c4", 147, 342, 65, 65);
    view.defPosition("d4", 212, 342, 65, 65);
    view.defPosition("e4", 277, 342, 65, 65);
    view.defPosition("f4", 342, 342, 65, 65);
    view.defPosition("g4", 407, 342, 65, 65);
    view.defPosition("h4", 472, 342, 65, 65);
    view.defPosition("i4", 537, 342, 65, 65);
    view.defPosition("a3", 17, 407, 65, 65);
    view.defPosition("b3", 82, 407, 65, 65);
    view.defPosition("c3", 147, 407, 65, 65);
    view.defPosition("d3", 212, 407, 65, 65);
    view.defPosition("e3", 277, 407, 65, 65);
    view.defPosition("f3", 342, 407, 65, 65);
    view.defPosition("g3", 407, 407, 65, 65);
    view.defPosition("h3", 472, 407, 65, 65);
    view.defPosition("i3", 537, 407, 65, 65);
    view.defPosition("a2", 17, 472, 65, 65);
    view.defPosition("b2", 82, 472, 65, 65);
    view.defPosition("c2", 147, 472, 65, 65);
    view.defPosition("d2", 212, 472, 65, 65);
    view.defPosition("e2", 277, 472, 65, 65);
    view.defPosition("f2", 342, 472, 65, 65);
    view.defPosition("g2", 407, 472, 65, 65);
    view.defPosition("h2", 472, 472, 65, 65);
    view.defPosition("i2", 537, 472, 65, 65);
    view.defPosition("a1", 17, 537, 65, 65);
    view.defPosition("b1", 82, 537, 65, 65);
    view.defPosition("c1", 147, 537, 65, 65);
    view.defPosition("d1", 212, 537, 65, 65);
    view.defPosition("e1", 277, 537, 65, 65);
    view.defPosition("f1", 342, 537, 65, 65);
    view.defPosition("g1", 407, 537, 65, 65);
    view.defPosition("h1", 472, 537, 65, 65);
    view.defPosition("i1", 537, 537, 65, 65);
}
