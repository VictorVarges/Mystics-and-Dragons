import Monster from './Monster';

class Dragon extends Monster {
  protected _lifePoints: number;

  constructor() {
    super();
    this._lifePoints = 999;
  }

  get lifePoints() { return this._lifePoints; }
}

export default Dragon;