import { evenOrOdd } from './main';

describe('Sample tests', () => {
  it('2 is even', () => {
    expect(evenOrOdd(2)).toBe('Even');
  });
  it('7 is odd', () => {
    expect(evenOrOdd(7)).toBe('Odd');
  });
  it('-42 is even', () => {
    expect(evenOrOdd(-42)).toBe('Even');
  });
  it('-7 is odd', () => {
    expect(evenOrOdd(-7)).toBe('Odd');
  });
  it('0 is even', () => {
    expect(evenOrOdd(0)).toBe('Even');
  });
});
