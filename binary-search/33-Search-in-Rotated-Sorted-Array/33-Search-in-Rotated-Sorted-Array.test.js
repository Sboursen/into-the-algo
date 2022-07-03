import search, {
  findIndexOfMaxUsingBS,
  findIndexUsingBS,
} from './33-Search-in-Rotated-Sorted-Array';

describe('findIndexUsingBS', () => {
  it('return -1 with empty arrays', () => {
    const arr = [];
    const target = 2;

    const index = findIndexUsingBS(arr, target);

    expect(index).toBe(-1);
  });

  it('returns the correct index if target is found example 1', () => {
    const arr = [1, 2, 3, 5, 10];
    const target = 3;

    const index = findIndexUsingBS(arr, target);

    expect(index).toBe(2);
  });

  it('returns the correct index if target is found example 2', () => {
    const arr = [1, 2, 3, 5, 10];
    const target = 1;

    const index = findIndexUsingBS(arr, target);

    expect(index).toBe(0);
  });
});
