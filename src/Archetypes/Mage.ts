import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energyType: EnergyType;
  static mageInstances = 0;

  constructor(name: string) {
    super(name);

    this._energyType = 'mana';
    Mage.mageInstances += 1;
  }

  get energyType() {
    return this._energyType;
  }

  static createdArchetypeInstances() {
    return Mage.mageInstances;
  }
}

export default Mage;