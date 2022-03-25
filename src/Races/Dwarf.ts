import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  static dwarfInstaces = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    
    this._maxLifePoints = 80;
    Dwarf.dwarfInstaces += 1;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    return Dwarf.dwarfInstaces;
  }
}

export default Dwarf;
