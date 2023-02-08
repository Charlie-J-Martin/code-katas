import { duplicateEncode } from './main';

describe('Duplicate Encoder', () => {
  it('Testing for fixed tests', () => {
    expect(duplicateEncode('din')).toBe('(((');
    expect(duplicateEncode('recede')).toBe('()()()');
    expect(duplicateEncode('Success')).toBe(')())())');
    expect(duplicateEncode('(( @')).toBe('))((');
  });
});
