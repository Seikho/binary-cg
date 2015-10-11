var CG = require('../index.d.ts');
var obs = require('observers');
var Game = (function () {
    function Game() {
        this.turn = obs.observe(0 /* Zero */);
        this.shuffle = function (deck) { return deck.cards.sort(function () { return Math.random() > Math.random() ? 1 : -1; }); };
        this.discarded = obs.observeArray([]);
    }
    return Game;
})();
//# sourceMappingURL=index.js.map