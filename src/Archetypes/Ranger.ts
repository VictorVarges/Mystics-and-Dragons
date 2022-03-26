import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _energyType: EnergyType;
  static rangerInstances = 0;

  constructor(name: string) {
    super(name);

    this._energyType = 'stamina';
    Ranger.rangerInstances += 1;
  }

  get energyType() {
    return this._energyType;
  }

  static createdArchetypeInstances() {
    return Ranger.rangerInstances;
  }
}

export default Ranger;