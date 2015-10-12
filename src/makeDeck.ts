import CG = require('../index.d.ts');
import Enum = require('./enums');
import obs = require('observers');

var Cmd = Enum.Command;
export = makeDeck;

function makeDeck(includeCommands: Array<Enum.Command>) {
	var cards = includeCommands
		.reduce((deck, card) => deck.concat(create(card)), []);

	return createPlayerDecks(cards);
}

function createPlayerDecks(cards: Array<CG.Card>) {
	var to = (player: Enum.Player) => (card: CG.Card): CG.PlayerCard => {
		return {
			owner: player,
			effect: null,
			command: card.command,
			direction: card.direction
		};
	}
	
	var one = cards.map(to(Enum.Player.One));
	var zero = cards.map(to(Enum.Player.Zero));
	
	return {
		one: {
			owner: Enum.Player.One,
			cards: obs.observeArray(one)
		},
		zero: {
			owner: Enum.Player.Zero,
			cards: obs.observeArray(zero)
		}
	};
}

function create(command: Enum.Command) {
	var match = commandCounts
		.filter(cmd => cmd.command === command)[0];
	match = match || <any>{ count: 1 };

	var count = match.count;
	var cards = [];

	while (count > 0) {
		var direction = Math.floor(Math.random() * 2 + 1) === 1
			? Enum.Direction.Vertical
			: Enum.Direction.Horizontal;

		cards.push({ command, direction });
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