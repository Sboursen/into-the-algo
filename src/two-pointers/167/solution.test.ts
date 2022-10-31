import twoSum from './solution';

describe('twoSum', () => {
  it('should return the indices of the two numbers that make up the sum added by one', () => {
    const numbers = [2, 7, 11, 15];
    const target = 9;

    const result = twoSum(numbers, target);

    expect(result).toEqual([1, 2]);
  });

  it('should return the indices of the two numbers that make up the sum added by one', () => {
    const numbers = [2, 3, 4];
    const target = 6;

    const result = twoSum(numbers, target);

    expect(result).toEqual([1, 3]);
  });

  it('should return the indices of the two numbers that make up the sum added by one', () => {
    const numbers = [-1, 0];
    const target = -1;

    const result = twoSum(numbers, target);

    expect(result).toEqual([1, 2]);
  });
});
