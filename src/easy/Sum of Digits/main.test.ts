import { digitalRoot } from './main';

describe('Tests', () => {
  it('test', () => {
    expect(digitalRoot(16)).toBe(7);
    expect(digitalRoot(456)).toBe(6);
  });
});
