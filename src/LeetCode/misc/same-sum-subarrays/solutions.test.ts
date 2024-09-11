import sameSumSubarray from './solution';

describe('sameSumSubarray', () => {
  it('should return two subarrays with same sum', () => {
    const nums = [1, 2, 3, 4];

    const result = sameSumSubarray(nums);

    expect(result).toBe('1,4,2,3');
  });

  it('should return two subarrays with same sum', () => {
    const nums = [16, 22, 35, 8, 20, 1, 21, 11];

    const result = sameSumSubarray(nums);

    expect(result).toBe('1,11,20,35,8,16,21,22');
  });
});
