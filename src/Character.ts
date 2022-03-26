import Archetype from './Archetypes';
import Mage from './Archetypes/Mage';
import Energy from './Energy';
import Fighter from './Fighter';
import Race from './Races';
import Elf from './Races/Elf';

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

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
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

  get energy(): Energy {
    return this._energy;
  }

  receiveDamage(attackPoints: number) {
    const damage = attackPoints - this._defense;
    const life = this._lifePoints;

    if (damage > 0) this._lifePoints -= damage;
    if (life <= 0) return -1;

    return life;
  }

  attack(enemy: Fighter) {
    enemy.receiveDamage(this._defense);
  }

  levelUp() {
    this._maxLifePoints += Math.floor(Math.random() * 10);
    this._strength += Math.floor(Math.random() * 10);
    this._defense += Math.floor(Math.random() * 10);
    this._dexterity += Math.floor(Math.random() * 10);
    this._energy.amount = 10;

    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }

    this._lifePoints = this._maxLifePoints;
  }
}

export default Character;