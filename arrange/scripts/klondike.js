Dagaz.Controller.persistense = "none";
Dagaz.Model.NO_SOUND = true;

Dagaz.View.MARK_R = 20;

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
    design.checkVersion("smart-moves", "from");
    design.checkVersion("show-blink", "false");
    design.checkVersion("shared-pieces", "true");

    design.addDirection("next");
    design.addDirection("up");
    design.addDirection("down");

    design.addPlayer("Diamonds", [0, 2, 1]);
    design.addPlayer("Clubs", [0, 1, 2]);
    design.addPlayer("Hearts", [0, 1, 2]);
    design.addPlayer("Spades", [0, 1, 2]);
    design.addPlayer("You", [0, 1, 2]);
    design.addTurn(5);

    design.addPosition("X1", [0, 0, 0]);
    design.addPosition("X2", [0, 0, 0]);
    design.addPosition("X3", [0, 0, 0]);
    design.addPosition("X4", [1, 0, 0]);
    design.addPosition("X5", [1, 0, 0]);
    design.addPosition("X6", [1, 0, 0]);
    design.addPosition("X7", [-4, 0, 0]);
    design.addPosition("a19", [7, 0, 7]);
    design.addPosition("b19", [7, 0, 7]);
    design.addPosition("c19", [7, 0, 7]);
    design.addPosition("d19", [7, 0, 7]);
    design.addPosition("e19", [7, 0, 7]);
    design.addPosition("f19", [7, 0, 7]);
    design.addPosition("g19", [7, 0, 7]);
    design.addPosition("a18", [7, -7, 7]);
    design.addPosition("b18", [7, -7, 7]);
    design.addPosition("c18", [7, -7, 7]);
    design.addPosition("d18", [7, -7, 7]);
    design.addPosition("e18", [7, -7, 7]);
    design.addPosition("f18", [7, -7, 7]);
    design.addPosition("g18", [7, -7, 7]);
    design.addPosition("a17", [7, -7, 7]);
    design.addPosition("b17", [7, -7, 7]);
    design.addPosition("c17", [7, -7, 7]);
    design.addPosition("d17", [7, -7, 7]);
    design.addPosition("e17", [7, -7, 7]);
    design.addPosition("f17", [7, -7, 7]);
    design.addPosition("g17", [7, -7, 7]);
    design.addPosition("a16", [7, -7, 7]);
    design.addPosition("b16", [7, -7, 7]);
    design.addPosition("c16", [7, -7, 7]);
    design.addPosition("d16", [7, -7, 7]);
    design.addPosition("e16", [7, -7, 7]);
    design.addPosition("f16", [7, -7, 7]);
    design.addPosition("g16", [7, -7, 7]);
    design.addPosition("a15", [7, -7, 7]);
    design.addPosition("b15", [7, -7, 7]);
    design.addPosition("c15", [7, -7, 7]);
    design.addPosition("d15", [7, -7, 7]);
    design.addPosition("e15", [7, -7, 7]);
    design.addPosition("f15", [7, -7, 7]);
    design.addPosition("g15", [7, -7, 7]);
    design.addPosition("a14", [7, -7, 7]);
    design.addPosition("b14", [7, -7, 7]);
    design.addPosition("c14", [7, -7, 7]);
    design.addPosition("d14", [7, -7, 7]);
    design.addPosition("e14", [7, -7, 7]);
    design.addPosition("f14", [7, -7, 7]);
    design.addPosition("g14", [7, -7, 7]);
    design.addPosition("a13", [7, -7, 7]);
    design.addPosition("b13", [7, -7, 7]);
    design.addPosition("c13", [7, -7, 7]);
    design.addPosition("d13", [7, -7, 7]);
    design.addPosition("e13", [7, -7, 7]);
    design.addPosition("f13", [7, -7, 7]);
    design.addPosition("g13", [7, -7, 7]);
    design.addPosition("a12", [7, -7, 7]);
    design.addPosition("b12", [7, -7, 7]);
    design.addPosition("c12", [7, -7, 7]);
    design.addPosition("d12", [7, -7, 7]);
    design.addPosition("e12", [7, -7, 7]);
    design.addPosition("f12", [7, -7, 7]);
    design.addPosition("g12", [7, -7, 7]);
    design.addPosition("a11", [7, -7, 7]);
    design.addPosition("b11", [7, -7, 7]);
    design.addPosition("c11", [7, -7, 7]);
    design.addPosition("d11", [7, -7, 7]);
    design.addPosition("e11", [7, -7, 7]);
    design.addPosition("f11", [7, -7, 7]);
    design.addPosition("g11", [7, -7, 7]);
    design.addPosition("a10", [7, -7, 7]);
    design.addPosition("b10", [7, -7, 7]);
    design.addPosition("c10", [7, -7, 7]);
    design.addPosition("d10", [7, -7, 7]);
    design.addPosition("e10", [7, -7, 7]);
    design.addPosition("f10", [7, -7, 7]);
    design.addPosition("g10", [7, -7, 7]);
    design.addPosition("a9", [7, -7, 7]);
    design.addPosition("b9", [7, -7, 7]);
    design.addPosition("c9", [7, -7, 7]);
    design.addPosition("d9", [7, -7, 7]);
    design.addPosition("e9", [7, -7, 7]);
    design.addPosition("f9", [7, -7, 7]);
    design.addPosition("g9", [7, -7, 7]);
    design.addPosition("a8", [7, -7, 7]);
    design.addPosition("b8", [7, -7, 7]);
    design.addPosition("c8", [7, -7, 7]);
    design.addPosition("d8", [7, -7, 7]);
    design.addPosition("e8", [7, -7, 7]);
    design.addPosition("f8", [7, -7, 7]);
    design.addPosition("g8", [7, -7, 7]);
    design.addPosition("a7", [7, -7, 7]);
    design.addPosition("b7", [7, -7, 7]);
    design.addPosition("c7", [7, -7, 7]);
    design.addPosition("d7", [7, -7, 7]);
    design.addPosition("e7", [7, -7, 7]);
    design.addPosition("f7", [7, -7, 7]);
    design.addPosition("g7", [7, -7, 7]);
    design.addPosition("a6", [7, -7, 7]);
    design.addPosition("b6", [7, -7, 7]);
    design.addPosition("c6", [7, -7, 7]);
    design.addPosition("d6", [7, -7, 7]);
    design.addPosition("e6", [7, -7, 7]);
    design.addPosition("f6", [7, -7, 7]);
    design.addPosition("g6", [7, -7, 7]);
    design.addPosition("a5", [7, -7, 7]);
    design.addPosition("b5", [7, -7, 7]);
    design.addPosition("c5", [7, -7, 7]);
    design.addPosition("d5", [7, -7, 7]);
    design.addPosition("e5", [7, -7, 7]);
    design.addPosition("f5", [7, -7, 7]);
    design.addPosition("g5", [7, -7, 7]);
    design.addPosition("a4", [7, -7, 7]);
    design.addPosition("b4", [7, -7, 7]);
    design.addPosition("c4", [7, -7, 7]);
    design.addPosition("d4", [7, -7, 7]);
    design.addPosition("e4", [7, -7, 7]);
    design.addPosition("f4", [7, -7, 7]);
    design.addPosition("g4", [7, -7, 7]);
    design.addPosition("a3", [7, -7, 7]);
    design.addPosition("b3", [7, -7, 7]);
    design.addPosition("c3", [7, -7, 7]);
    design.addPosition("d3", [7, -7, 7]);
    design.addPosition("e3", [7, -7, 7]);
    design.addPosition("f3", [7, -7, 7]);
    design.addPosition("g3", [7, -7, 7]);
    design.addPosition("a2", [7, -7, 7]);
    design.addPosition("b2", [7, -7, 7]);
    design.addPosition("c2", [7, -7, 7]);
    design.addPosition("d2", [7, -7, 7]);
    design.addPosition("e2", [7, -7, 7]);
    design.addPosition("f2", [7, -7, 7]);
    design.addPosition("g2", [7, -7, 7]);
    design.addPosition("a1", [-125, -7, 0]);
    design.addPosition("b1", [-125, -7, 0]);
    design.addPosition("c1", [-125, -7, 0]);
    design.addPosition("d1", [-125, -7, 0]);
    design.addPosition("e1", [-125, -7, 0]);
    design.addPosition("f1", [-125, -7, 0]);
    design.addPosition("g1", [0, -7, 0]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PROMOTE,	1);	// O1
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	21);	// position
    design.addCommand(1, ZRF.ON_BOARD_DIR,	0);	// name
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	10);
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	4);
    design.addCommand(1, ZRF.FORK,	3);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.JUMP,	-11);
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PROMOTE,	3);	// O2
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PROMOTE,	5);	// O3
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PROMOTE,	7);	// O4
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PROMOTE,	9);	// O5
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PROMOTE,	11);	// O6
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.PROMOTE,	13);	// O7
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.PROMOTE,	15);	// O8
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end

    design.addCommand(9, ZRF.FUNCTION,	24);	// from
    design.addCommand(9, ZRF.PROMOTE,	17);	// O9
    design.addCommand(9, ZRF.FUNCTION,	25);	// to
    design.addCommand(9, ZRF.FUNCTION,	28);	// end

    design.addCommand(10, ZRF.FUNCTION,	24);	// from
    design.addCommand(10, ZRF.PROMOTE,	19);	// O10
    design.addCommand(10, ZRF.FUNCTION,	25);	// to
    design.addCommand(10, ZRF.FUNCTION,	28);	// end

    design.addCommand(11, ZRF.FUNCTION,	24);	// from
    design.addCommand(11, ZRF.PROMOTE,	21);	// O11
    design.addCommand(11, ZRF.FUNCTION,	25);	// to
    design.addCommand(11, ZRF.FUNCTION,	28);	// end

    design.addCommand(12, ZRF.FUNCTION,	24);	// from
    design.addCommand(12, ZRF.PROMOTE,	23);	// O12
    design.addCommand(12, ZRF.FUNCTION,	25);	// to
    design.addCommand(12, ZRF.FUNCTION,	28);	// end

    design.addCommand(13, ZRF.FUNCTION,	24);	// from
    design.addCommand(13, ZRF.PROMOTE,	25);	// O13
    design.addCommand(13, ZRF.FUNCTION,	25);	// to
    design.addCommand(13, ZRF.FUNCTION,	28);	// end

    design.addCommand(14, ZRF.FUNCTION,	24);	// from
    design.addCommand(14, ZRF.PROMOTE,	26);	// P
    design.addCommand(14, ZRF.FUNCTION,	25);	// to
    design.addCommand(14, ZRF.FUNCTION,	28);	// end

    design.addCommand(15, ZRF.FUNCTION,	24);	// from
    design.addCommand(15, ZRF.PARAM,	0);	// $1
    design.addCommand(15, ZRF.FUNCTION,	21);	// position
    design.addCommand(15, ZRF.ON_BOARD_DIR,	0);	// name
    design.addCommand(15, ZRF.FUNCTION,	0);	// not
    design.addCommand(15, ZRF.IF,	10);
    design.addCommand(15, ZRF.FORK,	3);
    design.addCommand(15, ZRF.FUNCTION,	25);	// to
    design.addCommand(15, ZRF.FUNCTION,	28);	// end
    design.addCommand(15, ZRF.PARAM,	1);	// $2
    design.addCommand(15, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(15, ZRF.JUMP,	-8);
    design.addCommand(15, ZRF.FUNCTION,	25);	// to
    design.addCommand(15, ZRF.FUNCTION,	28);	// end

    design.addPiece("C1", 0);
    design.addMove(0, 0, [], 0, 1);

    design.addPiece("O1", 1);
    design.addMove(1, 15, [3, 0], 3);

    design.addPiece("C2", 2);
    design.addMove(2, 2, [], 0, 1);

    design.addPiece("O2", 3);
    design.addMove(3, 1, [7, 0], 1);
    design.addMove(3, 15, [3, 0], 3);

    design.addPiece("C3", 4);
    design.addMove(4, 3, [], 0, 1);

    design.addPiece("O3", 5);
    design.addMove(5, 1, [7, 0], 1);
    design.addMove(5, 15, [3, 0], 3);

    design.addPiece("C4", 6);
    design.addMove(6, 4, [], 0, 1);

    design.addPiece("O4", 7);
    design.addMove(7, 1, [7, 0], 1);
    design.addMove(7, 15, [3, 0], 3);

    design.addPiece("C5", 8);
    design.addMove(8, 5, [], 0, 1);

    design.addPiece("O5", 9);
    design.addMove(9, 1, [7, 0], 1);
    design.addMove(9, 15, [3, 0], 3);

    design.addPiece("C6", 10);
    design.addMove(10, 6, [], 0, 1);

    design.addPiece("O6", 11);
    design.addMove(11, 1, [7, 0], 1);
    design.addMove(11, 15, [3, 0], 3);

    design.addPiece("C7", 12);
    design.addMove(12, 7, [], 0, 1);

    design.addPiece("O7", 13);
    design.addMove(13, 1, [7, 0], 1);
    design.addMove(13, 15, [3, 0], 3);

    design.addPiece("C8", 14);
    design.addMove(14, 8, [], 0, 1);

    design.addPiece("O8", 15);
    design.addMove(15, 1, [7, 0], 1);
    design.addMove(15, 15, [3, 0], 3);

    design.addPiece("C9", 16);
    design.addMove(16, 9, [], 0, 1);

    design.addPiece("O9", 17);
    design.addMove(17, 1, [7, 0], 1);
    design.addMove(17, 15, [3, 0], 3);

    design.addPiece("C10", 18);
    design.addMove(18, 10, [], 0, 1);

    design.addPiece("O10", 19);
    design.addMove(19, 1, [7, 0], 1);
    design.addMove(19, 15, [3, 0], 3);

    design.addPiece("C11", 20);
    design.addMove(20, 11, [], 0, 1);

    design.addPiece("O11", 21);
    design.addMove(21, 1, [7, 0], 1);
    design.addMove(21, 15, [3, 0], 3);

    design.addPiece("C12", 22);
    design.addMove(22, 12, [], 0, 1);

    design.addPiece("O12", 23);
    design.addMove(23, 1, [7, 0], 1);
    design.addMove(23, 15, [3, 0], 3);

    design.addPiece("C13", 24);
    design.addMove(24, 13, [], 0, 1);

    design.addPiece("O13", 25);
    design.addMove(25, 1, [7, 0], 1);
    design.addMove(25, 15, [3, 0], 3);

    design.addPiece("P", 26);
    design.addMove(26, 14, [], 2, 1);

    design.addPiece("S", 27);
    design.addMove(27, 1, [7, 0], 4);
    design.addMove(27, 15, [3, 0], 5);

    design.addPiece("V", 28);
    design.addMove(28, 1, [7, 0], 4);
    design.addMove(28, 15, [3, 0], 5);

    design.setup("You", "P", 0);
    design.setup("You", "V", 1);

    design.setup("You", "S", 3);
    design.setup("You", "S", 4);
    design.setup("You", "S", 5);
    design.setup("You", "S", 6);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("DiamondsC1", "Diamonds C1");
    view.defPiece("ClubsC1", "Clubs C1");
    view.defPiece("HeartsC1", "Hearts C1");
    view.defPiece("SpadesC1", "Spades C1");
    view.defPiece("DiamondsO1", "Diamonds O1");
    view.defPiece("ClubsO1", "Clubs O1");
    view.defPiece("HeartsO1", "Hearts O1");
    view.defPiece("SpadesO1", "Spades O1");
    view.defPiece("DiamondsC2", "Diamonds C2");
    view.defPiece("ClubsC2", "Clubs C2");
    view.defPiece("HeartsC2", "Hearts C2");
    view.defPiece("SpadesC2", "Spades C2");
    view.defPiece("DiamondsO2", "Diamonds O2");
    view.defPiece("ClubsO2", "Clubs O2");
    view.defPiece("HeartsO2", "Hearts O2");
    view.defPiece("SpadesO2", "Spades O2");
    view.defPiece("DiamondsC3", "Diamonds C3");
    view.defPiece("ClubsC3", "Clubs C3");
    view.defPiece("HeartsC3", "Hearts C3");
    view.defPiece("SpadesC3", "Spades C3");
    view.defPiece("DiamondsO3", "Diamonds O3");
    view.defPiece("ClubsO3", "Clubs O3");
    view.defPiece("HeartsO3", "Hearts O3");
    view.defPiece("SpadesO3", "Spades O3");
    view.defPiece("DiamondsC4", "Diamonds C4");
    view.defPiece("ClubsC4", "Clubs C4");
    view.defPiece("HeartsC4", "Hearts C4");
    view.defPiece("SpadesC4", "Spades C4");
    view.defPiece("DiamondsO4", "Diamonds O4");
    view.defPiece("ClubsO4", "Clubs O4");
    view.defPiece("HeartsO4", "Hearts O4");
    view.defPiece("SpadesO4", "Spades O4");
    view.defPiece("DiamondsC5", "Diamonds C5");
    view.defPiece("ClubsC5", "Clubs C5");
    view.defPiece("HeartsC5", "Hearts C5");
    view.defPiece("SpadesC5", "Spades C5");
    view.defPiece("DiamondsO5", "Diamonds O5");
    view.defPiece("ClubsO5", "Clubs O5");
    view.defPiece("HeartsO5", "Hearts O5");
    view.defPiece("SpadesO5", "Spades O5");
    view.defPiece("DiamondsC6", "Diamonds C6");
    view.defPiece("ClubsC6", "Clubs C6");
    view.defPiece("HeartsC6", "Hearts C6");
    view.defPiece("SpadesC6", "Spades C6");
    view.defPiece("DiamondsO6", "Diamonds O6");
    view.defPiece("ClubsO6", "Clubs O6");
    view.defPiece("HeartsO6", "Hearts O6");
    view.defPiece("SpadesO6", "Spades O6");
    view.defPiece("DiamondsC7", "Diamonds C7");
    view.defPiece("ClubsC7", "Clubs C7");
    view.defPiece("HeartsC7", "Hearts C7");
    view.defPiece("SpadesC7", "Spades C7");
    view.defPiece("DiamondsO7", "Diamonds O7");
    view.defPiece("ClubsO7", "Clubs O7");
    view.defPiece("HeartsO7", "Hearts O7");
    view.defPiece("SpadesO7", "Spades O7");
    view.defPiece("DiamondsC8", "Diamonds C8");
    view.defPiece("ClubsC8", "Clubs C8");
    view.defPiece("HeartsC8", "Hearts C8");
    view.defPiece("SpadesC8", "Spades C8");
    view.defPiece("DiamondsO8", "Diamonds O8");
    view.defPiece("ClubsO8", "Clubs O8");
    view.defPiece("HeartsO8", "Hearts O8");
    view.defPiece("SpadesO8", "Spades O8");
    view.defPiece("DiamondsC9", "Diamonds C9");
    view.defPiece("ClubsC9", "Clubs C9");
    view.defPiece("HeartsC9", "Hearts C9");
    view.defPiece("SpadesC9", "Spades C9");
    view.defPiece("DiamondsO9", "Diamonds O9");
    view.defPiece("ClubsO9", "Clubs O9");
    view.defPiece("HeartsO9", "Hearts O9");
    view.defPiece("SpadesO9", "Spades O9");
    view.defPiece("DiamondsC10", "Diamonds C10");
    view.defPiece("ClubsC10", "Clubs C10");
    view.defPiece("HeartsC10", "Hearts C10");
    view.defPiece("SpadesC10", "Spades C10");
    view.defPiece("DiamondsO10", "Diamonds O10");
    view.defPiece("ClubsO10", "Clubs O10");
    view.defPiece("HeartsO10", "Hearts O10");
    view.defPiece("SpadesO10", "Spades O10");
    view.defPiece("DiamondsC11", "Diamonds C11");
    view.defPiece("ClubsC11", "Clubs C11");
    view.defPiece("HeartsC11", "Hearts C11");
    view.defPiece("SpadesC11", "Spades C11");
    view.defPiece("DiamondsO11", "Diamonds O11");
    view.defPiece("ClubsO11", "Clubs O11");
    view.defPiece("HeartsO11", "Hearts O11");
    view.defPiece("SpadesO11", "Spades O11");
    view.defPiece("DiamondsC12", "Diamonds C12");
    view.defPiece("ClubsC12", "Clubs C12");
    view.defPiece("HeartsC12", "Hearts C12");
    view.defPiece("SpadesC12", "Spades C12");
    view.defPiece("DiamondsO12", "Diamonds O12");
    view.defPiece("ClubsO12", "Clubs O12");
    view.defPiece("HeartsO12", "Hearts O12");
    view.defPiece("SpadesO12", "Spades O12");
    view.defPiece("DiamondsC13", "Diamonds C13");
    view.defPiece("ClubsC13", "Clubs C13");
    view.defPiece("HeartsC13", "Hearts C13");
    view.defPiece("SpadesC13", "Spades C13");
    view.defPiece("DiamondsO13", "Diamonds O13");
    view.defPiece("ClubsO13", "Clubs O13");
    view.defPiece("HeartsO13", "Hearts O13");
    view.defPiece("SpadesO13", "Spades O13");
    view.defPiece("YouP", "You P");
    view.defPiece("YouS", "You S");
    view.defPiece("YouV", "You V");
 
    view.defPosition("X1", 0, 10, 62, 82);
    view.defPosition("X2", 46, 10, 92, 82);
    view.defPosition("X3", 124, 10, 62, 82);
    view.defPosition("X4", 186, 10, 62, 82);
    view.defPosition("X5", 248, 10, 62, 82);
    view.defPosition("X6", 310, 10, 62, 82);
    view.defPosition("X7", 372, 10, 62, 82);
    view.defPosition("a19", 0, 100, 62, 82);
    view.defPosition("b19", 62, 100, 62, 82);
    view.defPosition("c19", 124, 100, 62, 82);
    view.defPosition("d19", 186, 100, 62, 82);
    view.defPosition("e19", 248, 100, 62, 82);
    view.defPosition("f19", 310, 100, 62, 82);
    view.defPosition("g19", 372, 100, 62, 82);
    view.defPosition("a18", 0, 115, 62, 82);
    view.defPosition("b18", 62, 115, 62, 82);
    view.defPosition("c18", 124, 115, 62, 82);
    view.defPosition("d18", 186, 115, 62, 82);
    view.defPosition("e18", 248, 115, 62, 82);
    view.defPosition("f18", 310, 115, 62, 82);
    view.defPosition("g18", 372, 115, 62, 82);
    view.defPosition("a17", 0, 130, 62, 82);
    view.defPosition("b17", 62, 130, 62, 82);
    view.defPosition("c17", 124, 130, 62, 82);
    view.defPosition("d17", 186, 130, 62, 82);
    view.defPosition("e17", 248, 130, 62, 82);
    view.defPosition("f17", 310, 130, 62, 82);
    view.defPosition("g17", 372, 130, 62, 82);
    view.defPosition("a16", 0, 145, 62, 82);
    view.defPosition("b16", 62, 145, 62, 82);
    view.defPosition("c16", 124, 145, 62, 82);
    view.defPosition("d16", 186, 145, 62, 82);
    view.defPosition("e16", 248, 145, 62, 82);
    view.defPosition("f16", 310, 145, 62, 82);
    view.defPosition("g16", 372, 145, 62, 82);
    view.defPosition("a15", 0, 160, 62, 82);
    view.defPosition("b15", 62, 160, 62, 82);
    view.defPosition("c15", 124, 160, 62, 82);
    view.defPosition("d15", 186, 160, 62, 82);
    view.defPosition("e15", 248, 160, 62, 82);
    view.defPosition("f15", 310, 160, 62, 82);
    view.defPosition("g15", 372, 160, 62, 82);
    view.defPosition("a14", 0, 175, 62, 82);
    view.defPosition("b14", 62, 175, 62, 82);
    view.defPosition("c14", 124, 175, 62, 82);
    view.defPosition("d14", 186, 175, 62, 82);
    view.defPosition("e14", 248, 175, 62, 82);
    view.defPosition("f14", 310, 175, 62, 82);
    view.defPosition("g14", 372, 175, 62, 82);
    view.defPosition("a13", 0, 190, 62, 82);
    view.defPosition("b13", 62, 190, 62, 82);
    view.defPosition("c13", 124, 190, 62, 82);
    view.defPosition("d13", 186, 190, 62, 82);
    view.defPosition("e13", 248, 190, 62, 82);
    view.defPosition("f13", 310, 190, 62, 82);
    view.defPosition("g13", 372, 190, 62, 82);
    view.defPosition("a12", 0, 205, 62, 82);
    view.defPosition("b12", 62, 205, 62, 82);
    view.defPosition("c12", 124, 205, 62, 82);
    view.defPosition("d12", 186, 205, 62, 82);
    view.defPosition("e12", 248, 205, 62, 82);
    view.defPosition("f12", 310, 205, 62, 82);
    view.defPosition("g12", 372, 205, 62, 82);
    view.defPosition("a11", 0, 220, 62, 82);
    view.defPosition("b11", 62, 220, 62, 82);
    view.defPosition("c11", 124, 220, 62, 82);
    view.defPosition("d11", 186, 220, 62, 82);
    view.defPosition("e11", 248, 220, 62, 82);
    view.defPosition("f11", 310, 220, 62, 82);
    view.defPosition("g11", 372, 220, 62, 82);
    view.defPosition("a10", 0, 235, 62, 82);
    view.defPosition("b10", 62, 235, 62, 82);
    view.defPosition("c10", 124, 235, 62, 82);
    view.defPosition("d10", 186, 235, 62, 82);
    view.defPosition("e10", 248, 235, 62, 82);
    view.defPosition("f10", 310, 235, 62, 82);
    view.defPosition("g10", 372, 235, 62, 82);
    view.defPosition("a9", 0, 250, 62, 82);
    view.defPosition("b9", 62, 250, 62, 82);
    view.defPosition("c9", 124, 250, 62, 82);
    view.defPosition("d9", 186, 250, 62, 82);
    view.defPosition("e9", 248, 250, 62, 82);
    view.defPosition("f9", 310, 250, 62, 82);
    view.defPosition("g9", 372, 250, 62, 82);
    view.defPosition("a8", 0, 265, 62, 82);
    view.defPosition("b8", 62, 265, 62, 82);
    view.defPosition("c8", 124, 265, 62, 82);
    view.defPosition("d8", 186, 265, 62, 82);
    view.defPosition("e8", 248, 265, 62, 82);
    view.defPosition("f8", 310, 265, 62, 82);
    view.defPosition("g8", 372, 265, 62, 82);
    view.defPosition("a7", 0, 280, 62, 82);
    view.defPosition("b7", 62, 280, 62, 82);
    view.defPosition("c7", 124, 280, 62, 82);
    view.defPosition("d7", 186, 280, 62, 82);
    view.defPosition("e7", 248, 280, 62, 82);
    view.defPosition("f7", 310, 280, 62, 82);
    view.defPosition("g7", 372, 280, 62, 82);
    view.defPosition("a6", 0, 295, 62, 82);
    view.defPosition("b6", 62, 295, 62, 82);
    view.defPosition("c6", 124, 295, 62, 82);
    view.defPosition("d6", 186, 295, 62, 82);
    view.defPosition("e6", 248, 295, 62, 82);
    view.defPosition("f6", 310, 295, 62, 82);
    view.defPosition("g6", 372, 295, 62, 82);
    view.defPosition("a5", 0, 310, 62, 82);
    view.defPosition("b5", 62, 310, 62, 82);
    view.defPosition("c5", 124, 310, 62, 82);
    view.defPosition("d5", 186, 310, 62, 82);
    view.defPosition("e5", 248, 310, 62, 82);
    view.defPosition("f5", 310, 310, 62, 82);
    view.defPosition("g5", 372, 310, 62, 82);
    view.defPosition("a4", 0, 325, 62, 82);
    view.defPosition("b4", 62, 325, 62, 82);
    view.defPosition("c4", 124, 325, 62, 82);
    view.defPosition("d4", 186, 325, 62, 82);
    view.defPosition("e4", 248, 325, 62, 82);
    view.defPosition("f4", 310, 325, 62, 82);
    view.defPosition("g4", 372, 325, 62, 82);
    view.defPosition("a3", 0, 340, 62, 82);
    view.defPosition("b3", 62, 340, 62, 82);
    view.defPosition("c3", 124, 340, 62, 82);
    view.defPosition("d3", 186, 340, 62, 82);
    view.defPosition("e3", 248, 340, 62, 82);
    view.defPosition("f3", 310, 340, 62, 82);
    view.defPosition("g3", 372, 340, 62, 82);
    view.defPosition("a2", 0, 355, 62, 82);
    view.defPosition("b2", 62, 355, 62, 82);
    view.defPosition("c2", 124, 355, 62, 82);
    view.defPosition("d2", 186, 355, 62, 82);
    view.defPosition("e2", 248, 355, 62, 82);
    view.defPosition("f2", 310, 355, 62, 82);
    view.defPosition("g2", 372, 355, 62, 82);
    view.defPosition("a1", 0, 370, 62, 82);
    view.defPosition("b1", 62, 370, 62, 82);
    view.defPosition("c1", 124, 370, 62, 82);
    view.defPosition("d1", 186, 370, 62, 82);
    view.defPosition("e1", 248, 370, 62, 82);
    view.defPosition("f1", 310, 370, 62, 82);
    view.defPosition("g1", 372, 370, 62, 82);
}
