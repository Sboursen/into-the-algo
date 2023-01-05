import majorityElement from './solution';

describe('majorityElement', () => {
  it('should return the element that appears more than n//2 times', () => {
    const nums = [2, 7, 2, 15];

    const result = majorityElement(nums);

    expect(result).toBe(2);
  });
  it('should return the element that appears more than n//2 times', () => {
    const nums = [2, 2, 1, 1, 1, 2, 2];

    const result = majorityElement(nums);

    expect(result).toBe(2);
  });
  it('should return the element that appears more than n//2 times', () => {
    const nums = [5];

    const result = majorityElement(nums);

    expect(result).toBe(5);
  });
});
