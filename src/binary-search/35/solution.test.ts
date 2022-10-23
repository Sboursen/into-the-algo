import search from './solution';

describe('search', () => {
  it(
    'should return the index of the target element in the array',
    () => {
      const nums = [3, 6, 2, 1];
      const target = 3;

      const result = search(nums, target);

      expect(result).toBe(0);
    },
  );

  it(
    'should return the insertion index if target is not in the array',
    () => {
      const nums = [3, 2, 2, 1];
      const target = 10;

      const result = search(nums, target);

      expect(result).toBe(4);
    },
  );

  it(
    'should return the insertion index if target is not in the array',
    () => {
      const nums = [1, 3, 5, 6];
      const target = 2;

      const result = search(nums, target);

      expect(result).toBe(1);
    },
  );
});
