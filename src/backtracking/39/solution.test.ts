import combinationSum from './solution';

describe('combinationSum', () => {
  const preprocess = (result: number[][]): void => {
    result.sort((a, b) => {
      if (a.length !== b.length) return a.length - b.length;
      return a.toString().localeCompare(b.toString());
    });

    result.forEach((set) => set.sort((a, b) => a - b));
  };

  it('should return all possible combinations that sum up to the target', () => {
    const nums = [2, 3, 6, 7];
    const target = 7;
    const expected = [[2, 2, 3], [7]];

    const result = combinationSum(nums, target);
    preprocess(result);
    preprocess(expected);

    expect(JSON.stringify(result)).toBe(JSON.stringify(expected));
  });

  it('should return all possible combinations that sum up to the target', () => {
    const nums = [2, 3, 5];
    const target = 8;
    const expected = [
      [2, 2, 2, 2],
      [2, 3, 3],
      [3, 5],
    ];

    const result = combinationSum(nums, target);
    preprocess(result);
    preprocess(expected);

    expect(JSON.stringify(result)).toBe(JSON.stringify(expected));
  });

  it('should return all possible combinations that sum up to the target', () => {
    const nums = [2];
    const target = 1;
    const expected: number[][] = [];

    const result = combinationSum(nums, target);
    preprocess(result);
    preprocess(expected);

    expect(JSON.stringify(result)).toBe(JSON.stringify(expected));
  });
});
