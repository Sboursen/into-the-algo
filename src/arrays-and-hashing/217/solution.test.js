import containsDuplicate from './solution';

describe('containsDuplicate', () => {
  it('should return true if any value appears at least twice in the array', () => {
    const input = [1, 2, 3, 1];
    const expected = true;

    const result = containsDuplicate(input);

    expect(result).toBe(expected);
  });

  it('should return true if any value appears at least twice in the array', () => {
    const input = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
    const expected = true;

    const result = containsDuplicate(input);

    expect(result).toBe(expected);
  });

  it('should return return false if every element is distinct', () => {
    const input = [1, 2, 3, 4];
    const expected = false;

    const result = containsDuplicate(input);

    expect(result).toBe(expected);
  });
});
