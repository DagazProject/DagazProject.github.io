Dagaz.View.SHIFT_X      = 1;
Dagaz.View.SHIFT_Y      = 1;

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
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-drops", "false");
    design.checkVersion("pass-turn", "false");

    design.addDirection("n");  // 0
    design.addDirection("s");  // 1
    design.addDirection("ne"); // 2
    design.addDirection("sw"); // 3
    design.addDirection("nw"); // 4
    design.addDirection("se"); // 5

    design.addPlayer("Red", [1, 0, 3, 2, 5, 4]);
    design.addPlayer("Blue", [0, 1, 2, 3, 4, 5]);

    design.addPosition("a1", [1, 0, 6, 0, 0, 5]);
    design.addPosition("a2", [1, -1, 6, 0, 0, 5]);
    design.addPosition("a3", [1, -1, 6, 0, 0, 5]);
    design.addPosition("a4", [1, -1, 6, 0, 0, 5]);
    design.addPosition("a5", [0, -1, 6, 0, 0, 5]);
    design.addPosition("b1", [1, 0, 7, 0, -5, 6]);
    design.addPosition("b2", [1, -1, 7, -6, -5, 6]);
    design.addPosition("b3", [1, -1, 7, -6, -5, 6]);
    design.addPosition("b4", [1, -1, 7, -6, -5, 6]);
    design.addPosition("b5", [1, -1, 7, -6, -5, 6]);
    design.addPosition("b6", [0, -1, 7, -6, 0, 6]);
    design.addPosition("c1", [1, 0, 8, 0, -6, 7]);
    design.addPosition("c2", [1, -1, 8, -7, -6, 7]);
    design.addPosition("c3", [1, -1, 8, -7, -6, 7]);
    design.addPosition("c4", [1, -1, 8, -7, -6, 7]);
    design.addPosition("c5", [1, -1, 8, -7, -6, 7]);
    design.addPosition("c6", [1, -1, 8, -7, -6, 7]);
    design.addPosition("c7", [0, -1, 8, -7, 0, 7]);
    design.addPosition("d1", [1, 0, 9, 0, -7, 8]);
    design.addPosition("d2", [1, -1, 9, -8, -7, 8]);
    design.addPosition("d3", [1, -1, 9, -8, -7, 8]);
    design.addPosition("d4", [1, -1, 9, -8, -7, 8]);
    design.addPosition("d5", [1, -1, 9, -8, -7, 8]);
    design.addPosition("d6", [1, -1, 9, -8, -7, 8]);
    design.addPosition("d7", [1, -1, 9, -8, -7, 8]);
    design.addPosition("d8", [0, -1, 9, -8, 0, 8]);
    design.addPosition("e1", [1, 0, 9, 0, -8, 0]);
    design.addPosition("e2", [1, -1, 9, -9, -8, 8]);
    design.addPosition("e3", [1, -1, 9, -9, -8, 8]);
    design.addPosition("e4", [1, -1, 9, -9, -8, 8]);
    design.addPosition("e5", [1, -1, 9, -9, -8, 8]);
    design.addPosition("e6", [1, -1, 9, -9, -8, 8]);
    design.addPosition("e7", [1, -1, 9, -9, -8, 8]);
    design.addPosition("e8", [1, -1, 9, -9, -8, 8]);
    design.addPosition("e9", [0, -1, 0, -9, 0, 8]);
    design.addPosition("f1", [1, 0, 8, -9, -8, 0]);
    design.addPosition("f2", [1, -1, 8, -9, -8, 7]);
    design.addPosition("f3", [1, -1, 8, -9, -8, 7]);
    design.addPosition("f4", [1, -1, 8, -9, -8, 7]);
    design.addPosition("f5", [1, -1, 8, -9, -8, 7]);
    design.addPosition("f6", [1, -1, 8, -9, -8, 7]);
    design.addPosition("f7", [1, -1, 8, -9, -8, 7]);
    design.addPosition("f8", [0, -1, 0, -9, -8, 7]);
    design.addPosition("g1", [1, 0, 7, -8, -7, 0]);
    design.addPosition("g2", [1, -1, 7, -8, -7, 6]);
    design.addPosition("g3", [1, -1, 7, -8, -7, 6]);
    design.addPosition("g4", [1, -1, 7, -8, -7, 6]);
    design.addPosition("g5", [1, -1, 7, -8, -7, 6]);
    design.addPosition("g6", [1, -1, 7, -8, -7, 6]);
    design.addPosition("g7", [0, -1, 0, -8, -7, 6]);
    design.addPosition("h1", [1, 0, 6, -7, -6, 0]);
    design.addPosition("h2", [1, -1, 6, -7, -6, 5]);
    design.addPosition("h3", [1, -1, 6, -7, -6, 5]);
    design.addPosition("h4", [1, -1, 6, -7, -6, 5]);
    design.addPosition("h5", [1, -1, 6, -7, -6, 5]);
    design.addPosition("h6", [0, -1, 0, -7, -6, 5]);
    design.addPosition("i1", [1, 0, 0, -6, -5, 0]);
    design.addPosition("i2", [1, -1, 0, -6, -5, 0]);
    design.addPosition("i3", [1, -1, 0, -6, -5, 0]);
    design.addPosition("i4", [1, -1, 0, -6, -5, 0]);
    design.addPosition("i5", [0, -1, 0, -6, -5, 0]);
    design.addPosition("X1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("X2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("X3", [0, 0, 0, 0, 0, 0]);
    design.addPosition("X4", [0, 0, 0, 0, 0, 0]);
    design.addPosition("X5", [0, 0, 0, 0, 0, 0]);
    design.addPosition("X6", [0, 0, 0, 0, 0, 0]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	7);
    design.addCommand(1, ZRF.FORK,	3);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.JUMP,	-8);
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addPiece("ST", 0, 60000);
    design.addMove(0, 0, [0], 6);
    design.addMove(0, 0, [1], 6);
    design.addMove(0, 0, [2], 6);
    design.addMove(0, 0, [5], 6);
    design.addMove(0, 0, [4], 6);
    design.addMove(0, 0, [3], 6);

    design.addPiece("DNN", 1, 1000);
    design.addMove(1, 1, [0, 0], 0);
    design.addMove(1, 1, [4, 4], 4);
    design.addMove(1, 1, [2, 2], 2);
    design.addMove(1, 1, [3, 3], 3);
    design.addMove(1, 1, [5, 5], 5);

    design.addPiece("DNNE", 2, 1000);
    design.addMove(2, 1, [2, 2], 2);
    design.addMove(2, 1, [0, 0], 0);
    design.addMove(2, 1, [5, 5], 5);
    design.addMove(2, 1, [4, 4], 4);
    design.addMove(2, 1, [1, 1], 1);

    design.addPiece("DNNW", 3, 1000);
    design.addMove(3, 1, [4, 4], 4);
    design.addMove(3, 1, [3, 3], 3);
    design.addMove(3, 1, [0, 0], 0);
    design.addMove(3, 1, [1, 1], 1);
    design.addMove(3, 1, [2, 2], 2);

    design.addPiece("DNS", 4, 1000);
    design.addMove(4, 1, [1, 1], 1);
    design.addMove(4, 1, [4, 4], 4);
    design.addMove(4, 1, [2, 2], 2);
    design.addMove(4, 1, [3, 3], 3);
    design.addMove(4, 1, [5, 5], 5);

    design.addPiece("DNSE", 5, 1000);
    design.addMove(5, 1, [5, 5], 5);
    design.addMove(5, 1, [2, 2], 2);
    design.addMove(5, 1, [1, 1], 1);
    design.addMove(5, 1, [3, 3], 3);
    design.addMove(5, 1, [0, 0], 0);

    design.addPiece("DNSW", 6, 1000);
    design.addMove(6, 1, [3, 3], 3);
    design.addMove(6, 1, [4, 4], 4);
    design.addMove(6, 1, [1, 1], 1);
    design.addMove(6, 1, [5, 5], 5);
    design.addMove(6, 1, [0, 0], 0);

    design.addPiece("CRN", 7, 500);
    design.addMove(7, 1, [4, 4], 4);
    design.addMove(7, 1, [2, 2], 2);
    design.addMove(7, 1, [3, 3], 3);
    design.addMove(7, 1, [5, 5], 5);

    design.addPiece("CRNE", 8, 500);
    design.addMove(8, 1, [0, 0], 0);
    design.addMove(8, 1, [5, 5], 5);
    design.addMove(8, 1, [4, 4], 4);
    design.addMove(8, 1, [1, 1], 1);

    design.addPiece("CRNW", 9, 500);
    design.addMove(9, 1, [3, 3], 3);
    design.addMove(9, 1, [0, 0], 0);
    design.addMove(9, 1, [1, 1], 1);
    design.addMove(9, 1, [2, 2], 2);

    design.addPiece("DSN", 10, 400);
    design.addMove(10, 1, [0, 0], 0);
    design.addMove(10, 1, [3, 3], 3);
    design.addMove(10, 1, [5, 5], 5);

    design.addPiece("DSS", 11, 400);
    design.addMove(11, 1, [1, 1], 1);
    design.addMove(11, 1, [4, 4], 4);
    design.addMove(11, 1, [2, 2], 2);

    design.addPiece("CTN", 12, 300);
    design.addMove(12, 1, [0, 0], 0);
    design.addMove(12, 1, [1, 1], 1);

    design.addPiece("CTNE", 13, 300);
    design.addMove(13, 1, [2, 2], 2);
    design.addMove(13, 1, [3, 3], 3);

    design.addPiece("CTNW", 14, 300);
    design.addMove(14, 1, [4, 4], 4);
    design.addMove(14, 1, [5, 5], 5);

    design.addPiece("FTN", 15, 100);
    design.addMove(15, 1, [0, 0], 0);

    design.addPiece("FTNW", 16, 100);
    design.addMove(16, 1, [4, 4], 4);

    design.addPiece("FTNE", 17, 100);
    design.addMove(17, 1, [2, 2], 2);

    design.addPiece("FTS", 18, 100);
    design.addMove(18, 1, [1, 1], 1);

    design.addPiece("FTSW", 19, 100);
    design.addMove(19, 1, [3, 3], 3);

    design.addPiece("FTSE", 20, 100);
    design.addMove(20, 1, [5, 5], 5);

    design.setup("Red", "ST", 26);
    design.setup("Red", "DNS", 27);
    design.setup("Red", "CRN", 18);
    design.setup("Red", "CRN", 35);
    design.setup("Red", "DSN", 19);
    design.setup("Red", "DSN", 36);
    design.setup("Red", "CTN", 11);
    design.setup("Red", "CTN", 43);
    design.setup("Red", "FTN", 5);
    design.setup("Red", "FTN", 12);
    design.setup("Red", "FTN", 20);
    design.setup("Red", "FTN", 28);
    design.setup("Red", "FTN", 37);
    design.setup("Red", "FTN", 44);
    design.setup("Red", "FTN", 50);
    design.setup("Blue", "ST", 34);
    design.setup("Blue", "DNN", 33);
    design.setup("Blue", "CRN", 25);
    design.setup("Blue", "CRN", 42);
    design.setup("Blue", "DSS", 24);
    design.setup("Blue", "DSS", 41);
    design.setup("Blue", "CTN", 17);
    design.setup("Blue", "CTN", 49);
    design.setup("Blue", "FTS", 10);
    design.setup("Blue", "FTS", 16);
    design.setup("Blue", "FTS", 23);
    design.setup("Blue", "FTS", 32);
    design.setup("Blue", "FTS", 40);
    design.setup("Blue", "FTS", 48);
    design.setup("Blue", "FTS", 55);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("RedST", "Red ST");
    view.defPiece("BlueST", "Blue ST");
    view.defPiece("RedDNN", "Red DNN");
    view.defPiece("BlueDNN", "Blue DNN");
    view.defPiece("RedDNNE", "Red DNNE");
    view.defPiece("BlueDNNE", "Blue DNNE");
    view.defPiece("RedDNNW", "Red DNNW");
    view.defPiece("BlueDNNW", "Blue DNNW");
    view.defPiece("RedDNS", "Red DNS");
    view.defPiece("BlueDNS", "Blue DNS");
    view.defPiece("RedDNSE", "Red DNSE");
    view.defPiece("BlueDNSE", "Blue DNSE");
    view.defPiece("RedDNSW", "Red DNSW");
    view.defPiece("BlueDNSW", "Blue DNSW");
    view.defPiece("RedCRN", "Red CRN");
    view.defPiece("BlueCRN", "Blue CRN");
    view.defPiece("RedCRNE", "Red CRNE");
    view.defPiece("BlueCRNE", "Blue CRNE");
    view.defPiece("RedCRNW", "Red CRNW");
    view.defPiece("BlueCRNW", "Blue CRNW");
    view.defPiece("RedDSN", "Red DSN");
    view.defPiece("BlueDSN", "Blue DSN");
    view.defPiece("RedDSS", "Red DSS");
    view.defPiece("BlueDSS", "Blue DSS");
    view.defPiece("RedCTN", "Red CTN");
    view.defPiece("BlueCTN", "Blue CTN");
    view.defPiece("RedCTNE", "Red CTNE");
    view.defPiece("BlueCTNE", "Blue CTNE");
    view.defPiece("RedCTNW", "Red CTNW");
    view.defPiece("BlueCTNW", "Blue CTNW");
    view.defPiece("RedFTN", "Red FTN");
    view.defPiece("BlueFTN", "Blue FTN");
    view.defPiece("RedFTNW", "Red FTNW");
    view.defPiece("BlueFTNW", "Blue FTNW");
    view.defPiece("RedFTNE", "Red FTNE");
    view.defPiece("BlueFTNE", "Blue FTNE");
    view.defPiece("RedFTS", "Red FTS");
    view.defPiece("BlueFTS", "Blue FTS");
    view.defPiece("RedFTSW", "Red FTSW");
    view.defPiece("BlueFTSW", "Blue FTSW");
    view.defPiece("RedFTSE", "Red FTSE");
    view.defPiece("BlueFTSE", "Blue FTSE");
 
    view.defPosition("a1", 6, 245, 31, 31);
    view.defPosition("a2", 6, 205, 31, 31);
    view.defPosition("a3", 6, 165, 31, 31);
    view.defPosition("a4", 6, 125, 31, 31);
    view.defPosition("a5", 6, 85, 31, 31);
    view.defPosition("b1", 39, 265, 31, 31);
    view.defPosition("b2", 39, 225, 31, 31);
    view.defPosition("b3", 39, 185, 31, 31);
    view.defPosition("b4", 39, 145, 31, 31);
    view.defPosition("b5", 39, 105, 31, 31);
    view.defPosition("b6", 39, 65, 31, 31);
    view.defPosition("c1", 72, 285, 31, 31);
    view.defPosition("c2", 72, 245, 31, 31);
    view.defPosition("c3", 72, 205, 31, 31);
    view.defPosition("c4", 72, 165, 31, 31);
    view.defPosition("c5", 72, 125, 31, 31);
    view.defPosition("c6", 72, 85, 31, 31);
    view.defPosition("c7", 72, 45, 31, 31);
    view.defPosition("d1", 105, 305, 31, 31);
    view.defPosition("d2", 105, 265, 31, 31);
    view.defPosition("d3", 105, 225, 31, 31);
    view.defPosition("d4", 105, 185, 31, 31);
    view.defPosition("d5", 105, 145, 31, 31);
    view.defPosition("d6", 105, 105, 31, 31);
    view.defPosition("d7", 105, 65, 31, 31);
    view.defPosition("d8", 105, 25, 31, 31);
    view.defPosition("e1", 138, 325, 31, 31);
    view.defPosition("e2", 138, 285, 31, 31);
    view.defPosition("e3", 138, 245, 31, 31);
    view.defPosition("e4", 138, 205, 31, 31);
    view.defPosition("e5", 138, 165, 31, 31);
    view.defPosition("e6", 138, 125, 31, 31);
    view.defPosition("e7", 138, 85, 31, 31);
    view.defPosition("e8", 138, 45, 31, 31);
    view.defPosition("e9", 138, 5, 31, 31);
    view.defPosition("f1", 171, 305, 31, 31);
    view.defPosition("f2", 171, 265, 31, 31);
    view.defPosition("f3", 171, 225, 31, 31);
    view.defPosition("f4", 171, 185, 31, 31);
    view.defPosition("f5", 171, 145, 31, 31);
    view.defPosition("f6", 171, 105, 31, 31);
    view.defPosition("f7", 171, 65, 31, 31);
    view.defPosition("f8", 171, 25, 31, 31);
    view.defPosition("g1", 204, 285, 31, 31);
    view.defPosition("g2", 204, 245, 31, 31);
    view.defPosition("g3", 204, 205, 31, 31);
    view.defPosition("g4", 204, 165, 31, 31);
    view.defPosition("g5", 204, 125, 31, 31);
    view.defPosition("g6", 204, 85, 31, 31);
    view.defPosition("g7", 204, 45, 31, 31);
    view.defPosition("h1", 237, 265, 31, 31);
    view.defPosition("h2", 237, 225, 31, 31);
    view.defPosition("h3", 237, 185, 31, 31);
    view.defPosition("h4", 237, 145, 31, 31);
    view.defPosition("h5", 237, 105, 31, 31);
    view.defPosition("h6", 237, 65, 31, 31);
    view.defPosition("i1", 270, 245, 31, 31);
    view.defPosition("i2", 270, 205, 31, 31);
    view.defPosition("i3", 270, 165, 31, 31);
    view.defPosition("i4", 270, 125, 31, 31);
    view.defPosition("i5", 270, 85, 31, 31);

    view.defPopup("Promote-6", 12, 108);
    view.defPopupPosition("X1", 5, 7, 48, 48);
    view.defPopupPosition("X2", 50, 7, 48, 48);
    view.defPopupPosition("X3", 95, 7, 48, 48);
    view.defPopupPosition("X4", 140, 7, 48, 48);
    view.defPopupPosition("X5", 185, 7, 48, 48);
    view.defPopupPosition("X6", 230, 7, 48, 48);

    view.defPopup("Promote-3", 80, 108);
    view.defPopupPosition("X1", 5, 7, 48, 48);
    view.defPopupPosition("X2", 50, 7, 48, 48);
    view.defPopupPosition("X3", 95, 7, 48, 48);

    view.defPopup("Promote-2", 103, 108);
    view.defPopupPosition("X1", 5, 7, 48, 48);
    view.defPopupPosition("X2", 50, 7, 48, 48);
}
