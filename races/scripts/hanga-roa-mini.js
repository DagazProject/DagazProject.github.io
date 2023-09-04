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
    design.checkVersion("smart-moves", "to");
    design.checkVersion("show-blink", "true");
    design.checkVersion("show-hints", "false");
    design.checkVersion("highlight-goals", "false");
    design.checkVersion("pass-partial", "true");
    design.checkVersion("hanga-roa-extension", "true");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("ne");
    design.addDirection("n");
    design.addDirection("se");
    design.addDirection("sw");
    design.addDirection("nw");
    design.addDirection("next");
    design.addDirection("nb");
    design.addDirection("br");
    design.addDirection("wr");

    design.addPlayer("White", [1, 0, 4, 6, 2, 7, 3, 5, 8, 9, 10, 11]);
    design.addPlayer("Black", [0, 1, 2, 3, 4, 5, 6, 7, 9, 8, 11, 10]);

    design.addPosition("a5", [0, 1, 5, 0, 0, 6, 0, 0, 0, 1, 25, 29]);
    design.addPosition("b5", [-1, 1, 5, 0, 0, 6, 4, 0, 0, 1, 0, 0]);
    design.addPosition("c5", [-1, 1, 5, 0, 0, 6, 4, 0, 0, 1, 0, 0]);
    design.addPosition("d5", [-1, 1, 5, 0, 0, 6, 4, 0, 0, 1, 0, 0]);
    design.addPosition("e5", [-1, 0, 5, 0, 0, 0, 4, 0, 0, 0, 0, 0]);
    design.addPosition("a4", [0, 1, 5, -4, -5, 6, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b4", [-1, 1, 5, -4, -5, 6, 4, -6, 0, 0, 0, 0]);
    design.addPosition("c4", [-1, 1, 5, -4, -5, 6, 4, -6, 0, 0, 0, 0]);
    design.addPosition("d4", [-1, 1, 5, -4, -5, 6, 4, -6, 0, 0, 0, 0]);
    design.addPosition("e4", [-1, 0, 5, 0, -5, 0, 4, -6, 0, 0, 0, 0]);
    design.addPosition("a3", [0, 1, 5, -4, -5, 6, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b3", [-1, 1, 5, -4, -5, 6, 4, -6, 0, 0, 0, 0]);
    design.addPosition("c3", [-1, 1, 5, -4, -5, 6, 4, -6, 0, 0, 0, 0]);
    design.addPosition("d3", [-1, 1, 5, -4, -5, 6, 4, -6, 0, 0, 0, 0]);
    design.addPosition("e3", [-1, 0, 5, 0, -5, 0, 4, -6, 0, 0, 0, 0]);
    design.addPosition("a2", [0, 1, 5, -4, -5, 6, 0, 0, 5, -15, 0, 0]);
    design.addPosition("b2", [-1, 1, 5, -4, -5, 6, 4, -6, 0, 0, 0, 0]);
    design.addPosition("c2", [-1, 1, 5, -4, -5, 6, 4, -6, 0, 0, 0, 0]);
    design.addPosition("d2", [-1, 1, 5, -4, -5, 6, 4, -6, 0, 0, 0, 0]);
    design.addPosition("e2", [-1, 0, 5, 0, -5, 0, 4, -6, 0, 0, 0, 0]);
    design.addPosition("a1", [0, 1, 0, -4, -5, 0, 0, 0, 1, 0, 0, 0]);
    design.addPosition("b1", [-1, 1, 0, -4, -5, 0, 0, -6, 1, 0, 0, 0]);
    design.addPosition("c1", [-1, 1, 0, -4, -5, 0, 0, -6, 1, 0, 0, 0]);
    design.addPosition("d1", [-1, 1, 0, -4, -5, 0, 0, -6, 1, 0, 0, 0]);
    design.addPosition("e1", [-1, 0, 0, 0, -5, 0, 0, -6, 0, 0, 0, 0]);
    design.addPosition("X5", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0]);
    design.addPosition("X4", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0]);
    design.addPosition("X3", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    design.addPosition("X2", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1]);
    design.addPosition("X1", [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1]);

    design.addZone("reserve", 1, [29, 28, 27, 26, 25]);
    design.addZone("reserve", 2, [29, 28, 27, 26, 25]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.IN_ZONE,	0);	// reserve
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	21);	// position
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.ON_BOARD_DIR,	8);	// name
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	10);
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	4);
    design.addCommand(0, ZRF.FORK,	3);
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end
    design.addCommand(0, ZRF.PARAM,	2);	// $3
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.JUMP,	-11);
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	8);
    design.addCommand(1, ZRF.FORK,	4);
    design.addCommand(1, ZRF.MODE,	1);	// left-2-type
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.JUMP,	-9);
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.LITERAL,	0);	// Ariki
    design.addCommand(2, ZRF.FUNCTION,	11);	// create
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PROMOTE,	1);	// Stone
    design.addCommand(2, ZRF.MODE,	2);	// no-type
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.LITERAL,	0);	// Ariki
    design.addCommand(3, ZRF.FUNCTION,	11);	// create
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PROMOTE,	1);	// Stone
    design.addCommand(3, ZRF.MODE,	2);	// no-type
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.LITERAL,	0);	// Ariki
    design.addCommand(4, ZRF.FUNCTION,	11);	// create
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	2);	// $3
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PROMOTE,	1);	// Stone
    design.addCommand(4, ZRF.MODE,	2);	// no-type
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.LITERAL,	0);	// Ariki
    design.addCommand(5, ZRF.FUNCTION,	11);	// create
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	1);	// $2
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	2);	// $3
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	3);	// $4
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PROMOTE,	1);	// Stone
    design.addCommand(5, ZRF.MODE,	2);	// no-type
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.LITERAL,	1);	// Stone
    design.addCommand(6, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.MODE,	0);	// normal-type
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.PARAM,	0);	// $1
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.IF,	6);
    design.addCommand(7, ZRF.LITERAL,	1);	// Stone
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.IF,	3);
    design.addCommand(7, ZRF.LITERAL,	0);	// false
    design.addCommand(7, ZRF.JUMP,	2);
    design.addCommand(7, ZRF.LITERAL,	1);	// true
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addPriority(0);			// normal-type

    design.addPiece("Ariki", 0);
    design.addMove(0, 0, [15, 8, 8], 0);
    design.addMove(0, 1, [4, 4], 0);
    design.addMove(0, 1, [7, 7], 0);
    design.addMove(0, 1, [2, 2], 0);
    design.addMove(0, 1, [5, 5], 0);
    design.addMove(0, 1, [1, 1], 0);
    design.addMove(0, 1, [3, 3], 0);
    design.addMove(0, 1, [0, 0], 0);
    design.addMove(0, 1, [6, 6], 0);
    design.addMove(0, 2, [4], 1);
    design.addMove(0, 2, [7], 1);
    design.addMove(0, 2, [2], 1);
    design.addMove(0, 2, [5], 1);
    design.addMove(0, 2, [1], 1);
    design.addMove(0, 2, [3], 1);
    design.addMove(0, 2, [0], 1);
    design.addMove(0, 2, [6], 1);
    design.addMove(0, 3, [4, 4], 1);
    design.addMove(0, 3, [7, 7], 1);
    design.addMove(0, 3, [2, 2], 1);
    design.addMove(0, 3, [5, 5], 1);
    design.addMove(0, 3, [1, 1], 1);
    design.addMove(0, 3, [3, 3], 1);
    design.addMove(0, 3, [0, 0], 1);
    design.addMove(0, 3, [6, 6], 1);
    design.addMove(0, 4, [4, 4, 4], 1);
    design.addMove(0, 4, [7, 7, 7], 1);
    design.addMove(0, 4, [2, 2, 2], 1);
    design.addMove(0, 4, [5, 5, 5], 1);
    design.addMove(0, 4, [1, 1, 1], 1);
    design.addMove(0, 4, [3, 3, 3], 1);
    design.addMove(0, 4, [0, 0, 0], 1);
    design.addMove(0, 4, [6, 6, 6], 1);
    design.addMove(0, 5, [4, 4, 4, 4], 1);
    design.addMove(0, 5, [7, 7, 7, 7], 1);
    design.addMove(0, 5, [2, 2, 2, 2], 1);
    design.addMove(0, 5, [5, 5, 5, 5], 1);
    design.addMove(0, 5, [1, 1, 1, 1], 1);
    design.addMove(0, 5, [3, 3, 3, 3], 1);
    design.addMove(0, 5, [0, 0, 0, 0], 1);
    design.addMove(0, 5, [6, 6, 6, 6], 1);

    design.addPiece("Stone", 1);

    design.addPiece("Moai", 2);
    design.addMove(2, 6, [4], 0);
    design.addMove(2, 6, [7], 0);
    design.addMove(2, 6, [2], 0);
    design.addMove(2, 6, [5], 0);
    design.addMove(2, 6, [1], 0);
    design.addMove(2, 6, [3], 0);
    design.addMove(2, 6, [0], 0);
    design.addMove(2, 6, [6], 0);

    design.addPiece("MatoToa", 3);
    design.addMove(3, 7, [4], 0);
    design.addMove(3, 7, [7], 0);
    design.addMove(3, 7, [2], 0);
    design.addMove(3, 7, [5], 0);
    design.addMove(3, 7, [1], 0);
    design.addMove(3, 7, [3], 0);
    design.addMove(3, 7, [0], 0);
    design.addMove(3, 7, [6], 0);

    design.addPiece("MoaiCaptured", 4);

    design.setup("White", "Moai", 22);
    design.setup("White", "Ariki", 20);
    design.setup("White", "Ariki", 24);
    design.setup("White", "MatoToa", 15);
    design.setup("White", "MatoToa", 19);
    design.setup("Black", "Moai", 2);
    design.setup("Black", "Ariki", 0);
    design.setup("Black", "Ariki", 4);
    design.setup("Black", "MatoToa", 5);
    design.setup("Black", "MatoToa", 9);

    design.goal(0, "Black", "Moai", [20, 21, 22, 23, 24]);
    design.goal(1, "White", "Moai", [0, 1, 2, 3, 4]);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteAriki", "White Ariki");
    view.defPiece("BlackAriki", "Black Ariki");
    view.defPiece("WhiteStone", "White Stone");
    view.defPiece("BlackStone", "Black Stone");
    view.defPiece("WhiteMoai", "White Moai");
    view.defPiece("BlackMoai", "Black Moai");
    view.defPiece("WhiteMatoToa", "White MatoToa");
    view.defPiece("BlackMatoToa", "Black MatoToa");
    view.defPiece("WhiteMoaiCaptured", "White MoaiCaptured");
    view.defPiece("BlackMoaiCaptured", "Black MoaiCaptured");
 
    view.defPosition("a5", 2, 2, 50, 50);
    view.defPosition("b5", 52, 2, 50, 50);
    view.defPosition("c5", 102, 2, 50, 50);
    view.defPosition("d5", 152, 2, 50, 50);
    view.defPosition("e5", 202, 2, 50, 50);
    view.defPosition("a4", 2, 52, 50, 50);
    view.defPosition("b4", 52, 52, 50, 50);
    view.defPosition("c4", 102, 52, 50, 50);
    view.defPosition("d4", 152, 52, 50, 50);
    view.defPosition("e4", 202, 52, 50, 50);
    view.defPosition("a3", 2, 102, 50, 50);
    view.defPosition("b3", 52, 102, 50, 50);
    view.defPosition("c3", 102, 102, 50, 50);
    view.defPosition("d3", 152, 102, 50, 50);
    view.defPosition("e3", 202, 102, 50, 50);
    view.defPosition("a2", 2, 152, 50, 50);
    view.defPosition("b2", 52, 152, 50, 50);
    view.defPosition("c2", 102, 152, 50, 50);
    view.defPosition("d2", 152, 152, 50, 50);
    view.defPosition("e2", 202, 152, 50, 50);
    view.defPosition("a1", 2, 202, 50, 50);
    view.defPosition("b1", 52, 202, 50, 50);
    view.defPosition("c1", 102, 202, 50, 50);
    view.defPosition("d1", 152, 202, 50, 50);
    view.defPosition("e1", 202, 202, 50, 50);
    view.defPosition("X5", 252, 2, 50, 50);
    view.defPosition("X4", 252, 52, 50, 50);
    view.defPosition("X3", 252, 102, 50, 50);
    view.defPosition("X2", 252, 152, 50, 50);
    view.defPosition("X1", 252, 202, 50, 50);
}
