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

function p(name) {
  return Dagaz.Model.stringToPos(name);
}

Dagaz.Model.BuildDesign = function(design) {
    design.checkVersion("z2j", "2");

    design.addDirection("se"); // 0
    design.addDirection("s");  // 1
    design.addDirection("sw"); // 2
    design.addDirection("e");  // 3
    design.addDirection("w");  // 4
    design.addDirection("ne"); // 5
    design.addDirection("nw"); // 6
    design.addDirection("n");  // 7
    design.addDirection("u");  // 8
    design.addDirection("d");  // 9

    design.addPlayer("White", [6, 7, 5, 4, 3, 2, 0, 1, 9, 8]);
    design.addPlayer("Black", [6, 7, 5, 4, 3, 2, 0, 1, 9, 8]);

    design.addPosition("Ea5", [6, 5, 0, 1, 0, 0, 0, 0, 0, 25]);
    design.addPosition("Eb5", [6, 5, 4, 1, -1, 0, 0, 0, 0, 25]);
    design.addPosition("Ec5", [6, 5, 4, 1, -1, 0, 0, 0, 0, 25]);
    design.addPosition("Ed5", [6, 5, 4, 1, -1, 0, 0, 0, 0, 25]);
    design.addPosition("Ee5", [0, 5, 4, 0, -1, 0, 0, 0, 0, 25]);
    design.addPosition("Ea4", [6, 5, 0, 1, 0, -4, 0, -5, 0, 25]);
    design.addPosition("Eb4", [6, 5, 4, 1, -1, -4, -6, -5, 0, 25]);
    design.addPosition("Ec4", [6, 5, 4, 1, -1, -4, -6, -5, 0, 25]);
    design.addPosition("Ed4", [6, 5, 4, 1, -1, -4, -6, -5, 0, 25]);
    design.addPosition("Ee4", [0, 5, 4, 0, -1, 0, -6, -5, 0, 25]);
    design.addPosition("Ea3", [6, 5, 0, 1, 0, -4, 0, -5, 0, 25]);
    design.addPosition("Eb3", [6, 5, 4, 1, -1, -4, -6, -5, 0, 25]);
    design.addPosition("Ec3", [6, 5, 4, 1, -1, -4, -6, -5, 0, 25]);
    design.addPosition("Ed3", [6, 5, 4, 1, -1, -4, -6, -5, 0, 25]);
    design.addPosition("Ee3", [0, 5, 4, 0, -1, 0, -6, -5, 0, 25]);
    design.addPosition("Ea2", [6, 5, 0, 1, 0, -4, 0, -5, 0, 25]);
    design.addPosition("Eb2", [6, 5, 4, 1, -1, -4, -6, -5, 0, 25]);
    design.addPosition("Ec2", [6, 5, 4, 1, -1, -4, -6, -5, 0, 25]);
    design.addPosition("Ed2", [6, 5, 4, 1, -1, -4, -6, -5, 0, 25]);
    design.addPosition("Ee2", [0, 5, 4, 0, -1, 0, -6, -5, 0, 25]);
    design.addPosition("Ea1", [0, 0, 0, 1, 0, -4, 0, -5, 0, 25]);
    design.addPosition("Eb1", [0, 0, 0, 1, -1, -4, -6, -5, 0, 25]);
    design.addPosition("Ec1", [0, 0, 0, 1, -1, -4, -6, -5, 0, 25]);
    design.addPosition("Ed1", [0, 0, 0, 1, -1, -4, -6, -5, 0, 25]);
    design.addPosition("Ee1", [0, 0, 0, 0, -1, 0, -6, -5, 0, 25]);

    design.addPosition("Da5", [6, 5, 0, 1, 0, 0, 0, 0, -25, 25]);
    design.addPosition("Db5", [6, 5, 4, 1, -1, 0, 0, 0, -25, 25]);
    design.addPosition("Dc5", [6, 5, 4, 1, -1, 0, 0, 0, -25, 25]);
    design.addPosition("Dd5", [6, 5, 4, 1, -1, 0, 0, 0, -25, 25]);
    design.addPosition("De5", [0, 5, 4, 0, -1, 0, 0, 0, -25, 25]);
    design.addPosition("Da4", [6, 5, 0, 1, 0, -4, 0, -5, -25, 25]);
    design.addPosition("Db4", [6, 5, 4, 1, -1, -4, -6, -5, -25, 25]);
    design.addPosition("Dc4", [6, 5, 4, 1, -1, -4, -6, -5, -25, 25]);
    design.addPosition("Dd4", [6, 5, 4, 1, -1, -4, -6, -5, -25, 25]);
    design.addPosition("De4", [0, 5, 4, 0, -1, 0, -6, -5, -25, 25]);
    design.addPosition("Da3", [6, 5, 0, 1, 0, -4, 0, -5, -25, 25]);
    design.addPosition("Db3", [6, 5, 4, 1, -1, -4, -6, -5, -25, 25]);
    design.addPosition("Dc3", [6, 5, 4, 1, -1, -4, -6, -5, -25, 25]);
    design.addPosition("Dd3", [6, 5, 4, 1, -1, -4, -6, -5, -25, 25]);
    design.addPosition("De3", [0, 5, 4, 0, -1, 0, -6, -5, -25, 25]);
    design.addPosition("Da2", [6, 5, 0, 1, 0, -4, 0, -5, -25, 25]);
    design.addPosition("Db2", [6, 5, 4, 1, -1, -4, -6, -5, -25, 25]);
    design.addPosition("Dc2", [6, 5, 4, 1, -1, -4, -6, -5, -25, 25]);
    design.addPosition("Dd2", [6, 5, 4, 1, -1, -4, -6, -5, -25, 25]);
    design.addPosition("De2", [0, 5, 4, 0, -1, 0, -6, -5, -25, 25]);
    design.addPosition("Da1", [0, 0, 0, 1, 0, -4, 0, -5, -25, 25]);
    design.addPosition("Db1", [0, 0, 0, 1, -1, -4, -6, -5, -25, 25]);
    design.addPosition("Dc1", [0, 0, 0, 1, -1, -4, -6, -5, -25, 25]);
    design.addPosition("Dd1", [0, 0, 0, 1, -1, -4, -6, -5, -25, 25]);
    design.addPosition("De1", [0, 0, 0, 0, -1, 0, -6, -5, -25, 25]);

    design.addPosition("Ca5", [6, 5, 0, 1, 0, 0, 0, 0, -25, 25]);
    design.addPosition("Cb5", [6, 5, 4, 1, -1, 0, 0, 0, -25, 25]);
    design.addPosition("Cc5", [6, 5, 4, 1, -1, 0, 0, 0, -25, 25]);
    design.addPosition("Cd5", [6, 5, 4, 1, -1, 0, 0, 0, -25, 25]);
    design.addPosition("Ce5", [0, 5, 4, 0, -1, 0, 0, 0, -25, 25]);
    design.addPosition("Ca4", [6, 5, 0, 1, 0, -4, 0, -5, -25, 25]);
    design.addPosition("Cb4", [6, 5, 4, 1, -1, -4, -6, -5, -25, 25]);
    design.addPosition("Cc4", [6, 5, 4, 1, -1, -4, -6, -5, -25, 25]);
    design.addPosition("Cd4", [6, 5, 4, 1, -1, -4, -6, -5, -25, 25]);
    design.addPosition("Ce4", [0, 5, 4, 0, -1, 0, -6, -5, -25, 25]);
    design.addPosition("Ca3", [6, 5, 0, 1, 0, -4, 0, -5, -25, 25]);
    design.addPosition("Cb3", [6, 5, 4, 1, -1, -4, -6, -5, -25, 25]);
    design.addPosition("Cc3", [6, 5, 4, 1, -1, -4, -6, -5, -25, 25]);
    design.addPosition("Cd3", [6, 5, 4, 1, -1, -4, -6, -5, -25, 25]);
    design.addPosition("Ce3", [0, 5, 4, 0, -1, 0, -6, -5, -25, 25]);
    design.addPosition("Ca2", [6, 5, 0, 1, 0, -4, 0, -5, -25, 25]);
    design.addPosition("Cb2", [6, 5, 4, 1, -1, -4, -6, -5, -25, 25]);
    design.addPosition("Cc2", [6, 5, 4, 1, -1, -4, -6, -5, -25, 25]);
    design.addPosition("Cd2", [6, 5, 4, 1, -1, -4, -6, -5, -25, 25]);
    design.addPosition("Ce2", [0, 5, 4, 0, -1, 0, -6, -5, -25, 25]);
    design.addPosition("Ca1", [0, 0, 0, 1, 0, -4, 0, -5, -25, 25]);
    design.addPosition("Cb1", [0, 0, 0, 1, -1, -4, -6, -5, -25, 25]);
    design.addPosition("Cc1", [0, 0, 0, 1, -1, -4, -6, -5, -25, 25]);
    design.addPosition("Cd1", [0, 0, 0, 1, -1, -4, -6, -5, -25, 25]);
    design.addPosition("Ce1", [0, 0, 0, 0, -1, 0, -6, -5, -25, 25]);

    design.addPosition("Ba5", [6, 5, 0, 1, 0, 0, 0, 0, -25, 25]);
    design.addPosition("Bb5", [6, 5, 4, 1, -1, 0, 0, 0, -25, 25]);
    design.addPosition("Bc5", [6, 5, 4, 1, -1, 0, 0, 0, -25, 25]);
    design.addPosition("Bd5", [6, 5, 4, 1, -1, 0, 0, 0, -25, 25]);
    design.addPosition("Be5", [0, 5, 4, 0, -1, 0, 0, 0, -25, 25]);
    design.addPosition("Ba4", [6, 5, 0, 1, 0, -4, 0, -5, -25, 25]);
    design.addPosition("Bb4", [6, 5, 4, 1, -1, -4, -6, -5, -25, 25]);
    design.addPosition("Bc4", [6, 5, 4, 1, -1, -4, -6, -5, -25, 25]);
    design.addPosition("Bd4", [6, 5, 4, 1, -1, -4, -6, -5, -25, 25]);
    design.addPosition("Be4", [0, 5, 4, 0, -1, 0, -6, -5, -25, 25]);
    design.addPosition("Ba3", [6, 5, 0, 1, 0, -4, 0, -5, -25, 25]);
    design.addPosition("Bb3", [6, 5, 4, 1, -1, -4, -6, -5, -25, 25]);
    design.addPosition("Bc3", [6, 5, 4, 1, -1, -4, -6, -5, -25, 25]);
    design.addPosition("Bd3", [6, 5, 4, 1, -1, -4, -6, -5, -25, 25]);
    design.addPosition("Be3", [0, 5, 4, 0, -1, 0, -6, -5, -25, 25]);
    design.addPosition("Ba2", [6, 5, 0, 1, 0, -4, 0, -5, -25, 25]);
    design.addPosition("Bb2", [6, 5, 4, 1, -1, -4, -6, -5, -25, 25]);
    design.addPosition("Bc2", [6, 5, 4, 1, -1, -4, -6, -5, -25, 25]);
    design.addPosition("Bd2", [6, 5, 4, 1, -1, -4, -6, -5, -25, 25]);
    design.addPosition("Be2", [0, 5, 4, 0, -1, 0, -6, -5, -25, 25]);
    design.addPosition("Ba1", [0, 0, 0, 1, 0, -4, 0, -5, -25, 25]);
    design.addPosition("Bb1", [0, 0, 0, 1, -1, -4, -6, -5, -25, 25]);
    design.addPosition("Bc1", [0, 0, 0, 1, -1, -4, -6, -5, -25, 25]);
    design.addPosition("Bd1", [0, 0, 0, 1, -1, -4, -6, -5, -25, 25]);
    design.addPosition("Be1", [0, 0, 0, 0, -1, 0, -6, -5, -25, 25]);

    design.addPosition("Aa5", [6, 5, 0, 1, 0, 0, 0, 0, -25, 0]);
    design.addPosition("Ab5", [6, 5, 4, 1, -1, 0, 0, 0, -25, 0]);
    design.addPosition("Ac5", [6, 5, 4, 1, -1, 0, 0, 0, -25, 0]);
    design.addPosition("Ad5", [6, 5, 4, 1, -1, 0, 0, 0, -25, 0]);
    design.addPosition("Ae5", [0, 5, 4, 0, -1, 0, 0, 0, -25, 0]);
    design.addPosition("Aa4", [6, 5, 0, 1, 0, -4, 0, -5, -25, 0]);
    design.addPosition("Ab4", [6, 5, 4, 1, -1, -4, -6, -5, -25, 0]);
    design.addPosition("Ac4", [6, 5, 4, 1, -1, -4, -6, -5, -25, 0]);
    design.addPosition("Ad4", [6, 5, 4, 1, -1, -4, -6, -5, -25, 0]);
    design.addPosition("Ae4", [0, 5, 4, 0, -1, 0, -6, -5, -25, 0]);
    design.addPosition("Aa3", [6, 5, 0, 1, 0, -4, 0, -5, -25, 0]);
    design.addPosition("Ab3", [6, 5, 4, 1, -1, -4, -6, -5, -25, 0]);
    design.addPosition("Ac3", [6, 5, 4, 1, -1, -4, -6, -5, -25, 0]);
    design.addPosition("Ad3", [6, 5, 4, 1, -1, -4, -6, -5, -25, 0]);
    design.addPosition("Ae3", [0, 5, 4, 0, -1, 0, -6, -5, -25, 0]);
    design.addPosition("Aa2", [6, 5, 0, 1, 0, -4, 0, -5, -25, 0]);
    design.addPosition("Ab2", [6, 5, 4, 1, -1, -4, -6, -5, -25, 0]);
    design.addPosition("Ac2", [6, 5, 4, 1, -1, -4, -6, -5, -25, 0]);
    design.addPosition("Ad2", [6, 5, 4, 1, -1, -4, -6, -5, -25, 0]);
    design.addPosition("Ae2", [0, 5, 4, 0, -1, 0, -6, -5, -25, 0]);
    design.addPosition("Aa1", [0, 0, 0, 1, 0, -4, 0, -5, -25, 0]);
    design.addPosition("Ab1", [0, 0, 0, 1, -1, -4, -6, -5, -25, 0]);
    design.addPosition("Ac1", [0, 0, 0, 1, -1, -4, -6, -5, -25, 0]);
    design.addPosition("Ad1", [0, 0, 0, 1, -1, -4, -6, -5, -25, 0]);
    design.addPosition("Ae1", [0, 0, 0, 0, -1, 0, -6, -5, -25, 0]);

    design.addPiece("Pawn", 0);

    design.addPiece("Knight", 1);

    design.addPiece("Unicorn", 2);

    design.addPiece("Bishop", 3);

    design.addPiece("Rook", 4);

    design.addPiece("Queen", 5);

    design.addPiece("King", 6);

    design.setup("White", "Rook", p('Aa1'));
    design.setup("White", "Knight", p('Ab1'));
    design.setup("White", "King", p('Ac1'));
    design.setup("White", "Knight", p('Ad1'));
    design.setup("White", "Rook", p('Ae1'));
    design.setup("White", "Pawn", p('Aa2'));
    design.setup("White", "Pawn", p('Ab2'));
    design.setup("White", "Pawn", p('Ac2'));
    design.setup("White", "Pawn", p('Ad2'));
    design.setup("White", "Pawn", p('Ae2'));
    design.setup("White", "Bishop", p('Ba1'));
    design.setup("White", "Unicorn", p('Bb1'));
    design.setup("White", "Queen", p('Bc1'));
    design.setup("White", "Bishop", p('Bd1'));
    design.setup("White", "Unicorn", p('Be1'));
    design.setup("White", "Pawn", p('Ba2'));
    design.setup("White", "Pawn", p('Bb2'));
    design.setup("White", "Pawn", p('Bc2'));
    design.setup("White", "Pawn", p('Bd2'));
    design.setup("White", "Pawn", p('Be2'));
    design.setup("Black", "Rook", p('Ea5'));
    design.setup("Black", "Knight", p('Eb5'));
    design.setup("Black", "King", p('Ec5'));
    design.setup("Black", "Knight", p('Ed5'));
    design.setup("Black", "Rook", p('Ee5'));
    design.setup("Black", "Pawn", p('Ea4'));
    design.setup("Black", "Pawn", p('Eb4'));
    design.setup("Black", "Pawn", p('Ec4'));
    design.setup("Black", "Pawn", p('Ed4'));
    design.setup("Black", "Pawn", p('Ee4'));
    design.setup("Black", "Unicorn", p('Da5'));
    design.setup("Black", "Bishop", p('Db5'));
    design.setup("Black", "Queen", p('Dc5'));
    design.setup("Black", "Unicorn", p('Dd5'));
    design.setup("Black", "Bishop", p('De5'));
    design.setup("Black", "Pawn", p('Da4'));
    design.setup("Black", "Pawn", p('Db4'));
    design.setup("Black", "Pawn", p('Dc4'));
    design.setup("Black", "Pawn", p('Dd4'));
    design.setup("Black", "Pawn", p('De4'));
}

