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
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("pass-turn", "forced");
    design.checkVersion("qiquo-extension", "true");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("ne");
    design.addDirection("n");
    design.addDirection("se");
    design.addDirection("sw");
    design.addDirection("nw");

    design.addPlayer("Qin", [1, 0, 4, 6, 2, 7, 3, 5]);
    design.addPlayer("Chu", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPlayer("Han", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPlayer("Qi", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPlayer("Wei", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPlayer("Zhao", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPlayer("Yan", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addPlayer("Zhou", [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addTurn(1);
    design.addTurn(2);
    design.addTurn(3);
    design.addTurn(4);
    design.addTurn(5);
    design.addTurn(6);
    design.addTurn(7);


    design.addPosition("19A", [0, 1, 19, 0, 0, 20, 0, 0]);
    design.addPosition("18A", [-1, 1, 19, 0, 0, 20, 18, 0]);
    design.addPosition("17A", [-1, 1, 19, 0, 0, 20, 18, 0]);
    design.addPosition("16A", [-1, 1, 19, 0, 0, 20, 18, 0]);
    design.addPosition("15A", [-1, 1, 19, 0, 0, 20, 18, 0]);
    design.addPosition("14A", [-1, 1, 19, 0, 0, 20, 18, 0]);
    design.addPosition("13A", [-1, 1, 19, 0, 0, 20, 18, 0]);
    design.addPosition("12A", [-1, 1, 19, 0, 0, 20, 18, 0]);
    design.addPosition("11A", [-1, 1, 19, 0, 0, 20, 18, 0]);
    design.addPosition("10A", [-1, 1, 19, 0, 0, 20, 18, 0]);
    design.addPosition("9A", [-1, 1, 19, 0, 0, 20, 18, 0]);
    design.addPosition("8A", [-1, 1, 19, 0, 0, 20, 18, 0]);
    design.addPosition("7A", [-1, 1, 19, 0, 0, 20, 18, 0]);
    design.addPosition("6A", [-1, 1, 19, 0, 0, 20, 18, 0]);
    design.addPosition("5A", [-1, 1, 19, 0, 0, 20, 18, 0]);
    design.addPosition("4A", [-1, 1, 19, 0, 0, 20, 18, 0]);
    design.addPosition("3A", [-1, 1, 19, 0, 0, 20, 18, 0]);
    design.addPosition("2A", [-1, 1, 19, 0, 0, 20, 18, 0]);
    design.addPosition("1A", [-1, 0, 19, 0, 0, 0, 18, 0]);
    design.addPosition("19B", [0, 1, 19, -18, -19, 20, 0, 0]);
    design.addPosition("18B", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("17B", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("16B", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("15B", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("14B", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("13B", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("12B", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("11B", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("10B", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("9B", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("8B", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("7B", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("6B", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("5B", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("4B", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("3B", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("2B", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("1B", [-1, 0, 19, 0, -19, 0, 18, -20]);
    design.addPosition("19C", [0, 1, 19, -18, -19, 20, 0, 0]);
    design.addPosition("18C", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("17C", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("16C", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("15C", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("14C", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("13C", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("12C", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("11C", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("10C", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("9C", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("8C", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("7C", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("6C", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("5C", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("4C", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("3C", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("2C", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("1C", [-1, 0, 19, 0, -19, 0, 18, -20]);
    design.addPosition("19D", [0, 1, 19, -18, -19, 20, 0, 0]);
    design.addPosition("18D", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("17D", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("16D", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("15D", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("14D", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("13D", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("12D", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("11D", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("10D", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("9D", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("8D", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("7D", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("6D", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("5D", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("4D", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("3D", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("2D", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("1D", [-1, 0, 19, 0, -19, 0, 18, -20]);
    design.addPosition("19E", [0, 1, 19, -18, -19, 20, 0, 0]);
    design.addPosition("18E", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("17E", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("16E", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("15E", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("14E", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("13E", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("12E", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("11E", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("10E", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("9E", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("8E", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("7E", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("6E", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("5E", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("4E", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("3E", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("2E", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("1E", [-1, 0, 19, 0, -19, 0, 18, -20]);
    design.addPosition("19F", [0, 1, 19, -18, -19, 20, 0, 0]);
    design.addPosition("18F", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("17F", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("16F", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("15F", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("14F", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("13F", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("12F", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("11F", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("10F", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("9F", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("8F", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("7F", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("6F", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("5F", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("4F", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("3F", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("2F", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("1F", [-1, 0, 19, 0, -19, 0, 18, -20]);
    design.addPosition("19G", [0, 1, 19, -18, -19, 20, 0, 0]);
    design.addPosition("18G", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("17G", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("16G", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("15G", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("14G", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("13G", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("12G", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("11G", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("10G", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("9G", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("8G", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("7G", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("6G", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("5G", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("4G", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("3G", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("2G", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("1G", [-1, 0, 19, 0, -19, 0, 18, -20]);
    design.addPosition("19H", [0, 1, 19, -18, -19, 20, 0, 0]);
    design.addPosition("18H", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("17H", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("16H", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("15H", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("14H", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("13H", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("12H", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("11H", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("10H", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("9H", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("8H", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("7H", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("6H", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("5H", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("4H", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("3H", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("2H", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("1H", [-1, 0, 19, 0, -19, 0, 18, -20]);
    design.addPosition("19I", [0, 1, 19, -18, -19, 20, 0, 0]);
    design.addPosition("18I", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("17I", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("16I", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("15I", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("14I", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("13I", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("12I", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("11I", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("10I", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("9I", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("8I", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("7I", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("6I", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("5I", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("4I", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("3I", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("2I", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("1I", [-1, 0, 19, 0, -19, 0, 18, -20]);
    design.addPosition("19J", [0, 1, 19, -18, -19, 20, 0, 0]);
    design.addPosition("18J", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("17J", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("16J", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("15J", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("14J", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("13J", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("12J", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("11J", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("10J", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("9J", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("8J", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("7J", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("6J", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("5J", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("4J", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("3J", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("2J", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("1J", [-1, 0, 19, 0, -19, 0, 18, -20]);
    design.addPosition("19K", [0, 1, 19, -18, -19, 20, 0, 0]);
    design.addPosition("18K", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("17K", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("16K", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("15K", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("14K", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("13K", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("12K", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("11K", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("10K", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("9K", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("8K", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("7K", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("6K", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("5K", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("4K", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("3K", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("2K", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("1K", [-1, 0, 19, 0, -19, 0, 18, -20]);
    design.addPosition("19L", [0, 1, 19, -18, -19, 20, 0, 0]);
    design.addPosition("18L", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("17L", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("16L", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("15L", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("14L", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("13L", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("12L", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("11L", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("10L", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("9L", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("8L", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("7L", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("6L", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("5L", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("4L", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("3L", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("2L", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("1L", [-1, 0, 19, 0, -19, 0, 18, -20]);
    design.addPosition("19M", [0, 1, 19, -18, -19, 20, 0, 0]);
    design.addPosition("18M", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("17M", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("16M", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("15M", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("14M", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("13M", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("12M", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("11M", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("10M", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("9M", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("8M", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("7M", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("6M", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("5M", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("4M", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("3M", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("2M", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("1M", [-1, 0, 19, 0, -19, 0, 18, -20]);
    design.addPosition("19N", [0, 1, 19, -18, -19, 20, 0, 0]);
    design.addPosition("18N", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("17N", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("16N", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("15N", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("14N", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("13N", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("12N", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("11N", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("10N", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("9N", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("8N", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("7N", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("6N", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("5N", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("4N", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("3N", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("2N", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("1N", [-1, 0, 19, 0, -19, 0, 18, -20]);
    design.addPosition("19O", [0, 1, 19, -18, -19, 20, 0, 0]);
    design.addPosition("18O", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("17O", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("16O", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("15O", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("14O", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("13O", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("12O", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("11O", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("10O", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("9O", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("8O", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("7O", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("6O", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("5O", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("4O", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("3O", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("2O", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("1O", [-1, 0, 19, 0, -19, 0, 18, -20]);
    design.addPosition("19P", [0, 1, 19, -18, -19, 20, 0, 0]);
    design.addPosition("18P", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("17P", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("16P", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("15P", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("14P", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("13P", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("12P", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("11P", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("10P", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("9P", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("8P", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("7P", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("6P", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("5P", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("4P", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("3P", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("2P", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("1P", [-1, 0, 19, 0, -19, 0, 18, -20]);
    design.addPosition("19Q", [0, 1, 19, -18, -19, 20, 0, 0]);
    design.addPosition("18Q", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("17Q", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("16Q", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("15Q", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("14Q", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("13Q", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("12Q", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("11Q", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("10Q", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("9Q", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("8Q", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("7Q", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("6Q", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("5Q", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("4Q", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("3Q", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("2Q", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("1Q", [-1, 0, 19, 0, -19, 0, 18, -20]);
    design.addPosition("19R", [0, 1, 19, -18, -19, 20, 0, 0]);
    design.addPosition("18R", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("17R", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("16R", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("15R", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("14R", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("13R", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("12R", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("11R", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("10R", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("9R", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("8R", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("7R", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("6R", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("5R", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("4R", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("3R", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("2R", [-1, 1, 19, -18, -19, 20, 18, -20]);
    design.addPosition("1R", [-1, 0, 19, 0, -19, 0, 18, -20]);
    design.addPosition("19S", [0, 1, 0, -18, -19, 0, 0, 0]);
    design.addPosition("18S", [-1, 1, 0, -18, -19, 0, 0, -20]);
    design.addPosition("17S", [-1, 1, 0, -18, -19, 0, 0, -20]);
    design.addPosition("16S", [-1, 1, 0, -18, -19, 0, 0, -20]);
    design.addPosition("15S", [-1, 1, 0, -18, -19, 0, 0, -20]);
    design.addPosition("14S", [-1, 1, 0, -18, -19, 0, 0, -20]);
    design.addPosition("13S", [-1, 1, 0, -18, -19, 0, 0, -20]);
    design.addPosition("12S", [-1, 1, 0, -18, -19, 0, 0, -20]);
    design.addPosition("11S", [-1, 1, 0, -18, -19, 0, 0, -20]);
    design.addPosition("10S", [-1, 1, 0, -18, -19, 0, 0, -20]);
    design.addPosition("9S", [-1, 1, 0, -18, -19, 0, 0, -20]);
    design.addPosition("8S", [-1, 1, 0, -18, -19, 0, 0, -20]);
    design.addPosition("7S", [-1, 1, 0, -18, -19, 0, 0, -20]);
    design.addPosition("6S", [-1, 1, 0, -18, -19, 0, 0, -20]);
    design.addPosition("5S", [-1, 1, 0, -18, -19, 0, 0, -20]);
    design.addPosition("4S", [-1, 1, 0, -18, -19, 0, 0, -20]);
    design.addPosition("3S", [-1, 1, 0, -18, -19, 0, 0, -20]);
    design.addPosition("2S", [-1, 1, 0, -18, -19, 0, 0, -20]);
    design.addPosition("1S", [-1, 0, 0, 0, -19, 0, 0, -20]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	7);
    design.addCommand(0, ZRF.FORK,	3);
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end
    design.addCommand(0, ZRF.PARAM,	1);	// $2
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.JUMP,	-8);
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.LITERAL,	3);	// Xing
    design.addCommand(0, ZRF.FUNCTION,	10);	// piece?
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
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	7);
    design.addCommand(2, ZRF.FORK,	3);
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.JUMP,	-8);
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	2);	// $3
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	4);
    design.addCommand(2, ZRF.PARAM,	3);	// $4
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.JUMP,	-5);
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.LITERAL,	3);	// Xing
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.LITERAL,	3);	// Xing
    design.addCommand(3, ZRF.FUNCTION,	10);	// piece?
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
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.LITERAL,	3);	// Xing
    design.addCommand(4, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
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
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	2);	// $3
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.LITERAL,	3);	// Xing
    design.addCommand(5, ZRF.FUNCTION,	10);	// piece?
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
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	2);	// $3
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.PARAM,	3);	// $4
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.LITERAL,	3);	// Xing
    design.addCommand(6, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
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
    design.addCommand(7, ZRF.PARAM,	2);	// $3
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	3);	// $4
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PARAM,	4);	// $5
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.LITERAL,	3);	// Xing
    design.addCommand(7, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end


    design.addPiece("Jiang", 0, 1000);
    design.addMove(0, 0, [1, 1], 0);
    design.addMove(0, 0, [2, 2], 0);
    design.addMove(0, 0, [0, 0], 0);
    design.addMove(0, 0, [4, 4], 0);
    design.addMove(0, 0, [3, 3], 0);
    design.addMove(0, 0, [5, 5], 0);
    design.addMove(0, 0, [6, 6], 0);
    design.addMove(0, 0, [7, 7], 0);

    design.addPiece("Pian", 1, 128);
    design.addMove(1, 0, [1, 1], 0);
    design.addMove(1, 0, [2, 2], 0);
    design.addMove(1, 0, [0, 0], 0);
    design.addMove(1, 0, [4, 4], 0);

    design.addPiece("Bai", 2, 80);
    design.addMove(2, 0, [3, 3], 0);
    design.addMove(2, 0, [5, 5], 0);
    design.addMove(2, 0, [6, 6], 0);
    design.addMove(2, 0, [7, 7], 0);

    design.addPiece("Xing", 3, 0);
    design.addMove(3, 1, [1, 1], 0);
    design.addMove(3, 1, [2, 2], 0);
    design.addMove(3, 1, [0, 0], 0);
    design.addMove(3, 1, [4, 4], 0);
    design.addMove(3, 1, [3, 3], 0);
    design.addMove(3, 1, [5, 5], 0);
    design.addMove(3, 1, [6, 6], 0);
    design.addMove(3, 1, [7, 7], 0);

    design.addPiece("Pao", 4, 112);
    design.addMove(4, 2, [1, 1, 1, 1], 0);
    design.addMove(4, 2, [2, 2, 2, 2], 0);
    design.addMove(4, 2, [0, 0, 0, 0], 0);
    design.addMove(4, 2, [4, 4, 4, 4], 0);

    design.addPiece("Gong", 5, 32);
    design.addMove(5, 3, [4], 0);
    design.addMove(5, 3, [2], 0);
    design.addMove(5, 3, [0], 0);
    design.addMove(5, 3, [1], 0);
    design.addMove(5, 3, [7], 0);
    design.addMove(5, 3, [6], 0);
    design.addMove(5, 3, [3], 0);
    design.addMove(5, 3, [5], 0);
    design.addMove(5, 4, [4, 4], 0);
    design.addMove(5, 4, [2, 2], 0);
    design.addMove(5, 4, [0, 0], 0);
    design.addMove(5, 4, [1, 1], 0);
    design.addMove(5, 4, [7, 7], 0);
    design.addMove(5, 4, [6, 6], 0);
    design.addMove(5, 4, [3, 3], 0);
    design.addMove(5, 4, [5, 5], 0);
    design.addMove(5, 5, [4, 4, 4], 0);
    design.addMove(5, 5, [2, 2, 2], 0);
    design.addMove(5, 5, [0, 0, 0], 0);
    design.addMove(5, 5, [1, 1, 1], 0);
    design.addMove(5, 5, [7, 7, 7], 0);
    design.addMove(5, 5, [6, 6, 6], 0);
    design.addMove(5, 5, [3, 3, 3], 0);
    design.addMove(5, 5, [5, 5, 5], 0);
    design.addMove(5, 6, [4, 4, 4, 4], 0);
    design.addMove(5, 6, [2, 2, 2, 2], 0);
    design.addMove(5, 6, [0, 0, 0, 0], 0);
    design.addMove(5, 6, [1, 1, 1, 1], 0);
    design.addMove(5, 6, [7, 7, 7, 7], 0);
    design.addMove(5, 6, [6, 6, 6, 6], 0);
    design.addMove(5, 6, [3, 3, 3, 3], 0);
    design.addMove(5, 6, [5, 5, 5, 5], 0);

    design.addPiece("Nu", 6, 40);
    design.addMove(6, 3, [4], 0);
    design.addMove(6, 3, [2], 0);
    design.addMove(6, 3, [0], 0);
    design.addMove(6, 3, [1], 0);
    design.addMove(6, 3, [7], 0);
    design.addMove(6, 3, [6], 0);
    design.addMove(6, 3, [3], 0);
    design.addMove(6, 3, [5], 0);
    design.addMove(6, 4, [4, 4], 0);
    design.addMove(6, 4, [2, 2], 0);
    design.addMove(6, 4, [0, 0], 0);
    design.addMove(6, 4, [1, 1], 0);
    design.addMove(6, 4, [7, 7], 0);
    design.addMove(6, 4, [6, 6], 0);
    design.addMove(6, 4, [3, 3], 0);
    design.addMove(6, 4, [5, 5], 0);
    design.addMove(6, 5, [4, 4, 4], 0);
    design.addMove(6, 5, [2, 2, 2], 0);
    design.addMove(6, 5, [0, 0, 0], 0);
    design.addMove(6, 5, [1, 1, 1], 0);
    design.addMove(6, 5, [7, 7, 7], 0);
    design.addMove(6, 5, [6, 6, 6], 0);
    design.addMove(6, 5, [3, 3, 3], 0);
    design.addMove(6, 5, [5, 5, 5], 0);
    design.addMove(6, 6, [4, 4, 4, 4], 0);
    design.addMove(6, 6, [2, 2, 2, 2], 0);
    design.addMove(6, 6, [0, 0, 0, 0], 0);
    design.addMove(6, 6, [1, 1, 1, 1], 0);
    design.addMove(6, 6, [7, 7, 7, 7], 0);
    design.addMove(6, 6, [6, 6, 6, 6], 0);
    design.addMove(6, 6, [3, 3, 3, 3], 0);
    design.addMove(6, 6, [5, 5, 5, 5], 0);
    design.addMove(6, 7, [4, 4, 4, 4, 4], 0);
    design.addMove(6, 7, [2, 2, 2, 2, 2], 0);
    design.addMove(6, 7, [0, 0, 0, 0, 0], 0);
    design.addMove(6, 7, [1, 1, 1, 1, 1], 0);
    design.addMove(6, 7, [7, 7, 7, 7, 7], 0);
    design.addMove(6, 7, [6, 6, 6, 6, 6], 0);
    design.addMove(6, 7, [3, 3, 3, 3, 3], 0);
    design.addMove(6, 7, [5, 5, 5, 5, 5], 0);

    design.addPiece("Ma", 7);
    design.addMove(7, 3, [4], 0);
    design.addMove(7, 3, [2], 0);
    design.addMove(7, 3, [0], 0);
    design.addMove(7, 3, [1], 0);
    design.addMove(7, 4, [4, 7], 0);
    design.addMove(7, 4, [4, 3], 0);
    design.addMove(7, 4, [1, 3], 0);
    design.addMove(7, 4, [1, 5], 0);
    design.addMove(7, 4, [2, 6], 0);
    design.addMove(7, 4, [2, 5], 0);
    design.addMove(7, 4, [0, 7], 0);
    design.addMove(7, 4, [0, 6], 0);
    design.addMove(7, 5, [4, 7, 7], 0);
    design.addMove(7, 5, [4, 3, 3], 0);
    design.addMove(7, 5, [1, 3, 3], 0);
    design.addMove(7, 5, [1, 5, 5], 0);
    design.addMove(7, 5, [2, 6, 6], 0);
    design.addMove(7, 5, [2, 5, 5], 0);
    design.addMove(7, 5, [0, 7, 7], 0);
    design.addMove(7, 5, [0, 6, 6], 0);
    design.addMove(7, 6, [4, 7, 7, 7], 0);
    design.addMove(7, 6, [4, 3, 3, 3], 0);
    design.addMove(7, 6, [1, 3, 3, 3], 0);
    design.addMove(7, 6, [1, 5, 5, 5], 0);
    design.addMove(7, 6, [2, 6, 6, 6], 0);
    design.addMove(7, 6, [2, 5, 5, 5], 0);
    design.addMove(7, 6, [0, 7, 7, 7], 0);
    design.addMove(7, 6, [0, 6, 6, 6], 0);

    design.addPiece("Dao", 8, 4);
    design.addMove(8, 3, [7], 0);
    design.addMove(8, 3, [6], 0);
    design.addMove(8, 3, [3], 0);
    design.addMove(8, 3, [5], 0);

    design.addPiece("Jian", 9, 4);
    design.addMove(9, 3, [4], 0);
    design.addMove(9, 3, [2], 0);
    design.addMove(9, 3, [0], 0);
    design.addMove(9, 3, [1], 0);

    design.setup("Zhou", "Xing", 180);
    design.setup("Chu", "Jiang", 347);
    design.setup("Chu", "Pian", 346);
    design.setup("Chu", "Bai", 348);
    design.setup("Chu", "Pao", 328);
    design.setup("Chu", "Jian", 349);
    design.setup("Chu", "Jian", 345);
    design.setup("Chu", "Jian", 329);
    design.setup("Chu", "Jian", 327);
    design.setup("Chu", "Dao", 310);
    design.setup("Chu", "Dao", 308);
    design.setup("Chu", "Ma", 350);
    design.setup("Chu", "Ma", 344);
    design.setup("Chu", "Ma", 330);
    design.setup("Chu", "Ma", 326);
    design.setup("Chu", "Nu", 309);
    design.setup("Chu", "Gong", 290);
    design.setup("Chu", "Xing", 271);
    design.setup("Han", "Jiang", 355);
    design.setup("Han", "Pian", 354);
    design.setup("Han", "Bai", 356);
    design.setup("Han", "Pao", 336);
    design.setup("Han", "Jian", 357);
    design.setup("Han", "Jian", 353);
    design.setup("Han", "Jian", 337);
    design.setup("Han", "Jian", 335);
    design.setup("Han", "Dao", 318);
    design.setup("Han", "Dao", 316);
    design.setup("Han", "Ma", 358);
    design.setup("Han", "Ma", 352);
    design.setup("Han", "Ma", 338);
    design.setup("Han", "Ma", 334);
    design.setup("Han", "Nu", 317);
    design.setup("Han", "Gong", 298);
    design.setup("Han", "Xing", 279);
    design.setup("Qi", "Jiang", 265);
    design.setup("Qi", "Pian", 284);
    design.setup("Qi", "Bai", 246);
    design.setup("Qi", "Pao", 264);
    design.setup("Qi", "Jian", 303);
    design.setup("Qi", "Jian", 227);
    design.setup("Qi", "Jian", 283);
    design.setup("Qi", "Jian", 245);
    design.setup("Qi", "Dao", 282);
    design.setup("Qi", "Dao", 244);
    design.setup("Qi", "Ma", 208);
    design.setup("Qi", "Ma", 322);
    design.setup("Qi", "Ma", 226);
    design.setup("Qi", "Ma", 302);
    design.setup("Qi", "Nu", 263);
    design.setup("Qi", "Gong", 262);
    design.setup("Qi", "Xing", 261);
    design.setup("Wei", "Jiang", 113);
    design.setup("Wei", "Pian", 132);
    design.setup("Wei", "Bai", 94);
    design.setup("Wei", "Pao", 112);
    design.setup("Wei", "Jian", 151);
    design.setup("Wei", "Jian", 75);
    design.setup("Wei", "Jian", 131);
    design.setup("Wei", "Jian", 93);
    design.setup("Wei", "Dao", 130);
    design.setup("Wei", "Dao", 92);
    design.setup("Wei", "Ma", 56);
    design.setup("Wei", "Ma", 170);
    design.setup("Wei", "Ma", 74);
    design.setup("Wei", "Ma", 150);
    design.setup("Wei", "Nu", 111);
    design.setup("Wei", "Gong", 110);
    design.setup("Wei", "Xing", 109);
    design.setup("Zhao", "Jiang", 13);
    design.setup("Zhao", "Pian", 14);
    design.setup("Zhao", "Bai", 12);
    design.setup("Zhao", "Pao", 32);
    design.setup("Zhao", "Jian", 15);
    design.setup("Zhao", "Jian", 11);
    design.setup("Zhao", "Jian", 33);
    design.setup("Zhao", "Jian", 31);
    design.setup("Zhao", "Dao", 52);
    design.setup("Zhao", "Dao", 50);
    design.setup("Zhao", "Ma", 16);
    design.setup("Zhao", "Ma", 10);
    design.setup("Zhao", "Ma", 34);
    design.setup("Zhao", "Ma", 30);
    design.setup("Zhao", "Nu", 51);
    design.setup("Zhao", "Gong", 70);
    design.setup("Zhao", "Xing", 89);
    design.setup("Yan", "Jiang", 5);
    design.setup("Yan", "Pian", 6);
    design.setup("Yan", "Bai", 4);
    design.setup("Yan", "Pao", 24);
    design.setup("Yan", "Jian", 7);
    design.setup("Yan", "Jian", 3);
    design.setup("Yan", "Jian", 25);
    design.setup("Yan", "Jian", 23);
    design.setup("Yan", "Dao", 44);
    design.setup("Yan", "Dao", 42);
    design.setup("Yan", "Ma", 8);
    design.setup("Yan", "Ma", 2);
    design.setup("Yan", "Ma", 26);
    design.setup("Yan", "Ma", 22);
    design.setup("Yan", "Nu", 43);
    design.setup("Yan", "Gong", 62);
    design.setup("Yan", "Xing", 81);
    design.setup("Qin", "Jiang", 171);
    design.setup("Qin", "Pian", 152);
    design.setup("Qin", "Bai", 190);
    design.setup("Qin", "Pao", 172);
    design.setup("Qin", "Jian", 133);
    design.setup("Qin", "Jian", 209);
    design.setup("Qin", "Jian", 153);
    design.setup("Qin", "Jian", 191);
    design.setup("Qin", "Dao", 192);
    design.setup("Qin", "Dao", 154);
    design.setup("Qin", "Ma", 114);
    design.setup("Qin", "Ma", 228);
    design.setup("Qin", "Ma", 134);
    design.setup("Qin", "Ma", 210);
    design.setup("Qin", "Nu", 173);
    design.setup("Qin", "Gong", 174);
    design.setup("Qin", "Xing", 175);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("ChuJiang", "Chu Jiang");
    view.defPiece("HanJiang", "Han Jiang");
    view.defPiece("QiJiang", "Qi Jiang");
    view.defPiece("WeiJiang", "Wei Jiang");
    view.defPiece("ZhaoJiang", "Zhao Jiang");
    view.defPiece("YanJiang", "Yan Jiang");
    view.defPiece("QinJiang", "Qin Jiang");
    view.defPiece("ChuPian", "Chu Pian");
    view.defPiece("HanPian", "Han Pian");
    view.defPiece("QiPian", "Qi Pian");
    view.defPiece("WeiPian", "Wei Pian");
    view.defPiece("ZhaoPian", "Zhao Pian");
    view.defPiece("YanPian", "Yan Pian");
    view.defPiece("QinPian", "Qin Pian");
    view.defPiece("ChuBai", "Chu Bai");
    view.defPiece("HanBai", "Han Bai");
    view.defPiece("QiBai", "Qi Bai");
    view.defPiece("WeiBai", "Wei Bai");
    view.defPiece("ZhaoBai", "Zhao Bai");
    view.defPiece("YanBai", "Yan Bai");
    view.defPiece("QinBai", "Qin Bai");
    view.defPiece("ChuXing", "Chu Xing");
    view.defPiece("HanXing", "Han Xing");
    view.defPiece("QiXing", "Qi Xing");
    view.defPiece("WeiXing", "Wei Xing");
    view.defPiece("ZhaoXing", "Zhao Xing");
    view.defPiece("YanXing", "Yan Xing");
    view.defPiece("QinXing", "Qin Xing");
    view.defPiece("ZhouXing", "Zhou Xing");
    view.defPiece("ChuPao", "Chu Pao");
    view.defPiece("HanPao", "Han Pao");
    view.defPiece("QiPao", "Qi Pao");
    view.defPiece("WeiPao", "Wei Pao");
    view.defPiece("ZhaoPao", "Zhao Pao");
    view.defPiece("YanPao", "Yan Pao");
    view.defPiece("QinPao", "Qin Pao");
    view.defPiece("ChuGong", "Chu Gong");
    view.defPiece("HanGong", "Han Gong");
    view.defPiece("QiGong", "Qi Gong");
    view.defPiece("WeiGong", "Wei Gong");
    view.defPiece("ZhaoGong", "Zhao Gong");
    view.defPiece("YanGong", "Yan Gong");
    view.defPiece("QinGong", "Qin Gong");
    view.defPiece("ChuNu", "Chu Nu");
    view.defPiece("HanNu", "Han Nu");
    view.defPiece("QiNu", "Qi Nu");
    view.defPiece("WeiNu", "Wei Nu");
    view.defPiece("ZhaoNu", "Zhao Nu");
    view.defPiece("YanNu", "Yan Nu");
    view.defPiece("QinNu", "Qin Nu");
    view.defPiece("ChuMa", "Chu Ma");
    view.defPiece("HanMa", "Han Ma");
    view.defPiece("QiMa", "Qi Ma");
    view.defPiece("WeiMa", "Wei Ma");
    view.defPiece("ZhaoMa", "Zhao Ma");
    view.defPiece("YanMa", "Yan Ma");
    view.defPiece("QinMa", "Qin Ma");
    view.defPiece("ChuDao", "Chu Dao");
    view.defPiece("HanDao", "Han Dao");
    view.defPiece("QiDao", "Qi Dao");
    view.defPiece("WeiDao", "Wei Dao");
    view.defPiece("ZhaoDao", "Zhao Dao");
    view.defPiece("YanDao", "Yan Dao");
    view.defPiece("QinDao", "Qin Dao");
    view.defPiece("ChuJian", "Chu Jian");
    view.defPiece("HanJian", "Han Jian");
    view.defPiece("QiJian", "Qi Jian");
    view.defPiece("WeiJian", "Wei Jian");
    view.defPiece("ZhaoJian", "Zhao Jian");
    view.defPiece("YanJian", "Yan Jian");
    view.defPiece("QinJian", "Qin Jian");
 
    view.defPosition("19A", 15, 15, 31, 31);
    view.defPosition("18A", 47, 15, 31, 31);
    view.defPosition("17A", 79, 15, 31, 31);
    view.defPosition("16A", 111, 15, 31, 31);
    view.defPosition("15A", 143, 15, 31, 31);
    view.defPosition("14A", 175, 15, 31, 31);
    view.defPosition("13A", 207, 15, 31, 31);
    view.defPosition("12A", 239, 15, 31, 31);
    view.defPosition("11A", 271, 15, 31, 31);
    view.defPosition("10A", 303, 15, 31, 31);
    view.defPosition("9A", 335, 15, 31, 31);
    view.defPosition("8A", 367, 15, 31, 31);
    view.defPosition("7A", 399, 15, 31, 31);
    view.defPosition("6A", 431, 15, 31, 31);
    view.defPosition("5A", 463, 15, 31, 31);
    view.defPosition("4A", 495, 15, 31, 31);
    view.defPosition("3A", 527, 15, 31, 31);
    view.defPosition("2A", 559, 15, 31, 31);
    view.defPosition("1A", 591, 15, 31, 31);
    view.defPosition("19B", 15, 47, 31, 31);
    view.defPosition("18B", 47, 47, 31, 31);
    view.defPosition("17B", 79, 47, 31, 31);
    view.defPosition("16B", 111, 47, 31, 31);
    view.defPosition("15B", 143, 47, 31, 31);
    view.defPosition("14B", 175, 47, 31, 31);
    view.defPosition("13B", 207, 47, 31, 31);
    view.defPosition("12B", 239, 47, 31, 31);
    view.defPosition("11B", 271, 47, 31, 31);
    view.defPosition("10B", 303, 47, 31, 31);
    view.defPosition("9B", 335, 47, 31, 31);
    view.defPosition("8B", 367, 47, 31, 31);
    view.defPosition("7B", 399, 47, 31, 31);
    view.defPosition("6B", 431, 47, 31, 31);
    view.defPosition("5B", 463, 47, 31, 31);
    view.defPosition("4B", 495, 47, 31, 31);
    view.defPosition("3B", 527, 47, 31, 31);
    view.defPosition("2B", 559, 47, 31, 31);
    view.defPosition("1B", 591, 47, 31, 31);
    view.defPosition("19C", 15, 79, 31, 31);
    view.defPosition("18C", 47, 79, 31, 31);
    view.defPosition("17C", 79, 79, 31, 31);
    view.defPosition("16C", 111, 79, 31, 31);
    view.defPosition("15C", 143, 79, 31, 31);
    view.defPosition("14C", 175, 79, 31, 31);
    view.defPosition("13C", 207, 79, 31, 31);
    view.defPosition("12C", 239, 79, 31, 31);
    view.defPosition("11C", 271, 79, 31, 31);
    view.defPosition("10C", 303, 79, 31, 31);
    view.defPosition("9C", 335, 79, 31, 31);
    view.defPosition("8C", 367, 79, 31, 31);
    view.defPosition("7C", 399, 79, 31, 31);
    view.defPosition("6C", 431, 79, 31, 31);
    view.defPosition("5C", 463, 79, 31, 31);
    view.defPosition("4C", 495, 79, 31, 31);
    view.defPosition("3C", 527, 79, 31, 31);
    view.defPosition("2C", 559, 79, 31, 31);
    view.defPosition("1C", 591, 79, 31, 31);
    view.defPosition("19D", 15, 111, 31, 31);
    view.defPosition("18D", 47, 111, 31, 31);
    view.defPosition("17D", 79, 111, 31, 31);
    view.defPosition("16D", 111, 111, 31, 31);
    view.defPosition("15D", 143, 111, 31, 31);
    view.defPosition("14D", 175, 111, 31, 31);
    view.defPosition("13D", 207, 111, 31, 31);
    view.defPosition("12D", 239, 111, 31, 31);
    view.defPosition("11D", 271, 111, 31, 31);
    view.defPosition("10D", 303, 111, 31, 31);
    view.defPosition("9D", 335, 111, 31, 31);
    view.defPosition("8D", 367, 111, 31, 31);
    view.defPosition("7D", 399, 111, 31, 31);
    view.defPosition("6D", 431, 111, 31, 31);
    view.defPosition("5D", 463, 111, 31, 31);
    view.defPosition("4D", 495, 111, 31, 31);
    view.defPosition("3D", 527, 111, 31, 31);
    view.defPosition("2D", 559, 111, 31, 31);
    view.defPosition("1D", 591, 111, 31, 31);
    view.defPosition("19E", 15, 143, 31, 31);
    view.defPosition("18E", 47, 143, 31, 31);
    view.defPosition("17E", 79, 143, 31, 31);
    view.defPosition("16E", 111, 143, 31, 31);
    view.defPosition("15E", 143, 143, 31, 31);
    view.defPosition("14E", 175, 143, 31, 31);
    view.defPosition("13E", 207, 143, 31, 31);
    view.defPosition("12E", 239, 143, 31, 31);
    view.defPosition("11E", 271, 143, 31, 31);
    view.defPosition("10E", 303, 143, 31, 31);
    view.defPosition("9E", 335, 143, 31, 31);
    view.defPosition("8E", 367, 143, 31, 31);
    view.defPosition("7E", 399, 143, 31, 31);
    view.defPosition("6E", 431, 143, 31, 31);
    view.defPosition("5E", 463, 143, 31, 31);
    view.defPosition("4E", 495, 143, 31, 31);
    view.defPosition("3E", 527, 143, 31, 31);
    view.defPosition("2E", 559, 143, 31, 31);
    view.defPosition("1E", 591, 143, 31, 31);
    view.defPosition("19F", 15, 175, 31, 31);
    view.defPosition("18F", 47, 175, 31, 31);
    view.defPosition("17F", 79, 175, 31, 31);
    view.defPosition("16F", 111, 175, 31, 31);
    view.defPosition("15F", 143, 175, 31, 31);
    view.defPosition("14F", 175, 175, 31, 31);
    view.defPosition("13F", 207, 175, 31, 31);
    view.defPosition("12F", 239, 175, 31, 31);
    view.defPosition("11F", 271, 175, 31, 31);
    view.defPosition("10F", 303, 175, 31, 31);
    view.defPosition("9F", 335, 175, 31, 31);
    view.defPosition("8F", 367, 175, 31, 31);
    view.defPosition("7F", 399, 175, 31, 31);
    view.defPosition("6F", 431, 175, 31, 31);
    view.defPosition("5F", 463, 175, 31, 31);
    view.defPosition("4F", 495, 175, 31, 31);
    view.defPosition("3F", 527, 175, 31, 31);
    view.defPosition("2F", 559, 175, 31, 31);
    view.defPosition("1F", 591, 175, 31, 31);
    view.defPosition("19G", 15, 207, 31, 31);
    view.defPosition("18G", 47, 207, 31, 31);
    view.defPosition("17G", 79, 207, 31, 31);
    view.defPosition("16G", 111, 207, 31, 31);
    view.defPosition("15G", 143, 207, 31, 31);
    view.defPosition("14G", 175, 207, 31, 31);
    view.defPosition("13G", 207, 207, 31, 31);
    view.defPosition("12G", 239, 207, 31, 31);
    view.defPosition("11G", 271, 207, 31, 31);
    view.defPosition("10G", 303, 207, 31, 31);
    view.defPosition("9G", 335, 207, 31, 31);
    view.defPosition("8G", 367, 207, 31, 31);
    view.defPosition("7G", 399, 207, 31, 31);
    view.defPosition("6G", 431, 207, 31, 31);
    view.defPosition("5G", 463, 207, 31, 31);
    view.defPosition("4G", 495, 207, 31, 31);
    view.defPosition("3G", 527, 207, 31, 31);
    view.defPosition("2G", 559, 207, 31, 31);
    view.defPosition("1G", 591, 207, 31, 31);
    view.defPosition("19H", 15, 239, 31, 31);
    view.defPosition("18H", 47, 239, 31, 31);
    view.defPosition("17H", 79, 239, 31, 31);
    view.defPosition("16H", 111, 239, 31, 31);
    view.defPosition("15H", 143, 239, 31, 31);
    view.defPosition("14H", 175, 239, 31, 31);
    view.defPosition("13H", 207, 239, 31, 31);
    view.defPosition("12H", 239, 239, 31, 31);
    view.defPosition("11H", 271, 239, 31, 31);
    view.defPosition("10H", 303, 239, 31, 31);
    view.defPosition("9H", 335, 239, 31, 31);
    view.defPosition("8H", 367, 239, 31, 31);
    view.defPosition("7H", 399, 239, 31, 31);
    view.defPosition("6H", 431, 239, 31, 31);
    view.defPosition("5H", 463, 239, 31, 31);
    view.defPosition("4H", 495, 239, 31, 31);
    view.defPosition("3H", 527, 239, 31, 31);
    view.defPosition("2H", 559, 239, 31, 31);
    view.defPosition("1H", 591, 239, 31, 31);
    view.defPosition("19I", 15, 271, 31, 31);
    view.defPosition("18I", 47, 271, 31, 31);
    view.defPosition("17I", 79, 271, 31, 31);
    view.defPosition("16I", 111, 271, 31, 31);
    view.defPosition("15I", 143, 271, 31, 31);
    view.defPosition("14I", 175, 271, 31, 31);
    view.defPosition("13I", 207, 271, 31, 31);
    view.defPosition("12I", 239, 271, 31, 31);
    view.defPosition("11I", 271, 271, 31, 31);
    view.defPosition("10I", 303, 271, 31, 31);
    view.defPosition("9I", 335, 271, 31, 31);
    view.defPosition("8I", 367, 271, 31, 31);
    view.defPosition("7I", 399, 271, 31, 31);
    view.defPosition("6I", 431, 271, 31, 31);
    view.defPosition("5I", 463, 271, 31, 31);
    view.defPosition("4I", 495, 271, 31, 31);
    view.defPosition("3I", 527, 271, 31, 31);
    view.defPosition("2I", 559, 271, 31, 31);
    view.defPosition("1I", 591, 271, 31, 31);
    view.defPosition("19J", 15, 303, 31, 31);
    view.defPosition("18J", 47, 303, 31, 31);
    view.defPosition("17J", 79, 303, 31, 31);
    view.defPosition("16J", 111, 303, 31, 31);
    view.defPosition("15J", 143, 303, 31, 31);
    view.defPosition("14J", 175, 303, 31, 31);
    view.defPosition("13J", 207, 303, 31, 31);
    view.defPosition("12J", 239, 303, 31, 31);
    view.defPosition("11J", 271, 303, 31, 31);
    view.defPosition("10J", 303, 303, 31, 31);
    view.defPosition("9J", 335, 303, 31, 31);
    view.defPosition("8J", 367, 303, 31, 31);
    view.defPosition("7J", 399, 303, 31, 31);
    view.defPosition("6J", 431, 303, 31, 31);
    view.defPosition("5J", 463, 303, 31, 31);
    view.defPosition("4J", 495, 303, 31, 31);
    view.defPosition("3J", 527, 303, 31, 31);
    view.defPosition("2J", 559, 303, 31, 31);
    view.defPosition("1J", 591, 303, 31, 31);
    view.defPosition("19K", 15, 335, 31, 31);
    view.defPosition("18K", 47, 335, 31, 31);
    view.defPosition("17K", 79, 335, 31, 31);
    view.defPosition("16K", 111, 335, 31, 31);
    view.defPosition("15K", 143, 335, 31, 31);
    view.defPosition("14K", 175, 335, 31, 31);
    view.defPosition("13K", 207, 335, 31, 31);
    view.defPosition("12K", 239, 335, 31, 31);
    view.defPosition("11K", 271, 335, 31, 31);
    view.defPosition("10K", 303, 335, 31, 31);
    view.defPosition("9K", 335, 335, 31, 31);
    view.defPosition("8K", 367, 335, 31, 31);
    view.defPosition("7K", 399, 335, 31, 31);
    view.defPosition("6K", 431, 335, 31, 31);
    view.defPosition("5K", 463, 335, 31, 31);
    view.defPosition("4K", 495, 335, 31, 31);
    view.defPosition("3K", 527, 335, 31, 31);
    view.defPosition("2K", 559, 335, 31, 31);
    view.defPosition("1K", 591, 335, 31, 31);
    view.defPosition("19L", 15, 367, 31, 31);
    view.defPosition("18L", 47, 367, 31, 31);
    view.defPosition("17L", 79, 367, 31, 31);
    view.defPosition("16L", 111, 367, 31, 31);
    view.defPosition("15L", 143, 367, 31, 31);
    view.defPosition("14L", 175, 367, 31, 31);
    view.defPosition("13L", 207, 367, 31, 31);
    view.defPosition("12L", 239, 367, 31, 31);
    view.defPosition("11L", 271, 367, 31, 31);
    view.defPosition("10L", 303, 367, 31, 31);
    view.defPosition("9L", 335, 367, 31, 31);
    view.defPosition("8L", 367, 367, 31, 31);
    view.defPosition("7L", 399, 367, 31, 31);
    view.defPosition("6L", 431, 367, 31, 31);
    view.defPosition("5L", 463, 367, 31, 31);
    view.defPosition("4L", 495, 367, 31, 31);
    view.defPosition("3L", 527, 367, 31, 31);
    view.defPosition("2L", 559, 367, 31, 31);
    view.defPosition("1L", 591, 367, 31, 31);
    view.defPosition("19M", 15, 399, 31, 31);
    view.defPosition("18M", 47, 399, 31, 31);
    view.defPosition("17M", 79, 399, 31, 31);
    view.defPosition("16M", 111, 399, 31, 31);
    view.defPosition("15M", 143, 399, 31, 31);
    view.defPosition("14M", 175, 399, 31, 31);
    view.defPosition("13M", 207, 399, 31, 31);
    view.defPosition("12M", 239, 399, 31, 31);
    view.defPosition("11M", 271, 399, 31, 31);
    view.defPosition("10M", 303, 399, 31, 31);
    view.defPosition("9M", 335, 399, 31, 31);
    view.defPosition("8M", 367, 399, 31, 31);
    view.defPosition("7M", 399, 399, 31, 31);
    view.defPosition("6M", 431, 399, 31, 31);
    view.defPosition("5M", 463, 399, 31, 31);
    view.defPosition("4M", 495, 399, 31, 31);
    view.defPosition("3M", 527, 399, 31, 31);
    view.defPosition("2M", 559, 399, 31, 31);
    view.defPosition("1M", 591, 399, 31, 31);
    view.defPosition("19N", 15, 431, 31, 31);
    view.defPosition("18N", 47, 431, 31, 31);
    view.defPosition("17N", 79, 431, 31, 31);
    view.defPosition("16N", 111, 431, 31, 31);
    view.defPosition("15N", 143, 431, 31, 31);
    view.defPosition("14N", 175, 431, 31, 31);
    view.defPosition("13N", 207, 431, 31, 31);
    view.defPosition("12N", 239, 431, 31, 31);
    view.defPosition("11N", 271, 431, 31, 31);
    view.defPosition("10N", 303, 431, 31, 31);
    view.defPosition("9N", 335, 431, 31, 31);
    view.defPosition("8N", 367, 431, 31, 31);
    view.defPosition("7N", 399, 431, 31, 31);
    view.defPosition("6N", 431, 431, 31, 31);
    view.defPosition("5N", 463, 431, 31, 31);
    view.defPosition("4N", 495, 431, 31, 31);
    view.defPosition("3N", 527, 431, 31, 31);
    view.defPosition("2N", 559, 431, 31, 31);
    view.defPosition("1N", 591, 431, 31, 31);
    view.defPosition("19O", 15, 463, 31, 31);
    view.defPosition("18O", 47, 463, 31, 31);
    view.defPosition("17O", 79, 463, 31, 31);
    view.defPosition("16O", 111, 463, 31, 31);
    view.defPosition("15O", 143, 463, 31, 31);
    view.defPosition("14O", 175, 463, 31, 31);
    view.defPosition("13O", 207, 463, 31, 31);
    view.defPosition("12O", 239, 463, 31, 31);
    view.defPosition("11O", 271, 463, 31, 31);
    view.defPosition("10O", 303, 463, 31, 31);
    view.defPosition("9O", 335, 463, 31, 31);
    view.defPosition("8O", 367, 463, 31, 31);
    view.defPosition("7O", 399, 463, 31, 31);
    view.defPosition("6O", 431, 463, 31, 31);
    view.defPosition("5O", 463, 463, 31, 31);
    view.defPosition("4O", 495, 463, 31, 31);
    view.defPosition("3O", 527, 463, 31, 31);
    view.defPosition("2O", 559, 463, 31, 31);
    view.defPosition("1O", 591, 463, 31, 31);
    view.defPosition("19P", 15, 495, 31, 31);
    view.defPosition("18P", 47, 495, 31, 31);
    view.defPosition("17P", 79, 495, 31, 31);
    view.defPosition("16P", 111, 495, 31, 31);
    view.defPosition("15P", 143, 495, 31, 31);
    view.defPosition("14P", 175, 495, 31, 31);
    view.defPosition("13P", 207, 495, 31, 31);
    view.defPosition("12P", 239, 495, 31, 31);
    view.defPosition("11P", 271, 495, 31, 31);
    view.defPosition("10P", 303, 495, 31, 31);
    view.defPosition("9P", 335, 495, 31, 31);
    view.defPosition("8P", 367, 495, 31, 31);
    view.defPosition("7P", 399, 495, 31, 31);
    view.defPosition("6P", 431, 495, 31, 31);
    view.defPosition("5P", 463, 495, 31, 31);
    view.defPosition("4P", 495, 495, 31, 31);
    view.defPosition("3P", 527, 495, 31, 31);
    view.defPosition("2P", 559, 495, 31, 31);
    view.defPosition("1P", 591, 495, 31, 31);
    view.defPosition("19Q", 15, 527, 31, 31);
    view.defPosition("18Q", 47, 527, 31, 31);
    view.defPosition("17Q", 79, 527, 31, 31);
    view.defPosition("16Q", 111, 527, 31, 31);
    view.defPosition("15Q", 143, 527, 31, 31);
    view.defPosition("14Q", 175, 527, 31, 31);
    view.defPosition("13Q", 207, 527, 31, 31);
    view.defPosition("12Q", 239, 527, 31, 31);
    view.defPosition("11Q", 271, 527, 31, 31);
    view.defPosition("10Q", 303, 527, 31, 31);
    view.defPosition("9Q", 335, 527, 31, 31);
    view.defPosition("8Q", 367, 527, 31, 31);
    view.defPosition("7Q", 399, 527, 31, 31);
    view.defPosition("6Q", 431, 527, 31, 31);
    view.defPosition("5Q", 463, 527, 31, 31);
    view.defPosition("4Q", 495, 527, 31, 31);
    view.defPosition("3Q", 527, 527, 31, 31);
    view.defPosition("2Q", 559, 527, 31, 31);
    view.defPosition("1Q", 591, 527, 31, 31);
    view.defPosition("19R", 15, 559, 31, 31);
    view.defPosition("18R", 47, 559, 31, 31);
    view.defPosition("17R", 79, 559, 31, 31);
    view.defPosition("16R", 111, 559, 31, 31);
    view.defPosition("15R", 143, 559, 31, 31);
    view.defPosition("14R", 175, 559, 31, 31);
    view.defPosition("13R", 207, 559, 31, 31);
    view.defPosition("12R", 239, 559, 31, 31);
    view.defPosition("11R", 271, 559, 31, 31);
    view.defPosition("10R", 303, 559, 31, 31);
    view.defPosition("9R", 335, 559, 31, 31);
    view.defPosition("8R", 367, 559, 31, 31);
    view.defPosition("7R", 399, 559, 31, 31);
    view.defPosition("6R", 431, 559, 31, 31);
    view.defPosition("5R", 463, 559, 31, 31);
    view.defPosition("4R", 495, 559, 31, 31);
    view.defPosition("3R", 527, 559, 31, 31);
    view.defPosition("2R", 559, 559, 31, 31);
    view.defPosition("1R", 591, 559, 31, 31);
    view.defPosition("19S", 15, 591, 31, 31);
    view.defPosition("18S", 47, 591, 31, 31);
    view.defPosition("17S", 79, 591, 31, 31);
    view.defPosition("16S", 111, 591, 31, 31);
    view.defPosition("15S", 143, 591, 31, 31);
    view.defPosition("14S", 175, 591, 31, 31);
    view.defPosition("13S", 207, 591, 31, 31);
    view.defPosition("12S", 239, 591, 31, 31);
    view.defPosition("11S", 271, 591, 31, 31);
    view.defPosition("10S", 303, 591, 31, 31);
    view.defPosition("9S", 335, 591, 31, 31);
    view.defPosition("8S", 367, 591, 31, 31);
    view.defPosition("7S", 399, 591, 31, 31);
    view.defPosition("6S", 431, 591, 31, 31);
    view.defPosition("5S", 463, 591, 31, 31);
    view.defPosition("4S", 495, 591, 31, 31);
    view.defPosition("3S", 527, 591, 31, 31);
    view.defPosition("2S", 559, 591, 31, 31);
    view.defPosition("1S", 591, 591, 31, 31);
}
