interface SimpleFighter {
  lifePoints: number,
  strength: number,

  attack(enemy: SimpleFighter): void;
  receiveDamage(attackPoints: number): void;
}

export default SimpleFighter;