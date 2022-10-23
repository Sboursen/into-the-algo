import isSubsequence from './solution';

describe('replaceElements', () => {
  it('should return true if s is a subsequence of t', () => {
    const s = 'abc';
    const t = 'fagdb23c4';

    const result = isSubsequence(s, t);

    expect(result).toBeTruthy();
  });

  it('should return false if s is not a subsequence of t', () => {
    const s = 'abc';
    const t = 'fagdc23b4';

    const result = isSubsequence(s, t);

    expect(result).toBeFalsy();
  });
});
