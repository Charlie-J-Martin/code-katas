import { boolToWord } from './main';

describe('Basic tests', () => {
  it('Testing for basic tests', () => {
    expect(boolToWord(true)).toBe('Yes');
    expect(boolToWord(false)).toBe('No');
  });
});
