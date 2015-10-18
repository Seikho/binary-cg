import * as CG from '../index.d.ts';
import Enum = require('./enums');
import obs = require('observers');
import makeDeck = require('./makeDeck');

export import Command = Enum.Command;
export import Player = Enum.Player;
export import Direction = Enum.Direction;

export class Game {
	constructor() {
		
	 }

	turn = obs.observe(CG.Player.Zero);
	shuffle = (deck: CG.Deck) => deck.cards.sort(() => Math.random() > Math.random() ? 1 : -1);
	discarded = obs.observeArray<CG.PlayerCard>([]);

	oneDeck: CG.Deck;    
	zeroDeck: CG.Deck;
    
	grid: CG.Grid;

	start = () => {
		var commands = Object.keys(Command)
			.filter(key => isNaN(Command[key]))
			.map(value => Number(value));
		var decks = makeDeck(commands);
		this.oneDeck = decks.one;
		this.zeroDeck = decks.zero;
		this.grid = {
			Ten: obs.observeArray([]),
			Twenty: obs.observeArray([]),
			Thirty: obs.observeArray([]),
			Forty: obs.observeArray([]),
			Fifty: obs.observeArray([]),
		};
		
		var noCards = (cards: CG.PlayerCard[]) => cards.length === 0 ? this.endGame() : void 0;
		var rowFiftyFull = (cards: CG.PlayerCard[]) => cards.length === 3 ? this.endGame() : void 0;
		this.oneDeck.cards.subscribe(noCards)
		this.zeroDeck.cards.subscribe(noCards);
		this.grid.Fifty.subscribe(rowFiftyFull);
	}
    
    takeCard = (deck: CG.Deck) => {
        
    }
	
	endGame = () => {};
	
	
	
}