import { multiply } from './main';

describe('Multiply', () => {
  it('fixed tests', () => {
    expect(multiply(1, 1)).toBe(1);
    expect(multiply(2, 1)).toBe(2);
    expect(multiply(2, 2)).toBe(4);
    expect(multiply(3, 5)).toBe(15);
  });
});
