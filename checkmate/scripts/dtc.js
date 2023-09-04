Dagaz.Controller.persistense = "none";

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
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-captures", "false");

    var g = design.addGrid();
    g.addScale("A/B/C/D/E/F/G/H"); g.addScale("8/7/6/5/4/3/2/1");
    g.addDirection("n",[ 0, -1]); g.addDirection("nw",[-1, -1]);
    g.addDirection("e",[ 1,  0]); g.addDirection("ne",[ 1, -1]);
    g.addDirection("w",[-1,  0]); g.addDirection("sw",[-1,  1]);
    g.addDirection("s",[ 0,  1]); g.addDirection("se",[ 1,  1]);
    design.addPlayer("White", [6, 7, 4, 5, 2, 3, 0, 1]);
    design.addPlayer("Black", [6, 5, 2, 7, 4, 1, 0, 3]);
    g.addPositions();
    design.addPosition(["RWP", "RWN", "RWB", "RWR", "RWQ", "RWK", "RBP", "RBN", "RBB", "RBR", "RBQ", "RBK", "UP", "DN"]);

    design.addZone("last-rank",  1, [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addZone("last-rank",  2, [56, 57, 58, 59, 60, 61, 62, 63]);
    design.addZone("third-rank", 1, [40, 41, 42, 43, 44, 45, 46, 47]);
    design.addZone("third-rank", 2, [16, 17, 18, 19, 20, 21, 22, 23]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.IN_ZONE,	1);	// third-rank
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	11);
    design.addCommand(0, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FORK,	3);
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	5);	// last-to?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.LITERAL,	0);	// Pawn
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	26);	// capture
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	6);	// mark
    design.addCommand(2, ZRF.PARAM,	2);	// $3
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	4);	// last-from?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	7);	// back
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.IN_ZONE,	0);	// last-rank
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	21);	// position
    design.addCommand(3, ZRF.ON_BOARD_DIR,	7);	// name
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	9);
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.IF,	4);
    design.addCommand(3, ZRF.FORK,	3);
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.JUMP,	-10);
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
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
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.PARAM,	0);	// $1
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	1);	// $2
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.PARAM,	2);	// $3
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.LITERAL,	3);	// Rook
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.PARAM,	3);	// $4
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.PARAM,	4);	// $5
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.PARAM,	0);	// $1
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	1);	// $2
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.PARAM,	2);	// $3
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	3);	// $4
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	3);	// Rook
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.PARAM,	4);	// $5
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.PARAM,	5);	// $6
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.PARAM,	6);	// $7
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end

    design.addPiece("Pawn", 0);
    design.addMove(0, 0, [0, 0], 0);
    design.addMove(0, 1, [1], 0);
    design.addMove(0, 1, [3], 0);
    design.addMove(0, 2, [2, 0, 0], 0);
    design.addMove(0, 2, [4, 0, 0], 0);

    design.addPiece("Knight", 1);
    design.addMove(1, 4, [0, 1], 0);
    design.addMove(1, 4, [0, 3], 0);
    design.addMove(1, 4, [6, 5], 0);
    design.addMove(1, 4, [6, 7], 0);
    design.addMove(1, 4, [2, 3], 0);
    design.addMove(1, 4, [2, 7], 0);
    design.addMove(1, 4, [4, 1], 0);
    design.addMove(1, 4, [4, 5], 0);

    design.addPiece("Bishop", 2);
    design.addMove(2, 5, [1, 1], 0);
    design.addMove(2, 5, [3, 3], 0);
    design.addMove(2, 5, [5, 5], 0);
    design.addMove(2, 5, [7, 7], 0);

    design.addPiece("Rook", 3);
    design.addMove(3, 5, [0, 0], 0);
    design.addMove(3, 5, [2, 2], 0);
    design.addMove(3, 5, [4, 4], 0);
    design.addMove(3, 5, [6, 6], 0);

    design.addPiece("Queen", 4);
    design.addMove(4, 5, [0, 0], 0);
    design.addMove(4, 5, [1, 1], 0);
    design.addMove(4, 5, [2, 2], 0);
    design.addMove(4, 5, [3, 3], 0);
    design.addMove(4, 5, [4, 4], 0);
    design.addMove(4, 5, [5, 5], 0);
    design.addMove(4, 5, [6, 6], 0);
    design.addMove(4, 5, [7, 7], 0);

    design.addPiece("King", 5);
    design.addMove(5, 6, [0], 0);
    design.addMove(5, 6, [1], 0);
    design.addMove(5, 6, [2], 0);
    design.addMove(5, 6, [3], 0);
    design.addMove(5, 6, [4], 0);
    design.addMove(5, 6, [5], 0);
    design.addMove(5, 6, [6], 0);
    design.addMove(5, 6, [7], 0);
    design.addMove(5, 7, [2, 2, 2, 4, 4], 1);
    design.addMove(5, 8, [4, 4, 4, 4, 2, 2, 2], 1);

    design.addPiece("PawnR", 6);
    design.addPiece("KnightR", 7);
    design.addPiece("BishopR", 8);
    design.addPiece("RookR", 9);
    design.addPiece("QueenR", 10);
    design.addPiece("KingR", 11);

    design.setup("White", "Pawn", ["A2", "B2", "C2", "D2", "E2", "F2", "G2", "H2"]);
    design.setup("White", "Knight", ["B1", "G1"]);
    design.setup("White", "Bishop", ["C1", "F1"]);
    design.setup("White", "Rook", ["A1", "H1"]);
    design.setup("White", "Queen", ["D1"]);
    design.setup("White", "King", ["E1"]);
    design.setup("White", "PawnR", ["RWP"]);
    design.setup("White", "KnightR", ["RWN"]);
    design.setup("White", "BishopR", ["RWB"]);
    design.setup("White", "RookR", ["RWR"]);
    design.setup("White", "QueenR", ["RWQ"]);
    design.setup("White", "KingR", ["RWK"]);

    design.setup("Black", "Pawn", ["A7", "B7", "C7", "D7", "E7", "F7", "G7", "H7"]);
    design.setup("Black", "Knight", ["B8", "G8"]);
    design.setup("Black", "Bishop", ["C8", "F8"]);
    design.setup("Black", "Rook", ["A8", "H8"]);
    design.setup("Black", "Queen", ["D8"]);
    design.setup("Black", "King", ["E8"]);
    design.setup("Black", "PawnR", ["RBP"]);
    design.setup("Black", "KnightR", ["RBN"]);
    design.setup("Black", "BishopR", ["RBB"]);
    design.setup("Black", "RookR", ["RBR"]);
    design.setup("Black", "QueenR", ["RBQ"]);
    design.setup("Black", "KingR", ["RBK"]);
}

