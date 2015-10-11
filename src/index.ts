import * as CG from '../index.d.ts';
import obs = require('observers');

class Game {
	constructor() {}
	
	turn = obs.observe(CG.Player.Zero);
	shuffle = (deck: CG.Deck) => deck.cards.sort(() => Math.random() > Math.random() ? 1 : -1);	
	discarded = obs.observeArray<CG.Card>([]);
}