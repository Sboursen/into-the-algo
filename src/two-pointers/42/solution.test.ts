import trap from './solution';

describe('trap', () => {
  it('should return the amount of water it can be trapt after raining', () => {
    const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

    const result = trap(height);

    expect(result).toBe(6);
  });

  it('should return the amount of water it can be trapt after raining', () => {
    const height = [4, 2, 0, 3, 2, 5];

    const result = trap(height);

    expect(result).toBe(9);
  });
});
