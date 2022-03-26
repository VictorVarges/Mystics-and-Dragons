import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  static elfInstaces = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    
    this._maxLifePoints = 99;
    Elf.elfInstaces += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    return Elf.elfInstaces;
  }
}

export default Elf;
