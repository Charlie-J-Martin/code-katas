/*
https://www.codewars.com/kata/577bd8d4ae2807c64b00045b/train/javascript

Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

Your function also receives a third argument, a string, with the name of the fighter that attacks first.

Example:
  declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"

  Lew attacks Harry; Harry now has 3 health.
  Harry attacks Lew; Lew now has 6 health.
  Lew attacks Harry; Harry now has 1 health.
  Harry attacks Lew; Lew now has 2 health.
  Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
*/

type Fighter = {
  name: string;
  health: number;
  damagePerAttack: number;
  toString(): string;
};

export function Fighter(
  this: Fighter,
  name: string,
  health: number,
  damagePerAttack: number
): void {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.toString = function () {
    return this.name;
  };
}

export function declareWinner(
  fighter1: Fighter,
  fighter2: Fighter,
  firstAttacker: string
) {
  const fighter1Stamina = Math.ceil(fighter1.health / fighter2.damagePerAttack);
  const fighter2Stamina = Math.ceil(fighter2.health / fighter1.damagePerAttack);

  if (fighter1Stamina === fighter2Stamina) {
    return firstAttacker;
  }

  return fighter1Stamina > fighter2Stamina ? fighter1.name : fighter2.name;
}
