import groupAnagrams from './solution';

describe('groupAnagrams', () => {
  it(
    'should group the words that are anagram of each other together',
    () => {
      const input = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
      const expected = [['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']];

      const result = groupAnagrams(input);

      expect(result).toEqual(expected);
    },
  );

  it.skip(
    'should return an array with a single array element if given an empty one string',
    () => {
      const input = [''];
      const expected = [['']];

      const result = groupAnagrams(input);

      expect(result).toEqual(expected);
    },
  );

  it.skip(
    'should return an array with a single array element if given an empty one word',
    () => {
      const input = ['eat'];
      const expected = [['eat']];

      const result = groupAnagrams(input);

      expect(result).toEqual(expected);
    },
  );
});
