import { getCount } from './main';

describe('Vowels Count Tests', () => {
  it("should return 5 for 'abracadabra'", () => {
    expect(getCount('abracadabra')).toBe(5);
  });
});
