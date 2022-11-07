import subsets from './solution';

describe('subsets', () => {
  const preprocessResult = (result: number[][]): void => {
    result.sort((a, b) => {
      if (a.length !== b.length) return a.length - b.length;
      return a.toString().localeCompare(b.toString());
    });

    result.forEach((set) => set.sort((a, b) => a - b));
  };
  it('should return all possible subsets ', () => {
    const nums = [1, 2, 3];
    const expected = [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]];

    const result = subsets(nums);
    preprocessResult(result);

    expect(JSON.stringify(result)).toBe(JSON.stringify(expected));
  });

  it('should return all possible subsets ', () => {
    const nums = [0];
    const expected = [[], [0]];

    const result = subsets(nums);
    preprocessResult(result);

    result.forEach((set, index) => expect(set).toEqual(expected[index]));
  });
});
