import lengthOfLastWord from './solution';

describe('lengthOfLastWord', () => {
  it('should return the length of the last word in the string s', () => {
    const s = 'Hello World';

    const result = lengthOfLastWord(s);

    expect(result).toBe(5);
  });

  it('should return the length of the last word in the string s', () => {
    const s = 'a';

    const result = lengthOfLastWord(s);

    expect(result).toBe(1);
  });

  it('should return the length of the last word in the string s', () => {
    const s = '   fly me   to   the moon  ';

    const result = lengthOfLastWord(s);

    expect(result).toBe(4);
  });
});
