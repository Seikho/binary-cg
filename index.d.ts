import Obs = require('observers');
import Enum = require('./src/enums');

export import Command = Enum.Command;

export import Direction = Enum.Direction;

export import Player = Enum.Player;

export interface PlayerCard extends Card {
	owner: Player;
	effect: () => void;
}

export interface Card {
	command: Command;
	direction: Direction;
}

export class Game {
	turn: Obs.Observable<Player>;
}

export interface Deck {
	owner: Player;
	cards: Obs.ObservableArray<PlayerCard>;
    hand: Obs.ObservableArray<PlayerCard>;
}

export interface Grid {
	Ten: Obs.ObservableArray<PlayerCard>;
	Twenty: Obs.ObservableArray<PlayerCard>;
	Thirty: Obs.ObservableArray<PlayerCard>;
	Forty: Obs.ObservableArray<PlayerCard>;
	Fifty: Obs.ObservableArray<PlayerCard>;
}

export interface Row {
	cards: Array<PlayerCard>;
	owner: Player; 
}