import Obs = require('observers');
import Enum = require('./src/enums');

export import Command = Enum.Command;

export import Direction = Enum.Direction;

export import Player = Enum.Player;

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
	cards: Obs.ObservableArray<Card>;
}

export interface Grid {
	Ten: Obs.ObservableArray<Card>;
	Twenty: Obs.ObservableArray<Card>;
	Thirty: Obs.ObservableArray<Card>;
	Forty: Obs.ObservableArray<Card>;
	Fifty: Obs.ObservableArray<Card>;
}

export interface Row {
	cards: Array<Card>;
	owner: Player; 
}