import subsetsWithDup from './solution';

describe('subsetsWithDup', () => {
  const preprocessResult = (result: number[][]): void => {
    result.sort((a, b) => {
      if (a.length !== b.length) return a.length - b.length;
      return a.toString().localeCompare(b.toString());
    });

    result.forEach((set) => set.sort((a, b) => a - b));
  };
  it('should return all possible unique subsets ', () => {
    const nums = [1, 2, 2];
    const expected = [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]];

    const result = subsetsWithDup(nums);

    preprocessResult(expected);
    preprocessResult(result);
    expect(JSON.stringify(result)).toBe(JSON.stringify(expected));
  });

  it('should return all possible unique subsets ', () => {
    const nums = [0];
    const expected = [[], [0]];

    const result = subsetsWithDup(nums);

    preprocessResult(expected);
    preprocessResult(result);
    result.forEach((set, index) => expect(set).toEqual(expected[index]));
  });
});
