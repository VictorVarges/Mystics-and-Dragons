import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energyType: EnergyType;
  static warriorInstances = 0;

  constructor(name: string) {
    super(name);

    this._energyType = 'stamina';
    Warrior.warriorInstances += 1;
  }

  get energyType() {
    return this._energyType;
  }

  static createdArchetypeInstances() {
    return Warrior.warriorInstances;
  }
}

export default Warrior;