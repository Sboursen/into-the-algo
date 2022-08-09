import maxSubArraySum from './solution';

describe('maxSubArraySum', () => {
  it('should return the largest sum', () => {
    const array = [-1, 2, 4, -3, 5, 2, -5, 2];

    const result = maxSubArraySum(array);

    expect(result).toBe(10);
  });
});
