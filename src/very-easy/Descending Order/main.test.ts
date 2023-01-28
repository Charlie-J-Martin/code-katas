import { descendingOrder } from './main';

describe('Basic tests', () => {
  test('Testing for fixed tests', () => {
    expect(descendingOrder(0)).toBe(0);
    expect(descendingOrder(1)).toBe(1);
    expect(descendingOrder(111)).toBe(111);
    expect(descendingOrder(15)).toBe(51);
    expect(descendingOrder(1021)).toBe(2110);
    expect(descendingOrder(123456789)).toBe(987654321);
  });
});
