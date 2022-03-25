import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  static halflingInstaces = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    
    this._maxLifePoints = 60;
    Halfling.halflingInstaces += 1;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    return Halfling.halflingInstaces;
  }
}

export default Halfling;
