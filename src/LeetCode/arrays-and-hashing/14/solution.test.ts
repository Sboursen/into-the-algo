import longestCommonPrefix from './solution';

describe('longestCommonPrefix', () => {
  it(
    'should return the longest common prefix',
    () => {
      const strs = ['flower', 'flow', 'flight'];

      const result = longestCommonPrefix(strs);

      expect(result).toEqual('fl');
    },
  );
  it(
    'should return an empty string if there is no common prefix',
    () => {
      const strs = ['mother', 'father', 'uncle'];

      const result = longestCommonPrefix(strs);

      expect(result).toEqual('');
    },
  );
});
