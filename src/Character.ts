import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';

class Character implements Fighter {
  private _name: string;
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this._name = name;
    this._race = new Elf('Trol', 10);
    this._archetype = new Mage('Esmeralda');
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._race.maxLifePoints;
    this._strength = Math.floor(Math.random() * 10);
    this._defense = Math.floor(Math.random() * 10);
    this._dexterity = this._race.dexterity;
    this._energy = {
      type_: this._archetype.energyType,
      amount: Math.floor(Math.random() * 10),
    };
  }

  get name(): string {
    return this._name;
  }

  get archetype(): Race {
    return this.archetype;
  }
  
  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): energy {
    return this._dexterity;
  }
}
// race: Race, archetype: Archetype, maxLifePoints: number, lifePoints: number, strength: number, defense: number, dexterity: number, energy: Energy

export default Character;