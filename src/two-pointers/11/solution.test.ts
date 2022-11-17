import maxArea from './solution';

describe('maxArea', () => {
  it('should return the maximum amount of water a container can store', () => {
    const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

    const result = maxArea(height);

    expect(result).toBe(49);
  });

  it('should return the maximum amount of water a container can store', () => {
    const height = [1, 1];

    const result = maxArea(height);

    expect(result).toBe(1);
  });
});
