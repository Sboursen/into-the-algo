import sortedSquares from './solution';

describe('sortedSquares', () => {
  it(
    'should return an array of the squares of each number sorted in non-decreasing order',
    () => {
      const nums = [1, 2, 6, 10];
      const expected = [1, 4, 36, 100];

      const result = sortedSquares(nums);

      expect(result).toEqual(expected);
    },
  );

  it(
    'should return an array of the squares of each number sorted in non-decreasing order',
    () => {
      const nums = [-6, -4, 0, 2, 3, 5];
      const expected = [0, 4, 9, 16, 25, 36];

      const result = sortedSquares(nums);

      expect(result).toEqual(expected);
    },
  );

  it(
    'should return an array of the squares of each number sorted in non-decreasing order',
    () => {
      const nums = [-4, -4, 0, 4, 4, 5];
      const expected = [0, 16, 16, 16, 16, 25];

      const result = sortedSquares(nums);

      expect(result).toEqual(expected);
    },
  );
});
