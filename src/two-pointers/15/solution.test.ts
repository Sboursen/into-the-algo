import threeSum from './solution';

describe('threeSum', () => {
  it('should return an array of distinct triplets that sum up to zero', () => {
    const numbers = [-1, 0, 1, 2, -1, -4];

    const result = threeSum(numbers);

    expect(result).toEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
  });

  it('should return an array of distinct triplets that sum up to zero', () => {
    const numbers = [0, 1, 1];

    const result = threeSum(numbers);

    expect(result).toEqual([]);
  });

  it('should return an array of distinct triplets that sum up to zero', () => {
    const numbers = [0, 0, 0];

    const result = threeSum(numbers);

    expect(result).toEqual([[0, 0, 0]]);
  });
});
