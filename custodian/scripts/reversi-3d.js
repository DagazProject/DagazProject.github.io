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
    design.checkVersion("animate-captures", "false");
    design.checkVersion("animate-drops", "false");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("pass-turn", "forced");

    design.addDirection("s"); // 0
    design.addDirection("e"); // 1
    design.addDirection("w"); // 2
    design.addDirection("n"); // 3
    design.addDirection("u"); // 4
    design.addDirection("d"); // 5

    design.addPlayer("Black", [3, 2, 1, 0, 5, 4]);
    design.addPlayer("White", [3, 2, 1, 0, 5, 4]);

    design.addPosition("Fa6", [6, 1, 0, 0, 0, 36]);
    design.addPosition("Fb6", [6, 1, -1, 0, 0, 36]);
    design.addPosition("Fc6", [6, 1, -1, 0, 0, 36]);
    design.addPosition("Fd6", [6, 1, -1, 0, 0, 36]);
    design.addPosition("Fe6", [6, 1, -1, 0, 0, 36]);
    design.addPosition("Ff6", [6, 0, -1, 0, 0, 36]);
    design.addPosition("Fa5", [6, 1, 0, -6, 0, 36]);
    design.addPosition("Fb5", [6, 1, -1, -6, 0, 36]);
    design.addPosition("Fc5", [6, 1, -1, -6, 0, 36]);
    design.addPosition("Fd5", [6, 1, -1, -6, 0, 36]);
    design.addPosition("Fe5", [6, 1, -1, -6, 0, 36]);
    design.addPosition("Ff5", [6, 0, -1, -6, 0, 36]);
    design.addPosition("Fa4", [6, 1, 0, -6, 0, 36]);
    design.addPosition("Fb4", [6, 1, -1, -6, 0, 36]);
    design.addPosition("Fc4", [6, 1, -1, -6, 0, 36]);
    design.addPosition("Fd4", [6, 1, -1, -6, 0, 36]);
    design.addPosition("Fe4", [6, 1, -1, -6, 0, 36]);
    design.addPosition("Ff4", [6, 0, -1, -6, 0, 36]);
    design.addPosition("Fa3", [6, 1, 0, -6, 0, 36]);
    design.addPosition("Fb3", [6, 1, -1, -6, 0, 36]);
    design.addPosition("Fc3", [6, 1, -1, -6, 0, 36]);
    design.addPosition("Fd3", [6, 1, -1, -6, 0, 36]);
    design.addPosition("Fe3", [6, 1, -1, -6, 0, 36]);
    design.addPosition("Ff3", [6, 0, -1, -6, 0, 36]);
    design.addPosition("Fa2", [6, 1, 0, -6, 0, 36]);
    design.addPosition("Fb2", [6, 1, -1, -6, 0, 36]);
    design.addPosition("Fc2", [6, 1, -1, -6, 0, 36]);
    design.addPosition("Fd2", [6, 1, -1, -6, 0, 36]);
    design.addPosition("Fe2", [6, 1, -1, -6, 0, 36]);
    design.addPosition("Ff2", [6, 0, -1, -6, 0, 36]);
    design.addPosition("Fa1", [0, 1, 0, -6, 0, 36]);
    design.addPosition("Fb1", [0, 1, -1, -6, 0, 36]);
    design.addPosition("Fc1", [0, 1, -1, -6, 0, 36]);
    design.addPosition("Fd1", [0, 1, -1, -6, 0, 36]);
    design.addPosition("Fe1", [0, 1, -1, -6, 0, 36]);
    design.addPosition("Ff1", [0, 0, -1, -6, 0, 36]);

    design.addPosition("Ea6", [6, 1, 0, 0, -36, 36]);
    design.addPosition("Eb6", [6, 1, -1, 0, -36, 36]);
    design.addPosition("Ec6", [6, 1, -1, 0, -36, 36]);
    design.addPosition("Ed6", [6, 1, -1, 0, -36, 36]);
    design.addPosition("Ee6", [6, 1, -1, 0, -36, 36]);
    design.addPosition("Ef6", [6, 0, -1, 0, -36, 36]);
    design.addPosition("Ea5", [6, 1, 0, -6, -36, 36]);
    design.addPosition("Eb5", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Ec5", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Ed5", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Ee5", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Ef5", [6, 0, -1, -6, -36, 36]);
    design.addPosition("Ea4", [6, 1, 0, -6, -36, 36]);
    design.addPosition("Eb4", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Ec4", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Ed4", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Ee4", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Ef4", [6, 0, -1, -6, -36, 36]);
    design.addPosition("Ea3", [6, 1, 0, -6, -36, 36]);
    design.addPosition("Eb3", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Ec3", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Ed3", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Ee3", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Ef3", [6, 0, -1, -6, -36, 36]);
    design.addPosition("Ea2", [6, 1, 0, -6, -36, 36]);
    design.addPosition("Eb2", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Ec2", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Ed2", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Ee2", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Ef2", [6, 0, -1, -6, -36, 36]);
    design.addPosition("Ea1", [0, 1, 0, -6, -36, 36]);
    design.addPosition("Eb1", [0, 1, -1, -6, -36, 36]);
    design.addPosition("Ec1", [0, 1, -1, -6, -36, 36]);
    design.addPosition("Ed1", [0, 1, -1, -6, -36, 36]);
    design.addPosition("Ee1", [0, 1, -1, -6, -36, 36]);
    design.addPosition("Ef1", [0, 0, -1, -6, -36, 36]);

    design.addPosition("Da6", [6, 1, 0, 0, -36, 36]);
    design.addPosition("Db6", [6, 1, -1, 0, -36, 36]);
    design.addPosition("Dc6", [6, 1, -1, 0, -36, 36]);
    design.addPosition("Dd6", [6, 1, -1, 0, -36, 36]);
    design.addPosition("De6", [6, 1, -1, 0, -36, 36]);
    design.addPosition("Df6", [6, 0, -1, 0, -36, 36]);
    design.addPosition("Da5", [6, 1, 0, -6, -36, 36]);
    design.addPosition("Db5", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Dc5", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Dd5", [6, 1, -1, -6, -36, 36]);
    design.addPosition("De5", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Df5", [6, 0, -1, -6, -36, 36]);
    design.addPosition("Da4", [6, 1, 0, -6, -36, 36]);
    design.addPosition("Db4", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Dc4", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Dd4", [6, 1, -1, -6, -36, 36]);
    design.addPosition("De4", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Df4", [6, 0, -1, -6, -36, 36]);
    design.addPosition("Da3", [6, 1, 0, -6, -36, 36]);
    design.addPosition("Db3", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Dc3", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Dd3", [6, 1, -1, -6, -36, 36]);
    design.addPosition("De3", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Df3", [6, 0, -1, -6, -36, 36]);
    design.addPosition("Da2", [6, 1, 0, -6, -36, 36]);
    design.addPosition("Db2", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Dc2", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Dd2", [6, 1, -1, -6, -36, 36]);
    design.addPosition("De2", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Df2", [6, 0, -1, -6, -36, 36]);
    design.addPosition("Da1", [0, 1, 0, -6, -36, 36]);
    design.addPosition("Db1", [0, 1, -1, -6, -36, 36]);
    design.addPosition("Dc1", [0, 1, -1, -6, -36, 36]);
    design.addPosition("Dd1", [0, 1, -1, -6, -36, 36]);
    design.addPosition("De1", [0, 1, -1, -6, -36, 36]);
    design.addPosition("Df1", [0, 0, -1, -6, -36, 36]);

    design.addPosition("Ca6", [6, 1, 0, 0, -36, 36]);
    design.addPosition("Cb6", [6, 1, -1, 0, -36, 36]);
    design.addPosition("Cc6", [6, 1, -1, 0, -36, 36]);
    design.addPosition("Cd6", [6, 1, -1, 0, -36, 36]);
    design.addPosition("Ce6", [6, 1, -1, 0, -36, 36]);
    design.addPosition("Cf6", [6, 0, -1, 0, -36, 36]);
    design.addPosition("Ca5", [6, 1, 0, -6, -36, 36]);
    design.addPosition("Cb5", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Cc5", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Cd5", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Ce5", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Cf5", [6, 0, -1, -6, -36, 36]);
    design.addPosition("Ca4", [6, 1, 0, -6, -36, 36]);
    design.addPosition("Cb4", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Cc4", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Cd4", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Ce4", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Cf4", [6, 0, -1, -6, -36, 36]);
    design.addPosition("Ca3", [6, 1, 0, -6, -36, 36]);
    design.addPosition("Cb3", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Cc3", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Cd3", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Ce3", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Cf3", [6, 0, -1, -6, -36, 36]);
    design.addPosition("Ca2", [6, 1, 0, -6, -36, 36]);
    design.addPosition("Cb2", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Cc2", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Cd2", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Ce2", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Cf2", [6, 0, -1, -6, -36, 36]);
    design.addPosition("Ca1", [0, 1, 0, -6, -36, 36]);
    design.addPosition("Cb1", [0, 1, -1, -6, -36, 36]);
    design.addPosition("Cc1", [0, 1, -1, -6, -36, 36]);
    design.addPosition("Cd1", [0, 1, -1, -6, -36, 36]);
    design.addPosition("Ce1", [0, 1, -1, -6, -36, 36]);
    design.addPosition("Cf1", [0, 0, -1, -6, -36, 36]);

    design.addPosition("Ba6", [6, 1, 0, 0, -36, 36]);
    design.addPosition("Bb6", [6, 1, -1, 0, -36, 36]);
    design.addPosition("Bc6", [6, 1, -1, 0, -36, 36]);
    design.addPosition("Bd6", [6, 1, -1, 0, -36, 36]);
    design.addPosition("Be6", [6, 1, -1, 0, -36, 36]);
    design.addPosition("Bf6", [6, 0, -1, 0, -36, 36]);
    design.addPosition("Ba5", [6, 1, 0, -6, -36, 36]);
    design.addPosition("Bb5", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Bc5", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Bd5", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Be5", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Bf5", [6, 0, -1, -6, -36, 36]);
    design.addPosition("Ba4", [6, 1, 0, -6, -36, 36]);
    design.addPosition("Bb4", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Bc4", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Bd4", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Be4", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Bf4", [6, 0, -1, -6, -36, 36]);
    design.addPosition("Ba3", [6, 1, 0, -6, -36, 36]);
    design.addPosition("Bb3", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Bc3", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Bd3", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Be3", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Bf3", [6, 0, -1, -6, -36, 36]);
    design.addPosition("Ba2", [6, 1, 0, -6, -36, 36]);
    design.addPosition("Bb2", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Bc2", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Bd2", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Be2", [6, 1, -1, -6, -36, 36]);
    design.addPosition("Bf2", [6, 0, -1, -6, -36, 36]);
    design.addPosition("Ba1", [0, 1, 0, -6, -36, 36]);
    design.addPosition("Bb1", [0, 1, -1, -6, -36, 36]);
    design.addPosition("Bc1", [0, 1, -1, -6, -36, 36]);
    design.addPosition("Bd1", [0, 1, -1, -6, -36, 36]);
    design.addPosition("Be1", [0, 1, -1, -6, -36, 36]);
    design.addPosition("Bf1", [0, 0, -1, -6, -36, 36]);

    design.addPosition("Aa6", [6, 1, 0, 0, -36, 0]);
    design.addPosition("Ab6", [6, 1, -1, 0, -36, 0]);
    design.addPosition("Ac6", [6, 1, -1, 0, -36, 0]);
    design.addPosition("Ad6", [6, 1, -1, 0, -36, 0]);
    design.addPosition("Ae6", [6, 1, -1, 0, -36, 0]);
    design.addPosition("Af6", [6, 0, -1, 0, -36, 0]);
    design.addPosition("Aa5", [6, 1, 0, -6, -36, 0]);
    design.addPosition("Ab5", [6, 1, -1, -6, -36, 0]);
    design.addPosition("Ac5", [6, 1, -1, -6, -36, 0]);
    design.addPosition("Ad5", [6, 1, -1, -6, -36, 0]);
    design.addPosition("Ae5", [6, 1, -1, -6, -36, 0]);
    design.addPosition("Af5", [6, 0, -1, -6, -36, 0]);
    design.addPosition("Aa4", [6, 1, 0, -6, -36, 0]);
    design.addPosition("Ab4", [6, 1, -1, -6, -36, 0]);
    design.addPosition("Ac4", [6, 1, -1, -6, -36, 0]);
    design.addPosition("Ad4", [6, 1, -1, -6, -36, 0]);
    design.addPosition("Ae4", [6, 1, -1, -6, -36, 0]);
    design.addPosition("Af4", [6, 0, -1, -6, -36, 0]);
    design.addPosition("Aa3", [6, 1, 0, -6, -36, 0]);
    design.addPosition("Ab3", [6, 1, -1, -6, -36, 0]);
    design.addPosition("Ac3", [6, 1, -1, -6, -36, 0]);
    design.addPosition("Ad3", [6, 1, -1, -6, -36, 0]);
    design.addPosition("Ae3", [6, 1, -1, -6, -36, 0]);
    design.addPosition("Af3", [6, 0, -1, -6, -36, 0]);
    design.addPosition("Aa2", [6, 1, 0, -6, -36, 0]);
    design.addPosition("Ab2", [6, 1, -1, -6, -36, 0]);
    design.addPosition("Ac2", [6, 1, -1, -6, -36, 0]);
    design.addPosition("Ad2", [6, 1, -1, -6, -36, 0]);
    design.addPosition("Ae2", [6, 1, -1, -6, -36, 0]);
    design.addPosition("Af2", [6, 0, -1, -6, -36, 0]);
    design.addPosition("Aa1", [0, 1, 0, -6, -36, 0]);
    design.addPosition("Ab1", [0, 1, -1, -6, -36, 0]);
    design.addPosition("Ac1", [0, 1, -1, -6, -36, 0]);
    design.addPosition("Ad1", [0, 1, -1, -6, -36, 0]);
    design.addPosition("Ae1", [0, 1, -1, -6, -36, 0]);
    design.addPosition("Af1", [0, 0, -1, -6, -36, 0]);

    design.addZone("strong", 2, [p('Fa6'), p('Fa1'), p('Ff6'), p('Ff1'), p('Aa6'), p('Aa1'), p('Af6'), p('Af1')]);
    design.addZone("strong", 1, [p('Fa6'), p('Fa1'), p('Ff6'), p('Ff1'), p('Aa6'), p('Aa1'), p('Af6'), p('Af1')]);
    design.addZone("weak", 2, [p('Eb5'), p('Eb2'), p('Ee5'), p('Ee2'), p('Bb5'), p('Bb2'), p('Be5'), p('Be2')]);
    design.addZone("weak", 1, [p('Eb5'), p('Eb2'), p('Ee5'), p('Ee2'), p('Bb5'), p('Bb2'), p('Be5'), p('Be2')]);

    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addPiece("Stone", 0);
    design.addDrop(0, 0, [], 0);

    design.setup("White", "Stone", p('Cc3'));
    design.setup("White", "Stone", p('Cd4'));
    design.setup("White", "Stone", p('Dc4'));
    design.setup("White", "Stone", p('Dd3'));

    design.setup("Black", "Stone", p('Dc3'));
    design.setup("Black", "Stone", p('Dd4'));
    design.setup("Black", "Stone", p('Cc4'));
    design.setup("Black", "Stone", p('Cd3'));
}

Dagaz.View.configure = function(view) {
    view.defPiece(0, 1, 0x101010); // Black
    view.defPiece(0, 2, 0x505050); // White

    view.setCamera(0, 0, 0, 75, 219, 168);

    view.defControl("UndoControl", "Undo Move", false, Dagaz.Controller.undo);
    view.defControl("NewControl", "New Game", true, Dagaz.Controller.newGame);
    view.defControl(Dagaz.AI.ON ? "AiOnControl" : "AiOffControl", Dagaz.AI.ON ? "AI" : "No AI", true, Dagaz.Controller.go, Dagaz.AI.ON ? 'reversi-3d-board.htm' : 'reversi-3d.htm');
    view.defControl(Dagaz.Controller.soundOff ? ["SoundOffControl", "SoundOnControl"] : ["SoundOnControl", "SoundOffControl"], "Sound", true, Dagaz.Controller.switchSound);
    view.defControl("RedoControl", "Redo Move", false, Dagaz.Controller.redo);
 
    view.defPosition("Fa6", -210, -210, 0, 0, 210);
    view.defPosition("Fb6", -126, -210, 0, 0, 210);
    view.defPosition("Fc6", -42, -210, 0, 0, 210);
    view.defPosition("Fd6", 42, -210, 0, 0, 210);
    view.defPosition("Fe6", 126, -210, 0, 0, 210);
    view.defPosition("Ff6", 210, -210, 0, 0, 210);
    view.defPosition("Fa5", -210, -126, 0, 0, 210);
    view.defPosition("Fb5", -126, -126, 0, 0, 210);
    view.defPosition("Fc5", -42, -126, 0, 0, 210);
    view.defPosition("Fd5", 42, -126, 0, 0, 210);
    view.defPosition("Fe5", 126, -126, 0, 0, 210);
    view.defPosition("Ff5", 210, -126, 0, 0, 210);
    view.defPosition("Fa4", -210, -42, 0, 0, 210);
    view.defPosition("Fb4", -126, -42, 0, 0, 210);
    view.defPosition("Fc4", -42, -42, 0, 0, 210);
    view.defPosition("Fd4", 42, -42, 0, 0, 210);
    view.defPosition("Fe4", 126, -42, 0, 0, 210);
    view.defPosition("Ff4", 210, -42, 0, 0, 210);
    view.defPosition("Fa3", -210, 42, 0, 0, 210);
    view.defPosition("Fb3", -126, 42, 0, 0, 210);
    view.defPosition("Fc3", -42, 42, 0, 0, 210);
    view.defPosition("Fd3", 42, 42, 0, 0, 210);
    view.defPosition("Fe3", 126, 42, 0, 0, 210);
    view.defPosition("Ff3", 210, 42, 0, 0, 210);
    view.defPosition("Fa2", -210, 126, 0, 0, 210);
    view.defPosition("Fb2", -126, 126, 0, 0, 210);
    view.defPosition("Fc2", -42, 126, 0, 0, 210);
    view.defPosition("Fd2", 42, 126, 0, 0, 210);
    view.defPosition("Fe2", 126, 126, 0, 0, 210);
    view.defPosition("Ff2", 210, 126, 0, 0, 210);
    view.defPosition("Fa1", -210, 210, 0, 0, 210);
    view.defPosition("Fb1", -126, 210, 0, 0, 210);
    view.defPosition("Fc1", -42, 210, 0, 0, 210);
    view.defPosition("Fd1", 42, 210, 0, 0, 210);
    view.defPosition("Fe1", 126, 210, 0, 0, 210);
    view.defPosition("Ff1", 210, 210, 0, 0, 210);

    view.defPosition("Ea6", -210, -210, 0, 0, 126);
    view.defPosition("Eb6", -126, -210, 0, 0, 126);
    view.defPosition("Ec6", -42, -210, 0, 0, 126);
    view.defPosition("Ed6", 42, -210, 0, 0, 126);
    view.defPosition("Ee6", 126, -210, 0, 0, 126);
    view.defPosition("Ef6", 210, -210, 0, 0, 126);
    view.defPosition("Ea5", -210, -126, 0, 0, 126);
    view.defPosition("Eb5", -126, -126, 0, 0, 126);
    view.defPosition("Ec5", -42, -126, 0, 0, 126);
    view.defPosition("Ed5", 42, -126, 0, 0, 126);
    view.defPosition("Ee5", 126, -126, 0, 0, 126);
    view.defPosition("Ef5", 210, -126, 0, 0, 126);
    view.defPosition("Ea4", -210, -42, 0, 0, 126);
    view.defPosition("Eb4", -126, -42, 0, 0, 126);
    view.defPosition("Ec4", -42, -42, 0, 0, 126);
    view.defPosition("Ed4", 42, -42, 0, 0, 126);
    view.defPosition("Ee4", 126, -42, 0, 0, 126);
    view.defPosition("Ef4", 210, -42, 0, 0, 126);
    view.defPosition("Ea3", -210, 42, 0, 0, 126);
    view.defPosition("Eb3", -126, 42, 0, 0, 126);
    view.defPosition("Ec3", -42, 42, 0, 0, 126);
    view.defPosition("Ed3", 42, 42, 0, 0, 126);
    view.defPosition("Ee3", 126, 42, 0, 0, 126);
    view.defPosition("Ef3", 210, 42, 0, 0, 126);
    view.defPosition("Ea2", -210, 126, 0, 0, 126);
    view.defPosition("Eb2", -126, 126, 0, 0, 126);
    view.defPosition("Ec2", -42, 126, 0, 0, 126);
    view.defPosition("Ed2", 42, 126, 0, 0, 126);
    view.defPosition("Ee2", 126, 126, 0, 0, 126);
    view.defPosition("Ef2", 210, 126, 0, 0, 126);
    view.defPosition("Ea1", -210, 210, 0, 0, 126);
    view.defPosition("Eb1", -126, 210, 0, 0, 126);
    view.defPosition("Ec1", -42, 210, 0, 0, 126);
    view.defPosition("Ed1", 42, 210, 0, 0, 126);
    view.defPosition("Ee1", 126, 210, 0, 0, 126);
    view.defPosition("Ef1", 210, 210, 0, 0, 126);

    view.defPosition("Da6", -210, -210, 0, 0, 42);
    view.defPosition("Db6", -126, -210, 0, 0, 42);
    view.defPosition("Dc6", -42, -210, 0, 0, 42);
    view.defPosition("Dd6", 42, -210, 0, 0, 42);
    view.defPosition("De6", 126, -210, 0, 0, 42);
    view.defPosition("Df6", 210, -210, 0, 0, 42);
    view.defPosition("Da5", -210, -126, 0, 0, 42);
    view.defPosition("Db5", -126, -126, 0, 0, 42);
    view.defPosition("Dc5", -42, -126, 0, 0, 42);
    view.defPosition("Dd5", 42, -126, 0, 0, 42);
    view.defPosition("De5", 126, -126, 0, 0, 42);
    view.defPosition("Df5", 210, -126, 0, 0, 42);
    view.defPosition("Da4", -210, -42, 0, 0, 42);
    view.defPosition("Db4", -126, -42, 0, 0, 42);
    view.defPosition("Dc4", -42, -42, 0, 0, 42);
    view.defPosition("Dd4", 42, -42, 0, 0, 42);
    view.defPosition("De4", 126, -42, 0, 0, 42);
    view.defPosition("Df4", 210, -42, 0, 0, 42);
    view.defPosition("Da3", -210, 42, 0, 0, 42);
    view.defPosition("Db3", -126, 42, 0, 0, 42);
    view.defPosition("Dc3", -42, 42, 0, 0, 42);
    view.defPosition("Dd3", 42, 42, 0, 0, 42);
    view.defPosition("De3", 126, 42, 0, 0, 42);
    view.defPosition("Df3", 210, 42, 0, 0, 42);
    view.defPosition("Da2", -210, 126, 0, 0, 42);
    view.defPosition("Db2", -126, 126, 0, 0, 42);
    view.defPosition("Dc2", -42, 126, 0, 0, 42);
    view.defPosition("Dd2", 42, 126, 0, 0, 42);
    view.defPosition("De2", 126, 126, 0, 0, 42);
    view.defPosition("Df2", 210, 126, 0, 0, 42);
    view.defPosition("Da1", -210, 210, 0, 0, 42);
    view.defPosition("Db1", -126, 210, 0, 0, 42);
    view.defPosition("Dc1", -42, 210, 0, 0, 42);
    view.defPosition("Dd1", 42, 210, 0, 0, 42);
    view.defPosition("De1", 126, 210, 0, 0, 42);
    view.defPosition("Df1", 210, 210, 0, 0, 42);

    view.defPosition("Ca6", -210, -210, 0, 0, -42);
    view.defPosition("Cb6", -126, -210, 0, 0, -42);
    view.defPosition("Cc6", -42, -210, 0, 0, -42);
    view.defPosition("Cd6", 42, -210, 0, 0, -42);
    view.defPosition("Ce6", 126, -210, 0, 0, -42);
    view.defPosition("Cf6", 210, -210, 0, 0, -42);
    view.defPosition("Ca5", -210, -126, 0, 0, -42);
    view.defPosition("Cb5", -126, -126, 0, 0, -42);
    view.defPosition("Cc5", -42, -126, 0, 0, -42);
    view.defPosition("Cd5", 42, -126, 0, 0, -42);
    view.defPosition("Ce5", 126, -126, 0, 0, -42);
    view.defPosition("Cf5", 210, -126, 0, 0, -42);
    view.defPosition("Ca4", -210, -42, 0, 0, -42);
    view.defPosition("Cb4", -126, -42, 0, 0, -42);
    view.defPosition("Cc4", -42, -42, 0, 0, -42);
    view.defPosition("Cd4", 42, -42, 0, 0, -42);
    view.defPosition("Ce4", 126, -42, 0, 0, -42);
    view.defPosition("Cf4", 210, -42, 0, 0, -42);
    view.defPosition("Ca3", -210, 42, 0, 0, -42);
    view.defPosition("Cb3", -126, 42, 0, 0, -42);
    view.defPosition("Cc3", -42, 42, 0, 0, -42);
    view.defPosition("Cd3", 42, 42, 0, 0, -42);
    view.defPosition("Ce3", 126, 42, 0, 0, -42);
    view.defPosition("Cf3", 210, 42, 0, 0, -42);
    view.defPosition("Ca2", -210, 126, 0, 0, -42);
    view.defPosition("Cb2", -126, 126, 0, 0, -42);
    view.defPosition("Cc2", -42, 126, 0, 0, -42);
    view.defPosition("Cd2", 42, 126, 0, 0, -42);
    view.defPosition("Ce2", 126, 126, 0, 0, -42);
    view.defPosition("Cf2", 210, 126, 0, 0, -42);
    view.defPosition("Ca1", -210, 210, 0, 0, -42);
    view.defPosition("Cb1", -126, 210, 0, 0, -42);
    view.defPosition("Cc1", -42, 210, 0, 0, -42);
    view.defPosition("Cd1", 42, 210, 0, 0, -42);
    view.defPosition("Ce1", 126, 210, 0, 0, -42);
    view.defPosition("Cf1", 210, 210, 0, 0, -42);

    view.defPosition("Ba6", -210, -210, 0, 0, -126);
    view.defPosition("Bb6", -126, -210, 0, 0, -126);
    view.defPosition("Bc6", -42, -210, 0, 0, -126);
    view.defPosition("Bd6", 42, -210, 0, 0, -126);
    view.defPosition("Be6", 126, -210, 0, 0, -126);
    view.defPosition("Bf6", 210, -210, 0, 0, -126);
    view.defPosition("Ba5", -210, -126, 0, 0, -126);
    view.defPosition("Bb5", -126, -126, 0, 0, -126);
    view.defPosition("Bc5", -42, -126, 0, 0, -126);
    view.defPosition("Bd5", 42, -126, 0, 0, -126);
    view.defPosition("Be5", 126, -126, 0, 0, -126);
    view.defPosition("Bf5", 210, -126, 0, 0, -126);
    view.defPosition("Ba4", -210, -42, 0, 0, -126);
    view.defPosition("Bb4", -126, -42, 0, 0, -126);
    view.defPosition("Bc4", -42, -42, 0, 0, -126);
    view.defPosition("Bd4", 42, -42, 0, 0, -126);
    view.defPosition("Be4", 126, -42, 0, 0, -126);
    view.defPosition("Bf4", 210, -42, 0, 0, -126);
    view.defPosition("Ba3", -210, 42, 0, 0, -126);
    view.defPosition("Bb3", -126, 42, 0, 0, -126);
    view.defPosition("Bc3", -42, 42, 0, 0, -126);
    view.defPosition("Bd3", 42, 42, 0, 0, -126);
    view.defPosition("Be3", 126, 42, 0, 0, -126);
    view.defPosition("Bf3", 210, 42, 0, 0, -126);
    view.defPosition("Ba2", -210, 126, 0, 0, -126);
    view.defPosition("Bb2", -126, 126, 0, 0, -126);
    view.defPosition("Bc2", -42, 126, 0, 0, -126);
    view.defPosition("Bd2", 42, 126, 0, 0, -126);
    view.defPosition("Be2", 126, 126, 0, 0, -126);
    view.defPosition("Bf2", 210, 126, 0, 0, -126);
    view.defPosition("Ba1", -210, 210, 0, 0, -126);
    view.defPosition("Bb1", -126, 210, 0, 0, -126);
    view.defPosition("Bc1", -42, 210, 0, 0, -126);
    view.defPosition("Bd1", 42, 210, 0, 0, -126);
    view.defPosition("Be1", 126, 210, 0, 0, -126);
    view.defPosition("Bf1", 210, 210, 0, 0, -126);

    view.defPosition("Aa6", -210, -210, 0, 0, -210);
    view.defPosition("Ab6", -126, -210, 0, 0, -210);
    view.defPosition("Ac6", -42, -210, 0, 0, -210);
    view.defPosition("Ad6", 42, -210, 0, 0, -210);
    view.defPosition("Ae6", 126, -210, 0, 0, -210);
    view.defPosition("Af6", 210, -210, 0, 0, -210);
    view.defPosition("Aa5", -210, -126, 0, 0, -210);
    view.defPosition("Ab5", -126, -126, 0, 0, -210);
    view.defPosition("Ac5", -42, -126, 0, 0, -210);
    view.defPosition("Ad5", 42, -126, 0, 0, -210);
    view.defPosition("Ae5", 126, -126, 0, 0, -210);
    view.defPosition("Af5", 210, -126, 0, 0, -210);
    view.defPosition("Aa4", -210, -42, 0, 0, -210);
    view.defPosition("Ab4", -126, -42, 0, 0, -210);
    view.defPosition("Ac4", -42, -42, 0, 0, -210);
    view.defPosition("Ad4", 42, -42, 0, 0, -210);
    view.defPosition("Ae4", 126, -42, 0, 0, -210);
    view.defPosition("Af4", 210, -42, 0, 0, -210);
    view.defPosition("Aa3", -210, 42, 0, 0, -210);
    view.defPosition("Ab3", -126, 42, 0, 0, -210);
    view.defPosition("Ac3", -42, 42, 0, 0, -210);
    view.defPosition("Ad3", 42, 42, 0, 0, -210);
    view.defPosition("Ae3", 126, 42, 0, 0, -210);
    view.defPosition("Af3", 210, 42, 0, 0, -210);
    view.defPosition("Aa2", -210, 126, 0, 0, -210);
    view.defPosition("Ab2", -126, 126, 0, 0, -210);
    view.defPosition("Ac2", -42, 126, 0, 0, -210);
    view.defPosition("Ad2", 42, 126, 0, 0, -210);
    view.defPosition("Ae2", 126, 126, 0, 0, -210);
    view.defPosition("Af2", 210, 126, 0, 0, -210);
    view.defPosition("Aa1", -210, 210, 0, 0, -210);
    view.defPosition("Ab1", -126, 210, 0, 0, -210);
    view.defPosition("Ac1", -42, 210, 0, 0, -210);
    view.defPosition("Ad1", 42, 210, 0, 0, -210);
    view.defPosition("Ae1", 126, 210, 0, 0, -210);
    view.defPosition("Af1", 210, 210, 0, 0, -210);
}
