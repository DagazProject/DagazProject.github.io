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

    design.addDirection("w");  // 0
    design.addDirection("e");  // 1
    design.addDirection("s");  // 2
    design.addDirection("ne"); // 3
    design.addDirection("n");  // 4
    design.addDirection("se"); // 5
    design.addDirection("sw"); // 6
    design.addDirection("nw"); // 7

    design.addPlayer("Blue", [1, 0, 4, 6, 2, 7, 3, 5]);
    design.addPlayer("Red", [0, 1, 2, 3, 4, 5, 6, 7]);

    design.addPosition("a5", [0, 1, 5, 0, 0, 6, 0, 0]);
    design.addPosition("b5", [-1, 1, 5, 0, 0, 6, 4, 0]);
    design.addPosition("c5", [-1, 1, 5, 0, 0, 6, 4, 0]);
    design.addPosition("d5", [-1, 1, 5, 0, 0, 6, 4, 0]);
    design.addPosition("e5", [-1, 0, 5, 0, 0, 0, 4, 0]);
    design.addPosition("a4", [0, 1, 5, -4, -5, 6, 0, 0]);
    design.addPosition("b4", [-1, 1, 5, -4, -5, 6, 4, -6]);
    design.addPosition("c4", [-1, 1, 5, -4, -5, 6, 4, -6]);
    design.addPosition("d4", [-1, 1, 5, -4, -5, 6, 4, -6]);
    design.addPosition("e4", [-1, 0, 5, 0, -5, 0, 4, -6]);
    design.addPosition("a3", [0, 1, 5, -4, -5, 6, 0, 0]);
    design.addPosition("b3", [-1, 1, 5, -4, -5, 6, 4, -6]);
    design.addPosition("c3", [-1, 1, 5, -4, -5, 6, 4, -6]);
    design.addPosition("d3", [-1, 1, 5, -4, -5, 6, 4, -6]);
    design.addPosition("e3", [-1, 0, 5, 0, -5, 0, 4, -6]);
    design.addPosition("a2", [0, 1, 5, -4, -5, 6, 0, 0]);
    design.addPosition("b2", [-1, 1, 5, -4, -5, 6, 4, -6]);
    design.addPosition("c2", [-1, 1, 5, -4, -5, 6, 4, -6]);
    design.addPosition("d2", [-1, 1, 5, -4, -5, 6, 4, -6]);
    design.addPosition("e2", [-1, 0, 5, 0, -5, 0, 4, -6]);
    design.addPosition("a1", [0, 1, 0, -4, -5, 0, 0, 0]);
    design.addPosition("b1", [-1, 1, 0, -4, -5, 0, 0, -6]);
    design.addPosition("c1", [-1, 1, 0, -4, -5, 0, 0, -6]);
    design.addPosition("d1", [-1, 1, 0, -4, -5, 0, 0, -6]);
    design.addPosition("e1", [-1, 0, 0, 0, -5, 0, 0, -6]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	4);
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.JUMP,	-5);
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.IF,	11);
    design.addCommand(1, ZRF.LITERAL,	2);	// Scissors
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.IF,	6);
    design.addCommand(1, ZRF.LITERAL,	3);	// Lizard
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.IF,	3);
    design.addCommand(1, ZRF.LITERAL,	0);	// false
    design.addCommand(1, ZRF.JUMP,	2);
    design.addCommand(1, ZRF.LITERAL,	1);	// true
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.IF,	5);
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.IF,	3);
    design.addCommand(2, ZRF.LITERAL,	0);	// false
    design.addCommand(2, ZRF.JUMP,	2);
    design.addCommand(2, ZRF.LITERAL,	1);	// true
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	10);
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	4);
    design.addCommand(2, ZRF.FORK,	3);
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.JUMP,	-17);
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.IF,	11);
    design.addCommand(2, ZRF.LITERAL,	3);	// Lizard
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.IF,	6);
    design.addCommand(2, ZRF.LITERAL,	4);	// Paper
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.IF,	3);
    design.addCommand(2, ZRF.LITERAL,	0);	// false
    design.addCommand(2, ZRF.JUMP,	2);
    design.addCommand(2, ZRF.LITERAL,	1);	// true
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.IF,	5);
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.IF,	3);
    design.addCommand(3, ZRF.LITERAL,	0);	// false
    design.addCommand(3, ZRF.JUMP,	2);
    design.addCommand(3, ZRF.LITERAL,	1);	// true
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	10);
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	4);
    design.addCommand(3, ZRF.FORK,	3);
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.JUMP,	-17);
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.IF,	11);
    design.addCommand(3, ZRF.LITERAL,	4);	// Paper
    design.addCommand(3, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(3, ZRF.IF,	6);
    design.addCommand(3, ZRF.LITERAL,	0);	// Spock
    design.addCommand(3, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(3, ZRF.IF,	3);
    design.addCommand(3, ZRF.LITERAL,	0);	// false
    design.addCommand(3, ZRF.JUMP,	2);
    design.addCommand(3, ZRF.LITERAL,	1);	// true
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.IF,	5);
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.IF,	3);
    design.addCommand(4, ZRF.LITERAL,	0);	// false
    design.addCommand(4, ZRF.JUMP,	2);
    design.addCommand(4, ZRF.LITERAL,	1);	// true
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	10);
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	4);
    design.addCommand(4, ZRF.FORK,	3);
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.JUMP,	-17);
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.IF,	11);
    design.addCommand(4, ZRF.LITERAL,	0);	// Spock
    design.addCommand(4, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(4, ZRF.IF,	6);
    design.addCommand(4, ZRF.LITERAL,	1);	// Rock
    design.addCommand(4, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(4, ZRF.IF,	3);
    design.addCommand(4, ZRF.LITERAL,	0);	// false
    design.addCommand(4, ZRF.JUMP,	2);
    design.addCommand(4, ZRF.LITERAL,	1);	// true
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addPiece("Spock", 0, 600000);
    design.addMove(0, 0, [4, 7], 0);
    design.addMove(0, 0, [4, 3], 0);
    design.addMove(0, 0, [2, 6], 0);
    design.addMove(0, 0, [2, 5], 0);
    design.addMove(0, 0, [0, 7], 0);
    design.addMove(0, 0, [0, 6], 0);
    design.addMove(0, 0, [1, 3], 0);
    design.addMove(0, 0, [1, 5], 0);

    design.addPiece("Rock", 1, 800);
    design.addMove(1, 1, [4, 4], 0);
    design.addMove(1, 1, [7, 7], 0);
    design.addMove(1, 1, [2, 2], 0);
    design.addMove(1, 1, [5, 5], 0);
    design.addMove(1, 1, [0, 0], 0);
    design.addMove(1, 1, [6, 6], 0);
    design.addMove(1, 1, [1, 1], 0);
    design.addMove(1, 1, [3, 3], 0);

    design.addPiece("Scissors", 2, 2000);
    design.addMove(2, 2, [7, 7], 0);
    design.addMove(2, 2, [5, 5], 0);
    design.addMove(2, 2, [6, 6], 0);
    design.addMove(2, 2, [3, 3], 0);

    design.addPiece("Lizard", 3, 5000);
    design.addMove(3, 3, [4, 4], 0);
    design.addMove(3, 3, [7, 7], 0);
    design.addMove(3, 3, [2, 2], 0);
    design.addMove(3, 3, [5, 5], 0);
    design.addMove(3, 3, [0, 0], 0);
    design.addMove(3, 3, [6, 6], 0);
    design.addMove(3, 3, [1, 1], 0);
    design.addMove(3, 3, [3, 3], 0);

    design.addPiece("Paper", 4, 3000);
    design.addMove(4, 4, [4, 4], 0);
    design.addMove(4, 4, [2, 2], 0);
    design.addMove(4, 4, [0, 0], 0);
    design.addMove(4, 4, [1, 1], 0);

    design.setup("Blue", "Rock", 15);
    design.setup("Blue", "Rock", 16);
    design.setup("Blue", "Rock", 17);
    design.setup("Blue", "Rock", 18);
    design.setup("Blue", "Rock", 19);
    design.setup("Blue", "Spock", 22);
    design.setup("Blue", "Scissors", 21);
    design.setup("Blue", "Scissors", 23);
    design.setup("Blue", "Paper", 20);
    design.setup("Blue", "Paper", 24);
    design.setup("Red", "Rock", 5);
    design.setup("Red", "Rock", 6);
    design.setup("Red", "Rock", 7);
    design.setup("Red", "Rock", 8);
    design.setup("Red", "Rock", 9);
    design.setup("Red", "Spock", 2);
    design.setup("Red", "Scissors", 1);
    design.setup("Red", "Scissors", 3);
    design.setup("Red", "Paper", 0);
    design.setup("Red", "Paper", 4);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("BlueSpock", "Blue Spock");
    view.defPiece("RedSpock", "Red Spock");
    view.defPiece("BlueRock", "Blue Rock");
    view.defPiece("RedRock", "Red Rock");
    view.defPiece("BlueScissors", "Blue Scissors");
    view.defPiece("RedScissors", "Red Scissors");
    view.defPiece("BlueLizard", "Blue Lizard");
    view.defPiece("RedLizard", "Red Lizard");
    view.defPiece("BluePaper", "Blue Paper");
    view.defPiece("RedPaper", "Red Paper");
 
    view.defPosition("a5", 2, 2, 68, 68);
    view.defPosition("b5", 70, 2, 68, 68);
    view.defPosition("c5", 138, 2, 68, 68);
    view.defPosition("d5", 206, 2, 68, 68);
    view.defPosition("e5", 274, 2, 68, 68);
    view.defPosition("a4", 2, 70, 68, 68);
    view.defPosition("b4", 70, 70, 68, 68);
    view.defPosition("c4", 138, 70, 68, 68);
    view.defPosition("d4", 206, 70, 68, 68);
    view.defPosition("e4", 274, 70, 68, 68);
    view.defPosition("a3", 2, 138, 68, 68);
    view.defPosition("b3", 70, 138, 68, 68);
    view.defPosition("c3", 138, 138, 68, 68);
    view.defPosition("d3", 206, 138, 68, 68);
    view.defPosition("e3", 274, 138, 68, 68);
    view.defPosition("a2", 2, 206, 68, 68);
    view.defPosition("b2", 70, 206, 68, 68);
    view.defPosition("c2", 138, 206, 68, 68);
    view.defPosition("d2", 206, 206, 68, 68);
    view.defPosition("e2", 274, 206, 68, 68);
    view.defPosition("a1", 2, 274, 68, 68);
    view.defPosition("b1", 70, 274, 68, 68);
    view.defPosition("c1", 138, 274, 68, 68);
    view.defPosition("d1", 206, 274, 68, 68);
    view.defPosition("e1", 274, 274, 68, 68);
}
