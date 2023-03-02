import { Fighter } from './main';
import { declareWinner } from './main';

describe('Two fighters, one winner.', () => {
  it('Example Test Cases', () => {
    const fighter1 = { name: 'Lew', health: 10, damagePerAttack: 2 };
    const fighter2 = { name: 'Harry', health: 5, damagePerAttack: 4 };
    expect(declareWinner(fighter1, fighter2, 'Lew')).toBe('Lew');
  });
});
