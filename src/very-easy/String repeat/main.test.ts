import { repeatStr } from './main';

describe('Tests', () => {
  it('Basic tests', () => {
    expect(repeatStr(3, '*')).toEqual('***');
    expect(repeatStr(5, '#')).toEqual('#####');
    expect(repeatStr(2, 'ha ')).toEqual('ha ha ');
  });
});
