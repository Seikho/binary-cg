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
//# sourceMappingURL=enums.js.map