Dagaz.Model.NO_SOUND = true;

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
    design.checkVersion("smart-moves", "true");
    design.checkVersion("show-blink", "false");
    design.checkVersion("shared-pieces", "true");

    design.addPlayer("Diamonds", []);
    design.addPlayer("Clubs", []);
    design.addPlayer("Hearts", []);
    design.addPlayer("Spades", []);
    design.addPlayer("You", []);
    design.addTurn(5);

    design.addPosition("p2", []);
    design.addPosition("p1", []);
    design.addPosition("p0", []);
    design.addPosition("s3", []);
    design.addPosition("s2", []);
    design.addPosition("s1", []);
    design.addPosition("s0", []);
    design.addPosition("a6", []);
    design.addPosition("b6", []);
    design.addPosition("c6", []);
    design.addPosition("d6", []);
    design.addPosition("e6", []);
    design.addPosition("f6", []);
    design.addPosition("g6", []);
    design.addPosition("h6", []);
    design.addPosition("i6", []);
    design.addPosition("a5", []);
    design.addPosition("b5", []);
    design.addPosition("c5", []);
    design.addPosition("d5", []);
    design.addPosition("e5", []);
    design.addPosition("f5", []);
    design.addPosition("g5", []);
    design.addPosition("h5", []);
    design.addPosition("i5", []);
    design.addPosition("a4", []);
    design.addPosition("b4", []);
    design.addPosition("c4", []);
    design.addPosition("d4", []);
    design.addPosition("e4", []);
    design.addPosition("f4", []);
    design.addPosition("g4", []);
    design.addPosition("h4", []);
    design.addPosition("i4", []);
    design.addPosition("a3", []);
    design.addPosition("b3", []);
    design.addPosition("c3", []);
    design.addPosition("d3", []);
    design.addPosition("e3", []);
    design.addPosition("f3", []);
    design.addPosition("g3", []);
    design.addPosition("h3", []);
    design.addPosition("i3", []);
    design.addPosition("a2", []);
    design.addPosition("b2", []);
    design.addPosition("c2", []);
    design.addPosition("d2", []);
    design.addPosition("e2", []);
    design.addPosition("f2", []);
    design.addPosition("g2", []);
    design.addPosition("h2", []);
    design.addPosition("i2", []);
    design.addPosition("a1", []);
    design.addPosition("b1", []);
    design.addPosition("c1", []);
    design.addPosition("d1", []);
    design.addPosition("e1", []);
    design.addPosition("f1", []);
    design.addPosition("g1", []);
    design.addPosition("h1", []);
    design.addPosition("i1", []);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PROMOTE,	11);	// O0
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.FUNCTION,	26);	// capture
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PROMOTE,	13);	// O1
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PROMOTE,	15);	// O2
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PROMOTE,	17);	// O3
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PROMOTE,	19);	// O4
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PROMOTE,	21);	// O5
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.PROMOTE,	23);	// O6
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.PROMOTE,	25);	// O7
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end

    design.addCommand(9, ZRF.FUNCTION,	24);	// from
    design.addCommand(9, ZRF.PROMOTE,	27);	// O8
    design.addCommand(9, ZRF.FUNCTION,	25);	// to
    design.addCommand(9, ZRF.FUNCTION,	28);	// end

    design.addCommand(10, ZRF.FUNCTION,	24);	// from
    design.addCommand(10, ZRF.PROMOTE,	29);	// O9
    design.addCommand(10, ZRF.FUNCTION,	25);	// to
    design.addCommand(10, ZRF.FUNCTION,	28);	// end

    design.addCommand(11, ZRF.FUNCTION,	24);	// from
    design.addCommand(11, ZRF.PROMOTE,	31);	// O10
    design.addCommand(11, ZRF.FUNCTION,	25);	// to
    design.addCommand(11, ZRF.FUNCTION,	28);	// end

    design.addCommand(12, ZRF.FUNCTION,	24);	// from
    design.addCommand(12, ZRF.PROMOTE,	33);	// O11
    design.addCommand(12, ZRF.FUNCTION,	25);	// to
    design.addCommand(12, ZRF.FUNCTION,	28);	// end

    design.addCommand(13, ZRF.FUNCTION,	24);	// from
    design.addCommand(13, ZRF.PROMOTE,	35);	// O12
    design.addCommand(13, ZRF.FUNCTION,	25);	// to
    design.addCommand(13, ZRF.FUNCTION,	28);	// end

    design.addCommand(14, ZRF.FUNCTION,	24);	// from
    design.addCommand(14, ZRF.PROMOTE,	37);	// O13
    design.addCommand(14, ZRF.FUNCTION,	25);	// to
    design.addCommand(14, ZRF.FUNCTION,	28);	// end

    design.addPiece("D0", 0);
    design.addPiece("D1", 1);
    design.addPiece("D2", 2);
    design.addPiece("D3", 3);
    design.addPiece("D4", 4);
    design.addPiece("D5", 5);
    design.addPiece("D6", 6);
    design.addPiece("D7", 7);
    design.addPiece("D8", 8);
    design.addPiece("D9", 9);

    design.addPiece("C0", 10);
    design.addMove(10, 0, [], 0, 0);

    design.addPiece("O0", 11);
    design.addMove(11, 1, [], 1, 1);

    design.addPiece("C1", 12);
    design.addMove(12, 2, [], 0, 0);

    design.addPiece("O1", 13);
    design.addMove(13, 1, [], 1, 1);

    design.addPiece("C2", 14);
    design.addMove(14, 3, [], 0, 0);

    design.addPiece("O2", 15);
    design.addMove(15, 1, [], 1, 1);

    design.addPiece("C3", 16);
    design.addMove(16, 4, [], 0, 0);

    design.addPiece("O3", 17);
    design.addMove(17, 1, [], 1, 1);

    design.addPiece("C4", 18);
    design.addMove(18, 5, [], 0, 0);

    design.addPiece("O4", 19);
    design.addMove(19, 1, [], 1, 1);

    design.addPiece("C5", 20);
    design.addMove(20, 6, [], 0, 0);

    design.addPiece("O5", 21);
    design.addMove(21, 1, [], 1, 1);

    design.addPiece("C6", 22);
    design.addMove(22, 7, [], 0, 0);

    design.addPiece("O6", 23);
    design.addMove(23, 1, [], 1, 1);

    design.addPiece("C7", 24);
    design.addMove(24, 8, [], 0, 0);

    design.addPiece("O7", 25);
    design.addMove(25, 1, [], 1, 1);

    design.addPiece("C8", 26);
    design.addMove(26, 9, [], 0, 0);

    design.addPiece("O8", 27);
    design.addMove(27, 1, [], 1, 1);

    design.addPiece("C9", 28);
    design.addMove(28, 10, [], 0, 0);

    design.addPiece("O9", 29);
    design.addMove(29, 1, [], 1, 1);

    design.addPiece("C10", 30);
    design.addMove(30, 11, [], 0, 0);

    design.addPiece("O10", 31);
    design.addMove(31, 1, [], 1, 1);

    design.addPiece("C11", 32);
    design.addMove(32, 12, [], 0, 0);

    design.addPiece("O11", 33);
    design.addMove(33, 1, [], 1, 1);

    design.addPiece("C12", 34);
    design.addMove(34, 13, [], 0, 0);

    design.addPiece("O12", 35);
    design.addMove(35, 1, [], 1, 1);

    design.addPiece("C13", 36);
    design.addMove(36, 14, [], 0, 0);

    design.addPiece("O13", 37);
    design.addMove(37, 1, [], 1, 1);

    design.setup("You", "D2", 0);
    design.setup("You", "D0", 1);
    design.setup("You", "D0", 2);
    design.setup("You", "D0", 3);
    design.setup("You", "D0", 4);
    design.setup("You", "D0", 5);
    design.setup("You", "D0", 6);
}

