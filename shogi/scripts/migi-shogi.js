Dagaz.Model.WIDTH         = 5;
Dagaz.Model.HEIGHT        = 5;

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
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");

    design.addDirection("se");
    design.addDirection("s");
    design.addDirection("sw");
    design.addDirection("e");
    design.addDirection("w");
    design.addDirection("ne");
    design.addDirection("nw");
    design.addDirection("n");

    design.addPlayer("South", [6, 7, 5, 4, 3, 2, 0, 1]);
    design.addPlayer("North", [6, 7, 5, 4, 3, 2, 0, 1]);

    design.addPosition("a5", [6, 5, 0, 1, 0, 0, 0, 0]);
    design.addPosition("b5", [6, 5, 4, 1, -1, 0, 0, 0]);
    design.addPosition("c5", [6, 5, 4, 1, -1, 0, 0, 0]);
    design.addPosition("d5", [6, 5, 4, 1, -1, 0, 0, 0]);
    design.addPosition("e5", [0, 5, 4, 0, -1, 0, 0, 0]);
    design.addPosition("a4", [6, 5, 0, 1, 0, -4, 0, -5]);
    design.addPosition("b4", [6, 5, 4, 1, -1, -4, -6, -5]);
    design.addPosition("c4", [6, 5, 4, 1, -1, -4, -6, -5]);
    design.addPosition("d4", [6, 5, 4, 1, -1, -4, -6, -5]);
    design.addPosition("e4", [0, 5, 4, 0, -1, 0, -6, -5]);
    design.addPosition("a3", [6, 5, 0, 1, 0, -4, 0, -5]);
    design.addPosition("b3", [6, 5, 4, 1, -1, -4, -6, -5]);
    design.addPosition("c3", [6, 5, 4, 1, -1, -4, -6, -5]);
    design.addPosition("d3", [6, 5, 4, 1, -1, -4, -6, -5]);
    design.addPosition("e3", [0, 5, 4, 0, -1, 0, -6, -5]);
    design.addPosition("a2", [6, 5, 0, 1, 0, -4, 0, -5]);
    design.addPosition("b2", [6, 5, 4, 1, -1, -4, -6, -5]);
    design.addPosition("c2", [6, 5, 4, 1, -1, -4, -6, -5]);
    design.addPosition("d2", [6, 5, 4, 1, -1, -4, -6, -5]);
    design.addPosition("e2", [0, 5, 4, 0, -1, 0, -6, -5]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -4, 0, -5]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -4, -6, -5]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -4, -6, -5]);
    design.addPosition("d1", [0, 0, 0, 1, -1, -4, -6, -5]);
    design.addPosition("e1", [0, 0, 0, 0, -1, 0, -6, -5]);

    design.addZone("board-zone", 1, [20, 21, 22, 23, 24, 15, 16, 17, 18, 19, 10, 11, 12, 13, 14, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4]);
    design.addZone("board-zone", 2, [20, 21, 22, 23, 24, 15, 16, 17, 18, 19, 10, 11, 12, 13, 14, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	4);
    design.addCommand(0, ZRF.PROMOTE,	0);	// King
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.JUMP,	2);
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	4);
    design.addCommand(1, ZRF.PROMOTE,	7);	// Rook
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.JUMP,	2);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	4);
    design.addCommand(2, ZRF.PROMOTE,	6);	// Lance
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.JUMP,	2);
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	4);
    design.addCommand(3, ZRF.PROMOTE,	5);	// Knight
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.JUMP,	2);
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	4);
    design.addCommand(4, ZRF.PROMOTE,	8);	// Pawn
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.JUMP,	2);
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.PARAM,	1);	// $2
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	4);
    design.addCommand(5, ZRF.PROMOTE,	6);	// nw
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.JUMP,	2);
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.PARAM,	1);	// $2
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.IF,	4);
    design.addCommand(6, ZRF.PROMOTE,	5);	// ne
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.JUMP,	2);
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	0);	// $1
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	7);
    design.addCommand(7, ZRF.FORK,	3);
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end
    design.addCommand(7, ZRF.PARAM,	1);	// $2
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.JUMP,	-8);
    design.addCommand(7, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PROMOTE,	2);	// Gold
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	0);	// $1
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.IF,	7);
    design.addCommand(8, ZRF.FORK,	3);
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end
    design.addCommand(8, ZRF.PARAM,	1);	// $2
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.JUMP,	-8);
    design.addCommand(8, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PROMOTE,	1);	// Prince
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end

    design.addCommand(9, ZRF.FUNCTION,	24);	// from
    design.addCommand(9, ZRF.IN_ZONE,	0);	// board-zone
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.PARAM,	0);	// $1
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.IF,	4);
    design.addCommand(9, ZRF.PROMOTE,	4);	// Copper
    design.addCommand(9, ZRF.FUNCTION,	25);	// to
    design.addCommand(9, ZRF.JUMP,	2);
    design.addCommand(9, ZRF.FUNCTION,	25);	// to
    design.addCommand(9, ZRF.FUNCTION,	28);	// end

    design.addPiece("King", 0);
    design.addMove(0, 0, [7], 0);
    design.addMove(0, 0, [6], 0);
    design.addMove(0, 0, [1], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [5], 0);

    design.addPiece("Prince", 1);
    design.addMove(1, 1, [7], 0);
    design.addMove(1, 1, [6], 0);
    design.addMove(1, 1, [1], 0);
    design.addMove(1, 1, [0], 0);
    design.addMove(1, 1, [4], 0);
    design.addMove(1, 1, [2], 0);
    design.addMove(1, 1, [3], 0);
    design.addMove(1, 1, [5], 0);

    design.addPiece("Gold", 2);
    design.addMove(2, 2, [7], 0);
    design.addMove(2, 2, [6], 0);
    design.addMove(2, 2, [1], 0);
    design.addMove(2, 2, [5], 0);
    design.addMove(2, 2, [4], 0);
    design.addMove(2, 2, [3], 0);

    design.addPiece("Silver", 3);
    design.addMove(3, 3, [6], 0);
    design.addMove(3, 3, [2], 0);
    design.addMove(3, 3, [0], 0);
    design.addMove(3, 3, [5], 0);
    design.addMove(3, 3, [7], 0);

    design.addPiece("Copper", 4);
    design.addMove(4, 4, [7], 0);
    design.addMove(4, 4, [6], 0);
    design.addMove(4, 4, [1], 0);
    design.addMove(4, 4, [5], 0);

    design.addPiece("Knight", 5);
    design.addMove(5, 5, [7, 6], 0);
    design.addMove(5, 6, [7, 5], 0);

    design.addPiece("Lance", 6);
    design.addMove(6, 7, [7, 7], 0);

    design.addPiece("Rook", 7);
    design.addMove(7, 8, [7, 7], 0);
    design.addMove(7, 8, [3, 3], 0);
    design.addMove(7, 8, [4, 4], 0);
    design.addMove(7, 8, [1, 1], 0);

    design.addPiece("Pawn", 8);
    design.addMove(8, 9, [7], 0);

    design.setup("South", "King", 22);
    design.setup("North", "King", 2);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("SouthKing", "South King");
    view.defPiece("NorthKing", "North King");
    view.defPiece("SouthPrince", "South Prince");
    view.defPiece("NorthPrince", "North Prince");
    view.defPiece("SouthGold", "South Gold");
    view.defPiece("NorthGold", "North Gold");
    view.defPiece("SouthSilver", "South Silver");
    view.defPiece("NorthSilver", "North Silver");
    view.defPiece("SouthCopper", "South Copper");
    view.defPiece("NorthCopper", "North Copper");
    view.defPiece("SouthKnight", "South Knight");
    view.defPiece("NorthKnight", "North Knight");
    view.defPiece("SouthLance", "South Lance");
    view.defPiece("NorthLance", "North Lance");
    view.defPiece("SouthRook", "South Rook");
    view.defPiece("NorthRook", "North Rook");
    view.defPiece("SouthPawn", "South Pawn");
    view.defPiece("NorthPawn", "North Pawn");
 
    view.defPosition("a5", 77, 30, 102, 102);
    view.defPosition("b5", 209, 30, 102, 102);
    view.defPosition("c5", 341, 30, 102, 102);
    view.defPosition("d5", 473, 30, 102, 102);
    view.defPosition("e5", 605, 30, 102, 102);
    view.defPosition("a4", 77, 162, 102, 102);
    view.defPosition("b4", 209, 162, 102, 102);
    view.defPosition("c4", 341, 162, 102, 102);
    view.defPosition("d4", 473, 162, 102, 102);
    view.defPosition("e4", 605, 162, 102, 102);
    view.defPosition("a3", 77, 294, 102, 102);
    view.defPosition("b3", 209, 294, 102, 102);
    view.defPosition("c3", 341, 294, 102, 102);
    view.defPosition("d3", 473, 294, 102, 102);
    view.defPosition("e3", 605, 294, 102, 102);
    view.defPosition("a2", 77, 426, 102, 102);
    view.defPosition("b2", 209, 426, 102, 102);
    view.defPosition("c2", 341, 426, 102, 102);
    view.defPosition("d2", 473, 426, 102, 102);
    view.defPosition("e2", 605, 426, 102, 102);
    view.defPosition("a1", 77, 558, 102, 102);
    view.defPosition("b1", 209, 558, 102, 102);
    view.defPosition("c1", 341, 558, 102, 102);
    view.defPosition("d1", 473, 558, 102, 102);
    view.defPosition("e1", 605, 558, 102, 102);
}