Dagaz.View.configure = function(view) {

    var b = view.root.addRegion(70, 0, 540, 540);
    b.addBoard("WhiteBoard", [0]);
    b.addBoard("BlackBoard", [1]);
    var g = b.addGrid(31, 31, 89, 89);
    g.addScale("A/B/C/D/E/F/G/H", 60, 0);
    g.addScale("8/7/6/5/4/3/2/1", 0, 60);
    g.addTurns(0, [0]);
    g.addTurns(1, [1]);

    var r = view.root.addRegion(630, 0, 120, 540);
    r.addBoard("rpw", [0]);
    r.addBoard("rpb", [1]);

    r.addPosition("RWP",  1,  41, 58, 58, [0]);
    r.addPosition("RWN",  1, 121, 58, 58, [0]);
    r.addPosition("RWB",  1, 201, 58, 58, [0]);
    r.addPosition("RWR",  1, 281, 58, 58, [0]);
    r.addPosition("RWQ",  1, 361, 58, 58, [0]);
    r.addPosition("RWK",  1, 441, 58, 58, [0]);
    r.addPosition("RBP", 61,  41, 58, 58, [0]);
    r.addPosition("RBN", 61, 121, 58, 58, [0]);
    r.addPosition("RBB", 61, 201, 58, 58, [0]);
    r.addPosition("RBR", 61, 281, 58, 58, [0]);
    r.addPosition("RBQ", 61, 361, 58, 58, [0]);
    r.addPosition("RBK", 61, 441, 58, 58, [0]);

    r.addPosition("RBP",  1,  41, 58, 58, [1]);
    r.addPosition("RBN",  1, 121, 58, 58, [1]);
    r.addPosition("RBB",  1, 201, 58, 58, [1]);
    r.addPosition("RBR",  1, 281, 58, 58, [1]);
    r.addPosition("RBQ",  1, 361, 58, 58, [1]);
    r.addPosition("RBK",  1, 441, 58, 58, [1]);
    r.addPosition("RWP", 61,  41, 58, 58, [1]);
    r.addPosition("RWN", 61, 121, 58, 58, [1]);
    r.addPosition("RWB", 61, 201, 58, 58, [1]);
    r.addPosition("RWR", 61, 281, 58, 58, [1]);
    r.addPosition("RWQ", 61, 361, 58, 58, [1]);
    r.addPosition("RWK", 61, 441, 58, 58, [1]);

    var d = view.root.addRegion(770, 0, 120, 540, true, undefined, Dagaz.Model.drawDivision, Dagaz.Controller.eventDivision);
    d.addBoard("div");
    d.addPosition("UP", 1, 1, 120, 30);
    d.addPosition("DN", 1, 510, 120, 30);

    view.addPiece(["WhitePawn", "WhiteKnight", "WhiteBishop", "WhiteRook", "WhiteQueen", "WhiteKing"], Dagaz.View.drawPiece);
    view.addPiece(["BlackPawn", "BlackKnight", "BlackBishop", "BlackRook", "BlackQueen", "BlackKing"], Dagaz.View.drawPiece);
    view.addPiece(["WhitePawnR", "BlackPawnR", "WhiteKnightR", "BlackKnightR", "WhiteBishopR", "BlackBishopR", "WhiteRookR", "BlackRookR", "WhiteQueenR", "BlackQueenR", "WhiteKingR", "BlackKingR"], Dagaz.View.drawRes);
    view.addPiece(["PawnWhite", "SmallPawnWhite", "KnightWhite", "SmallKnightWhite", "BishopWhite", "SmallBishopWhite", "RookWhite", "SmallRookWhite", "QueenWhite", "SmallQueenWhite", "KingWhite", "SmallKingWhite"]);
    view.addPiece(["PawnBlack", "SmallPawnBlack", "KnightBlack", "SmallKnightBlack", "BishopBlack", "SmallBishopBlack", "RookBlack", "SmallRookBlack", "QueenBlack", "SmallQueenBlack", "KingBlack", "SmallKingBlack"]);
    view.addPiece(["two", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "plus", "minus", "question"]);
    view.addPiece(["db", "dw", "ub", "uw"]);
}
