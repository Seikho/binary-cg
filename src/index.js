var CG = require('../index.d.ts');
var Enum = require('./enums');
var obs = require('observers');
var makeDeck = require('./makeDeck');
exports.Command = Enum.Command;
exports.Player = Enum.Player;
exports.Direction = Enum.Direction;
var Game = (function () {
    function Game() {
        var _this = this;
        this.turn = obs.observe(CG.Player.Zero);
        this.shuffle = function (deck) { return deck.cards.sort(function () { return Math.random() > Math.random() ? 1 : -1; }); };
        this.discarded = obs.observeArray([]);
        this.start = function () {
            var commands = Object.keys(exports.Command)
                .filter(function (key) { return isNaN(exports.Command[key]); })
                .map(function (value) { return Number(value); });
            var decks = makeDeck(commands);
            _this.oneDeck = decks.one;
            _this.zeroDeck = decks.zero;
            _this.grid = {
                Ten: obs.observeArray([]),
                Twenty: obs.observeArray([]),
                Thirty: obs.observeArray([]),
                Forty: obs.observeArray([]),
                Fifty: obs.observeArray([]),
            };
            var noCards = function (cards) { return cards.length === 0 ? _this.endGame() : void 0; };
            var rowFiftyFull = function (cards) { return cards.length === 3 ? _this.endGame() : void 0; };
            _this.oneDeck.cards.subscribe(noCards);
            _this.zeroDeck.cards.subscribe(noCards);
            _this.grid.Fifty.subscribe(rowFiftyFull);
        };
        this.takeCard = function (deck) {
        };
        this.endGame = function () { };
    }
    return Game;
})();
exports.Game = Game;
//# sourceMappingURL=index.js.map