Dagaz.View.configure = function(view) {
    const opacity = 0.2;

    view.defBoard3D(447, 447, 1, 204, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "BoardW", opacity);
    view.defBoard3D(447, 447, 1, 102, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "BoardB", opacity);
    view.defBoard3D(447, 447, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "BoardW", opacity);
    view.defBoard3D(447, 447, 1, -102, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "BoardB", opacity);
    view.defBoard3D(447, 447, 1, -204, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "BoardW", opacity);

    const modelPath = '../res/fairy';
    const white = '#FFFF63';
    const black = '#333333';

    view.defPieceModel(0, 1, modelPath, 'pawn', white);
    view.defPieceModel(0, 2, modelPath, 'pawn', black);
    view.defPieceModel(1, 1, modelPath, 'knight', white);
    view.defPieceModel(1, 2, modelPath, 'knight', black);
    view.defPieceModel(2, 1, modelPath, 'unicorn', white);
    view.defPieceModel(2, 2, modelPath, 'unicorn', black);
    view.defPieceModel(3, 1, modelPath, 'bishop', white);
    view.defPieceModel(3, 2, modelPath, 'bishop', black);
    view.defPieceModel(4, 1, modelPath, 'rook', white);
    view.defPieceModel(4, 2, modelPath, 'rook', black);
    view.defPieceModel(5, 1, modelPath, 'queen', white);
    view.defPieceModel(5, 2, modelPath, 'queen', black);
    view.defPieceModel(6, 1, modelPath, 'king', white);
    view.defPieceModel(6, 2, modelPath, 'king', black);

    view.setCamera(0, 0, 0, -109, 215, 155);
 
    view.defControl("UndoControl", "Undo Move", false, Dagaz.Controller.undo);
    view.defControl("NewControl", "New Game", true, Dagaz.Controller.newGame);
    view.defControl(Dagaz.AI.ON ? "AiOnControl" : "AiOffControl", Dagaz.AI.ON ? "AI" : "No AI", true, Dagaz.Controller.go, Dagaz.AI.ON ? 'diamond-atari-go-board.htm' : 'diamond-atari-go.htm');
    view.defControl(Dagaz.Controller.soundOff ? ["SoundOffControl", "SoundOnControl"] : ["SoundOnControl", "SoundOffControl"], "Sound", true, Dagaz.Controller.switchSound);
    view.defControl("RedoControl", "Redo Move", false, Dagaz.Controller.redo);
 
    view.defPosition("Ea5", -136, -136, 68, 68, 204);
    view.defPosition("Eb5", -68, -136, 68, 68, 204);
    view.defPosition("Ec5", 0, -136, 68, 68, 204);
    view.defPosition("Ed5", 68, -136, 68, 68, 204);
    view.defPosition("Ee5", 136, -136, 68, 68, 204);
    view.defPosition("Ea4", -136, -68, 68, 68, 204);
    view.defPosition("Eb4", -68, -68, 68, 68, 204);
    view.defPosition("Ec4", 0, -68, 68, 68, 204);
    view.defPosition("Ed4", 68, -68, 68, 68, 204);
    view.defPosition("Ee4", 136, -68, 68, 68, 204);
    view.defPosition("Ea3", -136, 0, 68, 68, 204);
    view.defPosition("Eb3", -68, 0, 68, 68, 204);
    view.defPosition("Ec3", 0, 0, 68, 68, 204);
    view.defPosition("Ed3", 68, 0, 68, 68, 204);
    view.defPosition("Ee3", 136, 0, 68, 68, 204);
    view.defPosition("Ea2", -136, 68, 68, 68, 204);
    view.defPosition("Eb2", -68, 68, 68, 68, 204);
    view.defPosition("Ec2", 0, 68, 68, 68, 204);
    view.defPosition("Ed2", 68, 68, 68, 68, 204);
    view.defPosition("Ee2", 136, 68, 68, 68, 204);
    view.defPosition("Ea1", -136, 136, 68, 68, 204);
    view.defPosition("Eb1", -68, 136, 68, 68, 204);
    view.defPosition("Ec1", 0, 136, 68, 68, 204);
    view.defPosition("Ed1", 68, 136, 68, 68, 204);
    view.defPosition("Ee1", 136, 136, 68, 68, 204);

    view.defPosition("Da5", -136, -136, 68, 68, 102);
    view.defPosition("Db5", -68, -136, 68, 68, 102);
    view.defPosition("Dc5", 0, -136, 68, 68, 102);
    view.defPosition("Dd5", 68, -136, 68, 68, 102);
    view.defPosition("De5", 136, -136, 68, 68, 102);
    view.defPosition("Da4", -136, -68, 68, 68, 102);
    view.defPosition("Db4", -68, -68, 68, 68, 102);
    view.defPosition("Dc4", 0, -68, 68, 68, 102);
    view.defPosition("Dd4", 68, -68, 68, 68, 102);
    view.defPosition("De4", 136, -68, 68, 68, 102);
    view.defPosition("Da3", -136, 0, 68, 68, 102);
    view.defPosition("Db3", -68, 0, 68, 68, 102);
    view.defPosition("Dc3", 0, 0, 68, 68, 102);
    view.defPosition("Dd3", 68, 0, 68, 68, 102);
    view.defPosition("De3", 136, 0, 68, 68, 102);
    view.defPosition("Da2", -136, 68, 68, 68, 102);
    view.defPosition("Db2", -68, 68, 68, 68, 102);
    view.defPosition("Dc2", 0, 68, 68, 68, 102);
    view.defPosition("Dd2", 68, 68, 68, 68, 102);
    view.defPosition("De2", 136, 68, 68, 68, 102);
    view.defPosition("Da1", -136, 136, 68, 68, 102);
    view.defPosition("Db1", -68, 136, 68, 68, 102);
    view.defPosition("Dc1", 0, 136, 68, 68, 102);
    view.defPosition("Dd1", 68, 136, 68, 68, 102);
    view.defPosition("De1", 136, 136, 68, 68, 102);

    view.defPosition("Ca5", -136, -136, 68, 68, 0);
    view.defPosition("Cb5", -68, -136, 68, 68, 0);
    view.defPosition("Cc5", 0, -136, 68, 68, 0);
    view.defPosition("Cd5", 68, -136, 68, 68, 0);
    view.defPosition("Ce5", 136, -136, 68, 68, 0);
    view.defPosition("Ca4", -136, -68, 68, 68, 0);
    view.defPosition("Cb4", -68, -68, 68, 68, 0);
    view.defPosition("Cc4", 0, -68, 68, 68, 0);
    view.defPosition("Cd4", 68, -68, 68, 68, 0);
    view.defPosition("Ce4", 136, -68, 68, 68, 0);
    view.defPosition("Ca3", -136, 0, 68, 68, 0);
    view.defPosition("Cb3", -68, 0, 68, 68, 0);
    view.defPosition("Cc3", 0, 0, 68, 68, 0);
    view.defPosition("Cd3", 68, 0, 68, 68, 0);
    view.defPosition("Ce3", 136, 0, 68, 68, 0);
    view.defPosition("Ca2", -136, 68, 68, 68, 0);
    view.defPosition("Cb2", -68, 68, 68, 68, 0);
    view.defPosition("Cc2", 0, 68, 68, 68, 0);
    view.defPosition("Cd2", 68, 68, 68, 68, 0);
    view.defPosition("Ce2", 136, 68, 68, 68, 0);
    view.defPosition("Ca1", -136, 136, 68, 68, 0);
    view.defPosition("Cb1", -68, 136, 68, 68, 0);
    view.defPosition("Cc1", 0, 136, 68, 68, 0);
    view.defPosition("Cd1", 68, 136, 68, 68, 0);
    view.defPosition("Ce1", 136, 136, 68, 68, 0);

    view.defPosition("Ba5", -136, -136, 68, 68, -102);
    view.defPosition("Bb5", -68, -136, 68, 68, -102);
    view.defPosition("Bc5", 0, -136, 68, 68, -102);
    view.defPosition("Bd5", 68, -136, 68, 68, -102);
    view.defPosition("Be5", 136, -136, 68, 68, -102);
    view.defPosition("Ba4", -136, -68, 68, 68, -102);
    view.defPosition("Bb4", -68, -68, 68, 68, -102);
    view.defPosition("Bc4", 0, -68, 68, 68, -102);
    view.defPosition("Bd4", 68, -68, 68, 68, -102);
    view.defPosition("Be4", 136, -68, 68, 68, -102);
    view.defPosition("Ba3", -136, 0, 68, 68, -102);
    view.defPosition("Bb3", -68, 0, 68, 68, -102);
    view.defPosition("Bc3", 0, 0, 68, 68, -102);
    view.defPosition("Bd3", 68, 0, 68, 68, -102);
    view.defPosition("Be3", 136, 0, 68, 68, -102);
    view.defPosition("Ba2", -136, 68, 68, 68, -102);
    view.defPosition("Bb2", -68, 68, 68, 68, -102);
    view.defPosition("Bc2", 0, 68, 68, 68, -102);
    view.defPosition("Bd2", 68, 68, 68, 68, -102);
    view.defPosition("Be2", 136, 68, 68, 68, -102);
    view.defPosition("Ba1", -136, 136, 68, 68, -102);
    view.defPosition("Bb1", -68, 136, 68, 68, -102);
    view.defPosition("Bc1", 0, 136, 68, 68, -102);
    view.defPosition("Bd1", 68, 136, 68, 68, -102);
    view.defPosition("Be1", 136, 136, 68, 68, -102);

    view.defPosition("Aa5", -136, -136, 68, 68, -204);
    view.defPosition("Ab5", -68, -136, 68, 68, -204);
    view.defPosition("Ac5", 0, -136, 68, 68, -204);
    view.defPosition("Ad5", 68, -136, 68, 68, -204);
    view.defPosition("Ae5", 136, -136, 68, 68, -204);
    view.defPosition("Aa4", -136, -68, 68, 68, -204);
    view.defPosition("Ab4", -68, -68, 68, 68, -204);
    view.defPosition("Ac4", 0, -68, 68, 68, -204);
    view.defPosition("Ad4", 68, -68, 68, 68, -204);
    view.defPosition("Ae4", 136, -68, 68, 68, -204);
    view.defPosition("Aa3", -136, 0, 68, 68, -204);
    view.defPosition("Ab3", -68, 0, 68, 68, -204);
    view.defPosition("Ac3", 0, 0, 68, 68, -204);
    view.defPosition("Ad3", 68, 0, 68, 68, -204);
    view.defPosition("Ae3", 136, 0, 68, 68, -204);
    view.defPosition("Aa2", -136, 68, 68, 68, -204);
    view.defPosition("Ab2", -68, 68, 68, 68, -204);
    view.defPosition("Ac2", 0, 68, 68, 68, -204);
    view.defPosition("Ad2", 68, 68, 68, 68, -204);
    view.defPosition("Ae2", 136, 68, 68, 68, -204);
    view.defPosition("Aa1", -136, 136, 68, 68, -204);
    view.defPosition("Ab1", -68, 136, 68, 68, -204);
    view.defPosition("Ac1", 0, 136, 68, 68, -204);
    view.defPosition("Ad1", 68, 136, 68, 68, -204);
    view.defPosition("Ae1", 136, 136, 68, 68, -204);
}
