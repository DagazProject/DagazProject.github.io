Dagaz.Controller.persistense = "setup";

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
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "false");

    design.addDirection("e");
    design.addDirection("w");
    design.addDirection("ne");
    design.addDirection("sw");
    design.addDirection("nw");
    design.addDirection("se");

    design.addPlayer("Red", [1, 0, 3, 2, 5, 4]);
    design.addPlayer("Blue", [0, 1, 2, 3, 4, 5]);

    design.addPosition("a4", [1, 0, 0, 8, 0, 9]);
    design.addPosition("b4", [1, -1, 0, 8, 0, 9]);
    design.addPosition("c4", [1, -1, 0, 8, 0, 9]);
    design.addPosition("d4", [0, -1, 0, 8, 0, 0]);
    design.addPosition("a2", [1, 0, 5, 8, 4, 9]);
    design.addPosition("b2", [1, -1, 5, 8, 4, 9]);
    design.addPosition("c2", [1, -1, 5, 8, 4, 9]);
    design.addPosition("d2", [0, -1, 0, 8, 4, 0]);
    design.addPosition("a3", [1, 0, -8, 0, 0, -4]);
    design.addPosition("b3", [1, -1, -8, -5, -9, -4]);
    design.addPosition("c3", [1, -1, -8, -5, -9, -4]);
    design.addPosition("d3", [0, -1, -8, -5, -9, -4]);
    design.addPosition("a1", [1, 0, -8, 0, 0, 0]);
    design.addPosition("b1", [1, -1, -8, 0, -9, 0]);
    design.addPosition("c1", [1, -1, -8, 0, -9, 0]);
    design.addPosition("d1", [0, -1, -8, 0, -9, 0]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.PROMOTE,	2);	// RockKing
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PROMOTE,	3);	// RockKingDamaged
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PROMOTE,	4);	// ScissorsKing
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PROMOTE,	5);	// ScissorsKingDamaged
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PROMOTE,	0);	// PaperKing
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PROMOTE,	1);	// PaperKingDamaged
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PROMOTE,	8);	// RockMan
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.PARAM,	0);	// $1
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PROMOTE,	9);	// RockManDamaged
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.PARAM,	0);	// $1
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PROMOTE,	10);	// ScissorsMan
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end

    design.addCommand(9, ZRF.FUNCTION,	24);	// from
    design.addCommand(9, ZRF.PARAM,	0);	// $1
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.PROMOTE,	11);	// ScissorsManDamaged
    design.addCommand(9, ZRF.FUNCTION,	25);	// to
    design.addCommand(9, ZRF.FUNCTION,	28);	// end

    design.addCommand(10, ZRF.FUNCTION,	24);	// from
    design.addCommand(10, ZRF.PARAM,	0);	// $1
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(10, ZRF.FUNCTION,	0);	// not
    design.addCommand(10, ZRF.FUNCTION,	20);	// verify
    design.addCommand(10, ZRF.PROMOTE,	6);	// PaperMan
    design.addCommand(10, ZRF.FUNCTION,	25);	// to
    design.addCommand(10, ZRF.FUNCTION,	28);	// end

    design.addCommand(11, ZRF.FUNCTION,	24);	// from
    design.addCommand(11, ZRF.PARAM,	0);	// $1
    design.addCommand(11, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(11, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(11, ZRF.FUNCTION,	0);	// not
    design.addCommand(11, ZRF.FUNCTION,	20);	// verify
    design.addCommand(11, ZRF.PROMOTE,	7);	// PaperManDamaged
    design.addCommand(11, ZRF.FUNCTION,	25);	// to
    design.addCommand(11, ZRF.FUNCTION,	28);	// end

    design.addCommand(12, ZRF.FUNCTION,	24);	// from
    design.addCommand(12, ZRF.PARAM,	0);	// $1
    design.addCommand(12, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(12, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(12, ZRF.FUNCTION,	0);	// not
    design.addCommand(12, ZRF.FUNCTION,	20);	// verify
    design.addCommand(12, ZRF.PROMOTE,	14);	// RockQueen
    design.addCommand(12, ZRF.FUNCTION,	25);	// to
    design.addCommand(12, ZRF.FUNCTION,	28);	// end

    design.addCommand(13, ZRF.FUNCTION,	24);	// from
    design.addCommand(13, ZRF.PARAM,	0);	// $1
    design.addCommand(13, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(13, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(13, ZRF.FUNCTION,	0);	// not
    design.addCommand(13, ZRF.FUNCTION,	20);	// verify
    design.addCommand(13, ZRF.PROMOTE,	15);	// RockQueenDamaged
    design.addCommand(13, ZRF.FUNCTION,	25);	// to
    design.addCommand(13, ZRF.FUNCTION,	28);	// end

    design.addCommand(14, ZRF.FUNCTION,	24);	// from
    design.addCommand(14, ZRF.PARAM,	0);	// $1
    design.addCommand(14, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(14, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(14, ZRF.FUNCTION,	0);	// not
    design.addCommand(14, ZRF.FUNCTION,	20);	// verify
    design.addCommand(14, ZRF.PROMOTE,	16);	// ScissorsQueen
    design.addCommand(14, ZRF.FUNCTION,	25);	// to
    design.addCommand(14, ZRF.FUNCTION,	28);	// end

    design.addCommand(15, ZRF.FUNCTION,	24);	// from
    design.addCommand(15, ZRF.PARAM,	0);	// $1
    design.addCommand(15, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(15, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(15, ZRF.FUNCTION,	0);	// not
    design.addCommand(15, ZRF.FUNCTION,	20);	// verify
    design.addCommand(15, ZRF.PROMOTE,	17);	// ScissorsQueenDamaged
    design.addCommand(15, ZRF.FUNCTION,	25);	// to
    design.addCommand(15, ZRF.FUNCTION,	28);	// end

    design.addCommand(16, ZRF.FUNCTION,	24);	// from
    design.addCommand(16, ZRF.PARAM,	0);	// $1
    design.addCommand(16, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(16, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(16, ZRF.FUNCTION,	0);	// not
    design.addCommand(16, ZRF.FUNCTION,	20);	// verify
    design.addCommand(16, ZRF.PROMOTE,	12);	// PaperQueen
    design.addCommand(16, ZRF.FUNCTION,	25);	// to
    design.addCommand(16, ZRF.FUNCTION,	28);	// end

    design.addCommand(17, ZRF.FUNCTION,	24);	// from
    design.addCommand(17, ZRF.PARAM,	0);	// $1
    design.addCommand(17, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(17, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(17, ZRF.FUNCTION,	0);	// not
    design.addCommand(17, ZRF.FUNCTION,	20);	// verify
    design.addCommand(17, ZRF.PROMOTE,	13);	// PaperQueenDamaged
    design.addCommand(17, ZRF.FUNCTION,	25);	// to
    design.addCommand(17, ZRF.FUNCTION,	28);	// end

    design.addPiece("PaperKing", 0, 20001);
    design.addMove(0, 0, [4], 1);
    design.addMove(0, 0, [3], 1);
    design.addMove(0, 0, [1], 1);
    design.addMove(0, 0, [2], 1);
    design.addMove(0, 0, [5], 1);
    design.addMove(0, 0, [0], 1);

    design.addPiece("PaperKingDamaged", 1, 10001);
    design.addMove(1, 1, [4], 1);
    design.addMove(1, 1, [3], 1);
    design.addMove(1, 1, [1], 1);
    design.addMove(1, 1, [2], 1);
    design.addMove(1, 1, [5], 1);
    design.addMove(1, 1, [0], 1);

    design.addPiece("RockKing", 2, 20002);
    design.addMove(2, 2, [4], 2);
    design.addMove(2, 2, [3], 2);
    design.addMove(2, 2, [1], 2);
    design.addMove(2, 2, [2], 2);
    design.addMove(2, 2, [5], 2);
    design.addMove(2, 2, [0], 2);

    design.addPiece("RockKingDamaged", 3, 10002);
    design.addMove(3, 3, [4], 2);
    design.addMove(3, 3, [3], 2);
    design.addMove(3, 3, [1], 2);
    design.addMove(3, 3, [2], 2);
    design.addMove(3, 3, [5], 2);
    design.addMove(3, 3, [0], 2);

    design.addPiece("ScissorsKing", 4, 20003);
    design.addMove(4, 4, [4], 3);
    design.addMove(4, 4, [3], 3);
    design.addMove(4, 4, [1], 3);
    design.addMove(4, 4, [2], 3);
    design.addMove(4, 4, [5], 3);
    design.addMove(4, 4, [0], 3);

    design.addPiece("ScissorsKingDamaged", 5, 10003);
    design.addMove(5, 5, [4], 3);
    design.addMove(5, 5, [3], 3);
    design.addMove(5, 5, [1], 3);
    design.addMove(5, 5, [2], 3);
    design.addMove(5, 5, [5], 3);
    design.addMove(5, 5, [0], 3);

    design.addPiece("PaperMan", 6, 101);
    design.addMove(6, 6, [4], 1);
    design.addMove(6, 6, [3], 1);
    design.addMove(6, 6, [1], 1);
    design.addMove(6, 6, [2], 1);
    design.addMove(6, 6, [5], 1);
    design.addMove(6, 6, [0], 1);

    design.addPiece("PaperManDamaged", 7, 101);
    design.addMove(7, 7, [4], 1);
    design.addMove(7, 7, [3], 1);
    design.addMove(7, 7, [1], 1);
    design.addMove(7, 7, [2], 1);
    design.addMove(7, 7, [5], 1);
    design.addMove(7, 7, [0], 1);

    design.addPiece("RockMan", 8, 102);
    design.addMove(8, 8, [4], 2);
    design.addMove(8, 8, [3], 2);
    design.addMove(8, 8, [1], 2);
    design.addMove(8, 8, [2], 2);
    design.addMove(8, 8, [5], 2);
    design.addMove(8, 8, [0], 2);

    design.addPiece("RockManDamaged", 9, 102);
    design.addMove(9, 9, [4], 2);
    design.addMove(9, 9, [3], 2);
    design.addMove(9, 9, [1], 2);
    design.addMove(9, 9, [2], 2);
    design.addMove(9, 9, [5], 2);
    design.addMove(9, 9, [0], 2);

    design.addPiece("ScissorsMan", 10, 103);
    design.addMove(10, 10, [4], 3);
    design.addMove(10, 10, [3], 3);
    design.addMove(10, 10, [1], 3);
    design.addMove(10, 10, [2], 3);
    design.addMove(10, 10, [5], 3);
    design.addMove(10, 10, [0], 3);

    design.addPiece("ScissorsManDamaged", 11, 103);
    design.addMove(11, 11, [4], 3);
    design.addMove(11, 11, [3], 3);
    design.addMove(11, 11, [1], 3);
    design.addMove(11, 11, [2], 3);
    design.addMove(11, 11, [5], 3);
    design.addMove(11, 11, [0], 3);

    design.addPiece("PaperQueen", 12, 1001);
    design.addMove(12, 12, [4], 1);
    design.addMove(12, 12, [3], 1);
    design.addMove(12, 12, [1], 1);
    design.addMove(12, 12, [2], 1);
    design.addMove(12, 12, [5], 1);
    design.addMove(12, 12, [0], 1);

    design.addPiece("PaperQueenDamaged", 13, 701);
    design.addMove(13, 13, [4], 1);
    design.addMove(13, 13, [3], 1);
    design.addMove(13, 13, [1], 1);
    design.addMove(13, 13, [2], 1);
    design.addMove(13, 13, [5], 1);
    design.addMove(13, 13, [0], 1);

    design.addPiece("RockQueen", 14, 1002);
    design.addMove(14, 14, [4], 2);
    design.addMove(14, 14, [3], 2);
    design.addMove(14, 14, [1], 2);
    design.addMove(14, 14, [2], 2);
    design.addMove(14, 14, [5], 2);
    design.addMove(14, 14, [0], 2);

    design.addPiece("RockQueenDamaged", 15, 702);
    design.addMove(15, 15, [4], 2);
    design.addMove(15, 15, [3], 2);
    design.addMove(15, 15, [1], 2);
    design.addMove(15, 15, [2], 2);
    design.addMove(15, 15, [5], 2);
    design.addMove(15, 15, [0], 2);

    design.addPiece("ScissorsQueen", 16, 1003);
    design.addMove(16, 16, [4], 3);
    design.addMove(16, 16, [3], 3);
    design.addMove(16, 16, [1], 3);
    design.addMove(16, 16, [2], 3);
    design.addMove(16, 16, [5], 3);
    design.addMove(16, 16, [0], 3);

    design.addPiece("ScissorsQueenDamaged", 17, 703);
    design.addMove(17, 17, [4], 3);
    design.addMove(17, 17, [3], 3);
    design.addMove(17, 17, [1], 3);
    design.addMove(17, 17, [2], 3);
    design.addMove(17, 17, [5], 3);
    design.addMove(17, 17, [0], 3);

    design.setup("Red", "RockMan", 12);
    design.setup("Red", "RockMan", 15);
    design.setup("Red", "ScissorsKing", 13);
    design.setup("Red", "PaperQueen", 14);
    design.setup("Blue", "RockMan", 3);
    design.setup("Blue", "RockMan", 0);
    design.setup("Blue", "ScissorsKing", 2);
    design.setup("Blue", "PaperQueen", 1);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("RedPaperKing", "Red PaperKing");
    view.defPiece("BluePaperKing", "Blue PaperKing");
    view.defPiece("RedPaperKingDamaged", "Red PaperKingDamaged");
    view.defPiece("BluePaperKingDamaged", "Blue PaperKingDamaged");
    view.defPiece("RedRockKing", "Red RockKing");
    view.defPiece("BlueRockKing", "Blue RockKing");
    view.defPiece("RedRockKingDamaged", "Red RockKingDamaged");
    view.defPiece("BlueRockKingDamaged", "Blue RockKingDamaged");
    view.defPiece("RedScissorsKing", "Red ScissorsKing");
    view.defPiece("BlueScissorsKing", "Blue ScissorsKing");
    view.defPiece("RedScissorsKingDamaged", "Red ScissorsKingDamaged");
    view.defPiece("BlueScissorsKingDamaged", "Blue ScissorsKingDamaged");
    view.defPiece("RedPaperMan", "Red PaperMan");
    view.defPiece("BluePaperMan", "Blue PaperMan");
    view.defPiece("RedPaperManDamaged", "Red PaperManDamaged");
    view.defPiece("BluePaperManDamaged", "Blue PaperManDamaged");
    view.defPiece("RedRockMan", "Red RockMan");
    view.defPiece("BlueRockMan", "Blue RockMan");
    view.defPiece("RedRockManDamaged", "Red RockManDamaged");
    view.defPiece("BlueRockManDamaged", "Blue RockManDamaged");
    view.defPiece("RedScissorsMan", "Red ScissorsMan");
    view.defPiece("BlueScissorsMan", "Blue ScissorsMan");
    view.defPiece("RedScissorsManDamaged", "Red ScissorsManDamaged");
    view.defPiece("BlueScissorsManDamaged", "Blue ScissorsManDamaged");
    view.defPiece("RedPaperQueen", "Red PaperQueen");
    view.defPiece("BluePaperQueen", "Blue PaperQueen");
    view.defPiece("RedPaperQueenDamaged", "Red PaperQueenDamaged");
    view.defPiece("BluePaperQueenDamaged", "Blue PaperQueenDamaged");
    view.defPiece("RedRockQueen", "Red RockQueen");
    view.defPiece("BlueRockQueen", "Blue RockQueen");
    view.defPiece("RedRockQueenDamaged", "Red RockQueenDamaged");
    view.defPiece("BlueRockQueenDamaged", "Blue RockQueenDamaged");
    view.defPiece("RedScissorsQueen", "Red ScissorsQueen");
    view.defPiece("BlueScissorsQueen", "Blue ScissorsQueen");
    view.defPiece("RedScissorsQueenDamaged", "Red ScissorsQueenDamaged");
    view.defPiece("BlueScissorsQueenDamaged", "Blue ScissorsQueenDamaged");
 
    view.defPosition("a4", 124, 95, 130, 113);
    view.defPosition("b4", 283, 95, 130, 113);
    view.defPosition("c4", 442, 95, 130, 113);
    view.defPosition("d4", 601, 95, 130, 113);
    view.defPosition("a2", 124, 413, 130, 113);
    view.defPosition("b2", 283, 413, 130, 113);
    view.defPosition("c2", 442, 413, 130, 113);
    view.defPosition("d2", 601, 413, 130, 113);
    view.defPosition("a3", 44, 253, 130, 113);
    view.defPosition("b3", 203, 253, 130, 113);
    view.defPosition("c3", 362, 253, 130, 113);
    view.defPosition("d3", 521, 253, 130, 113);
    view.defPosition("a1", 44, 571, 130, 113);
    view.defPosition("b1", 203, 571, 130, 113);
    view.defPosition("c1", 362, 571, 130, 113);
    view.defPosition("d1", 521, 571, 130, 113);
}
