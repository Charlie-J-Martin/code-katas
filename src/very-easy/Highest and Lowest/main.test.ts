import { highAndLow } from './main';

describe('Example tests', () => {
  test('Test 1', () => {
    expect(highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4')).toBe('42 -9');
  });
  test('Test 2', () => {
    expect(highAndLow('1 2 3')).toBe('3 1');
  });
});
