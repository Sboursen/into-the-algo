import nextPermutation from './solution';

describe('nextPermutation', () => {
  it('should return the next permutation of the array', () => {
    const numbers = [1, 2, 3];
    const expected = [1, 3, 2];

    const result = nextPermutation(numbers);

    expect(result).toEqual(expected);
  });

  it('should return the next permutation of the array', () => {
    const numbers = [1, 1, 5];
    const expected = [1, 5, 1];

    const result = nextPermutation(numbers);

    expect(result).toEqual(expected);
  });

  it('should return the next permutation of the array', () => {
    const numbers = [3, 2, 1];

    const result = nextPermutation(numbers);

    expect(result).toEqual([1, 2, 3]);
  });
});
