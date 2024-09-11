import maxSubArraySum from './solution';

describe('maxSubArraySum', () => {
  it('should return the largest sum', () => {
    const array = [-1, 2, 4, -3, 5, 2, -5, 2];

    const result = maxSubArraySum(array);

    expect(result).toBe(10);
  });

  it('should return the largest sum for arrays with a single value', () => {
    const array = [1];

    const result = maxSubArraySum(array);

    expect(result).toBe(1);
  });

  it('should return the largest sum for arrays with a single value', () => {
    const array = [5,4,-1,7,8];

    const result = maxSubArraySum(array);

    expect(result).toBe(23);
  });
});
