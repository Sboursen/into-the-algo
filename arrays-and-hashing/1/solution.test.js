import twoSum from './solution';

describe('twoSum', () => {
  it(
    'should return the indexes of the numbers making the sum',
    () => {
      const nums = [2, 7, 11, 15];
      const target = 9;

      const result = twoSum(nums, target);

      expect(result).toEqual([0, 1]);
    },
  );
  it(
    'should return the indexes of the numbers making the sum',
    () => {
      const nums = [3, 3];
      const target = 6;

      const result = twoSum(nums, target);

      expect(result).toEqual([0, 1]);
    },
  );
  it(
    'should return the indexes of the numbers making the sum',
    () => {
      const nums = [1, 7, 12, 13];
      const target = 20;

      const result = twoSum(nums, target);

      expect(result).toEqual([1, 3]);
    },
  );
});
