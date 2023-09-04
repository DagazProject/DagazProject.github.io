Dagaz.Model.WIDTH  = 5;
Dagaz.Model.HEIGHT = 7;

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
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-captures", "false");
    design.checkVersion("advisor-wait", "20");

    design.addDirection("se");
    design.addDirection("s");
    design.addDirection("sw");
    design.addDirection("e");
    design.addDirection("w");
    design.addDirection("ne");
    design.addDirection("nw");
    design.addDirection("n");

    design.addPlayer("Red", [6, 7, 5, 4, 3, 2, 0, 1]);
    design.addPlayer("Black", [6, 7, 5, 4, 3, 2, 0, 1]);

    design.addPosition("a7", [6, 5, 0, 1, 0, 0, 0, 0]);
    design.addPosition("b7", [6, 5, 4, 1, -1, 0, 0, 0]);
    design.addPosition("c7", [6, 5, 4, 1, -1, 0, 0, 0]);
    design.addPosition("d7", [6, 5, 4, 1, -1, 0, 0, 0]);
    design.addPosition("e7", [0, 5, 4, 0, -1, 0, 0, 0]);
    design.addPosition("a6", [6, 5, 0, 1, 0, -4, 0, -5]);
    design.addPosition("b6", [6, 5, 4, 1, -1, -4, -6, -5]);
    design.addPosition("c6", [6, 5, 4, 1, -1, -4, -6, -5]);
    design.addPosition("d6", [6, 5, 4, 1, -1, -4, -6, -5]);
    design.addPosition("e6", [0, 5, 4, 0, -1, 0, -6, -5]);
    design.addPosition("a5", [6, 5, 0, 1, 0, -4, 0, -5]);
    design.addPosition("b5", [6, 5, 4, 1, -1, -4, -6, -5]);
    design.addPosition("c5", [6, 5, 4, 1, -1, -4, -6, -5]);
    design.addPosition("d5", [6, 5, 4, 1, -1, -4, -6, -5]);
    design.addPosition("e5", [0, 5, 4, 0, -1, 0, -6, -5]);
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

    design.addZone("palace", 1, [31, 32, 33, 26, 27, 28, 21, 22, 23]);
    design.addZone("palace", 2, [1, 2, 3, 6, 7, 8, 11, 12, 13]);
    design.addZone("fortress", 1, [31, 21, 27, 33, 23, 1, 11, 7, 3, 13]);
    design.addZone("fortress", 2, [31, 21, 27, 33, 23, 1, 11, 7, 3, 13]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.IN_ZONE,	1);	// fortress
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.IN_ZONE,	1);	// fortress
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.IN_ZONE,	0);	// setup-place
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
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
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	7);
    design.addCommand(5, ZRF.FORK,	3);
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end
    design.addCommand(5, ZRF.PARAM,	1);	// $2
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.JUMP,	-8);
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.IN_ZONE,	1);	// fortress
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.IF,	9);
    design.addCommand(6, ZRF.IN_ZONE,	1);	// fortress
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FORK,	3);
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end
    design.addCommand(6, ZRF.PARAM,	1);	// $2
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.JUMP,	-10);
    design.addCommand(6, ZRF.IN_ZONE,	1);	// fortress
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.PARAM,	0);	// $1
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	4);
    design.addCommand(7, ZRF.PARAM,	1);	// $2
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.JUMP,	-5);
    design.addCommand(7, ZRF.LITERAL,	4);	// Cannon
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	2);	// $3
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.IF,	7);
    design.addCommand(7, ZRF.FORK,	3);
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end
    design.addCommand(7, ZRF.PARAM,	3);	// $4
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.JUMP,	-8);
    design.addCommand(7, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.LITERAL,	4);	// Cannon
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.IN_ZONE,	1);	// fortress
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	0);	// $1
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	4);	// Cannon
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	1);	// $2
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.IN_ZONE,	1);	// fortress
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	4);	// Cannon
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end

    design.addCommand(9, ZRF.FUNCTION,	24);	// from
    design.addCommand(9, ZRF.PARAM,	0);	// $1
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.IN_ZONE,	0);	// palace
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.FUNCTION,	25);	// to
    design.addCommand(9, ZRF.FUNCTION,	28);	// end

    design.addPiece("Soldier", 0);
    design.addMove(0, 0, [7], 1);
    design.addMove(0, 0, [4], 1);
    design.addMove(0, 0, [3], 1);
    design.addMove(0, 1, [6], 1);
    design.addMove(0, 1, [5], 1);

    design.addPiece("Horse", 1);
    design.addDrop(1, 2, [], 0);
    design.addMove(1, 3, [7, 6], 1);
    design.addMove(1, 3, [7, 5], 1);
    design.addMove(1, 3, [1, 2], 1);
    design.addMove(1, 3, [1, 0], 1);
    design.addMove(1, 3, [4, 6], 1);
    design.addMove(1, 3, [3, 5], 1);
    design.addMove(1, 3, [4, 2], 1);
    design.addMove(1, 3, [3, 0], 1);

    design.addPiece("Elephant", 2);
    design.addDrop(2, 2, [], 0);
    design.addMove(2, 4, [7, 6, 6], 1);
    design.addMove(2, 4, [7, 5, 5], 1);
    design.addMove(2, 4, [1, 2, 2], 1);
    design.addMove(2, 4, [1, 0, 0], 1);
    design.addMove(2, 4, [4, 6, 6], 1);
    design.addMove(2, 4, [3, 5, 5], 1);
    design.addMove(2, 4, [4, 2, 2], 1);
    design.addMove(2, 4, [3, 0, 0], 1);

    design.addPiece("Chariot", 3);
    design.addMove(3, 5, [7, 7], 1);
    design.addMove(3, 5, [1, 1], 1);
    design.addMove(3, 5, [4, 4], 1);
    design.addMove(3, 5, [3, 3], 1);
    design.addMove(3, 6, [6, 6], 1);
    design.addMove(3, 6, [5, 5], 1);
    design.addMove(3, 6, [2, 2], 1);
    design.addMove(3, 6, [0, 0], 1);

    design.addPiece("Cannon", 4);
    design.addMove(4, 7, [7, 7, 7, 7], 1);
    design.addMove(4, 7, [1, 1, 1, 1], 1);
    design.addMove(4, 7, [4, 4, 4, 4], 1);
    design.addMove(4, 7, [3, 3, 3, 3], 1);
    design.addMove(4, 8, [6, 6], 1);
    design.addMove(4, 8, [5, 5], 1);
    design.addMove(4, 8, [2, 2], 1);
    design.addMove(4, 8, [0, 0], 1);

    design.addPiece("Mandarin", 5);
    design.addMove(5, 9, [7], 1);
    design.addMove(5, 9, [1], 1);
    design.addMove(5, 1, [6], 1);
    design.addMove(5, 1, [2], 1);
    design.addMove(5, 9, [4], 1);
    design.addMove(5, 9, [3], 1);
    design.addMove(5, 1, [5], 1);
    design.addMove(5, 1, [0], 1);

    design.addPiece("General", 6);
    design.addMove(6, 9, [7], 1);
    design.addMove(6, 9, [1], 1);
    design.addMove(6, 1, [6], 1);
    design.addMove(6, 1, [2], 1);
    design.addMove(6, 9, [4], 1);
    design.addMove(6, 9, [3], 1);
    design.addMove(6, 1, [5], 1);
    design.addMove(6, 1, [0], 1);

    design.setup("Red", "Soldier", 20);
    design.setup("Red", "Soldier", 22);
    design.setup("Red", "Soldier", 24);
    design.setup("Red", "Horse", 31);
    design.setup("Red", "Horse", 33);
    design.setup("Red", "Chariot", 30);
    design.setup("Red", "Chariot", 34);
    design.setup("Red", "General", 27);
    design.setup("Black", "Soldier", 10);
    design.setup("Black", "Soldier", 12);
    design.setup("Black", "Soldier", 14);
    design.setup("Black", "Horse", 1);
    design.setup("Black", "Horse", 3);
    design.setup("Black", "Chariot", 0);
    design.setup("Black", "Chariot", 4);
    design.setup("Black", "General", 7);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("RedSoldier", "Red Soldier");
    view.defPiece("BlackSoldier", "Black Soldier");
    view.defPiece("RedHorse", "Red Horse");
    view.defPiece("BlackHorse", "Black Horse");
    view.defPiece("RedElephant", "Red Elephant");
    view.defPiece("BlackElephant", "Black Elephant");
    view.defPiece("RedChariot", "Red Chariot");
    view.defPiece("BlackChariot", "Black Chariot");
    view.defPiece("RedCannon", "Red Cannon");
    view.defPiece("BlackCannon", "Black Cannon");
    view.defPiece("RedMandarin", "Red Mandarin");
    view.defPiece("BlackMandarin", "Black Mandarin");
    view.defPiece("RedGeneral", "Red General");
    view.defPiece("BlackGeneral", "Black General");
 
    view.defPosition("a7", 4, 5, 42, 42);
    view.defPosition("b7", 49, 5, 42, 42);
    view.defPosition("c7", 94, 5, 42, 42);
    view.defPosition("d7", 139, 5, 42, 42);
    view.defPosition("e7", 184, 5, 42, 42);
    view.defPosition("a6", 4, 50, 42, 42);
    view.defPosition("b6", 49, 50, 42, 42);
    view.defPosition("c6", 94, 50, 42, 42);
    view.defPosition("d6", 139, 50, 42, 42);
    view.defPosition("e6", 184, 50, 42, 42);
    view.defPosition("a5", 4, 95, 42, 42);
    view.defPosition("b5", 49, 95, 42, 42);
    view.defPosition("c5", 94, 95, 42, 42);
    view.defPosition("d5", 139, 95, 42, 42);
    view.defPosition("e5", 184, 95, 42, 42);
    view.defPosition("a4", 4, 140, 42, 42);
    view.defPosition("b4", 49, 140, 42, 42);
    view.defPosition("c4", 94, 140, 42, 42);
    view.defPosition("d4", 139, 140, 42, 42);
    view.defPosition("e4", 184, 140, 42, 42);
    view.defPosition("a3", 4, 185, 42, 42);
    view.defPosition("b3", 49, 185, 42, 42);
    view.defPosition("c3", 94, 185, 42, 42);
    view.defPosition("d3", 139, 185, 42, 42);
    view.defPosition("e3", 184, 185, 42, 42);
    view.defPosition("a2", 4, 230, 42, 42);
    view.defPosition("b2", 49, 230, 42, 42);
    view.defPosition("c2", 94, 230, 42, 42);
    view.defPosition("d2", 139, 230, 42, 42);
    view.defPosition("e2", 184, 230, 42, 42);
    view.defPosition("a1", 4, 275, 42, 42);
    view.defPosition("b1", 49, 275, 42, 42);
    view.defPosition("c1", 94, 275, 42, 42);
    view.defPosition("d1", 139, 275, 42, 42);
    view.defPosition("e1", 184, 275, 42, 42);
}
