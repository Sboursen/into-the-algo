import sum from './sum';

describe('sum', () => {
  it('works with empty arrays', () => {
    const arr = [];

    const sumArr = sum(arr);

    expect(sumArr).toBe(0);
  });

  it('works 2 numbers', () => {
    const arr = [2, 4];

    const sumArr = sum(arr);

    expect(sumArr).toBe(6);
  });

  it('works with more numbers', () => {
    const arr = [3, 5, 7];

    const sumArr = sum(arr);

    expect(sumArr).toBe(15);
  });

});
