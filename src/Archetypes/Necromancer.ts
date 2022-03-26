import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  static necromancerInstances = 0;

  constructor(name: string) {
    super(name);

    this._energyType = 'mana';
    Necromancer.necromancerInstances += 1;
  }

  get energyType() {
    return this._energyType;
  }

  static createdArchetypeInstances() {
    return Necromancer.necromancerInstances;
  }
}

export default Necromancer;