import removeElement from './solution';

describe('removeElement', () => {
  it(
    'should remove all occurrences of val in nums in-place',
    () => {
      const nums = [3, 2, 2, 3];
      const val = 3;
      const expected = [2, 2];
      const k = 2;

      const result = removeElement(nums, val);

      expect(result).toEqual(k);
      expect(nums.slice(0, k)).toEqual(expect.arrayContaining(expected.slice(0, k)));
    },
  );

  it(
    'should remove all occurrences of val in nums in-place',
    () => {
      const nums = [3, 2, 2, 4, 3, 6];
      const val = 2;
      const expected = [3, 3, 4, 6];
      const k = 4;

      const result = removeElement(nums, val);

      expect(result).toEqual(k);
      expect(nums.slice(0, k)).toEqual(expect.arrayContaining(expected.slice(0, k)));
    },
  );
});
