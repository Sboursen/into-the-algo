import plusOne from './solution';

describe('plusOne', () => {
  it('should increment the large integer by 1', () => {
    const digits = [9];
    const expected = [1, 0];

    const result = plusOne(digits);

    expect(result).toEqual(expected);
  });
  it('should increment the large integer by 1', () => {
    const digits = [2, 7, 8, 9];
    const expected = [2, 7, 9, 0];

    const result = plusOne(digits);

    expect(result).toEqual(expected);
  });
  it('should increment the large integer by 1', () => {
    const digits = [1, 4, 9, 0];
    const expected = [1, 4, 9, 1];

    const result = plusOne(digits);

    expect(result).toEqual(expected);
  });
});
