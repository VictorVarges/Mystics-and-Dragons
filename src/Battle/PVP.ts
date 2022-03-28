import Battle from './Battle';
import Fighter from '../Fighter';

class PVP extends Battle {
  private _player1: Fighter;
  private _player2: Fighter;

  constructor(p1: Fighter, p2: Fighter) {
    super(p1);
    this._player1 = p1;
    this._player2 = p2;
  }

  fight(): number {
    this._player1.attack(this._player2);
    this._player2.attack(this._player1);
    
    return this._player1.lifePoints <= 0 ? -1 : 1;
  } 
}

export default PVP;