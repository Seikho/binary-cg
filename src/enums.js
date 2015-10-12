(function (Command) {
    Command[Command["None"] = 0] = "None";
    Command[Command["Print"] = 1] = "Print";
    Command[Command["Delete"] = 2] = "Delete";
    Command[Command["Enter"] = 3] = "Enter";
    Command[Command["Save"] = 4] = "Save";
    Command[Command["IfThen"] = 5] = "IfThen";
    Command[Command["SyntaxError"] = 6] = "SyntaxError";
})(exports.Command || (exports.Command = {}));
var Command = exports.Command;
(function (Player) {
    Player[Player["Zero"] = 0] = "Zero";
    Player[Player["One"] = 1] = "One";
})(exports.Player || (exports.Player = {}));
var Player = exports.Player;
(function (Direction) {
    Direction[Direction["Vertical"] = 0] = "Vertical";
    Direction[Direction["Horizontal"] = 1] = "Horizontal";
})(exports.Direction || (exports.Direction = {}));
var Direction = exports.Direction;
//# sourceMappingURL=enums.js.map