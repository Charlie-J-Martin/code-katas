import { spinWords } from './main';

describe('Spinning words', () => {
  it('Sample tests', () => {
    expect(spinWords('Welcome')).toBe('emocleW');
    expect(spinWords('Hey fellow warriors')).toBe('Hey wollef sroirraw');
    expect(spinWords('This is a test')).toBe('This is a test');
    expect(spinWords('This is another test')).toBe('This is rehtona test');
    expect(spinWords('You are almost to the last test')).toBe(
      'You are tsomla to the last test'
    );
    expect(spinWords('Just kidding there is still one more')).toBe(
      'Just gniddik ereht is llits one more'
    );
    expect(spinWords('Seriously this is the last one')).toBe(
      'ylsuoireS this is the last one'
    );
  });
});