Dagaz.View.configure = function(view) {
    view.defPiece("YouD0", "You D0");
    view.defPiece("YouD1", "You D1");
    view.defPiece("YouD2", "You D2");
    view.defPiece("YouD3", "You D3");
    view.defPiece("YouD4", "You D4");
    view.defPiece("YouD5", "You D5");
    view.defPiece("YouD6", "You D6");
    view.defPiece("YouD7", "You D7");
    view.defPiece("YouD8", "You D8");
    view.defPiece("YouD9", "You D9");
    view.defPiece("YouC0", "You C0");
    view.defPiece("YouO0", "You O0");
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
 
    view.defPosition("p2", 6, 0, 22, 32);
    view.defPosition("p1", 28, 0, 22, 32);
    view.defPosition("p0", 50, 0, 22, 32);
    view.defPosition("s3", 471, 0, 22, 32);
    view.defPosition("s2", 493, 0, 22, 32);
    view.defPosition("s1", 515, 0, 22, 32);
    view.defPosition("s0", 537, 0, 22, 32);
    view.defPosition("a6", 5, 35, 57, 77);
    view.defPosition("b6", 67, 35, 57, 77);
    view.defPosition("c6", 129, 35, 57, 77);
    view.defPosition("d6", 191, 35, 57, 77);
    view.defPosition("e6", 253, 35, 57, 77);
    view.defPosition("f6", 315, 35, 57, 77);
    view.defPosition("g6", 377, 35, 57, 77);
    view.defPosition("h6", 439, 35, 57, 77);
    view.defPosition("i6", 501, 35, 57, 77);
    view.defPosition("a5", 5, 117, 57, 77);
    view.defPosition("b5", 67, 117, 57, 77);
    view.defPosition("c5", 129, 117, 57, 77);
    view.defPosition("d5", 191, 117, 57, 77);
    view.defPosition("e5", 253, 117, 57, 77);
    view.defPosition("f5", 315, 117, 57, 77);
    view.defPosition("g5", 377, 117, 57, 77);
    view.defPosition("h5", 439, 117, 57, 77);
    view.defPosition("i5", 501, 117, 57, 77);
    view.defPosition("a4", 5, 199, 57, 77);
    view.defPosition("b4", 67, 199, 57, 77);
    view.defPosition("c4", 129, 199, 57, 77);
    view.defPosition("d4", 191, 199, 57, 77);
    view.defPosition("e4", 253, 199, 57, 77);
    view.defPosition("f4", 315, 199, 57, 77);
    view.defPosition("g4", 377, 199, 57, 77);
    view.defPosition("h4", 439, 199, 57, 77);
    view.defPosition("i4", 501, 199, 57, 77);
    view.defPosition("a3", 5, 281, 57, 77);
    view.defPosition("b3", 67, 281, 57, 77);
    view.defPosition("c3", 129, 281, 57, 77);
    view.defPosition("d3", 191, 281, 57, 77);
    view.defPosition("e3", 253, 281, 57, 77);
    view.defPosition("f3", 315, 281, 57, 77);
    view.defPosition("g3", 377, 281, 57, 77);
    view.defPosition("h3", 439, 281, 57, 77);
    view.defPosition("i3", 501, 281, 57, 77);
    view.defPosition("a2", 5, 363, 57, 77);
    view.defPosition("b2", 67, 363, 57, 77);
    view.defPosition("c2", 129, 363, 57, 77);
    view.defPosition("d2", 191, 363, 57, 77);
    view.defPosition("e2", 253, 363, 57, 77);
    view.defPosition("f2", 315, 363, 57, 77);
    view.defPosition("g2", 377, 363, 57, 77);
    view.defPosition("h2", 439, 363, 57, 77);
    view.defPosition("i2", 501, 363, 57, 77);
    view.defPosition("a1", 5, 445, 57, 77);
    view.defPosition("b1", 67, 445, 57, 77);
    view.defPosition("c1", 129, 445, 57, 77);
    view.defPosition("d1", 191, 445, 57, 77);
    view.defPosition("e1", 253, 445, 57, 77);
    view.defPosition("f1", 315, 445, 57, 77);
    view.defPosition("g1", 377, 445, 57, 77);
    view.defPosition("h1", 439, 445, 57, 77);
    view.defPosition("i1", 501, 445, 57, 77);
}
