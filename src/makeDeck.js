var Enum = require('./enums');
var Cmd = Enum.Command;
function makeDeck(cardCount, includeCommands) {
    var cards = includeCommands
        .reduce(function (deck, card) { return deck.concat(create(card)); }, []);
    return createPlayerDecks(cards);
}
function createPlayerDecks(cards) {
    var to = function (player) { return function (card) {
        return {
            owner: player,
            effect: null,
            command: card.command,
            direction: card.direction
        };
    }; };
    var one = cards.map(function (card) { return to(Enum.Player.One); });
    var zero = cards.map(function (card) { return to(Enum.Player.Zero); });
    return { one: one, zero: zero };
}
function create(command) {
    var match = commandCounts
        .filter(function (cmd) { return cmd.command === command; })[0];
    match = match || { count: 1 };
    var count = match.count;
    var cards = [];
    while (count > 0) {
        var direction = Math.floor(Math.random() * 2 + 1) === 1
            ? Enum.Direction.Vertical
            : Enum.Direction.Horizontal;
        cards.push({ command: command, direction: direction });
        count--;
    }
    return cards;
}
var commandCounts = [
    { command: Cmd.None, count: 5 },
    { command: Cmd.Print, count: 3 },
    { command: Cmd.Delete, count: 3 },
    { command: Cmd.Enter, count: 3 },
    { command: Cmd.Save, count: 3 },
    { command: Cmd.IfThen, count: 3 },
    { command: Cmd.SyntaxError, count: 1 }
];
module.exports = makeDeck;
//# sourceMappingURL=makeDeck.js.map