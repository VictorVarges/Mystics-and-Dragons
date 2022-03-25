import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  static orcInstaces = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    
    this._maxLifePoints = 74;
    Orc.orcInstaces += 1;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    return Orc.orcInstaces;
  }
}

export default Orc;
