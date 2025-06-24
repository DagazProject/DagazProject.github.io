Dagaz.View.TARGET_FLAT = true;

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

    design.addPlayer("Red", [6, 7, 5, 4, 3, 2, 0, 1, 9, 8]);
    design.addPlayer("Black", [6, 7, 5, 4, 3, 2, 0, 1, 9, 8]);

    design.addPosition("Ea10", [6, 5, 0, 1, 0, 0, 0, 0, 0, 50]);
    design.addPosition("Eb10", [6, 5, 4, 1, -1, 0, 0, 0, 0, 50]);
    design.addPosition("Ec10", [6, 5, 4, 1, -1, 0, 0, 0, 0, 50]);
    design.addPosition("Ed10", [6, 5, 4, 1, -1, 0, 0, 0, 0, 50]);
    design.addPosition("Ee10", [0, 5, 4, 0, -1, 0, 0, 0, 0, 50]);
    design.addPosition("Ea9", [6, 5, 0, 1, 0, -4, 0, -5, 0, 50]);
    design.addPosition("Eb9", [6, 5, 4, 1, -1, -4, -6, -5, 0, 50]);
    design.addPosition("Ec9", [6, 5, 4, 1, -1, -4, -6, -5, 0, 50]);
    design.addPosition("Ed9", [6, 5, 4, 1, -1, -4, -6, -5, 0, 50]);
    design.addPosition("Ee9", [0, 5, 4, 0, -1, 0, -6, -5, 0, 50]);
    design.addPosition("Ea8", [6, 5, 0, 1, 0, -4, 0, -5, 0, 50]);
    design.addPosition("Eb8", [6, 5, 4, 1, -1, -4, -6, -5, 0, 50]);
    design.addPosition("Ec8", [6, 5, 4, 1, -1, -4, -6, -5, 0, 50]);
    design.addPosition("Ed8", [6, 5, 4, 1, -1, -4, -6, -5, 0, 50]);
    design.addPosition("Ee8", [0, 5, 4, 0, -1, 0, -6, -5, 0, 50]);
    design.addPosition("Ea7", [6, 5, 0, 1, 0, -4, 0, -5, 0, 50]);
    design.addPosition("Eb7", [6, 5, 4, 1, -1, -4, -6, -5, 0, 50]);
    design.addPosition("Ec7", [6, 5, 4, 1, -1, -4, -6, -5, 0, 50]);
    design.addPosition("Ed7", [6, 5, 4, 1, -1, -4, -6, -5, 0, 50]);
    design.addPosition("Ee7", [0, 5, 4, 0, -1, 0, -6, -5, 0, 50]);
    design.addPosition("Ea6", [6, 5, 0, 1, 0, -4, 0, -5, 0, 50]);
    design.addPosition("Eb6", [6, 5, 4, 1, -1, -4, -6, -5, 0, 50]);
    design.addPosition("Ec6", [6, 5, 4, 1, -1, -4, -6, -5, 0, 50]);
    design.addPosition("Ed6", [6, 5, 4, 1, -1, -4, -6, -5, 0, 50]);
    design.addPosition("Ee6", [0, 5, 4, 0, -1, 0, -6, -5, 0, 50]);
    design.addPosition("Ea5", [6, 5, 0, 1, 0, -4, 0, -5, 0, 50]);
    design.addPosition("Eb5", [6, 5, 4, 1, -1, -4, -6, -5, 0, 50]);
    design.addPosition("Ec5", [6, 5, 4, 1, -1, -4, -6, -5, 0, 50]);
    design.addPosition("Ed5", [6, 5, 4, 1, -1, -4, -6, -5, 0, 50]);
    design.addPosition("Ee5", [0, 5, 4, 0, -1, 0, -6, -5, 0, 50]);
    design.addPosition("Ea4", [6, 5, 0, 1, 0, -4, 0, -5, 0, 50]);
    design.addPosition("Eb4", [6, 5, 4, 1, -1, -4, -6, -5, 0, 50]);
    design.addPosition("Ec4", [6, 5, 4, 1, -1, -4, -6, -5, 0, 50]);
    design.addPosition("Ed4", [6, 5, 4, 1, -1, -4, -6, -5, 0, 50]);
    design.addPosition("Ee4", [0, 5, 4, 0, -1, 0, -6, -5, 0, 50]);
    design.addPosition("Ea3", [6, 5, 0, 1, 0, -4, 0, -5, 0, 50]);
    design.addPosition("Eb3", [6, 5, 4, 1, -1, -4, -6, -5, 0, 50]);
    design.addPosition("Ec3", [6, 5, 4, 1, -1, -4, -6, -5, 0, 50]);
    design.addPosition("Ed3", [6, 5, 4, 1, -1, -4, -6, -5, 0, 50]);
    design.addPosition("Ee3", [0, 5, 4, 0, -1, 0, -6, -5, 0, 50]);
    design.addPosition("Ea2", [6, 5, 0, 1, 0, -4, 0, -5, 0, 50]);
    design.addPosition("Eb2", [6, 5, 4, 1, -1, -4, -6, -5, 0, 50]);
    design.addPosition("Ec2", [6, 5, 4, 1, -1, -4, -6, -5, 0, 50]);
    design.addPosition("Ed2", [6, 5, 4, 1, -1, -4, -6, -5, 0, 50]);
    design.addPosition("Ee2", [0, 5, 4, 0, -1, 0, -6, -5, 0, 50]);
    design.addPosition("Ea1", [0, 0, 0, 1, 0, -4, 0, -5, 0, 50]);
    design.addPosition("Eb1", [0, 0, 0, 1, -1, -4, -6, -5, 0, 50]);
    design.addPosition("Ec1", [0, 0, 0, 1, -1, -4, -6, -5, 0, 50]);
    design.addPosition("Ed1", [0, 0, 0, 1, -1, -4, -6, -5, 0, 50]);
    design.addPosition("Ee1", [0, 0, 0, 0, -1, 0, -6, -5, 0, 50]);

    design.addPosition("Da10", [6, 5, 0, 1, 0, 0, 0, 0, -50, 50]);
    design.addPosition("Db10", [6, 5, 4, 1, -1, 0, 0, 0, -50, 50]);
    design.addPosition("Dc10", [6, 5, 4, 1, -1, 0, 0, 0, -50, 50]);
    design.addPosition("Dd10", [6, 5, 4, 1, -1, 0, 0, 0, -50, 50]);
    design.addPosition("De10", [0, 5, 4, 0, -1, 0, 0, 0, -50, 50]);
    design.addPosition("Da9", [6, 5, 0, 1, 0, -4, 0, -5, -50, 50]);
    design.addPosition("Db9", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Dc9", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Dd9", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("De9", [0, 5, 4, 0, -1, 0, -6, -5, -50, 50]);
    design.addPosition("Da8", [6, 5, 0, 1, 0, -4, 0, -5, -50, 50]);
    design.addPosition("Db8", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Dc8", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Dd8", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("De8", [0, 5, 4, 0, -1, 0, -6, -5, -50, 50]);
    design.addPosition("Da7", [6, 5, 0, 1, 0, -4, 0, -5, -50, 50]);
    design.addPosition("Db7", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Dc7", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Dd7", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("De7", [0, 5, 4, 0, -1, 0, -6, -5, -50, 50]);
    design.addPosition("Da6", [6, 5, 0, 1, 0, -4, 0, -5, -50, 50]);
    design.addPosition("Db6", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Dc6", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Dd6", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("De6", [0, 5, 4, 0, -1, 0, -6, -5, -50, 50]);
    design.addPosition("Da5", [6, 5, 0, 1, 0, -4, 0, -5, -50, 50]);
    design.addPosition("Db5", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Dc5", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Dd5", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("De5", [0, 5, 4, 0, -1, 0, -6, -5, -50, 50]);
    design.addPosition("Da4", [6, 5, 0, 1, 0, -4, 0, -5, -50, 50]);
    design.addPosition("Db4", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Dc4", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Dd4", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("De4", [0, 5, 4, 0, -1, 0, -6, -5, -50, 50]);
    design.addPosition("Da3", [6, 5, 0, 1, 0, -4, 0, -5, -50, 50]);
    design.addPosition("Db3", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Dc3", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Dd3", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("De3", [0, 5, 4, 0, -1, 0, -6, -5, -50, 50]);
    design.addPosition("Da2", [6, 5, 0, 1, 0, -4, 0, -5, -50, 50]);
    design.addPosition("Db2", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Dc2", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Dd2", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("De2", [0, 5, 4, 0, -1, 0, -6, -5, -50, 50]);
    design.addPosition("Da1", [0, 0, 0, 1, 0, -4, 0, -5, -50, 50]);
    design.addPosition("Db1", [0, 0, 0, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Dc1", [0, 0, 0, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Dd1", [0, 0, 0, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("De1", [0, 0, 0, 0, -1, 0, -6, -5, -50, 50]);

    design.addPosition("Ca10", [6, 5, 0, 1, 0, 0, 0, 0, -50, 50]);
    design.addPosition("Cb10", [6, 5, 4, 1, -1, 0, 0, 0, -50, 50]);
    design.addPosition("Cc10", [6, 5, 4, 1, -1, 0, 0, 0, -50, 50]);
    design.addPosition("Cd10", [6, 5, 4, 1, -1, 0, 0, 0, -50, 50]);
    design.addPosition("Ce10", [0, 5, 4, 0, -1, 0, 0, 0, -50, 50]);
    design.addPosition("Ca9", [6, 5, 0, 1, 0, -4, 0, -5, -50, 50]);
    design.addPosition("Cb9", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Cc9", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Cd9", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Ce9", [0, 5, 4, 0, -1, 0, -6, -5, -50, 50]);
    design.addPosition("Ca8", [6, 5, 0, 1, 0, -4, 0, -5, -50, 50]);
    design.addPosition("Cb8", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Cc8", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Cd8", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Ce8", [0, 5, 4, 0, -1, 0, -6, -5, -50, 50]);
    design.addPosition("Ca7", [6, 5, 0, 1, 0, -4, 0, -5, -50, 50]);
    design.addPosition("Cb7", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Cc7", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Cd7", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Ce7", [0, 5, 4, 0, -1, 0, -6, -5, -50, 50]);
    design.addPosition("Ca6", [6, 5, 0, 1, 0, -4, 0, -5, -50, 50]);
    design.addPosition("Cb6", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Cc6", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Cd6", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Ce6", [0, 5, 4, 0, -1, 0, -6, -5, -50, 50]);
    design.addPosition("Ca5", [6, 5, 0, 1, 0, -4, 0, -5, -50, 50]);
    design.addPosition("Cb5", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Cc5", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Cd5", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Ce5", [0, 5, 4, 0, -1, 0, -6, -5, -50, 50]);
    design.addPosition("Ca4", [6, 5, 0, 1, 0, -4, 0, -5, -50, 50]);
    design.addPosition("Cb4", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Cc4", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Cd4", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Ce4", [0, 5, 4, 0, -1, 0, -6, -5, -50, 50]);
    design.addPosition("Ca3", [6, 5, 0, 1, 0, -4, 0, -5, -50, 50]);
    design.addPosition("Cb3", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Cc3", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Cd3", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Ce3", [0, 5, 4, 0, -1, 0, -6, -5, -50, 50]);
    design.addPosition("Ca2", [6, 5, 0, 1, 0, -4, 0, -5, -50, 50]);
    design.addPosition("Cb2", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Cc2", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Cd2", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Ce2", [0, 5, 4, 0, -1, 0, -6, -5, -50, 50]);
    design.addPosition("Ca1", [0, 0, 0, 1, 0, -4, 0, -5, -50, 50]);
    design.addPosition("Cb1", [0, 0, 0, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Cc1", [0, 0, 0, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Cd1", [0, 0, 0, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Ce1", [0, 0, 0, 0, -1, 0, -6, -5, -50, 50]);

    design.addPosition("Ba10", [6, 5, 0, 1, 0, 0, 0, 0, -50, 50]);
    design.addPosition("Bb10", [6, 5, 4, 1, -1, 0, 0, 0, -50, 50]);
    design.addPosition("Bc10", [6, 5, 4, 1, -1, 0, 0, 0, -50, 50]);
    design.addPosition("Bd10", [6, 5, 4, 1, -1, 0, 0, 0, -50, 50]);
    design.addPosition("Be10", [0, 5, 4, 0, -1, 0, 0, 0, -50, 50]);
    design.addPosition("Ba9", [6, 5, 0, 1, 0, -4, 0, -5, -50, 50]);
    design.addPosition("Bb9", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Bc9", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Bd9", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Be9", [0, 5, 4, 0, -1, 0, -6, -5, -50, 50]);
    design.addPosition("Ba8", [6, 5, 0, 1, 0, -4, 0, -5, -50, 50]);
    design.addPosition("Bb8", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Bc8", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Bd8", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Be8", [0, 5, 4, 0, -1, 0, -6, -5, -50, 50]);
    design.addPosition("Ba7", [6, 5, 0, 1, 0, -4, 0, -5, -50, 50]);
    design.addPosition("Bb7", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Bc7", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Bd7", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Be7", [0, 5, 4, 0, -1, 0, -6, -5, -50, 50]);
    design.addPosition("Ba6", [6, 5, 0, 1, 0, -4, 0, -5, -50, 50]);
    design.addPosition("Bb6", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Bc6", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Bd6", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Be6", [0, 5, 4, 0, -1, 0, -6, -5, -50, 50]);
    design.addPosition("Ba5", [6, 5, 0, 1, 0, -4, 0, -5, -50, 50]);
    design.addPosition("Bb5", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Bc5", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Bd5", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Be5", [0, 5, 4, 0, -1, 0, -6, -5, -50, 50]);
    design.addPosition("Ba4", [6, 5, 0, 1, 0, -4, 0, -5, -50, 50]);
    design.addPosition("Bb4", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Bc4", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Bd4", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Be4", [0, 5, 4, 0, -1, 0, -6, -5, -50, 50]);
    design.addPosition("Ba3", [6, 5, 0, 1, 0, -4, 0, -5, -50, 50]);
    design.addPosition("Bb3", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Bc3", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Bd3", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Be3", [0, 5, 4, 0, -1, 0, -6, -5, -50, 50]);
    design.addPosition("Ba2", [6, 5, 0, 1, 0, -4, 0, -5, -50, 50]);
    design.addPosition("Bb2", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Bc2", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Bd2", [6, 5, 4, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Be2", [0, 5, 4, 0, -1, 0, -6, -5, -50, 50]);
    design.addPosition("Ba1", [0, 0, 0, 1, 0, -4, 0, -5, -50, 50]);
    design.addPosition("Bb1", [0, 0, 0, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Bc1", [0, 0, 0, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Bd1", [0, 0, 0, 1, -1, -4, -6, -5, -50, 50]);
    design.addPosition("Be1", [0, 0, 0, 0, -1, 0, -6, -5, -50, 50]);

    design.addPosition("Aa10", [6, 5, 0, 1, 0, 0, 0, 0, -50, 0]);
    design.addPosition("Ab10", [6, 5, 4, 1, -1, 0, 0, 0, -50, 0]);
    design.addPosition("Ac10", [6, 5, 4, 1, -1, 0, 0, 0, -50, 0]);
    design.addPosition("Ad10", [6, 5, 4, 1, -1, 0, 0, 0, -50, 0]);
    design.addPosition("Ae10", [0, 5, 4, 0, -1, 0, 0, 0, -50, 0]);
    design.addPosition("Aa9", [6, 5, 0, 1, 0, -4, 0, -5, -50, 0]);
    design.addPosition("Ab9", [6, 5, 4, 1, -1, -4, -6, -5, -50, 0]);
    design.addPosition("Ac9", [6, 5, 4, 1, -1, -4, -6, -5, -50, 0]);
    design.addPosition("Ad9", [6, 5, 4, 1, -1, -4, -6, -5, -50, 0]);
    design.addPosition("Ae9", [0, 5, 4, 0, -1, 0, -6, -5, -50, 0]);
    design.addPosition("Aa8", [6, 5, 0, 1, 0, -4, 0, -5, -50, 0]);
    design.addPosition("Ab8", [6, 5, 4, 1, -1, -4, -6, -5, -50, 0]);
    design.addPosition("Ac8", [6, 5, 4, 1, -1, -4, -6, -5, -50, 0]);
    design.addPosition("Ad8", [6, 5, 4, 1, -1, -4, -6, -5, -50, 0]);
    design.addPosition("Ae8", [0, 5, 4, 0, -1, 0, -6, -5, -50, 0]);
    design.addPosition("Aa7", [6, 5, 0, 1, 0, -4, 0, -5, -50, 0]);
    design.addPosition("Ab7", [6, 5, 4, 1, -1, -4, -6, -5, -50, 0]);
    design.addPosition("Ac7", [6, 5, 4, 1, -1, -4, -6, -5, -50, 0]);
    design.addPosition("Ad7", [6, 5, 4, 1, -1, -4, -6, -5, -50, 0]);
    design.addPosition("Ae7", [0, 5, 4, 0, -1, 0, -6, -5, -50, 0]);
    design.addPosition("Aa6", [6, 5, 0, 1, 0, -4, 0, -5, -50, 0]);
    design.addPosition("Ab6", [6, 5, 4, 1, -1, -4, -6, -5, -50, 0]);
    design.addPosition("Ac6", [6, 5, 4, 1, -1, -4, -6, -5, -50, 0]);
    design.addPosition("Ad6", [6, 5, 4, 1, -1, -4, -6, -5, -50, 0]);
    design.addPosition("Ae6", [0, 5, 4, 0, -1, 0, -6, -5, -50, 0]);
    design.addPosition("Aa5", [6, 5, 0, 1, 0, -4, 0, -5, -50, 0]);
    design.addPosition("Ab5", [6, 5, 4, 1, -1, -4, -6, -5, -50, 0]);
    design.addPosition("Ac5", [6, 5, 4, 1, -1, -4, -6, -5, -50, 0]);
    design.addPosition("Ad5", [6, 5, 4, 1, -1, -4, -6, -5, -50, 0]);
    design.addPosition("Ae5", [0, 5, 4, 0, -1, 0, -6, -5, -50, 0]);
    design.addPosition("Aa4", [6, 5, 0, 1, 0, -4, 0, -5, -50, 0]);
    design.addPosition("Ab4", [6, 5, 4, 1, -1, -4, -6, -5, -50, 0]);
    design.addPosition("Ac4", [6, 5, 4, 1, -1, -4, -6, -5, -50, 0]);
    design.addPosition("Ad4", [6, 5, 4, 1, -1, -4, -6, -5, -50, 0]);
    design.addPosition("Ae4", [0, 5, 4, 0, -1, 0, -6, -5, -50, 0]);
    design.addPosition("Aa3", [6, 5, 0, 1, 0, -4, 0, -5, -50, 0]);
    design.addPosition("Ab3", [6, 5, 4, 1, -1, -4, -6, -5, -50, 0]);
    design.addPosition("Ac3", [6, 5, 4, 1, -1, -4, -6, -5, -50, 0]);
    design.addPosition("Ad3", [6, 5, 4, 1, -1, -4, -6, -5, -50, 0]);
    design.addPosition("Ae3", [0, 5, 4, 0, -1, 0, -6, -5, -50, 0]);
    design.addPosition("Aa2", [6, 5, 0, 1, 0, -4, 0, -5, -50, 0]);
    design.addPosition("Ab2", [6, 5, 4, 1, -1, -4, -6, -5, -50, 0]);
    design.addPosition("Ac2", [6, 5, 4, 1, -1, -4, -6, -5, -50, 0]);
    design.addPosition("Ad2", [6, 5, 4, 1, -1, -4, -6, -5, -50, 0]);
    design.addPosition("Ae2", [0, 5, 4, 0, -1, 0, -6, -5, -50, 0]);
    design.addPosition("Aa1", [0, 0, 0, 1, 0, -4, 0, -5, -50, 0]);
    design.addPosition("Ab1", [0, 0, 0, 1, -1, -4, -6, -5, -50, 0]);
    design.addPosition("Ac1", [0, 0, 0, 1, -1, -4, -6, -5, -50, 0]);
    design.addPosition("Ad1", [0, 0, 0, 1, -1, -4, -6, -5, -50, 0]);
    design.addPosition("Ae1", [0, 0, 0, 0, -1, 0, -6, -5, -50, 0]);

    design.addZone("fortress", 1, [196, 197, 198, 191, 192, 193, 186, 187, 188, 146, 147, 148, 141, 142, 143, 136, 137, 138, 96, 97, 98, 91, 92, 93, 86, 87, 88]);
    design.addZone("fortress", 2, [151, 152, 153, 156, 157, 158, 161, 162, 163, 101, 102, 103, 106, 107, 108, 111, 112, 113, 51, 52, 53, 56, 57, 58, 61, 62, 63]);
    design.addZone("home", 1, [245, 246, 247, 248, 249, 240, 241, 242, 243, 244, 235, 236, 237, 238, 239, 230, 231, 232, 233, 234, 225, 226, 227, 228, 229, 195, 196, 197, 198, 199, 190, 191, 192, 193, 194, 185, 186, 187, 188, 189, 180, 181, 182, 183, 184, 175, 176, 177, 178, 179, 145, 146, 147, 148, 149, 140, 141, 142, 143, 144, 135, 136, 137, 138, 139, 130, 131, 132, 133, 134, 125, 126, 127, 128, 129, 95, 96, 97, 98, 99, 90, 91, 92, 93, 94, 85, 86, 87, 88, 89, 80, 81, 82, 83, 84, 75, 76, 77, 78, 79, 45, 46, 47, 48, 49, 40, 41, 42, 43, 44, 35, 36, 37, 38, 39, 30, 31, 32, 33, 34, 25, 26, 27, 28, 29]);
    design.addZone("home", 2, [200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]);

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
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.IN_ZONE,	1);	// home
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.IN_ZONE,	1);	// home
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
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
    design.addCommand(3, ZRF.IN_ZONE,	1);	// home
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.PARAM,	2);	// $3
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.PARAM,	3);	// $4
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.IN_ZONE,	1);	// home
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	1);	// $2
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	1);	// $2
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.PARAM,	2);	// $3
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
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
    design.addCommand(7, ZRF.IF,	7);
    design.addCommand(7, ZRF.FORK,	3);
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end
    design.addCommand(7, ZRF.PARAM,	1);	// $2
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.JUMP,	-8);
    design.addCommand(7, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addCommand(8, ZRF.FUNCTION,	24);	// from
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
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	2);	// $3
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.IF,	4);
    design.addCommand(8, ZRF.PARAM,	3);	// $4
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.JUMP,	-5);
    design.addCommand(8, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end

    design.addCommand(9, ZRF.FUNCTION,	24);	// from
    design.addCommand(9, ZRF.PARAM,	0);	// $1
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.PARAM,	1);	// $2
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.IF,	9);
    design.addCommand(9, ZRF.FORK,	3);
    design.addCommand(9, ZRF.FUNCTION,	25);	// to
    design.addCommand(9, ZRF.FUNCTION,	28);	// end
    design.addCommand(9, ZRF.PARAM,	2);	// $3
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.PARAM,	3);	// $4
    design.addCommand(9, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(9, ZRF.JUMP,	-10);
    design.addCommand(9, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(9, ZRF.FUNCTION,	0);	// not
    design.addCommand(9, ZRF.FUNCTION,	20);	// verify
    design.addCommand(9, ZRF.FUNCTION,	25);	// to
    design.addCommand(9, ZRF.FUNCTION,	28);	// end

    design.addCommand(10, ZRF.FUNCTION,	24);	// from
    design.addCommand(10, ZRF.PARAM,	0);	// $1
    design.addCommand(10, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(10, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(10, ZRF.FUNCTION,	0);	// not
    design.addCommand(10, ZRF.FUNCTION,	20);	// verify
    design.addCommand(10, ZRF.IN_ZONE,	0);	// fortress
    design.addCommand(10, ZRF.FUNCTION,	20);	// verify
    design.addCommand(10, ZRF.FUNCTION,	25);	// to
    design.addCommand(10, ZRF.FUNCTION,	28);	// end

    design.addCommand(11, ZRF.FUNCTION,	24);	// from
    design.addCommand(11, ZRF.PARAM,	0);	// $1
    design.addCommand(11, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(11, ZRF.PARAM,	1);	// $2
    design.addCommand(11, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(11, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(11, ZRF.FUNCTION,	0);	// not
    design.addCommand(11, ZRF.FUNCTION,	20);	// verify
    design.addCommand(11, ZRF.IN_ZONE,	0);	// fortress
    design.addCommand(11, ZRF.FUNCTION,	20);	// verify
    design.addCommand(11, ZRF.FUNCTION,	25);	// to
    design.addCommand(11, ZRF.FUNCTION,	28);	// end

    design.addPiece("Soldier", 0);
    design.addMove(0, 0, [7], 0);
    design.addMove(0, 1, [4], 0);
    design.addMove(0, 1, [3], 0);
    design.addMove(0, 1, [8], 0);
    design.addMove(0, 1, [9], 0);
    design.addMove(0, 2, [8, 3], 0);
    design.addMove(0, 2, [8, 4], 0);
    design.addMove(0, 2, [9, 3], 0);
    design.addMove(0, 2, [9, 4], 0);

    design.addPiece("Elephant", 1);
    design.addMove(1, 3, [6, 6], 0);
    design.addMove(1, 3, [2, 2], 0);
    design.addMove(1, 3, [5, 5], 0);
    design.addMove(1, 3, [0, 0], 0);
    design.addMove(1, 4, [8, 7, 8, 7], 0);
    design.addMove(1, 4, [8, 3, 8, 3], 0);
    design.addMove(1, 4, [8, 4, 8, 4], 0);
    design.addMove(1, 4, [8, 1, 8, 1], 0);
    design.addMove(1, 4, [9, 7, 9, 7], 0);
    design.addMove(1, 4, [9, 3, 9, 3], 0);
    design.addMove(1, 4, [9, 4, 9, 4], 0);
    design.addMove(1, 4, [9, 1, 9, 1], 0);

    design.addPiece("Horse", 2);
    design.addMove(2, 5, [7, 6], 0);
    design.addMove(2, 5, [7, 5], 0);
    design.addMove(2, 5, [1, 2], 0);
    design.addMove(2, 5, [1, 0], 0);
    design.addMove(2, 5, [4, 6], 0);
    design.addMove(2, 5, [3, 5], 0);
    design.addMove(2, 5, [4, 2], 0);
    design.addMove(2, 5, [3, 0], 0);
    design.addMove(2, 6, [7, 7, 8], 0);
    design.addMove(2, 6, [3, 3, 8], 0);
    design.addMove(2, 6, [4, 4, 8], 0);
    design.addMove(2, 6, [1, 1, 8], 0);
    design.addMove(2, 6, [7, 7, 9], 0);
    design.addMove(2, 6, [3, 3, 9], 0);
    design.addMove(2, 6, [4, 4, 9], 0);
    design.addMove(2, 6, [1, 1, 9], 0);
    design.addMove(2, 6, [8, 8, 7], 0);
    design.addMove(2, 6, [8, 8, 3], 0);
    design.addMove(2, 6, [8, 8, 4], 0);
    design.addMove(2, 6, [8, 8, 1], 0);
    design.addMove(2, 6, [9, 9, 7], 0);
    design.addMove(2, 6, [9, 9, 3], 0);
    design.addMove(2, 6, [9, 9, 4], 0);
    design.addMove(2, 6, [9, 9, 1], 0);

    design.addPiece("Chariot", 3);
    design.addMove(3, 7, [7, 7], 0);
    design.addMove(3, 7, [1, 1], 0);
    design.addMove(3, 7, [4, 4], 0);
    design.addMove(3, 7, [3, 3], 0);
    design.addMove(3, 7, [8, 8], 0);
    design.addMove(3, 7, [9, 9], 0);

    design.addPiece("Cannon", 4);
    design.addMove(4, 8, [7, 7, 7, 7], 0);
    design.addMove(4, 8, [1, 1, 1, 1], 0);
    design.addMove(4, 8, [4, 4, 4, 4], 0);
    design.addMove(4, 8, [3, 3, 3, 3], 0);
    design.addMove(4, 8, [8, 8, 8, 8], 0);
    design.addMove(4, 8, [9, 9, 9, 9], 0);

    design.addPiece("Unicorn", 5);
    design.addMove(5, 9, [8, 6, 8, 6], 0);
    design.addMove(5, 9, [8, 5, 8, 5], 0);
    design.addMove(5, 9, [8, 2, 8, 2], 0);
    design.addMove(5, 9, [8, 0, 8, 0], 0);
    design.addMove(5, 9, [9, 6, 9, 6], 0);
    design.addMove(5, 9, [9, 5, 9, 5], 0);
    design.addMove(5, 9, [9, 2, 9, 2], 0);
    design.addMove(5, 9, [9, 0, 9, 0], 0);

    design.addPiece("Mandarin", 6);
    design.addMove(6, 10, [6], 0);
    design.addMove(6, 10, [2], 0);
    design.addMove(6, 10, [5], 0);
    design.addMove(6, 10, [0], 0);
    design.addMove(6, 11, [8, 7], 0);
    design.addMove(6, 11, [8, 3], 0);
    design.addMove(6, 11, [8, 4], 0);
    design.addMove(6, 11, [8, 1], 0);
    design.addMove(6, 11, [9, 7], 0);
    design.addMove(6, 11, [9, 3], 0);
    design.addMove(6, 11, [9, 4], 0);
    design.addMove(6, 11, [9, 1], 0);

    design.addPiece("General", 7);
    design.addMove(7, 10, [7], 0);
    design.addMove(7, 10, [1], 0);
    design.addMove(7, 10, [4], 0);
    design.addMove(7, 10, [3], 0);
    design.addMove(7, 10, [8], 0);
    design.addMove(7, 10, [9], 0);

    design.setup("Red", "General", p('Cc1'));
    design.setup("Red", "Mandarin", p('Bc1'));
    design.setup("Red", "Mandarin", p('Cb1'));
    design.setup("Red", "Mandarin", p('Cd1'));
    design.setup("Red", "Mandarin", p('Dc1'));
    design.setup("Red", "Soldier", p('Aa4'));
    design.setup("Red", "Soldier", p('Ac4'));
    design.setup("Red", "Soldier", p('Ae4'));
    design.setup("Red", "Soldier", p('Bb4'));
    design.setup("Red", "Soldier", p('Bd4'));
    design.setup("Red", "Soldier", p('Ca4'));
    design.setup("Red", "Soldier", p('Cc4'));
    design.setup("Red", "Soldier", p('Ce4'));
    design.setup("Red", "Soldier", p('Db4'));
    design.setup("Red", "Soldier", p('Dd4'));
    design.setup("Red", "Soldier", p('Ea4'));
    design.setup("Red", "Soldier", p('Ec4'));
    design.setup("Red", "Soldier", p('Ee4'));
    design.setup("Red", "Cannon", p('Ba3'));
    design.setup("Red", "Cannon", p('Be3'));
    design.setup("Red", "Cannon", p('Da3'));
    design.setup("Red", "Cannon", p('De3'));
    design.setup("Red", "Chariot", p('Aa1'));
    design.setup("Red", "Chariot", p('Ae1'));
    design.setup("Red", "Chariot", p('Ea1'));
    design.setup("Red", "Chariot", p('Ee1'));
    design.setup("Red", "Elephant", p('Ac1'));
    design.setup("Red", "Elephant", p('Ca1'));
    design.setup("Red", "Elephant", p('Ce1'));
    design.setup("Red", "Elephant", p('Ec1'));
    design.setup("Red", "Horse", p('Ba1'));
    design.setup("Red", "Horse", p('Be1'));
    design.setup("Red", "Horse", p('Da1'));
    design.setup("Red", "Horse", p('De1'));
    design.setup("Red", "Unicorn", p('Ab1'));
    design.setup("Red", "Unicorn", p('Ad1'));
    design.setup("Red", "Unicorn", p('Eb1'));
    design.setup("Red", "Unicorn", p('Ed1'));

    design.setup("Black", "General", p('Cc10'));
    design.setup("Black", "Mandarin", p('Bc10'));
    design.setup("Black", "Mandarin", p('Cb10'));
    design.setup("Black", "Mandarin", p('Cd10'));
    design.setup("Black", "Mandarin", p('Dc10'));
    design.setup("Black", "Soldier", p('Aa7'));
    design.setup("Black", "Soldier", p('Ac7'));
    design.setup("Black", "Soldier", p('Ae7'));
    design.setup("Black", "Soldier", p('Bb7'));
    design.setup("Black", "Soldier", p('Bd7'));
    design.setup("Black", "Soldier", p('Ca7'));
    design.setup("Black", "Soldier", p('Cc7'));
    design.setup("Black", "Soldier", p('Ce7'));
    design.setup("Black", "Soldier", p('Db7'));
    design.setup("Black", "Soldier", p('Dd7'));
    design.setup("Black", "Soldier", p('Ea7'));
    design.setup("Black", "Soldier", p('Ec7'));
    design.setup("Black", "Soldier", p('Ee7'));
    design.setup("Black", "Cannon", p('Ba8'));
    design.setup("Black", "Cannon", p('Be8'));
    design.setup("Black", "Cannon", p('Da8'));
    design.setup("Black", "Cannon", p('De8'));
    design.setup("Black", "Chariot", p('Aa10'));
    design.setup("Black", "Chariot", p('Ae10'));
    design.setup("Black", "Chariot", p('Ea10'));
    design.setup("Black", "Chariot", p('Ee10'));
    design.setup("Black", "Elephant", p('Ac10'));
    design.setup("Black", "Elephant", p('Ca10'));
    design.setup("Black", "Elephant", p('Ce10'));
    design.setup("Black", "Elephant", p('Ec10'));
    design.setup("Black", "Horse", p('Ba10'));
    design.setup("Black", "Horse", p('Be10'));
    design.setup("Black", "Horse", p('Da10'));
    design.setup("Black", "Horse", p('De10'));
    design.setup("Black", "Unicorn", p('Ab10'));
    design.setup("Black", "Unicorn", p('Ad10'));
    design.setup("Black", "Unicorn", p('Eb10'));
    design.setup("Black", "Unicorn", p('Ed10'));
}

Dagaz.View.configure = function(view) {
    const opacity = 0.7;

    view.defBoard3D(356, 698, 1, 260, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "Board1", opacity);
    view.defBoard3D(356, 698, 1, 130, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "Board2", opacity);
    view.defBoard3D(356, 698, 1, 0, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "Board3", opacity);
    view.defBoard3D(356, 698, 1, -130, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "Board2", opacity);
    view.defBoard3D(356, 698, 1, -260, [0xFFEDCB, 0xAC5146, 0xAC5146, 0xAC5146, 0xAC5146, 0xFFEDCB], "Board1", opacity);
 
    const modelPath = '../res/fairy';
    const white = '#FFFF63';
    const black = '#333333';

    view.defPieceModel(0, 1, modelPath, 'pawn', white);
    view.defPieceModel(0, 2, modelPath, 'pawn', black);
    view.defPieceModel(1, 1, modelPath, 'elephant', white);
    view.defPieceModel(1, 2, modelPath, 'elephant', black);
    view.defPieceModel(2, 1, modelPath, 'knight', white);
    view.defPieceModel(2, 2, modelPath, 'knight', black);
    view.defPieceModel(3, 1, modelPath, 'rook', white);
    view.defPieceModel(3, 2, modelPath, 'rook', black);
    view.defPieceModel(4, 1, modelPath, 'cannon', white);
    view.defPieceModel(4, 2, modelPath, 'cannon', black);
    view.defPieceModel(5, 1, modelPath, 'unicorn', white);
    view.defPieceModel(5, 2, modelPath, 'unicorn', black);
    view.defPieceModel(6, 1, modelPath, 'queen', white);
    view.defPieceModel(6, 2, modelPath, 'queen', black);
    view.defPieceModel(7, 1, modelPath, 'king', white);
    view.defPieceModel(7, 2, modelPath, 'king', black);

    view.setCamera(0, 0, 0, -109, 215, 155);
 
    view.defControl("UndoControl", "Undo Move", false, Dagaz.Controller.undo);
    view.defControl("NewControl", "New Game", true, Dagaz.Controller.newGame);
    view.defControl(Dagaz.AI.ON ? "AiOnControl" : "AiOffControl", Dagaz.AI.ON ? "AI" : "No AI", true, Dagaz.Controller.go, Dagaz.AI.ON ? 'diamond-atari-go-board.htm' : 'diamond-atari-go.htm');
    view.defControl(Dagaz.Controller.soundOff ? ["SoundOffControl", "SoundOnControl"] : ["SoundOnControl", "SoundOffControl"], "Sound", true, Dagaz.Controller.switchSound);
    view.defControl("RedoControl", "Redo Move", false, Dagaz.Controller.redo);

    view.defPosition("Ea10", -136, -306, 68, 68, 260);
    view.defPosition("Eb10", -68, -306, 68, 68, 260);
    view.defPosition("Ec10", 0, -306, 68, 68, 260);
    view.defPosition("Ed10", 68, -306, 68, 68, 260);
    view.defPosition("Ee10", 136, -306, 68, 68, 260);
    view.defPosition("Ea9", -136, -238, 68, 68, 260);
    view.defPosition("Eb9", -68, -238, 68, 68, 260);
    view.defPosition("Ec9", 0, -238, 68, 68, 260);
    view.defPosition("Ed9", 68, -238, 68, 68, 260);
    view.defPosition("Ee9", 136, -238, 68, 68, 260);
    view.defPosition("Ea8", -136, -170, 68, 68, 260);
    view.defPosition("Eb8", -68, -170, 68, 68, 260);
    view.defPosition("Ec8", 0, -170, 68, 68, 260);
    view.defPosition("Ed8", 68, -170, 68, 68, 260);
    view.defPosition("Ee8", 136, -170, 68, 68, 260);
    view.defPosition("Ea7", -136, -102, 68, 68, 260);
    view.defPosition("Eb7", -68, -102, 68, 68, 260);
    view.defPosition("Ec7", 0, -102, 68, 68, 260);
    view.defPosition("Ed7", 68, -102, 68, 68, 260);
    view.defPosition("Ee7", 136, -102, 68, 68, 260);
    view.defPosition("Ea6", -136, -34, 68, 68, 260);
    view.defPosition("Eb6", -68, -34, 68, 68, 260);
    view.defPosition("Ec6", 0, -34, 68, 68, 260);
    view.defPosition("Ed6", 68, -34, 68, 68, 260);
    view.defPosition("Ee6", 136, -34, 68, 68, 260);
    view.defPosition("Ea5", -136, 34, 68, 68, 260);
    view.defPosition("Eb5", -68, 34, 68, 68, 260);
    view.defPosition("Ec5", 0, 34, 68, 68, 260);
    view.defPosition("Ed5", 68, 34, 68, 68, 260);
    view.defPosition("Ee5", 136, 34, 68, 68, 260);
    view.defPosition("Ea4", -136, 102, 68, 68, 260);
    view.defPosition("Eb4", -68, 102, 68, 68, 260);
    view.defPosition("Ec4", 0, 102, 68, 68, 260);
    view.defPosition("Ed4", 68, 102, 68, 68, 260);
    view.defPosition("Ee4", 136, 102, 68, 68, 260);
    view.defPosition("Ea3", -136, 170, 68, 68, 260);
    view.defPosition("Eb3", -68, 170, 68, 68, 260);
    view.defPosition("Ec3", 0, 170, 68, 68, 260);
    view.defPosition("Ed3", 68, 170, 68, 68, 260);
    view.defPosition("Ee3", 136, 170, 68, 68, 260);
    view.defPosition("Ea2", -136, 238, 68, 68, 260);
    view.defPosition("Eb2", -68, 238, 68, 68, 260);
    view.defPosition("Ec2", 0, 238, 68, 68, 260);
    view.defPosition("Ed2", 68, 238, 68, 68, 260);
    view.defPosition("Ee2", 136, 238, 68, 68, 260);
    view.defPosition("Ea1", -136, 306, 68, 68, 260);
    view.defPosition("Eb1", -68, 306, 68, 68, 260);
    view.defPosition("Ec1", 0, 306, 68, 68, 260);
    view.defPosition("Ed1", 68, 306, 68, 68, 260);
    view.defPosition("Ee1", 136, 306, 68, 68, 260);

    view.defPosition("Da10", -136, -306, 68, 68, 130);
    view.defPosition("Db10", -68, -306, 68, 68, 130);
    view.defPosition("Dc10", 0, -306, 68, 68, 130);
    view.defPosition("Dd10", 68, -306, 68, 68, 130);
    view.defPosition("De10", 136, -306, 68, 68, 130);
    view.defPosition("Da9", -136, -238, 68, 68, 130);
    view.defPosition("Db9", -68, -238, 68, 68, 130);
    view.defPosition("Dc9", 0, -238, 68, 68, 130);
    view.defPosition("Dd9", 68, -238, 68, 68, 130);
    view.defPosition("De9", 136, -238, 68, 68, 130);
    view.defPosition("Da8", -136, -170, 68, 68, 130);
    view.defPosition("Db8", -68, -170, 68, 68, 130);
    view.defPosition("Dc8", 0, -170, 68, 68, 130);
    view.defPosition("Dd8", 68, -170, 68, 68, 130);
    view.defPosition("De8", 136, -170, 68, 68, 130);
    view.defPosition("Da7", -136, -102, 68, 68, 130);
    view.defPosition("Db7", -68, -102, 68, 68, 130);
    view.defPosition("Dc7", 0, -102, 68, 68, 130);
    view.defPosition("Dd7", 68, -102, 68, 68, 130);
    view.defPosition("De7", 136, -102, 68, 68, 130);
    view.defPosition("Da6", -136, -34, 68, 68, 130);
    view.defPosition("Db6", -68, -34, 68, 68, 130);
    view.defPosition("Dc6", 0, -34, 68, 68, 130);
    view.defPosition("Dd6", 68, -34, 68, 68, 130);
    view.defPosition("De6", 136, -34, 68, 68, 130);
    view.defPosition("Da5", -136, 34, 68, 68, 130);
    view.defPosition("Db5", -68, 34, 68, 68, 130);
    view.defPosition("Dc5", 0, 34, 68, 68, 130);
    view.defPosition("Dd5", 68, 34, 68, 68, 130);
    view.defPosition("De5", 136, 34, 68, 68, 130);
    view.defPosition("Da4", -136, 102, 68, 68, 130);
    view.defPosition("Db4", -68, 102, 68, 68, 130);
    view.defPosition("Dc4", 0, 102, 68, 68, 130);
    view.defPosition("Dd4", 68, 102, 68, 68, 130);
    view.defPosition("De4", 136, 102, 68, 68, 130);
    view.defPosition("Da3", -136, 170, 68, 68, 130);
    view.defPosition("Db3", -68, 170, 68, 68, 130);
    view.defPosition("Dc3", 0, 170, 68, 68, 130);
    view.defPosition("Dd3", 68, 170, 68, 68, 130);
    view.defPosition("De3", 136, 170, 68, 68, 130);
    view.defPosition("Da2", -136, 238, 68, 68, 130);
    view.defPosition("Db2", -68, 238, 68, 68, 130);
    view.defPosition("Dc2", 0, 238, 68, 68, 130);
    view.defPosition("Dd2", 68, 238, 68, 68, 130);
    view.defPosition("De2", 136, 238, 68, 68, 130);
    view.defPosition("Da1", -136, 306, 68, 68, 130);
    view.defPosition("Db1", -68, 306, 68, 68, 130);
    view.defPosition("Dc1", 0, 306, 68, 68, 130);
    view.defPosition("Dd1", 68, 306, 68, 68, 130);
    view.defPosition("De1", 136, 306, 68, 68, 130);

    view.defPosition("Ca10", -136, -306, 68, 68, 0);
    view.defPosition("Cb10", -68, -306, 68, 68, 0);
    view.defPosition("Cc10", 0, -306, 68, 68, 0);
    view.defPosition("Cd10", 68, -306, 68, 68, 0);
    view.defPosition("Ce10", 136, -306, 68, 68, 0);
    view.defPosition("Ca9", -136, -238, 68, 68, 0);
    view.defPosition("Cb9", -68, -238, 68, 68, 0);
    view.defPosition("Cc9", 0, -238, 68, 68, 0);
    view.defPosition("Cd9", 68, -238, 68, 68, 0);
    view.defPosition("Ce9", 136, -238, 68, 68, 0);
    view.defPosition("Ca8", -136, -170, 68, 68, 0);
    view.defPosition("Cb8", -68, -170, 68, 68, 0);
    view.defPosition("Cc8", 0, -170, 68, 68, 0);
    view.defPosition("Cd8", 68, -170, 68, 68, 0);
    view.defPosition("Ce8", 136, -170, 68, 68, 0);
    view.defPosition("Ca7", -136, -102, 68, 68, 0);
    view.defPosition("Cb7", -68, -102, 68, 68, 0);
    view.defPosition("Cc7", 0, -102, 68, 68, 0);
    view.defPosition("Cd7", 68, -102, 68, 68, 0);
    view.defPosition("Ce7", 136, -102, 68, 68, 0);
    view.defPosition("Ca6", -136, -34, 68, 68, 0);
    view.defPosition("Cb6", -68, -34, 68, 68, 0);
    view.defPosition("Cc6", 0, -34, 68, 68, 0);
    view.defPosition("Cd6", 68, -34, 68, 68, 0);
    view.defPosition("Ce6", 136, -34, 68, 68, 0);
    view.defPosition("Ca5", -136, 34, 68, 68, 0);
    view.defPosition("Cb5", -68, 34, 68, 68, 0);
    view.defPosition("Cc5", 0, 34, 68, 68, 0);
    view.defPosition("Cd5", 68, 34, 68, 68, 0);
    view.defPosition("Ce5", 136, 34, 68, 68, 0);
    view.defPosition("Ca4", -136, 102, 68, 68, 0);
    view.defPosition("Cb4", -68, 102, 68, 68, 0);
    view.defPosition("Cc4", 0, 102, 68, 68, 0);
    view.defPosition("Cd4", 68, 102, 68, 68, 0);
    view.defPosition("Ce4", 136, 102, 68, 68, 0);
    view.defPosition("Ca3", -136, 170, 68, 68, 0);
    view.defPosition("Cb3", -68, 170, 68, 68, 0);
    view.defPosition("Cc3", 0, 170, 68, 68, 0);
    view.defPosition("Cd3", 68, 170, 68, 68, 0);
    view.defPosition("Ce3", 136, 170, 68, 68, 0);
    view.defPosition("Ca2", -136, 238, 68, 68, 0);
    view.defPosition("Cb2", -68, 238, 68, 68, 0);
    view.defPosition("Cc2", 0, 238, 68, 68, 0);
    view.defPosition("Cd2", 68, 238, 68, 68, 0);
    view.defPosition("Ce2", 136, 238, 68, 68, 0);
    view.defPosition("Ca1", -136, 306, 68, 68, 0);
    view.defPosition("Cb1", -68, 306, 68, 68, 0);
    view.defPosition("Cc1", 0, 306, 68, 68, 0);
    view.defPosition("Cd1", 68, 306, 68, 68, 0);
    view.defPosition("Ce1", 136, 306, 68, 68, 0);

    view.defPosition("Ba10", -136, -306, 68, 68, -130);
    view.defPosition("Bb10", -68, -306, 68, 68, -130);
    view.defPosition("Bc10", 0, -306, 68, 68, -130);
    view.defPosition("Bd10", 68, -306, 68, 68, -130);
    view.defPosition("Be10", 136, -306, 68, 68, -130);
    view.defPosition("Ba9", -136, -238, 68, 68, -130);
    view.defPosition("Bb9", -68, -238, 68, 68, -130);
    view.defPosition("Bc9", 0, -238, 68, 68, -130);
    view.defPosition("Bd9", 68, -238, 68, 68, -130);
    view.defPosition("Be9", 136, -238, 68, 68, -130);
    view.defPosition("Ba8", -136, -170, 68, 68, -130);
    view.defPosition("Bb8", -68, -170, 68, 68, -130);
    view.defPosition("Bc8", 0, -170, 68, 68, -130);
    view.defPosition("Bd8", 68, -170, 68, 68, -130);
    view.defPosition("Be8", 136, -170, 68, 68, -130);
    view.defPosition("Ba7", -136, -102, 68, 68, -130);
    view.defPosition("Bb7", -68, -102, 68, 68, -130);
    view.defPosition("Bc7", 0, -102, 68, 68, -130);
    view.defPosition("Bd7", 68, -102, 68, 68, -130);
    view.defPosition("Be7", 136, -102, 68, 68, -130);
    view.defPosition("Ba6", -136, -34, 68, 68, -130);
    view.defPosition("Bb6", -68, -34, 68, 68, -130);
    view.defPosition("Bc6", 0, -34, 68, 68, -130);
    view.defPosition("Bd6", 68, -34, 68, 68, -130);
    view.defPosition("Be6", 136, -34, 68, 68, -130);
    view.defPosition("Ba5", -136, 34, 68, 68, -130);
    view.defPosition("Bb5", -68, 34, 68, 68, -130);
    view.defPosition("Bc5", 0, 34, 68, 68, -130);
    view.defPosition("Bd5", 68, 34, 68, 68, -130);
    view.defPosition("Be5", 136, 34, 68, 68, -130);
    view.defPosition("Ba4", -136, 102, 68, 68, -130);
    view.defPosition("Bb4", -68, 102, 68, 68, -130);
    view.defPosition("Bc4", 0, 102, 68, 68, -130);
    view.defPosition("Bd4", 68, 102, 68, 68, -130);
    view.defPosition("Be4", 136, 102, 68, 68, -130);
    view.defPosition("Ba3", -136, 170, 68, 68, -130);
    view.defPosition("Bb3", -68, 170, 68, 68, -130);
    view.defPosition("Bc3", 0, 170, 68, 68, -130);
    view.defPosition("Bd3", 68, 170, 68, 68, -130);
    view.defPosition("Be3", 136, 170, 68, 68, -130);
    view.defPosition("Ba2", -136, 238, 68, 68, -130);
    view.defPosition("Bb2", -68, 238, 68, 68, -130);
    view.defPosition("Bc2", 0, 238, 68, 68, -130);
    view.defPosition("Bd2", 68, 238, 68, 68, -130);
    view.defPosition("Be2", 136, 238, 68, 68, -130);
    view.defPosition("Ba1", -136, 306, 68, 68, -130);
    view.defPosition("Bb1", -68, 306, 68, 68, -130);
    view.defPosition("Bc1", 0, 306, 68, 68, -130);
    view.defPosition("Bd1", 68, 306, 68, 68, -130);
    view.defPosition("Be1", 136, 306, 68, 68, -130);

    view.defPosition("Aa10", -136, -306, 68, 68, -260);
    view.defPosition("Ab10", -68, -306, 68, 68, -260);
    view.defPosition("Ac10", 0, -306, 68, 68, -260);
    view.defPosition("Ad10", 68, -306, 68, 68, -260);
    view.defPosition("Ae10", 136, -306, 68, 68, -260);
    view.defPosition("Aa9", -136, -238, 68, 68, -260);
    view.defPosition("Ab9", -68, -238, 68, 68, -260);
    view.defPosition("Ac9", 0, -238, 68, 68, -260);
    view.defPosition("Ad9", 68, -238, 68, 68, -260);
    view.defPosition("Ae9", 136, -238, 68, 68, -260);
    view.defPosition("Aa8", -136, -170, 68, 68, -260);
    view.defPosition("Ab8", -68, -170, 68, 68, -260);
    view.defPosition("Ac8", 0, -170, 68, 68, -260);
    view.defPosition("Ad8", 68, -170, 68, 68, -260);
    view.defPosition("Ae8", 136, -170, 68, 68, -260);
    view.defPosition("Aa7", -136, -102, 68, 68, -260);
    view.defPosition("Ab7", -68, -102, 68, 68, -260);
    view.defPosition("Ac7", 0, -102, 68, 68, -260);
    view.defPosition("Ad7", 68, -102, 68, 68, -260);
    view.defPosition("Ae7", 136, -102, 68, 68, -260);
    view.defPosition("Aa6", -136, -34, 68, 68, -260);
    view.defPosition("Ab6", -68, -34, 68, 68, -260);
    view.defPosition("Ac6", 0, -34, 68, 68, -260);
    view.defPosition("Ad6", 68, -34, 68, 68, -260);
    view.defPosition("Ae6", 136, -34, 68, 68, -260);
    view.defPosition("Aa5", -136, 34, 68, 68, -260);
    view.defPosition("Ab5", -68, 34, 68, 68, -260);
    view.defPosition("Ac5", 0, 34, 68, 68, -260);
    view.defPosition("Ad5", 68, 34, 68, 68, -260);
    view.defPosition("Ae5", 136, 34, 68, 68, -260);
    view.defPosition("Aa4", -136, 102, 68, 68, -260);
    view.defPosition("Ab4", -68, 102, 68, 68, -260);
    view.defPosition("Ac4", 0, 102, 68, 68, -260);
    view.defPosition("Ad4", 68, 102, 68, 68, -260);
    view.defPosition("Ae4", 136, 102, 68, 68, -260);
    view.defPosition("Aa3", -136, 170, 68, 68, -260);
    view.defPosition("Ab3", -68, 170, 68, 68, -260);
    view.defPosition("Ac3", 0, 170, 68, 68, -260);
    view.defPosition("Ad3", 68, 170, 68, 68, -260);
    view.defPosition("Ae3", 136, 170, 68, 68, -260);
    view.defPosition("Aa2", -136, 238, 68, 68, -260);
    view.defPosition("Ab2", -68, 238, 68, 68, -260);
    view.defPosition("Ac2", 0, 238, 68, 68, -260);
    view.defPosition("Ad2", 68, 238, 68, 68, -260);
    view.defPosition("Ae2", 136, 238, 68, 68, -260);
    view.defPosition("Aa1", -136, 306, 68, 68, -260);
    view.defPosition("Ab1", -68, 306, 68, 68, -260);
    view.defPosition("Ac1", 0, 306, 68, 68, -260);
    view.defPosition("Ad1", 68, 306, 68, 68, -260);
    view.defPosition("Ae1", 136, 306, 68, 68, -260);
}
