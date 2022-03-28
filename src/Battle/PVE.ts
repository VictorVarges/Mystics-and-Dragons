import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

class PVE extends Battle {
  private _player: Fighter;
  private _monster: Monster[] | SimpleFighter[];

  constructor(player: Fighter, monster: Monster[] | SimpleFighter[]) {
    super(player);
    this._player = player;
    this._monster = monster;
  }

  fight(): number {
    this._monster.forEach((monster) => monster.attack(this._player));

    return this._player.lifePoints <= 0 ? -1 : 1;
  }
}

export default PVE;