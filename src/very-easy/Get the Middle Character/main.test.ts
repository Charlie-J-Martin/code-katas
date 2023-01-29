import { getMiddle } from './main';

describe('GetMiddle', () => {
  it('should return the middle characters of a string', () => {
    expect(getMiddle('test')).toBe('es');
    expect(getMiddle('testing')).toBe('t');
    expect(getMiddle('middle')).toBe('dd');
    expect(getMiddle('A')).toBe('A');
  });
});
