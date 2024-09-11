import combine from './solution';

describe('combine', () => {
  const preprocess = (result: number[][]): void => {
    result.sort((a, b) => {
      if (a.length !== b.length) return a.length - b.length;
      return a.toString().localeCompare(b.toString());
    });

    result.forEach((set) => set.sort((a, b) => a - b));
  };

  it('should return all possible combinations of length k', () => {
    const n = 4;
    const k = 2;
    const expected = [
      [1, 2],
      [1, 3],
      [1, 4],
      [2, 3],
      [2, 4],
      [3, 4],
    ];

    const result = combine(n, k);
    preprocess(result);
    preprocess(expected);

    expect(JSON.stringify(result)).toBe(JSON.stringify(expected));
  });

  it('should return all possible combinations of length k', () => {
    const n = 1;
    const k = 1;
    const expected = [[1]];

    const result = combine(n, k);
    expect(JSON.stringify(result)).toBe(JSON.stringify(expected));
  });
});
