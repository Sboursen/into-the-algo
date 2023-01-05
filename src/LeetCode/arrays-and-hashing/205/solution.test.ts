import isIsomorphic from './solution';

describe('isIsomorphic', () => {
  it('should return true if the two strings are isomorphic', () => {
    const s = 'add';
    const t = 'too';

    const result = isIsomorphic(s, t);

    expect(result).toBeTruthy();
  });

  it('should return false if the two strings are not isomorphic', () => {
    const s = 'add';
    const t = 'two';

    const result = isIsomorphic(s, t);

    expect(result).toBeFalsy();
  });
});
