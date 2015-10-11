import Obs = require('observers');
export const enum Player {
	Zero,
	One
}

export const enum Command {
	None,
	Print,
	Delete,
	Enter,
	Save,
	IfThen
}

export const enum Direction {
	Vertical,
	Horizontal
}

export interface Card {
	owner: Player;
	command: Command;
	direction: Direction;
	effect: () => void;
}

export class Game {
	turn: Obs.Observable<Player>;
}

export interface Deck {
	owner: Player;
	cards: Array<Card>;
}

export interface Grid {
	Ten: Array<Card>;
	Twenty: Array<Card>;
	Thirty: Array<Card>;
	Forty: Array<Card>;
	Fifty: Array
}

export interface Row {
	cards: Array<Card>;
	owner: 
}