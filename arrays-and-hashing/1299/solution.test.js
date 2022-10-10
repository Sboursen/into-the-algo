import replaceElements from './solution';

describe('replaceElements', () => {
  it('should return the correct array', () => {
    const array = [17, 18, 5, 4, 6, 1];

    const result = replaceElements(array);

    expect(result).toEqual([18, 6, 6, 6, 1, -1]);
  });

  it('should return the correct array for input that contain 1 element', () => {
    const array = [111];

    const result = replaceElements(array);

    expect(result).toEqual([-1]);
  });
});
